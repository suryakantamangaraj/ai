// Route: /admin/settings
// Component symbol: joe
// Source lines: 68827-69029

const joe = () => {
    const [t, e] = x.useState(""), [n, r] = x.useState(""), [s, i] = x.useState(""), [o, l] = x.useState(!1), [c, d] = x
      .useState(!1), [u, f] = x.useState(!1), {
        updatePassword: h,
        isLoading: m
      } = Aoe(), y = Dn(), v = As(), {
        data: g
      } = Fn({
        queryKey: ["waitlist-count"],
        queryFn: async () => {
          if (!y) throw new Error("Admin access required");
          const {
            count: b,
            error: S
          } = await y.from("lab_waitlist").select("*", {
            count: "exact",
            head: !0
          });
          if (S) throw S;
          return b || 0
        },
        enabled: !!y
      }), p = tn({
        mutationFn: async () => {
          if (!y) throw new Error("Admin access required");
          const {
            error: b
          } = await y.from("lab_waitlist").delete().neq("id", "00000000-0000-0000-0000-000000000000");
          if (b) throw b
        },
        onSuccess: () => {
          vn.success("Waitlist cleared successfully"), v.invalidateQueries({
            queryKey: ["waitlist-count"]
          })
        },
        onError: b => {
          vn.error("Failed to clear waitlist: " + b.message)
        }
      }), _ = async b => {
        if (b.preventDefault(), n !== s) {
          alert("New passwords do not match");
          return
        }
        if (n.length < 8) {
          alert("New password must be at least 8 characters long");
          return
        }(await h(t, n)).success && (e(""), r(""), i(""))
      }, w = () => {
        window.confirm("Are you sure you want to clear the entire waitlist? This cannot be undone.") && p.mutate()
      };
    return a.jsx("div", {
      className: "container mx-auto px-4 py-8",
      children: a.jsxs("div", {
        className: "max-w-2xl mx-auto",
        children: [a.jsx("h1", {
          className: "text-3xl font-bold mb-8",
          children: "Admin Settings"
        }), a.jsxs(je, {
          className: "mb-6",
          children: [a.jsxs(qt, {
            children: [a.jsxs(Yt, {
              className: "flex items-center gap-2",
              children: [a.jsx(_r, {
                className: "h-5 w-5"
              }), "Lab Waitlist Management"]
            }), a.jsx(vx, {
              children: "Manage the waitlist for Lab feature access"
            })]
          }), a.jsxs(Ve, {
            className: "space-y-4",
            children: [a.jsxs("div", {
              className: "flex items-center justify-between p-4 bg-muted rounded-lg",
              children: [a.jsxs("div", {
                children: [a.jsx("p", {
                  className: "font-medium",
                  children: "Current Waitlist Size"
                }), a.jsx("p", {
                  className: "text-2xl font-bold text-primary",
                  children: g || 0
                })]
              }), a.jsxs(ue, {
                variant: "destructive",
                onClick: w,
                disabled: p.isPending || !g,
                children: [a.jsx(Ri, {
                  className: "mr-2 h-4 w-4"
                }), p.isPending ? "Clearing..." : "Clear Waitlist"]
              })]
            }), a.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Clearing the waitlist will permanently remove all entries. This action cannot be undone."
            })]
          })]
        }), a.jsxs(je, {
          children: [a.jsx(qt, {
            children: a.jsxs(Yt, {
              className: "flex items-center gap-2",
              children: [a.jsx(Wv, {
                className: "h-5 w-5"
              }), "Change Admin Password"]
            })
          }), a.jsx(Ve, {
            children: a.jsxs("form", {
              onSubmit: _,
              className: "space-y-6",
              children: [a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  htmlFor: "currentPassword",
                  children: "Current Password"
                }), a.jsxs("div", {
                  className: "relative",
                  children: [a.jsx(Ie, {
                    id: "currentPassword",
                    type: o ? "text" : "password",
                    value: t,
                    onChange: b => e(b.target.value),
                    required: !0,
                    className: "pr-10"
                  }), a.jsx(ue, {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",
                    onClick: () => l(!o),
                    children: o ? a.jsx(Jf, {
                      className: "h-4 w-4"
                    }) : a.jsx(ec, {
                      className: "h-4 w-4"
                    })
                  })]
                })]
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  htmlFor: "newPassword",
                  children: "New Password"
                }), a.jsxs("div", {
                  className: "relative",
                  children: [a.jsx(Ie, {
                    id: "newPassword",
                    type: c ? "text" : "password",
                    value: n,
                    onChange: b => r(b.target.value),
                    required: !0,
                    minLength: 8,
                    className: "pr-10"
                  }), a.jsx(ue, {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",
                    onClick: () => d(!c),
                    children: c ? a.jsx(Jf, {
                      className: "h-4 w-4"
                    }) : a.jsx(ec, {
                      className: "h-4 w-4"
                    })
                  })]
                }), a.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Password must be at least 8 characters long"
                })]
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  htmlFor: "confirmPassword",
                  children: "Confirm New Password"
                }), a.jsxs("div", {
                  className: "relative",
                  children: [a.jsx(Ie, {
                    id: "confirmPassword",
                    type: u ? "text" : "password",
                    value: s,
                    onChange: b => i(b.target.value),
                    required: !0,
                    minLength: 8,
                    className: "pr-10"
                  }), a.jsx(ue, {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",
                    onClick: () => f(!u),
                    children: u ? a.jsx(Jf, {
                      className: "h-4 w-4"
                    }) : a.jsx(ec, {
                      className: "h-4 w-4"
                    })
                  })]
                })]
              }), a.jsx(ue, {
                type: "submit",
                className: "w-full",
                disabled: m,
                children: m ? "Updating Password..." : "Update Password"
              })]
            })
          })]
        })]
      })
    })
  };
