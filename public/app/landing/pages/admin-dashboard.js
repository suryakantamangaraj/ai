// Route: /admin
// Component symbol: YM
// Source lines: 54932-64252

const YM = () => {
    const [t, e] = x.useState("month"), [n, r] = x.useState(), [s, i] = x.useState(), [o, l] = x.useState(!1), {
      data: c,
      isLoading: d,
      error: u
    } = vse(t, n, s), f = [{
      title: "New Accounts",
      value: (c == null ? void 0 : c.newAccounts) || 0,
      icon: rz,
      description: "New user signups",
      group: "engagement"
    }, {
      title: "Active Users",
      value: (c == null ? void 0 : c.activeUsers) || 0,
      icon: HR,
      description: "Users who performed actions",
      group: "engagement"
    }, {
      title: "Brains Created",
      value: (c == null ? void 0 : c.brainsCreated) || 0,
      icon: bh,
      description: "New brains created",
      group: "engagement"
    }, {
      title: "Labs Created",
      value: (c == null ? void 0 : c.labsCreated) || 0,
      icon: lw,
      description: "New labs created",
      group: "engagement"
    }, {
      title: "Avg Brains/User",
      value: ((c == null ? void 0 : c.avgBrainsPerUser) || 0).toFixed(1),
      icon: Sh,
      description: "Average brains per new user",
      group: "engagement"
    }, {
      title: "Main Searches",
      value: (c == null ? void 0 : c.mainSearches) || 0,
      icon: ds,
      description: "Tool searches performed",
      group: "activity"
    }, {
      title: "Compare Searches",
      value: (c == null ? void 0 : c.compareSearches) || 0,
      icon: YB,
      description: "Tool comparisons made",
      group: "activity"
    }, {
      title: "Brain Chat Sessions",
      value: (c == null ? void 0 : c.brainChatSessions) || 0,
      icon: ZT,
      description: "Brain conversations started",
      group: "activity"
    }, {
      title: "Lab Chat Sessions",
      value: (c == null ? void 0 : c.labChatSessions) || 0,
      icon: ZT,
      description: "Lab conversations started",
      group: "activity"
    }, {
      title: "Knowledge Items",
      value: (c == null ? void 0 : c.knowledgeItemsAdded) || 0,
      icon: Hv,
      description: "Knowledge items added",
      group: "activity"
    }, {
      title: "Total Revenue",
      value: `$${((c==null?void 0:c.totalRevenue)||0).toLocaleString()}`,
      icon: GB,
      description: "Combined subscription revenue",
      group: "revenue"
    }, {
      title: "Monthly Subscriptions",
      value: (c == null ? void 0 : c.monthlySold) || 0,
      icon: WB,
      description: "Premium monthly sold",
      group: "revenue"
    }, {
      title: "Yearly Subscriptions",
      value: (c == null ? void 0 : c.yearlySold) || 0,
      icon: Sh,
      description: "Premium yearly sold",
      group: "revenue"
    }, {
      title: "Brain Storage Revenue",
      value: `$${((c==null?void 0:c.brainSubscriptionRevenue)||0).toLocaleString()}`,
      icon: bh,
      description: "Brain storage subscriptions",
      group: "revenue"
    }, {
      title: "Lab Storage Revenue",
      value: `$${((c==null?void 0:c.labStorageRevenue)||0).toLocaleString()}`,
      icon: lw,
      description: "Lab storage subscriptions",
      group: "revenue"
    }, {
      title: "Website Visitors",
      value: (c == null ? void 0 : c.websiteVisitors) || 0,
      icon: _r,
      description: "Total unique visitors",
      group: "conversion"
    }, {
      title: "Pricing Page Views",
      value: (c == null ? void 0 : c.pricingViews) || 0,
      icon: ec,
      description: "Pricing page visits",
      group: "conversion"
    }, {
      title: "Conversion Rate",
      value: `${((c==null?void 0:c.conversionRate)||0).toFixed(1)}%`,
      icon: nz,
      description: "Pricing to subscription",
      group: "conversion"
    }];
    return a.jsxs("div", {
      className: "space-y-6",
      children: [a.jsxs("div", {
        className: "flex justify-between items-center",
        children: [a.jsxs("div", {
          children: [a.jsx("h1", {
            className: "text-3xl font-bold text-foreground",
            children: "Analytics Dashboard"
          }), a.jsx("p", {
            className: "text-muted-foreground",
            children: "Track website performance and user engagement"
          })]
        }), a.jsxs("div", {
          className: "flex items-center space-x-4",
          children: [a.jsxs(H1, {
            value: t,
            onValueChange: h => e(h),
            children: [a.jsx(Cx, {
              className: "w-48",
              children: a.jsx(W1, {
                placeholder: "Select time period"
              })
            }), a.jsxs(Mx, {
              children: [a.jsx($i, {
                value: "all",
                children: "All Time"
              }), a.jsx($i, {
                value: "month",
                children: "This Month"
              }), a.jsx($i, {
                value: "week",
                children: "This Week"
              }), a.jsx($i, {
                value: "today",
                children: "Today"
              }), a.jsx($i, {
                value: "custom",
                children: "Custom Range"
              })]
            })]
          }), t === "custom" && a.jsxs(c3, {
            open: o,
            onOpenChange: l,
            children: [a.jsx(d3, {
              asChild: !0,
              children: a.jsxs(ue, {
                variant: "outline",
                className: de("w-80 justify-start text-left font-normal", !n && !s &&
                  "text-muted-foreground"),
                children: [a.jsx(dc, {
                    className: "mr-2 h-4 w-4"
                  }), n && s ? `${na(n,"MMM dd, yyyy")} - ${na(s,"MMM dd, yyyy")}` :
                  "Pick date range"
                ]
              })
            }), a.jsx(iE, {
              className: "w-auto p-0",
              align: "start",
              children: a.jsxs("div", {
                className: "flex",
                children: [a.jsxs("div", {
                  className: "p-3 border-r",
                  children: [a.jsx("div", {
                    className: "text-sm font-medium mb-2",
                    children: "Start Date"
                  }), a.jsx(xb, {
                    mode: "single",
                    selected: n,
                    onSelect: r,
                    disabled: h => h > new Date || s && h > s
                  })]
                }), a.jsxs("div", {
                  className: "p-3",
                  children: [a.jsx("div", {
                    className: "text-sm font-medium mb-2",
                    children: "End Date"
                  }), a.jsx(xb, {
                    mode: "single",
                    selected: s,
                    onSelect: i,
                    disabled: h => h > new Date || n && h < n
                  })]
                })]
              })
            })]
          })]
        })]
      }), d ? a.jsx("div", {
        className: "text-center py-8",
        children: a.jsx("div", {
          className: "text-muted-foreground",
          children: "Loading analytics..."
        })
      }) : u ? a.jsx("div", {
        className: "text-center py-8",
        children: a.jsx("div", {
          className: "text-destructive",
          children: "Error loading analytics"
        })
      }) : a.jsxs("div", {
        className: "space-y-8",
        children: [a.jsxs("div", {
          children: [a.jsx("h2", {
            className: "text-lg font-semibold mb-4 text-primary",
            children: "Core Engagement"
          }), a.jsx("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-5",
            children: f.filter(h => h.group === "engagement").map(h => {
              const m = h.icon;
              return a.jsxs(je, {
                className: "border-primary/20",
                children: [a.jsxs(qt, {
                  className: "flex flex-row items-center justify-between space-y-0 pb-2",
                  children: [a.jsx(Yt, {
                    className: "text-sm font-medium",
                    children: h.title
                  }), a.jsx(m, {
                    className: "h-4 w-4 text-primary"
                  })]
                }), a.jsxs(Ve, {
                  children: [a.jsx("div", {
                    className: "text-2xl font-bold",
                    children: h.value
                  }), a.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: h.description
                  })]
                })]
              }, h.title)
            })
          })]
        }), a.jsxs("div", {
          children: [a.jsx("h2", {
            className: "text-lg font-semibold mb-4 text-accent",
            children: "Activity Metrics"
          }), a.jsx("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-5",
            children: f.filter(h => h.group === "activity").map(h => {
              const m = h.icon;
              return a.jsxs(je, {
                className: "border-accent/20",
                children: [a.jsxs(qt, {
                  className: "flex flex-row items-center justify-between space-y-0 pb-2",
                  children: [a.jsx(Yt, {
                    className: "text-sm font-medium",
                    children: h.title
                  }), a.jsx(m, {
                    className: "h-4 w-4 text-accent"
                  })]
                }), a.jsxs(Ve, {
                  children: [a.jsx("div", {
                    className: "text-2xl font-bold",
                    children: h.value
                  }), a.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: h.description
                  })]
                })]
              }, h.title)
            })
          })]
        }), a.jsxs("div", {
          children: [a.jsx("h2", {
            className: "text-lg font-semibold mb-4",
            style: {
              color: "hsl(142 76% 36%)"
            },
            children: "Revenue"
          }), a.jsx("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-5",
            children: f.filter(h => h.group === "revenue").map(h => {
              const m = h.icon;
              return a.jsxs(je, {
                style: {
                  borderColor: "hsl(142 76% 36% / 0.2)"
                },
                children: [a.jsxs(qt, {
                  className: "flex flex-row items-center justify-between space-y-0 pb-2",
                  children: [a.jsx(Yt, {
                    className: "text-sm font-medium",
                    children: h.title
                  }), a.jsx(m, {
                    className: "h-4 w-4",
                    style: {
                      color: "hsl(142 76% 36%)"
                    }
                  })]
                }), a.jsxs(Ve, {
                  children: [a.jsx("div", {
                    className: "text-2xl font-bold",
                    children: h.value
                  }), a.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: h.description
                  })]
                })]
              }, h.title)
            })
          })]
        }), a.jsxs("div", {
          children: [a.jsx("h2", {
            className: "text-lg font-semibold mb-4 text-muted-foreground",
            children: "Conversion Metrics"
          }), a.jsx("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
            children: f.filter(h => h.group === "conversion").map(h => {
              const m = h.icon;
              return a.jsxs(je, {
                children: [a.jsxs(qt, {
                  className: "flex flex-row items-center justify-between space-y-0 pb-2",
                  children: [a.jsx(Yt, {
                    className: "text-sm font-medium",
                    children: h.title
                  }), a.jsx(m, {
                    className: "h-4 w-4 text-muted-foreground"
                  })]
                }), a.jsxs(Ve, {
                  children: [a.jsx("div", {
                    className: "text-2xl font-bold",
                    children: h.value
                  }), a.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: h.description
                  })]
                })]
              }, h.title)
            })
          })]
        })]
      })]
    })
  };
var u3 = "AlertDialog",
  [xse, Zle] = Jn(u3, [XD]),
  qa = XD(),
  f3 = t => {
    const {
      __scopeAlertDialog: e,
      ...n
    } = t, r = qa(e);
    return a.jsx(hm, {
      ...r,
      ...n,
      modal: !0
    })
  };
f3.displayName = u3;
var yse = "AlertDialogTrigger",
  h3 = x.forwardRef((t, e) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = t, s = qa(n);
    return a.jsx(E1, {
      ...s,
      ...r,
      ref: e
    })
  });
h3.displayName = yse;
var _se = "AlertDialogPortal",
  m3 = t => {
    const {
      __scopeAlertDialog: e,
      ...n
    } = t, r = qa(e);
    return a.jsx(mm, {
      ...r,
      ...n
    })
  };
m3.displayName = _se;
var wse = "AlertDialogOverlay",
  p3 = x.forwardRef((t, e) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = t, s = qa(n);
    return a.jsx(Ac, {
      ...s,
      ...r,
      ref: e
    })
  });
p3.displayName = wse;
var Ud = "AlertDialogContent",
  [bse, Sse] = xse(Ud),
  Ese = vR("AlertDialogContent"),
  g3 = x.forwardRef((t, e) => {
    const {
      __scopeAlertDialog: n,
      children: r,
      ...s
    } = t, i = qa(n), o = x.useRef(null), l = xt(e, o), c = x.useRef(null);
    return a.jsx(G7, {
      contentName: Ud,
      titleName: v3,
      docsSlug: "alert-dialog",
      children: a.jsx(bse, {
        scope: n,
        cancelRef: c,
        children: a.jsxs(jc, {
          role: "alertdialog",
          ...i,
          ...s,
          ref: l,
          onOpenAutoFocus: Se(s.onOpenAutoFocus, d => {
            var u;
            d.preventDefault(), (u = c.current) == null || u.focus({
              preventScroll: !0
            })
          }),
          onPointerDownOutside: d => d.preventDefault(),
          onInteractOutside: d => d.preventDefault(),
          children: [a.jsx(Ese, {
            children: r
          }), a.jsx(Nse, {
            contentRef: o
          })]
        })
      })
    })
  });
g3.displayName = Ud;
var v3 = "AlertDialogTitle",
  x3 = x.forwardRef((t, e) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = t, s = qa(n);
    return a.jsx(zu, {
      ...s,
      ...r,
      ref: e
    })
  });
x3.displayName = v3;
var y3 = "AlertDialogDescription",
  _3 = x.forwardRef((t, e) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = t, s = qa(n);
    return a.jsx(Vu, {
      ...s,
      ...r,
      ref: e
    })
  });
_3.displayName = y3;
var Tse = "AlertDialogAction",
  w3 = x.forwardRef((t, e) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = t, s = qa(n);
    return a.jsx(pm, {
      ...s,
      ...r,
      ref: e
    })
  });
w3.displayName = Tse;
var b3 = "AlertDialogCancel",
  S3 = x.forwardRef((t, e) => {
    const {
      __scopeAlertDialog: n,
      ...r
    } = t, {
      cancelRef: s
    } = Sse(b3, n), i = qa(n), o = xt(e, s);
    return a.jsx(pm, {
      ...i,
      ...r,
      ref: o
    })
  });
