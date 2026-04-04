// Route: /tools/:slug
// Component symbol: lte
// Source lines: 50518-54931

const lte = () => {
    var w;
    const {
      slug: t
    } = o1(), e = fs(), n = sa(), {
      user: r
    } = js(), {
      data: s,
      isLoading: i,
      error: o
    } = ote(t), {
      data: l
    } = k1(s == null ? void 0 : s.id), c = D1(), [d, u] = x.useState(!1);
    x.useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, [t]);
    const f = () => {
        if (!r) {
          u(!0);
          return
        }
        s && c.mutate({
          toolId: s.id,
          isFavorite: !!l
        })
      },
      h = b => !b || b === 0 ? "0" : b >= 1e6 ? `${(b/1e6).toFixed(1)}M` : b >= 1e3 ? `${(b/1e3).toFixed(1)}K` : b
      .toString();
    if (i) return a.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: a.jsx("div", {
        className: "animate-pulse text-muted-foreground",
        children: "Loading tool details..."
      })
    });
    if (!t || o || !s) return t ? a.jsxs("div", {
      className: "min-h-screen flex flex-col items-center justify-center gap-4 px-4",
      children: [a.jsx("h1", {
        className: "text-2xl font-bold",
        children: "Tool Not Found"
      }), a.jsx("p", {
        className: "text-muted-foreground text-center",
        children: "The AI tool you're looking for doesn't exist or has been removed."
      }), a.jsxs(ue, {
        onClick: () => e("/"),
        children: [a.jsx(cc, {
          className: "w-4 h-4 mr-2"
        }), "Back to Home"]
      })]
    }) : null;
    const m = Array.isArray(s.categories) ? s.categories : [],
      y = (w = m.find(b => b.is_primary)) == null ? void 0 : w.categories,
      v = m.map(b => b.categories).filter(Boolean),
      g = `${s.name} Review 2025 - Features, Pricing & Alternatives | AI Verse`,
      p = s.long_description ? `${s.long_description.slice(0,155)}...` :
      `Complete review of ${s.name}. Compare features, pricing, pros and cons. Find the best AI tools and alternatives for ${(y==null?void 0:y.name)||"your needs"}.`,
      _ = [`${s.name} review`, `${s.name} AI tool`, `${s.name} features`, `${s.name} pricing`, `${s.name} alternatives`,
        s.name, ...y ? [y.name, `${y.name} AI tools`] : [], "AI software comparison", "best AI tools 2025"
      ];
    return a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: g,
        description: p,
        keywords: _,
        canonicalUrl: `https://aiverse.com/tools/${t}`,
        ogImage: s.logo_url || "/ai-verse-og-image.jpg",
        ogType: "article",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: s.name,
          description: s.long_description || s.description,
          applicationCategory: "AI Software",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: s.price === "Free" ? "0" : void 0,
            priceCurrency: "USD"
          },
          aggregateRating: s.rating ? {
            "@type": "AggregateRating",
            ratingValue: s.rating,
            bestRating: "5",
            ratingCount: s.popularity || 1
          } : void 0,
          url: s.website_url || `https://aiverse.com/tools/${t}`,
          image: s.logo_url
        }
      }), a.jsx(sh, {
        type: "tool",
        tool: s
      }), a.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-background to-primary/5",
        children: a.jsxs("div", {
          className: "container mx-auto px-4 py-8 max-w-6xl",
          children: [a.jsxs(ue, {
            variant: "ghost",
            onClick: () => e("/"),
            className: "mb-6 hover:bg-primary/10",
            children: [a.jsx(cc, {
              className: "w-4 h-4 mr-2"
            }), "Back"]
          }), a.jsx(je, {
            className: "mb-8 overflow-hidden border-primary/20",
            children: a.jsxs(Ve, {
              className: de("relative", n ? "p-4" : "p-8"),
              children: [a.jsxs("div", {
                className: de("absolute flex gap-2 z-10", n ? "top-2 right-2" :
                  "top-4 right-4"),
                children: [s.is_verified && a.jsxs(es, {
                  children: [a.jsx(ts, {
                    asChild: !0,
                    children: a.jsx("div", {
                      className: de(
                        "rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 border-2 border-white/30 flex items-center justify-center shadow-lg",
                        n ? "w-6 h-6" : "w-8 h-8"),
                      children: a.jsx(dr, {
                        className: de("text-white", n ? "w-3 h-3" :
                          "w-4 h-4")
                      })
                    })
                  }), a.jsx(Or, {
                    children: "Verified Tool"
                  })]
                }), s.is_trending && a.jsxs(es, {
                  children: [a.jsx(ts, {
                    asChild: !0,
                    children: a.jsx("div", {
                      className: de(
                        "rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-2 border-white/30 flex items-center justify-center shadow-lg",
                        n ? "w-6 h-6" : "w-8 h-8"),
                      children: a.jsx(em, {
                        className: de("text-white animate-pulse", n ?
                          "w-3 h-3" : "w-4 h-4")
                      })
                    })
                  }), a.jsx(Or, {
                    children: "Trending Now"
                  })]
                }), s.adams_take && a.jsxs(es, {
                  children: [a.jsx(ts, {
                    asChild: !0,
                    children: a.jsx("div", {
                      className: de(
                        "rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 border-2 border-white/30 flex items-center justify-center shadow-lg",
                        n ? "w-6 h-6" : "w-8 h-8"),
                      children: a.jsx(Ei, {
                        className: de("text-white", n ? "w-3 h-3" :
                          "w-4 h-4")
                      })
                    })
                  }), a.jsx(Or, {
                    children: "Adam's Take"
                  })]
                }), s.tutorials && s.tutorials.length > 0 && a.jsxs(es, {
                  children: [a.jsx(ts, {
                    asChild: !0,
                    children: a.jsx("div", {
                      className: de(
                        "rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 border-2 border-white/30 flex items-center justify-center shadow-lg",
                        n ? "w-6 h-6" : "w-8 h-8"),
                      children: a.jsx(Ti, {
                        className: de("text-white", n ? "w-3 h-3" :
                          "w-4 h-4")
                      })
                    })
                  }), a.jsx(Or, {
                    children: "Has Tutorial"
                  })]
                })]
              }), a.jsxs("div", {
                className: de("flex gap-6", n && "flex-col items-center text-center"),
                children: [a.jsx("div", {
                  className: "flex-shrink-0",
                  children: a.jsx("div", {
                    className: de(
                      "rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center",
                      n ? "w-20 h-20" : "w-24 h-24"),
                    children: s.logo_url ? a.jsx("img", {
                      src: s.logo_url,
                      alt: `${s.name} logo`,
                      className: de("object-contain rounded-lg", n ?
                        "w-12 h-12" : "w-16 h-16")
                    }) : a.jsx("span", {
                      className: de("font-bold text-primary", n ?
                        "text-3xl" : "text-4xl"),
                      children: s.name.charAt(0)
                    })
                  })
                }), a.jsxs("div", {
                  className: "flex-1",
                  children: [a.jsx("div", {
                    className: de("flex items-start mb-3", n ?
                      "flex-col items-center gap-2" :
                      "justify-between gap-4"),
                    children: a.jsxs("div", {
                      className: de("w-full", n &&
                        "flex flex-col items-center"),
                      children: [a.jsxs("div", {
                        className: de(
                          "flex items-center gap-3 mb-2", n &&
                          "w-full justify-center"),
                        children: [a.jsx("h1", {
                          className: de("font-bold", n ?
                            "text-xl text-center" :
                            "text-3xl"),
                          children: s.name
                        }), !n && a.jsx("button", {
                          onClick: f,
                          className: "rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background smooth-transition hover:scale-110 p-2 flex items-center justify-center flex-shrink-0",
                          children: a.jsx(Xi, {
                            className: de(
                              "w-5 h-5 smooth-transition",
                              l ?
                              "fill-red-500 text-red-500" :
                              "text-muted-foreground hover:text-red-500"
                              )
                          })
                        })]
                      }), a.jsxs("div", {
                        className: de("flex items-center mb-2", n ?
                          "gap-1" : "gap-2"),
                        children: [a.jsx("div", {
                          className: "flex items-center gap-0.5",
                          children: [...Array(5)].map((b,
                            S) => a.jsx(nm, {
                              className: de(n ?
                                "w-3.5 h-3.5" :
                                "w-5 h-5"),
                              fill: S < s.rating ?
                                "hsl(var(--primary))" :
                                "transparent",
                              color: "hsl(var(--primary))"
                            }, S))
                        }), a.jsxs("span", {
                          className: de(
                            "text-muted-foreground", n ?
                            "text-xs" : "text-sm"),
                          children: [s.rating, "/5"]
                        })]
                      }), a.jsx("div", {
                        className: de("flex flex-wrap", n ?
                          "gap-1 justify-center max-w-[280px]" :
                          "gap-2 mb-2"),
                        children: v.map(b => a.jsx(tt, {
                          variant: "secondary",
                          className: de(
                            "bg-primary/10 text-primary border-primary/20 whitespace-nowrap font-normal",
                            n ?
                            "text-[10px] px-1.5 py-0 h-5" :
                            "text-xs px-2 py-0.5"),
                          children: b.name
                        }, b.id))
                      })]
                    })
                  }), a.jsx("p", {
                    className: de("text-muted-foreground", n ?
                      "text-sm mb-4" : "text-lg mb-4"),
                    children: s.description
                  }), a.jsxs("div", {
                    className: de("flex flex-col gap-3", n && "items-center"),
                    children: [a.jsxs("div", {
                      className: de("flex items-center flex-wrap", n ?
                        "gap-2 justify-center" : "gap-3"),
                      children: [a.jsx(tt, {
                        className: de(
                          "bg-primary/10 text-primary border-primary/20",
                          n ? "text-xs px-2 py-0.5" :
                          "text-sm px-2.5 py-1"),
                        children: s.price
                      }), a.jsxs("div", {
                        className: "flex items-center gap-1 text-muted-foreground",
                        children: [a.jsx(_r, {
                          className: de(n ? "w-3 h-3" :
                            "w-4 h-4")
                        }), a.jsxs("span", {
                          className: de(n ? "text-xs" :
                            "text-sm"),
                          children: [h(s.popularity),
                            " users"
                          ]
                        })]
                      }), n && a.jsx("button", {
                        onClick: f,
                        className: "rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background smooth-transition hover:scale-110 p-1.5 flex items-center justify-center",
                        children: a.jsx(Xi, {
                          className: de(
                            "w-4 h-4 smooth-transition", l ?
                            "fill-red-500 text-red-500" :
                            "text-muted-foreground hover:text-red-500"
                            )
                        })
                      })]
                    }), s.website_url && a.jsx(ue, {
                      asChild: !0,
                      size: n ? "default" : "lg",
                      className: de(
                        "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
                        n && "w-full"),
                      children: a.jsxs("a", {
                        href: s.website_url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: ["Visit ", s.name, a.jsx(Jl, {
                          className: de("ml-2", n ?
                            "w-3.5 h-3.5" : "w-4 h-4")
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })
          }), s.long_description && a.jsx(je, {
            className: "mb-8",
            children: a.jsxs(Ve, {
              className: de(n ? "p-6" : "p-8"),
              children: [a.jsxs("h2", {
                className: "text-2xl font-bold mb-4",
                children: ["About ", s.name]
              }), a.jsx("p", {
                className: "text-muted-foreground leading-relaxed whitespace-pre-line",
                children: s.long_description
              })]
            })
          }), (s.pros && s.pros.length > 0 || s.cons && s.cons.length > 0) && a.jsx(je, {
            className: "mb-8",
            children: a.jsxs(Ve, {
              className: de(n ? "p-6" : "p-8"),
              children: [a.jsx("h2", {
                className: "text-2xl font-bold mb-6",
                children: "Pros & Cons"
              }), a.jsxs("div", {
                className: de("grid gap-6", !n && "grid-cols-2"),
                children: [s.pros && s.pros.length > 0 && a.jsxs("div", {
                  children: [a.jsxs("h3", {
                    className: "text-lg font-semibold mb-3 flex items-center gap-2 text-green-600",
                    children: [a.jsx(dr, {
                      className: "w-5 h-5"
                    }), "Pros"]
                  }), a.jsx("ul", {
                    className: "space-y-2",
                    children: s.pros.map((b, S) => a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(dr, {
                        className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        className: "text-muted-foreground",
                        children: b
                      })]
                    }, S))
                  })]
                }), s.cons && s.cons.length > 0 && a.jsxs("div", {
                  children: [a.jsxs("h3", {
                    className: "text-lg font-semibold mb-3 flex items-center gap-2 text-red-600",
                    children: [a.jsx(qn, {
                      className: "w-5 h-5"
                    }), "Cons"]
                  }), a.jsx("ul", {
                    className: "space-y-2",
                    children: s.cons.map((b, S) => a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(qn, {
                        className: "w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        className: "text-muted-foreground",
                        children: b
                      })]
                    }, S))
                  })]
                })]
              })]
            })
          }), s.adams_take && a.jsx(je, {
            className: "mb-8 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent",
            children: a.jsxs(Ve, {
              className: de(n ? "p-6" : "p-8"),
              children: [a.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [a.jsx("div", {
                  className: "rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 w-10 h-10 flex items-center justify-center",
                  children: a.jsx(Ei, {
                    className: "w-5 h-5 text-white"
                  })
                }), a.jsx("h2", {
                  className: "text-2xl font-bold",
                  children: "Adam's Take"
                })]
              }), a.jsx("p", {
                className: "text-muted-foreground leading-relaxed whitespace-pre-line",
                children: s.adams_take
              })]
            })
          }), s.tutorials && s.tutorials.length > 0 && a.jsx(je, {
            className: "mb-8",
            children: a.jsxs(Ve, {
              className: de(n ? "p-6" : "p-8"),
              children: [a.jsxs("h2", {
                className: "text-2xl font-bold mb-6 flex items-center gap-2",
                children: [a.jsx(Ti, {
                  className: "w-6 h-6 text-emerald-600"
                }), "Video Tutorials"]
              }), a.jsx("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: s.tutorials.map(b => a.jsx(je, {
                  className: "hover:border-primary/30 transition-colors",
                  children: a.jsxs(Ve, {
                    className: "p-4",
                    children: [a.jsx("h3", {
                      className: "font-semibold mb-2",
                      children: b.title
                    }), b.description && a.jsx("p", {
                      className: "text-sm text-muted-foreground mb-3",
                      children: b.description
                    }), a.jsx(ue, {
                      asChild: !0,
                      variant: "outline",
                      size: "sm",
                      className: "w-full",
                      children: a.jsxs("a", {
                        href: b.video_url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: ["Watch Tutorial", a.jsx(Jl, {
                          className: "w-3 h-3 ml-2"
                        })]
                      })
                    })]
                  })
                }, b.id))
              })]
            })
          }), a.jsx(je, {
            className: "bg-gradient-to-br from-primary/10 via-background to-primary/5 border-primary/20",
            children: a.jsxs(Ve, {
              className: de("text-center", n ? "p-6" : "p-8"),
              children: [a.jsxs("h2", {
                className: "text-2xl font-bold mb-3",
                children: ["Ready to try ", s.name, "?"]
              }), a.jsxs("p", {
                className: "text-muted-foreground mb-6 max-w-2xl mx-auto",
                children: ["Join thousands of users who are already using ", s.name,
                  " to enhance their AI workflow. Get started today and discover why it's one of the top-rated AI tools."
                ]
              }), a.jsxs("div", {
                className: "flex flex-wrap gap-4 justify-center",
                children: [s.website_url && a.jsx(ue, {
                  asChild: !0,
                  size: "lg",
                  className: "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
                  children: a.jsxs("a", {
                    href: s.website_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: ["Get Started with ", s.name, a.jsx(Jl, {
                      className: "w-4 h-4 ml-2"
                    })]
                  })
                }), a.jsx(ue, {
                  asChild: !0,
                  variant: "outline",
                  size: "lg",
                  children: a.jsxs(Ba, {
                    to: "/",
                    children: ["Explore More AI Tools", a.jsx(Jh, {
                      className: "w-4 h-4 ml-2"
                    })]
                  })
                })]
              })]
            })
          })]
        })
      }), a.jsx(gm, {
        isOpen: d,
        onClose: () => u(!1)
      })]
    })
  },
  ha = ({
    children: t
  }) => {
    const {
      isAdmin: e,
      isLoading: n,
      logout: r
    } = Uu(), s = dl();
    if (n) return a.jsx("div", {
      className: "min-h-screen flex items-center justify-center",
      children: a.jsx("div", {
        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
      })
    });
    if (!e) return a.jsx(TH, {
      to: "/admin/login",
      replace: !0
    });
    const i = [{
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: ZB
      }, {
        name: "Tools",
        href: "/admin/tools",
        icon: az
      }, {
        name: "Categories",
        href: "/admin/categories",
        icon: sg
      }, {
        name: "Blog Posts",
        href: "/admin/blog-posts",
        icon: US
      }, {
        name: "Weekly AI",
        href: "/admin/weekly",
        icon: Ti
      }, {
        name: "Users",
        href: "/admin/users",
        icon: _r
      }, {
        name: "Settings",
        href: "/admin/settings",
        icon: BS
      }],
      o = () => {
        r(), window.location.href = "/"
      };
    return a.jsxs("div", {
      className: "min-h-screen bg-background flex",
      children: [a.jsxs("div", {
        className: "w-64 bg-card border-r border-border",
        children: [a.jsxs("div", {
          className: "p-6",
          children: [a.jsx("h1", {
            className: "text-2xl font-bold text-foreground",
            children: "Admin Panel"
          }), a.jsx("p", {
            className: "text-sm text-muted-foreground mt-1",
            children: "AI Tools Directory"
          })]
        }), a.jsxs("nav", {
          className: "px-4 pb-4",
          children: [a.jsx("div", {
            className: "space-y-1",
            children: i.map(l => {
              const c = l.icon,
                d = s.pathname === l.href;
              return a.jsxs(Ba, {
                to: l.href,
                className: de(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  d ? "bg-primary text-primary-foreground" :
                  "text-muted-foreground hover:text-foreground hover:bg-accent"),
                children: [a.jsx(c, {
                  className: "mr-3 h-4 w-4 flex-shrink-0"
                }), l.name]
              }, l.name)
            })
          }), a.jsxs("div", {
            className: "mt-6 pt-6 border-t border-border space-y-1",
            children: [a.jsxs(Ba, {
              to: "/",
              className: "flex items-center px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
              children: [a.jsx(iw, {
                className: "mr-3 h-4 w-4 flex-shrink-0"
              }), "Back to Site"]
            }), a.jsxs(ue, {
              variant: "ghost",
              size: "sm",
              onClick: o,
              className: "w-full justify-start px-3 py-2 h-auto font-medium text-muted-foreground hover:text-foreground",
              children: [a.jsx(ow, {
                className: "mr-3 h-4 w-4 flex-shrink-0"
              }), "Logout"]
            })]
          })]
        })]
      }), a.jsx("div", {
        className: "flex-1 flex flex-col",
        children: a.jsx("main", {
          className: "flex-1 p-6",
          children: t
        })
      })]
    })
  };

