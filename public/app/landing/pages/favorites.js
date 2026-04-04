// Route: /favorites
// Component symbol: ate
// Source lines: 50347-50517

const ate = () => {
    const {
      user: t,
      loading: e
    } = js(), {
      data: n,
      isLoading: r,
      error: s
    } = AJ(), i = fs(), [o, l] = x.useState(null), [c, d] = x.useState(!1), u = f => {
      l(f.tools), d(!0)
    };
    return e ? a.jsx("div", {
      className: "flex items-center justify-center min-h-[60vh]",
      children: a.jsx(kd, {
        className: "w-8 h-8 animate-spin text-primary"
      })
    }) : t ? r ? a.jsx("div", {
      className: "flex items-center justify-center min-h-[60vh]",
      children: a.jsx(kd, {
        className: "w-8 h-8 animate-spin text-primary"
      })
    }) : s ? a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "My Favorites - AI Verse",
        description: "Manage your favorite AI tools in one place",
        keywords: ["favorites", "saved tools", "ai tools collection"]
      }), a.jsxs("div", {
        className: "flex flex-col items-center justify-center min-h-[60vh] px-4",
        children: [a.jsx(Xi, {
          className: "w-16 h-16 text-destructive mb-4"
        }), a.jsx("h2", {
          className: "text-2xl font-bold mb-2",
          children: "Error loading favorites"
        }), a.jsx("p", {
          className: "text-muted-foreground text-center mb-6 max-w-md",
          children: s instanceof Error ? s.message : "Failed to load your favorites"
        }), a.jsxs(ue, {
          onClick: () => i("/"),
          children: [a.jsx(Hn, {
            className: "w-4 h-4 mr-2"
          }), "Go to Home"]
        })]
      })]
    }) : !n || n.length === 0 ? a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "My Favorites - AI Verse",
        description: "Manage your favorite AI tools in one place",
        keywords: ["favorites", "saved tools", "ai tools collection"]
      }), a.jsxs("div", {
        className: "flex flex-col items-center justify-center min-h-[60vh] px-4",
        children: [a.jsx(Xi, {
          className: "w-16 h-16 text-muted-foreground mb-4"
        }), a.jsx("h2", {
          className: "text-2xl font-bold mb-2",
          children: "No favorites yet"
        }), a.jsx("p", {
          className: "text-muted-foreground text-center mb-6 max-w-md",
          children: "Start building your collection by clicking the heart icon on tools you love"
        }), a.jsxs(ue, {
          onClick: () => i("/"),
          children: [a.jsx(Hn, {
            className: "w-4 h-4 mr-2"
          }), "Discover Tools"]
        })]
      })]
    }) : a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "My Favorites - AI Verse",
        description: "Manage your favorite AI tools in one place",
        keywords: ["favorites", "saved tools", "ai tools collection"]
      }), a.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [a.jsxs("div", {
          className: "mb-8",
          children: [a.jsx("h1", {
            className: "text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
            children: "My Favorites"
          }), a.jsxs("p", {
            className: "text-muted-foreground mt-2",
            children: [n.length, " ", n.length === 1 ? "tool" : "tools", " saved"]
          })]
        }), a.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: n.map(f => a.jsx(I1, {
            tool: f.tools,
            onClick: u
          }, f.tool_id))
        })]
      }), a.jsx(z1, {
        tool: o,
        isOpen: c,
        onClose: () => d(!1)
      })]
    }) : a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "My Favorites - AI Verse",
        description: "Manage your favorite AI tools in one place",
        keywords: ["favorites", "saved tools", "ai tools collection"]
      }), a.jsxs("div", {
        className: "flex flex-col items-center justify-center min-h-[60vh] px-4",
        children: [a.jsx(Xi, {
          className: "w-16 h-16 text-muted-foreground mb-4"
        }), a.jsx("h2", {
          className: "text-2xl font-bold mb-2",
          children: "Sign in to view favorites"
        }), a.jsx("p", {
          className: "text-muted-foreground text-center mb-6 max-w-md",
          children: "Create an account to save and manage your favorite AI tools"
        }), a.jsxs(ue, {
          onClick: () => i("/"),
          children: [a.jsx(Hn, {
            className: "w-4 h-4 mr-2"
          }), "Go to Home"]
        })]
      })]
    })
  },
  ote = t => Fn({
    queryKey: ["tool", t],
    queryFn: async () => {
      if (!t) return null;
      console.log("[useToolBySlug] Searching for slug:", t);
      const {
        data: e,
        error: n
      } = await Rt.from("tools").select(`
          *,
          tool_categories(
            category_id,
            relevance_score,
            is_primary,
            categories!fk_tool_categories_category_id(*)
          ),
          tutorials!fk_tutorials_tool_id(*)
        `).eq("slug", t).maybeSingle();
      if (console.log("[useToolBySlug] Slug query result:", {
          slugData: e,
          slugError: n
        }), n && console.error("[useToolBySlug] Slug query error:", n), !n && e) {
        const o = {
          ...e,
          categories: e.tool_categories || []
        };
        return console.log("[useToolBySlug] Returning transformed data:", o), o
      }
      console.log("[useToolBySlug] Slug not found, trying name search");
      const r = t.replace(/-/g, " "),
        {
          data: s,
          error: i
        } = await Rt.from("tools").select(`
          *,
          tool_categories(
            category_id,
            relevance_score,
            is_primary,
            categories!fk_tool_categories_category_id(*)
          ),
          tutorials!fk_tutorials_tool_id(*)
        `).ilike("name", r).maybeSingle();
      if (console.log("[useToolBySlug] Name query result:", {
          nameData: s,
          nameError: i
        }), i) throw console.error("[useToolBySlug] Name query error:", i), i;
      return s ? {
        ...s,
        categories: s.tool_categories || []
      } : null
    },
    enabled: !!t
  });
