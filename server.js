const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);
const host = "127.0.0.1";

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

  if (pathname === "/~api/analytics") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (pathname === "/tools" || pathname === "/tools/") {
    sendFile(res, path.join(rootDir, "tools.html"));
    return;
  }

  const requestedPath = path.join(rootDir, pathname);
  const safePath = path.normalize(requestedPath);

  if (!safePath.startsWith(rootDir)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(safePath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(res, safePath);
      return;
    }

    if (path.extname(pathname)) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    sendFile(res, path.join(rootDir, "index.html"));
  });
});

server.listen(port, host, () => {
  console.log(`Replica server running at http://${host}:${port}`);
});
