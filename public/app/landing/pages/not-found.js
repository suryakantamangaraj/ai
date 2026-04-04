// Route: *
// Component symbol: tte
// Source lines: 49634-49716

const tte = () => {
    const t = fs(),
      e = [{
        name: "Home",
        path: "/",
        icon: iw,
        description: "Explore AI tools"
      }, {
        name: "Compare Tools",
        path: "/compare",
        icon: HB,
        description: "Find the best AI tools"
      }, {
        name: "Weekly AI",
        path: "/weekly",
        icon: dc,
        description: "Latest AI news"
      }, {
        name: "The Lab",
        path: "/lab",
        icon: Hn,
        description: "Organize your toolkit"
      }];
    return a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "Page Not Found - AI Verse",
        description: "The page you're looking for doesn't exist. Explore our collection of AI tools instead.",
        noindex: !0
      }), a.jsxs("div", {
        className: "flex flex-col items-center justify-center min-h-screen px-4 py-16",
        children: [a.jsxs("div", {
          className: "relative mb-8",
          children: [a.jsx("h1", {
            className: "text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse",
            children: "404"
          }), a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 animate-pulse"
          })]
        }), a.jsxs("div", {
          className: "text-center mb-12 max-w-md",
          children: [a.jsx("h2", {
            className: "text-3xl font-bold mb-4",
            children: "Page Not Found"
          }), a.jsx("p", {
            className: "text-muted-foreground",
            children: "The page you're looking for doesn't exist or has been moved. Let's get you back on track!"
          })]
        }), a.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-2xl",
          children: e.map(n => {
            const r = n.icon;
            return a.jsxs("button", {
              onClick: () => t(n.path),
              className: "group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-left",
              children: [a.jsx(r, {
                className: "w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform"
              }), a.jsx("h3", {
                className: "font-semibold mb-1",
                children: n.name
              }), a.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: n.description
              })]
            }, n.path)
          })
        }), a.jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4",
          children: [a.jsx(ue, {
            onClick: () => t(-1),
            variant: "outline",
            size: "lg",
            children: "Go Back"
          }), a.jsxs(ue, {
            onClick: () => t("/"),
            size: "lg",
            children: [a.jsx(iw, {
              className: "w-4 h-4 mr-2"
            }), "Back to Home"]
          })]
        })]
      })]
    })
  };
