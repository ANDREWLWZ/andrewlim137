var End = !1,
    openUi = !1,
    AnimInActive = !1,
    canLoaderAnim = !0;

function fillText(e, t, i, s = "fast", a = "") {
    setTimeout(function() {
        if (i < e.length) {
            let n = "";
            n = "" != a ? $(a).find(t) : $(t), $(t).html(n.text() + e[i++]), End && ".job-description" == t ? End = !1 : fillText(e, t, i, s, a)
        } else $(t).addClass("active"), ".visual-text.about" == t ? show_icons_start() : AnimInActive = !1
    }, "fast" == s ? 1 : "slow" == s ? 70 : 30)
}

function hide_element(e) {
    e.removeClass("touchable"), e.removeClass("active"), setTimeout(function() {
        setTimeout(function() {
            AnimInActive = !1, End = !1
        }, 500)
    }, 300)
}

function show_element(e) {
    e.addClass("active")
}

function show_icons_start() {
    show_icon(0)
}

function show_icon(e) {
    setTimeout(function() {
        let t = $(".technologies .icon");
        $(t[e]).addClass("active"), ++e < t.length && show_icon(e)
    }, 300)
}

function start_transition(e, t, i, s) {
    e.width(), e.height(), e.css("padding");
    let a = $('<div id="transition"><div class="text"></div>').css({
        width: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        "font-size": s
    });
    $(e).append(a), add_transition(0, a, e, t, i)
}

function get_rand_symbol() {
    let e = ["A", "B", " Full Stack ", "D", "/", "?", ".", ">", ":", ";", "|", "~", "]", "[", "{", "}"];
    return e[Math.floor(Math.random() * e.length)]
}

function add_transition(e, t, i, s, a) {
    let n = "fast" == a ? 11 : 3,
        o = "fast" == a ? $(i).height() - 20 : $(i).height();
    setTimeout(() => {
        let l = $(t).find(".text").html();
        for (let r = 0; r < n; r++) l += get_rand_symbol();
        $(t).find(".text").html(l), e++, $(t).height() < o ? add_transition(e, t, i, s, a) : end_transition(i, s)
    }, "fast" == a ? .1 : 70)
}

function end_transition(e, t) {
    t ? (show_element(e), $(e).trigger("anim_script_done")) : hide_element(e), setTimeout(function() {
        $("#transition").remove()
    }, 200)
}

function Load(e, t) {
    if (canLoaderAnim) {
        let i = 80;
        640 > $(window).width() && (i = 120);
        var s = e;
        let a = t.html().toString().length;
        setTimeout(function() {
            if (s < a - 1 && $(".loader").hasClass("active")) {
                let e = $(t).html().toString();
                e = e.slice(0, s) + "#" + e.slice(s + 1), $(t).html(e), Load(s + 1, $(t))
            } else finish_loading()
        }, i)
    }
}

function finish_loading() {
    setTimeout(function() {
        let e = document.querySelector("#progress_text"),
            t = new TextScramble(e);
        t.setText("Welcome ;)");
        $("#progress_text").addClass("welcome");
        $(".loader").addClass("hide remove");
        setTimeout(function() {
            $(".loader").remove();
        }, );
    }, );
}



