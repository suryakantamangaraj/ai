// Route: /weekly
// Component symbol: Foe
// Source lines: 69914-70129

function Foe() {
  const {
    data: t,
    isLoading: e
  } = Wae(), {
    data: n
  } = Gae(), [r, s] = x.useState(null), [i, o] = x.useState(!1), l = f => {
    const h = Math.floor(f / 60),
      m = f % 60;
    return `${h}:${m.toString().padStart(2,"0")}`
  }, c = f => {
    s(f), o(!0)
  }, d = () => {
    n && c(n)
  }, u = (t == null ? void 0 : t.filter(f => f.id !== (n == null ? void 0 : n.id))) || [];
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
          children: [...Array(6)].map((f, h) => a.jsx("div", {
            className: "h-72 bg-muted rounded-lg"
          }, h))
        })]
      })
    })]
  }) : a.jsxs(a.Fragment, {
    children: [a.jsx(ws, {
      title: "Weekly AI - Latest AI Industry Insights and Analysis",
      description: "Stay updated with the latest AI industry trends, tool reviews, and insights through our weekly video blog series.",
      keywords: ["weekly AI", "AI trends", "AI tools", "AI analysis", "artificial intelligence news"]
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
        className: "relative z-10 py-20 px-4 text-center",
        children: a.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [a.jsx("h1", {
            className: "text-6xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent logo-glow",
            children: "Weekly AI"
          }), a.jsx("p", {
            className: "text-xl text-muted-foreground mb-8 leading-relaxed",
            children: "Your weekly dose of AI industry insights, tool reviews, and emerging trends"
          })]
        })
      }), a.jsxs("main", {
        className: "relative z-10 container mx-auto px-4 pb-8",
        children: [a.jsx("div", {
          className: "mb-12",
          children: n ? a.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: a.jsxs("div", {
              className: "relative overflow-hidden rounded-2xl bg-card border shadow-lg",
              children: [a.jsx("div", {
                className: "relative",
                children: a.jsxs("div", {
                  className: "relative aspect-video",
                  children: [n.thumbnail_url ? a.jsx("img", {
                    src: n.thumbnail_url,
                    alt: `Week ${n.week_number} - ${n.title}`,
                    className: "w-full h-full object-cover"
                  }) : a.jsx("div", {
                    className: "w-full h-full bg-muted flex items-center justify-center",
                    children: a.jsx(Ki, {
                      className: "h-16 w-16 text-muted-foreground"
                    })
                  }), a.jsx("div", {
                    className: "absolute inset-0 bg-black/30 flex items-center justify-center",
                    children: a.jsx(ue, {
                      size: "lg",
                      onClick: d,
                      className: "bg-white/90 text-primary hover:bg-white rounded-full p-6",
                      children: a.jsx(Ki, {
                        className: "h-8 w-8"
                      })
                    })
                  }), n.duration && a.jsxs(tt, {
                    variant: "secondary",
                    className: "absolute bottom-4 right-4 bg-black/70 text-white border-0",
                    children: [a.jsx($v, {
                      className: "h-3 w-3 mr-1"
                    }), l(n.duration)]
                  })]
                })
              }), a.jsxs("div", {
                className: "p-6",
                children: [a.jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [a.jsxs(tt, {
                    variant: "default",
                    className: "font-semibold",
                    children: ["Week ", n.week_number]
                  }), a.jsxs(tt, {
                    variant: "outline",
                    children: [a.jsx(dc, {
                      className: "h-3 w-3 mr-1"
                    }), n.year]
                  }), a.jsx("span", {
                    className: "text-sm text-muted-foreground",
                    children: new Date(n.publish_date)
                      .toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })
                  })]
                }), a.jsx("h2", {
                  className: "text-2xl font-bold mb-3",
                  children: n.title
                }), n.description && a.jsx("p", {
                  className: "text-muted-foreground leading-relaxed",
                  children: n.description
                })]
              })]
            })
          }) : a.jsx("div", {
            className: "max-w-4xl mx-auto text-center py-12",
            children: a.jsxs("div", {
              className: "bg-muted rounded-2xl p-12",
              children: [a.jsx(Ki, {
                className: "h-16 w-16 text-muted-foreground mx-auto mb-4"
              }), a.jsx("h2", {
                className: "text-xl font-semibold mb-2",
                children: "No Current Episode"
              }), a.jsx("p", {
                className: "text-muted-foreground",
                children: "Stay tuned for the latest weekly AI episode!"
              })]
            })
          })
        }), u.length > 0 && a.jsxs("div", {
          children: [a.jsx("h2", {
            className: "text-2xl font-bold mb-6",
            children: "Previous Episodes"
          }), a.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: u.map(f => a.jsx(Ooe, {
              episode: f,
              onClick: c
            }, f.id))
          })]
        }), (t == null ? void 0 : t.length) === 0 && a.jsxs("div", {
          className: "text-center py-12",
          children: [a.jsx("h2", {
            className: "text-xl font-semibold mb-2",
            children: "Coming Soon"
          }), a.jsx("p", {
            className: "text-muted-foreground",
            children: "Weekly AI episodes will be available here soon!"
          })]
        })]
      }), r && a.jsx(XL, {
        tutorial: {
          id: r.id,
          title: `Week ${r.week_number}: ${r.title}`,
          description: r.description,
          video_url: r.video_url,
          thumbnail_url: r.thumbnail_url,
          duration: r.duration,
          difficulty_level: void 0,
          is_featured: !1
        },
        isOpen: i,
        onClose: () => {
          o(!1), s(null)
        }
      })]
    })]
  })
}
const Uoe = "/assets/adam-next-C5oicuT4.jpeg";
