// Route: /admin/users
// Component symbol: Toe
// Source lines: 68267-68586

const Toe = () => {
    const t = Dn(),
      e = fs(),
      [n, r] = x.useState([]),
      [s, i] = x.useState({}),
      [o, l] = x.useState(!0),
      [c, d] = x.useState(""),
      [u, f] = x.useState(null),
      [h, m] = x.useState(!1),
      [y, v] = x.useState(new Set),
      g = async () => {
        try {
          if (!(await J0.checkLimit("fetch-users", e_.USER_SEARCH)).allowed) {
            vn.error("Rate limit exceeded. Please wait before refreshing users again.");
            return
          }
          if (l(!0), !t) {
            console.error("Admin supabase client not available");
            return
          }
          const {
            data: C,
            error: M
          } = await t.from("profiles").select("*").order("created_at", {
            ascending: !1
          });
          if (M) throw M;
          r(C || []);
          const {
            data: L,
            error: D
          } = await t.from("user_payment_info").select("user_id, brain_subscription_quantity");
          if (D) throw D;
          const $ = (L || []).reduce((j, F) => (j[F.user_id] = F, j), {});
          i($)
        } catch (P) {
          console.error("Error fetching users:", P), vn.error("Failed to fetch users")
        } finally {
          l(!1)
        }
      };
    if (x.useEffect(() => {
        t && g()
      }, [t]), !t) return a.jsx("div", {
      className: "flex items-center justify-center h-64",
      children: a.jsxs("div", {
        className: "text-center",
        children: [a.jsx("div", {
          className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"
        }), a.jsx("p", {
          className: "mt-2 text-muted-foreground",
          children: "Connecting to admin session..."
        })]
      })
    });
    const p = n.filter(P => P.email.toLowerCase().includes(c.toLowerCase())),
      _ = async P => {
        if (!(await J0.checkLimit(`profile-${P.id}`, e_.PROFILE_ACCESS)).allowed) {
          vn.error("Too many requests. Please slow down to prevent suspicious activity.");
          return
        }
        await HF(P.id, !0), f(P), m(!0)
      }, w = async (P, C) => {
        const M = await J0.checkLimit(`reveal-${P}`, e_.EMAIL_REVEAL);
        if (!M.allowed) {
          vn.error(`Too many email reveals. Please wait ${Math.ceil((M.retryAfter||0)/1e3)} seconds.`);
          return
        }
        await boe(P), v(L => new Set(L).add(P)), vn.success("Email revealed (logged for security)")
      }, b = async P => {
        if (P.subscription_status === "active") {
          vn.error("Cannot delete user with active subscription");
          return
        }
        if (!t) {
          vn.error("Admin access not available");
          return
        }
        try {
          const {
            data: C,
            error: M
          } = await t.rpc("delete_user_account", {
            target_user_id: P.id
          });
          if (M) throw M;
          const L = C;
          L.success ? (vn.success("User account deleted successfully"), g()) : vn.error(L.message)
        } catch (C) {
          console.error("Error deleting user:", C), vn.error("Failed to delete user account")
        }
      }, S = P => new Date(P).toLocaleDateString(), E = P => s[P] || null, T = P => {
        e(`/admin/users/${P}`)
      };
    return o ? a.jsx("div", {
      className: "flex items-center justify-center h-64",
      children: a.jsxs("div", {
        className: "text-center",
        children: [a.jsx("div", {
          className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"
        }), a.jsx("p", {
          className: "mt-2 text-muted-foreground",
          children: "Loading users..."
        })]
      })
    }) : a.jsxs("div", {
      className: "space-y-6",
      children: [a.jsx("div", {
        className: "flex items-center justify-between",
        children: a.jsxs("div", {
          children: [a.jsxs("h1", {
            className: "text-3xl font-bold flex items-center gap-2",
            children: [a.jsx(_r, {
              className: "h-8 w-8"
            }), "User Management"]
          }), a.jsx("p", {
            className: "text-muted-foreground",
            children: "Manage user premium status and brain limits"
          })]
        })
      }), a.jsxs(je, {
        children: [a.jsx(qt, {
          children: a.jsx(Yt, {
            children: "Search Users"
          })
        }), a.jsx(Ve, {
          children: a.jsx(Ie, {
            placeholder: "Search by email...",
            value: c,
            onChange: P => d(P.target.value),
            className: "max-w-md"
          })
        })]
      }), a.jsxs(je, {
        children: [a.jsx(qt, {
          children: a.jsxs(Yt, {
            children: ["Users (", p.length, ")"]
          })
        }), a.jsx(Ve, {
          children: a.jsxs(wv, {
            children: [a.jsx(bv, {
              children: a.jsxs(zl, {
                children: [a.jsx(Ar, {
                  children: "Email"
                }), a.jsx(Ar, {
                  children: "Premium Status"
                }), a.jsx(Ar, {
                  children: "Brain Limit"
                }), a.jsx(Ar, {
                  children: "Joined"
                }), a.jsx(Ar, {
                  children: "Actions"
                })]
              })
            }), a.jsx(Sv, {
              children: p.map(P => {
                const C = E(P.id);
                return a.jsxs(zl, {
                  children: [a.jsx(jr, {
                    className: "font-medium",
                    children: a.jsx("div", {
                      className: "flex items-center gap-2",
                      children: y.has(P.id) ? a.jsx("span", {
                        className: "font-mono text-sm",
                        children: P.email
                      }) : a.jsxs(a.Fragment, {
                        children: [a.jsx("span", {
                          className: "font-mono text-sm text-muted-foreground",
                          children: woe(P.email)
                        }), a.jsx(ue, {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => w(P.id, P.email),
                          className: "h-6 px-2",
                          children: a.jsx(ec, {
                            className: "h-3 w-3"
                          })
                        })]
                      })
                    })
                  }), a.jsx(jr, {
                    children: a.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [a.jsx(tt, {
                        variant: P.subscription_tier === "premium" ?
                          "default" : "secondary",
                        children: P.subscription_tier
                      }), P.subscription_tier === "premium" && a.jsx(
                      tt, {
                        variant: P.subscription_status === "active" ?
                          "default" : "destructive",
                        className: "text-xs",
                        children: P.subscription_status
                      })]
                    })
                  }), a.jsx(jr, {
                    children: a.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [a.jsx("span", {
                        className: "text-sm font-medium",
                        children: (C == null ? void 0 : C
                          .brain_subscription_quantity) || 1
                      }), a.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "brains"
                      })]
                    })
                  }), a.jsx(jr, {
                    className: "text-sm",
                    children: S(P.created_at)
                  }), a.jsx(jr, {
                    children: a.jsxs("div", {
                      className: "flex gap-2",
                      children: [a.jsx(ue, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => _(P),
                        children: "Edit"
                      }), a.jsx(ue, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => T(P.id),
                        children: a.jsx(HR, {
                          className: "h-4 w-4"
                        })
                      }), a.jsxs(Mm, {
                        children: [a.jsx(Px, {
                          asChild: !0,
                          children: a.jsx(ue, {
                            variant: "outline",
                            size: "sm",
                            disabled: P
                              .subscription_status ===
                              "active",
                            className: "text-destructive hover:text-destructive",
                            children: a.jsx(Ri, {
                              className: "h-4 w-4"
                            })
                          })
                        }), a.jsxs(Xu, {
                          children: [a.jsxs(Ku, {
                            children: [a.jsx(Qu, {
                              children: "Delete User Account"
                            }), a.jsxs(Ju, {
                              children: [
                                "Are you sure you want to delete ",
                                P.email,
                                "'s account? This will permanently delete their profile, credits, activity history, and all related data. This action cannot be undone."
                              ]
                            })]
                          }), a.jsxs(Zu, {
                            children: [a.jsx(tf, {
                              children: "Cancel"
                            }), a.jsx(ef, {
                              onClick: () => b(P),
                              className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                              children: "Delete Account"
                            })]
                          })]
                        })]
                      })]
                    })
                  })]
                }, P.id)
              })
            })]
          })
        })]
      }), u && a.jsx(Eoe, {
        user: u,
        paymentInfo: E(u.id),
        isOpen: h,
        onClose: () => {
          m(!1), f(null)
        },
        onUpdate: g
      })]
    })
  },
  Noe = t => {
    const e = Dn();
    return Fn({
      queryKey: ["user-stats", t],
      queryFn: async () => {
        const {
          data: n,
          error: r
        } = await e.from("user_credits").select("*").eq("user_id", t).single();
        if (r) throw console.error("Error fetching user stats:", r), r;
        return n
      },
      enabled: !!t
    })
  },
  Coe = t => {
    const e = Dn();
    return Fn({
      queryKey: ["user-activity", t],
      queryFn: async () => {
        const [n, r] = await Promise.all([e.from("user_search_activity").select("*").eq("user_id", t).order(
          "created_at", {
            ascending: !1
          }), e.from("user_compare_activity").select("*").eq("user_id", t).order("created_at", {
          ascending: !1
        })]);
        if (n.error) throw console.error("Error fetching search activity:", n.error), n.error;
        if (r.error) throw console.error("Error fetching compare activity:", r.error), r.error;
        return {
          searches: n.data || [],
          comparisons: r.data || []
        }
      },
      enabled: !!t
    })
  },
  DA = t => {
    const e = new Date(t),
      n = _oe(e, "America/New_York");
    return na(n, "MM/dd/yyyy h:mm a")
  };
