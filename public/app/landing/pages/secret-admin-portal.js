// Route: /secret-admin-portal
// Component symbol: rte
// Source lines: 49794-49926

const rte = () => {
    const [t, e] = x.useState(""), [n, r] = x.useState(!1), {
      isAdmin: s,
      login: i
    } = Uu(), o = fs(), {
      toast: l
    } = ji();
    x.useEffect(() => {
      s && o("/admin/dashboard")
    }, [s, o]);
    const c = async d => {
      if (d.preventDefault(), !!t.trim()) {
        r(!0);
        try {
          const u = await i(t);
          u.success ? (l({
            title: "Admin access granted",
            description: "Welcome to the admin panel."
          }), o("/admin/dashboard")) : l({
            title: "Access denied",
            description: u.message || "Invalid credentials.",
            variant: "destructive"
          })
        } catch {
          l({
            title: "Error",
            description: "An error occurred during authentication.",
            variant: "destructive"
          })
        } finally {
          r(!1), e("")
        }
      }
    };
    return s ? null : a.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4",
      children: a.jsxs(je, {
        className: "w-full max-w-md shadow-2xl border-primary/20",
        children: [a.jsxs(qt, {
          className: "text-center space-y-4",
          children: [a.jsx("div", {
            className: "mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg",
            children: a.jsx(Sd, {
              className: "w-8 h-8 text-white"
            })
          }), a.jsxs("div", {
            children: [a.jsx(Yt, {
              className: "text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",
              children: "Restricted Access"
            }), a.jsx(vx, {
              className: "text-muted-foreground mt-2",
              children: "Administrative credentials required"
            })]
          })]
        }), a.jsxs(Ve, {
          children: [a.jsxs("form", {
            onSubmit: c,
            className: "space-y-6",
            children: [a.jsxs("div", {
              className: "space-y-2",
              children: [a.jsx(Ut, {
                htmlFor: "password",
                className: "text-sm font-medium",
                children: "Access Code"
              }), a.jsxs("div", {
                className: "relative",
                children: [a.jsx(Wv, {
                  className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                }), a.jsx(Ie, {
                  id: "password",
                  type: "password",
                  value: t,
                  onChange: d => e(d.target.value),
                  placeholder: "Enter administrative password",
                  className: "pl-10 bg-background/50 border-primary/20 focus:border-primary",
                  disabled: n,
                  autoComplete: "off"
                })]
              })]
            }), a.jsx(ue, {
              type: "submit",
              className: "w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg",
              disabled: n || !t.trim(),
              children: n ? "Authenticating..." : "Access Admin Panel"
            })]
          }), a.jsx("div", {
            className: "mt-6 text-center",
            children: a.jsx(ue, {
              variant: "ghost",
              onClick: () => o("/"),
              className: "text-sm text-muted-foreground hover:text-primary",
              children: "← Return to Homepage"
            })
          })]
        })]
      })
    })
  },
  ste = () => {
    const [t, e] = x.useState(!1);
    return {
      joinWaitlist: async r => {
        e(!0);
        try {
          const {
            error: s
          } = await Rt.from("lab_waitlist").insert([{
            email: r
          }]);
          if (s) {
            if (s.code === "23505") return vn.error("You're already on the waitlist!"), !1;
            throw s
          }
          try {
            await Rt.functions.invoke("send-waitlist-email", {
              body: {
                email: r
              }
            })
          } catch (i) {
            console.error("Failed to send welcome email:", i)
          }
          return vn.success("Successfully joined the waitlist! Check your email for a warm welcome."), !0
        } catch (s) {
          return console.error("Error joining waitlist:", s), vn.error("Failed to join waitlist. Please try again."),
            !1
        } finally {
          e(!1)
        }
      },
      isSubmitting: t
    }
  };
