// Route: /admin/users/:userId
// Component symbol: Moe
// Source lines: 68587-68826

const Moe = () => {
    var u, f, h;
    const {
      userId: t
    } = o1(), e = fs(), n = Dn(), [r, s] = Z.useState(""), {
      data: i,
      isLoading: o
    } = Noe(t || ""), {
      data: l,
      isLoading: c
    } = Coe(t || "");
    if (x.useEffect(() => {
        (async () => {
          if (!(!t || !n)) try {
            const {
              data: y,
              error: v
            } = await n.from("profiles").select("email").eq("id", t).single();
            if (v) throw v;
            s(y.email)
          } catch (y) {
            console.error("Error fetching user email:", y), vn.error("Failed to load user details")
          }
        })()
      }, [t, n]), !t) return a.jsx("div", {
      className: "text-center py-8",
      children: a.jsx("p", {
        className: "text-destructive",
        children: "Invalid user ID"
      })
    });
    const d = o || c;
    return a.jsxs("div", {
      className: "space-y-6",
      children: [a.jsx("div", {
        className: "flex items-center justify-between",
        children: a.jsxs("div", {
          className: "flex items-center gap-4",
          children: [a.jsxs(ue, {
            variant: "outline",
            size: "sm",
            onClick: () => e("/admin/users"),
            children: [a.jsx(cc, {
              className: "h-4 w-4 mr-2"
            }), "Back to Users"]
          }), a.jsxs("div", {
            children: [a.jsxs("h1", {
              className: "text-3xl font-bold flex items-center gap-2",
              children: [a.jsx(OB, {
                className: "h-8 w-8"
              }), "User Activity"]
            }), a.jsx("p", {
              className: "text-muted-foreground",
              children: r || "Loading..."
            })]
          })]
        })
      }), d ? a.jsx("div", {
        className: "flex items-center justify-center h-64",
        children: a.jsxs("div", {
          className: "text-center",
          children: [a.jsx("div", {
            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"
          }), a.jsx("p", {
            className: "mt-2 text-muted-foreground",
            children: "Loading activity..."
          })]
        })
      }) : a.jsxs(a.Fragment, {
        children: [a.jsxs("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: [a.jsxs(je, {
            children: [a.jsx(qt, {
              className: "pb-2",
              children: a.jsx(Yt, {
                className: "text-sm",
                children: "Search Credits"
              })
            }), a.jsxs(Ve, {
              children: [a.jsx("div", {
                className: "text-2xl font-bold",
                children: (i == null ? void 0 : i.search_credits) || 0
              }), a.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Remaining"
              })]
            })]
          }), a.jsxs(je, {
            children: [a.jsx(qt, {
              className: "pb-2",
              children: a.jsx(Yt, {
                className: "text-sm",
                children: "Compare Credits"
              })
            }), a.jsxs(Ve, {
              children: [a.jsx("div", {
                className: "text-2xl font-bold",
                children: (i == null ? void 0 : i.compare_credits) || 0
              }), a.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Remaining"
              })]
            })]
          }), a.jsxs(je, {
            children: [a.jsx(qt, {
              className: "pb-2",
              children: a.jsx(Yt, {
                className: "text-sm",
                children: "Total Searches"
              })
            }), a.jsxs(Ve, {
              children: [a.jsx("div", {
                className: "text-2xl font-bold",
                children: ((u = l == null ? void 0 : l.searches) == null ? void 0 : u
                  .length) || 0
              }), a.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "All time"
              })]
            })]
          })]
        }), a.jsxs(je, {
          children: [a.jsx(qt, {
            children: a.jsx(Yt, {
              children: "Search Activity"
            })
          }), a.jsx(Ve, {
            children: (f = l == null ? void 0 : l.searches) != null && f.length ? a.jsxs(wv, {
              children: [a.jsx(bv, {
                children: a.jsxs(zl, {
                  children: [a.jsx(Ar, {
                    children: "Query"
                  }), a.jsx(Ar, {
                    children: "Goal"
                  }), a.jsx(Ar, {
                    children: "Platforms"
                  }), a.jsx(Ar, {
                    children: "Results"
                  }), a.jsx(Ar, {
                    children: "Date & Time (EST)"
                  })]
                })
              }), a.jsx(Sv, {
                children: l.searches.map(m => {
                  var y;
                  return a.jsxs(zl, {
                    children: [a.jsx(jr, {
                      className: "font-medium",
                      children: m.query_text
                    }), a.jsx(jr, {
                      children: m.user_goal || "N/A"
                    }), a.jsx(jr, {
                      children: ((y = m.familiar_platforms) == null ?
                        void 0 : y.join(", ")) || "N/A"
                    }), a.jsx(jr, {
                      children: m.recommendations_count
                    }), a.jsx(jr, {
                      children: DA(m.created_at)
                    })]
                  }, m.id)
                })
              })]
            }) : a.jsx("p", {
              className: "text-muted-foreground text-center py-4",
              children: "No search activity found"
            })
          })]
        }), a.jsxs(je, {
          children: [a.jsx(qt, {
            children: a.jsx(Yt, {
              children: "Compare Activity"
            })
          }), a.jsx(Ve, {
            children: (h = l == null ? void 0 : l.comparisons) != null && h.length ? a.jsxs(wv, {
              children: [a.jsx(bv, {
                children: a.jsxs(zl, {
                  children: [a.jsx(Ar, {
                    children: "Tool 1"
                  }), a.jsx(Ar, {
                    children: "Tool 2"
                  }), a.jsx(Ar, {
                    children: "Goal"
                  }), a.jsx(Ar, {
                    children: "Date & Time (EST)"
                  })]
                })
              }), a.jsx(Sv, {
                children: l.comparisons.map(m => a.jsxs(zl, {
                  children: [a.jsx(jr, {
                    className: "font-medium",
                    children: m.tool1_name
                  }), a.jsx(jr, {
                    className: "font-medium",
                    children: m.tool2_name
                  }), a.jsx(jr, {
                    children: m.user_goal || "N/A"
                  }), a.jsx(jr, {
                    children: DA(m.created_at)
                  })]
                }, m.id))
              })]
            }) : a.jsx("p", {
              className: "text-muted-foreground text-center py-4",
              children: "No compare activity found"
            })
          })]
        })]
      })]
    })
  },
  Aoe = () => {
    const [t, e] = x.useState(!1), n = Dn();
    return {
      updatePassword: async (s, i) => {
        if (!n) return vn.error("Admin session required"), {
          success: !1
        };
        e(!0);
        try {
          const {
            data: o,
            error: l
          } = await n.rpc("update_admin_password", {
            current_password: s,
            new_password: i
          });
          if (l) throw l;
          const c = o;
          return c.success ? vn.success(c.message) : vn.error(c.message), c
        } catch (o) {
          return console.error("Error updating admin password:", o), vn.error("Failed to update password"), {
            success: !1
          }
        } finally {
          e(!1)
        }
      },
      isLoading: t
    }
  };
