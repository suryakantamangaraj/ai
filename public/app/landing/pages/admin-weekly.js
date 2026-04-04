// Route: /admin/weekly
// Component symbol: Zae
// Source lines: 67463-68266

const Zae = () => {
    const {
      data: t,
      isLoading: e
    } = qae(), {
      deleteEpisode: n
    } = BF(), [r, s] = x.useState(""), [i, o] = x.useState(null), [l, c] = x.useState(!1), d = (t == null ? void 0 : t
      .filter(y => {
        var v;
        return y.title.toLowerCase().includes(r.toLowerCase()) || ((v = y.description) == null ? void 0 : v
          .toLowerCase().includes(r.toLowerCase()))
      })) || [], u = y => {
      o(y), c(!0)
    }, f = () => {
      o(null), c(!0)
    }, h = async y => {
      await n.mutateAsync(y)
    }, m = y => {
      if (!y) return "N/A";
      const v = Math.floor(y / 60),
        g = y % 60;
      return `${v}:${g.toString().padStart(2,"0")}`
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
              children: "Weekly AI Episodes"
            }), a.jsxs("p", {
              className: "text-muted-foreground",
              children: ["Manage your weekly AI video episodes (", (t == null ? void 0 : t
                .length) || 0, " episodes)"]
            })]
          }), a.jsxs(ue, {
            onClick: f,
            children: [a.jsx(Lr, {
              className: "w-4 h-4 mr-2"
            }), "Add Episode"]
          })]
        }), a.jsx(je, {
          children: a.jsx(Ve, {
            className: "pt-6",
            children: a.jsxs("div", {
              className: "relative",
              children: [a.jsx(ds, {
                className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              }), a.jsx(Ie, {
                placeholder: "Search episodes...",
                value: r,
                onChange: y => s(y.target.value),
                className: "pl-10"
              })]
            })
          })
        }), a.jsx("div", {
          className: "space-y-4",
          children: d.length > 0 ? d.map(y => a.jsxs(je, {
            children: [a.jsx(qt, {
              className: "pb-3",
              children: a.jsx("div", {
                className: "flex items-start justify-between",
                children: a.jsxs("div", {
                  className: "flex-1",
                  children: [a.jsxs(Yt, {
                    className: "text-lg flex items-center gap-2",
                    children: [y.title, y.is_published ? a.jsxs(tt, {
                      variant: "secondary",
                      className: "bg-green-100 text-green-800",
                      children: [a.jsx(ec, {
                        className: "w-3 h-3 mr-1"
                      }), "Published"]
                    }) : a.jsxs(tt, {
                      variant: "outline",
                      children: [a.jsx(Jf, {
                        className: "w-3 h-3 mr-1"
                      }), "Draft"]
                    })]
                  }), y.description && a.jsx("p", {
                    className: "text-sm text-muted-foreground mt-1",
                    children: y.description
                  }), a.jsxs("div", {
                    className: "flex items-center space-x-4 mt-2 text-sm text-muted-foreground",
                    children: [a.jsxs("div", {
                      className: "flex items-center",
                      children: [a.jsx(dc, {
                        className: "w-4 h-4 mr-1"
                      }), "Week ", y.week_number, ", ", y.year]
                    }), a.jsxs("div", {
                      className: "flex items-center",
                      children: [a.jsx($v, {
                        className: "w-4 h-4 mr-1"
                      }), m(y.duration)]
                    }), a.jsxs("div", {
                      children: ["Published ", yne(new Date(y
                        .publish_date)), " ago"]
                    })]
                  })]
                })
              })
            }), a.jsx(Ve, {
              className: "pt-0",
              children: a.jsxs("div", {
                className: "flex justify-between items-center",
                children: [a.jsxs("div", {
                  className: "space-x-2",
                  children: [y.video_url && a.jsx(tt, {
                    variant: "outline",
                    children: "Has Video"
                  }), y.thumbnail_url && a.jsx(tt, {
                    variant: "outline",
                    children: "Has Thumbnail"
                  })]
                }), a.jsxs("div", {
                  className: "flex space-x-2",
                  children: [a.jsxs(ue, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => u(y),
                    children: [a.jsx(Ei, {
                      className: "w-4 h-4 mr-1"
                    }), "Edit"]
                  }), y.video_url && a.jsxs(ue, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => window.open(y.video_url, "_blank"),
                    children: [a.jsx(Ki, {
                      className: "w-4 h-4 mr-1"
                    }), "Preview"]
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
                          children: "Are you sure?"
                        }), a.jsxs(Ju, {
                          children: [
                            'This action cannot be undone. This will permanently delete the episode "',
                            y.title,
                            '" from the database.'
                          ]
                        })]
                      }), a.jsxs(Zu, {
                        children: [a.jsx(tf, {
                          children: "Cancel"
                        }), a.jsx(ef, {
                          onClick: () => h(y.id),
                          className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                          children: "Delete"
                        })]
                      })]
                    })]
                  })]
                })]
              })
            })]
          }, y.id)) : a.jsx(je, {
            children: a.jsx(Ve, {
              className: "text-center py-12",
              children: a.jsx("p", {
                className: "text-muted-foreground",
                children: "No episodes found matching your search."
              })
            })
          })
        })]
      }), a.jsx(Kae, {
        isOpen: l,
        onClose: () => {
          c(!1), o(null)
        },
        episode: i
      })]
    })
  },
  wv = x.forwardRef(({
    className: t,
    ...e
  }, n) => a.jsx("div", {
    className: "relative w-full overflow-auto",
    children: a.jsx("table", {
      ref: n,
      className: de("w-full caption-bottom text-sm", t),
      ...e
    })
  }));
