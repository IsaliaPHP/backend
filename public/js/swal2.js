!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t()
}(this, function() {
    "use strict";
    var q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        },
        o = function() {
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            }
        }(),
        r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        i = function e(t, n, o) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
            }
            if ("value" in r)
                return r.value;
            var a = r.get;
            return void 0 !== a ? a.call(o) : void 0
        },
        a = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        u = function(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        t = "SweetAlert2:",
        c = function(e) {
            return Array.prototype.slice.call(e)
        },
        d = function(e) {
            console.warn(t + " " + e)
        },
        V = function(e) {
            console.error(t + " " + e)
        },
        n = [],
        l = function(e) {
            -1 === n.indexOf(e) && (n.push(e), d(e))
        },
        M = function(e) {
            return "function" == typeof e ? e() : e
        },
        H = function(e) {
            return "object" === (void 0 === e ? "undefined" : q(e)) && "function" == typeof e.then
        },
        e = Object.freeze({
            cancel: "cancel",
            backdrop: "overlay",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        p = function(e) {
            var t = {};
            for (var n in e)
                t[e[n]] = "swal2-" + e[n];
            return t
        },
        I = p(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "icon-text", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen"]),
        f = p(["success", "warning", "info", "question", "error"]),
        m = {
            previousBodyPadding: null
        },
        h = function(e, t) {
            return e.classList.contains(t)
        },
        D = function(e) {
            if (e.focus(), "file" !== e.type) {
                var t = e.value;
                e.value = "", e.value = t
            }
        },
        g = function(e, t, n) {
            e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(function(t) {
                e.forEach ? e.forEach(function(e) {
                    n ? e.classList.add(t) : e.classList.remove(t)
                }) : n ? e.classList.add(t) : e.classList.remove(t)
            }))
        },
        R = function(e, t) {
            g(e, t, !0)
        },
        N = function(e, t) {
            g(e, t, !1)
        },
        W = function(e, t) {
            for (var n = 0; n < e.childNodes.length; n++)
                if (h(e.childNodes[n], t))
                    return e.childNodes[n]
        },
        z = function(e) {
            e.style.opacity = "", e.style.display = e.id === I.content ? "block" : "flex"
        },
        U = function(e) {
            e.style.opacity = "", e.style.display = "none"
        },
        F = function(e) {
            return e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        b = function() {
            return document.body.querySelector("." + I.container)
        },
        v = function(e) {
            var t = b();
            return t ? t.querySelector("." + e) : null
        },
        y = function() {
            return v(I.popup)
        },
        w = function() {
            var e = y();
            return c(e.querySelectorAll("." + I.icon))
        },
        C = function() {
            return v(I.title)
        },
        k = function() {
            return v(I.content)
        },
        x = function() {
            return v(I.image)
        },
        A = function() {
            return v(I.progresssteps)
        },
        B = function() {
            return v(I.confirm)
        },
        P = function() {
            return v(I.cancel)
        },
        S = function() {
            return v(I.actions)
        },
        E = function() {
            return v(I.footer)
        },
        O = function() {
            return v(I.close)
        },
        K = function() {
            var e = c(y().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e, t) {
                    return e = parseInt(e.getAttribute("tabindex")), (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0
                }),
                t = c(y().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e) {
                    return "-1" !== e.getAttribute("tabindex")
                });
            return function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(e.concat(t)).filter(function(e) {
                return F(e)
            })
        },
        L = function() {
            return !T() && !document.body.classList.contains(I["no-backdrop"])
        },
        T = function() {
            return document.body.classList.contains(I["toast-shown"])
        },
        j = function() {
            return "undefined" == typeof window || "undefined" == typeof document
        },
        _ = ('\n <div aria-labelledby="' + I.title + '" aria-describedby="' + I.content + '" class="' + I.popup + '" tabindex="-1">\n   <div class="' + I.header + '">\n     <ul class="' + I.progresssteps + '"></ul>\n     <div class="' + I.icon + " " + f.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + I.icon + " " + f.question + '">\n       <span class="' + I["icon-text"] + '">?</span>\n      </div>\n     <div class="' + I.icon + " " + f.warning + '">\n       <span class="' + I["icon-text"] + '">!</span>\n      </div>\n     <div class="' + I.icon + " " + f.info + '">\n       <span class="' + I["icon-text"] + '">i</span>\n      </div>\n     <div class="' + I.icon + " " + f.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + I.image + '" />\n     <h2 class="' + I.title + '" id="' + I.title + '"></h2>\n     <button type="button" class="' + I.close + '">×</button>\n   </div>\n   <div class="' + I.content + '">\n     <div id="' + I.content + '"></div>\n     <input class="' + I.input + '" />\n     <input type="file" class="' + I.file + '" />\n     <div class="' + I.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + I.select + '"></select>\n     <div class="' + I.radio + '"></div>\n     <label for="' + I.checkbox + '" class="' + I.checkbox + '">\n       <input type="checkbox" />\n       <span class="' + I.label + '"></span>\n     </label>\n     <textarea class="' + I.textarea + '"></textarea>\n     <div class="' + I.validationerror + '" id="' + I.validationerror + '"></div>\n   </div>\n   <div class="' + I.actions + '">\n     <button type="button" class="' + I.confirm + '">OK</button>\n     <button type="button" class="' + I.cancel + '">Cancel</button>\n   </div>\n   <div class="' + I.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        Z = function(e) {
            var t = b();
            if (t && (t.parentNode.removeChild(t), N([document.documentElement, document.body], [I["no-backdrop"], I["toast-shown"], I["has-column"]])), !j()) {
                var n = document.createElement("div");
                n.className = I.container + ' ' + e.classShown, n.innerHTML = _, ("string" == typeof e.target ? document.querySelector(e.target) : e.target).appendChild(n);
                var o = y(),
                    r = k(),
                    i = W(r, I.input),
                    a = W(r, I.file),
                    s = r.querySelector("." + I.range + " input"),
                    u = r.querySelector("." + I.range + " output"),
                    c = W(r, I.select),
                    l = r.querySelector("." + I.checkbox + " input"),
                    d = W(r, I.textarea);
                o.setAttribute("role", e.toast ? "alert" : "dialog"), o.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || o.setAttribute("aria-modal", "true");
                var p = void 0,
                    f = function(e) {
                        Ee.isVisible() && p !== e.target.value && Ee.resetValidationError(), p = e.target.value
                    };
                return i.oninput = f, a.onchange = f, c.onchange = f, l.onchange = f, d.oninput = f, s.oninput = function(e) {
                    f(e), u.value = s.value
                }, s.onchange = function(e) {
                    f(e), s.nextSibling.value = s.value
                }, o
            }
            V("SweetAlert2 requires document to initialize")
        },
        Q = function(e, t) {
            if (!e)
                return U(t);
            if ("object" === (void 0 === e ? "undefined" : q(e)))
                if (t.innerHTML = "", 0 in e)
                    for (var n = 0; n in e; n++)
                        t.appendChild(e[n].cloneNode(!0));
                else
                    t.appendChild(e.cloneNode(!0));
            else
                e && (t.innerHTML = e);
            z(t)
        },
        Y = function() {
            if (j())
                return !1;
            var e = document.createElement("div"),
                t = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (var n in t)
                if (t.hasOwnProperty(n) && void 0 !== e.style[n])
                    return t[n];
            return !1
        }(),
        $ = function(e) {
            var t,
                n,
                o = S(),
                r = B(),
                i = P();
            if (e.showConfirmButton || e.showCancelButton ? z(o) : U(o), e.showCancelButton ? i.style.display = "inline-block" : U(i), e.showConfirmButton ? (n = "display", (t = r).style.removeProperty ? t.style.removeProperty(n) : t.style.removeAttribute(n)) : U(r), r.innerHTML = e.confirmButtonText, i.innerHTML = e.cancelButtonText, r.setAttribute("aria-label", e.confirmButtonAriaLabel), i.setAttribute("aria-label", e.cancelButtonAriaLabel), r.className = I.confirm, R(r, e.confirmButtonClass), i.className = I.cancel, R(i, e.cancelButtonClass), e.buttonsStyling) {
                R([r, i], I.styled), e.confirmButtonColor && (r.style.backgroundColor = e.confirmButtonColor), e.cancelButtonColor && (i.style.backgroundColor = e.cancelButtonColor);
                var a = window.getComputedStyle(r).getPropertyValue("background-color");
                r.style.borderLeftColor = a, r.style.borderRightColor = a
            } else
                N([r, i], I.styled), r.style.backgroundColor = r.style.borderLeftColor = r.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""
        },
        J = function(e) {
            var t = k().querySelector("#" + I.content);
            e.html ? Q(e.html, t) : e.text ? (t.textContent = e.text, z(t)) : U(t)
        },
        X = function(e) {
            for (var t = w(), n = 0; n < t.length; n++)
                U(t[n]);
            if (e.type)
                if (-1 !== Object.keys(f).indexOf(e.type)) {
                    var o = Ee.getPopup().querySelector("." + I.icon + "." + f[e.type]);
                    z(o), e.animation && R(o, "swal2-animate-" + e.type + "-icon")
                } else
                    V('Unknown type! Expected "success", "error", "warning", "info" or "question", got "' + e.type + '"')
        },
        G = function(e) {
            var t = x();
            e.imageUrl ? (t.setAttribute("src", e.imageUrl), t.setAttribute("alt", e.imageAlt), z(t), e.imageWidth ? t.setAttribute("width", e.imageWidth) : t.removeAttribute("width"), e.imageHeight ? t.setAttribute("height", e.imageHeight) : t.removeAttribute("height"), t.className = I.image, e.imageClass && R(t, e.imageClass)) : U(t)
        },
        ee = function(r) {
            var i = A(),
                a = parseInt(null === r.currentProgressStep ? Ee.getQueueStep() : r.currentProgressStep, 10);
            r.progressSteps && r.progressSteps.length ? (z(i), i.innerHTML = "", a >= r.progressSteps.length && d("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), r.progressSteps.forEach(function(e, t) {
                var n = document.createElement("li");
                if (R(n, I.progresscircle), n.innerHTML = e, t === a && R(n, I.activeprogressstep), i.appendChild(n), t !== r.progressSteps.length - 1) {
                    var o = document.createElement("li");
                    R(o, I.progressline), r.progressStepsDistance && (o.style.width = r.progressStepsDistance), i.appendChild(o)
                }
            })) : U(i)
        },
        te = function(e) {
            var t = C();
            e.titleText ? t.innerText = e.titleText : e.title && ("string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), Q(e.title, t))
        },
        ne = function() {
            null === m.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (m.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = m.previousBodyPadding + function() {
                if ("ontouchstart" in window || navigator.msMaxTouchPoints)
                    return 0;
                var e = document.createElement("div");
                e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e);
                var t = e.offsetWidth - e.clientWidth;
                return document.body.removeChild(e), t
            }() + "px")
        },
        oe = {},
        re = function(e, n) {
            var o = b(),
                t = y();
            if (t) {
                null !== e && "function" == typeof e && e(t), N(t, I.show), R(t, I.hide);
                var r = function() {
                    var e,
                        t;
                    T() || (e = window.scrollX, t = window.scrollY, oe.restoreFocusTimeout = setTimeout(function() {
                        oe.previousActiveElement && oe.previousActiveElement.focus ? (oe.previousActiveElement.focus(), oe.previousActiveElement = null) : document.body && document.body.focus()
                    }, 100), void 0 !== e && void 0 !== t && window.scrollTo(e, t), oe.keydownTarget.removeEventListener("keydown", oe.keydownHandler, {
                        capture: oe.keydownListenerCapture
                    }), oe.keydownHandlerAdded = !1), o.parentNode && o.parentNode.removeChild(o), N([document.documentElement, document.body], [I.shown, I["height-auto"], I["no-backdrop"], I["toast-shown"], I["toast-column"]]), L() && (null !== m.previousBodyPadding && (document.body.style.paddingRight = m.previousBodyPadding, m.previousBodyPadding = null), function() {
                        if (h(document.body, I.iosfix)) {
                            var e = parseInt(document.body.style.top, 10);
                            N(document.body, I.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e
                        }
                    }(), c(document.body.children).forEach(function(e) {
                        e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
                    })), null !== n && "function" == typeof n && setTimeout(function() {
                        n()
                    })
                };
                Y && !h(t, I.noanimation) ? t.addEventListener(Y, function e() {
                    t.removeEventListener(Y, e), h(t, I.hide) && r()
                }) : r()
            }
        };
    function ie(e) {
        var t = function e() {
            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
            if (!(this instanceof e))
                return new (Function.prototype.bind.apply(e, [null].concat(n)));
            Object.getPrototypeOf(e).apply(this, n)
        };
        return t.prototype = r(Object.create(e.prototype), {
            constructor: t
        }), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e, t
    }
    var ae = {
            classShown: '',
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: null,
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onAfterClose: null,
            onOpen: null,
            onClose: null,
            useRejections: !1,
            expectRejections: !1
        },
        se = ["useRejections", "expectRejections"],
        ue = function(e) {
            return ae.hasOwnProperty(e) || "extraParams" === e
        },
        ce = function(e) {
            return -1 !== se.indexOf(e)
        },
        le = function(e) {
            for (var t in e)
                ue(t) || d('Unknown parameter "' + t + '"'), e.toast && -1 !== ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"].indexOf(t) && d('The parameter "' + t + '" is incompatible with toasts'), ce(t) && l('The parameter "' + t + '" is deprecated and will be removed in the next major release.')
        },
        de = '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',
        pe = {};
    var fe = [],
        me = function() {
            var e = y();
            e || Ee(""), e = y();
            var t = S(),
                n = B(),
                o = P();
            z(t), z(n), R([e, t], I.loading), n.disabled = !0, o.disabled = !0, e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus()
        },
        he = Object.freeze({
            isValidParameter: ue,
            isDeprecatedParameter: ce,
            argsToParams: function(n) {
                var o = {};
                switch (q(n[0])) {
                case "object":
                    r(o, n[0]);
                    break;
                default:
                    ["title", "html", "type"].forEach(function(e, t) {
                        switch (q(n[t])) {
                        case "string":
                            o[e] = n[t];
                            break;
                        case "undefined":
                            break;
                        default:
                            V("Unexpected type of " + e + '! Expected "string", got ' + q(n[t]))
                        }
                    })
                }
                return o
            },
            adaptInputValidator: function(n) {
                return function(e, t) {
                    return n.call(this, e, t).then(function() {}, function(e) {
                        return e
                    })
                }
            },
            close: re,
            closePopup: re,
            closeModal: re,
            closeToast: re,
            isVisible: function() {
                return !!y()
            },
            clickConfirm: function() {
                return B().click()
            },
            clickCancel: function() {
                return P().click()
            },
            getContainer: b,
            getPopup: y,
            getTitle: C,
            getContent: k,
            getImage: x,
            getIcons: w,
            getCloseButton: O,
            getButtonsWrapper: function() {
                return l("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), v(I.actions)
            },
            getActions: S,
            getConfirmButton: B,
            getCancelButton: P,
            getFooter: E,
            getFocusableElements: K,
            isLoading: function() {
                return y().hasAttribute("data-loading")
            },
            fire: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return new (Function.prototype.bind.apply(this, [null].concat(t)))
            },
            mixin: function(n) {
                return ie(function(e) {
                    function t() {
                        return s(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                    }
                    return a(t, e), o(t, [{
                        key: "_main",
                        value: function(e) {
                            return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_main", this).call(this, r({}, n, e))
                        }
                    }]), t
                }(this))
            },
            queue: function(e) {
                var i = this;
                fe = e;
                var a = function() {
                        fe = [], document.body.removeAttribute("data-swal2-queue-step")
                    },
                    s = [];
                return new Promise(function(r) {
                    !function t(n, o) {
                        n < fe.length ? (document.body.setAttribute("data-swal2-queue-step", n), i(fe[n]).then(function(e) {
                            void 0 !== e.value ? (s.push(e.value), t(n + 1, o)) : (a(), r({
                                dismiss: e.dismiss
                            }))
                        })) : (a(), r({
                            value: s
                        }))
                    }(0)
                })
            },
            getQueueStep: function() {
                return document.body.getAttribute("data-swal2-queue-step")
            },
            insertQueueStep: function(e, t) {
                return t && t < fe.length ? fe.splice(t, 0, e) : fe.push(e)
            },
            deleteQueueStep: function(e) {
                void 0 !== fe[e] && fe.splice(e, 1)
            },
            showLoading: me,
            enableLoading: me,
            getTimerLeft: function() {
                return oe.timeout && oe.timeout.getTimerLeft()
            }
        }),
        ge = "function" == typeof Symbol ? Symbol : function() {
            var t = 0;
            function e(e) {
                return "__" + e + "_" + Math.floor(1e9 * Math.random()) + "_" + ++t + "__"
            }
            return e.iterator = e("Symbol.iterator"), e
        }(),
        be = "function" == typeof WeakMap ? WeakMap : function(n, o, t) {
            function e() {
                o(this, n, {
                    value: ge("WeakMap")
                })
            }
            return e.prototype = {
                delete: function(e) {
                    delete e[this[n]]
                },
                get: function(e) {
                    return e[this[n]]
                },
                has: function(e) {
                    return t.call(e, this[n])
                },
                set: function(e, t) {
                    o(e, this[n], {
                        configurable: !0,
                        value: t
                    })
                }
            }, e
        }(ge("WeakMap"), Object.defineProperty, {}.hasOwnProperty),
        ve = {
            promise: new be,
            innerParams: new be,
            domCache: new be
        };
    function ye() {
        var e = ve.innerParams.get(this),
            t = ve.domCache.get(this);
        e.showConfirmButton || (U(t.confirmButton), e.showCancelButton || U(t.actions)), N([t.popup, t.actions], I.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1
    }
    var we = function e(t, n) {
            s(this, e);
            var o = void 0,
                r = void 0,
                i = void 0,
                a = n;
            this.start = function() {
                i = !0, r = new Date, o = setTimeout(t, a)
            }, this.stop = function() {
                i = !1, clearTimeout(o), a -= new Date - r
            }, this.getTimerLeft = function() {
                return i && (this.stop(), this.start()), a
            }, this.start()
        },
        Ce = {
            email: function(e, t) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid email address")
            },
            url: function(e, t) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid URL")
            }
        };
    var ke = function(e) {
        var t = b(),
            n = y();
        null !== e.onBeforeOpen && "function" == typeof e.onBeforeOpen && e.onBeforeOpen(n), e.animation ? (R(n, I.show), R(t, I.fade), N(n, I.hide)) : N(n, I.fade), z(n), t.style.overflowY = "hidden", Y && !h(n, I.noanimation) ? n.addEventListener(Y, function e() {
            n.removeEventListener(Y, e), t.style.overflowY = "auto"
        }) : t.style.overflowY = "auto", R([document.documentElement, document.body, t], I.shown), e.heightAuto && e.backdrop && !e.toast && R([document.documentElement, document.body], I["height-auto"]), L() && (ne(), function() {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !h(document.body, I.iosfix)) {
                var e = document.body.scrollTop;
                document.body.style.top = -1 * e + "px", R(document.body, I.iosfix)
            }
        }(), c(document.body.children).forEach(function(e) {
            e === b() || e.contains(b()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"))
        })), T() || oe.previousActiveElement || (oe.previousActiveElement = document.activeElement), null !== e.onOpen && "function" == typeof e.onOpen && setTimeout(function() {
            e.onOpen(n)
        })
    };
    var xe = Object.freeze({
            hideLoading: ye,
            disableLoading: ye,
            getInput: function(e) {
                var t = ve.innerParams.get(this),
                    n = ve.domCache.get(this);
                if (!(e = e || t.input))
                    return null;
                switch (e) {
                case "select":
                case "textarea":
                case "file":
                    return W(n.content, I[e]);
                case "checkbox":
                    return n.popup.querySelector("." + I.checkbox + " input");
                case "radio":
                    return n.popup.querySelector("." + I.radio + " input:checked") || n.popup.querySelector("." + I.radio + " input:first-child");
                case "range":
                    return n.popup.querySelector("." + I.range + " input");
                default:
                    return W(n.content, I.input)
                }
            },
            enableButtons: function() {
                var e = ve.domCache.get(this);
                e.confirmButton.disabled = !1, e.cancelButton.disabled = !1
            },
            disableButtons: function() {
                var e = ve.domCache.get(this);
                e.confirmButton.disabled = !0, e.cancelButton.disabled = !0
            },
            enableConfirmButton: function() {
                ve.domCache.get(this).confirmButton.disabled = !1
            },
            disableConfirmButton: function() {
                ve.domCache.get(this).confirmButton.disabled = !0
            },
            enableInput: function() {
                var e = this.getInput();
                if (!e)
                    return !1;
                if ("radio" === e.type)
                    for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++)
                        t[n].disabled = !1;
                else
                    e.disabled = !1
            },
            disableInput: function() {
                var e = this.getInput();
                if (!e)
                    return !1;
                if (e && "radio" === e.type)
                    for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++)
                        t[n].disabled = !0;
                else
                    e.disabled = !0
            },
            showValidationError: function(e) {
                var t = ve.domCache.get(this);
                t.validationError.innerHTML = e;
                var n = window.getComputedStyle(t.popup);
                t.validationError.style.marginLeft = "-" + n.getPropertyValue("padding-left"), t.validationError.style.marginRight = "-" + n.getPropertyValue("padding-right"), z(t.validationError);
                var o = this.getInput();
                o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", I.validationerror), D(o), R(o, I.inputerror))
            },
            resetValidationError: function() {
                var e = ve.domCache.get(this);
                e.validationError && U(e.validationError);
                var t = this.getInput();
                t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), N(t, I.inputerror))
            },
            getProgressSteps: function() {
                return ve.innerParams.get(this).progressSteps
            },
            setProgressSteps: function(e) {
                var t = ve.innerParams.get(this),
                    n = r({}, t, {
                        progressSteps: e
                    });
                ve.innerParams.set(this, n), ee(n)
            },
            showProgressSteps: function() {
                var e = ve.domCache.get(this);
                z(e.progressSteps)
            },
            hideProgressSteps: function() {
                var e = ve.domCache.get(this);
                U(e.progressSteps)
            },
            _main: function(e) {
                var L = this;
                le(e);
                var T = r({}, ae, e);
                !function(t) {
                    t.inputValidator || Object.keys(Ce).forEach(function(e) {
                        t.input === e && (t.inputValidator = t.expectRejections ? Ce[e] : Ee.adaptInputValidator(Ce[e]))
                    }), (!t.target || "string" == typeof t.target && !document.querySelector(t.target) || "string" != typeof t.target && !t.target.appendChild) && (d('Target parameter is not valid, defaulting to "body"'), t.target = "body");
                    var e = void 0,
                        n = y(),
                        o = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
                    e = n && o && n.parentNode !== o.parentNode ? Z(t) : n || Z(t), t.width && (e.style.width = "number" == typeof t.width ? t.width + "px" : t.width), t.padding && (e.style.padding = "number" == typeof t.padding ? t.padding + "px" : t.padding), t.background && (e.style.background = t.background);
                    for (var r = window.getComputedStyle(e).getPropertyValue("background-color"), i = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), a = 0; a < i.length; a++)
                        i[a].style.backgroundColor = r;
                    var s = b(),
                        u = O(),
                        c = E();
                    if (te(t), J(t), "string" == typeof t.backdrop ? b().style.background = t.backdrop : t.backdrop || R([document.documentElement, document.body], I["no-backdrop"]), !t.backdrop && t.allowOutsideClick && d('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), t.position in I ? R(s, I[t.position]) : (d('The "position" parameter is not valid, defaulting to "center"'), R(s, I.center)), t.grow && "string" == typeof t.grow) {
                        var l = "grow-" + t.grow;
                        l in I && R(s, I[l])
                    }
                    "function" == typeof t.animation && (t.animation = t.animation.call()), t.showCloseButton ? (u.setAttribute("aria-label", t.closeButtonAriaLabel), z(u)) : U(u), e.className = I.popup, t.toast ? (R([document.documentElement, document.body], I["toast-shown"]), R(e, I.toast)) : R(e, I.modal), t.customClass && R(e, t.customClass), ee(t), X(t), G(t), $(t), Q(t.footer, c), !0 === t.animation ? N(e, I.noanimation) : R(e, I.noanimation), t.showLoaderOnConfirm && !t.preConfirm && d("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")
                }(T), Object.freeze(T), ve.innerParams.set(this, T), oe.timeout && (oe.timeout.stop(), delete oe.timeout), clearTimeout(oe.restoreFocusTimeout);
                var j = {
                    popup: y(),
                    container: b(),
                    content: k(),
                    actions: S(),
                    confirmButton: B(),
                    cancelButton: P(),
                    closeButton: O(),
                    validationError: v(I.validationerror),
                    progressSteps: A()
                };
                ve.domCache.set(this, j);
                var _ = this.constructor;
                return new Promise(function(t, n) {
                    var o = function(e) {
                            _.closePopup(T.onClose, T.onAfterClose), T.useRejections ? t(e) : t({
                                value: e
                            })
                        },
                        u = function(e) {
                            _.closePopup(T.onClose, T.onAfterClose), T.useRejections ? n(e) : t({
                                dismiss: e
                            })
                        },
                        c = function(e) {
                            _.closePopup(T.onClose, T.onAfterClose), n(e)
                        };
                    T.timer && (oe.timeout = new we(function() {
                        u("timer"), delete oe.timeout
                    }, T.timer)), T.input && setTimeout(function() {
                        var e = L.getInput();
                        e && D(e)
                    }, 0);
                    for (var l = function(t) {
                            if (T.showLoaderOnConfirm && _.showLoading(), T.preConfirm) {
                                L.resetValidationError();
                                var e = Promise.resolve().then(function() {
                                    return T.preConfirm(t, T.extraParams)
                                });
                                T.expectRejections ? e.then(function(e) {
                                    return o(e || t)
                                }, function(e) {
                                    L.hideLoading(), e && L.showValidationError(e)
                                }) : e.then(function(e) {
                                    F(j.validationError) || !1 === e ? L.hideLoading() : o(e || t)
                                }, function(e) {
                                    return c(e)
                                })
                            } else
                                o(t)
                        }, e = function(e) {
                            var t = e.target,
                                n = j.confirmButton,
                                o = j.cancelButton,
                                r = n && (n === t || n.contains(t)),
                                i = o && (o === t || o.contains(t));
                            switch (e.type) {
                            case "click":
                                if (r && _.isVisible())
                                    if (L.disableButtons(), T.input) {
                                        var a = function() {
                                            var e = L.getInput();
                                            if (!e)
                                                return null;
                                            switch (T.input) {
                                            case "checkbox":
                                                return e.checked ? 1 : 0;
                                            case "radio":
                                                return e.checked ? e.value : null;
                                            case "file":
                                                return e.files.length ? e.files[0] : null;
                                            default:
                                                return T.inputAutoTrim ? e.value.trim() : e.value
                                            }
                                        }();
                                        if (T.inputValidator) {
                                            L.disableInput();
                                            var s = Promise.resolve().then(function() {
                                                return T.inputValidator(a, T.extraParams)
                                            });
                                            T.expectRejections ? s.then(function() {
                                                L.enableButtons(), L.enableInput(), l(a)
                                            }, function(e) {
                                                L.enableButtons(), L.enableInput(), e && L.showValidationError(e)
                                            }) : s.then(function(e) {
                                                L.enableButtons(), L.enableInput(), e ? L.showValidationError(e) : l(a)
                                            }, function(e) {
                                                return c(e)
                                            })
                                        } else
                                            l(a)
                                    } else
                                        l(!0);
                                else
                                    i && _.isVisible() && (L.disableButtons(), u(_.DismissReason.cancel))
                            }
                        }, r = j.popup.querySelectorAll("button"), i = 0; i < r.length; i++)
                        r[i].onclick = e, r[i].onmouseover = e, r[i].onmouseout = e, r[i].onmousedown = e;
                    if (j.closeButton.onclick = function() {
                        u(_.DismissReason.close)
                    }, T.toast)
                        j.popup.onclick = function() {
                            T.showConfirmButton || T.showCancelButton || T.showCloseButton || T.input || u(_.DismissReason.close)
                        };
                    else {
                        var a = !1;
                        j.popup.onmousedown = function() {
                            j.container.onmouseup = function(e) {
                                j.container.onmouseup = void 0, e.target === j.container && (a = !0)
                            }
                        }, j.container.onmousedown = function() {
                            j.popup.onmouseup = function(e) {
                                j.popup.onmouseup = void 0, (e.target === j.popup || j.popup.contains(e.target)) && (a = !0)
                            }
                        }, j.container.onclick = function(e) {
                            a ? a = !1 : e.target === j.container && M(T.allowOutsideClick) && u(_.DismissReason.backdrop)
                        }
                    }
                    T.reverseButtons ? j.confirmButton.parentNode.insertBefore(j.cancelButton, j.confirmButton) : j.confirmButton.parentNode.insertBefore(j.confirmButton, j.cancelButton);
                    var s = function(e, t) {
                        for (var n = K(T.focusCancel), o = 0; o < n.length; o++)
                            return (e += t) === n.length ? e = 0 : -1 === e && (e = n.length - 1), n[e].focus();
                        j.popup.focus()
                    };
                    oe.keydownHandlerAdded && (oe.keydownTarget.removeEventListener("keydown", oe.keydownHandler, {
                        capture: oe.keydownListenerCapture
                    }), oe.keydownHandlerAdded = !1), T.toast || (oe.keydownHandler = function(e) {
                        return function(e, t) {
                            if (t.stopKeydownPropagation && e.stopPropagation(), "Enter" !== e.key || e.isComposing)
                                if ("Tab" === e.key) {
                                    for (var n = e.target, o = K(t.focusCancel), r = -1, i = 0; i < o.length; i++)
                                        if (n === o[i]) {
                                            r = i;
                                            break
                                        }
                                    e.shiftKey ? s(r, -1) : s(r, 1), e.stopPropagation(), e.preventDefault()
                                } else
                                    -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(e.key) ? document.activeElement === j.confirmButton && F(j.cancelButton) ? j.cancelButton.focus() : document.activeElement === j.cancelButton && F(j.confirmButton) && j.confirmButton.focus() : "Escape" !== e.key && "Esc" !== e.key || !0 !== M(t.allowEscapeKey) || u(_.DismissReason.esc);
                            else if (e.target && L.getInput() && e.target.outerHTML === L.getInput().outerHTML) {
                                if (-1 !== ["textarea", "file"].indexOf(t.input))
                                    return;
                                _.clickConfirm(), e.preventDefault()
                            }
                        }(e, T)
                    }, oe.keydownTarget = T.keydownListenerCapture ? window : j.popup, oe.keydownListenerCapture = T.keydownListenerCapture, oe.keydownTarget.addEventListener("keydown", oe.keydownHandler, {
                        capture: oe.keydownListenerCapture
                    }), oe.keydownHandlerAdded = !0), L.enableButtons(), L.hideLoading(), L.resetValidationError(), T.toast && (T.input || T.footer || T.showCloseButton) ? R(document.body, I["toast-column"]) : N(document.body, I["toast-column"]);
                    for (var d = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], p = void 0, f = 0; f < d.length; f++) {
                        var m = I[d[f]],
                            h = W(j.content, m);
                        if (p = L.getInput(d[f])) {
                            for (var g in p.attributes)
                                if (p.attributes.hasOwnProperty(g)) {
                                    var b = p.attributes[g].name;
                                    "type" !== b && "value" !== b && p.removeAttribute(b)
                                }
                            for (var v in T.inputAttributes)
                                p.setAttribute(v, T.inputAttributes[v])
                        }
                        h.className = m, T.inputClass && R(h, T.inputClass), U(h)
                    }
                    var y = void 0;
                    switch (T.input) {
                    case "text":
                    case "email":
                    case "password":
                    case "number":
                    case "tel":
                    case "url":
                        (p = W(j.content, I.input)).value = T.inputValue, p.placeholder = T.inputPlaceholder, p.type = T.input, z(p);
                        break;
                    case "file":
                        (p = W(j.content, I.file)).placeholder = T.inputPlaceholder, p.type = T.input, z(p);
                        break;
                    case "range":
                        var w = W(j.content, I.range),
                            C = w.querySelector("input"),
                            k = w.querySelector("output");
                        C.value = T.inputValue, C.type = T.input, k.value = T.inputValue, z(w);
                        break;
                    case "select":
                        var x = W(j.content, I.select);
                        if (x.innerHTML = "", T.inputPlaceholder) {
                            var A = document.createElement("option");
                            A.innerHTML = T.inputPlaceholder, A.value = "", A.disabled = !0, A.selected = !0, x.appendChild(A)
                        }
                        y = function(e) {
                            e.forEach(function(e) {
                                var t = e[0],
                                    n = e[1],
                                    o = document.createElement("option");
                                o.value = t, o.innerHTML = n, T.inputValue.toString() === t.toString() && (o.selected = !0), x.appendChild(o)
                            }), z(x), x.focus()
                        };
                        break;
                    case "radio":
                        var B = W(j.content, I.radio);
                        B.innerHTML = "", y = function(e) {
                            e.forEach(function(e) {
                                var t = e[0],
                                    n = e[1],
                                    o = document.createElement("input"),
                                    r = document.createElement("label");
                                o.type = "radio", o.name = I.radio, o.value = t, T.inputValue.toString() === t.toString() && (o.checked = !0);
                                var i = document.createElement("span");
                                i.innerHTML = n, i.className = I.label, r.appendChild(o), r.appendChild(i), B.appendChild(r)
                            }), z(B);
                            var t = B.querySelectorAll("input");
                            t.length && t[0].focus()
                        };
                        break;
                    case "checkbox":
                        var P = W(j.content, I.checkbox),
                            S = L.getInput("checkbox");
                        S.type = "checkbox", S.value = 1, S.id = I.checkbox, S.checked = Boolean(T.inputValue), P.querySelector("span").innerHTML = T.inputPlaceholder, z(P);
                        break;
                    case "textarea":
                        var E = W(j.content, I.textarea);
                        E.value = T.inputValue, E.placeholder = T.inputPlaceholder, z(E);
                        break;
                    case null:
                        break;
                    default:
                        V('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + T.input + '"')
                    }
                    if ("select" === T.input || "radio" === T.input) {
                        var O = function(e) {
                            return y((t = e, n = [], "undefined" != typeof Map && t instanceof Map ? t.forEach(function(e, t) {
                                n.push([t, e])
                            }) : Object.keys(t).forEach(function(e) {
                                n.push([e, t[e]])
                            }), n));
                            var t,
                                n
                        };
                        H(T.inputOptions) ? (_.showLoading(), T.inputOptions.then(function(e) {
                            L.hideLoading(), O(e)
                        })) : "object" === q(T.inputOptions) ? O(T.inputOptions) : V("Unexpected type of inputOptions! Expected object, Map or Promise, got " + q(T.inputOptions))
                    } else
                        -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(T.input) && H(T.inputValue) && (_.showLoading(), U(p), T.inputValue.then(function(e) {
                            p.value = "number" === T.input ? parseFloat(e) || 0 : e + "", z(p), p.focus(), L.hideLoading()
                        }).catch(function(e) {
                            V("Error in inputValue promise: " + e), p.value = "", z(p), p.focus(), L.hideLoading()
                        }));
                    ke(T), T.toast || (M(T.allowEnterKey) ? T.focusCancel && F(j.cancelButton) ? j.cancelButton.focus() : T.focusConfirm && F(j.confirmButton) ? j.confirmButton.focus() : s(-1, 1) : document.activeElement && document.activeElement.blur()), j.container.scrollTop = 0
                })
            }
        }),
        Ae = void 0;
    function Be() {
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise && V("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (0 === t.length)
                return V("At least 1 argument is expected!"), !1;
            Ae = this;
            var o = Object.freeze(this.constructor.argsToParams(t));
            Object.defineProperties(this, {
                params: {
                    value: o,
                    writable: !1,
                    enumerable: !0
                }
            });
            var r = this._main(this.params);
            ve.promise.set(this, r)
        }
    }
    Be.prototype.then = function(e, t) {
        return ve.promise.get(this).then(e, t)
    }, Be.prototype.catch = function(e) {
        return ve.promise.get(this).catch(e)
    }, Be.prototype.finally = function(e) {
        return ve.promise.get(this).finally(e)
    }, r(Be.prototype, xe), r(Be, he), Object.keys(xe).forEach(function(t) {
        Be[t] = function() {
            var e;
            if (Ae)
                return (e = Ae)[t].apply(e, arguments)
        }
    }), Be.DismissReason = e, Be.noop = function() {}, Be.version = "7.26.12";
    var Pe,
        Se,
        Ee = ie((Pe = Be, Se = function(e) {
            function t() {
                return s(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, Pe), o(t, [{
                key: "_main",
                value: function(e) {
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_main", this).call(this, r({}, pe, e))
                }
            }], [{
                key: "setDefaults",
                value: function(t) {
                    if (l(de), !t || "object" !== (void 0 === t ? "undefined" : q(t)))
                        throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");
                    le(t), Object.keys(t).forEach(function(e) {
                        Pe.isValidParameter(e) && (pe[e] = t[e])
                    })
                }
            }, {
                key: "resetDefaults",
                value: function() {
                    l(de), pe = {}
                }
            }]), t
        }(), "undefined" != typeof window && "object" === q(window._swalDefaults) && Se.setDefaults(window._swalDefaults), Se));
    return Ee.default = Ee
}), "undefined" != typeof window && window.Sweetalert2 && (window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2);

