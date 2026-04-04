// Route: /admin/tools
// Component symbol: wae
// Source lines: 64253-65329

const wae = () => {
    const {
      data: t,
      isLoading: e
    } = bm(), n = Dn(), r = As(), [s, i] = x.useState(""), [o, l] = x.useState(null), [c, d] = x.useState(!1), [u, f] =
      x.useState(!1), [h, m] = x.useState(null), [y, v] = x.useState(null), g = (t == null ? void 0 : t.filter(E => E
        .name.toLowerCase().includes(s.toLowerCase()) || E.description.toLowerCase().includes(s.toLowerCase()))) || [],
      p = tn({
        mutationFn: async E => {
          await n.from("tool_categories").delete().eq("tool_id", E);
          const {
            error: T
          } = await n.from("tools").delete().eq("id", E);
          if (T) throw T
        },
        onSuccess: () => {
          r.invalidateQueries({
            queryKey: ["tools"]
          }), vt({
            title: "Success",
            description: "Tool deleted successfully with all category assignments."
          })
        },
        onError: E => {
          console.error("Error deleting tool:", E), vt({
            title: "Error",
            description: "Failed to delete tool.",
            variant: "destructive"
          })
        }
      }), _ = E => {
        l(E), d(!0)
      }, w = E => {
        m(E)
      }, b = E => {
        p.mutate(E)
      }, S = E => Array.from({
        length: 5
      }, (T, P) => a.jsx(nm, {
        className: de("w-4 h-4", P < E ? "text-yellow-500 fill-yellow-500" : "text-gray-300")
      }, P));
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
              children: "Tools Management"
            }), a.jsxs("p", {
              className: "text-muted-foreground",
              children: ["Manage and curate your AI tools collection (", (t == null ?
                void 0 : t.length) || 0, " tools)"]
            })]
          }), a.jsx("div", {
            className: "flex space-x-2",
            children: a.jsxs(ue, {
              onClick: () => f(!0),
              children: [a.jsx(Lr, {
                className: "w-4 h-4 mr-2"
              }), "Add Tool"]
            })
          })]
        }), a.jsx(je, {
          children: a.jsx(Ve, {
            className: "pt-6",
            children: a.jsxs("div", {
              className: "relative",
              children: [a.jsx(ds, {
                className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              }), a.jsx(Ie, {
                placeholder: "Search tools...",
                value: s,
                onChange: E => i(E.target.value),
                className: "pl-10"
              })]
            })
          })
        }), a.jsx("div", {
          className: "space-y-4",
          children: g.length > 0 ? g.map(E => {
            var T;
            return a.jsxs(je, {
              children: [a.jsx(qt, {
                className: "pb-3",
                children: a.jsxs("div", {
                  className: "flex items-start justify-between",
                  children: [a.jsxs("div", {
                    className: "flex-1",
                    children: [a.jsx(Yt, {
                      className: "text-lg",
                      children: E.name
                    }), a.jsx("p", {
                      className: "text-sm text-muted-foreground mt-1",
                      children: E.description
                    }), a.jsxs("div", {
                      className: "flex items-center space-x-4 mt-2",
                      children: [a.jsxs("div", {
                        className: "flex items-center space-x-1",
                        children: [S(E.rating || 0), a.jsxs(
                        "span", {
                          className: "text-sm text-muted-foreground ml-1",
                          children: ["(", E.rating || 0, ")"]
                        })]
                      }), a.jsxs("span", {
                        className: "text-sm text-muted-foreground",
                        children: [(T = E.popularity) == null ?
                          void 0 : T.toLocaleString(), " users"
                        ]
                      }), a.jsx("span", {
                        className: "text-sm font-medium text-green-600",
                        children: E.price
                      })]
                    })]
                  }), a.jsxs("div", {
                    className: "flex items-center space-x-2 ml-4",
                    children: [E.is_verified && a.jsxs(tt, {
                      variant: "secondary",
                      className: "bg-gradient-to-r from-emerald-400 to-teal-500 text-white border border-emerald-300 shadow-md",
                      children: [a.jsx(BB, {
                        className: "w-3 h-3 mr-1"
                      }), "Verified"]
                    }), E.is_trending && a.jsxs(tt, {
                      variant: "secondary",
                      className: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white border border-yellow-400 shadow-md",
                      children: [a.jsx(Sh, {
                        className: "w-3 h-3 mr-1"
                      }), "Trending"]
                    })]
                  })]
                })
              }), a.jsx(Ve, {
                className: "pt-0",
                children: a.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [a.jsxs("div", {
                    className: "space-x-2",
                    children: [E.adams_take && a.jsx(tt, {
                      variant: "outline",
                      children: "Has Adam's Take"
                    }), E.website_url && a.jsx(tt, {
                      variant: "outline",
                      children: "Has Website"
                    }), E.pros && E.pros.length > 0 && a.jsxs(tt, {
                      variant: "outline",
                      children: [E.pros.length, " Pros"]
                    }), E.cons && E.cons.length > 0 && a.jsxs(tt, {
                      variant: "outline",
                      children: [E.cons.length, " Cons"]
                    })]
                  }), a.jsxs("div", {
                    className: "flex space-x-2",
                    children: [a.jsxs(ue, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => _(E),
                      children: [a.jsx(Ei, {
                        className: "w-4 h-4 mr-1"
                      }), "Edit"]
                    }), a.jsxs(ue, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => w(E),
                      children: [a.jsx(tm, {
                        className: "w-4 h-4 mr-1"
                      }), "AI Update"]
                    }), a.jsxs(ue, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => v(E),
                      children: [a.jsx(Ti, {
                        className: "w-4 h-4 mr-1"
                      }), "Tutorials"]
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
                              'This action cannot be undone. This will permanently delete the tool "',
                              E.name,
                              '" from the database.'
                            ]
                          })]
                        }), a.jsxs(Zu, {
                          children: [a.jsx(tf, {
                            children: "Cancel"
                          }), a.jsx(ef, {
                            onClick: () => b(E.id),
                            className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            children: "Delete"
                          })]
                        })]
                      })]
                    })]
                  })]
                })
              })]
            }, E.id)
          }) : a.jsx(je, {
            children: a.jsx(Ve, {
              className: "text-center py-12",
              children: a.jsx("p", {
                className: "text-muted-foreground",
                children: "No tools found matching your search."
              })
            })
          })
        })]
      }), a.jsx(aae, {
        isOpen: u,
        onClose: () => f(!1)
      }), o && a.jsx(gF, {
        isOpen: c,
        onClose: () => {
          d(!1), l(null)
        },
        tool: o
      }), h && a.jsx(fae, {
        isOpen: !!h,
        onClose: () => m(null),
        tool: h
      }), a.jsx(_ae, {
        tool: y,
        isOpen: !!y,
        onClose: () => v(null)
      })]
    })
  };
