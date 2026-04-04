// Route: /admin/login
// Component symbol: nte
// Source lines: 49717-49793

const nte = () => {
    const [t, e] = x.useState(""), [n, r] = x.useState(!1), {
      login: s,
      isAdmin: i
    } = Uu(), o = fs(), {
      toast: l
    } = ji();
    x.useEffect(() => {
      i && o("/admin/dashboard")
    }, [i, o]);
    const c = async d => {
      d.preventDefault(), r(!0);
      try {
        const u = await s(t);
        u.success ? (l({
          title: "Welcome back!",
          description: "Successfully logged in to admin panel."
        }), o("/admin/dashboard")) : l({
          title: "Login failed",
          description: u.message || "Invalid credentials",
          variant: "destructive"
        })
      } catch {
        l({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive"
        })
      } finally {
        r(!1)
      }
    };
    return a.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background-secondary px-4",
      children: a.jsxs(je, {
        className: "w-full max-w-md",
        children: [a.jsxs(qt, {
          className: "text-center",
          children: [a.jsx("div", {
            className: "mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center",
            children: a.jsx(Wv, {
              className: "w-6 h-6 text-primary"
            })
          }), a.jsx(Yt, {
            className: "text-2xl",
            children: "Admin Login"
          }), a.jsx(vx, {
            children: "Enter your admin password to access the admin panel"
          })]
        }), a.jsx(Ve, {
          children: a.jsxs("form", {
            onSubmit: c,
            className: "space-y-4",
            children: [a.jsxs("div", {
              className: "space-y-2",
              children: [a.jsx(Ut, {
                htmlFor: "password",
                children: "Password"
              }), a.jsx(Ie, {
                id: "password",
                type: "password",
                placeholder: "Enter admin password",
                value: t,
                onChange: d => e(d.target.value),
                required: !0
              })]
            }), a.jsx(ue, {
              type: "submit",
              className: "w-full",
              disabled: n,
              children: n ? "Logging in..." : "Login"
            })]
          })
        })]
      })
    })
  };