wv.displayName = "Table";
const bv = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("thead", {
  ref: n,
  className: de("[&_tr]:border-b", t),
  ...e
}));
bv.displayName = "TableHeader";
const Sv = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("tbody", {
  ref: n,
  className: de("[&_tr:last-child]:border-0", t),
  ...e
}));
Sv.displayName = "TableBody";
const Qae = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("tfoot", {
  ref: n,
  className: de("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t),
  ...e
}));
Qae.displayName = "TableFooter";
const zl = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("tr", {
  ref: n,
  className: de("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", t),
  ...e
}));
zl.displayName = "TableRow";
const Ar = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("th", {
  ref: n,
  className: de(
    "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", t),
  ...e
}));
Ar.displayName = "TableHead";
const jr = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("td", {
  ref: n,
  className: de("p-4 align-middle [&:has([role=checkbox])]:pr-0", t),
  ...e
}));
jr.displayName = "TableCell";
const Jae = x.forwardRef(({
  className: t,
  ...e
}, n) => a.jsx("caption", {
  ref: n,
  className: de("mt-4 text-sm text-muted-foreground", t),
  ...e
}));
Jae.displayName = "TableCaption";

function eoe(t, e) {
  const n = ioe(e);
  return "formatToParts" in n ? noe(n, t) : roe(n, t)
}
const toe = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function noe(t, e) {
  try {
    const n = t.formatToParts(e),
      r = [];
    for (let s = 0; s < n.length; s++) {
      const i = toe[n[s].type];
      i !== void 0 && (r[i] = parseInt(n[s].value, 10))
    }
    return r
  } catch (n) {
    if (n instanceof RangeError) return [NaN];
    throw n
  }
}

function roe(t, e) {
  const n = t.format(e),
    r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [parseInt(r[3], 10), parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[4], 10), parseInt(r[5], 10), parseInt(
    r[6], 10)]
}
const X0 = {},
  TA = new Intl.DateTimeFormat("en-US", {
    hourCycle: "h23",
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date("2014-06-25T04:00:00.123Z")),
  soe = TA === "06/25/2014, 00:00:00" || TA === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";

function ioe(t) {
  return X0[t] || (X0[t] = soe ? new Intl.DateTimeFormat("en-US", {
    hourCycle: "h23",
    timeZone: t,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }) : new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), X0[t]
}

function zF(t, e, n, r, s, i, o) {
  const l = new Date(0);
  return l.setUTCFullYear(t, e, n), l.setUTCHours(r, s, i, o), l
}
const NA = 36e5,
  aoe = 6e4,
  K0 = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
  };

function VF(t, e, n) {
  if (!t) return 0;
  let r = K0.timezoneZ.exec(t);
  if (r) return 0;
  let s, i;
  if (r = K0.timezoneHH.exec(t), r) return s = parseInt(r[1], 10), CA(s) ? -(s * NA) : NaN;
  if (r = K0.timezoneHHMM.exec(t), r) {
    s = parseInt(r[2], 10);
    const o = parseInt(r[3], 10);
    return CA(s, o) ? (i = Math.abs(s) * NA + o * aoe, r[1] === "+" ? -i : i) : NaN
  }
  if (coe(t)) {
    e = new Date(e || Date.now());
    const o = n ? e : ooe(e),
      l = Pb(o, t);
    return -(n ? l : loe(e, l, t))
  }
  return NaN
}