S3.displayName = b3;
var Nse = ({
    contentRef: t
  }) => {
    const e = `\`${Ud}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Ud}\` by passing a \`${y3}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Ud}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return x.useEffect(() => {
      var r;
      document.getElementById((r = t.current) == null ? void 0 : r.getAttribute("aria-describedby")) || console
        .warn(e)
    }, [e, t]), null
  },
  Cse = f3,
  Mse = h3,
  Ase = m3,
  E3 = p3,
  T3 = g3,
  N3 = w3,
  C3 = S3,
  M3 = x3,
  A3 = _3;
const Mm = Cse,
  Px = Mse,
  jse = Ase,
  j3 = x.forwardRef(({
    className: t,
    ...e
  }, n) => a.jsx(E3, {
    className: de(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t),
    ...e,
    ref: n
  }));
j3.displayName = E3.displayName;
const Xu = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsxs(jse, {
  children: [a.jsx(j3, {}), a.jsx(T3, {
    ref: n,
    className: de(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      t),
    ...e
  })]
}));
Xu.displayName = T3.displayName;
const Ku = ({
  className: t,
  ...e
}) => a.jsx("div", {
  className: de("flex flex-col space-y-2 text-center sm:text-left", t),
  ...e
});
Ku.displayName = "AlertDialogHeader";
const Zu = ({
  className: t,
  ...e
}) => a.jsx("div", {
  className: de("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
  ...e
});
Zu.displayName = "AlertDialogFooter";
const Qu = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(M3, {
  ref: n,
  className: de("text-lg font-semibold", t),
  ...e
}));
Qu.displayName = M3.displayName;
const Ju = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(A3, {
  ref: n,
  className: de("text-sm text-muted-foreground", t),
  ...e
}));
Ju.displayName = A3.displayName;
const ef = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(N3, {
  ref: n,
  className: de(Rh(), t),
  ...e
}));
ef.displayName = N3.displayName;
const tf = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(C3, {
  ref: n,
  className: de(Rh({
    variant: "outline"
  }), "mt-2 sm:mt-0", t),
  ...e
}));
tf.displayName = C3.displayName;
var Am = t => t.type === "checkbox",
  Bl = t => t instanceof Date,
  kr = t => t == null;
const R3 = t => typeof t == "object";
var kn = t => !kr(t) && !Array.isArray(t) && R3(t) && !Bl(t),
  P3 = t => kn(t) && t.target ? Am(t.target) ? t.target.checked : t.target.value : t,
  Rse = t => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
  k3 = (t, e) => t.has(Rse(e)),
  Pse = t => {
    const e = t.constructor && t.constructor.prototype;
    return kn(e) && e.hasOwnProperty("isPrototypeOf")
  },
  aE = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function cn(t) {
  let e;
  const n = Array.isArray(t),
    r = typeof FileList < "u" ? t instanceof FileList : !1;
  if (t instanceof Date) e = new Date(t);
  else if (!(aE && (t instanceof Blob || r)) && (n || kn(t)))
    if (e = n ? [] : {}, !n && !Pse(t)) e = t;
    else
      for (const s in t) t.hasOwnProperty(s) && (e[s] = cn(t[s]));
  else return t;
  return e
}
var kx = t => /^\w*$/.test(t),
  dn = t => t === void 0,
  Dx = t => Array.isArray(t) ? t.filter(Boolean) : [],
  oE = t => Dx(t.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Me = (t, e, n) => {
    if (!e || !kn(t)) return n;
    const r = (kx(e) ? [e] : oE(e)).reduce((s, i) => kr(s) ? s : s[i], t);
    return dn(r) || r === t ? dn(t[e]) ? n : t[e] : r
  },
  vs = t => typeof t == "boolean",
  Gt = (t, e, n) => {
    let r = -1;
    const s = kx(e) ? [e] : oE(e),
      i = s.length,
      o = i - 1;
    for (; ++r < i;) {
      const l = s[r];
      let c = n;
      if (r !== o) {
        const d = t[l];
        c = kn(d) || Array.isArray(d) ? d : isNaN(+s[r + 1]) ? {} : []
      }
      if (l === "__proto__" || l === "constructor" || l === "prototype") return;
      t[l] = c, t = t[l]
    }
  };
const uv = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
  },
  $s = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
  },
  pa = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
  },
  lE = Z.createContext(null);
lE.displayName = "HookFormContext";
const jm = () => Z.useContext(lE),
  kse = t => {
    const {
      children: e,
      ...n
    } = t;
    return Z.createElement(lE.Provider, {
      value: n
    }, e)
  };
var D3 = (t, e, n, r = !0) => {
  const s = {
    defaultValues: e._defaultValues
  };
  for (const i in t) Object.defineProperty(s, i, {
    get: () => {
      const o = i;
      return e._proxyFormState[o] !== $s.all && (e._proxyFormState[o] = !r || $s.all), n && (n[o] = !0), t[o]
    }
  });
  return s
};
const Ix = typeof window < "u" ? Z.useLayoutEffect : Z.useEffect;

function Dse(t) {
  const e = jm(),
    {
      control: n = e.control,
      disabled: r,
      name: s,
      exact: i
    } = t || {},
    [o, l] = Z.useState(n._formState),
    c = Z.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    });
  return Ix(() => n._subscribe({
    name: s,
    formState: c.current,
    exact: i,
    callback: d => {
      !r && l({
        ...n._formState,
        ...d
      })
    }
  }), [s, r, i]), Z.useEffect(() => {
    c.current.isValid && n._setValid(!0)
  }, [n]), Z.useMemo(() => D3(o, n, c.current, !1), [o, n])
}
var Gi = t => typeof t == "string",
  I3 = (t, e, n, r, s) => Gi(t) ? (r && e.watch.add(t), Me(n, t, s)) : Array.isArray(t) ? t.map(i => (r && e.watch.add(
    i), Me(n, i))) : (r && (e.watchAll = !0), n),
  yb = t => kr(t) || !R3(t);

function Na(t, e, n = new WeakSet) {
  if (yb(t) || yb(e)) return t === e;
  if (Bl(t) && Bl(e)) return t.getTime() === e.getTime();
  const r = Object.keys(t),
    s = Object.keys(e);
  if (r.length !== s.length) return !1;
  if (n.has(t) || n.has(e)) return !0;
  n.add(t), n.add(e);
  for (const i of r) {
    const o = t[i];
    if (!s.includes(i)) return !1;
    if (i !== "ref") {
      const l = e[i];
      if (Bl(o) && Bl(l) || kn(o) && kn(l) || Array.isArray(o) && Array.isArray(l) ? !Na(o, l, n) : o !== l) return !1
    }
  }
  return !0
}

function Ise(t) {
  const e = jm(),
    {
      control: n = e.control,
      name: r,
      defaultValue: s,
      disabled: i,
      exact: o,
      compute: l
    } = t || {},
    c = Z.useRef(s),
    d = Z.useRef(l),
    u = Z.useRef(void 0);
  d.current = l;
  const f = Z.useMemo(() => n._getWatch(r, c.current), [n, r]),
    [h, m] = Z.useState(d.current ? d.current(f) : f);
  return Ix(() => n._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: o,
    callback: y => {
      if (!i) {
        const v = I3(r, n._names, y.values || n._formValues, !1, c.current);
        if (d.current) {
          const g = d.current(v);
          Na(g, u.current) || (m(g), u.current = g)
        } else m(v)
      }
    }
  }), [n, i, r, o]), Z.useEffect(() => n._removeUnmounted()), h
}

function Lse(t) {
  const e = jm(),
    {
      name: n,
      disabled: r,
      control: s = e.control,
      shouldUnregister: i,
      defaultValue: o
    } = t,
    l = k3(s._names.array, n),
    c = Z.useMemo(() => Me(s._formValues, n, Me(s._defaultValues, n, o)), [s, n, o]),
    d = Ise({
      control: s,
      name: n,
      defaultValue: c,
      exact: !0
    }),
    u = Dse({
      control: s,
      name: n,
      exact: !0
    }),
    f = Z.useRef(t),
    h = Z.useRef(s.register(n, {
      ...t.rules,
      value: d,
      ...vs(t.disabled) ? {
        disabled: t.disabled
      } : {}
    }));
  f.current = t;
  const m = Z.useMemo(() => Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!Me(u.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!Me(u.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!Me(u.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!Me(u.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => Me(u.errors, n)
      }
    }), [u, n]),
    y = Z.useCallback(_ => h.current.onChange({
      target: {
        value: P3(_),
        name: n
      },
      type: uv.CHANGE
    }), [n]),
    v = Z.useCallback(() => h.current.onBlur({
      target: {
        value: Me(s._formValues, n),
        name: n
      },
      type: uv.BLUR
    }), [n, s._formValues]),
    g = Z.useCallback(_ => {
      const w = Me(s._fields, n);
      w && _ && (w._f.ref = {
        focus: () => _.focus && _.focus(),
        select: () => _.select && _.select(),
        setCustomValidity: b => _.setCustomValidity(b),
        reportValidity: () => _.reportValidity()
      })
    }, [s._fields, n]),
    p = Z.useMemo(() => ({
      name: n,
      value: d,
      ...vs(r) || u.disabled ? {
        disabled: u.disabled || r
      } : {},
      onChange: y,
      onBlur: v,
      ref: g
    }), [n, r, u.disabled, y, v, g, d]);
  return Z.useEffect(() => {
    const _ = s._options.shouldUnregister || i;
    s.register(n, {
      ...f.current.rules,
      ...vs(f.current.disabled) ? {
        disabled: f.current.disabled
      } : {}
    });
    const w = (b, S) => {
      const E = Me(s._fields, b);
      E && E._f && (E._f.mount = S)
    };
    if (w(n, !0), _) {
      const b = cn(Me(s._options.defaultValues, n));
      Gt(s._defaultValues, n, b), dn(Me(s._formValues, n)) && Gt(s._formValues, n, b)
    }
    return !l && s.register(n), () => {
      (l ? _ && !s._state.action : _) ? s.unregister(n): w(n, !1)
    }
  }, [n, s, l, i]), Z.useEffect(() => {
    s._setDisabledField({
      disabled: r,
      name: n
    })
  }, [r, n, s]), Z.useMemo(() => ({
    field: p,
    formState: u,
    fieldState: m
  }), [p, u, m])
}
const Ose = t => t.render(Lse(t));
var L3 = (t, e, n, r, s) => e ? {
    ...n[t],
    types: {
      ...n[t] && n[t].types ? n[t].types : {},
      [r]: s || !0
    }
  } : {},
  rs = t => Array.isArray(t) ? t : [t],
  XM = () => {
    let t = [];
    return {
      get observers() {
        return t
      },
      next: s => {
        for (const i of t) i.next && i.next(s)
      },
      subscribe: s => (t.push(s), {
        unsubscribe: () => {
          t = t.filter(i => i !== s)
        }
      }),
      unsubscribe: () => {
        t = []
      }
    }
  },
  Cr = t => kn(t) && !Object.keys(t).length,
  cE = t => t.type === "file",
  _i = t => typeof t == "function",
  fv = t => {
    if (!aE) return !1;
    const e = t ? t.ownerDocument : 0;
    return t instanceof(e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
  },
  O3 = t => t.type === "select-multiple",
  dE = t => t.type === "radio",
  Fse = t => dE(t) || Am(t),
  L0 = t => fv(t) && t.isConnected;

function Use(t, e) {
  const n = e.slice(0, -1).length;
  let r = 0;
  for (; r < n;) t = dn(t) ? r++ : t[e[r++]];
  return t
}

function Bse(t) {
  for (const e in t)
    if (t.hasOwnProperty(e) && !dn(t[e])) return !1;
  return !0
}

function jn(t, e) {
  const n = Array.isArray(e) ? e : kx(e) ? [e] : oE(e),
    r = n.length === 1 ? t : Use(t, n),
    s = n.length - 1,
    i = n[s];
  return r && delete r[i], s !== 0 && (kn(r) && Cr(r) || Array.isArray(r) && Bse(r)) && jn(t, n.slice(0, -1)), t
}
var F3 = t => {
  for (const e in t)
    if (_i(t[e])) return !0;
  return !1
};

function hv(t, e = {}) {
  const n = Array.isArray(t);
  if (kn(t) || n)
    for (const r in t) Array.isArray(t[r]) || kn(t[r]) && !F3(t[r]) ? (e[r] = Array.isArray(t[r]) ? [] : {}, hv(t[r], e[
      r])) : kr(t[r]) || (e[r] = !0);
  return e
}

function U3(t, e, n) {
  const r = Array.isArray(t);
  if (kn(t) || r)
    for (const s in t) Array.isArray(t[s]) || kn(t[s]) && !F3(t[s]) ? dn(e) || yb(n[s]) ? n[s] = Array.isArray(t[s]) ?
      hv(t[s], []) : {
        ...hv(t[s])
      } : U3(t[s], kr(e) ? {} : e[s], n[s]) : n[s] = !Na(t[s], e[s]);
  return n
}
var Nf = (t, e) => U3(t, e, hv(e));
const KM = {
    value: !1,
    isValid: !1
  },
  ZM = {
    value: !0,
    isValid: !0
  };
var B3 = t => {
    if (Array.isArray(t)) {
      if (t.length > 1) {
        const e = t.filter(n => n && n.checked && !n.disabled).map(n => n.value);
        return {
          value: e,
          isValid: !!e.length
        }
      }
      return t[0].checked && !t[0].disabled ? t[0].attributes && !dn(t[0].attributes.value) ? dn(t[0].value) || t[0]
        .value === "" ? ZM : {
          value: t[0].value,
          isValid: !0
        } : ZM : KM
    }
    return KM
  },
  z3 = (t, {
    valueAsNumber: e,
    valueAsDate: n,
    setValueAs: r
  }) => dn(t) ? t : e ? t === "" ? NaN : t && +t : n && Gi(t) ? new Date(t) : r ? r(t) : t;
const QM = {
  isValid: !1,
  value: null
};
var V3 = t => Array.isArray(t) ? t.reduce((e, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : e, QM) : QM;

function JM(t) {
  const e = t.ref;
  return cE(e) ? e.files : dE(e) ? V3(t.refs).value : O3(e) ? [...e.selectedOptions].map(({
    value: n
  }) => n) : Am(e) ? B3(t.refs).value : z3(dn(e.value) ? t.ref.value : e.value, t)
}
var zse = (t, e, n, r) => {
    const s = {};
    for (const i of t) {
      const o = Me(e, i);
      o && Gt(s, i, o._f)
    }
    return {
      criteriaMode: n,
      names: [...t],
      fields: s,
      shouldUseNativeValidation: r
    }
  },
  mv = t => t instanceof RegExp,
  Cf = t => dn(t) ? t : mv(t) ? t.source : kn(t) ? mv(t.value) ? t.value.source : t.value : t,
  Nd = t => ({
    isOnSubmit: !t || t === $s.onSubmit,
    isOnBlur: t === $s.onBlur,
    isOnChange: t === $s.onChange,
    isOnAll: t === $s.all,
    isOnTouch: t === $s.onTouched
  });
const eA = "AsyncFunction";
var Vse = t => !!t && !!t.validate && !!(_i(t.validate) && t.validate.constructor.name === eA || kn(t.validate) &&
    Object.values(t.validate).find(e => e.constructor.name === eA)),
  $se = t => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate),
  _b = (t, e, n) => !n && (e.watchAll || e.watch.has(t) || [...e.watch].some(r => t.startsWith(r) && /^\.\w+/.test(t
    .slice(r.length))));
const Bd = (t, e, n, r) => {
  for (const s of n || Object.keys(t)) {
    const i = Me(t, s);
    if (i) {
      const {
        _f: o,
        ...l
      } = i;
      if (o) {
        if (o.refs && o.refs[0] && e(o.refs[0], s) && !r) return !0;
        if (o.ref && e(o.ref, o.name) && !r) return !0;
        if (Bd(l, e)) break
      } else if (kn(l) && Bd(l, e)) break
    }
  }
};

function tA(t, e, n) {
  const r = Me(t, n);
  if (r || kx(n)) return {
    error: r,
    name: n
  };
  const s = n.split(".");
  for (; s.length;) {
    const i = s.join("."),
      o = Me(e, i),
      l = Me(t, i);
    if (o && !Array.isArray(o) && n !== i) return {
      name: n
    };
    if (l && l.type) return {
      name: i,
      error: l
    };
    if (l && l.root && l.root.type) return {
      name: `${i}.root`,
      error: l.root
    };
    s.pop()
  }
  return {
    name: n
  }
}
var Hse = (t, e, n, r) => {
    n(t);
    const {
      name: s,
      ...i
    } = t;
    return Cr(i) || Object.keys(i).length >= Object.keys(e).length || Object.keys(i).find(o => e[o] === (!r || $s.all))
  },
  Wse = (t, e, n) => !t || !e || t === e || rs(t).some(r => r && (n ? r === e : r.startsWith(e) || e.startsWith(r))),
  Gse = (t, e, n, r, s) => s.isOnAll ? !1 : !n && s.isOnTouch ? !(e || t) : (n ? r.isOnBlur : s.isOnBlur) ? !t : (n ? r
    .isOnChange : s.isOnChange) ? t : !0,
  qse = (t, e) => !Dx(Me(t, e)).length && jn(t, e),
  $3 = (t, e, n) => {
    const r = rs(Me(t, n));
    return Gt(r, "root", e[n]), Gt(t, n, r), t
  },
  mg = t => Gi(t);

function nA(t, e, n = "validate") {
  if (mg(t) || Array.isArray(t) && t.every(mg) || vs(t) && !t) return {
    type: n,
    message: mg(t) ? t : "",
    ref: e
  }
}
var rd = t => kn(t) && !mv(t) ? t : {
    value: t,
    message: ""
  },
  wb = async (t, e, n, r, s, i) => {
    const {
      ref: o,
      refs: l,
      required: c,
      maxLength: d,
      minLength: u,
      min: f,
      max: h,
      pattern: m,
      validate: y,
      name: v,
      valueAsNumber: g,
      mount: p
    } = t._f, _ = Me(n, v);
    if (!p || e.has(v)) return {};
    const w = l ? l[0] : o,
      b = D => {
        s && w.reportValidity && (w.setCustomValidity(vs(D) ? "" : D || ""), w.reportValidity())
      },
      S = {},
      E = dE(o),
      T = Am(o),
      P = E || T,
      C = (g || cE(o)) && dn(o.value) && dn(_) || fv(o) && o.value === "" || _ === "" || Array.isArray(_) && !_
      .length,
      M = L3.bind(null, v, r, S),
      L = (D, $, j, F = pa.maxLength, R = pa.minLength) => {
        const I = D ? $ : j;
        S[v] = {
          type: D ? F : R,
          message: I,
          ref: o,
          ...M(D ? F : R, I)
        }
      };
    if (i ? !Array.isArray(_) || !_.length : c && (!P && (C || kr(_)) || vs(_) && !_ || T && !B3(l).isValid || E && !
        V3(l).isValid)) {
      const {
        value: D,
        message: $
      } = mg(c) ? {
        value: !!c,
        message: c
      } : rd(c);
      if (D && (S[v] = {
          type: pa.required,
          message: $,
          ref: w,
          ...M(pa.required, $)
        }, !r)) return b($), S
    }
    if (!C && (!kr(f) || !kr(h))) {
      let D, $;
      const j = rd(h),
        F = rd(f);
      if (!kr(_) && !isNaN(_)) {
        const R = o.valueAsNumber || _ && +_;
        kr(j.value) || (D = R > j.value), kr(F.value) || ($ = R < F.value)
      } else {
        const R = o.valueAsDate || new Date(_),
          I = W => new Date(new Date().toDateString() + " " + W),
          A = o.type == "time",
          k = o.type == "week";
        Gi(j.value) && _ && (D = A ? I(_) > I(j.value) : k ? _ > j.value : R > new Date(j.value)), Gi(F.value) && _ &&
          ($ = A ? I(_) < I(F.value) : k ? _ < F.value : R < new Date(F.value))
      }
      if ((D || $) && (L(!!D, j.message, F.message, pa.max, pa.min), !r)) return b(S[v].message), S
    }
    if ((d || u) && !C && (Gi(_) || i && Array.isArray(_))) {
      const D = rd(d),
        $ = rd(u),
        j = !kr(D.value) && _.length > +D.value,
        F = !kr($.value) && _.length < +$.value;
      if ((j || F) && (L(j, D.message, $.message), !r)) return b(S[v].message), S
    }
    if (m && !C && Gi(_)) {
      const {
        value: D,
        message: $
      } = rd(m);
      if (mv(D) && !_.match(D) && (S[v] = {
          type: pa.pattern,
          message: $,
          ref: o,
          ...M(pa.pattern, $)
        }, !r)) return b($), S
    }
    if (y) {
      if (_i(y)) {
        const D = await y(_, n),
          $ = nA(D, w);
        if ($ && (S[v] = {
            ...$,
            ...M(pa.validate, $.message)
          }, !r)) return b($.message), S
      } else if (kn(y)) {
        let D = {};
        for (const $ in y) {
          if (!Cr(D) && !r) break;
          const j = nA(await y[$](_, n), w, $);
          j && (D = {
            ...j,
            ...M($, j.message)
          }, b(j.message), r && (S[v] = D))
        }
        if (!Cr(D) && (S[v] = {
            ref: w,
            ...D
          }, !r)) return S
      }
    }
    return b(!0), S
  };
const Yse = {
  mode: $s.onSubmit,
  reValidateMode: $s.onChange,
  shouldFocusError: !0
};

function Xse(t = {}) {
  let e = {
      ...Yse,
      ...t
    },
    n = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: _i(e.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1
    },
    r = {},
    s = kn(e.defaultValues) || kn(e.values) ? cn(e.defaultValues || e.values) || {} : {},
    i = e.shouldUnregister ? {} : cn(s),
    o = {
      action: !1,
      mount: !1,
      watch: !1
    },
    l = {
      mount: new Set,
      disabled: new Set,
      unMount: new Set,
      array: new Set,
      watch: new Set
    },
    c, d = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let f = {
    ...u
  };
  const h = {
      array: XM(),
      state: XM()
    },
    m = e.criteriaMode === $s.all,
    y = N => U => {
      clearTimeout(d), d = setTimeout(N, U)
    },
    v = async N => {
      if (!e.disabled && (u.isValid || f.isValid || N)) {
        const U = e.resolver ? Cr((await T()).errors) : await C(r, !0);
        U !== n.isValid && h.state.next({
          isValid: U
        })
      }
    }, g = (N, U) => {
      !e.disabled && (u.isValidating || u.validatingFields || f.isValidating || f.validatingFields) && ((N || Array
        .from(l.mount)).forEach(K => {
        K && (U ? Gt(n.validatingFields, K, U) : jn(n.validatingFields, K))
      }), h.state.next({
        validatingFields: n.validatingFields,
        isValidating: !Cr(n.validatingFields)
      }))
    }, p = (N, U = [], K, se, ie = !0, oe = !0) => {
      if (se && K && !e.disabled) {
        if (o.action = !0, oe && Array.isArray(Me(r, N))) {
          const ce = K(Me(r, N), se.argA, se.argB);
          ie && Gt(r, N, ce)
        }
        if (oe && Array.isArray(Me(n.errors, N))) {
          const ce = K(Me(n.errors, N), se.argA, se.argB);
          ie && Gt(n.errors, N, ce), qse(n.errors, N)
        }
        if ((u.touchedFields || f.touchedFields) && oe && Array.isArray(Me(n.touchedFields, N))) {
          const ce = K(Me(n.touchedFields, N), se.argA, se.argB);
          ie && Gt(n.touchedFields, N, ce)
        }(u.dirtyFields || f.dirtyFields) && (n.dirtyFields = Nf(s, i)), h.state.next({
          name: N,
          isDirty: L(N, U),
          dirtyFields: n.dirtyFields,
          errors: n.errors,
          isValid: n.isValid
        })
      } else Gt(i, N, U)
    }, _ = (N, U) => {
      Gt(n.errors, N, U), h.state.next({
        errors: n.errors
      })
    }, w = N => {
      n.errors = N, h.state.next({
        errors: n.errors,
        isValid: !1
      })
    }, b = (N, U, K, se) => {
      const ie = Me(r, N);
      if (ie) {
        const oe = Me(i, N, dn(K) ? Me(s, N) : K);
        dn(oe) || se && se.defaultChecked || U ? Gt(i, N, U ? oe : JM(ie._f)) : j(N, oe), o.mount && v()
      }
    }, S = (N, U, K, se, ie) => {
      let oe = !1,
        ce = !1;
      const _e = {
        name: N
      };
      if (!e.disabled) {
        if (!K || se) {
          (u.isDirty || f.isDirty) && (ce = n.isDirty, n.isDirty = _e.isDirty = L(), oe = ce !== _e.isDirty);
          const Ae = Na(Me(s, N), U);
          ce = !!Me(n.dirtyFields, N), Ae ? jn(n.dirtyFields, N) : Gt(n.dirtyFields, N, !0), _e.dirtyFields = n
            .dirtyFields, oe = oe || (u.dirtyFields || f.dirtyFields) && ce !== !Ae
        }
        if (K) {
          const Ae = Me(n.touchedFields, N);
          Ae || (Gt(n.touchedFields, N, K), _e.touchedFields = n.touchedFields, oe = oe || (u.touchedFields || f
            .touchedFields) && Ae !== K)
        }
        oe && ie && h.state.next(_e)
      }
      return oe ? _e : {}
    }, E = (N, U, K, se) => {
      const ie = Me(n.errors, N),
        oe = (u.isValid || f.isValid) && vs(U) && n.isValid !== U;
      if (e.delayError && K ? (c = y(() => _(N, K)), c(e.delayError)) : (clearTimeout(d), c = null, K ? Gt(n.errors,
          N, K) : jn(n.errors, N)), (K ? !Na(ie, K) : ie) || !Cr(se) || oe) {
        const ce = {
          ...se,
          ...oe && vs(U) ? {
            isValid: U
          } : {},
          errors: n.errors,
          name: N
        };
        n = {
          ...n,
          ...ce
        }, h.state.next(ce)
      }
    }, T = async N => {
      g(N, !0);
      const U = await e.resolver(i, e.context, zse(N || l.mount, r, e.criteriaMode, e.shouldUseNativeValidation));
      return g(N), U
    }, P = async N => {
      const {
        errors: U
      } = await T(N);
      if (N)
        for (const K of N) {
          const se = Me(U, K);
          se ? Gt(n.errors, K, se) : jn(n.errors, K)
        } else n.errors = U;
      return U
    }, C = async (N, U, K = {
      valid: !0
    }) => {
      for (const se in N) {
        const ie = N[se];
        if (ie) {
          const {
            _f: oe,
            ...ce
          } = ie;
          if (oe) {
            const _e = l.array.has(oe.name),
              Ae = ie._f && Vse(ie._f);
            Ae && u.validatingFields && g([se], !0);
            const st = await wb(ie, l.disabled, i, m, e.shouldUseNativeValidation && !U, _e);
            if (Ae && u.validatingFields && g([se]), st[oe.name] && (K.valid = !1, U)) break;
            !U && (Me(st, oe.name) ? _e ? $3(n.errors, st, oe.name) : Gt(n.errors, oe.name, st[oe.name]) : jn(n
              .errors, oe.name))
          }!Cr(ce) && await C(ce, U, K)
        }
      }
      return K.valid
    }, M = () => {
      for (const N of l.unMount) {
        const U = Me(r, N);
        U && (U._f.refs ? U._f.refs.every(K => !L0(K)) : !L0(U._f.ref)) && ee(N)
      }
      l.unMount = new Set
    }, L = (N, U) => !e.disabled && (N && U && Gt(i, N, U), !Na(W(), s)), D = (N, U, K) => I3(N, l, {
      ...o.mount ? i : dn(U) ? s : Gi(N) ? {
        [N]: U
      } : U
    }, K, U), $ = N => Dx(Me(o.mount ? i : s, N, e.shouldUnregister ? Me(s, N, []) : [])), j = (N, U,
    K = {}) => {
      const se = Me(r, N);
      let ie = U;
      if (se) {
        const oe = se._f;
        oe && (!oe.disabled && Gt(i, N, z3(U, oe)), ie = fv(oe.ref) && kr(U) ? "" : U, O3(oe.ref) ? [...oe.ref
          .options
        ].forEach(ce => ce.selected = ie.includes(ce.value)) : oe.refs ? Am(oe.ref) ? oe.refs.forEach(
        ce => {
          (!ce.defaultChecked || !ce.disabled) && (Array.isArray(ie) ? ce.checked = !!ie.find(_e => _e ===
            ce.value) : ce.checked = ie === ce.value || !!ie)
        }) : oe.refs.forEach(ce => ce.checked = ce.value === ie) : cE(oe.ref) ? oe.ref.value = "" : (oe.ref
          .value = ie, oe.ref.type || h.state.next({
            name: N,
            values: cn(i)
          })))
      }(K.shouldDirty || K.shouldTouch) && S(N, ie, K.shouldTouch, K.shouldDirty, !0), K.shouldValidate && k(N)
    }, F = (N, U, K) => {
      for (const se in U) {
        if (!U.hasOwnProperty(se)) return;
        const ie = U[se],
          oe = N + "." + se,
          ce = Me(r, oe);
        (l.array.has(N) || kn(ie) || ce && !ce._f) && !Bl(ie) ? F(oe, ie, K) : j(oe, ie, K)
      }
    }, R = (N, U, K = {}) => {
      const se = Me(r, N),
        ie = l.array.has(N),
        oe = cn(U);
      Gt(i, N, oe), ie ? (h.array.next({
        name: N,
        values: cn(i)
      }), (u.isDirty || u.dirtyFields || f.isDirty || f.dirtyFields) && K.shouldDirty && h.state.next({
        name: N,
        dirtyFields: Nf(s, i),
        isDirty: L(N, oe)
      })) : se && !se._f && !kr(oe) ? F(N, oe, K) : j(N, oe, K), _b(N, l) && h.state.next({
        ...n,
        name: N
      }), h.state.next({
        name: o.mount ? N : void 0,
        values: cn(i)
      })
    }, I = async N => {
      o.mount = !0;
      const U = N.target;
      let K = U.name,
        se = !0;
      const ie = Me(r, K),
        oe = Ae => {
          se = Number.isNaN(Ae) || Bl(Ae) && isNaN(Ae.getTime()) || Na(Ae, Me(i, K, Ae))
        },
        ce = Nd(e.mode),
        _e = Nd(e.reValidateMode);
      if (ie) {
        let Ae, st;
        const xe = U.type ? JM(ie._f) : P3(N),
          mt = N.type === uv.BLUR || N.type === uv.FOCUS_OUT,
          ft = !$se(ie._f) && !e.resolver && !Me(n.errors, K) && !ie._f.deps || Gse(mt, Me(n.touchedFields,
            K), n.isSubmitted, _e, ce),
          at = _b(K, l, mt);
        Gt(i, K, xe), mt ? (ie._f.onBlur && ie._f.onBlur(N), c && c(0)) : ie._f.onChange && ie._f.onChange(N);
        const Be = S(K, xe, mt),
          Fe = !Cr(Be) || at;
        if (!mt && h.state.next({
            name: K,
            type: N.type,
            values: cn(i)
          }), ft) return (u.isValid || f.isValid) && (e.mode === "onBlur" ? mt && v() : mt || v()), Fe && h
          .state.next({
            name: K,
            ...at ? {} : Be
          });
        if (!mt && at && h.state.next({
            ...n
          }), e.resolver) {
          const {
            errors: ot
          } = await T([K]);
          if (oe(xe), se) {
            const jt = tA(n.errors, r, K),
              De = tA(ot, r, jt.name || K);
            Ae = De.error, K = De.name, st = Cr(ot)
          }
        } else g([K], !0), Ae = (await wb(ie, l.disabled, i, m, e.shouldUseNativeValidation))[K], g([K]), oe(
          xe), se && (Ae ? st = !1 : (u.isValid || f.isValid) && (st = await C(r, !0)));
        se && (ie._f.deps && k(ie._f.deps), E(K, st, Ae, Be))
      }
    }, A = (N, U) => {
      if (Me(n.errors, U) && N.focus) return N.focus(), 1
    }, k = async (N, U = {}) => {
      let K, se;
      const ie = rs(N);
      if (e.resolver) {
        const oe = await P(dn(N) ? N : ie);
        K = Cr(oe), se = N ? !ie.some(ce => Me(oe, ce)) : K
      } else N ? (se = (await Promise.all(ie.map(async oe => {
        const ce = Me(r, oe);
        return await C(ce && ce._f ? {
          [oe]: ce
        } : ce)
      }))).every(Boolean), !(!se && !n.isValid) && v()) : se = K = await C(r);
      return h.state.next({
        ...!Gi(N) || (u.isValid || f.isValid) && K !== n.isValid ? {} : {
          name: N
        },
        ...e.resolver || !N ? {
          isValid: K
        } : {},
        errors: n.errors
      }), U.shouldFocus && !se && Bd(r, A, N ? ie : l.mount), se
    }, W = N => {
      const U = {
        ...o.mount ? i : s
      };
      return dn(N) ? U : Gi(N) ? Me(U, N) : N.map(K => Me(U, K))
    }, G = (N, U) => ({
      invalid: !!Me((U || n).errors, N),
      isDirty: !!Me((U || n).dirtyFields, N),
      error: Me((U || n).errors, N),
      isValidating: !!Me(n.validatingFields, N),
      isTouched: !!Me((U || n).touchedFields, N)
    }), V = N => {
      N && rs(N).forEach(U => jn(n.errors, U)), h.state.next({
        errors: N ? n.errors : {}
      })
    }, H = (N, U, K) => {
      const se = (Me(r, N, {
          _f: {}
        })._f || {}).ref,
        ie = Me(n.errors, N) || {},
        {
          ref: oe,
          message: ce,
          type: _e,
          ...Ae
        } = ie;
      Gt(n.errors, N, {
        ...Ae,
        ...U,
        ref: se
      }), h.state.next({
        name: N,
        errors: n.errors,
        isValid: !1
      }), K && K.shouldFocus && se && se.focus && se.focus()
    }, te = (N, U) => _i(N) ? h.state.subscribe({
      next: K => "values" in K && N(D(void 0, U), K)
    }) : D(N, U, !0), J = N => h.state.subscribe({
      next: U => {
        Wse(N.name, U.name, N.exact) && Hse(U, N.formState || u, St, N.reRenderRoot) && N.callback({
          values: {
            ...i
          },
          ...n,
          ...U,
          defaultValues: s
        })
      }
    }).unsubscribe, q = N => (o.mount = !0, f = {
      ...f,
      ...N.formState
    }, J({
      ...N,
      formState: f
    })), ee = (N, U = {}) => {
      for (const K of N ? rs(N) : l.mount) l.mount.delete(K), l.array.delete(K), U.keepValue || (jn(r, K),
          jn(i, K)), !U.keepError && jn(n.errors, K), !U.keepDirty && jn(n.dirtyFields, K), !U
        .keepTouched && jn(n.touchedFields, K), !U.keepIsValidating && jn(n.validatingFields, K), !e
        .shouldUnregister && !U.keepDefaultValue && jn(s, K);
      h.state.next({
        values: cn(i)
      }), h.state.next({
        ...n,
        ...U.keepDirty ? {
          isDirty: L()
        } : {}
      }), !U.keepIsValid && v()
    }, me = ({
      disabled: N,
      name: U
    }) => {
      (vs(N) && o.mount || N || l.disabled.has(U)) && (N ? l.disabled.add(U) : l.disabled.delete(U))
    }, ye = (N, U = {}) => {
      let K = Me(r, N);
      const se = vs(U.disabled) || vs(e.disabled);
      return Gt(r, N, {
        ...K || {},
        _f: {
          ...K && K._f ? K._f : {
            ref: {
              name: N
            }
          },
          name: N,
          mount: !0,
          ...U
        }
      }), l.mount.add(N), K ? me({
        disabled: vs(U.disabled) ? U.disabled : e.disabled,
        name: N
      }) : b(N, !0, U.value), {
        ...se ? {
          disabled: U.disabled || e.disabled
        } : {},
        ...e.progressive ? {
          required: !!U.required,
          min: Cf(U.min),
          max: Cf(U.max),
          minLength: Cf(U.minLength),
          maxLength: Cf(U.maxLength),
          pattern: Cf(U.pattern)
        } : {},
        name: N,
        onChange: I,
        onBlur: I,
        ref: ie => {
          if (ie) {
            ye(N, U), K = Me(r, N);
            const oe = dn(ie.value) && ie.querySelectorAll && ie.querySelectorAll(
                "input,select,textarea")[0] || ie,
              ce = Fse(oe),
              _e = K._f.refs || [];
            if (ce ? _e.find(Ae => Ae === oe) : oe === K._f.ref) return;
            Gt(r, N, {
              _f: {
                ...K._f,
                ...ce ? {
                  refs: [..._e.filter(L0), oe, ...Array.isArray(Me(s, N)) ? [{}] : []],
                  ref: {
                    type: oe.type,
                    name: N
                  }
                } : {
                  ref: oe
                }
              }
            }), b(N, !1, void 0, oe)
          } else K = Me(r, N, {}), K._f && (K._f.mount = !1), (e.shouldUnregister || U
            .shouldUnregister) && !(k3(l.array, N) && o.action) && l.unMount.add(N)
        }
      }
    }, we = () => e.shouldFocusError && Bd(r, A, l.mount), Ce = N => {
      vs(N) && (h.state.next({
        disabled: N
      }), Bd(r, (U, K) => {
        const se = Me(r, K);
        se && (U.disabled = se._f.disabled || N, Array.isArray(se._f.refs) && se._f.refs.forEach(
        ie => {
          ie.disabled = se._f.disabled || N
        }))
      }, 0, !1))
    }, re = (N, U) => async K => {
      let se;
      K && (K.preventDefault && K.preventDefault(), K.persist && K.persist());
      let ie = cn(i);
      if (h.state.next({
          isSubmitting: !0
        }), e.resolver) {
        const {
          errors: oe,
          values: ce
        } = await T();
        n.errors = oe, ie = cn(ce)
      } else await C(r);
      if (l.disabled.size)
        for (const oe of l.disabled) jn(ie, oe);
      if (jn(n.errors, "root"), Cr(n.errors)) {
        h.state.next({
          errors: {}
        });
        try {
          await N(ie, K)
        } catch (oe) {
          se = oe
        }
      } else U && await U({
        ...n.errors
      }, K), we(), setTimeout(we);
      if (h.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Cr(n.errors) && !se,
          submitCount: n.submitCount + 1,
          errors: n.errors
        }), se) throw se
    }, ve = (N, U = {}) => {
      Me(r, N) && (dn(U.defaultValue) ? R(N, cn(Me(s, N))) : (R(N, U.defaultValue), Gt(s, N, cn(U
        .defaultValue))), U.keepTouched || jn(n.touchedFields, N), U.keepDirty || (jn(n.dirtyFields,
        N), n.isDirty = U.defaultValue ? L(N, cn(Me(s, N))) : L()), U.keepError || (jn(n.errors, N), u
        .isValid && v()), h.state.next({
        ...n
      }))
    }, Ne = (N, U = {}) => {
      const K = N ? cn(N) : s,
        se = cn(K),
        ie = Cr(N),
        oe = ie ? s : se;
      if (U.keepDefaultValues || (s = K), !U.keepValues) {
        if (U.keepDirtyValues) {
          const ce = new Set([...l.mount, ...Object.keys(Nf(s, i))]);
          for (const _e of Array.from(ce)) Me(n.dirtyFields, _e) ? Gt(oe, _e, Me(i, _e)) : R(_e, Me(oe,
            _e))
        } else {
          if (aE && dn(N))
            for (const ce of l.mount) {
              const _e = Me(r, ce);
              if (_e && _e._f) {
                const Ae = Array.isArray(_e._f.refs) ? _e._f.refs[0] : _e._f.ref;
                if (fv(Ae)) {
                  const st = Ae.closest("form");
                  if (st) {
                    st.reset();
                    break
                  }
                }
              }
            }
          if (U.keepFieldsRef)
            for (const ce of l.mount) R(ce, Me(oe, ce));
          else r = {}
        }
        i = e.shouldUnregister ? U.keepDefaultValues ? cn(s) : {} : cn(oe), h.array.next({
          values: {
            ...oe
          }
        }), h.state.next({
          values: {
            ...oe
          }
        })
      }
      l = {
          mount: U.keepDirtyValues ? l.mount : new Set,
          unMount: new Set,
          array: new Set,
          disabled: new Set,
          watch: new Set,
          watchAll: !1,
          focus: ""
        }, o.mount = !u.isValid || !!U.keepIsValid || !!U.keepDirtyValues, o.watch = !!e.shouldUnregister,
        h.state.next({
          submitCount: U.keepSubmitCount ? n.submitCount : 0,
          isDirty: ie ? !1 : U.keepDirty ? n.isDirty : !!(U.keepDefaultValues && !Na(N, s)),
          isSubmitted: U.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: ie ? {} : U.keepDirtyValues ? U.keepDefaultValues && i ? Nf(s, i) : n
            .dirtyFields : U.keepDefaultValues && N ? Nf(s, N) : U.keepDirty ? n.dirtyFields : {},
          touchedFields: U.keepTouched ? n.touchedFields : {},
          errors: U.keepErrors ? n.errors : {},
          isSubmitSuccessful: U.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
          isSubmitting: !1
        })
    }, rt = (N, U) => Ne(_i(N) ? N(i) : N, U), Oe = (N, U = {}) => {
      const K = Me(r, N),
        se = K && K._f;
      if (se) {
        const ie = se.refs ? se.refs[0] : se.ref;
        ie.focus && (ie.focus(), U.shouldSelect && _i(ie.select) && ie.select())
      }
    }, St = N => {
      n = {
        ...n,
        ...N
      }
    }, B = {
      control: {
        register: ye,
        unregister: ee,
        getFieldState: G,
        handleSubmit: re,
        setError: H,
        _subscribe: J,
        _runSchema: T,
        _focusError: we,
        _getWatch: D,
        _getDirty: L,
        _setValid: v,
        _setFieldArray: p,
        _setDisabledField: me,
        _setErrors: w,
        _getFieldArray: $,
        _reset: Ne,
        _resetDefaultValues: () => _i(e.defaultValues) && e.defaultValues().then(N => {
          rt(N, e.resetOptions), h.state.next({
            isLoading: !1
          })
        }),
        _removeUnmounted: M,
        _disableForm: Ce,
        _subjects: h,
        _proxyFormState: u,
        get _fields() {
          return r
        },
        get _formValues() {
          return i
        },
        get _state() {
          return o
        },
        set _state(N) {
          o = N
        },
        get _defaultValues() {
          return s
        },
        get _names() {
          return l
        },
        set _names(N) {
          l = N
        },
        get _formState() {
          return n
        },
        get _options() {
          return e
        },
        set _options(N) {
          e = {
            ...e,
            ...N
          }
        }
      },
      subscribe: q,
      trigger: k,
      register: ye,
      handleSubmit: re,
      watch: te,
      setValue: R,
      getValues: W,
      reset: rt,
      resetField: ve,
      clearErrors: V,
      unregister: ee,
      setError: H,
      setFocus: Oe,
      getFieldState: G
    };
  return {
    ...B,
    formControl: B
  }
}
var io = () => {
    if (typeof crypto < "u" && crypto.randomUUID) return crypto.randomUUID();
    const t = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
      const n = (Math.random() * 16 + t) % 16 | 0;
      return (e == "x" ? n : n & 3 | 8).toString(16)
    })
  },
  O0 = (t, e, n = {}) => n.shouldFocus || dn(n.shouldFocus) ? n.focusName ||
  `${t}.${dn(n.focusIndex)?e:n.focusIndex}.` : "",
  F0 = (t, e) => [...t, ...rs(e)],
  U0 = t => Array.isArray(t) ? t.map(() => {}) : void 0;

function B0(t, e, n) {
  return [...t.slice(0, e), ...rs(n), ...t.slice(e)]
}
var z0 = (t, e, n) => Array.isArray(t) ? (dn(t[n]) && (t[n] = void 0), t.splice(n, 0, t.splice(e, 1)[0]), t) : [],
  V0 = (t, e) => [...rs(e), ...rs(t)];

function Kse(t, e) {
  let n = 0;
  const r = [...t];
  for (const s of e) r.splice(s - n, 1), n++;
  return Dx(r).length ? r : []
}
var $0 = (t, e) => dn(e) ? [] : Kse(t, rs(e).sort((n, r) => n - r)),
  H0 = (t, e, n) => {
    [t[e], t[n]] = [t[n], t[e]]
  },
  rA = (t, e, n) => (t[e] = n, t);

function _u(t) {
  const e = jm(),
    {
      control: n = e.control,
      name: r,
      keyName: s = "id",
      shouldUnregister: i,
      rules: o
    } = t,
    [l, c] = Z.useState(n._getFieldArray(r)),
    d = Z.useRef(n._getFieldArray(r).map(io)),
    u = Z.useRef(l),
    f = Z.useRef(!1);
  u.current = l, n._names.array.add(r), Z.useMemo(() => o && n.register(r, o), [n, o, r]), Ix(() => n._subjects.array
    .subscribe({
      next: ({
        values: S,
        name: E
      }) => {
        if (E === r || !E) {
          const T = Me(S, r);
          Array.isArray(T) && (c(T), d.current = T.map(io))
        }
      }
    }).unsubscribe, [n, r]);
  const h = Z.useCallback(S => {
      f.current = !0, n._setFieldArray(r, S)
    }, [n, r]),
    m = (S, E) => {
      const T = rs(cn(S)),
        P = F0(n._getFieldArray(r), T);
      n._names.focus = O0(r, P.length - 1, E), d.current = F0(d.current, T.map(io)), h(P), c(P), n._setFieldArray(r, P,
        F0, {
          argA: U0(S)
        })
    },
    y = (S, E) => {
      const T = rs(cn(S)),
        P = V0(n._getFieldArray(r), T);
      n._names.focus = O0(r, 0, E), d.current = V0(d.current, T.map(io)), h(P), c(P), n._setFieldArray(r, P, V0, {
        argA: U0(S)
      })
    },
    v = S => {
      const E = $0(n._getFieldArray(r), S);
      d.current = $0(d.current, S), h(E), c(E), !Array.isArray(Me(n._fields, r)) && Gt(n._fields, r, void 0), n
        ._setFieldArray(r, E, $0, {
          argA: S
        })
    },
    g = (S, E, T) => {
      const P = rs(cn(E)),
        C = B0(n._getFieldArray(r), S, P);
      n._names.focus = O0(r, S, T), d.current = B0(d.current, S, P.map(io)), h(C), c(C), n._setFieldArray(r, C, B0, {
        argA: S,
        argB: U0(E)
      })
    },
    p = (S, E) => {
      const T = n._getFieldArray(r);
      H0(T, S, E), H0(d.current, S, E), h(T), c(T), n._setFieldArray(r, T, H0, {
        argA: S,
        argB: E
      }, !1)
    },
    _ = (S, E) => {
      const T = n._getFieldArray(r);
      z0(T, S, E), z0(d.current, S, E), h(T), c(T), n._setFieldArray(r, T, z0, {
        argA: S,
        argB: E
      }, !1)
    },
    w = (S, E) => {
      const T = cn(E),
        P = rA(n._getFieldArray(r), S, T);
      d.current = [...P].map((C, M) => !C || M === S ? io() : d.current[M]), h(P), c([...P]), n._setFieldArray(r, P,
      rA, {
        argA: S,
        argB: T
      }, !0, !1)
    },
    b = S => {
      const E = rs(cn(S));
      d.current = E.map(io), h([...E]), c([...E]), n._setFieldArray(r, [...E], T => T, {}, !0, !1)
    };
  return Z.useEffect(() => {
    if (n._state.action = !1, _b(r, n._names) && n._subjects.state.next({
        ...n._formState
      }), f.current && (!Nd(n._options.mode).isOnSubmit || n._formState.isSubmitted) && !Nd(n._options
        .reValidateMode).isOnSubmit)
      if (n._options.resolver) n._runSchema([r]).then(S => {
        const E = Me(S.errors, r),
          T = Me(n._formState.errors, r);
        (T ? !E && T.type || E && (T.type !== E.type || T.message !== E.message) : E && E.type) && (E ? Gt(n
          ._formState.errors, r, E) : jn(n._formState.errors, r), n._subjects.state.next({
          errors: n._formState.errors
        }))
      });
      else {
        const S = Me(n._fields, r);
        S && S._f && !(Nd(n._options.reValidateMode).isOnSubmit && Nd(n._options.mode).isOnSubmit) && wb(S, n._names
            .disabled, n._formValues, n._options.criteriaMode === $s.all, n._options.shouldUseNativeValidation, !0)
          .then(E => !Cr(E) && n._subjects.state.next({
            errors: $3(n._formState.errors, E, r)
          }))
      } n._subjects.state.next({
      name: r,
      values: cn(n._formValues)
    }), n._names.focus && Bd(n._fields, (S, E) => {
      if (n._names.focus && E.startsWith(n._names.focus) && S.focus) return S.focus(), 1
    }), n._names.focus = "", n._setValid(), f.current = !1
  }, [l, r, n]), Z.useEffect(() => (!Me(n._formValues, r) && n._setFieldArray(r), () => {
    const S = (E, T) => {
      const P = Me(n._fields, E);
      P && P._f && (P._f.mount = T)
    };
    n._options.shouldUnregister || i ? n.unregister(r) : S(r, !1)
  }), [r, n, s, i]), {
    swap: Z.useCallback(p, [h, r, n]),
    move: Z.useCallback(_, [h, r, n]),
    prepend: Z.useCallback(y, [h, r, n]),
    append: Z.useCallback(m, [h, r, n]),
    remove: Z.useCallback(v, [h, r, n]),
    insert: Z.useCallback(g, [h, r, n]),
    update: Z.useCallback(w, [h, r, n]),
    replace: Z.useCallback(b, [h, r, n]),
    fields: Z.useMemo(() => l.map((S, E) => ({
      ...S,
      [s]: d.current[E] || io()
    })), [l, s])
  }
}

function pl(t = {}) {
  const e = Z.useRef(void 0),
    n = Z.useRef(void 0),
    [r, s] = Z.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: _i(t.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
      isReady: !1,
      defaultValues: _i(t.defaultValues) ? void 0 : t.defaultValues
    });
  if (!e.current)
    if (t.formControl) e.current = {
      ...t.formControl,
      formState: r
    }, t.defaultValues && !_i(t.defaultValues) && t.formControl.reset(t.defaultValues, t.resetOptions);
    else {
      const {
        formControl: o,
        ...l
      } = Xse(t);
      e.current = {
        ...l,
        formState: r
      }
    } const i = e.current.control;
  return i._options = t, Ix(() => {
    const o = i._subscribe({
      formState: i._proxyFormState,
      callback: () => s({
        ...i._formState
      }),
      reRenderRoot: !0
    });
    return s(l => ({
      ...l,
      isReady: !0
    })), i._formState.isReady = !0, o
  }, [i]), Z.useEffect(() => i._disableForm(t.disabled), [i, t.disabled]), Z.useEffect(() => {
    t.mode && (i._options.mode = t.mode), t.reValidateMode && (i._options.reValidateMode = t.reValidateMode)
  }, [i, t.mode, t.reValidateMode]), Z.useEffect(() => {
    t.errors && (i._setErrors(t.errors), i._focusError())
  }, [i, t.errors]), Z.useEffect(() => {
    t.shouldUnregister && i._subjects.state.next({
      values: i._getWatch()
    })
  }, [i, t.shouldUnregister]), Z.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const o = i._getDirty();
      o !== r.isDirty && i._subjects.state.next({
        isDirty: o
      })
    }
  }, [i, r.isDirty]), Z.useEffect(() => {
    t.values && !Na(t.values, n.current) ? (i._reset(t.values, {
      keepFieldsRef: !0,
      ...i._options.resetOptions
    }), n.current = t.values, s(o => ({
      ...o
    }))) : i._resetDefaultValues()
  }, [i, t.values]), Z.useEffect(() => {
    i._state.mount || (i._setValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects
      .state.next({
        ...i._formState
      })), i._removeUnmounted()
  }), e.current.formState = D3(r, i), e.current
}
const sA = (t, e, n) => {
    if (t && "reportValidity" in t) {
      const r = Me(n, e);
      t.setCustomValidity(r && r.message || ""), t.reportValidity()
    }
  },
  H3 = (t, e) => {
    for (const n in e.fields) {
      const r = e.fields[n];
      r && r.ref && "reportValidity" in r.ref ? sA(r.ref, n, t) : r.refs && r.refs.forEach(s => sA(s, n, t))
    }
  },
  Zse = (t, e) => {
    e.shouldUseNativeValidation && H3(t, e);
    const n = {};
    for (const r in t) {
      const s = Me(e.fields, r),
        i = Object.assign(t[r] || {}, {
          ref: s && s.ref
        });
      if (Qse(e.names || Object.keys(t), r)) {
        const o = Object.assign({}, Me(n, r));
        Gt(o, "root", i), Gt(n, r, o)
      } else Gt(n, r, i)
    }
    return n
  },
  Qse = (t, e) => t.some(n => n.startsWith(e + "."));
var Jse = function (t, e) {
    for (var n = {}; t.length;) {
      var r = t[0],
        s = r.code,
        i = r.message,
        o = r.path.join(".");
      if (!n[o])
        if ("unionErrors" in r) {
          var l = r.unionErrors[0].errors[0];
          n[o] = {
            message: l.message,
            type: l.code
          }
        } else n[o] = {
          message: i,
          type: s
        };
      if ("unionErrors" in r && r.unionErrors.forEach(function (u) {
          return u.errors.forEach(function (f) {
            return t.push(f)
          })
        }), e) {
        var c = n[o].types,
          d = c && c[r.code];
        n[o] = L3(o, e, n, s, d ? [].concat(d, r.message) : r.message)
      }
      t.shift()
    }
    return n
  },
  gl = function (t, e, n) {
    return n === void 0 && (n = {}),
      function (r, s, i) {
        try {
          return Promise.resolve(function (o, l) {
            try {
              var c = Promise.resolve(t[n.mode === "sync" ? "parse" : "parseAsync"](r, e)).then(function (d) {
                return i.shouldUseNativeValidation && H3({}, i), {
                  errors: {},
                  values: n.raw ? r : d
                }
              })
            } catch (d) {
              return l(d)
            }
            return c && c.then ? c.then(void 0, l) : c
          }(0, function (o) {
            if (function (l) {
                return Array.isArray(l == null ? void 0 : l.errors)
              }(o)) return {
              values: {},
              errors: Zse(Jse(o.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i)
            };
            throw o
          }))
        } catch (o) {
          return Promise.reject(o)
        }
      }
  },
  $t;
(function (t) {
  t.assertEqual = s => {};

  function e(s) {}
  t.assertIs = e;

  function n(s) {
    throw new Error
  }
  t.assertNever = n, t.arrayToEnum = s => {
      const i = {};
      for (const o of s) i[o] = o;
      return i
    }, t.getValidEnumValues = s => {
      const i = t.objectKeys(s).filter(l => typeof s[s[l]] != "number"),
        o = {};
      for (const l of i) o[l] = s[l];
      return t.objectValues(o)
    }, t.objectValues = s => t.objectKeys(s).map(function (i) {
      return s[i]
    }), t.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
      const i = [];
      for (const o in s) Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
      return i
    }, t.find = (s, i) => {
      for (const o of s)
        if (i(o)) return o
    }, t.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" &&
    Number.isFinite(s) && Math.floor(s) === s;

  function r(s, i = " | ") {
    return s.map(o => typeof o == "string" ? `'${o}'` : o).join(i)
  }
  t.joinValues = r, t.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i
})($t || ($t = {}));
var iA;
(function (t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
  })
})(iA || (iA = {}));
const et = $t.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol",
    "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"
  ]),
  fo = t => {
    switch (typeof t) {
      case "undefined":
        return et.undefined;
      case "string":
        return et.string;
      case "number":
        return Number.isNaN(t) ? et.nan : et.number;
      case "boolean":
        return et.boolean;
      case "function":
        return et.function;
      case "bigint":
        return et.bigint;
      case "symbol":
        return et.symbol;
      case "object":
        return Array.isArray(t) ? et.array : t === null ? et.null : t.then && typeof t.then == "function" && t.catch &&
          typeof t.catch == "function" ? et.promise : typeof Map < "u" && t instanceof Map ? et.map : typeof Set <
          "u" && t instanceof Set ? et.set : typeof Date < "u" && t instanceof Date ? et.date : et.object;
      default:
        return et.unknown
    }
  },
  Te = $t.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator",
    "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date",
    "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"
  ]);
class $a extends Error {
  get errors() {
    return this.issues
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = r => {
      this.issues = [...this.issues, r]
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r]
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e
  }
  format(e) {
    const n = e || function (i) {
        return i.message
      },
      r = {
        _errors: []
      },
      s = i => {
        for (const o of i.issues)
          if (o.code === "invalid_union") o.unionErrors.map(s);
          else if (o.code === "invalid_return_type") s(o.returnTypeError);
        else if (o.code === "invalid_arguments") s(o.argumentsError);
        else if (o.path.length === 0) r._errors.push(n(o));
        else {
          let l = r,
            c = 0;
          for (; c < o.path.length;) {
            const d = o.path[c];
            c === o.path.length - 1 ? (l[d] = l[d] || {
              _errors: []
            }, l[d]._errors.push(n(o))) : l[d] = l[d] || {
              _errors: []
            }, l = l[d], c++
          }
        }
      };
    return s(this), r
  }
  static assert(e) {
    if (!(e instanceof $a)) throw new Error(`Not a ZodError: ${e}`)
  }
  toString() {
    return this.message
  }
  get message() {
    return JSON.stringify(this.issues, $t.jsonStringifyReplacer, 2)
  }
  get isEmpty() {
    return this.issues.length === 0
  }
  flatten(e = n => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const i = s.path[0];
        n[i] = n[i] || [], n[i].push(e(s))
      } else r.push(e(s));
    return {
      formErrors: r,
      fieldErrors: n
    }
  }
  get formErrors() {
    return this.flatten()
  }
}
$a.create = t => new $a(t);
const bb = (t, e) => {
  let n;
  switch (t.code) {
    case Te.invalid_type:
      t.received === et.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case Te.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected,$t.jsonStringifyReplacer)}`;
      break;
    case Te.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${$t.joinValues(t.keys,", ")}`;
      break;
    case Te.invalid_union:
      n = "Invalid input";
      break;
    case Te.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${$t.joinValues(t.options)}`;
      break;
    case Te.invalid_enum_value:
      n = `Invalid enum value. Expected ${$t.joinValues(t.options)}, received '${t.received}'`;
      break;
    case Te.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case Te.invalid_return_type:
      n = "Invalid function return type";
      break;
    case Te.invalid_date:
      n = "Invalid date";
      break;
    case Te.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n =
          `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n =
            `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t
        .validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ?
        n = `Invalid input: must end with "${t.validation.endsWith}"` : $t.assertNever(t.validation) : t
        .validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case Te.too_small:
      t.type === "array" ? n =
        `Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)` : t
        .type === "string" ? n =
        `String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)` : t
        .type === "number" ? n =
        `Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}` :
        t.type === "bigint" ? n =
        `Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}` :
        t.type === "date" ? n =
        `Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}` :
        n = "Invalid input";
      break;
    case Te.too_big:
      t.type === "array" ? n =
        `Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)` : t
        .type === "string" ? n =
        `String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)` : t
        .type === "number" ? n =
        `Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t
        .type === "bigint" ? n =
        `BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}` : t
        .type === "date" ? n =
        `Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}` :
        n = "Invalid input";
      break;
    case Te.custom:
      n = "Invalid input";
      break;
    case Te.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case Te.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case Te.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, $t.assertNever(t)
  }
  return {
    message: n
  }
};
let eie = bb;

function tie() {
  return eie
}
const nie = t => {
  const {
    data: e,
    path: n,
    errorMaps: r,
    issueData: s
  } = t, i = [...n, ...s.path || []], o = {
    ...s,
    path: i
  };
  if (s.message !== void 0) return {
    ...s,
    path: i,
    message: s.message
  };
  let l = "";
  const c = r.filter(d => !!d).slice().reverse();
  for (const d of c) l = d(o, {
    data: e,
    defaultError: l
  }).message;
  return {
    ...s,
    path: i,
    message: l
  }
};

function We(t, e) {
  const n = tie(),
    r = nie({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === bb ? void 0 : bb].filter(s => !!s)
    });
  t.common.issues.push(r)
}
class Ns {
  constructor() {
    this.value = "valid"
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty")
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted")
  }
  static mergeArray(e, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return _t;
      s.status === "dirty" && e.dirty(), r.push(s.value)
    }
    return {
      status: e.value,
      value: r
    }
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key,
        o = await s.value;
      r.push({
        key: i,
        value: o
      })
    }
    return Ns.mergeObjectSync(e, r)
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const s of n) {
      const {
        key: i,
        value: o
      } = s;
      if (i.status === "aborted" || o.status === "aborted") return _t;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof o
        .value < "u" || s.alwaysSet) && (r[i.value] = o.value)
    }
    return {
      status: e.value,
      value: r
    }
  }
}
const _t = Object.freeze({
    status: "aborted"
  }),
  Vf = t => ({
    status: "dirty",
    value: t
  }),
  ei = t => ({
    status: "valid",
    value: t
  }),
  aA = t => t.status === "aborted",
  oA = t => t.status === "dirty",
  wu = t => t.status === "valid",
  pv = t => typeof Promise < "u" && t instanceof Promise;
var it;
(function (t) {
  t.errToObj = e => typeof e == "string" ? {
    message: e
  } : e || {}, t.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
})(it || (it = {}));
class tl {
  constructor(e, n, r, s) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = s
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) :
      this._cachedPath.push(...this._path, this._key)), this._cachedPath
  }
}
const lA = (t, e) => {
  if (wu(e)) return {
    success: !0,
    data: e.value
  };
  if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new $a(t.common.issues);
      return this._error = n, this._error
    }
  }
};

function Dt(t) {
  if (!t) return {};
  const {
    errorMap: e,
    invalid_type_error: n,
    required_error: r,
    description: s
  } = t;
  if (e && (n || r)) throw new Error(
    `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? {
    errorMap: e,
    description: s
  } : {
    errorMap: (o, l) => {
      const {
        message: c
      } = t;
      return o.code === "invalid_enum_value" ? {
        message: c ?? l.defaultError
      } : typeof l.data > "u" ? {
        message: c ?? r ?? l.defaultError
      } : o.code !== "invalid_type" ? {
        message: l.defaultError
      } : {
        message: c ?? n ?? l.defaultError
      }
    },
    description: s
  }
}
class Vt {
  get description() {
    return this._def.description
  }
  _getType(e) {
    return fo(e.data)
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: fo(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    }
  }
  _processInputParams(e) {
    return {
      status: new Ns,
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: fo(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    }
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (pv(n)) throw new Error("Synchronous parse encountered promise.");
    return n
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n)
  }
  parse(e, n) {
    const r = this.safeParse(e, n);
    if (r.success) return r.data;
    throw r.error
  }
  safeParse(e, n) {
    const r = {
        common: {
          issues: [],
          async: (n == null ? void 0 : n.async) ?? !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: fo(e)
      },
      s = this._parseSync({
        data: e,
        path: r.path,
        parent: r
      });
    return lA(r, s)
  }
  "~validate"(e) {
    var r, s;
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: fo(e)
    };
    if (!this["~standard"].async) try {
      const i = this._parseSync({
        data: e,
        path: [],
        parent: n
      });
      return wu(i) ? {
        value: i.value
      } : {
        issues: n.common.issues
      }
    } catch (i) {
      (s = (r = i == null ? void 0 : i.message) == null ? void 0 : r.toLowerCase()) != null && s.includes(
        "encountered") && (this["~standard"].async = !0), n.common = {
        issues: [],
        async: !0
      }
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: n
    }).then(i => wu(i) ? {
      value: i.value
    } : {
      issues: n.common.issues
    })
  }
  async parseAsync(e, n) {
    const r = await this.safeParseAsync(e, n);
    if (r.success) return r.data;
    throw r.error
  }
  async safeParseAsync(e, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: fo(e)
      },
      s = this._parse({
        data: e,
        path: r.path,
        parent: r
      }),
      i = await (pv(s) ? s : Promise.resolve(s));
    return lA(r, i)
  }
  refine(e, n) {
    const r = s => typeof n == "string" || typeof n > "u" ? {
      message: n
    } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, i) => {
      const o = e(s),
        l = () => i.addIssue({
          code: Te.custom,
          ...r(s)
        });
      return typeof Promise < "u" && o instanceof Promise ? o.then(c => c ? !0 : (l(), !1)) : o ? !0 : (l(), !1)
    })
  }
  refinement(e, n) {
    return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1))
  }
  _refinement(e) {
    return new Eu({
      schema: this,
      typeName: wt.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    })
  }
  superRefine(e) {
    return this._refinement(e)
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse
      .bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this),
      this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(
        this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this
      .nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(
      this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this),
      this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default
      .bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe
      .bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this
      .isOptional = this.isOptional.bind(this), this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: n => this["~validate"](n)
      }
  }
  optional() {
    return Go.create(this, this._def)
  }
  nullable() {
    return Tu.create(this, this._def)
  }
  nullish() {
    return this.nullable().optional()
  }
  array() {
    return Qi.create(this)
  }
  promise() {
    return yv.create(this, this._def)
  }
  or(e) {
    return vv.create([this, e], this._def)
  }
  and(e) {
    return xv.create(this, e, this._def)
  }
  transform(e) {
    return new Eu({
      ...Dt(this._def),
      schema: this,
      typeName: wt.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    })
  }
  default (e) {
    const n = typeof e == "function" ? e : () => e;
    return new Nb({
      ...Dt(this._def),
      innerType: this,
      defaultValue: n,
      typeName: wt.ZodDefault
    })
  }
  brand() {
    return new Tie({
      typeName: wt.ZodBranded,
      type: this,
      ...Dt(this._def)
    })
  } catch (e) {
    const n = typeof e == "function" ? e : () => e;
    return new Cb({
      ...Dt(this._def),
      innerType: this,
      catchValue: n,
      typeName: wt.ZodCatch
    })
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    })
  }
  pipe(e) {
    return uE.create(this, e)
  }
  readonly() {
    return Mb.create(this)
  }
  isOptional() {
    return this.safeParse(void 0).success
  }
  isNullable() {
    return this.safeParse(null).success
  }
}
const rie = /^c[^\s-]{8,}$/i,
  sie = /^[0-9a-z]+$/,
  iie = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  aie = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  oie = /^[a-z0-9_-]{21}$/i,
  lie = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  cie =
  /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  die = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  uie = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let W0;
