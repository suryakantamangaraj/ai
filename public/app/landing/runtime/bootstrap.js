// Preserved modular landing runtime source.
// Shared app bootstrap extracted from the landing bundle after the final route component.

const wle = [{
    title: "Welcome to AI Verse",
    description: "AI Verse is your ultimate directory for discovering and comparing AI tools. Let's take a quick tour of how to find the perfect AI solution for your needs.",
    icon: a.jsx(Hn, {
      className: "w-16 h-16 text-primary"
    })
  }, {
    title: "AI-Powered Tool Discovery",
    description: "Simply describe what you need in plain English—like 'Create Website', 'Make A Logo', or 'Turn Image To Video'. Our AI searches through Adam's curated knowledge, blog insights, and expert opinions to recommend the top 3 best tools that match your needs.",
    icon: a.jsx(Hn, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Just type what you want to do in plain English", "AI analyzes Adam's blogs and expert insights",
      "Get personalized recommendations from 100+ tools", "Click suggested prompts for inspiration"
    ]
  }, {
    title: "Browse AI Tools",
    description: "Scroll through our curated collection of AI tools. Each card shows key information like the tool's name, description, pricing, and ratings. Click any tool card to see detailed information.",
    icon: a.jsx(JB, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Tool cards show quick overview information", "Click any card for full details and features",
      "New tools are added regularly"
    ]
  }, {
    title: "Filter by Category",
    description: "Use the category filter at the top to narrow down tools by type. Choose from categories like Chatbots, Image Generation, Writing, Analytics, and more. Select multiple categories to see tools from all of them.",
    icon: a.jsx(qB, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Click category badges to filter tools", "Select multiple categories at once",
      "Clear filters to see all tools again"
    ]
  }, {
    title: "Advanced Filtering",
    description: "Need more specific results? Use advanced filters to search by price range, ratings, features, user base size, or search for tools by name. The filter bar adapts to show what you need.",
    icon: a.jsx(ds, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Filter by free, freemium, or paid tools", "Search for specific tool names",
      "Combine multiple filters for precise results"
    ]
  }, {
    title: "Favorites & Compare",
    description: "Sign in to save your favorite tools with the heart icon. Use the compare feature to view multiple tools side-by-side and make informed decisions about which AI solution is best for you.",
    icon: a.jsx(Xi, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Heart tools to save them to your favorites", "Access favorites from the navigation menu",
      "Compare up to 3 tools at once"
    ]
  }, {
    title: "You're All Set!",
    description: "You now know how to explore AI Verse! Start browsing tools, use filters to find what you need, and don't forget to check out The Lab to create your own AI assistants. Access this tutorial anytime from the help button.",
    icon: a.jsx(au, {
      className: "w-16 h-16 text-primary"
    })
  }],
  ble = [{
    title: "Welcome to The Lab",
    description: "The Lab is your AI workspace where you can create intelligent assistants to help with your work. Let's explore the three main types of AI tools you can build.",
    icon: a.jsx(XT, {
      className: "w-16 h-16 text-primary"
    })
  }, {
    title: "Individual Brains",
    description: "Brains are individual AI assistants specialized for specific tasks. Each Brain can have its own knowledge base, focus rules, and tasks. Think of them as expert team members.",
    icon: a.jsx(bh, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Add knowledge files to make your Brain smarter", "Set focus rules to control what your Brain focuses on",
      "Create tasks to organize your Brain's work"
    ]
  }, {
    title: "Multi-Brains",
    description: "Multi-Brains combine multiple individual Brains into a powerful team. Use the pyramid to set priorities—Brains at the top are consulted first. Perfect for complex workflows requiring multiple perspectives.",
    icon: a.jsx(XT, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Drag and drop Brains to arrange priority tiers", "Top tier Brains respond first, then lower tiers",
      "On mobile, tap Brains to add them to tiers"
    ]
  }, {
    title: "Co-Labs",
    description: "Co-Labs are collaborative Multi-Brains where you can invite other users to contribute their Brains. Perfect for team projects where different people bring different AI expertise.",
    icon: a.jsx(_r, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Invite collaborators by email", "Each person can contribute their own Brains",
      "Great for cross-functional team projects"
    ]
  }, {
    title: "Chat & Interact",
    description: "Once you've created Brains or Multi-Brains, click the chat button to start conversations. Your AI assistants will respond based on their knowledge, focus rules, and priority levels.",
    icon: a.jsx(GR, {
      className: "w-16 h-16 text-primary"
    }),
    tips: ["Save important conversations for later", "Use focus rules to guide responses",
      "In Multi-Brains, higher priority Brains respond first"
    ]
  }, {
    title: "You're Ready!",
    description: "You now understand the basics of The Lab. Start by creating your first Brain, then experiment with Multi-Brains and Co-Labs as your needs grow. You can access this tutorial anytime from the help button.",
    icon: a.jsx(au, {
      className: "w-16 h-16 text-primary"
    })
  }];