var bae = "Separator",
  EA = "horizontal",
  Sae = ["horizontal", "vertical"],
  jF = x.forwardRef((t, e) => {
    const {
      decorative: n,
      orientation: r = EA,
      ...s
    } = t, i = Eae(r) ? r : EA, l = n ? {
      role: "none"
    } : {
      "aria-orientation": i === "vertical" ? i : void 0,
      role: "separator"
    };
    return a.jsx(ke.div, {
      "data-orientation": i,
      ...l,
      ...s,
      ref: e
    })
  });
jF.displayName = bae;

function Eae(t) {
  return Sae.includes(t)
}
var RF = jF;
const yE = x.forwardRef(({
  className: t,
  orientation: e = "horizontal",
  decorative: n = !0,
  ...r
}, s) => a.jsx(RF, {
  ref: s,
  decorative: n,
  orientation: e,
  className: de("shrink-0 bg-border", e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t),
  ...r
}));
yE.displayName = RF.displayName;
var zx = "Collapsible",
  [Tae, PF] = Jn(zx),
  [Nae, _E] = Tae(zx),
  kF = x.forwardRef((t, e) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: s,
      disabled: i,
      onOpenChange: o,
      ...l
    } = t, [c, d] = cs({
      prop: r,
      defaultProp: s ?? !1,
      onChange: o,
      caller: zx
    });
    return a.jsx(Nae, {
      scope: n,
      disabled: i,
      contentId: On(),
      open: c,
      onOpenToggle: x.useCallback(() => d(u => !u), [d]),
      children: a.jsx(ke.div, {
        "data-state": EE(c),
        "data-disabled": i ? "" : void 0,
        ...l,
        ref: e
      })
    })
  });
