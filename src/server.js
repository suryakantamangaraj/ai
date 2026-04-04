const http = require("http");
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const configDir = path.join(projectRoot, "config");
const envPaths = [
  path.join(configDir, ".env"),
  path.join(projectRoot, ".env"),
];

function loadDotEnv(filePath) {
  if (!fs.existsSync(filePath)) return;

  const envFile = fs.readFileSync(filePath, "utf8");

  for (const rawLine of envFile.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, "");

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

envPaths.forEach(loadDotEnv);

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function sendFile(res, filePath, statusCode = 200) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    res.writeHead(statusCode, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);

  // The mirrored analytics script expects this endpoint to exist,
  // so we acknowledge requests without forwarding them anywhere.
  if (pathname === "/~api/analytics") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Retire removed sections instead of letting the mirrored SPA serve them.
  if (
    pathname === "/weekly" ||
    pathname === "/weekly/" ||
    pathname === "/adams-list" ||
    pathname === "/adams-list/" ||
    pathname.startsWith("/adams-list/")
  ) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return;
  }

  const requestedPath = path.join(publicDir, pathname);
  const safePath = path.normalize(requestedPath);

  if (!safePath.startsWith(publicDir)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(safePath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(res, safePath);
      return;
    }

    // Real asset misses should stay 404s; only extensionless routes
    // should fall back to the mirrored single-page app shell.
    if (path.extname(pathname)) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    sendFile(res, path.join(publicDir, "index.html"));
  });
});

server.listen(port, host, () => {
  console.log(`Replica server running at http://${host}:${port}`);
});