function Sle({
  open: t,
  onClose: e,
  tutorialType: n = "lab"
}) {
  const [r, s] = x.useState(0), i = n === "home" ? wle : ble, o = n === "home" ? "home_tutorial_completed" :
    "lab_tutorial_completed", l = (r + 1) / i.length * 100, c = i[r], d = () => {
      r < i.length - 1 ? s(r + 1) : f()
    }, u = () => {
      r > 0 && s(r - 1)
    }, f = () => {
      localStorage.setItem(o, "true"), e()
    }, h = () => {
      localStorage.setItem(o, "true"), e()
    };
  return x.useEffect(() => {
    t && s(0)
  }, [t]), a.jsx(fr, {
    open: t,
    onOpenChange: m => !m && h(),
    children: a.jsxs(ir, {
      className: "max-w-2xl",
      children: [a.jsxs(Xn, {
        children: [a.jsx(Kn, {
          className: "text-2xl",
          children: c.title
        }), a.jsx(xE, {
          value: l,
          className: "h-2 mt-2"
        })]
      }), a.jsxs("div", {
        className: "py-6 space-y-6",
        children: [a.jsx("div", {
          className: "flex justify-center",
          children: c.icon
        }), a.jsx(vI, {
          className: "text-center text-base leading-relaxed",
          children: c.description
        }), c.tips && a.jsxs("div", {
          className: "bg-muted/50 rounded-lg p-4 space-y-3",
          children: [a.jsxs("div", {
            className: "flex items-center gap-2 text-sm font-semibold",
            children: [a.jsx(Bg, {
              className: "w-4 h-4"
            }), a.jsx("span", {
              children: "Quick Tips"
            })]
          }), a.jsx("ul", {
            className: "space-y-2",
            children: c.tips.map((m, y) => a.jsxs("li", {
              className: "flex items-start gap-2 text-sm",
              children: [a.jsx(au, {
                className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0"
              }), a.jsx("span", {
                children: m
              })]
            }, y))
          })]
        })]
      }), a.jsxs(gI, {
        className: "flex items-center justify-between sm:justify-between",
        children: [a.jsxs("div", {
          className: "text-sm text-muted-foreground",
          children: ["Step ", r + 1, " of ", i.length]
        }), a.jsxs("div", {
          className: "flex gap-2",
          children: [a.jsxs(ue, {
            variant: "outline",
            onClick: u,
            disabled: r === 0,
            children: [a.jsx(cc, {
              className: "w-4 h-4 mr-2"
            }), "Previous"]
          }), a.jsx(ue, {
            onClick: d,
            children: r === i.length - 1 ? a.jsxs(a.Fragment, {
              children: ["Get Started", a.jsx(au, {
                className: "w-4 h-4 ml-2"
              })]
            }) : a.jsxs(a.Fragment, {
              children: ["Next", a.jsx(IB, {
                className: "w-4 h-4 ml-2"
              })]
            })
          })]
        })]
      })]
    })
  })
}

