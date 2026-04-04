// Route: /admin/categories
// Component symbol: Oae
// Source lines: 65330-66613

const Oae = () => {
    const {
      data: t,
      isLoading: e
    } = Sm(), {
        data: n
      } = bm(), [r, s] = x.useState(""), [i, o] = x.useState(null), [l, c] = x.useState(null), [d, u] = x.useState(!1),
      [f, h] = x.useState(!1), [m, y] = x.useState(!1), [v, g] = x.useState(!1), [p, _] = x.useState(!1), [w, b] = x
      .useState(new Set), {
        deleteCategory: S
      } = Vx(), E = (t == null ? void 0 : t.filter(A => A.is_default)) || [], T = (t == null ? void 0 : t.filter(A => !A
        .is_default)) || [], P = E.filter(A => A.name.toLowerCase().includes(r.toLowerCase()) || A.description && A
        .description.toLowerCase().includes(r.toLowerCase())), C = T.filter(A => A.name.toLowerCase().includes(r
        .toLowerCase()) || A.description && A.description.toLowerCase().includes(r.toLowerCase())), M = A => n ? n
      .filter(k => {
        var W;
        return (W = k.tool_categories) == null ? void 0 : W.some(G => G.category_id === A)
      }).length : 0, L = A => n ? n.filter(k => {
        var W;
        return (W = k.tool_categories) == null ? void 0 : W.some(G => G.category_id === A)
      }) : [], D = A => {
        const k = new Set(w);
        k.has(A) ? k.delete(A) : k.add(A), b(k)
      }, $ = A => {
        o(A), u(!0)
      }, j = A => {
        o(A), g(!0)
      }, F = A => {
        o(A), _(!0)
      }, R = A => {
        c(A), h(!0)
      }, I = async A => {
        try {
          await S.mutateAsync(A)
        } catch (k) {
          console.error("Error deleting category:", k)
        }
      };
    return e ? a.jsx("div", {
      className: "flex items-center justify-center h-64",
      children: a.jsx("div", {
        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
      })
    }) : a.jsxs(a.Fragment, {
      children: [a.jsxs("div", {
        className: "space-y-6",
        children: [a.jsxs("div", {
          className: "flex justify-between items-center",
          children: [a.jsxs("div", {
            children: [a.jsx("h1", {
              className: "text-3xl font-bold text-foreground",
              children: "Categories Management"
            }), a.jsx("p", {
              className: "text-muted-foreground",
              children: "Manage default and custom categories for organizing your tools"
            })]
          }), a.jsxs(ue, {
            onClick: () => y(!0),
            children: [a.jsx(Lr, {
              className: "w-4 h-4 mr-2"
            }), "Add Custom Category"]
          })]
        }), a.jsx(je, {
          children: a.jsx(Ve, {
            className: "pt-6",
            children: a.jsxs("div", {
              className: "relative",
              children: [a.jsx(ds, {
                className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              }), a.jsx(Ie, {
                placeholder: "Search categories...",
                value: r,
                onChange: A => s(A.target.value),
                className: "pl-10"
              })]
            })
          })
        }), a.jsxs("div", {
          className: "space-y-4",
          children: [a.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [a.jsx("h2", {
              className: "text-xl font-semibold",
              children: "Default Categories"
            }), a.jsx(Wv, {
              className: "w-4 h-4 text-muted-foreground"
            })]
          }), a.jsx("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            children: P.map(A => a.jsx("div", {
              children: a.jsxs(je, {
                className: "border-2",
                children: [a.jsx(qt, {
                  className: "pb-3",
                  children: a.jsx("div", {
                    className: "flex items-center justify-between",
                    children: a.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [a.jsx("div", {
                        className: "w-10 h-10 rounded-lg flex items-center justify-center text-white font-medium",
                        style: {
                          backgroundColor: A.color
                        },
                        children: A.icon ? a.jsx("span", {
                          className: "text-lg",
                          children: A.icon
                        }) : a.jsx(sg, {
                          className: "w-5 h-5"
                        })
                      }), a.jsxs("div", {
                        className: "flex-1",
                        children: [a.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [a.jsx(Yt, {
                            className: "text-lg",
                            children: A.name
                          }), a.jsx(tt, {
                            variant: "secondary",
                            className: "text-xs",
                            children: "Default"
                          })]
                        }), A.description && a.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1",
                          children: A.description
                        })]
                      })]
                    })
                  })
                }), a.jsxs(Ve, {
                  className: "pt-0",
                  children: [a.jsxs("div", {
                    className: "flex justify-between items-center mb-3",
                    children: [a.jsxs(tt, {
                      variant: "outline",
                      children: [M(A.id), " tools"]
                    }), a.jsxs("div", {
                      className: "flex space-x-2",
                      children: [a.jsxs(ue, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => $(A),
                        children: [a.jsx(Ei, {
                          className: "w-4 h-4 mr-1"
                        }), "Edit Description"]
                      }), M(A.id) > 0 && a.jsx(Rb, {
                        children: a.jsx(LF, {
                          asChild: !0,
                          children: a.jsxs(ue, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => D(A.id),
                            children: [w.has(A.id) ? a
                              .jsx(Qh, {
                                className: "w-4 h-4 mr-1"
                              }) : a.jsx(Jh, {
                                className: "w-4 h-4 mr-1"
                              }), "View Tools"
                            ]
                          })
                        })
                      })]
                    })]
                  }), w.has(A.id) && a.jsx(Rb, {
                    open: w.has(A.id),
                    children: a.jsx(OF, {
                      children: a.jsx("div", {
                        className: "space-y-2 mt-3 pt-3 border-t",
                        children: L(A.id).map(k => a.jsxs("div", {
                          className: "flex items-center justify-between p-2 bg-muted rounded-md",
                          children: [a.jsxs("div", {
                            className: "flex-1",
                            children: [a.jsx("p", {
                              className: "font-medium text-sm",
                              children: k.name
                            }), a.jsx("p", {
                              className: "text-xs text-muted-foreground truncate",
                              children: k
                                .description
                            })]
                          }), a.jsx(ue, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => R(k),
                            children: a.jsx(BS, {
                              className: "w-4 h-4"
                            })
                          })]
                        }, k.id))
                      })
                    })
                  })]
                })]
              })
            }, A.id))
          })]
        }), a.jsx(yE, {}), a.jsxs("div", {
          className: "space-y-4",
          children: [a.jsx("h2", {
            className: "text-xl font-semibold",
            children: "Custom Categories"
          }), a.jsx("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            children: C.length > 0 ? C.map(A => a.jsxs(je, {
              children: [a.jsx(qt, {
                className: "pb-3",
                children: a.jsx("div", {
                  className: "flex items-center justify-between",
                  children: a.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [a.jsx("div", {
                      className: "w-10 h-10 rounded-lg flex items-center justify-center",
                      style: {
                        backgroundColor: A.color || "#f3f4f6"
                      },
                      children: A.icon ? a.jsx("span", {
                        className: "text-lg",
                        children: A.icon
                      }) : a.jsx(sg, {
                        className: "w-5 h-5 text-muted-foreground"
                      })
                    }), a.jsxs("div", {
                      children: [a.jsx(Yt, {
                        className: "text-lg",
                        children: A.name
                      }), A.description && a.jsx("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: A.description
                      })]
                    })]
                  })
                })
              }), a.jsx(Ve, {
                className: "pt-0",
                children: a.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [a.jsxs(tt, {
                    variant: "outline",
                    children: [M(A.id), " tools"]
                  }), a.jsxs("div", {
                    className: "flex space-x-1",
                    children: [a.jsxs(ue, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => F(A),
                      children: [a.jsx(_r, {
                        className: "w-4 h-4 mr-1"
                      }), "Manage"]
                    }), a.jsxs(ue, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => j(A),
                      children: [a.jsx(Ei, {
                        className: "w-4 h-4 mr-1"
                      }), "Edit"]
                    }), a.jsxs(Mm, {
                      children: [a.jsx(Px, {
                        asChild: !0,
                        children: a.jsxs(ue, {
                          variant: "outline",
                          size: "sm",
                          children: [a.jsx(Ri, {
                            className: "w-4 h-4 mr-1"
                          }), "Delete"]
                        })
                      }), a.jsxs(Xu, {
                        children: [a.jsxs(Ku, {
                          children: [a.jsx(Qu, {
                            children: "Delete Category"
                          }), a.jsxs(Ju, {
                            children: [
                              'Are you sure you want to delete "',
                              A.name,
                              '"? All tools in this category will be uncategorized. This action cannot be undone.'
                            ]
                          })]
                        }), a.jsxs(Zu, {
                          children: [a.jsx(tf, {
                            children: "Cancel"
                          }), a.jsx(ef, {
                            onClick: () => I(A.id),
                            className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            children: "Delete"
                          })]
                        })]
                      })]
                    })]
                  })]
                })
              })]
            }, A.id)) : a.jsx("div", {
              className: "col-span-full",
              children: a.jsx(je, {
                children: a.jsxs(Ve, {
                  className: "text-center py-12",
                  children: [a.jsx(sg, {
                    className: "w-12 h-12 text-muted-foreground mx-auto mb-4"
                  }), a.jsx("p", {
                    className: "text-muted-foreground mb-2",
                    children: "No custom categories found."
                  }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Create custom categories to further organize your tools beyond the default categories."
                  })]
                })
              })
            })
          })]
        })]
      }), a.jsx(kae, {
        isOpen: m,
        onClose: () => y(!1)
      }), i && a.jsxs(a.Fragment, {
        children: [a.jsx(Rae, {
          isOpen: d,
          onClose: () => {
            u(!1), o(null)
          },
          category: i
        }), a.jsx(Iae, {
          isOpen: v,
          onClose: () => {
            g(!1), o(null)
          },
          category: i
        }), a.jsx(Lae, {
          isOpen: p,
          onClose: () => {
            _(!1), o(null)
          },
          category: i
        })]
      }), l && a.jsx(gF, {
        isOpen: f,
        onClose: () => {
          h(!1), c(null)
        },
        tool: l
      })]
    })
  },
  Fae = () => Fn({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const {
        data: t,
        error: e
      } = await Rt.from("adams_blog_posts").select("*").order("display_order");
      if (e) throw console.error("Error fetching blog posts:", e), e;
      return t
    }
  }),
  Uae = () => Fn({
    queryKey: ["published-blog-posts"],
    queryFn: async () => {
      const {
        data: t,
        error: e
      } = await Rt.from("adams_blog_posts").select("*").eq("is_published", !0).order("title");
      if (e) throw console.error("Error fetching published blog posts:", e), e;
      return t
    }
  }),
  Bae = t => Fn({
    queryKey: ["blog-post", t],
    queryFn: async () => {
      const {
        data: e,
        error: n
      } = await Rt.from("adams_blog_posts").select("*").eq("slug", t).eq("is_published", !0).single();
      if (n) throw console.error("Error fetching blog post:", n), n;
      return e
    },
    enabled: !!t
  }),
  FF = t => Fn({
    queryKey: ["blog-tools", t],
    queryFn: async () => {
      let e = Rt.from("adams_blog_tools").select(`
          *,
          tools (
            id,
            name,
            description,
            logo_url,
            website_url,
            price,
            rating
          )
        `).order("rank");
      t && (e = e.eq("blog_post_id", t));
      const {
        data: n,
        error: r
      } = await e;
      if (r) throw console.error("Error fetching blog tools:", r), r;
      return n
    },
    enabled: !!t
  }),
  UF = () => {
    const t = As(),
      e = Dn(),
      n = tn({
        mutationFn: async c => {
          if (!e) throw new Error("Admin authentication required");
          console.log("Creating blog post with data:", c);
          const {
            analyzedTools: d,
            ...u
          } = c, {
            data: f,
            error: h
          } = await e.from("adams_blog_posts").insert(u).select().single();
          if (h) throw console.error("Database error:", h), h;
          if (d && d.length > 0 && f) try {
            await Rt.functions.invoke("create-blog-tools", {
              body: {
                blogPostId: f.id,
                tools: d
              }
            })
          } catch (m) {
            console.error("Failed to create blog tools:", m)
          }
          return f
        },
        onSuccess: () => {
          t.invalidateQueries({
            queryKey: ["blog-posts"]
          }), vt({
            title: "Success",
            description: "Blog post created successfully"
          })
        },
        onError: c => {
          console.error("Error creating blog post:", c), vt({
            title: "Error",
            description: "Failed to create blog post",
            variant: "destructive"
          })
        }
      }),
      r = tn({
        mutationFn: async ({
          id: c,
          ...d
        }) => {
          if (!e) throw new Error("Admin authentication required");
          console.log("Updating blog post with data:", d);
          const {
            analyzedTools: u,
            ...f
          } = d, {
            data: h,
            error: m
          } = await e.from("adams_blog_posts").update(f).eq("id", c).select().single();
          if (m) throw console.error("Database error:", m), m;
          if (u && u.length > 0 && h) try {
            await e.from("adams_blog_tools").delete().eq("blog_post_id", h.id), await Rt.functions.invoke(
              "create-blog-tools", {
                body: {
                  blogPostId: h.id,
                  tools: u
                }
              })
          } catch (y) {
            console.error("Failed to update blog tools:", y)
          }
          return h
        },
        onSuccess: () => {
          t.invalidateQueries({
            queryKey: ["blog-posts"]
          }), vt({
            title: "Success",
            description: "Blog post updated successfully"
          })
        },
        onError: c => {
          console.error("Error updating blog post:", c), vt({
            title: "Error",
            description: "Failed to update blog post",
            variant: "destructive"
          })
        }
      }),
      s = tn({
        mutationFn: async c => {
          if (!e) throw new Error("Admin authentication required");
          const {
            error: d
          } = await e.from("adams_blog_posts").delete().eq("id", c);
          if (d) throw d
        },
        onSuccess: () => {
          t.invalidateQueries({
            queryKey: ["blog-posts"]
          }), vt({
            title: "Success",
            description: "Blog post deleted successfully"
          })
        },
        onError: c => {
          console.error("Error deleting blog post:", c), vt({
            title: "Error",
            description: "Failed to delete blog post",
            variant: "destructive"
          })
        }
      }),
      i = tn({
        mutationFn: async c => {
          if (!e) throw new Error("Admin authentication required");
          const {
            data: d,
            error: u
          } = await e.from("adams_blog_tools").insert(c).select().single();
          if (u) throw u;
          return d
        },
        onSuccess: () => {
          t.invalidateQueries({
            queryKey: ["blog-tools"]
          }), vt({
            title: "Success",
            description: "Tool added to blog post successfully"
          })
        },
        onError: c => {
          console.error("Error adding tool to blog post:", c), vt({
            title: "Error",
            description: "Failed to add tool to blog post",
            variant: "destructive"
          })
        }
      }),
      o = tn({
        mutationFn: async ({
          id: c,
          ...d
        }) => {
          if (!e) throw new Error("Admin authentication required");
          const {
            data: u,
            error: f
          } = await e.from("adams_blog_tools").update(d).eq("id", c).select().single();
          if (f) throw f;
          return u
        },
        onSuccess: () => {
          t.invalidateQueries({
            queryKey: ["blog-tools"]
          }), vt({
            title: "Success",
            description: "Blog tool updated successfully"
          })
        },
        onError: c => {
          console.error("Error updating blog tool:", c), vt({
            title: "Error",
            description: "Failed to update blog tool",
            variant: "destructive"
          })
        }
      }),
      l = tn({
        mutationFn: async c => {
          if (!e) throw new Error("Admin authentication required");
          const {
            error: d
          } = await e.from("adams_blog_tools").delete().eq("id", c);
          if (d) throw d
        },
        onSuccess: () => {
          t.invalidateQueries({
            queryKey: ["blog-tools"]
          }), vt({
            title: "Success",
            description: "Tool removed from blog post successfully"
          })
        },
        onError: c => {
          console.error("Error removing tool from blog post:", c), vt({
            title: "Error",
            description: "Failed to remove tool from blog post",
            variant: "destructive"
          })
        }
      });
    return {
      createBlogPost: n,
      updateBlogPost: r,
      deleteBlogPost: s,
      addToolToBlogPost: i,
      updateBlogTool: o,
      removeBlogTool: l
    }
  },
  zae = () => {
    const {
      toast: t
    } = ji(), e = tn({
      mutationFn: async n => {
        console.log("Starting content analysis...");
        const {
          data: r,
          error: s
        } = await Rt.functions.invoke("analyze-blog-content", {
          body: {
            content: n
          }
        });
        if (s) throw console.error("Supabase function error:", s), new Error("Failed to analyze content");
        if (!r) throw new Error("No analysis result received");
        return r
      },
      onSuccess: () => {
        t({
          title: "Analysis Complete",
          description: "Blog content has been analyzed and form populated."
        })
      },
      onError: n => {
        console.error("Content analysis error:", n), t({
          title: "Analysis Failed",
          description: n instanceof Error ? n.message : "Failed to analyze content",
          variant: "destructive"
        })
      }
    });
    return {
      analyzeContent: e.mutate,
      isAnalyzing: e.isPending,
      error: e.error
    }
  },
  Vae = ls({
    title: ht().min(1, "Title is required"),
    seo_title: ht().min(1, "SEO title is required"),
    meta_description: ht().optional(),
    intro_content: ht().min(1, "Intro content is required"),
    tutorials_content: ht().optional(),
    conclusion_content: ht().min(1, "Conclusion content is required"),
    display_order: Ji().default(0),
    is_published: rl().default(!1)
  }),
  $ae = ({
    isOpen: t,
    onClose: e,
    blogPost: n
  }) => {
    const {
      createBlogPost: r,
      updateBlogPost: s
    } = UF(), {
        analyzeContent: i,
        isAnalyzing: o
      } = zae(), {
        data: l
      } = FF(n == null ? void 0 : n.id), [c, d] = x.useState([]), [u, f] = x.useState(""), [h, m] = x.useState([]), [y,
        v
      ] = x.useState({
        question: "",
        answer: ""
      }), [g, p] = x.useState(""), [_, w] = x.useState([]), [b, S] = x.useState(null), [E, T] = x.useState(""), [P, C] =
      x.useState(""), M = pl({
        resolver: gl(Vae),
        defaultValues: {
          title: "",
          seo_title: "",
          meta_description: "",
          intro_content: "",
          tutorials_content: "",
          conclusion_content: "",
          display_order: 0,
          is_published: !1
        }
      });
    x.useEffect(() => {
      if (n) {
        if (M.reset({
            title: n.title,
            seo_title: n.seo_title,
            meta_description: n.meta_description || "",
            intro_content: n.intro_content,
            tutorials_content: n.tutorials_content || "",
            conclusion_content: n.conclusion_content,
            display_order: n.display_order || 0,
            is_published: n.is_published
          }), d(n.keywords || []), m(n.faq_content || []), l && l.length > 0) {
          const q = l.map(ee => {
            var me;
            return {
              name: ((me = ee.tools) == null ? void 0 : me.name) || "",
              rank: ee.rank,
              pros: ee.pros || [],
              cons: ee.cons || [],
              affiliateLink: ee.affiliate_link || "",
              detailedReview: ee.detailed_review || ""
            }
          });
          w(q)
        }
      } else M.reset(), d([]), m([]), w([])
    }, [n, l, M]);
    const L = q => q.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim(),
      D = () => {
        u.trim() && !c.includes(u.trim()) && (d([...c, u.trim()]), f(""))
      },
      $ = q => {
        d(c.filter(ee => ee !== q))
      },
      j = () => {
        y.question.trim() && y.answer.trim() && (m([...h, y]), v({
          question: "",
          answer: ""
        }))
      },
      F = q => {
        m(h.filter((ee, me) => me !== q))
      },
      R = q => ({
        1: "🥇",
        2: "🥈",
        3: "🥉"
      })[q] || "⭐",
      I = q => {
        S({
          ...q
        }), T(""), C("")
      },
      A = () => {
        b && (w(_.map(q => q.name === b.name ? b : q)), S(null))
      },
      k = () => {
        E.trim() && b && (S({
          ...b,
          pros: [...b.pros, E.trim()]
        }), T(""))
      },
      W = () => {
        P.trim() && b && (S({
          ...b,
          cons: [...b.cons, P.trim()]
        }), C(""))
      },
      G = q => {
        b && S({
          ...b,
          pros: b.pros.filter((ee, me) => me !== q)
        })
      },
      V = q => {
        b && S({
          ...b,
          cons: b.cons.filter((ee, me) => me !== q)
        })
      },
      H = q => {
        w(_.filter(ee => ee.name !== q))
      },
      te = () => {
        g.trim() && i(g, {
          onSuccess: q => {
            M.setValue("title", q.title), M.setValue("seo_title", q.seoTitle), M.setValue("meta_description", q
              .metaDescription), M.setValue("intro_content", q.introContent), M.setValue("tutorials_content", q
              .tutorialsContent || ""), M.setValue("conclusion_content", q.conclusionContent), d(q.keywords), m(
              q.faqContent), w(q.tools || []), p("")
          }
        })
      },
      J = q => {
        try {
          const ee = L(q.title),
            me = {
              ...q,
              slug: ee,
              keywords: c.length > 0 ? c : void 0,
              faq_content: h.length > 0 ? h : void 0,
              analyzedTools: _
            };
          console.log("Submitting blog post data:", me), n ? s.mutate({
            id: n.id,
            ...me
          }) : r.mutate(me), e()
        } catch (ee) {
          console.error("Error submitting blog post:", ee)
        }
      };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "max-w-4xl max-h-[90vh] overflow-y-auto",
        children: [a.jsx(Xn, {
          children: a.jsx(Kn, {
            children: n ? "Edit Blog Post" : "Create New Blog Post"
          })
        }), a.jsxs("div", {
          className: "space-y-4 border-b pb-6",
          children: [a.jsxs("div", {
            className: "space-y-2",
            children: [a.jsx(Ut, {
              children: "Paste Blog Content for AI Analysis"
            }), a.jsx(mn, {
              placeholder: "Paste your formatted blog content here (title, sections, tools, FAQs, etc.) and click Analyze to auto-populate the form...",
              value: g,
              onChange: q => p(q.target.value),
              className: "min-h-[120px] text-sm"
            })]
          }), a.jsx(ue, {
            type: "button",
            onClick: te,
            disabled: !g.trim() || o,
            className: "w-full",
            children: o ? a.jsxs(a.Fragment, {
              children: [a.jsx("div", {
                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
              }), "Analyzing Content..."]
            }) : "Analyze Content & Populate Form"
          })]
        }), a.jsx(vl, {
          ...M,
          children: a.jsxs("form", {
            onSubmit: M.handleSubmit(J),
            className: "space-y-6",
            children: [a.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [a.jsx(qe, {
                control: M.control,
                name: "title",
                render: ({
                  field: q
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Title"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      placeholder: "e.g., Best AI Tools for Beginners 2025",
                      ...q
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: M.control,
                name: "seo_title",
                render: ({
                  field: q
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "SEO Title (H1)"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      placeholder: "e.g., Best AI Image Generators for Beginners - Complete 2025 Guide",
                      ...q
                    })
                  }), a.jsx(Je, {})]
                })
              })]
            }), a.jsx(qe, {
              control: M.control,
              name: "meta_description",
              render: ({
                field: q
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Meta Description"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "e.g., Compare the top AI image generators perfect for beginners. Find the best tool based on features, pricing, and ease of use. Updated for 2025.",
                    ...q
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsxs("div", {
              className: "space-y-2",
              children: [a.jsx(Ut, {
                children: "Keywords"
              }), a.jsxs("div", {
                className: "flex gap-2",
                children: [a.jsx(Ie, {
                  placeholder: "e.g., ai image generator, beginner tools, ai art",
                  value: u,
                  onChange: q => f(q.target.value),
                  onKeyPress: q => q.key === "Enter" && (q.preventDefault(), D())
                }), a.jsx(ue, {
                  type: "button",
                  onClick: D,
                  children: a.jsx(Lr, {
                    className: "w-4 h-4"
                  })
                })]
              }), a.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: c.map(q => a.jsxs(tt, {
                  variant: "secondary",
                  children: [q, a.jsx("button", {
                    type: "button",
                    onClick: () => $(q),
                    className: "ml-1 hover:text-destructive",
                    children: a.jsx(qn, {
                      className: "w-3 h-3"
                    })
                  })]
                }, q))
              })]
            }), _.length > 0 && a.jsxs("div", {
              className: "space-y-4 border-t pt-6",
              children: [a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsx(Ut, {
                  className: "text-lg font-semibold",
                  children: "Extracted Tools"
                }), a.jsxs(tt, {
                  variant: "secondary",
                  children: [_.length, " tools"]
                })]
              }), a.jsx("div", {
                className: "space-y-3",
                children: _.sort((q, ee) => q.rank - ee.rank).map((q, ee) => a.jsxs(je, {
                  className: "relative",
                  children: [a.jsx(qt, {
                    className: "pb-3",
                    children: a.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [a.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [a.jsx(tt, {
                          className: "text-lg font-bold",
                          children: R(q.rank)
                        }), a.jsxs("div", {
                          children: [a.jsx(Yt, {
                            className: "text-lg",
                            children: q.name
                          }), q.detailedReview && a.jsx(
                            "p", {
                              className: "text-sm text-muted-foreground",
                              children: q.detailedReview
                            })]
                        })]
                      }), a.jsxs("div", {
                        className: "flex space-x-2",
                        children: [a.jsx(ue, {
                          variant: "outline",
                          size: "sm",
                          onClick: () => I(q),
                          children: a.jsx(Ei, {
                            className: "w-4 h-4"
                          })
                        }), a.jsx(ue, {
                          variant: "outline",
                          size: "sm",
                          onClick: () => H(q.name),
                          children: a.jsx(Ri, {
                            className: "w-4 h-4"
                          })
                        })]
                      })]
                    })
                  }), a.jsxs(Ve, {
                    className: "pt-0",
                    children: [a.jsxs("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [q.pros.length > 0 && a.jsxs("div", {
                        children: [a.jsx("h4", {
                          className: "font-semibold text-green-700 mb-2",
                          children: "Strengths:"
                        }), a.jsx("ul", {
                          className: "space-y-1",
                          children: q.pros.map((me, ye) => a
                            .jsxs("li", {
                              className: "text-sm flex items-start",
                              children: [a.jsx("span", {
                                className: "text-green-600 mr-2",
                                children: "✓"
                              }), me]
                            }, ye))
                        })]
                      }), q.cons.length > 0 && a.jsxs("div", {
                        children: [a.jsx("h4", {
                          className: "font-semibold text-red-700 mb-2",
                          children: "Weaknesses:"
                        }), a.jsx("ul", {
                          className: "space-y-1",
                          children: q.cons.map((me, ye) => a
                            .jsxs("li", {
                              className: "text-sm flex items-start",
                              children: [a.jsx("span", {
                                className: "text-red-600 mr-2",
                                children: "✗"
                              }), me]
                            }, ye))
                        })]
                      })]
                    }), q.affiliateLink && a.jsx("div", {
                      className: "mt-3 pt-3 border-t",
                      children: a.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: ["Affiliate Link: ", q
                          .affiliateLink
                        ]
                      })
                    })]
                  })]
                }, ee))
              })]
            }), a.jsx(qe, {
              control: M.control,
              name: "display_order",
              render: ({
                field: q
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Display Order"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    type: "number",
                    placeholder: "0",
                    ...q,
                    onChange: ee => q.onChange(parseInt(ee.target.value) || 0)
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: M.control,
              name: "intro_content",
              render: ({
                field: q
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Intro Content"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "Creating images used to mean hiring a designer or learning complicated software...",
                    rows: 4,
                    ...q
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: M.control,
              name: "tutorials_content",
              render: ({
                field: q
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Tutorials Section"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "Include video links, tutorial titles, step-by-step guides...",
                    rows: 3,
                    ...q
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsxs("div", {
              className: "space-y-4",
              children: [a.jsx(Ut, {
                children: "FAQ Section"
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsxs("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [a.jsx(Ie, {
                    placeholder: "FAQ Question",
                    value: y.question,
                    onChange: q => v({
                      ...y,
                      question: q.target.value
                    })
                  }), a.jsxs("div", {
                    className: "flex gap-2",
                    children: [a.jsx(Ie, {
                      placeholder: "FAQ Answer",
                      value: y.answer,
                      onChange: q => v({
                        ...y,
                        answer: q.target.value
                      })
                    }), a.jsx(ue, {
                      type: "button",
                      onClick: j,
                      children: a.jsx(Lr, {
                        className: "w-4 h-4"
                      })
                    })]
                  })]
                }), a.jsx("div", {
                  className: "space-y-2",
                  children: h.map((q, ee) => a.jsxs("div", {
                    className: "p-2 border rounded flex justify-between items-start",
                    children: [a.jsxs("div", {
                      className: "flex-1",
                      children: [a.jsx("p", {
                        className: "font-medium text-sm",
                        children: q.question
                      }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: q.answer
                      })]
                    }), a.jsx(ue, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: () => F(ee),
                      children: a.jsx(qn, {
                        className: "w-4 h-4"
                      })
                    })]
                  }, ee))
                })]
              })]
            }), a.jsx(qe, {
              control: M.control,
              name: "conclusion_content",
              render: ({
                field: q
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Conclusion Content"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "AI image generation has never been more beginner-friendly...",
                    rows: 3,
                    ...q
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: M.control,
              name: "is_published",
              render: ({
                field: q
              }) => a.jsxs(Ge, {
                className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                children: [a.jsxs("div", {
                  className: "space-y-0.5",
                  children: [a.jsx($e, {
                    children: "Published"
                  }), a.jsx("div", {
                    className: "text-sm text-muted-foreground",
                    children: "Make this blog post visible to users"
                  })]
                }), a.jsx(Ze, {
                  children: a.jsx(ea, {
                    checked: q.value,
                    onCheckedChange: q.onChange
                  })
                })]
              })
            }), a.jsxs("div", {
              className: "flex justify-end space-x-2",
              children: [a.jsx(ue, {
                type: "button",
                variant: "outline",
                onClick: e,
                children: "Cancel"
              }), a.jsxs(ue, {
                type: "submit",
                children: [n ? "Update" : "Create", " Blog Post"]
              })]
            })]
          })
        }), b && a.jsx(fr, {
          open: !!b,
          onOpenChange: () => S(null),
          children: a.jsxs(ir, {
            className: "max-w-2xl",
            children: [a.jsx(Xn, {
              children: a.jsxs(Kn, {
                children: ["Edit ", b.name]
              })
            }), a.jsxs("div", {
              className: "space-y-4",
              children: [a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  children: "Detailed Review"
                }), a.jsx(mn, {
                  placeholder: "Why this tool stands out...",
                  value: b.detailedReview || "",
                  onChange: q => S({
                    ...b,
                    detailedReview: q.target.value
                  }),
                  rows: 3
                })]
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  children: "Strengths"
                }), a.jsxs("div", {
                  className: "flex gap-2",
                  children: [a.jsx(Ie, {
                    placeholder: "Add strength",
                    value: E,
                    onChange: q => T(q.target.value),
                    onKeyPress: q => q.key === "Enter" && (q.preventDefault(),
                      k())
                  }), a.jsx(ue, {
                    type: "button",
                    onClick: k,
                    children: a.jsx(Lr, {
                      className: "w-4 h-4"
                    })
                  })]
                }), a.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: b.pros.map((q, ee) => a.jsxs(tt, {
                    variant: "secondary",
                    className: "bg-green-100 text-green-800",
                    children: [q, a.jsx("button", {
                      type: "button",
                      onClick: () => G(ee),
                      className: "ml-1 hover:text-destructive",
                      children: a.jsx(qn, {
                        className: "w-3 h-3"
                      })
                    })]
                  }, ee))
                })]
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  children: "Weaknesses"
                }), a.jsxs("div", {
                  className: "flex gap-2",
                  children: [a.jsx(Ie, {
                    placeholder: "Add weakness",
                    value: P,
                    onChange: q => C(q.target.value),
                    onKeyPress: q => q.key === "Enter" && (q.preventDefault(),
                      W())
                  }), a.jsx(ue, {
                    type: "button",
                    onClick: W,
                    children: a.jsx(Lr, {
                      className: "w-4 h-4"
                    })
                  })]
                }), a.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: b.cons.map((q, ee) => a.jsxs(tt, {
                    variant: "secondary",
                    className: "bg-red-100 text-red-800",
                    children: [q, a.jsx("button", {
                      type: "button",
                      onClick: () => V(ee),
                      className: "ml-1 hover:text-destructive",
                      children: a.jsx(qn, {
                        className: "w-3 h-3"
                      })
                    })]
                  }, ee))
                })]
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  children: "Affiliate Link (Optional)"
                }), a.jsx(Ie, {
                  placeholder: "https://example.com/affiliate-link",
                  value: b.affiliateLink || "",
                  onChange: q => S({
                    ...b,
                    affiliateLink: q.target.value
                  })
                })]
              }), a.jsxs("div", {
                className: "flex justify-end space-x-2",
                children: [a.jsx(ue, {
                  variant: "outline",
                  onClick: () => S(null),
                  children: "Cancel"
                }), a.jsx(ue, {
                  onClick: A,
                  children: "Update Tool"
                })]
              })]
            })]
          })
        })]
      })
    })
  };