function yt(t) {
  const e = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new t.constructor(+t) : typeof t ==
    "number" || e === "[object Number]" || typeof t == "string" || e === "[object String]" ? new Date(t) : new Date(NaN)
}

function us(t, e) {
  return t instanceof Date ? new t.constructor(e) : new Date(e)
}

function Pr(t, e) {
  const n = yt(t);
  return isNaN(e) ? us(t, NaN) : (e && n.setDate(n.getDate() + e), n)
}

function Zs(t, e) {
  const n = yt(t);
  if (isNaN(e)) return us(t, NaN);
  if (!e) return n;
  const r = n.getDate(),
    s = us(t, n.getTime());
  s.setMonth(n.getMonth() + e + 1, 0);
  const i = s.getDate();
  return r >= i ? s : (n.setFullYear(s.getFullYear(), s.getMonth(), r), n)
}
const G1 = 6048e5,
  cte = 864e5,
  zp = 43200,
  FM = 1440;
let dte = {};

function Yu() {
  return dte
}

function Mi(t, e) {
  var l, c, d, u;
  const n = Yu(),
    r = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (l = e == null ? void 0 : e.locale) == null ? void 0 : l
      .options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d
      .options) == null ? void 0 : u.weekStartsOn) ?? 0,
    s = yt(t),
    i = s.getDay(),
    o = (i < r ? 7 : 0) + i - r;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s
}

function xc(t) {
  return Mi(t, {
    weekStartsOn: 1
  })
}

function IO(t) {
  const e = yt(t),
    n = e.getFullYear(),
    r = us(t, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const s = xc(r),
    i = us(t, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const o = xc(i);
  return e.getTime() >= s.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1
}

function yc(t) {
  const e = yt(t);
  return e.setHours(0, 0, 0, 0), e
}

function vu(t) {
  const e = yt(t),
    n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e
      .getMilliseconds()));
  return n.setUTCFullYear(e.getFullYear()), +t - +n
}

function Wi(t, e) {
  const n = yc(t),
    r = yc(e),
    s = +n - vu(n),
    i = +r - vu(r);
  return Math.round((s - i) / cte)
}

function ute(t) {
  const e = IO(t),
    n = us(t, 0);
  return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), xc(n)
}

function gb(t, e) {
  const n = e * 7;
  return Pr(t, n)
}

function fte(t, e) {
  return Zs(t, e * 12)
}

function hte(t) {
  let e;
  return t.forEach(function (n) {
    const r = yt(n);
    (e === void 0 || e < r || isNaN(Number(r))) && (e = r)
  }), e || new Date(NaN)
}

function mte(t) {
  let e;
  return t.forEach(n => {
    const r = yt(n);
    (!e || e > r || isNaN(+r)) && (e = r)
  }), e || new Date(NaN)
}

function ug(t, e) {
  const n = yt(t),
    r = yt(e),
    s = n.getTime() - r.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s
}

function pte(t) {
  return us(t, Date.now())
}

function ns(t, e) {
  const n = yc(t),
    r = yc(e);
  return +n == +r
}

function q1(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]"
}

function gte(t) {
  if (!q1(t) && typeof t != "number") return !1;
  const e = yt(t);
  return !isNaN(Number(e))
}

function xu(t, e) {
  const n = yt(t),
    r = yt(e),
    s = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return s * 12 + i
}

function vte(t, e, n) {
  const r = Mi(t, n),
    s = Mi(e, n),
    i = +r - vu(r),
    o = +s - vu(s);
  return Math.round((i - o) / G1)
}

function xte(t) {
  return e => {
    const r = (t ? Math[t] : Math.trunc)(e);
    return r === 0 ? 0 : r
  }
}

function yte(t, e) {
  return +yt(t) - +yt(e)
}

function fg(t) {
  const e = yt(t);
  return e.setHours(23, 59, 59, 999), e
}

function Ax(t) {
  const e = yt(t),
    n = e.getMonth();
  return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e
}

function _te(t) {
  const e = yt(t);
  return +fg(e) == +Ax(e)
}

function wte(t, e) {
  const n = yt(t),
    r = yt(e),
    s = ug(n, r),
    i = Math.abs(xu(n, r));
  let o;
  if (i < 1) o = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - s * i);
    let l = ug(n, r) === -s;
    _te(yt(t)) && i === 1 && ug(t, r) === 1 && (l = !1), o = s * (i - Number(l))
  }
  return o === 0 ? 0 : o
}

function bte(t, e, n) {
  const r = yte(t, e) / 1e3;
  return xte(n == null ? void 0 : n.roundingMethod)(r)
}

function Br(t) {
  const e = yt(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e
}

function LO(t) {
  const e = yt(t),
    n = us(t, 0);
  return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
}

function Y1(t, e) {
  var l, c, d, u;
  const n = Yu(),
    r = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (l = e == null ? void 0 : e.locale) == null ? void 0 : l
      .options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d
      .options) == null ? void 0 : u.weekStartsOn) ?? 0,
    s = yt(t),
    i = s.getDay(),
    o = (i < r ? -7 : 0) + 6 - (i - r);
  return s.setDate(s.getDate() + o), s.setHours(23, 59, 59, 999), s
}

function OO(t) {
  return Y1(t, {
    weekStartsOn: 1
  })
}
const Ste = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  },
  Ete = (t, e, n) => {
    let r;
    const s = Ste[t];
    return typeof s == "string" ? r = s : e === 1 ? r = s.one : r = s.other.replace("{{count}}", e.toString()), n !=
      null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
  };

function A0(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth]
  }
}
const Tte = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  },
  Nte = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  },
  Cte = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  },
  Mte = {
    date: A0({
      formats: Tte,
      defaultWidth: "full"
    }),
    time: A0({
      formats: Nte,
      defaultWidth: "full"
    }),
    dateTime: A0({
      formats: Cte,
      defaultWidth: "full"
    })
  },
  Ate = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  },
  jte = (t, e, n, r) => Ate[t];

function Ef(t) {
  return (e, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let s;
    if (r === "formatting" && t.formattingValues) {
      const o = t.defaultFormattingWidth || t.defaultWidth,
        l = n != null && n.width ? String(n.width) : o;
      s = t.formattingValues[l] || t.formattingValues[o]
    } else {
      const o = t.defaultWidth,
        l = n != null && n.width ? String(n.width) : t.defaultWidth;
      s = t.values[l] || t.values[o]
    }
    const i = t.argumentCallback ? t.argumentCallback(e) : e;
    return s[i]
  }
}
const Rte = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  },
  Pte = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  },
  kte = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
      "December"
    ]
  },
  Dte = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  Ite = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  },
  Lte = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  },
  Ote = (t, e) => {
    const n = Number(t),
      r = n % 100;
    if (r > 20 || r < 10) switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd"
    }
    return n + "th"
  },
  Fte = {
    ordinalNumber: Ote,
    era: Ef({
      values: Rte,
      defaultWidth: "wide"
    }),
    quarter: Ef({
      values: Pte,
      defaultWidth: "wide",
      argumentCallback: t => t - 1
    }),
    month: Ef({
      values: kte,
      defaultWidth: "wide"
    }),
    day: Ef({
      values: Dte,
      defaultWidth: "wide"
    }),
    dayPeriod: Ef({
      values: Ite,
      defaultWidth: "wide",
      formattingValues: Lte,
      defaultFormattingWidth: "wide"
    })
  };