kF.displayName = zx;
var DF = "CollapsibleTrigger",
  wE = x.forwardRef((t, e) => {
    const {
      __scopeCollapsible: n,
      ...r
    } = t, s = _E(DF, n);
    return a.jsx(ke.button, {
      type: "button",
      "aria-controls": s.contentId,
      "aria-expanded": s.open || !1,
      "data-state": EE(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      disabled: s.disabled,
      ...r,
      ref: e,
      onClick: Se(t.onClick, s.onOpenToggle)
    })
  });
wE.displayName = DF;
var bE = "CollapsibleContent",
  SE = x.forwardRef((t, e) => {
    const {
      forceMount: n,
      ...r
    } = t, s = _E(bE, t.__scopeCollapsible);
    return a.jsx(er, {
      present: n || s.open,
      children: ({
        present: i
      }) => a.jsx(Cae, {
        ...r,
        ref: e,
        present: i
      })
    })
  });
SE.displayName = bE;
var Cae = x.forwardRef((t, e) => {
  const {
    __scopeCollapsible: n,
    present: r,
    children: s,
    ...i
  } = t, o = _E(bE, n), [l, c] = x.useState(r), d = x.useRef(null), u = xt(e, d), f = x.useRef(0), h = f.current,
    m = x.useRef(0), y = m.current, v = o.open || l, g = x.useRef(v), p = x.useRef(void 0);
  return x.useEffect(() => {
    const _ = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(_)
  }, []), Mn(() => {
    const _ = d.current;
    if (_) {
      p.current = p.current || {
        transitionDuration: _.style.transitionDuration,
        animationName: _.style.animationName
      }, _.style.transitionDuration = "0s", _.style.animationName = "none";
      const w = _.getBoundingClientRect();
      f.current = w.height, m.current = w.width, g.current || (_.style.transitionDuration = p.current
        .transitionDuration, _.style.animationName = p.current.animationName), c(r)
    }
  }, [o.open, r]), a.jsx(ke.div, {
    "data-state": EE(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    id: o.contentId,
    hidden: !v,
    ...i,
    ref: u,
    style: {
      "--radix-collapsible-content-height": h ? `${h}px` : void 0,
      "--radix-collapsible-content-width": y ? `${y}px` : void 0,
      ...t.style
    },
    children: v && s
  })
});

function EE(t) {
  return t ? "open" : "closed"
}
var IF = kF,
  Mae = wE,
  Aae = SE;
const Rb = IF,
  LF = wE,
  OF = SE,
  jae = ls({
    description: ht().min(1, "Description is required")
  }),
  Rae = ({
    isOpen: t,
    onClose: e,
    category: n
  }) => {
    const r = Dn(),
      s = As(),
      [i, o] = x.useState(!1),
      l = pl({
        resolver: gl(jae),
        defaultValues: {
          description: ""
        }
      });
    x.useEffect(() => {
      n && l.reset({
        description: n.description || ""
      })
    }, [n, l]);
    const c = tn({
        mutationFn: async u => {
          const {
            error: f
          } = await r.from("categories").update({
            description: u.description
          }).eq("id", n.id);
          if (f) throw f
        },
        onSuccess: () => {
          s.invalidateQueries({
            queryKey: ["categories"]
          }), vt({
            title: "Success",
            description: "Category description updated successfully."
          }), e()
        },
        onError: u => {
          console.error("Error updating category:", u), vt({
            title: "Error",
            description: "Failed to update category description.",
            variant: "destructive"
          })
        }
      }),
      d = async u => {
        o(!0), c.mutate(u), o(!1)
      };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "sm:max-w-[500px]",
        children: [a.jsxs(Xn, {
          children: [a.jsx(Kn, {
            children: "Edit Category Description"
          }), a.jsxs("p", {
            className: "text-sm text-muted-foreground",
            children: ["Editing description for: ", a.jsx("strong", {
              children: n == null ? void 0 : n.name
            })]
          })]
        }), a.jsx(vl, {
          ...l,
          children: a.jsxs("form", {
            onSubmit: l.handleSubmit(d),
            className: "space-y-6",
            children: [a.jsx(qe, {
              control: l.control,
              name: "description",
              render: ({
                field: u
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Description *"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "Enter category description...",
                    rows: 4,
                    ...u
                  })
                }), a.jsx(Je, {})]
              })
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
                children: i ? "Saving..." : "Update Description"
              })]
            })]
          })
        })]
      })
    })
  },
  Vx = () => {
    const t = Dn(),
      e = As(),
      {
        toast: n
      } = ji(),
      {
        bulkReassignForCategory: r
      } = Lx(),
      s = tn({
        mutationFn: async c => {
          const {
            data: d,
            error: u
          } = await t.from("categories").insert([{
            ...c,
            is_default: !1
          }]).select().single();
          if (u) throw u;
          return d
        },
        onSuccess: async c => {
          e.invalidateQueries({
            queryKey: ["categories"]
          }), c != null && c.id && (await r(c.id), e.invalidateQueries({
            queryKey: ["tools"]
          })), n({
            title: "Success",
            description: "Category created successfully and tools auto-assigned"
          })
        },
        onError: c => {
          n({
            title: "Error",
            description: "Failed to create category",
            variant: "destructive"
          }), console.error("Error creating category:", c)
        }
      }),
      i = tn({
        mutationFn: async ({
          id: c,
          updates: d
        }) => {
          const u = d.description !== void 0,
            {
              error: f
            } = await t.from("categories").update(d).eq("id", c);
          if (f) throw f;
          return {
            categoryId: c,
            descriptionChanged: u
          }
        },
        onSuccess: async ({
          categoryId: c,
          descriptionChanged: d
        }) => {
          e.invalidateQueries({
            queryKey: ["categories"]
          }), d ? (await r(c), e.invalidateQueries({
            queryKey: ["tools"]
          }), n({
            title: "Success",
            description: "Category updated successfully and tools reassigned"
          })) : n({
            title: "Success",
            description: "Category updated successfully"
          })
        },
        onError: c => {
          n({
            title: "Error",
            description: "Failed to update category",
            variant: "destructive"
          }), console.error("Error updating category:", c)
        }
      }),
      o = tn({
        mutationFn: async c => {
          var f;
          await t.from("tool_categories").delete().eq("category_id", c);
          const {
            data: d
          } = await t.from("tools").select("id").eq("category_id", c);
          if (d && d.length > 0)
            for (const h of d) {
              const {
                data: m
              } = await t.from("tool_categories").select("category_id").eq("tool_id", h.id).limit(1), y = ((f = m ==
                null ? void 0 : m[0]) == null ? void 0 : f.category_id) || null;
              await t.from("tools").update({
                category_id: y
              }).eq("id", h.id), y && await t.from("tool_categories").update({
                is_primary: !0
              }).eq("tool_id", h.id).eq("category_id", y)
            }
          const {
            error: u
          } = await t.from("categories").delete().eq("id", c);
          if (u) throw u
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["categories"]
          }), e.invalidateQueries({
            queryKey: ["tools"]
          }), n({
            title: "Success",
            description: "Category deleted successfully"
          })
        },
        onError: c => {
          n({
            title: "Error",
            description: "Failed to delete category",
            variant: "destructive"
          }), console.error("Error deleting category:", c)
        }
      }),
      l = tn({
        mutationFn: async ({
          toolId: c,
          categoryId: d
        }) => {
          const {
            error: u
          } = await t.from("tools").update({
            category_id: d
          }).eq("id", c);
          if (u) throw u
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["tools"]
          }), n({
            title: "Success",
            description: "Tool category updated successfully"
          })
        },
        onError: c => {
          n({
            title: "Error",
            description: "Failed to update tool category",
            variant: "destructive"
          }), console.error("Error updating tool category:", c)
        }
      });
    return {
      createCategory: s,
      updateCategory: i,
      deleteCategory: o,
      updateToolCategory: l
    }
  },
  Pae = ls({
    name: ht().min(1, "Category name is required"),
    description: ht().optional(),
    icon: ht().optional(),
    color: ht().min(1, "Color is required")
  }),
  kae = ({
    isOpen: t,
    onClose: e
  }) => {
    const n = pl({
        resolver: gl(Pae),
        defaultValues: {
          name: "",
          description: "",
          icon: "",
          color: "#3B82F6"
        }
      }),
      {
        createCategory: r
      } = Vx(),
      s = async i => {
        try {
          await r.mutateAsync({
            name: i.name,
            description: i.description || "",
            icon: i.icon || "",
            color: i.color
          }), n.reset(), e()
        } catch (o) {
          console.error("Error creating category:", o)
        }
      };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "sm:max-w-md",
        children: [a.jsx(Xn, {
          children: a.jsx(Kn, {
            children: "Add Custom Category"
          })
        }), a.jsx(vl, {
          ...n,
          children: a.jsxs("form", {
            onSubmit: n.handleSubmit(s),
            className: "space-y-4",
            children: [a.jsx(qe, {
              control: n.control,
              name: "name",
              render: ({
                field: i
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Name"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    placeholder: "Enter category name",
                    ...i
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: n.control,
              name: "description",
              render: ({
                field: i
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Description"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "Enter category description (optional)",
                    rows: 3,
                    ...i
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: n.control,
              name: "icon",
              render: ({
                field: i
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Icon (Emoji)"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    placeholder: "e.g., 🎨, 💡, 🚀",
                    maxLength: 2,
                    ...i
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: n.control,
              name: "color",
              render: ({
                field: i
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Color"
                }), a.jsx(Ze, {
                  children: a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(Ie, {
                      type: "color",
                      className: "w-16 h-10 p-1 rounded-md",
                      ...i
                    }), a.jsx(Ie, {
                      placeholder: "e.g., #3B82F6, #10B981",
                      ...i
                    })]
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsxs("div", {
              className: "flex justify-end space-x-2",
              children: [a.jsx(ue, {
                type: "button",
                variant: "outline",
                onClick: e,
                children: "Cancel"
              }), a.jsx(ue, {
                type: "submit",
                disabled: r.isPending,
                children: r.isPending ? "Creating..." : "Create Category"
              })]
            })]
          })
        })]
      })
    })
  },
  Dae = ls({
    name: ht().min(1, "Category name is required"),
    description: ht().optional(),
    icon: ht().optional(),
    color: ht().min(1, "Color is required")
  }),
  Iae = ({
    isOpen: t,
    onClose: e,
    category: n
  }) => {
    const r = pl({
        resolver: gl(Dae),
        defaultValues: {
          name: "",
          description: "",
          icon: "",
          color: "#3B82F6"
        }
      }),
      {
        updateCategory: s
      } = Vx();
    x.useEffect(() => {
      n && r.reset({
        name: n.name || "",
        description: n.description || "",
        icon: n.icon || "",
        color: n.color || "#3B82F6"
      })
    }, [n, r]);
    const i = async o => {
      try {
        await s.mutateAsync({
          id: n.id,
          updates: o
        }), e()
      } catch (l) {
        console.error("Error updating category:", l)
      }
    };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "sm:max-w-md",
        children: [a.jsx(Xn, {
          children: a.jsx(Kn, {
            children: "Edit Category"
          })
        }), a.jsx(vl, {
          ...r,
          children: a.jsxs("form", {
            onSubmit: r.handleSubmit(i),
            className: "space-y-4",
            children: [a.jsx(qe, {
              control: r.control,
              name: "name",
              render: ({
                field: o
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Name"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    placeholder: "Enter category name",
                    ...o
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: r.control,
              name: "description",
              render: ({
                field: o
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Description"
                }), a.jsx(Ze, {
                  children: a.jsx(mn, {
                    placeholder: "Enter category description (optional)",
                    rows: 3,
                    ...o
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: r.control,
              name: "icon",
              render: ({
                field: o
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Icon (Emoji)"
                }), a.jsx(Ze, {
                  children: a.jsx(Ie, {
                    placeholder: "e.g., 🎨, 💡, 🚀",
                    maxLength: 2,
                    ...o
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsx(qe, {
              control: r.control,
              name: "color",
              render: ({
                field: o
              }) => a.jsxs(Ge, {
                children: [a.jsx($e, {
                  children: "Color"
                }), a.jsx(Ze, {
                  children: a.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [a.jsx(Ie, {
                      type: "color",
                      className: "w-16 h-10 p-1 rounded-md",
                      ...o
                    }), a.jsx(Ie, {
                      placeholder: "e.g., #3B82F6, #10B981",
                      ...o
                    })]
                  })
                }), a.jsx(Je, {})]
              })
            }), a.jsxs("div", {
              className: "flex justify-end space-x-2",
              children: [a.jsx(ue, {
                type: "button",
                variant: "outline",
                onClick: e,
                children: "Cancel"
              }), a.jsx(ue, {
                type: "submit",
                disabled: s.isPending,
                children: s.isPending ? "Updating..." : "Update Category"
              })]
            })]
          })
        })]
      })
    })
  },
  Lae = ({
    isOpen: t,
    onClose: e,
    category: n
  }) => {
    const [r, s] = x.useState(""), {
      data: i
    } = bm(), {
      updateToolCategory: o
    } = Vx(), l = (i == null ? void 0 : i.filter(f => f.category_id === n.id)) || [], c = (i == null ? void 0 : i
      .filter(f => f.category_id !== n.id && f.name.toLowerCase().includes(r.toLowerCase()))) || [], d = async f => {
      try {
        await o.mutateAsync({
          toolId: f,
          categoryId: n.id
        })
      } catch (h) {
        console.error("Error adding tool to category:", h)
      }
    }, u = async f => {
      try {
        await o.mutateAsync({
          toolId: f,
          categoryId: null
        })
      } catch (h) {
        console.error("Error removing tool from category:", h)
      }
    };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "sm:max-w-2xl max-h-[80vh]",
        children: [a.jsx(Xn, {
          children: a.jsxs(Kn, {
            children: ["Manage Tools - ", n.name]
          })
        }), a.jsxs("div", {
          className: "space-y-6",
          children: [a.jsxs("div", {
            children: [a.jsxs("h3", {
              className: "font-semibold mb-3",
              children: ["Current Tools (", l.length, ")"]
            }), l.length > 0 ? a.jsx(Oh, {
              className: "max-h-40",
              children: a.jsx("div", {
                className: "space-y-2",
                children: l.map(f => a.jsxs("div", {
                  className: "flex items-center justify-between p-3 bg-muted rounded-lg",
                  children: [a.jsxs("div", {
                    className: "flex-1",
                    children: [a.jsx("p", {
                      className: "font-medium",
                      children: f.name
                    }), a.jsx("p", {
                      className: "text-sm text-muted-foreground truncate",
                      children: f.description
                    })]
                  }), a.jsx(ue, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => u(f.id),
                    disabled: o.isPending,
                    children: a.jsx(qn, {
                      className: "w-4 h-4"
                    })
                  })]
                }, f.id))
              })
            }) : a.jsx("div", {
              className: "text-center py-8 text-muted-foreground",
              children: "No tools in this category yet"
            })]
          }), a.jsx(yE, {}), a.jsxs("div", {
            children: [a.jsx("h3", {
              className: "font-semibold mb-3",
              children: "Add Tools"
            }), a.jsxs("div", {
              className: "relative mb-4",
              children: [a.jsx(ds, {
                className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              }), a.jsx(Ie, {
                placeholder: "Search tools to add...",
                value: r,
                onChange: f => s(f.target.value),
                className: "pl-10"
              })]
            }), a.jsx(Oh, {
              className: "max-h-60",
              children: a.jsx("div", {
                className: "space-y-2",
                children: c.length > 0 ? c.map(f => a.jsxs("div", {
                  className: "flex items-center justify-between p-3 border rounded-lg",
                  children: [a.jsxs("div", {
                    className: "flex-1",
                    children: [a.jsx("p", {
                      className: "font-medium",
                      children: f.name
                    }), a.jsx("p", {
                      className: "text-sm text-muted-foreground truncate",
                      children: f.description
                    }), a.jsxs("div", {
                      className: "flex items-center mt-1 space-x-2",
                      children: [a.jsx(tt, {
                        variant: "outline",
                        className: "text-xs",
                        children: f.price
                      }), f.category_id && a.jsx(tt, {
                        variant: "secondary",
                        className: "text-xs",
                        children: "Currently uncategorized"
                      })]
                    })]
                  }), a.jsx(ue, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => d(f.id),
                    disabled: o.isPending,
                    children: a.jsx(Lr, {
                      className: "w-4 h-4"
                    })
                  })]
                }, f.id)) : a.jsx("div", {
                  className: "text-center py-8 text-muted-foreground",
                  children: r ? "No matching tools found" :
                    "All tools are already categorized"
                })
              })
            })]
          }), a.jsx("div", {
            className: "flex justify-end",
            children: a.jsx(ue, {
              onClick: e,
              children: "Done"
            })
          })]
        })]
      })
    })
  };
