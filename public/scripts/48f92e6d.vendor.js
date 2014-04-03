! function(a, b) {
    function c(a) {
        var b = a.length,
            c = kb.type(a);
        return kb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = zb[a] = {};
        return kb.each(a.match(mb) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function e(a, c, d, e) {
        if (kb.acceptData(a)) {
            var f, g, h = kb.expando,
                i = a.nodeType,
                j = i ? kb.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = bb.pop() || kb.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: kb.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = kb.extend(j[k], c) : j[k].data = kb.extend(j[k].data, c)), g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[kb.camelCase(c)] = d), "string" == typeof c ? (f = g[c], null == f && (f = g[kb.camelCase(c)])) : f = g, f
        }
    }

    function f(a, b, c) {
        if (kb.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? kb.cache : a,
                i = f ? a[kb.expando] : kb.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    kb.isArray(b) ? b = b.concat(kb.map(b, kb.camelCase)) : b in d ? b = [b] : (b = kb.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !h(d) : !kb.isEmptyObject(d)) return
                }(c || (delete g[i].data, h(g[i]))) && (f ? kb.cleanData([a], !0) : kb.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
            }
        }
    }

    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Bb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Ab.test(d) ? kb.parseJSON(d) : d
                } catch (f) {}
                kb.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b;
        for (b in a)
            if (("data" !== b || !kb.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function i() {
        return !0
    }

    function j() {
        return !1
    }

    function k() {
        try {
            return Y.activeElement
        } catch (a) {}
    }

    function l(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function m(a, b, c) {
        if (kb.isFunction(b)) return kb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return kb.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Qb.test(b)) return kb.filter(b, a, c);
            b = kb.filter(b, a)
        }
        return kb.grep(a, function(a) {
            return kb.inArray(a, b) >= 0 !== c
        })
    }

    function n(a) {
        var b = Ub.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function o(a, b) {
        return kb.nodeName(a, "table") && kb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function p(a) {
        return a.type = (null !== kb.find.attr(a, "type")) + "/" + a.type, a
    }

    function q(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) kb._data(c, "globalEval", !b || kb._data(b[d], "globalEval"))
    }

    function s(a, b) {
        if (1 === b.nodeType && kb.hasData(a)) {
            var c, d, e, f = kb._data(a),
                g = kb._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) kb.event.add(b, c, h[c][d])
            }
            g.data && (g.data = kb.extend({}, g.data))
        }
    }

    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !kb.support.noCloneEvent && b[kb.expando]) {
                e = kb._data(b);
                for (d in e.events) kb.removeEvent(b, d, e.handle);
                b.removeAttribute(kb.expando)
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), kb.support.html5Clone && a.innerHTML && !kb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function u(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g)
            for (g = [], d = a.childNodes || a; null != (e = d[f]); f++)!c || kb.nodeName(e, c) ? g.push(e) : kb.merge(g, u(e, c));
        return c === b || c && kb.nodeName(a, c) ? kb.merge([a], g) : g
    }

    function v(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked)
    }

    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;)
            if (b = yc[e] + c, b in a) return b;
        return d
    }

    function x(a, b) {
        return a = b || a, "none" === kb.css(a, "display") || !kb.contains(a.ownerDocument, a)
    }

    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = kb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = kb._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && kb._data(d, "olddisplay", e ? c : kb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function z(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += kb.css(a, c + xc[f], !0, e)), d ? ("content" === c && (g -= kb.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= kb.css(a, "border" + xc[f] + "Width", !0, e))) : (g += kb.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += kb.css(a, "border" + xc[f] + "Width", !0, e)));
        return g
    }

    function B(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kc(a),
            g = kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (kb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function C(a) {
        var b = Y,
            c = uc[a];
        return c || (c = D(a, b), "none" !== c && c || (jc = (jc || kb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jc.detach()), uc[a] = c), c
    }

    function D(a, b) {
        var c = kb(b.createElement(a)).appendTo(b.body),
            d = kb.css(c[0], "display");
        return c.remove(), d
    }

    function E(a, b, c, d) {
        var e;
        if (kb.isArray(b)) kb.each(b, function(b, e) {
            c || Ac.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== kb.type(b)) d(a, b);
        else
            for (e in b) E(a + "[" + e + "]", b[e], c, d)
    }

    function F(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(mb) || [];
            if (kb.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function G(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, kb.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === Rc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function H(a, c) {
        var d, e, f = kb.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && kb.extend(!0, a, d), a
    }

    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes;
            "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f)
            for (h in i)
                if (i[h] && i[h].test(f)) {
                    j.unshift(h);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function J(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else
        if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function K() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function M() {
        return setTimeout(function() {
            $c = b
        }), $c = kb.now()
    }

    function N(a, b, c) {
        for (var d, e = (ed[b] || []).concat(ed["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function O(a, b, c) {
        var d, e, f = 0,
            g = dd.length,
            h = kb.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $c || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: kb.extend({}, b),
                opts: kb.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $c || M(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = kb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++)
            if (d = dd[f].call(j, a, k, j.opts)) return d;
        return kb.map(k, N, j), kb.isFunction(j.opts.start) && j.opts.start.call(a, j), kb.fx.timer(kb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function P(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = kb.camelCase(c), e = b[d], f = a[c], kb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = kb.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this,
            k = {}, l = a.style,
            m = a.nodeType && x(a),
            n = kb._data(a, "fxshow");
        c.queue || (h = kb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--, kb.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === kb.css(a, "display") && "none" === kb.css(a, "float") && (kb.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), c.overflow && (l.overflow = "hidden", kb.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ad.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
                k[d] = n && n[d] || kb.style(a, d)
            }
        if (!kb.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = kb._data(a, "fxshow", {}), f && (n.hidden = !m), m ? kb(a).show() : j.done(function() {
                kb(a).hide()
            }), j.done(function() {
                var b;
                kb._removeData(a, "fxshow");
                for (b in k) kb.style(a, b, k[b])
            });
            for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e)
    }

    function S(a, b) {
        var c, d = {
                height: a
            }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function T(a) {
        return kb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var U, V, W = typeof b,
        X = a.location,
        Y = a.document,
        Z = Y.documentElement,
        $ = a.jQuery,
        _ = a.$,
        ab = {}, bb = [],
        cb = "1.10.2",
        db = bb.concat,
        eb = bb.push,
        fb = bb.slice,
        gb = bb.indexOf,
        hb = ab.toString,
        ib = ab.hasOwnProperty,
        jb = cb.trim,
        kb = function(a, b) {
            return new kb.fn.init(a, b, V)
        }, lb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        mb = /\S+/g,
        nb = /^[\s﻿ ]+|[\s﻿ ]+$/g,
        ob = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        qb = /^[\],:{}\s]*$/,
        rb = /(?:^|:|,)(?:\s*\[)+/g,
        sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ub = /^-ms-/,
        vb = /-([\da-z])/gi,
        wb = function(a, b) {
            return b.toUpperCase()
        }, xb = function(a) {
            (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (yb(), kb.ready())
        }, yb = function() {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xb, !1), a.removeEventListener("load", xb, !1)) : (Y.detachEvent("onreadystatechange", xb), a.detachEvent("onload", xb))
        };
    kb.fn = kb.prototype = {
        jquery: cb,
        constructor: kb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ob.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof kb ? c[0] : c, kb.merge(this, kb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pb.test(e[1]) && kb.isPlainObject(c))
                        for (e in c) kb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = Y.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = Y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : kb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), kb.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return fb.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = kb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return kb.each(this, a, b)
        },
        ready: function(a) {
            return kb.ready.promise().done(a), this
        },
        slice: function() {
            return this.pushStack(fb.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function(a) {
            return this.pushStack(kb.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: eb,
        sort: [].sort,
        splice: [].splice
    }, kb.fn.init.prototype = kb.fn, kb.extend = kb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || kb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (f = arguments[i]))
                for (e in f) a = h[e], d = f[e], h !== d && (k && d && (kb.isPlainObject(d) || (c = kb.isArray(d))) ? (c ? (c = !1, g = a && kb.isArray(a) ? a : []) : g = a && kb.isPlainObject(a) ? a : {}, h[e] = kb.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    }, kb.extend({
        expando: "jQuery" + (cb + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === kb && (a.$ = _), b && a.jQuery === kb && (a.jQuery = $), kb
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? kb.readyWait++ : kb.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--kb.readyWait : !kb.isReady) {
                if (!Y.body) return setTimeout(kb.ready);
                kb.isReady = !0, a !== !0 && --kb.readyWait > 0 || (U.resolveWith(Y, [kb]), kb.fn.trigger && kb(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === kb.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === kb.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? ab[hb.call(a)] || "object" : typeof a
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== kb.type(a) || a.nodeType || kb.isWindow(a)) return !1;
            try {
                if (a.constructor && !ib.call(a, "constructor") && !ib.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            if (kb.support.ownLast)
                for (c in a) return ib.call(a, c);
            for (c in a);
            return c === b || ib.call(a, c)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Y;
            var d = pb.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = kb.buildFragment([a], b, e), e && kb(e).remove(), kb.merge([], d.childNodes))
        },
        parseJSON: function(b) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(b) : null === b ? b : "string" == typeof b && (b = kb.trim(b), b && qb.test(b.replace(sb, "@").replace(tb, "]").replace(rb, ""))) ? new Function("return " + b)() : void kb.error("Invalid JSON: " + b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || kb.error("Invalid XML: " + c), d
        },
        noop: function() {},
        globalEval: function(b) {
            b && kb.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(ub, "ms-").replace(vb, wb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: jb && !jb.call("﻿ ") ? function(a) {
            return null == a ? "" : jb.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(nb, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? kb.merge(d, "string" == typeof a ? [a] : a) : eb.call(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (gb) return gb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d)
                for (; d > f; f++) a[e++] = c[f];
            else
                for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !! c; g > f; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return db.apply([], i)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), kb.isFunction(a) ? (d = fb.call(arguments, 2), e = function() {
                return a.apply(c || this, d.concat(fb.call(arguments)))
            }, e.guid = a.guid = a.guid || kb.guid++, e) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === kb.type(d)) {
                f = !0;
                for (i in d) kb.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, kb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(kb(a), c)
            })), c))
                for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }), kb.ready.promise = function(b) {
        if (!U)
            if (U = kb.Deferred(), "complete" === Y.readyState) setTimeout(kb.ready);
            else
        if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xb, !1), a.addEventListener("load", xb, !1);
        else {
            Y.attachEvent("onreadystatechange", xb), a.attachEvent("onload", xb);
            var c = !1;
            try {
                c = null == a.frameElement && Y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!kb.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    yb(), kb.ready()
                }
            }()
        }
        return U.promise(b)
    }, kb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        ab["[object " + b + "]"] = b.toLowerCase()
    }), V = kb(Y),
    function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = tb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return ab.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)), c
                    }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",")
                    }
                    if (p) try {
                        return ab.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return v(a.replace(jb, "$1"), b, c, d)
        }

        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
            }
            var b = [];
            return a
        }

        function e(a) {
            return a[N] = !0, a
        }

        function f(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) z.attrHandle[c[d]] = b
        }

        function h(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function k(a) {
            return e(function(b) {
                return b = +b, e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function l() {}

        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h;) {
                (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(jb, " ")
                }), h = h.slice(d.length));
                for (g in z.filter)!(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
        }

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e)
                            if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                if ((h = i[1]) === !0 || h === y) return h === !0
                            } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0) return !0
            }
        }

        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = e || u(b || "*", h.nodeType ? [h] : h, []),
                    r = !a || !e && b ? p : q(p, m, a, h, i),
                    s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d)
                    for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                    return a === b
                }, g, !0), j = o(function(a) {
                    return cb.call(b, a) > -1
                }, g, !0), k = [
                    function(a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }
                ]; e > h; h++)
                if (c = z.relative[a[h].type]) k = [o(p(k), c)];
                else {
                    if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(jb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
            return p(k)
        }

        function t(a, b) {
            var d = 0,
                f = b.length > 0,
                g = a.length > 0,
                h = function(e, h, i, j, k) {
                    var l, m, n, o = [],
                        p = 0,
                        r = "0",
                        s = e && [],
                        t = null != k,
                        u = D,
                        v = e || g && z.find.TAG("*", k && h.parentNode || h),
                        w = P += null == u ? 1 : Math.random() || .1;
                    for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                        if (g && l) {
                            for (m = 0; n = a[m++];)
                                if (n(l, h, i)) {
                                    j.push(l);
                                    break
                                }
                            t && (P = w, y = ++d)
                        }
                        f && ((l = !n && l) && p--, e && s.push(l))
                    }
                    if (p += r, f && r !== p) {
                        for (m = 0; n = b[m++];) n(s, o, h, i);
                        if (e) {
                            if (p > 0)
                                for (; r--;) s[r] || o[r] || (o[r] = $.call(j));
                            o = q(o)
                        }
                        ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                    }
                    return t && (P = w, D = u), s
                };
            return f ? e(h) : h
        }

        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d
        }

        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)
                    if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d), c;
                        break
                    }
            }
            return C(a, j)(d, b, !I, c, nb.test(a)), c
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = d(),
            S = d(),
            T = d(),
            U = !1,
            V = function(a, b) {
                return a === b ? (U = !0, 0) : 0
            }, W = typeof b,
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            Z = [],
            $ = Z.pop,
            _ = Z.push,
            ab = Z.push,
            bb = Z.slice,
            cb = Z.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            eb = "[\\x20\\t\\r\\n\\f]",
            fb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            gb = fb.replace("w", "w#"),
            hb = "\\[" + eb + "*(" + fb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + gb + ")|)|)" + eb + "*\\]",
            ib = ":(" + fb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + hb.replace(3, 8) + ")*)|.*)\\)|)",
            jb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"),
            lb = new RegExp("^" + eb + "*," + eb + "*"),
            mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"),
            nb = new RegExp(eb + "*[+~]"),
            ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"),
            pb = new RegExp(ib),
            qb = new RegExp("^" + gb + "$"),
            rb = {
                ID: new RegExp("^#(" + fb + ")"),
                CLASS: new RegExp("^\\.(" + fb + ")"),
                TAG: new RegExp("^(" + fb.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + hb),
                PSEUDO: new RegExp("^" + ib),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + db + ")$", "i"),
                needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
            }, sb = /^[^{]+\{\s*\[native \w/,
            tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ub = /^(?:input|select|textarea|button)$/i,
            vb = /^h\d$/i,
            wb = /'|\\/g,
            xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"),
            yb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
        } catch (zb) {
            ab = {
                apply: Z.length ? function(a, b) {
                    _.apply(a, bb.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        B = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, x = c.support = {}, F = c.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : O,
                c = b.defaultView;
            return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                F()
            }), x.attributes = f(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = f(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), f(function(a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ib)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, V = H.compareDocumentPosition ? function(a, c) {
                if (a === c) return U = !0, 0;
                var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function(a, c) {
                var d, e = 0,
                    f = a.parentNode,
                    g = c.parentNode,
                    i = [a],
                    j = [c];
                if (a === c) return U = !0, 0;
                if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                if (f === g) return h(a, c);
                for (d = a; d = d.parentNode;) i.unshift(d);
                for (d = c; d = d.parentNode;) j.unshift(d);
                for (; i[e] === j[e];) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, b) : G
        }, c.matches = function(a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                var d = L.call(a, b);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return c(b, G, null, [a]).length > 0
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()],
                e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
        }, c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, c.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return a
        }, A = c.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d]; d++) c += A(b);
            return c
        }, z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: rb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(xb, yb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--;) d = cb.call(a, e[g]), a[d] = !(c[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, d)
                    }) : f
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [],
                        c = [],
                        d = C(a.replace(jb, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: e(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                    }
                }),
                lang: e(function(a) {
                    return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !z.pseudos.empty(a)
                },
                header: function(a) {
                    return vb.test(a.nodeName)
                },
                input: function(a) {
                    return ub.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: k(function() {
                    return [0]
                }),
                last: k(function(a, b) {
                    return [b - 1]
                }),
                eq: k(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, z.pseudos.nth = z.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), f(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), x.attributes && f(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || g("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), f(function(a) {
            return null == a.getAttribute("disabled")
        }) || g(db, function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
        }), kb.find = c, kb.expr = c.selectors, kb.expr[":"] = kb.expr.pseudos, kb.unique = c.uniqueSort, kb.text = c.getText, kb.isXMLDoc = c.isXML, kb.contains = c.contains
    }(a);
    var zb = {};
    kb.Callbacks = function(a) {
        a = "string" == typeof a ? zb[a] || d(a) : kb.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                    if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        e = !1;
                        break
                    }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
            }, m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            kb.each(b, function(b, c) {
                                var e = kb.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), c ? g = j.length : e && (i = b, l(e))
                    }
                    return this
                },
                remove: function() {
                    return j && kb.each(arguments, function(a, b) {
                        for (var d;
                            (d = kb.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                    }), this
                },
                has: function(a) {
                    return a ? kb.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function() {
                    return j = [], g = 0, this
                },
                disable: function() {
                    return j = k = e = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, e || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return !j || f && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], c ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return m
    }, kb.extend({
        Deferred: function(a) {
            var b = [
                ["resolve", "done", kb.Callbacks("once memory"), "resolved"],
                ["reject", "fail", kb.Callbacks("once memory"), "rejected"],
                ["notify", "progress", kb.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return kb.Deferred(function(c) {
                            kb.each(b, function(b, f) {
                                var g = f[0],
                                    h = kb.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && kb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? kb.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, kb.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = fb.call(arguments),
                g = f.length,
                h = 1 !== g || a && kb.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : kb.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? fb.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && kb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), kb.support = function(b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, b.htmlSerialize = !! l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), b.cssFloat = !! d.style.cssFloat, b.checkOn = !! e.value, b.optSelected = h.selected, b.enctype = !! Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch (m) {
            b.deleteExpando = !1
        }
        e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in kb(b)) break;
        return b.ownLast = "0" !== k, kb(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", kb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === l.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }), c = f = g = h = d = e = null, b
    }({});
    var Ab = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Bb = /([A-Z])/g;
    kb.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? kb.cache[a[kb.expando]] : a[kb.expando], !! a && !h(a)
        },
        data: function(a, b, c) {
            return e(a, b, c)
        },
        removeData: function(a, b) {
            return f(a, b)
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return f(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && kb.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), kb.fn.extend({
        data: function(a, c) {
            var d, e, f = null,
                h = 0,
                i = this[0];
            if (a === b) {
                if (this.length && (f = kb.data(i), 1 === i.nodeType && !kb._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = kb.camelCase(e.slice(5)), g(i, e, f[e]));
                    kb._data(i, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                kb.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                kb.data(this, a, c)
            }) : i ? g(i, a, kb.data(i, a)) : null
        },
        removeData: function(a) {
            return this.each(function() {
                kb.removeData(this, a)
            })
        }
    }), kb.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = kb._data(a, b), c && (!d || kb.isArray(c) ? d = kb._data(a, b, kb.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = kb.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = kb._queueHooks(a, b),
                g = function() {
                    kb.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return kb._data(a, c) || kb._data(a, c, {
                empty: kb.Callbacks("once memory").add(function() {
                    kb._removeData(a, b + "queue"), kb._removeData(a, c)
                })
            })
        }
    }), kb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? kb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = kb.queue(this, a, c);
                kb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && kb.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                kb.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = kb.fx ? kb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = kb.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = kb._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var Cb, Db, Eb = /[\t\r\n\f]/g,
        Fb = /\r/g,
        Gb = /^(?:input|select|textarea|button|object)$/i,
        Hb = /^(?:a|area)$/i,
        Ib = /^(?:checked|selected)$/i,
        Jb = kb.support.getSetAttribute,
        Kb = kb.support.input;
    kb.fn.extend({
        attr: function(a, b) {
            return kb.access(this, kb.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                kb.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return kb.access(this, kb.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = kb.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(mb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = kb.trim(d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(mb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? kb.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(kb.isFunction(a) ? function(c) {
                kb(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = kb(this), f = a.match(mb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === W || "boolean" === c) && (this.className && kb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : kb._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = kb.isFunction(a), this.each(function(c) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, c, kb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : kb.isArray(f) && (f = kb.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), d = kb.valHooks[this.type] || kb.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return d = kb.valHooks[f.type] || kb.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fb, "") : null == c ? "" : c)
            }
        }
    }), kb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = kb.find.attr(a, "value");
                    return null != b ? b : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (kb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && kb.nodeName(c.parentNode, "optgroup"))) {
                            if (b = kb(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = kb.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = kb.inArray(kb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === W ? kb.prop(a, c, d) : (1 === g && kb.isXMLDoc(a) || (c = c.toLowerCase(), e = kb.attrHooks[c] || (kb.expr.match.bool.test(c) ? Db : Cb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = kb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void kb.removeAttr(a, c))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(mb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = kb.propFix[c] || c, kb.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[kb.camelCase("default-" + c)] = a[d] = !1 : kb.attr(a, c, ""), a.removeAttribute(Jb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!kb.support.radioValue && "radio" === b && kb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !kb.isXMLDoc(a), g && (c = kb.propFix[c] || c, f = kb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = kb.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Gb.test(a.nodeName) || Hb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), Db = {
        set: function(a, b, c) {
            return b === !1 ? kb.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && kb.propFix[c] || c, c) : a[kb.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, kb.each(kb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = kb.expr.attrHandle[c] || kb.find.attr;
        kb.expr.attrHandle[c] = Kb && Jb || !Ib.test(c) ? function(a, c, e) {
            var f = kb.expr.attrHandle[c],
                g = e ? b : (kb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return kb.expr.attrHandle[c] = f, g
        } : function(a, c, d) {
            return d ? b : a[kb.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    }), Kb && Jb || (kb.attrHooks.value = {
        set: function(a, b, c) {
            return kb.nodeName(a, "input") ? void(a.defaultValue = b) : Cb && Cb.set(a, b, c)
        }
    }), Jb || (Cb = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
        }
    }, kb.expr.attrHandle.id = kb.expr.attrHandle.name = kb.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
    }, kb.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b
        },
        set: Cb.set
    }, kb.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Cb.set(a, "" === b ? !1 : b, c)
        }
    }, kb.each(["width", "height"], function(a, b) {
        kb.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), kb.support.hrefNormalized || kb.each(["href", "src"], function(a, b) {
        kb.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), kb.support.style || (kb.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), kb.support.optSelected || (kb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), kb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        kb.propFix[this.toLowerCase()] = this
    }), kb.support.enctype || (kb.propFix.enctype = "encoding"), kb.each(["radio", "checkbox"], function() {
        kb.valHooks[this] = {
            set: function(a, b) {
                return kb.isArray(b) ? a.checked = kb.inArray(kb(a).val(), b) >= 0 : void 0
            }
        }, kb.support.checkOn || (kb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Lb = /^(?:input|select|textarea)$/i,
        Mb = /^key/,
        Nb = /^(?:mouse|contextmenu)|click/,
        Ob = /^(?:focusinfocus|focusoutblur)$/,
        Pb = /^([^.]*)(?:\.(.+)|)$/;
    kb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = kb._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = kb.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                    return typeof kb === W || a && kb.event.triggered === a.type ? b : kb.event.dispatch.apply(l.elem, arguments)
                }, l.elem = a), c = (c || "").match(mb) || [""], i = c.length; i--;) g = Pb.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = kb.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = kb.event.special[o] || {}, m = kb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && kb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), kb.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = kb.hasData(a) && kb._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(mb) || [""], j = b.length; j--;)
                    if (h = Pb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = kb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || kb.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) kb.event.remove(a, n + b[j], c, d, !0);
                kb.isEmptyObject(k) && (delete q.handle, kb._removeData(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || Y],
                o = ib.call(c, "type") ? c.type : c,
                p = ib.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Ob.test(o + kb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = o.indexOf(":") < 0 && "on" + o, c = c[kb.expando] ? c : new kb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : kb.makeArray(d, [c]), k = kb.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !kb.isWindow(e)) {
                    for (j = k.delegateType || o, Ob.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                    (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (kb._data(i, "events") || {})[c.type] && kb._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && kb.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && kb.acceptData(e) && h && e[o] && !kb.isWindow(e)) {
                    l = e[h], l && (e[h] = null), kb.event.triggered = o;
                    try {
                        e[o]()
                    } catch (q) {}
                    kb.event.triggered = b, l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function(a) {
            a = kb.event.fix(a);
            var c, d, e, f, g, h = [],
                i = fb.call(arguments),
                j = (kb._data(this, "events") || {})[a.type] || [],
                k = kb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = kb.event.handlers.call(this, a, j), c = 0;
                    (f = h[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, g = 0;
                        (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((kb.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j != this; j = j.parentNode || this)
                    if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                        for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? kb(d, this).index(j) >= 0 : kb.find(d, this, null, [j]).length), f[d] && f.push(e);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        fix: function(a) {
            if (a[kb.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Nb.test(e) ? this.mouseHooks : Mb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new kb.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return kb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return kb.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = kb.extend(new kb.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? kb.event.trigger(e, null, b) : kb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, kb.removeEvent = Y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
    }, kb.Event = function(a, b) {
        return this instanceof kb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, b && kb.extend(this, b), this.timeStamp = a && a.timeStamp || kb.now(), void(this[kb.expando] = !0)) : new kb.Event(a, b)
    }, kb.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i, this.stopPropagation()
        }
    }, kb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        kb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !kb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), kb.support.submitBubbles || (kb.event.special.submit = {
        setup: function() {
            return kb.nodeName(this, "form") ? !1 : void kb.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,
                    d = kb.nodeName(c, "input") || kb.nodeName(c, "button") ? c.form : b;
                d && !kb._data(d, "submitBubbles") && (kb.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), kb._data(d, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && kb.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return kb.nodeName(this, "form") ? !1 : void kb.event.remove(this, "._submit")
        }
    }), kb.support.changeBubbles || (kb.event.special.change = {
        setup: function() {
            return Lb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (kb.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), kb.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), kb.event.simulate("change", this, a, !0)
            })), !1) : void kb.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Lb.test(b.nodeName) && !kb._data(b, "changeBubbles") && (kb.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || kb.event.simulate("change", this.parentNode, a, !0)
                }), kb._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return kb.event.remove(this, "._change"), !Lb.test(this.nodeName)
        }
    }), kb.support.focusinBubbles || kb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                kb.event.simulate(b, a.target, kb.event.fix(a), !0)
            };
        kb.event.special[b] = {
            setup: function() {
                0 === c++ && Y.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && Y.removeEventListener(a, d, !0)
            }
        }
    }), kb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return kb().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = kb.guid++)), this.each(function() {
                kb.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, kb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() {
                kb.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                kb.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? kb.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Qb = /^.[^:#\[\.,]*$/,
        Rb = /^(?:parents|prev(?:Until|All))/,
        Sb = kb.expr.match.needsContext,
        Tb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    kb.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(kb(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (kb.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) kb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? kb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        has: function(a) {
            var b, c = kb(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (kb.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1))
        },
        is: function(a) {
            return !!m(this, "string" == typeof a && Sb.test(a) ? kb(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? kb(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && kb.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? kb.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? kb.inArray(this[0], kb(a)) : kb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? kb(a, b) : kb.makeArray(a && a.nodeType ? [a] : a),
                d = kb.merge(this.get(), c);
            return this.pushStack(kb.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), kb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return kb.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return kb.dir(a, "parentNode", c)
        },
        next: function(a) {
            return l(a, "nextSibling")
        },
        prev: function(a) {
            return l(a, "previousSibling")
        },
        nextAll: function(a) {
            return kb.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return kb.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return kb.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return kb.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return kb.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return kb.sibling(a.firstChild)
        },
        contents: function(a) {
            return kb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : kb.merge([], a.childNodes)
        }
    }, function(a, b) {
        kb.fn[a] = function(c, d) {
            var e = kb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = kb.filter(d, e)), this.length > 1 && (Tb[a] || (e = kb.unique(e)), Rb.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    }), kb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? kb.find.matchesSelector(d, a) ? [d] : [] : kb.find.matches(a, kb.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !kb(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vb = / jQuery\d+="(?:null|\d+)"/g,
        Wb = new RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
        Xb = /^\s+/,
        Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zb = /<([\w:]+)/,
        $b = /<tbody/i,
        _b = /<|&#?\w+;/,
        ac = /<(?:script|style|link)/i,
        bc = /^(?:checkbox|radio)$/i,
        cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dc = /^$|\/(?:java|ecma)script/i,
        ec = /^true\/(.*)/,
        fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gc = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: kb.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, hc = n(Y),
        ic = hc.appendChild(Y.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, gc.th = gc.td, kb.fn.extend({
        text: function(a) {
            return kb.access(this, function(a) {
                return a === b ? kb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? kb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || kb.cleanData(u(c)), c.parentNode && (b && kb.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && kb.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && kb.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return kb.clone(this, a, b)
            })
        },
        html: function(a) {
            return kb.access(this, function(a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !kb.support.htmlSerialize && Wb.test(a) || !kb.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (kb.cleanData(u(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = kb.map(this, function(a) {
                return [a.nextSibling, a.parentNode]
            }),
                b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), kb(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = db.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                m = k - 1,
                n = a[0],
                o = kb.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || kb.support.checkClone) && cc.test(n)) return this.each(function(d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (i = kb.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                for (g = kb.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = kb.clone(e, !0, !0), f && kb.merge(g, u(e, "script"))), b.call(this[j], e, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, kb.map(g, q), j = 0; f > j; j++) e = g[j], dc.test(e.type || "") && !kb._data(e, "globalEval") && kb.contains(h, e) && (e.src ? kb._evalUrl(e.src) : kb.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fc, "")));
                i = d = null
            }
            return this
        }
    }), kb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        kb.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = kb(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), kb(f[d])[b](c), eb.apply(e, c.get());
            return this.pushStack(e)
        }
    }), kb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = kb.contains(a.ownerDocument, a);
            if (kb.support.html5Clone || kb.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(kb.support.noCloneEvent && kb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || kb.isXMLDoc(a)))
                for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b)
                if (c)
                    for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
                else s(a, f);
            return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++)
                if (f = a[p], f || 0 === f)
                    if ("object" === kb.type(f)) kb.merge(o, f.nodeType ? [f] : f);
                    else
            if (_b.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!kb.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !kb.support.tbody)
                    for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) kb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (kb.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), kb.support.appendChecked || kb.grep(u(o, "input"), v), p = 0; f = o[p++];)
                if ((!d || -1 === kb.inArray(f, d)) && (g = kb.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c))
                    for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null, m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = kb.expando, i = kb.cache, j = kb.support.deleteExpando, k = kb.event.special; null != (c = a[g]); g++)
                if ((b || kb.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? kb.event.remove(c, d) : kb.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, bb.push(e))
                }
        },
        _evalUrl: function(a) {
            return kb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), kb.fn.extend({
        wrapAll: function(a) {
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = kb(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(kb.isFunction(a) ? function(b) {
                kb(this).wrapInner(a.call(this, b))
            } : function() {
                var b = kb(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = kb.isFunction(a);
            return this.each(function(c) {
                kb(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                kb.nodeName(this, "body") || kb(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
        nc = /opacity\s*=\s*([^)]*)/,
        oc = /^(top|right|bottom|left)$/,
        pc = /^(none|table(?!-c[ea]).+)/,
        qc = /^margin/,
        rc = new RegExp("^(" + lb + ")(.*)$", "i"),
        sc = new RegExp("^(" + lb + ")(?!px)[a-z%]+$", "i"),
        tc = new RegExp("^([+-])=(" + lb + ")", "i"),
        uc = {
            BODY: "block"
        }, vc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, wc = {
            letterSpacing: 0,
            fontWeight: 400
        }, xc = ["Top", "Right", "Bottom", "Left"],
        yc = ["Webkit", "O", "Moz", "ms"];
    kb.fn.extend({
        css: function(a, c) {
            return kb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (kb.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = kb.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? kb.style(a, c, d) : kb.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                x(this) ? kb(this).show() : kb(this).hide()
            })
        }
    }), kb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": kb.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = kb.camelCase(c),
                    j = a.style;
                if (c = kb.cssProps[i] || (kb.cssProps[i] = w(j, i)), h = kb.cssHooks[c] || kb.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(kb.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || kb.cssNumber[i] || (d += "px"), kb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = kb.camelCase(c);
            return c = kb.cssProps[i] || (kb.cssProps[i] = w(a.style, i)), h = kb.cssHooks[c] || kb.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), "" === d || d ? (f = parseFloat(g), d === !0 || kb.isNumeric(f) ? f || 0 : g) : g
        }
    }), a.getComputedStyle ? (kc = function(b) {
        return a.getComputedStyle(b, null)
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || kb.contains(a.ownerDocument, a) || (i = kb.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }) : Y.documentElement.currentStyle && (kc = function(a) {
        return a.currentStyle
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
    }), kb.each(["height", "width"], function(a, b) {
        kb.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && pc.test(kb.css(a, "display")) ? kb.swap(a, vc, function() {
                    return B(a, b, d)
                }) : B(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && kc(a);
                return z(a, c, d ? A(a, b, d, kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), kb.support.opacity || (kb.cssHooks.opacity = {
        get: function(a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = kb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === kb.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
        }
    }), kb(function() {
        kb.support.reliableMarginRight || (kb.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? kb.swap(a, {
                    display: "inline-block"
                }, lc, [a, "marginRight"]) : void 0
            }
        }), !kb.support.pixelPosition && kb.fn.position && kb.each(["top", "left"], function(a, b) {
            kb.cssHooks[b] = {
                get: function(a, c) {
                    return c ? (c = lc(a, b), sc.test(c) ? kb(a).position()[b] + "px" : c) : void 0
                }
            }
        })
    }), kb.expr && kb.expr.filters && (kb.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !kb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || kb.css(a, "display"))
    }, kb.expr.filters.visible = function(a) {
        return !kb.expr.filters.hidden(a)
    }), kb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        kb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, qc.test(a) || (kb.cssHooks[a + b].set = z)
    });
    var zc = /%20/g,
        Ac = /\[\]$/,
        Bc = /\r?\n/g,
        Cc = /^(?:submit|button|image|reset|file)$/i,
        Dc = /^(?:input|select|textarea|keygen)/i;
    kb.fn.extend({
        serialize: function() {
            return kb.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = kb.prop(this, "elements");
                return a ? kb.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !kb(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
            }).map(function(a, b) {
                var c = kb(this).val();
                return null == c ? null : kb.isArray(c) ? kb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                }
            }).get()
        }
    }), kb.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = kb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = kb.ajaxSettings && kb.ajaxSettings.traditional), kb.isArray(a) || a.jquery && !kb.isPlainObject(a)) kb.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zc, "+")
    }, kb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        kb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), kb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Ec, Fc, Gc = kb.now(),
        Hc = /\?/,
        Ic = /#.*$/,
        Jc = /([?&])_=[^&]*/,
        Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mc = /^(?:GET|HEAD)$/,
        Nc = /^\/\//,
        Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pc = kb.fn.load,
        Qc = {}, Rc = {}, Sc = "*/".concat("*");
    try {
        Fc = X.href
    } catch (Tc) {
        Fc = Y.createElement("a"), Fc.href = "", Fc = Fc.href
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [], kb.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), kb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && kb.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? kb("<div>").append(kb.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            h.each(d, f || [a.responseText, b, a])
        }), this
    }, kb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        kb.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), kb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": kb.parseJSON,
                "text xml": kb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, kb.ajaxSettings), b) : H(kb.ajaxSettings, a)
        },
        ajaxPrefilter: F(Qc),
        ajaxTransport: F(Rc),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (kb.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (kb.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --kb.active || kb.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = kb.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? kb(n) : kb.event,
                p = kb.Deferred(),
                q = kb.Callbacks("once memory"),
                r = m.statusCode || {}, s = {}, t = {}, u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = kb.trim(m.dataType || "*").toLowerCase().match(mb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Ec[3] || ("http:" === Ec[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = kb.param(m.data, m.traditional)), G(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === kb.active++ && kb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), m.ifModified && (kb.lastModified[g] && w.setRequestHeader("If-Modified-Since", kb.lastModified[g]), kb.etag[g] && w.setRequestHeader("If-None-Match", kb.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rc, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return kb.get(a, b, c, "json")
        },
        getScript: function(a, c) {
            return kb.get(a, b, c, "script")
        }
    }), kb.each(["get", "post"], function(a, c) {
        kb[c] = function(a, d, e, f) {
            return kb.isFunction(d) && (f = f || e, e = d, d = b), kb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), kb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return kb.globalEval(a), a
            }
        }
    }), kb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), kb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = Y.head || kb("head")[0] || Y.documentElement;
            return {
                send: function(b, e) {
                    c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Uc = [],
        Vc = /(=)\?(?=&|$)|\?\?/;
    kb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Uc.pop() || kb.expando + "_" + Gc++;
            return this[a] = !0, a
        }
    }), kb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = kb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || kb.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && kb.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    });
    var Wc, Xc, Yc = 0,
        Zc = a.ActiveXObject && function() {
            var a;
            for (a in Wc) Wc[a](b, !0)
        };
    kb.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && K() || L()
    } : K, Xc = kb.ajaxSettings.xhr(), kb.support.cors = !! Xc && "withCredentials" in Xc, Xc = kb.support.ajax = !! Xc, Xc && kb.ajaxTransport(function(c) {
        if (!c.crossDomain || kb.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b, g && (i.onreadystatechange = kb.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                                else {
                                    l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                    try {
                                        k = i.statusText
                                    } catch (m) {
                                        k = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, kb(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(b, !0)
                }
            }
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
        bd = new RegExp("^(?:([+-])=|)(" + lb + ")([a-z%]*)$", "i"),
        cd = /queueHooks$/,
        dd = [Q],
        ed = {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = bd.exec(b),
                        f = e && e[3] || (kb.cssNumber[a] ? "" : "px"),
                        g = (kb.cssNumber[a] || "px" !== f && +d) && bd.exec(kb.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, kb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };
    kb.Animation = kb.extend(O, {
        tweener: function(a, b) {
            kb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dd.unshift(a) : dd.push(a)
        }
    }), kb.Tween = R, R.prototype = {
        constructor: R,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (kb.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? kb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = kb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                kb.fx.step[a.prop] ? kb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[kb.cssProps[a.prop]] || kb.cssHooks[a.prop]) ? kb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, kb.each(["toggle", "show", "hide"], function(a, b) {
        var c = kb.fn[b];
        kb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
        }
    }), kb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = kb.isEmptyObject(a),
                f = kb.speed(b, c, d),
                g = function() {
                    var b = O(this, kb.extend({}, a), f);
                    (e || kb._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = kb.timers,
                    g = kb._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && kb.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = kb._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = kb.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, kb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), kb.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        kb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), kb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? kb.extend({}, a) : {
            complete: c || !c && b || kb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !kb.isFunction(b) && b
        };
        return d.duration = kb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in kb.fx.speeds ? kb.fx.speeds[d.duration] : kb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            kb.isFunction(d.old) && d.old.call(this), d.queue && kb.dequeue(this, d.queue)
        }, d
    }, kb.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, kb.timers = [], kb.fx = R.prototype.init, kb.fx.tick = function() {
        var a, c = kb.timers,
            d = 0;
        for ($c = kb.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || kb.fx.stop(), $c = b
    }, kb.fx.timer = function(a) {
        a() && kb.timers.push(a) && kb.fx.start()
    }, kb.fx.interval = 13, kb.fx.start = function() {
        _c || (_c = setInterval(kb.fx.tick, kb.fx.interval))
    }, kb.fx.stop = function() {
        clearInterval(_c), _c = null
    }, kb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, kb.fx.step = {}, kb.expr && kb.expr.filters && (kb.expr.filters.animated = function(a) {
        return kb.grep(kb.timers, function(b) {
            return a === b.elem
        }).length
    }), kb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            kb.offset.setOffset(this, a, b)
        });
        var c, d, e = {
                top: 0,
                left: 0
            }, f = this[0],
            g = f && f.ownerDocument;
        if (g) return c = g.documentElement, kb.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e
    }, kb.offset = {
        setOffset: function(a, b, c) {
            var d = kb.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = kb(a),
                h = g.offset(),
                i = kb.css(a, "top"),
                j = kb.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && kb.inArray("auto", [i, j]) > -1,
                l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), kb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, kb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                return "fixed" === kb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), kb.nodeName(a[0], "html") || (c = a.offset()), c.top += kb.css(a[0], "borderTopWidth", !0), c.left += kb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - kb.css(d, "marginTop", !0),
                    left: b.left - c.left - kb.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Z; a && !kb.nodeName(a, "html") && "static" === kb.css(a, "position");) a = a.offsetParent;
                return a || Z
            })
        }
    }), kb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        kb.fn[a] = function(e) {
            return kb.access(this, function(a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? kb(g).scrollLeft() : f, d ? f : kb(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null)
        }
    }), kb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        kb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            kb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return kb.access(this, function(c, d, e) {
                    var f;
                    return kb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? kb.css(c, d, h) : kb.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), kb.fn.size = function() {
        return this.length
    }, kb.fn.andSelf = kb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = kb : (a.jQuery = a.$ = kb, "function" == typeof define && define.amd && define("jquery", [], function() {
        return kb
    }))
}(window),
function(a, b, c) {
    "use strict";

    function d(a) {
        return function() {
            var b, c, d = arguments[0],
                e = "[" + (a ? a + ":" : "") + d + "] ",
                f = arguments[1],
                g = arguments,
                h = function(a) {
                    return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
                };
            for (b = e + f.replace(/\{\d+\}/g, function(a) {
                var b, c = +a.slice(1, -1);
                return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? R(b) : b) : a
            }), b = b + "\nhttp://errors.angularjs.org/1.2.15/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++) b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
            return new Error(b)
        }
    }

    function e(a) {
        if (null == a || A(a)) return !1;
        var b = a.length;
        return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
        var d;
        if (a)
            if (y(a))
                for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
            else
        if (a.forEach && a.forEach !== f) a.forEach(b, c);
        else if (e(a))
            for (d = 0; d < a.length; d++) b.call(c, a[d], d);
        else
            for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a
    }

    function g(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b.sort()
    }

    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function i(a) {
        return function(b, c) {
            a(c, b)
        }
    }

    function j() {
        for (var a, b = yd.length; b;) {
            if (b--, a = yd[b].charCodeAt(0), 57 == a) return yd[b] = "A", yd.join("");
            if (90 != a) return yd[b] = String.fromCharCode(a + 1), yd.join("");
            yd[b] = "0"
        }
        return yd.unshift("0"), yd.join("")
    }

    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function l(a) {
        var b = a.$$hashKey;
        return f(arguments, function(b) {
            b !== a && f(b, function(b, c) {
                a[c] = b
            })
        }), k(a, b), a
    }

    function m(a) {
        return parseInt(a, 10)
    }

    function n(a, b) {
        return l(new(l(function() {}, {
            prototype: a
        })), b)
    }

    function o() {}

    function p(a) {
        return a
    }

    function q(a) {
        return function() {
            return a
        }
    }

    function r(a) {
        return "undefined" == typeof a
    }

    function s(a) {
        return "undefined" != typeof a
    }

    function t(a) {
        return null != a && "object" == typeof a
    }

    function u(a) {
        return "string" == typeof a
    }

    function v(a) {
        return "number" == typeof a
    }

    function w(a) {
        return "[object Date]" === vd.call(a)
    }

    function x(a) {
        return "[object Array]" === vd.call(a)
    }

    function y(a) {
        return "function" == typeof a
    }

    function z(a) {
        return "[object RegExp]" === vd.call(a)
    }

    function A(a) {
        return a && a.document && a.location && a.alert && a.setInterval
    }

    function B(a) {
        return a && a.$evalAsync && a.$watch
    }

    function C(a) {
        return "[object File]" === vd.call(a)
    }

    function D(a) {
        return "[object Blob]" === vd.call(a)
    }

    function E(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function F(a, b, c) {
        var d = [];
        return f(a, function(a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d
    }

    function G(a, b) {
        return -1 != H(a, b)
    }

    function H(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++)
            if (b === a[c]) return c;
        return -1
    }

    function I(a, b) {
        var c = H(a, b);
        return c >= 0 && a.splice(c, 1), b
    }

    function J(a, b) {
        if (A(a) || B(a)) throw wd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b) throw wd("cpi", "Can't copy! Source and destination are identical.");
            if (x(a)) {
                b.length = 0;
                for (var c = 0; c < a.length; c++) b.push(J(a[c]))
            } else {
                var d = b.$$hashKey;
                f(b, function(a, c) {
                    delete b[c]
                });
                for (var e in a) b[e] = J(a[e]);
                k(b, d)
            }
        } else b = a, a && (x(a) ? b = J(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = new RegExp(a.source) : t(a) && (b = J(a, {})));
        return b
    }

    function K(a, b) {
        b = b || {};
        for (var c in a)!a.hasOwnProperty(c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (b[c] = a[c]);
        return b
    }

    function L(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e, f, g = typeof a,
            h = typeof b;
        if (g == h && "object" == g) {
            if (!x(a)) {
                if (w(a)) return w(b) && a.getTime() == b.getTime();
                if (z(a) && z(b)) return a.toString() == b.toString();
                if (B(a) || B(b) || A(a) || A(b) || x(b)) return !1;
                f = {};
                for (e in a)
                    if ("$" !== e.charAt(0) && !y(a[e])) {
                        if (!L(a[e], b[e])) return !1;
                        f[e] = !0
                    }
                for (e in b)
                    if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !y(b[e])) return !1;
                return !0
            }
            if (!x(b)) return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++)
                    if (!L(a[e], b[e])) return !1;
                return !0
            }
        }
        return !1
    }

    function M() {
        return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"))
    }

    function N(a, b, c) {
        return a.concat(td.call(b, c))
    }

    function O(a, b) {
        return td.call(a, b || 0)
    }

    function P(a, b) {
        var c = arguments.length > 2 ? O(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, c.concat(td.call(arguments, 0))) : b.apply(a, c)
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function Q(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) ? e = c : A(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : B(d) && (e = "$SCOPE"), e
    }

    function R(a, b) {
        return "undefined" == typeof a ? c : JSON.stringify(a, Q, b ? "  " : null)
    }

    function S(a) {
        return u(a) ? JSON.parse(a) : a
    }

    function T(a) {
        if ("function" == typeof a) a = !0;
        else if (a && 0 !== a.length) {
            var b = jd("" + a);
            a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
        } else a = !1;
        return a
    }

    function U(a) {
        a = pd(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var c = 3,
            d = pd("<div>").append(a).html();
        try {
            return a[0].nodeType === c ? jd(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + jd(b)
            })
        } catch (b) {
            return jd(d)
        }
    }

    function V(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function W(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function(a) {
            if (a && (b = a.split("="), c = V(b[0]), s(c))) {
                var e = s(b[1]) ? V(b[1]) : !0;
                d[c] ? x(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
            }
        }), d
    }

    function X(a) {
        var b = [];
        return f(a, function(a, c) {
            x(a) ? f(a, function(a) {
                b.push(Z(c, !0) + (a === !0 ? "" : "=" + Z(a, !0)))
            }) : b.push(Z(c, !0) + (a === !0 ? "" : "=" + Z(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function Y(a) {
        return Z(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Z(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
    }

    function $(a, c) {
        function d(a) {
            a && h.push(a)
        }
        var e, g, h = [a],
            i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
            j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        f(i, function(c) {
            i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
        }), f(h, function(a) {
            if (!e) {
                var b = " " + a.className + " ",
                    c = j.exec(b);
                c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {
                    !e && i[b.name] && (e = a, g = b.value)
                })
            }
        }), e && c(e, g ? [g] : [])
    }

    function _(c, d) {
        var e = function() {
            if (c = pd(c), c.injector()) {
                var a = c[0] === b ? "document" : U(c);
                throw wd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a)
            }
            d = d || [], d.unshift(["$provide",
                function(a) {
                    a.value("$rootElement", c)
                }
            ]), d.unshift("ng");
            var e = Fb(d);
            return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
                function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d), c(b)(a)
                    })
                }
            ]), e
        }, g = /^NG_DEFER_BOOTSTRAP!/;
        return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(xd.resumeBootstrap = function(a) {
            f(a, function(a) {
                d.push(a)
            }), e()
        }))
    }

    function ab(a, b) {
        return b = b || "_", a.replace(Ad, function(a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function bb() {
        qd = a.jQuery, qd ? (pd = qd, l(qd.fn, {
            scope: Kd.scope,
            isolateScope: Kd.isolateScope,
            controller: Kd.controller,
            injector: Kd.injector,
            inheritedData: Kd.inheritedData
        }), lb("remove", !0, !0, !1), lb("empty", !1, !1, !1), lb("html", !1, !1, !0)) : pd = mb, xd.element = pd
    }

    function cb(a, b, c) {
        if (!a) throw wd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function db(a, b, c) {
        return c && x(a) && (a = a[a.length - 1]), cb(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function eb(a, b) {
        if ("hasOwnProperty" === a) throw wd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function fb(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
        return !c && y(a) ? P(f, a) : a
    }

    function gb(a) {
        var b = a[0],
            c = a[a.length - 1];
        if (b === c) return pd(b);
        var d = b,
            e = [d];
        do {
            if (d = d.nextSibling, !d) break;
            e.push(d)
        } while (d !== c);
        return pd(e)
    }

    function hb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
            e = d("ng"),
            f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, c, d) {
                        return function() {
                            return b[d || "push"]([a, c, arguments]), i
                        }
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [],
                        e = [],
                        h = a("$injector", "invoke"),
                        i = {
                            _invokeQueue: b,
                            _runBlocks: e,
                            requires: f,
                            name: d,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: h,
                            run: function(a) {
                                return e.push(a), this
                            }
                        };
                    return g && h(g), i
                })
            }
        })
    }

    function ib(b) {
        l(b, {
            bootstrap: _,
            copy: J,
            extend: l,
            equals: L,
            element: pd,
            forEach: f,
            injector: Fb,
            noop: o,
            bind: P,
            toJson: R,
            fromJson: S,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: y,
            isObject: t,
            isNumber: v,
            isElement: E,
            isArray: x,
            version: Bd,
            isDate: w,
            lowercase: jd,
            uppercase: ld,
            callbacks: {
                counter: 0
            },
            $$minErr: d,
            $$csp: M
        }), rd = hb(a);
        try {
            rd("ngLocale")
        } catch (c) {
            rd("ngLocale", []).provider("$locale", ac)
        }
        rd("ng", ["ngLocale"], ["$provide",
            function(a) {
                a.provider({
                    $$sanitizeUri: Bc
                }), a.provider("$compile", Mb).directive({
                    a: qe,
                    input: Ae,
                    textarea: Ae,
                    form: ue,
                    script: hf,
                    select: lf,
                    style: nf,
                    option: mf,
                    ngBind: Me,
                    ngBindHtml: Oe,
                    ngBindTemplate: Ne,
                    ngClass: Pe,
                    ngClassEven: Re,
                    ngClassOdd: Qe,
                    ngCloak: Se,
                    ngController: Te,
                    ngForm: ve,
                    ngHide: bf,
                    ngIf: Ve,
                    ngInclude: We,
                    ngInit: Ye,
                    ngNonBindable: Ze,
                    ngPluralize: $e,
                    ngRepeat: _e,
                    ngShow: af,
                    ngStyle: cf,
                    ngSwitch: df,
                    ngSwitchWhen: ef,
                    ngSwitchDefault: ff,
                    ngOptions: kf,
                    ngTransclude: gf,
                    ngModel: Ge,
                    ngList: Je,
                    ngChange: He,
                    required: Ie,
                    ngRequired: Ie,
                    ngValue: Le
                }).directive({
                    ngInclude: Xe
                }).directive(re).directive(Ue), a.provider({
                    $anchorScroll: Gb,
                    $animate: Td,
                    $browser: Jb,
                    $cacheFactory: Kb,
                    $controller: Pb,
                    $document: Qb,
                    $exceptionHandler: Rb,
                    $filter: Mc,
                    $interpolate: $b,
                    $interval: _b,
                    $http: Wb,
                    $httpBackend: Yb,
                    $location: nc,
                    $log: oc,
                    $parse: wc,
                    $rootScope: Ac,
                    $q: xc,
                    $sce: Gc,
                    $sceDelegate: Fc,
                    $sniffer: Hc,
                    $templateCache: Lb,
                    $timeout: Ic,
                    $window: Lc,
                    $$rAF: zc,
                    $$asyncCallback: Hb
                })
            }
        ])
    }

    function jb() {
        return ++Ed
    }

    function kb(a) {
        return a.replace(Hd, function(a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Id, "Moz$1")
    }

    function lb(a, b, c, d) {
        function e(a) {
            var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this],
                n = b;
            if (!d || null != a)
                for (; m.length;)
                    for (e = m.shift(), g = 0, h = e.length; h > g; g++)
                        for (i = pd(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(qd(l[j]));
            return f.apply(this, arguments)
        }
        var f = qd.fn[a];
        f = f.$original || f, e.$original = f, qd.fn[a] = e
    }

    function mb(a) {
        if (a instanceof mb) return a;
        if (u(a) && (a = zd(a)), !(this instanceof mb)) {
            if (u(a) && "<" != a.charAt(0)) throw Jd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new mb(a)
        }
        if (u(a)) {
            var c = b.createElement("div");
            c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), wb(this, c.childNodes);
            var d = pd(b.createDocumentFragment());
            d.append(this)
        } else wb(this, a)
    }

    function nb(a) {
        return a.cloneNode(!0)
    }

    function ob(a) {
        qb(a);
        for (var b = 0, c = a.childNodes || []; b < c.length; b++) ob(c[b])
    }

    function pb(a, b, c, d) {
        if (s(d)) throw Jd("offargs", "jqLite#off() does not support the `selector` argument");
        var e = rb(a, "events"),
            g = rb(a, "handle");
        g && (r(b) ? f(e, function(b, c) {
            Gd(a, c, b), delete e[c]
        }) : f(b.split(" "), function(b) {
            r(c) ? (Gd(a, b, e[b]), delete e[b]) : I(e[b] || [], c)
        }))
    }

    function qb(a, b) {
        var d = a[Dd],
            e = Cd[d];
        if (e) {
            if (b) return void delete Cd[d].data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), pb(a)), delete Cd[d], a[Dd] = c
        }
    }

    function rb(a, b, c) {
        var d = a[Dd],
            e = Cd[d || -1];
        return s(c) ? (e || (a[Dd] = d = jb(), e = Cd[d] = {}), void(e[b] = c)) : e && e[b]
    }

    function sb(a, b, c) {
        var d = rb(a, "data"),
            e = s(c),
            f = !e && s(b),
            g = f && !t(b);
        if (d || g || rb(a, "data", d = {}), e) d[b] = c;
        else {
            if (!f) return d;
            if (g) return d && d[b];
            l(d, b)
        }
    }

    function tb(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function ub(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", zd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + zd(b) + " ", " ")))
        })
    }

    function vb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = zd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", zd(c))
        }
    }

    function wb(a, b) {
        if (b) {
            b = b.nodeName || !s(b.length) || A(b) ? [b] : b;
            for (var c = 0; c < b.length; c++) a.push(b[c])
        }
    }

    function xb(a, b) {
        return yb(a, "$" + (b || "ngController") + "Controller")
    }

    function yb(a, b, d) {
        a = pd(a), 9 == a[0].nodeType && (a = a.find("html"));
        for (var e = x(b) ? b : [b]; a.length;) {
            for (var f = a[0], g = 0, h = e.length; h > g; g++)
                if ((d = a.data(e[g])) !== c) return d;
            a = pd(f.parentNode || 11 === f.nodeType && f.host)
        }
    }

    function zb(a) {
        for (var b = 0, c = a.childNodes; b < c.length; b++) ob(c[b]);
        for (; a.firstChild;) a.removeChild(a.firstChild)
    }

    function Ab(a, b) {
        var c = Ld[b.toLowerCase()];
        return c && Md[a.nodeName] && c
    }

    function Bb(a, c) {
        var d = function(d, e) {
            if (d.preventDefault || (d.preventDefault = function() {
                d.returnValue = !1
            }), d.stopPropagation || (d.stopPropagation = function() {
                d.cancelBubble = !0
            }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function() {
                    d.defaultPrevented = !0, g.call(d)
                }, d.defaultPrevented = !1
            }
            d.isDefaultPrevented = function() {
                return d.defaultPrevented || d.returnValue === !1
            };
            var h = K(c[e || d.type] || []);
            f(h, function(b) {
                b.call(a, d)
            }), 8 >= od ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
        };
        return d.elem = a, d
    }

    function Cb(a) {
        var b, d = typeof a;
        return "object" == d && null !== a ? "function" == typeof(b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = j()) : b = a, d + ":" + b
    }

    function Db(a) {
        f(a, this.put, this)
    }

    function Eb(a) {
        var b, c, d, e;
        return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Qd, ""), d = c.match(Nd), f(d[1].split(Od), function(a) {
            a.replace(Pd, function(a, c, d) {
                b.push(d)
            })
        })), a.$inject = b) : x(a) ? (e = a.length - 1, db(a[e], "fn"), b = a.slice(0, e)) : db(a, "fn", !0), b
    }

    function Fb(a) {
        function b(a) {
            return function(b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c)
            }
        }

        function c(a, b) {
            if (eb(a, "service"), (y(b) || x(b)) && (b = v.instantiate(b)), !b.$get) throw Rd("pget", "Provider '{0}' must define $get factory method.", a);
            return s[a + n] = b
        }

        function d(a, b) {
            return c(a, {
                $get: b
            })
        }

        function e(a, b) {
            return d(a, ["$injector",
                function(a) {
                    return a.instantiate(b)
                }
            ])
        }

        function g(a, b) {
            return d(a, q(b))
        }

        function h(a, b) {
            eb(a, "constant"), s[a] = b, w[a] = b
        }

        function j(a, b) {
            var c = v.get(a + n),
                d = c.$get;
            c.$get = function() {
                var a = z.invoke(d, c);
                return z.invoke(b, null, {
                    $delegate: a
                })
            }
        }

        function k(a) {
            var b, c, d, e, g = [];
            return f(a, function(a) {
                if (!r.get(a)) {
                    r.put(a, !0);
                    try {
                        if (u(a))
                            for (b = rd(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
                                var f = c[d],
                                    h = v.get(f[0]);
                                h[f[1]].apply(h, f[2])
                            } else y(a) ? g.push(v.invoke(a)) : x(a) ? g.push(v.invoke(a)) : db(a, "module")
                    } catch (i) {
                        throw x(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Rd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
                    }
                }
            }), g
        }

        function l(a, b) {
            function c(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === m) throw Rd("cdep", "Circular dependency found: {0}", p.join(" <- "));
                    return a[c]
                }
                try {
                    return p.unshift(c), a[c] = m, a[c] = b(c)
                } catch (d) {
                    throw a[c] === m && delete a[c], d
                } finally {
                    p.shift()
                }
            }

            function d(a, b, d) {
                var e, f, g, h = [],
                    i = Eb(a);
                for (f = 0, e = i.length; e > f; f++) {
                    if (g = i[f], "string" != typeof g) throw Rd("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
                    h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
                }
                return a.$inject || (a = a[e]), a.apply(b, h)
            }

            function e(a, b) {
                var c, e, f = function() {};
                return f.prototype = (x(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || y(e) ? e : c
            }
            return {
                invoke: d,
                instantiate: e,
                get: c,
                annotate: Eb,
                has: function(b) {
                    return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
                }
            }
        }
        var m = {}, n = "Provider",
            p = [],
            r = new Db,
            s = {
                $provide: {
                    provider: b(c),
                    factory: b(d),
                    service: b(e),
                    value: b(g),
                    constant: b(h),
                    decorator: j
                }
            }, v = s.$injector = l(s, function() {
                throw Rd("unpr", "Unknown provider: {0}", p.join(" <- "))
            }),
            w = {}, z = w.$injector = l(w, function(a) {
                var b = v.get(a + n);
                return z.invoke(b.$get, b)
            });
        return f(k(a), function(a) {
            z.invoke(a || o)
        }), z
    }

    function Gb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope",
            function(b, c, d) {
                function e(a) {
                    var b = null;
                    return f(a, function(a) {
                        b || "a" !== jd(a.nodeName) || (b = a)
                    }), b
                }

                function g() {
                    var a, d = c.hash();
                    d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
                }
                var h = b.document;
                return a && d.$watch(function() {
                    return c.hash()
                }, function() {
                    d.$evalAsync(g)
                }), g
            }
        ]
    }

    function Hb() {
        this.$get = ["$$rAF", "$timeout",
            function(a, b) {
                return a.supported ? function(b) {
                    return a(b)
                } : function(a) {
                    return b(a, 0, !1)
                }
            }
        ]
    }

    function Ib(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, O(arguments, 1))
            } finally {
                if (s--, 0 === s)
                    for (; t.length;) try {
                        t.pop()()
                    } catch (b) {
                        d.error(b)
                    }
            }
        }

        function h(a, b) {
            ! function c() {
                f(w, function(a) {
                    a()
                }), v = b(c, a)
            }()
        }

        function i() {
            z = null, x != j.url() && (x = j.url(), f(A, function(a) {
                a(j.url())
            }))
        }
        var j = this,
            k = b[0],
            l = a.location,
            m = a.history,
            n = a.setTimeout,
            p = a.clearTimeout,
            q = {};
        j.isMock = !1;
        var s = 0,
            t = [];
        j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function() {
            s++
        }, j.notifyWhenNoOutstandingRequests = function(a) {
            f(w, function(a) {
                a()
            }), 0 === s ? a() : t.push(a)
        };
        var v, w = [];
        j.addPollFn = function(a) {
            return r(v) && h(100, n), w.push(a), a
        };
        var x = l.href,
            y = b.find("base"),
            z = null;
        j.url = function(b, c) {
            if (l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
                if (x == b) return;
                return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j
            }
            return z || l.href.replace(/%27/g, "'")
        };
        var A = [],
            B = !1;
        j.onUrlChange = function(b) {
            return B || (e.history && pd(a).on("popstate", i), e.hashchange ? pd(a).on("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
        }, j.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var C = {}, D = "",
            E = j.baseHref();
        j.cookies = function(a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (k.cookie !== D)
                    for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
                return C
            }
            b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, j.defer = function(a, b) {
            var c;
            return s++, c = n(function() {
                delete q[c], g(a)
            }, b || 0), q[c] = !0, c
        }, j.defer.cancel = function(a) {
            return q[a] ? (delete q[a], p(a), g(o), !0) : !1
        }
    }

    function Jb() {
        this.$get = ["$window", "$log", "$sniffer", "$document",
            function(a, b, c, d) {
                return new Ib(a, d, b, c)
            }
        ]
    }

    function Kb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0,
                    h = l({}, c, {
                        id: a
                    }),
                    i = {}, j = c && c.capacity || Number.MAX_VALUE,
                    k = {}, m = null,
                    n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = k[a] || (k[a] = {
                                key: a
                            });
                            e(c)
                        }
                        if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b)
                        }
                        return i[a]
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                        }
                        delete i[a], g--
                    },
                    removeAll: function() {
                        i = {}, g = 0, k = {}, m = n = null
                    },
                    destroy: function() {
                        i = null, h = null, k = null, delete b[a]
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function(a) {
                return b[a]
            }, a
        }
    }

    function Lb() {
        this.$get = ["$cacheFactory",
            function(a) {
                return a("templates")
            }
        ]
    }

    function Mb(a, d) {
        var e = {}, g = "Directive",
            h = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            j = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            k = /^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i,
            m = /^(on[a-z]+|formaction)$/;
        this.directive = function o(b, c) {
            return eb(b, "directive"), u(b) ? (cb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler",
                function(a, c) {
                    var d = [];
                    return f(e[b], function(e, f) {
                        try {
                            var g = a.invoke(e);
                            y(g) ? g = {
                                compile: q(g)
                            } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", d.push(g)
                        } catch (h) {
                            c(h)
                        }
                    }), d
                }
            ])), e[b].push(c)) : f(b, i(o)), this
        }, this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
            function(a, d, i, o, r, s, v, w, z, A, B, C) {
                function D(a, b, c, d, e) {
                    a instanceof pd || (a = pd(a)), f(a, function(b, c) {
                        3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = pd(b).wrap("<span></span>").parent()[0])
                    });
                    var g = F(a, b, a, c, d, e);
                    return E(a, "ng-scope"),
                    function(b, c, d) {
                        cb(b, "scope");
                        var e = c ? Kd.clone.call(a) : a;
                        f(d, function(a, b) {
                            e.data("$" + b + "Controller", a)
                        });
                        for (var h = 0, i = e.length; i > h; h++) {
                            var j = e[h],
                                k = j.nodeType;
                            (1 === k || 9 === k) && e.eq(h).data("$scope", b)
                        }
                        return c && c(e, b), g && g(b, e, e), e
                    }
                }

                function E(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function F(a, b, d, e, f, g) {
                    function h(a, d, e, f) {
                        var g, h, i, j, k, l, m, n, p, q = d.length,
                            r = new Array(q);
                        for (m = 0; q > m; m++) r[m] = d[m];
                        for (m = 0, p = 0, n = o.length; n > m; p++) i = r[p], g = o[m++], h = o[m++], j = pd(i), g ? (g.scope ? (k = a.$new(), j.data("$scope", k)) : k = a, l = g.transclude, l || !f && b ? g(h, k, i, e, G(a, l || b)) : g(h, k, i, e, f)) : h && h(a, i.childNodes, c, f)
                    }
                    for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) i = new bb, j = H(a[p], [], i, 0 === p ? e : c, f), k = j.length ? M(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && E(pd(a[p]), "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : F(l, k ? k.transclude : b), o.push(k, m), n = n || k || m, g = null;
                    return n ? h : null
                }

                function G(a, b) {
                    return function(c, d, e) {
                        var f = !1;
                        c || (c = a.$new(), c.$$transcluded = !0, f = !0);
                        var g = b(c, d, e);
                        return f && g.on("$destroy", P(c, c.$destroy)), g
                    }
                }

                function H(a, b, c, d, e) {
                    var f, g, i = a.nodeType,
                        k = c.$attr;
                    switch (i) {
                        case 1:
                            Q(b, Nb(sd(a).toLowerCase()), "E", d, e);
                            for (var l, m, n, o, p, q = a.attributes, r = 0, s = q && q.length; s > r; r++) {
                                var t = !1,
                                    v = !1;
                                if (l = q[r], !od || od >= 8 || l.specified) {
                                    m = l.name, o = Nb(m), gb.test(o) && (m = ab(o.substr(6), "-"));
                                    var w = o.replace(/(Start|End)$/, "");
                                    o === w + "Start" && (t = m, v = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = Nb(m.toLowerCase()), k[n] = m, c[n] = p = zd(l.value), Ab(a, n) && (c[n] = !0), Z(a, b, p, n), Q(b, n, "A", d, e, t, v)
                                }
                            }
                            if (g = a.className, u(g) && "" !== g)
                                for (; f = j.exec(g);) n = Nb(f[2]), Q(b, n, "C", d, e) && (c[n] = zd(f[3])), g = g.substr(f.index + f[0].length);
                            break;
                        case 3:
                            X(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                f = h.exec(a.nodeValue), f && (n = Nb(f[1]), Q(b, n, "M", d, e) && (c[n] = zd(f[2])))
                            } catch (x) {}
                    }
                    return b.sort(V), b
                }

                function I(a, b, c) {
                    var d = [],
                        e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a) throw Ud("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                        } while (e > 0)
                    } else d.push(a);
                    return pd(d)
                }

                function J(a, b, c) {
                    return function(d, e, f, g, h) {
                        return e = I(e[0], b, c), a(d, e, f, g, h)
                    }
                }

                function M(a, e, g, h, j, k, l, m, n) {
                    function o(a, b, c, d) {
                        a && (c && (a = J(a, c, d)), a.require = w.require, (M === w || w.$$isolateScope) && (a = _(a, {
                            isolateScope: !0
                        })), l.push(a)), b && (c && (b = J(b, c, d)), b.require = w.require, (M === w || w.$$isolateScope) && (b = _(b, {
                            isolateScope: !0
                        })), m.push(b))
                    }

                    function p(a, b, c) {
                        var d, e = "data",
                            g = !1;
                        if (u(a)) {
                            for (;
                                "^" == (d = a.charAt(0)) || "?" == d;) a = a.substr(1), "^" == d && (e = "inheritedData"), g = g || "?" == d;
                            if (d = null, c && "data" === e && (d = c[a]), d = d || b[e]("$" + a + "Controller"), !d && !g) throw Ud("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, z);
                            return d
                        }
                        return x(a) && (d = [], f(a, function(a) {
                            d.push(p(a, b, c))
                        })), d
                    }

                    function q(a, b, h, j, k) {
                        function n(a, b) {
                            var d;
                            return arguments.length < 2 && (b = a, a = c), X && (d = z), k(a, b, d)
                        }
                        var o, q, r, t, u, w, x, y, z = {};
                        if (o = e === h ? g : K(g, new bb(pd(h), g.$attr)), q = o.$$element, M) {
                            var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
                                B = pd(h);
                            x = b.$new(!0), P && P === M.$$originalDirective ? B.data("$isolateScope", x) : B.data("$isolateScopeNoTemplate", x), E(B, "ng-isolate-scope"), f(M.scope, function(a, c) {
                                var e, f, g, h, i = a.match(A) || [],
                                    j = i[3] || c,
                                    k = "?" == i[2],
                                    l = i[1];
                                switch (x.$$isolateBindings[c] = l + j, l) {
                                    case "@":
                                        o.$observe(j, function(a) {
                                            x[c] = a
                                        }), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b));
                                        break;
                                    case "=":
                                        if (k && !o[j]) return;
                                        f = s(o[j]), h = f.literal ? L : function(a, b) {
                                            return a === b
                                        }, g = f.assign || function() {
                                            throw e = x[c] = f(b), Ud("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], M.name)
                                        }, e = x[c] = f(b), x.$watch(function() {
                                            var a = f(b);
                                            return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a
                                        }, null, f.literal);
                                        break;
                                    case "&":
                                        f = s(o[j]), x[c] = function(a) {
                                            return f(b, a)
                                        };
                                        break;
                                    default:
                                        throw Ud("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", M.name, c, a)
                                }
                            })
                        }
                        for (y = k && n, G && f(G, function(a) {
                            var c, d = {
                                    $scope: a === M || a.$$isolateScope ? x : b,
                                    $element: q,
                                    $attrs: o,
                                    $transclude: y
                                };
                            w = a.controller, "@" == w && (w = o[a.name]), c = v(w, d), z[a.name] = c, X || q.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c)
                        }), r = 0, t = l.length; t > r; r++) try {
                            u = l[r], u(u.isolateScope ? x : b, q, o, u.require && p(u.require, q, z), y)
                        } catch (C) {
                            i(C, U(q))
                        }
                        var D = b;
                        for (M && (M.template || null === M.templateUrl) && (D = x), a && a(D, h.childNodes, c, k), r = m.length - 1; r >= 0; r--) try {
                            u = m[r], u(u.isolateScope ? x : b, q, o, u.require && p(u.require, q, z), y)
                        } catch (C) {
                            i(C, U(q))
                        }
                    }
                    n = n || {};
                    for (var r, w, z, A, B, C, F = -Number.MAX_VALUE, G = n.controllerDirectives, M = n.newIsolateScopeDirective, P = n.templateDirective, Q = n.nonTlbTranscludeDirective, V = !1, X = n.hasElementTranscludeDirective, Y = g.$$element = pd(e), Z = k, ab = h, cb = 0, db = a.length; db > cb; cb++) {
                        w = a[cb];
                        var eb = w.$$start,
                            gb = w.$$end;
                        if (eb && (Y = I(e, eb, gb)), A = c, F > w.priority) break;
                        if ((C = w.scope) && (r = r || w, w.templateUrl || (W("new/isolated scope", M, w, Y), t(C) && (M = w))), z = w.name, !w.templateUrl && w.controller && (C = w.controller, G = G || {}, W("'" + z + "' controller", G[z], w, Y), G[z] = w), (C = w.transclude) && (V = !0, w.$$tlb || (W("transclusion", Q, w, Y), Q = w), "element" == C ? (X = !0, F = w.priority, A = I(e, eb, gb), Y = g.$$element = pd(b.createComment(" " + z + ": " + g[z] + " ")), e = Y[0], $(j, pd(O(A)), e), ab = D(A, h, F, Z && Z.name, {
                            nonTlbTranscludeDirective: Q
                        })) : (A = pd(nb(e)).contents(), Y.empty(), ab = D(A, h))), w.template)
                            if (W("template", P, w, Y), P = w, C = y(w.template) ? w.template(Y, g) : w.template, C = fb(C), w.replace) {
                                if (Z = w, A = S(C), e = A[0], 1 != A.length || 1 !== e.nodeType) throw Ud("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", z, "");
                                $(j, Y, e);
                                var hb = {
                                    $attr: {}
                                }, ib = H(e, [], hb),
                                    jb = a.splice(cb + 1, a.length - (cb + 1));
                                M && N(ib), a = a.concat(ib).concat(jb), R(g, hb), db = a.length
                            } else Y.html(C);
                        if (w.templateUrl) W("template", P, w, Y), P = w, w.replace && (Z = w), q = T(a.splice(cb, a.length - cb), Y, g, j, ab, l, m, {
                            controllerDirectives: G,
                            newIsolateScopeDirective: M,
                            templateDirective: P,
                            nonTlbTranscludeDirective: Q
                        }), db = a.length;
                        else if (w.compile) try {
                            B = w.compile(Y, g, ab), y(B) ? o(null, B, eb, gb) : B && o(B.pre, B.post, eb, gb)
                        } catch (kb) {
                            i(kb, U(Y))
                        }
                        w.terminal && (q.terminal = !0, F = Math.max(F, w.priority))
                    }
                    return q.scope = r && r.scope === !0, q.transclude = V && ab, n.hasElementTranscludeDirective = X, q
                }

                function N(a) {
                    for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                        $$isolateScope: !0
                    })
                }

                function Q(b, d, f, h, j, k, l) {
                    if (d === j) return null;
                    var m = null;
                    if (e.hasOwnProperty(d))
                        for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++) try {
                            o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                                $$start: k,
                                $$end: l
                            })), b.push(o), m = o)
                        } catch (s) {
                            i(s)
                        }
                    return m
                }

                function R(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    f(a, function(d, e) {
                        "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    }), f(b, function(b, f) {
                        "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function S(a) {
                    var b;
                    if (a = zd(a), b = k.exec(a)) {
                        b = b[1].toLowerCase();
                        var c = pd("<table>" + a + "</table>");
                        return /(thead|tbody|tfoot)/.test(b) ? c.children(b) : (c = c.children("tbody"), "tr" === b ? c.children("tr") : c.children("tr").contents())
                    }
                    return pd("<div>" + a + "</div>").contents()
                }

                function T(a, b, c, d, e, g, h, i) {
                    var j, k, m = [],
                        n = b[0],
                        p = a.shift(),
                        q = l({}, p, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: p
                        }),
                        s = y(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl;
                    return b.empty(), o.get(A.getTrustedResourceUrl(s), {
                        cache: r
                    }).success(function(l) {
                        var o, r, u, v;
                        if (l = fb(l), p.replace) {
                            if (u = S(l), o = u[0], 1 != u.length || 1 !== o.nodeType) throw Ud("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, s);
                            r = {
                                $attr: {}
                            }, $(d, b, o);
                            var w = H(o, [], r);
                            t(p.scope) && N(w), a = w.concat(a), R(c, r)
                        } else o = n, b.html(l);
                        for (a.unshift(q), j = M(a, o, c, e, b, p, g, h, i), f(d, function(a, c) {
                            a == o && (d[c] = b[0])
                        }), k = F(b[0].childNodes, e); m.length;) {
                            var x = m.shift(),
                                y = m.shift(),
                                z = m.shift(),
                                A = m.shift(),
                                B = b[0];
                            if (y !== n) {
                                var C = y.className;
                                i.hasElementTranscludeDirective && p.replace || (B = nb(o)), $(z, pd(y), B), E(pd(B), C)
                            }
                            v = j.transclude ? G(x, j.transclude) : A, j(k, x, B, d, v)
                        }
                        m = null
                    }).error(function(a, b, c, d) {
                        throw Ud("tpload", "Failed to load template: {0}", d.url)
                    }),
                    function(a, b, c, d, e) {
                        m ? (m.push(b), m.push(c), m.push(d), m.push(e)) : j(k, b, c, d, e)
                    }
                }

                function V(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function W(a, b, c, d) {
                    if (b) throw Ud("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, U(d))
                }

                function X(a, b) {
                    var c = d(b, !0);
                    c && a.push({
                        priority: 0,
                        compile: q(function(a, b) {
                            var d = b.parent(),
                                e = d.data("$binding") || [];
                            e.push(c), E(d.data("$binding", e), "ng-binding"), a.$watch(c, function(a) {
                                b[0].nodeValue = a
                            })
                        })
                    })
                }

                function Y(a, b) {
                    if ("srcdoc" == b) return A.HTML;
                    var c = sd(a);
                    return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? A.RESOURCE_URL : void 0
                }

                function Z(a, b, c, e) {
                    var f = d(c, !0);
                    if (f) {
                        if ("multiple" === e && "SELECT" === sd(a)) throw Ud("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", U(a));
                        b.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(b, c, g) {
                                        var h = g.$$observers || (g.$$observers = {});
                                        if (m.test(e)) throw Ud("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        f = d(g[e], !0, Y(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function(a, b) {
                                            "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function $(a, c, d) {
                    var e, f, g = c[0],
                        h = c.length,
                        i = g.parentNode;
                    if (a)
                        for (e = 0, f = a.length; f > e; e++)
                            if (a[e] == g) {
                                a[e++] = d;
                                for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                                a.length -= h - 1;
                                break
                            }
                    i && i.replaceChild(d, g);
                    var m = b.createDocumentFragment();
                    m.appendChild(g), d[pd.expando] = g[pd.expando];
                    for (var n = 1, o = c.length; o > n; n++) {
                        var p = c[n];
                        pd(p).remove(), m.appendChild(p), delete c[n]
                    }
                    c[0] = d, c.length = 1
                }

                function _(a, b) {
                    return l(function() {
                        return a.apply(null, arguments)
                    }, a, b)
                }
                var bb = function(a, b) {
                    this.$$element = a, this.$attr = b || {}
                };
                bb.prototype = {
                    $normalize: Nb,
                    $addClass: function(a) {
                        a && a.length > 0 && B.addClass(this.$$element, a)
                    },
                    $removeClass: function(a) {
                        a && a.length > 0 && B.removeClass(this.$$element, a)
                    },
                    $updateClass: function(a, b) {
                        var c = Ob(a, b),
                            d = Ob(b, a);
                        0 === c.length ? B.removeClass(this.$$element, d) : 0 === d.length ? B.addClass(this.$$element, c) : B.setClass(this.$$element, c, d)
                    },
                    $set: function(a, b, d, e) {
                        var g, h = Ab(this.$$element[0], a);
                        h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = ab(a, "-"))), g = sd(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = C(b, "src" === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                        var j = this.$$observers;
                        j && f(j[a], function(a) {
                            try {
                                a(b)
                            } catch (c) {
                                i(c)
                            }
                        })
                    },
                    $observe: function(a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []);
                        return e.push(b), w.$evalAsync(function() {
                            e.$$inter || b(c[a])
                        }), b
                    }
                };
                var db = d.startSymbol(),
                    eb = d.endSymbol(),
                    fb = "{{" == db || "}}" == eb ? p : function(a) {
                        return a.replace(/\{\{/g, db).replace(/}}/g, eb)
                    }, gb = /^ngAttr[A-Z]/;
                return D
            }
        ]
    }

    function Nb(a) {
        return kb(a.replace(Vd, ""))
    }

    function Ob(a, b) {
        var c = "",
            d = a.split(/\s+/),
            e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function Pb() {
        var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            eb(b, "controller"), t(b) ? l(a, b) : a[b] = c
        }, this.$get = ["$injector", "$window",
            function(c, e) {
                return function(f, g) {
                    var h, i, j, k;
                    if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : fb(g.$scope, j, !0) || fb(e, j, !0), db(f, j, !0)), h = c.instantiate(f, g), k) {
                        if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
                        g.$scope[k] = h
                    }
                    return h
                }
            }
        ]
    }

    function Qb() {
        this.$get = ["$window",
            function(a) {
                return pd(a.document)
            }
        ]
    }

    function Rb() {
        this.$get = ["$log",
            function(a) {
                return function() {
                    a.error.apply(a, arguments)
                }
            }
        ]
    }

    function Sb(a) {
        var b, c, d, e = {};
        return a ? (f(a.split("\n"), function(a) {
            d = a.indexOf(":"), b = jd(zd(a.substr(0, d))), c = zd(a.substr(d + 1)), b && (e[b] ? e[b] += ", " + c : e[b] = c)
        }), e) : e
    }

    function Tb(a) {
        var b = t(a) ? a : c;
        return function(c) {
            return b || (b = Sb(a)), c ? b[jd(c)] || null : b
        }
    }

    function Ub(a, b, c) {
        return y(c) ? c(a, b) : (f(c, function(c) {
            a = c(a, b)
        }), a)
    }

    function Vb(a) {
        return a >= 200 && 300 > a
    }

    function Wb() {
        var a = /^\s*(\[|\{[^\{])/,
            b = /[\}\]]\s*$/,
            d = /^\)\]\}',?\n/,
            e = {
                "Content-Type": "application/json;charset=utf-8"
            }, g = this.defaults = {
                transformResponse: [
                    function(c) {
                        return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = S(c))), c
                    }
                ],
                transformRequest: [
                    function(a) {
                        return !t(a) || C(a) || D(a) ? a : R(a)
                    }
                ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: J(e),
                    put: J(e),
                    patch: J(e)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            }, i = this.interceptors = [],
            j = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
            function(a, b, d, e, k, m) {
                function n(a) {
                    function d(a) {
                        var b = l({}, a, {
                            data: Ub(a.data, a.headers, h.transformResponse)
                        });
                        return Vb(a.status) ? b : k.reject(b)
                    }

                    function e(a) {
                        function b(a) {
                            var b;
                            f(a, function(c, d) {
                                y(c) && (b = c(), null != b ? a[d] = b : delete a[d])
                            })
                        }
                        var c, d, e, h = g.headers,
                            i = l({}, a.headers);
                        h = l({}, h.common, h[jd(a.method)]), b(h), b(i);
                        a: for (c in h) {
                            d = jd(c);
                            for (e in i)
                                if (jd(e) === d) continue a;
                            i[c] = h[c]
                        }
                        return i
                    }
                    var h = {
                        method: "get",
                        transformRequest: g.transformRequest,
                        transformResponse: g.transformResponse
                    }, i = e(a);
                    l(h, a), h.headers = i, h.method = ld(h.method);
                    var j = Kc(h.url) ? b.cookies()[h.xsrfCookieName || g.xsrfCookieName] : c;
                    j && (i[h.xsrfHeaderName || g.xsrfHeaderName] = j);
                    var m = function(a) {
                        i = a.headers;
                        var b = Ub(a.data, Tb(i), a.transformRequest);
                        return r(a.data) && f(i, function(a, b) {
                            "content-type" === jd(b) && delete i[b]
                        }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, b, i).then(d, d)
                    }, n = [m, c],
                        o = k.when(h);
                    for (f(z, function(a) {
                        (a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
                    }); n.length;) {
                        var p = n.shift(),
                            s = n.shift();
                        o = o.then(p, s)
                    }
                    return o.success = function(a) {
                        return o.then(function(b) {
                            a(b.data, b.status, b.headers, h)
                        }), o
                    }, o.error = function(a) {
                        return o.then(null, function(b) {
                            a(b.data, b.status, b.headers, h)
                        }), o
                    }, o
                }

                function o() {
                    f(arguments, function(a) {
                        n[a] = function(b, c) {
                            return n(l(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                }

                function p() {
                    f(arguments, function(a) {
                        n[a] = function(b, c, d) {
                            return n(l(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                }

                function q(b, c, d) {
                    function f(a, b, c) {
                        j && (Vb(a) ? j.put(p, [a, b, Sb(c)]) : j.remove(p)), h(b, a, c), e.$$phase || e.$apply()
                    }

                    function h(a, c, d) {
                        c = Math.max(c, 0), (Vb(c) ? m.resolve : m.reject)({
                            data: a,
                            status: c,
                            headers: Tb(d),
                            config: b
                        })
                    }

                    function i() {
                        var a = H(n.pendingRequests, b); - 1 !== a && n.pendingRequests.splice(a, 1)
                    }
                    var j, l, m = k.defer(),
                        o = m.promise,
                        p = v(b.url, b.params);
                    if (n.pendingRequests.push(b), o.then(i, i), (b.cache || g.cache) && b.cache !== !1 && "GET" == b.method && (j = t(b.cache) ? b.cache : t(g.cache) ? g.cache : w), j)
                        if (l = j.get(p), s(l)) {
                            if (l.then) return l.then(i, i), l;
                            x(l) ? h(l[1], l[0], J(l[2])) : h(l, 200, {})
                        } else j.put(p, o);
                    return r(l) && a(b.method, p, c, f, d, b.timeout, b.withCredentials, b.responseType), o
                }

                function v(a, b) {
                    if (!b) return a;
                    var c = [];
                    return h(b, function(a, b) {
                        null === a || r(a) || (x(a) || (a = [a]), f(a, function(a) {
                            t(a) && (a = R(a)), c.push(Z(b) + "=" + Z(a))
                        }))
                    }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
                }
                var w = d("$http"),
                    z = [];
                return f(i, function(a) {
                    z.unshift(u(a) ? m.get(a) : m.invoke(a))
                }), f(j, function(a, b) {
                    var c = u(a) ? m.get(a) : m.invoke(a);
                    z.splice(b, 0, {
                        response: function(a) {
                            return c(k.when(a))
                        },
                        responseError: function(a) {
                            return c(k.reject(a))
                        }
                    })
                }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
            }
        ]
    }

    function Xb(b) {
        if (8 >= od && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest)) return new a.ActiveXObject("Microsoft.XMLHTTP");
        if (a.XMLHttpRequest) return new a.XMLHttpRequest;
        throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
    }

    function Yb() {
        this.$get = ["$browser", "$window", "$document",
            function(a, b, c) {
                return Zb(a, Xb, a.defer, b.angular.callbacks, c[0])
            }
        ]
    }

    function Zb(a, b, c, d, e) {
        function g(a, b) {
            var c = e.createElement("script"),
                d = function() {
                    c.onreadystatechange = c.onload = c.onerror = null, e.body.removeChild(c), b && b()
                };
            return c.type = "text/javascript", c.src = a, od && 8 >= od ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = function() {
                d()
            }, e.body.appendChild(c), d
        }
        var h = -1;
        return function(e, i, j, k, l, m, n, p) {
            function q() {
                t = h, v && v(), w && w.abort()
            }

            function r(b, d, e, f) {
                y && c.cancel(y), v = w = null, 0 === d && (d = e ? 200 : "file" == Jc(i).protocol ? 404 : 0), d = 1223 == d ? 204 : d, b(d, e, f), a.$$completeOutstandingRequest(o)
            }
            var t;
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == jd(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function(a) {
                    d[u].data = a
                };
                var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), function() {
                    d[u].data ? r(k, 200, d[u].data) : r(k, t || -2), d[u] = xd.noop
                })
            } else {
                var w = b(e);
                if (w.open(e, i, !0), f(l, function(a, b) {
                    s(a) && w.setRequestHeader(b, a)
                }), w.onreadystatechange = function() {
                    if (w && 4 == w.readyState) {
                        var a = null,
                            b = null;
                        t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText), r(k, t || w.status, b, a)
                    }
                }, n && (w.withCredentials = !0), p) try {
                    w.responseType = p
                } catch (x) {
                    if ("json" !== p) throw x
                }
                w.send(j || null)
            } if (m > 0) var y = c(q, m);
            else m && m.then && m.then(q)
        }
    }

    function $b() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce",
            function(c, d, e) {
                function f(f, i, j) {
                    for (var k, l, m, n, o = 0, p = [], q = f.length, s = !1, t = []; q > o;) - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, s = !0) : (o != q && p.push(f.substring(o)), o = q);
                    if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1) throw Wd("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                    return !i || s ? (t.length = q, m = function(a) {
                        try {
                            for (var b, c = 0, g = q; g > c; c++) "function" == typeof(b = p[c]) && (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null === b || r(b) ? b = "" : "string" != typeof b && (b = R(b))), t[c] = b;
                            return t.join("")
                        } catch (h) {
                            var i = Wd("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
                            d(i)
                        }
                    }, m.exp = f, m.parts = p, m) : void 0
                }
                var g = a.length,
                    h = b.length;
                return f.startSymbol = function() {
                    return a
                }, f.endSymbol = function() {
                    return b
                }, f
            }
        ]
    }

    function _b() {
        this.$get = ["$rootScope", "$window", "$q",
            function(a, b, c) {
                function d(d, f, g, h) {
                    var i = b.setInterval,
                        j = b.clearInterval,
                        k = c.defer(),
                        l = k.promise,
                        m = 0,
                        n = s(h) && !h;
                    return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function() {
                        k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply()
                    }, f), e[l.$$intervalId] = k, l
                }
                var e = {};
                return d.cancel = function(a) {
                    return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
                }, d
            }
        ]
    }

    function ac() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    return 1 === a ? "one" : "other"
                }
            }
        }
    }

    function bc(a) {
        for (var b = a.split("/"), c = b.length; c--;) b[c] = Y(b[c]);
        return b.join("/")
    }

    function cc(a, b, c) {
        var d = Jc(a, c);
        b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || Yd[d.protocol] || null
    }

    function dc(a, b, c) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var e = Jc(a, c);
        b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = W(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function ec(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function fc(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function gc(a) {
        return a.substr(0, fc(a).lastIndexOf("/") + 1)
    }

    function hc(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function ic(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = gc(a);
        cc(a, this, a), this.$$parse = function(b) {
            var c = ec(d, b);
            if (!u(c)) throw Zd("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
            dc(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var a = X(this.$$search),
                b = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
        }, this.$$rewrite = function(e) {
            var f, g;
            return (f = ec(a, e)) !== c ? (g = f, (f = ec(b, f)) !== c ? d + (ec("/", f) || f) : a + g) : (f = ec(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
        }
    }

    function jc(a, b) {
        var c = gc(a);
        cc(a, this, a), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/?.*?:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }
            var f = ec(a, d) || ec(c, d),
                g = "#" == f.charAt(0) ? ec(b, f) : this.$$html5 ? f : "";
            if (!u(g)) throw Zd("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
            dc(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose()
        }, this.$$compose = function() {
            var c = X(this.$$search),
                d = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
        }, this.$$rewrite = function(b) {
            return fc(a) == fc(b) ? b : void 0
        }
    }

    function kc(a, b) {
        this.$$html5 = !0, jc.apply(this, arguments);
        var c = gc(a);
        this.$$rewrite = function(d) {
            var e;
            return a == fc(d) ? d : (e = ec(c, d)) ? a + b + e : c === d + "/" ? c : void 0
        }
    }

    function lc(a) {
        return function() {
            return this[a]
        }
    }

    function mc(a, b) {
        return function(c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function nc() {
        var b = "",
            c = !1;
        this.hashPrefix = function(a) {
            return s(a) ? (b = a, this) : b
        }, this.html5Mode = function(a) {
            return s(a) ? (c = a, this) : c
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
            function(d, e, f, g) {
                function h(a) {
                    d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
                }
                var i, j, k, l = e.baseHref(),
                    m = e.url();
                c ? (k = hc(m) + (l || "/"), j = f.history ? ic : kc) : (k = fc(m), j = jc), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m)), g.on("click", function(b) {
                    if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
                        for (var c = pd(b.target);
                            "a" !== jd(c[0].nodeName);)
                            if (c[0] === g[0] || !(c = c.parent())[0]) return;
                        var f = c.prop("href");
                        t(f) && "[object SVGAnimatedString]" === f.toString() && (f = Jc(f.animVal).href);
                        var h = i.$$rewrite(f);
                        f && !c.attr("target") && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function(a) {
                    i.absUrl() != a && (d.$evalAsync(function() {
                        var b = i.absUrl();
                        i.$$parse(a), d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b)
                    }), d.$$phase || d.$digest())
                });
                var n = 0;
                return d.$watch(function() {
                    var a = e.url(),
                        b = i.$$replace;
                    return n && a == i.absUrl() || (n++, d.$evalAsync(function() {
                        d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
                    })), i.$$replace = !1, n
                }), i
            }
        ]
    }

    function oc() {
        var a = !0,
            b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a
        }, this.$get = ["$window",
            function(c) {
                function d(a) {
                    return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                }

                function e(a) {
                    var b = c.console || {}, e = b[a] || b.log || o,
                        g = !1;
                    try {
                        g = !! e.apply
                    } catch (h) {}
                    return g ? function() {
                        var a = [];
                        return f(arguments, function(b) {
                            a.push(d(b))
                        }), e.apply(b, a)
                    } : function(a, b) {
                        e(a, null == b ? "" : b)
                    }
                }
                return {
                    log: e("log"),
                    info: e("info"),
                    warn: e("warn"),
                    error: e("error"),
                    debug: function() {
                        var c = e("debug");
                        return function() {
                            a && c.apply(b, arguments)
                        }
                    }()
                }
            }
        ]
    }

    function pc(a, b) {
        if ("constructor" === a) throw _d("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', b);
        return a
    }

    function qc(a, b) {
        if (a) {
            if (a.constructor === a) throw _d("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.document && a.location && a.alert && a.setInterval) throw _d("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw _d("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function rc(a, b, d, e, f) {
        f = f || {};
        for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
            g = pc(h.shift(), e);
            var j = a[g];
            j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && ($d(e), "$$v" in a || ! function(a) {
                a.then(function(b) {
                    a.$$v = b
                })
            }(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
        }
        return g = pc(h.shift(), e), a[g] = d, d
    }

    function sc(a, b, d, e, f, g, h) {
        return pc(a, g), pc(b, g), pc(d, g), pc(e, g), pc(f, g), h.unwrapPromises ? function(h, i) {
            var j, k = i && i.hasOwnProperty(a) ? i : h;
            return null == k ? k : (k = k[a], k && k.then && ($d(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), b ? null == k ? c : (k = k[b], k && k.then && ($d(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), d ? null == k ? c : (k = k[d], k && k.then && ($d(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), e ? null == k ? c : (k = k[e], k && k.then && ($d(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), f ? null == k ? c : (k = k[f], k && k.then && ($d(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                j.$$v = a
            })), k = k.$$v), k) : k) : k) : k) : k)
        } : function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i)
        }
    }

    function tc(a, b) {
        return pc(a, b),
        function(b, d) {
            return null == b ? c : (d && d.hasOwnProperty(a) ? d : b)[a]
        }
    }

    function uc(a, b, d) {
        return pc(a, d), pc(b, d),
        function(d, e) {
            return null == d ? c : (d = (e && e.hasOwnProperty(a) ? e : d)[a], null == d ? c : d[b])
        }
    }

    function vc(a, b, d) {
        if (fe.hasOwnProperty(a)) return fe[a];
        var e, g = a.split("."),
            h = g.length;
        if (b.unwrapPromises || 1 !== h)
            if (b.unwrapPromises || 2 !== h)
                if (b.csp) e = 6 > h ? sc(g[0], g[1], g[2], g[3], g[4], d, b) : function(a, e) {
                    var f, i = 0;
                    do f = sc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
                    return f
                };
                else {
                    var i = "var p;\n";
                    f(g, function(a, c) {
                        pc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
                    }), i += "return s;";
                    var j = new Function("s", "k", "pw", i);
                    j.toString = q(i), e = b.unwrapPromises ? function(a, b) {
                        return j(a, b, $d)
                    } : j
                } else e = uc(g[0], g[1], d);
                else e = tc(g[0], d);
        return "hasOwnProperty" !== a && (fe[a] = e), e
    }

    function wc() {
        var a = {}, b = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0
            };
        this.unwrapPromises = function(a) {
            return s(a) ? (b.unwrapPromises = !! a, this) : b.unwrapPromises
        }, this.logPromiseWarnings = function(a) {
            return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log",
            function(c, d, e) {
                return b.csp = d.csp, $d = function(a) {
                    b.logPromiseWarnings && !ae.hasOwnProperty(a) && (ae[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                },
                function(d) {
                    var e;
                    switch (typeof d) {
                        case "string":
                            if (a.hasOwnProperty(d)) return a[d];
                            var f = new de(b),
                                g = new ee(f, c, b);
                            return e = g.parse(d, !1), "hasOwnProperty" !== d && (a[d] = e), e;
                        case "function":
                            return d;
                        default:
                            return o
                    }
                }
            }
        ]
    }

    function xc() {
        this.$get = ["$rootScope", "$exceptionHandler",
            function(a, b) {
                return yc(function(b) {
                    a.$evalAsync(b)
                }, b)
            }
        ]
    }

    function yc(a, b) {
        function d(a) {
            return a
        }

        function e(a) {
            return j(a)
        }

        function g(a) {
            var b = h(),
                c = 0,
                d = x(a) ? [] : {};
            return f(a, function(a, e) {
                c++, i(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }
        var h = function() {
            var f, g, j = [];
            return g = {
                resolve: function(b) {
                    if (j) {
                        var d = j;
                        j = c, f = i(b), d.length && a(function() {
                            for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2])
                        })
                    }
                },
                reject: function(a) {
                    g.resolve(k(a))
                },
                notify: function(b) {
                    if (j) {
                        var c = j;
                        j.length && a(function() {
                            for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b)
                        })
                    }
                },
                promise: {
                    then: function(a, c, g) {
                        var i = h(),
                            k = function(c) {
                                try {
                                    i.resolve((y(a) ? a : d)(c))
                                } catch (e) {
                                    i.reject(e), b(e)
                                }
                            }, l = function(a) {
                                try {
                                    i.resolve((y(c) ? c : e)(a))
                                } catch (d) {
                                    i.reject(d), b(d)
                                }
                            }, m = function(a) {
                                try {
                                    i.notify((y(g) ? g : d)(a))
                                } catch (c) {
                                    b(c)
                                }
                            };
                        return j ? j.push([k, l, m]) : f.then(k, l, m), i.promise
                    },
                    "catch": function(a) {
                        return this.then(null, a)
                    },
                    "finally": function(a) {
                        function b(a, b) {
                            var c = h();
                            return b ? c.resolve(a) : c.reject(a), c.promise
                        }

                        function c(c, e) {
                            var f = null;
                            try {
                                f = (a || d)()
                            } catch (g) {
                                return b(g, !1)
                            }
                            return f && y(f.then) ? f.then(function() {
                                return b(c, e)
                            }, function(a) {
                                return b(a, !1)
                            }) : b(c, e)
                        }
                        return this.then(function(a) {
                            return c(a, !0)
                        }, function(a) {
                            return c(a, !1)
                        })
                    }
                }
            }
        }, i = function(b) {
                return b && y(b.then) ? b : {
                    then: function(c) {
                        var d = h();
                        return a(function() {
                            d.resolve(c(b))
                        }), d.promise
                    }
                }
            }, j = function(a) {
                var b = h();
                return b.reject(a), b.promise
            }, k = function(c) {
                return {
                    then: function(d, f) {
                        var g = h();
                        return a(function() {
                            try {
                                g.resolve((y(f) ? f : e)(c))
                            } catch (a) {
                                g.reject(a), b(a)
                            }
                        }), g.promise
                    }
                }
            }, l = function(c, f, g, k) {
                var l, m = h(),
                    n = function(a) {
                        try {
                            return (y(f) ? f : d)(a)
                        } catch (c) {
                            return b(c), j(c)
                        }
                    }, o = function(a) {
                        try {
                            return (y(g) ? g : e)(a)
                        } catch (c) {
                            return b(c), j(c)
                        }
                    }, p = function(a) {
                        try {
                            return (y(k) ? k : d)(a)
                        } catch (c) {
                            b(c)
                        }
                    };
                return a(function() {
                    i(c).then(function(a) {
                        l || (l = !0, m.resolve(i(a).then(n, o, p)))
                    }, function(a) {
                        l || (l = !0, m.resolve(o(a)))
                    }, function(a) {
                        l || m.notify(p(a))
                    })
                }), m.promise
            };
        return {
            defer: h,
            reject: j,
            when: l,
            all: g
        }
    }

    function zc() {
        this.$get = ["$window", "$timeout",
            function(a, b) {
                var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame,
                    d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                    e = !! c,
                    f = e ? function(a) {
                        var b = c(a);
                        return function() {
                            d(b)
                        }
                    } : function(a) {
                        var c = b(a, 16.66, !1);
                        return function() {
                            b.cancel(c)
                        }
                    };
                return f.supported = e, f
            }
        ]
    }

    function Ac() {
        var a = 10,
            b = d("$rootScope"),
            c = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
            function(d, g, h, i) {
                function k() {
                    this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
                }

                function l(a) {
                    if (r.$$phase) throw b("inprog", "{0} already in progress", r.$$phase);
                    r.$$phase = a
                }

                function m() {
                    r.$$phase = null
                }

                function n(a, b) {
                    var c = h(a);
                    return db(c, b), c
                }

                function p(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
                }

                function q() {}
                k.prototype = {
                    constructor: k,
                    $new: function(a) {
                        var b, c;
                        return a ? (c = new k, c.$root = this.$root, c.$$asyncQueue = this.$$asyncQueue, c.$$postDigestQueue = this.$$postDigestQueue) : (b = function() {}, b.prototype = this, c = new b, c.$id = j()), c["this"] = c, c.$$listeners = {}, c.$$listenerCount = {}, c.$parent = this, c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
                    },
                    $watch: function(a, b, d) {
                        var e = this,
                            f = n(a, "watch"),
                            g = e.$$watchers,
                            h = {
                                fn: b,
                                last: q,
                                get: f,
                                exp: a,
                                eq: !! d
                            };
                        if (c = null, !y(b)) {
                            var i = n(b || o, "listener");
                            h.fn = function(a, b, c) {
                                i(c)
                            }
                        }
                        if ("string" == typeof a && f.constant) {
                            var j = h.fn;
                            h.fn = function(a, b, c) {
                                j.call(this, a, b, c), I(g, h)
                            }
                        }
                        return g || (g = e.$$watchers = []), g.unshift(h),
                        function() {
                            I(g, h), c = null
                        }
                    },
                    $watchCollection: function(a, b) {
                        function c() {
                            f = m(j);
                            var a, b;
                            if (t(f))
                                if (e(f)) {
                                    g !== n && (g = n, q = g.length = 0, l++), a = f.length, q !== a && (l++, g.length = q = a);
                                    for (var c = 0; a > c; c++) {
                                        var d = g[c] !== g[c] && f[c] !== f[c];
                                        d || g[c] === f[c] || (l++, g[c] = f[c])
                                    }
                                } else {
                                    g !== o && (g = o = {}, q = 0, l++), a = 0;
                                    for (b in f) f.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? g[b] !== f[b] && (l++, g[b] = f[b]) : (q++, g[b] = f[b], l++));
                                    if (q > a) {
                                        l++;
                                        for (b in g) g.hasOwnProperty(b) && !f.hasOwnProperty(b) && (q--, delete g[b])
                                    }
                                } else g !== f && (g = f, l++);
                            return l
                        }

                        function d() {
                            if (p ? (p = !1, b(f, f, j)) : b(f, i, j), k)
                                if (t(f))
                                    if (e(f)) {
                                        i = new Array(f.length);
                                        for (var a = 0; a < f.length; a++) i[a] = f[a]
                                    } else {
                                        i = {};
                                        for (var c in f) kd.call(f, c) && (i[c] = f[c])
                                    } else i = f
                        }
                        var f, g, i, j = this,
                            k = b.length > 1,
                            l = 0,
                            m = h(a),
                            n = [],
                            o = {}, p = !0,
                            q = 0;
                        return this.$watch(c, d)
                    },
                    $digest: function() {
                        var d, e, f, h, i, j, k, n, o, p, r, s = this.$$asyncQueue,
                            t = this.$$postDigestQueue,
                            u = a,
                            v = this,
                            w = [];
                        l("$digest"), c = null;
                        do {
                            for (j = !1, n = v; s.length;) {
                                try {
                                    r = s.shift(), r.scope.$eval(r.expression)
                                } catch (x) {
                                    m(), g(x)
                                }
                                c = null
                            }
                            a: do {
                                if (h = n.$$watchers)
                                    for (i = h.length; i--;) try {
                                        if (d = h[i])
                                            if ((e = d.get(n)) === (f = d.last) || (d.eq ? L(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                                if (d === c) {
                                                    j = !1;
                                                    break a
                                                }
                                            } else j = !0, c = d, d.last = d.eq ? J(e) : e, d.fn(e, f === q ? e : f, n), 5 > u && (o = 4 - u, w[o] || (w[o] = []), p = y(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, p += "; newVal: " + R(e) + "; oldVal: " + R(f), w[o].push(p))
                                    } catch (x) {
                                        m(), g(x)
                                    }
                                if (!(k = n.$$childHead || n !== v && n.$$nextSibling))
                                    for (; n !== v && !(k = n.$$nextSibling);) n = n.$parent
                            } while (n = k);
                            if ((j || s.length) && !u--) throw m(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, R(w))
                        } while (j || s.length);
                        for (m(); t.length;) try {
                            t.shift()()
                        } catch (x) {
                            g(x)
                        }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this !== r && (f(this.$$listenerCount, P(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
                        }
                    },
                    $eval: function(a, b) {
                        return h(a)(this, b)
                    },
                    $evalAsync: function(a) {
                        r.$$phase || r.$$asyncQueue.length || i.defer(function() {
                            r.$$asyncQueue.length && r.$digest()
                        }), this.$$asyncQueue.push({
                            scope: this,
                            expression: a
                        })
                    },
                    $$postDigest: function(a) {
                        this.$$postDigestQueue.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return l("$apply"), this.$eval(a)
                        } catch (b) {
                            g(b)
                        } finally {
                            m();
                            try {
                                r.$digest()
                            } catch (b) {
                                throw g(b), b
                            }
                        }
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []), c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function() {
                            c[H(c, b)] = null, p(e, 1, a)
                        }
                    },
                    $emit: function(a) {
                        var b, c, d, e = [],
                            f = this,
                            h = !1,
                            i = {
                                name: a,
                                targetScope: f,
                                stopPropagation: function() {
                                    h = !0
                                },
                                preventDefault: function() {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, j = N([i], arguments, 1);
                        do {
                            for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)
                                if (b[c]) try {
                                    b[c].apply(null, j)
                                } catch (k) {
                                    g(k)
                                } else b.splice(c, 1), c--, d--;
                            if (h) return i;
                            f = f.$parent
                        } while (f);
                        return i
                    },
                    $broadcast: function(a) {
                        for (var b, c, d, e = this, f = e, h = e, i = {
                                name: a,
                                targetScope: e,
                                preventDefault: function() {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, j = N([i], arguments, 1); f = h;) {
                            for (i.currentScope = f, b = f.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)
                                if (b[c]) try {
                                    b[c].apply(null, j)
                                } catch (k) {
                                    g(k)
                                } else b.splice(c, 1), c--, d--;
                            if (!(h = f.$$listenerCount[a] && f.$$childHead || f !== e && f.$$nextSibling))
                                for (; f !== e && !(h = f.$$nextSibling);) f = f.$parent
                        }
                        return i
                    }
                };
                var r = new k;
                return r
            }
        ]
    }

    function Bc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function(b) {
            return s(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (b = a, this) : b
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return od && !(od >= 8) || (e = Jc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e
            }
        }
    }

    function Cc(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(//g, "\\x08")
    }

    function Dc(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (a.indexOf("***") > -1) throw ge("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Cc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (z(a)) return new RegExp("^" + a.source + "$");
        throw ge("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Ec(a) {
        var b = [];
        return s(a) && f(a, function(a) {
            b.push(Dc(a))
        }), b
    }

    function Fc() {
        this.SCE_CONTEXTS = he;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Ec(b)), a
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Ec(a)), b
        }, this.$get = ["$injector",
            function(d) {
                function e(a, b) {
                    return "self" === a ? Kc(b) : !! a.exec(b.href)
                }

                function f(c) {
                    var d, f, g = Jc(c.toString()),
                        h = !1;
                    for (d = 0, f = a.length; f > d; d++)
                        if (e(a[d], g)) {
                            h = !0;
                            break
                        }
                    if (h)
                        for (d = 0, f = b.length; f > d; d++)
                            if (e(b[d], g)) {
                                h = !1;
                                break
                            }
                    return h
                }

                function g(a) {
                    var b = function(a) {
                        this.$$unwrapTrustedValue = function() {
                            return a
                        }
                    };
                    return a && (b.prototype = new a), b.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, b.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, b
                }

                function h(a, b) {
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (!d) throw ge("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" != typeof b) throw ge("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                    return new d(b)
                }

                function i(a) {
                    return a instanceof l ? a.$$unwrapTrustedValue() : a
                }

                function j(a, b) {
                    if (null === b || b === c || "" === b) return b;
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (d && b instanceof d) return b.$$unwrapTrustedValue();
                    if (a === he.RESOURCE_URL) {
                        if (f(b)) return b;
                        throw ge("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                    }
                    if (a === he.HTML) return k(b);
                    throw ge("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var k = function() {
                    throw ge("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                d.has("$sanitize") && (k = d.get("$sanitize"));
                var l = g(),
                    m = {};
                return m[he.HTML] = g(l), m[he.CSS] = g(l), m[he.URL] = g(l), m[he.JS] = g(l), m[he.RESOURCE_URL] = g(m[he.URL]), {
                    trustAs: h,
                    getTrusted: j,
                    valueOf: i
                }
            }
        ]
    }

    function Gc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !! b), a
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate",
            function(b, c, d) {
                if (a && c.msie && c.msieDocumentMode < 8) throw ge("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var e = J(he);
                e.isEnabled = function() {
                    return a
                }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
                    return b
                }, e.valueOf = p), e.parseAs = function(a, c) {
                    var d = b(c);
                    return d.literal && d.constant ? d : function(b, c) {
                        return e.getTrusted(a, d(b, c))
                    }
                };
                var g = e.parseAs,
                    h = e.getTrusted,
                    i = e.trustAs;
                return f(he, function(a, b) {
                    var c = jd(b);
                    e[kb("parse_as_" + c)] = function(b) {
                        return g(a, b)
                    }, e[kb("get_trusted_" + c)] = function(b) {
                        return h(a, b)
                    }, e[kb("trust_as_" + c)] = function(b) {
                        return i(a, b)
                    }
                }), e
            }
        ]
    }

    function Hc() {
        this.$get = ["$window", "$document",
            function(a, b) {
                var c, d, e = {}, f = m((/android (\d+)/.exec(jd((a.navigator || {}).userAgent)) || [])[1]),
                    g = /Boxee/i.test((a.navigator || {}).userAgent),
                    h = b[0] || {}, i = h.documentMode,
                    j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                    k = h.body && h.body.style,
                    l = !1,
                    n = !1;
                if (k) {
                    for (var o in k)
                        if (d = j.exec(o)) {
                            c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                            break
                        }
                    c || (c = "WebkitOpacity" in k && "webkit"), l = !! ("transition" in k || c + "Transition" in k), n = !! ("animation" in k || c + "Animation" in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
                }
                return {
                    history: !(!a.history || !a.history.pushState || 4 > f || g),
                    hashchange: "onhashchange" in a && (!i || i > 7),
                    hasEvent: function(a) {
                        if ("input" == a && 9 == od) return !1;
                        if (r(e[a])) {
                            var b = h.createElement("div");
                            e[a] = "on" + a in b
                        }
                        return e[a]
                    },
                    csp: M(),
                    vendorPrefix: c,
                    transitions: l,
                    animations: n,
                    android: f,
                    msie: od,
                    msieDocumentMode: i
                }
            }
        ]
    }

    function Ic() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
            function(a, b, c, d) {
                function e(e, g, h) {
                    var i, j = c.defer(),
                        k = j.promise,
                        l = s(h) && !h;
                    return i = b.defer(function() {
                        try {
                            j.resolve(e())
                        } catch (b) {
                            j.reject(b), d(b)
                        } finally {
                            delete f[k.$$timeoutId]
                        }
                        l || a.$apply()
                    }, g), k.$$timeoutId = i, f[i] = j, k
                }
                var f = {};
                return e.cancel = function(a) {
                    return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                }, e
            }
        ]
    }

    function Jc(a) {
        var b = a;
        return od && (ie.setAttribute("href", b), b = ie.href), ie.setAttribute("href", b), {
            href: ie.href,
            protocol: ie.protocol ? ie.protocol.replace(/:$/, "") : "",
            host: ie.host,
            search: ie.search ? ie.search.replace(/^\?/, "") : "",
            hash: ie.hash ? ie.hash.replace(/^#/, "") : "",
            hostname: ie.hostname,
            port: ie.port,
            pathname: "/" === ie.pathname.charAt(0) ? ie.pathname : "/" + ie.pathname
        }
    }

    function Kc(a) {
        var b = u(a) ? Jc(a) : a;
        return b.protocol === je.protocol && b.host === je.host
    }

    function Lc() {
        this.$get = q(a)
    }

    function Mc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }
        var c = "Filter";
        this.register = b, this.$get = ["$injector",
            function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }
        ], b("currency", Oc), b("date", Wc), b("filter", Nc), b("json", Xc), b("limitTo", Yc), b("lowercase", oe), b("number", Pc), b("orderBy", Zc), b("uppercase", pe)
    }

    function Nc() {
        return function(a, b, c) {
            if (!x(a)) return a;
            var d = typeof c,
                e = [];
            e.check = function(a) {
                for (var b = 0; b < e.length; b++)
                    if (!e[b](a)) return !1;
                return !0
            }, "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                return xd.equals(a, b)
            } : function(a, b) {
                if (a && b && "object" == typeof a && "object" == typeof b) {
                    for (var d in a)
                        if ("$" !== d.charAt(0) && kd.call(a, d) && c(a[d], b[d])) return !0;
                    return !1
                }
                return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1
            });
            var f = function(a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return c(a, b);
                    case "object":
                        switch (typeof b) {
                            case "object":
                                return c(a, b);
                            default:
                                for (var d in a)
                                    if ("$" !== d.charAt(0) && f(a[d], b)) return !0
                        }
                        return !1;
                    case "array":
                        for (var e = 0; e < a.length; e++)
                            if (f(a[e], b)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof b) {
                case "boolean":
                case "number":
                case "string":
                    b = {
                        $: b
                    };
                case "object":
                    for (var g in b)! function(a) {
                        "undefined" != typeof b[a] && e.push(function(c) {
                            return f("$" == a ? c : c && c[a], b[a])
                        })
                    }(g);
                    break;
                case "function":
                    e.push(b);
                    break;
                default:
                    return a
            }
            for (var h = [], i = 0; i < a.length; i++) {
                var j = a[i];
                e.check(j) && h.push(j)
            }
            return h
        }
    }

    function Oc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return r(c) && (c = b.CURRENCY_SYM), Qc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/¤/g, c)
        }
    }

    function Pc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return Qc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Qc(a, b, c, d, e) {
        if (null == a || !isFinite(a) || t(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "",
            h = "",
            i = [],
            j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
        }
        if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
        else {
            var l = (g.split(ke)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
            var m = Math.pow(10, e);
            a = Math.round(a * m) / m;
            var n = ("" + a).split(ke),
                o = n[0];
            n = n[1] || "";
            var p, q = 0,
                s = b.lgSize,
                u = b.gSize;
            if (o.length >= s + u)
                for (q = o.length - s, p = 0; q > p; p++)(q - p) % u === 0 && 0 !== p && (h += c), h += o.charAt(p);
            for (p = q; p < o.length; p++)(o.length - p) % s === 0 && 0 !== p && (h += c), h += o.charAt(p);
            for (; n.length < e;) n += "0";
            e && "0" !== e && (h += d + n.substr(0, e))
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
    }

    function Rc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function Sc(a, b, c, d) {
        return c = c || 0,
        function(e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Rc(f, b, d)
        }
    }

    function Tc(a, b) {
        return function(c, d) {
            var e = c["get" + a](),
                f = ld(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function Uc(a) {
        var b = -1 * a.getTimezoneOffset(),
            c = b >= 0 ? "+" : "";
        return c += Rc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Rc(Math.abs(b % 60), 2)
    }

    function Vc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Wc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0),
                    e = 0,
                    f = 0,
                    g = b[8] ? d.setUTCFullYear : d.setFullYear,
                    h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e,
                    j = m(b[5] || 0) - f,
                    k = m(b[6] || 0),
                    l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d) {
            var e, g, h = "",
                i = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ne.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
            for (; d;) g = me.exec(d), g ? (i = N(i, g, 1), d = i.pop()) : (i.push(d), d = null);
            return f(i, function(b) {
                e = le[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), h
        }
    }

    function Xc() {
        return function(a) {
            return R(a, !0)
        }
    }

    function Yc() {
        return function(a, b) {
            if (!x(a) && !u(a)) return a;
            if (b = m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c, d, e = [];
            for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
            return e
        }
    }

    function Zc(a) {
        return function(b, c, d) {
            function e(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }

            function f(a, b) {
                return T(b) ? function(b, c) {
                    return a(c, b)
                } : a
            }

            function g(a, b) {
                var c = typeof a,
                    d = typeof b;
                return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }
            if (!x(b)) return b;
            if (!c) return b;
            c = x(c) ? c : [c], c = F(c, function(b) {
                var c = !1,
                    d = b || p;
                if (u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b), d.constant)) {
                    var e = d();
                    return f(function(a, b) {
                        return g(a[e], b[e])
                    }, c)
                }
                return f(function(a, b) {
                    return g(d(a), d(b))
                }, c)
            });
            for (var h = [], i = 0; i < b.length; i++) h.push(b[i]);
            return h.sort(f(e, d))
        }
    }

    function $c(a) {
        return y(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", q(a)
    }

    function _c(a, b, c, d) {
        function e(b, c) {
            c = c ? "-" + ab(c, "-") : "", d.removeClass(a, (b ? Ce : Be) + c), d.addClass(a, (b ? Be : Ce) + c)
        }
        var g = this,
            h = a.parent().controller("form") || se,
            i = 0,
            j = g.$error = {}, k = [];
        g.$name = b.name || b.ngForm, g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, h.$addControl(g), a.addClass(De), e(!0), g.$addControl = function(a) {
            eb(a.$name, "input"), k.push(a), a.$name && (g[a.$name] = a)
        }, g.$removeControl = function(a) {
            a.$name && g[a.$name] === a && delete g[a.$name], f(j, function(b, c) {
                g.$setValidity(c, !0, a)
            }), I(k, a)
        }, g.$setValidity = function(a, b, c) {
            var d = j[a];
            if (b) d && (I(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), j[a] = !1, e(!0, a), h.$setValidity(a, !0, g)));
            else {
                if (i || e(b), d) {
                    if (G(d, c)) return
                } else j[a] = d = [], i++, e(!1, a), h.$setValidity(a, !1, g);
                d.push(c), g.$valid = !1, g.$invalid = !0
            }
        }, g.$setDirty = function() {
            d.removeClass(a, De), d.addClass(a, Ee), g.$dirty = !0, g.$pristine = !1, h.$setDirty()
        }, g.$setPristine = function() {
            d.removeClass(a, Ee), d.addClass(a, De), g.$dirty = !1, g.$pristine = !0, f(k, function(a) {
                a.$setPristine()
            })
        }
    }

    function ad(a, b, d, e) {
        return a.$setValidity(b, d), d ? e : c
    }

    function bd(a, b, c) {
        var d = c.prop("validity");
        if (t(d)) {
            var e = function(c) {
                return a.$error[b] || !(d.badInput || d.customError || d.typeMismatch) || d.valueMissing ? c : void a.$setValidity(b, !1)
            };
            a.$parsers.push(e), a.$formatters.push(e)
        }
    }

    function cd(a, b, c, e, f, g) {
        var h = b.prop("validity");
        if (!f.android) {
            var i = !1;
            b.on("compositionstart", function() {
                i = !0
            }), b.on("compositionend", function() {
                i = !1, j()
            })
        }
        var j = function() {
            if (!i) {
                var d = b.val();
                T(c.ngTrim || "T") && (d = zd(d)), (e.$viewValue !== d || h && "" === d && !h.valueMissing) && (a.$$phase ? e.$setViewValue(d) : a.$apply(function() {
                    e.$setViewValue(d)
                }))
            }
        };
        if (f.hasEvent("input")) b.on("input", j);
        else {
            var k, l = function() {
                    k || (k = g.defer(function() {
                        j(), k = null
                    }))
                };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || l()
            }), f.hasEvent("paste") && b.on("paste cut", l)
        }
        b.on("change", j), e.$render = function() {
            b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue)
        };
        var n, o, p = c.ngPattern;
        if (p) {
            var q = function(a, b) {
                return ad(e, "pattern", e.$isEmpty(b) || a.test(b), b)
            };
            o = p.match(/^\/(.*)\/([gim]*)$/), o ? (p = new RegExp(o[1], o[2]), n = function(a) {
                return q(p, a)
            }) : n = function(c) {
                var e = a.$eval(p);
                if (!e || !e.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", p, e, U(b));
                return q(e, c)
            }, e.$formatters.push(n), e.$parsers.push(n)
        }
        if (c.ngMinlength) {
            var r = m(c.ngMinlength),
                s = function(a) {
                    return ad(e, "minlength", e.$isEmpty(a) || a.length >= r, a)
                };
            e.$parsers.push(s), e.$formatters.push(s)
        }
        if (c.ngMaxlength) {
            var t = m(c.ngMaxlength),
                u = function(a) {
                    return ad(e, "maxlength", e.$isEmpty(a) || a.length <= t, a)
                };
            e.$parsers.push(u), e.$formatters.push(u)
        }
    }

    function dd(a, b, d, e, f, g) {
        if (cd(a, b, d, e, f, g), e.$parsers.push(function(a) {
            var b = e.$isEmpty(a);
            return b || ye.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
        }), bd(e, "number", b), e.$formatters.push(function(a) {
            return e.$isEmpty(a) ? "" : "" + a
        }), d.min) {
            var h = function(a) {
                var b = parseFloat(d.min);
                return ad(e, "min", e.$isEmpty(a) || a >= b, a)
            };
            e.$parsers.push(h), e.$formatters.push(h)
        }
        if (d.max) {
            var i = function(a) {
                var b = parseFloat(d.max);
                return ad(e, "max", e.$isEmpty(a) || b >= a, a)
            };
            e.$parsers.push(i), e.$formatters.push(i)
        }
        e.$formatters.push(function(a) {
            return ad(e, "number", e.$isEmpty(a) || v(a), a)
        })
    }

    function ed(a, b, c, d, e, f) {
        cd(a, b, c, d, e, f);
        var g = function(a) {
            return ad(d, "url", d.$isEmpty(a) || we.test(a), a)
        };
        d.$formatters.push(g), d.$parsers.push(g)
    }

    function fd(a, b, c, d, e, f) {
        cd(a, b, c, d, e, f);
        var g = function(a) {
            return ad(d, "email", d.$isEmpty(a) || xe.test(a), a)
        };
        d.$formatters.push(g), d.$parsers.push(g)
    }

    function gd(a, b, c, d) {
        r(c.name) && b.attr("name", j()), b.on("click", function() {
            b[0].checked && a.$apply(function() {
                d.$setViewValue(c.value)
            })
        }), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function hd(a, b, c, d) {
        var e = c.ngTrueValue,
            f = c.ngFalseValue;
        u(e) || (e = !0), u(f) || (f = !1), b.on("click", function() {
            a.$apply(function() {
                d.$setViewValue(b[0].checked)
            })
        }), d.$render = function() {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function(a) {
            return a !== e
        }, d.$formatters.push(function(a) {
            return a === e
        }), d.$parsers.push(function(a) {
            return a ? e : f
        })
    }

    function id(a, b) {
        return a = "ngClass" + a,
        function() {
            return {
                restrict: "AC",
                link: function(c, d, e) {
                    function g(a) {
                        if (b === !0 || c.$index % 2 === b) {
                            var d = h(a || "");
                            i ? L(a, i) || e.$updateClass(d, h(i)) : e.$addClass(d)
                        }
                        i = J(a)
                    }

                    function h(a) {
                        if (x(a)) return a.join(" ");
                        if (t(a)) {
                            var b = [];
                            return f(a, function(a, c) {
                                a && b.push(c)
                            }), b.join(" ")
                        }
                        return a
                    }
                    var i;
                    c.$watch(e[a], g, !0), e.$observe("class", function() {
                        g(c.$eval(e[a]))
                    }), "ngClass" !== a && c.$watch("$index", function(d, f) {
                        var g = 1 & d;
                        if (g !== f & 1) {
                            var i = h(c.$eval(e[a]));
                            g === b ? e.$addClass(i) : e.$removeClass(i)
                        }
                    })
                }
            }
        }
    }
    var jd = function(a) {
        return u(a) ? a.toLowerCase() : a
    }, kd = Object.prototype.hasOwnProperty,
        ld = function(a) {
            return u(a) ? a.toUpperCase() : a
        }, md = function(a) {
            return u(a) ? a.replace(/[A-Z]/g, function(a) {
                return String.fromCharCode(32 | a.charCodeAt(0))
            }) : a
        }, nd = function(a) {
            return u(a) ? a.replace(/[a-z]/g, function(a) {
                return String.fromCharCode(-33 & a.charCodeAt(0))
            }) : a
        };
    "i" !== "I".toLowerCase() && (jd = md, ld = nd);
    var od, pd, qd, rd, sd, td = [].slice,
        ud = [].push,
        vd = Object.prototype.toString,
        wd = d("ng"),
        xd = (a.angular, a.angular || (a.angular = {})),
        yd = ["0", "0", "0"];
    od = m((/msie (\d+)/.exec(jd(navigator.userAgent)) || [])[1]), isNaN(od) && (od = m((/trident\/.*; rv:(\d+)/.exec(jd(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
    var zd = function() {
        return String.prototype.trim ? function(a) {
            return u(a) ? a.trim() : a
        } : function(a) {
            return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
        }
    }();
    sd = 9 > od ? function(a) {
        return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? ld(a.scopeName + ":" + a.nodeName) : a.nodeName
    } : function(a) {
        return a.nodeName ? a.nodeName : a[0].nodeName
    };
    var Ad = /[A-Z]/g,
        Bd = {
            full: "1.2.15",
            major: 1,
            minor: 2,
            dot: 15,
            codeName: "beer-underestimating"
        }, Cd = mb.cache = {}, Dd = mb.expando = "ng-" + (new Date).getTime(),
        Ed = 1,
        Fd = a.document.addEventListener ? function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : function(a, b, c) {
            a.attachEvent("on" + b, c)
        }, Gd = a.document.removeEventListener ? function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent("on" + b, c)
        }, Hd = (mb._data = function(a) {
            return this.cache[a[this.expando]] || {}
        }, /([\:\-\_]+(.))/g),
        Id = /^moz([A-Z])/,
        Jd = d("jqLite"),
        Kd = mb.prototype = {
            ready: function(c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), mb(a).on("load", d))
            },
            toString: function() {
                var a = [];
                return f(this, function(b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            },
            eq: function(a) {
                return pd(a >= 0 ? this[a] : this[this.length + a])
            },
            length: 0,
            push: ud,
            sort: [].sort,
            splice: [].splice
        }, Ld = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        Ld[jd(a)] = a
    });
    var Md = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        Md[ld(a)] = !0
    }), f({
        data: sb,
        inheritedData: yb,
        scope: function(a) {
            return pd(a).data("$scope") || yb(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function(a) {
            return pd(a).data("$isolateScope") || pd(a).data("$isolateScopeNoTemplate")
        },
        controller: xb,
        injector: function(a) {
            return yb(a, "$injector")
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b)
        },
        hasClass: tb,
        css: function(a, b, d) {
            if (b = kb(b), !s(d)) {
                var e;
                return 8 >= od && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= od && (e = "" === e ? c : e), e
            }
            a.style[b] = d
        },
        attr: function(a, b, d) {
            var e = jd(b);
            if (Ld[e]) {
                if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
            } else if (s(d)) a.setAttribute(b, d);
            else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c : f
            }
        },
        prop: function(a, b, c) {
            return s(c) ? void(a[b] = c) : a[b]
        },
        text: function() {
            function a(a, c) {
                var d = b[a.nodeType];
                return r(c) ? d ? a[d] : "" : void(a[d] = c)
            }
            var b = [];
            return 9 > od ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a
        }(),
        val: function(a, b) {
            if (r(b)) {
                if ("SELECT" === sd(a) && a.multiple) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function(a, b) {
            if (r(b)) return a.innerHTML;
            for (var c = 0, d = a.childNodes; c < d.length; c++) ob(d[c]);
            a.innerHTML = b
        },
        empty: zb
    }, function(a, b) {
        mb.prototype[b] = function(b, d) {
            var e, f;
            if (a !== zb && (2 == a.length && a !== tb && a !== xb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; e < this.length; e++)
                        if (a === sb) a(this[e], b);
                        else
                            for (f in b) a(this[e], f, b[f]);
                    return this
                }
                for (var g = a.$dv, h = g === c ? Math.min(this.length, 1) : this.length, i = 0; h > i; i++) {
                    var j = a(this[i], b, d);
                    g = g ? g + j : j
                }
                return g
            }
            for (e = 0; e < this.length; e++) a(this[e], b, d);
            return this
        }
    }), f({
        removeData: qb,
        dealoc: ob,
        on: function of(a, c, d, e) {
            if (s(e)) throw Jd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var g = rb(a, "events"),
                h = rb(a, "handle");
            g || rb(a, "events", g = {}), h || rb(a, "handle", h = Bb(a, g)), f(c.split(" "), function(c) {
                var e = g[c];
                if (!e) {
                    if ("mouseenter" == c || "mouseleave" == c) {
                        var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
                                var c = 9 === a.nodeType ? a.documentElement : a,
                                    d = b && b.parentNode;
                                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                            } : function(a, b) {
                                if (b)
                                    for (; b = b.parentNode;)
                                        if (b === a) return !0;
                                return !1
                            };
                        g[c] = [];
                        var i = {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        };
                        of(a, i[c], function(a) {
                            var b = this,
                                d = a.relatedTarget;
                            (!d || d !== b && !f(b, d)) && h(a, c)
                        })
                    } else Fd(a, c, h), g[c] = [];
                    e = g[c]
                }
                e.push(d)
            })
        },
        off: pb,
        one: function(a, b, c) {
            a = pd(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            ob(a), f(new mb(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a)
            }), b
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, b) {
            f(new mb(b), function(b) {
                (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
            })
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                f(new mb(b), function(b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function(a, b) {
            b = pd(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },
        remove: function(a) {
            ob(a);
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        after: function(a, b) {
            var c = a,
                d = a.parentNode;
            f(new mb(b), function(a) {
                d.insertBefore(a, c.nextSibling), c = a
            })
        },
        addClass: vb,
        removeClass: ub,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                r(d) && (d = !tb(a, b)), (d ? vb : ub)(a, b)
            })
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
            return b
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: nb,
        triggerHandler: function(a, b, c) {
            var d = (rb(a, "events") || {})[b];
            c = c || [];
            var e = [{
                preventDefault: o,
                stopPropagation: o
            }];
            f(d, function(b) {
                b.apply(a, e.concat(c))
            })
        }
    }, function(a, b) {
        mb.prototype[b] = function(b, c, d) {
            for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = pd(e))) : wb(e, a(this[f], b, c, d));
            return s(e) ? e : this
        }, mb.prototype.bind = mb.prototype.on, mb.prototype.unbind = mb.prototype.off
    }), Db.prototype = {
        put: function(a, b) {
            this[Cb(a)] = b
        },
        get: function(a) {
            return this[Cb(a)]
        },
        remove: function(a) {
            var b = this[a = Cb(a)];
            return delete this[a], b
        }
    };
    var Nd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Od = /,/,
        Pd = /^\s*(_?)(\S+?)\1\s*$/,
        Qd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Rd = d("$injector"),
        Sd = d("$animate"),
        Td = ["$provide",
            function(a) {
                this.$$selectors = {}, this.register = function(b, c) {
                    var d = b + "-animation";
                    if (b && "." != b.charAt(0)) throw Sd("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                    this.$$selectors[b.substr(1)] = d, a.factory(d, c)
                }, this.classNameFilter = function(a) {
                    return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
                }, this.$get = ["$timeout", "$$asyncCallback",
                    function(a, b) {
                        function c(a) {
                            a && b(a)
                        }
                        return {
                            enter: function(a, b, d, e) {
                                d ? d.after(a) : (b && b[0] || (b = d.parent()), b.append(a)), c(e)
                            },
                            leave: function(a, b) {
                                a.remove(), c(b)
                            },
                            move: function(a, b, c, d) {
                                this.enter(a, b, c, d)
                            },
                            addClass: function(a, b, d) {
                                b = u(b) ? b : x(b) ? b.join(" ") : "", f(a, function(a) {
                                    vb(a, b)
                                }), c(d)
                            },
                            removeClass: function(a, b, d) {
                                b = u(b) ? b : x(b) ? b.join(" ") : "", f(a, function(a) {
                                    ub(a, b)
                                }), c(d)
                            },
                            setClass: function(a, b, d, e) {
                                f(a, function(a) {
                                    vb(a, b), ub(a, d)
                                }), c(e)
                            },
                            enabled: o
                        }
                    }
                ]
            }
        ],
        Ud = d("$compile");
    Mb.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Vd = /^(x[\:\-_]|data[\:\-_])/i,
        Wd = d("$interpolate"),
        Xd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Yd = {
            http: 80,
            https: 443,
            ftp: 21
        }, Zd = d("$location");
    kc.prototype = jc.prototype = ic.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: lc("$$absUrl"),
        url: function(a, b) {
            if (r(a)) return this.$$url;
            var c = Xd.exec(a);
            return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
        },
        protocol: lc("$$protocol"),
        host: lc("$$host"),
        port: lc("$$port"),
        path: mc("$$path", function(a) {
            return "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function(a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (u(a)) this.$$search = W(a);
                    else {
                        if (!t(a)) throw Zd("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        this.$$search = a
                    }
                    break;
                default:
                    r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(), this
        },
        hash: mc("$$hash", p),
        replace: function() {
            return this.$$replace = !0, this
        }
    };
    var $d, _d = d("$parse"),
        ae = {}, be = {
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            undefined: o,
            "+": function(a, b, d, e) {
                return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
            },
            "-": function(a, b, c, d) {
                return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
            },
            "*": function(a, b, c, d) {
                return c(a, b) * d(a, b)
            },
            "/": function(a, b, c, d) {
                return c(a, b) / d(a, b)
            },
            "%": function(a, b, c, d) {
                return c(a, b) % d(a, b)
            },
            "^": function(a, b, c, d) {
                return c(a, b) ^ d(a, b)
            },
            "=": o,
            "===": function(a, b, c, d) {
                return c(a, b) === d(a, b)
            },
            "!==": function(a, b, c, d) {
                return c(a, b) !== d(a, b)
            },
            "==": function(a, b, c, d) {
                return c(a, b) == d(a, b)
            },
            "!=": function(a, b, c, d) {
                return c(a, b) != d(a, b)
            },
            "<": function(a, b, c, d) {
                return c(a, b) < d(a, b)
            },
            ">": function(a, b, c, d) {
                return c(a, b) > d(a, b)
            },
            "<=": function(a, b, c, d) {
                return c(a, b) <= d(a, b)
            },
            ">=": function(a, b, c, d) {
                return c(a, b) >= d(a, b)
            },
            "&&": function(a, b, c, d) {
                return c(a, b) && d(a, b)
            },
            "||": function(a, b, c, d) {
                return c(a, b) || d(a, b)
            },
            "&": function(a, b, c, d) {
                return c(a, b) & d(a, b)
            },
            "|": function(a, b, c, d) {
                return d(a, b)(a, b, c(a, b))
            },
            "!": function(a, b, c) {
                return !c(a, b)
            }
        }, ce = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        }, de = function(a) {
            this.options = a
        };
    de.prototype = {
        constructor: de,
        lex: function(a) {
            this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = [];
            for (var b, d = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && "{" === d[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf("."));
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && d.unshift(this.ch), this.is("}]") && d.shift(), this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var e = this.ch + this.peek(),
                        f = e + this.peek(2),
                        g = be[this.ch],
                        h = be[e],
                        i = be[f];
                    i ? (this.tokens.push({
                        index: this.index,
                        text: f,
                        fn: i
                    }), this.index += 3) : h ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: h
                    }), this.index += 2) : g ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: g,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function(a) {
            return -1 !== a.indexOf(this.ch)
        },
        was: function(a) {
            return -1 !== a.indexOf(this.lastCh)
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw _d("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = jd(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            a = 1 * a, this.tokens.push({
                index: b,
                text: a,
                json: !0,
                fn: function() {
                    return a
                }
            })
        },
        readIdent: function() {
            for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));) "." === d && (a = this.index), f += d, this.index++;
            if (a)
                for (b = this.index; b < this.text.length;) {
                    if (d = this.text.charAt(b), "(" === d) {
                        c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
                        break
                    }
                    if (!this.isWhitespace(d)) break;
                    b++
                }
            var h = {
                index: g,
                text: f
            };
            if (be.hasOwnProperty(f)) h.fn = be[f], h.json = be[f];
            else {
                var i = vc(f, this.options, this.text);
                h.fn = l(function(a, b) {
                    return i(a, b)
                }, {
                    assign: function(a, b) {
                        return rc(a, f, b, e.text, e.options)
                    }
                })
            }
            this.tokens.push(h), c && (this.tokens.push({
                index: a,
                text: ".",
                json: !1
            }), this.tokens.push({
                index: a + 1,
                text: c,
                json: !1
            }))
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = ce[f];
                        c += h ? h : f
                    }
                    e = !1
                } else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        string: c,
                        json: !0,
                        fn: function() {
                            return c
                        }
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var ee = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c
    };
    ee.ZERO = function() {
        return 0
    }, ee.prototype = {
        constructor: ee,
        parse: function(a, b) {
            this.text = a, this.json = b, this.tokens = this.lexer.lex(a), b && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
                this.throwError("is not valid json", {
                    text: a,
                    index: 0
                })
            });
            var c = b ? this.primary() : this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), c.literal = !! c.literal, c.constant = !! c.constant, c
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")");
            else if (this.expect("[")) a = this.arrayDeclaration();
            else if (this.expect("{")) a = this.object();
            else {
                var b = this.expect();
                a = b.fn, a || this.throwError("not a primary expression", b), b.json && (a.constant = !0, a.literal = !0)
            }
            for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function(a, b) {
            throw _d("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw _d("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(a, b, c, d) {
            if (this.tokens.length > 0) {
                var e = this.tokens[0],
                    f = e.text;
                if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e
            }
            return !1
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.json && !e.json && this.throwError("is not valid json", e), this.tokens.shift(), e) : !1
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
        },
        unaryFn: function(a, b) {
            return l(function(c, d) {
                return a(c, d, b)
            }, {
                constant: b.constant
            })
        },
        ternaryFn: function(a, b, c) {
            return l(function(d, e) {
                return a(d, e) ? b(d, e) : c(d, e)
            }, {
                constant: a.constant && b.constant && c.constant
            })
        },
        binaryFn: function(a, b, c) {
            return l(function(d, e) {
                return b(d, e, a, c)
            }, {
                constant: a.constant && c.constant
            })
        },
        statements: function() {
            for (var a = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                    for (var d, e = 0; e < a.length; e++) {
                        var f = a[e];
                        f && (d = f(b, c))
                    }
                    return d
                }
        },
        filterChain: function() {
            for (var a, b = this.expression();;) {
                if (!(a = this.expect("|"))) return b;
                b = this.binaryFn(b, a.fn, this.filter())
            }
        },
        filter: function() {
            for (var a = this.expect(), b = this.$filter(a.text), c = [];;) {
                if (!(a = this.expect(":"))) {
                    var d = function(a, d, e) {
                        for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
                        return b.apply(a, f)
                    };
                    return function() {
                        return d
                    }
                }
                c.push(this.expression())
            }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function(b, d) {
                return c.assign(b, a(b, d), d)
            }) : c
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return (b = this.expect("?")) ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : void this.throwError("expected :", b)) : c
        },
        logicalOR: function() {
            for (var a, b = this.logicalAND();;) {
                if (!(a = this.expect("||"))) return b;
                b = this.binaryFn(b, a.fn, this.logicalAND())
            }
        },
        logicalAND: function() {
            var a, b = this.equality();
            return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b
        },
        equality: function() {
            var a, b = this.relational();
            return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b
        },
        relational: function() {
            var a, b = this.additive();
            return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.fn, this.multiplicative());
            return b
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.fn, this.unary());
            return b
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(ee.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
        },
        fieldAccess: function(a) {
            var b = this,
                c = this.expect().text,
                d = vc(c, this.options, this.text);
            return l(function(b, c, e) {
                return d(e || a(b, c))
            }, {
                assign: function(d, e, f) {
                    return rc(a(d, f), c, e, b.text, b.options)
                }
            })
        },
        objectIndex: function(a) {
            var b = this,
                d = this.expression();
            return this.consume("]"), l(function(e, f) {
                var g, h, i = a(e, f),
                    j = d(e, f);
                return i ? (g = qc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function(a) {
                    h.$$v = a
                })), g = g.$$v), g) : c
            }, {
                assign: function(c, e, f) {
                    var g = d(c, f),
                        h = qc(a(c, f), b.text);
                    return h[g] = e
                }
            })
        },
        functionCall: function(a, b) {
            var c = [];
            if (")" !== this.peekToken().text)
                do c.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var d = this;
            return function(e, f) {
                for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
                var j = a(e, f, h) || o;
                qc(h, d.text), qc(j, d.text);
                var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
                return qc(k, d.text)
            }
        },
        arrayDeclaration: function() {
            var a = [],
                b = !0;
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    var c = this.expression();
                    a.push(c), c.constant || (b = !1)
                } while (this.expect(","));
            return this.consume("]"), l(function(b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d
            }, {
                literal: !0,
                constant: b
            })
        },
        object: function() {
            var a = [],
                b = !0;
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var c = this.expect(),
                        d = c.string || c.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({
                        key: d,
                        value: e
                    }), e.constant || (b = !1)
                } while (this.expect(","));
            return this.consume("}"), l(function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            }, {
                literal: !0,
                constant: b
            })
        }
    };
    var fe = {}, ge = d("$sce"),
        he = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }, ie = b.createElement("a"),
        je = Jc(a.location.href, !0);
    Mc.$inject = ["$provide"], Oc.$inject = ["$locale"], Pc.$inject = ["$locale"];
    var ke = ".",
        le = {
            yyyy: Sc("FullYear", 4),
            yy: Sc("FullYear", 2, 0, !0),
            y: Sc("FullYear", 1),
            MMMM: Tc("Month"),
            MMM: Tc("Month", !0),
            MM: Sc("Month", 2, 1),
            M: Sc("Month", 1, 1),
            dd: Sc("Date", 2),
            d: Sc("Date", 1),
            HH: Sc("Hours", 2),
            H: Sc("Hours", 1),
            hh: Sc("Hours", 2, -12),
            h: Sc("Hours", 1, -12),
            mm: Sc("Minutes", 2),
            m: Sc("Minutes", 1),
            ss: Sc("Seconds", 2),
            s: Sc("Seconds", 1),
            sss: Sc("Milliseconds", 3),
            EEEE: Tc("Day"),
            EEE: Tc("Day", !0),
            a: Vc,
            Z: Uc
        }, me = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        ne = /^\-?\d+$/;
    Wc.$inject = ["$locale"];
    var oe = q(jd),
        pe = q(ld);
    Zc.$inject = ["$parse"];
    var qe = q({
        restrict: "E",
        compile: function(a, c) {
            return 8 >= od && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), c.href || c.xlinkHref || c.name ? void 0 : function(a, b) {
                var c = "[object SVGAnimatedString]" === vd.call(b.prop("href")) ? "xlink:href" : "href";
                b.on("click", function(a) {
                    b.attr(c) || a.preventDefault()
                })
            }
        }
    }),
        re = {};
    f(Ld, function(a, b) {
        if ("multiple" != a) {
            var c = Nb("ng-" + b);
            re[c] = function() {
                return {
                    priority: 100,
                    link: function(a, d, e) {
                        a.$watch(e[c], function(a) {
                            e.$set(b, !! a)
                        })
                    }
                }
            }
        }
    }), f(["src", "srcset", "href"], function(a) {
        var b = Nb("ng-" + a);
        re[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === vd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(a) {
                        a && (e.$set(g, a), od && f && d.prop(f, e[g]))
                    })
                }
            }
        }
    });
    var se = {
        $addControl: o,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o
    };
    _c.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var te = function(a) {
        return ["$timeout", function(b) {
            var d = {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: _c,
                compile: function() {
                    return {
                        pre: function(a, d, e, f) {
                            if (!e.action) {
                                var g = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                Fd(d[0], "submit", g), d.on("$destroy", function() {
                                    b(function() {
                                        Gd(d[0], "submit", g)
                                    }, 0, !1)
                                })
                            }
                            var h = d.parent().controller("form"),
                                i = e.name || e.ngForm;
                            i && rc(a, i, f, i), h && d.on("$destroy", function() {
                                h.$removeControl(f), i && rc(a, i, c, i), l(f, se)
                            })
                        }
                    }
                }
            };
            return d
        }]
    }, ue = te(),
        ve = te(!0),
        we = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        xe = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
        ye = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        ze = {
            text: cd,
            number: dd,
            url: ed,
            email: fd,
            radio: gd,
            checkbox: hd,
            hidden: o,
            button: o,
            submit: o,
            reset: o,
            file: o
        }, Ae = ["$browser", "$sniffer",
            function(a, b) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function(c, d, e, f) {
                        f && (ze[jd(e.type)] || ze.text)(c, d, e, f, b, a)
                    }
                }
            }
        ],
        Be = "ng-valid",
        Ce = "ng-invalid",
        De = "ng-pristine",
        Ee = "ng-dirty",
        Fe = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate",
            function(a, b, c, e, g, h) {
                function i(a, b) {
                    b = b ? "-" + ab(b, "-") : "", h.removeClass(e, (a ? Ce : Be) + b), h.addClass(e, (a ? Be : Ce) + b)
                }
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
                var j = g(c.ngModel),
                    k = j.assign;
                if (!k) throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, U(e));
                this.$render = o, this.$isEmpty = function(a) {
                    return r(a) || "" === a || null === a || a !== a
                };
                var l = e.inheritedData("$formController") || se,
                    m = 0,
                    n = this.$error = {};
                e.addClass(De), i(!0), this.$setValidity = function(a, b) {
                    n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this))
                }, this.$setPristine = function() {
                    this.$dirty = !1, this.$pristine = !0, h.removeClass(e, Ee), h.addClass(e, De)
                }, this.$setViewValue = function(c) {
                    this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, De), h.addClass(e, Ee), l.$setDirty()), f(this.$parsers, function(a) {
                        c = a(c)
                    }), this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners, function(a) {
                        try {
                            a()
                        } catch (c) {
                            b(c)
                        }
                    }))
                };
                var p = this;
                a.$watch(function() {
                    var b = j(a);
                    if (p.$modelValue !== b) {
                        var c = p.$formatters,
                            d = c.length;
                        for (p.$modelValue = b; d--;) b = c[d](b);
                        p.$viewValue !== b && (p.$viewValue = b, p.$render())
                    }
                    return b
                })
            }
        ],
        Ge = function() {
            return {
                require: ["ngModel", "^?form"],
                controller: Fe,
                link: function(a, b, c, d) {
                    var e = d[0],
                        f = d[1] || se;
                    f.$addControl(e), a.$on("$destroy", function() {
                        f.$removeControl(e)
                    })
                }
            }
        }, He = q({
            require: "ngModel",
            link: function(a, b, c, d) {
                d.$viewChangeListeners.push(function() {
                    a.$eval(c.ngChange)
                })
            }
        }),
        Ie = function() {
            return {
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        c.required = !0;
                        var e = function(a) {
                            return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
                        };
                        d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() {
                            e(d.$viewValue)
                        })
                    }
                }
            }
        }, Je = function() {
            return {
                require: "ngModel",
                link: function(a, b, d, e) {
                    var g = /\/(.*)\//.exec(d.ngList),
                        h = g && new RegExp(g[1]) || d.ngList || ",",
                        i = function(a) {
                            if (!r(a)) {
                                var b = [];
                                return a && f(a.split(h), function(a) {
                                    a && b.push(zd(a))
                                }), b
                            }
                        };
                    e.$parsers.push(i), e.$formatters.push(function(a) {
                        return x(a) ? a.join(", ") : c
                    }), e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        }, Ke = /^(true|false|\d+)$/,
        Le = function() {
            return {
                priority: 100,
                compile: function(a, b) {
                    return Ke.test(b.ngValue) ? function(a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function(a, b, c) {
                        a.$watch(c.ngValue, function(a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        }, Me = $c(function(a, b, d) {
            b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) {
                b.text(a == c ? "" : a)
            })
        }),
        Ne = ["$interpolate",
            function(a) {
                return function(b, c, d) {
                    var e = a(c.attr(d.$attr.ngBindTemplate));
                    c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function(a) {
                        c.text(a)
                    })
                }
            }
        ],
        Oe = ["$sce", "$parse",
            function(a, b) {
                return function(c, d, e) {
                    function f() {
                        return (g(c) || "").toString()
                    }
                    d.addClass("ng-binding").data("$binding", e.ngBindHtml);
                    var g = b(e.ngBindHtml);
                    c.$watch(f, function() {
                        d.html(a.getTrustedHtml(g(c)) || "")
                    })
                }
            }
        ],
        Pe = id("", !0),
        Qe = id("Odd", 0),
        Re = id("Even", 1),
        Se = $c({
            compile: function(a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }),
        Te = [
            function() {
                return {
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }
        ],
        Ue = {};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Nb("ng-" + a);
        Ue[b] = ["$parse",
            function(c) {
                return {
                    compile: function(d, e) {
                        var f = c(e[b]);
                        return function(b, c) {
                            c.on(jd(a), function(a) {
                                b.$apply(function() {
                                    f(b, {
                                        $event: a
                                    })
                                })
                            })
                        }
                    }
                }
            }
        ]
    });
    var Ve = ["$animate",
        function(a) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function(f) {
                        T(f) ? i || (i = c.$new(), g(i, function(c) {
                            c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                clone: c
                            }, a.enter(c, d.parent(), d)
                        })) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = gb(h.clone), a.leave(j, function() {
                            j = null
                        }), h = null))
                    })
                }
            }
        }
    ],
        We = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
            function(a, b, c, d, e) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: xd.noop,
                    compile: function(f, g) {
                        var h = g.ngInclude || g.src,
                            i = g.onload || "",
                            j = g.autoscroll;
                        return function(f, g, k, l, m) {
                            var n, o, p, q = 0,
                                r = function() {
                                    o && (o.remove(), o = null), n && (n.$destroy(), n = null), p && (d.leave(p, function() {
                                        o = null
                                    }), o = p, p = null)
                                };
                            f.$watch(e.parseAsResourceUrl(h), function(e) {
                                var h = function() {
                                    !s(j) || j && !f.$eval(j) || c()
                                }, k = ++q;
                                e ? (a.get(e, {
                                    cache: b
                                }).success(function(a) {
                                    if (k === q) {
                                        var b = f.$new();
                                        l.template = a;
                                        var c = m(b, function(a) {
                                            r(), d.enter(a, null, g, h)
                                        });
                                        n = b, p = c, n.$emit("$includeContentLoaded"), f.$eval(i)
                                    }
                                }).error(function() {
                                    k === q && r()
                                }), f.$emit("$includeContentRequested")) : (r(), l.template = null)
                            })
                        }
                    }
                }
            }
        ],
        Xe = ["$compile",
            function(a) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(b, c, d, e) {
                        c.html(e.template), a(c.contents())(b)
                    }
                }
            }
        ],
        Ye = $c({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }),
        Ze = $c({
            terminal: !0,
            priority: 1e3
        }),
        $e = ["$locale", "$interpolate",
            function(a, b) {
                var c = /{}/g;
                return {
                    restrict: "EA",
                    link: function(d, e, g) {
                        var h = g.count,
                            i = g.$attr.when && e.attr(g.$attr.when),
                            j = g.offset || 0,
                            k = d.$eval(i) || {}, l = {}, m = b.startSymbol(),
                            n = b.endSymbol(),
                            o = /^when(Minus)?(.+)$/;
                        f(g, function(a, b) {
                            o.test(b) && (k[jd(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
                        }), f(k, function(a, d) {
                            l[d] = b(a.replace(c, m + h + "-" + j + n))
                        }), d.$watch(function() {
                            var b = parseFloat(d.$eval(h));
                            return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
                        }, function(a) {
                            e.text(a)
                        })
                    }
                }
            }
        ],
        _e = ["$parse", "$animate",
            function(a, c) {
                function g(a) {
                    return a.clone[0]
                }

                function h(a) {
                    return a.clone[a.clone.length - 1]
                }
                var i = "$$NG_REMOVED",
                    j = d("ngRepeat");
                return {
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function(d, k, l, m, n) {
                        var o, p, q, r, s, t, u, v, w, x = l.ngRepeat,
                            y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                            z = {
                                $id: Cb
                            };
                        if (!y) throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
                        if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function(a, b, c) {
                            return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z)
                        }) : (r = function(a, b) {
                            return Cb(b)
                        }, s = function(a) {
                            return a
                        }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
                        v = y[3] || y[1], w = y[2];
                        var A = {};
                        d.$watchCollection(u, function(a) {
                            var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0],
                                G = {}, H = [];
                            if (e(a)) C = a, B = q || r;
                            else {
                                B = q || s, C = [];
                                for (u in a) a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
                                C.sort()
                            }
                            for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
                                if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), eb(z, "`track by` id"), A.hasOwnProperty(z)) D = A[z], delete A[z], G[z] = D, H[l] = D;
                                else {
                                    if (G.hasOwnProperty(z)) throw f(H, function(a) {
                                        a && a.scope && (A[a.id] = a)
                                    }), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", x, z);
                                    H[l] = {
                                        id: z
                                    }, G[z] = !1
                                }
                            for (u in A) A.hasOwnProperty(u) && (D = A[u], E = gb(D.clone), c.leave(E), f(E, function(a) {
                                a[i] = !0
                            }), D.scope.$destroy());
                            for (l = 0, m = C.length; m > l; l++) {
                                if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
                                    t = D.scope, o = F;
                                    do o = o.nextSibling; while (o && o[i]);
                                    g(D) != o && c.move(gb(D.clone), null, pd(F)), F = h(D)
                                } else t = d.$new();
                                t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function(a) {
                                    a[a.length++] = b.createComment(" end ngRepeat: " + x + " "), c.enter(a, null, pd(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D
                                })
                            }
                            A = G
                        })
                    }
                }
            }
        ],
        af = ["$animate",
            function(a) {
                return function(b, c, d) {
                    b.$watch(d.ngShow, function(b) {
                        a[T(b) ? "removeClass" : "addClass"](c, "ng-hide")
                    })
                }
            }
        ],
        bf = ["$animate",
            function(a) {
                return function(b, c, d) {
                    b.$watch(d.ngHide, function(b) {
                        a[T(b) ? "addClass" : "removeClass"](c, "ng-hide")
                    })
                }
            }
        ],
        cf = $c(function(a, b, c) {
            a.$watch(c.ngStyle, function(a, c) {
                c && a !== c && f(c, function(a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }),
        df = ["$animate",
            function(a) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope",
                        function() {
                            this.cases = {}
                        }
                    ],
                    link: function(b, c, d, e) {
                        var g, h, i, j = d.ngSwitch || d.on,
                            k = [];
                        b.$watch(j, function(c) {
                            var j, l = k.length;
                            if (l > 0) {
                                if (i) {
                                    for (j = 0; l > j; j++) i[j].remove();
                                    i = null
                                }
                                for (i = [], j = 0; l > j; j++) {
                                    var m = h[j];
                                    k[j].$destroy(), i[j] = m, a.leave(m, function() {
                                        i.splice(j, 1), 0 === i.length && (i = null)
                                    })
                                }
                            }
                            h = [], k = [], (g = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(g, function(c) {
                                var d = b.$new();
                                k.push(d), c.transclude(d, function(b) {
                                    var d = c.element;
                                    h.push(b), a.enter(b, d.parent(), d)
                                })
                            }))
                        })
                    }
                }
            }
        ],
        ef = $c({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        ff = $c({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        gf = $c({
            link: function(a, b, c, e, f) {
                if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", U(b));
                f(function(a) {
                    b.empty(), b.append(a)
                })
            }
        }),
        hf = ["$templateCache",
            function(a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(b, c) {
                        if ("text/ng-template" == c.type) {
                            var d = c.id,
                                e = b[0].text;
                            a.put(d, e)
                        }
                    }
                }
            }
        ],
        jf = d("ngOptions"),
        kf = q({
            terminal: !0
        }),
        lf = ["$compile", "$parse",
            function(a, d) {
                var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                    h = {
                        $setViewValue: o
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs",
                        function(a, b, c) {
                            var d, e, f = this,
                                g = {}, i = h;
                            f.databound = c.ngModel, f.init = function(a, b, c) {
                                i = a, d = b, e = c
                            }, f.addOption = function(b) {
                                eb(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
                            }, f.removeOption = function(a) {
                                this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
                            }, f.renderUnknownOption = function(b) {
                                var c = "? " + Cb(b) + " ?";
                                e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                            }, f.hasOption = function(a) {
                                return g.hasOwnProperty(a)
                            }, b.$on("$destroy", function() {
                                f.renderUnknownOption = o
                            })
                        }
                    ],
                    link: function(h, i, j, k) {
                        function l(a, b, c, d) {
                            c.$render = function() {
                                var a = c.$viewValue;
                                d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                            }, b.on("change", function() {
                                a.$apply(function() {
                                    z.parent() && z.remove(), c.$setViewValue(b.val())
                                })
                            })
                        }

                        function m(a, b, c) {
                            var d;
                            c.$render = function() {
                                var a = new Db(c.$viewValue);
                                f(b.find("option"), function(b) {
                                    b.selected = s(a.get(b.value))
                                })
                            }, a.$watch(function() {
                                L(d, c.$viewValue) || (d = J(c.$viewValue), c.$render())
                            }), b.on("change", function() {
                                a.$apply(function() {
                                    var a = [];
                                    f(b.find("option"), function(b) {
                                        b.selected && a.push(b.value)
                                    }), c.$setViewValue(a)
                                })
                            })
                        }

                        function n(b, f, h) {
                            function i() {
                                var a, c, d, e, i, j, q, u, A, B, C, D, E, F, G, H = {
                                        "": []
                                    }, I = [""],
                                    J = h.$modelValue,
                                    K = p(b) || [],
                                    L = m ? g(K) : K,
                                    M = {}, N = !1;
                                if (t)
                                    if (r && x(J)) {
                                        N = new Db([]);
                                        for (var O = 0; O < J.length; O++) M[l] = J[O], N.put(r(b, M), J[O])
                                    } else N = new Db(J);
                                for (C = 0; A = L.length, A > C; C++) {
                                    if (q = C, m) {
                                        if (q = L[C], "$" === q.charAt(0)) continue;
                                        M[m] = q
                                    }
                                    if (M[l] = K[q], a = n(b, M) || "", (c = H[a]) || (c = H[a] = [], I.push(a)), t) D = s(N.remove(r ? r(b, M) : o(b, M)));
                                    else {
                                        if (r) {
                                            var P = {};
                                            P[l] = J, D = r(b, P) === r(b, M)
                                        } else D = J === o(b, M);
                                        N = N || D
                                    }
                                    G = k(b, M), G = s(G) ? G : "", c.push({
                                        id: r ? r(b, M) : m ? L[C] : C,
                                        label: G,
                                        selected: D
                                    })
                                }
                                for (t || (v || null === J ? H[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !N
                                }) : N || H[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                })), B = 0, u = I.length; u > B; B++) {
                                    for (a = I[B], c = H[a], z.length <= B ? (e = {
                                        element: y.clone().attr("label", a),
                                        label: c.label
                                    }, i = [e], z.push(i), f.append(e.element)) : (i = z[B], e = i[0], e.label != a && e.element.attr("label", e.label = a)), E = null, C = 0, A = c.length; A > C; C++) d = c[C], (j = i[C + 1]) ? (E = j.element, j.label !== d.label && E.text(j.label = d.label), j.id !== d.id && E.val(j.id = d.id), j.selected !== d.selected && E.prop("selected", j.selected = d.selected)) : ("" === d.id && v ? F = v : (F = w.clone()).val(d.id).attr("selected", d.selected).text(d.label), i.push(j = {
                                        element: F,
                                        label: d.label,
                                        id: d.id,
                                        selected: d.selected
                                    }), E ? E.after(F) : e.element.append(F), E = F);
                                    for (C++; i.length > C;) i.pop().element.remove()
                                }
                                for (; z.length > B;) z.pop()[0].element.remove()
                            }
                            var j;
                            if (!(j = u.match(e))) throw jf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, U(f));
                            var k = d(j[2] || j[1]),
                                l = j[4] || j[6],
                                m = j[5],
                                n = d(j[3] || ""),
                                o = d(j[2] ? j[1] : l),
                                p = d(j[7]),
                                q = j[8],
                                r = q ? d(j[8]) : null,
                                z = [
                                    [{
                                        element: f,
                                        label: ""
                                    }]
                                ];
                            v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.empty(), f.on("change", function() {
                                b.$apply(function() {
                                    var a, d, e, g, i, j, k, n, q, s = p(b) || [],
                                        u = {};
                                    if (t) {
                                        for (e = [], j = 0, n = z.length; n > j; j++)
                                            for (a = z[j], i = 1, k = a.length; k > i; i++)
                                                if ((g = a[i].element)[0].selected) {
                                                    if (d = g.val(), m && (u[m] = d), r)
                                                        for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++);
                                                    else u[l] = s[d];
                                                    e.push(o(b, u))
                                                }
                                    } else {
                                        if (d = f.val(), "?" == d) e = c;
                                        else if ("" === d) e = null;
                                        else if (r) {
                                            for (q = 0; q < s.length; q++)
                                                if (u[l] = s[q], r(b, u) == d) {
                                                    e = o(b, u);
                                                    break
                                                }
                                        } else u[l] = s[d], m && (u[m] = d), e = o(b, u);
                                        z[0].length > 1 && z[0][1].id !== d && (z[0][1].selected = !1)
                                    }
                                    h.$setViewValue(e)
                                })
                            }), h.$render = i, b.$watch(i)
                        }
                        if (k[1]) {
                            for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = pd(b.createElement("option")), y = pd(b.createElement("optgroup")), z = w.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
                                if ("" === B[A].value) {
                                    o = v = B.eq(A);
                                    break
                                }
                            p.init(q, v, z), t && (q.$isEmpty = function(a) {
                                return !a || 0 === a.length
                            }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                        }
                    }
                }
            }
        ],
        mf = ["$interpolate",
            function(a) {
                var b = {
                    addOption: o,
                    removeOption: o
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(c, d) {
                        if (r(d.value)) {
                            var e = a(c.text(), !0);
                            e || d.$set("value", c.text())
                        }
                        return function(a, c, d) {
                            var f = "$selectController",
                                g = c.parent(),
                                h = g.data(f) || g.parent().data(f);
                            h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function(a, b) {
                                d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
                            }) : h.addOption(d.value), c.on("$destroy", function() {
                                h.removeOption(d.value)
                            })
                        }
                    }
                }
            }
        ],
        nf = q({
            restrict: "E",
            terminal: !0
        });
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (bb(), ib(xd), void pd(b).ready(function() {
        $(b, _)
    }))
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>'),
function(a, b, c) {
    "use strict";

    function d(a) {
        return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
    }

    function e(a, b) {
        if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
        for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
            var i = e[f];
            a = null !== a ? a[i] : c
        }
        return a
    }

    function f(a, c) {
        c = c || {}, b.forEach(c, function(a, b) {
            delete c[b]
        });
        for (var d in a)!a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
        return c
    }
    var g = b.$$minErr("$resource"),
        h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q",
        function(a, d) {
            function h(a) {
                return i(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }

            function i(a, b) {
                return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
            }

            function j(a, b) {
                this.template = a, this.defaults = b || {}, this.urlParams = {}
            }

            function k(h, i, r) {
                function s(a, b) {
                    var c = {};
                    return b = o({}, i, b), n(b, function(b, d) {
                        q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                    }), c
                }

                function t(a) {
                    return a.resource
                }

                function u(a) {
                    f(a || {}, this)
                }
                var v = new j(h);
                return r = o({}, l, r), n(r, function(e, h) {
                    var i = /^(POST|PUT|PATCH)$/i.test(e.method);
                    u[h] = function(h, j, k, l) {
                        var r, w, x, y = {};
                        switch (arguments.length) {
                            case 4:
                                x = l, w = k;
                            case 3:
                            case 2:
                                if (!q(j)) {
                                    y = h, r = j, w = k;
                                    break
                                }
                                if (q(h)) {
                                    w = h, x = j;
                                    break
                                }
                                w = j, x = k;
                            case 1:
                                q(h) ? w = h : i ? r = h : y = h;
                                break;
                            case 0:
                                break;
                            default:
                                throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                        }
                        var z = this instanceof u,
                            A = z ? r : e.isArray ? [] : new u(r),
                            B = {}, C = e.interceptor && e.interceptor.response || t,
                            D = e.interceptor && e.interceptor.responseError || c;
                        n(e, function(a, b) {
                            "params" != b && "isArray" != b && "interceptor" != b && (B[b] = p(a))
                        }), i && (B.data = r), v.setUrlParams(B, o({}, s(r, e.params || {}), y), e.url);
                        var E = a(B).then(function(a) {
                            var c = a.data,
                                d = A.$promise;
                            if (c) {
                                if (b.isArray(c) !== !! e.isArray) throw g("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
                                e.isArray ? (A.length = 0, n(c, function(a) {
                                    A.push(new u(a))
                                })) : (f(c, A), A.$promise = d)
                            }
                            return A.$resolved = !0, a.resource = A, a
                        }, function(a) {
                            return A.$resolved = !0, (x || m)(a), d.reject(a)
                        });
                        return E = E.then(function(a) {
                            var b = C(a);
                            return (w || m)(b, a.headers), b
                        }, D), z ? E : (A.$promise = E, A.$resolved = !1, A)
                    }, u.prototype["$" + h] = function(a, b, c) {
                        q(a) && (c = b, b = a, a = {});
                        var d = u[h].call(this, a, this, b, c);
                        return d.$promise || d
                    }
                }), u.bind = function(a) {
                    return k(h, o({}, i, a), r)
                }, u
            }
            var l = {
                get: {
                    method: "GET"
                },
                save: {
                    method: "POST"
                },
                query: {
                    method: "GET",
                    isArray: !0
                },
                remove: {
                    method: "DELETE"
                },
                "delete": {
                    method: "DELETE"
                }
            }, m = b.noop,
                n = b.forEach,
                o = b.extend,
                p = b.copy,
                q = b.isFunction;
            return j.prototype = {
                setUrlParams: function(a, c, d) {
                    var e, f, i = this,
                        j = d || i.template,
                        k = i.urlParams = {};
                    n(j.split(/\W/), function(a) {
                        if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                        !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
                    }), j = j.replace(/\\:/g, ":"), c = c || {}, n(i.urlParams, function(a, d) {
                        e = c.hasOwnProperty(d) ? c[d] : i.defaults[d], b.isDefined(e) && null !== e ? (f = h(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                            return f + b
                        })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                            return "/" == c.charAt(0) ? c : b + c
                        })
                    }), j = j.replace(/\/+$/, "") || "/", j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
                        i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                    })
                }
            }, k
        }
    ])
}(window, window.angular),
function(a, b, c) {
    "use strict";
    b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser",
        function(a, d) {
            function e() {
                var a, e, f, i;
                for (a in h) k(g[a]) && d.cookies(a, c);
                for (a in g) e = g[a], b.isString(e) || (e = "" + e, g[a] = e), e !== h[a] && (d.cookies(a, e), i = !0);
                if (i) {
                    i = !1, f = d.cookies();
                    for (a in g) g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0)
                }
            }
            var f, g = {}, h = {}, i = !1,
                j = b.copy,
                k = b.isUndefined;
            return d.addPollFn(function() {
                var b = d.cookies();
                f != b && (f = b, j(b, h), j(b, g), i && a.$apply())
            })(), i = !0, a.$watch(e), g
        }
    ]).factory("$cookieStore", ["$cookies",
        function(a) {
            return {
                get: function(c) {
                    var d = a[c];
                    return d ? b.fromJson(d) : d
                },
                put: function(c, d) {
                    a[c] = b.toJson(d)
                },
                remove: function(b) {
                    delete a[b]
                }
            }
        }
    ])
}(window, window.angular),
function(a, b) {
    "use strict";

    function c() {
        this.$get = ["$$sanitizeUri",
            function(a) {
                return function(b) {
                    var c = [];
                    return f(b, i(c, function(b, c) {
                        return !/^unsafe/.test(a(b, c))
                    })), c.join("")
                }
            }
        ]
    }

    function d(a) {
        var c = [],
            d = i(c, b.noop);
        return d.chars(a), c.join("")
    }

    function e(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }

    function f(a, c) {
        function d(a, d, f, h) {
            if (d = b.lowercase(d), x[d])
                for (; s.last() && y[s.last()];) e("", s.last());
            w[d] && s.last() == d && e("", d), h = t[d] || !! h, h || s.push(d);
            var i = {};
            f.replace(m, function(a, b, c, d, e) {
                var f = c || d || e || "";
                i[b] = g(f)
            }), c.start && c.start(d, i, h)
        }

        function e(a, d) {
            var e, f = 0;
            if (d = b.lowercase(d))
                for (f = s.length - 1; f >= 0 && s[f] != d; f--);
            if (f >= 0) {
                for (e = s.length - 1; e >= f; e--) c.end && c.end(s[e]);
                s.length = f
            }
        }
        var f, h, i, s = [],
            u = a;
        for (s.last = function() {
            return s[s.length - 1]
        }; a;) {
            if (h = !0, s.last() && z[s.last()]) a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + s.last() + "[^>]*>", "i"), function(a, b) {
                return b = b.replace(p, "$1").replace(r, "$1"), c.chars && c.chars(g(b)), ""
            }), e("", s.last());
            else if (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), h = !1)) : q.test(a) ? (i = a.match(q), i && (a = a.replace(i[0], ""), h = !1)) : o.test(a) ? (i = a.match(l), i && (a = a.substring(i[0].length), i[0].replace(l, e), h = !1)) : n.test(a) && (i = a.match(k), i && (a = a.substring(i[0].length), i[0].replace(k, d), h = !1)), h) {
                f = a.indexOf("<");
                var v = 0 > f ? a : a.substring(0, f);
                a = 0 > f ? "" : a.substring(f), c.chars && c.chars(g(v))
            }
            if (a == u) throw j("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
            u = a
        }
        e()
    }

    function g(a) {
        if (!a) return "";
        var b = E.exec(a),
            c = b[1],
            d = b[3],
            e = b[2];
        return e && (D.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in D ? D.textContent : D.innerText), c + e + d
    }

    function h(a) {
        return a.replace(/&/g, "&amp;").replace(s, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function i(a, c) {
        var d = !1,
            e = b.bind(a, a.push);
        return {
            start: function(a, f, g) {
                a = b.lowercase(a), !d && z[a] && (d = a), d || A[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
                    var g = b.lowercase(f),
                        i = "img" === a && "src" === g || "background" === g;
                    C[g] !== !0 || B[g] === !0 && !c(d, i) || (e(" "), e(f), e('="'), e(h(d)), e('"'))
                }), e(g ? "/>" : ">"))
            },
            end: function(a) {
                a = b.lowercase(a), d || A[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
            },
            chars: function(a) {
                d || e(h(a))
            }
        }
    }
    var j = b.$$minErr("$sanitize"),
        k = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
        l = /^<\s*\/\s*([\w:-]+)[^>]*>/,
        m = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        n = /^</,
        o = /^<\s*\//,
        p = /<!--(.*?)-->/g,
        q = /<!DOCTYPE([^>]*?)>/i,
        r = /<!\[CDATA\[(.*?)]]>/g,
        s = /([^\#-~| |!])/g,
        t = e("area,br,col,hr,img,wbr"),
        u = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        v = e("rp,rt"),
        w = b.extend({}, v, u),
        x = b.extend({}, u, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        y = b.extend({}, v, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        z = e("script,style"),
        A = b.extend({}, t, x, y, w),
        B = e("background,cite,href,longdesc,src,usemap"),
        C = b.extend({}, B, e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
        D = document.createElement("pre"),
        E = /^(\s*)([\s\S]*?)(\s*)$/;
    b.module("ngSanitize", []).provider("$sanitize", c), b.module("ngSanitize").filter("linky", ["$sanitize",
        function(a) {
            var c = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
                e = /^mailto:/;
            return function(f, g) {
                function h(a) {
                    a && n.push(d(a))
                }

                function i(a, c) {
                    n.push("<a "), b.isDefined(g) && (n.push('target="'), n.push(g), n.push('" ')), n.push('href="'), n.push(a), n.push('">'), h(c), n.push("</a>")
                }
                if (!f) return f;
                for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] == j[3] && (k = "mailto:" + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(e, "")), m = m.substring(l + j[0].length);
                return h(m), a(n.join(""))
            }
        }
    ])
}(window, window.angular),
function(a, b) {
    "use strict";

    function c() {
        function a(a, c) {
            return b.extend(new(b.extend(function() {}, {
                prototype: a
            })), c)
        }

        function c(a, b) {
            var c = b.caseInsensitiveMatch,
                d = {
                    originalPath: a,
                    regexp: a
                }, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                var f = "?" === d ? d : null,
                    g = "*" === d ? d : null;
                return e.push({
                    name: c,
                    optional: !! f
                }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
        }
        var d = {};
        this.when = function(a, e) {
            if (d[a] = b.extend({
                reloadOnSearch: !0
            }, e, a && c(a, e)), a) {
                var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[f] = b.extend({
                    redirectTo: a
                }, c(f, e))
            }
            return this
        }, this.otherwise = function(a) {
            return this.when(null, a), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce",
            function(c, e, f, g, h, i, j, k) {
                function l(a, b) {
                    var c = b.keys,
                        d = {};
                    if (!b.regexp) return null;
                    var e = b.regexp.exec(a);
                    if (!e) return null;
                    for (var f = 1, g = e.length; g > f; ++f) {
                        var h = c[f - 1],
                            i = "string" == typeof e[f] ? decodeURIComponent(e[f]) : e[f];
                        h && i && (d[h.name] = i)
                    }
                    return d
                }

                function m() {
                    var a = n(),
                        d = q.current;
                    a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), g.when(a).then(function() {
                        if (a) {
                            var c, d, e = b.extend({}, a.resolve);
                            return b.forEach(e, function(a, c) {
                                e[c] = b.isString(a) ? h.get(a) : h.invoke(a)
                            }), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {
                                cache: j
                            }).then(function(a) {
                                return a.data
                            }))), b.isDefined(c) && (e.$template = c), g.all(e)
                        }
                    }).then(function(e) {
                        a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d))
                    }, function(b) {
                        a == q.current && c.$broadcast("$routeChangeError", a, d, b)
                    }))
                }

                function n() {
                    var c, f;
                    return b.forEach(d, function(d) {
                        !f && (c = l(e.path(), d)) && (f = a(d, {
                            params: b.extend({}, e.search(), c),
                            pathParams: c
                        }), f.$$route = d)
                    }), f || d[null] && a(d[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function o(a, c) {
                    var d = [];
                    return b.forEach((a || "").split(":"), function(a, b) {
                        if (0 === b) d.push(a);
                        else {
                            var e = a.match(/(\w+)(.*)/),
                                f = e[1];
                            d.push(c[f]), d.push(e[2] || ""), delete c[f]
                        }
                    }), d.join("")
                }
                var p = !1,
                    q = {
                        routes: d,
                        reload: function() {
                            p = !0, c.$evalAsync(m)
                        }
                    };
                return c.$on("$locationChangeSuccess", m), q
            }
        ]
    }

    function d() {
        this.$get = function() {
            return {}
        }
    }

    function e(a, c, d) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(e, f, g, h, i) {
                function j() {
                    n && (n.remove(), n = null), l && (l.$destroy(), l = null), m && (d.leave(m, function() {
                        n = null
                    }), n = m, m = null)
                }

                function k() {
                    var g = a.current && a.current.locals,
                        h = g && g.$template;
                    if (b.isDefined(h)) {
                        var k = e.$new(),
                            n = a.current,
                            q = i(k, function(a) {
                                d.enter(a, null, m || f, function() {
                                    !b.isDefined(o) || o && !e.$eval(o) || c()
                                }), j()
                            });
                        m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
                    } else j()
                }
                var l, m, n, o = g.autoscroll,
                    p = g.onload || "";
                e.$on("$routeChangeSuccess", k), k()
            }
        }
    }

    function f(a, b, c) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(d, e) {
                var f = c.current,
                    g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                if (f.controller) {
                    g.$scope = d;
                    var i = b(f.controller, g);
                    f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
                }
                h(d)
            }
        }
    }
    var g = b.module("ngRoute", ["ng"]).provider("$route", c);
    g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), e.$inject = ["$route", "$anchorScroll", "$animate"], f.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular),