function Tf(t) {
  return (e, n = {}) => {
    const r = n.width,
      s = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth],
      i = e.match(s);
    if (!i) return null;
    const o = i[0],
      l = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth],
      c = Array.isArray(l) ? Bte(l, f => f.test(o)) : Ute(l, f => f.test(o));
    let d;
    d = t.valueCallback ? t.valueCallback(c) : c, d = n.valueCallback ? n.valueCallback(d) : d;
    const u = e.slice(o.length);
    return {
      value: d,
      rest: u
    }
  }
}

function Ute(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return n
}

function Bte(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n])) return n
}

function zte(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const s = r[0],
      i = e.match(t.parsePattern);
    if (!i) return null;
    let o = t.valueCallback ? t.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const l = e.slice(s.length);
    return {
      value: o,
      rest: l
    }
  }
}
const Vte = /^(\d+)(th|st|nd|rd)?/i,
  $te = /\d+/i,
  Hte = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  },
  Wte = {
    any: [/^b/i, /^(a|c)/i]
  },
  Gte = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  },
  qte = {
    any: [/1/i, /2/i, /3/i, /4/i]
  },
  Yte = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  },
  Xte = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  },
  Kte = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  },
  Zte = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  },
  Qte = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  },
  Jte = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  },
  ene = {
    ordinalNumber: zte({
      matchPattern: Vte,
      parsePattern: $te,
      valueCallback: t => parseInt(t, 10)
    }),
    era: Tf({
      matchPatterns: Hte,
      defaultMatchWidth: "wide",
      parsePatterns: Wte,
      defaultParseWidth: "any"
    }),
    quarter: Tf({
      matchPatterns: Gte,
      defaultMatchWidth: "wide",
      parsePatterns: qte,
      defaultParseWidth: "any",
      valueCallback: t => t + 1
    }),
    month: Tf({
      matchPatterns: Yte,
      defaultMatchWidth: "wide",
      parsePatterns: Xte,
      defaultParseWidth: "any"
    }),
    day: Tf({
      matchPatterns: Kte,
      defaultMatchWidth: "wide",
      parsePatterns: Zte,
      defaultParseWidth: "any"
    }),
    dayPeriod: Tf({
      matchPatterns: Qte,
      defaultMatchWidth: "any",
      parsePatterns: Jte,
      defaultParseWidth: "any"
    })
  },
  X1 = {
    code: "en-US",
    formatDistance: Ete,
    formatLong: Mte,
    formatRelative: jte,
    localize: Fte,
    match: ene,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };

function tne(t) {
  const e = yt(t);
  return Wi(e, LO(e)) + 1
}

function FO(t) {
  const e = yt(t),
    n = +xc(e) - +ute(e);
  return Math.round(n / G1) + 1
}

