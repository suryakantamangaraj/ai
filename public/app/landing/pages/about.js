// Route: /about
// Component symbol: Boe
// Source lines: 70130-71787

const Boe = () => {
    x.useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
    const t = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      mainEntity: {
        "@type": "Organization",
        name: "AI Verse",
        url: "https://aiverse.com",
        logo: "https://aiverse.com/logo.png",
        founder: {
          "@type": "Person",
          name: "Adam Next",
          sameAs: "https://www.instagram.com/adamnextofficial/"
        },
        description: "AI Verse is the ultimate AI tools directory powered by expert curation and intelligent recommendations, helping you discover the perfect AI tools for your needs.",
        knowsAbout: ["Artificial Intelligence", "AI Tools", "Machine Learning", "AI Software", "Technology"],
        audience: {
          "@type": "Audience",
          audienceType: "AI enthusiasts, developers, business owners"
        }
      }
    };
    return a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "About AI Verse - Expert-Curated AI Tools Directory | Adam Next",
        description: "Discover why AI Verse is the leading AI tools directory. Get personalized AI tool recommendations from a database curated by Adam Next and backed by 600+ AI experts from the AI Builders community.",
        keywords: ["about AI Verse", "AI tools expert", "Adam Next", "AI tool recommendations",
          "curated AI directory", "AI Builders community", "best AI tools", "AI tool database",
          "expert AI curation", "personalized AI recommendations"
        ],
        structuredData: t
      }), a.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [a.jsxs("section", {
          className: "relative py-20 px-4 overflow-hidden bg-gradient-to-br from-aiverse-primary/10 via-background to-aiverse-accent/10",
          children: [a.jsxs("div", {
            className: "absolute inset-0",
            children: [a.jsx("div", {
              className: "absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-aiverse-primary/30 to-transparent rounded-full blur-3xl animate-float"
            }), a.jsx("div", {
              className: "absolute bottom-10 right-20 w-[500px] h-[500px] bg-gradient-to-br from-aiverse-accent/30 to-transparent rounded-full blur-3xl animate-pulse"
            }), a.jsx("div", {
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-aiverse-primary/10 via-aiverse-accent/10 to-transparent rounded-full blur-3xl animate-glow-pulse"
            })]
          }), a.jsx("div", {
            className: "max-w-6xl mx-auto relative z-10",
            children: a.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12 items-center",
              children: [a.jsxs("div", {
                children: [a.jsx("div", {
                  className: "inline-block mb-6 px-5 py-2.5 bg-gradient-to-r from-aiverse-primary/20 to-aiverse-accent/20 border border-aiverse-primary/30 rounded-full backdrop-blur-sm animate-fade-in",
                  children: a.jsx("span", {
                    className: "text-sm font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                    children: "The Smart Way to Find AI Tools"
                  })
                }), a.jsxs("h1", {
                  className: "text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up",
                  children: [a.jsx("span", {
                    className: "bg-gradient-to-r from-aiverse-primary via-aiverse-accent to-aiverse-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent",
                    children: "AI-Powered Search"
                  }), a.jsx("br", {}), a.jsx("span", {
                    className: "text-foreground drop-shadow-lg",
                    children: "Meets My Expert Curation"
                  })]
                }), a.jsxs("p", {
                  className: "text-xl text-muted-foreground mb-4 leading-relaxed",
                  children: ["Stop wasting hours comparing AI tools. Just ", a
                    .jsx("strong", {
                      className: "text-foreground",
                      children: "describe what you need"
                    }), ", and my AI instantly searches through ", a.jsx(
                      "strong", {
                        className: "text-foreground",
                        children: "my hand-curated database"
                      }), " of the best tools."
                  ]
                }), a.jsx("p", {
                  className: "text-lg text-muted-foreground mb-8 leading-relaxed",
                  children: "Get personalized, expert-backed recommendations in seconds—not generic rankings, but tools that actually match your specific use case."
                }), a.jsxs("div", {
                  className: "flex flex-wrap gap-4 mb-6",
                  children: [a.jsx(ue, {
                    size: "lg",
                    asChild: !0,
                    className: "bg-gradient-to-r from-aiverse-primary to-aiverse-accent hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105",
                    children: a.jsxs("a", {
                      href: "/",
                      children: [a.jsx(Hn, {
                        className: "mr-2 h-5 w-5"
                      }), "Try AI Search Now"]
                    })
                  }), a.jsx(ue, {
                    size: "lg",
                    variant: "outline",
                    asChild: !0,
                    className: "border-aiverse-primary/50 hover:bg-aiverse-primary/10 hover:border-aiverse-primary transition-all duration-300",
                    children: a.jsxs("a", {
                      href: "https://www.instagram.com/adamnextofficial/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [a.jsx(aw, {
                        className: "mr-2 h-5 w-5"
                      }), "Follow Adam"]
                    })
                  })]
                }), a.jsxs("div", {
                  className: "flex items-center gap-4 text-sm text-muted-foreground",
                  children: [a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx("div", {
                      className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    }), a.jsx("span", {
                      children: "Updated Daily"
                    })]
                  }), a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx(_r, {
                      className: "w-4 h-4"
                    }), a.jsx("span", {
                      children: "600+ AI Experts"
                    })]
                  })]
                })]
              }), a.jsxs("div", {
                className: "relative group",
                children: [a.jsx("div", {
                  className: "absolute -inset-1 bg-gradient-to-r from-aiverse-primary via-aiverse-accent to-aiverse-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 animate-glow-pulse"
                }), a.jsxs("div", {
                  className: "relative rounded-2xl overflow-hidden shadow-2xl border-2 border-aiverse-primary/30 group-hover:border-aiverse-primary/60 transition-all duration-300",
                  children: [a.jsx("img", {
                    src: Uoe,
                    alt: "Adam Next - Founder of AI Verse and AI Tools Expert",
                    className: "w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500",
                    loading: "eager"
                  }), a.jsxs("div", {
                    className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 backdrop-blur-sm",
                    children: [a.jsx("h3", {
                      className: "text-white font-bold text-2xl mb-1 drop-shadow-lg",
                      children: "Hi, I'm Adam Next"
                    }), a.jsx("p", {
                      className: "text-white/90 text-sm font-medium mb-3",
                      children: "AI Tools Expert & Founder of AI Verse"
                    }), a.jsx("div", {
                      className: "flex gap-2",
                      children: a.jsxs("a", {
                        href: "https://www.instagram.com/adamnextofficial/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-white/20 hover:border-white/40",
                        children: [a.jsx(aw, {
                          className: "w-4 h-4"
                        }), a.jsx("span", {
                          className: "text-sm font-medium",
                          children: "@adamnextofficial"
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        }), a.jsxs("section", {
          className: "relative py-20 px-4 overflow-hidden",
          children: [a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-background via-aiverse-primary/5 to-background"
          }), a.jsxs("div", {
            className: "max-w-6xl mx-auto relative z-10",
            children: [a.jsxs("div", {
              className: "text-center mb-16 animate-fade-in-up",
              children: [a.jsx("h2", {
                className: "text-3xl md:text-5xl font-bold mb-4",
                children: a.jsx("span", {
                  className: "bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                  children: "Why AI Verse is Different"
                })
              }), a.jsx("p", {
                className: "text-xl text-muted-foreground max-w-3xl mx-auto",
                children: "We combine the precision of AI with the wisdom of human expertise"
              })]
            }), a.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8 mb-12",
              children: [a.jsx(je, {
                className: "border-2 border-destructive/20 hover:border-destructive/30 transition-colors",
                children: a.jsxs(Ve, {
                  className: "pt-6",
                  children: [a.jsxs("div", {
                    className: "flex items-start gap-4 mb-4",
                    children: [a.jsx("div", {
                      className: "w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0",
                      children: a.jsx("span", {
                        className: "text-2xl",
                        children: "❌"
                      })
                    }), a.jsxs("div", {
                      children: [a.jsx("h3", {
                        className: "text-xl font-semibold mb-2 text-destructive",
                        children: "Traditional AI Directories"
                      }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Generic, outdated, overwhelming"
                      })]
                    })]
                  }), a.jsxs("ul", {
                    className: "space-y-3 text-muted-foreground",
                    children: [a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-destructive mt-1",
                        children: "•"
                      }), a.jsx("span", {
                        children: "Thousands of tools with no real filtering"
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-destructive mt-1",
                        children: "•"
                      }), a.jsx("span", {
                        children: "Biased toward paid placements, not quality"
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-destructive mt-1",
                        children: "•"
                      }), a.jsx("span", {
                        children: "You spend hours comparing and still feel uncertain"
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-destructive mt-1",
                        children: "•"
                      }), a.jsx("span", {
                        children: "No understanding of your specific needs"
                      })]
                    })]
                  })]
                })
              }), a.jsx(je, {
                className: "border-2 border-primary/50 hover:border-primary transition-colors bg-gradient-to-br from-primary/5 to-accent/5",
                children: a.jsxs(Ve, {
                  className: "pt-6",
                  children: [a.jsxs("div", {
                    className: "flex items-start gap-4 mb-4",
                    children: [a.jsx("div", {
                      className: "w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0",
                      children: a.jsx("span", {
                        className: "text-2xl",
                        children: "✨"
                      })
                    }), a.jsxs("div", {
                      children: [a.jsx("h3", {
                        className: "text-xl font-semibold mb-2 text-primary",
                        children: "The AI Verse Way"
                      }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Smart, curated, personalized"
                      })]
                    })]
                  }), a.jsxs("ul", {
                    className: "space-y-3 text-muted-foreground",
                    children: [a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-primary mt-1",
                        children: "✓"
                      }), a.jsxs("span", {
                        children: [a.jsx("strong", {
                          className: "text-foreground",
                          children: "AI understands your prompt"
                        }), " and searches intelligently"]
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-primary mt-1",
                        children: "✓"
                      }), a.jsxs("span", {
                        children: [a.jsx("strong", {
                          className: "text-foreground",
                          children: "Expert-curated database"
                        }), " of only the best tools"]
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-primary mt-1",
                        children: "✓"
                      }), a.jsxs("span", {
                        children: [a.jsx("strong", {
                          className: "text-foreground",
                          children: "Get answers in seconds"
                        }), ", not hours of research"]
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx("span", {
                        className: "text-primary mt-1",
                        children: "✓"
                      }), a.jsxs("span", {
                        children: [a.jsx("strong", {
                            className: "text-foreground",
                            children: "Updated daily"
                          }),
                          " by AI experts, not algorithms"]
                      })]
                    })]
                  })]
                })
              })]
            }), a.jsxs("div", {
              className: "grid md:grid-cols-3 gap-6",
              children: [a.jsxs("div", {
                className: "group relative",
                children: [a.jsx("div", {
                  className: "absolute -inset-0.5 bg-gradient-to-r from-aiverse-primary to-aiverse-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                }), a.jsx(je, {
                  className: "relative border-2 border-aiverse-primary/30 hover:border-aiverse-primary/60 transition-all duration-300 h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
                  children: a.jsxs(Ve, {
                    className: "pt-6",
                    children: [a.jsx("div", {
                      className: "w-14 h-14 rounded-xl bg-gradient-to-br from-aiverse-primary to-aiverse-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300",
                      children: a.jsx(Hn, {
                        className: "h-7 w-7 text-white"
                      })
                    }), a.jsx("h3", {
                      className: "text-xl font-bold mb-3",
                      children: "Natural Language Search"
                    }), a.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: 'Tell our AI exactly what you need: "I want to automate my social media posts" or "I need to transcribe podcast episodes". No keyword hunting required.'
                    })]
                  })
                })]
              }), a.jsxs("div", {
                className: "group relative",
                children: [a.jsx("div", {
                  className: "absolute -inset-0.5 bg-gradient-to-r from-aiverse-primary to-aiverse-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                }), a.jsx(je, {
                  className: "relative border-2 border-aiverse-primary/30 hover:border-aiverse-primary/60 transition-all duration-300 h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
                  children: a.jsxs(Ve, {
                    className: "pt-6",
                    children: [a.jsx("div", {
                      className: "w-14 h-14 rounded-xl bg-gradient-to-br from-aiverse-primary to-aiverse-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300",
                      children: a.jsx(sw, {
                        className: "h-7 w-7 text-white"
                      })
                    }), a.jsx("h3", {
                      className: "text-xl font-bold mb-3",
                      children: "Hand-Picked by Me"
                    }), a.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: "I personally test and curate every tool. Each entry includes real insights, not just scraped marketing copy. Quality over quantity, always."
                    })]
                  })
                })]
              }), a.jsxs("div", {
                className: "group relative",
                children: [a.jsx("div", {
                  className: "absolute -inset-0.5 bg-gradient-to-r from-aiverse-primary to-aiverse-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                }), a.jsx(je, {
                  className: "relative border-2 border-aiverse-primary/30 hover:border-aiverse-primary/60 transition-all duration-300 h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
                  children: a.jsxs(Ve, {
                    className: "pt-6",
                    children: [a.jsx("div", {
                      className: "w-14 h-14 rounded-xl bg-gradient-to-br from-aiverse-primary to-aiverse-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300",
                      children: a.jsx(_r, {
                        className: "h-7 w-7 text-white"
                      })
                    }), a.jsx("h3", {
                      className: "text-xl font-bold mb-3",
                      children: "Community Validated"
                    }), a.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: "Backed by 600+ members of the AI Builders Skool community who use these tools daily. Real practitioners, real feedback."
                    })]
                  })
                })]
              })]
            })]
          })]
        }), a.jsxs("section", {
          className: "relative py-20 px-4 overflow-hidden",
          children: [a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-background via-aiverse-primary/5 to-background"
          }), a.jsxs("div", {
            className: "max-w-4xl mx-auto relative z-10",
            children: [a.jsxs("div", {
              className: "text-center mb-12 animate-fade-in-up",
              children: [a.jsx("h2", {
                className: "text-3xl md:text-5xl font-bold mb-6",
                children: a.jsx("span", {
                  className: "bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                  children: "About Me"
                })
              }), a.jsx("p", {
                className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed",
                children: "I'm an AI tools expert, content creator, and founder of AI Verse. I've spent years testing, comparing, and mastering hundreds of AI tools to help others navigate the rapidly evolving AI landscape."
              })]
            }), a.jsxs("div", {
              className: "relative group",
              children: [a.jsx("div", {
                className: "absolute -inset-1 bg-gradient-to-r from-aiverse-primary to-aiverse-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"
              }), a.jsx(je, {
                className: "relative border-2 border-aiverse-primary/30 hover:border-aiverse-primary/60 transition-all duration-300 bg-gradient-to-br from-aiverse-primary/5 to-background",
                children: a.jsx(Ve, {
                  className: "pt-6",
                  children: a.jsxs("div", {
                    className: "space-y-6",
                    children: [a.jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [a.jsx("div", {
                        className: "w-12 h-12 rounded-xl bg-gradient-to-br from-aiverse-primary to-aiverse-accent flex items-center justify-center flex-shrink-0 shadow-lg",
                        children: a.jsx(GR, {
                          className: "h-6 w-6 text-white"
                        })
                      }), a.jsxs("div", {
                        children: [a.jsx("h3", {
                          className: "font-bold text-xl mb-2",
                          children: "Mission-Driven Curation"
                        }), a.jsx("p", {
                          className: "text-muted-foreground leading-relaxed",
                          children: "Unlike algorithmic directories, every tool recommendation comes from real-world testing and hands-on experience. I personally evaluate each tool's capabilities, use cases, and value proposition."
                        })]
                      })]
                    }), a.jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [a.jsx("div", {
                        className: "w-12 h-12 rounded-xl bg-gradient-to-br from-aiverse-primary to-aiverse-accent flex items-center justify-center flex-shrink-0 shadow-lg",
                        children: a.jsx(Sh, {
                          className: "h-6 w-6 text-white"
                        })
                      }), a.jsxs("div", {
                        children: [a.jsx("h3", {
                          className: "font-bold text-xl mb-2",
                          children: "Always Up-to-Date"
                        }), a.jsx("p", {
                          className: "text-muted-foreground leading-relaxed",
                          children: "The AI tools landscape changes daily. I continuously update the database, add new tools, and provide weekly insights through Adam's List to keep you ahead of the curve."
                        })]
                      })]
                    }), a.jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [a.jsx("div", {
                        className: "w-12 h-12 rounded-xl bg-gradient-to-br from-aiverse-primary to-aiverse-accent flex items-center justify-center flex-shrink-0 shadow-lg",
                        children: a.jsx(_r, {
                          className: "h-6 w-6 text-white"
                        })
                      }), a.jsxs("div", {
                        children: [a.jsx("h3", {
                          className: "font-bold text-xl mb-2",
                          children: "Community-First Approach"
                        }), a.jsx("p", {
                          className: "text-muted-foreground leading-relaxed",
                          children: "As founder of the AI Builders Skool community (600+ members), I connect with real users daily, gathering insights and feedback that shape AI Verse's recommendations and features."
                        })]
                      })]
                    })]
                  })
                })
              })]
            })]
          })]
        }), a.jsxs("section", {
          className: "relative py-20 px-4 overflow-hidden",
          children: [a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-aiverse-primary/5 via-background to-aiverse-accent/5"
          }), a.jsxs("div", {
            className: "max-w-5xl mx-auto relative z-10",
            children: [a.jsx("h2", {
              className: "text-3xl md:text-5xl font-bold text-center mb-4",
              children: a.jsx("span", {
                className: "bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                children: "It's This Simple"
              })
            }), a.jsx("p", {
              className: "text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto",
              children: "From your question to the perfect tool in 3 easy steps"
            }), a.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: [a.jsxs("div", {
                className: "relative group",
                children: [a.jsx("div", {
                  className: "absolute -inset-1 bg-gradient-to-br from-aiverse-primary to-aiverse-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"
                }), a.jsxs("div", {
                  className: "relative bg-gradient-to-br from-aiverse-primary/10 to-aiverse-accent/10 rounded-2xl p-8 border-2 border-aiverse-primary/30 hover:border-aiverse-primary/60 transition-all h-full backdrop-blur-sm",
                  children: [a.jsx("div", {
                    className: "w-16 h-16 rounded-full bg-gradient-to-br from-aiverse-primary to-aiverse-accent text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300",
                    children: "1"
                  }), a.jsx("h3", {
                    className: "font-bold text-2xl mb-4",
                    children: "Ask in Plain English"
                  }), a.jsx("p", {
                    className: "text-muted-foreground text-lg leading-relaxed mb-4",
                    children: '"I need a tool to turn my YouTube videos into blog posts"'
                  }), a.jsx("div", {
                    className: "p-3 bg-background/50 rounded-lg border border-aiverse-primary/20",
                    children: a.jsx("p", {
                      className: "text-sm text-muted-foreground italic",
                      children: "Our AI understands context, not just keywords."
                    })
                  })]
                }), a.jsx("div", {
                  className: "hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-aiverse-accent text-3xl z-20 drop-shadow-lg",
                  children: "→"
                })]
              }), a.jsxs("div", {
                className: "relative group",
                children: [a.jsx("div", {
                  className: "absolute -inset-1 bg-gradient-to-br from-aiverse-primary to-aiverse-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"
                }), a.jsxs("div", {
                  className: "relative bg-gradient-to-br from-aiverse-primary/10 to-aiverse-accent/10 rounded-2xl p-8 border-2 border-aiverse-primary/30 hover:border-aiverse-primary/60 transition-all h-full backdrop-blur-sm",
                  children: [a.jsx("div", {
                    className: "w-16 h-16 rounded-full bg-gradient-to-br from-aiverse-primary to-aiverse-accent text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300",
                    children: "2"
                  }), a.jsx("h3", {
                    className: "font-bold text-2xl mb-4",
                    children: "AI Searches Database"
                  }), a.jsx("p", {
                    className: "text-muted-foreground text-lg leading-relaxed mb-4",
                    children: "My AI scans my curated collection of expert-vetted tools"
                  }), a.jsx("div", {
                    className: "p-3 bg-background/50 rounded-lg border border-aiverse-primary/20",
                    children: a.jsx("p", {
                      className: "text-sm text-muted-foreground italic",
                      children: "Every tool tested and approved by real AI experts, not bots."
                    })
                  })]
                }), a.jsx("div", {
                  className: "hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-aiverse-accent text-3xl z-20 drop-shadow-lg",
                  children: "→"
                })]
              }), a.jsxs("div", {
                className: "relative group",
                children: [a.jsx("div", {
                  className: "absolute -inset-1 bg-gradient-to-br from-aiverse-primary to-aiverse-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"
                }), a.jsxs("div", {
                  className: "relative bg-gradient-to-br from-aiverse-primary/10 to-aiverse-accent/10 rounded-2xl p-8 border-2 border-aiverse-primary/30 hover:border-aiverse-primary/60 transition-all h-full backdrop-blur-sm",
                  children: [a.jsx("div", {
                    className: "w-16 h-16 rounded-full bg-gradient-to-br from-aiverse-primary to-aiverse-accent text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300",
                    children: "3"
                  }), a.jsx("h3", {
                    className: "font-bold text-2xl mb-4",
                    children: "Get Perfect Match"
                  }), a.jsx("p", {
                    className: "text-muted-foreground text-lg leading-relaxed mb-4",
                    children: "Receive ranked recommendations with comparisons and pricing"
                  }), a.jsx("div", {
                    className: "p-3 bg-background/50 rounded-lg border border-aiverse-primary/20",
                    children: a.jsx("p", {
                      className: "text-sm text-muted-foreground italic",
                      children: "Make confident decisions backed by expert insights."
                    })
                  })]
                })]
              })]
            }), a.jsx("div", {
              className: "text-center mt-12",
              children: a.jsx(ue, {
                size: "lg",
                asChild: !0,
                className: "bg-gradient-to-r from-aiverse-primary to-aiverse-accent hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105",
                children: a.jsxs("a", {
                  href: "/",
                  children: [a.jsx(Hn, {
                    className: "mr-2 h-5 w-5"
                  }), "Try It Now - It's Free"]
                })
              })
            })]
          })]
        }), a.jsxs("section", {
          className: "relative py-20 px-4 overflow-hidden",
          children: [a.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-aiverse-primary/10 via-aiverse-accent/10 to-aiverse-primary/10"
          }), a.jsxs("div", {
            className: "absolute inset-0",
            children: [a.jsx("div", {
              className: "absolute top-10 right-10 w-96 h-96 bg-aiverse-primary/20 rounded-full blur-3xl animate-pulse"
            }), a.jsx("div", {
              className: "absolute bottom-10 left-10 w-96 h-96 bg-aiverse-accent/20 rounded-full blur-3xl animate-pulse"
            })]
          }), a.jsxs("div", {
            className: "max-w-5xl mx-auto text-center relative z-10",
            children: [a.jsx("div", {
              className: "mb-8 animate-fade-in",
              children: a.jsxs("div", {
                className: "inline-flex items-center gap-2 bg-gradient-to-r from-aiverse-primary/20 to-aiverse-accent/20 border border-aiverse-primary/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm",
                children: [a.jsx(_r, {
                  className: "w-5 h-5 text-aiverse-primary"
                }), a.jsx("span", {
                  className: "font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent",
                  children: "600+ AI Experts Trust AI Verse"
                })]
              })
            }), a.jsx("h2", {
              className: "text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up",
              children: a.jsx("span", {
                className: "bg-gradient-to-r from-aiverse-primary via-aiverse-accent to-aiverse-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent",
                children: "Stop Guessing. Start Building."
              })
            }), a.jsx("p", {
              className: "text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed",
              children: "Join thousands of developers, entrepreneurs, and creators who use AI Verse to find the perfect AI tools for their projects—without the overwhelm."
            }), a.jsxs("div", {
              className: "flex flex-wrap gap-4 justify-center mb-12",
              children: [a.jsx(ue, {
                size: "lg",
                asChild: !0,
                className: "bg-gradient-to-r from-aiverse-primary to-aiverse-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 text-lg px-8 py-6 h-auto",
                children: a.jsxs("a", {
                  href: "/",
                  children: [a.jsx(Hn, {
                    className: "mr-2 h-5 w-5"
                  }), "Start Your Free AI Search"]
                })
              }), a.jsx(ue, {
                size: "lg",
                variant: "outline",
                asChild: !0,
                className: "border-aiverse-primary/50 hover:bg-aiverse-primary/10 hover:border-aiverse-primary transition-all duration-300 text-lg px-8 py-6 h-auto",
                children: a.jsxs("a", {
                  href: "https://www.skool.com/aibuilders/about?ref=70243d89d43b47d5bf1cd5bfcd52977c",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [a.jsx(_r, {
                    className: "mr-2 h-5 w-5"
                  }), "Join AI Builders Community"]
                })
              })]
            }), a.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-aiverse-primary/30",
              children: [a.jsxs("div", {
                className: "group",
                children: [a.jsx("div", {
                  className: "text-4xl font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300",
                  children: "100%"
                }), a.jsx("div", {
                  className: "text-sm text-muted-foreground font-medium",
                  children: "Free to Use"
                })]
              }), a.jsxs("div", {
                className: "group",
                children: [a.jsx("div", {
                  className: "text-4xl font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300",
                  children: "Daily"
                }), a.jsx("div", {
                  className: "text-sm text-muted-foreground font-medium",
                  children: "Expert Updates"
                })]
              }), a.jsxs("div", {
                className: "group",
                children: [a.jsx("div", {
                  className: "text-4xl font-bold bg-gradient-to-r from-aiverse-primary to-aiverse-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300",
                  children: "600+"
                }), a.jsx("div", {
                  className: "text-sm text-muted-foreground font-medium",
                  children: "AI Community Members"
                })]
              })]
            })]
          })]
        })]
      })]
    })
  };
