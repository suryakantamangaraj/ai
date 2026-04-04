// Route: /adams-list
// Component symbol: Roe
// Source lines: 69030-69698

const Roe = () => {
    const {
      data: t,
      isLoading: e
    } = Uae(), [n, r] = x.useState(""), s = (t == null ? void 0 : t.filter(i => i.title.toLowerCase().includes(n
      .toLowerCase())).sort((i, o) => i.title.localeCompare(o.title))) || [];
    return e ? a.jsxs("div", {
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
      }), a.jsx("div", {
        className: "relative z-10 container mx-auto px-6 py-8",
        children: a.jsxs("div", {
          className: "animate-pulse",
          children: [a.jsx("div", {
            className: "h-8 bg-muted rounded mb-4 w-48"
          }), a.jsx("div", {
            className: "h-64 bg-muted rounded-lg mb-8"
          }), a.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [...Array(6)].map((i, o) => a.jsx("div", {
              className: "h-72 bg-muted rounded-lg"
            }, o))
          })]
        })
      })]
    }) : a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "Adam's List - Expert AI Tool Guides and Reviews",
        description: "Discover comprehensive, SEO-optimized guides featuring the best AI tools, curated by Adam. Each guide includes detailed reviews, rankings, and expert insights.",
        keywords: ["AI tools", "AI guide", "tool reviews", "Adam's recommendations", "best AI tools",
          "AI comparison"
        ]
      }), a.jsxs("div", {
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
          className: "relative z-10 py-12 sm:py-16 md:py-20 px-4 text-center",
          children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsx("h1", {
              className: "text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent logo-glow",
              children: "Adam's List"
            }), a.jsx("p", {
              className: "text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4",
              children: "Expert-curated AI tool guides with detailed reviews, rankings, and insights"
            })]
          })
        }), a.jsxs("main", {
          className: "relative z-10 container mx-auto px-4 sm:px-6 pb-8",
          children: [a.jsx(je, {
            className: "mb-6 sm:mb-8",
            children: a.jsx(Ve, {
              className: "pt-4 sm:pt-6 px-4 sm:px-6",
              children: a.jsxs("div", {
                className: "relative w-full sm:max-w-md sm:mx-auto",
                children: [a.jsx(ds, {
                  className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                }), a.jsx(Ie, {
                  placeholder: "Search guides...",
                  value: n,
                  onChange: i => r(i.target.value),
                  className: "pl-10 h-11 sm:h-10"
                })]
              })
            })
          }), a.jsx("div", {
            className: "space-y-3 sm:space-y-4 max-w-4xl mx-auto",
            children: s.length > 0 ? s.map(i => a.jsx(je, {
              className: "hover:shadow-lg transition-shadow",
              children: a.jsx(qt, {
                className: "pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6",
                children: a.jsxs("div", {
                  className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4",
                  children: [a.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [a.jsx(Yt, {
                      className: "text-lg sm:text-xl hover:text-primary transition-colors break-words",
                      children: a.jsx(Ba, {
                        to: `/adams-list/${i.slug}`,
                        children: i.title
                      })
                    }), i.meta_description && a.jsx("p", {
                      className: "text-muted-foreground mt-2 text-sm sm:text-base line-clamp-2",
                      children: i.meta_description
                    })]
                  }), a.jsx(ue, {
                    variant: "outline",
                    size: "sm",
                    className: "w-full sm:w-auto shrink-0 h-11 sm:h-9",
                    asChild: !0,
                    children: a.jsxs(Ba, {
                      to: `/adams-list/${i.slug}`,
                      children: ["Read Guide", a.jsx(Jl, {
                        className: "w-4 h-4 ml-1"
                      })]
                    })
                  })]
                })
              })
            }, i.id)) : t && t.length === 0 ? a.jsx(je, {
              children: a.jsxs(Ve, {
                className: "text-center py-12 sm:py-16 px-4",
                children: [a.jsx(Hv, {
                  className: "w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4 sm:mb-6"
                }), a.jsx("h3", {
                  className: "text-lg sm:text-xl font-semibold mb-2",
                  children: "Coming Soon"
                }), a.jsx("p", {
                  className: "text-muted-foreground text-sm sm:text-base",
                  children: "Adam is working on comprehensive guides for the best AI tools. Check back soon!"
                })]
              })
            }) : a.jsx(je, {
              children: a.jsxs(Ve, {
                className: "text-center py-10 sm:py-12 px-4",
                children: [a.jsx(ds, {
                  className: "w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-3 sm:mb-4"
                }), a.jsx("p", {
                  className: "text-muted-foreground text-sm sm:text-base",
                  children: "No guides found matching your search."
                })]
              })
            })
          })]
        })]
      })]
    })
  },
  Poe = ({
    selectedTool: t,
    onRemoveTool: e,
    placeholder: n
  }) => {
    const r = sa();
    return t ? a.jsxs(je, {
      className: "relative bg-card border hover:border-primary/50 transition-all duration-200",
      children: [a.jsx(ue, {
        onClick: e,
        variant: "ghost",
        size: "sm",
        className: "absolute top-2 right-2 hover:bg-destructive/20 hover:text-destructive w-8 h-8 p-0",
        children: a.jsx(qn, {
          className: "w-4 h-4"
        })
      }), a.jsx(Ve, {
        className: r ? "p-4 pr-12" : "p-6 pr-12",
        children: a.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [a.jsx("div", {
            className: "flex-shrink-0",
            children: t.logo_url ? a.jsx("img", {
              src: t.logo_url,
              alt: t.name,
              className: `rounded-lg object-cover ${r?"w-10 h-10":"w-12 h-12"}`
            }) : a.jsx("div", {
              className: `rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-semibold ${r?"w-10 h-10 text-sm":"w-12 h-12 text-base"}`,
              children: t.name.charAt(0)
            })
          }), a.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [a.jsx("h3", {
              className: `font-semibold text-foreground ${r?"text-sm":"text-base"}`,
              children: t.name
            }), a.jsx("p", {
              className: `text-muted-foreground line-clamp-1 ${r?"text-xs":"text-sm"}`,
              children: t.description.length > 60 ? t.description.substring(0, 60) + "..." : t
                .description
            })]
          })]
        })
      })]
    }) : a.jsx(je, {
      className: "cursor-pointer bg-card/30 backdrop-blur-sm border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-all duration-300 group",
      children: a.jsx(Ve, {
        className: r ? "p-8" : "p-12",
        children: a.jsxs("div", {
          className: "text-center",
          children: [a.jsx("div", {
            className: "w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors",
            children: a.jsx(Lr, {
              className: "w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors"
            })
          }), a.jsx("h3", {
            className: `font-medium text-muted-foreground group-hover:text-foreground transition-colors ${r?"text-base":"text-lg"}`,
            children: n
          }), a.jsx("p", {
            className: `text-muted-foreground mt-2 ${r?"text-sm":"text-base"}`,
            children: "Click to browse and select a tool"
          })]
        })
      })
    })
  },
  koe = ({
    isOpen: t,
    onClose: e,
    onToolSelect: n,
    excludedTool: r
  }) => {
    const [s, i] = x.useState(""), {
      data: o = [],
      isLoading: l
    } = bm(), c = o.filter(u => {
      const f = u.name.toLowerCase().includes(s.toLowerCase()) || u.description.toLowerCase().includes(s
          .toLowerCase()),
        h = !r || u.id !== r.id;
      return f && h
    }), d = u => {
      n(u), e(), i("")
    };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "max-w-4xl max-h-[80vh]",
        children: [a.jsx(Xn, {
          children: a.jsx(Kn, {
            children: "Select Tool"
          })
        }), a.jsxs("div", {
          className: "space-y-4",
          children: [a.jsxs("div", {
            className: "relative",
            children: [a.jsx(ds, {
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
            }), a.jsx(Ie, {
              placeholder: "Search tools...",
              value: s,
              onChange: u => i(u.target.value),
              className: "pl-10"
            })]
          }), a.jsx(Oh, {
            className: "h-[400px]",
            children: a.jsx("div", {
              className: "space-y-2 p-1",
              children: l ? a.jsx("div", {
                className: "text-center py-8 text-muted-foreground",
                children: "Loading tools..."
              }) : c.length === 0 ? a.jsxs("div", {
                className: "text-center py-8 text-muted-foreground",
                children: ['No tools found matching "', s, '"']
              }) : c.map(u => a.jsx(je, {
                className: "cursor-pointer hover:bg-muted/50 transition-colors",
                onClick: () => d(u),
                children: a.jsx(Ve, {
                  className: "p-4",
                  children: a.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [u.logo_url ? a.jsx("img", {
                      src: u.logo_url,
                      alt: u.name,
                      className: "w-12 h-12 rounded-lg object-cover bg-muted flex-shrink-0"
                    }) : a.jsx("div", {
                      className: "w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-semibold flex-shrink-0",
                      children: u.name.charAt(0)
                    }), a.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [a.jsx("h4", {
                        className: "font-medium text-foreground",
                        children: u.name
                      }), a.jsx("p", {
                        className: "text-sm text-muted-foreground line-clamp-1",
                        children: u.description
                      })]
                    })]
                  })
                })
              }, u.id))
            })
          })]
        })]
      })
    })
  },
  Doe = (t, e, n) => {
    const [r, s] = x.useState(!1), [i, o] = x.useState(0), {
      data: l,
      isLoading: c,
      error: d,
      refetch: u
    } = Fn({
      queryKey: ["tool-comparison", t == null ? void 0 : t.id, e == null ? void 0 : e.id, n, i],
      queryFn: async () => {
        if (!t || !e) throw new Error("Both tools are required");
        const {
          data: m,
          error: y
        } = await Rt.functions.invoke("compare-tools-ai", {
          body: {
            tool1: t,
            tool2: e,
            userGoal: (n == null ? void 0 : n.trim()) || null
          }
        });
        if (y) throw new Error(y.message || "Failed to get AI comparison");
        return m
      },
      enabled: r && !!t && !!e,
      staleTime: 1e3 * 60 * 60,
      retry: (m, y) => {
        var v, g, p;
        return (v = y.message) != null && v.includes("rate limit") || (g = y.message) != null && g.includes(
          "429") || (p = y.message) != null && p.includes("Premium") ? !1 : m < 2
      }
    }), f = () => {
      s(!0)
    }, h = () => {
      o(m => m + 1), u()
    };
    return {
      analysis: l == null ? void 0 : l.analysis,
      isLoading: c,
      error: (d == null ? void 0 : d.message) || (l == null ? void 0 : l.error),
      errorType: l == null ? void 0 : l.errorType,
      isFallback: l == null ? void 0 : l.fallback,
      startComparison: f,
      refetch: u,
      manualRetry: h,
      canRetry: !c && (d || (l == null ? void 0 : l.error)) && (l == null ? void 0 : l.errorType) !== "credits",
      hasPremium: !1
    }
  },
  Ioe = ({
    tool1: t,
    tool2: e,
    userGoal: n
  }) => {
    const {
      analysis: r,
      isLoading: s,
      error: i,
      errorType: o,
      isFallback: l,
      startComparison: c,
      manualRetry: d,
      canRetry: u
    } = Doe(t, e, n), [f, h] = x.useState(!1), [m, y] = x.useState(null), [v, g] = x.useState(!1), p = sa();
    Z.useEffect(() => {
      c()
    }, []);
    const _ = () => {
        if (s) return a.jsx(je, {
          className: "mb-6 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20",
          children: a.jsxs(Ve, {
            className: "p-8 text-center",
            children: [a.jsxs("div", {
              className: "flex items-center justify-center gap-3 mb-4",
              children: [a.jsx(kd, {
                className: "w-8 h-8 animate-spin text-primary"
              }), a.jsx("h2", {
                className: "text-xl font-bold",
                children: "Analyzing tools..."
              })]
            }), a.jsx("p", {
              className: "text-muted-foreground",
              children: "Getting AI recommendation for you"
            })]
          })
        });
        if (i && !l) return a.jsx(je, {
          className: "mb-6 border-muted",
          children: a.jsxs(Ve, {
            className: "p-6 text-center",
            children: [a.jsx("p", {
              className: "text-muted-foreground mb-4",
              children: o === "rate_limit" ? "AI analysis unavailable due to high demand" :
                "Unable to load AI analysis"
            }), u && a.jsxs(ue, {
              variant: "outline",
              onClick: d,
              size: "sm",
              children: [a.jsx(tm, {
                className: "w-4 h-4 mr-2"
              }), "Retry"]
            })]
          })
        });
        if (!(r != null && r.winner)) return null;
        const S = r.winner.tool === t.name ? t : e;
        return a.jsx(je, {
          className: "mb-6 bg-gradient-to-br from-primary/20 to-purple-500/20 border-primary/30",
          children: a.jsx(Ve, {
            className: `p-8 text-center ${p?"p-6":""}`,
            children: a.jsxs("div", {
              className: "flex flex-col items-center gap-4",
              children: [a.jsx("div", {
                className: "p-4 rounded-full bg-primary/20",
                children: a.jsx(US, {
                  className: "w-10 h-10 text-primary"
                })
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsxs("div", {
                  className: "flex items-center justify-center gap-3",
                  children: [S.logo_url && a.jsx("img", {
                    src: S.logo_url,
                    alt: S.name,
                    className: "w-8 h-8 rounded-lg"
                  }), a.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: r.winner.tool
                  })]
                }), a.jsx("p", {
                  className: "text-lg font-medium text-primary",
                  children: "Winner"
                })]
              }), a.jsx("p", {
                className: "text-muted-foreground max-w-md",
                children: r.winner.reason
              }), a.jsxs(ue, {
                size: "lg",
                onClick: () => window.open(S.website_url, "_blank"),
                className: "mt-2",
                children: [a.jsx(Jl, {
                  className: "w-4 h-4 mr-2"
                }), "Try ", S.name]
              })]
            })
          })
        })
      },
      w = () => {
        const S = E => {
          y(E), g(!0)
        };
        return a.jsx("div", {
          className: `grid gap-4 mb-6 ${p?"grid-cols-1":"grid-cols-2"}`,
          children: [t, e].map(E => a.jsx(I1, {
            tool: E,
            onClick: S
          }, E.id))
        })
      },
      b = () => {
        var S, E;
        return r != null && r.quickComparison ? a.jsxs(je, {
          className: "mb-6",
          children: [a.jsx(qt, {
            children: a.jsx(Yt, {
              className: "text-lg",
              children: "Key Differences"
            })
          }), a.jsx(Ve, {
            children: a.jsxs("div", {
              className: `grid gap-6 ${p?"grid-cols-1":"grid-cols-2"}`,
              children: [a.jsxs("div", {
                className: "space-y-3",
                children: [a.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [t.logo_url && a.jsx("img", {
                    src: t.logo_url,
                    alt: t.name,
                    className: "w-5 h-5 rounded"
                  }), a.jsx("h4", {
                    className: "font-medium",
                    children: t.name
                  })]
                }), a.jsx("ul", {
                  className: "space-y-2",
                  children: (S = r.quickComparison.tool1) == null ? void 0 : S.slice(0, 3)
                    .map((T, P) => a.jsxs("li", {
                      className: "text-sm flex items-start gap-2",
                      children: [a.jsx(Lr, {
                        className: "w-4 h-4 text-green-600 mt-0.5 shrink-0"
                      }), T]
                    }, P))
                })]
              }), a.jsxs("div", {
                className: "space-y-3",
                children: [a.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [e.logo_url && a.jsx("img", {
                    src: e.logo_url,
                    alt: e.name,
                    className: "w-5 h-5 rounded"
                  }), a.jsx("h4", {
                    className: "font-medium",
                    children: e.name
                  })]
                }), a.jsx("ul", {
                  className: "space-y-2",
                  children: (E = r.quickComparison.tool2) == null ? void 0 : E.slice(0, 3)
                    .map((T, P) => a.jsxs("li", {
                      className: "text-sm flex items-start gap-2",
                      children: [a.jsx(qn, {
                        className: "w-4 h-4 text-red-600 mt-0.5 shrink-0"
                      }), T]
                    }, P))
                })]
              })]
            })
          })]
        }) : null
      };
    return a.jsxs("div", {
      className: "space-y-0",
      children: [a.jsx(_, {}), a.jsx(b, {}), a.jsx(w, {}), a.jsx(je, {
        className: "mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30",
        children: a.jsxs(Ve, {
          className: `text-center ${p?"p-4":"p-6"}`,
          children: [a.jsx("h4", {
            className: `font-bold mb-2 ${p?"text-base":"text-lg"}`,
            children: "Get AI-Powered Comparison Analysis"
          }), a.jsx("p", {
            className: `text-muted-foreground mb-4 ${p?"text-sm":""}`,
            children: "Let AI analyze which tool is best for your specific use case in The Lab"
          }), a.jsx(ue, {
            onClick: () => window.location.href = "/lab",
            className: `bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white ${p?"w-full":""}`,
            children: "Try Advanced Comparison in The Lab →"
          })]
        })
      }), a.jsxs(Rb, {
        open: f,
        onOpenChange: h,
        children: [a.jsx(LF, {
          asChild: !0,
          children: a.jsx(je, {
            className: "cursor-pointer hover:shadow-md transition-shadow",
            children: a.jsx(Ve, {
              className: "p-4",
              children: a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsx("span", {
                  className: "font-medium",
                  children: "More Details"
                }), f ? a.jsx(WR, {
                  className: "w-5 h-5"
                }) : a.jsx(Qh, {
                  className: "w-5 h-5"
                })]
              })
            })
          })
        }), a.jsx(OF, {
          children: a.jsx(je, {
            className: "mt-4",
            children: a.jsxs(Ve, {
              className: "p-6",
              children: [a.jsx("div", {
                className: `grid gap-8 ${p?"grid-cols-1":"grid-cols-2"}`,
                children: [t, e].map(S => a.jsxs("div", {
                  className: "space-y-4",
                  children: [a.jsxs("div", {
                    className: "flex items-center gap-2 pb-2 border-b",
                    children: [S.logo_url && a.jsx("img", {
                      src: S.logo_url,
                      alt: S.name,
                      className: "w-6 h-6 rounded"
                    }), a.jsx("h4", {
                      className: "font-semibold",
                      children: S.name
                    })]
                  }), S.rating && a.jsxs("div", {
                    className: "text-sm",
                    children: [a.jsx("span", {
                      className: "font-medium",
                      children: "Rating: "
                    }), a.jsxs("span", {
                      children: [S.rating, "/5"]
                    })]
                  }), S.long_description && a.jsx("div", {
                    className: "text-sm text-muted-foreground",
                    children: S.long_description
                  }), S.pros && S.pros.length > 0 && a.jsxs("div", {
                    children: [a.jsx("h5", {
                      className: "font-medium text-sm mb-2 text-green-600",
                      children: "Pros"
                    }), a.jsx("ul", {
                      className: "space-y-1 text-sm",
                      children: S.pros.map((E, T) => a.jsxs("li", {
                        children: ["• ", E]
                      }, T))
                    })]
                  }), S.cons && S.cons.length > 0 && a.jsxs("div", {
                    children: [a.jsx("h5", {
                      className: "font-medium text-sm mb-2 text-red-600",
                      children: "Cons"
                    }), a.jsx("ul", {
                      className: "space-y-1 text-sm",
                      children: S.cons.map((E, T) => a.jsxs("li", {
                        children: ["• ", E]
                      }, T))
                    })]
                  }), S.adams_take && a.jsxs("div", {
                    children: [a.jsx("h5", {
                      className: "font-medium text-sm mb-1",
                      children: "Adam's Take"
                    }), a.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: S.adams_take
                    })]
                  })]
                }, S.id))
              }), (r == null ? void 0 : r.detailedAnalysis) && a.jsxs("div", {
                className: "mt-8 pt-6 border-t space-y-4",
                children: [a.jsx("h4", {
                  className: "font-semibold",
                  children: "Detailed AI Analysis"
                }), r.detailedAnalysis.summary && a.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: r.detailedAnalysis.summary
                }), r.detailedAnalysis.bottomLine && a.jsxs("div", {
                  className: "p-4 rounded-lg bg-primary/5 border border-primary/20",
                  children: [a.jsx("h5", {
                    className: "font-medium mb-2",
                    children: "Bottom Line"
                  }), a.jsxs("p", {
                    className: "text-sm mb-2",
                    children: [a.jsx("span", {
                        className: "font-medium",
                        children: "Recommendation: "
                      }), r.detailedAnalysis.bottomLine
                      .overallRecommendation
                    ]
                  }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: r.detailedAnalysis.bottomLine.reasoning
                  })]
                })]
              })]
            })
          })
        })]
      }), m && a.jsx(z1, {
        tool: m,
        isOpen: v,
        onClose: () => {
          g(!1), y(null)
        }
      })]
    })
  };