function UO(t, e) {
  var u, f, h, m;
  const n = yt(t),
    r = n.getFullYear(),
    s = Yu(),
    i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((f = (u = e == null ? void 0 : e.locale) == null ? void 0 : u
      .options) == null ? void 0 : f.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((m = (h = s.locale) == null ?
      void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1,
    o = us(t, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = Mi(o, e),
    c = us(t, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const d = Mi(c, e);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1
}

function nne(t, e) {
  var l, c, d, u;
  const n = Yu(),
    r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((c = (l = e == null ? void 0 : e.locale) == null ? void 0 : l
      .options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ?
      void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1,
    s = UO(t, e),
    i = us(t, 0);
  return i.setFullYear(s, 0, r), i.setHours(0, 0, 0, 0), Mi(i, e)
}

function cv(t, e) {
  const n = yt(t),
    r = +Mi(n, e) - +nne(n, e);
  return Math.round(r / G1) + 1
}

function Zt(t, e) {
  const n = t < 0 ? "-" : "",
    r = Math.abs(t).toString().padStart(e, "0");
  return n + r
}
const so = {
    y(t, e) {
      const n = t.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return Zt(e === "yy" ? r % 100 : r, e.length)
    },
    M(t, e) {
      const n = t.getMonth();
      return e === "M" ? String(n + 1) : Zt(n + 1, 2)
    },
    d(t, e) {
      return Zt(t.getDate(), e.length)
    },
    a(t, e) {
      const n = t.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m."
      }
    },
    h(t, e) {
      return Zt(t.getHours() % 12 || 12, e.length)
    },
    H(t, e) {
      return Zt(t.getHours(), e.length)
    },
    m(t, e) {
      return Zt(t.getMinutes(), e.length)
    },
    s(t, e) {
      return Zt(t.getSeconds(), e.length)
    },
    S(t, e) {
      const n = e.length,
        r = t.getMilliseconds(),
        s = Math.trunc(r * Math.pow(10, n - 3));
      return Zt(s, e.length)
    }
  },
  nd = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  UM = {
    G: function (t, e, n) {
      const r = t.getFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, {
            width: "abbreviated"
          });
        case "GGGGG":
          return n.era(r, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return n.era(r, {
            width: "wide"
          })
      }
    },
    y: function (t, e, n) {
      if (e === "yo") {
        const r = t.getFullYear(),
          s = r > 0 ? r : 1 - r;
        return n.ordinalNumber(s, {
          unit: "year"
        })
      }
      return so.y(t, e)
    },
    Y: function (t, e, n, r) {
      const s = UO(t, r),
        i = s > 0 ? s : 1 - s;
      if (e === "YY") {
        const o = i % 100;
        return Zt(o, 2)
      }
      return e === "Yo" ? n.ordinalNumber(i, {
        unit: "year"
      }) : Zt(i, e.length)
    },
    R: function (t, e) {
      const n = IO(t);
      return Zt(n, e.length)
    },
    u: function (t, e) {
      const n = t.getFullYear();
      return Zt(n, e.length)
    },
    Q: function (t, e, n) {
      const r = Math.ceil((t.getMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(r);
        case "QQ":
          return Zt(r, 2);
        case "Qo":
          return n.ordinalNumber(r, {
            unit: "quarter"
          });
        case "QQQ":
          return n.quarter(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return n.quarter(r, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return n.quarter(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    q: function (t, e, n) {
      const r = Math.ceil((t.getMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(r);
        case "qq":
          return Zt(r, 2);
        case "qo":
          return n.ordinalNumber(r, {
            unit: "quarter"
          });
        case "qqq":
          return n.quarter(r, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return n.quarter(r, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return n.quarter(r, {
            width: "wide",
            context: "standalone"
          })
      }
    },
    M: function (t, e, n) {
      const r = t.getMonth();
      switch (e) {
        case "M":
        case "MM":
          return so.M(t, e);
        case "Mo":
          return n.ordinalNumber(r + 1, {
            unit: "month"
          });
        case "MMM":
          return n.month(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return n.month(r, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return n.month(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    L: function (t, e, n) {
      const r = t.getMonth();
      switch (e) {
        case "L":
          return String(r + 1);
        case "LL":
          return Zt(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, {
            unit: "month"
          });
        case "LLL":
          return n.month(r, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return n.month(r, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return n.month(r, {
            width: "wide",
            context: "standalone"
          })
      }
    },
    w: function (t, e, n, r) {
      const s = cv(t, r);
      return e === "wo" ? n.ordinalNumber(s, {
        unit: "week"
      }) : Zt(s, e.length)
    },
    I: function (t, e, n) {
      const r = FO(t);
      return e === "Io" ? n.ordinalNumber(r, {
        unit: "week"
      }) : Zt(r, e.length)
    },
    d: function (t, e, n) {
      return e === "do" ? n.ordinalNumber(t.getDate(), {
        unit: "date"
      }) : so.d(t, e)
    },
    D: function (t, e, n) {
      const r = tne(t);
      return e === "Do" ? n.ordinalNumber(r, {
        unit: "dayOfYear"
      }) : Zt(r, e.length)
    },
    E: function (t, e, n) {
      const r = t.getDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    e: function (t, e, n, r) {
      const s = t.getDay(),
        i = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(i);
        case "ee":
          return Zt(i, 2);
        case "eo":
          return n.ordinalNumber(i, {
            unit: "day"
          });
        case "eee":
          return n.day(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return n.day(s, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return n.day(s, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return n.day(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    c: function (t, e, n, r) {
      const s = t.getDay(),
        i = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(i);
        case "cc":
          return Zt(i, e.length);
        case "co":
          return n.ordinalNumber(i, {
            unit: "day"
          });
        case "ccc":
          return n.day(s, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return n.day(s, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return n.day(s, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return n.day(s, {
            width: "wide",
            context: "standalone"
          })
      }
    },
    i: function (t, e, n) {
      const r = t.getDay(),
        s = r === 0 ? 7 : r;
      switch (e) {
        case "i":
          return String(s);
        case "ii":
          return Zt(s, e.length);
        case "io":
          return n.ordinalNumber(s, {
            unit: "day"
          });
        case "iii":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    a: function (t, e, n) {
      const s = t.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return n.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return n.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    b: function (t, e, n) {
      const r = t.getHours();
      let s;
      switch (r === 12 ? s = nd.noon : r === 0 ? s = nd.midnight : s = r / 12 >= 1 ? "pm" : "am", e) {
        case "b":
        case "bb":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return n.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return n.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    B: function (t, e, n) {
      const r = t.getHours();
      let s;
      switch (r >= 17 ? s = nd.evening : r >= 12 ? s = nd.afternoon : r >= 4 ? s = nd.morning : s = nd.night, e) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return n.dayPeriod(s, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return n.dayPeriod(s, {
            width: "wide",
            context: "formatting"
          })
      }
    },
    h: function (t, e, n) {
      if (e === "ho") {
        let r = t.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, {
          unit: "hour"
        })
      }
      return so.h(t, e)
    },
    H: function (t, e, n) {
      return e === "Ho" ? n.ordinalNumber(t.getHours(), {
        unit: "hour"
      }) : so.H(t, e)
    },
    K: function (t, e, n) {
      const r = t.getHours() % 12;
      return e === "Ko" ? n.ordinalNumber(r, {
        unit: "hour"
      }) : Zt(r, e.length)
    },
    k: function (t, e, n) {
      let r = t.getHours();
      return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, {
        unit: "hour"
      }) : Zt(r, e.length)
    },
    m: function (t, e, n) {
      return e === "mo" ? n.ordinalNumber(t.getMinutes(), {
        unit: "minute"
      }) : so.m(t, e)
    },
    s: function (t, e, n) {
      return e === "so" ? n.ordinalNumber(t.getSeconds(), {
        unit: "second"
      }) : so.s(t, e)
    },
    S: function (t, e) {
      return so.S(t, e)
    },
    X: function (t, e, n) {
      const r = t.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (e) {
        case "X":
          return zM(r);
        case "XXXX":
        case "XX":
          return kl(r);
        case "XXXXX":
        case "XXX":
        default:
          return kl(r, ":")
      }
    },
    x: function (t, e, n) {
      const r = t.getTimezoneOffset();
      switch (e) {
        case "x":
          return zM(r);
        case "xxxx":
        case "xx":
          return kl(r);
        case "xxxxx":
        case "xxx":
        default:
          return kl(r, ":")
      }
    },
    O: function (t, e, n) {
      const r = t.getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + BM(r, ":");
        case "OOOO":
        default:
          return "GMT" + kl(r, ":")
      }
    },
    z: function (t, e, n) {
      const r = t.getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + BM(r, ":");
        case "zzzz":
        default:
          return "GMT" + kl(r, ":")
      }
    },
    t: function (t, e, n) {
      const r = Math.trunc(t.getTime() / 1e3);
      return Zt(r, e.length)
    },
    T: function (t, e, n) {
      const r = t.getTime();
      return Zt(r, e.length)
    }
  };

function BM(t, e = "") {
  const n = t > 0 ? "-" : "+",
    r = Math.abs(t),
    s = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(s) : n + String(s) + e + Zt(i, 2)
}

function zM(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + Zt(Math.abs(t) / 60, 2) : kl(t, e)
}

function kl(t, e = "") {
  const n = t > 0 ? "-" : "+",
    r = Math.abs(t),
    s = Zt(Math.trunc(r / 60), 2),
    i = Zt(r % 60, 2);
  return n + s + e + i
}
const VM = (t, e) => {
    switch (t) {
      case "P":
        return e.date({
          width: "short"
        });
      case "PP":
        return e.date({
          width: "medium"
        });
      case "PPP":
        return e.date({
          width: "long"
        });
      case "PPPP":
      default:
        return e.date({
          width: "full"
        })
    }
  },
  BO = (t, e) => {
    switch (t) {
      case "p":
        return e.time({
          width: "short"
        });
      case "pp":
        return e.time({
          width: "medium"
        });
      case "ppp":
        return e.time({
          width: "long"
        });
      case "pppp":
      default:
        return e.time({
          width: "full"
        })
    }
  },
  rne = (t, e) => {
    const n = t.match(/(P+)(p+)?/) || [],
      r = n[1],
      s = n[2];
    if (!s) return VM(t, e);
    let i;
    switch (r) {
      case "P":
        i = e.dateTime({
          width: "short"
        });
        break;
      case "PP":
        i = e.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        i = e.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        i = e.dateTime({
          width: "full"
        });
        break
    }
    return i.replace("{{date}}", VM(r, e)).replace("{{time}}", BO(s, e))
  },
  sne = {
    p: BO,
    P: rne
  },
  ine = /^D+$/,
  ane = /^Y+$/,
  one = ["D", "DD", "YY", "YYYY"];

function lne(t) {
  return ine.test(t)
}

function cne(t) {
  return ane.test(t)
}

function dne(t, e, n) {
  const r = une(t, e, n);
  if (console.warn(r), one.includes(t)) throw new RangeError(r)
}

function une(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const fne = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  hne = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  mne = /^'([^]*?)'?$/,
  pne = /''/g,
  gne = /[a-zA-Z]/;

function na(t, e, n) {
  var u, f, h, m, y, v, g, p;
  const r = Yu(),
    s = (n == null ? void 0 : n.locale) ?? r.locale ?? X1,
    i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u
      .options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (h = r.locale) == null ?
      void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1,
    o = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (y = n == null ? void 0 : n.locale) == null ? void 0 : y
      .options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((p = (g = r.locale) == null ? void 0 : g
      .options) == null ? void 0 : p.weekStartsOn) ?? 0,
    l = yt(t);
  if (!gte(l)) throw new RangeError("Invalid time value");
  let c = e.match(hne).map(_ => {
    const w = _[0];
    if (w === "p" || w === "P") {
      const b = sne[w];
      return b(_, s.formatLong)
    }
    return _
  }).join("").match(fne).map(_ => {
    if (_ === "''") return {
      isToken: !1,
      value: "'"
    };
    const w = _[0];
    if (w === "'") return {
      isToken: !1,
      value: vne(_)
    };
    if (UM[w]) return {
      isToken: !0,
      value: _
    };
    if (w.match(gne)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + w +
      "`");
    return {
      isToken: !1,
      value: _
    }
  });
  s.localize.preprocessor && (c = s.localize.preprocessor(l, c));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: s
  };
  return c.map(_ => {
    if (!_.isToken) return _.value;
    const w = _.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && cne(w) || !(n != null && n.useAdditionalDayOfYearTokens) &&
      lne(w)) && dne(w, e, String(t));
    const b = UM[w[0]];
    return b(l, w, s.localize, d)
  }).join("")
}

function vne(t) {
  const e = t.match(mne);
  return e ? e[1].replace(pne, "'") : t
}

function xne(t, e, n) {
  const r = Yu(),
    s = (n == null ? void 0 : n.locale) ?? r.locale ?? X1,
    i = 2520,
    o = ug(t, e);
  if (isNaN(o)) throw new RangeError("Invalid time value");
  const l = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: o
  });
  let c, d;
  o > 0 ? (c = yt(e), d = yt(t)) : (c = yt(t), d = yt(e));
  const u = bte(d, c),
    f = (vu(d) - vu(c)) / 1e3,
    h = Math.round((u - f) / 60);
  let m;
  if (h < 2) return n != null && n.includeSeconds ? u < 5 ? s.formatDistance("lessThanXSeconds", 5, l) : u < 10 ? s
    .formatDistance("lessThanXSeconds", 10, l) : u < 20 ? s.formatDistance("lessThanXSeconds", 20, l) : u < 40 ? s
    .formatDistance("halfAMinute", 0, l) : u < 60 ? s.formatDistance("lessThanXMinutes", 1, l) : s.formatDistance(
      "xMinutes", 1, l) : h === 0 ? s.formatDistance("lessThanXMinutes", 1, l) : s.formatDistance("xMinutes", h, l);
  if (h < 45) return s.formatDistance("xMinutes", h, l);
  if (h < 90) return s.formatDistance("aboutXHours", 1, l);
  if (h < FM) {
    const y = Math.round(h / 60);
    return s.formatDistance("aboutXHours", y, l)
  } else {
    if (h < i) return s.formatDistance("xDays", 1, l);
    if (h < zp) {
      const y = Math.round(h / FM);
      return s.formatDistance("xDays", y, l)
    } else if (h < zp * 2) return m = Math.round(h / zp), s.formatDistance("aboutXMonths", m, l)
  }
  if (m = wte(d, c), m < 12) {
    const y = Math.round(h / zp);
    return s.formatDistance("xMonths", y, l)
  } else {
    const y = m % 12,
      v = Math.trunc(m / 12);
    return y < 3 ? s.formatDistance("aboutXYears", v, l) : y < 9 ? s.formatDistance("overXYears", v, l) : s
      .formatDistance("almostXYears", v + 1, l)
  }
}

function yne(t, e) {
  return xne(t, pte(t), e)
}

function _ne(t) {
  const e = yt(t),
    n = e.getFullYear(),
    r = e.getMonth(),
    s = us(t, 0);
  return s.setFullYear(n, r + 1, 0), s.setHours(0, 0, 0, 0), s.getDate()
}

function wne(t) {
  return Math.trunc(+yt(t) / 1e3)
}

function bne(t) {
  const e = yt(t),
    n = e.getMonth();
  return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(0, 0, 0, 0), e
}

function Sne(t, e) {
  return vte(bne(t), Br(t), e) + 1
}

function vb(t, e) {
  const n = yt(t),
    r = yt(e);
  return n.getTime() > r.getTime()
}

function zO(t, e) {
  const n = yt(t),
    r = yt(e);
  return +n < +r
}

function K1(t, e) {
  const n = yt(t),
    r = yt(e);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
}

function Ene(t, e) {
  const n = yt(t),
    r = yt(e);
  return n.getFullYear() === r.getFullYear()
}

function j0(t, e) {
  return Pr(t, -e)
}

function R0(t, e) {
  const n = yt(t),
    r = n.getFullYear(),
    s = n.getDate(),
    i = us(t, 0);
  i.setFullYear(r, e, 15), i.setHours(0, 0, 0, 0);
  const o = _ne(i);
  return n.setMonth(e, Math.min(s, o)), n
}

function $M(t, e) {
  const n = yt(t);
  return isNaN(+n) ? us(t, NaN) : (n.setFullYear(e), n)
}

function Tne(t, e) {
  return Zs(t, -e)
}
var gt = function () {
  return gt = Object.assign || function (e) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }, gt.apply(this, arguments)
};

function Nne(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++) e.indexOf(r[s]) < 0 && Object.prototype
      .propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
  return n
}

function VO(t, e, n) {
  for (var r = 0, s = e.length, i; r < s; r++)(i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[
    r] = e[r]);
  return t.concat(i || Array.prototype.slice.call(e))
}

function Em(t) {
  return t.mode === "multiple"
}

function Tm(t) {
  return t.mode === "range"
}

function jx(t) {
  return t.mode === "single"
}
var Cne = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};

function Mne(t, e) {
  return na(t, "LLLL y", e)
}

function Ane(t, e) {
  return na(t, "d", e)
}

function jne(t, e) {
  return na(t, "LLLL", e)
}

function Rne(t) {
  return "".concat(t)
}

function Pne(t, e) {
  return na(t, "cccccc", e)
}

function kne(t, e) {
  return na(t, "yyyy", e)
}
var Dne = Object.freeze({
    __proto__: null,
    formatCaption: Mne,
    formatDay: Ane,
    formatMonthCaption: jne,
    formatWeekNumber: Rne,
    formatWeekdayName: Pne,
    formatYearCaption: kne
  }),
  Ine = function (t, e, n) {
    return na(t, "do MMMM (EEEE)", n)
  },
  Lne = function () {
    return "Month: "
  },
  One = function () {
    return "Go to next month"
  },
  Fne = function () {
    return "Go to previous month"
  },
  Une = function (t, e) {
    return na(t, "cccc", e)
  },
  Bne = function (t) {
    return "Week n. ".concat(t)
  },
  zne = function () {
    return "Year: "
  },
  Vne = Object.freeze({
    __proto__: null,
    labelDay: Ine,
    labelMonthDropdown: Lne,
    labelNext: One,
    labelPrevious: Fne,
    labelWeekNumber: Bne,
    labelWeekday: Une,
    labelYearDropdown: zne
  });

function $ne() {
  var t = "buttons",
    e = Cne,
    n = X1,
    r = {},
    s = {},
    i = 1,
    o = {},
    l = new Date;
  return {
    captionLayout: t,
    classNames: e,
    formatters: Dne,
    labels: Vne,
    locale: n,
    modifiersClassNames: r,
    modifiers: s,
    numberOfMonths: i,
    styles: o,
    today: l,
    mode: "default"
  }
}

function Hne(t) {
  var e = t.fromYear,
    n = t.toYear,
    r = t.fromMonth,
    s = t.toMonth,
    i = t.fromDate,
    o = t.toDate;
  return r ? i = Br(r) : e && (i = new Date(e, 0, 1)), s ? o = Ax(s) : n && (o = new Date(n, 11, 31)), {
    fromDate: i ? yc(i) : void 0,
    toDate: o ? yc(o) : void 0
  }
}
var $O = x.createContext(void 0);

function Wne(t) {
  var e, n = t.initialProps,
    r = $ne(),
    s = Hne(n),
    i = s.fromDate,
    o = s.toDate,
    l = (e = n.captionLayout) !== null && e !== void 0 ? e : r.captionLayout;
  l !== "buttons" && (!i || !o) && (l = "buttons");
  var c;
  (jx(n) || Em(n) || Tm(n)) && (c = n.onSelect);
  var d = gt(gt(gt({}, r), n), {
    captionLayout: l,
    classNames: gt(gt({}, r.classNames), n.classNames),
    components: gt({}, n.components),
    formatters: gt(gt({}, r.formatters), n.formatters),
    fromDate: i,
    labels: gt(gt({}, r.labels), n.labels),
    mode: n.mode || r.mode,
    modifiers: gt(gt({}, r.modifiers), n.modifiers),
    modifiersClassNames: gt(gt({}, r.modifiersClassNames), n.modifiersClassNames),
    onSelect: c,
    styles: gt(gt({}, r.styles), n.styles),
    toDate: o
  });
  return a.jsx($O.Provider, {
    value: d,
    children: t.children
  })
}

function rn() {
  var t = x.useContext($O);
  if (!t) throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return t
}

function HO(t) {
  var e = rn(),
    n = e.locale,
    r = e.classNames,
    s = e.styles,
    i = e.formatters.formatCaption;
  return a.jsx("div", {
    className: r.caption_label,
    style: s.caption_label,
    "aria-live": "polite",
    role: "presentation",
    id: t.id,
    children: i(t.displayMonth, {
      locale: n
    })
  })
}

function Gne(t) {
  return a.jsx("svg", gt({
    width: "8px",
    height: "8px",
    viewBox: "0 0 120 120",
    "data-testid": "iconDropdown"
  }, t, {
    children: a.jsx("path", {
      d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  }))
}

function WO(t) {
  var e, n, r = t.onChange,
    s = t.value,
    i = t.children,
    o = t.caption,
    l = t.className,
    c = t.style,
    d = rn(),
    u = (n = (e = d.components) === null || e === void 0 ? void 0 : e.IconDropdown) !== null && n !== void 0 ? n : Gne;
  return a.jsxs("div", {
    className: l,
    style: c,
    children: [a.jsx("span", {
      className: d.classNames.vhidden,
      children: t["aria-label"]
    }), a.jsx("select", {
      name: t.name,
      "aria-label": t["aria-label"],
      className: d.classNames.dropdown,
      style: d.styles.dropdown,
      value: s,
      onChange: r,
      children: i
    }), a.jsxs("div", {
      className: d.classNames.caption_label,
      style: d.styles.caption_label,
      "aria-hidden": "true",
      children: [o, a.jsx(u, {
        className: d.classNames.dropdown_icon,
        style: d.styles.dropdown_icon
      })]
    })]
  })
}

function qne(t) {
  var e, n = rn(),
    r = n.fromDate,
    s = n.toDate,
    i = n.styles,
    o = n.locale,
    l = n.formatters.formatMonthCaption,
    c = n.classNames,
    d = n.components,
    u = n.labels.labelMonthDropdown;
  if (!r) return a.jsx(a.Fragment, {});
  if (!s) return a.jsx(a.Fragment, {});
  var f = [];
  if (Ene(r, s))
    for (var h = Br(r), m = r.getMonth(); m <= s.getMonth(); m++) f.push(R0(h, m));
  else
    for (var h = Br(new Date), m = 0; m <= 11; m++) f.push(R0(h, m));
  var y = function (g) {
      var p = Number(g.target.value),
        _ = R0(Br(t.displayMonth), p);
      t.onChange(_)
    },
    v = (e = d == null ? void 0 : d.Dropdown) !== null && e !== void 0 ? e : WO;
  return a.jsx(v, {
    name: "months",
    "aria-label": u(),
    className: c.dropdown_month,
    style: i.dropdown_month,
    onChange: y,
    value: t.displayMonth.getMonth(),
    caption: l(t.displayMonth, {
      locale: o
    }),
    children: f.map(function (g) {
      return a.jsx("option", {
        value: g.getMonth(),
        children: l(g, {
          locale: o
        })
      }, g.getMonth())
    })
  })
}

function Yne(t) {
  var e, n = t.displayMonth,
    r = rn(),
    s = r.fromDate,
    i = r.toDate,
    o = r.locale,
    l = r.styles,
    c = r.classNames,
    d = r.components,
    u = r.formatters.formatYearCaption,
    f = r.labels.labelYearDropdown,
    h = [];
  if (!s) return a.jsx(a.Fragment, {});
  if (!i) return a.jsx(a.Fragment, {});
  for (var m = s.getFullYear(), y = i.getFullYear(), v = m; v <= y; v++) h.push($M(LO(new Date), v));
  var g = function (_) {
      var w = $M(Br(n), Number(_.target.value));
      t.onChange(w)
    },
    p = (e = d == null ? void 0 : d.Dropdown) !== null && e !== void 0 ? e : WO;
  return a.jsx(p, {
    name: "years",
    "aria-label": f(),
    className: c.dropdown_year,
    style: l.dropdown_year,
    onChange: g,
    value: n.getFullYear(),
    caption: u(n, {
      locale: o
    }),
    children: h.map(function (_) {
      return a.jsx("option", {
        value: _.getFullYear(),
        children: u(_, {
          locale: o
        })
      }, _.getFullYear())
    })
  })
}

function Xne(t, e) {
  var n = x.useState(t),
    r = n[0],
    s = n[1],
    i = e === void 0 ? r : e;
  return [i, s]
}

function Kne(t) {
  var e = t.month,
    n = t.defaultMonth,
    r = t.today,
    s = e || n || r || new Date,
    i = t.toDate,
    o = t.fromDate,
    l = t.numberOfMonths,
    c = l === void 0 ? 1 : l;
  if (i && xu(i, s) < 0) {
    var d = -1 * (c - 1);
    s = Zs(i, d)
  }
  return o && xu(s, o) < 0 && (s = o), Br(s)
}

function Zne() {
  var t = rn(),
    e = Kne(t),
    n = Xne(e, t.month),
    r = n[0],
    s = n[1],
    i = function (o) {
      var l;
      if (!t.disableNavigation) {
        var c = Br(o);
        s(c), (l = t.onMonthChange) === null || l === void 0 || l.call(t, c)
      }
    };
  return [r, i]
}

function Qne(t, e) {
  for (var n = e.reverseMonths, r = e.numberOfMonths, s = Br(t), i = Br(Zs(s, r)), o = xu(i, s), l = [], c = 0; c <
    o; c++) {
    var d = Zs(s, c);
    l.push(d)
  }
  return n && (l = l.reverse()), l
}

function Jne(t, e) {
  if (!e.disableNavigation) {
    var n = e.toDate,
      r = e.pagedNavigation,
      s = e.numberOfMonths,
      i = s === void 0 ? 1 : s,
      o = r ? i : 1,
      l = Br(t);
    if (!n) return Zs(l, o);
    var c = xu(n, t);
    if (!(c < i)) return Zs(l, o)
  }
}

function ere(t, e) {
  if (!e.disableNavigation) {
    var n = e.fromDate,
      r = e.pagedNavigation,
      s = e.numberOfMonths,
      i = s === void 0 ? 1 : s,
      o = r ? i : 1,
      l = Br(t);
    if (!n) return Zs(l, -o);
    var c = xu(l, n);
    if (!(c <= 0)) return Zs(l, -o)
  }
}
var GO = x.createContext(void 0);

function tre(t) {
  var e = rn(),
    n = Zne(),
    r = n[0],
    s = n[1],
    i = Qne(r, e),
    o = Jne(r, e),
    l = ere(r, e),
    c = function (f) {
      return i.some(function (h) {
        return K1(f, h)
      })
    },
    d = function (f, h) {
      c(f) || (h && zO(f, h) ? s(Zs(f, 1 + e.numberOfMonths * -1)) : s(f))
    },
    u = {
      currentMonth: r,
      displayMonths: i,
      goToMonth: s,
      goToDate: d,
      previousMonth: l,
      nextMonth: o,
      isDateDisplayed: c
    };
  return a.jsx(GO.Provider, {
    value: u,
    children: t.children
  })
}

function Nm() {
  var t = x.useContext(GO);
  if (!t) throw new Error("useNavigation must be used within a NavigationProvider");
  return t
}

function HM(t) {
  var e, n = rn(),
    r = n.classNames,
    s = n.styles,
    i = n.components,
    o = Nm().goToMonth,
    l = function (u) {
      o(Zs(u, t.displayIndex ? -t.displayIndex : 0))
    },
    c = (e = i == null ? void 0 : i.CaptionLabel) !== null && e !== void 0 ? e : HO,
    d = a.jsx(c, {
      id: t.id,
      displayMonth: t.displayMonth
    });
  return a.jsxs("div", {
    className: r.caption_dropdowns,
    style: s.caption_dropdowns,
    children: [a.jsx("div", {
      className: r.vhidden,
      children: d
    }), a.jsx(qne, {
      onChange: l,
      displayMonth: t.displayMonth
    }), a.jsx(Yne, {
      onChange: l,
      displayMonth: t.displayMonth
    })]
  })
}

function nre(t) {
  return a.jsx("svg", gt({
    width: "16px",
    height: "16px",
    viewBox: "0 0 120 120"
  }, t, {
    children: a.jsx("path", {
      d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  }))
}

function rre(t) {
  return a.jsx("svg", gt({
    width: "16px",
    height: "16px",
    viewBox: "0 0 120 120"
  }, t, {
    children: a.jsx("path", {
      d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
      fill: "currentColor"
    })
  }))
}
var dv = x.forwardRef(function (t, e) {
  var n = rn(),
    r = n.classNames,
    s = n.styles,
    i = [r.button_reset, r.button];
  t.className && i.push(t.className);
  var o = i.join(" "),
    l = gt(gt({}, s.button_reset), s.button);
  return t.style && Object.assign(l, t.style), a.jsx("button", gt({}, t, {
    ref: e,
    type: "button",
    className: o,
    style: l
  }))
});

function sre(t) {
  var e, n, r = rn(),
    s = r.dir,
    i = r.locale,
    o = r.classNames,
    l = r.styles,
    c = r.labels,
    d = c.labelPrevious,
    u = c.labelNext,
    f = r.components;
  if (!t.nextMonth && !t.previousMonth) return a.jsx(a.Fragment, {});
  var h = d(t.previousMonth, {
      locale: i
    }),
    m = [o.nav_button, o.nav_button_previous].join(" "),
    y = u(t.nextMonth, {
      locale: i
    }),
    v = [o.nav_button, o.nav_button_next].join(" "),
    g = (e = f == null ? void 0 : f.IconRight) !== null && e !== void 0 ? e : rre,
    p = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : nre;
  return a.jsxs("div", {
    className: o.nav,
    style: l.nav,
    children: [!t.hidePrevious && a.jsx(dv, {
      name: "previous-month",
      "aria-label": h,
      className: m,
      style: l.nav_button_previous,
      disabled: !t.previousMonth,
      onClick: t.onPreviousClick,
      children: s === "rtl" ? a.jsx(g, {
        className: o.nav_icon,
        style: l.nav_icon
      }) : a.jsx(p, {
        className: o.nav_icon,
        style: l.nav_icon
      })
    }), !t.hideNext && a.jsx(dv, {
      name: "next-month",
      "aria-label": y,
      className: v,
      style: l.nav_button_next,
      disabled: !t.nextMonth,
      onClick: t.onNextClick,
      children: s === "rtl" ? a.jsx(p, {
        className: o.nav_icon,
        style: l.nav_icon
      }) : a.jsx(g, {
        className: o.nav_icon,
        style: l.nav_icon
      })
    })]
  })
}

function WM(t) {
  var e = rn().numberOfMonths,
    n = Nm(),
    r = n.previousMonth,
    s = n.nextMonth,
    i = n.goToMonth,
    o = n.displayMonths,
    l = o.findIndex(function (y) {
      return K1(t.displayMonth, y)
    }),
    c = l === 0,
    d = l === o.length - 1,
    u = e > 1 && (c || !d),
    f = e > 1 && (d || !c),
    h = function () {
      r && i(r)
    },
    m = function () {
      s && i(s)
    };
  return a.jsx(sre, {
    displayMonth: t.displayMonth,
    hideNext: u,
    hidePrevious: f,
    nextMonth: s,
    previousMonth: r,
    onPreviousClick: h,
    onNextClick: m
  })
}

function ire(t) {
  var e, n = rn(),
    r = n.classNames,
    s = n.disableNavigation,
    i = n.styles,
    o = n.captionLayout,
    l = n.components,
    c = (e = l == null ? void 0 : l.CaptionLabel) !== null && e !== void 0 ? e : HO,
    d;
  return s ? d = a.jsx(c, {
    id: t.id,
    displayMonth: t.displayMonth
  }) : o === "dropdown" ? d = a.jsx(HM, {
    displayMonth: t.displayMonth,
    id: t.id
  }) : o === "dropdown-buttons" ? d = a.jsxs(a.Fragment, {
    children: [a.jsx(HM, {
      displayMonth: t.displayMonth,
      displayIndex: t.displayIndex,
      id: t.id
    }), a.jsx(WM, {
      displayMonth: t.displayMonth,
      displayIndex: t.displayIndex,
      id: t.id
    })]
  }) : d = a.jsxs(a.Fragment, {
    children: [a.jsx(c, {
      id: t.id,
      displayMonth: t.displayMonth,
      displayIndex: t.displayIndex
    }), a.jsx(WM, {
      displayMonth: t.displayMonth,
      id: t.id
    })]
  }), a.jsx("div", {
    className: r.caption,
    style: i.caption,
    children: d
  })
}

function are(t) {
  var e = rn(),
    n = e.footer,
    r = e.styles,
    s = e.classNames.tfoot;
  return n ? a.jsx("tfoot", {
    className: s,
    style: r.tfoot,
    children: a.jsx("tr", {
      children: a.jsx("td", {
        colSpan: 8,
        children: n
      })
    })
  }) : a.jsx(a.Fragment, {})
}

function ore(t, e, n) {
  for (var r = n ? xc(new Date) : Mi(new Date, {
      locale: t,
      weekStartsOn: e
    }), s = [], i = 0; i < 7; i++) {
    var o = Pr(r, i);
    s.push(o)
  }
  return s
}

function lre() {
  var t = rn(),
    e = t.classNames,
    n = t.styles,
    r = t.showWeekNumber,
    s = t.locale,
    i = t.weekStartsOn,
    o = t.ISOWeek,
    l = t.formatters.formatWeekdayName,
    c = t.labels.labelWeekday,
    d = ore(s, i, o);
  return a.jsxs("tr", {
    style: n.head_row,
    className: e.head_row,
    children: [r && a.jsx("td", {
      style: n.head_cell,
      className: e.head_cell
    }), d.map(function (u, f) {
      return a.jsx("th", {
        scope: "col",
        className: e.head_cell,
        style: n.head_cell,
        "aria-label": c(u, {
          locale: s
        }),
        children: l(u, {
          locale: s
        })
      }, f)
    })]
  })
}

function cre() {
  var t, e = rn(),
    n = e.classNames,
    r = e.styles,
    s = e.components,
    i = (t = s == null ? void 0 : s.HeadRow) !== null && t !== void 0 ? t : lre;
  return a.jsx("thead", {
    style: r.head,
    className: n.head,
    children: a.jsx(i, {})
  })
}

function dre(t) {
  var e = rn(),
    n = e.locale,
    r = e.formatters.formatDay;
  return a.jsx(a.Fragment, {
    children: r(t.date, {
      locale: n
    })
  })
}
var Z1 = x.createContext(void 0);

function ure(t) {
  if (!Em(t.initialProps)) {
    var e = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return a.jsx(Z1.Provider, {
      value: e,
      children: t.children
    })
  }
  return a.jsx(fre, {
    initialProps: t.initialProps,
    children: t.children
  })
}

function fre(t) {
  var e = t.initialProps,
    n = t.children,
    r = e.selected,
    s = e.min,
    i = e.max,
    o = function (d, u, f) {
      var h, m;
      (h = e.onDayClick) === null || h === void 0 || h.call(e, d, u, f);
      var y = !!(u.selected && s && (r == null ? void 0 : r.length) === s);
      if (!y) {
        var v = !!(!u.selected && i && (r == null ? void 0 : r.length) === i);
        if (!v) {
          var g = r ? VO([], r) : [];
          if (u.selected) {
            var p = g.findIndex(function (_) {
              return ns(d, _)
            });
            g.splice(p, 1)
          } else g.push(d);
          (m = e.onSelect) === null || m === void 0 || m.call(e, g, d, u, f)
        }
      }
    },
    l = {
      disabled: []
    };
  r && l.disabled.push(function (d) {
    var u = i && r.length > i - 1,
      f = r.some(function (h) {
        return ns(h, d)
      });
    return !!(u && !f)
  });
  var c = {
    selected: r,
    onDayClick: o,
    modifiers: l
  };
  return a.jsx(Z1.Provider, {
    value: c,
    children: n
  })
}

function Q1() {
  var t = x.useContext(Z1);
  if (!t) throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return t
}

function hre(t, e) {
  var n = e || {},
    r = n.from,
    s = n.to;
  return r && s ? ns(s, t) && ns(r, t) ? void 0 : ns(s, t) ? {
    from: s,
    to: void 0
  } : ns(r, t) ? void 0 : vb(r, t) ? {
    from: t,
    to: s
  } : {
    from: r,
    to: t
  } : s ? vb(t, s) ? {
    from: s,
    to: t
  } : {
    from: t,
    to: s
  } : r ? zO(t, r) ? {
    from: t,
    to: r
  } : {
    from: r,
    to: t
  } : {
    from: t,
    to: void 0
  }
}
var J1 = x.createContext(void 0);

function mre(t) {
  if (!Tm(t.initialProps)) {
    var e = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return a.jsx(J1.Provider, {
      value: e,
      children: t.children
    })
  }
  return a.jsx(pre, {
    initialProps: t.initialProps,
    children: t.children
  })
}

function pre(t) {
  var e = t.initialProps,
    n = t.children,
    r = e.selected,
    s = r || {},
    i = s.from,
    o = s.to,
    l = e.min,
    c = e.max,
    d = function (m, y, v) {
      var g, p;
      (g = e.onDayClick) === null || g === void 0 || g.call(e, m, y, v);
      var _ = hre(m, r);
      (p = e.onSelect) === null || p === void 0 || p.call(e, _, m, y, v)
    },
    u = {
      range_start: [],
      range_end: [],
      range_middle: [],
      disabled: []
    };
  if (i ? (u.range_start = [i], o ? (u.range_end = [o], ns(i, o) || (u.range_middle = [{
      after: i,
      before: o
    }])) : u.range_end = [i]) : o && (u.range_start = [o], u.range_end = [o]), l && (i && !o && u.disabled.push({
      after: j0(i, l - 1),
      before: Pr(i, l - 1)
    }), i && o && u.disabled.push({
      after: i,
      before: Pr(i, l - 1)
    }), !i && o && u.disabled.push({
      after: j0(o, l - 1),
      before: Pr(o, l - 1)
    })), c) {
    if (i && !o && (u.disabled.push({
        before: Pr(i, -c + 1)
      }), u.disabled.push({
        after: Pr(i, c - 1)
      })), i && o) {
      var f = Wi(o, i) + 1,
        h = c - f;
      u.disabled.push({
        before: j0(i, h)
      }), u.disabled.push({
        after: Pr(o, h)
      })
    }!i && o && (u.disabled.push({
      before: Pr(o, -c + 1)
    }), u.disabled.push({
      after: Pr(o, c - 1)
    }))
  }
  return a.jsx(J1.Provider, {
    value: {
      selected: r,
      onDayClick: d,
      modifiers: u
    },
    children: n
  })
}

function eE() {
  var t = x.useContext(J1);
  if (!t) throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return t
}

function hg(t) {
  return Array.isArray(t) ? VO([], t) : t !== void 0 ? [t] : []
}

function gre(t) {
  var e = {};
  return Object.entries(t).forEach(function (n) {
    var r = n[0],
      s = n[1];
    e[r] = hg(s)
  }), e
}
var Ai;
(function (t) {
  t.Outside = "outside", t.Disabled = "disabled", t.Selected = "selected", t.Hidden = "hidden", t.Today = "today", t
    .RangeStart = "range_start", t.RangeEnd = "range_end", t.RangeMiddle = "range_middle"
})(Ai || (Ai = {}));
var vre = Ai.Selected,
  ma = Ai.Disabled,
  xre = Ai.Hidden,
  yre = Ai.Today,
  P0 = Ai.RangeEnd,
  k0 = Ai.RangeMiddle,
  D0 = Ai.RangeStart,
  _re = Ai.Outside;

function wre(t, e, n) {
  var r, s = (r = {}, r[vre] = hg(t.selected), r[ma] = hg(t.disabled), r[xre] = hg(t.hidden), r[yre] = [t.today], r[
    P0] = [], r[k0] = [], r[D0] = [], r[_re] = [], r);
  return t.fromDate && s[ma].push({
    before: t.fromDate
  }), t.toDate && s[ma].push({
    after: t.toDate
  }), Em(t) ? s[ma] = s[ma].concat(e.modifiers[ma]) : Tm(t) && (s[ma] = s[ma].concat(n.modifiers[ma]), s[D0] = n
    .modifiers[D0], s[k0] = n.modifiers[k0], s[P0] = n.modifiers[P0]), s
}
var qO = x.createContext(void 0);

function bre(t) {
  var e = rn(),
    n = Q1(),
    r = eE(),
    s = wre(e, n, r),
    i = gre(e.modifiers),
    o = gt(gt({}, s), i);
  return a.jsx(qO.Provider, {
    value: o,
    children: t.children
  })
}

function YO() {
  var t = x.useContext(qO);
  if (!t) throw new Error("useModifiers must be used within a ModifiersProvider");
  return t
}

function Sre(t) {
  return !!(t && typeof t == "object" && "before" in t && "after" in t)
}

function Ere(t) {
  return !!(t && typeof t == "object" && "from" in t)
}

function Tre(t) {
  return !!(t && typeof t == "object" && "after" in t)
}

function Nre(t) {
  return !!(t && typeof t == "object" && "before" in t)
}

function Cre(t) {
  return !!(t && typeof t == "object" && "dayOfWeek" in t)
}

function Mre(t, e) {
  var n, r = e.from,
    s = e.to;
  if (r && s) {
    var i = Wi(s, r) < 0;
    i && (n = [s, r], r = n[0], s = n[1]);
    var o = Wi(t, r) >= 0 && Wi(s, t) >= 0;
    return o
  }
  return s ? ns(s, t) : r ? ns(r, t) : !1
}

function Are(t) {
  return q1(t)
}

function jre(t) {
  return Array.isArray(t) && t.every(q1)
}

function Rre(t, e) {
  return e.some(function (n) {
    if (typeof n == "boolean") return n;
    if (Are(n)) return ns(t, n);
    if (jre(n)) return n.includes(t);
    if (Ere(n)) return Mre(t, n);
    if (Cre(n)) return n.dayOfWeek.includes(t.getDay());
    if (Sre(n)) {
      var r = Wi(n.before, t),
        s = Wi(n.after, t),
        i = r > 0,
        o = s < 0,
        l = vb(n.before, n.after);
      return l ? o && i : i || o
    }
    return Tre(n) ? Wi(t, n.after) > 0 : Nre(n) ? Wi(n.before, t) > 0 : typeof n == "function" ? n(t) : !1
  })
}

function tE(t, e, n) {
  var r = Object.keys(e).reduce(function (i, o) {
      var l = e[o];
      return Rre(t, l) && i.push(o), i
    }, []),
    s = {};
  return r.forEach(function (i) {
    return s[i] = !0
  }), n && !K1(t, n) && (s.outside = !0), s
}

function Pre(t, e) {
  for (var n = Br(t[0]), r = Ax(t[t.length - 1]), s, i, o = n; o <= r;) {
    var l = tE(o, e),
      c = !l.disabled && !l.hidden;
    if (!c) {
      o = Pr(o, 1);
      continue
    }
    if (l.selected) return o;
    l.today && !i && (i = o), s || (s = o), o = Pr(o, 1)
  }
  return i || s
}
var kre = 365;

function XO(t, e) {
  var n = e.moveBy,
    r = e.direction,
    s = e.context,
    i = e.modifiers,
    o = e.retry,
    l = o === void 0 ? {
      count: 0,
      lastFocused: t
    } : o,
    c = s.weekStartsOn,
    d = s.fromDate,
    u = s.toDate,
    f = s.locale,
    h = {
      day: Pr,
      week: gb,
      month: Zs,
      year: fte,
      startOfWeek: function (g) {
        return s.ISOWeek ? xc(g) : Mi(g, {
          locale: f,
          weekStartsOn: c
        })
      },
      endOfWeek: function (g) {
        return s.ISOWeek ? OO(g) : Y1(g, {
          locale: f,
          weekStartsOn: c
        })
      }
    },
    m = h[n](t, r === "after" ? 1 : -1);
  r === "before" && d ? m = hte([d, m]) : r === "after" && u && (m = mte([u, m]));
  var y = !0;
  if (i) {
    var v = tE(m, i);
    y = !v.disabled && !v.hidden
  }
  return y ? m : l.count > kre ? l.lastFocused : XO(m, {
    moveBy: n,
    direction: r,
    context: s,
    modifiers: i,
    retry: gt(gt({}, l), {
      count: l.count + 1
    })
  })
}
var KO = x.createContext(void 0);

function Dre(t) {
  var e = Nm(),
    n = YO(),
    r = x.useState(),
    s = r[0],
    i = r[1],
    o = x.useState(),
    l = o[0],
    c = o[1],
    d = Pre(e.displayMonths, n),
    u = s ?? (l && e.isDateDisplayed(l)) ? l : d,
    f = function () {
      c(s), i(void 0)
    },
    h = function (g) {
      i(g)
    },
    m = rn(),
    y = function (g, p) {
      if (s) {
        var _ = XO(s, {
          moveBy: g,
          direction: p,
          context: m,
          modifiers: n
        });
        ns(s, _) || (e.goToDate(_, s), h(_))
      }
    },
    v = {
      focusedDay: s,
      focusTarget: u,
      blur: f,
      focus: h,
      focusDayAfter: function () {
        return y("day", "after")
      },
      focusDayBefore: function () {
        return y("day", "before")
      },
      focusWeekAfter: function () {
        return y("week", "after")
      },
      focusWeekBefore: function () {
        return y("week", "before")
      },
      focusMonthBefore: function () {
        return y("month", "before")
      },
      focusMonthAfter: function () {
        return y("month", "after")
      },
      focusYearBefore: function () {
        return y("year", "before")
      },
      focusYearAfter: function () {
        return y("year", "after")
      },
      focusStartOfWeek: function () {
        return y("startOfWeek", "before")
      },
      focusEndOfWeek: function () {
        return y("endOfWeek", "after")
      }
    };
  return a.jsx(KO.Provider, {
    value: v,
    children: t.children
  })
}

function nE() {
  var t = x.useContext(KO);
  if (!t) throw new Error("useFocusContext must be used within a FocusProvider");
  return t
}

function Ire(t, e) {
  var n = YO(),
    r = tE(t, n, e);
  return r
}
var rE = x.createContext(void 0);

function Lre(t) {
  if (!jx(t.initialProps)) {
    var e = {
      selected: void 0
    };
    return a.jsx(rE.Provider, {
      value: e,
      children: t.children
    })
  }
  return a.jsx(Ore, {
    initialProps: t.initialProps,
    children: t.children
  })
}

function Ore(t) {
  var e = t.initialProps,
    n = t.children,
    r = function (i, o, l) {
      var c, d, u;
      if ((c = e.onDayClick) === null || c === void 0 || c.call(e, i, o, l), o.selected && !e.required) {
        (d = e.onSelect) === null || d === void 0 || d.call(e, void 0, i, o, l);
        return
      }(u = e.onSelect) === null || u === void 0 || u.call(e, i, i, o, l)
    },
    s = {
      selected: e.selected,
      onDayClick: r
    };
  return a.jsx(rE.Provider, {
    value: s,
    children: n
  })
}

function ZO() {
  var t = x.useContext(rE);
  if (!t) throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return t
}

function Fre(t, e) {
  var n = rn(),
    r = ZO(),
    s = Q1(),
    i = eE(),
    o = nE(),
    l = o.focusDayAfter,
    c = o.focusDayBefore,
    d = o.focusWeekAfter,
    u = o.focusWeekBefore,
    f = o.blur,
    h = o.focus,
    m = o.focusMonthBefore,
    y = o.focusMonthAfter,
    v = o.focusYearBefore,
    g = o.focusYearAfter,
    p = o.focusStartOfWeek,
    _ = o.focusEndOfWeek,
    w = function (I) {
      var A, k, W, G;
      jx(n) ? (A = r.onDayClick) === null || A === void 0 || A.call(r, t, e, I) : Em(n) ? (k = s.onDayClick) === null ||
        k === void 0 || k.call(s, t, e, I) : Tm(n) ? (W = i.onDayClick) === null || W === void 0 || W.call(i, t, e, I) :
        (G = n.onDayClick) === null || G === void 0 || G.call(n, t, e, I)
    },
    b = function (I) {
      var A;
      h(t), (A = n.onDayFocus) === null || A === void 0 || A.call(n, t, e, I)
    },
    S = function (I) {
      var A;
      f(), (A = n.onDayBlur) === null || A === void 0 || A.call(n, t, e, I)
    },
    E = function (I) {
      var A;
      (A = n.onDayMouseEnter) === null || A === void 0 || A.call(n, t, e, I)
    },
    T = function (I) {
      var A;
      (A = n.onDayMouseLeave) === null || A === void 0 || A.call(n, t, e, I)
    },
    P = function (I) {
      var A;
      (A = n.onDayPointerEnter) === null || A === void 0 || A.call(n, t, e, I)
    },
    C = function (I) {
      var A;
      (A = n.onDayPointerLeave) === null || A === void 0 || A.call(n, t, e, I)
    },
    M = function (I) {
      var A;
      (A = n.onDayTouchCancel) === null || A === void 0 || A.call(n, t, e, I)
    },
    L = function (I) {
      var A;
      (A = n.onDayTouchEnd) === null || A === void 0 || A.call(n, t, e, I)
    },
    D = function (I) {
      var A;
      (A = n.onDayTouchMove) === null || A === void 0 || A.call(n, t, e, I)
    },
    $ = function (I) {
      var A;
      (A = n.onDayTouchStart) === null || A === void 0 || A.call(n, t, e, I)
    },
    j = function (I) {
      var A;
      (A = n.onDayKeyUp) === null || A === void 0 || A.call(n, t, e, I)
    },
    F = function (I) {
      var A;
      switch (I.key) {
        case "ArrowLeft":
          I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? l() : c();
          break;
        case "ArrowRight":
          I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? c() : l();
          break;
        case "ArrowDown":
          I.preventDefault(), I.stopPropagation(), d();
          break;
        case "ArrowUp":
          I.preventDefault(), I.stopPropagation(), u();
          break;
        case "PageUp":
          I.preventDefault(), I.stopPropagation(), I.shiftKey ? v() : m();
          break;
        case "PageDown":
          I.preventDefault(), I.stopPropagation(), I.shiftKey ? g() : y();
          break;
        case "Home":
          I.preventDefault(), I.stopPropagation(), p();
          break;
        case "End":
          I.preventDefault(), I.stopPropagation(), _();
          break
      }(A = n.onDayKeyDown) === null || A === void 0 || A.call(n, t, e, I)
    },
    R = {
      onClick: w,
      onFocus: b,
      onBlur: S,
      onKeyDown: F,
      onKeyUp: j,
      onMouseEnter: E,
      onMouseLeave: T,
      onPointerEnter: P,
      onPointerLeave: C,
      onTouchCancel: M,
      onTouchEnd: L,
      onTouchMove: D,
      onTouchStart: $
    };
  return R
}

function Ure() {
  var t = rn(),
    e = ZO(),
    n = Q1(),
    r = eE(),
    s = jx(t) ? e.selected : Em(t) ? n.selected : Tm(t) ? r.selected : void 0;
  return s
}

function Bre(t) {
  return Object.values(Ai).includes(t)
}

function zre(t, e) {
  var n = [t.classNames.day];
  return Object.keys(e).forEach(function (r) {
    var s = t.modifiersClassNames[r];
    if (s) n.push(s);
    else if (Bre(r)) {
      var i = t.classNames["day_".concat(r)];
      i && n.push(i)
    }
  }), n
}

function Vre(t, e) {
  var n = gt({}, t.styles.day);
  return Object.keys(e).forEach(function (r) {
    var s;
    n = gt(gt({}, n), (s = t.modifiersStyles) === null || s === void 0 ? void 0 : s[r])
  }), n
}

function $re(t, e, n) {
  var r, s, i, o = rn(),
    l = nE(),
    c = Ire(t, e),
    d = Fre(t, c),
    u = Ure(),
    f = !!(o.onDayClick || o.mode !== "default");
  x.useEffect(function () {
    var E;
    c.outside || l.focusedDay && f && ns(l.focusedDay, t) && ((E = n.current) === null || E === void 0 || E.focus())
  }, [l.focusedDay, t, n, f, c.outside]);
  var h = zre(o, c).join(" "),
    m = Vre(o, c),
    y = !!(c.outside && !o.showOutsideDays || c.hidden),
    v = (i = (s = o.components) === null || s === void 0 ? void 0 : s.DayContent) !== null && i !== void 0 ? i : dre,
    g = a.jsx(v, {
      date: t,
      displayMonth: e,
      activeModifiers: c
    }),
    p = {
      style: m,
      className: h,
      children: g,
      role: "gridcell"
    },
    _ = l.focusTarget && ns(l.focusTarget, t) && !c.outside,
    w = l.focusedDay && ns(l.focusedDay, t),
    b = gt(gt(gt({}, p), (r = {
      disabled: c.disabled,
      role: "gridcell"
    }, r["aria-selected"] = c.selected, r.tabIndex = w || _ ? 0 : -1, r)), d),
    S = {
      isButton: f,
      isHidden: y,
      activeModifiers: c,
      selectedDays: u,
      buttonProps: b,
      divProps: p
    };
  return S
}

function Hre(t) {
  var e = x.useRef(null),
    n = $re(t.date, t.displayMonth, e);
  return n.isHidden ? a.jsx("div", {
    role: "gridcell"
  }) : n.isButton ? a.jsx(dv, gt({
    name: "day",
    ref: e
  }, n.buttonProps)) : a.jsx("div", gt({}, n.divProps))
}

function Wre(t) {
  var e = t.number,
    n = t.dates,
    r = rn(),
    s = r.onWeekNumberClick,
    i = r.styles,
    o = r.classNames,
    l = r.locale,
    c = r.labels.labelWeekNumber,
    d = r.formatters.formatWeekNumber,
    u = d(Number(e), {
      locale: l
    });
  if (!s) return a.jsx("span", {
    className: o.weeknumber,
    style: i.weeknumber,
    children: u
  });
  var f = c(Number(e), {
      locale: l
    }),
    h = function (m) {
      s(e, n, m)
    };
  return a.jsx(dv, {
    name: "week-number",
    "aria-label": f,
    className: o.weeknumber,
    style: i.weeknumber,
    onClick: h,
    children: u
  })
}

function Gre(t) {
  var e, n, r = rn(),
    s = r.styles,
    i = r.classNames,
    o = r.showWeekNumber,
    l = r.components,
    c = (e = l == null ? void 0 : l.Day) !== null && e !== void 0 ? e : Hre,
    d = (n = l == null ? void 0 : l.WeekNumber) !== null && n !== void 0 ? n : Wre,
    u;
  return o && (u = a.jsx("td", {
    className: i.cell,
    style: s.cell,
    children: a.jsx(d, {
      number: t.weekNumber,
      dates: t.dates
    })
  })), a.jsxs("tr", {
    className: i.row,
    style: s.row,
    children: [u, t.dates.map(function (f) {
      return a.jsx("td", {
        className: i.cell,
        style: s.cell,
        role: "presentation",
        children: a.jsx(c, {
          displayMonth: t.displayMonth,
          date: f
        })
      }, wne(f))
    })]
  })
}

function GM(t, e, n) {
  for (var r = n != null && n.ISOWeek ? OO(e) : Y1(e, n), s = n != null && n.ISOWeek ? xc(t) : Mi(t, n), i = Wi(r, s),
      o = [], l = 0; l <= i; l++) o.push(Pr(s, l));
  var c = o.reduce(function (d, u) {
    var f = n != null && n.ISOWeek ? FO(u) : cv(u, n),
      h = d.find(function (m) {
        return m.weekNumber === f
      });
    return h ? (h.dates.push(u), d) : (d.push({
      weekNumber: f,
      dates: [u]
    }), d)
  }, []);
  return c
}

function qre(t, e) {
  var n = GM(Br(t), Ax(t), e);
  if (e != null && e.useFixedWeeks) {
    var r = Sne(t, e);
    if (r < 6) {
      var s = n[n.length - 1],
        i = s.dates[s.dates.length - 1],
        o = gb(i, 6 - r),
        l = GM(gb(i, 1), o, e);
      n.push.apply(n, l)
    }
  }
  return n
}

function Yre(t) {
  var e, n, r, s = rn(),
    i = s.locale,
    o = s.classNames,
    l = s.styles,
    c = s.hideHead,
    d = s.fixedWeeks,
    u = s.components,
    f = s.weekStartsOn,
    h = s.firstWeekContainsDate,
    m = s.ISOWeek,
    y = qre(t.displayMonth, {
      useFixedWeeks: !!d,
      ISOWeek: m,
      locale: i,
      weekStartsOn: f,
      firstWeekContainsDate: h
    }),
    v = (e = u == null ? void 0 : u.Head) !== null && e !== void 0 ? e : cre,
    g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : Gre,
    p = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : are;
  return a.jsxs("table", {
    id: t.id,
    className: o.table,
    style: l.table,
    role: "grid",
    "aria-labelledby": t["aria-labelledby"],
    children: [!c && a.jsx(v, {}), a.jsx("tbody", {
      className: o.tbody,
      style: l.tbody,
      children: y.map(function (_) {
        return a.jsx(g, {
          displayMonth: t.displayMonth,
          dates: _.dates,
          weekNumber: _.weekNumber
        }, _.weekNumber)
      })
    }), a.jsx(p, {
      displayMonth: t.displayMonth
    })]
  })
}

function Xre() {
  return !!(typeof window < "u" && window.document && window.document.createElement)
}
var Kre = Xre() ? x.useLayoutEffect : x.useEffect,
  I0 = !1,
  Zre = 0;

function qM() {
  return "react-day-picker-".concat(++Zre)
}

function Qre(t) {
  var e, n = t ?? (I0 ? qM() : null),
    r = x.useState(n),
    s = r[0],
    i = r[1];
  return Kre(function () {
    s === null && i(qM())
  }, []), x.useEffect(function () {
    I0 === !1 && (I0 = !0)
  }, []), (e = t ?? s) !== null && e !== void 0 ? e : void 0
}

function Jre(t) {
  var e, n, r = rn(),
    s = r.dir,
    i = r.classNames,
    o = r.styles,
    l = r.components,
    c = Nm().displayMonths,
    d = Qre(r.id ? "".concat(r.id, "-").concat(t.displayIndex) : void 0),
    u = r.id ? "".concat(r.id, "-grid-").concat(t.displayIndex) : void 0,
    f = [i.month],
    h = o.month,
    m = t.displayIndex === 0,
    y = t.displayIndex === c.length - 1,
    v = !m && !y;
  s === "rtl" && (e = [m, y], y = e[0], m = e[1]), m && (f.push(i.caption_start), h = gt(gt({}, h), o.caption_start)),
    y && (f.push(i.caption_end), h = gt(gt({}, h), o.caption_end)), v && (f.push(i.caption_between), h = gt(gt({}, h), o
      .caption_between));
  var g = (n = l == null ? void 0 : l.Caption) !== null && n !== void 0 ? n : ire;
  return a.jsxs("div", {
    className: f.join(" "),
    style: h,
    children: [a.jsx(g, {
      id: d,
      displayMonth: t.displayMonth,
      displayIndex: t.displayIndex
    }), a.jsx(Yre, {
      id: u,
      "aria-labelledby": d,
      displayMonth: t.displayMonth
    })]
  }, t.displayIndex)
}

function ese(t) {
  var e = rn(),
    n = e.classNames,
    r = e.styles;
  return a.jsx("div", {
    className: n.months,
    style: r.months,
    children: t.children
  })
}

function tse(t) {
  var e, n, r = t.initialProps,
    s = rn(),
    i = nE(),
    o = Nm(),
    l = x.useState(!1),
    c = l[0],
    d = l[1];
  x.useEffect(function () {
    s.initialFocus && i.focusTarget && (c || (i.focus(i.focusTarget), d(!0)))
  }, [s.initialFocus, c, i.focus, i.focusTarget, i]);
  var u = [s.classNames.root, s.className];
  s.numberOfMonths > 1 && u.push(s.classNames.multiple_months), s.showWeekNumber && u.push(s.classNames
  .with_weeknumber);
  var f = gt(gt({}, s.styles.root), s.style),
    h = Object.keys(r).filter(function (y) {
      return y.startsWith("data-")
    }).reduce(function (y, v) {
      var g;
      return gt(gt({}, y), (g = {}, g[v] = r[v], g))
    }, {}),
    m = (n = (e = r.components) === null || e === void 0 ? void 0 : e.Months) !== null && n !== void 0 ? n : ese;
  return a.jsx("div", gt({
    className: u.join(" "),
    style: f,
    dir: s.dir,
    id: s.id,
    nonce: r.nonce,
    title: r.title,
    lang: r.lang
  }, h, {
    children: a.jsx(m, {
      children: o.displayMonths.map(function (y, v) {
        return a.jsx(Jre, {
          displayIndex: v,
          displayMonth: y
        }, v)
      })
    })
  }))
}

function nse(t) {
  var e = t.children,
    n = Nne(t, ["children"]);
  return a.jsx(Wne, {
    initialProps: n,
    children: a.jsx(tre, {
      children: a.jsx(Lre, {
        initialProps: n,
        children: a.jsx(ure, {
          initialProps: n,
          children: a.jsx(mre, {
            initialProps: n,
            children: a.jsx(bre, {
              children: a.jsx(Dre, {
                children: e
              })
            })
          })
        })
      })
    })
  })
}

function rse(t) {
  return a.jsx(nse, gt({}, t, {
    children: a.jsx(tse, {
      initialProps: t
    })
  }))
}

function xb({
  className: t,
  classNames: e,
  showOutsideDays: n = !0,
  ...r
}) {
  return a.jsx(rse, {
    showOutsideDays: n,
    className: de("p-3", t),
    classNames: {
      months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
      month: "space-y-4",
      caption: "flex justify-center pt-1 relative items-center",
      caption_label: "text-sm font-medium",
      nav: "space-x-1 flex items-center",
      nav_button: de(Rh({
        variant: "outline"
      }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
      nav_button_previous: "absolute left-1",
      nav_button_next: "absolute right-1",
      table: "w-full border-collapse space-y-1",
      head_row: "flex",
      head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
      day: de(Rh({
        variant: "ghost"
      }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
      day_range_end: "day-range-end",
      day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "bg-accent text-accent-foreground",
      day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
      day_disabled: "text-muted-foreground opacity-50",
      day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "invisible",
      ...e
    },
    components: {
      IconLeft: ({
        ...s
      }) => a.jsx(FB, {
        className: "h-4 w-4"
      }),
      IconRight: ({
        ...s
      }) => a.jsx(Jh, {
        className: "h-4 w-4"
      })
    },
    ...r
  })
}
xb.displayName = "Calendar";
var Rx = "Popover",
  [QO, Kle] = Jn(Rx, [ll]),
  Cm = ll(),
  [sse, ml] = QO(Rx),
  JO = t => {
    const {
      __scopePopover: e,
      children: n,
      open: r,
      defaultOpen: s,
      onOpenChange: i,
      modal: o = !1
    } = t, l = Cm(e), c = x.useRef(null), [d, u] = x.useState(!1), [f, h] = cs({
      prop: r,
      defaultProp: s ?? !1,
      onChange: i,
      caller: Rx
    });
    return a.jsx(Xv, {
      ...l,
      children: a.jsx(sse, {
        scope: e,
        contentId: On(),
        triggerRef: c,
        open: f,
        onOpenChange: h,
        onOpenToggle: x.useCallback(() => h(m => !m), [h]),
        hasCustomAnchor: d,
        onCustomAnchorAdd: x.useCallback(() => u(!0), []),
        onCustomAnchorRemove: x.useCallback(() => u(!1), []),
        modal: o,
        children: n
      })
    })
  };
JO.displayName = Rx;
var e3 = "PopoverAnchor",
  ise = x.forwardRef((t, e) => {
    const {
      __scopePopover: n,
      ...r
    } = t, s = ml(e3, n), i = Cm(n), {
      onCustomAnchorAdd: o,
      onCustomAnchorRemove: l
    } = s;
    return x.useEffect(() => (o(), () => l()), [o, l]), a.jsx(sm, {
      ...i,
      ...r,
      ref: e
    })
  });
ise.displayName = e3;
var t3 = "PopoverTrigger",
  n3 = x.forwardRef((t, e) => {
    const {
      __scopePopover: n,
      ...r
    } = t, s = ml(t3, n), i = Cm(n), o = xt(e, s.triggerRef), l = a.jsx(ke.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": o3(s.open),
      ...r,
      ref: o,
      onClick: Se(t.onClick, s.onOpenToggle)
    });
    return s.hasCustomAnchor ? l : a.jsx(sm, {
      asChild: !0,
      ...i,
      children: l
    })
  });
n3.displayName = t3;
var sE = "PopoverPortal",
  [ase, ose] = QO(sE, {
    forceMount: void 0
  }),
  r3 = t => {
    const {
      __scopePopover: e,
      forceMount: n,
      children: r,
      container: s
    } = t, i = ml(sE, e);
    return a.jsx(ase, {
      scope: e,
      forceMount: n,
      children: a.jsx(er, {
        present: n || i.open,
        children: a.jsx(ju, {
          asChild: !0,
          container: s,
          children: r
        })
      })
    })
  };
r3.displayName = sE;
var yu = "PopoverContent",
  s3 = x.forwardRef((t, e) => {
    const n = ose(yu, t.__scopePopover),
      {
        forceMount: r = n.forceMount,
        ...s
      } = t,
      i = ml(yu, t.__scopePopover);
    return a.jsx(er, {
      present: r || i.open,
      children: i.modal ? a.jsx(cse, {
        ...s,
        ref: e
      }) : a.jsx(dse, {
        ...s,
        ref: e
      })
    })
  });
s3.displayName = yu;
var lse = Zo("PopoverContent.RemoveScroll"),
  cse = x.forwardRef((t, e) => {
    const n = ml(yu, t.__scopePopover),
      r = x.useRef(null),
      s = xt(e, r),
      i = x.useRef(!1);
    return x.useEffect(() => {
      const o = r.current;
      if (o) return dx(o)
    }, []), a.jsx(dm, {
      as: lse,
      allowPinchZoom: !0,
      children: a.jsx(i3, {
        ...t,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Se(t.onCloseAutoFocus, o => {
          var l;
          o.preventDefault(), i.current || (l = n.triggerRef.current) == null || l.focus()
        }),
        onPointerDownOutside: Se(t.onPointerDownOutside, o => {
          const l = o.detail.originalEvent,
            c = l.button === 0 && l.ctrlKey === !0,
            d = l.button === 2 || c;
          i.current = d
        }, {
          checkForDefaultPrevented: !1
        }),
        onFocusOutside: Se(t.onFocusOutside, o => o.preventDefault(), {
          checkForDefaultPrevented: !1
        })
      })
    })
  }),
  dse = x.forwardRef((t, e) => {
    const n = ml(yu, t.__scopePopover),
      r = x.useRef(!1),
      s = x.useRef(!1);
    return a.jsx(i3, {
      ...t,
      ref: e,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        var o, l;
        (o = t.onCloseAutoFocus) == null || o.call(t, i), i.defaultPrevented || (r.current || (l = n.triggerRef
          .current) == null || l.focus(), i.preventDefault()), r.current = !1, s.current = !1
      },
      onInteractOutside: i => {
        var c, d;
        (c = t.onInteractOutside) == null || c.call(t, i), i.defaultPrevented || (r.current = !0, i.detail
          .originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((d = n.triggerRef.current) == null ? void 0 : d.contains(o)) && i.preventDefault(), i.detail
          .originalEvent.type === "focusin" && s.current && i.preventDefault()
      }
    })
  }),
  i3 = x.forwardRef((t, e) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: o,
      onEscapeKeyDown: l,
      onPointerDownOutside: c,
      onFocusOutside: d,
      onInteractOutside: u,
      ...f
    } = t, h = ml(yu, n), m = Cm(n);
    return lx(), a.jsx(lm, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: s,
      onUnmountAutoFocus: i,
      children: a.jsx(Tc, {
        asChild: !0,
        disableOutsidePointerEvents: o,
        onInteractOutside: u,
        onEscapeKeyDown: l,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onDismiss: () => h.onOpenChange(!1),
        children: a.jsx(Kv, {
          "data-state": o3(h.open),
          role: "dialog",
          id: h.contentId,
          ...m,
          ...f,
          ref: e,
          style: {
            ...f.style,
            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      })
    })
  }),
  a3 = "PopoverClose",
  use = x.forwardRef((t, e) => {
    const {
      __scopePopover: n,
      ...r
    } = t, s = ml(a3, n);
    return a.jsx(ke.button, {
      type: "button",
      ...r,
      ref: e,
      onClick: Se(t.onClick, () => s.onOpenChange(!1))
    })
  });
use.displayName = a3;
var fse = "PopoverArrow",
  hse = x.forwardRef((t, e) => {
    const {
      __scopePopover: n,
      ...r
    } = t, s = Cm(n);
    return a.jsx(Zv, {
      ...s,
      ...r,
      ref: e
    })
  });
hse.displayName = fse;

function o3(t) {
  return t ? "open" : "closed"
}
var mse = JO,
  pse = n3,
  gse = r3,
  l3 = s3;
const c3 = mse,
  d3 = pse,
  iE = x.forwardRef(({
    className: t,
    align: e = "center",
    sideOffset: n = 4,
    ...r
  }, s) => a.jsx(gse, {
    children: a.jsx(l3, {
      ref: s,
      align: e,
      sideOffset: n,
      className: de(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t),
      ...r
    })
  }));
iE.displayName = l3.displayName;
const vse = (t = "all", e, n) => {
    const r = Dn(),
      s = () => {
        const i = new Date;
        switch (t) {
          case "today":
            return {
              start: yc(i), end: fg(i)
            };
          case "week":
            return {
              start: Mi(i), end: fg(i)
            };
          case "month":
            return {
              start: Br(i), end: fg(i)
            };
          case "custom":
            return {
              start: e || Tne(i, 1), end: n || i
            };
          default:
            return {
              start: new Date("2024-01-01"), end: i
            }
        }
      };
    return Fn({
      queryKey: ["admin-analytics", t, e, n],
      queryFn: async () => {
        if (!r) throw new Error("Admin access required");
        const {
          start: i,
          end: o
        } = s(), {
          data: l,
          error: c
        } = await r.from("user_search_activity").select("*").gte("created_at", i.toISOString()).lte(
          "created_at", o.toISOString());
        if (c) throw c;
        const {
          data: d,
          error: u
        } = await r.from("user_compare_activity").select("*").gte("created_at", i.toISOString()).lte("created_at",
          o.toISOString());
        if (u) throw u;
        const {
          data: f,
          error: h
        } = await r.from("profiles").select("*").gte("created_at", i.toISOString()).lte("created_at", o
          .toISOString());
        if (h) throw h;
        let m = [];
        try {
          const {
            data: ve,
            error: Ne
          } = await r.from("user_payment_info").select("subscription_tier, subscription_created_at, created_at")
            .neq("subscription_tier", "free").gte("subscription_created_at", i.toISOString()).lte(
              "subscription_created_at", o.toISOString());
          !Ne && ve && (m = ve)
        } catch (ve) {
          console.warn("user_payment_info table not available:", ve)
        }
        const {
          data: y,
          error: v
        } = await r.from("brains").select("*").gte("created_at", i.toISOString()).lte("created_at", o
        .toISOString());
        if (v) throw v;
        const {
          data: g,
          error: p
        } = await r.from("labs").select("*").gte("created_at", i.toISOString()).lte("created_at", o
      .toISOString());
        if (p) throw p;
        const {
          data: _,
          error: w
        } = await r.from("brain_chat_sessions").select("*").gte("created_at", i.toISOString()).lte("created_at", o
          .toISOString());
        if (w) throw w;
        const {
          data: b,
          error: S
        } = await r.from("lab_chat_sessions").select("*").gte("created_at", i.toISOString()).lte("created_at", o
          .toISOString());
        if (S) throw S;
        const {
          data: E,
          error: T
        } = await r.from("brain_knowledge").select("*").gte("created_at", i.toISOString()).lte("created_at", o
          .toISOString());
        if (T) throw T;
        const {
          data: P,
          error: C
        } = await r.from("lab_knowledge").select("*").gte("created_at", i.toISOString()).lte("created_at", o
          .toISOString());
        if (C) throw C;
        let M = [];
        try {
          const {
            data: ve,
            error: Ne
          } = await r.from("brain_storage_subscriptions").select("*").eq("status", "active").gte("created_at", i
            .toISOString()).lte("created_at", o.toISOString());
          !Ne && ve && (M = ve)
        } catch (ve) {
          console.warn("brain_storage_subscriptions table not available:", ve)
        }
        let L = [];
        try {
          const {
            data: ve,
            error: Ne
          } = await r.from("lab_storage_subscriptions").select("*").eq("status", "active").gte("created_at", i
            .toISOString()).lte("created_at", o.toISOString());
          !Ne && ve && (L = ve)
        } catch (ve) {
          console.warn("lab_storage_subscriptions table not available:", ve)
        }
        const D = (l == null ? void 0 : l.length) || 0,
          $ = (d == null ? void 0 : d.length) || 0,
          j = (f == null ? void 0 : f.length) || 0,
          F = (m == null ? void 0 : m.filter(ve => ve.subscription_tier === "premium_monthly").length) || 0,
          R = (m == null ? void 0 : m.filter(ve => ve.subscription_tier === "premium_yearly").length) || 0,
          I = (y == null ? void 0 : y.length) || 0,
          A = (g == null ? void 0 : g.length) || 0,
          k = (_ == null ? void 0 : _.length) || 0,
          W = (b == null ? void 0 : b.length) || 0,
          G = ((E == null ? void 0 : E.length) || 0) + ((P == null ? void 0 : P.length) || 0),
          V = (M == null ? void 0 : M.reduce((ve, Ne) => ve + (Ne.monthly_price || 0), 0)) || 0,
          H = (L == null ? void 0 : L.reduce((ve, Ne) => ve + (Ne.monthly_price || 0), 0)) || 0,
          te = F * 9 + R * 90,
          J = V + H + te,
          ee = new Set([...(l == null ? void 0 : l.map(ve => ve.user_id)) || [], ...(d == null ? void 0 : d.map(
            ve => ve.user_id)) || [], ...(_ == null ? void 0 : _.map(ve => ve.user_id)) || [], ...(b == null ?
            void 0 : b.map(ve => ve.user_id)) || []]).size,
          me = j > 0 ? I / j : 0,
          ye = Math.floor((D + $) * 2.5),
          we = Math.floor((F + R) * 8),
          Ce = F + R,
          re = we > 0 ? Ce / we * 100 : 0;
        return {
          websiteVisitors: ye,
          mainSearches: D,
          compareSearches: $,
          newAccounts: j,
          monthlySold: F,
          yearlySold: R,
          pricingViews: we,
          conversions: Ce,
          conversionRate: re,
          brainsCreated: I,
          labsCreated: A,
          brainChatSessions: k,
          labChatSessions: W,
          knowledgeItemsAdded: G,
          brainSubscriptionRevenue: V,
          labStorageRevenue: H,
          activeUsers: ee,
          totalRevenue: J,
          avgBrainsPerUser: me
        }
      },
      enabled: !!r,
      refetchOnWindowFocus: !1,
      staleTime: 5 * 60 * 1e3
    })
  };
