// Route: /adams-list/:slug
// Component symbol: _le
// Source lines: 71788-72143

const _le = () => {
    const {
      slug: t
    } = o1(), {
      data: e,
      isLoading: n
    } = Bae(t), {
      data: r,
      isLoading: s
    } = FF(e == null ? void 0 : e.id), i = n || s, o = d => ({
      1: "🥇 #1",
      2: "🥈 #2",
      3: "🥉 #3",
      999: "⭐"
    })[d] || `#${d}`, l = d => ({
      1: "bg-yellow-100 text-yellow-800 border-yellow-300",
      2: "bg-gray-100 text-gray-800 border-gray-300",
      3: "bg-orange-100 text-orange-800 border-orange-300",
      999: "bg-purple-100 text-purple-800 border-purple-300"
    })[d] || "bg-blue-100 text-blue-800 border-blue-300";
    if (i) return a.jsx("div", {
      className: "min-h-screen bg-background",
      children: a.jsx("div", {
        className: "container mx-auto px-4 py-8",
        children: a.jsx("div", {
          className: "flex items-center justify-center h-64",
          children: a.jsx("div", {
            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
          })
        })
      })
    });
    if (!e) return a.jsx("div", {
      className: "min-h-screen bg-background",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 py-16 text-center",
        children: [a.jsx("h1", {
          className: "text-2xl font-bold mb-4",
          children: "Blog Post Not Found"
        }), a.jsx(Ba, {
          to: "/adams-list",
          children: a.jsxs(ue, {
            children: [a.jsx(cc, {
              className: "w-4 h-4 mr-2"
            }), "Back to Adam's List"]
          })
        })]
      })
    });
    const c = (r == null ? void 0 : r.sort((d, u) => d.rank - u.rank)) || [];
    return a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: e.seo_title,
        description: e.meta_description || void 0,
        keywords: e.keywords,
        canonicalUrl: `https://yourdomain.com/adams-list/${e.slug}`
      }), a.jsx("div", {
        className: "min-h-screen bg-background",
        children: a.jsxs("div", {
          className: "container mx-auto px-3 sm:px-4 py-4 sm:py-8",
          children: [a.jsx("div", {
            className: "mb-6 sm:mb-8",
            children: a.jsx(Ba, {
              to: "/adams-list",
              children: a.jsxs(ue, {
                variant: "outline",
                size: "sm",
                className: "text-xs sm:text-sm",
                children: [a.jsx(cc, {
                  className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                }), "Back to Adam's List"]
              })
            })
          }), a.jsxs("article", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("header", {
              className: "text-center mb-8 sm:mb-12 px-2",
              children: [a.jsx("h1", {
                className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight",
                children: e.title
              }), a.jsxs("div", {
                className: "text-xs sm:text-sm text-muted-foreground space-y-1",
                children: [a.jsxs("p", {
                  children: ["Published on ", new Date(e.created_at)
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })
                  ]
                }), e.updated_at !== e.created_at && a.jsxs("p", {
                  children: ["Last updated ", new Date(e.updated_at)
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })
                  ]
                })]
              })]
            }), a.jsx("section", {
              className: "mb-8 sm:mb-12 px-2",
              children: a.jsx("div", {
                className: "prose prose-sm sm:prose-base lg:prose-lg max-w-none",
                children: a.jsx("div", {
                  className: "text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground",
                  dangerouslySetInnerHTML: {
                    __html: sd.sanitize(e.intro_content || "")
                  }
                })
              })
            }), c.length > 0 && a.jsx("section", {
              className: "mb-8 sm:mb-12",
              children: a.jsx("div", {
                className: "space-y-4 sm:space-y-6 lg:space-y-8",
                children: c.map(d => {
                  var f, h;
                  const u = d.tools;
                  return u ? a.jsx(je, {
                    className: "border-2 hover:shadow-lg transition-shadow",
                    children: a.jsx(Ve, {
                      className: "p-4 sm:p-6 lg:p-8",
                      children: a.jsxs("div", {
                        className: "space-y-4",
                        children: [a.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [a.jsx(tt, {
                            className: `text-lg sm:text-xl lg:text-2xl font-bold px-3 py-1 sm:px-4 sm:py-2 ${l(d.rank)}`,
                            children: o(d.rank)
                          }), (d.affiliate_link || u
                            .website_url) && a.jsx(ue, {
                            asChild: !0,
                            size: "sm",
                            className: "text-xs sm:text-sm",
                            children: a.jsxs("a", {
                              href: d.affiliate_link || u
                                .website_url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: ["Try It", a.jsx(
                                Jl, {
                                  className: "w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
                                })]
                            })
                          })]
                        }), a.jsxs("div", {
                          className: "flex items-start space-x-3 sm:space-x-4",
                          children: [u.logo_url && a.jsx("img", {
                            src: u.logo_url,
                            alt: `${u.name} logo`,
                            className: "w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                          }), a.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [a.jsx("h3", {
                              className: "text-lg sm:text-xl lg:text-2xl font-bold break-words",
                              children: u.name
                            }), a.jsxs("div", {
                              className: "flex flex-wrap items-center gap-2 mt-1",
                              children: [u.price && a
                                .jsx(tt, {
                                  variant: "outline",
                                  className: "text-xs",
                                  children: u.price
                                }), u.rating && a
                                .jsxs("div", {
                                  className: "flex items-center space-x-1",
                                  children: [a.jsx(
                                    nm, {
                                      className: "w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                                    }), a.jsx(
                                    "span", {
                                      className: "text-xs sm:text-sm text-muted-foreground",
                                      children: u
                                        .rating
                                    })]
                                })
                              ]
                            })]
                          })]
                        }), d.detailed_review && a.jsx(IA, {
                          type: "single",
                          collapsible: !0,
                          className: "w-full",
                          children: a.jsxs(Db, {
                            value: "review",
                            className: "border-none",
                            children: [a.jsx(Ib, {
                              className: "text-sm sm:text-base font-semibold hover:no-underline py-2",
                              children: "Read Full Review"
                            }), a.jsx(Lb, {
                              children: a.jsx("div", {
                                className: "prose prose-sm sm:prose-base lg:prose-lg max-w-none pt-2",
                                dangerouslySetInnerHTML: {
                                  __html: sd.sanitize(
                                    d
                                    .detailed_review ||
                                    "")
                                }
                              })
                            })]
                          })
                        }), (((f = d.pros) == null ? void 0 : f
                          .length) || ((h = d.cons) == null ?
                          void 0 : h.length)) && a.jsxs("div", {
                          className: "grid gap-4 sm:grid-cols-2",
                          children: [d.pros && d.pros.length > 0 &&
                            a.jsxs("div", {
                              className: "space-y-2",
                              children: [a.jsx("h4", {
                                className: "font-semibold text-sm sm:text-base text-green-700",
                                children: "Strengths:"
                              }), a.jsx("ul", {
                                className: "space-y-1",
                                children: d.pros.map((m,
                                  y) => a.jsxs("li", {
                                  className: "text-xs sm:text-sm flex items-start",
                                  children: [a.jsx(
                                    "span", {
                                      className: "text-green-600 mr-2 flex-shrink-0",
                                      children: "✓"
                                    }), a.jsx(
                                    "span", {
                                      children: m
                                    })]
                                }, y))
                              })]
                            }), d.cons && d.cons.length > 0 && a
                            .jsxs("div", {
                              className: "space-y-2",
                              children: [a.jsx("h4", {
                                className: "font-semibold text-sm sm:text-base text-red-700",
                                children: "Weaknesses:"
                              }), a.jsx("ul", {
                                className: "space-y-1",
                                children: d.cons.map((m,
                                  y) => a.jsxs("li", {
                                  className: "text-xs sm:text-sm flex items-start",
                                  children: [a.jsx(
                                    "span", {
                                      className: "text-red-600 mr-2 flex-shrink-0",
                                      children: "✗"
                                    }), a.jsx(
                                    "span", {
                                      children: m
                                    })]
                                }, y))
                              })]
                            })
                          ]
                        })]
                      })
                    })
                  }, d.id) : null
                })
              })
            }), e.tutorials_content && a.jsxs("section", {
              className: "mb-8 sm:mb-12 px-2",
              children: [a.jsx("h2", {
                className: "text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",
                children: "🎥 Tutorials"
              }), a.jsx("div", {
                className: "space-y-4 sm:space-y-6",
                children: (() => {
                  const d = e.tutorials_content,
                    u =
                    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/gi,
                    f = [...d.matchAll(u)];
                  if (f.length > 0) {
                    const h = [...new Set(f.map(y => y[1]))];
                    let m = d.replace(u, "");
                    return a.jsxs(a.Fragment, {
                      children: [m.trim() && a.jsx(je, {
                        children: a.jsx(Ve, {
                          className: "p-4 sm:p-6",
                          children: a.jsx("div", {
                            className: "prose prose-sm sm:prose-base lg:prose-lg max-w-none",
                            dangerouslySetInnerHTML: {
                              __html: sd.sanitize(m)
                            }
                          })
                        })
                      }), h.map((y, v) => a.jsx("div", {
                        className: "rounded-lg overflow-hidden shadow-lg",
                        children: a.jsx("div", {
                          className: "aspect-video w-full",
                          children: a.jsx("iframe", {
                            src: `https://www.youtube.com/embed/${y}`,
                            title: `Tutorial Video ${v+1}`,
                            className: "w-full h-full",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: !0
                          })
                        })
                      }, v))]
                    })
                  }
                  return a.jsx(je, {
                    children: a.jsx(Ve, {
                      className: "p-4 sm:p-6",
                      children: a.jsx("div", {
                        className: "prose prose-sm sm:prose-base lg:prose-lg max-w-none",
                        dangerouslySetInnerHTML: {
                          __html: sd.sanitize(d)
                        }
                      })
                    })
                  })
                })()
              })]
            }), e.faq_content && e.faq_content.length > 0 && a.jsxs("section", {
              className: "mb-8 sm:mb-12 px-2",
              children: [a.jsx("h2", {
                className: "text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",
                children: "❓ Frequently Asked Questions"
              }), a.jsx(IA, {
                type: "single",
                collapsible: !0,
                className: "space-y-3 sm:space-y-4",
                children: e.faq_content.map((d, u) => a.jsxs(Db, {
                  value: `faq-${u}`,
                  className: "border rounded-lg px-3 sm:px-4",
                  children: [a.jsx(Ib, {
                    className: "text-left text-sm sm:text-base font-semibold hover:no-underline py-3 sm:py-4",
                    children: d.question
                  }), a.jsx(Lb, {
                    className: "text-muted-foreground text-xs sm:text-sm",
                    children: a.jsx("div", {
                      dangerouslySetInnerHTML: {
                        __html: sd.sanitize(d.answer || "")
                      }
                    })
                  })]
                }, u))
              })]
            }), a.jsxs("section", {
              className: "mb-8 sm:mb-12 px-2",
              children: [a.jsx("h2", {
                className: "text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",
                children: "🚀 Conclusion"
              }), a.jsx(je, {
                children: a.jsx(Ve, {
                  className: "p-4 sm:p-6",
                  children: a.jsx("div", {
                    className: "prose prose-sm sm:prose-base lg:prose-lg max-w-none",
                    dangerouslySetInnerHTML: {
                      __html: sd.sanitize(e.conclusion_content || "")
                    }
                  })
                })
              })]
            })]
          })]
        })
      })]
    })
  };