function(a, b, c) {
    "use strict";
    b.module("ngAnimate", ["ng"]).factory("$$animateReflow", ["$$rAF", "$document",
        function(a, b) {
            var c = b[0].body;
            return function(b) {
                return a(function() {
                    c.offsetWidth + 1;
                    b()
                })
            }
        }
    ]).config(["$provide", "$animateProvider",
        function(d, e) {
            function f(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (c.nodeType == l) return c
                }
            }

            function g(a) {
                return b.element(f(a))
            }

            function h(a, b) {
                return f(a) == f(b)
            }
            var i = b.noop,
                j = b.forEach,
                k = e.$$selectors,
                l = 1,
                m = "$$ngAnimateState",
                n = "ng-animate",
                o = {
                    running: !0
                };
            d.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document",
                function(a, c, d, l, p, q) {
                    function r(a) {
                        if (a) {
                            var b = [],
                                e = {}, f = a.substr(1).split(".");
                            (d.transitions || d.animations) && f.push("");
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g],
                                    i = k[h];
                                i && !e[h] && (b.push(c.get(i)), e[h] = !0)
                            }
                            return b
                        }
                    }

                    function s(a, c, d) {
                        function e(a, b) {
                            var c = a[b],
                                d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                            return c || d ? ("leave" == b && (d = c, c = null), v.push({
                                event: b,
                                fn: c
                            }), s.push({
                                event: b,
                                fn: d
                            }), !0) : void 0
                        }

                        function f(b, c, e) {
                            function f(a) {
                                if (c) {
                                    if ((c[a] || i)(), ++l < g.length) return;
                                    c = null
                                }
                                e()
                            }
                            var g = [];
                            j(b, function(a) {
                                a.fn && g.push(a)
                            });
                            var l = 0;
                            j(g, function(b, e) {
                                var g = function() {
                                    f(e)
                                };
                                switch (b.event) {
                                    case "setClass":
                                        c.push(b.fn(a, h, k, g));
                                        break;
                                    case "addClass":
                                        c.push(b.fn(a, h || d, g));
                                        break;
                                    case "removeClass":
                                        c.push(b.fn(a, k || d, g));
                                        break;
                                    default:
                                        c.push(b.fn(a, g))
                                }
                            }), c && 0 === c.length && e()
                        }
                        var g = a[0];
                        if (g) {
                            var h, k, l = "setClass" == c,
                                m = l || "addClass" == c || "removeClass" == c;
                            b.isArray(d) && (h = d[0], k = d[1], d = h + " " + k);
                            var n = a.attr("class"),
                                o = n + " " + d;
                            if (z(o)) {
                                var p = i,
                                    q = [],
                                    s = [],
                                    t = i,
                                    u = [],
                                    v = [],
                                    w = (" " + o).replace(/\s+/g, ".");
                                return j(r(w), function(a) {
                                    var b = e(a, c);
                                    !b && l && (e(a, "addClass"), e(a, "removeClass"))
                                }), {
                                    node: g,
                                    event: c,
                                    className: d,
                                    isClassBased: m,
                                    isSetClassOperation: l,
                                    before: function(a) {
                                        p = a, f(s, q, function() {
                                            p = i, a()
                                        })
                                    },
                                    after: function(a) {
                                        t = a, f(v, u, function() {
                                            t = i, a()
                                        })
                                    },
                                    cancel: function() {
                                        q && (j(q, function(a) {
                                            (a || i)(!0)
                                        }), p(!0)), u && (j(u, function(a) {
                                            (a || i)(!0)
                                        }), t(!0))
                                    }
                                }
                            }
                        }
                    }

                    function t(a, c, d, e, f, g, h) {
                        function i(b) {
                            var e = "$animate:" + b;
                            u && u[e] && u[e].length > 0 && p(function() {
                                d.triggerHandler(e, {
                                    event: a,
                                    className: c
                                })
                            })
                        }

                        function k() {
                            i("before")
                        }

                        function l() {
                            i("after")
                        }

                        function o() {
                            i("close"), h && p(function() {
                                h()
                            })
                        }

                        function q() {
                            q.hasBeenRun || (q.hasBeenRun = !0, g())
                        }

                        function r() {
                            if (!r.hasBeenRun) {
                                r.hasBeenRun = !0;
                                var b = d.data(m);
                                b && (t && t.isClassBased ? v(d, c) : (p(function() {
                                    var b = d.data(m) || {};
                                    H == b.index && v(d, c, a)
                                }), d.data(m, b))), o()
                            }
                        }
                        var t = s(d, a, c);
                        if (!t) return q(), k(), l(), void r();
                        c = t.className;
                        var u = b.element._data(t.node);
                        u = u && u.events, e || (e = f ? f.parent() : d.parent());
                        var y = d.data(m) || {}, z = y.active || {}, A = y.totalActive || 0,
                            B = y.last,
                            C = t.isClassBased ? y.disabled || B && !B.isClassBased : !1;
                        if (C || w(d, e)) return q(), k(), l(), void r();
                        var D = !1;
                        if (A > 0) {
                            var E = [];
                            if (t.isClassBased) {
                                if ("setClass" == B.event) E.push(B), v(d, c);
                                else if (z[c]) {
                                    var F = z[c];
                                    F.event == a ? D = !0 : (E.push(F), v(d, c))
                                }
                            } else if ("leave" == a && z["ng-leave"]) D = !0;
                            else {
                                for (var G in z) E.push(z[G]), v(d, G);
                                z = {}, A = 0
                            }
                            E.length > 0 && j(E, function(a) {
                                a.cancel()
                            })
                        }
                        if (!t.isClassBased || t.isSetClassOperation || D || (D = "addClass" == a == d.hasClass(c)), D) return k(), l(), void o();
                        "leave" == a && d.one("$destroy", function() {
                            var a = b.element(this),
                                c = a.data(m);
                            if (c) {
                                var d = c.active["ng-leave"];
                                d && (d.cancel(), v(a, "ng-leave"))
                            }
                        }), d.addClass(n);
                        var H = x++;
                        A++, z[c] = t, d.data(m, {
                            last: t,
                            active: z,
                            index: H,
                            totalActive: A
                        }), k(), t.before(function(b) {
                            var e = d.data(m);
                            b = b || !e || !e.active[c] || t.isClassBased && e.active[c].event != a, q(), b === !0 ? r() : (l(), t.after(r))
                        })
                    }

                    function u(a) {
                        var c = f(a);
                        if (c) {
                            var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(n) : c.querySelectorAll("." + n);
                            j(d, function(a) {
                                a = b.element(a);
                                var c = a.data(m);
                                c && c.active && j(c.active, function(a) {
                                    a.cancel()
                                })
                            })
                        }
                    }

                    function v(a, b) {
                        if (h(a, l)) o.disabled || (o.running = !1, o.structural = !1);
                        else if (b) {
                            var c = a.data(m) || {}, d = b === !0;
                            !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (a.removeClass(n), a.removeData(m))
                        }
                    }

                    function w(a, b) {
                        if (o.disabled) return !0;
                        if (h(a, l)) return o.disabled || o.running;
                        do {
                            if (0 === b.length) break;
                            var c = h(b, l),
                                d = c ? o : b.data(m),
                                e = d && ( !! d.disabled || d.running || d.totalActive > 0);
                            if (c || e) return e;
                            if (c) return !0
                        } while (b = b.parent());
                        return !0
                    }
                    var x = 0;
                    l.data(m, o), q.$$postDigest(function() {
                        q.$$postDigest(function() {
                            o.running = !1
                        })
                    });
                    var y = e.classNameFilter(),
                        z = y ? function(a) {
                            return y.test(a)
                        } : function() {
                            return !0
                        };
                    return {
                        enter: function(b, c, d, e) {
                            this.enabled(!1, b), a.enter(b, c, d), q.$$postDigest(function() {
                                b = g(b), t("enter", "ng-enter", b, c, d, i, e)
                            })
                        },
                        leave: function(b, c) {
                            u(b), this.enabled(!1, b), q.$$postDigest(function() {
                                t("leave", "ng-leave", g(b), null, null, function() {
                                    a.leave(b)
                                }, c)
                            })
                        },
                        move: function(b, c, d, e) {
                            u(b), this.enabled(!1, b), a.move(b, c, d), q.$$postDigest(function() {
                                b = g(b), t("move", "ng-move", b, c, d, i, e)
                            })
                        },
                        addClass: function(b, c, d) {
                            b = g(b), t("addClass", c, b, null, null, function() {
                                a.addClass(b, c)
                            }, d)
                        },
                        removeClass: function(b, c, d) {
                            b = g(b), t("removeClass", c, b, null, null, function() {
                                a.removeClass(b, c)
                            }, d)
                        },
                        setClass: function(b, c, d, e) {
                            b = g(b), t("setClass", [c, d], b, null, null, function() {
                                a.setClass(b, c, d)
                            }, e)
                        },
                        enabled: function(a, b) {
                            switch (arguments.length) {
                                case 2:
                                    if (a) v(b);
                                    else {
                                        var c = b.data(m) || {};
                                        c.disabled = !0, b.data(m, c)
                                    }
                                    break;
                                case 1:
                                    o.disabled = !a;
                                    break;
                                default:
                                    a = !o.disabled
                            }
                            return !!a
                        }
                    }
                }
            ]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow",
                function(d, e, g, h) {
                    function k(a, b) {
                        J && J(), W.push(b), J = h(function() {
                            j(W, function(a) {
                                a()
                            }), W = [], J = null, U = {}
                        })
                    }

                    function m(a, c) {
                        var d = f(a);
                        a = b.element(d), Z.push(a);
                        var e = Date.now() + 1e3 * c;
                        Y >= e || (g.cancel(X), Y = e, X = g(function() {
                            n(Z), Z = []
                        }, c, !1))
                    }

                    function n(a) {
                        j(a, function(a) {
                            var b = a.data(P);
                            b && (b.closeAnimationFn || i)()
                        })
                    }

                    function o(a, b) {
                        var c = b ? U[b] : null;
                        if (!c) {
                            var e, f, g, h, i = 0,
                                k = 0,
                                m = 0,
                                n = 0;
                            j(a, function(a) {
                                if (a.nodeType == l) {
                                    var b = d.getComputedStyle(a) || {};
                                    g = b[E + K], i = Math.max(p(g), i), h = b[E + L], e = b[E + M], k = Math.max(p(e), k), f = b[G + M], n = Math.max(p(f), n);
                                    var c = p(b[G + K]);
                                    c > 0 && (c *= parseInt(b[G + N], 10) || 1), m = Math.max(c, m)
                                }
                            }), c = {
                                total: 0,
                                transitionPropertyStyle: h,
                                transitionDurationStyle: g,
                                transitionDelayStyle: e,
                                transitionDelay: k,
                                transitionDuration: i,
                                animationDelayStyle: f,
                                animationDelay: n,
                                animationDuration: m
                            }, b && (U[b] = c)
                        }
                        return c
                    }

                    function p(a) {
                        var c = 0,
                            d = b.isString(a) ? a.split(/\s*,\s*/) : [];
                        return j(d, function(a) {
                            c = Math.max(parseFloat(a) || 0, c)
                        }), c
                    }

                    function q(a) {
                        var b = a.parent(),
                            c = b.data(O);
                        return c || (b.data(O, ++V), c = V), c + "-" + f(a).className
                    }

                    function r(a, b, c, d) {
                        var e = q(b),
                            f = e + " " + c,
                            g = U[f] ? ++U[f].total : 0,
                            h = {};
                        if (g > 0) {
                            var j = c + "-stagger",
                                k = e + " " + j,
                                l = !U[k];
                            l && b.addClass(j), h = o(b, k), l && b.removeClass(j)
                        }
                        d = d || function(a) {
                            return a()
                        }, b.addClass(c);
                        var m = b.data(P) || {}, n = d(function() {
                                return o(b, f)
                            }),
                            p = n.transitionDuration,
                            r = n.animationDuration;
                        if (0 === p && 0 === r) return b.removeClass(c), !1;
                        b.data(P, {
                            running: m.running || 0,
                            itemIndex: g,
                            stagger: h,
                            timings: n,
                            closeAnimationFn: i
                        });
                        var s = m.running > 0 || "setClass" == a;
                        return p > 0 && t(b, c, s), r > 0 && h.animationDelay > 0 && 0 === h.animationDuration && u(b), !0
                    }

                    function s(a) {
                        return "ng-enter" == a || "ng-move" == a || "ng-leave" == a
                    }

                    function t(a, b, c) {
                        s(b) || !c ? f(a).style[E + L] = "none" : a.addClass(Q)
                    }

                    function u(a) {
                        f(a).style[G] = "none 0s"
                    }

                    function v(a) {
                        var b = E + L,
                            c = f(a);
                        c.style[b] && c.style[b].length > 0 && (c.style[b] = ""), a.removeClass(Q)
                    }

                    function w(a) {
                        var b = G,
                            c = f(a);
                        c.style[b] && c.style[b].length > 0 && (c.style[b] = "")
                    }

                    function x(a, b, c, d) {
                        function e() {
                            b.off(t, g), b.removeClass(k), C(b, c);
                            var a = f(b);
                            for (var d in v) a.style.removeProperty(v[d])
                        }

                        function g(a) {
                            a.stopPropagation();
                            var b = a.originalEvent || a,
                                c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                                e = parseFloat(b.elapsedTime.toFixed(R));
                            Math.max(c - s, 0) >= r && e >= p && d()
                        }
                        var h = f(b),
                            i = b.data(P);
                        if (-1 == h.className.indexOf(c) || !i) return void d();
                        var k = "";
                        j(c.split(" "), function(a, b) {
                            k += (b > 0 ? " " : "") + a + "-active"
                        });
                        var l = i.stagger,
                            n = i.timings,
                            o = i.itemIndex,
                            p = Math.max(n.transitionDuration, n.animationDuration),
                            q = Math.max(n.transitionDelay, n.animationDelay),
                            r = q * T,
                            s = Date.now(),
                            t = H + " " + F,
                            u = "",
                            v = [];
                        if (n.transitionDuration > 0) {
                            var w = n.transitionPropertyStyle; - 1 == w.indexOf("all") && (u += I + "transition-property: " + w + ";", u += I + "transition-duration: " + n.transitionDurationStyle + ";", v.push(I + "transition-property"), v.push(I + "transition-duration"))
                        }
                        if (o > 0) {
                            if (l.transitionDelay > 0 && 0 === l.transitionDuration) {
                                var x = n.transitionDelayStyle;
                                u += I + "transition-delay: " + y(x, l.transitionDelay, o) + "; ", v.push(I + "transition-delay")
                            }
                            l.animationDelay > 0 && 0 === l.animationDuration && (u += I + "animation-delay: " + y(n.animationDelayStyle, l.animationDelay, o) + "; ", v.push(I + "animation-delay"))
                        }
                        if (v.length > 0) {
                            var z = h.getAttribute("style") || "";
                            h.setAttribute("style", z + " " + u)
                        }
                        b.on(t, g), b.addClass(k), i.closeAnimationFn = function() {
                            e(), d()
                        };
                        var A = o * (Math.max(l.animationDelay, l.transitionDelay) || 0),
                            B = (q + p) * S,
                            D = (A + B) * T;
                        return i.running++, m(b, D), e
                    }

                    function y(a, b, c) {
                        var d = "";
                        return j(a.split(","), function(a, e) {
                            d += (e > 0 ? "," : "") + (c * b + parseInt(a, 10)) + "s"
                        }), d
                    }

                    function z(a, b, c, d) {
                        return r(a, b, c, d) ? function(a) {
                            a && C(b, c)
                        } : void 0
                    }

                    function A(a, b, c, d) {
                        return b.data(P) ? x(a, b, c, d) : (C(b, c), void d())
                    }

                    function B(a, b, c, d) {
                        var e = z(a, b, c);
                        if (!e) return void d();
                        var f = e;
                        return k(b, function() {
                            v(b, c), w(b), f = A(a, b, c, d)
                        }),
                        function(a) {
                            (f || i)(a)
                        }
                    }

                    function C(a, b) {
                        a.removeClass(b);
                        var c = a.data(P);
                        c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(P))
                    }

                    function D(a, c) {
                        var d = "";
                        return a = b.isArray(a) ? a : a.split(/\s+/), j(a, function(a, b) {
                            a && a.length > 0 && (d += (b > 0 ? " " : "") + a + c)
                        }), d
                    }
                    var E, F, G, H, I = "";
                    a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
                    var J, K = "Duration",
                        L = "Property",
                        M = "Delay",
                        N = "IterationCount",
                        O = "$$ngAnimateKey",
                        P = "$$ngAnimateCSS3Data",
                        Q = "ng-animate-block-transitions",
                        R = 3,
                        S = 1.5,
                        T = 1e3,
                        U = {}, V = 0,
                        W = [],
                        X = null,
                        Y = 0,
                        Z = [];
                    return {
                        enter: function(a, b) {
                            return B("enter", a, "ng-enter", b)
                        },
                        leave: function(a, b) {
                            return B("leave", a, "ng-leave", b)
                        },
                        move: function(a, b) {
                            return B("move", a, "ng-move", b)
                        },
                        beforeSetClass: function(a, b, c, d) {
                            var e = D(c, "-remove") + " " + D(b, "-add"),
                                f = z("setClass", a, e, function(d) {
                                    var e = a.attr("class");
                                    a.removeClass(c), a.addClass(b);
                                    var f = d();
                                    return a.attr("class", e), f
                                });
                            return f ? (k(a, function() {
                                v(a, e), w(a), d()
                            }), f) : void d()
                        },
                        beforeAddClass: function(a, b, c) {
                            var d = z("addClass", a, D(b, "-add"), function(c) {
                                a.addClass(b);
                                var d = c();
                                return a.removeClass(b), d
                            });
                            return d ? (k(a, function() {
                                v(a, b), w(a), c()
                            }), d) : void c()
                        },
                        setClass: function(a, b, c, d) {
                            c = D(c, "-remove"), b = D(b, "-add");
                            var e = c + " " + b;
                            return A("setClass", a, e, d)
                        },
                        addClass: function(a, b, c) {
                            return A("addClass", a, D(b, "-add"), c)
                        },
                        beforeRemoveClass: function(a, b, c) {
                            var d = z("removeClass", a, D(b, "-remove"), function(c) {
                                var d = a.attr("class");
                                a.removeClass(b);
                                var e = c();
                                return a.attr("class", d), e
                            });
                            return d ? (k(a, function() {
                                v(a, b), w(a), c()
                            }), d) : void c()
                        },
                        removeClass: function(a, b, c) {
                            return A("removeClass", a, D(b, "-remove"), c)
                        }
                    }
                }
            ])
        }
    ])
}(window, window.angular),
function() {
    function a(a, b, c) {
        for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)
            if (a[d] === b) return d;
        return -1
    }

    function b(b, c) {
        var d = typeof c;
        if (b = b.cache, "boolean" == d || null == c) return b[c] ? 0 : -1;
        "number" != d && "string" != d && (d = "object");
        var e = "number" == d ? c : u + c;
        return b = (b = b[d]) && b[e], "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
    }

    function c(a) {
        var b = this.cache,
            c = typeof a;
        if ("boolean" == c || null == a) b[a] = !0;
        else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a : u + a,
                e = b[c] || (b[c] = {});
            "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
        }
    }

    function d(a) {
        return a.charCodeAt(0)
    }

    function e(a, b) {
        for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f;) {
            var g = c[e],
                h = d[e];
            if (g !== h) {
                if (g > h || "undefined" == typeof g) return 1;
                if (h > g || "undefined" == typeof h) return -1
            }
        }
        return a.index - b.index
    }

    function f(a) {
        var b = -1,
            d = a.length,
            e = a[0],
            f = a[d / 2 | 0],
            g = a[d - 1];
        if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g) return !1;
        var h = i();
        h["false"] = h["null"] = h["true"] = h.undefined = !1;
        var j = i();
        for (j.array = a, j.cache = h, j.push = c; ++b < d;) j.push(a[b]);
        return j
    }

    function g(a) {
        return "\\" + _[a]
    }

    function h() {
        return q.pop() || []
    }

    function i() {
        return r.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            value: null
        }
    }

    function j(a) {
        return "function" != typeof a.toString && "string" == typeof(a + "")
    }

    function l(a) {
        a.length = 0, q.length < w && q.push(a)
    }

    function m(a) {
        var b = a.cache;
        b && m(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, r.length < w && r.push(a)
    }

    function n(a, b, c) {
        b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
        for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
        return f
    }

    function o(c) {
        function q(a) {
            return a && "object" == typeof a && !ke(a) && Rd.call(a, "__wrapped__") ? a : new r(a)
        }

        function r(a, b) {
            this.__chain__ = !! b, this.__wrapped__ = a
        }

        function w(a) {
            function b() {
                if (d) {
                    var a = n(d);
                    Sd.apply(a, arguments)
                }
                if (this instanceof b) {
                    var f = bb(c.prototype),
                        g = c.apply(f, a || arguments);
                    return Lb(g) ? g : f
                }
                return c.apply(e, a || arguments)
            }
            var c = a[0],
                d = a[2],
                e = a[4];
            return je(b, a), b
        }

        function _(a, b, c, d, e) {
            if (c) {
                var f = c(a);
                if ("undefined" != typeof f) return f
            }
            var g = Lb(a);
            if (!g) return a;
            var i = Kd.call(a);
            if (!W[i] || !he.nodeClass && j(a)) return a;
            var k = fe[i];
            switch (i) {
                case O:
                case P:
                    return new k(+a);
                case S:
                case V:
                    return new k(a);
                case U:
                    return f = k(a.source, C.exec(a)), f.lastIndex = a.lastIndex, f
            }
            var m = ke(a);
            if (b) {
                var o = !d;
                d || (d = h()), e || (e = h());
                for (var p = d.length; p--;)
                    if (d[p] == a) return e[p];
                f = m ? k(a.length) : {}
            } else f = m ? n(a) : ve({}, a);
            return m && (Rd.call(a, "index") && (f.index = a.index), Rd.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (m ? ue : ye)(a, function(a, g) {
                f[g] = _(a, b, c, d, e)
            }), o && (l(d), l(e)), f) : f
        }

        function bb(a) {
            return Lb(a) ? Yd(a) : {}
        }

        function cb(a, b, c) {
            if ("function" != typeof a) return ed;
            if ("undefined" == typeof b || !("prototype" in a)) return a;
            var d = a.__bindData__;
            if ("undefined" == typeof d && (he.funcNames && (d = !a.name), d = d || !he.funcDecomp, !d)) {
                var e = Pd.call(a);
                he.funcNames || (d = !D.test(e)), d || (d = H.test(e), je(a, d))
            }
            if (d === !1 || d !== !0 && 1 & d[1]) return a;
            switch (c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, f) {
                        return a.call(b, c, d, e, f)
                    }
            }
            return Pc(a, b)
        }

        function db(a) {
            function b() {
                var a = i ? g : this;
                if (e) {
                    var o = n(e);
                    Sd.apply(o, arguments)
                }
                if ((f || k) && (o || (o = n(arguments)), f && Sd.apply(o, f), k && o.length < h)) return d |= 16, db([c, l ? d : -4 & d, o, null, g, h]);
                if (o || (o = arguments), j && (c = a[m]), this instanceof b) {
                    a = bb(c.prototype);
                    var p = c.apply(a, o);
                    return Lb(p) ? p : a
                }
                return c.apply(a, o)
            }
            var c = a[0],
                d = a[1],
                e = a[2],
                f = a[3],
                g = a[4],
                h = a[5],
                i = 1 & d,
                j = 2 & d,
                k = 4 & d,
                l = 8 & d,
                m = c;
            return je(b, a), b
        }

        function eb(c, d) {
            var e = -1,
                g = pb(),
                h = c ? c.length : 0,
                i = h >= v && g === a,
                j = [];
            if (i) {
                var k = f(d);
                k ? (g = b, d = k) : i = !1
            }
            for (; ++e < h;) {
                var l = c[e];
                g(d, l) < 0 && j.push(l)
            }
            return i && m(d), j
        }

        function gb(a, b, c, d) {
            for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) {
                var h = a[e];
                if (h && "object" == typeof h && "number" == typeof h.length && (ke(h) || tb(h))) {
                    b || (h = gb(h, b, c));
                    var i = -1,
                        j = h.length,
                        k = g.length;
                    for (g.length += j; ++i < j;) g[k++] = h[i]
                } else c || g.push(h)
            }
            return g
        }

        function hb(a, b, c, d, e, f) {
            if (c) {
                var g = c(a, b);
                if ("undefined" != typeof g) return !!g
            }
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            var i = typeof a,
                k = typeof b;
            if (!(a !== a || a && $[i] || b && $[k])) return !1;
            if (null == a || null == b) return a === b;
            var m = Kd.call(a),
                n = Kd.call(b);
            if (m == M && (m = T), n == M && (n = T), m != n) return !1;
            switch (m) {
                case O:
                case P:
                    return +a == +b;
                case S:
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case U:
                case V:
                    return a == Dd(b)
            }
            var o = m == N;
            if (!o) {
                var p = Rd.call(a, "__wrapped__"),
                    q = Rd.call(b, "__wrapped__");
                if (p || q) return hb(p ? a.__wrapped__ : a, q ? b.__wrapped__ : b, c, d, e, f);
                if (m != T || !he.nodeClass && (j(a) || j(b))) return !1;
                var r = !he.argsObject && tb(a) ? Bd : a.constructor,
                    s = !he.argsObject && tb(b) ? Bd : b.constructor;
                if (r != s && !(Kb(r) && r instanceof r && Kb(s) && s instanceof s) && "constructor" in a && "constructor" in b) return !1
            }
            var t = !e;
            e || (e = h()), f || (f = h());
            for (var u = e.length; u--;)
                if (e[u] == a) return f[u] == b;
            var v = 0;
            if (g = !0, e.push(a), f.push(b), o) {
                if (u = a.length, v = b.length, g = v == u, g || d)
                    for (; v--;) {
                        var w = u,
                            x = b[v];
                        if (d)
                            for (; w-- && !(g = hb(a[w], x, c, d, e, f)););
                        else if (!(g = hb(a[v], x, c, d, e, f))) break
                    }
            } else xe(b, function(b, h, i) {
                return Rd.call(i, h) ? (v++, g = Rd.call(a, h) && hb(a[h], b, c, d, e, f)) : void 0
            }), g && !d && xe(a, function(a, b, c) {
                return Rd.call(c, b) ? g = --v > -1 : void 0
            });
            return e.pop(), f.pop(), t && (l(e), l(f)), g
        }

        function ib(a, b, c, d, e) {
            (ke(b) ? dc : ye)(b, function(b, f) {
                var g, h, i = b,
                    j = a[f];
                if (b && ((h = ke(b)) || ze(b))) {
                    for (var k = d.length; k--;)
                        if (g = d[k] == b) {
                            j = e[k];
                            break
                        }
                    if (!g) {
                        var l;
                        c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? ke(j) ? j : [] : ze(j) ? j : {}), d.push(b), e.push(j), l || ib(j, b, c, d, e)
                    }
                } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                a[f] = j
            })
        }

        function jb(a, b) {
            return a + Od(ee() * (b - a + 1))
        }

        function kb(c, d, e) {
            var g = -1,
                i = pb(),
                j = c ? c.length : 0,
                k = [],
                n = !d && j >= v && i === a,
                o = e || n ? h() : k;
            if (n) {
                var p = f(o);
                i = b, o = p
            }
            for (; ++g < j;) {
                var q = c[g],
                    r = e ? e(q, g, c) : q;
                (d ? !g || o[o.length - 1] !== r : i(o, r) < 0) && ((e || n) && o.push(r), k.push(q))
            }
            return n ? (l(o.array), m(o)) : e && l(o), k
        }

        function lb(a) {
            return function(b, c, d) {
                var e = {};
                if (c = q.createCallback(c, d, 3), ke(b))
                    for (var f = -1, g = b.length; ++f < g;) {
                        var h = b[f];
                        a(e, h, c(h, f, b), b)
                    } else ue(b, function(b, d, f) {
                        a(e, b, c(b, d, f), f)
                    });
                return e
            }
        }

        function mb(a, b, c, d, e, f) {
            var g = 1 & b,
                h = 2 & b,
                i = 4 & b,
                j = 16 & b,
                k = 32 & b;
            if (!h && !Kb(a)) throw new Ed;
            j && !c.length && (b &= -17, j = c = !1), k && !d.length && (b &= -33, k = d = !1);
            var l = a && a.__bindData__;
            if (l && l !== !0) return l = n(l), l[2] && (l[2] = n(l[2])), l[3] && (l[3] = n(l[3])), !g || 1 & l[1] || (l[4] = e), !g && 1 & l[1] && (b |= 8), !i || 4 & l[1] || (l[5] = f), j && Sd.apply(l[2] || (l[2] = []), c), k && Wd.apply(l[3] || (l[3] = []), d), l[1] |= b, mb.apply(null, l);
            var m = 1 == b || 17 === b ? w : db;
            return m([a, b, c, d, e, f])
        }

        function nb() {
            Z.shadowedProps = K, Z.array = Z.bottom = Z.loop = Z.top = "", Z.init = "iterable", Z.useHas = !0;
            for (var a, b = 0; a = arguments[b]; b++)
                for (var c in a) Z[c] = a[c];
            var d = Z.args;
            Z.firstArg = /^[^,]+/.exec(d)[0];
            var e = yd("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + d + ") {\n" + ie(Z) + "\n}");
            return e(cb, Q, Gd, Rd, t, tb, ke, Qb, Z.keys, Hd, $, ge, V, Id, Kd)
        }

        function ob(a) {
            return qe[a]
        }

        function pb() {
            var b = (b = q.indexOf) === yc ? a : b;
            return b
        }

        function qb(a) {
            return "function" == typeof a && Ld.test(a)
        }

        function rb(a) {
            var b, c;
            return !a || Kd.call(a) != T || (b = a.constructor, Kb(b) && !(b instanceof b)) || !he.argsClass && tb(a) || !he.nodeClass && j(a) ? !1 : he.ownLast ? (xe(a, function(a, b, d) {
                return c = Rd.call(d, b), !1
            }), c !== !1) : (xe(a, function(a, b) {
                c = b
            }), "undefined" == typeof c || Rd.call(a, c))
        }

        function sb(a) {
            return re[a]
        }

        function tb(a) {
            return a && "object" == typeof a && "number" == typeof a.length && Kd.call(a) == M || !1
        }

        function ub(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), _(a, b, "function" == typeof c && cb(c, d, 1))
        }

        function vb(a, b, c) {
            return _(a, !0, "function" == typeof b && cb(b, c, 1))
        }

        function wb(a, b) {
            var c = bb(a);
            return b ? ve(c, b) : c
        }

        function xb(a, b, c) {
            var d;
            return b = q.createCallback(b, c, 3), ye(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }

        function yb(a, b, c) {
            var d;
            return b = q.createCallback(b, c, 3), Ab(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }

        function zb(a, b, c) {
            var d = [];
            xe(a, function(a, b) {
                d.push(b, a)
            });
            var e = d.length;
            for (b = cb(b, c, 3); e-- && b(d[e--], d[e], a) !== !1;);
            return a
        }

        function Ab(a, b, c) {
            var d = me(a),
                e = d.length;
            for (b = cb(b, c, 3); e--;) {
                var f = d[e];
                if (b(a[f], f, a) === !1) break
            }
            return a
        }

        function Bb(a) {
            var b = [];
            return xe(a, function(a, c) {
                Kb(a) && b.push(c)
            }), b.sort()
        }

        function Cb(a, b) {
            return a ? Rd.call(a, b) : !1
        }

        function Db(a) {
            for (var b = -1, c = me(a), d = c.length, e = {}; ++b < d;) {
                var f = c[b];
                e[a[f]] = f
            }
            return e
        }

        function Eb(a) {
            return a === !0 || a === !1 || a && "object" == typeof a && Kd.call(a) == O || !1
        }

        function Fb(a) {
            return a && "object" == typeof a && Kd.call(a) == P || !1
        }

        function Gb(a) {
            return a && 1 === a.nodeType || !1
        }

        function Hb(a) {
            var b = !0;
            if (!a) return b;
            var c = Kd.call(a),
                d = a.length;
            return c == N || c == V || (he.argsClass ? c == M : tb(a)) || c == T && "number" == typeof d && Kb(a.splice) ? !d : (ye(a, function() {
                return b = !1
            }), b)
        }

        function Ib(a, b, c, d) {
            return hb(a, b, "function" == typeof c && cb(c, d, 2))
        }

        function Jb(a) {
            return $d(a) && !_d(parseFloat(a))
        }

        function Kb(a) {
            return "function" == typeof a
        }

        function Lb(a) {
            return !(!a || !$[typeof a])
        }

        function Mb(a) {
            return Ob(a) && a != +a
        }

        function Nb(a) {
            return null === a
        }

        function Ob(a) {
            return "number" == typeof a || a && "object" == typeof a && Kd.call(a) == S || !1
        }

        function Pb(a) {
            return a && $[typeof a] && Kd.call(a) == U || !1
        }

        function Qb(a) {
            return "string" == typeof a || a && "object" == typeof a && Kd.call(a) == V || !1
        }

        function Rb(a) {
            return "undefined" == typeof a
        }

        function Sb(a, b, c) {
            var d = {};
            return b = q.createCallback(b, c, 3), ye(a, function(a, c, e) {
                d[c] = b(a, c, e)
            }), d
        }

        function Tb(a) {
            var b = arguments,
                c = 2;
            if (!Lb(a)) return a;
            if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2]) var d = cb(b[--c - 1], b[c--], 2);
            else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
            for (var e = n(arguments, 1, c), f = -1, g = h(), i = h(); ++f < c;) ib(a, e[f], d, g, i);
            return l(g), l(i), a
        }

        function Ub(a, b, c) {
            var d = {};
            if ("function" != typeof b) {
                var e = [];
                xe(a, function(a, b) {
                    e.push(b)
                }), e = eb(e, gb(arguments, !0, !1, 1));
                for (var f = -1, g = e.length; ++f < g;) {
                    var h = e[f];
                    d[h] = a[h]
                }
            } else b = q.createCallback(b, c, 3), xe(a, function(a, c, e) {
                b(a, c, e) || (d[c] = a)
            });
            return d
        }

        function Vb(a) {
            for (var b = -1, c = me(a), d = c.length, e = ud(d); ++b < d;) {
                var f = c[b];
                e[b] = [f, a[f]]
            }
            return e
        }

        function Wb(a, b, c) {
            var d = {};
            if ("function" != typeof b)
                for (var e = -1, f = gb(arguments, !0, !1, 1), g = Lb(a) ? f.length : 0; ++e < g;) {
                    var h = f[e];
                    h in a && (d[h] = a[h])
                } else b = q.createCallback(b, c, 3), xe(a, function(a, c, e) {
                    b(a, c, e) && (d[c] = a)
                });
            return d
        }

        function Xb(a, b, c, d) {
            var e = ke(a);
            if (null == c)
                if (e) c = [];
                else {
                    var f = a && a.constructor,
                        g = f && f.prototype;
                    c = bb(g)
                }
            return b && (b = q.createCallback(b, d, 4), (e ? ue : ye)(a, function(a, d, e) {
                return b(c, a, d, e)
            })), c
        }

        function Yb(a) {
            for (var b = -1, c = me(a), d = c.length, e = ud(d); ++b < d;) e[b] = a[c[b]];
            return e
        }

        function Zb(a) {
            var b = arguments,
                c = -1,
                d = gb(b, !0, !1, 1),
                e = b[2] && b[2][b[1]] === a ? 1 : d.length,
                f = ud(e);
            for (he.unindexedChars && Qb(a) && (a = a.split("")); ++c < e;) f[c] = a[d[c]];
            return f
        }

        function $b(a, b, c) {
            var d = -1,
                e = pb(),
                f = a ? a.length : 0,
                g = !1;
            return c = (0 > c ? be(0, f + c) : c) || 0, ke(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Qb(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : ue(a, function(a) {
                return ++d >= c ? !(g = a === b) : void 0
            }), g
        }

        function _b(a, b, c) {
            var d = !0;
            if (b = q.createCallback(b, c, 3), ke(a))
                for (var e = -1, f = a.length; ++e < f && (d = !! b(a[e], e, a)););
            else ue(a, function(a, c, e) {
                return d = !! b(a, c, e)
            });
            return d
        }

        function ac(a, b, c) {
            var d = [];
            if (b = q.createCallback(b, c, 3), ke(a))
                for (var e = -1, f = a.length; ++e < f;) {
                    var g = a[e];
                    b(g, e, a) && d.push(g)
                } else ue(a, function(a, c, e) {
                    b(a, c, e) && d.push(a)
                });
            return d
        }

        function bc(a, b, c) {
            if (b = q.createCallback(b, c, 3), !ke(a)) {
                var d;
                return ue(a, function(a, c, e) {
                    return b(a, c, e) ? (d = a, !1) : void 0
                }), d
            }
            for (var e = -1, f = a.length; ++e < f;) {
                var g = a[e];
                if (b(g, e, a)) return g
            }
        }

        function cc(a, b, c) {
            var d;
            return b = q.createCallback(b, c, 3), ec(a, function(a, c, e) {
                return b(a, c, e) ? (d = a, !1) : void 0
            }), d
        }

        function dc(a, b, c) {
            if (b && "undefined" == typeof c && ke(a))
                for (var d = -1, e = a.length; ++d < e && b(a[d], d, a) !== !1;);
            else ue(a, b, c);
            return a
        }

        function ec(a, b, c) {
            var d = a,
                e = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : cb(b, c, 3), ke(a))
                for (; e-- && b(a[e], e, a) !== !1;);
            else {
                if ("number" != typeof e) {
                    var f = me(a);
                    e = f.length
                } else he.unindexedChars && Qb(a) && (d = a.split(""));
                ue(a, function(a, c, g) {
                    return c = f ? f[--e] : --e, b(d[c], c, g)
                })
            }
            return a
        }

        function fc(a, b) {
            var c = n(arguments, 2),
                d = -1,
                e = "function" == typeof b,
                f = a ? a.length : 0,
                g = ud("number" == typeof f ? f : 0);
            return dc(a, function(a) {
                g[++d] = (e ? b : a[b]).apply(a, c)
            }), g
        }

        function gc(a, b, c) {
            var d = -1,
                e = a ? a.length : 0,
                f = ud("number" == typeof e ? e : 0);
            if (b = q.createCallback(b, c, 3), ke(a))
                for (; ++d < e;) f[d] = b(a[d], d, a);
            else ue(a, function(a, c, e) {
                f[++d] = b(a, c, e)
            });
            return f
        }

        function hc(a, b, c) {
            var e = -1 / 0,
                f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && ke(a))
                for (var g = -1, h = a.length; ++g < h;) {
                    var i = a[g];
                    i > f && (f = i)
                } else b = null == b && Qb(a) ? d : q.createCallback(b, c, 3), ue(a, function(a, c, d) {
                    var g = b(a, c, d);
                    g > e && (e = g, f = a)
                });
            return f
        }

        function ic(a, b, c) {
            var e = 1 / 0,
                f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && ke(a))
                for (var g = -1, h = a.length; ++g < h;) {
                    var i = a[g];
                    f > i && (f = i)
                } else b = null == b && Qb(a) ? d : q.createCallback(b, c, 3), ue(a, function(a, c, d) {
                    var g = b(a, c, d);
                    e > g && (e = g, f = a)
                });
            return f
        }

        function jc(a, b, c, d) {
            var e = arguments.length < 3;
            if (b = q.createCallback(b, d, 4), ke(a)) {
                var f = -1,
                    g = a.length;
                for (e && (c = a[++f]); ++f < g;) c = b(c, a[f], f, a)
            } else ue(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            });
            return c
        }

        function kc(a, b, c, d) {
            var e = arguments.length < 3;
            return b = q.createCallback(b, d, 4), ec(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            }), c
        }

        function lc(a, b, c) {
            return b = q.createCallback(b, c, 3), ac(a, function(a, c, d) {
                return !b(a, c, d)
            })
        }

        function mc(a, b, c) {
            if (a && "number" != typeof a.length ? a = Yb(a) : he.unindexedChars && Qb(a) && (a = a.split("")), null == b || c) return a ? a[jb(0, a.length - 1)] : p;
            var d = nc(a);
            return d.length = ce(be(0, b), d.length), d
        }

        function nc(a) {
            var b = -1,
                c = a ? a.length : 0,
                d = ud("number" == typeof c ? c : 0);
            return dc(a, function(a) {
                var c = jb(0, ++b);
                d[b] = d[c], d[c] = a
            }), d
        }

        function oc(a) {
            var b = a ? a.length : 0;
            return "number" == typeof b ? b : me(a).length
        }

        function pc(a, b, c) {
            var d;
            if (b = q.createCallback(b, c, 3), ke(a))
                for (var e = -1, f = a.length; ++e < f && !(d = b(a[e], e, a)););
            else ue(a, function(a, c, e) {
                return !(d = b(a, c, e))
            });
            return !!d
        }

        function qc(a, b, c) {
            var d = -1,
                f = ke(b),
                g = a ? a.length : 0,
                j = ud("number" == typeof g ? g : 0);
            for (f || (b = q.createCallback(b, c, 3)), dc(a, function(a, c, e) {
                var g = j[++d] = i();
                f ? g.criteria = gc(b, function(b) {
                    return a[b]
                }) : (g.criteria = h())[0] = b(a, c, e), g.index = d, g.value = a
            }), g = j.length, j.sort(e); g--;) {
                var k = j[g];
                j[g] = k.value, f || l(k.criteria), m(k)
            }
            return j
        }

        function rc(a) {
            return a && "number" == typeof a.length ? he.unindexedChars && Qb(a) ? a.split("") : n(a) : Yb(a)
        }

        function sc(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function tc(a) {
            return eb(a, gb(arguments, !0, !0, 1))
        }

        function uc(a, b, c) {
            var d = -1,
                e = a ? a.length : 0;
            for (b = q.createCallback(b, c, 3); ++d < e;)
                if (b(a[d], d, a)) return d;
            return -1
        }

        function vc(a, b, c) {
            var d = a ? a.length : 0;
            for (b = q.createCallback(b, c, 3); d--;)
                if (b(a[d], d, a)) return d;
            return -1
        }

        function wc(a, b, c) {
            var d = 0,
                e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = -1;
                for (b = q.createCallback(b, c, 3); ++f < e && b(a[f], f, a);) d++
            } else if (d = b, null == d || c) return a ? a[0] : p;
            return n(a, 0, ce(be(0, d), e))
        }

        function xc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = gc(a, c, d)), gb(a, b)
        }

        function yc(b, c, d) {
            if ("number" == typeof d) {
                var e = b ? b.length : 0;
                d = 0 > d ? be(0, e + d) : d || 0
            } else if (d) {
                var f = Hc(b, c);
                return b[f] === c ? f : -1
            }
            return a(b, c, d)
        }

        function zc(a, b, c) {
            var d = 0,
                e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
            } else d = null == b || c ? 1 : b || d;
            return n(a, 0, ce(be(0, e - d), e))
        }

        function Ac() {
            for (var c = [], d = -1, e = arguments.length, g = h(), i = pb(), j = i === a, k = h(); ++d < e;) {
                var n = arguments[d];
                (ke(n) || tb(n)) && (c.push(n), g.push(j && n.length >= v && f(d ? c[d] : k)))
            }
            var o = c[0],
                p = -1,
                q = o ? o.length : 0,
                r = [];
            a: for (; ++p < q;) {
                var s = g[0];
                if (n = o[p], (s ? b(s, n) : i(k, n)) < 0) {
                    for (d = e, (s || k).push(n); --d;)
                        if (s = g[d], (s ? b(s, n) : i(c[d], n)) < 0) continue a;
                    r.push(n)
                }
            }
            for (; e--;) s = g[e], s && m(s);
            return l(g), l(k), r
        }

        function Bc(a, b, c) {
            var d = 0,
                e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
            } else if (d = b, null == d || c) return a ? a[e - 1] : p;
            return n(a, be(0, e - d))
        }

        function Cc(a, b, c) {
            var d = a ? a.length : 0;
            for ("number" == typeof c && (d = (0 > c ? be(0, d + c) : ce(c, d - 1)) + 1); d--;)
                if (a[d] === b) return d;
            return -1
        }

        function Dc(a) {
            for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
                for (var f = -1, g = b[c]; ++f < e;) a[f] === g && (Vd.call(a, f--, 1), e--);
            return a
        }

        function Ec(a, b, c) {
            a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0);
            for (var d = -1, e = be(0, Md((b - a) / (c || 1))), f = ud(e); ++d < e;) f[d] = a, a += c;
            return f
        }

        function Fc(a, b, c) {
            var d = -1,
                e = a ? a.length : 0,
                f = [];
            for (b = q.createCallback(b, c, 3); ++d < e;) {
                var g = a[d];
                b(g, d, a) && (f.push(g), Vd.call(a, d--, 1), e--)
            }
            return f
        }

        function Gc(a, b, c) {
            if ("number" != typeof b && null != b) {
                var d = 0,
                    e = -1,
                    f = a ? a.length : 0;
                for (b = q.createCallback(b, c, 3); ++e < f && b(a[e], e, a);) d++
            } else d = null == b || c ? 1 : be(0, b);
            return n(a, d)
        }

        function Hc(a, b, c, d) {
            var e = 0,
                f = a ? a.length : e;
            for (c = c ? q.createCallback(c, d, 1) : ed, b = c(b); f > e;) {
                var g = e + f >>> 1;
                c(a[g]) < b ? e = g + 1 : f = g
            }
            return e
        }

        function Ic() {
            return kb(gb(arguments, !0, !0))
        }

        function Jc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = q.createCallback(c, d, 3)), kb(a, b, c)
        }

        function Kc(a) {
            return eb(a, n(arguments, 1))
        }

        function Lc() {
            for (var a = -1, b = arguments.length; ++a < b;) {
                var c = arguments[a];
                if (ke(c) || tb(c)) var d = d ? kb(eb(d, c).concat(eb(c, d))) : c
            }
            return d || []
        }

        function Mc() {
            for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? hc(De(a, "length")) : 0, d = ud(0 > c ? 0 : c); ++b < c;) d[b] = De(a, b);
            return d
        }

        function Nc(a, b) {
            var c = -1,
                d = a ? a.length : 0,
                e = {};
            for (b || !d || ke(a[0]) || (b = []); ++c < d;) {
                var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1])
            }
            return e
        }

        function Oc(a, b) {
            if (!Kb(b)) throw new Ed;
            return function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }

        function Pc(a, b) {
            return arguments.length > 2 ? mb(a, 17, n(arguments, 2), null, b) : mb(a, 1, null, null, b)
        }

        function Qc(a) {
            for (var b = arguments.length > 1 ? gb(arguments, !0, !1, 1) : Bb(a), c = -1, d = b.length; ++c < d;) {
                var e = b[c];
                a[e] = mb(a[e], 1, null, null, a)
            }
            return a
        }

        function Rc(a, b) {
            return arguments.length > 2 ? mb(b, 19, n(arguments, 2), null, a) : mb(b, 3, null, null, a)
        }

        function Sc() {
            for (var a = arguments, b = a.length; b--;)
                if (!Kb(a[b])) throw new Ed;
            return function() {
                for (var b = arguments, c = a.length; c--;) b = [a[c].apply(this, b)];
                return b[0]
            }
        }

        function Tc(a, b) {
            return b = "number" == typeof b ? b : +b || a.length, mb(a, 4, null, null, null, b)
        }

        function Uc(a, b, c) {
            var d, e, f, g, h, i, j, k = 0,
                l = !1,
                m = !0;
            if (!Kb(a)) throw new Ed;
            if (b = be(0, b) || 0, c === !0) {
                var n = !0;
                m = !1
            } else Lb(c) && (n = c.leading, l = "maxWait" in c && (be(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing : m);
            var o = function() {
                var c = b - (Fe() - g);
                if (0 >= c) {
                    e && Nd(e);
                    var l = j;
                    e = i = j = p, l && (k = Fe(), f = a.apply(h, d), i || e || (d = h = null))
                } else i = Ud(o, c)
            }, q = function() {
                    i && Nd(i), e = i = j = p, (m || l !== b) && (k = Fe(), f = a.apply(h, d), i || e || (d = h = null))
                };
            return function() {
                if (d = arguments, g = Fe(), h = this, j = m && (i || !n), l === !1) var c = n && !i;
                else {
                    e || n || (k = g);
                    var p = l - (g - k),
                        r = 0 >= p;
                    r ? (e && (e = Nd(e)), k = g, f = a.apply(h, d)) : e || (e = Ud(q, p))
                }
                return r && i ? i = Nd(i) : i || b === l || (i = Ud(o, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f
            }
        }

        function Vc(a) {
            if (!Kb(a)) throw new Ed;
            var b = n(arguments, 1);
            return Ud(function() {
                a.apply(p, b)
            }, 1)
        }

        function Wc(a, b) {
            if (!Kb(a)) throw new Ed;
            var c = n(arguments, 2);
            return Ud(function() {
                a.apply(p, c)
            }, b)
        }

        function Xc(a, b) {
            if (!Kb(a)) throw new Ed;
            var c = function() {
                var d = c.cache,
                    e = b ? b.apply(this, arguments) : u + arguments[0];
                return Rd.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            };
            return c.cache = {}, c
        }

        function Yc(a) {
            var b, c;
            if (!Kb(a)) throw new Ed;
            return function() {
                return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
            }
        }

        function Zc(a) {
            return mb(a, 16, n(arguments, 1))
        }

        function $c(a) {
            return mb(a, 32, null, n(arguments, 1))
        }

        function _c(a, b, c) {
            var d = !0,
                e = !0;
            if (!Kb(a)) throw new Ed;
            return c === !1 ? d = !1 : Lb(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), X.leading = d, X.maxWait = b, X.trailing = e, Uc(a, b, X)
        }

        function ad(a, b) {
            return mb(b, 16, [a])
        }

        function bd(a) {
            return function() {
                return a
            }
        }

        function cd(a, b, c) {
            var d = typeof a;
            if (null == a || "function" == d) return cb(a, b, c);
            if ("object" != d) return id(a);
            var e = me(a),
                f = e[0],
                g = a[f];
            return 1 != e.length || g !== g || Lb(g) ? function(b) {
                for (var c = e.length, d = !1; c-- && (d = hb(b[e[c]], a[e[c]], null, !0)););
                return d
            } : function(a) {
                var b = a[f];
                return g === b && (0 !== g || 1 / g == 1 / b)
            }
        }

        function dd(a) {
            return null == a ? "" : Dd(a).replace(te, ob)
        }

        function ed(a) {
            return a
        }

        function fd(a, b, c) {
            var d = !0,
                e = b && Bb(b);
            b && (c || e.length) || (null == c && (c = b), f = r, b = a, a = q, e = Bb(b)), c === !1 ? d = !1 : Lb(c) && "chain" in c && (d = c.chain);
            var f = a,
                g = Kb(f);
            dc(e, function(c) {
                var e = a[c] = b[c];
                g && (f.prototype[c] = function() {
                    var b = this.__chain__,
                        c = this.__wrapped__,
                        g = [c];
                    Sd.apply(g, arguments);
                    var h = e.apply(a, g);
                    if (d || b) {
                        if (c === h && Lb(h)) return this;
                        h = new f(h), h.__chain__ = b
                    }
                    return h
                })
            })
        }

        function gd() {
            return c._ = Jd, this
        }

        function hd() {}

        function id(a) {
            return function(b) {
                return b[a]
            }
        }

        function jd(a, b, c) {
            var d = null == a,
                e = null == b;
            if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
                var f = ee();
                return ce(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
            }
            return jb(a, b)
        }

        function kd(a, b) {
            if (a) {
                var c = a[b];
                return Kb(c) ? a[b]() : c
            }
        }

        function ld(a, b, c) {
            var d = q.templateSettings;
            a = Dd(a || ""), c = we({}, c, d);
            var e, f = we({}, c.imports, d.imports),
                h = me(f),
                i = Yb(f),
                j = 0,
                k = c.interpolate || G,
                l = "__p += '",
                m = Cd((c.escape || G).source + "|" + k.source + "|" + (k === E ? B : G).source + "|" + (c.evaluate || G).source + "|$", "g");
            a.replace(m, function(b, c, d, f, h, i) {
                return d || (d = f), l += a.slice(j, i).replace(I, g), c && (l += "' +\n__e(" + c + ") +\n'"), h && (e = !0, l += "';\n" + h + ";\n__p += '"), d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), j = i + b.length, b
            }), l += "';\n";
            var n = c.variable,
                o = n;
            o || (n = "obj", l = "with (" + n + ") {\n" + l + "\n}\n"), l = (e ? l.replace(y, "") : l).replace(z, "$1").replace(A, "$1;"), l = "function(" + n + ") {\n" + (o ? "" : n + " || (" + n + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}";
            var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + L+++"]") + "\n*/";
            try {
                var s = yd(h, "return " + l + r).apply(p, i)
            } catch (t) {
                throw t.source = l, t
            }
            return b ? s(b) : (s.source = l, s)
        }

        function md(a, b, c) {
            a = (a = +a) > -1 ? a : 0;
            var d = -1,
                e = ud(a);
            for (b = cb(b, c, 1); ++d < a;) e[d] = b(d);
            return e
        }

        function nd(a) {
            return null == a ? "" : Dd(a).replace(se, sb)
        }

        function od(a) {
            var b = ++s;
            return Dd(null == a ? "" : a) + b
        }

        function pd(a) {
            return a = new r(a), a.__chain__ = !0, a
        }

        function qd(a, b) {
            return b(a), a
        }

        function rd() {
            return this.__chain__ = !0, this
        }

        function sd() {
            return Dd(this.__wrapped__)
        }

        function td() {
            return this.__wrapped__
        }
        c = c ? fb.defaults(ab.Object(), c, fb.pick(ab, J)) : ab;
        var ud = c.Array,
            vd = c.Boolean,
            wd = c.Date,
            xd = c.Error,
            yd = c.Function,
            zd = c.Math,
            Ad = c.Number,
            Bd = c.Object,
            Cd = c.RegExp,
            Dd = c.String,
            Ed = c.TypeError,
            Fd = [],
            Gd = xd.prototype,
            Hd = Bd.prototype,
            Id = Dd.prototype,
            Jd = c._,
            Kd = Hd.toString,
            Ld = Cd("^" + Dd(Kd).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            Md = zd.ceil,
            Nd = c.clearTimeout,
            Od = zd.floor,
            Pd = yd.prototype.toString,
            Qd = qb(Qd = Bd.getPrototypeOf) && Qd,
            Rd = Hd.hasOwnProperty,
            Sd = Fd.push,
            Td = Hd.propertyIsEnumerable,
            Ud = c.setTimeout,
            Vd = Fd.splice,
            Wd = Fd.unshift,
            Xd = function() {
                try {
                    var a = {}, b = qb(b = Bd.defineProperty) && b,
                        c = b(a, a, a) && b
                } catch (d) {}
                return c
            }(),
            Yd = qb(Yd = Bd.create) && Yd,
            Zd = qb(Zd = ud.isArray) && Zd,
            $d = c.isFinite,
            _d = c.isNaN,
            ae = qb(ae = Bd.keys) && ae,
            be = zd.max,
            ce = zd.min,
            de = c.parseInt,
            ee = zd.random,
            fe = {};
        fe[N] = ud, fe[O] = vd, fe[P] = wd, fe[R] = yd, fe[T] = Bd, fe[S] = Ad, fe[U] = Cd, fe[V] = Dd;
        var ge = {};
        ge[N] = ge[P] = ge[S] = {
            constructor: !0,
            toLocaleString: !0,
            toString: !0,
            valueOf: !0
        }, ge[O] = ge[V] = {
            constructor: !0,
            toString: !0,
            valueOf: !0
        }, ge[Q] = ge[R] = ge[U] = {
            constructor: !0,
            toString: !0
        }, ge[T] = {
            constructor: !0
        },
        function() {
            for (var a = K.length; a--;) {
                var b = K[a];
                for (var c in ge) Rd.call(ge, c) && !Rd.call(ge[c], b) && (ge[c][b] = !1)
            }
        }(), r.prototype = q.prototype;
        var he = q.support = {};
        ! function() {
            var a = function() {
                this.x = 1
            }, b = {
                    0: 1,
                    length: 1
                }, d = [];
            a.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var e in new a) d.push(e);
            for (e in arguments);
            he.argsClass = Kd.call(arguments) == M, he.argsObject = arguments.constructor == Bd && !(arguments instanceof ud), he.enumErrorProps = Td.call(Gd, "message") || Td.call(Gd, "name"), he.enumPrototypes = Td.call(a, "prototype"), he.funcDecomp = !qb(c.WinRTError) && H.test(o), he.funcNames = "string" == typeof yd.name, he.nonEnumArgs = 0 != e, he.nonEnumShadows = !/valueOf/.test(d), he.ownLast = "x" != d[0], he.spliceObjects = (Fd.splice.call(b, 0, 1), !b[0]), he.unindexedChars = "x" [0] + Bd("x")[0] != "xx";
            try {
                he.nodeClass = !(Kd.call(document) == T && !({
                    toString: 0
                } + ""))
            } catch (f) {
                he.nodeClass = !0
            }
        }(1), q.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: E,
            variable: "",
            imports: {
                _: q
            }
        };
        var ie = function(a) {
            var b = "var index, iterable = " + a.firstArg + ", result = " + a.init + ";\nif (!iterable) return result;\n" + a.top + ";";
            a.array ? (b += "\nvar length = iterable.length; index = -1;\nif (" + a.array + ") {  ", he.unindexedChars && (b += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), b += "\n  while (++index < length) {\n    " + a.loop + ";\n  }\n}\nelse {  ") : he.nonEnumArgs && (b += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + a.loop + ";\n    }\n  } else {  "), he.enumPrototypes && (b += "\n  var skipProto = typeof iterable == 'function';\n  "), he.enumErrorProps && (b += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
            var c = [];
            if (he.enumPrototypes && c.push('!(skipProto && index == "prototype")'), he.enumErrorProps && c.push('!(skipErrorProps && (index == "message" || index == "name"))'), a.useHas && a.keys) b += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }  ";
            else if (b += "\n  for (index in iterable) {\n", a.useHas && c.push("hasOwnProperty.call(iterable, index)"), c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }    ", he.nonEnumShadows) {
                for (b += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; 7 > k; k++) b += "\n    index = '" + a.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", a.useHas || (b += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), b += ") {\n      " + a.loop + ";\n    }      ";
                b += "\n  }    "
            }
            return (a.array || he.nonEnumArgs) && (b += "\n}"), b += a.bottom + ";\nreturn result"
        };
        Yd || (bb = function() {
            function a() {}
            return function(b) {
                if (Lb(b)) {
                    a.prototype = b;
                    var d = new a;
                    a.prototype = null
                }
                return d || c.Object()
            }
        }());
        var je = Xd ? function(a, b) {
                Y.value = b, Xd(a, "__bindData__", Y)
            } : hd;
        he.argsClass || (tb = function(a) {
            return a && "object" == typeof a && "number" == typeof a.length && Rd.call(a, "callee") && !Td.call(a, "callee") || !1
        });
        var ke = Zd || function(a) {
                return a && "object" == typeof a && "number" == typeof a.length && Kd.call(a) == N || !1
            }, le = nb({
                args: "object",
                init: "[]",
                top: "if (!(objectTypes[typeof object])) return result",
                loop: "result.push(index)"
            }),
            me = ae ? function(a) {
                return Lb(a) ? he.enumPrototypes && "function" == typeof a || he.nonEnumArgs && a.length && tb(a) ? le(a) : ae(a) : []
            } : le,
            ne = {
                args: "collection, callback, thisArg",
                top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
                array: "typeof length == 'number'",
                keys: me,
                loop: "if (callback(iterable[index], index, collection) === false) return result"
            }, oe = {
                args: "object, source, guard",
                top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                keys: me,
                loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                bottom: "  }\n}"
            }, pe = {
                top: "if (!objectTypes[typeof iterable]) return result;\n" + ne.top,
                array: !1
            }, qe = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, re = Db(qe),
            se = Cd("(" + me(re).join("|") + ")", "g"),
            te = Cd("[" + me(qe).join("") + "]", "g"),
            ue = nb(ne),
            ve = nb(oe, {
                top: oe.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
            }),
            we = nb(oe),
            xe = nb(ne, pe, {
                useHas: !1
            }),
            ye = nb(ne, pe);
        Kb(/x/) && (Kb = function(a) {
            return "function" == typeof a && Kd.call(a) == R
        });
        var ze = Qd ? function(a) {
                if (!a || Kd.call(a) != T || !he.argsClass && tb(a)) return !1;
                var b = a.valueOf,
                    c = qb(b) && (c = Qd(b)) && Qd(c);
                return c ? a == c || Qd(a) == c : rb(a)
            } : rb,
            Ae = lb(function(a, b, c) {
                Rd.call(a, c) ? a[c]++ : a[c] = 1
            }),
            Be = lb(function(a, b, c) {
                (Rd.call(a, c) ? a[c] : a[c] = []).push(b)
            }),
            Ce = lb(function(a, b, c) {
                a[c] = b
            }),
            De = gc,
            Ee = ac,
            Fe = qb(Fe = wd.now) && Fe || function() {
                return (new wd).getTime()
            }, Ge = 8 == de(x + "08") ? de : function(a, b) {
                return de(Qb(a) ? a.replace(F, "") : a, b || 0)
            };
        return q.after = Oc, q.assign = ve, q.at = Zb, q.bind = Pc, q.bindAll = Qc, q.bindKey = Rc, q.chain = pd, q.compact = sc, q.compose = Sc, q.constant = bd, q.countBy = Ae, q.create = wb, q.createCallback = cd, q.curry = Tc, q.debounce = Uc, q.defaults = we, q.defer = Vc, q.delay = Wc, q.difference = tc, q.filter = ac, q.flatten = xc, q.forEach = dc, q.forEachRight = ec, q.forIn = xe, q.forInRight = zb, q.forOwn = ye, q.forOwnRight = Ab, q.functions = Bb, q.groupBy = Be, q.indexBy = Ce, q.initial = zc, q.intersection = Ac, q.invert = Db, q.invoke = fc, q.keys = me, q.map = gc, q.mapValues = Sb, q.max = hc, q.memoize = Xc, q.merge = Tb, q.min = ic, q.omit = Ub, q.once = Yc, q.pairs = Vb, q.partial = Zc, q.partialRight = $c, q.pick = Wb, q.pluck = De, q.property = id, q.pull = Dc, q.range = Ec, q.reject = lc, q.remove = Fc, q.rest = Gc, q.shuffle = nc, q.sortBy = qc, q.tap = qd, q.throttle = _c, q.times = md, q.toArray = rc, q.transform = Xb, q.union = Ic, q.uniq = Jc, q.values = Yb, q.where = Ee, q.without = Kc, q.wrap = ad, q.xor = Lc, q.zip = Mc, q.zipObject = Nc, q.collect = gc, q.drop = Gc, q.each = dc, q.eachRight = ec, q.extend = ve, q.methods = Bb, q.object = Nc, q.select = ac, q.tail = Gc, q.unique = Jc, q.unzip = Mc, fd(q), q.clone = ub, q.cloneDeep = vb, q.contains = $b, q.escape = dd, q.every = _b, q.find = bc, q.findIndex = uc, q.findKey = xb, q.findLast = cc, q.findLastIndex = vc, q.findLastKey = yb, q.has = Cb, q.identity = ed, q.indexOf = yc, q.isArguments = tb, q.isArray = ke, q.isBoolean = Eb, q.isDate = Fb, q.isElement = Gb, q.isEmpty = Hb, q.isEqual = Ib, q.isFinite = Jb, q.isFunction = Kb, q.isNaN = Mb, q.isNull = Nb, q.isNumber = Ob, q.isObject = Lb, q.isPlainObject = ze, q.isRegExp = Pb, q.isString = Qb, q.isUndefined = Rb, q.lastIndexOf = Cc, q.mixin = fd, q.noConflict = gd, q.noop = hd, q.now = Fe, q.parseInt = Ge, q.random = jd, q.reduce = jc, q.reduceRight = kc, q.result = kd, q.runInContext = o, q.size = oc, q.some = pc, q.sortedIndex = Hc, q.template = ld, q.unescape = nd, q.uniqueId = od, q.all = _b, q.any = pc, q.detect = bc, q.findWhere = bc, q.foldl = jc, q.foldr = kc, q.include = $b, q.inject = jc, fd(function() {
            var a = {};
            return ye(q, function(b, c) {
                q.prototype[c] || (a[c] = b)
            }), a
        }(), !1), q.first = wc, q.last = Bc, q.sample = mc, q.take = wc, q.head = wc, ye(q, function(a, b) {
            var c = "sample" !== b;
            q.prototype[b] || (q.prototype[b] = function(b, d) {
                var e = this.__chain__,
                    f = a(this.__wrapped__, b, d);
                return e || null != b && (!d || c && "function" == typeof b) ? new r(f, e) : f
            })
        }), q.VERSION = "2.4.1", q.prototype.chain = rd, q.prototype.toString = sd, q.prototype.value = td, q.prototype.valueOf = td, ue(["join", "pop", "shift"], function(a) {
            var b = Fd[a];
            q.prototype[a] = function() {
                var a = this.__chain__,
                    c = b.apply(this.__wrapped__, arguments);
                return a ? new r(c, a) : c
            }
        }), ue(["push", "reverse", "sort", "unshift"], function(a) {
            var b = Fd[a];
            q.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments), this
            }
        }), ue(["concat", "slice", "splice"], function(a) {
            var b = Fd[a];
            q.prototype[a] = function() {
                return new r(b.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), he.spliceObjects || ue(["pop", "shift", "splice"], function(a) {
            var b = Fd[a],
                c = "splice" == a;
            q.prototype[a] = function() {
                var a = this.__chain__,
                    d = this.__wrapped__,
                    e = b.apply(d, arguments);
                return 0 === d.length && delete d[0], a || c ? new r(e, a) : e
            }
        }), q
    }
    var p, q = [],
        r = [],
        s = 0,
        t = {}, u = +new Date + "",
        v = 75,
        w = 40,
        x = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
        y = /\b__p \+= '';/g,
        z = /\b(__p \+=) '' \+/g,
        A = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        B = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        C = /\w*$/,
        D = /^\s*function[ \n\r\t]+\w/,
        E = /<%=([\s\S]+?)%>/g,
        F = RegExp("^[" + x + "]*0+(?=.$)"),
        G = /($^)/,
        H = /\bthis\b/,
        I = /['\n\r\t\u2028\u2029\\]/g,
        J = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
        K = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        L = 0,
        M = "[object Arguments]",
        N = "[object Array]",
        O = "[object Boolean]",
        P = "[object Date]",
        Q = "[object Error]",
        R = "[object Function]",
        S = "[object Number]",
        T = "[object Object]",
        U = "[object RegExp]",
        V = "[object String]",
        W = {};
    W[R] = !1, W[M] = W[N] = W[O] = W[P] = W[S] = W[T] = W[U] = W[V] = !0;
    var X = {
        leading: !1,
        maxWait: 0,
        trailing: !1
    }, Y = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        }, Z = {
            args: "",
            array: null,
            bottom: "",
            firstArg: "",
            init: "",
            keys: null,
            loop: "",
            shadowedProps: null,
            support: null,
            top: "",
            useHas: !1
        }, $ = {
            "boolean": !1,
            "function": !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        }, _ = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, ab = $[typeof window] && window || this,
        bb = $[typeof exports] && exports && !exports.nodeType && exports,
        cb = $[typeof module] && module && !module.nodeType && module,
        db = cb && cb.exports === bb && bb,
        eb = $[typeof global] && global;
    !eb || eb.global !== eb && eb.window !== eb || (ab = eb);
    var fb = o();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (ab._ = fb, define(function() {
        return fb
    })) : bb && cb ? db ? (cb.exports = fb)._ = fb : bb._ = fb : ab._ = fb
}.call(this), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdownToggle", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/popup.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope",
    function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function(d, f, g) {
            g = g || {};
            var h = a.defer(),
                i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                j = function() {
                    c.$apply(function() {
                        d.unbind(i, j), h.resolve(d)
                    })
                };
            return i && d.bind(i, j), b(function() {
                angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
            }), h.promise.cancel = function() {
                i && d.unbind(i, j), h.reject("Transition cancelled")
            }, h.promise
        }, f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }, h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }
]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition",
    function(a) {
        return {
            link: function(b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }
                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }

                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                        height: c[0].scrollHeight + "px"
                    }).then(g))
                }

                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                        height: "auto"
                    })
                }

                function h() {
                    if (k) k = !1, i(), c.css({
                        height: 0
                    });
                    else {
                        c.css({
                            height: c[0].scrollHeight + "px"
                        }); {
                            c[0].offsetWidth
                        }
                        c.removeClass("collapse in").addClass("collapsing"), e({
                            height: 0
                        }).then(i)
                    }
                }

                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }
                var j, k = !0;
                b.$watch(d.collapse, function(a) {
                    a ? h() : f()
                })
            }
        }
    }
]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig",
    function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function() {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(this.groups.indexOf(a), 1)
        }
    }
]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", ["$parse",
    function(a) {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/accordion/accordion-group.html",
            scope: {
                heading: "@"
            },
            controller: function() {
                this.setHeading = function(a) {
                    this.heading = a
                }
            },
            link: function(b, c, d, e) {
                var f, g;
                e.addGroup(b), b.isOpen = !1, d.isOpen && (f = a(d.isOpen), g = f.assign, b.$parent.$watch(f, function(a) {
                    b.isOpen = !! a
                })), b.$watch("isOpen", function(a) {
                    a && e.closeOthers(b), g && g(b.$parent, a)
                })
            }
        }
    }
]).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        compile: function(a, b, c) {
            return function(a, b, d, e) {
                e.setHeading(c(a, function() {}))
            }
        }
    }
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs",
    function(a, b) {
        a.closeable = "close" in b
    }
]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "=",
            close: "&"
        }
    }
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig",
    function(a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }
]).directive("btnRadio", function() {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function() {
                b.hasClass(e.activeClass) || a.$apply(function() {
                    f.$setViewValue(a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function() {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0],
                i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", "$q",
    function(a, b, c) {
        function d() {
            e();
            var c = +a.interval;
            !isNaN(c) && c >= 0 && (g = b(f, c))
        }

        function e() {
            g && (b.cancel(g), g = null)
        }

        function f() {
            h ? (a.next(), d()) : a.pause()
        }
        var g, h, i = this,
            j = i.slides = [],
            k = -1;
        i.currentSlide = null;
        var l = !1;
        i.select = function(e, f) {
            function g() {
                if (!l) {
                    if (i.currentSlide && angular.isString(f) && !a.noTransition && e.$element) {
                        e.$element.addClass(f); {
                            e.$element[0].offsetWidth
                        }
                        angular.forEach(j, function(a) {
                            angular.extend(a, {
                                direction: "",
                                entering: !1,
                                leaving: !1,
                                active: !1
                            })
                        }), angular.extend(e, {
                            direction: f,
                            active: !0,
                            entering: !0
                        }), angular.extend(i.currentSlide || {}, {
                            direction: f,
                            leaving: !0
                        }), a.$currentTransition = c(e.$element, {}),
                        function(b, c) {
                            a.$currentTransition.then(function() {
                                h(b, c)
                            }, function() {
                                h(b, c)
                            })
                        }(e, i.currentSlide)
                    } else h(e, i.currentSlide);
                    i.currentSlide = e, k = m, d()
                }
            }

            function h(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var m = j.indexOf(e);
            void 0 === f && (f = m > k ? "next" : "prev"), e && e !== i.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function() {
            l = !0
        }), i.indexOfSlide = function(a) {
            return j.indexOf(a)
        }, a.next = function() {
            var b = (k + 1) % j.length;
            return a.$currentTransition ? void 0 : i.select(j[b], "next")
        }, a.prev = function() {
            var b = 0 > k - 1 ? j.length - 1 : k - 1;
            return a.$currentTransition ? void 0 : i.select(j[b], "prev")
        }, a.select = function(a) {
            i.select(a)
        }, a.isActive = function(a) {
            return i.currentSlide === a
        }, a.slides = function() {
            return j
        }, a.$watch("interval", d), a.$on("$destroy", e), a.play = function() {
            h || (h = !0, d())
        }, a.pause = function() {
            a.noPause || (h = !1, e())
        }, i.addSlide = function(b, c) {
            b.$element = c, j.push(b), 1 === j.length || b.active ? (i.select(j[j.length - 1]), 1 == j.length && a.play()) : b.active = !1
        }, i.removeSlide = function(a) {
            var b = j.indexOf(a);
            j.splice(b, 1), j.length > 0 && a.active ? i.select(b >= j.length ? j[b - 1] : j[b]) : k > b && k--
        }
    }
]).directive("carousel", [
    function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }
]).directive("slide", ["$parse",
    function(a) {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/carousel/slide.html",
            scope: {},
            link: function(b, c, d, e) {
                if (d.active) {
                    var f = a(d.active),
                        g = f.assign,
                        h = b.active = f(b.$parent);
                    b.$watch(function() {
                        var a = f(b.$parent);
                        return a !== b.active && (a !== h ? h = b.active = a : g(b.$parent, a = h = b.active)), a
                    })
                }
                e.addSlide(b, c), b.$on("$destroy", function() {
                    e.removeSlide(b)
                }), b.$watch("active", function(a) {
                    a && e.select(b)
                })
            }
        }
    }
]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window",
    function(a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function(b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function(b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    }, f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {
                    width: g.width || b.prop("offsetWidth"),
                    height: g.height || b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offset: function(c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: d.width || c.prop("offsetWidth"),
                    height: d.height || c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].body.scrollTop || a[0].documentElement.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].body.scrollLeft || a[0].documentElement.scrollLeft)
                }
            }
        }
    }
]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.position"]).constant("datepickerConfig", {
    dayFormat: "dd",
    monthFormat: "MMMM",
    yearFormat: "yyyy",
    dayHeaderFormat: "EEE",
    dayTitleFormat: "MMMM yyyy",
    monthTitleFormat: "yyyy",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "dateFilter", "datepickerConfig",
    function(a, b, c, d) {
        function e(b, c) {
            return angular.isDefined(b) ? a.$parent.$eval(b) : c
        }

        function f(a, b) {
            return new Date(a, b, 0).getDate()
        }

        function g(a, b) {
            for (var c = new Array(b), d = a, e = 0; b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
            return c
        }

        function h(a, b, d, e) {
            return {
                date: a,
                label: c(a, b),
                selected: !! d,
                secondary: !! e
            }
        }
        var i = {
            day: e(b.dayFormat, d.dayFormat),
            month: e(b.monthFormat, d.monthFormat),
            year: e(b.yearFormat, d.yearFormat),
            dayHeader: e(b.dayHeaderFormat, d.dayHeaderFormat),
            dayTitle: e(b.dayTitleFormat, d.dayTitleFormat),
            monthTitle: e(b.monthTitleFormat, d.monthTitleFormat)
        }, j = e(b.startingDay, d.startingDay),
            k = e(b.yearRange, d.yearRange);
        this.minDate = d.minDate ? new Date(d.minDate) : null, this.maxDate = d.maxDate ? new Date(d.maxDate) : null, this.modes = [{
            name: "day",
            getVisibleDates: function(a, b) {
                var d = a.getFullYear(),
                    e = a.getMonth(),
                    k = new Date(d, e, 1),
                    l = j - k.getDay(),
                    m = l > 0 ? 7 - l : -l,
                    n = new Date(k),
                    o = 0;
                m > 0 && (n.setDate(-m + 1), o += m), o += f(d, e + 1), o += (7 - o % 7) % 7;
                for (var p = g(n, o), q = new Array(7), r = 0; o > r; r++) {
                    var s = new Date(p[r]);
                    p[r] = h(s, i.day, b && b.getDate() === s.getDate() && b.getMonth() === s.getMonth() && b.getFullYear() === s.getFullYear(), s.getMonth() !== e)
                }
                for (var t = 0; 7 > t; t++) q[t] = c(p[t].date, i.dayHeader);
                return {
                    objects: p,
                    title: c(a, i.dayTitle),
                    labels: q
                }
            },
            compare: function(a, b) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
            },
            split: 7,
            step: {
                months: 1
            }
        }, {
            name: "month",
            getVisibleDates: function(a, b) {
                for (var d = new Array(12), e = a.getFullYear(), f = 0; 12 > f; f++) {
                    var g = new Date(e, f, 1);
                    d[f] = h(g, i.month, b && b.getMonth() === f && b.getFullYear() === e)
                }
                return {
                    objects: d,
                    title: c(a, i.monthTitle)
                }
            },
            compare: function(a, b) {
                return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
            },
            split: 3,
            step: {
                years: 1
            }
        }, {
            name: "year",
            getVisibleDates: function(a, b) {
                for (var c = new Array(k), d = a.getFullYear(), e = parseInt((d - 1) / k, 10) * k + 1, f = 0; k > f; f++) {
                    var g = new Date(e + f, 0, 1);
                    c[f] = h(g, i.year, b && b.getFullYear() === g.getFullYear())
                }
                return {
                    objects: c,
                    title: [c[0].label, c[k - 1].label].join(" - ")
                }
            },
            compare: function(a, b) {
                return a.getFullYear() - b.getFullYear()
            },
            split: 5,
            step: {
                years: k
            }
        }], this.isDisabled = function(b, c) {
            var d = this.modes[c || 0];
            return this.minDate && d.compare(b, this.minDate) < 0 || this.maxDate && d.compare(b, this.maxDate) > 0 || a.dateDisabled && a.dateDisabled({
                date: b,
                mode: d.name
            })
        }
    }
]).directive("datepicker", ["dateFilter", "$parse", "datepickerConfig", "$log",
    function(a, b, c, d) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/datepicker.html",
            scope: {
                dateDisabled: "&"
            },
            require: ["datepicker", "?^ngModel"],
            controller: "DatepickerController",
            link: function(a, e, f, g) {
                function h() {
                    a.showWeekNumbers = 0 === o && q
                }

                function i(a, b) {
                    for (var c = []; a.length > 0;) c.push(a.splice(0, b));
                    return c
                }

                function j(b) {
                    var c = null,
                        e = !0;
                    n.$modelValue && (c = new Date(n.$modelValue), isNaN(c) ? (e = !1, d.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : b && (p = c)), n.$setValidity("date", e);
                    var f = m.modes[o],
                        g = f.getVisibleDates(p, c);
                    angular.forEach(g.objects, function(a) {
                        a.disabled = m.isDisabled(a.date, o)
                    }), n.$setValidity("date-disabled", !c || !m.isDisabled(c)), a.rows = i(g.objects, f.split), a.labels = g.labels || [], a.title = g.title
                }

                function k(a) {
                    o = a, h(), j()
                }

                function l(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }
                var m = g[0],
                    n = g[1];
                if (n) {
                    var o = 0,
                        p = new Date,
                        q = c.showWeeks;
                    f.showWeeks ? a.$parent.$watch(b(f.showWeeks), function(a) {
                        q = !! a, h()
                    }) : h(), f.min && a.$parent.$watch(b(f.min), function(a) {
                        m.minDate = a ? new Date(a) : null, j()
                    }), f.max && a.$parent.$watch(b(f.max), function(a) {
                        m.maxDate = a ? new Date(a) : null, j()
                    }), n.$render = function() {
                        j(!0)
                    }, a.select = function(a) {
                        if (0 === o) {
                            var b = n.$modelValue ? new Date(n.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                            b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), n.$setViewValue(b), j(!0)
                        } else p = a, k(o - 1)
                    }, a.move = function(a) {
                        var b = m.modes[o].step;
                        p.setMonth(p.getMonth() + a * (b.months || 0)), p.setFullYear(p.getFullYear() + a * (b.years || 0)), j()
                    }, a.toggleMode = function() {
                        k((o + 1) % m.modes.length)
                    }, a.getWeekNumber = function(b) {
                        return 0 === o && a.showWeekNumbers && 7 === b.length ? l(b[0].date) : null
                    }
                }
            }
        }
    }
]).constant("datepickerPopupConfig", {
    dateFormat: "yyyy-MM-dd",
    currentText: "Today",
    toggleWeeksText: "Weeks",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "datepickerPopupConfig", "datepickerConfig",
    function(a, b, c, d, e, f, g) {
        return {
            restrict: "EA",
            require: "ngModel",
            link: function(h, i, j, k) {
                function l(a) {
                    u ? u(h, !! a) : q.isOpen = !! a
                }

                function m(a) {
                    if (a) {
                        if (angular.isDate(a)) return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null
                }

                function n(a, c, d) {
                    a && (h.$watch(b(a), function(a) {
                        q[c] = a
                    }), y.attr(d || c, c))
                }

                function o() {
                    q.position = s ? d.offset(i) : d.position(i), q.position.top = q.position.top + i.prop("offsetHeight")
                }
                var p, q = h.$new(),
                    r = angular.isDefined(j.closeOnDateSelection) ? h.$eval(j.closeOnDateSelection) : f.closeOnDateSelection,
                    s = angular.isDefined(j.datepickerAppendToBody) ? h.$eval(j.datepickerAppendToBody) : f.appendToBody;
                j.$observe("datepickerPopup", function(a) {
                    p = a || f.dateFormat, k.$render()
                }), q.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$eval(j.showButtonBar) : f.showButtonBar, h.$on("$destroy", function() {
                    C.remove(), q.$destroy()
                }), j.$observe("currentText", function(a) {
                    q.currentText = angular.isDefined(a) ? a : f.currentText
                }), j.$observe("toggleWeeksText", function(a) {
                    q.toggleWeeksText = angular.isDefined(a) ? a : f.toggleWeeksText
                }), j.$observe("clearText", function(a) {
                    q.clearText = angular.isDefined(a) ? a : f.clearText
                }), j.$observe("closeText", function(a) {
                    q.closeText = angular.isDefined(a) ? a : f.closeText
                });
                var t, u;
                j.isOpen && (t = b(j.isOpen), u = t.assign, h.$watch(t, function(a) {
                    q.isOpen = !! a
                })), q.isOpen = t ? t(h) : !1;
                var v = function(a) {
                    q.isOpen && a.target !== i[0] && q.$apply(function() {
                        l(!1)
                    })
                }, w = function() {
                        q.$apply(function() {
                            l(!0)
                        })
                    }, x = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                x.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var y = angular.element(x.children()[0]),
                    z = {};
                j.datepickerOptions && (z = h.$eval(j.datepickerOptions), y.attr(angular.extend({}, z))), k.$parsers.unshift(m), q.dateSelection = function(a) {
                    angular.isDefined(a) && (q.date = a), k.$setViewValue(q.date), k.$render(), r && l(!1)
                }, i.bind("input change keyup", function() {
                    q.$apply(function() {
                        q.date = k.$modelValue
                    })
                }), k.$render = function() {
                    var a = k.$viewValue ? e(k.$viewValue, p) : "";
                    i.val(a), q.date = k.$modelValue
                }, n(j.min, "min"), n(j.max, "max"), j.showWeeks ? n(j.showWeeks, "showWeeks", "show-weeks") : (q.showWeeks = "show-weeks" in z ? z["show-weeks"] : g.showWeeks, y.attr("show-weeks", "showWeeks")), j.dateDisabled && y.attr("date-disabled", j.dateDisabled);
                var A = !1,
                    B = !1;
                q.$watch("isOpen", function(a) {
                    a ? (o(), c.bind("click", v), B && i.unbind("focus", w), i[0].focus(), A = !0) : (A && c.unbind("click", v), i.bind("focus", w), B = !0), u && u(h, a)
                }), q.today = function() {
                    q.dateSelection(new Date)
                }, q.clear = function() {
                    q.dateSelection(null)
                };
                var C = a(x)(q);
                s ? c.find("body").append(C) : i.after(C)
            }
        }
    }
]).directive("datepickerPopupWrap", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function(a, b) {
            b.bind("click", function(a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdownToggle", []).directive("dropdownToggle", ["$document", "$location",
    function(a) {
        var b = null,
            c = angular.noop;
        return {
            restrict: "CA",
            link: function(d, e) {
                d.$watch("$location.path", function() {
                    c()
                }), e.parent().bind("click", function() {
                    c()
                }), e.bind("click", function(d) {
                    var f = e === b;
                    d.preventDefault(), d.stopPropagation(), b && c(), f || e.hasClass("disabled") || e.prop("disabled") || (e.parent().addClass("open"), b = e, c = function(d) {
                        d && (d.preventDefault(), d.stopPropagation()), a.unbind("click", c), e.parent().removeClass("open"), c = angular.noop, b = null
                    }, a.bind("click", c))
                })
            }
        }
    }
]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                },
                top: function() {
                    return a[a.length - 1]
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0]
                },
                length: function() {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout",
    function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            link: function(b) {
                b.animate = !1, a(function() {
                    b.animate = !0
                })
            }
        }
    }
]).directive("modalWindow", ["$modalStack", "$timeout",
    function(a, b) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: "template/modal/window.html",
            link: function(c, d, e) {
                c.windowClass = e.windowClass || "", b(function() {
                    c.animate = !0, d[0].focus()
                }), c.close = function(b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }
        }
    }
]).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap",
    function(a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
            return a
        }

        function h(a) {
            var b = c.find("body").eq(0),
                d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, i), b.toggleClass(m, n.length() > 0)
        }

        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function() {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }

        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }
            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function() {
                    b.cancel(i), g(), d.$apply()
                })
            } else b(g, 0)
        }
        var k, l, m = "modal-open",
            n = f.createNew(),
            o = {};
        return e.$watch(g, function(a) {
            l && (l.index = a)
        }), c.bind("keydown", function(a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && e.$apply(function() {
                o.dismiss(b.key)
            }))
        }), o.open = function(a, b) {
            n.add(a, {
                deferred: b.deferred,
                modalScope: b.scope,
                backdrop: b.backdrop,
                keyboard: b.keyboard
            });
            var f = c.find("body").eq(0),
                h = g();
            h >= 0 && !k && (l = e.$new(!0), l.index = h, k = d("<div modal-backdrop></div>")(l), f.append(k));
            var i = angular.element("<div modal-window></div>");
            i.attr("window-class", b.windowClass), i.attr("index", n.length() - 1), i.attr("animate", "animate"), i.html(b.content);
            var j = d(i)(b.scope);
            n.top().value.modalDomEl = j, f.append(j), f.addClass(m)
        }, o.close = function(a, b) {
            var c = n.get(a).value;
            c && (c.deferred.resolve(b), h(a))
        }, o.dismiss = function(a, b) {
            var c = n.get(a).value;
            c && (c.deferred.reject(b), h(a))
        }, o.dismissAll = function(a) {
            for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function() {
            return n.top()
        }, o
    }
]).provider("$modal", function() {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack",
            function(b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(a.templateUrl, {
                        cache: f
                    }).then(function(a) {
                        return a.data
                    })
                }

                function j(a) {
                    var c = [];
                    return angular.forEach(a, function(a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }
                var k = {};
                return k.open = function(b) {
                    var e = d.defer(),
                        f = d.defer(),
                        k = {
                            result: e.promise,
                            opened: f.promise,
                            close: function(a) {
                                h.close(k, a)
                            },
                            dismiss: function(a) {
                                h.dismiss(k, a)
                            }
                        };
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function(a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {}, j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i)), h.open(k, {
                            scope: d,
                            deferred: e,
                            content: a[0],
                            backdrop: b.backdrop,
                            keyboard: b.keyboard,
                            windowClass: b.windowClass
                        })
                    }, function(a) {
                        e.reject(a)
                    }), l.then(function() {
                        f.resolve(!0)
                    }, function() {
                        f.reject(!1)
                    }), k
                }, k
            }
        ]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", "$interpolate",
    function(a, b, c, d) {
        var e = this,
            f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function(d) {
            b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
                e.itemsPerPage = parseInt(b, 10), a.totalPages = e.calculateTotalPages()
            }) : this.itemsPerPage = d
        }, this.noPrevious = function() {
            return 1 === this.page
        }, this.noNext = function() {
            return this.page === a.totalPages
        }, this.isActive = function(a) {
            return this.page === a
        }, this.calculateTotalPages = function() {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.getAttributeValue = function(b, c, e) {
            return angular.isDefined(b) ? e ? d(b)(a.$parent) : a.$parent.$eval(b) : c
        }, this.render = function() {
            this.page = parseInt(a.page, 10) || 1, this.page > 0 && this.page <= a.totalPages && (a.pages = this.getPages(this.page, a.totalPages))
        }, a.selectPage = function(b) {
            !e.isActive(b) && b > 0 && b <= a.totalPages && (a.page = b, a.onSelectPage({
                page: b
            }))
        }, a.$watch("page", function() {
            e.render()
        }), a.$watch("totalItems", function() {
            a.totalPages = e.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), e.page > b ? a.selectPage(b) : e.render()
        })
    }
]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig",
    function(a, b) {
        return {
            restrict: "EA",
            scope: {
                page: "=",
                totalItems: "=",
                onSelectPage: " &"
            },
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function(c, d, e, f) {
                function g(a, b, c, d) {
                    return {
                        number: a,
                        text: b,
                        active: c,
                        disabled: d
                    }
                }
                var h, i = f.getAttributeValue(e.boundaryLinks, b.boundaryLinks),
                    j = f.getAttributeValue(e.directionLinks, b.directionLinks),
                    k = f.getAttributeValue(e.firstText, b.firstText, !0),
                    l = f.getAttributeValue(e.previousText, b.previousText, !0),
                    m = f.getAttributeValue(e.nextText, b.nextText, !0),
                    n = f.getAttributeValue(e.lastText, b.lastText, !0),
                    o = f.getAttributeValue(e.rotate, b.rotate);
                f.init(b.itemsPerPage), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                    h = parseInt(a, 10), f.render()
                }), f.getPages = function(a, b) {
                    var c = [],
                        d = 1,
                        e = b,
                        p = angular.isDefined(h) && b > h;
                    p && (o ? (d = Math.max(a - Math.floor(h / 2), 1), e = d + h - 1, e > b && (e = b, d = e - h + 1)) : (d = (Math.ceil(a / h) - 1) * h + 1, e = Math.min(d + h - 1, b)));
                    for (var q = d; e >= q; q++) {
                        var r = g(q, q, f.isActive(q), !1);
                        c.push(r)
                    }
                    if (p && !o) {
                        if (d > 1) {
                            var s = g(d - 1, "...", !1, !1);
                            c.unshift(s)
                        }
                        if (b > e) {
                            var t = g(e + 1, "...", !1, !1);
                            c.push(t)
                        }
                    }
                    if (j) {
                        var u = g(a - 1, l, !1, f.noPrevious());
                        c.unshift(u);
                        var v = g(a + 1, m, !1, f.noNext());
                        c.push(v)
                    }
                    if (i) {
                        var w = g(1, k, !1, f.noPrevious());
                        c.unshift(w);
                        var x = g(b, n, !1, f.noNext());
                        c.push(x)
                    }
                    return c
                }
            }
        }
    }
]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig",
    function(a) {
        return {
            restrict: "EA",
            scope: {
                page: "=",
                totalItems: "=",
                onSelectPage: " &"
            },
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function(b, c, d, e) {
                function f(a, b, c, d, e) {
                    return {
                        number: a,
                        text: b,
                        disabled: c,
                        previous: i && d,
                        next: i && e
                    }
                }
                var g = e.getAttributeValue(d.previousText, a.previousText, !0),
                    h = e.getAttributeValue(d.nextText, a.nextText, !0),
                    i = e.getAttributeValue(d.align, a.align);
                e.init(a.itemsPerPage), e.getPages = function(a) {
                    return [f(a - 1, g, e.noPrevious(), !0, !1), f(a + 1, h, e.noNext(), !1, !0)]
                }
            }
        }
    }
]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0
    }, c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        }, d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate",
        function(e, f, g, h, i, j, k) {
            return function(e, l, m) {
                function n(a) {
                    var b = a || o.trigger || m,
                        d = c[b] || b;
                    return {
                        show: b,
                        hide: d
                    }
                }
                var o = angular.extend({}, b, d),
                    p = a(e),
                    q = k.startSymbol(),
                    r = k.endSymbol(),
                    s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
                return {
                    restrict: "EA",
                    scope: !0,
                    compile: function() {
                        var a = f(s);
                        return function(b, c, d) {
                            function f() {
                                b.tt_isOpen ? m() : k()
                            }

                            function k() {
                                (!z || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? (v = g(p, b.tt_popupDelay, !1), v.then(function(a) {
                                    a()
                                })) : p()())
                            }

                            function m() {
                                b.$apply(function() {
                                    q()
                                })
                            }

                            function p() {
                                return b.tt_content ? (r(), u && g.cancel(u), t.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), w ? i.find("body").append(t) : c.after(t), A(), b.tt_isOpen = !0, b.$digest(), A) : angular.noop
                            }

                            function q() {
                                b.tt_isOpen = !1, g.cancel(v), b.tt_animation ? u = g(s, 500) : s()
                            }

                            function r() {
                                t && s(), t = a(b, function() {}), b.$digest()
                            }

                            function s() {
                                t && (t.remove(), t = null)
                            }
                            var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1,
                                x = n(void 0),
                                y = !1,
                                z = angular.isDefined(d[l + "Enable"]),
                                A = function() {
                                    var a, d, e, f;
                                    switch (a = w ? j.offset(c) : j.position(c), d = t.prop("offsetWidth"), e = t.prop("offsetHeight"), b.tt_placement) {
                                        case "right":
                                            f = {
                                                top: a.top + a.height / 2 - e / 2,
                                                left: a.left + a.width
                                            };
                                            break;
                                        case "bottom":
                                            f = {
                                                top: a.top + a.height,
                                                left: a.left + a.width / 2 - d / 2
                                            };
                                            break;
                                        case "left":
                                            f = {
                                                top: a.top + a.height / 2 - e / 2,
                                                left: a.left - d
                                            };
                                            break;
                                        default:
                                            f = {
                                                top: a.top - e,
                                                left: a.left + a.width / 2 - d / 2
                                            }
                                    }
                                    f.top += "px", f.left += "px", t.css(f)
                                };
                            b.tt_isOpen = !1, d.$observe(e, function(a) {
                                b.tt_content = a, !a && b.tt_isOpen && q()
                            }), d.$observe(l + "Title", function(a) {
                                b.tt_title = a
                            }), d.$observe(l + "Placement", function(a) {
                                b.tt_placement = angular.isDefined(a) ? a : o.placement
                            }), d.$observe(l + "PopupDelay", function(a) {
                                var c = parseInt(a, 10);
                                b.tt_popupDelay = isNaN(c) ? o.popupDelay : c
                            });
                            var B = function() {
                                y && (c.unbind(x.show, k), c.unbind(x.hide, m))
                            };
                            d.$observe(l + "Trigger", function(a) {
                                B(), x = n(a), x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m)), y = !0
                            });
                            var C = b.$eval(d[l + "Animation"]);
                            b.tt_animation = angular.isDefined(C) ? !! C : o.animation, d.$observe(l + "AppendToBody", function(a) {
                                w = angular.isDefined(a) ? h(a)(b) : w
                            }), w && b.$on("$locationChangeSuccess", function() {
                                b.tt_isOpen && q()
                            }), b.$on("$destroy", function() {
                                g.cancel(u), g.cancel(v), B(), s()
                            })
                        }
                    }
                }
            }
        }
    ]
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip",
    function(a) {
        return a("tooltip", "tooltip", "mouseenter")
    }
]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip",
    function(a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }
]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip",
    function(a) {
        return a("popover", "popover", "click")
    }
]), angular.module("ui.bootstrap.progressbar", ["ui.bootstrap.transition"]).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", "$transition",
    function(a, b, c, d) {
        var e = this,
            f = [],
            g = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max,
            h = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.addBar = function(a, b) {
            var c = 0,
                d = a.$parent.$index;
            angular.isDefined(d) && f[d] && (c = f[d].value), f.push(a), this.update(b, a.value, c), a.$watch("value", function(a, c) {
                a !== c && e.update(b, a, c)
            }), a.$on("$destroy", function() {
                e.removeBar(a)
            })
        }, this.update = function(a, b, c) {
            var e = this.getPercentage(b);
            h ? (a.css("width", this.getPercentage(c) + "%"), d(a, {
                width: e + "%"
            })) : a.css({
                transition: "none",
                width: e + "%"
            })
        }, this.removeBar = function(a) {
            f.splice(f.indexOf(a), 1)
        }, this.getPercentage = function(a) {
            return Math.round(100 * a / g)
        }
    }
]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        template: '<div class="progress" ng-transclude></div>'
    }
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "$parse", "ratingConfig",
    function(a, b, c, d) {
        this.maxRange = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : d.max, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : d.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : d.stateOff, this.createRateObjects = function(a) {
            for (var b = {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, c = 0, d = a.length; d > c; c++) a[c] = angular.extend({
                index: c
            }, b, a[c]);
            return a
        }, a.range = this.createRateObjects(angular.isDefined(b.ratingStates) ? angular.copy(a.$parent.$eval(b.ratingStates)) : new Array(this.maxRange)), a.rate = function(b) {
            a.value === b || a.readonly || (a.value = b)
        }, a.enter = function(b) {
            a.readonly || (a.val = b), a.onHover({
                value: b
            })
        }, a.reset = function() {
            a.val = angular.copy(a.value), a.onLeave()
        }, a.$watch("value", function(b) {
            a.val = b
        }), a.readonly = !1, b.readonly && a.$parent.$watch(c(b.readonly), function(b) {
            a.readonly = !! b
        })
    }
]).directive("rating", function() {
    return {
        restrict: "EA",
        scope: {
            value: "=",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope",
    function(a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function(a) {
            angular.forEach(c, function(a) {
                a.active = !1
            }), a.active = !0
        }, b.addTab = function(a) {
            c.push(a), (1 === c.length || a.active) && b.select(a)
        }, b.removeTab = function(a) {
            var d = c.indexOf(a);
            if (a.active && c.length > 1) {
                var e = d == c.length - 1 ? d - 1 : d + 1;
                b.select(c[e])
            }
            c.splice(d, 1)
        }
    }
]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {},
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1, a.type = angular.isDefined(c.type) ? a.$parent.$eval(c.type) : "tabs"
        }
    }
}).directive("tab", ["$parse",
    function(a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function() {},
            compile: function(b, c, d) {
                return function(b, c, e, f) {
                    var g, h;
                    e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function(a, c) {
                        a !== c && (b.active = !! a)
                    }), b.active = g(b.$parent)) : h = g = angular.noop, b.$watch("active", function(a) {
                        h(b.$parent, a), a ? (f.select(b), b.onSelect()) : b.onDeselect()
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                        b.disabled = !! a
                    }), b.select = function() {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function() {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }
        }
    }
]).directive("tabHeadingTransclude", [
    function() {
        return {
            restrict: "A",
            require: "^tab",
            link: function(a, b) {
                a.$watch("headingElement", function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }
]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).directive("timepicker", ["$parse", "$log", "timepickerConfig", "$locale",
    function(a, b, c, d) {
        return {
            restrict: "EA",
            require: "?^ngModel",
            replace: !0,
            scope: {},
            templateUrl: "template/timepicker/timepicker.html",
            link: function(e, f, g, h) {
                function i() {
                    var a = parseInt(e.hours, 10),
                        b = e.showMeridian ? a > 0 && 13 > a : a >= 0 && 24 > a;
                    return b ? (e.showMeridian && (12 === a && (a = 0), e.meridian === q[1] && (a += 12)), a) : void 0
                }

                function j() {
                    var a = parseInt(e.minutes, 10);
                    return a >= 0 && 60 > a ? a : void 0
                }

                function k(a) {
                    return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
                }

                function l(a) {
                    m(), h.$setViewValue(new Date(p)), n(a)
                }

                function m() {
                    h.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1
                }

                function n(a) {
                    var b = p.getHours(),
                        c = p.getMinutes();
                    e.showMeridian && (b = 0 === b || 12 === b ? 12 : b % 12), e.hours = "h" === a ? b : k(b), e.minutes = "m" === a ? c : k(c), e.meridian = p.getHours() < 12 ? q[0] : q[1]
                }

                function o(a) {
                    var b = new Date(p.getTime() + 6e4 * a);
                    p.setHours(b.getHours(), b.getMinutes()), l()
                }
                if (h) {
                    var p = new Date,
                        q = angular.isDefined(g.meridians) ? e.$parent.$eval(g.meridians) : c.meridians || d.DATETIME_FORMATS.AMPMS,
                        r = c.hourStep;
                    g.hourStep && e.$parent.$watch(a(g.hourStep), function(a) {
                        r = parseInt(a, 10)
                    });
                    var s = c.minuteStep;
                    g.minuteStep && e.$parent.$watch(a(g.minuteStep), function(a) {
                        s = parseInt(a, 10)
                    }), e.showMeridian = c.showMeridian, g.showMeridian && e.$parent.$watch(a(g.showMeridian), function(a) {
                        if (e.showMeridian = !! a, h.$error.time) {
                            var b = i(),
                                c = j();
                            angular.isDefined(b) && angular.isDefined(c) && (p.setHours(b), l())
                        } else n()
                    });
                    var t = f.find("input"),
                        u = t.eq(0),
                        v = t.eq(1),
                        w = angular.isDefined(g.mousewheel) ? e.$eval(g.mousewheel) : c.mousewheel;
                    if (w) {
                        var x = function(a) {
                            a.originalEvent && (a = a.originalEvent);
                            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                            return a.detail || b > 0
                        };
                        u.bind("mousewheel wheel", function(a) {
                            e.$apply(x(a) ? e.incrementHours() : e.decrementHours()), a.preventDefault()
                        }), v.bind("mousewheel wheel", function(a) {
                            e.$apply(x(a) ? e.incrementMinutes() : e.decrementMinutes()), a.preventDefault()
                        })
                    }
                    if (e.readonlyInput = angular.isDefined(g.readonlyInput) ? e.$eval(g.readonlyInput) : c.readonlyInput, e.readonlyInput) e.updateHours = angular.noop, e.updateMinutes = angular.noop;
                    else {
                        var y = function(a, b) {
                            h.$setViewValue(null), h.$setValidity("time", !1), angular.isDefined(a) && (e.invalidHours = a), angular.isDefined(b) && (e.invalidMinutes = b)
                        };
                        e.updateHours = function() {
                            var a = i();
                            angular.isDefined(a) ? (p.setHours(a), l("h")) : y(!0)
                        }, u.bind("blur", function() {
                            !e.validHours && e.hours < 10 && e.$apply(function() {
                                e.hours = k(e.hours)
                            })
                        }), e.updateMinutes = function() {
                            var a = j();
                            angular.isDefined(a) ? (p.setMinutes(a), l("m")) : y(void 0, !0)
                        }, v.bind("blur", function() {
                            !e.invalidMinutes && e.minutes < 10 && e.$apply(function() {
                                e.minutes = k(e.minutes)
                            })
                        })
                    }
                    h.$render = function() {
                        var a = h.$modelValue ? new Date(h.$modelValue) : null;
                        isNaN(a) ? (h.$setValidity("time", !1), b.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (p = a), m(), n())
                    }, e.incrementHours = function() {
                        o(60 * r)
                    }, e.decrementHours = function() {
                        o(60 * -r)
                    }, e.incrementMinutes = function() {
                        o(s)
                    }, e.decrementMinutes = function() {
                        o(-s)
                    }, e.toggleMeridian = function() {
                        o(720 * (p.getHours() < 12 ? 1 : -1))
                    }
                }
            }
        }
    }
]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse",
    function(a) {
        var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
        return {
            parse: function(c) {
                var d = c.match(b);
                if (!d) throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + c + "'.");
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }
]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser",
    function(a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function(i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1,
                    o = i.$eval(k.typeaheadWaitMs) || 0,
                    p = i.$eval(k.typeaheadEditable) !== !1,
                    q = b(k.typeaheadLoading).assign || angular.noop,
                    r = b(k.typeaheadOnSelect),
                    s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                    t = k.typeaheadAppendToBody ? b(k.typeaheadAppendToBody) : !1,
                    u = b(k.ngModel).assign,
                    v = g.parse(k.typeahead),
                    w = angular.element("<div typeahead-popup></div>");
                w.attr({
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(k.typeaheadTemplateUrl) && w.attr("template-url", k.typeaheadTemplateUrl);
                var x = i.$new();
                i.$on("$destroy", function() {
                    x.$destroy()
                });
                var y = function() {
                    x.matches = [], x.activeIdx = -1
                }, z = function(a) {
                        var b = {
                            $viewValue: a
                        };
                        q(i, !0), c.when(v.source(i, b)).then(function(c) {
                            if (a === l.$viewValue && m) {
                                if (c.length > 0) {
                                    x.activeIdx = 0, x.matches.length = 0;
                                    for (var d = 0; d < c.length; d++) b[v.itemName] = c[d], x.matches.push({
                                        label: v.viewMapper(x, b),
                                        model: c[d]
                                    });
                                    x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight")
                                } else y();
                                q(i, !1)
                            }
                        }, function() {
                            y(), q(i, !1)
                        })
                    };
                y(), x.query = void 0;
                var A;
                l.$parsers.unshift(function(a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (A && d.cancel(A), A = d(function() {
                        z(a)
                    }, o)) : z(a) : (q(i, !1), y()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function(a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a)
                }), x.select = function(a) {
                    var b, c, d = {};
                    d[v.itemName] = c = x.matches[a].model, b = v.modelMapper(i, d), u(i, b), l.$setValidity("editable", !0), r(i, {
                        $item: c,
                        $model: b,
                        $label: v.viewMapper(i, d)
                    }), y(), j[0].focus()
                }, j.bind("keydown", function(a) {
                    0 !== x.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                        x.select(x.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), y(), x.$digest()))
                }), j.bind("blur", function() {
                    m = !1
                });
                var B = function(a) {
                    j[0] !== a.target && (y(), x.$digest())
                };
                e.bind("click", B), i.$on("$destroy", function() {
                    e.unbind("click", B)
                });
                var C = a(w)(x);
                t ? e.find("body").append(C) : j.after(C)
            }
        }
    }
]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse",
    function(a, b, c, d) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function(e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {
                    cache: b
                }).success(function(a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }
        }
    }
]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? b.replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache",
    function(a) {
        a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')
    }
]), angular.module("template/accordion/accordion.html", []).run(["$templateCache",
    function(a) {
        a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }
]), angular.module("template/alert/alert.html", []).run(["$templateCache",
    function(a) {
        a.put("template/alert/alert.html", "<div class='alert' ng-class='\"alert-\" + (type || \"warning\")'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")
    }
]), angular.module("template/carousel/carousel.html", []).run(["$templateCache",
    function(a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides().length > 1"><span class="icon-prev"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides().length > 1"><span class="icon-next"></span></a>\n</div>\n')
    }
]), angular.module("template/carousel/slide.html", []).run(["$templateCache",
    function(a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }
]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/datepicker.html", '<table>\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-default btn-sm btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr ng-show="labels.length > 0" class="h6">\n      <th ng-show="showWeekNumbers" class="text-center">#</th>\n      <th ng-repeat="label in labels" class="text-center">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{\'text-muted\': dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/datepicker/popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\">\n	<li ng-transclude></li>\n" + '	<li ng-show="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="today()">{{currentText}}</button>\n			<button type="button" class="btn btn-sm btn-default" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="clear()">{{clearText}}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button>\n	</li>\n</ul>\n')
    }
]), angular.module("template/modal/backdrop.html", []).run(["$templateCache",
    function(a) {
        a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>')
    }
]), angular.module("template/modal/window.html", []).run(["$templateCache",
    function(a) {
        a.put("template/modal/window.html", '<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog"><div class="modal-content" ng-transclude></div></div>\n</div>')
    }
]), angular.module("template/pagination/pager.html", []).run(["$templateCache",
    function(a) {
        a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')
    }
]), angular.module("template/pagination/pagination.html", []).run(["$templateCache",
    function(a) {
        a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>')
    }
]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }
]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }
]), angular.module("template/popover/popover.html", []).run(["$templateCache",
    function(a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }
]), angular.module("template/progressbar/bar.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progress.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/progressbar.html", '<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div></div>')
    }
]), angular.module("template/rating/rating.html", []).run(["$templateCache",
    function(a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()">\n    <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < val && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')"></i>\n</span>')
    }
]), angular.module("template/tabs/tab.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }
]), angular.module("template/tabs/tabset-titles.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tabs/tabset-titles.html", "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")
    }
]), angular.module("template/tabs/tabset.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tabs/tabset.html", '\n<div class="tabbable">\n  <ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }
]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache",
    function(a) {
        a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
    }
]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache",
    function(a) {
        a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }
]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
    }
]),
function(a, b) {
    angular.module("growlNotifications.config", []).value("growlNotifications.config", {
        debug: !0
    }), angular.module("growlNotifications.directives", []), angular.module("growlNotifications.filters", []), angular.module("growlNotifications.services", []), angular.module("growlNotifications", ["growlNotifications.config", "growlNotifications.directives", "growlNotifications.filters", "growlNotifications.services"]), angular.module("growlNotifications.directives").directive("growlNotification", ["growlNotifications", "$sce", "$interpolate",
        function(a, c, d) {
            var e = {
                message: "",
                type: "info",
                ttl: 5e3
            };
            return {
                restrict: "AE",
                replace: !0,
                template: "",
                transclude: !0,
                link: function(f, g, h, i, j) {
                    var k = angular.extend({}, e, f.$eval(h.growlNotification));
                    j(function(e, f) {
                        var g, h, i, j;
                        g = angular.element(b.createElement("div")), g.append(e), h = g.html(), i = d(h), h = i(f), j = c.trustAsHtml(h), a.add(j, k.type, k.ttl)
                    })
                }
            }
        }
    ]), angular.module("growlNotifications.directives").directive("growlNotifications", ["growlNotifications",
        function(a) {
            return {
                restrict: "AE",
                replace: !1,
                scope: {},
                template: ['<ul class="list-unstyled">', '   <li ng-repeat="(id, notification) in notifications">', '       <div class="{{cssPrefix}} {{cssPrefix}}-{{notification.type}}">', '           <div ng-bind-html="notification.message">', "           </div>", "       </div>", "   </li>", "</ul>"].join("\n"),
                link: function(b) {
                    b.cssPrefix = a.options.cssPrefix, b.notifications = a.notifications
                }
            }
        }
    ]), angular.module("growlNotifications.services").provider("growlNotifications", [
        function() {
            var a = {
                ttl: 5e3,
                type: "info",
                cssPrefix: "alert"
            };
            this.setOptions = function(b) {
                return angular.extend(a, b), this
            }, this.ttl = function(b) {
                return angular.isDefined(b) ? (a.ttl = b, this) : a.ttl
            }, this.type = function(b) {
                return angular.isDefined(b) ? (a.type = b, this) : a.type
            }, this.cssPrefix = function(b) {
                return angular.isDefined(b) ? (a.cssPrefix = b, this) : a.cssPrefix
            }, this.$get = ["$timeout", "$rootScope",
                function(b, c) {
                    function d() {
                        this._notifications = {}, this._index = 0, this.options = a, Object.defineProperty(this, "notifications", {
                            get: function() {
                                return this._notifications
                            }
                        })
                    }
                    return d.prototype._broadcastUpdate = function() {
                        c.$broadcast("growlNotifications::update", this.notifications)
                    }, d.prototype.add = function(c, d, e) {
                        var f, g = this._index++,
                            h = this;
                        return f = {
                            message: c ? c.toString() : "",
                            type: d ? d.toString() : a.type,
                            ttl: e ? parseInt(e, 10) : a.ttl
                        }, this._notifications[g] = f, b(function() {
                            h.remove(g)
                        }, f.ttl), this._broadcastUpdate(), g
                    }, d.prototype.remove = function(a) {
                        return this._notifications.hasOwnProperty(a) && (delete this._notifications[a], this._broadcastUpdate()), this
                    }, new d
                }
            ]
        }
    ])
}(window, document);
