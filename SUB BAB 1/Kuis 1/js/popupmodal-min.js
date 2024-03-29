"use strict";

function _typeof(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
var popup;
! function () {
    var e = 0,
        t = [],
        o = [],
        n = !0,
        l = !0,
        d = "left",
        a = "small",
        c = "#000",
        r = "top",
        i = void 0,
        m = "modal_backdrop",
        s = {},
        u = function (t) {
            1 == t ? ++e : --e, i = "popup_modal_" + e
        },
        p = function () {
            u(!0);
            var t = document.createElement("div");
            t.id = "popup_modal_" + e, t.className = "popup_modals fade " + o[o.length - 1].modal_effect;
            var n = o[o.length - 1].modal_size;
            "string" == typeof n ? t.className += " modal_" + o[o.length - 1].modal_size : "number" == typeof n && (t.style.width = n + "px");
            var l = document.createElement("div");
            l.className = "modal_content";
            var d = document.createElement("div");
            d.className = "modal_buttons " + o[o.length - 1].btn_align, t.appendChild(l), t.appendChild(d), document.body.appendChild(t)
        },
        f = function (e, t) {
            var o = !0,
                n = !1,
                l = void 0;
            try {
                for (var d, a = e[Symbol.iterator](); !(o = (d = a.next()).done); o = !0) {
                    var c = d.value;
                    if (c == t) return !0
                }
            } catch (r) {
                n = !0, l = r
            } finally {
                try {
                    !o && a["return"] && a["return"]()
                } finally {
                    if (n) throw l
                }
            }
            return !1
        },
        y = function (e, t) {
            e.className += " " + t
        },
        _ = function (e, t) {
            var o = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
            e.className = e.className.replace(o, "")
        },
        b = function (e) {
            var o = t[t.length - 1],
                n = {
                    e: e,
                    proceed: !1
                };
            if ("click" == e.type ? f(e.currentTarget.classList, "btn_pmry") ? (n.proceed = !0, console.log("Click proceed : true")) : console.log("Click proceed : false") : "keydown" == e.type && (13 == e.keyCode ? (n.proceed = !0, console.log("Keydown proceed : true")) : console.log("Keydown proceed : false")), o) {
                var l = document.getElementById(i).getElementsByClassName("modal_input")[0];
                n.input_value = l ? l.value : null, setTimeout(function () {
                    o(n)
                }, 350)
            }
            I()
        },
        g = function (t) {
            for (var o in s)
                if ("alert" != t || 1 != Object.keys(s).indexOf(o)) {
                    var n = s[o],
                        l = void 0,
                        d = document.createElement("a");
                    d.id = l = n.btn_id + "_" + e, d.className = n.btn_class, d.innerHTML = n.inner_text, document.getElementById(i).getElementsByClassName("modal_buttons")[0].appendChild(d), document.getElementById(l).addEventListener("click", function (e) {
                        b(e)
                    })
                }
        },
        v = function (e) {
            (13 == e.keyCode || 27 == e.keyCode) && b(e)
        },
        h = function (e) {
            b(e)
        },
        E = function () {
            document.getElementById("modal_backdrop").removeEventListener("click", h), o[o.length - 1].backdrop_close && document.getElementById(m).addEventListener("click", h)
        },
        k = function () {
            document.removeEventListener("keydown", v), o[o.length - 1].keyboard && document.addEventListener("keydown", v)
        },
        B = function () {
            var t = document.createElement("div");
            if (t.id = m, t.className = "modal_backdrop fade", document.getElementById(i).style.zIndex = 5 + 10 * e, 2 > e) document.body.appendChild(t);
            else {
                for (var n = e - 1; n > 0; n--) document.getElementById("popup_modal_" + n).style.transform = "translate(-" + 20 * (e - n) + "px, -" + 20 * (e - n) + "px)";
                document.getElementById(m).style.zIndex = 10 * e, console.log("popup_modal_" + (e - 1) + " : hidden")
            }
            document.getElementById(m).style.background = o[o.length - 1].bg_overlay_color, setTimeout(function () {
                2 > e && y(document.getElementById(m), "in"), setTimeout(function () {
                    y(document.getElementById(i), "in"), console.log(i + " : shown");
                    var e = document.getElementById(i).getElementsByClassName("modal_input")[0];
                    e && e.focus(), E(), k()
                }, 150)
            }, 150)
        },
        I = function () {
            document.removeEventListener("keydown", v), document.getElementById("modal_backdrop").removeEventListener("click", h), _(document.getElementById(i), "in"), console.log(i + " : hidden"), setTimeout(function () {
                2 > e && _(document.getElementById(m), "in"), setTimeout(function () {
                    if (document.body.removeChild(document.getElementById(i)), u(!1), o.pop(), t.pop(), 1 > e) document.body.removeChild(document.getElementById(m));
                    else {
                        document.getElementById(m).style.background = o[o.length - 1].bg_overlay_color, document.getElementById(m).style.zIndex = 10 * e;
                        for (var n = e; n > 0; n--) document.getElementById("popup_modal_" + n).style.transform = "translate(-" + 20 * (e - n) + "px, -" + 20 * (e - n) + "px)", n == e && (document.getElementById(i).style.removeProperty ? document.getElementById(i).style.removeProperty("transform") : document.getElementById(i).style.removeAttribute("transform"));
                        console.log("popup_modal_" + e + " : shown");
                        var l = document.getElementById("popup_modal_" + e).getElementsByClassName("modal_input")[0];
                        l && l.focus(), E(), k()
                    }
                }, 150)
            }, 150)
        },
        w = function (e, m, u) {
            var f = 99,
                y = "",
                _ = document.createElement("div"),
                b = void 0,
                v = void 0,
                h = {};
            try {
                if (!m || "object" !== ("undefined" == typeof m ? "undefined" : _typeof(m))) throw "No content specified.";
                if (!m.content) throw "content not specified";
                if (_.innerHTML = m.content, void 0 !== m.keyboard) {
                    if ("boolean" != typeof m.keyboard) throw "keyboard is not type boolean";
                    h.keyboard = m.keyboard
                } else h.keyboard = n;
                if (void 0 !== m.backdrop_close) {
                    if ("boolean" != typeof m.backdrop_close) throw "backdrop_close is not type boolean";
                    h.backdrop_close = m.backdrop_close
                } else h.backdrop_close = l;
                if (m.placeholder) {
                    if ("string" != typeof m.placeholder) throw "placeholder is not type string";
                    y = m.placeholder
                }
                if (m.input_length) {
                    if ("number" != typeof m.input_length) throw "input_length is not type number";
                    f = m.input_length
                }
                if (m.default_btns) {
                    if ("object" !== _typeof(m.default_btns)) throw "default_btns is not type object";
                    var E = m.default_btns;
                    b = E.ok, v = E.cancel
                }
                if (s = {
                        ok: {
                            btn_id: "btn_ok",
                            btn_class: "btn btn_pmry",
                            inner_text: b || "Ok"
                        },
                        cancel: {
                            btn_id: "btn_cancel",
                            btn_class: "btn btn_sdry",
                            inner_text: v || "Cancel"
                        }
                    }, m.custom_btns) {
                    if ("object" !== _typeof(m.custom_btns)) throw "custom_btns is not type object";
                    var k = 0;
                    for (var I in m.custom_btns) s[I] = {
                        btn_id: "btn_extra_" + ++k,
                        btn_class: "btn btn_extra",
                        inner_text: m.custom_btns[I]
                    }
                }
                if (m.btn_align && "left" !== m.btn_align && "right" !== m.btn_align) throw 'btn_align is not type string and only accepts value of "left" or "right"';
                if (h.btn_align = m.btn_align || d, m.modal_size && "number" != typeof m.modal_size && "large" !== m.modal_size && "medium" !== m.modal_size && "small" !== m.modal_size) throw 'modal_size is not type number / string and only accepts value of "small", "medium" or "large"';
                if (h.modal_size = m.modal_size || a, m.bg_overlay_color && "string" != typeof m.bg_overlay_color) throw "bg_overlay_color is not type string";
                if (h.bg_overlay_color = m.bg_overlay_color || c, m.effect && "top" !== m.effect && "bottom" !== m.effect && "right" !== m.effect && "left" !== m.effect && "none" !== m.effect) throw 'effect is not type string and onlty accepts value of "top", "bottom", "right", "left" or "none"';
                h.modal_effect = m.effect || r
            } catch (w) {
                return void console.warn(w + ". Rollback.")
            }
            if (o.push(h), u ? t.push(u) : t.push(null), p(), g(e), document.getElementById(i).getElementsByClassName("modal_content")[0].appendChild(_), "prompt" == e) {
                var C = document.createElement("input");
                C.type = "text", C.className = "modal_input", C.placeholder = y, C.maxLength = f, C.style.width = "100%", document.getElementById(i).getElementsByClassName("modal_content")[0].appendChild(C)
            }
            B()
        },
        C = function (e, t) {
            w("alert", e, t)
        },
        x = function (e, t) {
            w("confirm", e, t)
        },
        N = function (e, t) {
            w("prompt", e, t)
        };
    popup = {
        alert: C,
        prompt: N,
        confirm: x
    }
}();