function Ele({
  pageType: t = "lab"
}) {
  const [e, n] = x.useState(!1);
  return a.jsxs(a.Fragment, {
    children: [a.jsx(tx, {
      children: a.jsxs(es, {
        children: [a.jsx(ts, {
          asChild: !0,
          children: a.jsx(ue, {
            variant: "outline",
            size: "icon",
            onClick: () => n(!0),
            className: "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg",
            children: a.jsx(zB, {
              className: "w-5 h-5"
            })
          })
        }), a.jsx(Or, {
          side: "left",
          children: a.jsx("p", {
            children: "View Tutorial"
          })
        })]
      })
    }), a.jsx(Sle, {
      open: e,
      onClose: () => n(!1),
      tutorialType: t
    })]
  })
}
const Tle = () => {
    const {
      user: t
    } = js();
    return Fn({
      queryKey: ["userRole", t == null ? void 0 : t.id],
      queryFn: async () => {
        if (!(t != null && t.id)) return {
          hasAdminRole: !1
        };
        const {
          data: e,
          error: n
        } = await Rt.rpc("has_role", {
          _user_id: t.id,
          _role: "admin"
        });
        return n ? (console.error("Error checking user role:", n), {
          hasAdminRole: !1
        }) : {
          hasAdminRole: !!e
        }
      },
      enabled: !!(t != null && t.id),
      staleTime: 5 * 60 * 1e3
    })
  },
  Nle = new w$,
  Cle = () => {
    const t = dl(),
      {
        user: e
      } = js(),
      {
        data: n
      } = Tle(),
      r = t.pathname === "/lab" ? "lab" : "home";
    return t.pathname.startsWith("/admin") ? null : a.jsxs(a.Fragment, {
      children: [a.jsx("div", {
        className: e && (n != null && n.hasAdminRole) ? "fixed bottom-6 right-20 z-50" :
          "fixed bottom-6 right-6 z-50",
        children: a.jsx(Ele, {
          pageType: r
        })
      }), e && (n == null ? void 0 : n.hasAdminRole) && a.jsx(Ba, {
        to: "/admin/login",
        children: a.jsx(ue, {
          size: "icon",
          className: "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90",
          "aria-label": "Admin Access",
          children: a.jsx(Sd, {
            className: "h-5 w-5"
          })
        })
      })]
    })
  },
  Mle = () => a.jsx(N$, {
    client: Nle,
    children: a.jsx(eG, {
      children: a.jsx(tG, {
        children: a.jsx(nG, {
          children: a.jsxs(tx, {
            children: [a.jsx(Vz, {}), a.jsx(_6, {}), a.jsx(DH, {
              children: a.jsxs(rG, {
                children: [a.jsx(Cle, {}), a.jsxs(CH, {
                  children: [a.jsx(Sn, {
                    path: "/",
                    element: a.jsx(Ds, {
                      children: a.jsx(ete, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/adams-list",
                    element: a.jsx(Ds, {
                      children: a.jsx(Roe, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/adams-list/:slug",
                    element: a.jsx(Ds, {
                      children: a.jsx(_le, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/compare",
                    element: a.jsx(Ds, {
                      children: a.jsx(Loe, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/weekly",
                    element: a.jsx(Ds, {
                      children: a.jsx(Foe, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/about",
                    element: a.jsx(Ds, {
                      children: a.jsx(Boe, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/tools/:slug",
                    element: a.jsx(Ds, {
                      children: a.jsx(lte, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/lab",
                    element: a.jsx(Ds, {
                      children: a.jsx(ite, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/favorites",
                    element: a.jsx(Ds, {
                      children: a.jsx(ate, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/login",
                    element: a.jsx(Ds, {
                      children: a.jsx(nte, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/secret-admin-portal",
                    element: a.jsx(Ds, {
                      children: a.jsx(rte, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin",
                    element: a.jsx(ha, {
                      children: a.jsx(YM, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/dashboard",
                    element: a.jsx(ha, {
                      children: a.jsx(YM, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/tools",
                    element: a.jsx(ha, {
                      children: a.jsx(wae, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/categories",
                    element: a.jsx(ha, {
                      children: a.jsx(Oae, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/weekly",
                    element: a.jsx(ha, {
                      children: a.jsx(Zae, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/blog-posts",
                    element: a.jsx(ha, {
                      children: a.jsx(Hae, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/users",
                    element: a.jsx(ha, {
                      children: a.jsx(Toe, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/users/:userId",
                    element: a.jsx(ha, {
                      children: a.jsx(Moe, {})
                    })
                  }), a.jsx(Sn, {
                    path: "/admin/settings",
                    element: a.jsx(ha, {
                      children: a.jsx(joe, {})
                    })
                  }), a.jsx(Sn, {
                    path: "*",
                    element: a.jsx(Ds, {
                      children: a.jsx(tte, {})
                    })
                  })]
                })]
              })
            })]
          })
        })
      })
    })
  });
mR(document.getElementById("root")).render(a.jsx(Mle, {}));