var ki = "Accordion",
  zoe = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [TE, Voe, $oe] = Xh(ki),
  [$x, tce] = Jn(ki, [$oe, PF]),
  NE = PF(),
  WF = Z.forwardRef((t, e) => {
    const {
      type: n,
      ...r
    } = t, s = r, i = r;
    return a.jsx(TE.Provider, {
      scope: t.__scopeAccordion,
      children: n === "multiple" ? a.jsx(qoe, {
        ...i,
        ref: e
      }) : a.jsx(Goe, {
        ...s,
        ref: e
      })
    })
  });
WF.displayName = ki;
var [GF, Hoe] = $x(ki), [qF, Woe] = $x(ki, {
  collapsible: !1
}), Goe = Z.forwardRef((t, e) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: s = () => {},
    collapsible: i = !1,
    ...o
  } = t, [l, c] = cs({
    prop: n,
    defaultProp: r ?? "",
    onChange: s,
    caller: ki
  });
  return a.jsx(GF, {
    scope: t.__scopeAccordion,
    value: Z.useMemo(() => l ? [l] : [], [l]),
    onItemOpen: c,
    onItemClose: Z.useCallback(() => i && c(""), [i, c]),
    children: a.jsx(qF, {
      scope: t.__scopeAccordion,
      collapsible: i,
      children: a.jsx(YF, {
        ...o,
        ref: e
      })
    })
  })
}), qoe = Z.forwardRef((t, e) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: s = () => {},
    ...i
  } = t, [o, l] = cs({
    prop: n,
    defaultProp: r ?? [],
    onChange: s,
    caller: ki
  }), c = Z.useCallback(u => l((f = []) => [...f, u]), [l]), d = Z.useCallback(u => l((f = []) => f.filter(h =>
    h !== u)), [l]);
  return a.jsx(GF, {
    scope: t.__scopeAccordion,
    value: o,
    onItemOpen: c,
    onItemClose: d,
    children: a.jsx(qF, {
      scope: t.__scopeAccordion,
      collapsible: !0,
      children: a.jsx(YF, {
        ...i,
        ref: e
      })
    })
  })
}), [Yoe, Hx] = $x(ki), YF = Z.forwardRef((t, e) => {
  const {
    __scopeAccordion: n,
    disabled: r,
    dir: s,
    orientation: i = "vertical",
    ...o
  } = t, l = Z.useRef(null), c = xt(l, e), d = Voe(n), f = Bu(s) === "ltr", h = Se(t.onKeyDown, m => {
    var P;
    if (!zoe.includes(m.key)) return;
    const y = m.target,
      v = d().filter(C => {
        var M;
        return !((M = C.ref.current) != null && M.disabled)
      }),
      g = v.findIndex(C => C.ref.current === y),
      p = v.length;
    if (g === -1) return;
    m.preventDefault();
    let _ = g;
    const w = 0,
      b = p - 1,
      S = () => {
        _ = g + 1, _ > b && (_ = w)
      },
      E = () => {
        _ = g - 1, _ < w && (_ = b)
      };
    switch (m.key) {
      case "Home":
        _ = w;
        break;
      case "End":
        _ = b;
        break;
      case "ArrowRight":
        i === "horizontal" && (f ? S() : E());
        break;
      case "ArrowDown":
        i === "vertical" && S();
        break;
      case "ArrowLeft":
        i === "horizontal" && (f ? E() : S());
        break;
      case "ArrowUp":
        i === "vertical" && E();
        break
    }
    const T = _ % p;
    (P = v[T].ref.current) == null || P.focus()
  });
  return a.jsx(Yoe, {
    scope: n,
    disabled: r,
    direction: s,
    orientation: i,
    children: a.jsx(TE.Slot, {
      scope: n,
      children: a.jsx(ke.div, {
        ...o,
        "data-orientation": i,
        ref: c,
        onKeyDown: r ? void 0 : h
      })
    })
  })
}), Ev = "AccordionItem", [Xoe, CE] = $x(Ev), XF = Z.forwardRef((t, e) => {
  const {
    __scopeAccordion: n,
    value: r,
    ...s
  } = t, i = Hx(Ev, n), o = Hoe(Ev, n), l = NE(n), c = On(), d = r && o.value.includes(r) || !1, u = i.disabled || t
    .disabled;
  return a.jsx(Xoe, {
    scope: n,
    open: d,
    disabled: u,
    triggerId: c,
    children: a.jsx(IF, {
      "data-orientation": i.orientation,
      "data-state": t4(d),
      ...l,
      ...s,
      ref: e,
      disabled: u,
      open: d,
      onOpenChange: f => {
        f ? o.onItemOpen(r) : o.onItemClose(r)
      }
    })
  })
});
XF.displayName = Ev;
var KF = "AccordionHeader",
  ZF = Z.forwardRef((t, e) => {
    const {
      __scopeAccordion: n,
      ...r
    } = t, s = Hx(ki, n), i = CE(KF, n);
    return a.jsx(ke.h3, {
      "data-orientation": s.orientation,
      "data-state": t4(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      ...r,
      ref: e
    })
  });
ZF.displayName = KF;
var kb = "AccordionTrigger",
  QF = Z.forwardRef((t, e) => {
    const {
      __scopeAccordion: n,
      ...r
    } = t, s = Hx(ki, n), i = CE(kb, n), o = Woe(kb, n), l = NE(n);
    return a.jsx(TE.ItemSlot, {
      scope: n,
      children: a.jsx(Mae, {
        "aria-disabled": i.open && !o.collapsible || void 0,
        "data-orientation": s.orientation,
        id: i.triggerId,
        ...l,
        ...r,
        ref: e
      })
    })
  });
QF.displayName = kb;
var JF = "AccordionContent",
  e4 = Z.forwardRef((t, e) => {
    const {
      __scopeAccordion: n,
      ...r
    } = t, s = Hx(ki, n), i = CE(JF, n), o = NE(n);
    return a.jsx(Aae, {
      role: "region",
      "aria-labelledby": i.triggerId,
      "data-orientation": s.orientation,
      ...o,
      ...r,
      ref: e,
      style: {
        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
        ...t.style
      }
    })
  });
e4.displayName = JF;

function t4(t) {
  return t ? "open" : "closed"
}
var Koe = WF,
  Zoe = XF,
  Qoe = ZF,
  n4 = QF,
  r4 = e4;
const IA = Koe,
  Db = x.forwardRef(({
    className: t,
    ...e
  }, n) => a.jsx(Zoe, {
    ref: n,
    className: de("border-b", t),
    ...e
  }));
Db.displayName = "AccordionItem";
const Ib = x.forwardRef(({
  className: t,
  children: e,
  ...n
}, r) => a.jsx(Qoe, {
  className: "flex",
  children: a.jsxs(n4, {
    ref: r,
    className: de(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t),
    ...n,
    children: [e, a.jsx(Qh, {
      className: "h-4 w-4 shrink-0 transition-transform duration-200"
    })]
  })
}));
Ib.displayName = n4.displayName;
const Lb = x.forwardRef(({
  className: t,
  children: e,
  ...n
}, r) => a.jsx(r4, {
  ref: r,
  className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  ...n,
  children: a.jsx("div", {
    className: de("pb-4 pt-0", t),
    children: e
  })
}));
Lb.displayName = r4
.displayName; /*! @license DOMPurify 3.2.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.7/LICENSE */
const {
  entries: s4,
  setPrototypeOf: LA,
  isFrozen: Joe,
  getPrototypeOf: ele,
  getOwnPropertyDescriptor: tle
} = Object;
let {
  freeze: zr,
  seal: Qs,
  create: i4
} = Object, {
  apply: Ob,
  construct: Fb
} = typeof Reflect < "u" && Reflect;
zr || (zr = function (e) {
  return e
});
Qs || (Qs = function (e) {
  return e
});
Ob || (Ob = function (e, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) s[i - 2] = arguments[i];
  return e.apply(n, s)
});
Fb || (Fb = function (e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
  return new e(...r)
});
const Vp = Vr(Array.prototype.forEach),
  nle = Vr(Array.prototype.lastIndexOf),
  OA = Vr(Array.prototype.pop),
  Af = Vr(Array.prototype.push),
  rle = Vr(Array.prototype.splice),
  pg = Vr(String.prototype.toLowerCase),
  t_ = Vr(String.prototype.toString),
  n_ = Vr(String.prototype.match),
  jf = Vr(String.prototype.replace),
  sle = Vr(String.prototype.indexOf),
  ile = Vr(String.prototype.trim),
  di = Vr(Object.prototype.hasOwnProperty),
  Sr = Vr(RegExp.prototype.test),
  Rf = ale(TypeError);