const fie =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  hie =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  mie =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  pie =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  gie = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  vie = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  W3 =
  "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  xie = new RegExp(`^${W3}$`);

function G3(t) {
  let e = "[0-5]\\d";
  t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`);
  const n = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${n}`
}

function yie(t) {
  return new RegExp(`^${G3(t)}$`)
}

function _ie(t) {
  let e = `${W3}T${G3(t)}`;
  const n = [];
  return n.push(t.local ? "Z?" : "Z"), t.offset && n.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${n.join("|")})`,
    new RegExp(`^${e}$`)
}

function wie(t, e) {
  return !!((e === "v4" || !e) && fie.test(t) || (e === "v6" || !e) && mie.test(t))
}

function bie(t, e) {
  if (!lie.test(t)) return !1;
  try {
    const [n] = t.split(".");
    if (!n) return !1;
    const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="),
      s = JSON.parse(atob(r));
    return !(typeof s != "object" || s === null || "typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg ||
      e && s.alg !== e)
  } catch {
    return !1
  }
}

function Sie(t, e) {
  return !!((e === "v4" || !e) && hie.test(t) || (e === "v6" || !e) && pie.test(t))
}
class Po extends Vt {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== et.string) {
      const i = this._getOrReturnCtx(e);
      return We(i, {
        code: Te.invalid_type,
        expected: et.string,
        received: i.parsedType
      }), _t
    }
    const r = new Ns;
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min") e.data.length < i.value && (s = this._getOrReturnCtx(e, s), We(s, {
        code: Te.too_small,
        minimum: i.value,
        type: "string",
        inclusive: !0,
        exact: !1,
        message: i.message
      }), r.dirty());
      else if (i.kind === "max") e.data.length > i.value && (s = this._getOrReturnCtx(e, s), We(s, {
      code: Te.too_big,
      maximum: i.value,
      type: "string",
      inclusive: !0,
      exact: !1,
      message: i.message
    }), r.dirty());
    else if (i.kind === "length") {
      const o = e.data.length > i.value,
        l = e.data.length < i.value;
      (o || l) && (s = this._getOrReturnCtx(e, s), o ? We(s, {
        code: Te.too_big,
        maximum: i.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: i.message
      }) : l && We(s, {
        code: Te.too_small,
        minimum: i.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: i.message
      }), r.dirty())
    } else if (i.kind === "email") die.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
      validation: "email",
      code: Te.invalid_string,
      message: i.message
    }), r.dirty());
    else if (i.kind === "emoji") W0 || (W0 = new RegExp(uie, "u")), W0.test(e.data) || (s = this._getOrReturnCtx(e,
      s), We(s, {
        validation: "emoji",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty());
    else if (i.kind === "uuid") aie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
      validation: "uuid",
      code: Te.invalid_string,
      message: i.message
    }), r.dirty());
    else if (i.kind === "nanoid") oie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
      validation: "nanoid",
      code: Te.invalid_string,
      message: i.message
    }), r.dirty());
    else if (i.kind === "cuid") rie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
      validation: "cuid",
      code: Te.invalid_string,
      message: i.message
    }), r.dirty());
    else if (i.kind === "cuid2") sie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
      validation: "cuid2",
      code: Te.invalid_string,
      message: i.message
    }), r.dirty());
    else if (i.kind === "ulid") iie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
      validation: "ulid",
      code: Te.invalid_string,
      message: i.message
    }), r.dirty());
    else if (i.kind === "url") try {
      new URL(e.data)
    } catch {
      s = this._getOrReturnCtx(e, s), We(s, {
        validation: "url",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty()
    } else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), We(
        s, {
          validation: "regex",
          code: Te.invalid_string,
          message: i.message
        }), r.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i
        .value, i.position) || (s = this._getOrReturnCtx(e, s), We(s, {
        code: Te.invalid_string,
        validation: {
          includes: i.value,
          position: i.position
        },
        message: i.message
      }), r.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e
      .data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this
        ._getOrReturnCtx(e, s), We(s, {
          code: Te.invalid_string,
          validation: {
            startsWith: i.value
          },
          message: i.message
        }), r.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), We(
      s, {
        code: Te.invalid_string,
        validation: {
          endsWith: i.value
        },
        message: i.message
      }), r.dirty()) : i.kind === "datetime" ? _ie(i).test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
        code: Te.invalid_string,
        validation: "datetime",
        message: i.message
      }), r.dirty()) : i.kind === "date" ? xie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
        code: Te.invalid_string,
        validation: "date",
        message: i.message
      }), r.dirty()) : i.kind === "time" ? yie(i).test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
        code: Te.invalid_string,
        validation: "time",
        message: i.message
      }), r.dirty()) : i.kind === "duration" ? cie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
        validation: "duration",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "ip" ? wie(e.data, i.version) || (s = this._getOrReturnCtx(e, s), We(s, {
        validation: "ip",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "jwt" ? bie(e.data, i.alg) || (s = this._getOrReturnCtx(e, s), We(s, {
        validation: "jwt",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "cidr" ? Sie(e.data, i.version) || (s = this._getOrReturnCtx(e, s), We(s, {
        validation: "cidr",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64" ? gie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
        validation: "base64",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64url" ? vie.test(e.data) || (s = this._getOrReturnCtx(e, s), We(s, {
        validation: "base64url",
        code: Te.invalid_string,
        message: i.message
      }), r.dirty()) : $t.assertNever(i);
    return {
      status: r.value,
      value: e.data
    }
  }
  _regex(e, n, r) {
    return this.refinement(s => e.test(s), {
      validation: n,
      code: Te.invalid_string,
      ...it.errToObj(r)
    })
  }
  _addCheck(e) {
    return new Po({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...it.errToObj(e)
    })
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...it.errToObj(e)
    })
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...it.errToObj(e)
    })
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...it.errToObj(e)
    })
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...it.errToObj(e)
    })
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...it.errToObj(e)
    })
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...it.errToObj(e)
    })
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...it.errToObj(e)
    })
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...it.errToObj(e)
    })
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...it.errToObj(e)
    })
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...it.errToObj(e)
    })
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...it.errToObj(e)
    })
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...it.errToObj(e)
    })
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (e == null ? void 0 : e.offset) ?? !1,
      local: (e == null ? void 0 : e.local) ?? !1,
      ...it.errToObj(e == null ? void 0 : e.message)
    })
  }
  date(e) {
    return this._addCheck({
      kind: "date",
      message: e
    })
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...it.errToObj(e == null ? void 0 : e.message)
    })
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...it.errToObj(e)
    })
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...it.errToObj(n)
    })
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? void 0 : n.position,
      ...it.errToObj(n == null ? void 0 : n.message)
    })
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...it.errToObj(n)
    })
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...it.errToObj(n)
    })
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...it.errToObj(n)
    })
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...it.errToObj(n)
    })
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...it.errToObj(n)
    })
  }
  nonempty(e) {
    return this.min(1, it.errToObj(e))
  }
  trim() {
    return new Po({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    })
  }
  toLowerCase() {
    return new Po({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    })
  }
  toUpperCase() {
    return new Po({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    })
  }
  get isDatetime() {
    return !!this._def.checks.find(e => e.kind === "datetime")
  }
  get isDate() {
    return !!this._def.checks.find(e => e.kind === "date")
  }
  get isTime() {
    return !!this._def.checks.find(e => e.kind === "time")
  }
  get isDuration() {
    return !!this._def.checks.find(e => e.kind === "duration")
  }
  get isEmail() {
    return !!this._def.checks.find(e => e.kind === "email")
  }
  get isURL() {
    return !!this._def.checks.find(e => e.kind === "url")
  }
  get isEmoji() {
    return !!this._def.checks.find(e => e.kind === "emoji")
  }
  get isUUID() {
    return !!this._def.checks.find(e => e.kind === "uuid")
  }
  get isNANOID() {
    return !!this._def.checks.find(e => e.kind === "nanoid")
  }
  get isCUID() {
    return !!this._def.checks.find(e => e.kind === "cuid")
  }
  get isCUID2() {
    return !!this._def.checks.find(e => e.kind === "cuid2")
  }
  get isULID() {
    return !!this._def.checks.find(e => e.kind === "ulid")
  }
  get isIP() {
    return !!this._def.checks.find(e => e.kind === "ip")
  }
  get isCIDR() {
    return !!this._def.checks.find(e => e.kind === "cidr")
  }
  get isBase64() {
    return !!this._def.checks.find(e => e.kind === "base64")
  }
  get isBase64url() {
    return !!this._def.checks.find(e => e.kind === "base64url")
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e
  }
}
Po.create = t => new Po({
  checks: [],
  typeName: wt.ZodString,
  coerce: (t == null ? void 0 : t.coerce) ?? !1,
  ...Dt(t)
});

function Eie(t, e) {
  const n = (t.toString().split(".")[1] || "").length,
    r = (e.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    i = Number.parseInt(t.toFixed(s).replace(".", "")),
    o = Number.parseInt(e.toFixed(s).replace(".", ""));
  return i % o / 10 ** s
}
class bu extends Vt {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== et.number) {
      const i = this._getOrReturnCtx(e);
      return We(i, {
        code: Te.invalid_type,
        expected: et.number,
        received: i.parsedType
      }), _t
    }
    let r;
    const s = new Ns;
    for (const i of this._def.checks) i.kind === "int" ? $t.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), We(
      r, {
        code: Te.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this
      ._getOrReturnCtx(e, r), We(r, {
        code: Te.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this
      ._getOrReturnCtx(e, r), We(r, {
        code: Te.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? Eie(e.data, i.value) !== 0 && (r = this._getOrReturnCtx(e, r), We(
      r, {
        code: Te.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), We(r, {
      code: Te.not_finite,
      message: i.message
    }), s.dirty()) : $t.assertNever(i);
    return {
      status: s.value,
      value: e.data
    }
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, it.toString(n))
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, it.toString(n))
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, it.toString(n))
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, it.toString(n))
  }
  setLimit(e, n, r, s) {
    return new bu({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: it.toString(s)
      }]
    })
  }
  _addCheck(e) {
    return new bu({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: it.toString(e)
    })
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: it.toString(e)
    })
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: it.toString(e)
    })
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: it.toString(e)
    })
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: it.toString(e)
    })
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: it.toString(n)
    })
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: it.toString(e)
    })
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: it.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: it.toString(e)
    })
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e
  }
  get isInt() {
    return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && $t.isInteger(e.value))
  }
  get isFinite() {
    let e = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value <
        e) && (e = r.value)
    }
    return Number.isFinite(n) && Number.isFinite(e)
  }
}
bu.create = t => new bu({
  checks: [],
  typeName: wt.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Dt(t)
});
class Fh extends Vt {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte
  }
  _parse(e) {
    if (this._def.coerce) try {
      e.data = BigInt(e.data)
    } catch {
      return this._getInvalidInput(e)
    }
    if (this._getType(e) !== et.bigint) return this._getInvalidInput(e);
    let r;
    const s = new Ns;
    for (const i of this._def.checks) i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r =
      this._getOrReturnCtx(e, r), We(r, {
        code: Te.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this
      ._getOrReturnCtx(e, r), We(r, {
        code: Te.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r),
      We(r, {
        code: Te.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : $t.assertNever(i);
    return {
      status: s.value,
      value: e.data
    }
  }
  _getInvalidInput(e) {
    const n = this._getOrReturnCtx(e);
    return We(n, {
      code: Te.invalid_type,
      expected: et.bigint,
      received: n.parsedType
    }), _t
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, it.toString(n))
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, it.toString(n))
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, it.toString(n))
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, it.toString(n))
  }
  setLimit(e, n, r, s) {
    return new Fh({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: it.toString(s)
      }]
    })
  }
  _addCheck(e) {
    return new Fh({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: it.toString(e)
    })
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: it.toString(e)
    })
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: it.toString(e)
    })
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: it.toString(e)
    })
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: it.toString(n)
    })
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e
  }
}
Fh.create = t => new Fh({
  checks: [],
  typeName: wt.ZodBigInt,
  coerce: (t == null ? void 0 : t.coerce) ?? !1,
  ...Dt(t)
});
class Sb extends Vt {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== et.boolean) {
      const r = this._getOrReturnCtx(e);
      return We(r, {
        code: Te.invalid_type,
        expected: et.boolean,
        received: r.parsedType
      }), _t
    }
    return ei(e.data)
  }
}
Sb.create = t => new Sb({
  typeName: wt.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Dt(t)
});
class gv extends Vt {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== et.date) {
      const i = this._getOrReturnCtx(e);
      return We(i, {
        code: Te.invalid_type,
        expected: et.date,
        received: i.parsedType
      }), _t
    }
    if (Number.isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return We(i, {
        code: Te.invalid_date
      }), _t
    }
    const r = new Ns;
    let s;
    for (const i of this._def.checks) i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e,
      s), We(s, {
        code: Te.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), We(s, {
      code: Te.too_big,
      message: i.message,
      inclusive: !0,
      exact: !1,
      maximum: i.value,
      type: "date"
    }), r.dirty()) : $t.assertNever(i);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    }
  }
  _addCheck(e) {
    return new gv({
      ...this._def,
      checks: [...this._def.checks, e]
    })
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: it.toString(n)
    })
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: it.toString(n)
    })
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks) n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e != null ? new Date(e) : null
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks) n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e != null ? new Date(e) : null
  }
}
gv.create = t => new gv({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: wt.ZodDate,
  ...Dt(t)
});
class cA extends Vt {
  _parse(e) {
    if (this._getType(e) !== et.symbol) {
      const r = this._getOrReturnCtx(e);
      return We(r, {
        code: Te.invalid_type,
        expected: et.symbol,
        received: r.parsedType
      }), _t
    }
    return ei(e.data)
  }
}
cA.create = t => new cA({
  typeName: wt.ZodSymbol,
  ...Dt(t)
});
class dA extends Vt {
  _parse(e) {
    if (this._getType(e) !== et.undefined) {
      const r = this._getOrReturnCtx(e);
      return We(r, {
        code: Te.invalid_type,
        expected: et.undefined,
        received: r.parsedType
      }), _t
    }
    return ei(e.data)
  }
}
dA.create = t => new dA({
  typeName: wt.ZodUndefined,
  ...Dt(t)
});
class uA extends Vt {
  _parse(e) {
    if (this._getType(e) !== et.null) {
      const r = this._getOrReturnCtx(e);
      return We(r, {
        code: Te.invalid_type,
        expected: et.null,
        received: r.parsedType
      }), _t
    }
    return ei(e.data)
  }
}
uA.create = t => new uA({
  typeName: wt.ZodNull,
  ...Dt(t)
});
class fA extends Vt {
  constructor() {
    super(...arguments), this._any = !0
  }
  _parse(e) {
    return ei(e.data)
  }
}
fA.create = t => new fA({
  typeName: wt.ZodAny,
  ...Dt(t)
});
class hA extends Vt {
  constructor() {
    super(...arguments), this._unknown = !0
  }
  _parse(e) {
    return ei(e.data)
  }
}
hA.create = t => new hA({
  typeName: wt.ZodUnknown,
  ...Dt(t)
});
class nl extends Vt {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return We(n, {
      code: Te.invalid_type,
      expected: et.never,
      received: n.parsedType
    }), _t
  }
}
nl.create = t => new nl({
  typeName: wt.ZodNever,
  ...Dt(t)
});
class mA extends Vt {
  _parse(e) {
    if (this._getType(e) !== et.undefined) {
      const r = this._getOrReturnCtx(e);
      return We(r, {
        code: Te.invalid_type,
        expected: et.void,
        received: r.parsedType
      }), _t
    }
    return ei(e.data)
  }
}
mA.create = t => new mA({
  typeName: wt.ZodVoid,
  ...Dt(t)
});
class Qi extends Vt {
  _parse(e) {
    const {
      ctx: n,
      status: r
    } = this._processInputParams(e), s = this._def;
    if (n.parsedType !== et.array) return We(n, {
      code: Te.invalid_type,
      expected: et.array,
      received: n.parsedType
    }), _t;
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value,
        l = n.data.length < s.exactLength.value;
      (o || l) && (We(n, {
        code: o ? Te.too_big : Te.too_small,
        minimum: l ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty())
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (We(n, {
        code: Te.too_small,
        minimum: s.minLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: s.minLength.message
      }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (We(n, {
        code: Te.too_big,
        maximum: s.maxLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: s.maxLength.message
      }), r.dirty()), n.common.async) return Promise.all([...n.data].map((o, l) => s.type._parseAsync(new tl(n, o, n
      .path, l)))).then(o => Ns.mergeArray(r, o));
    const i = [...n.data].map((o, l) => s.type._parseSync(new tl(n, o, n.path, l)));
    return Ns.mergeArray(r, i)
  }
  get element() {
    return this._def.type
  }
  min(e, n) {
    return new Qi({
      ...this._def,
      minLength: {
        value: e,
        message: it.toString(n)
      }
    })
  }
  max(e, n) {
    return new Qi({
      ...this._def,
      maxLength: {
        value: e,
        message: it.toString(n)
      }
    })
  }
  length(e, n) {
    return new Qi({
      ...this._def,
      exactLength: {
        value: e,
        message: it.toString(n)
      }
    })
  }
  nonempty(e) {
    return this.min(1, e)
  }
}
Qi.create = (t, e) => new Qi({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: wt.ZodArray,
  ...Dt(e)
});

function ld(t) {
  if (t instanceof Tn) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = Go.create(ld(r))
    }
    return new Tn({
      ...t._def,
      shape: () => e
    })
  } else return t instanceof Qi ? new Qi({
      ...t._def,
      type: ld(t.element)
    }) : t instanceof Go ? Go.create(ld(t.unwrap())) : t instanceof Tu ? Tu.create(ld(t.unwrap())) : t instanceof _c ?
    _c.create(t.items.map(e => ld(e))) : t
}
class Tn extends Vt {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      n = $t.objectKeys(e);
    return this._cached = {
      shape: e,
      keys: n
    }, this._cached
  }
  _parse(e) {
    if (this._getType(e) !== et.object) {
      const d = this._getOrReturnCtx(e);
      return We(d, {
        code: Te.invalid_type,
        expected: et.object,
        received: d.parsedType
      }), _t
    }
    const {
      status: r,
      ctx: s
    } = this._processInputParams(e), {
      shape: i,
      keys: o
    } = this._getCached(), l = [];
    if (!(this._def.catchall instanceof nl && this._def.unknownKeys === "strip"))
      for (const d in s.data) o.includes(d) || l.push(d);
    const c = [];
    for (const d of o) {
      const u = i[d],
        f = s.data[d];
      c.push({
        key: {
          status: "valid",
          value: d
        },
        value: u._parse(new tl(s, f, s.path, d)),
        alwaysSet: d in s.data
      })
    }
    if (this._def.catchall instanceof nl) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const u of l) c.push({
          key: {
            status: "valid",
            value: u
          },
          value: {
            status: "valid",
            value: s.data[u]
          }
        });
      else if (d === "strict") l.length > 0 && (We(s, {
        code: Te.unrecognized_keys,
        keys: l
      }), r.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
    } else {
      const d = this._def.catchall;
      for (const u of l) {
        const f = s.data[u];
        c.push({
          key: {
            status: "valid",
            value: u
          },
          value: d._parse(new tl(s, f, s.path, u)),
          alwaysSet: u in s.data
        })
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const u of c) {
        const f = await u.key,
          h = await u.value;
        d.push({
          key: f,
          value: h,
          alwaysSet: u.alwaysSet
        })
      }
      return d
    }).then(d => Ns.mergeObjectSync(r, d)) : Ns.mergeObjectSync(r, c)
  }
  get shape() {
    return this._def.shape()
  }
  strict(e) {
    return it.errToObj, new Tn({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, r) => {
          var i, o;
          const s = ((o = (i = this._def).errorMap) == null ? void 0 : o.call(i, n, r).message) ?? r
            .defaultError;
          return n.code === "unrecognized_keys" ? {
            message: it.errToObj(e).message ?? s
          } : {
            message: s
          }
        }
      } : {}
    })
  }
  strip() {
    return new Tn({
      ...this._def,
      unknownKeys: "strip"
    })
  }
  passthrough() {
    return new Tn({
      ...this._def,
      unknownKeys: "passthrough"
    })
  }
  extend(e) {
    return new Tn({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    })
  }
  merge(e) {
    return new Tn({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: wt.ZodObject
    })
  }
  setKey(e, n) {
    return this.augment({
      [e]: n
    })
  }
  catchall(e) {
    return new Tn({
      ...this._def,
      catchall: e
    })
  }
  pick(e) {
    const n = {};
    for (const r of $t.objectKeys(e)) e[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new Tn({
      ...this._def,
      shape: () => n
    })
  }
  omit(e) {
    const n = {};
    for (const r of $t.objectKeys(this.shape)) e[r] || (n[r] = this.shape[r]);
    return new Tn({
      ...this._def,
      shape: () => n
    })
  }
  deepPartial() {
    return ld(this)
  }
  partial(e) {
    const n = {};
    for (const r of $t.objectKeys(this.shape)) {
      const s = this.shape[r];
      e && !e[r] ? n[r] = s : n[r] = s.optional()
    }
    return new Tn({
      ...this._def,
      shape: () => n
    })
  }
  required(e) {
    const n = {};
    for (const r of $t.objectKeys(this.shape))
      if (e && !e[r]) n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof Go;) i = i._def.innerType;
        n[r] = i
      } return new Tn({
      ...this._def,
      shape: () => n
    })
  }
  keyof() {
    return q3($t.objectKeys(this.shape))
  }
}
Tn.create = (t, e) => new Tn({
  shape: () => t,
  unknownKeys: "strip",
  catchall: nl.create(),
  typeName: wt.ZodObject,
  ...Dt(e)
});
Tn.strictCreate = (t, e) => new Tn({
  shape: () => t,
  unknownKeys: "strict",
  catchall: nl.create(),
  typeName: wt.ZodObject,
  ...Dt(e)
});
Tn.lazycreate = (t, e) => new Tn({
  shape: t,
  unknownKeys: "strip",
  catchall: nl.create(),
  typeName: wt.ZodObject,
  ...Dt(e)
});
class vv extends Vt {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e), r = this._def.options;

    function s(i) {
      for (const l of i)
        if (l.result.status === "valid") return l.result;
      for (const l of i)
        if (l.result.status === "dirty") return n.common.issues.push(...l.ctx.common.issues), l.result;
      const o = i.map(l => new $a(l.ctx.common.issues));
      return We(n, {
        code: Te.invalid_union,
        unionErrors: o
      }), _t
    }
    if (n.common.async) return Promise.all(r.map(async i => {
      const o = {
        ...n,
        common: {
          ...n.common,
          issues: []
        },
        parent: null
      };
      return {
        result: await i._parseAsync({
          data: n.data,
          path: n.path,
          parent: o
        }),
        ctx: o
      }
    })).then(s);
    {
      let i;
      const o = [];
      for (const c of r) {
        const d = {
            ...n,
            common: {
              ...n.common,
              issues: []
            },
            parent: null
          },
          u = c._parseSync({
            data: n.data,
            path: n.path,
            parent: d
          });
        if (u.status === "valid") return u;
        u.status === "dirty" && !i && (i = {
          result: u,
          ctx: d
        }), d.common.issues.length && o.push(d.common.issues)
      }
      if (i) return n.common.issues.push(...i.ctx.common.issues), i.result;
      const l = o.map(c => new $a(c));
      return We(n, {
        code: Te.invalid_union,
        unionErrors: l
      }), _t
    }
  }
  get options() {
    return this._def.options
  }
}
vv.create = (t, e) => new vv({
  options: t,
  typeName: wt.ZodUnion,
  ...Dt(e)
});

function Eb(t, e) {
  const n = fo(t),
    r = fo(e);
  if (t === e) return {
    valid: !0,
    data: t
  };
  if (n === et.object && r === et.object) {
    const s = $t.objectKeys(e),
      i = $t.objectKeys(t).filter(l => s.indexOf(l) !== -1),
      o = {
        ...t,
        ...e
      };
    for (const l of i) {
      const c = Eb(t[l], e[l]);
      if (!c.valid) return {
        valid: !1
      };
      o[l] = c.data
    }
    return {
      valid: !0,
      data: o
    }
  } else if (n === et.array && r === et.array) {
    if (t.length !== e.length) return {
      valid: !1
    };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i],
        l = e[i],
        c = Eb(o, l);
      if (!c.valid) return {
        valid: !1
      };
      s.push(c.data)
    }
    return {
      valid: !0,
      data: s
    }
  } else return n === et.date && r === et.date && +t == +e ? {
    valid: !0,
    data: t
  } : {
    valid: !1
  }
}
class xv extends Vt {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e), s = (i, o) => {
      if (aA(i) || aA(o)) return _t;
      const l = Eb(i.value, o.value);
      return l.valid ? ((oA(i) || oA(o)) && n.dirty(), {
        status: n.value,
        value: l.data
      }) : (We(r, {
        code: Te.invalid_intersection_types
      }), _t)
    };
    return r.common.async ? Promise.all([this._def.left._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    })]).then(([i, o]) => s(i, o)) : s(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }))
  }
}
xv.create = (t, e, n) => new xv({
  left: t,
  right: e,
  typeName: wt.ZodIntersection,
  ...Dt(n)
});
class _c extends Vt {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== et.array) return We(r, {
      code: Te.invalid_type,
      expected: et.array,
      received: r.parsedType
    }), _t;
    if (r.data.length < this._def.items.length) return We(r, {
      code: Te.too_small,
      minimum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), _t;
    !this._def.rest && r.data.length > this._def.items.length && (We(r, {
      code: Te.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((o, l) => {
      const c = this._def.items[l] || this._def.rest;
      return c ? c._parse(new tl(r, o, r.path, l)) : null
    }).filter(o => !!o);
    return r.common.async ? Promise.all(i).then(o => Ns.mergeArray(n, o)) : Ns.mergeArray(n, i)
  }
  get items() {
    return this._def.items
  }
  rest(e) {
    return new _c({
      ...this._def,
      rest: e
    })
  }
}
_c.create = (t, e) => {
  if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new _c({
    items: t,
    typeName: wt.ZodTuple,
    rest: null,
    ...Dt(e)
  })
};
class pA extends Vt {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== et.map) return We(r, {
      code: Te.invalid_type,
      expected: et.map,
      received: r.parsedType
    }), _t;
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...r.data.entries()].map(([l, c], d) => ({
        key: s._parse(new tl(r, l, r.path, [d, "key"])),
        value: i._parse(new tl(r, c, r.path, [d, "value"]))
      }));
    if (r.common.async) {
      const l = new Map;
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const d = await c.key,
            u = await c.value;
          if (d.status === "aborted" || u.status === "aborted") return _t;
          (d.status === "dirty" || u.status === "dirty") && n.dirty(), l.set(d.value, u.value)
        }
        return {
          status: n.value,
          value: l
        }
      })
    } else {
      const l = new Map;
      for (const c of o) {
        const d = c.key,
          u = c.value;
        if (d.status === "aborted" || u.status === "aborted") return _t;
        (d.status === "dirty" || u.status === "dirty") && n.dirty(), l.set(d.value, u.value)
      }
      return {
        status: n.value,
        value: l
      }
    }
  }
}
pA.create = (t, e, n) => new pA({
  valueType: e,
  keyType: t,
  typeName: wt.ZodMap,
  ...Dt(n)
});
class Uh extends Vt {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== et.set) return We(r, {
      code: Te.invalid_type,
      expected: et.set,
      received: r.parsedType
    }), _t;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (We(r, {
      code: Te.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (We(r, {
      code: Te.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;

    function o(c) {
      const d = new Set;
      for (const u of c) {
        if (u.status === "aborted") return _t;
        u.status === "dirty" && n.dirty(), d.add(u.value)
      }
      return {
        status: n.value,
        value: d
      }
    }
    const l = [...r.data.values()].map((c, d) => i._parse(new tl(r, c, r.path, d)));
    return r.common.async ? Promise.all(l).then(c => o(c)) : o(l)
  }
  min(e, n) {
    return new Uh({
      ...this._def,
      minSize: {
        value: e,
        message: it.toString(n)
      }
    })
  }
  max(e, n) {
    return new Uh({
      ...this._def,
      maxSize: {
        value: e,
        message: it.toString(n)
      }
    })
  }
  size(e, n) {
    return this.min(e, n).max(e, n)
  }
  nonempty(e) {
    return this.min(1, e)
  }
}
Uh.create = (t, e) => new Uh({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: wt.ZodSet,
  ...Dt(e)
});
class gA extends Vt {
  get schema() {
    return this._def.getter()
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: n.data,
      path: n.path,
      parent: n
    })
  }
}
gA.create = (t, e) => new gA({
  getter: t,
  typeName: wt.ZodLazy,
  ...Dt(e)
});
class Tb extends Vt {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return We(n, {
        received: n.data,
        code: Te.invalid_literal,
        expected: this._def.value
      }), _t
    }
    return {
      status: "valid",
      value: e.data
    }
  }
  get value() {
    return this._def.value
  }
}
Tb.create = (t, e) => new Tb({
  value: t,
  typeName: wt.ZodLiteral,
  ...Dt(e)
});

function q3(t, e) {
  return new Su({
    values: t,
    typeName: wt.ZodEnum,
    ...Dt(e)
  })
}
class Su extends Vt {
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e),
        r = this._def.values;
      return We(n, {
        expected: $t.joinValues(r),
        received: n.parsedType,
        code: Te.invalid_type
      }), _t
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const n = this._getOrReturnCtx(e),
        r = this._def.values;
      return We(n, {
        received: n.data,
        code: Te.invalid_enum_value,
        options: r
      }), _t
    }
    return ei(e.data)
  }
  get options() {
    return this._def.values
  }
  get enum() {
    const e = {};
    for (const n of this._def.values) e[n] = n;
    return e
  }
  get Values() {
    const e = {};
    for (const n of this._def.values) e[n] = n;
    return e
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values) e[n] = n;
    return e
  }
  extract(e, n = this._def) {
    return Su.create(e, {
      ...this._def,
      ...n
    })
  }
  exclude(e, n = this._def) {
    return Su.create(this.options.filter(r => !e.includes(r)), {
      ...this._def,
      ...n
    })
  }
}
Su.create = q3;
class vA extends Vt {
  _parse(e) {
    const n = $t.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(e);
    if (r.parsedType !== et.string && r.parsedType !== et.number) {
      const s = $t.objectValues(n);
      return We(r, {
        expected: $t.joinValues(s),
        received: r.parsedType,
        code: Te.invalid_type
      }), _t
    }
    if (this._cache || (this._cache = new Set($t.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const s = $t.objectValues(n);
      return We(r, {
        received: r.data,
        code: Te.invalid_enum_value,
        options: s
      }), _t
    }
    return ei(e.data)
  }
  get enum() {
    return this._def.values
  }
}
vA.create = (t, e) => new vA({
  values: t,
  typeName: wt.ZodNativeEnum,
  ...Dt(e)
});
class yv extends Vt {
  unwrap() {
    return this._def.type
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    if (n.parsedType !== et.promise && n.common.async === !1) return We(n, {
      code: Te.invalid_type,
      expected: et.promise,
      received: n.parsedType
    }), _t;
    const r = n.parsedType === et.promise ? n.data : Promise.resolve(n.data);
    return ei(r.then(s => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })))
  }
}
yv.create = (t, e) => new yv({
  type: t,
  typeName: wt.ZodPromise,
  ...Dt(e)
});
class Eu extends Vt {
  innerType() {
    return this._def.schema
  }
  sourceType() {
    return this._def.schema._def.typeName === wt.ZodEffects ? this._def.schema.sourceType() : this._def.schema
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e), s = this._def.effect || null, i = {
      addIssue: o => {
        We(r, o), o.fatal ? n.abort() : n.dirty()
      },
      get path() {
        return r.path
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "preprocess") {
      const o = s.transform(r.data, i);
      if (r.common.async) return Promise.resolve(o).then(async l => {
        if (n.value === "aborted") return _t;
        const c = await this._def.schema._parseAsync({
          data: l,
          path: r.path,
          parent: r
        });
        return c.status === "aborted" ? _t : c.status === "dirty" || n.value === "dirty" ? Vf(c.value) : c
      });
      {
        if (n.value === "aborted") return _t;
        const l = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r
        });
        return l.status === "aborted" ? _t : l.status === "dirty" || n.value === "dirty" ? Vf(l.value) : l
      }
    }
    if (s.type === "refinement") {
      const o = l => {
        const c = s.refinement(l, i);
        if (r.common.async) return Promise.resolve(c);
        if (c instanceof Promise) throw new Error(
          "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return l
      };
      if (r.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return l.status === "aborted" ? _t : (l.status === "dirty" && n.dirty(), o(l.value), {
          status: n.value,
          value: l.value
        })
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(l => l.status === "aborted" ? _t : (l.status === "dirty" && n.dirty(), o(l.value).then(() => ({
        status: n.value,
        value: l.value
      }))))
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!wu(o)) return _t;
        const l = s.transform(o.value, i);
        if (l instanceof Promise) throw new Error(
          "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return {
          status: n.value,
          value: l
        }
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(o => wu(o) ? Promise.resolve(s.transform(o.value, i)).then(l => ({
        status: n.value,
        value: l
      })) : _t);
    $t.assertNever(s)
  }
}
Eu.create = (t, e, n) => new Eu({
  schema: t,
  typeName: wt.ZodEffects,
  effect: e,
  ...Dt(n)
});
Eu.createWithPreprocess = (t, e, n) => new Eu({
  schema: e,
  effect: {
    type: "preprocess",
    transform: t
  },
  typeName: wt.ZodEffects,
  ...Dt(n)
});
class Go extends Vt {
  _parse(e) {
    return this._getType(e) === et.undefined ? ei(void 0) : this._def.innerType._parse(e)
  }
  unwrap() {
    return this._def.innerType
  }
}
Go.create = (t, e) => new Go({
  innerType: t,
  typeName: wt.ZodOptional,
  ...Dt(e)
});
class Tu extends Vt {
  _parse(e) {
    return this._getType(e) === et.null ? ei(null) : this._def.innerType._parse(e)
  }
  unwrap() {
    return this._def.innerType
  }
}
Tu.create = (t, e) => new Tu({
  innerType: t,
  typeName: wt.ZodNullable,
  ...Dt(e)
});
class Nb extends Vt {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    let r = n.data;
    return n.parsedType === et.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    })
  }
  removeDefault() {
    return this._def.innerType
  }
}
Nb.create = (t, e) => new Nb({
  innerType: t,
  typeName: wt.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Dt(e)
});
class Cb extends Vt {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return pv(s) ? s.then(i => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new $a(r.common.issues)
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new $a(r.common.issues)
        },
        input: r.data
      })
    }
  }
  removeCatch() {
    return this._def.innerType
  }
}
Cb.create = (t, e) => new Cb({
  innerType: t,
  typeName: wt.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Dt(e)
});
class xA extends Vt {
  _parse(e) {
    if (this._getType(e) !== et.nan) {
      const r = this._getOrReturnCtx(e);
      return We(r, {
        code: Te.invalid_type,
        expected: et.nan,
        received: r.parsedType
      }), _t
    }
    return {
      status: "valid",
      value: e.data
    }
  }
}
xA.create = t => new xA({
  typeName: wt.ZodNaN,
  ...Dt(t)
});
class Tie extends Vt {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    })
  }
  unwrap() {
    return this._def.type
  }
}
class uE extends Vt {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.common.async) return (async () => {
      const i = await this._def.in._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? _t : i.status === "dirty" ? (n.dirty(), Vf(i.value)) : this._def.out
        ._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        })
    })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? _t : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      })
    }
  }
  static create(e, n) {
    return new uE({
      in: e,
      out: n,
      typeName: wt.ZodPipeline
    })
  }
}
class Mb extends Vt {
  _parse(e) {
    const n = this._def.innerType._parse(e),
      r = s => (wu(s) && (s.value = Object.freeze(s.value)), s);
    return pv(n) ? n.then(s => r(s)) : r(n)
  }
  unwrap() {
    return this._def.innerType
  }
}
Mb.create = (t, e) => new Mb({
  innerType: t,
  typeName: wt.ZodReadonly,
  ...Dt(e)
});
Tn.lazycreate;
var wt;
(function (t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean =
    "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull =
    "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t
    .ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion =
    "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord =
    "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t
    .ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum",
    t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch =
    "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t
    .ZodReadonly = "ZodReadonly"
})(wt || (wt = {}));
const ht = Po.create,
  Ji = bu.create,
  rl = Sb.create;
nl.create;
const qo = Qi.create,
  ls = Tn.create;
Tn.strictCreate;
vv.create;
xv.create;
_c.create;
const Nu = Tb.create;
Su.create;
yv.create;
Go.create;
Tu.create;
const Lx = () => {
    const [t, e] = x.useState(!1);
    return {
      assignCategories: async (s, i, o) => {
        e(!0);
        try {
          console.log("Auto-assigning categories for tool:", i);
          const {
            data: l,
            error: c
          } = await Rt.functions.invoke("auto-assign-category", {
            body: {
              toolId: s,
              toolName: i,
              toolDescription: o
            }
          });
          return c ? (console.error("Auto-assignment error:", c), !1) : l != null && l.success ? (console.log(
            "Categories auto-assigned successfully:", l.assignments), !0) : (console.error(
            "Auto-assignment failed:", l == null ? void 0 : l.error), !1)
        } catch (l) {
          return console.error("Auto-assignment error:", l), !1
        } finally {
          e(!1)
        }
      },
      bulkReassignForCategory: async s => {
        e(!0);
        try {
          console.log("Bulk reassigning tools for category:", s);
          const {
            data: i,
            error: o
          } = await Rt.functions.invoke("bulk-reassign-category", {
            body: {
              categoryId: s
            }
          });
          return o ? (console.error("Bulk reassignment error:", o), vt({
            title: "Warning",
            description: "Category tools reassignment completed with some issues. Check console for details.",
            variant: "destructive"
          }), !1) : i != null && i.success ? (vt({
            title: "Success",
            description: `Reassigned ${i.processedCount||0} tools for the updated category.`
          }), !0) : (console.error("Bulk reassignment failed:", i == null ? void 0 : i.error), !1)
        } catch (i) {
          return console.error("Bulk reassignment error:", i), !1
        } finally {
          e(!1)
        }
      },
      isAssigning: t
    }
  },
  fE = () => {
    const [t, e] = x.useState(!1), [n, r] = x.useState(null), s = Dn();
    return {
      uploadLogo: async (c, d) => {
        e(!0), r(null);
        try {
          if (!c.type.startsWith("image/")) throw new Error("Please select an image file");
          if (c.size > 2 * 1024 * 1024) throw new Error("File size must be less than 2MB");
          const u = c.name.split(".").pop(),
            f = `${d.toLowerCase().replace(/[^a-z0-9]/g,"-")}-${Date.now()}.${u}`,
            h = f;
          console.log("Uploading logo:", f);
          const {
            data: m,
            error: y
          } = await s.storage.from("tool-logos").upload(h, c, {
            cacheControl: "3600",
            upsert: !1
          });
          if (y) throw console.error("Upload error:", y), new Error(y.message);
          const {
            data: {
              publicUrl: v
            }
          } = s.storage.from("tool-logos").getPublicUrl(m.path);
          return console.log("Logo uploaded successfully:", v), {
            success: !0,
            url: v
          }
        } catch (u) {
          const f = u instanceof Error ? u.message : "Failed to upload logo";
          return console.error("Logo upload error:", f), r(f), {
            success: !1,
            error: f
          }
        } finally {
          e(!1)
        }
      },
      deleteLogo: async c => {
        try {
          const d = c.split("/"),
            u = d[d.length - 1],
            {
              error: f
            } = await s.storage.from("tool-logos").remove([u]);
          return f ? (console.error("Delete error:", f), !1) : !0
        } catch (d) {
          return console.error("Logo delete error:", d), !1
        }
      },
      isUploading: t,
      uploadError: n,
      resetUpload: () => {
        r(null)
      }
    }
  },
  Y3 = () => {
    const t = Dn(),
      e = As(),
      {
        toast: n
      } = ji(),
      r = tn({
        mutationFn: async ({
          toolId: i,
          categoryIds: o
        }) => {
          if (o.length === 0) return;
          const l = o.map((d, u) => ({
              tool_id: i,
              category_id: d,
              is_primary: u === 0,
              relevance_score: 100
            })),
            {
              error: c
            } = await t.from("tool_categories").insert(l);
          if (c) throw c;
          if (o.length > 0) {
            const {
              error: d
            } = await t.from("tools").update({
              category_id: o[0]
            }).eq("id", i);
            if (d) throw d
          }
          return {
            toolId: i,
            categoryIds: o
          }
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["tools"]
          }), e.invalidateQueries({
            queryKey: ["categories"]
          })
        },
        onError: i => {
          console.error("Error adding tool to categories:", i), n({
            title: "Error",
            description: "Failed to assign categories to tool",
            variant: "destructive"
          })
        }
      }),
      s = tn({
        mutationFn: async ({
          toolId: i,
          categoryId: o
        }) => {
          const {
            error: l
          } = await t.from("tool_categories").delete().eq("tool_id", i).eq("category_id", o);
          if (l) throw l
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["tools"]
          }), n({
            title: "Success",
            description: "Tool removed from category"
          })
        },
        onError: i => {
          console.error("Error removing tool from category:", i), n({
            title: "Error",
            description: "Failed to remove tool from category",
            variant: "destructive"
          })
        }
      });
    return {
      addToolToCategories: r,
      removeToolFromCategory: s
    }
  },
  vl = kse,
  X3 = x.createContext({}),
  qe = ({
    ...t
  }) => a.jsx(X3.Provider, {
    value: {
      name: t.name
    },
    children: a.jsx(Ose, {
      ...t
    })
  }),
  Ox = () => {
    const t = x.useContext(X3),
      e = x.useContext(K3),
      {
        getFieldState: n,
        formState: r
      } = jm(),
      s = n(t.name, r);
    if (!t) throw new Error("useFormField should be used within <FormField>");
    const {
      id: i
    } = e;
    return {
      id: i,
      name: t.name,
      formItemId: `${i}-form-item`,
      formDescriptionId: `${i}-form-item-description`,
      formMessageId: `${i}-form-item-message`,
      ...s
    }
  },
  K3 = x.createContext({}),
  Ge = x.forwardRef(({
    className: t,
    ...e
  }, n) => {
    const r = x.useId();
    return a.jsx(K3.Provider, {
      value: {
        id: r
      },
      children: a.jsx("div", {
        ref: n,
        className: de("space-y-2", t),
        ...e
      })
    })
  });
Ge.displayName = "FormItem";
const $e = x.forwardRef(({
  className: t,
  ...e
}, n) => {
  const {
    error: r,
    formItemId: s
  } = Ox();
  return a.jsx(Ut, {
    ref: n,
    className: de(r && "text-destructive", t),
    htmlFor: s,
    ...e
  })
});
$e.displayName = "FormLabel";
const Ze = x.forwardRef(({
  ...t
}, e) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: i
  } = Ox();
  return a.jsx(pR, {
    ref: e,
    id: r,
    "aria-describedby": n ? `${s} ${i}` : `${s}`,
    "aria-invalid": !!n,
    ...t
  })
});
Ze.displayName = "FormControl";
const Nie = x.forwardRef(({
  className: t,
  ...e
}, n) => {
  const {
    formDescriptionId: r
  } = Ox();
  return a.jsx("p", {
    ref: n,
    id: r,
    className: de("text-sm text-muted-foreground", t),
    ...e
  })
});
Nie.displayName = "FormDescription";
const Je = x.forwardRef(({
  className: t,
  children: e,
  ...n
}, r) => {
  const {
    error: s,
    formMessageId: i
  } = Ox(), o = s ? String(s == null ? void 0 : s.message) : e;
  return o ? a.jsx("p", {
    ref: r,
    id: i,
    className: de("text-sm font-medium text-destructive", t),
    ...n,
    children: o
  }) : null
});
Je.displayName = "FormMessage";
const mn = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("textarea", {
  className: de(
    "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    t),
  ref: n,
  ...e
}));
mn.displayName = "Textarea";
var Fx = "Switch",
  [Cie, Qle] = Jn(Fx),
  [Mie, Aie] = Cie(Fx),
  Z3 = x.forwardRef((t, e) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: s,
      defaultChecked: i,
      required: o,
      disabled: l,
      value: c = "on",
      onCheckedChange: d,
      form: u,
      ...f
    } = t, [h, m] = x.useState(null), y = xt(e, w => m(w)), v = x.useRef(!1), g = h ? u || !!h.closest("form") : !0, [
      p, _
    ] = cs({
      prop: s,
      defaultProp: i ?? !1,
      onChange: d,
      caller: Fx
    });
    return a.jsxs(Mie, {
      scope: n,
      checked: p,
      disabled: l,
      children: [a.jsx(ke.button, {
        type: "button",
        role: "switch",
        "aria-checked": p,
        "aria-required": o,
        "data-state": tF(p),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...f,
        ref: y,
        onClick: Se(t.onClick, w => {
          _(b => !b), g && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation())
        })
      }), g && a.jsx(eF, {
        control: h,
        bubbles: !v.current,
        name: r,
        value: c,
        checked: p,
        required: o,
        disabled: l,
        form: u,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    })
  });
Z3.displayName = Fx;
var Q3 = "SwitchThumb",
  J3 = x.forwardRef((t, e) => {
    const {
      __scopeSwitch: n,
      ...r
    } = t, s = Aie(Q3, n);
    return a.jsx(ke.span, {
      "data-state": tF(s.checked),
      "data-disabled": s.disabled ? "" : void 0,
      ...r,
      ref: e
    })
  });
J3.displayName = Q3;
var jie = "SwitchBubbleInput",
  eF = x.forwardRef(({
    __scopeSwitch: t,
    control: e,
    checked: n,
    bubbles: r = !0,
    ...s
  }, i) => {
    const o = x.useRef(null),
      l = xt(o, i),
      c = V1(n),
      d = XS(e);
    return x.useEffect(() => {
      const u = o.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype,
        m = Object.getOwnPropertyDescriptor(f, "checked").set;
      if (c !== n && m) {
        const y = new Event("click", {
          bubbles: r
        });
        m.call(u, n), u.dispatchEvent(y)
      }
    }, [c, n, r]), a.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...s,
      tabIndex: -1,
      ref: l,
      style: {
        ...s.style,
        ...d,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    })
  });
eF.displayName = jie;

function tF(t) {
  return t ? "checked" : "unchecked"
}
var nF = Z3,
  Rie = J3;
const ea = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(nF, {
  className: de(
    "peer inline-flex h-5 w-10 md:h-6 md:w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
    t),
  ...e,
  ref: n,
  children: a.jsx(Rie, {
    className: de(
      "pointer-events-none block h-4 w-4 md:h-5 md:w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 md:data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )
  })
}));
ea.displayName = nF.displayName;
var yA = 1,
  Pie = .9,
  kie = .8,
  Die = .17,
  G0 = .1,
  q0 = .999,
  Iie = .9999,
  Lie = .99,
  Oie = /[\\\/_+.#"@\[\(\{&]/,
  Fie = /[\\\/_+.#"@\[\(\{&]/g,
  Uie = /[\s-]/,
  rF = /[\s-]/g;

function Ab(t, e, n, r, s, i, o) {
  if (i === e.length) return s === t.length ? yA : Lie;
  var l = `${s},${i}`;
  if (o[l] !== void 0) return o[l];
  for (var c = r.charAt(i), d = n.indexOf(c, s), u = 0, f, h, m, y; d >= 0;) f = Ab(t, e, n, r, d + 1, i + 1, o), f >
    u && (d === s ? f *= yA : Oie.test(t.charAt(d - 1)) ? (f *= kie, m = t.slice(s, d - 1).match(Fie), m && s > 0 && (
      f *= Math.pow(q0, m.length))) : Uie.test(t.charAt(d - 1)) ? (f *= Pie, y = t.slice(s, d - 1).match(rF), y && s >
      0 && (f *= Math.pow(q0, y.length))) : (f *= Die, s > 0 && (f *= Math.pow(q0, d - s))), t.charAt(d) !== e.charAt(
      i) && (f *= Iie)), (f < G0 && n.charAt(d - 1) === r.charAt(i + 1) || r.charAt(i + 1) === r.charAt(i) && n.charAt(
      d - 1) !== r.charAt(i)) && (h = Ab(t, e, n, r, d + 1, i + 2, o), h * G0 > f && (f = h * G0)), f > u && (u = f),
    d = n.indexOf(c, d + 1);
  return o[l] = u, u
}

function _A(t) {
  return t.toLowerCase().replace(rF, " ")
}

function Bie(t, e, n) {
  return t = n && n.length > 0 ? `${t+" "+n.join(" ")}` : t, Ab(t, e, _A(t), _A(e), 0, 0, {})
}
var Mf = '[cmdk-group=""]',
  Y0 = '[cmdk-group-items=""]',
  zie = '[cmdk-group-heading=""]',
  sF = '[cmdk-item=""]',
  wA = `${sF}:not([aria-disabled="true"])`,
  jb = "cmdk-item-select",
  cd = "data-value",
  Vie = (t, e, n) => Bie(t, e, n),
  iF = x.createContext(void 0),
  Rm = () => x.useContext(iF),
  aF = x.createContext(void 0),
  hE = () => x.useContext(aF),
  oF = x.createContext(void 0),
  lF = x.forwardRef((t, e) => {
    let n = dd(() => {
        var V, H;
        return {
          search: "",
          value: (H = (V = t.value) != null ? V : t.defaultValue) != null ? H : "",
          selectedItemId: void 0,
          filtered: {
            count: 0,
            items: new Map,
            groups: new Set
          }
        }
      }),
      r = dd(() => new Set),
      s = dd(() => new Map),
      i = dd(() => new Map),
      o = dd(() => new Set),
      l = cF(t),
      {
        label: c,
        children: d,
        value: u,
        onValueChange: f,
        filter: h,
        shouldFilter: m,
        loop: y,
        disablePointerSelection: v = !1,
        vimBindings: g = !0,
        ...p
      } = t,
      _ = On(),
      w = On(),
      b = On(),
      S = x.useRef(null),
      E = Jie();
    wc(() => {
      if (u !== void 0) {
        let V = u.trim();
        n.current.value = V, T.emit()
      }
    }, [u]), wc(() => {
      E(6, $)
    }, []);
    let T = x.useMemo(() => ({
        subscribe: V => (o.current.add(V), () => o.current.delete(V)),
        snapshot: () => n.current,
        setState: (V, H, te) => {
          var J, q, ee, me;
          if (!Object.is(n.current[V], H)) {
            if (n.current[V] = H, V === "search") D(), M(), E(1, L);
            else if (V === "value") {
              if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute(
                  "cmdk-root")) {
                let ye = document.getElementById(b);
                ye ? ye.focus() : (J = document.getElementById(_)) == null || J.focus()
              }
              if (E(7, () => {
                  var ye;
                  n.current.selectedItemId = (ye = j()) == null ? void 0 : ye.id, T.emit()
                }), te || E(5, $), ((q = l.current) == null ? void 0 : q.value) !== void 0) {
                let ye = H ?? "";
                (me = (ee = l.current).onValueChange) == null || me.call(ee, ye);
                return
              }
            }
            T.emit()
          }
        },
        emit: () => {
          o.current.forEach(V => V())
        }
      }), []),
      P = x.useMemo(() => ({
        value: (V, H, te) => {
          var J;
          H !== ((J = i.current.get(V)) == null ? void 0 : J.value) && (i.current.set(V, {
            value: H,
            keywords: te
          }), n.current.filtered.items.set(V, C(H, te)), E(2, () => {
            M(), T.emit()
          }))
        },
        item: (V, H) => (r.current.add(V), H && (s.current.has(H) ? s.current.get(H).add(V) : s.current.set(H,
          new Set([V]))), E(3, () => {
          D(), M(), n.current.value || L(), T.emit()
        }), () => {
          i.current.delete(V), r.current.delete(V), n.current.filtered.items.delete(V);
          let te = j();
          E(4, () => {
            D(), (te == null ? void 0 : te.getAttribute("id")) === V && L(), T.emit()
          })
        }),
        group: V => (s.current.has(V) || s.current.set(V, new Set), () => {
          i.current.delete(V), s.current.delete(V)
        }),
        filter: () => l.current.shouldFilter,
        label: c || t["aria-label"],
        getDisablePointerSelection: () => l.current.disablePointerSelection,
        listId: _,
        inputId: b,
        labelId: w,
        listInnerRef: S
      }), []);

    function C(V, H) {
      var te, J;
      let q = (J = (te = l.current) == null ? void 0 : te.filter) != null ? J : Vie;
      return V ? q(V, n.current.search, H) : 0
    }

    function M() {
      if (!n.current.search || l.current.shouldFilter === !1) return;
      let V = n.current.filtered.items,
        H = [];
      n.current.filtered.groups.forEach(J => {
        let q = s.current.get(J),
          ee = 0;
        q.forEach(me => {
          let ye = V.get(me);
          ee = Math.max(ye, ee)
        }), H.push([J, ee])
      });
      let te = S.current;
      F().sort((J, q) => {
        var ee, me;
        let ye = J.getAttribute("id"),
          we = q.getAttribute("id");
        return ((ee = V.get(we)) != null ? ee : 0) - ((me = V.get(ye)) != null ? me : 0)
      }).forEach(J => {
        let q = J.closest(Y0);
        q ? q.appendChild(J.parentElement === q ? J : J.closest(`${Y0} > *`)) : te.appendChild(J.parentElement ===
          te ? J : J.closest(`${Y0} > *`))
      }), H.sort((J, q) => q[1] - J[1]).forEach(J => {
        var q;
        let ee = (q = S.current) == null ? void 0 : q.querySelector(`${Mf}[${cd}="${encodeURIComponent(J[0])}"]`);
        ee == null || ee.parentElement.appendChild(ee)
      })
    }

    function L() {
      let V = F().find(te => te.getAttribute("aria-disabled") !== "true"),
        H = V == null ? void 0 : V.getAttribute(cd);
      T.setState("value", H || void 0)
    }

    function D() {
      var V, H, te, J;
      if (!n.current.search || l.current.shouldFilter === !1) {
        n.current.filtered.count = r.current.size;
        return
      }
      n.current.filtered.groups = new Set;
      let q = 0;
      for (let ee of r.current) {
        let me = (H = (V = i.current.get(ee)) == null ? void 0 : V.value) != null ? H : "",
          ye = (J = (te = i.current.get(ee)) == null ? void 0 : te.keywords) != null ? J : [],
          we = C(me, ye);
        n.current.filtered.items.set(ee, we), we > 0 && q++
      }
      for (let [ee, me] of s.current)
        for (let ye of me)
          if (n.current.filtered.items.get(ye) > 0) {
            n.current.filtered.groups.add(ee);
            break
          } n.current.filtered.count = q
    }

    function $() {
      var V, H, te;
      let J = j();
      J && (((V = J.parentElement) == null ? void 0 : V.firstChild) === J && ((te = (H = J.closest(Mf)) == null ?
        void 0 : H.querySelector(zie)) == null || te.scrollIntoView({
        block: "nearest"
      })), J.scrollIntoView({
        block: "nearest"
      }))
    }

    function j() {
      var V;
      return (V = S.current) == null ? void 0 : V.querySelector(`${sF}[aria-selected="true"]`)
    }

    function F() {
      var V;
      return Array.from(((V = S.current) == null ? void 0 : V.querySelectorAll(wA)) || [])
    }

    function R(V) {
      let H = F()[V];
      H && T.setState("value", H.getAttribute(cd))
    }

    function I(V) {
      var H;
      let te = j(),
        J = F(),
        q = J.findIndex(me => me === te),
        ee = J[q + V];
      (H = l.current) != null && H.loop && (ee = q + V < 0 ? J[J.length - 1] : q + V === J.length ? J[0] : J[q + V]),
        ee && T.setState("value", ee.getAttribute(cd))
    }

    function A(V) {
      let H = j(),
        te = H == null ? void 0 : H.closest(Mf),
        J;
      for (; te && !J;) te = V > 0 ? Zie(te, Mf) : Qie(te, Mf), J = te == null ? void 0 : te.querySelector(wA);
      J ? T.setState("value", J.getAttribute(cd)) : I(V)
    }
    let k = () => R(F().length - 1),
      W = V => {
        V.preventDefault(), V.metaKey ? k() : V.altKey ? A(1) : I(1)
      },
      G = V => {
        V.preventDefault(), V.metaKey ? R(0) : V.altKey ? A(-1) : I(-1)
      };
    return x.createElement(ke.div, {
      ref: e,
      tabIndex: -1,
      ...p,
      "cmdk-root": "",
      onKeyDown: V => {
        var H;
        (H = p.onKeyDown) == null || H.call(p, V);
        let te = V.nativeEvent.isComposing || V.keyCode === 229;
        if (!(V.defaultPrevented || te)) switch (V.key) {
          case "n":
          case "j": {
            g && V.ctrlKey && W(V);
            break
          }
          case "ArrowDown": {
            W(V);
            break
          }
          case "p":
          case "k": {
            g && V.ctrlKey && G(V);
            break
          }
          case "ArrowUp": {
            G(V);
            break
          }
          case "Home": {
            V.preventDefault(), R(0);
            break
          }
          case "End": {
            V.preventDefault(), k();
            break
          }
          case "Enter": {
            V.preventDefault();
            let J = j();
            if (J) {
              let q = new Event(jb);
              J.dispatchEvent(q)
            }
          }
        }
      }
    }, x.createElement("label", {
      "cmdk-label": "",
      htmlFor: P.inputId,
      id: P.labelId,
      style: tae
    }, c), Ux(t, V => x.createElement(aF.Provider, {
      value: T
    }, x.createElement(iF.Provider, {
      value: P
    }, V))))
  }),
  $ie = x.forwardRef((t, e) => {
    var n, r;
    let s = On(),
      i = x.useRef(null),
      o = x.useContext(oF),
      l = Rm(),
      c = cF(t),
      d = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : o == null ? void 0 : o.forceMount;
    wc(() => {
      if (!d) return l.item(s, o == null ? void 0 : o.id)
    }, [d]);
    let u = dF(s, i, [t.value, t.children, i], t.keywords),
      f = hE(),
      h = sl(E => E.value && E.value === u.current),
      m = sl(E => d || l.filter() === !1 ? !0 : E.search ? E.filtered.items.get(s) > 0 : !0);
    x.useEffect(() => {
      let E = i.current;
      if (!(!E || t.disabled)) return E.addEventListener(jb, y), () => E.removeEventListener(jb, y)
    }, [m, t.onSelect, t.disabled]);

    function y() {
      var E, T;
      v(), (T = (E = c.current).onSelect) == null || T.call(E, u.current)
    }

    function v() {
      f.setState("value", u.current, !0)
    }
    if (!m) return null;
    let {
      disabled: g,
      value: p,
      onSelect: _,
      forceMount: w,
      keywords: b,
      ...S
    } = t;
    return x.createElement(ke.div, {
      ref: Oa(i, e),
      ...S,
      id: s,
      "cmdk-item": "",
      role: "option",
      "aria-disabled": !!g,
      "aria-selected": !!h,
      "data-disabled": !!g,
      "data-selected": !!h,
      onPointerMove: g || l.getDisablePointerSelection() ? void 0 : v,
      onClick: g ? void 0 : y
    }, t.children)
  }),
  Hie = x.forwardRef((t, e) => {
    let {
      heading: n,
      children: r,
      forceMount: s,
      ...i
    } = t, o = On(), l = x.useRef(null), c = x.useRef(null), d = On(), u = Rm(), f = sl(m => s || u.filter() === !1 ?
      !0 : m.search ? m.filtered.groups.has(o) : !0);
    wc(() => u.group(o), []), dF(o, l, [t.value, t.heading, c]);
    let h = x.useMemo(() => ({
      id: o,
      forceMount: s
    }), [s]);
    return x.createElement(ke.div, {
      ref: Oa(l, e),
      ...i,
      "cmdk-group": "",
      role: "presentation",
      hidden: f ? void 0 : !0
    }, n && x.createElement("div", {
      ref: c,
      "cmdk-group-heading": "",
      "aria-hidden": !0,
      id: d
    }, n), Ux(t, m => x.createElement("div", {
      "cmdk-group-items": "",
      role: "group",
      "aria-labelledby": n ? d : void 0
    }, x.createElement(oF.Provider, {
      value: h
    }, m))))
  }),
  Wie = x.forwardRef((t, e) => {
    let {
      alwaysRender: n,
      ...r
    } = t, s = x.useRef(null), i = sl(o => !o.search);
    return !n && !i ? null : x.createElement(ke.div, {
      ref: Oa(s, e),
      ...r,
      "cmdk-separator": "",
      role: "separator"
    })
  }),
  Gie = x.forwardRef((t, e) => {
    let {
      onValueChange: n,
      ...r
    } = t, s = t.value != null, i = hE(), o = sl(d => d.search), l = sl(d => d.selectedItemId), c = Rm();
    return x.useEffect(() => {
      t.value != null && i.setState("search", t.value)
    }, [t.value]), x.createElement(ke.input, {
      ref: e,
      ...r,
      "cmdk-input": "",
      autoComplete: "off",
      autoCorrect: "off",
      spellCheck: !1,
      "aria-autocomplete": "list",
      role: "combobox",
      "aria-expanded": !0,
      "aria-controls": c.listId,
      "aria-labelledby": c.labelId,
      "aria-activedescendant": l,
      id: c.inputId,
      type: "text",
      value: s ? t.value : o,
      onChange: d => {
        s || i.setState("search", d.target.value), n == null || n(d.target.value)
      }
    })
  }),
  qie = x.forwardRef((t, e) => {
    let {
      children: n,
      label: r = "Suggestions",
      ...s
    } = t, i = x.useRef(null), o = x.useRef(null), l = sl(d => d.selectedItemId), c = Rm();
    return x.useEffect(() => {
      if (o.current && i.current) {
        let d = o.current,
          u = i.current,
          f, h = new ResizeObserver(() => {
            f = requestAnimationFrame(() => {
              let m = d.offsetHeight;
              u.style.setProperty("--cmdk-list-height", m.toFixed(1) + "px")
            })
          });
        return h.observe(d), () => {
          cancelAnimationFrame(f), h.unobserve(d)
        }
      }
    }, []), x.createElement(ke.div, {
      ref: Oa(i, e),
      ...s,
      "cmdk-list": "",
      role: "listbox",
      tabIndex: -1,
      "aria-activedescendant": l,
      "aria-label": r,
      id: c.listId
    }, Ux(t, d => x.createElement("div", {
      ref: Oa(o, c.listInnerRef),
      "cmdk-list-sizer": ""
    }, d)))
  }),
  Yie = x.forwardRef((t, e) => {
    let {
      open: n,
      onOpenChange: r,
      overlayClassName: s,
      contentClassName: i,
      container: o,
      ...l
    } = t;
    return x.createElement(hm, {
      open: n,
      onOpenChange: r
    }, x.createElement(mm, {
      container: o
    }, x.createElement(Ac, {
      "cmdk-overlay": "",
      className: s
    }), x.createElement(jc, {
      "aria-label": t.label,
      "cmdk-dialog": "",
      className: i
    }, x.createElement(lF, {
      ref: e,
      ...l
    }))))
  }),
  Xie = x.forwardRef((t, e) => sl(n => n.filtered.count === 0) ? x.createElement(ke.div, {
    ref: e,
    ...t,
    "cmdk-empty": "",
    role: "presentation"
  }) : null),
  Kie = x.forwardRef((t, e) => {
    let {
      progress: n,
      children: r,
      label: s = "Loading...",
      ...i
    } = t;
    return x.createElement(ke.div, {
      ref: e,
      ...i,
      "cmdk-loading": "",
      role: "progressbar",
      "aria-valuenow": n,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": s
    }, Ux(t, o => x.createElement("div", {
      "aria-hidden": !0
    }, o)))
  }),
  hs = Object.assign(lF, {
    List: qie,
    Item: $ie,
    Input: Gie,
    Group: Hie,
    Separator: Wie,
    Dialog: Yie,
    Empty: Xie,
    Loading: Kie
  });

function Zie(t, e) {
  let n = t.nextElementSibling;
  for (; n;) {
    if (n.matches(e)) return n;
    n = n.nextElementSibling
  }
}

function Qie(t, e) {
  let n = t.previousElementSibling;
  for (; n;) {
    if (n.matches(e)) return n;
    n = n.previousElementSibling
  }
}

function cF(t) {
  let e = x.useRef(t);
  return wc(() => {
    e.current = t
  }), e
}
var wc = typeof window > "u" ? x.useEffect : x.useLayoutEffect;

function dd(t) {
  let e = x.useRef();
  return e.current === void 0 && (e.current = t()), e
}

function sl(t) {
  let e = hE(),
    n = () => t(e.snapshot());
  return x.useSyncExternalStore(e.subscribe, n, n)
}

function dF(t, e, n, r = []) {
  let s = x.useRef(),
    i = Rm();
  return wc(() => {
    var o;
    let l = (() => {
        var d;
        for (let u of n) {
          if (typeof u == "string") return u.trim();
          if (typeof u == "object" && "current" in u) return u.current ? (d = u.current.textContent) == null ?
            void 0 : d.trim() : s.current
        }
      })(),
      c = r.map(d => d.trim());
    i.value(t, l, c), (o = e.current) == null || o.setAttribute(cd, l), s.current = l
  }), s
}
var Jie = () => {
  let [t, e] = x.useState(), n = dd(() => new Map);
  return wc(() => {
    n.current.forEach(r => r()), n.current = new Map
  }, [t]), (r, s) => {
    n.current.set(r, s), e({})
  }
};

function eae(t) {
  let e = t.type;
  return typeof e == "function" ? e(t.props) : "render" in e ? e.render(t.props) : t
}

function Ux({
  asChild: t,
  children: e
}, n) {
  return t && x.isValidElement(e) ? x.cloneElement(eae(e), {
    ref: e.ref
  }, n(e.props.children)) : n(e)
}
var tae = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
};
const uF = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(hs, {
  ref: n,
  className: de("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", t),
  ...e
}));
uF.displayName = hs.displayName;
const fF = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsxs("div", {
  className: "flex items-center border-b px-3",
  "cmdk-input-wrapper": "",
  children: [a.jsx(ds, {
    className: "mr-2 h-4 w-4 shrink-0 opacity-50"
  }), a.jsx(hs.Input, {
    ref: n,
    className: de(
      "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
      t),
    ...e
  })]
}));
fF.displayName = hs.Input.displayName;
const nae = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(hs.List, {
  ref: n,
  className: de("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
  ...e
}));
nae.displayName = hs.List.displayName;
const hF = x.forwardRef((t, e) => a.jsx(hs.Empty, {
  ref: e,
  className: "py-6 text-center text-sm",
  ...t
}));
hF.displayName = hs.Empty.displayName;
const mF = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(hs.Group, {
  ref: n,
  className: de(
    "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
    t),
  ...e
}));
mF.displayName = hs.Group.displayName;
const rae = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(hs.Separator, {
  ref: n,
  className: de("-mx-1 h-px bg-border", t),
  ...e
}));
rae.displayName = hs.Separator.displayName;
const pF = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(hs.Item, {
  ref: n,
  className: de(
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
    t),
  ...e
}));
pF.displayName = hs.Item.displayName;
const sae = ls({
    name: ht().min(1, "Name is required"),
    description: ht().min(1, "Description is required"),
    website_url: ht().url().optional().or(Nu("")),
    adams_take: ht().nullable().optional(),
    price: ht().min(1, "Price is required"),
    rating: Ji().min(0).max(5).multipleOf(.5).nullable(),
    popularity: Ji().min(0).nullable(),
    logo_url: ht().url().optional().or(Nu("")),
    is_verified: rl(),
    is_trending: rl(),
    selectedCategories: qo(ht()).default([]),
    pros: qo(ls({
      value: ht().min(1, "Pro cannot be empty")
    })),
    cons: qo(ls({
      value: ht().min(1, "Con cannot be empty")
    }))
  }),
  gF = ({
    isOpen: t,
    onClose: e,
    tool: n
  }) => {
    const r = Dn(),
      s = As(),
      [i, o] = x.useState(!1),
      [l, c] = x.useState(null),
      [d, u] = x.useState(!1),
      {
        assignCategories: f
      } = Lx(),
      {
        uploadLogo: h,
        isUploading: m,
        uploadError: y,
        resetUpload: v
      } = fE(),
      {
        data: g = []
      } = Sm(),
      {
        addToolToCategories: p,
        removeToolFromCategory: _
      } = Y3(),
      w = pl({
        resolver: gl(sae),
        defaultValues: {
          name: "",
          description: "",
          website_url: "",
          adams_take: "",
          price: "",
          rating: null,
          popularity: null,
          logo_url: "",
          is_verified: !1,
          is_trending: !1,
          selectedCategories: [],
          pros: [{
            value: ""
          }],
          cons: [{
            value: ""
          }]
        }
      }),
      {
        fields: b,
        append: S,
        remove: E
      } = _u({
        control: w.control,
        name: "pros"
      }),
      {
        fields: T,
        append: P,
        remove: C
      } = _u({
        control: w.control,
        name: "cons"
      });
    x.useEffect(() => {
      var D;
      if (n) {
        const $ = (n.pros || []).map(R => ({
            value: R
          })),
          j = (n.cons || []).map(R => ({
            value: R
          })),
          F = ((D = n.tool_categories) == null ? void 0 : D.map(R => R.category_id)) || [];
        w.reset({
          name: n.name,
          description: n.description,
          website_url: n.website_url || "",
          adams_take: n.adams_take || "",
          price: n.price,
          rating: n.rating,
          popularity: n.popularity,
          logo_url: n.logo_url || "",
          is_verified: n.is_verified,
          is_trending: n.is_trending,
          selectedCategories: F,
          pros: $.length > 0 ? $ : [{
            value: ""
          }],
          cons: j.length > 0 ? j : [{
            value: ""
          }]
        })
      }
    }, [n, w]);
    const M = tn({
        mutationFn: async D => {
          const $ = D.pros.map(k => k.value).filter(k => k.trim() !== ""),
            j = D.cons.map(k => k.value).filter(k => k.trim() !== ""),
            F = D.name !== n.name,
            R = D.description !== n.description,
            I = F || R,
            {
              error: A
            } = await r.from("tools").update({
              name: D.name,
              description: D.description,
              website_url: D.website_url || null,
              adams_take: D.adams_take || null,
              price: D.price,
              rating: D.rating,
              popularity: D.popularity,
              logo_url: D.logo_url || null,
              is_verified: D.is_verified,
              is_trending: D.is_trending,
              pros: $.length > 0 ? $ : null,
              cons: j.length > 0 ? j : null
            }).eq("id", n.id);
          if (A) throw A;
          return {
            formData: D,
            shouldReassignCategories: I
          }
        },
        onSuccess: async ({
          formData: D,
          shouldReassignCategories: $
        }) => {
          var A;
          s.invalidateQueries({
            queryKey: ["tools"]
          });
          const j = ((A = n.tool_categories) == null ? void 0 : A.map(k => k.category_id)) || [],
            F = D.selectedCategories || [],
            R = F.filter(k => !j.includes(k)),
            I = j.filter(k => !F.includes(k));
          R.length > 0 && await p.mutateAsync({
            toolId: n.id,
            categoryIds: R
          });
          for (const k of I) await _.mutateAsync({
            toolId: n.id,
            categoryId: k
          });
          $ && F.length === 0 && await f(n.id, D.name, D.description), s.invalidateQueries({
            queryKey: ["tools"]
          }), vt({
            title: "Success",
            description: "Tool updated successfully with category changes."
          }), e()
        },
        onError: D => {
          console.error("Error updating tool:", D), vt({
            title: "Error",
            description: "Failed to update tool.",
            variant: "destructive"
          })
        }
      }),
      L = async D => {
        o(!0), M.mutate(D), o(!1)
      };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "sm:max-w-[700px] max-h-[90vh] overflow-y-auto",
        children: [a.jsx(Xn, {
          children: a.jsx(Kn, {
            children: "Edit Tool"
          })
        }), a.jsx(vl, {
          ...w,
          children: a.jsxs("form", {
            onSubmit: w.handleSubmit(L),
            className: "space-y-6",
            children: [a.jsx(qe, {
              control: w.control,
              name: "name",
              render: ({
                field: D
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Name *"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    placeholder: "e.g., ChatGPT, Midjourney, Canva",
                    ...D
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: w.control,
              name: "description",
              render: ({
                field: D
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Description *"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "Brief overview of what this tool does and its main use cases...",
                    ...D
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: w.control,
              name: "website_url",
              render: ({
                field: D
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Website URL"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    placeholder: "https://toolname.com",
                    ...D
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: w.control,
              name: "adams_take",
              render: ({
                field: D
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Adam's Take"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "Personal insights, opinions, or recommendations about this tool...",
                    ...D,
                    value: D.value || ""
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: w.control,
              name: "price",
              render: ({
                field: D
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Price *"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    placeholder: "e.g., Free, $9/month, $99/year, Freemium",
                    ...D
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: w.control,
              name: "selectedCategories",
              render: ({
                field: D
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Categories"
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs(c3, {
                    open: d,
                    onOpenChange: u,
                    children: [a.jsx(d3, {
                      asChild: !0,
                      children: a.jsxs(ue, {
                        variant: "outline",
                        role: "combobox",
                        "aria-expanded": d,
                        className: "w-full justify-between",
                        children: [D.value.length > 0 ?
                          `${D.value.length} categories selected` :
                          "Select categories...", a.jsx(UB, {
                            className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                          })
                        ]
                      })
                    }), a.jsx(iE, {
                      className: "w-full p-0 z-50 bg-popover border",
                      children: a.jsxs(uF, {
                        children: [a.jsx(fF, {
                          placeholder: "Search categories..."
                        }), a.jsx(hF, {
                          children: "No categories found."
                        }), a.jsx(mF, {
                          className: "max-h-64 overflow-y-auto overflow-x-hidden",
                          children: g.map($ => {
                            var j;
                            return a.jsxs(pF, {
                              onSelect: () => {
                                const F = D.value ||
                                [];
                                F.includes($.id) ? D
                                  .onChange(F.filter(
                                      I => I !== $.id
                                      )) : D.onChange(
                                    [...F, $.id])
                              },
                              children: [a.jsx(dr, {
                                className: `mr-2 h-4 w-4 ${(j=D.value)!=null&&j.includes($.id)?"opacity-100":"opacity-0"}`
                              }), a.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [$
                                  .icon && a
                                  .jsx("span", {
                                    children: $
                                      .icon
                                  }), a.jsx(
                                    "span", {
                                      children: $
                                        .name
                                    })
                                ]
                              })]
                            }, $.id)
                          })
                        })]
                      })
                    })]
                  }), D.value && D.value.length > 0 && a.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: D.value.map($ => {
                      const j = g.find(F => F.id === $);
                      return j ? a.jsxs(tt, {
                        variant: "secondary",
                        className: "flex items-center gap-1",
                        children: [j.icon && a.jsx("span", {
                          children: j.icon
                        }), j.name, a.jsx(qn, {
                          className: "h-3 w-3 cursor-pointer hover:text-destructive",
                          onClick: () => {
                            D.onChange(D.value.filter(F => F !==
                              $))
                          }
                        })]
                      }, $) : null
                    })
                  })]
                }), a.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: "Select categories for this tool, or leave empty for auto-assignment"
                })]
              })
            }), a.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [a.jsx(qe, {
                control: w.control,
                name: "rating",
                render: ({
                  field: D
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Rating (0-5)"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      type: "number",
                      min: "0",
                      max: "5",
                      step: "0.5",
                      ...D,
                      value: D.value || "",
                      onChange: $ => D.onChange($.target.value ? Number($
                        .target.value) : null)
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: w.control,
                name: "popularity",
                render: ({
                  field: D
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Popularity (Users)"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      type: "number",
                      min: "0",
                      ...D,
                      value: D.value || "",
                      onChange: $ => D.onChange($.target.value ? Number($
                        .target.value) : null)
                    })
                  }), a.jsx(Je, {})]
                })
              })]
            }), a.jsxs("div", {
              className: "space-y-4",
              children: [a.jsx($e, {
                children: "Logo"
              }), a.jsxs("div", {
                children: [a.jsx("input", {
                  type: "file",
                  accept: "image/*",
                  onChange: async D => {
                    var j;
                    const $ = (j = D.target.files) == null ? void 0 : j[0];
                    if ($) {
                      const F = await h($, w.getValues("name") || "tool");
                      F.success && F.url ? (c(F.url), w.setValue("logo_url", F
                        .url), vt({
                        title: "Logo uploaded successfully",
                        description: "Your logo has been uploaded and will be used for the tool."
                      })) : vt({
                        title: "Upload failed",
                        description: F.error || "Failed to upload logo",
                        variant: "destructive"
                      })
                    }
                  },
                  disabled: m,
                  className: "hidden",
                  id: "logo-upload-edit"
                }), a.jsx("label", {
                  htmlFor: "logo-upload-edit",
                  className: "flex items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-muted-foreground/50 transition-colors",
                  children: l || n.logo_url ? a.jsxs("div", {
                    className: "relative w-full h-full flex items-center justify-center",
                    children: [a.jsx("img", {
                      src: l || n.logo_url,
                      alt: "Tool logo",
                      className: "max-w-full max-h-full object-contain rounded"
                    }), a.jsx(ue, {
                      type: "button",
                      variant: "destructive",
                      size: "sm",
                      className: "absolute top-2 right-2",
                      onClick: D => {
                        D.preventDefault(), c(null), w.setValue(
                          "logo_url", "")
                      },
                      children: a.jsx(Ri, {
                        className: "w-4 h-4"
                      })
                    })]
                  }) : a.jsxs("div", {
                    className: "text-center",
                    children: [a.jsx(ou, {
                      className: "w-8 h-8 mx-auto mb-2 text-muted-foreground"
                    }), a.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: m ? "Uploading..." :
                        "Click to upload logo"
                    }), a.jsx("p", {
                      className: "text-xs text-muted-foreground mt-1",
                      children: "PNG, JPG, SVG, WEBP (max 2MB)"
                    })]
                  })
                }), y && a.jsx("p", {
                  className: "text-sm text-destructive mt-1",
                  children: y
                })]
              }), a.jsxs("div", {
                className: "flex items-center gap-4",
                children: [a.jsx("div", {
                  className: "flex-1 h-px bg-border"
                }), a.jsx("span", {
                  className: "text-sm text-muted-foreground",
                  children: "OR"
                }), a.jsx("div", {
                  className: "flex-1 h-px bg-border"
                })]
              }), a.jsx(qe, {
                control: w.control,
                name: "logo_url",
                render: ({
                  field: D
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Logo URL"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      placeholder: "https://toolname.com/logo.png",
                      ...D,
                      onChange: $ => {
                        D.onChange($), $.target.value && l && c(null)
                      }
                    })
                  }), a.jsx(Je, {})]
                })
              })]
            }), a.jsxs("div", {
              children: [a.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [a.jsx($e, {
                  children: "Pros"
                }), a.jsxs(ue, {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: () => S({
                    value: ""
                  }),
                  children: [a.jsx(Lr, {
                    className: "w-4 h-4 mr-1"
                  }), "Add Pro"]
                })]
              }), a.jsx("div", {
                className: "space-y-2",
                children: b.map((D, $) => a.jsxs("div", {
                  className: "flex gap-2",
                  children: [a.jsx(qe, {
                    control: w.control,
                    name: `pros.${$}.value`,
                    render: ({
                      field: j
                    }) => a.jsxs(Ge, {
                      className: "flex-1",
                      children: [a.jsx(Ze, {
                        children: a.jsx(Ie, {
                          placeholder: "e.g., Intuitive interface, Fast processing, Great customer support",
                          ...j
                        })
                      }), a.jsx(Je, {})]
                    })
                  }), b.length > 1 && a.jsx(ue, {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => E($),
                    children: a.jsx(qn, {
                      className: "w-4 h-4"
                    })
                  })]
                }, D.id))
              })]
            }), a.jsxs("div", {
              children: [a.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [a.jsx($e, {
                  children: "Cons"
                }), a.jsxs(ue, {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: () => P({
                    value: ""
                  }),
                  children: [a.jsx(Lr, {
                    className: "w-4 h-4 mr-1"
                  }), "Add Con"]
                })]
              }), a.jsx("div", {
                className: "space-y-2",
                children: T.map((D, $) => a.jsxs("div", {
                  className: "flex gap-2",
                  children: [a.jsx(qe, {
                    control: w.control,
                    name: `cons.${$}.value`,
                    render: ({
                      field: j
                    }) => a.jsxs(Ge, {
                      className: "flex-1",
                      children: [a.jsx(Ze, {
                        children: a.jsx(Ie, {
                          placeholder: "e.g., Expensive pricing, Limited features, Steep learning curve",
                          ...j
                        })
                      }), a.jsx(Je, {})]
                    })
                  }), T.length > 1 && a.jsx(ue, {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => C($),
                    children: a.jsx(qn, {
                      className: "w-4 h-4"
                    })
                  })]
                }, D.id))
              })]
            }), a.jsxs("div", {
              className: "space-y-4",
              children: [a.jsx(qe, {
                control: w.control,
                name: "is_verified",
                render: ({
                  field: D
                }) => a.jsxs(Ge, {
                  className: "flex items-center justify-between",
                  children: [a.jsx($e, {
                    children: "Verified Tool"
                  }), a.jsx(Ze, {
                    children: a.jsx(ea, {
                      checked: D.value,
                      onCheckedChange: D.onChange
                    })
                  })]
                })
              }), a.jsx(qe, {
                control: w.control,
                name: "is_trending",
                render: ({
                  field: D
                }) => a.jsxs(Ge, {
                  className: "flex items-center justify-between",
                  children: [a.jsx($e, {
                    children: "Trending"
                  }), a.jsx(Ze, {
                    children: a.jsx(ea, {
                      checked: D.value,
                      onCheckedChange: D.onChange
                    })
                  })]
                })
              })]
            }), a.jsxs("div", {
              className: "flex justify-end space-x-4",
              children: [a.jsx(ue, {
                type: "button",
                variant: "outline",
                onClick: e,
                children: "Cancel"
              }), a.jsx(ue, {
                type: "submit",
                disabled: i,
                children: i ? "Saving..." : "Update Tool"
              })]
            })]
          })
        })]
      })
    })
  },
  vF = () => {
    const [t, e] = x.useState(!1), [n, r] = x.useState(null);
    return Lx(), {
      researchTool: async (o, l, c) => {
        e(!0), r(null);
        try {
          console.log("Starting tool research for:", o, l, c ? "with context" : "without context");
          const {
            data: d,
            error: u
          } = await Rt.functions.invoke("research-tool-ai", {
            body: {
              toolName: o.trim(),
              websiteUrl: l.trim(),
              contextDescription: c == null ? void 0 : c.trim()
            }
          });
          if (u) throw console.error("Supabase function error:", u), new Error(u.message ||
            "Failed to research tool");
          if (!d.success) throw console.error("Research failed:", d.error), new Error(d.error ||
            "Tool research failed");
          return console.log("Tool research completed successfully:", d.toolData), {
            success: !0,
            toolData: d.toolData
          }
        } catch (d) {
          const u = d instanceof Error ? d.message : "An unexpected error occurred";
          return console.error("Tool research error:", u), r(u), {
            success: !1,
            error: u
          }
        } finally {
          e(!1)
        }
      },
      isResearching: t,
      researchError: n,
      resetResearch: () => {
        r(null)
      }
    }
  },
  iae = ls({
    name: ht().min(1, "Name is required"),
    description: ht().min(1, "Description is required"),
    long_description: ht().optional(),
    adams_take: ht().optional(),
    price: ht().min(1, "Price is required"),
    rating: Ji().min(0).max(5).multipleOf(.5).nullable(),
    popularity: Ji().min(0).nullable(),
    website_url: ht().url().optional().or(Nu("")),
    logo_url: ht().url().optional().or(Nu("")),
    is_verified: rl(),
    is_trending: rl(),
    aiContext: ht().optional(),
    selectedCategories: qo(ht()).default([]),
    pros: qo(ls({
      value: ht().min(1, "Pro cannot be empty")
    })),
    cons: qo(ls({
      value: ht().min(1, "Con cannot be empty")
    }))
  }),
  aae = ({
    isOpen: t,
    onClose: e
  }) => {
    const n = Dn(),
      r = As(),
      [s, i] = x.useState(!1),
      [o, l] = x.useState(!1),
      [c, d] = x.useState(null),
      {
        data: u = []
      } = Sm(),
      {
        researchTool: f,
        isResearching: h,
        researchError: m,
        resetResearch: y
      } = vF(),
      {
        assignCategories: v
      } = Lx(),
      {
        uploadLogo: g,
        isUploading: p,
        uploadError: _,
        resetUpload: w
      } = fE(),
      {
        addToolToCategories: b
      } = Y3(),
      S = pl({
        resolver: gl(iae),
        defaultValues: {
          name: "",
          description: "",
          long_description: "",
          adams_take: "",
          price: "",
          rating: null,
          popularity: null,
          website_url: "",
          logo_url: "",
          is_verified: !1,
          is_trending: !1,
          aiContext: "",
          selectedCategories: [],
          pros: [{
            value: ""
          }],
          cons: [{
            value: ""
          }]
        }
      }),
      {
        fields: E,
        append: T,
        remove: P
      } = _u({
        control: S.control,
        name: "pros"
      }),
      {
        fields: C,
        append: M,
        remove: L
      } = _u({
        control: S.control,
        name: "cons"
      }),
      D = tn({
        mutationFn: async R => {
          var H, te;
          const I = [];
          R.name.trim() && I.push(n.from("tools").select("id, name, website_url").ilike("name", R.name.trim())
            .limit(1).single()), (H = R.website_url) != null && H.trim() && I.push(n.from("tools").select(
            "id, name, website_url").eq("website_url", R.website_url.trim()).limit(1).single());
          const A = await Promise.all(I);
          if (R.name.trim()) {
            const J = A[0];
            if (J.data && !J.error) throw new Error(`DUPLICATE_NAME:${J.data.name}:${J.data.id}`)
          }
          if ((te = R.website_url) != null && te.trim() && I.length > 1) {
            const J = A[1];
            if (J.data && !J.error) throw new Error(`DUPLICATE_URL:${J.data.name}:${J.data.id}`)
          }
          const k = R.pros.map(J => J.value).filter(J => J.trim() !== ""),
            W = R.cons.map(J => J.value).filter(J => J.trim() !== ""),
            {
              data: G,
              error: V
            } = await n.from("tools").insert({
              name: R.name,
              description: R.description,
              long_description: R.long_description || null,
              adams_take: R.adams_take || null,
              price: R.price,
              rating: R.rating,
              popularity: R.popularity,
              website_url: R.website_url || null,
              logo_url: R.logo_url || null,
              is_verified: R.is_verified,
              is_trending: R.is_trending,
              pros: k.length > 0 ? k : null,
              cons: W.length > 0 ? W : null
            }).select().single();
          if (V) throw V;
          return {
            tool: G,
            formData: R
          }
        },
        onSuccess: async ({
          tool: R,
          formData: I
        }) => {
          r.invalidateQueries({
            queryKey: ["tools"]
          }), R != null && R.id && (I.selectedCategories.length > 0 ? (await b.mutateAsync({
            toolId: R.id,
            categoryIds: I.selectedCategories
          }), vt({
            title: "Success",
            description: "Tool added successfully with selected categories."
          })) : (await v(R.id, I.name, I.description), vt({
            title: "Success",
            description: "Tool added successfully and categories auto-assigned."
          })), r.invalidateQueries({
            queryKey: ["tools"]
          })), S.reset(), F()
        },
        onError: R => {
          console.error("Error adding tool:", R);
          let I = "Error",
            A = "Failed to add tool.";
          if (R != null && R.message)
            if (R.message.startsWith("DUPLICATE_NAME:")) {
              const W = R.message.split(":")[1];
              I = "Duplicate Tool Name", A =
                `A tool named "${W}" already exists. Please use a different name or update the existing tool instead.`
            } else if (R.message.startsWith("DUPLICATE_URL:")) {
            const W = R.message.split(":")[1];
            I = "Duplicate Website URL", A =
              `The website URL is already used by "${W}". Please check if this is the same tool or use a different URL.`
          } else R.message.includes("tools_name_unique_idx") ? (I = "Duplicate Tool Name", A =
              "A tool with this name already exists. Please use a different name.") : R.message.includes(
              "tools_website_url_unique_idx") ? (I = "Duplicate Website URL", A =
              "A tool with this website URL already exists. Please check if this is the same tool.") : R.message
            .includes("duplicate key value") && (I = "Duplicate Entry", A =
              "This tool appears to already exist in the database. Please check for duplicates.");
          vt({
            title: I,
            description: A,
            variant: "destructive"
          })
        }
      }),
      $ = async R => {
        i(!0), D.mutate(R), i(!1)
      }, j = async () => {
        const R = S.getValues("name"),
          I = S.getValues("website_url"),
          A = S.getValues("aiContext");
        if (!R || !I) {
          vt({
            title: "Missing Information",
            description: "Please provide both tool name and website URL for AI research.",
            variant: "destructive"
          });
          return
        }
        y();
        const k = await f(R, I, A);
        if (k.success && k.toolData) {
          const W = k.toolData;
          S.setValue("description", W.description), S.setValue("long_description", W.long_description), S.setValue(
            "price", W.price), S.setValue("rating", W.rating), S.setValue("popularity", W.popularity), S.setValue(
            "logo_url", W.logo_url), S.setValue("is_verified", W.is_verified), S.setValue("is_trending", W
            .is_trending), S.setValue("pros", W.pros.map(G => ({
            value: G
          }))), S.setValue("cons", W.cons.map(G => ({
            value: G
          }))), vt({
            title: "AI Research Complete",
            description: `Successfully researched ${W.name}. Review and edit the populated fields as needed.`
          })
        } else vt({
          title: "Research Failed",
          description: k.error || "Unable to research tool with AI. Please fill in manually.",
          variant: "destructive"
        })
      }, F = () => {
        l(!1), d(null), S.reset(), y(), w(), e()
      };
    return a.jsx(fr, {
      open: t,
      onOpenChange: F,
      children: a.jsxs(ir, {
        className: "sm:max-w-[700px] max-h-[90vh] overflow-y-auto",
        children: [a.jsx(Xn, {
          children: a.jsx(Kn, {
            children: "Add New Tool"
          })
        }), a.jsx(vl, {
          ...S,
          children: a.jsxs("form", {
            onSubmit: S.handleSubmit($),
            className: "space-y-6",
            children: [a.jsxs("div", {
              className: "flex items-center justify-between p-4 bg-secondary/10 rounded-lg border",
              children: [a.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [a.jsx(FS, {
                  className: "w-5 h-5 text-primary"
                }), a.jsxs("div", {
                  children: [a.jsx("p", {
                    className: "font-medium",
                    children: "Use AI Research"
                  }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Let AI analyze the website and auto-populate tool details"
                  })]
                })]
              }), a.jsx(ea, {
                checked: o,
                onCheckedChange: l
              })]
            }), o ? a.jsxs("div", {
              className: "space-y-6",
              children: [a.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [a.jsx(qe, {
                  control: S.control,
                  name: "name",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Tool Name *"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        placeholder: "e.g., ChatGPT, Midjourney, Canva",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsx(qe, {
                  control: S.control,
                  name: "website_url",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Website URL *"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        placeholder: "https://toolname.com",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                })]
              }), a.jsx(qe, {
                control: S.control,
                name: "selectedCategories",
                render: ({
                  field: R
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Categories (Optional)"
                  }), a.jsxs("div", {
                    className: "space-y-4",
                    children: [a.jsx("div", {
                      className: "grid grid-cols-4 gap-3",
                      children: u.map(I => {
                        var k;
                        const A = ((k = R.value) == null ? void 0 : k
                          .includes(I.id)) || !1;
                        return a.jsx("div", {
                          onClick: () => {
                            const W = R.value || [];
                            A ? R.onChange(W.filter(G => G !== I
                              .id)) : R.onChange([...W, I.id])
                          },
                          className: `
                                  p-3 border rounded-lg cursor-pointer transition-all
                                  hover:shadow-sm hover:border-primary/50
                                  ${A?"border-primary bg-primary/5 shadow-sm":"border-border bg-background"}
                                `,
                          children: a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsx("div", {
                              className: `
                                    w-4 h-4 border rounded flex items-center justify-center
                                    ${A?"border-primary bg-primary text-primary-foreground":"border-muted-foreground"}
                                  `,
                              children: A && a.jsx(dr, {
                                className: "w-3 h-3"
                              })
                            }), a.jsxs("div", {
                              className: "flex items-center space-x-1 min-w-0",
                              children: [I.icon && a
                                .jsx("span", {
                                  className: "text-sm flex-shrink-0",
                                  children: I.icon
                                }), a.jsx("span", {
                                  className: "text-xs font-medium truncate",
                                  children: I.name
                                })
                              ]
                            })]
                          })
                        }, I.id)
                      })
                    }), R.value && R.value.length > 0 && a.jsxs("div", {
                      className: "text-sm text-muted-foreground",
                      children: [R.value.length, " categories selected"]
                    })]
                  }), a.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Select categories manually, or leave empty to use AI auto-assignment"
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: S.control,
                name: "aiContext",
                render: ({
                  field: R
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Tool Context (Optional)"
                  }), a.jsx(Ze, {
                    children: a.jsx(mn, {
                      placeholder: "Provide context about what to focus on during research (e.g., 'Look for pricing plans and free tier details', 'Focus on collaboration features', 'Check latest AI capabilities')",
                      className: "min-h-[80px]",
                      ...R
                    })
                  }), a.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Help the AI understand what aspects of the tool to focus on during research"
                  }), a.jsx(Je, {})]
                })
              }), a.jsxs(ue, {
                type: "button",
                onClick: j,
                disabled: h,
                className: "w-full",
                variant: "outline",
                children: [a.jsx(ds, {
                  className: "w-4 h-4 mr-2"
                }), h ? "Researching Tool..." : "Research with AI"]
              }), m && a.jsx("div", {
                className: "text-sm text-destructive bg-destructive/10 p-3 rounded-md",
                children: m
              }), S.watch("description") && a.jsxs("div", {
                className: "space-y-4 p-4 bg-accent/10 rounded-lg border",
                children: [a.jsx("p", {
                  className: "text-sm font-medium text-muted-foreground",
                  children: "✅ AI research completed. Review and edit the fields below before adding:"
                }), a.jsx(qe, {
                  control: S.control,
                  name: "description",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Description *"
                    }), a.jsx(Ze, {
                      children: a.jsx(mn, {
                        placeholder: "Brief overview of what this tool does and its main use cases...",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsx(qe, {
                  control: S.control,
                  name: "long_description",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Long Description"
                    }), a.jsx(Ze, {
                      children: a.jsx(mn, {
                        placeholder: "Comprehensive description including features, use cases, and unique capabilities...",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [a.jsx(qe, {
                    control: S.control,
                    name: "price",
                    render: ({
                      field: R
                    }) => a.jsxs(Ge, {
                      children: [a.jsx($e, {
                        children: "Price *"
                      }), a.jsx(Ze, {
                        children: a.jsx(Ie, {
                          placeholder: "e.g., Free, $9/month, $99/year, Freemium",
                          ...R
                        })
                      }), a.jsx(Je, {})]
                    })
                  }), a.jsx(qe, {
                    control: S.control,
                    name: "rating",
                    render: ({
                      field: R
                    }) => a.jsxs(Ge, {
                      children: [a.jsx($e, {
                        children: "Rating (0-5)"
                      }), a.jsx(Ze, {
                        children: a.jsx(Ie, {
                          type: "number",
                          min: "0",
                          max: "5",
                          step: "0.5",
                          ...R,
                          value: R.value || "",
                          onChange: I => R.onChange(I.target
                            .value ? Number(I.target.value) :
                            null)
                        })
                      }), a.jsx(Je, {})]
                    })
                  })]
                }), a.jsx(qe, {
                  control: S.control,
                  name: "popularity",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Popularity (Users)"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        type: "number",
                        min: "0",
                        ...R,
                        value: R.value || "",
                        onChange: I => R.onChange(I.target.value ?
                          Number(I.target.value) : null)
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsx(qe, {
                  control: S.control,
                  name: "logo_url",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Logo URL"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        placeholder: "https://toolname.com/logo.png",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsx(qe, {
                  control: S.control,
                  name: "selectedCategories",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Categories (Optional)"
                    }), a.jsxs("div", {
                      className: "space-y-4",
                      children: [a.jsx("div", {
                        className: "grid grid-cols-4 gap-3",
                        children: u.map(I => {
                          var k;
                          const A = ((k = R.value) == null ?
                            void 0 : k.includes(I.id)) || !1;
                          return a.jsx("div", {
                            onClick: () => {
                              const W = R.value || [];
                              A ? R.onChange(W.filter(G =>
                                  G !== I.id)) : R
                                .onChange([...W, I.id])
                            },
                            className: `
                                       p-3 border rounded-lg cursor-pointer transition-all
                                       hover:shadow-sm hover:border-primary/50
                                       ${A?"border-primary bg-primary/5 shadow-sm":"border-border bg-background"}
                                     `,
                            children: a.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [a.jsx("div", {
                                className: `
                                         w-4 h-4 border rounded flex items-center justify-center
                                         ${A?"border-primary bg-primary text-primary-foreground":"border-muted-foreground"}
                                       `,
                                children: A && a
                                  .jsx(dr, {
                                    className: "w-3 h-3"
                                  })
                              }), a.jsxs("div", {
                                className: "flex items-center space-x-1 min-w-0",
                                children: [I
                                  .icon && a
                                  .jsx("span", {
                                    className: "text-sm flex-shrink-0",
                                    children: I
                                      .icon
                                  }), a.jsx(
                                    "span", {
                                      className: "text-xs font-medium truncate",
                                      children: I
                                        .name
                                    })
                                ]
                              })]
                            })
                          }, I.id)
                        })
                      }), R.value && R.value.length > 0 && a.jsxs(
                        "div", {
                          className: "text-sm text-muted-foreground",
                          children: [R.value.length,
                            " categories selected"
                          ]
                        })]
                    }), a.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "Select categories manually, or leave empty to use AI auto-assignment"
                    }), a.jsx(Je, {})]
                  })
                }), a.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [a.jsxs("div", {
                    children: [a.jsxs($e, {
                      children: ["Pros (", E.length, ")"]
                    }), a.jsx("div", {
                      className: "mt-2 space-y-2",
                      children: E.map((R, I) => a.jsx("div", {
                        className: "text-sm p-2 bg-green-50 dark:bg-green-950/20 rounded border text-green-800 dark:text-green-200",
                        children: S.watch(`pros.${I}.value`) ||
                          "Empty"
                      }, R.id))
                    })]
                  }), a.jsxs("div", {
                    children: [a.jsxs($e, {
                      children: ["Cons (", C.length, ")"]
                    }), a.jsx("div", {
                      className: "mt-2 space-y-2",
                      children: C.map((R, I) => a.jsx("div", {
                        className: "text-sm p-2 bg-red-50 dark:bg-red-950/20 rounded border text-red-800 dark:text-red-200",
                        children: S.watch(`cons.${I}.value`) ||
                          "Empty"
                      }, R.id))
                    })]
                  })]
                })]
              })]
            }) : a.jsxs("div", {
              className: "space-y-6",
              children: [a.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [a.jsx(qe, {
                  control: S.control,
                  name: "name",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Name *"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        placeholder: "e.g., ChatGPT, Midjourney, Canva",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsx(qe, {
                  control: S.control,
                  name: "price",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Price *"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        placeholder: "e.g., Free, $9/month, $99/year, Freemium",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                })]
              }), a.jsx(qe, {
                control: S.control,
                name: "description",
                render: ({
                  field: R
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Description *"
                  }), a.jsx(Ze, {
                    children: a.jsx(mn, {
                      placeholder: "Brief overview of what this tool does and its main use cases...",
                      ...R
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: S.control,
                name: "selectedCategories",
                render: ({
                  field: R
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Categories (Optional)"
                  }), a.jsxs("div", {
                    className: "space-y-4",
                    children: [a.jsx("div", {
                      className: "grid grid-cols-4 gap-3",
                      children: u.map(I => {
                        var k;
                        const A = ((k = R.value) == null ? void 0 : k
                          .includes(I.id)) || !1;
                        return a.jsx("div", {
                          onClick: () => {
                            const W = R.value || [];
                            A ? R.onChange(W.filter(G => G !== I
                              .id)) : R.onChange([...W, I.id])
                          },
                          className: `
                                  p-3 border rounded-lg cursor-pointer transition-all
                                  hover:shadow-sm hover:border-primary/50
                                  ${A?"border-primary bg-primary/5 shadow-sm":"border-border bg-background"}
                                `,
                          children: a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsx("div", {
                              className: `
                                    w-4 h-4 border rounded flex items-center justify-center
                                    ${A?"border-primary bg-primary text-primary-foreground":"border-muted-foreground"}
                                  `,
                              children: A && a.jsx(dr, {
                                className: "w-3 h-3"
                              })
                            }), a.jsxs("div", {
                              className: "flex items-center space-x-1 min-w-0",
                              children: [I.icon && a
                                .jsx("span", {
                                  className: "text-sm flex-shrink-0",
                                  children: I.icon
                                }), a.jsx("span", {
                                  className: "text-xs font-medium truncate",
                                  children: I.name
                                })
                              ]
                            })]
                          })
                        }, I.id)
                      })
                    }), R.value && R.value.length > 0 && a.jsxs("div", {
                      className: "text-sm text-muted-foreground",
                      children: [R.value.length, " categories selected"]
                    })]
                  }), a.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Select categories manually, or leave empty to use AI auto-assignment"
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: S.control,
                name: "long_description",
                render: ({
                  field: R
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Long Description"
                  }), a.jsx(Ze, {
                    children: a.jsx(mn, {
                      placeholder: "Comprehensive description including features, use cases, and unique capabilities...",
                      ...R
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: S.control,
                name: "adams_take",
                render: ({
                  field: R
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Adam's Take"
                  }), a.jsx(Ze, {
                    children: a.jsx(mn, {
                      placeholder: "Personal insights, opinions, or recommendations about this tool...",
                      ...R
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [a.jsx(qe, {
                  control: S.control,
                  name: "website_url",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Website URL"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        placeholder: "https://toolname.com",
                        ...R
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsxs("div", {
                  className: "space-y-4",
                  children: [a.jsx($e, {
                    children: "Logo"
                  }), a.jsxs("div", {
                    children: [a.jsx("input", {
                      type: "file",
                      accept: "image/*",
                      onChange: async R => {
                        var A;
                        const I = (A = R.target.files) == null ?
                          void 0 : A[0];
                        if (I) {
                          const k = await g(I, S.getValues("name") ||
                            "tool");
                          k.success && k.url ? (d(k.url), S.setValue(
                            "logo_url", k.url), vt({
                            title: "Logo uploaded successfully",
                            description: "Your logo has been uploaded and will be used for the tool."
                          })) : vt({
                            title: "Upload failed",
                            description: k.error ||
                              "Failed to upload logo",
                            variant: "destructive"
                          })
                        }
                      },
                      disabled: p,
                      className: "hidden",
                      id: "logo-upload"
                    }), a.jsx("label", {
                      htmlFor: "logo-upload",
                      className: "flex items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-muted-foreground/50 transition-colors",
                      children: c ? a.jsxs("div", {
                        className: "relative w-full h-full flex items-center justify-center",
                        children: [a.jsx("img", {
                          src: c,
                          alt: "Uploaded logo",
                          className: "max-w-full max-h-full object-contain rounded"
                        }), a.jsx(ue, {
                          type: "button",
                          variant: "destructive",
                          size: "sm",
                          className: "absolute top-2 right-2",
                          onClick: R => {
                            R.preventDefault(), d(null), S
                              .setValue("logo_url", "")
                          },
                          children: a.jsx(Ri, {
                            className: "w-4 h-4"
                          })
                        })]
                      }) : a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsx(ou, {
                          className: "w-8 h-8 mx-auto mb-2 text-muted-foreground"
                        }), a.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: p ? "Uploading..." :
                            "Click to upload logo"
                        }), a.jsx("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "PNG, JPG, SVG, WEBP (max 2MB)"
                        })]
                      })
                    }), _ && a.jsx("p", {
                      className: "text-sm text-destructive mt-1",
                      children: _
                    })]
                  }), a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [a.jsx("div", {
                      className: "flex-1 h-px bg-border"
                    }), a.jsx("span", {
                      className: "text-sm text-muted-foreground",
                      children: "OR"
                    }), a.jsx("div", {
                      className: "flex-1 h-px bg-border"
                    })]
                  }), a.jsx(qe, {
                    control: S.control,
                    name: "logo_url",
                    render: ({
                      field: R
                    }) => a.jsxs(Ge, {
                      children: [a.jsx($e, {
                        children: "Logo URL"
                      }), a.jsx(Ze, {
                        children: a.jsx(Ie, {
                          placeholder: "https://toolname.com/logo.png",
                          ...R,
                          onChange: I => {
                            R.onChange(I), I.target.value &&
                              c && d(null)
                          }
                        })
                      }), a.jsx(Je, {})]
                    })
                  })]
                })]
              }), a.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [a.jsx(qe, {
                  control: S.control,
                  name: "rating",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Rating (0-5)"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        type: "number",
                        min: "0",
                        max: "5",
                        step: "0.5",
                        ...R,
                        value: R.value || "",
                        onChange: I => R.onChange(I.target.value ?
                          Number(I.target.value) : null)
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsx(qe, {
                  control: S.control,
                  name: "popularity",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Popularity (Users)"
                    }), a.jsx(Ze, {
                      children: a.jsx(Ie, {
                        type: "number",
                        min: "0",
                        ...R,
                        value: R.value || "",
                        onChange: I => R.onChange(I.target.value ?
                          Number(I.target.value) : null)
                      })
                    }), a.jsx(Je, {})]
                  })
                })]
              }), a.jsxs("div", {
                children: [a.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [a.jsx($e, {
                    children: "Pros"
                  }), a.jsxs(ue, {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => T({
                      value: ""
                    }),
                    children: [a.jsx(Lr, {
                      className: "w-4 h-4 mr-1"
                    }), "Add Pro"]
                  })]
                }), a.jsx("div", {
                  className: "space-y-2",
                  children: E.map((R, I) => a.jsxs("div", {
                    className: "flex gap-2",
                    children: [a.jsx(qe, {
                      control: S.control,
                      name: `pros.${I}.value`,
                      render: ({
                        field: A
                      }) => a.jsxs(Ge, {
                        className: "flex-1",
                        children: [a.jsx(Ze, {
                          children: a.jsx(Ie, {
                            placeholder: "e.g., Intuitive interface, Fast processing, Great customer support",
                            ...A
                          })
                        }), a.jsx(Je, {})]
                      })
                    }), E.length > 1 && a.jsx(ue, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => P(I),
                      children: a.jsx(qn, {
                        className: "w-4 h-4"
                      })
                    })]
                  }, R.id))
                })]
              }), a.jsxs("div", {
                children: [a.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [a.jsx($e, {
                    children: "Cons"
                  }), a.jsxs(ue, {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => M({
                      value: ""
                    }),
                    children: [a.jsx(Lr, {
                      className: "w-4 h-4 mr-1"
                    }), "Add Con"]
                  })]
                }), a.jsx("div", {
                  className: "space-y-2",
                  children: C.map((R, I) => a.jsxs("div", {
                    className: "flex gap-2",
                    children: [a.jsx(qe, {
                      control: S.control,
                      name: `cons.${I}.value`,
                      render: ({
                        field: A
                      }) => a.jsxs(Ge, {
                        className: "flex-1",
                        children: [a.jsx(Ze, {
                          children: a.jsx(Ie, {
                            placeholder: "e.g., Expensive pricing, Limited features, Steep learning curve",
                            ...A
                          })
                        }), a.jsx(Je, {})]
                      })
                    }), C.length > 1 && a.jsx(ue, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => L(I),
                      children: a.jsx(qn, {
                        className: "w-4 h-4"
                      })
                    })]
                  }, R.id))
                })]
              }), a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsx(qe, {
                  control: S.control,
                  name: "is_verified",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    className: "flex items-center justify-between",
                    children: [a.jsx($e, {
                      children: "Verified Tool"
                    }), a.jsx(Ze, {
                      children: a.jsx(ea, {
                        checked: R.value,
                        onCheckedChange: R.onChange
                      })
                    })]
                  })
                }), a.jsx(qe, {
                  control: S.control,
                  name: "is_trending",
                  render: ({
                    field: R
                  }) => a.jsxs(Ge, {
                    className: "flex items-center justify-between",
                    children: [a.jsx($e, {
                      children: "Trending"
                    }), a.jsx(Ze, {
                      children: a.jsx(ea, {
                        checked: R.value,
                        onCheckedChange: R.onChange
                      })
                    })]
                  })
                })]
              })]
            }), a.jsxs("div", {
              className: "flex justify-end space-x-4",
              children: [a.jsx(ue, {
                type: "button",
                variant: "outline",
                onClick: F,
                children: "Cancel"
              }), a.jsx(ue, {
                type: "submit",
                disabled: s || h,
                children: s ? "Adding..." : "Add Tool"
              })]
            })]
          })
        })]
      })
    })
  };
var Bx = "Checkbox",
  [oae, Jle] = Jn(Bx),
  [lae, mE] = oae(Bx);

function cae(t) {
  const {
    __scopeCheckbox: e,
    checked: n,
    children: r,
    defaultChecked: s,
    disabled: i,
    form: o,
    name: l,
    onCheckedChange: c,
    required: d,
    value: u = "on",
    internal_do_not_use_render: f
  } = t, [h, m] = cs({
      prop: n,
      defaultProp: s ?? !1,
      onChange: c,
      caller: Bx
    }), [y, v] = x.useState(null), [g, p] = x.useState(null), _ = x.useRef(!1), w = y ? !!o || !!y.closest("form") : !0,
    b = {
      checked: h,
      disabled: i,
      setChecked: m,
      control: y,
      setControl: v,
      name: l,
      form: o,
      value: u,
      hasConsumerStoppedPropagationRef: _,
      required: d,
      defaultChecked: Yo(s) ? !1 : s,
      isFormControl: w,
      bubbleInput: g,
      setBubbleInput: p
    };
  return a.jsx(lae, {
    scope: e,
    ...b,
    children: dae(f) ? f(b) : r
  })
}
var xF = "CheckboxTrigger",
  yF = x.forwardRef(({
    __scopeCheckbox: t,
    onKeyDown: e,
    onClick: n,
    ...r
  }, s) => {
    const {
      control: i,
      value: o,
      disabled: l,
      checked: c,
      required: d,
      setControl: u,
      setChecked: f,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: m,
      bubbleInput: y
    } = mE(xF, t), v = xt(s, u), g = x.useRef(c);
    return x.useEffect(() => {
      const p = i == null ? void 0 : i.form;
      if (p) {
        const _ = () => f(g.current);
        return p.addEventListener("reset", _), () => p.removeEventListener("reset", _)
      }
    }, [i, f]), a.jsx(ke.button, {
      type: "button",
      role: "checkbox",
      "aria-checked": Yo(c) ? "mixed" : c,
      "aria-required": d,
      "data-state": EF(c),
      "data-disabled": l ? "" : void 0,
      disabled: l,
      value: o,
      ...r,
      ref: v,
      onKeyDown: Se(e, p => {
        p.key === "Enter" && p.preventDefault()
      }),
      onClick: Se(n, p => {
        f(_ => Yo(_) ? !0 : !_), y && m && (h.current = p.isPropagationStopped(), h.current || p
          .stopPropagation())
      })
    })
  });
yF.displayName = xF;
var pE = x.forwardRef((t, e) => {
  const {
    __scopeCheckbox: n,
    name: r,
    checked: s,
    defaultChecked: i,
    required: o,
    disabled: l,
    value: c,
    onCheckedChange: d,
    form: u,
    ...f
  } = t;
  return a.jsx(cae, {
    __scopeCheckbox: n,
    checked: s,
    defaultChecked: i,
    disabled: l,
    required: o,
    onCheckedChange: d,
    name: r,
    form: u,
    value: c,
    internal_do_not_use_render: ({
      isFormControl: h
    }) => a.jsxs(a.Fragment, {
      children: [a.jsx(yF, {
        ...f,
        ref: e,
        __scopeCheckbox: n
      }), h && a.jsx(SF, {
        __scopeCheckbox: n
      })]
    })
  })
});
pE.displayName = Bx;
var _F = "CheckboxIndicator",
  wF = x.forwardRef((t, e) => {
    const {
      __scopeCheckbox: n,
      forceMount: r,
      ...s
    } = t, i = mE(_F, n);
    return a.jsx(er, {
      present: r || Yo(i.checked) || i.checked === !0,
      children: a.jsx(ke.span, {
        "data-state": EF(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...s,
        ref: e,
        style: {
          pointerEvents: "none",
          ...t.style
        }
      })
    })
  });
wF.displayName = _F;
var bF = "CheckboxBubbleInput",
  SF = x.forwardRef(({
    __scopeCheckbox: t,
    ...e
  }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: s,
      checked: i,
      defaultChecked: o,
      required: l,
      disabled: c,
      name: d,
      value: u,
      form: f,
      bubbleInput: h,
      setBubbleInput: m
    } = mE(bF, t), y = xt(n, m), v = V1(i), g = XS(r);
    x.useEffect(() => {
      const _ = h;
      if (!_) return;
      const w = window.HTMLInputElement.prototype,
        S = Object.getOwnPropertyDescriptor(w, "checked").set,
        E = !s.current;
      if (v !== i && S) {
        const T = new Event("click", {
          bubbles: E
        });
        _.indeterminate = Yo(i), S.call(_, Yo(i) ? !1 : i), _.dispatchEvent(T)
      }
    }, [h, v, i, s]);
    const p = x.useRef(Yo(i) ? !1 : i);
    return a.jsx(ke.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o ?? p.current,
      required: l,
      disabled: c,
      name: d,
      value: u,
      form: f,
      ...e,
      tabIndex: -1,
      ref: y,
      style: {
        ...e.style,
        ...g,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)"
      }
    })
  });
SF.displayName = bF;

function dae(t) {
  return typeof t == "function"
}

function Yo(t) {
  return t === "indeterminate"
}

function EF(t) {
  return Yo(t) ? "indeterminate" : t ? "checked" : "unchecked"
}
const li = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx(pE, {
  ref: n,
  className: de(
    "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    t),
  ...e,
  children: a.jsx(wF, {
    className: de("flex items-center justify-center text-current"),
    children: a.jsx(dr, {
      className: "h-4 w-4"
    })
  })
}));
li.displayName = pE.displayName;
const uae = ls({
    name: ht().min(1, "Name is required"),
    description: ht().min(1, "Description is required"),
    long_description: ht().optional(),
    price: ht().min(1, "Price is required"),
    rating: Ji().min(0).max(5).multipleOf(.5).nullable(),
    popularity: Ji().min(0).nullable(),
    website_url: ht().url().optional().or(Nu("")),
    logo_url: ht().url().optional().or(Nu("")),
    is_verified: rl(),
    is_trending: rl(),
    aiContext: ht().optional(),
    pros: qo(ls({
      value: ht().min(1, "Pro cannot be empty")
    })),
    cons: qo(ls({
      value: ht().min(1, "Con cannot be empty")
    }))
  }),
  fae = ({
    isOpen: t,
    onClose: e,
    tool: n
  }) => {
    var L, D, $;
    const r = Dn(),
      s = As(),
      [i, o] = x.useState(!1),
      [l, c] = x.useState(null),
      [d, u] = x.useState({
        description: !1,
        long_description: !1,
        price: !1,
        rating: !1,
        popularity: !1,
        logo_url: !1,
        is_verified: !1,
        is_trending: !1,
        pros: !1,
        cons: !1
      }),
      {
        researchTool: f,
        isResearching: h,
        researchError: m,
        resetResearch: y
      } = vF(),
      {
        uploadLogo: v,
        isUploading: g,
        uploadError: p,
        resetUpload: _
      } = fE(),
      w = pl({
        resolver: gl(uae),
        defaultValues: {
          name: n.name,
          description: n.description,
          long_description: n.long_description || "",
          price: n.price,
          rating: n.rating,
          popularity: n.popularity,
          website_url: n.website_url || "",
          logo_url: n.logo_url || "",
          is_verified: n.is_verified || !1,
          is_trending: n.is_trending || !1,
          aiContext: "",
          pros: (n.pros || []).map(j => ({
            value: j
          })),
          cons: (n.cons || []).map(j => ({
            value: j
          }))
        }
      }),
      {
        fields: b
      } = _u({
        control: w.control,
        name: "pros"
      }),
      {
        fields: S
      } = _u({
        control: w.control,
        name: "cons"
      }),
      E = tn({
        mutationFn: async j => {
          const F = j.pros.map(k => k.value).filter(k => k.trim() !== ""),
            R = j.cons.map(k => k.value).filter(k => k.trim() !== ""),
            I = {};
          d.description && (I.description = j.description), d.long_description && (I.long_description = j
              .long_description || null), d.price && (I.price = j.price), d.rating && (I.rating = j.rating), d
            .popularity && (I.popularity = j.popularity), d.logo_url && (I.logo_url = j.logo_url || null), d
            .is_verified && (I.is_verified = j.is_verified), d.is_trending && (I.is_trending = j.is_trending), d
            .pros && (I.pros = F.length > 0 ? F : null), d.cons && (I.cons = R.length > 0 ? R : null);
          const {
            error: A
          } = await r.from("tools").update(I).eq("id", n.id);
          if (A) throw A
        },
        onSuccess: () => {
          s.invalidateQueries({
            queryKey: ["tools"]
          }), vt({
            title: "Success",
            description: "Tool updated successfully."
          }), C()
        },
        onError: j => {
          console.error("Error updating tool:", j), vt({
            title: "Error",
            description: "Failed to update tool.",
            variant: "destructive"
          })
        }
      }),
      T = async () => {
        if (!n.website_url) {
          vt({
            title: "Missing Website URL",
            description: "This tool needs a website URL for AI research.",
            variant: "destructive"
          });
          return
        }
        y();
        const j = w.getValues("aiContext"),
          F = await f(n.name, n.website_url, j);
        if (F.success && F.toolData) {
          const R = F.toolData;
          w.setValue("description", R.description), w.setValue("long_description", R.long_description), w.setValue(
            "price", R.price), w.setValue("rating", R.rating), w.setValue("popularity", R.popularity), w.setValue(
            "logo_url", R.logo_url), w.setValue("is_verified", R.is_verified), w.setValue("is_trending", R
            .is_trending), w.setValue("pros", R.pros.map(A => ({
            value: A
          }))), w.setValue("cons", R.cons.map(A => ({
            value: A
          })));
          const I = {
            description: R.description !== n.description,
            long_description: R.long_description !== (n.long_description || ""),
            price: R.price !== n.price,
            rating: R.rating !== n.rating,
            popularity: R.popularity !== n.popularity,
            logo_url: R.logo_url !== (n.logo_url || ""),
            is_verified: R.is_verified !== (n.is_verified || !1),
            is_trending: R.is_trending !== (n.is_trending || !1),
            pros: JSON.stringify(R.pros) !== JSON.stringify(n.pros || []),
            cons: JSON.stringify(R.cons) !== JSON.stringify(n.cons || [])
          };
          u(I), o(!0), vt({
            title: "AI Research Complete",
            description: "Review the changes and select which fields to update."
          })
        } else vt({
          title: "Research Failed",
          description: F.error || "Unable to research tool with AI.",
          variant: "destructive"
        })
      }, P = async j => {
        if (!Object.values(d).some(R => R)) {
          vt({
            title: "No Updates Selected",
            description: "Please select at least one field to update.",
            variant: "destructive"
          });
          return
        }
        E.mutate(j)
      }, C = () => {
        o(!1), u({
          description: !1,
          long_description: !1,
          price: !1,
          rating: !1,
          popularity: !1,
          logo_url: !1,
          is_verified: !1,
          is_trending: !1,
          pros: !1,
          cons: !1
        }), y(), e()
      }, M = (j, F, R) => {
        if (j === "pros" || j === "cons") {
          const I = Array.isArray(F) ? F.map(k => k.value || k) : [],
            A = Array.isArray(R) ? R : [];
          return JSON.stringify(I) !== JSON.stringify(A)
        }
        return F !== R
      };
    return a.jsx(fr, {
      open: t,
      onOpenChange: C,
      children: a.jsxs(ir, {
        className: "sm:max-w-[900px] max-h-[90vh] overflow-y-auto",
        children: [a.jsx(Xn, {
          children: a.jsxs(Kn, {
            children: ["AI Update Tool: ", n.name]
          })
        }), a.jsx(vl, {
          ...w,
          children: a.jsxs("form", {
            onSubmit: w.handleSubmit(P),
            className: "space-y-6",
            children: [a.jsxs(je, {
              children: [a.jsx(qt, {
                children: a.jsx(Yt, {
                  className: "text-sm",
                  children: "Current Tool Information"
                })
              }), a.jsxs(Ve, {
                className: "text-sm text-muted-foreground space-y-2",
                children: [a.jsxs("div", {
                  children: ["Website: ", n.website_url || "No website URL"]
                }), a.jsxs("div", {
                  children: ["Price: ", n.price]
                }), a.jsxs("div", {
                  children: ["Rating: ", n.rating || "Not rated"]
                }), a.jsxs("div", {
                  children: ["Popularity: ", ((L = n.popularity) == null ? void 0 :
                    L.toLocaleString()) || "Unknown"]
                }), a.jsxs("div", {
                  className: "flex gap-2",
                  children: [n.is_verified && a.jsx(tt, {
                    variant: "secondary",
                    children: "Verified"
                  }), n.is_trending && a.jsx(tt, {
                    variant: "secondary",
                    children: "Trending"
                  })]
                })]
              })]
            }), a.jsxs(je, {
              children: [a.jsx(qt, {
                children: a.jsxs(Yt, {
                  className: "text-sm flex items-center gap-2",
                  children: [a.jsx(FS, {
                    className: "w-4 h-4"
                  }), "AI Research"]
                })
              }), a.jsxs(Ve, {
                className: "space-y-4",
                children: [!n.website_url && a.jsxs("div", {
                  className: "flex items-center gap-2 text-sm text-destructive",
                  children: [a.jsx(rw, {
                    className: "w-4 h-4"
                  }), "Website URL required for AI research"]
                }), a.jsx(qe, {
                  control: w.control,
                  name: "aiContext",
                  render: ({
                    field: j
                  }) => a.jsxs(Ge, {
                    children: [a.jsx($e, {
                      children: "Research Context (Optional)"
                    }), a.jsx(Ze, {
                      children: a.jsx(mn, {
                        placeholder: "Provide additional context for AI research (e.g., 'Check latest pricing updates', 'Focus on new features released in 2025')",
                        className: "min-h-[60px]",
                        ...j
                      })
                    }), a.jsx(Je, {})]
                  })
                }), a.jsxs(ue, {
                  type: "button",
                  onClick: T,
                  disabled: h || !n.website_url,
                  className: "w-full",
                  variant: "outline",
                  children: [a.jsx(tm, {
                    className: `w-4 h-4 mr-2 ${h?"animate-spin":""}`
                  }), h ? "Researching Latest Info..." : "Research Latest Info"]
                }), m && a.jsx("div", {
                  className: "text-sm text-destructive bg-destructive/10 p-3 rounded-md",
                  children: m
                })]
              })]
            }), i && a.jsxs(je, {
              children: [a.jsx(qt, {
                children: a.jsxs(Yt, {
                  className: "text-sm flex items-center gap-2",
                  children: [a.jsx(au, {
                    className: "w-4 h-4 text-green-600"
                  }), "Select Fields to Update"]
                })
              }), a.jsxs(Ve, {
                className: "space-y-4",
                children: [a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "description",
                      checked: d.description,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        description: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "description",
                      className: "text-sm font-medium",
                      children: ["Description ", M("description", w
                          .watch("description"), n.description) && a
                        .jsx(tt, {
                          variant: "outline",
                          className: "ml-2",
                          children: "Changed"
                        })
                      ]
                    })]
                  }), d.description && a.jsx(qe, {
                    control: w.control,
                    name: "description",
                    render: ({
                      field: j
                    }) => a.jsxs(Ge, {
                      children: [a.jsx(Ze, {
                        children: a.jsx(mn, {
                          ...j,
                          className: "min-h-[80px]"
                        })
                      }), a.jsx(Je, {})]
                    })
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "long_description",
                      checked: d.long_description,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        long_description: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "long_description",
                      className: "text-sm font-medium",
                      children: ["Long Description ", M(
                        "long_description", w.watch(
                          "long_description"), n.long_description ||
                        "") && a.jsx(tt, {
                        variant: "outline",
                        className: "ml-2",
                        children: "Changed"
                      })]
                    })]
                  }), d.long_description && a.jsx(qe, {
                    control: w.control,
                    name: "long_description",
                    render: ({
                      field: j
                    }) => a.jsxs(Ge, {
                      children: [a.jsx(Ze, {
                        children: a.jsx(mn, {
                          ...j,
                          className: "min-h-[120px]"
                        })
                      }), a.jsx(Je, {})]
                    })
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "price",
                      checked: d.price,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        price: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "price",
                      className: "text-sm font-medium",
                      children: ["Price ", M("price", w.watch("price"),
                        n.price) && a.jsx(tt, {
                        variant: "outline",
                        className: "ml-2",
                        children: "Changed"
                      })]
                    })]
                  }), d.price && a.jsxs("div", {
                    className: "flex gap-2 text-sm",
                    children: [a.jsxs("span", {
                      className: "text-muted-foreground",
                      children: ["Current: ", n.price]
                    }), a.jsx("span", {
                      children: "→"
                    }), a.jsxs("span", {
                      className: "font-medium",
                      children: ["New: ", w.watch("price")]
                    })]
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "rating",
                      checked: d.rating,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        rating: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "rating",
                      className: "text-sm font-medium",
                      children: ["Rating ", M("rating", w.watch(
                        "rating"), n.rating) && a.jsx(tt, {
                        variant: "outline",
                        className: "ml-2",
                        children: "Changed"
                      })]
                    })]
                  }), d.rating && a.jsx(qe, {
                    control: w.control,
                    name: "rating",
                    render: ({
                      field: j
                    }) => a.jsxs(Ge, {
                      children: [a.jsx(Ze, {
                        children: a.jsx(Ie, {
                          type: "number",
                          step: "0.5",
                          min: "0",
                          max: "5",
                          placeholder: "Enter rating (0.0 to 5.0)",
                          ...j,
                          value: j.value || "",
                          onChange: F => j.onChange(F.target
                            .value ? parseFloat(F.target
                              .value) : null)
                        })
                      }), a.jsx(Je, {})]
                    })
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "popularity",
                      checked: d.popularity,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        popularity: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "popularity",
                      className: "text-sm font-medium",
                      children: ["Popularity ", M("popularity", w.watch(
                        "popularity"), n.popularity) && a.jsx(tt, {
                        variant: "outline",
                        className: "ml-2",
                        children: "Changed"
                      })]
                    })]
                  }), d.popularity && a.jsxs("div", {
                    className: "flex gap-2 text-sm",
                    children: [a.jsxs("span", {
                      className: "text-muted-foreground",
                      children: ["Current: ", ((D = n.popularity) ==
                          null ? void 0 : D.toLocaleString()) ||
                        "Unknown"
                      ]
                    }), a.jsx("span", {
                      children: "→"
                    }), a.jsxs("span", {
                      className: "font-medium",
                      children: ["New: ", (($ = w.watch(
                        "popularity")) == null ? void 0 : $
                        .toLocaleString()) || "Unknown"]
                    })]
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "is_trending",
                      checked: d.is_trending,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        is_trending: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "is_trending",
                      className: "text-sm font-medium",
                      children: ["Trending Status ", M("is_trending", w
                          .watch("is_trending"), n.is_trending || !1
                          ) && a.jsx(tt, {
                          variant: "outline",
                          className: "ml-2",
                          children: "Changed"
                        })
                      ]
                    })]
                  }), d.is_trending && a.jsxs("div", {
                    className: "flex gap-2 text-sm",
                    children: [a.jsxs("span", {
                      className: "text-muted-foreground",
                      children: ["Current: ", n.is_trending ?
                        "Trending" : "Not Trending"
                      ]
                    }), a.jsx("span", {
                      children: "→"
                    }), a.jsxs("span", {
                      className: "font-medium",
                      children: ["New: ", w.watch("is_trending") ?
                        "Trending" : "Not Trending"
                      ]
                    })]
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "is_verified",
                      checked: d.is_verified,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        is_verified: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "is_verified",
                      className: "text-sm font-medium",
                      children: ["Verified Status ", M("is_verified", w
                          .watch("is_verified"), n.is_verified || !1
                          ) && a.jsx(tt, {
                          variant: "outline",
                          className: "ml-2",
                          children: "Changed"
                        })
                      ]
                    })]
                  }), d.is_verified && a.jsxs("div", {
                    className: "flex gap-2 text-sm",
                    children: [a.jsxs("span", {
                      className: "text-muted-foreground",
                      children: ["Current: ", n.is_verified ?
                        "Verified" : "Not Verified"
                      ]
                    }), a.jsx("span", {
                      children: "→"
                    }), a.jsxs("span", {
                      className: "font-medium",
                      children: ["New: ", w.watch("is_verified") ?
                        "Verified" : "Not Verified"
                      ]
                    })]
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "logo_url",
                      checked: d.logo_url,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        logo_url: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "logo_url",
                      className: "text-sm font-medium",
                      children: ["Logo URL ", M("logo_url", w.watch(
                        "logo_url"), n.logo_url || "") && a.jsx(
                      tt, {
                        variant: "outline",
                        className: "ml-2",
                        children: "Changed"
                      })]
                    })]
                  }), d.logo_url && a.jsxs("div", {
                    className: "space-y-4 p-4 border rounded-lg",
                    children: [a.jsx($e, {
                      children: "Update Logo"
                    }), a.jsxs("div", {
                      children: [a.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: async j => {
                          var R;
                          const F = (R = j.target.files) ==
                            null ? void 0 : R[0];
                          if (F) {
                            const I = await v(F, w.getValues(
                              "name") || "tool");
                            I.success && I.url ? (c(I.url), w
                              .setValue("logo_url", I.url),
                              vt({
                                title: "Logo uploaded successfully",
                                description: "Your logo has been uploaded and will be used for the tool."
                              })) : vt({
                              title: "Upload failed",
                              description: I.error ||
                                "Failed to upload logo",
                              variant: "destructive"
                            })
                          }
                        },
                        disabled: g,
                        className: "hidden",
                        id: "logo-upload-update"
                      }), a.jsx("label", {
                        htmlFor: "logo-upload-update",
                        className: "flex items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-muted-foreground/50 transition-colors",
                        children: l || n.logo_url ? a.jsxs(
                        "div", {
                          className: "relative w-full h-full flex items-center justify-center",
                          children: [a.jsx("img", {
                            src: l || n.logo_url,
                            alt: "Tool logo",
                            className: "max-w-full max-h-full object-contain rounded"
                          }), a.jsx(ue, {
                            type: "button",
                            variant: "destructive",
                            size: "sm",
                            className: "absolute top-2 right-2",
                            onClick: j => {
                              j.preventDefault(), c(
                                null), w.setValue(
                                "logo_url", "")
                            },
                            children: a.jsx(Ri, {
                              className: "w-4 h-4"
                            })
                          })]
                        }) : a.jsxs("div", {
                          className: "text-center",
                          children: [a.jsx(ou, {
                            className: "w-8 h-8 mx-auto mb-2 text-muted-foreground"
                          }), a.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: g ?
                              "Uploading..." :
                              "Click to upload logo"
                          }), a.jsx("p", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: "PNG, JPG, SVG, WEBP (max 2MB)"
                          })]
                        })
                      }), p && a.jsx("p", {
                        className: "text-sm text-destructive mt-1",
                        children: p
                      })]
                    }), a.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [a.jsx("div", {
                        className: "flex-1 h-px bg-border"
                      }), a.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: "OR"
                      }), a.jsx("div", {
                        className: "flex-1 h-px bg-border"
                      })]
                    }), a.jsx(qe, {
                      control: w.control,
                      name: "logo_url",
                      render: ({
                        field: j
                      }) => a.jsxs(Ge, {
                        children: [a.jsx($e, {
                          children: "Logo URL"
                        }), a.jsx(Ze, {
                          children: a.jsx(Ie, {
                            placeholder: "https://example.com/logo.png",
                            ...j,
                            onChange: F => {
                              j.onChange(F), F.target
                                .value && l && c(null)
                            }
                          })
                        }), a.jsx(Je, {})]
                      })
                    })]
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "pros",
                      checked: d.pros,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        pros: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "pros",
                      className: "text-sm font-medium",
                      children: ["Pros (", b.length, ") ", M("pros", w
                        .watch("pros"), n.pros || []) && a.jsx(tt, {
                        variant: "outline",
                        className: "ml-2",
                        children: "Changed"
                      })]
                    })]
                  }), d.pros && b.length > 0 && a.jsx("div", {
                    className: "space-y-1 max-h-32 overflow-y-auto",
                    children: b.map((j, F) => a.jsx("div", {
                      className: "text-xs p-2 bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-200 rounded border",
                      children: w.watch(`pros.${F}.value`)
                    }, j.id))
                  })]
                }), a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(li, {
                      id: "cons",
                      checked: d.cons,
                      onCheckedChange: j => u(F => ({
                        ...F,
                        cons: !!j
                      }))
                    }), a.jsxs("label", {
                      htmlFor: "cons",
                      className: "text-sm font-medium",
                      children: ["Cons (", S.length, ") ", M("cons", w
                        .watch("cons"), n.cons || []) && a.jsx(tt, {
                        variant: "outline",
                        className: "ml-2",
                        children: "Changed"
                      })]
                    })]
                  }), d.cons && S.length > 0 && a.jsx("div", {
                    className: "space-y-1 max-h-32 overflow-y-auto",
                    children: S.map((j, F) => a.jsx("div", {
                      className: "text-xs p-2 bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-200 rounded border",
                      children: w.watch(`cons.${F}.value`)
                    }, j.id))
                  })]
                })]
              })]
            }), a.jsxs("div", {
              className: "flex justify-end space-x-2",
              children: [a.jsx(ue, {
                type: "button",
                variant: "outline",
                onClick: C,
                children: "Cancel"
              }), i && a.jsx(ue, {
                type: "submit",
                disabled: E.isPending || !Object.values(d).some(j => j),
                children: E.isPending ? "Updating..." : "Apply Selected Updates"
              })]
            })]
          })
        })]
      })
    })
  };
var gE = "Progress",
  vE = 100,
  [hae, ece] = Jn(gE),
  [mae, pae] = hae(gE),
  TF = x.forwardRef((t, e) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: s,
      getValueLabel: i = gae,
      ...o
    } = t;
    (s || s === 0) && !bA(s) && console.error(vae(`${s}`, "Progress"));
    const l = bA(s) ? s : vE;
    r !== null && !SA(r, l) && console.error(xae(`${r}`, "Progress"));
    const c = SA(r, l) ? r : null,
      d = _v(c) ? i(c, l) : void 0;
    return a.jsx(mae, {
      scope: n,
      value: c,
      max: l,
      children: a.jsx(ke.div, {
        "aria-valuemax": l,
        "aria-valuemin": 0,
        "aria-valuenow": _v(c) ? c : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": MF(c, l),
        "data-value": c ?? void 0,
        "data-max": l,
        ...o,
        ref: e
      })
    })
  });
TF.displayName = gE;
var NF = "ProgressIndicator",
  CF = x.forwardRef((t, e) => {
    const {
      __scopeProgress: n,
      ...r
    } = t, s = pae(NF, n);
    return a.jsx(ke.div, {
      "data-state": MF(s.value, s.max),
      "data-value": s.value ?? void 0,
      "data-max": s.max,
      ...r,
      ref: e
    })
  });
CF.displayName = NF;

function gae(t, e) {
  return `${Math.round(t/e*100)}%`
}

function MF(t, e) {
  return t == null ? "indeterminate" : t === e ? "complete" : "loading"
}

function _v(t) {
  return typeof t == "number"
}

function bA(t) {
  return _v(t) && !isNaN(t) && t > 0
}

function SA(t, e) {
  return _v(t) && !isNaN(t) && t <= e && t >= 0
}

function vae(t, e) {
  return `Invalid prop \`max\` of value \`${t}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${vE}\`.`
}