function script_animation_toggle(e, t, i = "7") {
    i += "px";
    let s = $(e);
    s.hasClass("active") ? (hide_element(s), $(s).trigger("anim_script_end"), endInterval()) : start_transition(s, !0, t, i)
}
window.onbeforeunload = function(e) {
    $(".end").addClass("active"), setTimeout(function() {
        window.scrollTo(0, 0)
    }, 200)
}, $(document).ready(function() {
    $(".end").removeClass("active"), window.scrollTo(0, 0);
    let e = $(".notification");
    $(e).length > 0 && $(e).each(function(e, t) {
        setTimeout(function() {
            $(t).addClass("active"), setTimeout(function() {
                $(t).addClass("hide")
            }, e + 300)
        }, 600 * e)
    }), document.getElementById("slideshow");
    "" == $("#coming_soon").val() && fillText($("#coming_soon_text").val(), ".coming-soon-text-box", 0, "slow");
    let t = 0;
    AnimInActive = !1;
    let i = "",
        s = $(".about-text-value");
    s.each(function(e, t) {
        let i;
        fillText($(t).val(), `.visual-text-about-${e+1}`, 0, "normal")
    }), fillText(s, ".visual-text.about", 0, "normal"), $(document).delegate(".visual-text.active", "mouseenter mouseleave", function(e) {
        if ("mouseenter" === e.type) {
            let t = "",
                s = $(this).text();
            for (var a of ($(this).addClass("hovered"), i = s, s)) t += `<span class="hovered-visual-text">${a}</span>`;
            $(this).html(t)
        } else $(this).removeClass("hovered"), "" != i && $(this).html(i), i = ""
    }), $(".visual-text").delegate(".hovered-visual-text", "mouseenter mouseleave", function(e) {
        "mouseenter" === e.type ? ($(this).prev().addClass("active"), $(this).prev().prev().addClass("active"), $(this).next().addClass("active"), $(this).next().next().addClass("active"), $(this).addClass("active")) : ($(this).prev().removeClass("active"), $(this).prev().prev().removeClass("active"), $(this).next().removeClass("active"), $(this).next().next().removeClass("active"), $(this).removeClass("active"))
    });
    let a = $(".title-text");
    for (let n = 0; n < a.length; n++) {
        let o = $(a[n]);
        o.text();
        let l = o.text().length,
            r = l,
            c = $(o).text(),
            d = !0;
        setInterval(function() {
            l > 0 && d ? ($(o).text($(o).text().slice(0, $(o).text().length - 1)), l--) : (d = !1, void 0 != c[l] && ($(o).text($(o).text() + c[l]), l++), l == r && setTimeout(function() {
                d = !0
            }, 2e3))
        }, 300)
    }
    let h = $("#cursor");
    if ($("#cursor_shape"), $(window).width() > 620 && $(document).on("mousemove", function(e) {
            e.pageX, e.pageY, h.css({
                top: e.pageY,
                left: e.pageX
            })
        }), $("#toggle_sidebar").on("click", function() {
            let e = $(".sidebar");
            $(this).hasClass("acttive") ? ($(this).removeClass("acttive"), $(".sidebar-inner").css({
                opacity: "0"
            })) : ($(this).addClass("acttive"), start_transition(e, !0))
        }), $(".nav-item").on("click", function(e) {
            if (e.preventDefault(), !AnimInActive && !$(this).hasClass("active")) {
                t = 0, AnimInActive = !0;
                let i = $(this).find("a").attr("href");
                $(".nav-item").removeClass("active"), $(this).addClass("active");
                let s = $(`#${i}`),
                    a = $(".page.active");
                a.removeClass("active"), setTimeout(function() {
                    a.addClass("closed"), setTimeout(function() {
                        s.removeClass("closed"), setTimeout(function() {
                            s.addClass("active"), AnimInActive = !1
                        }, 100)
                    }, 100)
                }, 300)
            }
        }), $(".contact-check").on("change", function() {
            $(this).is(":checked") ? $(this).parent("label").addClass("checked") : $(this).parent("label").removeClass("checked")
        }), $("input").on("change", function() {
            let e = $(this).parents("label");
            "" != $(this).val() ? e.hasClass("filled") || e.addClass("filled") : e.removeClass("filled")
        }), $(window).on("resize", function() {
            $(".job.active").click()
        }), $(".popup-close").on("click", function() {
            hide_element($(this).parents(".popup"))
        }), $("#language-switcher").on("click", function() {
            script_animation_toggle("#language-switcher-dropdown", "slow")
        }), $(".job").on("dblclick", function(e) {
            e.preventDefault()
        }), $(document).delegate(".job", "click", function() {
            if (!AnimInActive) {
                AnimInActive = !0;
                let e = $(this);
                e.addClass("clicked"), setTimeout(function() {
                    e.removeClass("clicked")
                }, 200), $(".portfolio.page").hasClass("clicked") || ($(".portfolio.page").addClass("clicked"), setTimeout(function() {
                    $(".click-anim").remove()
                }, 300)), e.hasClass("active") ? (e.removeClass("active"), setTimeout(function() {
                    $("#side-information").find(".job-title").text(""), $("#side-information").find(".job-description").text("")
                }, 300), End = !0, script_animation_toggle("#side-information-inner", "fast", 14)) : ($(".job.active").length > 0 && ($(".job").removeClass("active"), setTimeout(function() {
                    $("#side-information").find(".job-title").text(""), $("#side-information").find(".job-description").text("")
                }, 300), End = !0, script_animation_toggle("#side-information-inner", "fast", 14)), setTimeout(function() {
                    e.addClass("active");
                    let t = e.find("input.job-title").val(),
                        i = e.find("input.job-image");
                    $("#side-information").find(".job-title").text(t), i.each(function(e, t) {
                        let i = $(t).val();
                        $("#slideshow").append(`<div class="slideshowItem"><img src="${i}" alt=""></div>`)
                    });
                    let s;
                    HSlider(document.getElementById("slideshow"), {
                        showCount: 1,
                        frontLoop: !0,
                        backLoop: !0,
                        autoSlide: !0,
                        autoSlideTime: 6e3,
                        margin: 50,
                        buttonsSvg: ['<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"> <polygon points="241.367,64.458 0,245.001 241.367,425.542 176.545,267.963 490,267.963 490,222.026 176.55,222.026 "/></svg>', '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"> <polygon points="313.447,222.026 0,222.026 0,267.964 313.451,267.964 248.629,425.546 490,245 248.629,64.454 "/></svg>']
                    }), script_animation_toggle("#side-information-inner", "fast", 14)
                }, 300))
            }
        }), $("#side-information").on("anim_script_done", function() {
            fillText($(".job.active").find("input.job-description").val(), ".job-description", 0, "fast", "#side-information")
        }), $("#side-information").on("anim_script_end", function() {
            let e = $("#slideshow");
            setTimeout(function() {
                e.html("")
            }, 300)
        }), $(document).on("scroll", function(e) {
            let i = $(window).scrollTop(),
                s = t - i,
                a = $("#cursor").css("top").replace(/[^-\d\.]/g, "");
            a <= $(".page.active").height() + 1 && $("#cursor").css({
                top: +a - s
            }), t = i
        }), $("button, a, .job, .nav-item, label.checkbox, .expertise").on("mouseenter mouseleave", function(e) {
            "mouseenter" == e.type ? $("#cursor").addClass("hover") : $("#cursor").removeClass("hover")
        }), $(".experience-folder").on("click", function() {
            let e = $(this).attr("data-id"),
                t = $(`.experience-child[data-child="${e}"]`),
                i = $(this);
            $(this).addClass("click"), setTimeout(function() {
                $(i).removeClass("click")
            }, 200), $(this).hasClass("active") ? ($(this).removeClass("active"), $(t).slideUp()) : ($(this).addClass("active"), $(t).slideDown())
        }), $(".link-to-contact").on("click", function(e) {
            e.preventDefault(), $(".header .contact").click()
        }), $("button.file").on("click", function() {
            let e = $(this),
                t = $(this).attr("data-id"),
                i = $(`.experience-information-child[data-child="${t}"]`),
                s = $(this);
            if (620 > $(window).width() && !$(e).hasClass("active")) {
                let a = $(".experience-inner .sidebar");
                a.addClass("hide"), $(a).parent(".window-content").addClass("hide-sidebar"), setTimeout(function() {
                    $("#show_sidebar").addClass("show")
                }, 300)
            }
            $(this).addClass("click"), setTimeout(function() {
                $(s).removeClass("click")
            }, 200), $(i).hasClass("active") ? ($(".experience-information").removeClass("active"), $(i).removeClass("active"), $(this).removeClass("active"), $(".experience-information-title").text("")) : ($(".experience-information-child.active").removeClass("active"), $("button.file.active").removeClass("active"), setTimeout(function() {
                $(".experience-information").hasClass("active") || $(".experience-information").addClass("active"), $(e).addClass("active"), $(i).addClass("active"), $(".experience-information-title").text(`${t}.txt`)
            }, 300))
        }), $("#show_sidebar").on("click", function() {
            let e = $(".experience-inner .sidebar");
            $("#show_sidebar").removeClass("show"), e.removeClass("hide"), $(e).parent(".window-content").removeClass("hide-sidebar"), $("button.file.active").click()
        }), 620 > $(window).width()) {
        let f;
        $(".header-navigation").animate({
            scrollLeft: $(".header-navigation").scrollLeft() + 20
        }, 400), setTimeout(function() {
            $(".header-navigation").animate({
                scrollLeft: $(".header-navigation").scrollLeft() - 20
            }, 400)
        }, 400), f = setInterval(function() {
            $(".header-navigation").animate({
                scrollLeft: $(".header-navigation").scrollLeft() + 20
            }, 400), setTimeout(function() {
                $(".header-navigation").animate({
                    scrollLeft: $(".header-navigation").scrollLeft() - 20
                }, 400)
            }, 400)
        }, 3e3), $($(".header-navigation")).on("touchmove", function() {
            clearInterval(f)
        })
    }
    $("#filter_toggle").on("click", function() {
        $(".project-filters").hasClass("show") ? ($(".project-filters").removeClass("show"), $(this).removeClass("pressed")) : ($(".project-filters").addClass("show"), $(this).addClass("pressed"))
    });
    let v = ["Data Analyst", "Business Manager", "Content Creator", "Social Media Manager", ],
        m = document.querySelector("#loader_change_text"),
        u = new TextScramble(m),
        p = 0,
        g = () => {
            u.setText(v[p]).then(() => {
                setTimeout(g, 2300)
            }), p = (p + 1) % v.length
        };
    $(".loader").hasClass("active") && g();
    let C = 0;
    setTimeout(function() {
        if ($(window).width() < 640) {
            $("#fill_text").html("--------------------");
        }
        setTimeout(function() {
            while ($("#loader_progress_bar").width() < $(window).width() && C < 50 && $(".loader").hasClass("active")) {
                let size = parseInt($("#loader_progress_bar").css("font-size"), 10);
                $("#loader_progress_bar").css("font-size", size + 3);
                C++;
            }
            $("#loader_progress_bar").addClass("show");
            setTimeout(function() {
                Load(1, $("#fill_text"));
            }, 100); // Further reduced delay
        }, 50); // Further reduced delay
    }, 20), $("#skip_loader").on("click", function() {
        $(".loader").addClass("remove"), canLoaderAnim = !1, $("#cursor").removeClass("hover"), setTimeout(function() {
            $(".loader").remove()
        }, 300)
    }), $(".technologies .icon").mouseleave(function() {
        let e = $(this);
        $(this).data("timeout", setTimeout(function() {
            $(e).css({
                top: "0px"
            }), $(e).css({
                left: "0px"
            })
        }, 1e3))
    }).mouseenter(function() {
        clearTimeout($(this).data("timeout")), $(this);
        let e, t, i = Math.floor(101 * Math.random() + 120),
            s = Math.floor(101 * Math.random() + 120),
            a = {
                1: `-${s}`,
                2: `${s}`,
                3: `-${s}`,
                4: `${s}`
            },
            n = Math.floor(4 * Math.random() + 1);
        e = ({
            1: `${i}`,
            2: `-${i}`,
            3: `-${i}`,
            4: `${i}`
        })[n], t = a[n = Math.floor(4 * Math.random() + 1)];
        let o = parseInt($(this).css("top")) + parseInt(e),
            l = parseInt($(this).css("left")) + parseInt(t),
            r = {};
        r.top = `${o}px`, r.left = `${l}px`, $(this).css(r)
    }), $(".expertise").on("click", function() {
        $(this).hasClass("clicked") ? $(this).removeClass("clicked") : $(this).addClass("clicked")
    }), $("#scroll_top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1e3)
    }), $(".contact-form").on("submit", function(e) {
        console.log("submit"), e.preventDefault();
        let t = !0,
            i = $(this);
        for (let [s, a] of Object.entries({
                name: 'input[name="name"]',
                email: 'input[name="email"]',
                textarea: "textarea"
            })) {
            let n = $(a).length < 2;
            "textarea" === s ? n ? (t = !1, $(a).addClass("error")) : $(a).removeClass("error") : n ? (t = !1, $(a).parents("label").addClass("error")) : $(a).parents("label").removeClass("error")
        }
        t && i.submit()
    }), $(".contact-form input").on("input", function(e) {
        "email" == $(this).attr("name") ? $(this).val().includes("@") && $(this).val().includes(".") ? $(this).val().length < 5 ? ($(this).parents("label").addClass("error"), $(this).parents("label").removeClass("no-error")) : $(this).val().includes("@") && $(this).val().includes(".") && ($(this).parents("label").addClass("no-error"), $(this).parents("label").removeClass("error")) : ($(this).parents("label").addClass("error"), $(this).parents("label").removeClass("no-error")) : $(this).val().length < 2 ? ($(this).parents("label").addClass("error"), $(this).parents("label").removeClass("no-error")) : ($(this).parents("label").addClass("no-error"), $(this).parents("label").removeClass("error"))
    }), $(".contact-form textarea").on("input", function(e) {
        $(this).val().length < 2 ? ($(this).addClass("error"), $(this).removeClass("no-error")) : ($(this).addClass("no-error"), $(this).removeClass("error"))
    })
});
class TextScramble {
    constructor(e) {
        this.el = e, this.chars = "qwertyuiopasdfghjklzxcvbnm", this.update = this.update.bind(this)
    }
    setText(e) {
        let t = this.el.innerText,
            i = Math.max(t.length, e.length),
            s = new Promise(e => this.resolve = e);
        this.queue = [];
        for (let a = 0; a < i; a++) {
            let n = t[a] || "",
                o = e[a] || "",
                l = Math.floor(20 * Math.random()),
                r = l + Math.floor(20 * Math.random());
            this.queue.push({
                from: n,
                to: o,
                start: l,
                end: r
            })
        }
        return cancelAnimationFrame(this.frameRequest), this.frame = 0, this.update(), s
    }
    update() {
        let e = "",
            t = 0;
        for (let i = 0, s = this.queue.length; i < s; i++) {
            let {
                from: a,
                to: n,
                start: o,
                end: l,
                char: r
            } = this.queue[i];
            this.frame >= l ? (t++, e += n) : this.frame >= o ? ((!r || .28 > Math.random()) && (r = this.randomChar(), this.queue[i].char = r), e += `<span class="char">${r}</span>`) : e += a
        }
        this.el.innerHTML = e, t === this.queue.length ? this.resolve() : (this.frameRequst = requestAnimationFrame(this.update), this.frame++)
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}
document.addEventListener("readystatechange", e => {});