function Vr(t) {
  return function (e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
    return Ob(t, e, r)
  }
}

function ale(t) {
  return function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return Fb(t, n)
  }
}

function It(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pg;
  LA && LA(t, null);
  let r = e.length;
  for (; r--;) {
    let s = e[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (Joe(e) || (e[r] = i), s = i)
    }
    t[s] = !0
  }
  return t
}

function ole(t) {
  for (let e = 0; e < t.length; e++) di(t, e) || (t[e] = null);
  return t
}

function ya(t) {
  const e = i4(null);
  for (const [n, r] of s4(t)) di(t, n) && (Array.isArray(r) ? e[n] = ole(r) : r && typeof r == "object" && r
    .constructor === Object ? e[n] = ya(r) : e[n] = r);
  return e
}

function Pf(t, e) {
  for (; t !== null;) {
    const r = tle(t, e);
    if (r) {
      if (r.get) return Vr(r.get);
      if (typeof r.value == "function") return Vr(r.value)
    }
    t = ele(t)
  }

  function n() {
    return null
  }
  return n
}
const FA = zr(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big",
    "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup",
    "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt",
    "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6",
    "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main",
    "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p",
    "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow",
    "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table",
    "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var",
    "video", "wbr"
  ]),
  r_ = zr(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform",
    "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph",
    "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath",
    "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "slot", "stop", "style", "switch",
    "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"
  ]),
  s_ = zr(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting",
    "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR",
    "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight",
    "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"
  ]),
  lle = zr(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name",
    "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch",
    "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"
  ]),
  i_ = zr(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo",
    "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup",
    "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"
  ]),
  cle = zr(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline",
    "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"
  ]),
  UA = zr(["#text"]),
  BA = zr(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay",
    "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear",
    "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding",
    "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable",
    "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href",
    "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop",
    "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade",
    "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover",
    "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel",
    "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size",
    "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title",
    "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"
  ]),
  a_ = zr(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename",
    "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip",
    "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters",
    "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display",
    "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter",
    "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch",
    "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits",
    "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3",
    "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix",
    "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight",
    "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min",
    "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow",
    "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points",
    "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy",
    "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope",
    "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles",
    "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage",
    "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor",
    "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox",
    "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap",
    "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z",
    "zoomandpan"
  ]),
  zA = zr(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan",
    "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id",
    "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize",
    "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines",
    "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection",
    "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width",
    "xmlns"
  ]),
  $p = zr(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  dle = Qs(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  ule = Qs(/<%[\w\W]*|[\w\W]*%>/gm),
  fle = Qs(/\$\{[\w\W]*/gm),
  hle = Qs(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  mle = Qs(/^aria-[\-\w]+$/),
  a4 = Qs(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
  ple = Qs(/^(?:\w+script|data):/i),
  gle = Qs(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  o4 = Qs(/^html$/i),
  vle = Qs(/^[a-z][.\w]*(-[.\w]+)+$/i);
var VA = Object.freeze({
  __proto__: null,
  ARIA_ATTR: mle,
  ATTR_WHITESPACE: gle,
  CUSTOM_ELEMENT: vle,
  DATA_ATTR: hle,
  DOCTYPE_NAME: o4,
  ERB_EXPR: ule,
  IS_ALLOWED_URI: a4,
  IS_SCRIPT_OR_DATA: ple,
  MUSTACHE_EXPR: dle,
  TMPLIT_EXPR: fle
});
const kf = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
  },
  xle = function () {
    return typeof window > "u" ? null : window
  },
  yle = function (e, n) {
    if (typeof e != "object" || typeof e.createPolicy != "function") return null;
    let r = null;
    const s = "data-tt-policy-suffix";
    n && n.hasAttribute(s) && (r = n.getAttribute(s));
    const i = "dompurify" + (r ? "#" + r : "");
    try {
      return e.createPolicy(i, {
        createHTML(o) {
          return o
        },
        createScriptURL(o) {
          return o
        }
      })
    } catch {
      return console.warn("TrustedTypes policy " + i + " could not be created."), null
    }
  },
  $A = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    }
  };

function l4() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xle();
  const e = ne => l4(ne);
  if (e.version = "3.2.7", e.removed = [], !t || !t.document || t.document.nodeType !== kf.document || !t.Element)
    return e.isSupported = !1, e;
  let {
    document: n
  } = t;
  const r = n,
    s = r.currentScript,
    {
      DocumentFragment: i,
      HTMLTemplateElement: o,
      Node: l,
      Element: c,
      NodeFilter: d,
      NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap,
      HTMLFormElement: f,
      DOMParser: h,
      trustedTypes: m
    } = t,
    y = c.prototype,
    v = Pf(y, "cloneNode"),
    g = Pf(y, "remove"),
    p = Pf(y, "nextSibling"),
    _ = Pf(y, "childNodes"),
    w = Pf(y, "parentNode");
  if (typeof o == "function") {
    const ne = n.createElement("template");
    ne.content && ne.content.ownerDocument && (n = ne.content.ownerDocument)
  }
  let b, S = "";
  const {
    implementation: E,
    createNodeIterator: T,
    createDocumentFragment: P,
    getElementsByTagName: C
  } = n, {
    importNode: M
  } = r;
  let L = $A();
  e.isSupported = typeof s4 == "function" && typeof w == "function" && E && E.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: D,
    ERB_EXPR: $,
    TMPLIT_EXPR: j,
    DATA_ATTR: F,
    ARIA_ATTR: R,
    IS_SCRIPT_OR_DATA: I,
    ATTR_WHITESPACE: A,
    CUSTOM_ELEMENT: k
  } = VA;
  let {
    IS_ALLOWED_URI: W
  } = VA, G = null;
  const V = It({}, [...FA, ...r_, ...s_, ...i_, ...UA]);
  let H = null;
  const te = It({}, [...BA, ...a_, ...zA, ...$p]);
  let J = Object.seal(i4(null, {
      tagNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: !1
      }
    })),
    q = null,
    ee = null,
    me = !0,
    ye = !0,
    we = !1,
    Ce = !0,
    re = !1,
    ve = !0,
    Ne = !1,
    rt = !1,
    Oe = !1,
    St = !1,
    ct = !1,
    B = !1,
    N = !0,
    U = !1;
  const K = "user-content-";
  let se = !0,
    ie = !1,
    oe = {},
    ce = null;
  const _e = It({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi",
    "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template",
    "thead", "title", "video", "xmp"
  ]);
  let Ae = null;
  const st = It({}, ["audio", "video", "img", "source", "image", "track"]);
  let xe = null;
  const mt = It({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title",
      "value", "style", "xmlns"
    ]),
    ft = "http://www.w3.org/1998/Math/MathML",
    at = "http://www.w3.org/2000/svg",
    Be = "http://www.w3.org/1999/xhtml";
  let Fe = Be,
    ot = !1,
    jt = null;
  const De = It({}, [ft, at, Be], t_);
  let Ue = It({}, ["mi", "mo", "mn", "ms", "mtext"]),
    pe = It({}, ["annotation-xml"]);
  const X = It({}, ["title", "style", "font", "a", "script"]);
  let ge = null;
  const be = ["application/xhtml+xml", "text/html"],
    Ye = "text/html";
  let he = null,
    ze = null;
  const nt = n.createElement("form"),
    Et = function (O) {
      return O instanceof RegExp || O instanceof Function
    },
    Tt = function () {
      let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(ze && ze === O)) {
        if ((!O || typeof O != "object") && (O = {}), O = ya(O), ge = be.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? Ye : O
          .PARSER_MEDIA_TYPE, he = ge === "application/xhtml+xml" ? t_ : pg, G = di(O, "ALLOWED_TAGS") ? It({}, O
            .ALLOWED_TAGS, he) : V, H = di(O, "ALLOWED_ATTR") ? It({}, O.ALLOWED_ATTR, he) : te, jt = di(O,
            "ALLOWED_NAMESPACES") ? It({}, O.ALLOWED_NAMESPACES, t_) : De, xe = di(O, "ADD_URI_SAFE_ATTR") ? It(ya(mt),
            O.ADD_URI_SAFE_ATTR, he) : mt, Ae = di(O, "ADD_DATA_URI_TAGS") ? It(ya(st), O.ADD_DATA_URI_TAGS, he) : st,
          ce = di(O, "FORBID_CONTENTS") ? It({}, O.FORBID_CONTENTS, he) : _e, q = di(O, "FORBID_TAGS") ? It({}, O
            .FORBID_TAGS, he) : ya({}), ee = di(O, "FORBID_ATTR") ? It({}, O.FORBID_ATTR, he) : ya({}), oe = di(O,
            "USE_PROFILES") ? O.USE_PROFILES : !1, me = O.ALLOW_ARIA_ATTR !== !1, ye = O.ALLOW_DATA_ATTR !== !1, we = O
          .ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, re = O.SAFE_FOR_TEMPLATES || !1, ve =
          O.SAFE_FOR_XML !== !1, Ne = O.WHOLE_DOCUMENT || !1, St = O.RETURN_DOM || !1, ct = O.RETURN_DOM_FRAGMENT || !1,
          B = O.RETURN_TRUSTED_TYPE || !1, Oe = O.FORCE_BODY || !1, N = O.SANITIZE_DOM !== !1, U = O
          .SANITIZE_NAMED_PROPS || !1, se = O.KEEP_CONTENT !== !1, ie = O.IN_PLACE || !1, W = O.ALLOWED_URI_REGEXP ||
          a4, Fe = O.NAMESPACE || Be, Ue = O.MATHML_TEXT_INTEGRATION_POINTS || Ue, pe = O.HTML_INTEGRATION_POINTS || pe,
          J = O.CUSTOM_ELEMENT_HANDLING || {}, O.CUSTOM_ELEMENT_HANDLING && Et(O.CUSTOM_ELEMENT_HANDLING
          .tagNameCheck) && (J.tagNameCheck = O.CUSTOM_ELEMENT_HANDLING.tagNameCheck), O.CUSTOM_ELEMENT_HANDLING && Et(O
            .CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (J.attributeNameCheck = O.CUSTOM_ELEMENT_HANDLING
            .attributeNameCheck), O.CUSTOM_ELEMENT_HANDLING && typeof O.CUSTOM_ELEMENT_HANDLING
          .allowCustomizedBuiltInElements == "boolean" && (J.allowCustomizedBuiltInElements = O.CUSTOM_ELEMENT_HANDLING
            .allowCustomizedBuiltInElements), re && (ye = !1), ct && (St = !0), oe && (G = It({}, UA), H = [], oe
            .html === !0 && (It(G, FA), It(H, BA)), oe.svg === !0 && (It(G, r_), It(H, a_), It(H, $p)), oe
            .svgFilters === !0 && (It(G, s_), It(H, a_), It(H, $p)), oe.mathMl === !0 && (It(G, i_), It(H, zA), It(H,
              $p))), O.ADD_TAGS && (G === V && (G = ya(G)), It(G, O.ADD_TAGS, he)), O.ADD_ATTR && (H === te && (H = ya(
            H)), It(H, O.ADD_ATTR, he)), O.ADD_URI_SAFE_ATTR && It(xe, O.ADD_URI_SAFE_ATTR, he), O.FORBID_CONTENTS && (
            ce === _e && (ce = ya(ce)), It(ce, O.FORBID_CONTENTS, he)), se && (G["#text"] = !0), Ne && It(G, ["html",
            "head", "body"
          ]), G.table && (It(G, ["tbody"]), delete q.tbody), O.TRUSTED_TYPES_POLICY) {
          if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function") throw Rf(
            'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Rf(
            'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          b = O.TRUSTED_TYPES_POLICY, S = b.createHTML("")
        } else b === void 0 && (b = yle(m, s)), b !== null && typeof S == "string" && (S = b.createHTML(""));
        zr && zr(O), ze = O
      }
    },
    bt = It({}, [...r_, ...s_, ...lle]),
    Kt = It({}, [...i_, ...cle]),
    fn = function (O) {
      let Y = w(O);
      (!Y || !Y.tagName) && (Y = {
        namespaceURI: Fe,
        tagName: "template"
      });
      const fe = pg(O.tagName),
        Re = pg(Y.tagName);
      return jt[O.namespaceURI] ? O.namespaceURI === at ? Y.namespaceURI === Be ? fe === "svg" : Y.namespaceURI === ft ?
        fe === "svg" && (Re === "annotation-xml" || Ue[Re]) : !!bt[fe] : O.namespaceURI === ft ? Y.namespaceURI === Be ?
        fe === "math" : Y.namespaceURI === at ? fe === "math" && pe[Re] : !!Kt[fe] : O.namespaceURI === Be ? Y
        .namespaceURI === at && !pe[Re] || Y.namespaceURI === ft && !Ue[Re] ? !1 : !Kt[fe] && (X[fe] || !bt[fe]) : !!(
          ge === "application/xhtml+xml" && jt[O.namespaceURI]) : !1
    },
    wn = function (O) {
      Af(e.removed, {
        element: O
      });
      try {
        w(O).removeChild(O)
      } catch {
        g(O)
      }
    },
    aa = function (O, Y) {
      try {
        Af(e.removed, {
          attribute: Y.getAttributeNode(O),
          from: Y
        })
      } catch {
        Af(e.removed, {
          attribute: null,
          from: Y
        })
      }
      if (Y.removeAttribute(O), O === "is")
        if (St || ct) try {
          wn(Y)
        } catch {} else try {
          Y.setAttribute(O, "")
        } catch {}
    },
    xl = function (O) {
      let Y = null,
        fe = null;
      if (Oe) O = "<remove></remove>" + O;
      else {
        const Xe = n_(O, /^[\r\n\t ]+/);
        fe = Xe && Xe[0]
      }
      ge === "application/xhtml+xml" && Fe === Be && (O =
        '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
      const Re = b ? b.createHTML(O) : O;
      if (Fe === Be) try {
        Y = new h().parseFromString(Re, ge)
      } catch {}
      if (!Y || !Y.documentElement) {
        Y = E.createDocument(Fe, "template", null);
        try {
          Y.documentElement.innerHTML = ot ? S : Re
        } catch {}
      }
      const Qe = Y.body || Y.documentElement;
      return O && fe && Qe.insertBefore(n.createTextNode(fe), Qe.childNodes[0] || null), Fe === Be ? C.call(Y, Ne ?
        "html" : "body")[0] : Ne ? Y.documentElement : Qe
    },
    nf = function (O) {
      return T.call(O.ownerDocument || O, O, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d
        .SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null)
    },
    Ya = function (O) {
      return O instanceof f && (typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O
        .removeChild != "function" || !(O.attributes instanceof u) || typeof O.removeAttribute != "function" ||
        typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore !=
        "function" || typeof O.hasChildNodes != "function")
    },
    rf = function (O) {
      return typeof l == "function" && O instanceof l
    };

  function Rs(ne, O, Y) {
    Vp(ne, fe => {
      fe.call(e, O, Y, ze)
    })
  }
  const Pm = function (O) {
      let Y = null;
      if (Rs(L.beforeSanitizeElements, O, null), Ya(O)) return wn(O), !0;
      const fe = he(O.nodeName);
      if (Rs(L.uponSanitizeElement, O, {
          tagName: fe,
          allowedTags: G
        }), ve && O.hasChildNodes() && !rf(O.firstElementChild) && Sr(/<[/\w!]/g, O.innerHTML) && Sr(/<[/\w!]/g, O
          .textContent) || O.nodeType === kf.progressingInstruction || ve && O.nodeType === kf.comment && Sr(/<[/\w]/g,
          O.data)) return wn(O), !0;
      if (!G[fe] || q[fe]) {
        if (!q[fe] && Dm(fe) && (J.tagNameCheck instanceof RegExp && Sr(J.tagNameCheck, fe) || J
            .tagNameCheck instanceof Function && J.tagNameCheck(fe))) return !1;
        if (se && !ce[fe]) {
          const Re = w(O) || O.parentNode,
            Qe = _(O) || O.childNodes;
          if (Qe && Re) {
            const Xe = Qe.length;
            for (let lt = Xe - 1; lt >= 0; --lt) {
              const ut = v(Qe[lt], !0);
              ut.__removalCount = (O.__removalCount || 0) + 1, Re.insertBefore(ut, p(O))
            }
          }
        }
        return wn(O), !0
      }
      return O instanceof c && !fn(O) || (fe === "noscript" || fe === "noembed" || fe === "noframes") && Sr(
        /<\/no(script|embed|frames)/i, O.innerHTML) ? (wn(O), !0) : (re && O.nodeType === kf.text && (Y = O
        .textContent, Vp([D, $, j], Re => {
          Y = jf(Y, Re, " ")
        }), O.textContent !== Y && (Af(e.removed, {
          element: O.cloneNode()
        }), O.textContent = Y)), Rs(L.afterSanitizeElements, O, null), !1)
    },
    km = function (O, Y, fe) {
      if (N && (Y === "id" || Y === "name") && (fe in n || fe in nt)) return !1;
      if (!(ye && !ee[Y] && Sr(F, Y))) {
        if (!(me && Sr(R, Y))) {
          if (!H[Y] || ee[Y]) {
            if (!(Dm(O) && (J.tagNameCheck instanceof RegExp && Sr(J.tagNameCheck, O) || J
                  .tagNameCheck instanceof Function && J.tagNameCheck(O)) && (J.attributeNameCheck instanceof RegExp &&
                  Sr(J.attributeNameCheck, Y) || J.attributeNameCheck instanceof Function && J.attributeNameCheck(Y, O)
                  ) || Y === "is" && J.allowCustomizedBuiltInElements && (J.tagNameCheck instanceof RegExp && Sr(J
                  .tagNameCheck, fe) || J.tagNameCheck instanceof Function && J.tagNameCheck(fe)))) return !1
          } else if (!xe[Y]) {
            if (!Sr(W, jf(fe, A, ""))) {
              if (!((Y === "src" || Y === "xlink:href" || Y === "href") && O !== "script" && sle(fe, "data:") === 0 &&
                  Ae[O])) {
                if (!(we && !Sr(I, jf(fe, A, "")))) {
                  if (fe) return !1
                }
              }
            }
          }
        }
      }
      return !0
    },
    Dm = function (O) {
      return O !== "annotation-xml" && n_(O, k)
    },
    z = function (O) {
      Rs(L.beforeSanitizeAttributes, O, null);
      const {
        attributes: Y
      } = O;
      if (!Y || Ya(O)) return;
      const fe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: H,
        forceKeepAttr: void 0
      };
      let Re = Y.length;
      for (; Re--;) {
        const Qe = Y[Re],
          {
            name: Xe,
            namespaceURI: lt,
            value: ut
          } = Qe,
          pt = he(Xe),
          sn = ut;
        let Wt = Xe === "value" ? sn : ile(sn);
        if (fe.attrName = pt, fe.attrValue = Wt, fe.keepAttr = !0, fe.forceKeepAttr = void 0, Rs(L
            .uponSanitizeAttribute, O, fe), Wt = fe.attrValue, U && (pt === "id" || pt === "name") && (aa(Xe, O), Wt =
            K + Wt), ve && Sr(/((--!?|])>)|<\/(style|title|textarea)/i, Wt)) {
          aa(Xe, O);
          continue
        }
        if (pt === "attributename" && n_(Wt, "href")) {
          aa(Xe, O);
          continue
        }
        if (fe.forceKeepAttr) continue;
        if (!fe.keepAttr) {
          aa(Xe, O);
          continue
        }
        if (!Ce && Sr(/\/>/i, Wt)) {
          aa(Xe, O);
          continue
        }
        re && Vp([D, $, j], Ps => {
          Wt = jf(Wt, Ps, " ")
        });
        const An = he(O.nodeName);
        if (!km(An, pt, Wt)) {
          aa(Xe, O);
          continue
        }
        if (b && typeof m == "object" && typeof m.getAttributeType == "function" && !lt) switch (m.getAttributeType(An,
            pt)) {
          case "TrustedHTML": {
            Wt = b.createHTML(Wt);
            break
          }
          case "TrustedScriptURL": {
            Wt = b.createScriptURL(Wt);
            break
          }
        }
        if (Wt !== sn) try {
          lt ? O.setAttributeNS(lt, Xe, Wt) : O.setAttribute(Xe, Wt), Ya(O) ? wn(O) : OA(e.removed)
        } catch {
          aa(Xe, O)
        }
      }
      Rs(L.afterSanitizeAttributes, O, null)
    },
    ae = function ne(O) {
      let Y = null;
      const fe = nf(O);
      for (Rs(L.beforeSanitizeShadowDOM, O, null); Y = fe.nextNode();) Rs(L.uponSanitizeShadowNode, Y, null), Pm(Y), z(
        Y), Y.content instanceof i && ne(Y.content);
      Rs(L.afterSanitizeShadowDOM, O, null)
    };
  return e.sanitize = function (ne) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      Y = null,
      fe = null,
      Re = null,
      Qe = null;
    if (ot = !ne, ot && (ne = "<!-->"), typeof ne != "string" && !rf(ne))
      if (typeof ne.toString == "function") {
        if (ne = ne.toString(), typeof ne != "string") throw Rf("dirty is not a string, aborting")
      } else throw Rf("toString is not a function");
    if (!e.isSupported) return ne;
    if (rt || Tt(O), e.removed = [], typeof ne == "string" && (ie = !1), ie) {
      if (ne.nodeName) {
        const ut = he(ne.nodeName);
        if (!G[ut] || q[ut]) throw Rf("root node is forbidden and cannot be sanitized in-place")
      }
    } else if (ne instanceof l) Y = xl("<!---->"), fe = Y.ownerDocument.importNode(ne, !0), fe.nodeType === kf
      .element && fe.nodeName === "BODY" || fe.nodeName === "HTML" ? Y = fe : Y.appendChild(fe);
    else {
      if (!St && !re && !Ne && ne.indexOf("<") === -1) return b && B ? b.createHTML(ne) : ne;
      if (Y = xl(ne), !Y) return St ? null : B ? S : ""
    }
    Y && Oe && wn(Y.firstChild);
    const Xe = nf(ie ? ne : Y);
    for (; Re = Xe.nextNode();) Pm(Re), z(Re), Re.content instanceof i && ae(Re.content);
    if (ie) return ne;
    if (St) {
      if (ct)
        for (Qe = P.call(Y.ownerDocument); Y.firstChild;) Qe.appendChild(Y.firstChild);
      else Qe = Y;
      return (H.shadowroot || H.shadowrootmode) && (Qe = M.call(r, Qe, !0)), Qe
    }
    let lt = Ne ? Y.outerHTML : Y.innerHTML;
    return Ne && G["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && Sr(o4,
      Y.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + lt), re && Vp([D, $, j], ut => {
      lt = jf(lt, ut, " ")
    }), b && B ? b.createHTML(lt) : lt
  }, e.setConfig = function () {
    let ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tt(ne), rt = !0
  }, e.clearConfig = function () {
    ze = null, rt = !1
  }, e.isValidAttribute = function (ne, O, Y) {
    ze || Tt({});
    const fe = he(ne),
      Re = he(O);
    return km(fe, Re, Y)
  }, e.addHook = function (ne, O) {
    typeof O == "function" && Af(L[ne], O)
  }, e.removeHook = function (ne, O) {
    if (O !== void 0) {
      const Y = nle(L[ne], O);
      return Y === -1 ? void 0 : rle(L[ne], Y, 1)[0]
    }
    return OA(L[ne])
  }, e.removeHooks = function (ne) {
    L[ne] = []
  }, e.removeAllHooks = function () {
    L = $A()
  }, e
}
var sd = l4();