function ooe(t) {
  return zF(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t
  .getMilliseconds())
}

function Pb(t, e) {
  const n = eoe(t, e),
    r = zF(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let s = t.getTime();
  const i = s % 1e3;
  return s -= i >= 0 ? i : 1e3 + i, r - s
}

function loe(t, e, n) {
  let s = t.getTime() - e;
  const i = Pb(new Date(s), n);
  if (e === i) return e;
  s -= i - e;
  const o = Pb(new Date(s), n);
  return i === o ? i : Math.max(i, o)
}

function CA(t, e) {
  return -23 <= t && t <= 23 && (e == null || 0 <= e && e <= 59)
}
const MA = {};

function coe(t) {
  if (MA[t]) return !0;
  try {
    return new Intl.DateTimeFormat(void 0, {
      timeZone: t
    }), MA[t] = !0, !0
  } catch {
    return !1
  }
}

function AA(t) {
  const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(),
    t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), +t - +e
}
const doe = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
  Z0 = 36e5,
  jA = 6e4,
  uoe = 2,
  Ir = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: doe
  };

function foe(t, e = {}) {
  if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (t === null) return new Date(NaN);
  const n = e.additionalDigits == null ? uoe : Number(e.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]")
  return new Date(t.getTime());
  if (typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]") return new Date(t);
  if (Object.prototype.toString.call(t) !== "[object String]") return new Date(NaN);
  const r = hoe(t),
    {
      year: s,
      restDateString: i
    } = moe(r.date, n),
    o = poe(i, s);
  if (o === null || isNaN(o.getTime())) return new Date(NaN);
  if (o) {
    const l = o.getTime();
    let c = 0,
      d;
    if (r.time && (c = goe(r.time), c === null || isNaN(c))) return new Date(NaN);
    if (r.timeZone || e.timeZone) {
      if (d = VF(r.timeZone || e.timeZone, new Date(l + c)), isNaN(d)) return new Date(NaN)
    } else d = AA(new Date(l + c)), d = AA(new Date(l + c + d));
    return new Date(l + c + d)
  } else return new Date(NaN)
}

function hoe(t) {
  const e = {};
  let n = Ir.dateTimePattern.exec(t),
    r;
  if (n ? (e.date = n[1], r = n[3]) : (n = Ir.datePattern.exec(t), n ? (e.date = n[1], r = n[2]) : (e.date = null, r =
      t)), r) {
    const s = Ir.timeZone.exec(r);
    s ? (e.time = r.replace(s[1], ""), e.timeZone = s[1].trim()) : e.time = r
  }
  return e
}

function moe(t, e) {
  if (t) {
    const n = Ir.YYY[e],
      r = Ir.YYYYY[e];
    let s = Ir.YYYY.exec(t) || r.exec(t);
    if (s) {
      const i = s[1];
      return {
        year: parseInt(i, 10),
        restDateString: t.slice(i.length)
      }
    }
    if (s = Ir.YY.exec(t) || n.exec(t), s) {
      const i = s[1];
      return {
        year: parseInt(i, 10) * 100,
        restDateString: t.slice(i.length)
      }
    }
  }
  return {
    year: null
  }
}

function poe(t, e) {
  if (e === null) return null;
  let n, r, s;
  if (!t || !t.length) return n = new Date(0), n.setUTCFullYear(e), n;
  let i = Ir.MM.exec(t);
  if (i) return n = new Date(0), r = parseInt(i[1], 10) - 1, PA(e, r) ? (n.setUTCFullYear(e, r), n) : new Date(NaN);
  if (i = Ir.DDD.exec(t), i) {
    n = new Date(0);
    const o = parseInt(i[1], 10);
    return yoe(e, o) ? (n.setUTCFullYear(e, 0, o), n) : new Date(NaN)
  }
  if (i = Ir.MMDD.exec(t), i) {
    n = new Date(0), r = parseInt(i[1], 10) - 1;
    const o = parseInt(i[2], 10);
    return PA(e, r, o) ? (n.setUTCFullYear(e, r, o), n) : new Date(NaN)
  }
  if (i = Ir.Www.exec(t), i) return s = parseInt(i[1], 10) - 1, kA(s) ? RA(e, s) : new Date(NaN);
  if (i = Ir.WwwD.exec(t), i) {
    s = parseInt(i[1], 10) - 1;
    const o = parseInt(i[2], 10) - 1;
    return kA(s, o) ? RA(e, s, o) : new Date(NaN)
  }
  return null
}

