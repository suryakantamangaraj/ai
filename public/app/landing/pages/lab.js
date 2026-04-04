// Route: /lab
// Component symbol: ite
// Source lines: 49927-50346

const ite = () => {
    const [t, e] = x.useState(""), [n, r] = x.useState(!1), {
      joinWaitlist: s,
      isSubmitting: i
    } = ste(), o = async l => {
      l.preventDefault(), await s(t) && (r(!0), e(""))
    };
    return a.jsxs(a.Fragment, {
      children: [a.jsx(ws, {
        title: "The Lab - Your AI Workspace for Intelligent Automation",
        description: "Build custom AI Brains with your knowledge, deploy specialized task bots, and automate workflows. Join the waitlist for early access to The Lab."
      }), a.jsxs("div", {
        className: "relative overflow-hidden min-h-screen bg-background",
        children: [a.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
        }), a.jsxs("div", {
          className: "absolute inset-0 overflow-hidden pointer-events-none",
          children: [a.jsx("div", {
            className: "absolute w-2 h-2 bg-primary/20 rounded-full top-[10%] left-[10%] animate-float",
            style: {
              animationDelay: "0s"
            }
          }), a.jsx("div", {
            className: "absolute w-3 h-3 bg-accent/20 rounded-full top-[20%] right-[15%] animate-float",
            style: {
              animationDelay: "2s"
            }
          }), a.jsx("div", {
            className: "absolute w-2 h-2 bg-primary/20 rounded-full bottom-[30%] left-[20%] animate-float",
            style: {
              animationDelay: "4s"
            }
          }), a.jsx("div", {
            className: "absolute w-4 h-4 bg-accent/20 rounded-full top-[60%] right-[25%] animate-float",
            style: {
              animationDelay: "1s"
            }
          }), a.jsx("div", {
            className: "absolute w-2 h-2 bg-primary/20 rounded-full bottom-[15%] right-[30%] animate-float",
            style: {
              animationDelay: "3s"
            }
          }), a.jsx("div", {
            className: "absolute w-3 h-3 bg-accent/20 rounded-full top-[40%] left-[15%] animate-float",
            style: {
              animationDelay: "5s"
            }
          })]
        }), a.jsx("div", {
          className: "relative z-10 py-16 px-4",
          children: a.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [a.jsxs("div", {
              className: "text-center mb-16",
              children: [a.jsx("div", {
                className: "inline-block mb-6 px-6 py-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text",
                children: a.jsxs(tt, {
                  className: "text-lg px-6 py-3 bg-primary text-primary-foreground border-2 border-primary font-black tracking-widest animate-pulse shadow-lg shadow-primary/50",
                  children: [a.jsx(ez, {
                    className: "w-5 h-5 inline mr-2 animate-bounce"
                  }), "COMING SOON"]
                })
              }), a.jsx("h1", {
                className: "text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight",
                children: a.jsx("span", {
                  className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
                  children: "The Lab"
                })
              }), a.jsxs("p", {
                className: "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed",
                children: ["Build custom AI ", a.jsx("span", {
                  className: "text-primary font-semibold",
                  children: "Brains"
                }), " with your knowledge, deploy specialized ", a.jsx("span", {
                  className: "text-accent font-semibold",
                  children: "Task Bots"
                }), ", and automate your workflows"]
              }), a.jsxs("div", {
                className: "max-w-md mx-auto mb-16",
                children: [n ? a.jsxs("div", {
                  className: "flex items-center justify-center gap-2 text-primary p-4 bg-primary/10 rounded-lg border border-primary/20",
                  children: [a.jsx(au, {
                    className: "w-5 h-5"
                  }), a.jsx("span", {
                    className: "font-medium",
                    children: "You're on the list! We'll notify you when The Lab launches."
                  })]
                }) : a.jsxs("form", {
                  onSubmit: o,
                  className: "flex gap-2",
                  children: [a.jsx(Ie, {
                    type: "email",
                    placeholder: "Enter your email",
                    value: t,
                    onChange: l => e(l.target.value),
                    required: !0,
                    className: "flex-1",
                    disabled: i
                  }), a.jsx(ue, {
                    type: "submit",
                    disabled: i,
                    className: "bg-primary hover:bg-primary/90",
                    children: i ? a.jsx("span", {
                      className: "flex items-center gap-2",
                      children: a.jsx("div", {
                        className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      })
                    }) : a.jsxs("span", {
                      className: "flex items-center gap-2",
                      children: [a.jsx(KT, {
                        className: "w-4 h-4"
                      }), "Join Waitlist"]
                    })
                  })]
                }), a.jsxs("p", {
                  className: "text-sm text-muted-foreground mt-3",
                  children: ["Join ", a.jsx("span", {
                    className: "font-semibold text-primary",
                    children: "early access"
                  }), " and be the first to experience The Lab"]
                })]
              })]
            }), a.jsxs(je, {
              className: "mb-16 p-8 md:p-12 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border-pink-500/40 hover:border-pink-500/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 relative overflow-hidden",
              children: [a.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"
              }), a.jsxs("div", {
                className: "relative z-10",
                children: [a.jsx("div", {
                  className: "flex items-center justify-center gap-3 mb-6",
                  children: a.jsxs(tt, {
                    className: "text-lg px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 font-black tracking-wider animate-pulse shadow-lg shadow-pink-500/50",
                    children: [a.jsx(Ti, {
                      className: "w-5 h-5 inline mr-2 animate-bounce"
                    }), "LIVE STREAM EVENT"]
                  })
                }), a.jsx("h2", {
                  className: "text-4xl md:text-5xl font-black mb-6 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent",
                  children: "Watch Me Build The Lab LIVE!"
                }), a.jsxs("div", {
                  className: "max-w-3xl mx-auto text-center mb-8",
                  children: [a.jsxs("p", {
                    className: "text-xl md:text-2xl mb-6 font-semibold",
                    children: ["I'm doing a ", a.jsx("span", {
                        className: "text-pink-400 font-black",
                        children: "24-HOUR LIVE CODING MARATHON"
                      }),
                      " building The Lab from scratch using no-code AI!"
                    ]
                  }), a.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-4 mb-8",
                    children: [a.jsxs("div", {
                      className: "bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-pink-500/30",
                      children: [a.jsx(dc, {
                        className: "w-8 h-8 text-pink-400 mx-auto mb-2"
                      }), a.jsx("p", {
                        className: "font-bold text-lg",
                        children: "Tuesday"
                      }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Next Week"
                      })]
                    }), a.jsxs("div", {
                      className: "bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30",
                      children: [a.jsx($v, {
                        className: "w-8 h-8 text-purple-400 mx-auto mb-2"
                      }), a.jsx("p", {
                        className: "font-bold text-lg",
                        children: "10 AM EST"
                      }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Don't Miss It!"
                      })]
                    }), a.jsxs("div", {
                      className: "bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30",
                      children: [a.jsx(Sh, {
                        className: "w-8 h-8 text-blue-400 mx-auto mb-2"
                      }), a.jsx("p", {
                        className: "font-bold text-lg",
                        children: "24 Hours"
                      }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Non-Stop Building"
                      })]
                    })]
                  }), a.jsxs("div", {
                    className: "space-y-4 text-left bg-background/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30",
                    children: [a.jsx("h3", {
                      className: "font-bold text-xl text-center mb-4",
                      children: "What You'll See:"
                    }), a.jsxs("ul", {
                      className: "space-y-3",
                      children: [a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [a.jsx(Hn, {
                          className: "w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0"
                        }), a.jsxs("span", {
                          children: [a.jsx("strong", {
                              children: "Live No-Code AI Building:"
                            }),
                            " Watch me use vibecoding to create a fully functional AI workspace"
                          ]
                        })]
                      }), a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [a.jsx(Hn, {
                          className: "w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0"
                        }), a.jsxs("span", {
                          children: [a.jsx("strong", {
                              children: "Real Problem Solving:"
                            }),
                            " See how I tackle challenges and make decisions in real-time"
                          ]
                        })]
                      }), a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [a.jsx(Hn, {
                          className: "w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                        }), a.jsxs("span", {
                          children: [a.jsx("strong", {
                              children: "Behind-the-Scenes:"
                            }),
                            " Learn my process, tips, and tricks for building AI-powered apps"
                          ]
                        })]
                      }), a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [a.jsx(Hn, {
                          className: "w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0"
                        }), a.jsxs("span", {
                          children: [a.jsx("strong", {
                              children: "Live Q&A:"
                            }),
                            " Ask questions and interact with me throughout the stream"
                          ]
                        })]
                      })]
                    })]
                  })]
                }), a.jsxs("div", {
                  className: "text-center",
                  children: [a.jsx("a", {
                    href: "https://www.tiktok.com/@adamnextofficial?is_from_webapp=1&sender_device=pc",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-block",
                    children: a.jsxs(ue, {
                      size: "lg",
                      className: "text-xl px-12 py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-black shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all",
                      children: [a.jsx(Ti, {
                        className: "w-6 h-6 mr-3"
                      }), "Watch on TikTok"]
                    })
                  }), a.jsxs("p", {
                    className: "text-sm text-muted-foreground mt-4",
                    children: ["Follow ", a.jsx("span", {
                        className: "text-pink-400 font-semibold",
                        children: "@adamnextofficial"
                      }),
                      " and turn on notifications so you don't miss it!"
                    ]
                  })]
                })]
              })]
            }), a.jsxs("div", {
              className: "mb-16",
              children: [a.jsxs("div", {
                className: "text-center mb-10",
                children: [a.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: "What You Can Build"
                }), a.jsx("p", {
                  className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                  children: "The Lab empowers you to create AI systems that don't just chat—they take action"
                })]
              }), a.jsxs("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [a.jsxs(je, {
                  className: "p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5",
                  children: [a.jsx(bh, {
                    className: "h-12 w-12 text-primary mb-4"
                  }), a.jsx("h3", {
                    className: "font-bold text-xl mb-3",
                    children: "Custom AI Brains"
                  }), a.jsx("p", {
                    className: "text-muted-foreground mb-4",
                    children: "Train AI assistants on your specific knowledge base—documents, websites, notes, and expertise."
                  }), a.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(Hn, {
                        className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        children: "Upload documents, PDFs, and knowledge files"
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(Hn, {
                        className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        children: "Scrape websites and add context from the web"
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(Hn, {
                        className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        children: "Set focus rules to guide behavior and responses"
                      })]
                    })]
                  })]
                }), a.jsxs(je, {
                  className: "p-6 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/5",
                  children: [a.jsx(FS, {
                    className: "h-12 w-12 text-accent mb-4"
                  }), a.jsx("h3", {
                    className: "font-bold text-xl mb-3",
                    children: "Specialized Task Bots"
                  }), a.jsx("p", {
                    className: "text-muted-foreground mb-4",
                    children: "Deploy your Brain into action-oriented bots that execute specific tasks automatically."
                  }), a.jsxs("ul", {
                    className: "space-y-2 text-sm text-muted-foreground",
                    children: [a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(tz, {
                        className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        children: "Social Media Bot - Generate and schedule posts"
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(Hv, {
                        className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        children: "Blog Writer Bot - Create articles from your Brain's knowledge"
                      })]
                    }), a.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [a.jsx(iz, {
                        className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                      }), a.jsx("span", {
                        children: "Workflow Bot - Automate complex multi-step processes"
                      })]
                    })]
                  })]
                })]
              })]
            }), a.jsxs("div", {
              className: "mb-16",
              children: [a.jsx("div", {
                className: "text-center mb-10",
                children: a.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: "Powerful Features"
                })
              }), a.jsxs("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: [a.jsxs(je, {
                  className: "p-6 border-primary/10 hover:border-primary/30 transition-all text-center",
                  children: [a.jsx(lw, {
                    className: "h-10 w-10 text-primary mx-auto mb-4"
                  }), a.jsx("h3", {
                    className: "font-bold text-lg mb-2",
                    children: "Multi-Brain Systems"
                  }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Combine multiple specialized Brains to tackle complex problems collaboratively"
                  })]
                }), a.jsxs(je, {
                  className: "p-6 border-primary/10 hover:border-primary/30 transition-all text-center",
                  children: [a.jsx(bh, {
                    className: "h-10 w-10 text-primary mx-auto mb-4"
                  }), a.jsx("h3", {
                    className: "font-bold text-lg mb-2",
                    children: "Knowledge Management"
                  }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Organize, categorize, and version your Brain's knowledge base efficiently"
                  })]
                }), a.jsxs(je, {
                  className: "p-6 border-primary/10 hover:border-primary/30 transition-all text-center",
                  children: [a.jsx(Hn, {
                    className: "h-10 w-10 text-primary mx-auto mb-4"
                  }), a.jsx("h3", {
                    className: "font-bold text-lg mb-2",
                    children: "Team Collaboration"
                  }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Share Brains and Co-Labs with team members for collaborative AI workflows"
                  })]
                })]
              })]
            }), a.jsxs(je, {
              className: "p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 text-center",
              children: [a.jsx("h3", {
                className: "text-2xl md:text-3xl font-bold mb-4",
                children: "Ready to Build Your AI Workforce?"
              }), a.jsx("p", {
                className: "text-muted-foreground mb-6 max-w-2xl mx-auto",
                children: "The Lab is where conversational AI meets automation. Stop chatting, start building intelligent systems that work for you."
              }), !n && a.jsxs(ue, {
                size: "lg",
                className: "bg-primary hover:bg-primary/90",
                onClick: () => {
                  var l;
                  return (l = document.querySelector('input[type="email"]')) == null ?
                    void 0 : l.focus()
                },
                children: [a.jsx(KT, {
                  className: "w-5 h-5 mr-2"
                }), "Join the Waitlist"]
              })]
            })]
          })
        })]
      })]
    })
  };
