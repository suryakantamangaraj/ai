// Route: /admin/blog-posts
// Component symbol: Hae
// Source lines: 66614-67462

const Hae = () => {
    const {
      data: t,
      isLoading: e
    } = Fae(), {
      deleteBlogPost: n
    } = UF(), [r, s] = x.useState(""), [i, o] = x.useState(!1), [l, c] = x.useState(null), [d, u] = x.useState(!1), [
      f, h
    ] = x.useState(null), m = (t == null ? void 0 : t.filter(_ => _.title.toLowerCase().includes(r.toLowerCase()) || _
      .seo_title.toLowerCase().includes(r.toLowerCase()))) || [], y = () => {
      c(null), o(!0)
    }, v = _ => {
      c(_), o(!0)
    }, g = _ => {
      h(_), u(!0)
    }, p = async () => {
      f && await n.mutateAsync(f.id), u(!1), h(null)
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
              children: "SEO Blog Posts"
            }), a.jsx("p", {
              className: "text-muted-foreground",
              children: "Manage your SEO-optimized blog posts for Adam's List"
            })]
          }), a.jsxs(ue, {
            onClick: y,
            children: [a.jsx(Lr, {
              className: "w-4 h-4 mr-2"
            }), "Create Blog Post"]
          })]
        }), a.jsx(je, {
          children: a.jsx(Ve, {
            className: "pt-6",
            children: a.jsxs("div", {
              className: "relative",
              children: [a.jsx(ds, {
                className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              }), a.jsx(Ie, {
                placeholder: "Search blog posts...",
                value: r,
                onChange: _ => s(_.target.value),
                className: "pl-10"
              })]
            })
          })
        }), a.jsx("div", {
          className: "space-y-4",
          children: m.length > 0 ? m.map(_ => a.jsxs(je, {
            children: [a.jsx(qt, {
              children: a.jsx("div", {
                className: "flex items-start justify-between",
                children: a.jsxs("div", {
                  className: "flex-1",
                  children: [a.jsxs("div", {
                    className: "flex items-center space-x-2 mb-2",
                    children: [a.jsx(Yt, {
                      className: "text-xl",
                      children: _.title
                    }), a.jsx(tt, {
                      variant: _.is_published ? "default" : "secondary",
                      children: _.is_published ? a.jsxs(a.Fragment, {
                        children: [a.jsx(ec, {
                          className: "w-3 h-3 mr-1"
                        }), "Published"]
                      }) : a.jsxs(a.Fragment, {
                        children: [a.jsx(Jf, {
                          className: "w-3 h-3 mr-1"
                        }), "Draft"]
                      })
                    })]
                  }), a.jsxs("p", {
                    className: "text-sm text-muted-foreground mb-2",
                    children: ["SEO Title: ", _.seo_title]
                  }), a.jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: ["Slug: /adams-list/", _.slug]
                  }), _.meta_description && a.jsx("p", {
                    className: "text-sm text-muted-foreground mt-2",
                    children: _.meta_description
                  })]
                })
              })
            }), a.jsx(Ve, {
              className: "pt-0",
              children: a.jsxs("div", {
                className: "flex justify-between items-center",
                children: [a.jsxs("div", {
                  className: "space-x-2",
                  children: [_.keywords && a.jsxs(tt, {
                    variant: "outline",
                    children: [_.keywords.length, " keywords"]
                  }), a.jsxs(tt, {
                    variant: "outline",
                    children: ["Order: ", _.display_order]
                  })]
                }), a.jsxs("div", {
                  className: "flex space-x-2",
                  children: [_.is_published && a.jsxs(ue, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => window.open(`/adams-list/${_.slug}`,
                      "_blank"),
                    children: [a.jsx(XB, {
                      className: "w-4 h-4 mr-1"
                    }), "View Live"]
                  }), a.jsxs(ue, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => v(_),
                    children: [a.jsx(Ei, {
                      className: "w-4 h-4 mr-1"
                    }), "Edit"]
                  }), a.jsxs(ue, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => g(_),
                    children: [a.jsx(Ri, {
                      className: "w-4 h-4 mr-1"
                    }), "Delete"]
                  })]
                })]
              })
            })]
          }, _.id)) : a.jsx(je, {
            children: a.jsxs(Ve, {
              className: "text-center py-12",
              children: [a.jsx(Hv, {
                className: "w-12 h-12 text-muted-foreground mx-auto mb-4"
              }), a.jsx("p", {
                className: "text-muted-foreground",
                children: "No blog posts found. Create your first SEO-optimized blog post!"
              })]
            })
          })
        })]
      }), a.jsx($ae, {
        isOpen: i,
        onClose: () => o(!1),
        blogPost: l
      }), a.jsx(Mm, {
        open: d,
        onOpenChange: u,
        children: a.jsxs(Xu, {
          children: [a.jsxs(Ku, {
            children: [a.jsx(Qu, {
              children: "Delete Blog Post"
            }), a.jsxs(Ju, {
              children: ['Are you sure you want to delete "', f == null ? void 0 : f.title,
                '"? This will also delete all associated tools. This action cannot be undone.'
              ]
            })]
          }), a.jsxs(Zu, {
            children: [a.jsx(tf, {
              children: "Cancel"
            }), a.jsx(ef, {
              onClick: p,
              children: "Delete"
            })]
          })]
        })
      })]
    })
  },
  Wae = () => Fn({
    queryKey: ["weekly-ai", "all"],
    queryFn: async () => {
      const {
        data: t,
        error: e
      } = await Rt.from("weekly_ai_episodes").select("*").eq("is_published", !0).order("year", {
        ascending: !1
      }).order("week_number", {
        ascending: !1
      });
      if (e) throw console.error("Error fetching weekly AI episodes:", e), e;
      return t || []
    },
    staleTime: 5 * 60 * 1e3
  }),
  Gae = () => Fn({
    queryKey: ["weekly-ai", "current"],
    queryFn: async () => {
      const {
        data: t,
        error: e
      } = await Rt.from("weekly_ai_episodes").select("*").eq("is_published", !0).order("year", {
        ascending: !1
      }).order("week_number", {
        ascending: !1
      }).limit(1).single();
      if (e) {
        if (e.code === "PGRST116") return null;
        throw console.error("Error fetching current weekly AI episode:", e), e
      }
      return t
    },
    staleTime: 5 * 60 * 1e3
  }),
  qae = () => Fn({
    queryKey: ["weekly-ai", "admin"],
    queryFn: async () => {
      const {
        data: t,
        error: e
      } = await Rt.from("weekly_ai_episodes").select("*").order("year", {
        ascending: !1
      }).order("week_number", {
        ascending: !1
      });
      if (e) throw console.error("Error fetching admin weekly AI episodes:", e), e;
      return t || []
    },
    staleTime: 5 * 60 * 1e3
  }),
  BF = () => {
    const t = Dn(),
      e = As(),
      n = tn({
        mutationFn: async o => {
          const {
            data: l,
            error: c
          } = await t.functions.invoke("admin-weekly-episode", {
            body: {
              operation: "create",
              episodeData: o
            }
          });
          if (c || !(l != null && l.success)) throw new Error((l == null ? void 0 : l.error) ||
            "Failed to create episode");
          return l.data
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["weekly-ai"]
          }), vt({
            title: "Success",
            description: "Episode created successfully."
          })
        },
        onError: o => {
          console.error("Error creating episode:", o), vt({
            title: "Error",
            description: o.message || "Failed to create episode.",
            variant: "destructive"
          })
        }
      }),
      r = tn({
        mutationFn: async o => {
          const {
            id: l,
            ...c
          } = o, {
            data: d,
            error: u
          } = await t.functions.invoke("admin-weekly-episode", {
            body: {
              operation: "update",
              id: l,
              episodeData: c
            }
          });
          if (u || !(d != null && d.success)) throw new Error((d == null ? void 0 : d.error) ||
            "Failed to update episode");
          return d.data
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["weekly-ai"]
          }), vt({
            title: "Success",
            description: "Episode updated successfully."
          })
        },
        onError: o => {
          console.error("Error updating episode:", o), vt({
            title: "Error",
            description: o.message || "Failed to update episode.",
            variant: "destructive"
          })
        }
      }),
      s = tn({
        mutationFn: async o => {
          const {
            data: l,
            error: c
          } = await t.functions.invoke("admin-weekly-episode", {
            body: {
              operation: "delete",
              id: o
            }
          });
          if (c || !(l != null && l.success)) throw new Error((l == null ? void 0 : l.error) ||
            "Failed to delete episode")
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["weekly-ai"]
          }), vt({
            title: "Success",
            description: "Episode deleted successfully."
          })
        },
        onError: o => {
          console.error("Error deleting episode:", o), vt({
            title: "Error",
            description: "Failed to delete episode.",
            variant: "destructive"
          })
        }
      }),
      i = tn({
        mutationFn: async o => {
          const {
            data: l,
            error: c
          } = await t.functions.invoke("admin-weekly-episode", {
            body: {
              operation: "update",
              id: o,
              episodeData: {
                publish_date: new Date().toISOString()
              }
            }
          });
          if (c || !(l != null && l.success)) throw new Error((l == null ? void 0 : l.error) ||
            "Failed to set featured episode")
        },
        onSuccess: () => {
          e.invalidateQueries({
            queryKey: ["weekly-ai"]
          }), vt({
            title: "Success",
            description: "Episode set as current successfully."
          })
        },
        onError: o => {
          console.error("Error setting featured episode:", o), vt({
            title: "Error",
            description: "Failed to set episode as current.",
            variant: "destructive"
          })
        }
      });
    return {
      createEpisode: n,
      updateEpisode: r,
      deleteEpisode: s,
      setFeaturedEpisode: i
    }
  },
  Yae = () => {
    const [t, e] = x.useState(!1), [n, r] = x.useState(null), s = Dn();
    return {
      uploadVideo: async (d, u) => {
        e(!0), r(null);
        try {
          const f = ["video/mp4", "video/mov", "video/quicktime", "video/avi", "video/webm"];
          if (console.log("Detected file MIME type:", d.type), !f.includes(d.type)) throw new Error(
            `Invalid file type detected: ${d.type}. Please upload MP4, MOV, AVI, or WebM files.`);
          const h = 500 * 1024 * 1024;
          if (d.size > h) {
            const E = Math.round(d.size / 1048576);
            throw new Error(
              `Video file size too large (${E}MB). Maximum size is 500MB. Please compress your video or use a smaller file.`
              )
          }
          const m = Date.now(),
            y = u.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase(),
            v = d.name.split(".").pop(),
            g = `weekly-ai/${y}-${m}.${v}`,
            {
              data: p,
              error: _
            } = await s.functions.invoke("admin-video-upload", {
              body: {
                operation: "upload",
                fileName: g,
                contentType: d.type
              }
            });
          if (_ || !p.success) throw new Error((p == null ? void 0 : p.error) || "Failed to get upload URL");
          if (!(await fetch(p.uploadUrl, {
              method: "PUT",
              body: d,
              headers: {
                "Content-Type": d.type
              }
            })).ok) throw new Error("Failed to upload file");
          const {
            data: b,
            error: S
          } = await s.functions.invoke("admin-video-upload", {
            body: {
              operation: "getPublicUrl",
              path: p.path
            }
          });
          if (S || !b.success) throw new Error((b == null ? void 0 : b.error) || "Failed to get public URL");
          return {
            success: !0,
            url: b.url
          }
        } catch (f) {
          const h = f instanceof Error ? f.message : "Upload failed";
          return r(h), {
            success: !1,
            error: h
          }
        } finally {
          e(!1)
        }
      },
      uploadThumbnail: async (d, u) => {
        e(!0), r(null);
        try {
          if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(d.type)) throw new Error(
            "Invalid file type. Please upload JPG, PNG, or WebP files.");
          const h = 50 * 1024 * 1024;
          if (d.size > h) {
            const E = Math.round(d.size / 1048576);
            throw new Error(
              `Thumbnail image size too large (${E}MB). Maximum size is 50MB. Please compress your image or use a smaller file.`
              )
          }
          const m = Date.now(),
            y = u.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase(),
            v = d.name.split(".").pop(),
            g = `weekly-ai/thumbnails/${y}-${m}.${v}`,
            {
              data: p,
              error: _
            } = await s.functions.invoke("admin-video-upload", {
              body: {
                operation: "upload",
                fileName: g,
                contentType: d.type
              }
            });
          if (_ || !p.success) throw new Error((p == null ? void 0 : p.error) || "Failed to get upload URL");
          if (!(await fetch(p.uploadUrl, {
              method: "PUT",
              body: d,
              headers: {
                "Content-Type": d.type
              }
            })).ok) throw new Error("Failed to upload file");
          const {
            data: b,
            error: S
          } = await s.functions.invoke("admin-video-upload", {
            body: {
              operation: "getPublicUrl",
              path: p.path
            }
          });
          if (S || !b.success) throw new Error((b == null ? void 0 : b.error) || "Failed to get public URL");
          return {
            success: !0,
            url: b.url
          }
        } catch (f) {
          const h = f instanceof Error ? f.message : "Upload failed";
          return r(h), {
            success: !1,
            error: h
          }
        } finally {
          e(!1)
        }
      },
      deleteVideo: async d => {
        try {
          const u = d.split("/"),
            f = u.findIndex(v => v === "tutorial-videos");
          if (f === -1) return !1;
          const h = u.slice(f + 1).join("/"),
            {
              data: m,
              error: y
            } = await s.functions.invoke("admin-video-upload", {
              body: {
                operation: "delete",
                path: h
              }
            });
          return y || !(m != null && m.success) ? (console.error("Error deleting video:", y), !1) : !0
        } catch (u) {
          return console.error("Error deleting video:", u), !1
        }
      },
      isUploading: t,
      uploadError: n,
      resetUpload: () => {
        r(null)
      }
    }
  },
  Xae = ls({
    title: ht().min(1, "Title is required"),
    description: ht().optional(),
    week_number: Ji().min(1, "Week number must be at least 1").max(53, "Week number cannot exceed 53"),
    year: Ji().min(2020, "Year must be at least 2020"),
    video_url: ht().optional(),
    thumbnail_url: ht().optional(),
    duration: Ji().optional(),
    publish_date: ht(),
    is_published: rl()
  }),
  Kae = ({
    isOpen: t,
    onClose: e,
    episode: n
  }) => {
    const {
      createEpisode: r,
      updateEpisode: s
    } = BF(), {
      uploadVideo: i,
      uploadThumbnail: o,
      isUploading: l,
      uploadError: c
    } = Yae(), [d, u] = x.useState(null), [f, h] = x.useState(null), m = pl({
      resolver: gl(Xae),
      defaultValues: {
        title: "",
        description: "",
        week_number: cv(new Date),
        year: new Date().getFullYear(),
        video_url: "",
        thumbnail_url: "",
        duration: 0,
        publish_date: new Date().toISOString().split("T")[0],
        is_published: !0
      }
    });
    x.useEffect(() => {
      n ? m.reset({
        title: n.title,
        description: n.description || "",
        week_number: n.week_number,
        year: n.year,
        video_url: n.video_url || "",
        thumbnail_url: n.thumbnail_url || "",
        duration: n.duration || 0,
        publish_date: n.publish_date.split("T")[0],
        is_published: n.is_published
      }) : m.reset({
        title: "",
        description: "",
        week_number: cv(new Date),
        year: new Date().getFullYear(),
        video_url: "",
        thumbnail_url: "",
        duration: 0,
        publish_date: new Date().toISOString().split("T")[0],
        is_published: !0
      })
    }, [n, m]);
    const y = async p => {
      try {
        let _ = p.video_url,
          w = p.thumbnail_url;
        if (d) {
          const S = await i(d, p.title);
          if (!S.success) throw new Error(S.error);
          _ = S.url
        }
        if (f) {
          const S = await o(f, p.title);
          if (!S.success) throw new Error(S.error);
          w = S.url
        }
        const b = {
          title: p.title,
          description: p.description,
          week_number: p.week_number,
          year: p.year,
          video_url: _,
          thumbnail_url: w,
          duration: p.duration,
          publish_date: new Date(p.publish_date).toISOString(),
          is_published: p.is_published
        };
        n ? await s.mutateAsync({
          ...b,
          id: n.id
        }) : await r.mutateAsync(b), e()
      } catch (_) {
        console.error("Error saving episode:", _)
      }
    }, v = p => {
      var w;
      const _ = (w = p.target.files) == null ? void 0 : w[0];
      if (_) {
        u(_);
        const b = document.createElement("video");
        b.preload = "metadata", b.onloadedmetadata = () => {
          m.setValue("duration", Math.round(b.duration))
        }, b.src = URL.createObjectURL(_)
      }
    }, g = p => {
      var w;
      const _ = (w = p.target.files) == null ? void 0 : w[0];
      _ && h(_)
    };
    return a.jsx(fr, {
      open: t,
      onOpenChange: e,
      children: a.jsxs(ir, {
        className: "max-w-2xl max-h-[90vh] overflow-y-auto",
        children: [a.jsx(Xn, {
          children: a.jsx(Kn, {
            children: n ? "Edit Weekly AI Episode" : "Add Weekly AI Episode"
          })
        }), a.jsx(vl, {
          ...m,
          children: a.jsxs("form", {
            onSubmit: m.handleSubmit(y),
            className: "space-y-6",
            children: [a.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [a.jsx(qe, {
                control: m.control,
                name: "title",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  className: "col-span-2",
                  children: [a.jsx($e, {
                    children: "Title"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      placeholder: "e.g., Week 1: AI News Roundup",
                      ...p
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: m.control,
                name: "description",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  className: "col-span-2",
                  children: [a.jsx($e, {
                    children: "Description"
                  }), a.jsx(Ze, {
                    children: a.jsx(mn, {
                      placeholder: "Brief summary of this week's AI news and updates (optional)",
                      rows: 3,
                      ...p
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: m.control,
                name: "week_number",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Week Number"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      type: "number",
                      min: "1",
                      max: "53",
                      ...p,
                      onChange: _ => p.onChange(parseInt(_.target.value))
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: m.control,
                name: "year",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Year"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      type: "number",
                      min: "2020",
                      ...p,
                      onChange: _ => p.onChange(parseInt(_.target.value))
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: m.control,
                name: "publish_date",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Publish Date"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      type: "date",
                      ...p
                    })
                  }), a.jsx(Je, {})]
                })
              }), a.jsx(qe, {
                control: m.control,
                name: "duration",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Duration (seconds)"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      type: "number",
                      min: "0",
                      ...p,
                      onChange: _ => p.onChange(parseInt(_.target.value) ||
                        0)
                    })
                  }), a.jsx(Je, {})]
                })
              })]
            }), a.jsxs("div", {
              className: "space-y-4",
              children: [a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  children: "Video File"
                }), a.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [a.jsx(Ie, {
                    type: "file",
                    accept: "video/*",
                    onChange: v,
                    className: "flex-1"
                  }), a.jsx(Ti, {
                    className: "w-4 h-4 text-muted-foreground"
                  })]
                }), d && a.jsxs("p", {
                  className: "text-sm text-muted-foreground",
                  children: ["Selected: ", d.name]
                })]
              }), a.jsx(qe, {
                control: m.control,
                name: "video_url",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Or Video URL"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      placeholder: "https://yourdomain.com/videos/episode.mp4",
                      ...p
                    })
                  }), a.jsx(Je, {})]
                })
              })]
            }), a.jsxs("div", {
              className: "space-y-4",
              children: [a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx(Ut, {
                  children: "Thumbnail File"
                }), a.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [a.jsx(Ie, {
                    type: "file",
                    accept: "image/*",
                    onChange: g,
                    className: "flex-1"
                  }), a.jsx(KB, {
                    className: "w-4 h-4 text-muted-foreground"
                  })]
                }), f && a.jsxs("p", {
                  className: "text-sm text-muted-foreground",
                  children: ["Selected: ", f.name]
                })]
              }), a.jsx(qe, {
                control: m.control,
                name: "thumbnail_url",
                render: ({
                  field: p
                }) => a.jsxs(Ge, {
                  children: [a.jsx($e, {
                    children: "Or Thumbnail URL"
                  }), a.jsx(Ze, {
                    children: a.jsx(Ie, {
                      placeholder: "https://yourdomain.com/images/thumbnail.jpg",
                      ...p
                    })
                  }), a.jsx(Je, {})]
                })
              })]
            }), a.jsx(qe, {
              control: m.control,
              name: "is_published",
              render: ({
                field: p
              }) => a.jsxs(Ge, {
                className: "flex items-center justify-between",
                children: [a.jsx($e, {
                  children: "Published"
                }), a.jsx(Ze, {
                  children: a.jsx(ea, {
                    checked: p.value,
                    onCheckedChange: p.onChange
                  })
                }), a.jsx(Je, {})]
              })
            }), c && a.jsx("div", {
              className: "text-sm text-destructive",
              children: c
            }), a.jsxs("div", {
              className: "flex justify-end space-x-2 pt-4",
              children: [a.jsx(ue, {
                variant: "outline",
                type: "button",
                onClick: e,
                children: "Cancel"
              }), a.jsxs(ue, {
                type: "submit",
                disabled: l || r.isPending || s.isPending,
                children: [l && a.jsx(ou, {
                  className: "w-4 h-4 mr-2 animate-spin"
                }), n ? "Update Episode" : "Create Episode"]
              })]
            })]
          })
        })]
      })
    })
  };