function goe(t) {
  let e, n, r = Ir.HH.exec(t);
  if (r) return e = parseFloat(r[1].replace(",", ".")), Q0(e) ? e % 24 * Z0 : NaN;
  if (r = Ir.HHMM.exec(t), r) return e = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), Q0(e, n) ? e % 24 *
    Z0 + n * jA : NaN;
  if (r = Ir.HHMMSS.exec(t), r) {
    e = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const s = parseFloat(r[3].replace(",", "."));
    return Q0(e, n, s) ? e % 24 * Z0 + n * jA + s * 1e3 : NaN
  }
  return null
}

function RA(t, e, n) {
  e = e || 0, n = n || 0;
  const r = new Date(0);
  r.setUTCFullYear(t, 0, 4);
  const s = r.getUTCDay() || 7,
    i = e * 7 + n + 1 - s;
  return r.setUTCDate(r.getUTCDate() + i), r
}
const voe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  xoe = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function $F(t) {
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0
}

function PA(t, e, n) {
  if (e < 0 || e > 11) return !1;
  if (n != null) {
    if (n < 1) return !1;
    const r = $F(t);
    if (r && n > xoe[e] || !r && n > voe[e]) return !1
  }
  return !0
}

function yoe(t, e) {
  if (e < 1) return !1;
  const n = $F(t);
  return !(n && e > 366 || !n && e > 365)
}

function kA(t, e) {
  return !(t < 0 || t > 52 || e != null && (e < 0 || e > 6))
}

function Q0(t, e, n) {
  return !(t < 0 || t >= 25 || e != null && (e < 0 || e >= 60) || n != null && (n < 0 || n >= 60))
}

function _oe(t, e, n) {
  t = foe(t, n);
  const r = VF(e, t, !0),
    s = new Date(t.getTime() - r),
    i = new Date(0);
  return i.setFullYear(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()), i.setHours(s.getUTCHours(), s
    .getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()), i
}
const woe = t => {
    if (!t) return "N/A";
    const [e, n] = t.split("@");
    if (!n) return t;
    const r = Math.min(2, e.length);
    return `${e.length>3?`${e.substring(0,r)}***${e.charAt(e.length-1)}`:`${e.charAt(0)}***`}@${n}`
  },
  HF = async (t, e, n) => {
    try {
      const {
        data: {
          user: r
        }
      } = await Rt.auth.getUser(), {
        error: s
      } = await Rt.from("profile_access_log").insert({
        accessed_profile_id: t,
        accessor_user_id: (r == null ? void 0 : r.id) || null,
        access_granted: e,
        ip_address: (n == null ? void 0 : n.ipAddress) || null,
        user_agent: (n == null ? void 0 : n.userAgent) || navigator.userAgent
      });
      s && console.error("Failed to log profile access:", s)
    } catch (r) {
      console.error("Error logging profile access:", r)
    }
  }, boe = async t => HF(t, !0, {
    action: "email_revealed",
    userAgent: navigator.userAgent
  });