function xae(t, e) {
  return `Invalid prop \`value\` of value \`${t}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${vE} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var AF = TF,
  yae = CF;
const xE = x.forwardRef(({
  className: t,
  value: e,
  ...n
}, r) => a.jsx(AF, {
  ref: r,
  className: de("relative h-4 w-full overflow-hidden rounded-full bg-secondary", t),
  ...n,
  children: a.jsx(yae, {
    className: "h-full w-full flex-1 bg-primary transition-all",
    style: {
      transform: `translateX(-${100-(e||0)}%)`
    }
  })
}));
xE.displayName = AF.displayName;
const _ae = ({
    isOpen: t,
    onClose: e,
    tool: n
  }) => {
    const {
      toast: r
    } = ji(), [s, i] = x.useState({
      title: "",
      description: "",
      difficulty_level: "beginner",
      duration: null,
      is_featured: !1
    }), [o, l] = x.useState(null), [c, d] = x.useState(null), [u, f] = x.useState(0), [h, m] = x.useState(!1), {
      data: y = [],
      refetch: v
    } = YL(n == null ? void 0 : n.id), {
      createTutorial: g,
      deleteTutorial: p
    } = vee(), _ = async S => {
      if (S.preventDefault(), !n || !o) {
        r({
          title: "Error",
          description: "Please select a video file",
          variant: "destructive"
        });
        return
      }
      m(!0), f(0);
      try {
        await g.mutateAsync({
          toolId: n.id,
          formData: s,
          videoFile: o,
          thumbnailFile: c,
          onProgress: f
        }), i({
          title: "",
          description: "",
          difficulty_level: "beginner",
          duration: null,
          is_featured: !1
        }), l(null), d(null), f(0), v(), r({
          title: "Success",
          description: "Tutorial uploaded successfully"
        })
      } catch {
        r({
          title: "Error",
          description: "Failed to upload tutorial",
          variant: "destructive"
        })
      } finally {
        m(!1)
      }
    }, w = async S => {
      if (confirm("Are you sure you want to delete this tutorial?")) try {
        await p.mutateAsync(S), v(), r({
          title: "Success",
          description: "Tutorial deleted successfully"
        })
      } catch {
        r({
          title: "Error",
          description: "Failed to delete tutorial",
          variant: "destructive"
        })
      }
    }, b = S => {
      const E = Math.floor(S / 60),
        T = S % 60;
      return `${E}:${T.toString().padStart(2,"0")}`
    };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "max-w-4xl max-h-[90vh] overflow-y-auto",
        children: [a.jsx(Xn, {
          children: a.jsxs(Kn, {
            children: ["Manage Tutorials - ", n == null ? void 0 : n.name]
          })
        }), a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [a.jsxs(je, {
            children: [a.jsx(qt, {
              children: a.jsx(Yt, {
                children: "Upload New Tutorial"
              })
            }), a.jsx(Ve, {
              children: a.jsxs("form", {
                onSubmit: _,
                className: "space-y-4",
                children: [a.jsxs("div", {
                  children: [a.jsx(Ut, {
                    htmlFor: "title",
                    children: "Title *"
                  }), a.jsx(Ie, {
                    id: "title",
                    value: s.title,
                    onChange: S => i({
                      ...s,
                      title: S.target.value
                    }),
                    required: !0
                  })]
                }), a.jsxs("div", {
                  children: [a.jsx(Ut, {
                    htmlFor: "description",
                    children: "Description"
                  }), a.jsx(mn, {
                    id: "description",
                    value: s.description,
                    onChange: S => i({
                      ...s,
                      description: S.target.value
                    }),
                    rows: 3
                  })]
                }), a.jsxs("div", {
                  children: [a.jsx(Ut, {
                    htmlFor: "difficulty",
                    children: "Difficulty Level"
                  }), a.jsxs(H1, {
                    value: s.difficulty_level,
                    onValueChange: S => i({
                      ...s,
                      difficulty_level: S
                    }),
                    children: [a.jsx(Cx, {
                      children: a.jsx(W1, {})
                    }), a.jsxs(Mx, {
                      children: [a.jsx($i, {
                        value: "beginner",
                        children: "Beginner"
                      }), a.jsx($i, {
                        value: "intermediate",
                        children: "Intermediate"
                      }), a.jsx($i, {
                        value: "advanced",
                        children: "Advanced"
                      })]
                    })]
                  })]
                }), a.jsxs("div", {
                  children: [a.jsx(Ut, {
                    htmlFor: "duration",
                    children: "Duration (seconds)"
                  }), a.jsx(Ie, {
                    id: "duration",
                    type: "number",
                    value: s.duration || "",
                    onChange: S => i({
                      ...s,
                      duration: S.target.value ? parseInt(S.target
                        .value) : null
                    })
                  })]
                }), a.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [a.jsx(ea, {
                    id: "featured",
                    checked: s.is_featured,
                    onCheckedChange: S => i({
                      ...s,
                      is_featured: S
                    })
                  }), a.jsx(Ut, {
                    htmlFor: "featured",
                    children: "Featured Tutorial"
                  })]
                }), a.jsxs("div", {
                  children: [a.jsx(Ut, {
                    htmlFor: "video",
                    children: "Video File *"
                  }), a.jsxs("div", {
                    className: "border-2 border-dashed border-border rounded-lg p-4",
                    children: [a.jsx("input", {
                      id: "video",
                      type: "file",
                      accept: "video/*",
                      onChange: S => {
                        var E;
                        return l(((E = S.target.files) == null ?
                          void 0 : E[0]) || null)
                      },
                      className: "hidden"
                    }), a.jsxs("label", {
                      htmlFor: "video",
                      className: "cursor-pointer flex flex-col items-center space-y-2",
                      children: [a.jsx(ou, {
                        className: "w-8 h-8 text-muted-foreground"
                      }), a.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: o ? o.name :
                          "Click to upload video"
                      })]
                    })]
                  })]
                }), a.jsxs("div", {
                  children: [a.jsx(Ut, {
                    htmlFor: "thumbnail",
                    children: "Thumbnail (optional)"
                  }), a.jsxs("div", {
                    className: "border-2 border-dashed border-border rounded-lg p-4",
                    children: [a.jsx("input", {
                      id: "thumbnail",
                      type: "file",
                      accept: "image/*",
                      onChange: S => {
                        var E;
                        return d(((E = S.target.files) == null ?
                          void 0 : E[0]) || null)
                      },
                      className: "hidden"
                    }), a.jsxs("label", {
                      htmlFor: "thumbnail",
                      className: "cursor-pointer flex flex-col items-center space-y-2",
                      children: [a.jsx(ou, {
                        className: "w-8 h-8 text-muted-foreground"
                      }), a.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: c ? c.name :
                          "Click to upload thumbnail"
                      })]
                    })]
                  })]
                }), h && a.jsxs("div", {
                  className: "space-y-2",
                  children: [a.jsx(Ut, {
                    children: "Upload Progress"
                  }), a.jsx(xE, {
                    value: u
                  }), a.jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: [Math.round(u), "%"]
                  })]
                }), a.jsx(ue, {
                  type: "submit",
                  disabled: h || !s.title || !o,
                  className: "w-full",
                  children: h ? "Uploading..." : "Upload Tutorial"
                })]
              })
            })]
          }), a.jsxs(je, {
            children: [a.jsx(qt, {
              children: a.jsxs(Yt, {
                children: ["Existing Tutorials (", y.length, ")"]
              })
            }), a.jsx(Ve, {
              children: a.jsx("div", {
                className: "space-y-4",
                children: y.length === 0 ? a.jsx("p", {
                  className: "text-muted-foreground text-center py-8",
                  children: "No tutorials yet"
                }) : y.map(S => a.jsx("div", {
                  className: "border border-border rounded-lg p-4",
                  children: a.jsxs("div", {
                    className: "flex items-start justify-between",
                    children: [a.jsxs("div", {
                      className: "flex-1",
                      children: [a.jsxs("div", {
                        className: "flex items-center space-x-2 mb-2",
                        children: [a.jsx(Ti, {
                          className: "w-4 h-4 text-primary"
                        }), a.jsx("h4", {
                          className: "font-semibold",
                          children: S.title
                        }), S.is_featured && a.jsx("span", {
                          className: "bg-primary text-primary-foreground text-xs px-2 py-1 rounded",
                          children: "Featured"
                        })]
                      }), S.description && a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-2",
                        children: S.description
                      }), a.jsxs("div", {
                        className: "flex items-center space-x-4 text-xs text-muted-foreground",
                        children: [S.difficulty_level && a.jsxs(
                          "span", {
                            children: ["Difficulty: ", S
                              .difficulty_level
                            ]
                          }), S.duration && a.jsxs("span", {
                          children: ["Duration: ", b(S
                            .duration)]
                        })]
                      })]
                    }), a.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [S.video_url && a.jsx(ue, {
                        size: "sm",
                        variant: "outline",
                        onClick: () => window.open(S.video_url,
                          "_blank"),
                        children: a.jsx(Ki, {
                          className: "w-4 h-4"
                        })
                      }), a.jsx(ue, {
                        size: "sm",
                        variant: "destructive",
                        onClick: () => w(S.id),
                        children: a.jsx(Ri, {
                          className: "w-4 h-4"
                        })
                      })]
                    })]
                  })
                }, S.id))
              })
            })]
          })]
        })]
      })
    })
  };
