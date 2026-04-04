// Route: /
// Component symbol: ete
// Source lines: 49438-49633

const ete = () => {
    const {
      data: t,
      isLoading: e,
      error: n
    } = bm(), {
        data: r
      } = Sm(), [s, i] = x.useState(null), [o, l] = x.useState(!1), [c, d] = x.useState(Kee), u = sa(), f = b => {
        i(b), l(!0)
      }, h = () => {
        l(!1), i(null)
      }, m = Zee(t || [], c), y = c.categories.length + c.priceRanges.length + c.ratings.length + c.features.length + c
      .userBase.length + (c.trending ? 1 : 0) + (c.search && c.search.trim() ? 1 : 0), v = b => {
        const S = c.categories.includes(b) ? c.categories.filter(E => E !== b) : [...c.categories, b];
        d({
          ...c,
          categories: S
        })
      }, g = ["AI tools", "artificial intelligence", "AI software", "machine learning tools", "AI platforms",
        "chatbots", "AI automation", "business AI", "AI directory", "AI comparison", "best AI tools 2024", ...(r ==
          null ? void 0 : r.map(b => `${b.name.toLowerCase()} AI tools`)) || [], ...(m == null ? void 0 : m.slice(0, 10)
          .map(b => b.name.toLowerCase())) || []
      ], p = (t == null ? void 0 : t.length) || 0, _ =
      `AI Verse - Expert-Curated AI Tools Directory | ${p}+ Tools Reviewed by 600+ AI Experts`, w =
      `Find the perfect AI tools with expert recommendations. Search through ${p}+ manually curated AI platforms, updated daily by Adam Next and 600+ AI experts. Get personalized AI-powered suggestions for your exact needs.`;
    return a.jsxs(tx, {
      children: [a.jsx(ws, {
        title: _,
        description: w,
        keywords: g,
        canonicalUrl: "https://aiverse.com/",
        ogImage: "https://aiverse.com/ai-verse-og-image.jpg",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "AI Verse",
          description: w,
          url: "https://aiverse.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://aiverse.com?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      }), a.jsx(sh, {
        type: "website"
      }), a.jsx(sh, {
        type: "toolList",
        tools: m
      }), a.jsx(sh, {
        type: "organization"
      }), a.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-background to-background-secondary",
        children: [a.jsx(Jee, {}), a.jsx(MJ, {
          onToolClick: f
        }), a.jsxs("section", {
          className: "relative z-10 px-4 sm:px-6 lg:px-8 pb-20",
          children: [a.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [a.jsx("div", {
              className: "text-center mb-10",
              children: a.jsx("h2", {
                className: `font-bold text-foreground mb-6 ${u?"text-2xl":"text-3xl"}`,
                children: "Discover AI Tools"
              })
            }), a.jsx(xee, {
              selectedCategories: c.categories,
              onCategoryToggle: v
            }), a.jsx(Qee, {
              filters: c,
              onFiltersChange: d,
              activeFiltersCount: y
            }), a.jsx("div", {
              className: "text-center mb-8",
              children: a.jsx("div", {
                className: "mb-4",
                children: a.jsxs("p", {
                  className: "text-sm text-muted-foreground",
                  children: [m.length, " ", m.length === 1 ? "tool" : "tools",
                    " found"
                  ]
                })
              })
            })]
          }), a.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: a.jsx("div", {
              className: `grid gap-6 ${u?"grid-cols-1 sm:grid-cols-2":"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`,
              children: e ? Array.from({
                length: 6
              }).map((b, S) => a.jsx("div", {
                className: "space-y-4",
                children: a.jsx(Ls, {
                  className: "h-64 w-full rounded-lg"
                })
              }, S)) : n ? a.jsx("div", {
                className: "col-span-full text-center py-12",
                children: a.jsx("p", {
                  className: "text-muted-foreground",
                  children: "Failed to load tools. Please try again later."
                })
              }) : m && m.length > 0 ? m.map(b => a.jsx(I1, {
                tool: b,
                onClick: f
              }, b.id)) : a.jsx("div", {
                className: "col-span-full text-center py-12",
                children: a.jsx("p", {
                  className: "text-muted-foreground",
                  children: "No tools found."
                })
              })
            })
          }), a.jsxs("div", {
            className: "max-w-4xl mx-auto mt-24 px-4",
            children: [a.jsxs("div", {
              className: "text-center mb-12",
              children: [a.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-aiverse-primary via-aiverse-accent to-aiverse-primary bg-clip-text text-transparent",
                children: "How AI Verse Works"
              }), a.jsx("div", {
                className: "w-20 h-1 bg-gradient-to-r from-aiverse-primary to-aiverse-accent mx-auto rounded-full"
              })]
            }), a.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8 mb-16",
              children: [a.jsxs("div", {
                className: "text-center space-y-3",
                children: [a.jsx("div", {
                  className: "w-16 h-16 bg-gradient-to-br from-aiverse-primary/20 to-aiverse-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4",
                  children: a.jsx("span", {
                    className: "text-3xl font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                    children: "1"
                  })
                }), a.jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "Expert Curation"
                }), a.jsx("p", {
                  className: "text-muted-foreground",
                  children: "Every AI tool is manually reviewed and tested by Adam Next and a community of 600+ AI experts from the AI Builders Skool"
                })]
              }), a.jsxs("div", {
                className: "text-center space-y-3",
                children: [a.jsx("div", {
                  className: "w-16 h-16 bg-gradient-to-br from-aiverse-primary/20 to-aiverse-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4",
                  children: a.jsx("span", {
                    className: "text-3xl font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                    children: "2"
                  })
                }), a.jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "AI-Powered Search"
                }), a.jsx("p", {
                  className: "text-muted-foreground",
                  children: "Describe what you want to create, and our AI filters through the expert-curated database to recommend the perfect tools"
                })]
              }), a.jsxs("div", {
                className: "text-center space-y-3",
                children: [a.jsx("div", {
                  className: "w-16 h-16 bg-gradient-to-br from-aiverse-primary/20 to-aiverse-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4",
                  children: a.jsx("span", {
                    className: "text-3xl font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                    children: "3"
                  })
                }), a.jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "Daily Updates"
                }), a.jsx("p", {
                  className: "text-muted-foreground",
                  children: "Our database is updated daily with new tools, features, and pricing to ensure you always have the latest information"
                })]
              })]
            }), a.jsx("div", {
              className: "bg-gradient-to-r from-aiverse-primary/10 via-background to-aiverse-accent/10 rounded-2xl p-8 border border-aiverse-primary/20",
              children: a.jsxs("p", {
                className: "text-center text-lg text-muted-foreground leading-relaxed",
                children: [
                  "Unlike generic AI tool directories that scrape data automatically, AI Verse combines ",
                  a.jsx("strong", {
                    className: "text-foreground",
                    children: "expert human curation"
                  }), " with ", a.jsx("strong", {
                    className: "text-foreground",
                    children: "AI-powered recommendations"
                  }),
                  ". This means you get accurate, up-to-date information filtered through the experience of real AI practitioners who use these tools daily."
                ]
              })
            })]
          })]
        }), a.jsx(z1, {
          tool: s,
          isOpen: o,
          onClose: h
        })]
      })]
    })
  };
