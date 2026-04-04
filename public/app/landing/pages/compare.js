// Route: /compare
// Component symbol: Loe
// Source lines: 69699-69913

const Loe = () => {
    fs();
    const [t, e] = x.useState([null, null]), [n, r] = x.useState(!1), [s, i] = x.useState([!1, !1]), [o, l] = x
      .useState(""), c = sa(), {
        toast: d
      } = ji(), u = (p, _) => {
        const b = t[_ === 0 ? 1 : 0];
        if (b && b.id === p.id) {
          d({
            title: "Duplicate Selection",
            description: "Please select two different tools to compare.",
            variant: "destructive"
          });
          return
        }
        const S = [...t];
        S[_] = p, e(S)
      }, f = p => {
        const _ = [...t];
        _[p] = null, e(_), n && r(!1)
      }, h = t[0] && t[1] && t[0].id !== t[1].id, m = () => {
        h && r(!0)
      }, y = () => {
        r(!1)
      }, v = p => {
        const _ = [...s];
        _[p] = !0, i(_)
      }, g = p => {
        const _ = [...s];
        _[p] = !1, i(_)
      };
    return a.jsxs("div", {
      className: "min-h-screen bg-background relative overflow-hidden",
      children: [a.jsxs("div", {
        className: "floating-particles",
        children: [a.jsx("div", {
          className: "particle particle-1"
        }), a.jsx("div", {
          className: "particle particle-2"
        }), a.jsx("div", {
          className: "particle particle-3"
        }), a.jsx("div", {
          className: "particle particle-4"
        }), a.jsx("div", {
          className: "particle particle-5"
        }), a.jsx("div", {
          className: "particle particle-6"
        }), a.jsx("div", {
          className: "particle particle-7"
        }), a.jsx("div", {
          className: "particle particle-8"
        })]
      }), a.jsx("section", {
        className: "relative z-10 py-20 px-4 text-center",
        children: a.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [a.jsx("h1", {
            className: "text-6xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent logo-glow",
            children: "AI Tool Comparison"
          }), a.jsx("p", {
            className: "text-xl text-muted-foreground mb-4 leading-relaxed",
            children: "Compare AI tools side-by-side with expert analysis powered by artificial intelligence"
          }), a.jsx("p", {
            className: "text-base text-muted-foreground/80 max-w-2xl mx-auto",
            children: "Get detailed comparisons of features, pricing, and use cases to find the perfect AI software for your business needs"
          })]
        })
      }), a.jsx("main", {
        className: `relative z-10 container mx-auto px-4 pb-8 ${c?"px-4":"px-6"}`,
        children: n ? a.jsxs("div", {
          className: "space-y-6 animate-fade-in",
          children: [a.jsxs(ue, {
            onClick: y,
            variant: "outline",
            className: "mb-4",
            children: [a.jsx(cc, {
              className: "w-4 h-4 mr-2"
            }), "Back to Selection"]
          }), a.jsx(Ioe, {
            tool1: t[0],
            tool2: t[1],
            userGoal: o || void 0
          })]
        }) : a.jsxs("div", {
          className: "space-y-10",
          children: [a.jsx("div", {
            className: `grid gap-8 max-w-6xl mx-auto ${c?"grid-cols-1":"md:grid-cols-2"}`,
            children: [0, 1].map(p => a.jsxs("div", {
              className: "relative",
              children: [p === 1 && !c && a.jsx("div", {
                className: "absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
                style: {
                  marginLeft: "-1rem"
                },
                children: a.jsx("div", {
                  className: "w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg",
                  children: a.jsx("span", {
                    className: "text-white font-bold text-sm",
                    children: "VS"
                  })
                })
              }), a.jsx("div", {
                onClick: () => v(p),
                children: a.jsx(Poe, {
                  selectedTool: t[p],
                  onRemoveTool: () => f(p),
                  placeholder: `${p===0?"First":"Second"} AI Tool`
                })
              }), a.jsx(koe, {
                isOpen: s[p],
                onClose: () => g(p),
                onToolSelect: _ => u(_, p),
                excludedTool: t[p === 0 ? 1 : 0]
              })]
            }, p))
          }), h && a.jsxs("div", {
            className: "text-center space-y-4",
            children: [a.jsx(je, {
              className: "max-w-2xl mx-auto",
              children: a.jsxs(Ve, {
                className: "pt-6",
                children: [a.jsx("label", {
                  className: "text-sm font-medium mb-2 block text-left",
                  children: "Add context (optional)"
                }), a.jsx(mn, {
                  placeholder: "Describe your specific use case or goals to get a more tailored comparison (e.g., 'I need a tool for content creation with a small team budget')",
                  value: o,
                  onChange: p => l(p.target.value),
                  className: "min-h-[100px]"
                })]
              })
            }), a.jsxs(ue, {
              onClick: m,
              size: c ? "default" : "lg",
              className: `bg-primary hover:bg-primary/90 text-white transition-all duration-200 ${c?"px-8 py-3":"px-10 py-3"}`,
              children: [a.jsx(Hn, {
                className: `mr-2 ${c?"w-4 h-4":"w-5 h-5"}`
              }), "Compare Tools"]
            })]
          })]
        })
      })]
    })
  },
  Ooe = ({
    episode: t,
    onClick: e
  }) => {
    const n = r => {
      const s = Math.floor(r / 60),
        i = r % 60;
      return `${s}:${i.toString().padStart(2,"0")}`
    };
    return a.jsx(je, {
      className: "group cursor-pointer hover:shadow-lg transition-all duration-300",
      onClick: () => e(t),
      children: a.jsxs(Ve, {
        className: "p-0",
        children: [a.jsxs("div", {
          className: "relative overflow-hidden rounded-t-lg",
          children: [t.thumbnail_url ? a.jsx("img", {
            src: t.thumbnail_url,
            alt: `Week ${t.week_number} - ${t.title}`,
            className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          }) : a.jsx("div", {
            className: "w-full h-48 bg-muted flex items-center justify-center",
            children: a.jsx(Ki, {
              className: "h-12 w-12 text-muted-foreground"
            })
          }), a.jsx("div", {
            className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
            children: a.jsx("div", {
              className: "bg-white/90 rounded-full p-3",
              children: a.jsx(Ki, {
                className: "h-6 w-6 text-primary"
              })
            })
          }), t.duration && a.jsxs(tt, {
            variant: "secondary",
            className: "absolute bottom-2 right-2 bg-black/70 text-white border-0",
            children: [a.jsx($v, {
              className: "h-3 w-3 mr-1"
            }), n(t.duration)]
          })]
        }), a.jsxs("div", {
          className: "p-4",
          children: [a.jsxs("div", {
            className: "flex items-center gap-2 mb-2",
            children: [a.jsxs(tt, {
              variant: "outline",
              className: "text-xs",
              children: ["Week ", t.week_number]
            }), a.jsx("span", {
              className: "text-xs text-muted-foreground",
              children: t.year
            })]
          }), a.jsx("h3", {
            className: "font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors",
            children: t.title
          }), t.description && a.jsx("p", {
            className: "text-sm text-muted-foreground line-clamp-3",
            children: t.description
          }), a.jsx("p", {
            className: "text-xs text-muted-foreground mt-2",
            children: new Date(t.publish_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          })]
        })]
      })
    })
  };
