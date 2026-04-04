from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
PUBLIC_APP = ROOT / "public" / "app"


def ensure_frontend_structure_present() -> None:
    required_files = [
        PUBLIC_APP / "landing/styles/main.css",
        PUBLIC_APP / "landing/runtime/core.js",
        PUBLIC_APP / "landing/runtime/bootstrap.js",
        PUBLIC_APP / "landing/runtime/loader.js",
        PUBLIC_APP / "landing/pages/landing.js",
        PUBLIC_APP / "routes/tools/index.html",
        PUBLIC_APP / "routes/prompts/index.html",
        PUBLIC_APP / "routes/chat/index.html",
        PUBLIC_APP / "styles/tools.css",
        PUBLIC_APP / "styles/prompts.css",
        PUBLIC_APP / "styles/chat.css",
        PUBLIC_APP / "styles/shared-theme.css",
        PUBLIC_APP / "scripts/tools.js",
        PUBLIC_APP / "scripts/prompts.js",
        PUBLIC_APP / "scripts/chat.js",
        PUBLIC_APP / "runtime/custom-routes.js",
        PUBLIC_APP / "runtime/custom-routes.css",
        PUBLIC_APP / "runtime/header-tools-link.js",
    ]

    missing = [path for path in required_files if not path.exists()]
    if missing:
        missing_list = "\n".join(f"- {path.relative_to(ROOT)}" for path in missing)
        raise RuntimeError(
            "The modular frontend source tree is incomplete.\n"
            "The following files are missing:\n"
            f"{missing_list}"
        )


def main() -> None:
    ensure_frontend_structure_present()
    print(f"Frontend source tree looks good in {PUBLIC_APP}")


if __name__ == "__main__":
    main()