class Soe {
  constructor() {
    RE(this, "requestCounts", new Map)
  }
  async checkLimit(e, n) {
    const r = Date.now(),
      s = this.requestCounts.get(e);
    if (s != null && s.blocked) {
      if (r < s.resetTime) return {
        allowed: !1,
        retryAfter: s.resetTime - r
      };
      this.requestCounts.delete(e)
    }
    return !s || r >= s.resetTime ? (this.requestCounts.set(e, {
      count: 1,
      resetTime: r + n.windowMs,
      blocked: !1
    }), {
      allowed: !0
    }) : (s.count++, s.count > n.maxRequests ? (s.blocked = !0, s.resetTime = r + (n.blockDurationMs || n
    .windowMs), {
      allowed: !1,
      retryAfter: s.resetTime - r
    }) : {
      allowed: !0
    })
  }
  async waitForLimit(e, n) {
    const r = await this.checkLimit(e, n);
    !r.allowed && r.retryAfter && await new Promise(s => setTimeout(s, r.retryAfter))
  }
}
const J0 = new Soe,
  e_ = {
    PROFILE_ACCESS: {
      maxRequests: 10,
      windowMs: 6e4
    },
    USER_SEARCH: {
      maxRequests: 20,
      windowMs: 6e4
    },
    EMAIL_REVEAL: {
      maxRequests: 5,
      windowMs: 6e4,
      blockDurationMs: 3e5
    }
  },
  Eoe = ({
    user: t,
    paymentInfo: e,
    isOpen: n,
    onClose: r,
    onUpdate: s
  }) => {
    const i = Dn(),
      [o, l] = x.useState(!1),
      [c, d] = x.useState({
        isPremium: t.subscription_tier === "premium",
        brainLimit: (e == null ? void 0 : e.brain_subscription_quantity) || 1
      });
    x.useEffect(() => {
      t && e && d({
        isPremium: t.subscription_tier === "premium",
        brainLimit: e.brain_subscription_quantity || 1
      })
    }, [t, e]);
    const u = async () => {
      if (!(!t || !i)) {
        l(!0);
        try {
          const {
            error: f
          } = await i.from("user_payment_info").upsert({
            user_id: t.id,
            subscription_tier: c.isPremium ? "premium" : "free",
            subscription_status: c.isPremium ? "active" : "inactive",
            brain_subscription_quantity: c.brainLimit
          }, {
            onConflict: "user_id"
          });
          if (f) throw f;
          vn.success("User updated successfully"), s(), r()
        } catch (f) {
          console.error("Error updating user:", f), vn.error("Failed to update user")
        } finally {
          l(!1)
        }
      }
    };
    return a.jsx(fr, {
      open: n,
      onOpenChange: r,
      children: a.jsxs(ir, {
        className: "max-w-2xl",
        children: [a.jsx(Xn, {
          children: a.jsxs(Kn, {
            className: "flex items-center gap-2",
            children: [a.jsx(BS, {
              className: "h-5 w-5"
            }), "Edit User: ", t.email]
          })
        }), a.jsxs("div", {
          className: "space-y-6",
          children: [a.jsxs("div", {
            className: "grid grid-cols-2 gap-4 p-4 bg-muted/20 rounded-lg",
            children: [a.jsxs("div", {
              children: [a.jsx(Ut, {
                className: "text-sm font-medium",
                children: "Current Tier"
              }), a.jsx(tt, {
                variant: t.subscription_tier === "premium" ? "default" : "secondary",
                children: t.subscription_tier
              })]
            }), a.jsxs("div", {
              children: [a.jsx(Ut, {
                className: "text-sm font-medium",
                children: "Status"
              }), a.jsx(tt, {
                variant: t.subscription_status === "active" ? "default" : "destructive",
                children: t.subscription_status
              })]
            })]
          }), a.jsxs(je, {
            children: [a.jsx(qt, {
              children: a.jsxs(Yt, {
                className: "flex items-center gap-2 text-lg",
                children: [a.jsx(US, {
                  className: "h-5 w-5"
                }), "Premium Management"]
              })
            }), a.jsxs(Ve, {
              className: "space-y-4",
              children: [a.jsxs("div", {
                className: "flex items-center justify-between p-4 border rounded-lg",
                children: [a.jsxs("div", {
                  children: [a.jsx(Ut, {
                    className: "text-base font-medium",
                    children: "Premium Status"
                  }), a.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Grant or revoke premium access"
                  })]
                }), a.jsx(ea, {
                  checked: c.isPremium,
                  onCheckedChange: f => d({
                    ...c,
                    isPremium: f
                  })
                })]
              }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  htmlFor: "brainLimit",
                  children: "Brain Limit"
                }), a.jsx(Ie, {
                  id: "brainLimit",
                  type: "number",
                  value: c.brainLimit,
                  onChange: f => d({
                    ...c,
                    brainLimit: parseInt(f.target.value) || 1
                  }),
                  min: "1",
                  max: "100"
                }), a.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: "Maximum number of brains this user can create"
                })]
              })]
            })]
          }), a.jsxs("div", {
            className: "flex justify-end gap-2",
            children: [a.jsx(ue, {
              variant: "outline",
              onClick: r,
              children: "Cancel"
            }), a.jsx(ue, {
              onClick: u,
              disabled: o,
              children: o ? "Saving..." : "Save Changes"
            })]
          })]
        })]
      })
    })
  };
