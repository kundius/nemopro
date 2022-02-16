"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.6.0",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function j(e, t) {
      return e === t && (l = !0), 0;
    },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
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
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0;
  }

  function Te() {
    return !1;
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ee(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Se(this, e, Ce), !1;
      },
      trigger: function trigger() {
        return Se(this, e), !0;
      },
      _default: function _default() {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Le(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l));
      }
    }

    return n;
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Le(o[r], a[r]);
      } else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function Re(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Me = function Me(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function Fe(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Be.length;

      while (n--) {
        if ((e = Be[n] + t) in $e) return e;
      }
    }(e) || e);
  }

  var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ge = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Je(e, t, n) {
    var r = Re(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
      et,
      tt,
      nt,
      rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }

  function st(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function lt(o, e, t) {
    var n,
        a,
        r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ze || at(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = lt(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && it.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
      ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ct = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;

    ft[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ");
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = vt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function xt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
      wt = {
    guid: Date.now()
  },
      Tt = /\?/;

  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}

    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };

  var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      At(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      At(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Wt(t, i, o, a) {
    var s = {},
        u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function Ft(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = qt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
    0: 200,
    1223: 204
  },
      $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || $t && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });

  var _t,
      zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;

  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Vt = C.jQuery,
      Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 8.0.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 14, 2022
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function t(s, a) {
    void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(function (i) {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function a() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }

  var i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function r() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }

  var n = /*#__PURE__*/function (_Array) {
    _inherits(n, _Array);

    var _super = _createSuper(n);

    function n(e) {
      var _this;

      _classCallCheck(this, n);

      "number" == typeof e ? _this = _super.call(this, e) : (_this = _super.call.apply(_super, [this].concat(_toConsumableArray(e || []))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this)));
      return _possibleConstructorReturn(_this);
    }

    return n;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function l(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, _toConsumableArray(l(e))) : t.push(e);
    }), t;
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function d(e, t) {
    var s = r(),
        i = a();
    var l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);

    if ("string" == typeof e) {
      var _s = e.trim();

      if (_s.indexOf("<") >= 0 && _s.indexOf(">") >= 0) {
        var _e = "div";
        0 === _s.indexOf("<li") && (_e = "ul"), 0 === _s.indexOf("<tr") && (_e = "tbody"), 0 !== _s.indexOf("<td") && 0 !== _s.indexOf("<th") || (_e = "tr"), 0 === _s.indexOf("<tbody") && (_e = "table"), 0 === _s.indexOf("<option") && (_e = "select");

        var _t = i.createElement(_e);

        _t.innerHTML = _s;

        for (var _e2 = 0; _e2 < _t.childNodes.length; _e2 += 1) {
          l.push(_t.childNodes[_e2]);
        }
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        var s = [],
            a = t.querySelectorAll(e);

        for (var _e3 = 0; _e3 < a.length; _e3 += 1) {
          s.push(a[_e3]);
        }

        return s;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }

    return new n(function (e) {
      var t = [];

      for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
        -1 === t.indexOf(e[_s2]) && t.push(e[_s2]);
      }

      return t;
    }(l));
  }

  d.fn = n.prototype;
  var c = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(a));
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(a));
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      return o(this, function (e) {
        return a.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = l(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        a.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
        if (2 === arguments.length) this[_s3].setAttribute(e, t);else for (var _t2 in e) {
          this[_s3][_t2] = e[_t2], this[_s3].setAttribute(_t2, e[_t2]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t3 = 0; _t3 < this.length; _t3 += 1) {
        this[_t3].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var _t4 = 0; _t4 < this.length; _t4 += 1) {
        this[_t4].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
        this[_t5].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
      }

      return this;
    },
    on: function on() {
      var _t7, _t8;

      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = t[0],
          i = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;
        if (!t) return;
        var s = e.target.dom7EventData || [];
        if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);else {
          var _e4 = d(t).parents();

          for (var _t6 = 0; _t6 < _e4.length; _t6 += 1) {
            d(_e4[_t6]).is(i) && r.apply(_e4[_t6], s);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && ((_t7 = t, _t8 = _slicedToArray(_t7, 3), a = _t8[0], r = _t8[1], n = _t8[2], _t7), i = void 0), n || (n = !1);
      var c = a.split(" ");
      var p;

      for (var _e5 = 0; _e5 < this.length; _e5 += 1) {
        var _t9 = this[_e5];
        if (i) for (p = 0; p < c.length; p += 1) {
          var _e6 = c[p];
          _t9.dom7LiveListeners || (_t9.dom7LiveListeners = {}), _t9.dom7LiveListeners[_e6] || (_t9.dom7LiveListeners[_e6] = []), _t9.dom7LiveListeners[_e6].push({
            listener: r,
            proxyListener: l
          }), _t9.addEventListener(_e6, l, n);
        } else for (p = 0; p < c.length; p += 1) {
          var _e7 = c[p];
          _t9.dom7Listeners || (_t9.dom7Listeners = {}), _t9.dom7Listeners[_e7] || (_t9.dom7Listeners[_e7] = []), _t9.dom7Listeners[_e7].push({
            listener: r,
            proxyListener: o
          }), _t9.addEventListener(_e7, o, n);
        }
      }

      return this;
    },
    off: function off() {
      var _t10, _t11;

      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
        t[s] = arguments[s];
      }

      var a = t[0],
          i = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && ((_t10 = t, _t11 = _slicedToArray(_t10, 3), a = _t11[0], r = _t11[1], n = _t11[2], _t10), i = void 0), n || (n = !1);
      var l = a.split(" ");

      for (var _e8 = 0; _e8 < l.length; _e8 += 1) {
        var _t12 = l[_e8];

        for (var _e9 = 0; _e9 < this.length; _e9 += 1) {
          var _s4 = this[_e9];

          var _a = void 0;

          if (!i && _s4.dom7Listeners ? _a = _s4.dom7Listeners[_t12] : i && _s4.dom7LiveListeners && (_a = _s4.dom7LiveListeners[_t12]), _a && _a.length) for (var _e10 = _a.length - 1; _e10 >= 0; _e10 -= 1) {
            var _i2 = _a[_e10];
            r && _i2.listener === r || r && _i2.listener && _i2.listener.dom7proxy && _i2.listener.dom7proxy === r ? (_s4.removeEventListener(_t12, _i2.proxyListener, n), _a.splice(_e10, 1)) : r || (_s4.removeEventListener(_t12, _i2.proxyListener, n), _a.splice(_e10, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      var e = r();

      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) {
        s[a] = arguments[a];
      }

      var i = s[0].split(" "),
          n = s[1];

      for (var _t13 = 0; _t13 < i.length; _t13 += 1) {
        var _a2 = i[_t13];

        for (var _t14 = 0; _t14 < this.length; _t14 += 1) {
          var _i3 = this[_t14];

          if (e.CustomEvent) {
            var _t15 = new e.CustomEvent(_a2, {
              detail: n,
              bubbles: !0,
              cancelable: !0
            });

            _i3.dom7EventData = s.filter(function (e, t) {
              return t > 0;
            }), _i3.dispatchEvent(_t15), _i3.dom7EventData = [], delete _i3.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function s(a) {
        a.target === this && (e.call(this, a), t.off("transitionend", s));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e11 = this.styles();

          return this[0].offsetWidth + parseFloat(_e11.getPropertyValue("margin-right")) + parseFloat(_e11.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e12 = this.styles();

          return this[0].offsetHeight + parseFloat(_e12.getPropertyValue("margin-top")) + parseFloat(_e12.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e13 = r(),
            _t16 = a(),
            _s5 = this[0],
            _i4 = _s5.getBoundingClientRect(),
            _n2 = _t16.body,
            _l = _s5.clientTop || _n2.clientTop || 0,
            _o = _s5.clientLeft || _n2.clientLeft || 0,
            _d2 = _s5 === _e13 ? _e13.scrollY : _s5.scrollTop,
            _c = _s5 === _e13 ? _e13.scrollX : _s5.scrollLeft;

        return {
          top: _i4.top + _d2 - _l,
          left: _i4.left + _c - _o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var s = r();
      var a;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var _t17 in e) {
              this[a].style[_t17] = e[_t17];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, s) {
        e.apply(t, [t, s]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var _t18 = 0; _t18 < this.length; _t18 += 1) {
        this[_t18].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t19 = 0; _t19 < this.length; _t19 += 1) {
        this[_t19].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t = r(),
          s = a(),
          i = this[0];
      var l, o;
      if (!i || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);

        for (l = d(e), o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      if (e === s) return i === s;
      if (e === t) return i === t;

      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return d([]);

      if (e < 0) {
        var _s6 = t + e;

        return d(_s6 < 0 ? [] : [this[_s6]]);
      }

      return d([this[e]]);
    },
    append: function append() {
      var e;
      var t = a();

      for (var _s7 = 0; _s7 < arguments.length; _s7 += 1) {
        e = _s7 < 0 || arguments.length <= _s7 ? void 0 : arguments[_s7];

        for (var _s8 = 0; _s8 < this.length; _s8 += 1) {
          if ("string" == typeof e) {
            var _a3 = t.createElement("div");

            for (_a3.innerHTML = e; _a3.firstChild;) {
              this[_s8].appendChild(_a3.firstChild);
            }
          } else if (e instanceof n) for (var _t20 = 0; _t20 < e.length; _t20 += 1) {
            this[_s8].appendChild(e[_t20]);
          } else this[_s8].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t = a();
      var s, i;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof e) {
          var _a4 = t.createElement("div");

          for (_a4.innerHTML = e, i = _a4.childNodes.length - 1; i >= 0; i -= 1) {
            this[s].insertBefore(_a4.childNodes[i], this[s].childNodes[0]);
          }
        } else if (e instanceof n) for (i = 0; i < e.length; i += 1) {
          this[s].insertBefore(e[i], this[s].childNodes[0]);
        } else this[s].insertBefore(e, this[s].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.nextElementSibling;) {
        var _a5 = s.nextElementSibling;
        e ? d(_a5).is(e) && t.push(_a5) : t.push(_a5), s = _a5;
      }

      return d(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t21 = this[0];
        return e ? _t21.previousElementSibling && d(_t21.previousElementSibling).is(e) ? d([_t21.previousElementSibling]) : d([]) : _t21.previousElementSibling ? d([_t21.previousElementSibling]) : d([]);
      }

      return d([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.previousElementSibling;) {
        var _a6 = s.previousElementSibling;
        e ? d(_a6).is(e) && t.push(_a6) : t.push(_a6), s = _a6;
      }

      return d(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _s9 = 0; _s9 < this.length; _s9 += 1) {
        null !== this[_s9].parentNode && (e ? d(this[_s9].parentNode).is(e) && t.push(this[_s9].parentNode) : t.push(this[_s9].parentNode));
      }

      return d(t);
    },
    parents: function parents(e) {
      var t = [];

      for (var _s10 = 0; _s10 < this.length; _s10 += 1) {
        var _a7 = this[_s10].parentNode;

        for (; _a7;) {
          e ? d(_a7).is(e) && t.push(_a7) : t.push(_a7), _a7 = _a7.parentNode;
        }
      }

      return d(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _s11 = 0; _s11 < this.length; _s11 += 1) {
        var _a8 = this[_s11].querySelectorAll(e);

        for (var _e14 = 0; _e14 < _a8.length; _e14 += 1) {
          t.push(_a8[_e14]);
        }
      }

      return d(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s12 = 0; _s12 < this.length; _s12 += 1) {
        var _a9 = this[_s12].children;

        for (var _s13 = 0; _s13 < _a9.length; _s13 += 1) {
          e && !d(_a9[_s13]).is(e) || t.push(_a9[_s13]);
        }
      }

      return d(t);
    },
    filter: function filter(e) {
      return d(o(this, e));
    },
    remove: function remove() {
      for (var _e15 = 0; _e15 < this.length; _e15 += 1) {
        this[_e15].parentNode && this[_e15].parentNode.removeChild(this[_e15]);
      }

      return this;
    }
  };

  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function u() {
    return Date.now();
  }

  function h(e, t) {
    void 0 === t && (t = "x");
    var s = r();
    var a, i, n;

    var l = function (e) {
      var t = r();
      var s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);

    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function m(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function f(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }

  function g() {
    var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];

    for (var _s14 = 1; _s14 < arguments.length; _s14 += 1) {
      var _a10 = _s14 < 0 || arguments.length <= _s14 ? void 0 : arguments[_s14];

      if (null != _a10 && !f(_a10)) {
        var _s15 = Object.keys(Object(_a10)).filter(function (e) {
          return t.indexOf(e) < 0;
        });

        for (var _t22 = 0, _i5 = _s15.length; _t22 < _i5; _t22 += 1) {
          var _i6 = _s15[_t22],
              _r = Object.getOwnPropertyDescriptor(_a10, _i6);

          void 0 !== _r && _r.enumerable && (m(e[_i6]) && m(_a10[_i6]) ? _a10[_i6].__swiper__ ? e[_i6] = _a10[_i6] : g(e[_i6], _a10[_i6]) : !m(e[_i6]) && m(_a10[_i6]) ? (e[_i6] = {}, _a10[_i6].__swiper__ ? e[_i6] = _a10[_i6] : g(e[_i6], _a10[_i6])) : e[_i6] = _a10[_i6]);
        }
      }
    }

    return e;
  }

  function v(e, t, s) {
    e.style.setProperty(t, s);
  }

  function w(e) {
    var t = e.swiper,
        s = e.targetPosition,
        a = e.side;
    var i = r(),
        n = -t.translate;
    var l,
        o = null;
    var d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);

    var c = s > n ? "next" : "prev",
        p = function p(e, t) {
      return "next" === c && e >= t || "prev" === c && e <= t;
    },
        u = function u() {
      l = new Date().getTime(), null === o && (o = l);
      var e = Math.max(Math.min((l - o) / d, 1), 0),
          r = .5 - Math.cos(e * Math.PI) / 2;
      var c = n + r * (s - n);
      if (p(c, s) && (c = s), t.wrapperEl.scrollTo(_defineProperty({}, a, c)), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, a, c));
      }), void i.cancelAnimationFrame(t.cssModeFrameID);
      t.cssModeFrameID = i.requestAnimationFrame(u);
    };

    u();
  }

  var b, x, y;

  function E() {
    return b || (b = function () {
      var e = r(),
          t = a();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function () {
          var t = !1;

          try {
            var _s16 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });

            e.addEventListener("testPassiveListener", null, _s16);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), b;
  }

  function T(e) {
    return void 0 === e && (e = {}), x || (x = function (e) {
      var _ref = void 0 === e ? {} : e,
          t = _ref.userAgent;

      var s = E(),
          a = r(),
          i = a.navigator.platform,
          n = t || a.navigator.userAgent,
          l = {
        ios: !1,
        android: !1
      },
          o = a.screen.width,
          d = a.screen.height,
          c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
      var p = n.match(/(iPad).*OS\s([\d_]+)/);
      var u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          m = "Win32" === i;
      var f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(d)) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l;
    }(e)), x;
  }

  function C() {
    return y || (y = function () {
      var e = r();
      return {
        isSafari: function () {
          var t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), y;
  }

  Object.keys(c).forEach(function (e) {
    Object.defineProperty(d.fn, e, {
      value: c[e],
      writable: !0
    });
  });
  var $ = {
    on: function on(e, t, s) {
      var a = this;
      if ("function" != typeof t) return a;
      var i = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once: function once(e, t, s) {
      var a = this;
      if ("function" != typeof t) return a;

      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;

        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
          r[n] = arguments[n];
        }

        t.apply(a, r);
      }

      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if ("function" != typeof e) return s;
      var a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (a, i) {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var e = this;
      if (!e.eventsListeners) return e;
      var t, s, a;

      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
        r[n] = arguments[n];
      }

      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
          e.apply(a, [t].concat(_toConsumableArray(s)));
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
          e.apply(a, s);
        });
      }), e;
    }
  };
  var S = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var a = e.$el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function updateSlides() {
      var e = this;

      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t];
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }

      var a = e.params,
          i = e.$wrapperEl,
          r = e.size,
          n = e.rtlTranslate,
          l = e.wrongRTL,
          o = e.virtual && a.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = i.children(".".concat(e.params.slideClass)),
          p = o ? e.virtual.slides.length : c.length;
      var u = [];
      var h = [],
          m = [];
      var f = a.slidesOffsetBefore;
      "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
      var g = a.slidesOffsetAfter;
      "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
      var w = e.snapGrid.length,
          b = e.slidesGrid.length;
      var x = a.spaceBetween,
          y = -f,
          E = 0,
          T = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
      }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
      }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
      var C = a.grid && a.grid.rows > 1 && e.grid;
      var $;
      C && e.grid.initSlides(p);
      var S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
        return void 0 !== a.breakpoints[e].slidesPerView;
      }).length > 0;

      for (var _i7 = 0; _i7 < p; _i7 += 1) {
        $ = 0;

        var _n3 = c.eq(_i7);

        if (C && e.grid.updateSlide(_i7, _n3, p, t), "none" !== _n3.css("display")) {
          if ("auto" === a.slidesPerView) {
            S && (c[_i7].style[t("width")] = "");

            var _r2 = getComputedStyle(_n3[0]),
                _l2 = _n3[0].style.transform,
                _o2 = _n3[0].style.webkitTransform;

            if (_l2 && (_n3[0].style.transform = "none"), _o2 && (_n3[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? _n3.outerWidth(!0) : _n3.outerHeight(!0);else {
              var _e16 = s(_r2, "width"),
                  _t23 = s(_r2, "padding-left"),
                  _a11 = s(_r2, "padding-right"),
                  _i8 = s(_r2, "margin-left"),
                  _l3 = s(_r2, "margin-right"),
                  _o3 = _r2.getPropertyValue("box-sizing");

              if (_o3 && "border-box" === _o3) $ = _e16 + _i8 + _l3;else {
                var _n3$ = _n3[0],
                    _s17 = _n3$.clientWidth,
                    _r3 = _n3$.offsetWidth;
                $ = _e16 + _t23 + _a11 + _i8 + _l3 + (_r3 - _s17);
              }
            }
            _l2 && (_n3[0].style.transform = _l2), _o2 && (_n3[0].style.webkitTransform = _o2), a.roundLengths && ($ = Math.floor($));
          } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[_i7] && (c[_i7].style[t("width")] = "".concat($, "px"));

          c[_i7] && (c[_i7].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== _i7 && (y = y - r / 2 - x), 0 === _i7 && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1;
        }
      }

      if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
        width: "".concat(e.virtualSize + a.spaceBetween, "px")
      }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
        var _t24 = [];

        for (var _s18 = 0; _s18 < u.length; _s18 += 1) {
          var _i9 = u[_s18];
          a.roundLengths && (_i9 = Math.floor(_i9)), u[_s18] <= e.virtualSize - r && _t24.push(_i9);
        }

        u = _t24, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
      }

      if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
        var _s19 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");

        c.filter(function (e, t) {
          return !a.cssMode || t !== c.length - 1;
        }).css(_defineProperty({}, _s19, "".concat(x, "px")));
      }

      if (a.centeredSlides && a.centeredSlidesBounds) {
        var _e17 = 0;
        m.forEach(function (t) {
          _e17 += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), _e17 -= a.spaceBetween;

        var _t25 = _e17 - r;

        u = u.map(function (e) {
          return e < 0 ? -f : e > _t25 ? _t25 + g : e;
        });
      }

      if (a.centerInsufficientSlides) {
        var _e18 = 0;

        if (m.forEach(function (t) {
          _e18 += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), _e18 -= a.spaceBetween, _e18 < r) {
          var _t26 = (r - _e18) / 2;

          u.forEach(function (e, s) {
            u[s] = e - _t26;
          }), h.forEach(function (e, s) {
            h[s] = e + _t26;
          });
        }
      }

      if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: m
      }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
        v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");

        var _t27 = -e.snapGrid[0],
            _s20 = -e.slidesGrid[0];

        e.snapGrid = e.snapGrid.map(function (e) {
          return e + _t27;
        }), e.slidesGrid = e.slidesGrid.map(function (e) {
          return e + _s20;
        });
      }

      if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
        var _t28 = "".concat(a.containerModifierClass, "backface-hidden"),
            _s21 = e.$el.hasClass(_t28);

        p <= a.maxBackfaceHiddenSlides ? _s21 || e.$el.addClass(_t28) : _s21 && e.$el.removeClass(_t28);
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
          s = [],
          a = t.virtual && t.params.virtual.enabled;
      var i,
          r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

      var n = function n(e) {
        return a ? t.slides.filter(function (t) {
          return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
        })[0] : t.slides.eq(e)[0];
      };

      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) t.visibleSlides.each(function (e) {
          s.push(e);
        });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          var _e19 = t.activeIndex + i;

          if (_e19 > t.slides.length && !a) break;
          s.push(n(_e19));
        }
      } else s.push(n(t.activeIndex));

      for (i = 0; i < s.length; i += 1) {
        if (void 0 !== s[i]) {
          var _e20 = s[i].offsetHeight;
          r = _e20 > r ? _e20 : r;
        }
      }

      (r || 0 === r) && t.$wrapperEl.css("height", "".concat(r, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
          t = e.slides;

      for (var _s22 = 0; _s22 < t.length; _s22 += 1) {
        t[_s22].swiperSlideOffset = e.isHorizontal() ? t[_s22].offsetLeft : t[_s22].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
          s = t.params,
          a = t.slides,
          i = t.rtlTranslate,
          r = t.snapGrid;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      var n = -e;
      i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e21 = 0; _e21 < a.length; _e21 += 1) {
        var _l4 = a[_e21];
        var _o4 = _l4.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (_o4 -= a[0].swiperSlideOffset);

        var _d3 = (n + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
            _c2 = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
            _p = -(n - _o4),
            _u = _p + t.slidesSizesGrid[_e21];

        (_p >= 0 && _p < t.size - 1 || _u > 1 && _u <= t.size || _p <= 0 && _u >= t.size) && (t.visibleSlides.push(_l4), t.visibleSlidesIndexes.push(_e21), a.eq(_e21).addClass(s.slideVisibleClass)), _l4.progress = i ? -_d3 : _d3, _l4.originalProgress = i ? -_c2 : _c2;
      }

      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (void 0 === e) {
        var _s23 = t.rtlTranslate ? -1 : 1;

        e = t && t.translate && t.translate * _s23 || 0;
      }

      var s = t.params,
          a = t.maxTranslate() - t.minTranslate();
      var i = t.progress,
          r = t.isBeginning,
          n = t.isEnd;
      var l = r,
          o = n;
      0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
        progress: i,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          s = e.params,
          a = e.$wrapperEl,
          i = e.activeIndex,
          r = e.realIndex,
          n = e.virtual && s.virtual.enabled;
      var l;
      t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = n ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
      var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
      var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          a = t.slidesGrid,
          i = t.snapGrid,
          r = t.params,
          n = t.activeIndex,
          l = t.realIndex,
          o = t.snapIndex;
      var d,
          c = e;

      if (void 0 === c) {
        for (var _e22 = 0; _e22 < a.length; _e22 += 1) {
          void 0 !== a[_e22 + 1] ? s >= a[_e22] && s < a[_e22 + 1] - (a[_e22 + 1] - a[_e22]) / 2 ? c = _e22 : s >= a[_e22] && s < a[_e22 + 1] && (c = _e22 + 1) : s >= a[_e22] && (c = _e22);
        }

        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }

      if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
        var _e23 = Math.min(r.slidesPerGroupSkip, c);

        d = _e23 + Math.floor((c - _e23) / r.slidesPerGroup);
      }
      if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
      var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: n,
        activeIndex: c
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          s = t.params,
          a = d(e).closest(".".concat(s.slideClass))[0];
      var i,
          r = !1;
      if (a) for (var _e24 = 0; _e24 < t.slides.length; _e24 += 1) {
        if (t.slides[_e24] === a) {
          r = !0, i = _e24;
          break;
        }
      }
      if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var M = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          s = this.rtlTranslate,
          a = this.translate,
          i = this.$wrapperEl;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      var r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
          a = s.rtlTranslate,
          i = s.params,
          r = s.$wrapperEl,
          n = s.wrapperEl,
          l = s.progress;
      var o,
          d = 0,
          c = 0;
      s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
      var p = s.maxTranslate() - s.minTranslate();
      o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function translateTo(e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      var r = this,
          n = r.params,
          l = r.wrapperEl;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      var o = r.minTranslate(),
          d = r.maxTranslate();
      var c;

      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
        var _e25 = r.isHorizontal();

        if (0 === t) l[_e25 ? "scrollLeft" : "scrollTop"] = -c;else {
          var _l$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: -c,
            side: _e25 ? "left" : "top"
          }), !0;
          l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e25 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
        }
        return !0;
      }

      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
    }
  };

  function P(e) {
    var t = e.swiper,
        s = e.runCallbacks,
        a = e.direction,
        i = e.step;
    var r = t.activeIndex,
        n = t.previousIndex;
    var l = a;

    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit("transition".concat(i)), s && r !== n) {
      if ("reset" === l) return void t.emit("slideResetTransition".concat(i));
      t.emit("slideChangeTransition".concat(i)), "next" === l ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i));
    }
  }

  var k = {
    slideTo: function slideTo(e, t, s, a, i) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

      if ("string" == typeof e) {
        var _t29 = parseInt(e, 10);

        if (!isFinite(_t29)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = _t29;
      }

      var r = this;
      var n = e;
      n < 0 && (n = 0);
      var l = r.params,
          o = r.snapGrid,
          d = r.slidesGrid,
          c = r.previousIndex,
          p = r.activeIndex,
          u = r.rtlTranslate,
          h = r.wrapperEl,
          m = r.enabled;
      if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
      var f = Math.min(r.params.slidesPerGroupSkip, n);
      var g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
      var v = -o[g];
      if (r.updateProgress(v), l.normalizeSlideIndex) for (var _e26 = 0; _e26 < d.length; _e26 += 1) {
        var _t30 = -Math.floor(100 * v),
            _s24 = Math.floor(100 * d[_e26]),
            _a12 = Math.floor(100 * d[_e26 + 1]);

        void 0 !== d[_e26 + 1] ? _t30 >= _s24 && _t30 < _a12 - (_a12 - _s24) / 2 ? n = _e26 : _t30 >= _s24 && _t30 < _a12 && (n = _e26 + 1) : _t30 >= _s24 && (n = _e26);
      }

      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
      }

      var b;
      if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

      if (l.cssMode) {
        var _e27 = r.isHorizontal(),
            _s25 = u ? v : -v;

        if (0 === t) {
          var _t31 = r.virtual && r.params.virtual.enabled;

          _t31 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e27 ? "scrollLeft" : "scrollTop"] = _s25, _t31 && requestAnimationFrame(function () {
            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
          });
        } else {
          var _h$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: _s25,
            side: _e27 ? "left" : "top"
          }), !0;
          h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e27 ? "left" : "top", _s25), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
        }

        return !0;
      }

      return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function slideToLoop(e, t, s, a) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0);
      var i = this;
      var r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function slideNext(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
          i = a.animating,
          r = a.enabled,
          n = a.params;
      if (!r) return a;
      var l = n.slidesPerGroup;
      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      var o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;

      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function slidePrev(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
          i = a.params,
          r = a.animating,
          n = a.snapGrid,
          l = a.slidesGrid,
          o = a.rtlTranslate,
          d = a.enabled;
      if (!d) return a;

      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var p = c(o ? a.translate : -a.translate),
          u = n.map(function (e) {
        return c(e);
      });
      var h = n[u.indexOf(p) - 1];

      if (void 0 === h && i.cssMode) {
        var _e28;

        n.forEach(function (t, s) {
          p >= t && (_e28 = s);
        }), void 0 !== _e28 && (h = n[_e28 > 0 ? _e28 - 1 : _e28]);
      }

      var m = 0;

      if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
        var _i10 = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;

        return a.slideTo(_i10, e, t, s);
      }

      return a.slideTo(m, e, t, s);
    },
    slideReset: function slideReset(e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function slideToClosest(e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
      var i = this;
      var r = i.activeIndex;
      var n = Math.min(i.params.slidesPerGroupSkip, r),
          l = n + Math.floor((r - n) / i.params.slidesPerGroup),
          o = i.rtlTranslate ? i.translate : -i.translate;

      if (o >= i.snapGrid[l]) {
        var _e29 = i.snapGrid[l];
        o - _e29 > (i.snapGrid[l + 1] - _e29) * a && (r += i.params.slidesPerGroup);
      } else {
        var _e30 = i.snapGrid[l - 1];
        o - _e30 <= (i.snapGrid[l] - _e30) * a && (r -= i.params.slidesPerGroup);
      }

      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          s = e.$wrapperEl,
          a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var i,
          r = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var z = {
    loopCreate: function loopCreate() {
      var e = this,
          t = a(),
          s = e.params,
          i = e.$wrapperEl,
          r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
      var n = r.children(".".concat(s.slideClass));

      if (s.loopFillGroupWithBlank) {
        var _e31 = s.slidesPerGroup - n.length % s.slidesPerGroup;

        if (_e31 !== s.slidesPerGroup) {
          for (var _a13 = 0; _a13 < _e31; _a13 += 1) {
            var _e32 = d(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

            r.append(_e32);
          }

          n = r.children(".".concat(s.slideClass));
        }
      }

      "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
      var l = [],
          o = [];
      n.each(function (t, s) {
        var a = d(t);
        s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
      });

      for (var _e33 = 0; _e33 < o.length; _e33 += 1) {
        r.append(d(o[_e33].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }

      for (var _e34 = l.length - 1; _e34 >= 0; _e34 -= 1) {
        r.prepend(d(l[_e34].cloneNode(!0)).addClass(s.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e = this;
      e.emit("beforeLoopFix");
      var t = e.activeIndex,
          s = e.slides,
          a = e.loopedSlides,
          i = e.allowSlidePrev,
          r = e.allowSlideNext,
          n = e.snapGrid,
          l = e.rtlTranslate;
      var o;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      var d = -n[t] - e.getTranslate();

      if (t < a) {
        o = s.length - 3 * a + t, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        o = -s.length + t + a, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      }

      e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          s = this.slides;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
    }
  };

  function O(e) {
    var t = this,
        s = a(),
        i = r(),
        n = t.touchEventsData,
        l = t.params,
        o = t.touches,
        c = t.enabled;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var p = e;
    p.originalEvent && (p = p.originalEvent);
    var h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
    var m = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
        f = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (f ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
      }(t);
    }(m, p.target) : h.closest(m)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
    var g = o.currentX,
        v = o.currentY,
        w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }

    if (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
      var _e35 = !0;

      h.is(n.focusableElements) && (_e35 = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();

      var _a14 = _e35 && t.allowTouchMove && l.touchStartPreventDefault;

      !l.touchStartForcePreventDefault && !_a14 || h[0].isContentEditable || p.preventDefault();
    }

    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
  }

  function I(e) {
    var t = a(),
        s = this,
        i = s.touchEventsData,
        r = s.params,
        n = s.touches,
        l = s.rtlTranslate,
        o = s.enabled;
    if (!o) return;
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    var p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
        h = "touchmove" === c.type ? p.pageX : c.pageX,
        m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
      startX: h,
      startY: m,
      currentX: h,
      currentY: m
    }), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    var f = n.currentX - n.startX,
        g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;

    if (void 0 === i.isScrolling) {
      var _e36;

      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (_e36 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e36 > r.touchAngle : 90 - _e36 > r.touchAngle);
    }

    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
    var v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    var w = !0,
        b = r.resistanceRatio;

    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + v, b))) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - v, b))), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }

    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }

  function L(e) {
    var t = this,
        s = t.touchEventsData,
        a = t.params,
        i = t.touches,
        r = t.rtlTranslate,
        n = t.slidesGrid,
        l = t.enabled;
    if (!l) return;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var d = u(),
        c = d - s.touchStartTime;

    if (t.allowClick) {
      var _e37 = o.path || o.composedPath && o.composedPath();

      t.updateClickedSlide(_e37 && _e37[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
    }

    if (s.lastClickTime = u(), p(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    var m = 0,
        f = t.slidesSizesGrid[0];

    for (var _e38 = 0; _e38 < n.length; _e38 += _e38 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      var _t32 = _e38 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

      void 0 !== n[_e38 + _t32] ? h >= n[_e38] && h < n[_e38 + _t32] && (m = _e38, f = n[_e38 + _t32] - n[_e38]) : h >= n[_e38] && (m = _e38, f = n[n.length - 1] - n[n.length - 2]);
    }

    var g = null,
        v = null;
    a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    var w = (h - n[m]) / f,
        b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }

  function A() {
    var e = this,
        t = e.params,
        s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var a = e.allowSlideNext,
        i = e.allowSlidePrev,
        r = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function D(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function G() {
    var e = this,
        t = e.wrapperEl,
        s = e.rtlTranslate,
        a = e.enabled;
    if (!a) return;
    var i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  var B = !1;

  function N() {}

  var H = function H(e, t) {
    var s = a(),
        i = e.params,
        r = e.touchEvents,
        n = e.el,
        l = e.wrapperEl,
        o = e.device,
        d = e.support,
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;

    if (d.touch) {
      var _t33 = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      n[p](r.start, e.onTouchStart, _t33), n[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), n[p](r.end, e.onTouchEnd, _t33), r.cancel && n[p](r.cancel, e.onTouchEnd, _t33);
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

    (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
  };

  var X = {
    attachEvents: function attachEvents() {
      var e = this,
          t = a(),
          s = e.params,
          i = e.support;
      e.onTouchStart = O.bind(e), e.onTouchMove = I.bind(e), e.onTouchEnd = L.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !B && (t.addEventListener("touchstart", N), B = !0), H(e, "on");
    },
    detachEvents: function detachEvents() {
      H(this, "off");
    }
  };

  var Y = function Y(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };

  var R = {
    addClasses: function addClasses() {
      var e = this,
          t = e.classNames,
          s = e.params,
          a = e.rtl,
          i = e.$el,
          r = e.device,
          n = e.support,
          l = function (e, t) {
        var s = [];
        return e.forEach(function (e) {
          "object" == _typeof(e) ? Object.keys(e).forEach(function (a) {
            e[a] && s.push(t + a);
          }) : "string" == typeof e && s.push(t + e);
        }), s;
      }(["initialized", s.direction, {
        "pointer-events": !n.touch
      }, {
        "free-mode": e.params.freeMode && s.freeMode.enabled
      }, {
        autoheight: s.autoHeight
      }, {
        rtl: a
      }, {
        grid: s.grid && s.grid.rows > 1
      }, {
        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
      }, {
        android: r.android
      }, {
        ios: r.ios
      }, {
        "css-mode": s.cssMode
      }, {
        centered: s.cssMode && s.centeredSlides
      }], s.containerModifierClass);

      t.push.apply(t, _toConsumableArray(l)), i.addClass(_toConsumableArray(t).join(" ")), e.emitContainerClasses();
    },
    removeClasses: function removeClasses() {
      var e = this.$el,
          t = this.classNames;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    }
  };
  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function j(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      var a = Object.keys(s)[0],
          i = s[a];
      "object" == _typeof(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
        auto: !0
      }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "object" != _typeof(e[a]) || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), g(t, s)) : g(t, s)) : g(t, s);
    };
  }

  var _ = {
    eventsEmitter: $,
    update: S,
    translate: M,
    transition: {
      setTransition: function setTransition(e, t) {
        var s = this;
        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            a = s.params;
        a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            a = s.params;
        s.animating = !1, a.cssMode || (s.setTransition(0), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: k,
    loop: z,
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;
        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: X,
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            s = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            a = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            i = e.params,
            r = e.$el,
            n = i.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        var l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        var o = (l in n ? n[l] : void 0) || e.originalParams,
            d = Y(e, i),
            c = Y(e, o),
            p = i.enabled;
        d && !c ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses());
        var u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), g(e.params, o);
        var m = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
      },
      getBreakpoint: function getBreakpoint(e, t, s) {
        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
        var a = !1;
        var i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(function (e) {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            var _t34 = parseFloat(e.substr(1));

            return {
              value: n * _t34,
              point: e
            };
          }

          return {
            value: e,
            point: e
          };
        });
        l.sort(function (e, t) {
          return parseInt(e.value, 10) - parseInt(t.value, 10);
        });

        for (var _e39 = 0; _e39 < l.length; _e39 += 1) {
          var _l$_e = l[_e39],
              _r4 = _l$_e.point,
              _n4 = _l$_e.value;
          "window" === t ? i.matchMedia("(min-width: ".concat(_n4, "px)")).matches && (a = _r4) : _n4 <= s.clientWidth && (a = _r4);
        }

        return a || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked,
            s = e.params,
            a = s.slidesOffsetBefore;

        if (a) {
          var _t35 = e.slides.length - 1,
              _s26 = e.slidesGrid[_t35] + e.slidesSizesGrid[_t35] + 2 * a;

          e.isLocked = e.size > _s26;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: R,
    images: {
      loadImage: function loadImage(e, t, s, a, i, n) {
        var l = r();
        var o;

        function c() {
          n && n();
        }

        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _s27 = 0; _s27 < e.imagesToLoad.length; _s27 += 1) {
          var _a15 = e.imagesToLoad[_s27];
          e.loadImage(_a15, _a15.currentSrc || _a15.getAttribute("src"), _a15.srcset || _a15.getAttribute("srcset"), _a15.sizes || _a15.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      V = {};

  var q = /*#__PURE__*/function () {
    function q() {
      var _a16, _a17, _r$modules;

      _classCallCheck(this, q);

      var e, t;

      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) {
        a[i] = arguments[i];
      }

      if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : (_a16 = a, _a17 = _slicedToArray(_a16, 2), e = _a17[0], t = _a17[1], _a16), t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
        var _e40 = [];
        return d(t.el).each(function (s) {
          var a = g({}, t, {
            el: s
          });

          _e40.push(new q(a));
        }), _e40;
      }

      var r = this;
      r.__swiper__ = !0, r.support = E(), r.device = T({
        userAgent: t.userAgent
      }), r.browser = C(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = _toConsumableArray(r.__modules__), t.modules && Array.isArray(t.modules) && (_r$modules = r.modules).push.apply(_r$modules, _toConsumableArray(t.modules));
      var n = {};
      r.modules.forEach(function (e) {
        e({
          swiper: r,
          extendParams: j(t, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r)
        });
      });
      var l = g({}, W, n);
      return r.params = g({}, l, V, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(function (e) {
        r.on(e, r.params.on[e]);
      }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
        enabled: r.params.enabled,
        el: e,
        classNames: [],
        slides: d(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === r.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === r.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
          return r.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2],
            cancel: e[3]
          }, r.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: u(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), r.emit("_swiper"), r.params.init && r.init(), r;
    }

    _createClass(q, [{
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var a = s.minTranslate(),
            i = (s.maxTranslate() - a) * e + a;
        s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.each(function (s) {
          var a = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: a
          }), e.emit("_slideClass", s, a);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var s = this.params,
            a = this.slides,
            i = this.slidesGrid,
            r = this.slidesSizesGrid,
            n = this.size,
            l = this.activeIndex;
        var o = 1;

        if (s.centeredSlides) {
          var _e41,
              _t36 = a[l].swiperSlideSize;

          for (var _s28 = l + 1; _s28 < a.length; _s28 += 1) {
            a[_s28] && !_e41 && (_t36 += a[_s28].swiperSlideSize, o += 1, _t36 > n && (_e41 = !0));
          }

          for (var _s29 = l - 1; _s29 >= 0; _s29 -= 1) {
            a[_s29] && !_e41 && (_t36 += a[_s29].swiperSlideSize, o += 1, _t36 > n && (_e41 = !0));
          }
        } else if ("current" === e) for (var _e42 = l + 1; _e42 < a.length; _e42 += 1) {
          (t ? i[_e42] + r[_e42] - i[l] < n : i[_e42] - i[l] < n) && (o += 1);
        } else for (var _e43 = l - 1; _e43 >= 0; _e43 -= 1) {
          i[l] - i[_e43] < n && (o += 1);
        }

        return o;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            s = e.params;

        function a() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var i;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e, t) {
        void 0 === t && (t = !0);
        var s = this,
            a = s.params.direction;
        return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(a)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = d(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;

        var i = function i() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };

        var r = function () {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var _t37 = d(e.shadowRoot.querySelector(i()));

            return _t37.children = function (e) {
              return s.children(e);
            }, _t37;
          }

          return s.children(i());
        }();

        if (0 === r.length && t.params.createElements) {
          var _e44 = a().createElement("div");

          r = d(_e44), _e44.className = t.params.wrapperClass, s.append(_e44), s.children(".".concat(t.params.slideClass)).each(function (e) {
            r.append(e);
          });
        }

        return Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var s = this,
            a = s.params,
            i = s.$el,
            r = s.$wrapperEl,
            n = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        g(V, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return V;
      }
    }, {
      key: "defaults",
      get: function get() {
        return W;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        q.prototype.__modules__ || (q.prototype.__modules__ = []);
        var t = q.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return q.installModule(e);
        }), q) : (q.installModule(e), q);
      }
    }]);

    return q;
  }();

  function F(e, t, s, i) {
    var r = a();
    return e.params.createElements && Object.keys(i).forEach(function (a) {
      if (!s[a] && !0 === s.auto) {
        var _n5 = e.$el.children(".".concat(i[a]))[0];
        _n5 || (_n5 = r.createElement("div"), _n5.className = i[a], e.$el.append(_n5)), s[a] = _n5, t[a] = _n5;
      }
    }), s;
  }

  function U(e) {
    return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
  }

  function K(e) {
    var t = this,
        s = t.$wrapperEl,
        a = t.params;
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t38 = 0; _t38 < e.length; _t38 += 1) {
      e[_t38] && s.append(e[_t38]);
    } else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }

  function Z(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    s.loop && t.loopDestroy();
    var r = i + 1;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _t39 = 0; _t39 < e.length; _t39 += 1) {
        e[_t39] && a.prepend(e[_t39]);
      }

      r = i + e.length;
    } else a.prepend(e);

    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }

  function J(e, t) {
    var s = this,
        a = s.$wrapperEl,
        i = s.params,
        r = s.activeIndex;
    var n = r;
    i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(".".concat(i.slideClass)));
    var l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    var o = n > e ? n + 1 : n;
    var d = [];

    for (var _t40 = l - 1; _t40 >= e; _t40 -= 1) {
      var _e45 = s.slides.eq(_t40);

      _e45.remove(), d.unshift(_e45);
    }

    if ("object" == _typeof(t) && "length" in t) {
      for (var _e46 = 0; _e46 < t.length; _e46 += 1) {
        t[_e46] && a.append(t[_e46]);
      }

      o = n > e ? n + t.length : n;
    } else a.append(t);

    for (var _e47 = 0; _e47 < d.length; _e47 += 1) {
      a.append(d[_e47]);
    }

    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }

  function Q(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    var r = i;
    s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(".".concat(s.slideClass)));
    var n,
        l = r;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _s30 = 0; _s30 < e.length; _s30 += 1) {
        n = e[_s30], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      }

      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function ee() {
    var e = this,
        t = [];

    for (var _s31 = 0; _s31 < e.slides.length; _s31 += 1) {
      t.push(_s31);
    }

    e.removeSlide(t);
  }

  function te(e) {
    var t = e.effect,
        s = e.swiper,
        a = e.on,
        i = e.setTranslate,
        r = e.setTransition,
        n = e.overwriteParams,
        l = e.perspective;
    a("beforeInit", function () {
      if (s.params.effect !== t) return;
      s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
      var e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", function () {
      s.params.effect === t && i();
    }), a("setTransition", function (e, a) {
      s.params.effect === t && r(a);
    });
  }

  function se(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t;
  }

  function ae(e) {
    var t = e.swiper,
        s = e.duration,
        a = e.transformEl,
        i = e.allSlides;
    var r = t.slides,
        n = t.activeIndex,
        l = t.$wrapperEl;

    if (t.params.virtualTranslate && 0 !== s) {
      var _e48,
          _s32 = !1;

      _e48 = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), _e48.transitionEnd(function () {
        if (_s32) return;
        if (!t || t.destroyed) return;
        _s32 = !0, t.animating = !1;
        var e = ["webkitTransitionEnd", "transitionend"];

        for (var _t41 = 0; _t41 < e.length; _t41 += 1) {
          l.trigger(e[_t41]);
        }
      });
    }
  }

  function ie(e, t, s) {
    var a = "swiper-slide-shadow" + (s ? "-".concat(s) : ""),
        i = e.transformEl ? t.find(e.transformEl) : t;
    var r = i.children(".".concat(a));
    return r.length || (r = d("<div class=\"swiper-slide-shadow".concat(s ? "-".concat(s) : "", "\"></div>")), i.append(r)), r;
  }

  Object.keys(_).forEach(function (e) {
    Object.keys(_[e]).forEach(function (t) {
      q.prototype[t] = _[e][t];
    });
  }), q.use([function (e) {
    var t = e.swiper,
        s = e.on,
        a = e.emit;
    var i = r();
    var n = null,
        l = null;

    var o = function o() {
      t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
    },
        d = function d() {
      t && !t.destroyed && t.initialized && a("orientationchange");
    };

    s("init", function () {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(function (e) {
        l = i.requestAnimationFrame(function () {
          var s = t.width,
              a = t.height;
          var i = s,
              r = a;
          e.forEach(function (e) {
            var s = e.contentBoxSize,
                a = e.contentRect,
                n = e.target;
            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
          }), i === s && r === a || o();
        });
      }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
    }), s("destroy", function () {
      l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;

    var n = [],
        l = r(),
        o = function o(e, t) {
      void 0 === t && (t = {});
      var s = new (l.MutationObserver || l.WebkitMutationObserver)(function (e) {
        if (1 === e.length) return void i("observerUpdate", e[0]);

        var t = function t() {
          i("observerUpdate", e[0]);
        };

        l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), n.push(s);
    };

    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), a("init", function () {
      if (t.params.observer) {
        if (t.params.observeParents) {
          var _e49 = t.$el.parents();

          for (var _t42 = 0; _t42 < _e49.length; _t42 += 1) {
            o(_e49[_t42]);
          }
        }

        o(t.$el[0], {
          childList: t.params.observeSlideChildren
        }), o(t.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), a("destroy", function () {
      n.forEach(function (e) {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  var re = [function (e) {
    var t,
        s = e.swiper,
        a = e.extendParams,
        i = e.on;

    function r(e, t) {
      var a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      var i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d("<div class=\"".concat(s.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
    }

    function n(e) {
      var _s$params = s.params,
          t = _s$params.slidesPerView,
          a = _s$params.slidesPerGroup,
          i = _s$params.centeredSlides,
          _s$params$virtual = s.params.virtual,
          n = _s$params$virtual.addSlidesBefore,
          l = _s$params$virtual.addSlidesAfter,
          _s$virtual = s.virtual,
          o = _s$virtual.from,
          d = _s$virtual.to,
          c = _s$virtual.slides,
          p = _s$virtual.slidesGrid,
          u = _s$virtual.offset;
      s.params.cssMode || s.updateActiveIndex();
      var h = s.activeIndex || 0;
      var m, f, g;
      m = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (f = Math.floor(t / 2) + a + l, g = Math.floor(t / 2) + a + n) : (f = t + (a - 1) + l, g = a + n);
      var v = Math.max((h || 0) - g, 0),
          w = Math.min((h || 0) + f, c.length - 1),
          b = (s.slidesGrid[v] || 0) - (s.slidesGrid[0] || 0);

      function x() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load();
      }

      if (Object.assign(s.virtual, {
        from: v,
        to: w,
        offset: b,
        slidesGrid: s.slidesGrid
      }), o === v && d === w && !e) return s.slidesGrid !== p && b !== u && s.slides.css(m, "".concat(b, "px")), void s.updateProgress();
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: b,
        from: v,
        to: w,
        slides: function () {
          var e = [];

          for (var _t43 = v; _t43 <= w; _t43 += 1) {
            e.push(c[_t43]);
          }

          return e;
        }()
      }), void (s.params.virtual.renderExternalUpdate && x());
      var y = [],
          E = [];
      if (e) s.$wrapperEl.find(".".concat(s.params.slideClass)).remove();else for (var _e50 = o; _e50 <= d; _e50 += 1) {
        (_e50 < v || _e50 > w) && s.$wrapperEl.find(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(_e50, "\"]")).remove();
      }

      for (var _t44 = 0; _t44 < c.length; _t44 += 1) {
        _t44 >= v && _t44 <= w && (void 0 === d || e ? E.push(_t44) : (_t44 > d && E.push(_t44), _t44 < o && y.push(_t44)));
      }

      E.forEach(function (e) {
        s.$wrapperEl.append(r(c[e], e));
      }), y.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        s.$wrapperEl.prepend(r(c[e], e));
      }), s.$wrapperEl.children(".swiper-slide").css(m, "".concat(b, "px")), x();
    }

    a({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), s.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, i("beforeInit", function () {
      s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push("".concat(s.params.containerModifierClass, "virtual")), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || n());
    }), i("setTranslate", function () {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(function () {
        n();
      }, 100)) : n());
    }), i("init update resize", function () {
      s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", "".concat(s.virtualSize, "px"));
    }), Object.assign(s.virtual, {
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof(e) && "length" in e) for (var _t45 = 0; _t45 < e.length; _t45 += 1) {
          e[_t45] && s.virtual.slides.push(e[_t45]);
        } else s.virtual.slides.push(e);
        n(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = s.activeIndex;
        var a = t + 1,
            i = 1;

        if (Array.isArray(e)) {
          for (var _t46 = 0; _t46 < e.length; _t46 += 1) {
            e[_t46] && s.virtual.slides.unshift(e[_t46]);
          }

          a = t + e.length, i = e.length;
        } else s.virtual.slides.unshift(e);

        if (s.params.virtual.cache) {
          var _e51 = s.virtual.cache,
              _t47 = {};
          Object.keys(_e51).forEach(function (s) {
            var a = _e51[s],
                r = a.attr("data-swiper-slide-index");
            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), _t47[parseInt(s, 10) + i] = a;
          }), s.virtual.cache = _t47;
        }

        n(!0), s.slideTo(a, 0);
      },
      removeSlide: function removeSlide(e) {
        if (null == e) return;
        var t = s.activeIndex;
        if (Array.isArray(e)) for (var _a18 = e.length - 1; _a18 >= 0; _a18 -= 1) {
          s.virtual.slides.splice(e[_a18], 1), s.params.virtual.cache && delete s.virtual.cache[e[_a18]], e[_a18] < t && (t -= 1), t = Math.max(t, 0);
        } else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        n(!0), s.slideTo(t, 0);
      },
      removeAllSlides: function removeAllSlides() {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), n(!0), s.slideTo(0, 0);
      },
      update: n
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        n = e.emit;
    var l = a(),
        o = r();

    function c(e) {
      if (!t.enabled) return;
      var s = t.rtlTranslate;
      var a = e;
      a.originalEvent && (a = a.originalEvent);
      var i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          h = 38 === i,
          m = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
          var _e52 = !1;

          if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

          var _a19 = t.$el,
              _i11 = _a19[0].clientWidth,
              _r5 = _a19[0].clientHeight,
              _n6 = o.innerWidth,
              _l5 = o.innerHeight,
              _d4 = t.$el.offset();

          s && (_d4.left -= t.$el[0].scrollLeft);
          var _c3 = [[_d4.left, _d4.top], [_d4.left + _i11, _d4.top], [_d4.left, _d4.top + _r5], [_d4.left + _i11, _d4.top + _r5]];

          for (var _t48 = 0; _t48 < _c3.length; _t48 += 1) {
            var _s33 = _c3[_t48];

            if (_s33[0] >= 0 && _s33[0] <= _n6 && _s33[1] >= 0 && _s33[1] <= _l5) {
              if (0 === _s33[0] && 0 === _s33[1]) continue;
              _e52 = !0;
            }
          }

          if (!_e52) return;
        }

        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i);
      }
    }

    function p() {
      t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0);
    }

    function u() {
      t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1);
    }

    t.keyboard = {
      enabled: !1
    }, s({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), i("init", function () {
      t.params.keyboard.enabled && p();
    }), i("destroy", function () {
      t.keyboard.enabled && u();
    }), Object.assign(t.keyboard, {
      enable: p,
      disable: u
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var n = r();
    var l;
    s({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), t.mousewheel = {
      enabled: !1
    };
    var o,
        c = u();
    var h = [];

    function m() {
      t.enabled && (t.mouseEntered = !0);
    }

    function f() {
      t.enabled && (t.mouseEntered = !1);
    }

    function g(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = new n.Date().getTime(), !1));
    }

    function v(e) {
      var s = e,
          a = !0;
      if (!t.enabled) return;
      var r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      var n = t.$el;
      if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      var c = 0;

      var m = t.rtlTranslate ? -1 : 1,
          f = function (e) {
        var t = 0,
            s = 0,
            a = 0,
            i = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
          spinX: t,
          spinY: s,
          pixelX: a,
          pixelY: i
        };
      }(s);

      if (r.forceToAxis) {
        if (t.isHorizontal()) {
          if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
          c = -f.pixelX * m;
        } else {
          if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
          c = -f.pixelY;
        }
      } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
      if (0 === c) return !0;
      r.invert && (c = -c);
      var v = t.getTranslate() + c * r.sensitivity;

      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        var _e53 = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c)
        },
            _a20 = o && _e53.time < o.time + 500 && _e53.delta <= o.delta && _e53.direction === o.direction;

        if (!_a20) {
          o = void 0, t.params.loop && t.loopFix();

          var _n7 = t.getTranslate() + c * r.sensitivity;

          var _d5 = t.isBeginning,
              _u2 = t.isEnd;

          if (_n7 >= t.minTranslate() && (_n7 = t.minTranslate()), _n7 <= t.maxTranslate() && (_n7 = t.maxTranslate()), t.setTransition(0), t.setTranslate(_n7), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!_d5 && t.isBeginning || !_u2 && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
            clearTimeout(l), l = void 0, h.length >= 15 && h.shift();

            var _s34 = h.length ? h[h.length - 1] : void 0,
                _a21 = h[0];

            if (h.push(_e53), _s34 && (_e53.delta > _s34.delta || _e53.direction !== _s34.direction)) h.splice(0);else if (h.length >= 15 && _e53.time - _a21.time < 500 && _a21.delta - _e53.delta >= 1 && _e53.delta <= 6) {
              var _s35 = c > 0 ? .8 : .2;

              o = _e53, h.splice(0), l = p(function () {
                t.slideToClosest(t.params.speed, !0, void 0, _s35);
              }, 0);
            }
            l || (l = p(function () {
              o = _e53, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (_a20 || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), _n7 === t.minTranslate() || _n7 === t.maxTranslate()) return !0;
        }
      } else {
        var _s36 = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c),
          raw: e
        };
        h.length >= 2 && h.shift();

        var _a22 = h.length ? h[h.length - 1] : void 0;

        if (h.push(_s36), _a22 ? (_s36.direction !== _a22.direction || _s36.delta > _a22.delta || _s36.time > _a22.time + 150) && g(_s36) : g(_s36), function (e) {
          var s = t.params.mousewheel;

          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;

          return !1;
        }(_s36)) return !0;
      }

      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }

    function w(e) {
      var s = t.$el;
      "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v);
    }

    function b() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0);
    }

    function x() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0);
    }

    a("init", function () {
      !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
    }), a("destroy", function () {
      t.params.cssMode && b(), t.mousewheel.enabled && x();
    }), Object.assign(t.mousewheel, {
      enable: b,
      disable: x
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;

    function r(e) {
      var s;
      return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
    }

    function n(e, s) {
      var a = t.params.navigation;
      e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
    }

    function l() {
      if (t.params.loop) return;
      var _t$navigation = t.navigation,
          e = _t$navigation.$nextEl,
          s = _t$navigation.$prevEl;
      n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
    }

    function o(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }

    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }

    function p() {
      var e = t.params.navigation;
      if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      var s = r(e.nextEl),
          a = r(e.prevEl);
      s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: a,
        prevEl: a && a[0]
      }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
    }

    function u() {
      var _t$navigation2 = t.navigation,
          e = _t$navigation2.$nextEl,
          s = _t$navigation2.$prevEl;
      e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
    }

    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    }), t.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, a("init", function () {
      p(), l();
    }), a("toEdge fromEdge lock unlock", function () {
      l();
    }), a("destroy", function () {
      u();
    }), a("enable disable", function () {
      var _t$navigation3 = t.navigation,
          e = _t$navigation3.$nextEl,
          s = _t$navigation3.$prevEl;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
    }), a("click", function (e, s) {
      var _t$navigation4 = t.navigation,
          a = _t$navigation4.$nextEl,
          r = _t$navigation4.$prevEl,
          n = s.target;

      if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;

        var _e54;

        a ? _e54 = a.hasClass(t.params.navigation.hiddenClass) : r && (_e54 = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === _e54 ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
      }
    }), Object.assign(t.navigation, {
      update: l,
      init: p,
      destroy: u
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var r = "swiper-pagination";
    var n;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "".concat(r, "-bullet"),
        bulletActiveClass: "".concat(r, "-bullet-active"),
        modifierClass: "".concat(r, "-"),
        currentClass: "".concat(r, "-current"),
        totalClass: "".concat(r, "-total"),
        hiddenClass: "".concat(r, "-hidden"),
        progressbarFillClass: "".concat(r, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
        clickableClass: "".concat(r, "-clickable"),
        lockClass: "".concat(r, "-lock"),
        horizontalClass: "".concat(r, "-horizontal"),
        verticalClass: "".concat(r, "-vertical")
      }
    }), t.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var l = 0;

    function o() {
      return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
    }

    function c(e, s) {
      var a = t.params.pagination.bulletActiveClass;
      e[s]().addClass("".concat(a, "-").concat(s))[s]().addClass("".concat(a, "-").concat(s, "-").concat(s));
    }

    function p() {
      var e = t.rtl,
          s = t.params.pagination;
      if (o()) return;
      var a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          r = t.pagination.$el;
      var p;
      var u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

      if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        var _a23 = t.pagination.bullets;

        var _i12, _o5, _u3;

        if (s.dynamicBullets && (n = _a23.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), _i12 = Math.max(p - l, 0), _o5 = _i12 + (Math.min(_a23.length, s.dynamicMainBullets) - 1), _u3 = (_o5 + _i12) / 2), _a23.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), r.length > 1) _a23.each(function (e) {
          var t = d(e),
              a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i12 && a <= _o5 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i12 && c(t, "prev"), a === _o5 && c(t, "next"));
        });else {
          var _e55 = _a23.eq(p),
              _r6 = _e55.index();

          if (_e55.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _e56 = _a23.eq(_i12),
                _n8 = _a23.eq(_o5);

            for (var _e57 = _i12; _e57 <= _o5; _e57 += 1) {
              _a23.eq(_e57).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            if (t.params.loop) {
              if (_r6 >= _a23.length) {
                for (var _e58 = s.dynamicMainBullets; _e58 >= 0; _e58 -= 1) {
                  _a23.eq(_a23.length - _e58).addClass("".concat(s.bulletActiveClass, "-main"));
                }

                _a23.eq(_a23.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else c(_e56, "prev"), c(_n8, "next");
            } else c(_e56, "prev"), c(_n8, "next");
          }
        }

        if (s.dynamicBullets) {
          var _i13 = Math.min(_a23.length, s.dynamicMainBullets + 4),
              _r7 = (n * _i13 - n) / 2 - _u3 * n,
              _l6 = e ? "right" : "left";

          _a23.css(t.isHorizontal() ? _l6 : "top", "".concat(_r7, "px"));
        }
      }

      if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        var _e59;

        _e59 = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";

        var _a24 = (p + 1) / u;

        var _i14 = 1,
            _n9 = 1;
        "horizontal" === _e59 ? _i14 = _a24 : _n9 = _a24, r.find(U(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i14, ") scaleY(").concat(_n9, ")")).transition(t.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }

    function u() {
      var e = t.params.pagination;
      if (o()) return;
      var s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          a = t.pagination.$el;
      var r = "";

      if ("bullets" === e.type) {
        var _i15 = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && _i15 > s && (_i15 = s);

        for (var _s37 = 0; _s37 < _i15; _s37 += 1) {
          e.renderBullet ? r += e.renderBullet.call(t, _s37, e.bulletClass) : r += "<".concat(e.bulletElement, " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">");
        }

        a.html(r), t.pagination.bullets = a.find(U(e.bulletClass));
      }

      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>"), a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : "<span class=\"".concat(e.progressbarFillClass, "\"></span>"), a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
    }

    function h() {
      t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      var e = t.params.pagination;
      if (!e.el) return;
      var s = d(e.el);
      0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(function (e) {
        return d(e).parents(".swiper")[0] === t.el;
      }))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(e.modifierClass + t.params.direction), "bullets" === e.type && e.dynamicBullets && (s.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), function (e) {
        e.preventDefault();
        var s = d(this).index() * t.params.slidesPerGroup;
        t.params.loop && (s += t.loopedSlides), t.slideTo(s);
      }), Object.assign(t.pagination, {
        $el: s,
        el: s[0]
      }), t.enabled || s.addClass(e.lockClass));
    }

    function m() {
      var e = t.params.pagination;
      if (o()) return;
      var s = t.pagination.$el;
      s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(e.modifierClass + t.params.direction), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass));
    }

    a("init", function () {
      h(), u(), p();
    }), a("activeIndexChange", function () {
      (t.params.loop || void 0 === t.snapIndex) && p();
    }), a("snapIndexChange", function () {
      t.params.loop || p();
    }), a("slidesLengthChange", function () {
      t.params.loop && (u(), p());
    }), a("snapGridLengthChange", function () {
      t.params.loop || (u(), p());
    }), a("destroy", function () {
      m();
    }), a("enable disable", function () {
      var e = t.pagination.$el;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
    }), a("lock unlock", function () {
      p();
    }), a("click", function (e, s) {
      var a = s.target,
          r = t.pagination.$el;

      if (t.params.pagination.el && t.params.pagination.hideOnClick && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;

        var _e60 = r.hasClass(t.params.pagination.hiddenClass);

        i(!0 === _e60 ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
      }
    }), Object.assign(t.pagination, {
      render: u,
      update: p,
      init: h,
      destroy: m
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        r = e.emit;
    var n = a();
    var l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;

    function g() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
          s = t.rtlTranslate,
          a = t.progress,
          i = e.$dragEl,
          r = e.$el,
          n = t.params.scrollbar;
      var l = o,
          d = (c - o) * a;
      s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform("translate3d(".concat(d, "px, 0, 0)")), i[0].style.width = "".concat(l, "px")) : (i.transform("translate3d(0px, ".concat(d, "px, 0)")), i[0].style.height = "".concat(l, "px")), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout(function () {
        r[0].style.opacity = 0, r.transition(400);
      }, 1e3));
    }

    function v() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
          s = e.$dragEl,
          a = e.$el;
      s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = "".concat(o, "px") : s[0].style.height = "".concat(o, "px"), a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
    }

    function w(e) {
      return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    }

    function b(e) {
      var s = t.scrollbar,
          a = t.rtlTranslate,
          i = s.$el;
      var r;
      r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      var n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
    }

    function x(e) {
      var s = t.params.scrollbar,
          a = t.scrollbar,
          i = t.$wrapperEl,
          n = a.$el,
          o = a.$dragEl;
      h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e);
    }

    function y(e) {
      var s = t.scrollbar,
          a = t.$wrapperEl,
          i = s.$el,
          n = s.$dragEl;
      h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e));
    }

    function E(e) {
      var s = t.params.scrollbar,
          a = t.scrollbar,
          i = t.$wrapperEl,
          n = a.$el;
      h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p(function () {
        n.css("opacity", 0), n.transition(400);
      }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    }

    function T(e) {
      var s = t.scrollbar,
          a = t.touchEventsTouch,
          i = t.touchEventsDesktop,
          r = t.params,
          l = t.support,
          o = s.$el[0],
          d = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          c = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      if (!o) return;
      var p = "on" === e ? "addEventListener" : "removeEventListener";
      l.touch ? (o[p](a.start, x, d), o[p](a.move, y, d), o[p](a.end, E, c)) : (o[p](i.start, x, d), n[p](i.move, y, d), n[p](i.end, E, c));
    }

    function C() {
      var e = t.scrollbar,
          s = t.$el;
      t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      var a = t.params.scrollbar;
      if (!a.el) return;
      var i = d(a.el);
      t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
      var r = i.find(".".concat(t.params.scrollbar.dragClass));
      0 === r.length && (r = d("<div class=\"".concat(t.params.scrollbar.dragClass, "\"></div>")), i.append(r)), Object.assign(e, {
        $el: i,
        el: i[0],
        $dragEl: r,
        dragEl: r[0]
      }), a.draggable && t.params.scrollbar.el && T("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }

    function $() {
      t.params.scrollbar.el && T("off");
    }

    s({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    }), t.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, i("init", function () {
      C(), v(), g();
    }), i("update resize observerUpdate lock unlock", function () {
      v();
    }), i("setTranslate", function () {
      g();
    }), i("setTransition", function (e, s) {
      !function (e) {
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
      }(s);
    }), i("enable disable", function () {
      var e = t.scrollbar.$el;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }), i("destroy", function () {
      $();
    }), Object.assign(t.scrollbar, {
      updateSize: v,
      setTranslate: g,
      init: C,
      destroy: $
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      parallax: {
        enabled: !1
      }
    });

    var i = function i(e, s) {
      var a = t.rtl,
          i = d(e),
          r = a ? -1 : 1,
          n = i.attr("data-swiper-parallax") || "0";
      var l = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
      var c = i.attr("data-swiper-parallax-scale"),
          p = i.attr("data-swiper-parallax-opacity");

      if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
        var _e61 = p - (p - 1) * (1 - Math.abs(s));

        i[0].style.opacity = _e61;
      }

      if (null == c) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
        var _e62 = c - (c - 1) * (1 - Math.abs(s));

        i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e62, ")"));
      }
    },
        r = function r() {
      var e = t.$el,
          s = t.slides,
          a = t.progress,
          r = t.snapGrid;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
        i(e, a);
      }), s.each(function (e, s) {
        var n = e.progress;
        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          i(e, n);
        });
      });
    };

    a("beforeInit", function () {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
    }), a("init", function () {
      t.params.parallax.enabled && r();
    }), a("setTranslate", function () {
      t.params.parallax.enabled && r();
    }), a("setTransition", function (e, s) {
      t.params.parallax.enabled && function (e) {
        void 0 === e && (e = t.params.speed);
        var s = t.$el;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var s = d(t);
          var a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), s.transition(a);
        });
      }(s);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    var n = r();
    s({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), t.zoom = {
      enabled: !1
    };
    var l,
        o,
        c,
        p = 1,
        u = !1;
    var m = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3
    },
        f = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    },
        g = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    var v = 1;

    function w(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(a - t, 2) + Math.pow(i - s, 2));
    }

    function b(e) {
      var s = t.support,
          a = t.params.zoom;

      if (o = !1, c = !1, !s.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        o = !0, m.scaleStart = w(e);
      }

      m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass)), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass)), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0;
    }

    function x(e) {
      var s = t.support,
          a = t.params.zoom,
          i = t.zoom;

      if (!s.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        c = !0, m.scaleMove = w(e);
      }

      m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + Math.pow(i.scale - m.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), m.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === e.type && b(e);
    }

    function y(e) {
      var s = t.device,
          a = t.support,
          i = t.params.zoom,
          r = t.zoom;

      if (!a.gestures) {
        if (!o || !c) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
        o = !1, c = !1;
      }

      m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0));
    }

    function E(e) {
      var s = t.zoom;
      if (!m.$imageEl || 0 === m.$imageEl.length) return;
      if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
      f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
      var a = f.width * s.scale,
          i = f.height * s.scale;

      if (!(a < m.slideWidth && i < m.slideHeight)) {
        if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
          if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1);
        }

        e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - Math.pow(f.minX - f.currentX + 1, .8)), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + Math.pow(f.currentX - f.maxX + 1, .8)), f.currentY < f.minY && (f.currentY = f.minY + 1 - Math.pow(f.minY - f.currentY + 1, .8)), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + Math.pow(f.currentY - f.maxY + 1, .8)), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }
    }

    function T() {
      var e = t.zoom;
      m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0);
    }

    function C(e) {
      var s = t.zoom,
          a = t.params.zoom;
      if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass))), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass))), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
      var i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > T && (h = T), g < E && (g = E), g > C && (g = C)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform("translate3d(".concat(h, "px, ").concat(g, "px,0)")), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    }

    function $() {
      var e = t.zoom,
          s = t.params.zoom;
      m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(".".concat(s.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(s.containerClass))), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass("".concat(s.zoomedSlideClass)), m.$slideEl = void 0);
    }

    function S(e) {
      var s = t.zoom;
      s.scale && 1 !== s.scale ? $() : C(e);
    }

    function M() {
      var e = t.support;
      return {
        passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !e.passiveListener || {
          passive: !1,
          capture: !0
        }
      };
    }

    function P() {
      return ".".concat(t.params.slideClass);
    }

    function k(e) {
      var _M = M(),
          s = _M.passiveListener,
          a = P();

      t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s);
    }

    function z() {
      l || (l = !0, k("on"));
    }

    function O() {
      l && (l = !1, k("off"));
    }

    function I() {
      var e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;

      var s = t.support,
          _M2 = M(),
          a = _M2.passiveListener,
          i = _M2.activeListenerWithCapture,
          r = P();

      s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    function L() {
      var e = t.zoom;
      if (!e.enabled) return;
      var s = t.support;
      e.enabled = !1;

      var _M3 = M(),
          a = _M3.passiveListener,
          i = _M3.activeListenerWithCapture,
          r = P();

      s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, O, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    Object.defineProperty(t.zoom, "scale", {
      get: function get() {
        return v;
      },
      set: function set(e) {
        if (v !== e) {
          var _t49 = m.$imageEl ? m.$imageEl[0] : void 0,
              _s38 = m.$slideEl ? m.$slideEl[0] : void 0;

          i("zoomChange", e, _t49, _s38);
        }

        v = e;
      }
    }), a("init", function () {
      t.params.zoom.enabled && I();
    }), a("destroy", function () {
      L();
    }), a("touchStart", function (e, s) {
      t.zoom.enabled && function (e) {
        var s = t.device;
        m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      }(s);
    }), a("touchEnd", function (e, s) {
      t.zoom.enabled && function () {
        var e = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
        f.isTouched = !1, f.isMoved = !1;
        var s = 300,
            a = 300;
        var i = g.x * s,
            r = f.currentX + i,
            n = g.y * a,
            l = f.currentY + n;
        0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
        var o = Math.max(s, a);
        f.currentX = r, f.currentY = l;
        var d = f.width * e.scale,
            c = f.height * e.scale;
        f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }();
    }), a("doubleTap", function (e, s) {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
    }), a("transitionEnd", function () {
      t.zoom.enabled && t.params.zoom.enabled && T();
    }), a("slideChange", function () {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T();
    }), Object.assign(t.zoom, {
      enable: I,
      disable: L,
      "in": C,
      out: $,
      toggle: S
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on,
        i = e.emit;
    s({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    }), t.lazy = {};
    var n = !1,
        l = !1;

    function o(e, s) {
      void 0 === s && (s = !0);
      var a = t.params.lazy;
      if (void 0 === e) return;
      if (0 === t.slides.length) return;
      var r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : t.slides.eq(e),
          n = r.find(".".concat(a.elementClass, ":not(.").concat(a.loadedClass, "):not(.").concat(a.loadingClass, ")"));
      !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(function (e) {
        var n = d(e);
        n.addClass(a.loadingClass);
        var l = n.attr("data-background"),
            c = n.attr("data-src"),
            p = n.attr("data-srcset"),
            u = n.attr("data-sizes"),
            h = n.parent("picture");
        t.loadImage(n[0], c || l, p, u, !1, function () {
          if (null != t && t && (!t || t.params) && !t.destroyed) {
            if (l ? (n.css("background-image", "url(\"".concat(l, "\")")), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
              var t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(".".concat(a.preloaderClass)).remove(), t.params.loop && s) {
              var _e63 = r.attr("data-swiper-slide-index");

              if (r.hasClass(t.params.slideDuplicateClass)) {
                o(t.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e63, "\"]:not(.").concat(t.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                o(t.$wrapperEl.children(".".concat(t.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e63, "\"]")).index(), !1);
              }
            }

            i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
          }
        }), i("lazyImageLoad", r[0], n[0]);
      });
    }

    function c() {
      var e = t.$wrapperEl,
          s = t.params,
          a = t.slides,
          i = t.activeIndex,
          r = t.virtual && s.virtual.enabled,
          n = s.lazy;
      var c = s.slidesPerView;

      function p(t) {
        if (r) {
          if (e.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(t, "\"]")).length) return !0;
        } else if (a[t]) return !0;

        return !1;
      }

      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
      }

      if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(".".concat(s.slideVisibleClass)).each(function (e) {
        o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
      });else if (c > 1) for (var _e64 = i; _e64 < i + c; _e64 += 1) {
        p(_e64) && o(_e64);
      } else o(i);
      if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        var _e65 = n.loadPrevNextAmount,
            _t50 = c,
            _s39 = Math.min(i + _t50 + Math.max(_e65, _t50), a.length),
            _r8 = Math.max(i - Math.max(_t50, _e65), 0);

        for (var _e66 = i + c; _e66 < _s39; _e66 += 1) {
          p(_e66) && o(_e66);
        }

        for (var _e67 = _r8; _e67 < i; _e67 += 1) {
          p(_e67) && o(_e67);
        }
      } else {
        var _t51 = e.children(".".concat(s.slideNextClass));

        _t51.length > 0 && o(u(_t51));

        var _a25 = e.children(".".concat(s.slidePrevClass));

        _a25.length > 0 && o(u(_a25));
      }
    }

    function p() {
      var e = r();
      if (!t || t.destroyed) return;
      var s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
          a = s[0] === e,
          i = a ? e.innerWidth : s[0].offsetWidth,
          l = a ? e.innerHeight : s[0].offsetHeight,
          o = t.$el.offset(),
          u = t.rtlTranslate;
      var h = !1;
      u && (o.left -= t.$el[0].scrollLeft);
      var m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];

      for (var _e68 = 0; _e68 < m.length; _e68 += 1) {
        var _t52 = m[_e68];

        if (_t52[0] >= 0 && _t52[0] <= i && _t52[1] >= 0 && _t52[1] <= l) {
          if (0 === _t52[0] && 0 === _t52[1]) continue;
          h = !0;
        }
      }

      var f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f));
    }

    a("beforeInit", function () {
      t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
    }), a("init", function () {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("scroll", function () {
      t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
    }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionStart", function () {
      t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionEnd", function () {
      t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c());
    }), a("slideChange", function () {
      var _t$params = t.params,
          e = _t$params.lazy,
          s = _t$params.cssMode,
          a = _t$params.watchSlidesProgress,
          i = _t$params.touchReleaseOnEdges,
          r = _t$params.resistanceRatio;
      e.enabled && (s || a && (i || 0 === r)) && c();
    }), Object.assign(t.lazy, {
      load: c,
      loadInSlide: o
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;

    function i(e, t) {
      var s = function () {
        var e, t, s;
        return function (a, i) {
          for (t = -1, e = a.length; e - t > 1;) {
            s = e + t >> 1, a[s] <= i ? t = s : e = s;
          }

          return e;
        };
      }();

      var a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }

    function r() {
      t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
    }

    s({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), t.controller = {
      control: void 0
    }, a("beforeInit", function () {
      t.controller.control = t.params.controller.control;
    }), a("update", function () {
      r();
    }), a("resize", function () {
      r();
    }), a("observerUpdate", function () {
      r();
    }), a("setTranslate", function (e, s, a) {
      t.controller.control && t.controller.setTranslate(s, a);
    }), a("setTransition", function (e, s, a) {
      t.controller.control && t.controller.setTransition(s, a);
    }), Object.assign(t.controller, {
      setTranslate: function setTranslate(e, s) {
        var a = t.controller.control;
        var r, n;
        var l = t.constructor;

        function o(e) {
          var s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function (e) {
            t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(a)) for (var _e69 = 0; _e69 < a.length; _e69 += 1) {
          a[_e69] !== s && a[_e69] instanceof l && o(a[_e69]);
        } else a instanceof l && s !== a && o(a);
      },
      setTransition: function setTransition(e, s) {
        var a = t.constructor,
            i = t.controller.control;
        var r;

        function n(s) {
          s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p(function () {
            s.updateAutoHeight();
          }), s.$wrapperEl.transitionEnd(function () {
            i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) {
          i[r] !== s && i[r] instanceof a && n(i[r]);
        } else i instanceof a && s !== i && n(i);
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group"
      }
    });
    var i = null;

    function r(e) {
      var t = i;
      0 !== t.length && (t.html(""), t.html(e));
    }

    function n(e) {
      e.attr("tabIndex", "0");
    }

    function l(e) {
      e.attr("tabIndex", "-1");
    }

    function o(e, t) {
      e.attr("role", t);
    }

    function c(e, t) {
      e.attr("aria-roledescription", t);
    }

    function p(e, t) {
      e.attr("aria-label", t);
    }

    function u(e) {
      e.attr("aria-disabled", !0);
    }

    function h(e) {
      e.attr("aria-disabled", !1);
    }

    function m(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      var s = t.params.a11y,
          a = d(e.target);
      t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click();
    }

    function f() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
    }

    function g() {
      return f() && t.params.pagination.clickable;
    }

    var v = function v(e, t, s) {
      n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
        e.attr("aria-controls", t);
      }(e, t);
    },
        w = function w(e) {
      var s = e.target.closest(".".concat(t.params.slideClass));
      if (!s || !t.slides.includes(s)) return;
      var a = t.slides.indexOf(s) === t.activeIndex,
          i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
      a || i || t.slideTo(t.slides.indexOf(s), 0);
    };

    function b() {
      var e = t.params.a11y;
      t.$el.append(i);
      var s = t.$el;
      e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
      var a = t.$wrapperEl,
          r = a.attr("id") || "swiper-wrapper-".concat((n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      })));
      var n;
      var l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      var u;
      u = r, a.attr("id", u), function (e, t) {
        e.attr("aria-live", t);
      }(a, l), e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), o(d(t.slides), e.slideRole);
      var h = t.params.loop ? t.slides.filter(function (e) {
        return !e.classList.contains(t.params.slideDuplicateClass);
      }).length : t.slides.length;
      var f, b;
      t.slides.each(function (s, a) {
        var i = d(s),
            r = t.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
        p(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, h));
      }), t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl), f && f.length && v(f, r, e.nextSlideMessage), b && b.length && v(b, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", w, !0);
    }

    a("beforeInit", function () {
      i = d("<span class=\"".concat(t.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), a("afterInit", function () {
      t.params.a11y.enabled && b();
    }), a("fromEdge toEdge afterInit lock unlock", function () {
      t.params.a11y.enabled && function () {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        var _t$navigation5 = t.navigation,
            e = _t$navigation5.$nextEl,
            s = _t$navigation5.$prevEl;
        s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
      }();
    }), a("paginationUpdate", function () {
      t.params.a11y.enabled && function () {
        var e = t.params.a11y;
        f() && t.pagination.bullets.each(function (s) {
          var a = d(s);
          t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(".".concat(t.params.pagination.bulletActiveClass)) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
        });
      }();
    }), a("destroy", function () {
      t.params.a11y.enabled && function () {
        var e, s;
        i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", w, !0);
      }();
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides"
      }
    });
    var i = !1,
        n = {};

    var l = function l(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
        o = function o(e) {
      var t = r();
      var s;
      s = e ? new URL(e) : t.location;
      var a = s.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
        d = function d(e, s) {
      var a = r();
      if (!i || !t.params.history.enabled) return;
      var n;
      n = t.params.url ? new URL(t.params.url) : a.location;
      var o = t.slides.eq(s);
      var d = l(o.attr("data-history"));

      if (t.params.history.root.length > 0) {
        var _s40 = t.params.history.root;
        "/" === _s40[_s40.length - 1] && (_s40 = _s40.slice(0, _s40.length - 1)), d = "".concat(_s40, "/").concat(e, "/").concat(d);
      } else n.pathname.includes(e) || (d = "".concat(e, "/").concat(d));

      var c = a.history.state;
      c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
        value: d
      }, null, d) : a.history.pushState({
        value: d
      }, null, d));
    },
        c = function c(e, s, a) {
      if (s) for (var _i16 = 0, _r9 = t.slides.length; _i16 < _r9; _i16 += 1) {
        var _r10 = t.slides.eq(_i16);

        if (l(_r10.attr("data-history")) === s && !_r10.hasClass(t.params.slideDuplicateClass)) {
          var _s41 = _r10.index();

          t.slideTo(_s41, e, a);
        }
      } else t.slideTo(0, e, a);
    },
        p = function p() {
      n = o(t.params.url), c(t.params.speed, t.paths.value, !1);
    };

    a("init", function () {
      t.params.history.enabled && function () {
        var e = r();

        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p));
        }
      }();
    }), a("destroy", function () {
      t.params.history.enabled && function () {
        var e = r();
        t.params.history.replaceState || e.removeEventListener("popstate", p);
      }();
    }), a("transitionEnd _freeModeNoMomentumRelease", function () {
      i && d(t.params.history.key, t.activeIndex);
    }), a("slideChange", function () {
      i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.emit,
        n = e.on,
        l = !1;
    var o = a(),
        c = r();
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    });

    var p = function p() {
      i("hashChange");
      var e = o.location.hash.replace("#", "");

      if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
        var _s42 = t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-hash=\"").concat(e, "\"]")).index();

        if (void 0 === _s42) return;
        t.slideTo(_s42);
      }
    },
        u = function u() {
      if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, "#".concat(t.slides.eq(t.activeIndex).attr("data-hash")) || ""), i("hashSet");else {
        var _e70 = t.slides.eq(t.activeIndex),
            _s43 = _e70.attr("data-hash") || _e70.attr("data-history");

        o.location.hash = _s43 || "", i("hashSet");
      }
    };

    n("init", function () {
      t.params.hashNavigation.enabled && function () {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        var e = o.location.hash.replace("#", "");

        if (e) {
          var _s44 = 0;

          for (var _a26 = 0, _i17 = t.slides.length; _a26 < _i17; _a26 += 1) {
            var _i18 = t.slides.eq(_a26);

            if ((_i18.attr("data-hash") || _i18.attr("data-history")) === e && !_i18.hasClass(t.params.slideDuplicateClass)) {
              var _e71 = _i18.index();

              t.slideTo(_e71, _s44, t.params.runCallbacksOnInit, !0);
            }
          }
        }

        t.params.hashNavigation.watchState && d(c).on("hashchange", p);
      }();
    }), n("destroy", function () {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p);
    }), n("transitionEnd _freeModeNoMomentumRelease", function () {
      l && u();
    }), n("slideChange", function () {
      l && t.params.cssMode && u();
    });
  }, function (e) {
    var t,
        s = e.swiper,
        i = e.extendParams,
        r = e.on,
        n = e.emit;

    function l() {
      var e = s.slides.eq(s.activeIndex);
      var a = s.params.autoplay.delay;
      e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p(function () {
        var e;
        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l();
      }, a);
    }

    function o() {
      return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0);
    }

    function d() {
      return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0);
    }

    function c(e) {
      s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].addEventListener(e, h);
      }) : (s.autoplay.paused = !1, l())));
    }

    function u() {
      var e = a();
      "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1);
    }

    function h(e) {
      s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].removeEventListener(e, h);
      }), s.autoplay.paused = !1, s.autoplay.running ? l() : d());
    }

    function m() {
      s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        s.$wrapperEl[0].removeEventListener(e, h);
      });
    }

    function f() {
      s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l());
    }

    s.autoplay = {
      running: !1,
      paused: !1
    }, i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), r("init", function () {
      if (s.params.autoplay.enabled) {
        o();
        a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
      }
    }), r("beforeTransitionStart", function (e, t, a) {
      s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
    }), r("sliderFirstMove", function () {
      s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
    }), r("touchEnd", function () {
      s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
    }), r("destroy", function () {
      s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
      a().removeEventListener("visibilitychange", u);
    }), Object.assign(s.autoplay, {
      pause: c,
      run: l,
      start: o,
      stop: d
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    var i = !1,
        r = !1;

    function n() {
      var e = t.thumbs.swiper;
      if (!e) return;
      var s = e.clickedIndex,
          a = e.clickedSlide;
      if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      var i;

      if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
        var _e72 = t.activeIndex;
        t.slides.eq(_e72).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, _e72 = t.activeIndex);

        var _s45 = t.slides.eq(_e72).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
            _a27 = t.slides.eq(_e72).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();

        i = void 0 === _s45 ? _a27 : void 0 === _a27 ? _s45 : _a27 - _e72 < _e72 - _s45 ? _a27 : _s45;
      }

      t.slideTo(i);
    }

    function l() {
      var e = t.params.thumbs;
      if (i) return !1;
      i = !0;
      var s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(t.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      });else if (m(e.swiper)) {
        var _a28 = Object.assign({}, e.swiper);

        Object.assign(_a28, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new s(_a28), r = !0;
      }
      return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0;
    }

    function o(e) {
      var s = t.thumbs.swiper;
      if (!s) return;
      var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
          i = t.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;

      if (t.realIndex !== s.realIndex || r) {
        var _n10,
            _l7,
            _o6 = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(_o6).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o6 = s.activeIndex);

          var _e73 = s.slides.eq(_o6).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
              _a29 = s.slides.eq(_o6).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

          _n10 = void 0 === _e73 ? _a29 : void 0 === _a29 ? _e73 : _a29 - _o6 == _o6 - _e73 ? s.params.slidesPerGroup > 1 ? _a29 : _o6 : _a29 - _o6 < _o6 - _e73 ? _a29 : _e73, _l7 = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else _n10 = t.realIndex, _l7 = _n10 > t.previousIndex ? "next" : "prev";

        r && (_n10 += "next" === _l7 ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_n10) < 0 && (s.params.centeredSlides ? _n10 = _n10 > _o6 ? _n10 - Math.floor(a / 2) + 1 : _n10 + Math.floor(a / 2) - 1 : _n10 > _o6 && s.params.slidesPerGroup, s.slideTo(_n10, e ? 0 : void 0));
      }

      var n = 1;
      var l = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _e74 = 0; _e74 < n; _e74 += 1) {
        s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e74, "\"]")).addClass(l);
      } else for (var _e75 = 0; _e75 < n; _e75 += 1) {
        s.slides.eq(t.realIndex + _e75).addClass(l);
      }
    }

    t.thumbs = {
      swiper: null
    }, a("beforeInit", function () {
      var e = t.params.thumbs;
      e && e.swiper && (l(), o(!0));
    }), a("slideChange update resize observerUpdate", function () {
      t.thumbs.swiper && o();
    }), a("setTransition", function (e, s) {
      var a = t.thumbs.swiper;
      a && a.setTransition(s);
    }), a("beforeDestroy", function () {
      var e = t.thumbs.swiper;
      e && r && e && e.destroy();
    }), Object.assign(t.thumbs, {
      init: l,
      update: o
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.emit,
        i = e.once;
    s({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(t, {
      freeMode: {
        onTouchStart: function onTouchStart() {
          var e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function onTouchMove() {
          var e = t.touchEventsData,
              s = t.touches;
          0 === e.velocities.length && e.velocities.push({
            position: s[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: u()
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          var s = e.currentPos;
          var r = t.params,
              n = t.$wrapperEl,
              l = t.rtlTranslate,
              o = t.snapGrid,
              d = t.touchEventsData,
              c = u() - d.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (d.velocities.length > 1) {
                var _e77 = d.velocities.pop(),
                    _s47 = d.velocities.pop(),
                    _a30 = _e77.position - _s47.position,
                    _i19 = _e77.time - _s47.time;

                t.velocity = _a30 / _i19, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (_i19 > 150 || u() - _e77.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;

              t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;

              var _e76 = 1e3 * r.freeMode.momentumRatio;

              var _s46 = t.velocity * _e76;

              var _c4 = t.translate + _s46;

              l && (_c4 = -_c4);

              var _p2,
                  _h = !1;

              var _m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;

              var _f;

              if (_c4 < t.maxTranslate()) r.freeMode.momentumBounce ? (_c4 + t.maxTranslate() < -_m && (_c4 = t.maxTranslate() - _m), _p2 = t.maxTranslate(), _h = !0, d.allowMomentumBounce = !0) : _c4 = t.maxTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (_c4 > t.minTranslate()) r.freeMode.momentumBounce ? (_c4 - t.minTranslate() > _m && (_c4 = t.minTranslate() + _m), _p2 = t.minTranslate(), _h = !0, d.allowMomentumBounce = !0) : _c4 = t.minTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (r.freeMode.sticky) {
                var _e78;

                for (var _t53 = 0; _t53 < o.length; _t53 += 1) {
                  if (o[_t53] > -_c4) {
                    _e78 = _t53;
                    break;
                  }
                }

                _c4 = Math.abs(o[_e78] - _c4) < Math.abs(o[_e78 - 1] - _c4) || "next" === t.swipeDirection ? o[_e78] : o[_e78 - 1], _c4 = -_c4;
              }

              if (_f && i("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (_e76 = l ? Math.abs((-_c4 - t.translate) / t.velocity) : Math.abs((_c4 - t.translate) / t.velocity), r.freeMode.sticky) {
                  var _s48 = Math.abs((l ? -_c4 : _c4) - t.translate),
                      _a31 = t.slidesSizesGrid[t.activeIndex];

                  _e76 = _s48 < _a31 ? r.speed : _s48 < 2 * _a31 ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();

              r.freeMode.momentumBounce && _h ? (t.updateProgress(_p2), t.setTransition(_e76), t.setTranslate(_c4), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(function () {
                  t.setTranslate(_p2), n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(_c4), t.setTransition(_e76), t.setTranslate(_c4), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(_c4), t.updateActiveIndex(), t.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease");
            }

            (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          }
        }
      }
    });
  }, function (e) {
    var t,
        s,
        a,
        i = e.swiper,
        r = e.extendParams;
    r({
      grid: {
        rows: 1,
        fill: "column"
      }
    }), i.grid = {
      initSlides: function initSlides(e) {
        var r = i.params.slidesPerView,
            _i$params$grid = i.params.grid,
            n = _i$params$grid.rows,
            l = _i$params$grid.fill;
        s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n));
      },
      updateSlide: function updateSlide(e, r, n, l) {
        var _i$params = i.params,
            o = _i$params.slidesPerGroup,
            d = _i$params.spaceBetween,
            _i$params$grid2 = i.params.grid,
            c = _i$params$grid2.rows,
            p = _i$params$grid2.fill;
        var u, h, m;

        if ("row" === p && o > 1) {
          var _s49 = Math.floor(e / (o * c)),
              _a32 = e - c * o * _s49,
              _i20 = 0 === _s49 ? o : Math.min(Math.ceil((n - _s49 * c * o) / c), o);

          m = Math.floor(_a32 / _i20), h = _a32 - m * _i20 + _s49 * o, u = h + m * t / c, r.css({
            "-webkit-order": u,
            order: u
          });
        } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);

        r.css(l("margin-top"), 0 !== m ? d && "".concat(d, "px") : "");
      },
      updateWrapperSize: function updateWrapperSize(e, s, a) {
        var _i$params2 = i.params,
            r = _i$params2.spaceBetween,
            n = _i$params2.centeredSlides,
            l = _i$params2.roundLengths,
            o = i.params.grid.rows;

        if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css(_defineProperty({}, a("width"), "".concat(i.virtualSize + r, "px"))), n) {
          s.splice(0, s.length);
          var _e79 = [];

          for (var _t54 = 0; _t54 < s.length; _t54 += 1) {
            var _a33 = s[_t54];
            l && (_a33 = Math.floor(_a33)), s[_t54] < i.virtualSize + s[0] && _e79.push(_a33);
          }

          s.push.apply(s, _e79);
        }
      }
    };
  }, function (e) {
    var t = e.swiper;
    Object.assign(t, {
      appendSlide: K.bind(t),
      prependSlide: Z.bind(t),
      addSlide: J.bind(t),
      removeSlide: Q.bind(t),
      removeAllSlides: ee.bind(t)
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      fadeEffect: {
        crossFade: !1,
        transformEl: null
      }
    }), te({
      effect: "fade",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.params.fadeEffect;

        for (var _a34 = 0; _a34 < e.length; _a34 += 1) {
          var _e80 = t.slides.eq(_a34);

          var _i21 = -_e80[0].swiperSlideOffset;

          t.params.virtualTranslate || (_i21 -= t.translate);
          var _r11 = 0;
          t.isHorizontal() || (_r11 = _i21, _i21 = 0);

          var _n11 = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_e80[0].progress), 0) : 1 + Math.min(Math.max(_e80[0].progress, -1), 0);

          se(s, _e80).css({
            opacity: _n11
          }).transform("translate3d(".concat(_i21, "px, ").concat(_r11, "px, 0px)"));
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.fadeEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    }), te({
      effect: "cube",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.$el,
            s = t.$wrapperEl,
            a = t.slides,
            i = t.width,
            r = t.height,
            n = t.rtlTranslate,
            l = t.size,
            o = t.browser,
            c = t.params.cubeEffect,
            p = t.isHorizontal(),
            u = t.virtual && t.params.virtual.enabled;
        var h,
            m = 0;
        c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
          height: "".concat(i, "px")
        })) : (h = e.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), e.append(h))));

        for (var _e81 = 0; _e81 < a.length; _e81 += 1) {
          var _t55 = a.eq(_e81);

          var _s50 = _e81;
          u && (_s50 = parseInt(_t55.attr("data-swiper-slide-index"), 10));

          var _i22 = 90 * _s50,
              _r12 = Math.floor(_i22 / 360);

          n && (_i22 = -_i22, _r12 = Math.floor(-_i22 / 360));

          var _o7 = Math.max(Math.min(_t55[0].progress, 1), -1);

          var _h2 = 0,
              _f2 = 0,
              _g = 0;
          _s50 % 4 == 0 ? (_h2 = 4 * -_r12 * l, _g = 0) : (_s50 - 1) % 4 == 0 ? (_h2 = 0, _g = 4 * -_r12 * l) : (_s50 - 2) % 4 == 0 ? (_h2 = l + 4 * _r12 * l, _g = l) : (_s50 - 3) % 4 == 0 && (_h2 = -l, _g = 3 * l + 4 * l * _r12), n && (_h2 = -_h2), p || (_f2 = _h2, _h2 = 0);

          var _v = "rotateX(".concat(p ? 0 : -_i22, "deg) rotateY(").concat(p ? _i22 : 0, "deg) translate3d(").concat(_h2, "px, ").concat(_f2, "px, ").concat(_g, "px)");

          if (_o7 <= 1 && _o7 > -1 && (m = 90 * _s50 + 90 * _o7, n && (m = 90 * -_s50 - 90 * _o7)), _t55.transform(_v), c.slideShadows) {
            var _e82 = p ? _t55.find(".swiper-slide-shadow-left") : _t55.find(".swiper-slide-shadow-top"),
                _s51 = p ? _t55.find(".swiper-slide-shadow-right") : _t55.find(".swiper-slide-shadow-bottom");

            0 === _e82.length && (_e82 = d("<div class=\"swiper-slide-shadow-".concat(p ? "left" : "top", "\"></div>")), _t55.append(_e82)), 0 === _s51.length && (_s51 = d("<div class=\"swiper-slide-shadow-".concat(p ? "right" : "bottom", "\"></div>")), _t55.append(_s51)), _e82.length && (_e82[0].style.opacity = Math.max(-_o7, 0)), _s51.length && (_s51[0].style.opacity = Math.max(_o7, 0));
          }
        }

        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"),
          "transform-origin": "50% 50% -".concat(l / 2, "px")
        }), c.shadow) if (p) h.transform("translate3d(0px, ".concat(i / 2 + c.shadowOffset, "px, ").concat(-i / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")"));else {
          var _e83 = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
              _t56 = 1.5 - (Math.sin(2 * _e83 * Math.PI / 360) / 2 + Math.cos(2 * _e83 * Math.PI / 360) / 2),
              _s52 = c.shadowScale,
              _a35 = c.shadowScale / _t56,
              _i23 = c.shadowOffset;

          h.transform("scale3d(".concat(_s52, ", 1, ").concat(_a35, ") translate3d(0px, ").concat(r / 2 + _i23, "px, ").concat(-r / 2 / _a35, "px) rotateX(-90deg)"));
        }
        var f = o.isSafari || o.isWebView ? -l / 2 : 0;
        s.transform("translate3d(0px,0,".concat(f, "px) rotateX(").concat(t.isHorizontal() ? 0 : m, "deg) rotateY(").concat(t.isHorizontal() ? -m : 0, "deg)"));
      },
      setTransition: function setTransition(e) {
        var s = t.$el,
            a = t.slides;
        a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null
      }
    }), te({
      effect: "flip",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.rtlTranslate,
            a = t.params.flipEffect;

        for (var _i24 = 0; _i24 < e.length; _i24 += 1) {
          var _r13 = e.eq(_i24);

          var _n12 = _r13[0].progress;
          t.params.flipEffect.limitRotation && (_n12 = Math.max(Math.min(_r13[0].progress, 1), -1));
          var _l8 = _r13[0].swiperSlideOffset;

          var _o8 = -180 * _n12,
              _d6 = 0,
              _c5 = t.params.cssMode ? -_l8 - t.translate : -_l8,
              _p3 = 0;

          if (t.isHorizontal() ? s && (_o8 = -_o8) : (_p3 = _c5, _c5 = 0, _d6 = -_o8, _o8 = 0), _r13[0].style.zIndex = -Math.abs(Math.round(_n12)) + e.length, a.slideShadows) {
            var _e84 = t.isHorizontal() ? _r13.find(".swiper-slide-shadow-left") : _r13.find(".swiper-slide-shadow-top"),
                _s53 = t.isHorizontal() ? _r13.find(".swiper-slide-shadow-right") : _r13.find(".swiper-slide-shadow-bottom");

            0 === _e84.length && (_e84 = ie(a, _r13, t.isHorizontal() ? "left" : "top")), 0 === _s53.length && (_s53 = ie(a, _r13, t.isHorizontal() ? "right" : "bottom")), _e84.length && (_e84[0].style.opacity = Math.max(-_n12, 0)), _s53.length && (_s53[0].style.opacity = Math.max(_n12, 0));
          }

          var _u4 = "translate3d(".concat(_c5, "px, ").concat(_p3, "px, 0px) rotateX(").concat(_d6, "deg) rotateY(").concat(_o8, "deg)");

          se(a, _r13).transform(_u4);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.flipEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), te({
      effect: "coverflow",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.width,
            s = t.height,
            a = t.slides,
            i = t.slidesSizesGrid,
            r = t.params.coverflowEffect,
            n = t.isHorizontal(),
            l = t.translate,
            o = n ? e / 2 - l : s / 2 - l,
            d = n ? r.rotate : -r.rotate,
            c = r.depth;

        for (var _e85 = 0, _t57 = a.length; _e85 < _t57; _e85 += 1) {
          var _t58 = a.eq(_e85),
              _s54 = i[_e85],
              _l9 = (o - _t58[0].swiperSlideOffset - _s54 / 2) / _s54 * r.modifier;

          var _p4 = n ? d * _l9 : 0,
              _u5 = n ? 0 : d * _l9,
              _h3 = -c * Math.abs(_l9),
              _m2 = r.stretch;

          "string" == typeof _m2 && -1 !== _m2.indexOf("%") && (_m2 = parseFloat(r.stretch) / 100 * _s54);

          var _f3 = n ? 0 : _m2 * _l9,
              _g2 = n ? _m2 * _l9 : 0,
              _v2 = 1 - (1 - r.scale) * Math.abs(_l9);

          Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_f3) < .001 && (_f3 = 0), Math.abs(_h3) < .001 && (_h3 = 0), Math.abs(_p4) < .001 && (_p4 = 0), Math.abs(_u5) < .001 && (_u5 = 0), Math.abs(_v2) < .001 && (_v2 = 0);

          var _w = "translate3d(".concat(_g2, "px,").concat(_f3, "px,").concat(_h3, "px)  rotateX(").concat(_u5, "deg) rotateY(").concat(_p4, "deg) scale(").concat(_v2, ")");

          if (se(r, _t58).transform(_w), _t58[0].style.zIndex = 1 - Math.abs(Math.round(_l9)), r.slideShadows) {
            var _e86 = n ? _t58.find(".swiper-slide-shadow-left") : _t58.find(".swiper-slide-shadow-top"),
                _s55 = n ? _t58.find(".swiper-slide-shadow-right") : _t58.find(".swiper-slide-shadow-bottom");

            0 === _e86.length && (_e86 = ie(r, _t58, n ? "left" : "top")), 0 === _s55.length && (_s55 = ie(r, _t58, n ? "right" : "bottom")), _e86.length && (_e86[0].style.opacity = _l9 > 0 ? _l9 : 0), _s55.length && (_s55[0].style.opacity = -_l9 > 0 ? -_l9 : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.coverflowEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });

    var i = function i(e) {
      return "string" == typeof e ? e : "".concat(e, "px");
    };

    te({
      effect: "creative",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.$wrapperEl,
            a = t.slidesSizesGrid,
            r = t.params.creativeEffect,
            n = r.progressMultiplier,
            l = t.params.centeredSlides;

        if (l) {
          var _e87 = a[0] / 2 - t.params.slidesOffsetBefore || 0;

          s.transform("translateX(calc(50% - ".concat(_e87, "px))"));
        }

        var _loop = function _loop(_s56) {
          var a = e.eq(_s56),
              o = a[0].progress,
              d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
          var c = d;
          l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
          var p = a[0].swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              h = [0, 0, 0];
          var m = !1;
          t.isHorizontal() || (u[1] = u[0], u[0] = 0);
          var f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(function (e, t) {
            u[t] = "calc(".concat(e, "px + (").concat(i(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
          }), h.forEach(function (e, t) {
            h[t] = f.rotate[t] * Math.abs(d * n);
          }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
          var g = u.join(", "),
              v = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"),
              w = c < 0 ? "scale(".concat(1 + (1 - f.scale) * c * n, ")") : "scale(".concat(1 - (1 - f.scale) * c * n, ")"),
              b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
              x = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);

          if (m && f.shadow || !m) {
            var _e88 = a.children(".swiper-slide-shadow");

            if (0 === _e88.length && f.shadow && (_e88 = ie(r, a)), _e88.length) {
              var _t59 = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;

              _e88[0].style.opacity = Math.min(Math.max(Math.abs(_t59), 0), 1);
            }
          }

          var y = se(r, a);
          y.transform(x).css({
            opacity: b
          }), f.origin && y.css("transform-origin", f.origin);
        };

        for (var _s56 = 0; _s56 < e.length; _s56 += 1) {
          _loop(_s56);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.creativeEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      perspective: function perspective() {
        return t.params.creativeEffect.perspective;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        a = e.on;
    s({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null
      }
    }), te({
      effect: "cards",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
            s = t.activeIndex,
            a = t.params.cardsEffect,
            _t$touchEventsData = t.touchEventsData,
            i = _t$touchEventsData.startTranslate,
            r = _t$touchEventsData.isTouched,
            n = t.translate;

        for (var _l10 = 0; _l10 < e.length; _l10 += 1) {
          var _o9 = e.eq(_l10),
              _d7 = _o9[0].progress,
              _c6 = Math.min(Math.max(_d7, -4), 4);

          var _p5 = _o9[0].swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform("translateX(".concat(t.minTranslate(), "px)")), t.params.centeredSlides && t.params.cssMode && (_p5 -= e[0].swiperSlideOffset);

          var _u6 = t.params.cssMode ? -_p5 - t.translate : -_p5,
              _h4 = 0;

          var _m3 = -100 * Math.abs(_c6);

          var _f4 = 1,
              _g3 = -2 * _c6,
              _v3 = 8 - .75 * Math.abs(_c6);

          var _w2 = (_l10 === s || _l10 === s - 1) && _c6 > 0 && _c6 < 1 && (r || t.params.cssMode) && n < i,
              _b = (_l10 === s || _l10 === s + 1) && _c6 < 0 && _c6 > -1 && (r || t.params.cssMode) && n > i;

          if (_w2 || _b) {
            var _e89 = Math.pow(1 - Math.abs((Math.abs(_c6) - .5) / .5), .5);

            _g3 += -28 * _c6 * _e89, _f4 += -.5 * _e89, _v3 += 96 * _e89, _h4 = -25 * _e89 * Math.abs(_c6) + "%";
          }

          if (_u6 = _c6 < 0 ? "calc(".concat(_u6, "px + (").concat(_v3 * Math.abs(_c6), "%))") : _c6 > 0 ? "calc(".concat(_u6, "px + (-").concat(_v3 * Math.abs(_c6), "%))") : "".concat(_u6, "px"), !t.isHorizontal()) {
            var _e90 = _h4;
            _h4 = _u6, _u6 = _e90;
          }

          var _x = "\n        translate3d(".concat(_u6, ", ").concat(_h4, ", ").concat(_m3, "px)\n        rotateZ(").concat(_g3, "deg)\n        scale(").concat(_c6 < 0 ? "" + (1 + (1 - _f4) * _c6) : "" + (1 - (1 - _f4) * _c6), ")\n      ");

          if (a.slideShadows) {
            var _e91 = _o9.find(".swiper-slide-shadow");

            0 === _e91.length && (_e91 = ie(a, _o9)), _e91.length && (_e91[0].style.opacity = Math.min(Math.max((Math.abs(_c6) - .5) / .5, 0), 1));
          }

          _o9[0].style.zIndex = -Math.abs(Math.round(_d7)) + e.length;
          se(a, _o9).transform(_x);
        }
      },
      setTransition: function setTransition(e) {
        var s = t.params.cardsEffect.transformEl;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode
        };
      }
    });
  }];
  return q.use(re), q;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return t(e, window);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window);
}(function (s, n) {
  "use strict";

  function e(e) {
    return 0 <= function (e, t) {
      for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
        if (+o[i] < +n[i]) return 1;
        if (+n[i] < +o[i]) return -1;
      }

      return 0;
    }(s.fn.jquery, e);
  }

  s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
  var r = {};

  function u(e) {
    var t = n.console;
    s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
  }

  function t(e, t, r, n) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return u(n), r;
      },
      set: function set(e) {
        u(n), r = e;
      }
    });
  }

  function o(e, t, r, n) {
    e[t] = function () {
      return u(n), r.apply(this, arguments);
    };
  }

  s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
    r = {}, s.migrateWarnings.length = 0;
  }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
  var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  for (i in s.fn.init = function (e) {
    var t = Array.prototype.slice.call(arguments);
    return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t);
  }, s.fn.init.prototype = s.fn, s.find = function (t) {
    var r = Array.prototype.slice.call(arguments);
    if ("string" == typeof t && f.test(t)) try {
      n.document.querySelector(t);
    } catch (e) {
      t = t.replace(y, function (e, t, r, n) {
        return "[" + t + r + '"' + n + '"]';
      });

      try {
        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t;
      } catch (e) {
        u("Attribute selector with '#' was not fixed: " + r[0]);
      }
    }
    return p.apply(this, r);
  }, p) {
    Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
  }

  o(s.fn, "size", function () {
    return this.length;
  }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function () {
    return JSON.parse.apply(null, arguments);
  }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function (e) {
    return null == e ? "" : (e + "").replace(m, "");
  }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function (e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function (e) {
    var t = _typeof(e);

    return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e));
  }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    d["[object " + t + "]"] = t.toLowerCase();
  }), o(s, "type", function (e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : _typeof(e);
  }, "jQuery.type is deprecated"), o(s, "isFunction", function (e) {
    return "function" == typeof e;
  }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function (e) {
    return null != e && e === e.window;
  }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function () {
    var e = a.apply(this, arguments);
    return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e;
  }, e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
    !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated");
  }));
  var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;

  function j(e) {
    return e.replace(/-([a-z])/g, function (e, t) {
      return t.toUpperCase();
    });
  }

  s.fn.removeAttr = function (e) {
    var r = this;
    return s.each(e.match(v), function (e, t) {
      s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1));
    }), g.apply(this, arguments);
  };

  var Q,
      b = !(s.fn.toggleClass = function (t) {
    return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
      var e = this.getAttribute && this.getAttribute("class") || "";
      e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "");
    }));
  }),
      w = /^[a-z]/,
      x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
    var r = s.cssHooks[t] && s.cssHooks[t].get;
    r && (s.cssHooks[t].get = function () {
      var e;
      return b = !0, e = r.apply(this, arguments), b = !1, e;
    });
  }), s.swap = function (e, t, r, n) {
    var o,
        i,
        a = {};

    for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) {
      a[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in o = r.apply(e, n || []), t) {
      e.style[i] = a[i];
    }

    return o;
  }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
    set: function set() {
      return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments);
    }
  })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function (e, t) {
    var r,
        n,
        o = this;
    return e && "object" == _typeof(e) && !Array.isArray(e) ? (s.each(e, function (e, t) {
      s.fn.css.call(o, e, t);
    }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments));
  };
  var A,
      k,
      S,
      M,
      N = s.data;
  s.data = function (e, t, r) {
    var n, o, i;

    if (t && "object" == _typeof(t) && 2 === arguments.length) {
      for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) {
        i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
      }

      return N.call(this, e, o), t;
    }

    return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments);
  }, s.fx && (S = s.Tween.prototype.run, M = function M(e) {
    return e;
  }, s.Tween.prototype.run = function () {
    1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments);
  }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
    configurable: !0,
    enumerable: !0,
    get: function get() {
      return n.document.hidden || u(k), A;
    },
    set: function set(e) {
      u(k), A = e;
    }
  }));
  var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
  s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function (e) {
    var t,
        r = e.type,
        n = this.fixHooks[r],
        o = s.event.props;

    if (o.length) {
      u("jQuery.event.props are deprecated and removed: " + o.join());

      while (o.length) {
        s.event.addProp(o.pop());
      }
    }

    if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length)) while (o.length) {
      s.event.addProp(o.pop());
    }
    return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t;
  }, s.event.add = function (e, t) {
    return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments);
  }, s.each(["load", "unload", "error"], function (e, t) {
    s.fn[t] = function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
    };
  }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
    s.fn[r] = function (e, t) {
      return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r);
    };
  }), s(function () {
    s(n.document).triggerHandler("ready");
  }), s.event.special.ready = {
    setup: function setup() {
      this === n.document && u("'ready' event is deprecated");
    }
  }, s.fn.extend({
    bind: function bind(e, t, r) {
      return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
    },
    unbind: function unbind(e, t) {
      return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
    },
    delegate: function delegate(e, t, r, n) {
      return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
    },
    undelegate: function undelegate(e, t, r) {
      return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r);
    },
    hover: function hover(e, t) {
      return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
    }
  });

  function T(e) {
    var t = n.document.implementation.createHTMLDocument("");
    return t.body.innerHTML = e, t.body && t.body.innerHTML;
  }

  function P(e) {
    var t = e.replace(O, "<$1></$2>");
    t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e);
  }

  var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
  s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
    s.htmlPrefilter = function (e) {
      return P(e), e.replace(O, "<$1></$2>");
    };
  }, s.htmlPrefilter = function (e) {
    return P(e), q(e);
  };
  var D,
      _ = s.fn.offset;
  s.fn.offset = function () {
    var e = this[0];
    return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0);
  }, s.ajax && (D = s.param, s.param = function (e, t) {
    var r = s.ajaxSettings && s.ajaxSettings.traditional;
    return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t);
  });
  var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
  return s.fn.andSelf = function () {
    return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments);
  }, s.Deferred && (E = s.Deferred, F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]], s.Deferred = function (e) {
    var i = E(),
        a = i.promise();
    return i.pipe = a.pipe = function () {
      var o = arguments;
      return u("deferred.pipe() is deprecated"), s.Deferred(function (n) {
        s.each(F, function (e, t) {
          var r = "function" == typeof o[e] && o[e];
          i[t[1]](function () {
            var e = r && r.apply(this, arguments);
            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments);
          });
        }), o = null;
      }).promise();
    }, e && e.call(i, i), i;
  }, s.Deferred.exceptionHook = E.exceptionHook), s;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! UIkit 2.27.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  var i;
  if (!window.jQuery) throw new Error("UIkit 2.x requires jQuery");
  i = t(window.jQuery), "function" == typeof define && define.amd && define("uikit", function () {
    return i.load = function (t, e, n, o) {
      var s,
          a = t.split(","),
          r = [],
          l = (o.config && o.config.uikit && o.config.uikit.base ? o.config.uikit.base : "").replace(/\/+$/g, "");
      if (!l) throw new Error("Please define base path to UIkit in the requirejs config.");

      for (s = 0; s < a.length; s += 1) {
        var c = a[s].replace(/\./g, "/");
        r.push(l + "/components/" + c);
      }

      e(r, function () {
        n(i);
      });
    }, i;
  });
}(function (t) {
  "use strict";

  if (window.UIkit2) return window.UIkit2;
  var i = {},
      e = window.UIkit || void 0;

  if (i.version = "2.27.4", i.noConflict = function () {
    return e && (window.UIkit = e, t.UIkit = e, t.fn.uk = e.fn), i;
  }, window.UIkit2 = i, e || (window.UIkit = i), i.$ = t, i.$doc = i.$(document), i.$win = i.$(window), i.$html = i.$("html"), i.support = {}, i.support.transition = function () {
    var t = function () {
      var t,
          i = document.body || document.documentElement,
          e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };

      for (t in e) {
        if (void 0 !== i.style[t]) return e[t];
      }
    }();

    return t && {
      end: t
    };
  }(), i.support.animation = function () {
    var t = function () {
      var t,
          i = document.body || document.documentElement,
          e = {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd oanimationend",
        animation: "animationend"
      };

      for (t in e) {
        if (void 0 !== i.style[t]) return e[t];
      }
    }();

    return t && {
      end: t
    };
  }(), function () {
    Date.now = Date.now || function () {
      return new Date().getTime();
    };

    for (var t = ["webkit", "moz"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) {
      var e = t[i];
      window.requestAnimationFrame = window[e + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
    }

    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var n = 0;
      window.requestAnimationFrame = function (t) {
        var i = Date.now(),
            e = Math.max(n + 16, i);
        return setTimeout(function () {
          t(n = e);
        }, e - i);
      }, window.cancelAnimationFrame = clearTimeout;
    }
  }(), i.support.touch = "ontouchstart" in document || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1, i.support.mutationobserver = window.MutationObserver || window.WebKitMutationObserver || null, i.Utils = {}, i.Utils.isFullscreen = function () {
    return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1;
  }, i.Utils.str2json = function (t, i) {
    try {
      return i ? JSON.parse(t.replace(/([\$\w]+)\s*:/g, function (t, i) {
        return '"' + i + '":';
      }).replace(/'([^']+)'/g, function (t, i) {
        return '"' + i + '"';
      })) : new Function("", "var json = " + t + "; return JSON.parse(JSON.stringify(json));")();
    } catch (e) {
      return !1;
    }
  }, i.Utils.debounce = function (t, i, e) {
    var n;
    return function () {
      var o = this,
          s = arguments,
          a = function a() {
        n = null, e || t.apply(o, s);
      },
          r = e && !n;

      clearTimeout(n), n = setTimeout(a, i), r && t.apply(o, s);
    };
  }, i.Utils.throttle = function (t, i) {
    var e = !1;
    return function () {
      e || (t.call(), e = !0, setTimeout(function () {
        e = !1;
      }, i));
    };
  }, i.Utils.removeCssRules = function (t) {
    var i, e, n, o, s, a, r, l, c, u;
    t && setTimeout(function () {
      try {
        for (u = document.styleSheets, o = 0, r = u.length; r > o; o++) {
          for (n = u[o], e = [], n.cssRules = n.cssRules, i = s = 0, l = n.cssRules.length; l > s; i = ++s) {
            n.cssRules[i].type === CSSRule.STYLE_RULE && t.test(n.cssRules[i].selectorText) && e.unshift(i);
          }

          for (a = 0, c = e.length; c > a; a++) {
            n.deleteRule(e[a]);
          }
        }
      } catch (d) {}
    }, 0);
  }, i.Utils.isInView = function (e, n) {
    var o = t(e);
    if (!o.is(":visible")) return !1;
    var s = i.$win.scrollLeft(),
        a = i.$win.scrollTop(),
        r = o.offset(),
        l = r.left,
        c = r.top;
    return n = t.extend({
      topoffset: 0,
      leftoffset: 0
    }, n), c + o.height() >= a && c - n.topoffset <= a + i.$win.height() && l + o.width() >= s && l - n.leftoffset <= s + i.$win.width() ? !0 : !1;
  }, i.Utils.checkDisplay = function (e, n) {
    var o = i.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", e || document);
    return e && !o.length && (o = t(e)), o.trigger("display.uk.check"), n && ("string" != typeof n && (n = '[class*="uk-animation-"]'), o.find(n).each(function () {
      var t = i.$(this),
          e = t.attr("class"),
          n = e.match(/uk-animation-(.+)/);
      t.removeClass(n[0]).width(), t.addClass(n[0]);
    })), o;
  }, i.Utils.options = function (e) {
    if ("string" != t.type(e)) return e;
    -1 != e.indexOf(":") && "}" != e.trim().substr(-1) && (e = "{" + e + "}");
    var n = e ? e.indexOf("{") : -1,
        o = {};
    if (-1 != n) try {
      o = i.Utils.str2json(e.substr(n));
    } catch (s) {}
    return o;
  }, i.Utils.animate = function (e, n) {
    var o = t.Deferred();
    return e = i.$(e), e.css("display", "none").addClass(n).one(i.support.animation.end, function () {
      e.removeClass(n), o.resolve();
    }), e.css("display", ""), o.promise();
  }, i.Utils.uid = function (t) {
    return (t || "id") + new Date().getTime() + "RAND" + Math.ceil(1e5 * Math.random());
  }, i.Utils.template = function (t, i) {
    for (var e, n, o, s, a = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), r = 0, l = [], c = 0; r < a.length;) {
      if (e = a[r], e.match(/\{\{\s*(.+?)\s*\}\}/)) switch (r += 1, e = a[r], n = e[0], o = e.substring(e.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), n) {
        case "~":
          l.push("for(var $i=0;$i<" + o + ".length;$i++) { var $item = " + o + "[$i];"), c++;
          break;

        case ":":
          l.push("for(var $key in " + o + ") { var $val = " + o + "[$key];"), c++;
          break;

        case "#":
          l.push("if(" + o + ") {"), c++;
          break;

        case "^":
          l.push("if(!" + o + ") {"), c++;
          break;

        case "/":
          l.push("}"), c--;
          break;

        case "!":
          l.push("__ret.push(" + o + ");");
          break;

        default:
          l.push("__ret.push(escape(" + o + "));");
      } else l.push("__ret.push('" + e.replace(/\'/g, "\\'") + "');");
      r += 1;
    }

    return s = new Function("$data", ["var __ret = [];", "try {", "with($data){", c ? '__ret = ["Not all blocks are closed correctly."]' : l.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), i ? s(i) : s;
  }, i.Utils.focus = function (i, e) {
    if (i = t(i), !i.length) return i;
    var n,
        o = i.find("[autofocus]:first");
    return o.length ? o.focus() : (o = i.find(":input" + (e && "," + e || "")).first(), o.length ? o.focus() : (i.attr("tabindex") || (n = 1e3, i.attr("tabindex", n)), i[0].focus(), n && i.attr("tabindex", ""), i));
  }, i.Utils.events = {}, i.Utils.events.click = i.support.touch ? "tap" : "click", i.fn = function (e, n) {
    var o = arguments,
        s = e.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
        a = s[1],
        r = s[2];
    return i[a] ? this.each(function () {
      var e = t(this),
          s = e.data(a);
      s || e.data(a, s = i[a](this, r ? void 0 : n)), r && s[r].apply(s, Array.prototype.slice.call(o, 1));
    }) : (t.error("UIkit component [" + a + "] does not exist."), this);
  }, t.UIkit = i, t.fn.uk = i.fn, i.langdirection = "rtl" == i.$html.attr("dir") ? "right" : "left", i.components = {}, i.component = function (e, n, o) {
    if (i.components[e] && !o) return i.components[e];

    var s = function s(n, o) {
      var a = this;
      return this.UIkit = i, this.element = n ? i.$(n) : null, this.options = t.extend(!0, {}, this.defaults, o), this.plugins = {}, this.element && this.element.data(e, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(s.plugins)).forEach(function (t) {
        s.plugins[t].init && (s.plugins[t].init(a), a.plugins[t] = !0);
      }), this.trigger("init.uk.component", [e, this]), this;
    };

    return s.plugins = {}, t.extend(!0, s.prototype, {
      defaults: {
        plugins: []
      },
      boot: function boot() {},
      init: function init() {},
      on: function on(t, e, n) {
        return i.$(this.element || this).on(t, e, n);
      },
      one: function one(t, e, n) {
        return i.$(this.element || this).one(t, e, n);
      },
      off: function off(t) {
        return i.$(this.element || this).off(t);
      },
      trigger: function trigger(t, e) {
        return i.$(this.element || this).trigger(t, e);
      },
      find: function find(t) {
        return i.$(this.element ? this.element : []).find(t);
      },
      proxy: function proxy(t, i) {
        var e = this;
        i.split(" ").forEach(function (i) {
          e[i] || (e[i] = function () {
            return t[i].apply(t, arguments);
          });
        });
      },
      mixin: function mixin(t, i) {
        var e = this;
        i.split(" ").forEach(function (i) {
          e[i] || (e[i] = t[i].bind(e));
        });
      },
      option: function option() {
        return 1 == arguments.length ? this.options[arguments[0]] || void 0 : (2 == arguments.length && (this.options[arguments[0]] = arguments[1]), void 0);
      }
    }, n), this.components[e] = s, this[e] = function () {
      var n, o;
      if (arguments.length) switch (arguments.length) {
        case 1:
          "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? n = t(arguments[0]) : o = arguments[0];
          break;

        case 2:
          n = t(arguments[0]), o = arguments[1];
      }
      return n && n.data(e) ? n.data(e) : new i.components[e](n, o);
    }, i.domready && i.component.boot(e), s;
  }, i.plugin = function (t, i, e) {
    this.components[t].plugins[i] = e;
  }, i.component.boot = function (t) {
    i.components[t].prototype && i.components[t].prototype.boot && !i.components[t].booted && (i.components[t].prototype.boot.apply(i, []), i.components[t].booted = !0);
  }, i.component.bootComponents = function () {
    for (var t in i.components) {
      i.component.boot(t);
    }
  }, i.domObservers = [], i.domready = !1, i.ready = function (t) {
    i.domObservers.push(t), i.domready && t(document);
  }, i.on = function (t, e, n) {
    return t && t.indexOf("ready.uk.dom") > -1 && i.domready && e.apply(i.$doc), i.$doc.on(t, e, n);
  }, i.one = function (t, e, n) {
    return t && t.indexOf("ready.uk.dom") > -1 && i.domready ? (e.apply(i.$doc), i.$doc) : i.$doc.one(t, e, n);
  }, i.trigger = function (t, e) {
    return i.$doc.trigger(t, e);
  }, i.domObserve = function (t, e) {
    i.support.mutationobserver && (e = e || function () {}, i.$(t).each(function () {
      var t = this,
          n = i.$(t);
      if (!n.data("observer")) try {
        var o = new i.support.mutationobserver(i.Utils.debounce(function () {
          e.apply(t, [n]), n.trigger("changed.uk.dom");
        }, 50), {
          childList: !0,
          subtree: !0
        });
        o.observe(t, {
          childList: !0,
          subtree: !0
        }), n.data("observer", o);
      } catch (s) {}
    }));
  }, i.init = function (t) {
    t = t || document, i.domObservers.forEach(function (i) {
      i(t);
    });
  }, i.on("domready.uk.dom", function () {
    i.init(), i.domready && i.Utils.checkDisplay();
  }), document.addEventListener("DOMContentLoaded", function () {
    var e = function e() {
      i.$body = i.$("body"), i.trigger("beforeready.uk.dom"), i.component.bootComponents();
      var e = requestAnimationFrame(function () {
        var t = {
          dir: {
            x: 0,
            y: 0
          },
          x: window.pageXOffset,
          y: window.pageYOffset
        },
            n = function n() {
          var o = window.pageXOffset,
              s = window.pageYOffset;
          (t.x != o || t.y != s) && (t.dir.x = o != t.x ? o > t.x ? 1 : -1 : 0, t.dir.y = s != t.y ? s > t.y ? 1 : -1 : 0, t.x = o, t.y = s, i.$doc.trigger("scrolling.uk.document", [{
            dir: {
              x: t.dir.x,
              y: t.dir.y
            },
            x: o,
            y: s
          }])), cancelAnimationFrame(e), e = requestAnimationFrame(n);
        };

        return i.support.touch && i.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", n), (t.x || t.y) && n(), n;
      }());

      if (i.trigger("domready.uk.dom"), i.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && i.$win.on("load orientationchange resize", i.Utils.debounce(function () {
        var i = function i() {
          return t(".uk-height-viewport").css("height", window.innerHeight), i;
        };

        return i();
      }(), 100)), i.trigger("afterready.uk.dom"), i.domready = !0, i.support.mutationobserver) {
        var n = i.Utils.debounce(function () {
          requestAnimationFrame(function () {
            i.init(document.body);
          });
        }, 10);
        new i.support.mutationobserver(function (t) {
          var i = !1;
          t.every(function (t) {
            if ("childList" != t.type) return !0;

            for (var e, n = 0; n < t.addedNodes.length; ++n) {
              if (e = t.addedNodes[n], e.outerHTML && -1 !== e.outerHTML.indexOf("data-uk-")) return (i = !0) && !1;
            }

            return !0;
          }), i && n();
        }).observe(document.body, {
          childList: !0,
          subtree: !0
        });
      }
    };

    return ("complete" == document.readyState || "interactive" == document.readyState) && setTimeout(e), e;
  }()), i.$html.addClass(i.support.touch ? "uk-touch" : "uk-notouch"), i.support.touch) {
    var n,
        o = !1,
        s = "uk-hover",
        a = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
    i.$html.on("mouseenter touchstart MSPointerDown pointerdown", a, function () {
      o && t("." + s).removeClass(s), o = t(this).addClass(s);
    }).on("mouseleave touchend MSPointerUp pointerup", function (i) {
      n = t(i.target).parents(a), o && o.not(n).removeClass(s);
    });
  }

  return i;
}), function (t) {
  function i(t, i, e, n) {
    return Math.abs(t - i) >= Math.abs(e - n) ? t - i > 0 ? "Left" : "Right" : e - n > 0 ? "Up" : "Down";
  }

  function e() {
    c = null, d.last && (void 0 !== d.el && d.el.trigger("longTap"), d = {});
  }

  function n() {
    c && clearTimeout(c), c = null;
  }

  function o() {
    a && clearTimeout(a), r && clearTimeout(r), l && clearTimeout(l), c && clearTimeout(c), a = r = l = c = null, d = {};
  }

  function s(t) {
    return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary;
  }

  if (!t.fn.swipeLeft) {
    var a,
        r,
        l,
        c,
        u,
        d = {},
        h = 750,
        p = ("ontouchstart" in window),
        f = window.PointerEvent,
        m = p || window.DocumentTouch && document instanceof DocumentTouch || navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0 || navigator.pointerEnabled && navigator.maxTouchPoints > 0;
    t(function () {
      var g,
          v,
          k,
          w = 0,
          b = 0;
      "MSGesture" in window && (u = new MSGesture(), u.target = document.body), t(document).on("MSGestureEnd gestureend", function (t) {
        var i = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;
        i && void 0 !== d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + i));
      }).on("touchstart MSPointerDown pointerdown", function (i) {
        ("MSPointerDown" != i.type || s(i.originalEvent)) && (k = "MSPointerDown" == i.type || "pointerdown" == i.type ? i : i.originalEvent.touches[0], g = Date.now(), v = g - (d.last || g), d.el = t("tagName" in k.target ? k.target : k.target.parentNode), a && clearTimeout(a), d.x1 = k.pageX, d.y1 = k.pageY, v > 0 && 250 >= v && (d.isDoubleTap = !0), d.last = g, c = setTimeout(e, h), i.originalEvent && i.originalEvent.pointerId && u && ("MSPointerDown" == i.type || "pointerdown" == i.type || "touchstart" == i.type) && u.addPointer(i.originalEvent.pointerId));
      }).on("touchmove MSPointerMove pointermove", function (t) {
        ("MSPointerMove" != t.type || s(t.originalEvent)) && (k = "MSPointerMove" == t.type || "pointermove" == t.type ? t : t.originalEvent.touches[0], n(), d.x2 = k.pageX, d.y2 = k.pageY, w += Math.abs(d.x1 - d.x2), b += Math.abs(d.y1 - d.y2));
      }).on("touchend MSPointerUp pointerup", function (e) {
        ("MSPointerUp" != e.type || s(e.originalEvent)) && (n(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? l = setTimeout(function () {
          void 0 !== d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + i(d.x1, d.x2, d.y1, d.y2))), d = {};
        }, 0) : "last" in d && (isNaN(w) || 30 > w && 30 > b ? r = setTimeout(function () {
          var i = t.Event("tap");
          i.cancelTouch = o, void 0 !== d.el && d.el.trigger(i), d.isDoubleTap ? (void 0 !== d.el && d.el.trigger("doubleTap"), d = {}) : a = setTimeout(function () {
            a = null, void 0 !== d.el && d.el.trigger("singleTap"), d = {};
          }, 250);
        }, 0) : d = {}, w = b = 0));
      }).on("touchcancel MSPointerCancel pointercancel", function (t) {
        ("touchcancel" == t.type && p && m || !p && "pointercancel" == t.type && f) && o();
      }), t(window).on("scroll", o);
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (i) {
      t.fn[i] = function (e) {
        return t(this).on(i, e);
      };
    });
  }
}(jQuery), function (t) {
  "use strict";

  var i = [];
  t.component("stackMargin", {
    defaults: {
      cls: "uk-margin-small-top",
      rowfirst: !1,
      observe: !1
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-margin]", i).each(function () {
          var i = t.$(this);
          i.data("stackMargin") || t.stackMargin(i, t.Utils.options(i.attr("data-uk-margin")));
        });
      });
    },
    init: function init() {
      var e = this;
      t.$win.on("resize orientationchange", function () {
        var i = function i() {
          e.process();
        };

        return t.$(function () {
          i(), t.$win.on("load", i);
        }), t.Utils.debounce(i, 20);
      }()), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.process();
      }.bind(this)), this.options.observe && t.domObserve(this.element, function () {
        e.element.is(":visible") && e.process();
      }), i.push(this);
    },
    process: function process() {
      var i = this.element.children();
      if (t.Utils.stackMargin(i, this.options), !this.options.rowfirst || !i.length) return this;
      var e = {},
          n = !1;
      return i.removeClass(this.options.rowfirst).each(function (i, o) {
        o = t.$(this), "none" != this.style.display && (i = o.offset().left, ((e[i] = e[i] || []) && e[i]).push(this), n = n === !1 ? i : Math.min(n, i));
      }), t.$(e[n]).addClass(this.options.rowfirst), this;
    }
  }), function () {
    var i = [],
        e = function e(t) {
      if (t.is(":visible")) {
        var i = t.parent().width(),
            e = t.data("width"),
            n = i / e,
            o = Math.floor(n * t.data("height"));
        t.css({
          height: e > i ? o : t.data("height")
        });
      }
    };

    t.component("responsiveElement", {
      defaults: {},
      boot: function boot() {
        t.ready(function (i) {
          t.$("iframe.uk-responsive-width, [data-uk-responsive]", i).each(function () {
            var i,
                e = t.$(this);
            e.data("responsiveElement") || (i = t.responsiveElement(e, {}));
          });
        });
      },
      init: function init() {
        var t = this.element;
        t.attr("width") && t.attr("height") && (t.data({
          width: t.attr("width"),
          height: t.attr("height")
        }).on("display.uk.check", function () {
          e(t);
        }), e(t), i.push(t));
      }
    }), t.$win.on("resize load", t.Utils.debounce(function () {
      i.forEach(function (t) {
        e(t);
      });
    }, 15));
  }(), t.Utils.stackMargin = function (i, e) {
    e = t.$.extend({
      cls: "uk-margin-small-top"
    }, e), i = t.$(i).removeClass(e.cls);
    var n = !1;
    i.each(function (i, e, o, s) {
      s = t.$(this), "none" != s.css("display") && (i = s.offset(), e = s.outerHeight(), o = i.top + e, s.data({
        ukMarginPos: o,
        ukMarginTop: i.top
      }), (n === !1 || i.top < n.top) && (n = {
        top: i.top,
        left: i.left,
        pos: o
      }));
    }).each(function (i) {
      i = t.$(this), "none" != i.css("display") && i.data("ukMarginTop") > n.top && i.data("ukMarginPos") > n.pos && i.addClass(e.cls);
    });
  }, t.Utils.matchHeights = function (i, e) {
    i = t.$(i).css("min-height", ""), e = t.$.extend({
      row: !0
    }, e);

    var n = function n(i) {
      if (!(i.length < 2)) {
        var e = 0;
        i.each(function () {
          e = Math.max(e, t.$(this).outerHeight());
        }).each(function () {
          var i = t.$(this),
              n = e - ("border-box" == i.css("box-sizing") ? 0 : i.outerHeight() - i.height());
          i.css("min-height", n + "px");
        });
      }
    };

    e.row ? (i.first().width(), setTimeout(function () {
      var e = !1,
          o = [];
      i.each(function () {
        var i = t.$(this),
            s = i.offset().top;
        s != e && o.length && (n(t.$(o)), o = [], s = i.offset().top), o.push(i), e = s;
      }), o.length && n(t.$(o));
    }, 0)) : n(i);
  }, function (i) {
    t.Utils.inlineSvg = function (e, n) {
      t.$(e || 'img[src$=".svg"]', n || document).each(function () {
        var e = t.$(this),
            n = e.attr("src");

        if (!i[n]) {
          var o = t.$.Deferred();
          t.$.get(n, {
            nc: Math.random()
          }, function (i) {
            o.resolve(t.$(i).find("svg"));
          }), i[n] = o.promise();
        }

        i[n].then(function (i) {
          var n = t.$(i).clone();
          e.attr("id") && n.attr("id", e.attr("id")), e.attr("class") && n.attr("class", e.attr("class")), e.attr("style") && n.attr("style", e.attr("style")), e.attr("width") && (n.attr("width", e.attr("width")), e.attr("height") || n.removeAttr("height")), e.attr("height") && (n.attr("height", e.attr("height")), e.attr("width") || n.removeAttr("width")), e.replaceWith(n);
        });
      });
    }, t.ready(function (i) {
      t.Utils.inlineSvg("[data-uk-svg]", i);
    });
  }({}), t.Utils.getCssVar = function (t) {
    var i,
        e = document.documentElement,
        n = e.appendChild(document.createElement("div"));
    n.classList.add("var-" + t);

    try {
      i = JSON.parse(i = getComputedStyle(n, ":before").content.replace(/^["'](.*)["']$/, "$1"));
    } catch (o) {
      i = void 0;
    }

    return e.removeChild(n), i;
  };
}(UIkit2), function (t) {
  "use strict";

  function i(i, e) {
    e = t.$.extend({
      duration: 1e3,
      transition: "easeOutExpo",
      offset: 0,
      complete: function complete() {}
    }, e);
    var n = i.offset().top - e.offset,
        o = t.$doc.height(),
        s = window.innerHeight;
    n + s > o && (n = o - s), t.$("html,body").stop().animate({
      scrollTop: n
    }, e.duration, e.transition).promise().done(e.complete);
  }

  t.component("smoothScroll", {
    boot: function boot() {
      t.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function () {
        var i = t.$(this);

        if (!i.data("smoothScroll")) {
          {
            t.smoothScroll(i, t.Utils.options(i.attr("data-uk-smooth-scroll")));
          }
          i.trigger("click");
        }

        return !1;
      });
    },
    init: function init() {
      var e = this;
      this.on("click", function (n) {
        n.preventDefault(), i(t.$(this.hash).length ? t.$(this.hash) : t.$("body"), e.options);
      });
    }
  }), t.Utils.scrollToElement = i, t.$.easing.easeOutExpo || (t.$.easing.easeOutExpo = function (t, i, e, n, o) {
    return i == o ? e + n : n * (-Math.pow(2, -10 * i / o) + 1) + e;
  });
}(UIkit2), function (t) {
  "use strict";

  var i = t.$win,
      e = t.$doc,
      n = [],
      o = function o() {
    for (var t = 0; t < n.length; t++) {
      window.requestAnimationFrame.apply(window, [n[t].check]);
    }
  };

  t.component("scrollspy", {
    defaults: {
      target: !1,
      cls: "uk-scrollspy-inview",
      initcls: "uk-scrollspy-init-inview",
      topoffset: 0,
      leftoffset: 0,
      repeat: !1,
      delay: 0
    },
    boot: function boot() {
      e.on("scrolling.uk.document", o), i.on("load resize orientationchange", t.Utils.debounce(o, 50)), t.ready(function (i) {
        t.$("[data-uk-scrollspy]", i).each(function () {
          var i = t.$(this);

          if (!i.data("scrollspy")) {
            t.scrollspy(i, t.Utils.options(i.attr("data-uk-scrollspy")));
          }
        });
      });
    },
    init: function init() {
      var i,
          e = this,
          o = this.options.cls.split(/,/),
          s = function s() {
        var n = e.options.target ? e.element.find(e.options.target) : e.element,
            s = 1 === n.length ? 1 : 0,
            a = 0;
        n.each(function () {
          var n = t.$(this),
              r = n.data("inviewstate"),
              l = t.Utils.isInView(n, e.options),
              c = n.attr("data-uk-scrollspy-cls") || o[a].trim();
          !l || r || n.data("scrollspy-idle") || (i || (n.addClass(e.options.initcls), e.offset = n.offset(), i = !0, n.trigger("init.uk.scrollspy")), n.data("scrollspy-idle", setTimeout(function () {
            n.addClass("uk-scrollspy-inview").toggleClass(c).width(), n.trigger("inview.uk.scrollspy"), n.data("scrollspy-idle", !1), n.data("inviewstate", !0);
          }, e.options.delay * s)), s++), !l && r && e.options.repeat && (n.data("scrollspy-idle") && (clearTimeout(n.data("scrollspy-idle")), n.data("scrollspy-idle", !1)), n.removeClass("uk-scrollspy-inview").toggleClass(c), n.data("inviewstate", !1), n.trigger("outview.uk.scrollspy")), a = o[a + 1] ? a + 1 : 0;
        });
      };

      s(), this.check = s, n.push(this);
    }
  });

  var s = [],
      a = function a() {
    for (var t = 0; t < s.length; t++) {
      window.requestAnimationFrame.apply(window, [s[t].check]);
    }
  };

  t.component("scrollspynav", {
    defaults: {
      cls: "uk-active",
      closest: !1,
      topoffset: 0,
      leftoffset: 0,
      smoothscroll: !1
    },
    boot: function boot() {
      e.on("scrolling.uk.document", a), i.on("resize orientationchange", t.Utils.debounce(a, 50)), t.ready(function (i) {
        t.$("[data-uk-scrollspy-nav]", i).each(function () {
          var i = t.$(this);

          if (!i.data("scrollspynav")) {
            t.scrollspynav(i, t.Utils.options(i.attr("data-uk-scrollspy-nav")));
          }
        });
      });
    },
    init: function init() {
      var e,
          n = [],
          o = this.find("a[href^='#']").each(function () {
        "#" !== this.getAttribute("href").trim() && n.push(this.getAttribute("href"));
      }),
          a = t.$(n.join(",")),
          r = this.options.cls,
          l = this.options.closest || this.options.closest,
          c = this,
          u = function u() {
        e = [];

        for (var n = 0; n < a.length; n++) {
          t.Utils.isInView(a.eq(n), c.options) && e.push(a.eq(n));
        }

        if (e.length) {
          var s,
              u = i.scrollTop(),
              d = function () {
            for (var t = 0; t < e.length; t++) {
              if (e[t].offset().top - c.options.topoffset >= u) return e[t];
            }
          }();

          if (!d) return;
          c.options.closest ? (o.blur().closest(l).removeClass(r), s = o.filter("a[href='#" + d.attr("id") + "']").closest(l).addClass(r)) : s = o.removeClass(r).filter("a[href='#" + d.attr("id") + "']").addClass(r), c.element.trigger("inview.uk.scrollspynav", [d, s]);
        }
      };

      this.options.smoothscroll && t.smoothScroll && o.each(function () {
        t.smoothScroll(this, c.options.smoothscroll);
      }), u(), this.element.data("scrollspynav", this), this.check = u, s.push(this);
    }
  });
}(UIkit2), function (t) {
  "use strict";

  var i = [];
  t.component("toggle", {
    defaults: {
      target: !1,
      cls: "uk-hidden",
      animation: !1,
      duration: 200
    },
    boot: function boot() {
      t.ready(function (e) {
        t.$("[data-uk-toggle]", e).each(function () {
          var i = t.$(this);

          if (!i.data("toggle")) {
            t.toggle(i, t.Utils.options(i.attr("data-uk-toggle")));
          }
        }), setTimeout(function () {
          i.forEach(function (t) {
            t.getToggles();
          });
        }, 0);
      });
    },
    init: function init() {
      var t = this;
      this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle();
      }), i.push(this);
    },
    toggle: function toggle() {
      if (this.getToggles(), this.totoggle.length) {
        if (this.options.animation && t.support.animation) {
          var i = this,
              e = this.options.animation.split(",");
          1 == e.length && (e[1] = e[0]), e[0] = e[0].trim(), e[1] = e[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.each(function () {
            var n = t.$(this);
            n.hasClass(i.options.cls) ? (n.toggleClass(i.options.cls), t.Utils.animate(n, e[0]).then(function () {
              n.css("animation-duration", ""), t.Utils.checkDisplay(n);
            })) : t.Utils.animate(this, e[1] + " uk-animation-reverse").then(function () {
              n.toggleClass(i.options.cls).css("animation-duration", ""), t.Utils.checkDisplay(n);
            });
          });
        } else this.totoggle.toggleClass(this.options.cls), t.Utils.checkDisplay(this.totoggle);

        this.updateAria();
      }
    },
    getToggles: function getToggles() {
      this.totoggle = this.options.target ? t.$(this.options.target) : [], this.updateAria();
    },
    updateAria: function updateAria() {
      this.aria && this.totoggle.length && this.totoggle.not("[aria-hidden]").each(function () {
        t.$(this).attr("aria-hidden", t.$(this).hasClass("uk-hidden"));
      });
    }
  });
}(UIkit2), function (t) {
  "use strict";

  t.component("alert", {
    defaults: {
      fade: !0,
      duration: 200,
      trigger: ".uk-alert-close"
    },
    boot: function boot() {
      t.$html.on("click.alert.uikit", "[data-uk-alert]", function (i) {
        var e = t.$(this);

        if (!e.data("alert")) {
          var n = t.alert(e, t.Utils.options(e.attr("data-uk-alert")));
          t.$(i.target).is(n.options.trigger) && (i.preventDefault(), n.close());
        }
      });
    },
    init: function init() {
      var t = this;
      this.on("click", this.options.trigger, function (i) {
        i.preventDefault(), t.close();
      });
    },
    close: function close() {
      var t = this.trigger("close.uk.alert"),
          i = function () {
        this.trigger("closed.uk.alert").remove();
      }.bind(this);

      this.options.fade ? t.css("overflow", "hidden").css("max-height", t.height()).animate({
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }, this.options.duration, i) : i();
    }
  });
}(UIkit2), function (t) {
  "use strict";

  t.component("buttonRadio", {
    defaults: {
      activeClass: "uk-active",
      target: ".uk-button"
    },
    boot: function boot() {
      t.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function (i) {
        var e = t.$(this);

        if (!e.data("buttonRadio")) {
          var n = t.buttonRadio(e, t.Utils.options(e.attr("data-uk-button-radio"))),
              o = t.$(i.target);
          o.is(n.options.target) && o.trigger("click");
        }
      });
    },
    init: function init() {
      var i = this;
      this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (e) {
        var n = t.$(this);
        n.is('a[href="#"]') && e.preventDefault(), i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(), n.addClass(i.options.activeClass), i.find(i.options.target).not(n).attr("aria-checked", "false"), n.attr("aria-checked", "true"), i.trigger("change.uk.button", [n]);
      });
    },
    getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    }
  }), t.component("buttonCheckbox", {
    defaults: {
      activeClass: "uk-active",
      target: ".uk-button"
    },
    boot: function boot() {
      t.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function (i) {
        var e = t.$(this);

        if (!e.data("buttonCheckbox")) {
          var n = t.buttonCheckbox(e, t.Utils.options(e.attr("data-uk-button-checkbox"))),
              o = t.$(i.target);
          o.is(n.options.target) && o.trigger("click");
        }
      });
    },
    init: function init() {
      var i = this;
      this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (e) {
        var n = t.$(this);
        n.is('a[href="#"]') && e.preventDefault(), n.toggleClass(i.options.activeClass).blur(), n.attr("aria-checked", n.hasClass(i.options.activeClass)), i.trigger("change.uk.button", [n]);
      });
    },
    getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    }
  }), t.component("button", {
    defaults: {},
    boot: function boot() {
      t.$html.on("click.button.uikit", "[data-uk-button]", function () {
        var i = t.$(this);

        if (!i.data("button")) {
          {
            t.button(i, t.Utils.options(i.attr("data-uk-button")));
          }
          i.trigger("click");
        }
      });
    },
    init: function init() {
      var t = this;
      this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle(), t.trigger("change.uk.button", [t.element.blur().hasClass("uk-active")]);
      });
    },
    toggle: function toggle() {
      this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"));
    }
  });
}(UIkit2), function (t) {
  "use strict";

  function i(i, e, n, o) {
    if (i = t.$(i), e = t.$(e), n = n || window.innerWidth, o = o || i.offset(), e.length) {
      var s = e.outerWidth();

      if (i.css("min-width", s), "right" == t.langdirection) {
        var a = n - (e.offset().left + s),
            r = n - (i.offset().left + i.outerWidth());
        i.css("margin-right", a - r);
      } else i.css("margin-left", e.offset().left - o.left);
    }
  }

  var e,
      n = !1,
      o = {
    x: {
      "bottom-left": "bottom-right",
      "bottom-right": "bottom-left",
      "bottom-center": "bottom-center",
      "top-left": "top-right",
      "top-right": "top-left",
      "top-center": "top-center",
      "left-top": "right-top",
      "left-bottom": "right-bottom",
      "left-center": "right-center",
      "right-top": "left-top",
      "right-bottom": "left-bottom",
      "right-center": "left-center"
    },
    y: {
      "bottom-left": "top-left",
      "bottom-right": "top-right",
      "bottom-center": "top-center",
      "top-left": "bottom-left",
      "top-right": "bottom-right",
      "top-center": "bottom-center",
      "left-top": "left-bottom",
      "left-bottom": "left-top",
      "left-center": "left-center",
      "right-top": "right-bottom",
      "right-bottom": "right-top",
      "right-center": "right-center"
    },
    xy: {
      "bottom-left": "top-right",
      "bottom-right": "top-left",
      "bottom-center": "top-center",
      "top-left": "bottom-right",
      "top-right": "bottom-left",
      "top-center": "bottom-center",
      "left-top": "right-bottom",
      "left-bottom": "right-top",
      "left-center": "right-center",
      "right-top": "left-bottom",
      "right-bottom": "left-top",
      "right-center": "left-center"
    }
  };
  t.component("dropdown", {
    defaults: {
      mode: "hover",
      pos: "bottom-left",
      offset: 0,
      remaintime: 800,
      justify: !1,
      boundary: t.$win,
      delay: 0,
      dropdownSelector: ".uk-dropdown,.uk-dropdown-blank",
      hoverDelayIdle: 250,
      preventflip: !1
    },
    remainIdle: !1,
    boot: function boot() {
      var i = t.support.touch ? "click" : "mouseenter";
      t.$html.on(i + ".dropdown.uikit focus pointerdown", "[data-uk-dropdown]", function (e) {
        var n = t.$(this);

        if (!n.data("dropdown")) {
          var o = t.dropdown(n, t.Utils.options(n.attr("data-uk-dropdown")));
          ("click" == e.type || "mouseenter" == e.type && "hover" == o.options.mode) && o.element.trigger(i), o.dropdown.length && e.preventDefault();
        }
      });
    },
    init: function init() {
      var i = this;
      this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function () {
        return -1 !== t.$.inArray(t.$(this).css("position"), ["relative", "fixed", "absolute"]);
      }).slice(0, 1), this.offsetParent.length || (this.offsetParent = this.element), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.boundary = t.$(this.options.boundary), this.boundary.length || (this.boundary = t.$win), this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), this.dropdown.attr("aria-hidden", "true"), "click" == this.options.mode || t.support.touch ? this.on("click.uk.dropdown", function (e) {
        var n = t.$(e.target);
        n.parents(i.options.dropdownSelector).length || ((n.is("a[href='#']") || n.parent().is("a[href='#']") || i.dropdown.length && !i.dropdown.is(":visible")) && e.preventDefault(), n.blur()), i.element.hasClass("uk-open") ? (!i.dropdown.find(e.target).length || n.is(".uk-dropdown-close") || n.parents(".uk-dropdown-close").length) && i.hide() : i.show();
      }) : this.on("mouseenter", function () {
        i.trigger("pointerenter.uk.dropdown", [i]), i.remainIdle && clearTimeout(i.remainIdle), e && clearTimeout(e), n && n == i || (e = n && n != i ? setTimeout(function () {
          e = setTimeout(i.show.bind(i), i.options.delay);
        }, i.options.hoverDelayIdle) : setTimeout(i.show.bind(i), i.options.delay));
      }).on("mouseleave", function () {
        e && clearTimeout(e), i.remainIdle = setTimeout(function () {
          n && n == i && i.hide();
        }, i.options.remaintime), i.trigger("pointerleave.uk.dropdown", [i]);
      }).on("click", function (e) {
        var o = t.$(e.target);
        return i.remainIdle && clearTimeout(i.remainIdle), n && n == i ? ((!i.dropdown.find(e.target).length || o.is(".uk-dropdown-close") || o.parents(".uk-dropdown-close").length) && i.hide(), void 0) : ((o.is("a[href='#']") || o.parent().is("a[href='#']")) && e.preventDefault(), i.show(), void 0);
      });
    },
    show: function show() {
      t.$html.off("click.outer.dropdown"), n && n != this && n.hide(!0), e && clearTimeout(e), this.trigger("beforeshow.uk.dropdown", [this]), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.dropdown.attr("aria-hidden", "false"), this.trigger("show.uk.dropdown", [this]), t.Utils.checkDisplay(this.dropdown, !0), t.Utils.focus(this.dropdown), n = this, this.registerOuterClick();
    },
    hide: function hide(t) {
      this.trigger("beforehide.uk.dropdown", [this, t]), this.element.removeClass("uk-open"), this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), this.dropdown.attr("aria-hidden", "true"), this.trigger("hide.uk.dropdown", [this, t]), n == this && (n = !1);
    },
    registerOuterClick: function registerOuterClick() {
      var i = this;
      t.$html.off("click.outer.dropdown"), setTimeout(function () {
        t.$html.on("click.outer.dropdown", function (o) {
          e && clearTimeout(e);
          t.$(o.target);
          n != i || i.element.find(o.target).length || (i.hide(!0), t.$html.off("click.outer.dropdown"));
        });
      }, 10);
    },
    checkDimensions: function checkDimensions() {
      if (this.dropdown.length) {
        this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({
          topLeft: "",
          left: "",
          marginLeft: "",
          marginRight: ""
        }), this.justified && this.justified.length && this.dropdown.css("min-width", "");
        var e,
            n = t.$.extend({}, this.offsetParent.offset(), {
          width: this.offsetParent[0].offsetWidth,
          height: this.offsetParent[0].offsetHeight
        }),
            s = this.options.offset,
            a = this.dropdown,
            r = (a.show().offset() || {
          left: 0,
          top: 0
        }, a.outerWidth()),
            l = a.outerHeight(),
            c = this.boundary.width(),
            u = (this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : {
          top: 0,
          left: 0
        }, this.options.pos),
            d = {
          "bottom-left": {
            top: 0 + n.height + s,
            left: 0
          },
          "bottom-right": {
            top: 0 + n.height + s,
            left: 0 + n.width - r
          },
          "bottom-center": {
            top: 0 + n.height + s,
            left: 0 + n.width / 2 - r / 2
          },
          "top-left": {
            top: 0 - l - s,
            left: 0
          },
          "top-right": {
            top: 0 - l - s,
            left: 0 + n.width - r
          },
          "top-center": {
            top: 0 - l - s,
            left: 0 + n.width / 2 - r / 2
          },
          "left-top": {
            top: 0,
            left: 0 - r - s
          },
          "left-bottom": {
            top: 0 + n.height - l,
            left: 0 - r - s
          },
          "left-center": {
            top: 0 + n.height / 2 - l / 2,
            left: 0 - r - s
          },
          "right-top": {
            top: 0,
            left: 0 + n.width + s
          },
          "right-bottom": {
            top: 0 + n.height - l,
            left: 0 + n.width + s
          },
          "right-center": {
            top: 0 + n.height / 2 - l / 2,
            left: 0 + n.width + s
          }
        },
            h = {};
        if (e = u.split("-"), h = d[u] ? d[u] : d["bottom-left"], this.justified && this.justified.length) i(a.css({
          left: 0
        }), this.justified, c);else if (this.options.preventflip !== !0) {
          var p;

          switch (this.checkBoundary(n.left + h.left, n.top + h.top, r, l, c)) {
            case "x":
              "x" !== this.options.preventflip && (p = o.x[u] || "right-top");
              break;

            case "y":
              "y" !== this.options.preventflip && (p = o.y[u] || "top-left");
              break;

            case "xy":
              this.options.preventflip || (p = o.xy[u] || "right-bottom");
          }

          p && (e = p.split("-"), h = d[p] ? d[p] : d["bottom-left"], a.addClass("uk-dropdown-autoflip"), this.checkBoundary(n.left + h.left, n.top + h.top, r, l, c) && (e = u.split("-"), h = d[u] ? d[u] : d["bottom-left"]));
        }
        r > c && (a.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])), a.css(h).css("display", "").addClass("uk-dropdown-" + e[0]);
      }
    },
    checkBoundary: function checkBoundary(i, e, n, o, s) {
      var a = "";
      return (0 > i || i - t.$win.scrollLeft() + n > s) && (a += "x"), (e - t.$win.scrollTop() < 0 || e - t.$win.scrollTop() + o > window.innerHeight) && (a += "y"), a;
    }
  }), t.component("dropdownOverlay", {
    defaults: {
      justify: !1,
      cls: "",
      duration: 200
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-dropdown-overlay]", i).each(function () {
          var i = t.$(this);
          i.data("dropdownOverlay") || t.dropdownOverlay(i, t.Utils.options(i.attr("data-uk-dropdown-overlay")));
        });
      });
    },
    init: function init() {
      var e = this;
      this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.overlay = this.element.find("uk-dropdown-overlay"), this.overlay.length || (this.overlay = t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), this.overlay.addClass(this.options.cls), this.on({
        "beforeshow.uk.dropdown": function beforeshowUkDropdown(t, n) {
          e.dropdown = n, e.justified && e.justified.length && i(e.overlay.css({
            display: "block",
            marginLeft: "",
            marginRight: ""
          }), e.justified, e.justified.outerWidth());
        },
        "show.uk.dropdown": function showUkDropdown() {
          var i = e.dropdown.dropdown.outerHeight(!0);
          e.dropdown.element.removeClass("uk-open"), e.overlay.stop().css("display", "block").animate({
            height: i
          }, e.options.duration, function () {
            e.dropdown.dropdown.css("visibility", ""), e.dropdown.element.addClass("uk-open"), t.Utils.checkDisplay(e.dropdown.dropdown, !0);
          }), e.pointerleave = !1;
        },
        "hide.uk.dropdown": function hideUkDropdown() {
          e.overlay.stop().animate({
            height: 0
          }, e.options.duration);
        },
        "pointerenter.uk.dropdown": function pointerenterUkDropdown() {
          clearTimeout(e.remainIdle);
        },
        "pointerleave.uk.dropdown": function pointerleaveUkDropdown() {
          e.pointerleave = !0;
        }
      }), this.overlay.on({
        mouseenter: function mouseenter() {
          e.remainIdle && (clearTimeout(e.dropdown.remainIdle), clearTimeout(e.remainIdle));
        },
        mouseleave: function mouseleave() {
          e.pointerleave && n && (e.remainIdle = setTimeout(function () {
            n && n.hide();
          }, n.options.remaintime));
        }
      });
    }
  });
}(UIkit2), function (t) {
  "use strict";

  var i = [];
  t.component("gridMatchHeight", {
    defaults: {
      target: !1,
      row: !0,
      ignorestacked: !1,
      observe: !1
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-match]", i).each(function () {
          var i,
              e = t.$(this);
          e.data("gridMatchHeight") || (i = t.gridMatchHeight(e, t.Utils.options(e.attr("data-uk-grid-match"))));
        });
      });
    },
    init: function init() {
      var e = this;
      this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (t.$win.on("load resize orientationchange", function () {
        var i = function i() {
          e.element.is(":visible") && e.match();
        };

        return t.$(function () {
          i();
        }), t.Utils.debounce(i, 50);
      }()), this.options.observe && t.domObserve(this.element, function () {
        e.element.is(":visible") && e.match();
      }), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.match();
      }.bind(this)), i.push(this));
    },
    match: function match() {
      var i = this.columns.filter(":visible:first");

      if (i.length) {
        var e = Math.ceil(100 * parseFloat(i.css("width")) / parseFloat(i.parent().css("width"))) >= 100;
        return e && !this.options.ignorestacked ? this.revert() : t.Utils.matchHeights(this.elements, this.options), this;
      }
    },
    revert: function revert() {
      return this.elements.css("min-height", ""), this;
    }
  }), t.component("gridMargin", {
    defaults: {
      cls: "uk-grid-margin",
      rowfirst: "uk-row-first"
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-margin]", i).each(function () {
          var i,
              e = t.$(this);
          e.data("gridMargin") || (i = t.gridMargin(e, t.Utils.options(e.attr("data-uk-grid-margin"))));
        });
      });
    },
    init: function init() {
      t.stackMargin(this.element, this.options);
    }
  });
}(UIkit2), function (t) {
  "use strict";

  function i(i, e) {
    return e ? ("object" == _typeof(i) ? (i = i instanceof jQuery ? i : t.$(i), i.parent().length && (e.persist = i, e.persist.data("modalPersistParent", i.parent()))) : i = "string" == typeof i || "number" == typeof i ? t.$("<div></div>").html(i) : t.$("<div></div>").html("UIkit2.modal Error: Unsupported data type: " + _typeof(i)), i.appendTo(e.element.find(".uk-modal-dialog")), e) : void 0;
  }

  var e,
      n = !1,
      o = 0,
      s = t.$html;
  t.$win.on("resize orientationchange", t.Utils.debounce(function () {
    t.$(".uk-modal.uk-open").each(function () {
      return t.$(this).data("modal") && t.$(this).data("modal").resize();
    });
  }, 150)), t.component("modal", {
    defaults: {
      keyboard: !0,
      bgclose: !0,
      minScrollHeight: 150,
      center: !1,
      modal: !0
    },
    scrollable: !1,
    transition: !1,
    hasTransitioned: !0,
    init: function init() {
      if (e || (e = t.$("body")), this.element.length) {
        var i = this;
        this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function (t) {
          t.preventDefault(), i.hide();
        }).on("click", function (e) {
          var n = t.$(e.target);
          n[0] == i.element[0] && i.options.bgclose && i.hide();
        }), t.domObserve(this.element, function () {
          i.resize();
        });
      }
    },
    toggle: function toggle() {
      return this[this.isActive() ? "hide" : "show"]();
    },
    show: function show() {
      if (this.element.length) {
        var i = this;
        if (!this.isActive()) return this.options.modal && n && n.hide(!0), this.element.removeClass("uk-open").show(), this.resize(!0), this.options.modal && (n = this), this.active = !0, o++, t.support.transition ? (this.hasTransitioned = !1, this.element.one(t.support.transition.end, function () {
          i.hasTransitioned = !0, t.Utils.focus(i.dialog, "a[href]");
        }).addClass("uk-open")) : (this.element.addClass("uk-open"), t.Utils.focus(this.dialog, "a[href]")), s.addClass("uk-modal-page").height(), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), t.Utils.checkDisplay(this.dialog, !0), this;
      }
    },
    hide: function hide(i) {
      if (!i && t.support.transition && this.hasTransitioned) {
        var e = this;
        this.one(t.support.transition.end, function () {
          e._hide();
        }).removeClass("uk-open");
      } else this._hide();

      return this;
    },
    resize: function resize(t) {
      if (this.isActive() || t) {
        var i = e.width();

        if (this.scrollbarwidth = window.innerWidth - i, e.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
          var n = this.dialog.outerHeight(),
              o = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
          n + o < window.innerHeight ? this.dialog.css({
            top: window.innerHeight / 2 - n / 2 - o
          }) : this.dialog.css({
            top: ""
          });
        }
      }
    },
    updateScrollable: function updateScrollable() {
      var t = this.dialog.find(".uk-overflow-container:visible:first");

      if (t.length) {
        t.css("height", 0);
        var i = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
            e = this.dialog.outerHeight(),
            n = window.innerHeight,
            o = n - 2 * (20 > i ? 20 : i) - e;
        return t.css({
          maxHeight: o < this.options.minScrollHeight ? "" : o,
          height: ""
        }), !0;
      }

      return !1;
    },
    _hide: function _hide() {
      this.active = !1, o > 0 ? o-- : o = 0, this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), o || (s.removeClass("uk-modal-page"), e.css(this.paddingdir, "")), n === this && (n = !1), this.trigger("hide.uk.modal");
    },
    isActive: function isActive() {
      return this.element.hasClass("uk-open");
    }
  }), t.component("modalTrigger", {
    boot: function boot() {
      t.$html.on("click.modal.uikit", "[data-uk-modal]", function (i) {
        var e = t.$(this);

        if (e.is("a") && i.preventDefault(), !e.data("modalTrigger")) {
          var n = t.modalTrigger(e, t.Utils.options(e.attr("data-uk-modal")));
          n.show();
        }
      }), t.$html.on("keydown.modal.uikit", function (t) {
        n && 27 === t.keyCode && n.options.keyboard && (t.preventDefault(), n.hide());
      });
    },
    init: function init() {
      var i = this;
      this.options = t.$.extend({
        target: i.element.is("a") ? i.element.attr("href") : !1
      }, this.options), this.modal = t.modal(this.options.target, this.options), this.on("click", function (t) {
        t.preventDefault(), i.show();
      }), this.proxy(this.modal, "show hide isActive");
    }
  }), t.modal.dialog = function (e, n) {
    var o = t.modal(t.$(t.modal.dialog.template).appendTo("body"), n);
    return o.on("hide.uk.modal", function () {
      o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), o.persist = !1), o.element.remove();
    }), i(e, o), o;
  }, t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', t.modal.alert = function (i, e) {
    e = t.$.extend(!0, {
      bgclose: !1,
      keyboard: !1,
      modal: !1,
      labels: t.modal.labels
    }, e);
    var n = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + e.labels.Ok + "</button></div>"].join(""), e);
    return n.on("show.uk.modal", function () {
      setTimeout(function () {
        n.element.find("button:first").focus();
      }, 50);
    }), n.show();
  }, t.modal.confirm = function (i, e, n) {
    var o = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};
    e = t.$.isFunction(e) ? e : function () {}, n = t.$.isFunction(n) ? n : function () {}, o = t.$.extend(!0, {
      bgclose: !1,
      keyboard: !1,
      modal: !1,
      labels: t.modal.labels
    }, t.$.isFunction(o) ? {} : o);
    var s = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + o.labels.Ok + "</button></div>"].join(""), o);
    return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
      t.$(this).is(".js-modal-confirm") ? e() : n(), s.hide();
    }), s.on("show.uk.modal", function () {
      setTimeout(function () {
        s.element.find(".js-modal-confirm").focus();
      }, 50);
    }), s.show();
  }, t.modal.prompt = function (i, e, n, o) {
    n = t.$.isFunction(n) ? n : function () {}, o = t.$.extend(!0, {
      bgclose: !1,
      keyboard: !1,
      modal: !1,
      labels: t.modal.labels
    }, o);
    var s = t.modal.dialog([i ? '<div class="uk-modal-content uk-form">' + String(i) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + o.labels.Ok + "</button></div>"].join(""), o),
        a = s.element.find("input[type='text']").val(e || "").on("keyup", function (t) {
      13 == t.keyCode && s.element.find(".js-modal-ok").trigger("click");
    });
    return s.element.find(".js-modal-ok").on("click", function () {
      n(a.val()) !== !1 && s.hide();
    }), s.show();
  }, t.modal.blockUI = function (i, e) {
    var n = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i || '<div class="uk-text-center">...</div>') + "</div>"].join(""), t.$.extend({
      bgclose: !1,
      keyboard: !1,
      modal: !1
    }, e));
    return n.content = n.element.find(".uk-modal-content:first"), n.show();
  }, t.modal.labels = {
    Ok: "Ok",
    Cancel: "Cancel"
  };
}(UIkit2), function (t) {
  "use strict";

  function i(i) {
    var e = t.$(i),
        n = "auto";
    if (e.is(":visible")) n = e.outerHeight();else {
      var o = {
        position: e.css("position"),
        visibility: e.css("visibility"),
        display: e.css("display")
      };
      n = e.css({
        position: "absolute",
        visibility: "hidden",
        display: "block"
      }).outerHeight(), e.css(o);
    }
    return n;
  }

  t.component("nav", {
    defaults: {
      toggle: '>li.uk-parent > a[href="#"]',
      lists: ">li.uk-parent > ul",
      multiple: !1
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-nav]", i).each(function () {
          var i = t.$(this);

          if (!i.data("nav")) {
            t.nav(i, t.Utils.options(i.attr("data-uk-nav")));
          }
        });
      });
    },
    init: function init() {
      var i = this;
      this.on("click.uk.nav", this.options.toggle, function (e) {
        e.preventDefault();
        var n = t.$(this);
        i.open(n.parent()[0] == i.element[0] ? n : n.parent("li"));
      }), this.update(), t.domObserve(this.element, function () {
        i.element.find(i.options.lists).not("[role]").length && i.update();
      });
    },
    update: function update() {
      var i = this;
      this.find(this.options.lists).each(function () {
        var e = t.$(this).attr("role", "menu"),
            n = e.closest("li"),
            o = n.hasClass("uk-active");
        n.data("list-container") || (e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), n.data("list-container", e.parent()[o ? "removeClass" : "addClass"]("uk-hidden"))), n.attr("aria-expanded", n.hasClass("uk-open")), o && i.open(n, !0);
      });
    },
    open: function open(e, n) {
      var o = this,
          s = this.element,
          a = t.$(e),
          r = a.data("list-container");
      this.options.multiple || s.children(".uk-open").not(e).each(function () {
        var i = t.$(this);
        i.data("list-container") && i.data("list-container").stop().animate({
          height: 0
        }, function () {
          t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden");
        });
      }), a.toggleClass("uk-open"), a.attr("aria-expanded", a.hasClass("uk-open")), r && (a.hasClass("uk-open") && r.removeClass("uk-hidden"), n ? (r.stop().height(a.hasClass("uk-open") ? "auto" : 0), a.hasClass("uk-open") || r.addClass("uk-hidden"), this.trigger("display.uk.check")) : r.stop().animate({
        height: a.hasClass("uk-open") ? i(r.find("ul:first")) : 0
      }, function () {
        a.hasClass("uk-open") ? r.css("height", "") : r.addClass("uk-hidden"), o.trigger("display.uk.check");
      }));
    }
  });
}(UIkit2), function (t) {
  "use strict";

  var i = {
    x: window.scrollX,
    y: window.scrollY
  },
      e = (t.$win, t.$doc, t.$html),
      n = {
    show: function show(n, o) {
      if (n = t.$(n), n.length) {
        o = t.$.extend({
          mode: "push"
        }, o);
        var s = t.$("body"),
            a = n.find(".uk-offcanvas-bar:first"),
            r = "right" == t.langdirection,
            l = a.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
            c = l * (r ? -1 : 1),
            u = window.innerWidth - s.width();
        i = {
          x: window.pageXOffset,
          y: window.pageYOffset
        }, a.attr("mode", o.mode), n.addClass("uk-active"), s.css({
          width: window.innerWidth - u,
          height: window.innerHeight
        }).addClass("uk-offcanvas-page"), ("push" == o.mode || "reveal" == o.mode) && s.css(r ? "margin-right" : "margin-left", (r ? -1 : 1) * a.outerWidth() * c), "reveal" == o.mode && a.css("clip", "rect(0, " + a.outerWidth() + "px, 100vh, 0)"), e.css("margin-top", -1 * i.y).width(), a.addClass("uk-offcanvas-bar-show"), this._initElement(n), a.trigger("show.uk.offcanvas", [n, a]), n.attr("aria-hidden", "false");
      }
    },
    hide: function hide(n) {
      var o = t.$("body"),
          s = t.$(".uk-offcanvas.uk-active"),
          a = "right" == t.langdirection,
          r = s.find(".uk-offcanvas-bar:first"),
          l = function l() {
        o.removeClass("uk-offcanvas-page").css({
          width: "",
          height: "",
          marginLeft: "",
          marginRight: ""
        }), s.removeClass("uk-active"), r.removeClass("uk-offcanvas-bar-show"), e.css("margin-top", ""), window.scrollTo(i.x, i.y), r.trigger("hide.uk.offcanvas", [s, r]), s.attr("aria-hidden", "true");
      };

      s.length && ("none" == r.attr("mode") && (n = !0), t.support.transition && !n ? (o.one(t.support.transition.end, function () {
        l();
      }).css(a ? "margin-right" : "margin-left", ""), "reveal" == r.attr("mode") && r.css("clip", ""), setTimeout(function () {
        r.removeClass("uk-offcanvas-bar-show");
      }, 0)) : l());
    },
    _initElement: function _initElement(i) {
      i.data("OffcanvasInit") || (i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function (i) {
        var e = t.$(i.target);

        if (!i.type.match(/swipe/) && !e.hasClass("uk-offcanvas-close")) {
          if (e.hasClass("uk-offcanvas-bar")) return;
          if (e.parents(".uk-offcanvas-bar:first").length) return;
        }

        i.stopImmediatePropagation(), n.hide();
      }), i.on("click", 'a[href*="#"]', function () {
        var i = t.$(this),
            e = i.attr("href");
        "#" != e && (t.$doc.one("hide.uk.offcanvas", function () {
          var n;

          try {
            n = t.$(i[0].hash);
          } catch (o) {
            n = "";
          }

          n.length || (n = t.$('[name="' + i[0].hash.replace("#", "") + '"]')), n.length && t.Utils.scrollToElement ? t.Utils.scrollToElement(n, t.Utils.options(i.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = e;
        }), n.hide());
      }), i.data("OffcanvasInit", !0));
    }
  };
  t.component("offcanvasTrigger", {
    boot: function boot() {
      e.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function (i) {
        i.preventDefault();
        var e = t.$(this);

        if (!e.data("offcanvasTrigger")) {
          {
            t.offcanvasTrigger(e, t.Utils.options(e.attr("data-uk-offcanvas")));
          }
          e.trigger("click");
        }
      }), e.on("keydown.uk.offcanvas", function (t) {
        27 === t.keyCode && n.hide();
      });
    },
    init: function init() {
      var i = this;
      this.options = t.$.extend({
        target: i.element.is("a") ? i.element.attr("href") : !1,
        mode: "push"
      }, this.options), this.on("click", function (t) {
        t.preventDefault(), n.show(i.options.target, i.options);
      });
    }
  }), t.offcanvas = n;
}(UIkit2), function (t) {
  "use strict";

  function i(i, e, n) {
    var o,
        s = t.$.Deferred(),
        a = i,
        r = i;
    return n[0] === e[0] ? (s.resolve(), s.promise()) : ("object" == _typeof(i) && (a = i[0], r = i[1] || i[0]), t.$body.css("overflow-x", "hidden"), o = function o() {
      e && e.hide().removeClass("uk-active " + r + " uk-animation-reverse"), n.addClass(a).one(t.support.animation.end, function () {
        setTimeout(function () {
          n.removeClass("" + a).css({
            opacity: "",
            display: ""
          });
        }, 0), s.resolve(), t.$body.css("overflow-x", ""), e && e.css({
          opacity: "",
          display: ""
        });
      }.bind(this)).show();
    }, n.css("animation-duration", this.options.duration + "ms"), e && e.length ? (e.css("animation-duration", this.options.duration + "ms"), e.css("display", "none").addClass(r + " uk-animation-reverse").one(t.support.animation.end, function () {
      o();
    }.bind(this)).css("display", "")) : (n.addClass("uk-active"), o()), s.promise());
  }

  var e;
  t.component("switcher", {
    defaults: {
      connect: !1,
      toggle: ">*",
      active: 0,
      animation: !1,
      duration: 200,
      swiping: !0
    },
    animating: !1,
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-switcher]", i).each(function () {
          var i = t.$(this);

          if (!i.data("switcher")) {
            t.switcher(i, t.Utils.options(i.attr("data-uk-switcher")));
          }
        });
      });
    },
    init: function init() {
      var i = this;
      this.on("click.uk.switcher", this.options.toggle, function (t) {
        t.preventDefault(), i.show(this);
      }), this.options.connect && (this.connect = t.$(this.options.connect), this.connect.length && (this.connect.on("click.uk.switcher", "[data-uk-switcher-item]", function (e) {
        e.preventDefault();
        var n = t.$(this).attr("data-uk-switcher-item");
        if (i.index != n) switch (n) {
          case "next":
          case "previous":
            i.show(i.index + ("next" == n ? 1 : -1));
            break;

          default:
            i.show(parseInt(n, 10));
        }
      }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function (t) {
        t.preventDefault(), window.getSelection().toString() || i.show(i.index + ("swipeLeft" == t.type ? 1 : -1));
      }), this.update()));
    },
    update: function update() {
      this.connect.children().removeClass("uk-active").attr("aria-hidden", "true");
      var t = this.find(this.options.toggle),
          i = t.filter(".uk-active");
      if (i.length) this.show(i, !1);else {
        if (this.options.active === !1) return;
        i = t.eq(this.options.active), this.show(i.length ? i : t.eq(0), !1);
      }
      t.not(i).attr("aria-expanded", "false"), i.attr("aria-expanded", "true");
    },
    show: function show(n, o) {
      if (!this.animating) {
        var s = this.find(this.options.toggle);
        isNaN(n) ? n = t.$(n) : (n = 0 > n ? s.length - 1 : n, n = s.eq(s[n] ? n : 0));

        var a = this,
            r = t.$(n),
            l = e[this.options.animation] || function (t, n) {
          if (!a.options.animation) return e.none.apply(a);
          var o = a.options.animation.split(",");
          return 1 == o.length && (o[1] = o[0]), o[0] = o[0].trim(), o[1] = o[1].trim(), i.apply(a, [o, t, n]);
        };

        o !== !1 && t.support.animation || (l = e.none), r.hasClass("uk-disabled") || (s.attr("aria-expanded", "false"), r.attr("aria-expanded", "true"), s.filter(".uk-active").removeClass("uk-active"), r.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(r), -1 == this.index && (this.index = 0), this.connect.each(function () {
          var i = t.$(this),
              e = t.$(i.children()),
              n = t.$(e.filter(".uk-active")),
              o = t.$(e.eq(a.index));
          a.animating = !0, l.apply(a, [n, o]).then(function () {
            n.removeClass("uk-active"), o.addClass("uk-active"), n.attr("aria-hidden", "true"), o.attr("aria-hidden", "false"), t.Utils.checkDisplay(o, !0), a.animating = !1;
          });
        })), this.trigger("show.uk.switcher", [r]));
      }
    }
  }), e = {
    none: function none() {
      var i = t.$.Deferred();
      return i.resolve(), i.promise();
    },
    fade: function fade(t, e) {
      return i.apply(this, ["uk-animation-fade", t, e]);
    },
    "slide-bottom": function slideBottom(t, e) {
      return i.apply(this, ["uk-animation-slide-bottom", t, e]);
    },
    "slide-top": function slideTop(t, e) {
      return i.apply(this, ["uk-animation-slide-top", t, e]);
    },
    "slide-vertical": function slideVertical(t, e) {
      var n = ["uk-animation-slide-top", "uk-animation-slide-bottom"];
      return t && t.index() > e.index() && n.reverse(), i.apply(this, [n, t, e]);
    },
    "slide-left": function slideLeft(t, e) {
      return i.apply(this, ["uk-animation-slide-left", t, e]);
    },
    "slide-right": function slideRight(t, e) {
      return i.apply(this, ["uk-animation-slide-right", t, e]);
    },
    "slide-horizontal": function slideHorizontal(t, e) {
      var n = ["uk-animation-slide-right", "uk-animation-slide-left"];
      return t && t.index() > e.index() && n.reverse(), i.apply(this, [n, t, e]);
    },
    scale: function scale(t, e) {
      return i.apply(this, ["uk-animation-scale-up", t, e]);
    }
  }, t.switcher.animations = e;
}(UIkit2), function (t) {
  "use strict";

  t.component("tab", {
    defaults: {
      target: ">li:not(.uk-tab-responsive, .uk-disabled)",
      connect: !1,
      active: 0,
      animation: !1,
      duration: 200,
      swiping: !0
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-tab]", i).each(function () {
          var i = t.$(this);

          if (!i.data("tab")) {
            t.tab(i, t.Utils.options(i.attr("data-uk-tab")));
          }
        });
      });
    },
    init: function init() {
      var i = this;
      this.current = !1, this.on("click.uk.tab", this.options.target, function (e) {
        if (e.preventDefault(), !i.switcher || !i.switcher.animating) {
          var n = i.find(i.options.target).not(this);
          n.removeClass("uk-active").blur(), i.trigger("change.uk.tab", [t.$(this).addClass("uk-active"), i.current]), i.current = t.$(this), i.options.connect || (n.attr("aria-expanded", "false"), t.$(this).attr("aria-expanded", "true"));
        }
      }), this.options.connect && (this.connect = t.$(this.options.connect)), this.responsivetab = t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uk.tab", "a", function (e) {
        e.preventDefault(), e.stopPropagation();
        var n = t.$(this);
        i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click");
      }), this.on("show.uk.switcher change.uk.tab", function (t, e) {
        i.responsivetab.caption.html(e.text());
      }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = t.switcher(this.element, {
        toggle: ">li:not(.uk-tab-responsive)",
        connect: this.options.connect,
        active: this.options.active,
        animation: this.options.animation,
        duration: this.options.duration,
        swiping: this.options.swiping
      })), t.dropdown(this.responsivetab, {
        mode: "click",
        preventflip: "y"
      }), i.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]), this.check(), t.$win.on("resize orientationchange", t.Utils.debounce(function () {
        i.element.is(":visible") && i.check();
      }, 100)), this.on("display.uk.check", function () {
        i.element.is(":visible") && i.check();
      });
    },
    check: function check() {
      var i = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");
      if (!i.length) return this.responsivetab.addClass("uk-hidden"), void 0;
      var e,
          n,
          o,
          s = i.eq(0).offset().top + Math.ceil(i.eq(0).height() / 2),
          a = !1;
      if (this.responsivetab.lst.empty(), i.each(function () {
        t.$(this).offset().top > s && (a = !0);
      }), a) for (var r = 0; r < i.length; r++) {
        e = t.$(i.eq(r)), n = e.find("a"), "none" == e.css("float") || e.attr("uk-dropdown") || (e.hasClass("uk-disabled") || (o = t.$(e[0].outerHTML), o.find("a").data("index", r), this.responsivetab.lst.append(o)), e.addClass("uk-hidden"));
      }
      this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden");
    }
  });
}(UIkit2), function (t) {
  "use strict";

  t.component("cover", {
    defaults: {
      automute: !0
    },
    boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-cover]", i).each(function () {
          var i = t.$(this);

          if (!i.data("cover")) {
            t.cover(i, t.Utils.options(i.attr("data-uk-cover")));
          }
        });
      });
    },
    init: function init() {
      if (this.parent = this.element.parent(), t.$win.on("load resize orientationchange", t.Utils.debounce(function () {
        this.check();
      }.bind(this), 100)), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.check();
      }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
        var i = this.element.attr("src");
        this.element.attr("src", "").on("load", function () {
          this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*");
        }).attr("src", [i, i.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""));
      }
    },
    check: function check() {
      this.element.css({
        width: "",
        height: ""
      }), this.dimension = {
        w: this.element.width(),
        h: this.element.height()
      }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;
      var t,
          i,
          e = this.parent.width(),
          n = this.parent.height();
      e / this.ratio < n ? (t = Math.ceil(n * this.ratio), i = n) : (t = e, i = Math.ceil(e / this.ratio)), this.element.css({
        width: t,
        height: i
      });
    }
  });
}(UIkit2);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! UIkit 2.27.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  var i;
  window.UIkit2 && (i = t(UIkit2)), "function" == typeof define && define.amd && define("uikit-sticky", ["uikit"], function () {
    return i || t(UIkit2);
  });
}(function (t) {
  "use strict";

  function i() {
    var i = arguments.length ? arguments : n;
    if (i.length && !(e.scrollTop() < 0)) for (var o, a, r, h, p = e.scrollTop(), c = s.height(), l = e.height(), m = c - l, d = p > m ? m - p : 0, u = 0; u < i.length; u++) {
      if (h = i[u], h.element.is(":visible") && !h.animate) {
        if (h.check()) {
          if (h.top < 0 ? o = 0 : (r = h.element.outerHeight(), o = c - r - h.top - h.options.bottom - p - d, o = 0 > o ? o + h.top : h.top), h.boundary && h.boundary.length) {
            var f = h.boundary.offset().top;
            a = h.boundtoparent ? c - (f + h.boundary.outerHeight()) + parseInt(h.boundary.css("padding-bottom")) : c - f, o = p + r > c - a - (h.top < 0 ? 0 : h.top) ? c - a - (p + r) : o;
          }

          if (h.currentTop != o) {
            if (h.element.css({
              position: "fixed",
              top: o,
              width: h.getWidthFrom.length ? h.getWidthFrom.width() : h.element.width()
            }), !h.init && (h.element.addClass(h.options.clsinit), location.hash && p > 0 && h.options.target)) {
              var g = t.$(location.hash);
              g.length && setTimeout(function (t, i) {
                return function () {
                  i.element.width();
                  var e = t.offset(),
                      s = e.top + t.outerHeight(),
                      n = i.element.offset(),
                      o = i.element.outerHeight(),
                      a = n.top + o;
                  n.top < s && e.top < a && (p = e.top - o - i.options.target, window.scrollTo(0, p));
                };
              }(g, h), 0);
            }

            h.element.addClass(h.options.clsactive).removeClass(h.options.clsinactive), h.element.trigger("active.uk.sticky"), h.element.css("margin", ""), h.options.animation && h.init && !t.Utils.isInView(h.wrapper) && h.element.addClass(h.options.animation), h.currentTop = o;
          }
        } else null !== h.currentTop && h.reset();

        h.init = !0;
      }
    }
  }

  var e = t.$win,
      s = t.$doc,
      n = [],
      o = 1;
  return t.component("sticky", {
    defaults: {
      top: 0,
      bottom: 0,
      animation: "",
      clsinit: "uk-sticky-init",
      clsactive: "uk-active",
      clsinactive: "",
      getWidthFrom: "",
      showup: !1,
      boundary: !1,
      media: !1,
      target: !1,
      disabled: !1
    },
    boot: function boot() {
      t.$doc.on("scrolling.uk.document", function (t, e) {
        e && e.dir && (o = e.dir.y, i());
      }), t.$win.on("resize orientationchange", t.Utils.debounce(function () {
        if (n.length) {
          for (var t = 0; t < n.length; t++) {
            n[t].reset(!0), n[t].self.computeWrapper();
          }

          i();
        }
      }, 100)), t.ready(function (e) {
        setTimeout(function () {
          t.$("[data-uk-sticky]", e).each(function () {
            var i = t.$(this);
            i.data("sticky") || t.sticky(i, t.Utils.options(i.attr("data-uk-sticky")));
          }), i();
        }, 0);
      });
    },
    init: function init() {
      var i,
          a = this.options.boundary;
      this.wrapper = this.element.wrap('<div class="uk-sticky-placeholder"></div>').parent(), this.computeWrapper(), this.wrapper.css({
        "margin-top": this.element.css("margin-top"),
        "margin-bottom": this.element.css("margin-bottom"),
        "margin-left": this.element.css("margin-left"),
        "margin-right": this.element.css("margin-right")
      }), this.element.css("margin", 0), a && (a === !0 || "!" === a[0] ? (a = a === !0 ? this.wrapper.parent() : this.wrapper.closest(a.substr(1)), i = !0) : "string" == typeof a && (a = t.$(a))), this.sticky = {
        self: this,
        options: this.options,
        element: this.element,
        currentTop: null,
        wrapper: this.wrapper,
        init: !1,
        getWidthFrom: t.$(this.options.getWidthFrom || this.wrapper),
        boundary: a,
        boundtoparent: i,
        top: 0,
        calcTop: function calcTop() {
          var i = this.options.top;
          if (this.options.top && "string" == typeof this.options.top) if (this.options.top.match(/^(-|)(\d+)vh$/)) i = window.innerHeight * parseInt(this.options.top, 10) / 100;else {
            var e = t.$(this.options.top).first();
            e.length && e.is(":visible") && (i = -1 * (e.offset().top + e.outerHeight() - this.wrapper.offset().top));
          }
          this.top = i;
        },
        reset: function reset(i) {
          this.calcTop();

          var e = function () {
            this.element.css({
              position: "",
              top: "",
              width: "",
              left: "",
              margin: "0"
            }), this.element.removeClass([this.options.animation, "uk-animation-reverse", this.options.clsactive].join(" ")), this.element.addClass(this.options.clsinactive), this.element.trigger("inactive.uk.sticky"), this.currentTop = null, this.animate = !1;
          }.bind(this);

          !i && this.options.animation && t.support.animation && !t.Utils.isInView(this.wrapper) ? (this.animate = !0, this.element.removeClass(this.options.animation).one(t.support.animation.end, function () {
            e();
          }).width(), this.element.addClass(this.options.animation + " uk-animation-reverse")) : e();
        },
        check: function check() {
          if (this.options.disabled) return !1;
          if (this.options.media) switch (_typeof(this.options.media)) {
            case "number":
              if (window.innerWidth < this.options.media) return !1;
              break;

            case "string":
              if (window.matchMedia && !window.matchMedia(this.options.media).matches) return !1;
          }
          var i = e.scrollTop(),
              n = s.height(),
              a = n - window.innerHeight,
              r = i > a ? a - i : 0,
              h = this.wrapper.offset().top,
              p = h - this.top - r,
              c = i >= p;
          return c && this.options.showup && (1 == o && (c = !1), -1 == o && !this.element.hasClass(this.options.clsactive) && t.Utils.isInView(this.wrapper) && (c = !1)), c;
        }
      }, this.sticky.calcTop(), n.push(this.sticky);
    },
    update: function update() {
      i(this.sticky);
    },
    enable: function enable() {
      this.options.disabled = !1, this.update();
    },
    disable: function disable(t) {
      this.options.disabled = !0, this.sticky.reset(t);
    },
    computeWrapper: function computeWrapper() {
      this.wrapper.css({
        height: -1 == ["absolute", "fixed"].indexOf(this.element.css("position")) ? this.element.outerHeight() : "",
        "float": "none" != this.element.css("float") ? this.element.css("float") : ""
      }), "fixed" == this.element.css("position") && this.element.css({
        width: this.sticky.getWidthFrom.length ? this.sticky.getWidthFrom.width() : this.element.width()
      });
    }
  }), t.sticky;
});
"use strict";

/*! UIkit 2.27.4 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  var e;
  window.UIkit2 && (e = t(UIkit2)), "function" == typeof define && define.amd && define("uikit-notify", ["uikit"], function () {
    return e || t(UIkit2);
  });
}(function (t) {
  "use strict";

  var e = {},
      i = {},
      s = function s(e) {
    return "string" == t.$.type(e) && (e = {
      message: e
    }), arguments[1] && (e = t.$.extend(e, "string" == t.$.type(arguments[1]) ? {
      status: arguments[1]
    } : arguments[1])), new n(e).show();
  },
      o = function o(t, e) {
    var s;
    if (t) for (s in i) {
      t === i[s].group && i[s].close(e);
    } else for (s in i) {
      i[s].close(e);
    }
  },
      n = function n(s) {
    this.options = t.$.extend({}, n.defaults, s), this.uuid = t.Utils.uid("notifymsg"), this.element = t.$(['<div class="uk-notify-message">', '<a class="uk-close"></a>', "<div></div>", "</div>"].join("")).data("notifyMessage", this), this.content(this.options.message), this.options.status && (this.element.addClass("uk-notify-message-" + this.options.status), this.currentstatus = this.options.status), this.group = this.options.group, i[this.uuid] = this, e[this.options.pos] || (e[this.options.pos] = t.$('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo("body").on("click", ".uk-notify-message", function () {
      var e = t.$(this).data("notifyMessage");
      e.element.trigger("manualclose.uk.notify", [e]), e.close();
    }));
  };

  return t.$.extend(n.prototype, {
    uuid: !1,
    element: !1,
    timout: !1,
    currentstatus: "",
    group: !1,
    show: function show() {
      if (!this.element.is(":visible")) {
        var t = this;
        e[this.options.pos].show().prepend(this.element);
        var i = parseInt(this.element.css("margin-bottom"), 10);
        return this.element.css({
          opacity: 0,
          marginTop: -1 * this.element.outerHeight(),
          marginBottom: 0
        }).animate({
          opacity: 1,
          marginTop: 0,
          marginBottom: i
        }, function () {
          if (t.options.timeout) {
            var e = function e() {
              t.close();
            };

            t.timeout = setTimeout(e, t.options.timeout), t.element.hover(function () {
              clearTimeout(t.timeout);
            }, function () {
              t.timeout = setTimeout(e, t.options.timeout);
            });
          }
        }), this;
      }
    },
    close: function close(t) {
      var s = this,
          o = function o() {
        s.element.remove(), e[s.options.pos].children().length || e[s.options.pos].hide(), s.options.onClose.apply(s, []), s.element.trigger("close.uk.notify", [s]), delete i[s.uuid];
      };

      this.timeout && clearTimeout(this.timeout), t ? o() : this.element.animate({
        opacity: 0,
        marginTop: -1 * this.element.outerHeight(),
        marginBottom: 0
      }, function () {
        o();
      });
    },
    content: function content(t) {
      var e = this.element.find(">div");
      return t ? (e.html(t), this) : e.html();
    },
    status: function status(t) {
      return t ? (this.element.removeClass("uk-notify-message-" + this.currentstatus).addClass("uk-notify-message-" + t), this.currentstatus = t, this) : this.currentstatus;
    }
  }), n.defaults = {
    message: "",
    status: "",
    timeout: 5e3,
    group: null,
    pos: "top-center",
    onClose: function onClose() {}
  }, t.notify = s, t.notify.message = n, t.notify.closeAll = o, s;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! choices.js v7.1.5 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Choices = t() : e.Choices = t();
}(window, function () {
  return function (e) {
    var t = {};

    function i(n) {
      if (t[n]) return t[n].exports;
      var s = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
    }

    return i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var s in e) {
        i.d(n, s, function (t) {
          return e[t];
        }.bind(null, s));
      }
      return n;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "/public/assets/scripts/", i(i.s = 5);
  }([function (e, t, i) {
    var n;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    !function () {
      "use strict";

      var i = {}.hasOwnProperty;

      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t];

          if (n) {
            var r = _typeof(n);

            if ("string" === r || "number" === r) e.push(n);else if (Array.isArray(n) && n.length) {
              var o = s.apply(null, n);
              o && e.push(o);
            } else if ("object" === r) for (var a in n) {
              i.call(n, a) && n[a] && e.push(a);
            }
          }
        }

        return e.join(" ");
      }

      e.exports ? (s["default"] = s, e.exports = s) : void 0 === (n = function () {
        return s;
      }.apply(t, [])) || (e.exports = n);
    }();
  }, function (e, t, i) {
    "use strict";

    var n = function n(e) {
      return function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && !function (e) {
        var t = Object.prototype.toString.call(e);
        return "[object RegExp]" === t || "[object Date]" === t || function (e) {
          return e.$$typeof === s;
        }(e);
      }(e);
    };

    var s = "function" == typeof Symbol && Symbol["for"] ? Symbol["for"]("react.element") : 60103;

    function r(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? c((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
      var i;
    }

    function o(e, t, i) {
      return e.concat(t).map(function (e) {
        return r(e, i);
      });
    }

    function a(e) {
      return Object.keys(e).concat(function (e) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
          return e.propertyIsEnumerable(t);
        }) : [];
      }(e));
    }

    function l(e, t, i) {
      var n = {};
      return i.isMergeableObject(e) && a(e).forEach(function (t) {
        n[t] = r(e[t], i);
      }), a(t).forEach(function (s) {
        (function (e, t) {
          try {
            return t in e && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
          } catch (e) {
            return !1;
          }
        })(e, s) || (i.isMergeableObject(t[s]) && e[s] ? n[s] = function (e, t) {
          if (!t.customMerge) return c;
          var i = t.customMerge(e);
          return "function" == typeof i ? i : c;
        }(s, i)(e[s], t[s], i) : n[s] = r(t[s], i));
      }), n;
    }

    function c(e, t, i) {
      (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || n, i.cloneUnlessOtherwiseSpecified = r;
      var s = Array.isArray(t);
      return s === Array.isArray(e) ? s ? i.arrayMerge(e, t, i) : l(e, t, i) : r(t, i);
    }

    c.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error("first argument should be an array");
      return e.reduce(function (e, i) {
        return c(e, i, t);
      }, {});
    };

    var h = c;
    e.exports = h;
  }, function (e, t, i) {
    "use strict";

    (function (e, n) {
      var s,
          r = i(4);
      s = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
      var o = Object(r.a)(s);
      t.a = o;
    }).call(this, i(7), i(8)(e));
  }, function (e, t, i) {
    /*!
     * Fuse.js v3.4.2 - Lightweight fuzzy-search (http://fusejs.io)
     * 
     * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
     * All Rights Reserved. Apache Software License 2.0
     * 
     * http://www.apache.org/licenses/LICENSE-2.0
     */
    var n;
    n = function n() {
      return function (e) {
        var t = {};

        function i(n) {
          if (t[n]) return t[n].exports;
          var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
        }

        return i.m = e, i.c = t, i.d = function (e, t, n) {
          i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
          });
        }, i.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }, i.t = function (e, t) {
          if (1 & t && (e = i(e)), 8 & t) return e;
          if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
          var n = Object.create(null);
          if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var s in e) {
            i.d(n, s, function (t) {
              return e[t];
            }.bind(null, s));
          }
          return n;
        }, i.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e["default"];
          } : function () {
            return e;
          };
          return i.d(t, "a", t), t;
        }, i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, i.p = "", i(i.s = "./src/index.js");
      }({
        "./src/bitap/bitap_matched_indices.js":
        /*!********************************************!*\
          !*** ./src/bitap/bitap_matched_indices.js ***!
          \********************************************/

        /*! no static exports found */
        function srcBitapBitap_matched_indicesJs(e, t) {
          e.exports = function () {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], n = -1, s = -1, r = 0, o = e.length; r < o; r += 1) {
              var a = e[r];
              a && -1 === n ? n = r : a || -1 === n || ((s = r - 1) - n + 1 >= t && i.push([n, s]), n = -1);
            }

            return e[r - 1] && r - n >= t && i.push([n, r - 1]), i;
          };
        },
        "./src/bitap/bitap_pattern_alphabet.js":
        /*!*********************************************!*\
          !*** ./src/bitap/bitap_pattern_alphabet.js ***!
          \*********************************************/

        /*! no static exports found */
        function srcBitapBitap_pattern_alphabetJs(e, t) {
          e.exports = function (e) {
            for (var t = {}, i = e.length, n = 0; n < i; n += 1) {
              t[e.charAt(n)] = 0;
            }

            for (var s = 0; s < i; s += 1) {
              t[e.charAt(s)] |= 1 << i - s - 1;
            }

            return t;
          };
        },
        "./src/bitap/bitap_regex_search.js":
        /*!*****************************************!*\
          !*** ./src/bitap/bitap_regex_search.js ***!
          \*****************************************/

        /*! no static exports found */
        function srcBitapBitap_regex_searchJs(e, t) {
          var i = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

          e.exports = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
                s = new RegExp(t.replace(i, "\\$&").replace(n, "|")),
                r = e.match(s),
                o = !!r,
                a = [];
            if (o) for (var l = 0, c = r.length; l < c; l += 1) {
              var h = r[l];
              a.push([e.indexOf(h), h.length - 1]);
            }
            return {
              score: o ? .5 : 1,
              isMatch: o,
              matchedIndices: a
            };
          };
        },
        "./src/bitap/bitap_score.js":
        /*!**********************************!*\
          !*** ./src/bitap/bitap_score.js ***!
          \**********************************/

        /*! no static exports found */
        function srcBitapBitap_scoreJs(e, t) {
          e.exports = function (e, t) {
            var i = t.errors,
                n = void 0 === i ? 0 : i,
                s = t.currentLocation,
                r = void 0 === s ? 0 : s,
                o = t.expectedLocation,
                a = void 0 === o ? 0 : o,
                l = t.distance,
                c = void 0 === l ? 100 : l,
                h = n / e.length,
                u = Math.abs(a - r);
            return c ? h + u / c : u ? 1 : h;
          };
        },
        "./src/bitap/bitap_search.js":
        /*!***********************************!*\
          !*** ./src/bitap/bitap_search.js ***!
          \***********************************/

        /*! no static exports found */
        function srcBitapBitap_searchJs(e, t, i) {
          var n = i(
          /*! ./bitap_score */
          "./src/bitap/bitap_score.js"),
              s = i(
          /*! ./bitap_matched_indices */
          "./src/bitap/bitap_matched_indices.js");

          e.exports = function (e, t, i, r) {
            for (var o = r.location, a = void 0 === o ? 0 : o, l = r.distance, c = void 0 === l ? 100 : l, h = r.threshold, u = void 0 === h ? .6 : h, d = r.findAllMatches, p = void 0 !== d && d, f = r.minMatchCharLength, m = void 0 === f ? 1 : f, v = a, g = e.length, _ = u, b = e.indexOf(t, v), y = t.length, E = [], S = 0; S < g; S += 1) {
              E[S] = 0;
            }

            if (-1 !== b) {
              var I = n(t, {
                errors: 0,
                currentLocation: b,
                expectedLocation: v,
                distance: c
              });

              if (_ = Math.min(I, _), -1 !== (b = e.lastIndexOf(t, v + y))) {
                var w = n(t, {
                  errors: 0,
                  currentLocation: b,
                  expectedLocation: v,
                  distance: c
                });
                _ = Math.min(w, _);
              }
            }

            b = -1;

            for (var C = [], O = 1, A = y + g, x = 1 << y - 1, T = 0; T < y; T += 1) {
              for (var L = 0, k = A; L < k;) {
                n(t, {
                  errors: T,
                  currentLocation: v + k,
                  expectedLocation: v,
                  distance: c
                }) <= _ ? L = k : A = k, k = Math.floor((A - L) / 2 + L);
              }

              A = k;
              var D = Math.max(1, v - k + 1),
                  P = p ? g : Math.min(v + k, g) + y,
                  F = Array(P + 2);
              F[P + 1] = (1 << T) - 1;

              for (var j = P; j >= D; j -= 1) {
                var M = j - 1,
                    N = i[e.charAt(M)];

                if (N && (E[M] = 1), F[j] = (F[j + 1] << 1 | 1) & N, 0 !== T && (F[j] |= (C[j + 1] | C[j]) << 1 | 1 | C[j + 1]), F[j] & x && (O = n(t, {
                  errors: T,
                  currentLocation: M,
                  expectedLocation: v,
                  distance: c
                })) <= _) {
                  if (_ = O, (b = M) <= v) break;
                  D = Math.max(1, 2 * v - b);
                }
              }

              if (n(t, {
                errors: T + 1,
                currentLocation: v,
                expectedLocation: v,
                distance: c
              }) > _) break;
              C = F;
            }

            return {
              isMatch: b >= 0,
              score: 0 === O ? .001 : O,
              matchedIndices: s(E, m)
            };
          };
        },
        "./src/bitap/index.js":
        /*!****************************!*\
          !*** ./src/bitap/index.js ***!
          \****************************/

        /*! no static exports found */
        function srcBitapIndexJs(e, t, i) {
          function n(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }

          var s = i(
          /*! ./bitap_regex_search */
          "./src/bitap/bitap_regex_search.js"),
              r = i(
          /*! ./bitap_search */
          "./src/bitap/bitap_search.js"),
              o = i(
          /*! ./bitap_pattern_alphabet */
          "./src/bitap/bitap_pattern_alphabet.js"),
              a = function () {
            function e(t, i) {
              var n = i.location,
                  s = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  l = i.threshold,
                  c = void 0 === l ? .6 : l,
                  h = i.maxPatternLength,
                  u = void 0 === h ? 32 : h,
                  d = i.isCaseSensitive,
                  p = void 0 !== d && d,
                  f = i.tokenSeparator,
                  m = void 0 === f ? / +/g : f,
                  v = i.findAllMatches,
                  g = void 0 !== v && v,
                  _ = i.minMatchCharLength,
                  b = void 0 === _ ? 1 : _;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: s,
                distance: a,
                threshold: c,
                maxPatternLength: u,
                isCaseSensitive: p,
                tokenSeparator: m,
                findAllMatches: g,
                minMatchCharLength: b
              }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = o(this.pattern));
            }

            var t, i, a;
            return t = e, (i = [{
              key: "search",
              value: function value(e) {
                if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                  isMatch: !0,
                  score: 0,
                  matchedIndices: [[0, e.length - 1]]
                };
                var t = this.options,
                    i = t.maxPatternLength,
                    n = t.tokenSeparator;
                if (this.pattern.length > i) return s(e, this.pattern, n);
                var o = this.options,
                    a = o.location,
                    l = o.distance,
                    c = o.threshold,
                    h = o.findAllMatches,
                    u = o.minMatchCharLength;
                return r(e, this.pattern, this.patternAlphabet, {
                  location: a,
                  distance: l,
                  threshold: c,
                  findAllMatches: h,
                  minMatchCharLength: u
                });
              }
            }]) && n(t.prototype, i), a && n(t, a), e;
          }();

          e.exports = a;
        },
        "./src/helpers/deep_value.js":
        /*!***********************************!*\
          !*** ./src/helpers/deep_value.js ***!
          \***********************************/

        /*! no static exports found */
        function srcHelpersDeep_valueJs(e, t, i) {
          var n = i(
          /*! ./is_array */
          "./src/helpers/is_array.js");

          e.exports = function (e, t) {
            return function e(t, i, s) {
              if (i) {
                var r = i.indexOf("."),
                    o = i,
                    a = null;
                -1 !== r && (o = i.slice(0, r), a = i.slice(r + 1));
                var l = t[o];
                if (null != l) if (a || "string" != typeof l && "number" != typeof l) {
                  if (n(l)) for (var c = 0, h = l.length; c < h; c += 1) {
                    e(l[c], a, s);
                  } else a && e(l, a, s);
                } else s.push(l.toString());
              } else s.push(t);

              return s;
            }(e, t, []);
          };
        },
        "./src/helpers/is_array.js":
        /*!*********************************!*\
          !*** ./src/helpers/is_array.js ***!
          \*********************************/

        /*! no static exports found */
        function srcHelpersIs_arrayJs(e, t) {
          e.exports = function (e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
          };
        },
        "./src/index.js":
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/

        /*! no static exports found */
        function srcIndexJs(e, t, i) {
          function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
              return _typeof(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
            })(e);
          }

          function s(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }

          var r = i(
          /*! ./bitap */
          "./src/bitap/index.js"),
              o = i(
          /*! ./helpers/deep_value */
          "./src/helpers/deep_value.js"),
              a = i(
          /*! ./helpers/is_array */
          "./src/helpers/is_array.js"),
              l = function () {
            function e(t, i) {
              var n = i.location,
                  s = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  l = i.threshold,
                  c = void 0 === l ? .6 : l,
                  h = i.maxPatternLength,
                  u = void 0 === h ? 32 : h,
                  d = i.caseSensitive,
                  p = void 0 !== d && d,
                  f = i.tokenSeparator,
                  m = void 0 === f ? / +/g : f,
                  v = i.findAllMatches,
                  g = void 0 !== v && v,
                  _ = i.minMatchCharLength,
                  b = void 0 === _ ? 1 : _,
                  y = i.id,
                  E = void 0 === y ? null : y,
                  S = i.keys,
                  I = void 0 === S ? [] : S,
                  w = i.shouldSort,
                  C = void 0 === w || w,
                  O = i.getFn,
                  A = void 0 === O ? o : O,
                  x = i.sortFn,
                  T = void 0 === x ? function (e, t) {
                return e.score - t.score;
              } : x,
                  L = i.tokenize,
                  k = void 0 !== L && L,
                  D = i.matchAllTokens,
                  P = void 0 !== D && D,
                  F = i.includeMatches,
                  j = void 0 !== F && F,
                  M = i.includeScore,
                  N = void 0 !== M && M,
                  K = i.verbose,
                  R = void 0 !== K && K;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: s,
                distance: a,
                threshold: c,
                maxPatternLength: u,
                isCaseSensitive: p,
                tokenSeparator: m,
                findAllMatches: g,
                minMatchCharLength: b,
                id: E,
                keys: I,
                includeMatches: j,
                includeScore: N,
                shouldSort: C,
                getFn: A,
                sortFn: T,
                verbose: R,
                tokenize: k,
                matchAllTokens: P
              }, this.setCollection(t);
            }

            var t, i, l;
            return t = e, (i = [{
              key: "setCollection",
              value: function value(e) {
                return this.list = e, e;
              }
            }, {
              key: "search",
              value: function value(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                  limit: !1
                };

                this._log('---------\nSearch pattern: "'.concat(e, '"'));

                var i = this._prepareSearchers(e),
                    n = i.tokenSearchers,
                    s = i.fullSearcher,
                    r = this._search(n, s),
                    o = r.weights,
                    a = r.results;

                return this._computeScore(o, a), this.options.shouldSort && this._sort(a), t.limit && "number" == typeof t.limit && (a = a.slice(0, t.limit)), this._format(a);
              }
            }, {
              key: "_prepareSearchers",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = [];
                if (this.options.tokenize) for (var i = e.split(this.options.tokenSeparator), n = 0, s = i.length; n < s; n += 1) {
                  t.push(new r(i[n], this.options));
                }
                var o = new r(e, this.options);
                return {
                  tokenSearchers: t,
                  fullSearcher: o
                };
              }
            }, {
              key: "_search",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = this.list,
                    n = {},
                    s = [];

                if ("string" == typeof i[0]) {
                  for (var r = 0, o = i.length; r < o; r += 1) {
                    this._analyze({
                      key: "",
                      value: i[r],
                      record: r,
                      index: r
                    }, {
                      resultMap: n,
                      results: s,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }

                  return {
                    weights: null,
                    results: s
                  };
                }

                for (var a = {}, l = 0, c = i.length; l < c; l += 1) {
                  for (var h = i[l], u = 0, d = this.options.keys.length; u < d; u += 1) {
                    var p = this.options.keys[u];

                    if ("string" != typeof p) {
                      if (a[p.name] = {
                        weight: 1 - p.weight || 1
                      }, p.weight <= 0 || p.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                      p = p.name;
                    } else a[p] = {
                      weight: 1
                    };

                    this._analyze({
                      key: p,
                      value: this.options.getFn(h, p),
                      record: h,
                      index: l
                    }, {
                      resultMap: n,
                      results: s,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }
                }

                return {
                  weights: a,
                  results: s
                };
              }
            }, {
              key: "_analyze",
              value: function value(e, t) {
                var i = e.key,
                    n = e.arrayIndex,
                    s = void 0 === n ? -1 : n,
                    r = e.value,
                    o = e.record,
                    l = e.index,
                    c = t.tokenSearchers,
                    h = void 0 === c ? [] : c,
                    u = t.fullSearcher,
                    d = void 0 === u ? [] : u,
                    p = t.resultMap,
                    f = void 0 === p ? {} : p,
                    m = t.results,
                    v = void 0 === m ? [] : m;

                if (null != r) {
                  var g = !1,
                      _ = -1,
                      b = 0;

                  if ("string" == typeof r) {
                    this._log("\nKey: ".concat("" === i ? "-" : i));

                    var y = d.search(r);

                    if (this._log('Full text: "'.concat(r, '", score: ').concat(y.score)), this.options.tokenize) {
                      for (var E = r.split(this.options.tokenSeparator), S = [], I = 0; I < h.length; I += 1) {
                        var w = h[I];

                        this._log('\nPattern: "'.concat(w.pattern, '"'));

                        for (var C = !1, O = 0; O < E.length; O += 1) {
                          var A = E[O],
                              x = w.search(A),
                              T = {};
                          x.isMatch ? (T[A] = x.score, g = !0, C = !0, S.push(x.score)) : (T[A] = 1, this.options.matchAllTokens || S.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(T[A]));
                        }

                        C && (b += 1);
                      }

                      _ = S[0];

                      for (var L = S.length, k = 1; k < L; k += 1) {
                        _ += S[k];
                      }

                      _ /= L, this._log("Token score average:", _);
                    }

                    var D = y.score;
                    _ > -1 && (D = (D + _) / 2), this._log("Score average:", D);
                    var P = !this.options.tokenize || !this.options.matchAllTokens || b >= h.length;

                    if (this._log("\nCheck Matches: ".concat(P)), (g || y.isMatch) && P) {
                      var F = f[l];
                      F ? F.output.push({
                        key: i,
                        arrayIndex: s,
                        value: r,
                        score: D,
                        matchedIndices: y.matchedIndices
                      }) : (f[l] = {
                        item: o,
                        output: [{
                          key: i,
                          arrayIndex: s,
                          value: r,
                          score: D,
                          matchedIndices: y.matchedIndices
                        }]
                      }, v.push(f[l]));
                    }
                  } else if (a(r)) for (var j = 0, M = r.length; j < M; j += 1) {
                    this._analyze({
                      key: i,
                      arrayIndex: j,
                      value: r[j],
                      record: o,
                      index: l
                    }, {
                      resultMap: f,
                      results: v,
                      tokenSearchers: h,
                      fullSearcher: d
                    });
                  }
                }
              }
            }, {
              key: "_computeScore",
              value: function value(e, t) {
                this._log("\n\nComputing score:\n");

                for (var i = 0, n = t.length; i < n; i += 1) {
                  for (var s = t[i].output, r = s.length, o = 1, a = 1, l = 0; l < r; l += 1) {
                    var c = e ? e[s[l].key].weight : 1,
                        h = (1 === c ? s[l].score : s[l].score || .001) * c;
                    1 !== c ? a = Math.min(a, h) : (s[l].nScore = h, o *= h);
                  }

                  t[i].score = 1 === a ? o : a, this._log(t[i]);
                }
              }
            }, {
              key: "_sort",
              value: function value(e) {
                this._log("\n\nSorting...."), e.sort(this.options.sortFn);
              }
            }, {
              key: "_format",
              value: function value(e) {
                var t = [];

                if (this.options.verbose) {
                  var i = [];
                  this._log("\n\nOutput:\n\n", JSON.stringify(e, function (e, t) {
                    if ("object" === n(t) && null !== t) {
                      if (-1 !== i.indexOf(t)) return;
                      i.push(t);
                    }

                    return t;
                  })), i = null;
                }

                var s = [];
                this.options.includeMatches && s.push(function (e, t) {
                  var i = e.output;
                  t.matches = [];

                  for (var n = 0, s = i.length; n < s; n += 1) {
                    var r = i[n];

                    if (0 !== r.matchedIndices.length) {
                      var o = {
                        indices: r.matchedIndices,
                        value: r.value
                      };
                      r.key && (o.key = r.key), r.hasOwnProperty("arrayIndex") && r.arrayIndex > -1 && (o.arrayIndex = r.arrayIndex), t.matches.push(o);
                    }
                  }
                }), this.options.includeScore && s.push(function (e, t) {
                  t.score = e.score;
                });

                for (var r = 0, o = e.length; r < o; r += 1) {
                  var a = e[r];

                  if (this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), s.length) {
                    for (var l = {
                      item: a.item
                    }, c = 0, h = s.length; c < h; c += 1) {
                      s[c](a, l);
                    }

                    t.push(l);
                  } else t.push(a.item);
                }

                return t;
              }
            }, {
              key: "_log",
              value: function value() {
                var e;
                this.options.verbose && (e = console).log.apply(e, arguments);
              }
            }]) && s(t.prototype, i), l && s(t, l), e;
          }();

          e.exports = l;
        }
      });
    }, e.exports = n();
  }, function (e, t, i) {
    "use strict";

    function n(e) {
      var t,
          i = e.Symbol;
      return "function" == typeof i ? i.observable ? t = i.observable : (t = i("observable"), i.observable = t) : t = "@@observable", t;
    }

    i.d(t, "a", function () {
      return n;
    });
  }, function (e, t, i) {
    e.exports = i(9);
  }, function (e, t) {
    window.delegateEvent = function () {
      var e, t;

      function i(t) {
        var i = e.get(t.type);
        i && i.forEach(function (e) {
          return e(t);
        });
      }

      return void 0 === e && (e = new Map()), void 0 === t && (t = []), {
        add: function add(n, s) {
          e.has(n) ? e.get(n).push(s) : e.set(n, [s]), -1 === t.indexOf(n) && (document.documentElement.addEventListener(n, i, !0), t.push(n));
        },
        remove: function remove(i, n) {
          e.get(i) && (e.set(i, e.get(i).filter(function (e) {
            return e !== n;
          })), e.get(i).length || t.splice(t.indexOf(i), 1));
        }
      };
    }();
  }, function (e, t) {
    var i;

    i = function () {
      return this;
    }();

    try {
      i = i || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
    }

    e.exports = i;
  }, function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []), Object.defineProperty(t, "loaded", {
          enumerable: !0,
          get: function get() {
            return t.l;
          }
        }), Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function get() {
            return t.i;
          }
        }), Object.defineProperty(t, "exports", {
          enumerable: !0
        }), t.webpackPolyfill = 1;
      }

      return t;
    };
  }, function (e, t, i) {
    "use strict";

    i.r(t);

    var n = i(3),
        s = i.n(n),
        r = i(1),
        o = i.n(r),
        a = (i(6), i(2)),
        l = function l() {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
        c = {
      INIT: "@@redux/INIT" + l(),
      REPLACE: "@@redux/REPLACE" + l(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + l();
      }
    };

    function h(e) {
      if ("object" != _typeof(e) || null === e) return !1;

      for (var t = e; null !== Object.getPrototypeOf(t);) {
        t = Object.getPrototypeOf(t);
      }

      return Object.getPrototypeOf(e) === t;
    }

    function u(e, t, i) {
      var n;
      if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");

      if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
        if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
        return i(u)(e, t);
      }

      if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
      var s = e,
          r = t,
          o = [],
          l = o,
          d = !1;

      function p() {
        l === o && (l = o.slice());
      }

      function f() {
        if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return r;
      }

      function m(e) {
        if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
        if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
        var t = !0;
        return p(), l.push(e), function () {
          if (t) {
            if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            t = !1, p();
            var i = l.indexOf(e);
            l.splice(i, 1);
          }
        };
      }

      function v(e) {
        if (!h(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (d) throw new Error("Reducers may not dispatch actions.");

        try {
          d = !0, r = s(r, e);
        } finally {
          d = !1;
        }

        for (var t = o = l, i = 0; i < t.length; i++) {
          (0, t[i])();
        }

        return e;
      }

      return v({
        type: c.INIT
      }), (n = {
        dispatch: v,
        subscribe: m,
        getState: f,
        replaceReducer: function replaceReducer(e) {
          if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
          s = e, v({
            type: c.REPLACE
          });
        }
      })[a.a] = function () {
        var e,
            t = m;
        return (e = {
          subscribe: function subscribe(e) {
            if ("object" != _typeof(e) || null === e) throw new TypeError("Expected the observer to be an object.");

            function i() {
              e.next && e.next(f());
            }

            return i(), {
              unsubscribe: t(i)
            };
          }
        })[a.a] = function () {
          return this;
        }, e;
      }, n;
    }

    function d(e, t) {
      var i = t && t.type;
      return "Given " + (i && 'action "' + String(i) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }

    var p = [];
    var f = [];
    var m = [];

    var v,
        g = {
      loading: !1
    },
        _ = function _(e, t) {
      switch (void 0 === e && (e = g), t.type) {
        case "SET_IS_LOADING":
          return {
            loading: t.isLoading
          };

        default:
          return e;
      }
    },
        b = function b(e) {
      for (var t, i, n = "", s = 0; s < e; s++) {
        n += (t = 0, i = 36, Math.floor(Math.random() * (i - t) + t)).toString(36);
      }

      return n;
    },
        y = function y(e, t) {
      var i = e.id || e.name && e.name + "-" + b(2) || b(4);
      return i = t + "-" + (i = i.replace(/(:|\.|\[|\]|,)/g, ""));
    },
        E = function E(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    },
        S = function S(e, t) {
      return null != t && E(t) === e;
    },
        I = function I(e) {
      return e instanceof Element;
    },
        w = function w(e, t) {
      for (var i = e; i;) {
        if (i.hasAttribute(t)) return i;
        i = i.parentElement;
      }

      return null;
    },
        C = function C(e) {
      return S("String", e) ? e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : e;
    },
        O = (v = document.createElement("div"), function (e) {
      var t = e.trim();
      v.innerHTML = t;

      for (var i = v.children[0]; v.firstChild;) {
        v.removeChild(v.firstChild);
      }

      return i;
    }),
        A = function A(e, t) {
      return e.score - t.score;
    },
        x = function e(t, i) {
      var n = i.indexOf(".");
      return n > -1 ? e(t[i.substring(0, n)], i.substr(n + 1)) : t[i];
    },
        T = function T(e) {
      return JSON.parse(JSON.stringify(e));
    },
        L = function L(e, t) {
      var i = Object.keys(e).sort(),
          n = Object.keys(t).sort();
      return i.filter(function (e) {
        return n.indexOf(e) < 0;
      });
    },
        k = function (e) {
      for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
        var s = t[n];
        0, "function" == typeof e[s] && (i[s] = e[s]);
      }

      var r,
          o = Object.keys(i);

      try {
        !function (e) {
          Object.keys(e).forEach(function (t) {
            var i = e[t];
            if (void 0 === i(void 0, {
              type: c.INIT
            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === i(void 0, {
              type: c.PROBE_UNKNOWN_ACTION()
            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + c.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
          });
        }(i);
      } catch (e) {
        r = e;
      }

      return function (e, t) {
        if (void 0 === e && (e = {}), r) throw r;

        for (var n = !1, s = {}, a = 0; a < o.length; a++) {
          var l = o[a],
              c = i[l],
              h = e[l],
              u = c(h, t);

          if (void 0 === u) {
            var p = d(l, t);
            throw new Error(p);
          }

          s[l] = u, n = n || u !== h;
        }

        return n ? s : e;
      };
    }({
      items: function items(e, t) {
        switch (void 0 === e && (e = p), t.type) {
          case "ADD_ITEM":
            return [].concat(e, [{
              id: t.id,
              choiceId: t.choiceId,
              groupId: t.groupId,
              value: t.value,
              label: t.label,
              active: !0,
              highlighted: !1,
              customProperties: t.customProperties,
              placeholder: t.placeholder || !1,
              keyCode: null
            }]).map(function (e) {
              var t = e;
              return t.highlighted = !1, t;
            });

          case "REMOVE_ITEM":
            return e.map(function (e) {
              var i = e;
              return i.id === t.id && (i.active = !1), i;
            });

          case "HIGHLIGHT_ITEM":
            return e.map(function (e) {
              var i = e;
              return i.id === t.id && (i.highlighted = t.highlighted), i;
            });

          default:
            return e;
        }
      },
      groups: function groups(e, t) {
        switch (void 0 === e && (e = f), t.type) {
          case "ADD_GROUP":
            return [].concat(e, [{
              id: t.id,
              value: t.value,
              active: t.active,
              disabled: t.disabled
            }]);

          case "CLEAR_CHOICES":
            return [];

          default:
            return e;
        }
      },
      choices: function choices(e, t) {
        switch (void 0 === e && (e = m), t.type) {
          case "ADD_CHOICE":
            return [].concat(e, [{
              id: t.id,
              elementId: t.elementId,
              groupId: t.groupId,
              value: t.value,
              label: t.label || t.value,
              disabled: t.disabled || !1,
              selected: !1,
              active: !0,
              score: 9999,
              customProperties: t.customProperties,
              placeholder: t.placeholder || !1,
              keyCode: null
            }]);

          case "ADD_ITEM":
            return t.activateOptions ? e.map(function (e) {
              var i = e;
              return i.active = t.active, i;
            }) : t.choiceId > -1 ? e.map(function (e) {
              var i = e;
              return i.id === parseInt(t.choiceId, 10) && (i.selected = !0), i;
            }) : e;

          case "REMOVE_ITEM":
            return t.choiceId > -1 ? e.map(function (e) {
              var i = e;
              return i.id === parseInt(t.choiceId, 10) && (i.selected = !1), i;
            }) : e;

          case "FILTER_CHOICES":
            return e.map(function (e) {
              var i = e;
              return i.active = t.results.some(function (e) {
                var t = e.item,
                    n = e.score;
                return t.id === i.id && (i.score = n, !0);
              }), i;
            });

          case "ACTIVATE_CHOICES":
            return e.map(function (e) {
              var i = e;
              return i.active = t.active, i;
            });

          case "CLEAR_CHOICES":
            return m;

          default:
            return e;
        }
      },
      general: _
    }),
        D = function D(e, t) {
      var i = e;
      if ("CLEAR_ALL" === t.type) i = void 0;else if ("RESET_TO" === t.type) return T(t.state);
      return k(i, t);
    };

    function P(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var F = function () {
      function e() {
        this._store = u(D, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      }

      var t,
          i,
          n,
          s = e.prototype;
      return s.subscribe = function (e) {
        this._store.subscribe(e);
      }, s.dispatch = function (e) {
        this._store.dispatch(e);
      }, s.isLoading = function () {
        return this.state.general.loading;
      }, s.getChoiceById = function (e) {
        return !!e && this.activeChoices.find(function (t) {
          return t.id === parseInt(e, 10);
        });
      }, s.getGroupById = function (e) {
        return this.groups.find(function (t) {
          return t.id === parseInt(e, 10);
        });
      }, t = e, (i = [{
        key: "state",
        get: function get() {
          return this._store.getState();
        }
      }, {
        key: "items",
        get: function get() {
          return this.state.items;
        }
      }, {
        key: "activeItems",
        get: function get() {
          return this.items.filter(function (e) {
            return !0 === e.active;
          });
        }
      }, {
        key: "highlightedActiveItems",
        get: function get() {
          return this.items.filter(function (e) {
            return e.active && e.highlighted;
          });
        }
      }, {
        key: "choices",
        get: function get() {
          return this.state.choices;
        }
      }, {
        key: "activeChoices",
        get: function get() {
          return this.choices.filter(function (e) {
            return !0 === e.active;
          });
        }
      }, {
        key: "selectableChoices",
        get: function get() {
          return this.choices.filter(function (e) {
            return !0 !== e.disabled;
          });
        }
      }, {
        key: "searchableChoices",
        get: function get() {
          return this.selectableChoices.filter(function (e) {
            return !0 !== e.placeholder;
          });
        }
      }, {
        key: "placeholderChoice",
        get: function get() {
          return [].concat(this.choices).reverse().find(function (e) {
            return !0 === e.placeholder;
          });
        }
      }, {
        key: "groups",
        get: function get() {
          return this.state.groups;
        }
      }, {
        key: "activeGroups",
        get: function get() {
          var e = this.groups,
              t = this.choices;
          return e.filter(function (e) {
            var i = !0 === e.active && !1 === e.disabled,
                n = t.some(function (e) {
              return !0 === e.active && !1 === e.disabled;
            });
            return i && n;
          }, []);
        }
      }]) && P(t.prototype, i), n && P(t, n), e;
    }(),
        j = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames;
        Object.assign(this, {
          element: t,
          type: i,
          classNames: n
        }), this.isActive = !1;
      }

      var t = e.prototype;
      return t.distanceFromTopWindow = function () {
        return this.dimensions = this.element.getBoundingClientRect(), this.position = Math.ceil(this.dimensions.top + window.pageYOffset + this.element.offsetHeight), this.position;
      }, t.getChild = function (e) {
        return this.element.querySelector(e);
      }, t.show = function () {
        return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
      }, t.hide = function () {
        return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
      }, e;
    }(),
        M = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.position;
        Object.assign(this, {
          element: t,
          classNames: n,
          type: i,
          position: s
        }), this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }

      var t = e.prototype;
      return t.addEventListeners = function () {
        this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
      }, t.removeEventListeners = function () {
        this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
      }, t.shouldFlip = function (e, t) {
        var i, n;
        if (void 0 === t && (i = document.body, n = document.documentElement, t = Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)), void 0 === e) return !1;
        var s = !1;
        return "auto" === this.position ? s = e >= t : "top" === this.position && (s = !0), s;
      }, t.setActiveDescendant = function (e) {
        this.element.setAttribute("aria-activedescendant", e);
      }, t.removeActiveDescendant = function () {
        this.element.removeAttribute("aria-activedescendant");
      }, t.open = function (e) {
        this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
      }, t.close = function () {
        this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
      }, t.focus = function () {
        this.isFocussed || this.element.focus();
      }, t.addFocusState = function () {
        this.element.classList.add(this.classNames.focusState);
      }, t.removeFocusState = function () {
        this.element.classList.remove(this.classNames.focusState);
      }, t.enable = function () {
        this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), "select-one" === this.type && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
      }, t.disable = function () {
        this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), "select-one" === this.type && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
      }, t.wrap = function (e) {
        !function (e, t) {
          void 0 === t && (t = document.createElement("div")), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e);
        }(e, this.element);
      }, t.unwrap = function (e) {
        this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element);
      }, t.addLoadingState = function () {
        this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
      }, t.removeLoadingState = function () {
        this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
      }, t._onFocus = function () {
        this.isFocussed = !0;
      }, t._onBlur = function () {
        this.isFocussed = !1;
      }, e;
    }();

    function N(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var K = function () {
      function e(e) {
        var t = e.element,
            i = e.type,
            n = e.classNames,
            s = e.placeholderValue;
        Object.assign(this, {
          element: t,
          type: i,
          classNames: n,
          placeholderValue: s
        }), this.element = t, this.classNames = n, this.isFocussed = this.element === document.activeElement, this.isDisabled = !1, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }

      var t,
          i,
          n,
          s = e.prototype;
      return s.addEventListeners = function () {
        this.element.addEventListener("input", this._onInput), this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur), this.element.form && this.element.form.addEventListener("reset", this._onFormReset);
      }, s.removeEventListeners = function () {
        this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur), this.element.form && this.element.form.removeEventListener("reset", this._onFormReset);
      }, s.enable = function () {
        this.element.removeAttribute("disabled"), this.isDisabled = !1;
      }, s.disable = function () {
        this.element.setAttribute("disabled", ""), this.isDisabled = !0;
      }, s.focus = function () {
        this.isFocussed || this.element.focus();
      }, s.blur = function () {
        this.isFocussed && this.element.blur();
      }, s.clear = function (e) {
        return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
      }, s.setWidth = function (e) {
        var t = this,
            i = function i(e) {
          t.element.style.width = e;
        };

        if (this._placeholderValue) {
          var n = this.element.value.length >= this._placeholderValue.length / 1.25;
          (this.element.value && n || e) && this.calcWidth(i);
        } else this.calcWidth(i);
      }, s.calcWidth = function (e) {
        return function (e, t) {
          var i = e.value || e.placeholder,
              n = e.offsetWidth;

          if (i) {
            var s = O("<span>" + C(i) + "</span>");

            if (s.style.position = "absolute", s.style.padding = "0", s.style.top = "-9999px", s.style.left = "-9999px", s.style.width = "auto", s.style.whiteSpace = "pre", document.body.contains(e) && window.getComputedStyle) {
              var r = window.getComputedStyle(e);
              r && (s.style.fontSize = r.fontSize, s.style.fontFamily = r.fontFamily, s.style.fontWeight = r.fontWeight, s.style.fontStyle = r.fontStyle, s.style.letterSpacing = r.letterSpacing, s.style.textTransform = r.textTransform, s.style.paddingLeft = r.paddingLeft, s.style.paddingRight = r.paddingRight);
            }

            document.body.appendChild(s), requestAnimationFrame(function () {
              i && s.offsetWidth !== e.offsetWidth && (n = s.offsetWidth + 4), document.body.removeChild(s), t.call(void 0, n + "px");
            });
          } else t.call(void 0, n + "px");
        }(this.element, e);
      }, s.setActiveDescendant = function (e) {
        this.element.setAttribute("aria-activedescendant", e);
      }, s.removeActiveDescendant = function () {
        this.element.removeAttribute("aria-activedescendant");
      }, s._onInput = function () {
        "select-one" !== this.type && this.setWidth();
      }, s._onPaste = function (e) {
        e.target === this.element && this.preventPaste && e.preventDefault();
      }, s._onFocus = function () {
        this.isFocussed = !0;
      }, s._onBlur = function () {
        this.isFocussed = !1;
      }, t = e, (i = [{
        key: "placeholder",
        set: function set(e) {
          this.element.placeholder = e;
        }
      }, {
        key: "value",
        set: function set(e) {
          this.element.value = e;
        },
        get: function get() {
          return C(this.element.value);
        }
      }]) && N(t.prototype, i), n && N(t, n), e;
    }(),
        R = {
      items: [],
      choices: [],
      silent: !1,
      renderChoiceLimit: -1,
      maxItemCount: -1,
      addItems: !0,
      addItemFilterFn: null,
      removeItems: !0,
      removeItemButton: !1,
      editItems: !1,
      duplicateItemsAllowed: !0,
      delimiter: ",",
      paste: !0,
      searchEnabled: !0,
      searchChoices: !0,
      searchFloor: 1,
      searchResultLimit: 4,
      searchFields: ["label", "value"],
      position: "auto",
      resetScrollPosition: !0,
      shouldSort: !0,
      shouldSortItems: !1,
      sortFn: function sortFn(e, t) {
        var i = ("" + (e.label || e.value)).toLowerCase(),
            n = ("" + (t.label || t.value)).toLowerCase();
        return i < n ? -1 : i > n ? 1 : 0;
      },
      placeholder: !0,
      placeholderValue: null,
      searchPlaceholderValue: null,
      prependValue: null,
      appendValue: null,
      renderSelectedChoices: "auto",
      loadingText: "Loading...",
      noResultsText: "No results found",
      noChoicesText: "No choices to choose from",
      itemSelectText: "Press to select",
      uniqueItemText: "Only unique values can be added",
      customAddItemText: "Only values matching specific conditions can be added",
      addItemText: function addItemText(e) {
        return 'Press Enter to add <b>"' + C(e) + '"</b>';
      },
      maxItemText: function maxItemText(e) {
        return "Only " + e + " values can be added";
      },
      itemComparer: function itemComparer(e, t) {
        return e === t;
      },
      fuseOptions: {
        includeScore: !0
      },
      callbackOnInit: null,
      callbackOnCreateTemplates: null,
      classNames: {
        containerOuter: "choices",
        containerInner: "choices__inner",
        input: "choices__input",
        inputCloned: "choices__input--cloned",
        list: "choices__list",
        listItems: "choices__list--multiple",
        listSingle: "choices__list--single",
        listDropdown: "choices__list--dropdown",
        item: "choices__item",
        itemSelectable: "choices__item--selectable",
        itemDisabled: "choices__item--disabled",
        itemChoice: "choices__item--choice",
        placeholder: "choices__placeholder",
        group: "choices__group",
        groupHeading: "choices__heading",
        button: "choices__button",
        activeState: "is-active",
        focusState: "is-focused",
        openState: "is-open",
        disabledState: "is-disabled",
        highlightedState: "is-highlighted",
        hiddenState: "is-hidden",
        flippedState: "is-flipped",
        loadingState: "is-loading",
        noResults: "has-no-results",
        noChoices: "has-no-choices"
      }
    },
        B = "showDropdown",
        V = "hideDropdown",
        H = "change",
        G = "choice",
        q = "search",
        W = "addItem",
        U = "removeItem",
        z = "highlightItem",
        X = "highlightChoice",
        Y = "ADD_CHOICE",
        $ = "FILTER_CHOICES",
        J = "ACTIVATE_CHOICES",
        Z = "CLEAR_CHOICES",
        Q = "ADD_GROUP",
        ee = "ADD_ITEM",
        te = "REMOVE_ITEM",
        ie = "HIGHLIGHT_ITEM",
        ne = 46,
        se = 8,
        re = 13,
        oe = 65,
        ae = 27,
        le = 38,
        ce = 40,
        he = 33,
        ue = 34,
        de = function () {
      function e(e) {
        var t = e.element;
        Object.assign(this, {
          element: t
        }), this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight, this.hasChildren = !!this.element.children;
      }

      var t = e.prototype;
      return t.clear = function () {
        this.element.innerHTML = "";
      }, t.append = function (e) {
        this.element.appendChild(e);
      }, t.getChild = function (e) {
        return this.element.querySelector(e);
      }, t.scrollToTop = function () {
        this.element.scrollTop = 0;
      }, t.scrollToChoice = function (e, t) {
        var i = this;

        if (e) {
          var n = this.element.offsetHeight,
              s = e.offsetHeight,
              r = e.offsetTop + s,
              o = this.element.scrollTop + n,
              a = t > 0 ? this.element.scrollTop + r - o : e.offsetTop;
          requestAnimationFrame(function (e) {
            i._animateScroll(e, a, t);
          });
        }
      }, t._scrollDown = function (e, t, i) {
        var n = (i - e) / t,
            s = n > 1 ? n : 1;
        this.element.scrollTop = e + s;
      }, t._scrollUp = function (e, t, i) {
        var n = (e - i) / t,
            s = n > 1 ? n : 1;
        this.element.scrollTop = e - s;
      }, t._animateScroll = function (e, t, i) {
        var n = this,
            s = this.element.scrollTop,
            r = !1;
        i > 0 ? (this._scrollDown(s, 4, t), s < t && (r = !0)) : (this._scrollUp(s, 4, t), s > t && (r = !0)), r && requestAnimationFrame(function () {
          n._animateScroll(e, t, i);
        });
      }, e;
    }();

    function pe(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var fe = function () {
      function e(e) {
        var t = e.element,
            i = e.classNames;
        if (Object.assign(this, {
          element: t,
          classNames: i
        }), !I(t)) throw new TypeError("Invalid element passed");
        this.isDisabled = !1;
      }

      var t,
          i,
          n,
          s = e.prototype;
      return s.conceal = function () {
        this.element.classList.add(this.classNames.input), this.element.classList.add(this.classNames.hiddenState), this.element.tabIndex = "-1";
        var e = this.element.getAttribute("style");
        e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("aria-hidden", "true"), this.element.setAttribute("data-choice", "active");
      }, s.reveal = function () {
        this.element.classList.remove(this.classNames.input), this.element.classList.remove(this.classNames.hiddenState), this.element.removeAttribute("tabindex");
        var e = this.element.getAttribute("data-choice-orig-style");
        e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("aria-hidden"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
      }, s.enable = function () {
        this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
      }, s.disable = function () {
        this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
      }, s.triggerEvent = function (e, t) {
        !function (e, t, i) {
          void 0 === i && (i = null);
          var n = new CustomEvent(t, {
            detail: i,
            bubbles: !0,
            cancelable: !0
          });
          e.dispatchEvent(n);
        }(this.element, e, t);
      }, t = e, (i = [{
        key: "value",
        get: function get() {
          return this.element.value;
        },
        set: function set(e) {
          this.element.value = e;
        }
      }]) && pe(t.prototype, i), n && pe(t, n), e;
    }();

    function me(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var ve = function (e) {
      var t, i, n, s, r;

      function o(t) {
        var i,
            n = t.element,
            s = t.classNames,
            r = t.delimiter;
        return (i = e.call(this, {
          element: n,
          classNames: s
        }) || this).delimiter = r, i;
      }

      return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, n = o, (s = [{
        key: "value",
        set: function set(e) {
          var t = e.map(function (e) {
            return e.value;
          }).join(this.delimiter);
          this.element.setAttribute("value", t), this.element.value = t;
        },
        get: function get() {
          return this.element.value;
        }
      }]) && me(n.prototype, s), r && me(n, r), o;
    }(fe);

    function ge(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var _e = function (e) {
      var t, i, n, s, r;

      function o(t) {
        var i,
            n = t.element,
            s = t.classNames,
            r = t.template;
        return (i = e.call(this, {
          element: n,
          classNames: s
        }) || this).template = r, i;
      }

      return i = e, (t = o).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, o.prototype.appendDocFragment = function (e) {
        this.element.innerHTML = "", this.element.appendChild(e);
      }, n = o, (s = [{
        key: "placeholderOption",
        get: function get() {
          return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
        }
      }, {
        key: "optionGroups",
        get: function get() {
          return Array.from(this.element.getElementsByTagName("OPTGROUP"));
        }
      }, {
        key: "options",
        get: function get() {
          return Array.from(this.element.options);
        },
        set: function set(e) {
          var t = this,
              i = document.createDocumentFragment();
          e.forEach(function (e) {
            return n = e, s = t.template(n), void i.appendChild(s);
            var n, s;
          }), this.appendDocFragment(i);
        }
      }]) && ge(n.prototype, s), r && ge(n, r), o;
    }(fe),
        be = i(0),
        ye = i.n(be),
        Ee = {
      containerOuter: function containerOuter(e, t, i, n, s, r) {
        var o = n ? 'tabindex="0"' : "",
            a = i ? 'role="listbox"' : "",
            l = "";
        return i && s && (a = 'role="combobox"', l = 'aria-autocomplete="list"'), O('\n      <div\n        class="' + e.containerOuter + '"\n        data-type="' + r + '"\n        ' + a + "\n        " + o + "\n        " + l + '\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="' + t + '"\n        >\n      </div>\n    ');
      },
      containerInner: function containerInner(e) {
        return O('\n      <div class="' + e.containerInner + '"></div>\n    ');
      },
      itemList: function itemList(e, t) {
        var i,
            n = ye()(e.list, ((i = {})[e.listSingle] = t, i[e.listItems] = !t, i));
        return O('\n      <div class="' + n + '"></div>\n    ');
      },
      placeholder: function placeholder(e, t) {
        return O('\n      <div class="' + e.placeholder + '">\n        ' + t + "\n      </div>\n    ");
      },
      item: function item(e, t, i) {
        var n,
            s,
            r = t.active ? 'aria-selected="true"' : "",
            o = t.disabled ? 'aria-disabled="true"' : "",
            a = ye()(e.item, ((n = {})[e.highlightedState] = t.highlighted, n[e.itemSelectable] = !t.highlighted, n[e.placeholder] = t.placeholder, n));
        return i ? (a = ye()(e.item, ((s = {})[e.highlightedState] = t.highlighted, s[e.itemSelectable] = !t.disabled, s[e.placeholder] = t.placeholder, s)), O('\n        <div\n          class="' + a + '"\n          data-item\n          data-id="' + t.id + '"\n          data-value="' + t.value + "\"\n          data-custom-properties='" + t.customProperties + "'\n          data-deletable\n          " + r + "\n          " + o + "\n          >\n          " + t.label + '\x3c!--\n       --\x3e<button\n            type="button"\n            class="' + e.button + '"\n            data-button\n            aria-label="Remove item: \'' + t.value + "'\"\n            >\n            Remove item\n          </button>\n        </div>\n      ")) : O('\n      <div\n        class="' + a + '"\n        data-item\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        ' + r + "\n        " + o + "\n        >\n        " + t.label + "\n      </div>\n    ");
      },
      choiceList: function choiceList(e, t) {
        var i = t ? "" : 'aria-multiselectable="true"';
        return O('\n      <div\n        class="' + e.list + '"\n        dir="ltr"\n        role="listbox"\n        ' + i + "\n        >\n      </div>\n    ");
      },
      choiceGroup: function choiceGroup(e, t) {
        var i,
            n = t.disabled ? 'aria-disabled="true"' : "",
            s = ye()(e.group, ((i = {})[e.itemDisabled] = t.disabled, i));
        return O('\n      <div\n        class="' + s + '"\n        data-group\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        role="group"\n        ' + n + '\n        >\n        <div class="' + e.groupHeading + '">' + t.value + "</div>\n      </div>\n    ");
      },
      choice: function choice(e, t, i) {
        var n,
            s = t.groupId > 0 ? 'role="treeitem"' : 'role="option"',
            r = ye()(e.item, e.itemChoice, ((n = {})[e.itemDisabled] = t.disabled, n[e.itemSelectable] = !t.disabled, n[e.placeholder] = t.placeholder, n));
        return O('\n      <div\n        class="' + r + '"\n        data-select-text="' + i + '"\n        data-choice\n        data-id="' + t.id + '"\n        data-value="' + t.value + '"\n        ' + (t.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable") + '\n        id="' + t.elementId + '"\n        ' + s + "\n        >\n        " + t.label + "\n      </div>\n    ");
      },
      input: function input(e, t) {
        var i = ye()(e.input, e.inputCloned);
        return O('\n      <input\n        type="text"\n        class="' + i + '"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        aria-label="' + t + '"\n        >\n    ');
      },
      dropdown: function dropdown(e) {
        var t = ye()(e.list, e.listDropdown);
        return O('\n      <div\n        class="' + t + '"\n        aria-expanded="false"\n        >\n      </div>\n    ');
      },
      notice: function notice(e, t, i) {
        var n;
        void 0 === i && (i = "");
        var s = ye()(e.item, e.itemChoice, ((n = {})[e.noResults] = "no-results" === i, n[e.noChoices] = "no-choices" === i, n));
        return O('\n      <div class="' + s + '">\n        ' + t + "\n      </div>\n    ");
      },
      option: function option(e) {
        return O('\n      <option value="' + e.value + '" ' + (e.active ? "selected" : "") + " " + (e.disabled ? "disabled" : "") + " " + (e.customProperties ? "data-custom-properties=" + e.customProperties : "") + ">" + e.label + "</option>\n    ");
      }
    },
        Se = function Se(e) {
      return void 0 === e && (e = !0), {
        type: J,
        active: e
      };
    },
        Ie = function Ie(e, t) {
      return {
        type: ie,
        id: e,
        highlighted: t
      };
    },
        we = function we(e, t, i, n) {
      return {
        type: Q,
        value: e,
        id: t,
        active: i,
        disabled: n
      };
    },
        Ce = function () {
      function e(t, i) {
        var n = this;

        if (void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {}), S("String", t)) {
          var s = Array.from(document.querySelectorAll(t));
          if (s.length > 1) return this._generateInstances(s, i);
        }

        this.config = o.a.all([R, e.userDefaults, i], {
          arrayMerge: function arrayMerge(e, t) {
            return [].concat(t);
          }
        });
        var r = L(this.config, R);
        r.length && console.warn("Unknown config option(s) passed", r.join(", ")), ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto");
        var a = S("String", t) ? document.querySelector(t) : t;

        if (a) {
          if (this._isTextElement = "text" === a.type, this._isSelectOneElement = "select-one" === a.type, this._isSelectMultipleElement = "select-multiple" === a.type, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this._isTextElement ? this.passedElement = new ve({
            element: a,
            classNames: this.config.classNames,
            delimiter: this.config.delimiter
          }) : this._isSelectElement && (this.passedElement = new _e({
            element: a,
            classNames: this.config.classNames,
            template: function template(e) {
              return n.config.templates.option(e);
            }
          })), !this.passedElement) return console.error("Passed element was of an invalid type");
          this.initialised = !1, this._store = new F(this.render), this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = y(this.passedElement.element, "choices-"), this._direction = this.passedElement.element.getAttribute("dir") || "ltr", this._idNames = {
            itemChoice: "item-choice"
          }, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.config.silent || (!0 === this.config.shouldSortItems && this._isSelectOneElement && console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false."), "active" === this.passedElement.element.getAttribute("data-choice") && console.warn("Trying to initialise Choices on element already initialised")), this.init();
        } else this.config.silent || console.error("Could not find passed element or passed element was of an invalid type");
      }

      var t = e.prototype;
      return t.init = function () {
        if (!this.initialised) {
          this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = T(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
          var e = this.config.callbackOnInit;
          e && S("Function", e) && e.call(this);
        }
      }, t.destroy = function () {
        this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this._isSelectElement && (this.passedElement.options = this._presetChoices), this.clearStore(), this.config.templates = null, this.initialised = !1);
      }, t.enable = function () {
        return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
      }, t.disable = function () {
        return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
      }, t.highlightItem = function (e, t) {
        if (void 0 === t && (t = !0), !e) return this;
        var i = e.id,
            n = e.groupId,
            s = void 0 === n ? -1 : n,
            r = e.value,
            o = void 0 === r ? "" : r,
            a = e.label,
            l = void 0 === a ? "" : a,
            c = s >= 0 ? this._store.getGroupById(s) : null;
        return this._store.dispatch(Ie(i, !0)), t && this.passedElement.triggerEvent(z, {
          id: i,
          value: o,
          label: l,
          groupValue: c && c.value ? c.value : null
        }), this;
      }, t.unhighlightItem = function (e) {
        if (!e) return this;
        var t = e.id,
            i = e.groupId,
            n = void 0 === i ? -1 : i,
            s = e.value,
            r = void 0 === s ? "" : s,
            o = e.label,
            a = void 0 === o ? "" : o,
            l = n >= 0 ? this._store.getGroupById(n) : null;
        return this._store.dispatch(Ie(t, !1)), this.passedElement.triggerEvent(z, {
          id: t,
          value: r,
          label: a,
          groupValue: l && l.value ? l.value : null
        }), this;
      }, t.highlightAll = function () {
        var e = this;
        return this._store.items.forEach(function (t) {
          return e.highlightItem(t);
        }), this;
      }, t.unhighlightAll = function () {
        var e = this;
        return this._store.items.forEach(function (t) {
          return e.unhighlightItem(t);
        }), this;
      }, t.removeActiveItemsByValue = function (e) {
        var t = this;
        return this._store.activeItems.filter(function (t) {
          return t.value === e;
        }).forEach(function (e) {
          return t._removeItem(e);
        }), this;
      }, t.removeActiveItems = function (e) {
        var t = this;
        return this._store.activeItems.filter(function (t) {
          return t.id !== e;
        }).forEach(function (e) {
          return t._removeItem(e);
        }), this;
      }, t.removeHighlightedItems = function (e) {
        var t = this;
        return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
          t._removeItem(i), e && t._triggerChange(i.value);
        }), this;
      }, t.showDropdown = function (e) {
        var t = this;
        return this.dropdown.isActive ? this : (requestAnimationFrame(function () {
          t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow()), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(B, {});
        }), this);
      }, t.hideDropdown = function (e) {
        var t = this;
        return this.dropdown.isActive ? (requestAnimationFrame(function () {
          t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(V, {});
        }), this) : this;
      }, t.getValue = function (e) {
        void 0 === e && (e = !1);

        var t = this._store.activeItems.reduce(function (t, i) {
          var n = e ? i.value : i;
          return t.push(n), t;
        }, []);

        return this._isSelectOneElement ? t[0] : t;
      }, t.setValue = function (e) {
        var t = this;
        return this.initialised ? ([].concat(e).forEach(function (e) {
          return t._setChoiceOrItem(e);
        }), this) : this;
      }, t.setChoiceByValue = function (e) {
        var t = this;
        return !this.initialised || this._isTextElement ? this : ((S("Array", e) ? e : [e]).forEach(function (e) {
          return t._findAndSelectChoiceByValue(e);
        }), this);
      }, t.setChoices = function (e, t, i, n) {
        var s = this;
        if (void 0 === e && (e = []), void 0 === t && (t = ""), void 0 === i && (i = ""), void 0 === n && (n = !1), !this._isSelectElement || !t) return this;
        n && this.clearChoices(), this.containerOuter.removeLoadingState();
        return this._setLoading(!0), e.forEach(function (e) {
          e.choices ? s._addGroup({
            group: e,
            id: e.id || null,
            valueKey: t,
            labelKey: i
          }) : s._addChoice({
            value: e[t],
            label: e[i],
            isSelected: e.selected,
            isDisabled: e.disabled,
            customProperties: e.customProperties,
            placeholder: e.placeholder
          });
        }), this._setLoading(!1), this;
      }, t.clearChoices = function () {
        this._store.dispatch({
          type: Z
        });
      }, t.clearStore = function () {
        return this._store.dispatch({
          type: "CLEAR_ALL"
        }), this;
      }, t.clearInput = function () {
        var e = !this._isSelectOneElement;
        return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch(Se(!0))), this;
      }, t.ajax = function (e) {
        var t = this;
        return this.initialised && this._isSelectElement && e ? (requestAnimationFrame(function () {
          return t._handleLoadingState(!0);
        }), e(this._ajaxCallback()), this) : this;
      }, t._render = function () {
        if (!this._store.isLoading()) {
          this._currentState = this._store.state;
          var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
              t = this._isSelectElement,
              i = this._currentState.items !== this._prevState.items;
          e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
        }
      }, t._renderChoices = function () {
        var e = this,
            t = this._store,
            i = t.activeGroups,
            n = t.activeChoices,
            s = document.createDocumentFragment();

        if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
          return e.choiceList.scrollToTop();
        }), i.length >= 1 && !this._isSearching) {
          var r = n.filter(function (e) {
            return !0 === e.placeholder && -1 === e.groupId;
          });
          r.length >= 1 && (s = this._createChoicesFragment(r, s)), s = this._createGroupsFragment(i, n, s);
        } else n.length >= 1 && (s = this._createChoicesFragment(n, s));

        if (s.childNodes && s.childNodes.length > 0) {
          var o = this._store.activeItems,
              a = this._canAddItem(o, this.input.value);

          a.response ? (this.choiceList.append(s), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", a.notice));
        } else {
          var l, c;
          this._isSearching ? (c = S("Function", this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = S("Function", this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
        }
      }, t._renderItems = function () {
        var e = this._store.activeItems || [];
        this.itemList.clear();

        var t = this._createItemsFragment(e);

        t.childNodes && this.itemList.append(t);
      }, t._createGroupsFragment = function (e, t, i) {
        var n = this,
            s = i || document.createDocumentFragment();
        return this.config.shouldSort && e.sort(this.config.sortFn), e.forEach(function (e) {
          var i = function (e) {
            return t.filter(function (t) {
              return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
            });
          }(e);

          if (i.length >= 1) {
            var r = n._getTemplate("choiceGroup", e);

            s.appendChild(r), n._createChoicesFragment(i, s, !0);
          }
        }), s;
      }, t._createChoicesFragment = function (e, t, i) {
        var n = this;
        void 0 === i && (i = !1);

        var s = t || document.createDocumentFragment(),
            r = this.config,
            o = r.renderSelectedChoices,
            a = r.searchResultLimit,
            l = r.renderChoiceLimit,
            c = this._isSearching ? A : this.config.sortFn,
            h = function h(e) {
          if ("auto" !== o || n._isSelectOneElement || !e.selected) {
            var t = n._getTemplate("choice", e, n.config.itemSelectText);

            s.appendChild(t);
          }
        },
            u = e;

        "auto" !== o || this._isSelectOneElement || (u = e.filter(function (e) {
          return !e.selected;
        }));
        var d = u.reduce(function (e, t) {
          return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
        }, {
          placeholderChoices: [],
          normalChoices: []
        }),
            p = d.placeholderChoices,
            f = d.normalChoices;
        (this.config.shouldSort || this._isSearching) && f.sort(c);
        var m = u.length,
            v = [].concat(p, f);
        this._isSearching ? m = a : l > 0 && !i && (m = l);

        for (var g = 0; g < m; g += 1) {
          v[g] && h(v[g]);
        }

        return s;
      }, t._createItemsFragment = function (e, t) {
        var i = this;
        void 0 === t && (t = null);
        var n = this.config,
            s = n.shouldSortItems,
            r = n.sortFn,
            o = n.removeItemButton,
            a = t || document.createDocumentFragment();
        s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e : this.passedElement.options = e;
        return e.forEach(function (e) {
          return function (e) {
            var t = i._getTemplate("item", e, o);

            a.appendChild(t);
          }(e);
        }), a;
      }, t._triggerChange = function (e) {
        null != e && this.passedElement.triggerEvent(H, {
          value: e
        });
      }, t._selectPlaceholderChoice = function () {
        var e = this._store.placeholderChoice;
        e && (this._addItem({
          value: e.value,
          label: e.label,
          choiceId: e.id,
          groupId: e.groupId,
          placeholder: e.placeholder
        }), this._triggerChange(e.value));
      }, t._handleButtonAction = function (e, t) {
        if (e && t && this.config.removeItems && this.config.removeItemButton) {
          var i = t.parentNode.getAttribute("data-id"),
              n = e.find(function (e) {
            return e.id === parseInt(i, 10);
          });
          this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._selectPlaceholderChoice();
        }
      }, t._handleItemAction = function (e, t, i) {
        var n = this;

        if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
          var s = t.getAttribute("data-id");
          e.forEach(function (e) {
            e.id !== parseInt(s, 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
          }), this.input.focus();
        }
      }, t._handleChoiceAction = function (e, t) {
        if (e && t) {
          var i = t.getAttribute("data-id"),
              n = this._store.getChoiceById(i),
              s = e[0] && e[0].keyCode ? e[0].keyCode : null,
              r = this.dropdown.isActive;

          if (n.keyCode = s, this.passedElement.triggerEvent(G, {
            choice: n
          }), n && !n.selected && !n.disabled) this._canAddItem(e, n.value).response && (this._addItem({
            value: n.value,
            label: n.label,
            choiceId: n.id,
            groupId: n.groupId,
            customProperties: n.customProperties,
            placeholder: n.placeholder,
            keyCode: n.keyCode
          }), this._triggerChange(n.value));
          this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
        }
      }, t._handleBackspace = function (e) {
        if (this.config.removeItems && e) {
          var t = e[e.length - 1],
              i = e.some(function (e) {
            return e.highlighted;
          });
          this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
        }
      }, t._setLoading = function (e) {
        this._store.dispatch(function (e) {
          return {
            type: "SET_IS_LOADING",
            isLoading: e
          };
        }(e));
      }, t._handleLoadingState = function (e) {
        void 0 === e && (e = !0);
        var t = this.itemList.getChild("." + this.config.classNames.placeholder);
        e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(t)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "");
      }, t._handleSearch = function (e) {
        if (e && this.input.isFocussed) {
          var t = this._store.choices,
              i = this.config,
              n = i.searchFloor,
              s = i.searchChoices,
              r = t.some(function (e) {
            return !e.active;
          });

          if (e && e.length >= n) {
            var o = s ? this._searchChoices(e) : 0;
            this.passedElement.triggerEvent(q, {
              value: e,
              resultCount: o
            });
          } else r && (this._isSearching = !1, this._store.dispatch(Se(!0)));
        }
      }, t._canAddItem = function (e, t) {
        var i = !0,
            n = S("Function", this.config.addItemText) ? this.config.addItemText(t) : this.config.addItemText;

        if (!this._isSelectOneElement) {
          var s = function (e, t, i) {
            return void 0 === i && (i = "value"), e.some(function (e) {
              return S("String", t) ? e[i] === t.trim() : e[i] === t;
            });
          }(e, t);

          this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = S("Function", this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && s && i && (i = !1, n = S("Function", this.config.uniqueItemText) ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && S("Function", this.config.addItemFilterFn) && !this.config.addItemFilterFn(t) && (i = !1, n = S("Function", this.config.customAddItemText) ? this.config.customAddItemText(t) : this.config.customAddItemText);
        }

        return {
          response: i,
          notice: n
        };
      }, t._ajaxCallback = function () {
        var e = this;
        return function (t, i, n) {
          if (t && i) {
            var s = S("Object", t) ? [t] : t;
            s && S("Array", s) && s.length ? (e._handleLoadingState(!1), e._setLoading(!0), s.forEach(function (t) {
              t.choices ? e._addGroup({
                group: t,
                id: t.id || null,
                valueKey: i,
                labelKey: n
              }) : e._addChoice({
                value: x(t, i),
                label: x(t, n),
                isSelected: t.selected,
                isDisabled: t.disabled,
                customProperties: t.customProperties,
                placeholder: t.placeholder
              });
            }), e._setLoading(!1), e._isSelectOneElement && e._selectPlaceholderChoice()) : e._handleLoadingState(!1);
          }
        };
      }, t._searchChoices = function (e) {
        var t = S("String", e) ? e.trim() : e,
            i = S("String", this._currentValue) ? this._currentValue.trim() : this._currentValue;
        if (t.length < 1 && t === i + " ") return 0;
        var n = this._store.searchableChoices,
            r = t,
            o = [].concat(this.config.searchFields),
            a = Object.assign(this.config.fuseOptions, {
          keys: o
        }),
            l = new s.a(n, a).search(r);
        return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch(function (e) {
          return {
            type: $,
            results: e
          };
        }(l)), l.length;
      }, t._addEventListeners = function () {
        window.delegateEvent.add("keyup", this._onKeyUp), window.delegateEvent.add("keydown", this._onKeyDown), window.delegateEvent.add("click", this._onClick), window.delegateEvent.add("touchmove", this._onTouchMove), window.delegateEvent.add("touchend", this._onTouchEnd), window.delegateEvent.add("mousedown", this._onMouseDown), window.delegateEvent.add("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus), this.containerOuter.element.addEventListener("blur", this._onBlur)), this.input.element.addEventListener("focus", this._onFocus), this.input.element.addEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset), this.input.addEventListeners();
      }, t._removeEventListeners = function () {
        window.delegateEvent.remove("keyup", this._onKeyUp), window.delegateEvent.remove("keydown", this._onKeyDown), window.delegateEvent.remove("click", this._onClick), window.delegateEvent.remove("touchmove", this._onTouchMove), window.delegateEvent.remove("touchend", this._onTouchEnd), window.delegateEvent.remove("mousedown", this._onMouseDown), window.delegateEvent.remove("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
      }, t._onKeyDown = function (e) {
        var t,
            i = e.target,
            n = e.keyCode,
            s = e.ctrlKey,
            r = e.metaKey;

        if (i === this.input.element || this.containerOuter.element.contains(i)) {
          var o = this._store.activeItems,
              a = this.input.isFocussed,
              l = this.dropdown.isActive,
              c = this.itemList.hasChildren,
              h = String.fromCharCode(n),
              u = ne,
              d = se,
              p = re,
              f = oe,
              m = ae,
              v = le,
              g = ce,
              _ = he,
              b = ue,
              y = s || r;
          !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(h) && this.showDropdown();
          var E = ((t = {})[f] = this._onAKey, t[p] = this._onEnterKey, t[m] = this._onEscapeKey, t[v] = this._onDirectionKey, t[_] = this._onDirectionKey, t[g] = this._onDirectionKey, t[b] = this._onDirectionKey, t[d] = this._onDeleteKey, t[u] = this._onDeleteKey, t);
          E[n] && E[n]({
            event: e,
            target: i,
            keyCode: n,
            metaKey: r,
            activeItems: o,
            hasFocusedInput: a,
            hasActiveDropdown: l,
            hasItems: c,
            hasCtrlDownKeyPressed: y
          });
        }
      }, t._onKeyUp = function (e) {
        var t = e.target,
            i = e.keyCode;

        if (t === this.input.element) {
          var n = this.input.value,
              s = this._store.activeItems,
              r = this._canAddItem(s, n),
              o = ne,
              a = se;

          if (this._isTextElement) {
            if (r.notice && n) {
              var l = this._getTemplate("notice", r.notice);

              this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
            } else this.hideDropdown(!0);
          } else {
            var c = (i === o || i === a) && !t.value,
                h = !this._isTextElement && this._isSearching,
                u = this._canSearch && r.response;
            c && h ? (this._isSearching = !1, this._store.dispatch(Se(!0))) : u && this._handleSearch(this.input.value);
          }

          this._canSearch = this.config.searchEnabled;
        }
      }, t._onAKey = function (e) {
        var t = e.hasItems;
        e.hasCtrlDownKeyPressed && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
      }, t._onEnterKey = function (e) {
        var t = e.event,
            i = e.target,
            n = e.activeItems,
            s = e.hasActiveDropdown,
            r = re,
            o = i.hasAttribute("data-button");

        if (this._isTextElement && i.value) {
          var a = this.input.value;
          this._canAddItem(n, a).response && (this.hideDropdown(!0), this._addItem({
            value: a
          }), this._triggerChange(a), this.clearInput());
        }

        if (o && (this._handleButtonAction(n, i), t.preventDefault()), s) {
          var l = this.dropdown.getChild("." + this.config.classNames.highlightedState);
          l && (n[0] && (n[0].keyCode = r), this._handleChoiceAction(n, l)), t.preventDefault();
        } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault());
      }, t._onEscapeKey = function (e) {
        e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus());
      }, t._onDirectionKey = function (e) {
        var t = e.event,
            i = e.hasActiveDropdown,
            n = e.keyCode,
            s = e.metaKey,
            r = ce,
            o = he,
            a = ue;

        if (i || this._isSelectOneElement) {
          this.showDropdown(), this._canSearch = !1;
          var l,
              c = n === r || n === a ? 1 : -1;
          if (s || n === a || n === o) l = c > 0 ? Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")).pop() : this.dropdown.element.querySelector("[data-choice-selectable]");else {
            var h = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
            l = h ? function (e, t, i) {
              if (void 0 === i && (i = 1), e && t) {
                var n = e.parentNode.parentNode,
                    s = Array.from(n.querySelectorAll(t)),
                    r = s.indexOf(e);
                return s[r + (i > 0 ? 1 : -1)];
              }
            }(h, "[data-choice-selectable]", c) : this.dropdown.element.querySelector("[data-choice-selectable]");
          }
          l && (function (e, t, i) {
            if (void 0 === i && (i = 1), e) return i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop;
          }(l, this.choiceList.element, c) || this.choiceList.scrollToChoice(l, c), this._highlightChoice(l)), t.preventDefault();
        }
      }, t._onDeleteKey = function (e) {
        var t = e.event,
            i = e.target,
            n = e.hasFocusedInput,
            s = e.activeItems;
        !n || i.value || this._isSelectOneElement || (this._handleBackspace(s), t.preventDefault());
      }, t._onTouchMove = function () {
        this._wasTap && (this._wasTap = !1);
      }, t._onTouchEnd = function (e) {
        var t = (e || e.touches[0]).target;
        this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation());
        this._wasTap = !0;
      }, t._onMouseDown = function (e) {
        var t = e.target,
            i = e.shiftKey;

        if (this.choiceList.element.contains(t) && navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/) && (this._isScrollingOnIe = !0), this.containerOuter.element.contains(t) && t !== this.input.element) {
          var n = this._store.activeItems,
              s = i,
              r = w(t, "data-button"),
              o = w(t, "data-item"),
              a = w(t, "data-choice");
          r ? this._handleButtonAction(n, r) : o ? this._handleItemAction(n, o, s) : a && this._handleChoiceAction(n, a), e.preventDefault();
        }
      }, t._onMouseOver = function (e) {
        var t = e.target;
        (t === this.dropdown || this.dropdown.element.contains(t)) && t.hasAttribute("data-choice") && this._highlightChoice(t);
      }, t._onClick = function (e) {
        var t = e.target;
        this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
      }, t._onFocus = function (e) {
        var t = this,
            i = e.target;
        this.containerOuter.element.contains(i) && {
          text: function text() {
            i === t.input.element && t.containerOuter.addFocusState();
          },
          "select-one": function selectOne() {
            t.containerOuter.addFocusState(), i === t.input.element && t.showDropdown(!0);
          },
          "select-multiple": function selectMultiple() {
            i === t.input.element && (t.showDropdown(!0), t.containerOuter.addFocusState());
          }
        }[this.passedElement.element.type]();
      }, t._onBlur = function (e) {
        var t = this,
            i = e.target;

        if (this.containerOuter.element.contains(i) && !this._isScrollingOnIe) {
          var n = this._store.activeItems.some(function (e) {
            return e.highlighted;
          });

          ({
            text: function text() {
              i === t.input.element && (t.containerOuter.removeFocusState(), n && t.unhighlightAll(), t.hideDropdown(!0));
            },
            "select-one": function selectOne() {
              t.containerOuter.removeFocusState(), (i === t.input.element || i === t.containerOuter.element && !t._canSearch) && t.hideDropdown(!0);
            },
            "select-multiple": function selectMultiple() {
              i === t.input.element && (t.containerOuter.removeFocusState(), t.hideDropdown(!0), n && t.unhighlightAll());
            }
          })[this.passedElement.element.type]();
        } else this._isScrollingOnIe = !1, this.input.element.focus();
      }, t._onFormReset = function () {
        this._store.dispatch({
          type: "RESET_TO",
          state: this._initialState
        });
      }, t._highlightChoice = function (e) {
        var t = this;
        void 0 === e && (e = null);
        var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));

        if (i.length) {
          var n = e;
          Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)).forEach(function (e) {
            e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
          }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(X, {
            el: n
          }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
        }
      }, t._addItem = function (e) {
        var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.choiceId,
            r = void 0 === s ? -1 : s,
            o = e.groupId,
            a = void 0 === o ? -1 : o,
            l = e.customProperties,
            c = void 0 === l ? null : l,
            h = e.placeholder,
            u = void 0 !== h && h,
            d = e.keyCode,
            p = void 0 === d ? null : d,
            f = S("String", t) ? t.trim() : t,
            m = p,
            v = c,
            g = this._store.items,
            _ = n || f,
            b = parseInt(r, 10) || -1,
            y = a >= 0 ? this._store.getGroupById(a) : null,
            E = g ? g.length + 1 : 1;

        return this.config.prependValue && (f = this.config.prependValue + f.toString()), this.config.appendValue && (f += this.config.appendValue.toString()), this._store.dispatch(function (e) {
          var t = e.value,
              i = e.label,
              n = e.id,
              s = e.choiceId,
              r = e.groupId,
              o = e.customProperties,
              a = e.placeholder,
              l = e.keyCode;
          return {
            type: ee,
            value: t,
            label: i,
            id: n,
            choiceId: s,
            groupId: r,
            customProperties: o,
            placeholder: a,
            keyCode: l
          };
        }({
          value: f,
          label: _,
          id: E,
          choiceId: b,
          groupId: a,
          customProperties: c,
          placeholder: u,
          keyCode: m
        })), this._isSelectOneElement && this.removeActiveItems(E), this.passedElement.triggerEvent(W, {
          id: E,
          value: f,
          label: _,
          customProperties: v,
          groupValue: y && y.value ? y.value : void 0,
          keyCode: m
        }), this;
      }, t._removeItem = function (e) {
        if (!e || !S("Object", e)) return this;
        var t = e.id,
            i = e.value,
            n = e.label,
            s = e.choiceId,
            r = e.groupId,
            o = r >= 0 ? this._store.getGroupById(r) : null;
        return this._store.dispatch(function (e, t) {
          return {
            type: te,
            id: e,
            choiceId: t
          };
        }(t, s)), o && o.value ? this.passedElement.triggerEvent(U, {
          id: t,
          value: i,
          label: n,
          groupValue: o.value
        }) : this.passedElement.triggerEvent(U, {
          id: t,
          value: i,
          label: n
        }), this;
      }, t._addChoice = function (e) {
        var t = e.value,
            i = e.label,
            n = void 0 === i ? null : i,
            s = e.isSelected,
            r = void 0 !== s && s,
            o = e.isDisabled,
            a = void 0 !== o && o,
            l = e.groupId,
            c = void 0 === l ? -1 : l,
            h = e.customProperties,
            u = void 0 === h ? null : h,
            d = e.placeholder,
            p = void 0 !== d && d,
            f = e.keyCode,
            m = void 0 === f ? null : f;

        if (null != t) {
          var v = this._store.choices,
              g = n || t,
              _ = v ? v.length + 1 : 1,
              b = this._baseId + "-" + this._idNames.itemChoice + "-" + _;

          this._store.dispatch(function (e) {
            var t = e.value,
                i = e.label,
                n = e.id,
                s = e.groupId,
                r = e.disabled,
                o = e.elementId,
                a = e.customProperties,
                l = e.placeholder,
                c = e.keyCode;
            return {
              type: Y,
              value: t,
              label: i,
              id: n,
              groupId: s,
              disabled: r,
              elementId: o,
              customProperties: a,
              placeholder: l,
              keyCode: c
            };
          }({
            value: t,
            label: g,
            id: _,
            groupId: c,
            disabled: a,
            elementId: b,
            customProperties: u,
            placeholder: p,
            keyCode: m
          })), r && this._addItem({
            value: t,
            label: g,
            choiceId: _,
            customProperties: u,
            placeholder: p,
            keyCode: m
          });
        }
      }, t._addGroup = function (e) {
        var t = this,
            i = e.group,
            n = e.id,
            s = e.valueKey,
            r = void 0 === s ? "value" : s,
            o = e.labelKey,
            a = void 0 === o ? "label" : o,
            l = S("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
            c = n || Math.floor(new Date().valueOf() * Math.random()),
            h = !!i.disabled && i.disabled;

        if (l) {
          this._store.dispatch(we(i.label, c, !0, h));

          l.forEach(function (e) {
            var i = e.disabled || e.parentNode && e.parentNode.disabled;

            t._addChoice({
              value: e[r],
              label: S("Object", e) ? e[a] : e.innerHTML,
              isSelected: e.selected,
              isDisabled: i,
              groupId: c,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            });
          });
        } else this._store.dispatch(we(i.label, i.id, !1, i.disabled));
      }, t._getTemplate = function (e) {
        var t;
        if (!e) return null;

        for (var i = this.config, n = i.templates, s = i.classNames, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
          o[a - 1] = arguments[a];
        }

        return (t = n[e]).call.apply(t, [this, s].concat(o));
      }, t._createTemplates = function () {
        var e = this.config.callbackOnCreateTemplates,
            t = {};
        e && S("Function", e) && (t = e.call(this, O)), this.config.templates = o()(Ee, t);
      }, t._createElements = function () {
        this.containerOuter = new M({
          element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
          classNames: this.config.classNames,
          type: this.passedElement.element.type,
          position: this.config.position
        }), this.containerInner = new M({
          element: this._getTemplate("containerInner"),
          classNames: this.config.classNames,
          type: this.passedElement.element.type,
          position: this.config.position
        }), this.input = new K({
          element: this._getTemplate("input", this._placeholderValue),
          classNames: this.config.classNames,
          type: this.passedElement.element.type
        }), this.choiceList = new de({
          element: this._getTemplate("choiceList", this._isSelectOneElement)
        }), this.itemList = new de({
          element: this._getTemplate("itemList", this._isSelectOneElement)
        }), this.dropdown = new j({
          element: this._getTemplate("dropdown"),
          classNames: this.config.classNames,
          type: this.passedElement.element.type
        });
      }, t._createStructure = function () {
        this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth(!0)), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement ? this._addPredefinedChoices() : this._isTextElement && this._addPredefinedItems();
      }, t._addPredefinedChoices = function () {
        var e = this,
            t = this.passedElement.optionGroups;

        if (this._highlightPosition = 0, this._isSearching = !1, this._setLoading(!0), t && t.length) {
          var i = this.passedElement.placeholderOption;
          i && "SELECT" === i.parentNode.tagName && this._addChoice({
            value: i.value,
            label: i.innerHTML,
            isSelected: i.selected,
            isDisabled: i.disabled,
            placeholder: !0
          }), t.forEach(function (t) {
            return e._addGroup({
              group: t,
              id: t.id || null
            });
          });
        } else {
          var n = this.passedElement.options,
              s = this.config.sortFn,
              r = this._presetChoices;
          n.forEach(function (e) {
            r.push({
              value: e.value,
              label: e.innerHTML,
              selected: e.selected,
              disabled: e.disabled || e.parentNode.disabled,
              placeholder: e.hasAttribute("placeholder"),
              customProperties: e.getAttribute("data-custom-properties")
            });
          }), this.config.shouldSort && r.sort(s);
          var o = r.some(function (e) {
            return e.selected;
          });
          r.forEach(function (t, i) {
            return function (t, i) {
              var n = t.value,
                  s = t.label,
                  r = t.customProperties,
                  a = t.placeholder;
              if (e._isSelectElement) {
                if (t.choices) e._addGroup({
                  group: t,
                  id: t.id || null
                });else {
                  var l = e._isSelectOneElement && !o && 0 === i,
                      c = !!l || t.selected,
                      h = !l && t.disabled;

                  e._addChoice({
                    value: n,
                    label: s,
                    isSelected: c,
                    isDisabled: h,
                    customProperties: r,
                    placeholder: a
                  });
                }
              } else e._addChoice({
                value: n,
                label: s,
                isSelected: t.selected,
                isDisabled: t.disabled,
                customProperties: r,
                placeholder: a
              });
            }(t, i);
          });
        }

        this._setLoading(!1);
      }, t._addPredefinedItems = function () {
        var e = this;

        this._presetItems.forEach(function (t) {
          return function (t) {
            var i = E(t);
            "Object" === i && t.value ? e._addItem({
              value: t.value,
              label: t.label,
              choiceId: t.id,
              customProperties: t.customProperties,
              placeholder: t.placeholder
            }) : "String" === i && e._addItem({
              value: t
            });
          }(t);
        });
      }, t._setChoiceOrItem = function (e) {
        var t = this;
        ({
          object: function object() {
            e.value && (t._isTextElement ? t._addItem({
              value: e.value,
              label: e.label,
              choiceId: e.id,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            }) : t._addChoice({
              value: e.value,
              label: e.label,
              isSelected: !0,
              isDisabled: !1,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            }));
          },
          string: function string() {
            t._isTextElement ? t._addItem({
              value: e
            }) : t._addChoice({
              value: e,
              label: e,
              isSelected: !0,
              isDisabled: !1
            });
          }
        })[E(e).toLowerCase()]();
      }, t._findAndSelectChoiceByValue = function (e) {
        var t = this,
            i = this._store.choices.find(function (i) {
          return t.config.itemComparer(i.value, e);
        });

        i && !i.selected && this._addItem({
          value: i.value,
          label: i.label,
          choiceId: i.id,
          groupId: i.groupId,
          customProperties: i.customProperties,
          placeholder: i.placeholder,
          keyCode: i.keyCode
        });
      }, t._generateInstances = function (t, i) {
        return t.reduce(function (t, n) {
          return t.push(new e(n, i)), t;
        }, [this]);
      }, t._generatePlaceholderValue = function () {
        return !this._isSelectOneElement && !!this.config.placeholder && (this.config.placeholderValue || this.passedElement.element.getAttribute("placeholder"));
      }, e;
    }();

    Ce.userDefaults = {};
    t["default"] = Ce;
  }])["default"];
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.autocomplete = factory());
})(void 0, function () {
  'use strict';
  /*
   * https://github.com/kraaden/autocomplete
   * Copyright (c) 2016 Denys Krasnoshchok
   * MIT License
   */

  function autocomplete(settings) {
    // just an alias to minimize JS file size
    var doc = document;
    var container = doc.createElement("div");
    var containerStyle = container.style;
    var userAgent = navigator.userAgent;
    var mobileFirefox = userAgent.indexOf("Firefox") !== -1 && userAgent.indexOf("Mobile") !== -1;
    var debounceWaitMs = settings.debounceWaitMs || 0;
    var preventSubmit = settings.preventSubmit || false; // 'keyup' event will not be fired on Mobile Firefox, so we have to use 'input' event instead

    var keyUpEventName = mobileFirefox ? "input" : "keyup";
    var items = [];
    var inputValue = "";
    var minLen = 2;
    var showOnFocus = settings.showOnFocus;
    var selected;
    var keypressCounter = 0;
    var debounceTimer;

    if (settings.minLength !== undefined) {
      minLen = settings.minLength;
    }

    if (!settings.input) {
      throw new Error("input undefined");
    }

    var input = settings.input;
    container.className = "autocomplete " + (settings.className || "");
    containerStyle.position = "fixed";
    /**
     * Detach the container from DOM
     */

    function detach() {
      var parent = container.parentNode;

      if (parent) {
        parent.removeChild(container);
      }
    }
    /**
     * Detect if the script is running on IOS
     */


    function isIOS() {
      return /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;
    }
    /**
     * Clear debouncing timer if assigned
     */


    function clearDebounceTimer() {
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
    }
    /**
     * Attach the container to DOM
     */


    function attach() {
      if (!container.parentNode) {
        doc.body.appendChild(container);
      }
    }
    /**
     * Check if container for autocomplete is displayed
     */


    function containerDisplayed() {
      return !!container.parentNode;
    }
    /**
     * Clear autocomplete state and hide container
     */


    function clear() {
      keypressCounter++;
      items = [];
      inputValue = "";
      selected = undefined;
      detach();
    }
    /**
     * Update autocomplete position
     */


    function updatePosition() {
      if (!containerDisplayed()) {
        return;
      }

      containerStyle.height = "auto";
      containerStyle.width = input.offsetWidth + "px";
      var inputRect = input.getBoundingClientRect();
      var top = isIOS() ? inputRect.top + window.pageYOffset // a fix for buggy getBoundingClientRect on IOS
      : inputRect.top;
      top = top + input.offsetHeight;
      var maxHeight = window.innerHeight - (inputRect.top + input.offsetHeight);

      if (maxHeight < 0) {
        maxHeight = 0;
      }

      containerStyle.top = top + "px";
      containerStyle.bottom = "";
      containerStyle.left = inputRect.left + "px";
      containerStyle.maxHeight = maxHeight + "px";

      if (settings.customize) {
        settings.customize(input, inputRect, container, maxHeight);
      }
    }
    /**
     * Redraw the autocomplete div element with suggestions
     */


    function update() {
      // delete all children from autocomplete DOM container
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      } // function for rendering autocomplete suggestions


      var render = function render(item, currentValue) {
        var itemElement = doc.createElement("div");
        itemElement.textContent = item.label || "";
        return itemElement;
      };

      if (settings.render) {
        render = settings.render;
      } // function to render autocomplete groups


      var renderGroup = function renderGroup(groupName, currentValue) {
        var groupDiv = doc.createElement("div");
        groupDiv.textContent = groupName;
        return groupDiv;
      };

      if (settings.renderGroup) {
        renderGroup = settings.renderGroup;
      }

      var fragment = doc.createDocumentFragment();
      var prevGroup = "#9?$";
      items.forEach(function (item) {
        if (item.group && item.group !== prevGroup) {
          prevGroup = item.group;
          var groupDiv = renderGroup(item.group, inputValue);

          if (groupDiv) {
            groupDiv.className += " group";
            fragment.appendChild(groupDiv);
          }
        }

        var div = render(item, inputValue);

        if (div) {
          div.addEventListener("click", function (ev) {
            settings.onSelect(item, input);
            clear();
            ev.preventDefault();
            ev.stopPropagation();
          });

          if (item === selected) {
            div.className += " selected";
          }

          fragment.appendChild(div);
        }
      });
      container.appendChild(fragment);

      if (items.length < 1) {
        if (settings.emptyMsg) {
          var empty = doc.createElement("div");
          empty.className = "empty";
          empty.textContent = settings.emptyMsg;
          container.appendChild(empty);
        } else {
          clear();
          return;
        }
      }

      attach();
      updatePosition();
      updateScroll();
    }

    function updateIfDisplayed() {
      if (containerDisplayed()) {
        update();
      }
    }

    function resizeEventHandler() {
      updateIfDisplayed();
    }

    function scrollEventHandler(e) {
      if (e.target !== container) {
        updateIfDisplayed();
      } else {
        e.preventDefault();
      }
    }

    function keyupEventHandler(ev) {
      var keyCode = ev.which || ev.keyCode || 0;
      var ignore = [38
      /* Up */
      , 13
      /* Enter */
      , 27
      /* Esc */
      , 39
      /* Right */
      , 37
      /* Left */
      , 16
      /* Shift */
      , 17
      /* Ctrl */
      , 18
      /* Alt */
      , 20
      /* CapsLock */
      , 91
      /* WindowsKey */
      , 9
      /* Tab */
      ];

      for (var _i = 0, ignore_1 = ignore; _i < ignore_1.length; _i++) {
        var key = ignore_1[_i];

        if (keyCode === key) {
          return;
        }
      } // the down key is used to open autocomplete


      if (keyCode === 40
      /* Down */
      && containerDisplayed()) {
        return;
      }

      startFetch(0
      /* Keyboard */
      );
    }
    /**
     * Automatically move scroll bar if selected item is not visible
     */


    function updateScroll() {
      var elements = container.getElementsByClassName("selected");

      if (elements.length > 0) {
        var element = elements[0]; // make group visible

        var previous = element.previousElementSibling;

        if (previous && previous.className.indexOf("group") !== -1 && !previous.previousElementSibling) {
          element = previous;
        }

        if (element.offsetTop < container.scrollTop) {
          container.scrollTop = element.offsetTop;
        } else {
          var selectBottom = element.offsetTop + element.offsetHeight;
          var containerBottom = container.scrollTop + container.offsetHeight;

          if (selectBottom > containerBottom) {
            container.scrollTop += selectBottom - containerBottom;
          }
        }
      }
    }
    /**
     * Select the previous item in suggestions
     */


    function selectPrev() {
      if (items.length < 1) {
        selected = undefined;
      } else {
        if (selected === items[0]) {
          selected = items[items.length - 1];
        } else {
          for (var i = items.length - 1; i > 0; i--) {
            if (selected === items[i] || i === 1) {
              selected = items[i - 1];
              break;
            }
          }
        }
      }
    }
    /**
     * Select the next item in suggestions
     */


    function selectNext() {
      if (items.length < 1) {
        selected = undefined;
      }

      if (!selected || selected === items[items.length - 1]) {
        selected = items[0];
        return;
      }

      for (var i = 0; i < items.length - 1; i++) {
        if (selected === items[i]) {
          selected = items[i + 1];
          break;
        }
      }
    }

    function keydownEventHandler(ev) {
      var keyCode = ev.which || ev.keyCode || 0;

      if (keyCode === 38
      /* Up */
      || keyCode === 40
      /* Down */
      || keyCode === 27
      /* Esc */
      ) {
          var containerIsDisplayed = containerDisplayed();

          if (keyCode === 27
          /* Esc */
          ) {
              clear();
            } else {
            if (!containerDisplayed || items.length < 1) {
              return;
            }

            keyCode === 38
            /* Up */
            ? selectPrev() : selectNext();
            update();
          }

          ev.preventDefault();

          if (containerIsDisplayed) {
            ev.stopPropagation();
          }

          return;
        }

      if (keyCode === 13
      /* Enter */
      ) {
          if (selected) {
            settings.onSelect(selected, input);
            clear();
          }

          if (preventSubmit) {
            ev.preventDefault();
          }
        }
    }

    function focusEventHandler() {
      if (showOnFocus) {
        startFetch(1
        /* Focus */
        );
      }
    }

    function startFetch(trigger) {
      // if multiple keys were pressed, before we get update from server,
      // this may cause redrawing our autocomplete multiple times after the last key press.
      // to avoid this, the number of times keyboard was pressed will be
      // saved and checked before redraw our autocomplete box.
      var savedKeypressCounter = ++keypressCounter;
      var val = input.value;

      if (val.length >= minLen || trigger === 1
      /* Focus */
      ) {
          clearDebounceTimer();
          debounceTimer = window.setTimeout(function () {
            settings.fetch(val, function (elements) {
              if (keypressCounter === savedKeypressCounter && elements) {
                items = elements;
                inputValue = val;
                selected = items.length > 0 ? items[0] : undefined;
                update();
              }
            }, 0
            /* Keyboard */
            );
          }, trigger === 0
          /* Keyboard */
          ? debounceWaitMs : 0);
        } else {
        clear();
      }
    }

    function blurEventHandler() {
      // we need to delay clear, because when we click on an item, blur will be called before click and remove items from DOM
      setTimeout(function () {
        if (doc.activeElement !== input) {
          clear();
        }
      }, 200);
    }
    /**
     * Fixes #26: on long clicks focus will be lost and onSelect method will not be called
     */


    container.addEventListener("mousedown", function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
    });
    /**
     * This function will remove DOM elements and clear event handlers
     */

    function destroy() {
      input.removeEventListener("focus", focusEventHandler);
      input.removeEventListener("keydown", keydownEventHandler);
      input.removeEventListener(keyUpEventName, keyupEventHandler);
      input.removeEventListener("blur", blurEventHandler);
      window.removeEventListener("resize", resizeEventHandler);
      doc.removeEventListener("scroll", scrollEventHandler, true);
      clearDebounceTimer();
      clear(); // prevent the update call if there are pending AJAX requests

      keypressCounter++;
    } // setup event handlers


    input.addEventListener("keydown", keydownEventHandler);
    input.addEventListener(keyUpEventName, keyupEventHandler);
    input.addEventListener("blur", blurEventHandler);
    input.addEventListener("focus", focusEventHandler);
    window.addEventListener("resize", resizeEventHandler);
    doc.addEventListener("scroll", scrollEventHandler, true);
    return {
      destroy: destroy
    };
  }

  return autocomplete;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!window.jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a.transition) return !0;

    for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }

    return !1;
  };

  t.prototype = {
    constructor: t,
    init: function init() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    },
    open: function open(c) {
      var e;

      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g,
            h = c.items;

        for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;

      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;

      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }

      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
          n = {};

      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();

        o && (n.marginRight = o);
      }

      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    },
    close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    },
    _close: function _close() {
      y(h);
      var c = r + " " + q + " ";

      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }

      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    },
    updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();

      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;

      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }

      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    },
    parseEl: function parseEl(c) {
      var d,
          e = b.items[c];

      if (e.tagName ? e = {
        el: a(e)
      } : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        }

        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }

      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    },
    addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };

      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    },
    _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;

      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    },
    _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;

        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;

        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);

          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }

      return b.scrollbarSize;
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d;
  };

  var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };

  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      },
      getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);

          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");

          return c.inlineElement = f, f;
        }

        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });

  var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };

  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function success(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          },
          error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), "";
      }
    }
  });

  var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;

    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || "";
    }

    return "";
  };

  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var c = b.st.image,
            d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function resizeImage() {
        var a = b.currItem;

        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      },
      findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };

        e(1);
      },
      getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");

        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }

        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      }
    }
  });

  var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };

  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";

        if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };

          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a);
              }

              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function _getOffset(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      }
    }
  });

  var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };

  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      },
      getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      }
    }
  });

  var S = function S(a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };

  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      },
      next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      },
      prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      },
      goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);

        for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }

        for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      },
      _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      }
    }
  }), A();
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function (r) {
  "function" == typeof define && define.amd ? define(["jquery"], r) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, t) {
    return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), r(t), t;
  } : r(jQuery);
}(function (q) {
  "use strict";

  var m = /\r?\n/g,
      S = {};
  S.fileapi = void 0 !== q('<input type="file">').get(0).files, S.formdata = void 0 !== window.FormData;

  var _ = !!q.fn.prop;

  function o(e) {
    var t = e.data;
    e.isDefaultPrevented() || (e.preventDefault(), q(e.target).closest("form").ajaxSubmit(t));
  }

  function i(e) {
    var t = e.target,
        r = q(t);

    if (!r.is("[type=submit],[type=image]")) {
      var a = r.closest("[type=submit]");
      if (0 === a.length) return;
      t = a[0];
    }

    var n,
        o = t.form;
    "image" === (o.clk = t).type && (void 0 !== e.offsetX ? (o.clk_x = e.offsetX, o.clk_y = e.offsetY) : "function" == typeof q.fn.offset ? (n = r.offset(), o.clk_x = e.pageX - n.left, o.clk_y = e.pageY - n.top) : (o.clk_x = e.pageX - t.offsetLeft, o.clk_y = e.pageY - t.offsetTop)), setTimeout(function () {
      o.clk = o.clk_x = o.clk_y = null;
    }, 100);
  }

  function N() {
    var e;
    q.fn.ajaxSubmit.debug && (e = "[jquery.form] " + Array.prototype.join.call(arguments, ""), window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e));
  }

  q.fn.attr2 = function () {
    if (!_) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments);
  }, q.fn.ajaxSubmit = function (M, e, t, r) {
    if (!this.length) return N("ajaxSubmit: skipping submit process - no element selected"), this;
    var O,
        a,
        n,
        o,
        X = this;
    "function" == typeof M ? M = {
      success: M
    } : "string" == typeof M || !1 === M && 0 < arguments.length ? (M = {
      url: M,
      data: e,
      dataType: t
    }, "function" == typeof r && (M.success = r)) : void 0 === M && (M = {}), O = M.method || M.type || this.attr2("method"), n = (n = (n = "string" == typeof (a = M.url || this.attr2("action")) ? q.trim(a) : "") || window.location.href || "") && (n.match(/^([^#]+)/) || [])[1], o = /(MSIE|Trident)/.test(navigator.userAgent || "") && /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", M = q.extend(!0, {
      url: n,
      success: q.ajaxSettings.success,
      type: O || q.ajaxSettings.type,
      iframeSrc: o
    }, M);
    var i = {};
    if (this.trigger("form-pre-serialize", [this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (M.beforeSerialize && !1 === M.beforeSerialize(this, M)) return N("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var s = M.traditional;
    void 0 === s && (s = q.ajaxSettings.traditional);
    var u,
        c,
        C = [],
        l = this.formToArray(M.semantic, C, M.filtering);
    if (M.data && (c = q.isFunction(M.data) ? M.data(l) : M.data, M.extraData = c, u = q.param(c, s)), M.beforeSubmit && !1 === M.beforeSubmit(l, this, M)) return N("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [l, this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var f = q.param(l, s);
    u && (f = f ? f + "&" + u : u), "GET" === M.type.toUpperCase() ? (M.url += (0 <= M.url.indexOf("?") ? "&" : "?") + f, M.data = null) : M.data = f;
    var d,
        m,
        p,
        h = [];
    M.resetForm && h.push(function () {
      X.resetForm();
    }), M.clearForm && h.push(function () {
      X.clearForm(M.includeHidden);
    }), !M.dataType && M.target ? (d = M.success || function () {}, h.push(function (e, t, r) {
      var a = arguments,
          n = M.replaceTarget ? "replaceWith" : "html";
      q(M.target)[n](e).each(function () {
        d.apply(this, a);
      });
    })) : M.success && (q.isArray(M.success) ? q.merge(h, M.success) : h.push(M.success)), M.success = function (e, t, r) {
      for (var a = M.context || this, n = 0, o = h.length; n < o; n++) {
        h[n].apply(a, [e, t, r || X, X]);
      }
    }, M.error && (m = M.error, M.error = function (e, t, r) {
      var a = M.context || this;
      m.apply(a, [e, t, r, X]);
    }), M.complete && (p = M.complete, M.complete = function (e, t) {
      var r = M.context || this;
      p.apply(r, [e, t, X]);
    });
    var v = 0 < q("input[type=file]:enabled", this).filter(function () {
      return "" !== q(this).val();
    }).length,
        g = "multipart/form-data",
        x = X.attr("enctype") === g || X.attr("encoding") === g,
        y = S.fileapi && S.formdata;
    N("fileAPI :" + y);
    var b,
        T = (v || x) && !y;
    !1 !== M.iframe && (M.iframe || T) ? M.closeKeepAlive ? q.get(M.closeKeepAlive, function () {
      b = w(l);
    }) : b = w(l) : b = (v || x) && y ? function (e) {
      for (var r = new FormData(), t = 0; t < e.length; t++) {
        r.append(e[t].name, e[t].value);
      }

      if (M.extraData) {
        var a = function (e) {
          var t,
              r,
              a = q.param(e, M.traditional).split("&"),
              n = a.length,
              o = [];

          for (t = 0; t < n; t++) {
            a[t] = a[t].replace(/\+/g, " "), r = a[t].split("="), o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
          }

          return o;
        }(M.extraData);

        for (t = 0; t < a.length; t++) {
          a[t] && r.append(a[t][0], a[t][1]);
        }
      }

      M.data = null;
      var n = q.extend(!0, {}, q.ajaxSettings, M, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: O || "POST"
      });
      M.uploadProgress && (n.xhr = function () {
        var e = q.ajaxSettings.xhr();
        return e.upload && e.upload.addEventListener("progress", function (e) {
          var t = 0,
              r = e.loaded || e.position,
              a = e.total;
          e.lengthComputable && (t = Math.ceil(r / a * 100)), M.uploadProgress(e, r, a, t);
        }, !1), e;
      });
      n.data = null;
      var o = n.beforeSend;
      return n.beforeSend = function (e, t) {
        M.formData ? t.data = M.formData : t.data = r, o && o.call(this, e, t);
      }, q.ajax(n);
    }(l) : q.ajax(M), X.removeData("jqxhr").data("jqxhr", b);

    for (var j = 0; j < C.length; j++) {
      C[j] = null;
    }

    return this.trigger("form-submit-notify", [this, M]), this;

    function w(e) {
      var t,
          r,
          l,
          f,
          o,
          d,
          m,
          p,
          a,
          n,
          h,
          v,
          i = X[0],
          g = q.Deferred();
      if (g.abort = function (e) {
        p.abort(e);
      }, e) for (r = 0; r < C.length; r++) {
        t = q(C[r]), _ ? t.prop("disabled", !1) : t.removeAttr("disabled");
      }
      (l = q.extend(!0, {}, q.ajaxSettings, M)).context = l.context || l, o = "jqFormIO" + new Date().getTime();
      var s = i.ownerDocument,
          u = X.closest("body");
      if (l.iframeTarget ? (n = (d = q(l.iframeTarget, s)).attr2("name")) ? o = n : d.attr2("name", o) : (d = q('<iframe name="' + o + '" src="' + l.iframeSrc + '" />', s)).css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px"
      }), m = d[0], p = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: "n/a",
        getAllResponseHeaders: function getAllResponseHeaders() {},
        getResponseHeader: function getResponseHeader() {},
        setRequestHeader: function setRequestHeader() {},
        abort: function abort(e) {
          var t = "timeout" === e ? "timeout" : "aborted";
          N("aborting upload... " + t), this.aborted = 1;

          try {
            m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop");
          } catch (e) {}

          d.attr("src", l.iframeSrc), p.error = t, l.error && l.error.call(l.context, p, t, e), f && q.event.trigger("ajaxError", [p, l, t]), l.complete && l.complete.call(l.context, p, t);
        }
      }, (f = l.global) && 0 == q.active++ && q.event.trigger("ajaxStart"), f && q.event.trigger("ajaxSend", [p, l]), l.beforeSend && !1 === l.beforeSend.call(l.context, p, l)) return l.global && q.active--, g.reject(), g;
      if (p.aborted) return g.reject(), g;
      (a = i.clk) && (n = a.name) && !a.disabled && (l.extraData = l.extraData || {}, l.extraData[n] = a.value, "image" === a.type && (l.extraData[n + ".x"] = i.clk_x, l.extraData[n + ".y"] = i.clk_y));
      var x = 1,
          y = 2;

      function b(t) {
        var r = null;

        try {
          t.contentWindow && (r = t.contentWindow.document);
        } catch (e) {
          N("cannot get iframe.contentWindow document: " + e);
        }

        if (r) return r;

        try {
          r = t.contentDocument ? t.contentDocument : t.document;
        } catch (e) {
          N("cannot get iframe.contentDocument: " + e), r = t.document;
        }

        return r;
      }

      var c = q("meta[name=csrf-token]").attr("content"),
          T = q("meta[name=csrf-param]").attr("content");

      function j() {
        var e = X.attr2("target"),
            t = X.attr2("action"),
            r = X.attr("enctype") || X.attr("encoding") || "multipart/form-data";
        i.setAttribute("target", o), O && !/post/i.test(O) || i.setAttribute("method", "POST"), t !== l.url && i.setAttribute("action", l.url), l.skipEncodingOverride || O && !/post/i.test(O) || X.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), l.timeout && (v = setTimeout(function () {
          h = !0, A(x);
        }, l.timeout));
        var a = [];

        try {
          if (l.extraData) for (var n in l.extraData) {
            l.extraData.hasOwnProperty(n) && (q.isPlainObject(l.extraData[n]) && l.extraData[n].hasOwnProperty("name") && l.extraData[n].hasOwnProperty("value") ? a.push(q('<input type="hidden" name="' + l.extraData[n].name + '">', s).val(l.extraData[n].value).appendTo(i)[0]) : a.push(q('<input type="hidden" name="' + n + '">', s).val(l.extraData[n]).appendTo(i)[0]));
          }
          l.iframeTarget || d.appendTo(u), m.attachEvent ? m.attachEvent("onload", A) : m.addEventListener("load", A, !1), setTimeout(function e() {
            try {
              var t = b(m).readyState;
              N("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50);
            } catch (e) {
              N("Server abort: ", e, " (", e.name, ")"), A(y), v && clearTimeout(v), v = void 0;
            }
          }, 15);

          try {
            i.submit();
          } catch (e) {
            document.createElement("form").submit.apply(i);
          }
        } finally {
          i.setAttribute("action", t), i.setAttribute("enctype", r), e ? i.setAttribute("target", e) : X.removeAttr("target"), q(a).remove();
        }
      }

      T && c && (l.extraData = l.extraData || {}, l.extraData[T] = c), l.forceSync ? j() : setTimeout(j, 10);
      var w,
          S,
          k,
          D = 50;

      function A(e) {
        if (!p.aborted && !k) {
          if ((S = b(m)) || (N("cannot access response document"), e = y), e === x && p) return p.abort("timeout"), void g.reject(p, "timeout");
          if (e === y && p) return p.abort("server abort"), void g.reject(p, "error", "server abort");

          if (S && S.location.href !== l.iframeSrc || h) {
            m.detachEvent ? m.detachEvent("onload", A) : m.removeEventListener("load", A, !1);
            var t,
                r = "success";

            try {
              if (h) throw "timeout";
              var a = "xml" === l.dataType || S.XMLDocument || q.isXMLDoc(S);
              if (N("isXml=" + a), !a && window.opera && (null === S.body || !S.body.innerHTML) && --D) return N("requeing onLoad callback, DOM not available"), void setTimeout(A, 250);
              var n = S.body ? S.body : S.documentElement;
              p.responseText = n ? n.innerHTML : null, p.responseXML = S.XMLDocument ? S.XMLDocument : S, a && (l.dataType = "xml"), p.getResponseHeader = function (e) {
                return {
                  "content-type": l.dataType
                }[e.toLowerCase()];
              }, n && (p.status = Number(n.getAttribute("status")) || p.status, p.statusText = n.getAttribute("statusText") || p.statusText);
              var o,
                  i,
                  s,
                  u = (l.dataType || "").toLowerCase(),
                  c = /(json|script|text)/.test(u);
              c || l.textarea ? (o = S.getElementsByTagName("textarea")[0]) ? (p.responseText = o.value, p.status = Number(o.getAttribute("status")) || p.status, p.statusText = o.getAttribute("statusText") || p.statusText) : c && (i = S.getElementsByTagName("pre")[0], s = S.getElementsByTagName("body")[0], i ? p.responseText = i.textContent ? i.textContent : i.innerText : s && (p.responseText = s.textContent ? s.textContent : s.innerText)) : "xml" === u && !p.responseXML && p.responseText && (p.responseXML = F(p.responseText));

              try {
                w = E(p, u, l);
              } catch (e) {
                r = "parsererror", p.error = t = e || r;
              }
            } catch (e) {
              N("error caught: ", e), r = "error", p.error = t = e || r;
            }

            p.aborted && (N("upload aborted"), r = null), p.status && (r = 200 <= p.status && p.status < 300 || 304 === p.status ? "success" : "error"), "success" === r ? (l.success && l.success.call(l.context, w, "success", p), g.resolve(p.responseText, "success", p), f && q.event.trigger("ajaxSuccess", [p, l])) : r && (void 0 === t && (t = p.statusText), l.error && l.error.call(l.context, p, r, t), g.reject(p, "error", t), f && q.event.trigger("ajaxError", [p, l, t])), f && q.event.trigger("ajaxComplete", [p, l]), f && ! --q.active && q.event.trigger("ajaxStop"), l.complete && l.complete.call(l.context, p, r), k = !0, l.timeout && clearTimeout(v), setTimeout(function () {
              l.iframeTarget ? d.attr("src", l.iframeSrc) : d.remove(), p.responseXML = null;
            }, 100);
          }
        }
      }

      var F = q.parseXML || function (e, t) {
        return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = new DOMParser().parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null;
      },
          L = q.parseJSON || function (e) {
        return window.eval("(" + e + ")");
      },
          E = function E(e, t, r) {
        var a = e.getResponseHeader("content-type") || "",
            n = ("xml" === t || !t) && 0 <= a.indexOf("xml"),
            o = n ? e.responseXML : e.responseText;
        return n && "parsererror" === o.documentElement.nodeName && q.error && q.error("parsererror"), r && r.dataFilter && (o = r.dataFilter(o, t)), "string" == typeof o && (("json" === t || !t) && 0 <= a.indexOf("json") ? o = L(o) : ("script" === t || !t) && 0 <= a.indexOf("javascript") && q.globalEval(o)), o;
      };

      return g;
    }
  }, q.fn.ajaxForm = function (e, t, r, a) {
    if (("string" == typeof e || !1 === e && 0 < arguments.length) && (e = {
      url: e,
      data: t,
      dataType: r
    }, "function" == typeof a && (e.success = a)), (e = e || {}).delegation = e.delegation && q.isFunction(q.fn.on), e.delegation || 0 !== this.length) return e.delegation ? (q(document).off("submit.form-plugin", this.selector, o).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, e, o).on("click.form-plugin", this.selector, e, i), this) : (e.beforeFormUnbind && e.beforeFormUnbind(this, e), this.ajaxFormUnbind().on("submit.form-plugin", e, o).on("click.form-plugin", e, i));
    var n = {
      s: this.selector,
      c: this.context
    };
    return !q.isReady && n.s ? (N("DOM not ready, queuing ajaxForm"), q(function () {
      q(n.s, n.c).ajaxForm(e);
    })) : N("terminating; zero elements found by selector" + (q.isReady ? "" : " (DOM not ready)")), this;
  }, q.fn.ajaxFormUnbind = function () {
    return this.off("submit.form-plugin click.form-plugin");
  }, q.fn.formToArray = function (e, t, r) {
    var a = [];
    if (0 === this.length) return a;
    var n,
        o,
        i,
        s,
        u,
        c,
        l,
        f,
        d,
        m,
        p = this[0],
        h = this.attr("id"),
        v = (v = e || void 0 === p.elements ? p.getElementsByTagName("*") : p.elements) && q.makeArray(v);
    if (h && (e || /(Edge|Trident)\//.test(navigator.userAgent)) && (n = q(':input[form="' + h + '"]').get()).length && (v = (v || []).concat(n)), !v || !v.length) return a;

    for (q.isFunction(r) && (v = q.map(v, r)), o = 0, c = v.length; o < c; o++) {
      if ((m = (u = v[o]).name) && !u.disabled) if (e && p.clk && "image" === u.type) p.clk === u && (a.push({
        name: m,
        value: q(u).val(),
        type: u.type
      }), a.push({
        name: m + ".x",
        value: p.clk_x
      }, {
        name: m + ".y",
        value: p.clk_y
      }));else if ((s = q.fieldValue(u, !0)) && s.constructor === Array) for (t && t.push(u), i = 0, l = s.length; i < l; i++) {
        a.push({
          name: m,
          value: s[i]
        });
      } else if (S.fileapi && "file" === u.type) {
        t && t.push(u);
        var g = u.files;
        if (g.length) for (i = 0; i < g.length; i++) {
          a.push({
            name: m,
            value: g[i],
            type: u.type
          });
        } else a.push({
          name: m,
          value: "",
          type: u.type
        });
      } else null != s && (t && t.push(u), a.push({
        name: m,
        value: s,
        type: u.type,
        required: u.required
      }));
    }

    return e || !p.clk || (m = (d = (f = q(p.clk))[0]).name) && !d.disabled && "image" === d.type && (a.push({
      name: m,
      value: f.val()
    }), a.push({
      name: m + ".x",
      value: p.clk_x
    }, {
      name: m + ".y",
      value: p.clk_y
    })), a;
  }, q.fn.formSerialize = function (e) {
    return q.param(this.formToArray(e));
  }, q.fn.fieldSerialize = function (n) {
    var o = [];
    return this.each(function () {
      var e = this.name;

      if (e) {
        var t = q.fieldValue(this, n);
        if (t && t.constructor === Array) for (var r = 0, a = t.length; r < a; r++) {
          o.push({
            name: e,
            value: t[r]
          });
        } else null != t && o.push({
          name: this.name,
          value: t
        });
      }
    }), q.param(o);
  }, q.fn.fieldValue = function (e) {
    for (var t = [], r = 0, a = this.length; r < a; r++) {
      var n = this[r],
          o = q.fieldValue(n, e);
      null == o || o.constructor === Array && !o.length || (o.constructor === Array ? q.merge(t, o) : t.push(o));
    }

    return t;
  }, q.fieldValue = function (e, t) {
    var r = e.name,
        a = e.type,
        n = e.tagName.toLowerCase();
    if (void 0 === t && (t = !0), t && (!r || e.disabled || "reset" === a || "button" === a || ("checkbox" === a || "radio" === a) && !e.checked || ("submit" === a || "image" === a) && e.form && e.form.clk !== e || "select" === n && -1 === e.selectedIndex)) return null;
    if ("select" !== n) return q(e).val().replace(m, "\r\n");
    var o = e.selectedIndex;
    if (o < 0) return null;

    for (var i = [], s = e.options, u = "select-one" === a, c = u ? o + 1 : s.length, l = u ? o : 0; l < c; l++) {
      var f = s[l];

      if (f.selected && !f.disabled) {
        var d = (d = f.value) || (f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value);
        if (u) return d;
        i.push(d);
      }
    }

    return i;
  }, q.fn.clearForm = function (e) {
    return this.each(function () {
      q("input,select,textarea", this).clearFields(e);
    });
  }, q.fn.clearFields = q.fn.clearInputs = function (r) {
    var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var e = this.type,
          t = this.tagName.toLowerCase();
      a.test(e) || "textarea" === t ? this.value = "" : "checkbox" === e || "radio" === e ? this.checked = !1 : "select" === t ? this.selectedIndex = -1 : "file" === e ? /MSIE/.test(navigator.userAgent) ? q(this).replaceWith(q(this).clone(!0)) : q(this).val("") : r && (!0 === r && /hidden/.test(e) || "string" == typeof r && q(this).is(r)) && (this.value = "");
    });
  }, q.fn.resetForm = function () {
    return this.each(function () {
      var t = q(this),
          e = this.tagName.toLowerCase();

      switch (e) {
        case "input":
          this.checked = this.defaultChecked;

        case "textarea":
          return this.value = this.defaultValue, !0;

        case "option":
        case "optgroup":
          var r = t.parents("select");
          return r.length && r[0].multiple ? "option" === e ? this.selected = this.defaultSelected : t.find("option").resetForm() : r.resetForm(), !0;

        case "select":
          return t.find("option").each(function (e) {
            if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1;
          }), !0;

        case "label":
          var a = q(t.attr("for")),
              n = t.find("input,select,textarea");
          return a[0] && n.unshift(a[0]), n.resetForm(), !0;

        case "form":
          return "function" != typeof this.reset && ("object" != _typeof(this.reset) || this.reset.nodeType) || this.reset(), !0;

        default:
          return t.find("form,input,label,select,textarea").resetForm(), !0;
      }
    });
  }, q.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e;
    });
  }, q.fn.selected = function (r) {
    return void 0 === r && (r = !0), this.each(function () {
      var e,
          t = this.type;
      "checkbox" === t || "radio" === t ? this.checked = r : "option" === this.tagName.toLowerCase() && (e = q(this).parent("select"), r && e[0] && "select-one" === e[0].type && e.find("option").selected(!1), this.selected = r);
    });
  }, q.fn.ajaxSubmit.debug = !1;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  a.extend(a.fn, {
    validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e);
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function valid() {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    },
    rules: function rules(b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0],
          k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");

      if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;

          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
              i[b] = f[b], delete f[b];
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g;
      }
    }
  });

  var b = function b(a) {
    return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };

  a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function blank(c) {
      return !b("" + a(c).val());
    },
    filled: function filled(c) {
      var d = a(c).val();
      return null !== d && !!b("" + d);
    },
    unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      },
      onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function onkeyup(b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      },
      onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function b(b) {
          var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");

          if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
            var e = a.data(this.form, "validator"),
                f = "on" + b.type.replace(/^validate/, ""),
                g = e.settings;
            g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
          }
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
            d = this.currentForm,
            e = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            e[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
          this.check(b[a]);
        }

        return this.valid();
      },
      element: function element(b) {
        var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      },
      showErrors: function showErrors(b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }

        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b);
      },
      resetElements: function resetElements(a) {
        var b;
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) {
          this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
        } else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
            c = 0;

        for (b in a) {
          void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
        }

        return c;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function findLastActive() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function elements() {
        var b = this,
            c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name"),
              e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0);
        });
      },
      clean: function clean(b) {
        return a(b)[0];
      },
      errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      },
      reset: function reset() {
        this.resetInternals(), this.currentElements = a([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function elementValue(b) {
        var c,
            d,
            e = a(b),
            f = b.type,
            g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function check(b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
          return b;
        }).length,
            i = !1,
            j = this.elementValue(b);
        "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);

        for (d in g) {
          e = {
            method: d,
            parameters: g[d]
          };

          try {
            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
              i = !0;
              continue;
            }

            if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (k) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k;
          }
        }

        if (!i) return this.objectLength(g) && this.successList.push(b), !0;
      },
      customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) {
          if (void 0 !== arguments[a]) return arguments[a];
        }
      },
      defaultMessage: function defaultMessage(b, c) {
        "string" == typeof c && (c = {
          method: c
        });
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
            e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      },
      formatAndAdd: function formatAndAdd(a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      },
      addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function defaultShowErrors() {
        var a, b, c;

        for (a = 0; this.errorList[a]; a++) {
          c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
          this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(b, c) {
        var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      },
      errorsFor: function errorsFor(b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      },
      escapeCssMeta: function escapeCssMeta(a) {
        return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function validationTargetFor(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      },
      checkable: function checkable(a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      },
      getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;

          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }

        return b.length;
      },
      depend: function depend(a, b) {
        return !this.dependTypes[_typeof(a)] || this.dependTypes[_typeof(a)](a, b);
      },
      dependTypes: {
        "boolean": function boolean(a) {
          return a;
        },
        string: function string(b, c) {
          return !!a(b, c.form).length;
        },
        "function": function _function(a, b) {
          return a(b);
        }
      },
      optional: function optional(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function startRequest(b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      },
      stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(b, c) {
        return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        });
      },
      destroy: function destroy() {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function classRules(b) {
      var c = {},
          d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
    },
    attributeRules: function attributeRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      }

      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
      }

      return e;
    },
    staticRules: function staticRules(b) {
      var c = {},
          d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];

        if (e.param || e.depends) {
          var f = !0;

          switch (_typeof(e.depends)) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;

            case "function":
              f = e.depends.call(c, c);
          }

          f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (a, d) {
        b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var a;
        b[this] && (Array.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(a[0]), Number(a[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }

      return b;
    },
    addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";

        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }

        return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
      },
      email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function url(a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
      },
      date: function () {
        var a = !1;
        return function (b, c) {
          return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
        };
      }(),
      dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      },
      number: function number(a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      minlength: function minlength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d >= c;
      },
      maxlength: function maxlength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d <= c;
      },
      rangelength: function rangelength(a, b, c) {
        var d = Array.isArray(a) ? a.length : this.getLength(a, b);
        return this.optional(b) || d >= c[0] && d <= c[1];
      },
      min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function max(a, b, c) {
        return this.optional(b) || a <= c;
      },
      range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      step: function step(b, c, d) {
        var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function k(a) {
          var b = ("" + a).match(/(?:\.(\d+))?$/);
          return b && b[1] ? b[1].length : 0;
        },
            l = function l(a) {
          return Math.round(a * Math.pow(10, e));
        },
            m = !0;

        if (j) throw new Error(g);
        return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
      },
      equalTo: function equalTo(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function remote(b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f,
            g,
            h,
            i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function success(a) {
            var d,
                g,
                h,
                j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  });
  var c,
      d = {};
  return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, c) {
    var e = a.port;
    "abort" === a.mode && (d[e] && d[e].abort(), d[e] = c);
  }) : (c = a.ajax, a.ajax = function (b) {
    var e = ("mode" in b ? b : a.ajaxSettings).mode,
        f = ("port" in b ? b : a.ajaxSettings).port;
    return "abort" === e ? (d[f] && d[f].abort(), d[f] = c.apply(this, arguments), d[f]) : c.apply(this, arguments);
  }), a;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  return a.extend(a.validator.messages, {
    required: "Это поле необходимо заполнить.",
    remote: "Пожалуйста, введите правильное значение.",
    email: "Пожалуйста, введите корректный адрес электронной почты.",
    url: "Пожалуйста, введите корректный URL.",
    date: "Пожалуйста, введите корректную дату.",
    dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
    number: "Пожалуйста, введите число.",
    digits: "Пожалуйста, вводите только цифры.",
    creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
    equalTo: "Пожалуйста, введите такое же значение ещё раз.",
    extension: "Пожалуйста, выберите файл с правильным расширением.",
    maxlength: a.validator.format("Пожалуйста, введите не больше {0} символов."),
    minlength: a.validator.format("Пожалуйста, введите не меньше {0} символов."),
    rangelength: a.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
    range: a.validator.format("Пожалуйста, введите число от {0} до {1}."),
    max: a.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: a.validator.format("Пожалуйста, введите число, большее или равное {0}.")
  }), a;
});
"use strict";

/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function () {
  function aa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }

  function ba(a, b, c) {
    if (!a) throw Error();

    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }

    return function () {
      return a.apply(b, arguments);
    };
  }

  function p(a, b, c) {
    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
    return p.apply(null, arguments);
  }

  var q = Date.now || function () {
    return +new Date();
  };

  function ca(a, b) {
    this.a = a;
    this.o = b || a;
    this.c = this.o.document;
  }

  var da = !!window.FontFace;

  function t(a, b, c, d) {
    b = a.c.createElement(b);
    if (c) for (var e in c) {
      c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
    }
    d && b.appendChild(a.c.createTextNode(d));
    return b;
  }

  function u(a, b, c) {
    a = a.c.getElementsByTagName(b)[0];
    a || (a = document.documentElement);
    a.insertBefore(c, a.lastChild);
  }

  function v(a) {
    a.parentNode && a.parentNode.removeChild(a);
  }

  function w(a, b, c) {
    b = b || [];
    c = c || [];

    for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
      for (var f = !1, g = 0; g < d.length; g += 1) {
        if (b[e] === d[g]) {
          f = !0;
          break;
        }
      }

      f || d.push(b[e]);
    }

    b = [];

    for (e = 0; e < d.length; e += 1) {
      f = !1;

      for (g = 0; g < c.length; g += 1) {
        if (d[e] === c[g]) {
          f = !0;
          break;
        }
      }

      f || b.push(d[e]);
    }

    a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }

  function y(a, b) {
    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
      if (c[d] == b) return !0;
    }

    return !1;
  }

  function ea(a) {
    return a.o.location.hostname || a.a.location.hostname;
  }

  function z(a, b, c) {
    function d() {
      m && e && f && (m(g), m = null);
    }

    b = t(a, "link", {
      rel: "stylesheet",
      href: b,
      media: "all"
    });
    var e = !1,
        f = !0,
        g = null,
        m = c || null;
    da ? (b.onload = function () {
      e = !0;
      d();
    }, b.onerror = function () {
      e = !0;
      g = Error("Stylesheet failed to load");
      d();
    }) : setTimeout(function () {
      e = !0;
      d();
    }, 0);
    u(a, "head", b);
  }

  function A(a, b, c, d) {
    var e = a.c.getElementsByTagName("head")[0];

    if (e) {
      var f = t(a, "script", {
        src: b
      }),
          g = !1;

      f.onload = f.onreadystatechange = function () {
        g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
      };

      e.appendChild(f);
      setTimeout(function () {
        g || (g = !0, c && c(Error("Script load timeout")));
      }, d || 5E3);
      return f;
    }

    return null;
  }

  ;

  function B() {
    this.a = 0;
    this.c = null;
  }

  function C(a) {
    a.a++;
    return function () {
      a.a--;
      D(a);
    };
  }

  function E(a, b) {
    a.c = b;
    D(a);
  }

  function D(a) {
    0 == a.a && a.c && (a.c(), a.c = null);
  }

  ;

  function F(a) {
    this.a = a || "-";
  }

  F.prototype.c = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
    }

    return b.join(this.a);
  };

  function G(a, b) {
    this.c = a;
    this.f = 4;
    this.a = "n";
    var c = (b || "n4").match(/^([nio])([1-9])$/i);
    c && (this.a = c[1], this.f = parseInt(c[2], 10));
  }

  function fa(a) {
    return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
  }

  function I(a) {
    var b = [];
    a = a.split(/,\s*/);

    for (var c = 0; c < a.length; c++) {
      var d = a[c].replace(/['"]/g, "");
      -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
    }

    return b.join(",");
  }

  function J(a) {
    return a.a + a.f;
  }

  function H(a) {
    var b = "normal";
    "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
    return b;
  }

  function ga(a) {
    var b = 4,
        c = "n",
        d = null;
    a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
    return c + b;
  }

  ;

  function ha(a, b) {
    this.c = a;
    this.f = a.o.document.documentElement;
    this.h = b;
    this.a = new F("-");
    this.j = !1 !== b.events;
    this.g = !1 !== b.classes;
  }

  function ia(a) {
    a.g && w(a.f, [a.a.c("wf", "loading")]);
    K(a, "loading");
  }

  function L(a) {
    if (a.g) {
      var b = y(a.f, a.a.c("wf", "active")),
          c = [],
          d = [a.a.c("wf", "loading")];
      b || c.push(a.a.c("wf", "inactive"));
      w(a.f, c, d);
    }

    K(a, "inactive");
  }

  function K(a, b, c) {
    if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));else a.h[b]();
  }

  ;

  function ja() {
    this.c = {};
  }

  function ka(a, b, c) {
    var d = [],
        e;

    for (e in b) {
      if (b.hasOwnProperty(e)) {
        var f = a.c[e];
        f && d.push(f(b[e], c));
      }
    }

    return d;
  }

  ;

  function M(a, b) {
    this.c = a;
    this.f = b;
    this.a = t(this.c, "span", {
      "aria-hidden": "true"
    }, this.f);
  }

  function N(a) {
    u(a.c, "body", a.a);
  }

  function O(a) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
  }

  ;

  function P(a, b, c, d, e, f) {
    this.g = a;
    this.j = b;
    this.a = d;
    this.c = c;
    this.f = e || 3E3;
    this.h = f || void 0;
  }

  P.prototype.start = function () {
    var a = this.c.o.document,
        b = this,
        c = q(),
        d = new Promise(function (d, e) {
      function f() {
        q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
          1 <= a.length ? d() : setTimeout(f, 25);
        }, function () {
          e();
        });
      }

      f();
    }),
        e = null,
        f = new Promise(function (a, d) {
      e = setTimeout(d, b.f);
    });
    Promise.race([f, d]).then(function () {
      e && (clearTimeout(e), e = null);
      b.g(b.a);
    }, function () {
      b.j(b.a);
    });
  };

  function Q(a, b, c, d, e, f, g) {
    this.v = a;
    this.B = b;
    this.c = c;
    this.a = d;
    this.s = g || "BESbswy";
    this.f = {};
    this.w = e || 3E3;
    this.u = f || null;
    this.m = this.j = this.h = this.g = null;
    this.g = new M(this.c, this.s);
    this.h = new M(this.c, this.s);
    this.j = new M(this.c, this.s);
    this.m = new M(this.c, this.s);
    a = new G(this.a.c + ",serif", J(this.a));
    a = O(a);
    this.g.a.style.cssText = a;
    a = new G(this.a.c + ",sans-serif", J(this.a));
    a = O(a);
    this.h.a.style.cssText = a;
    a = new G("serif", J(this.a));
    a = O(a);
    this.j.a.style.cssText = a;
    a = new G("sans-serif", J(this.a));
    a = O(a);
    this.m.a.style.cssText = a;
    N(this.g);
    N(this.h);
    N(this.j);
    N(this.m);
  }

  var R = {
    D: "serif",
    C: "sans-serif"
  },
      S = null;

  function T() {
    if (null === S) {
      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
    }

    return S;
  }

  Q.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.m.a.offsetWidth;
    this.A = q();
    U(this);
  };

  function la(a, b, c) {
    for (var d in R) {
      if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
    }

    return !1;
  }

  function U(a) {
    var b = a.g.a.offsetWidth,
        c = a.h.a.offsetWidth,
        d;
    (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
    d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
  }

  function ma(a) {
    setTimeout(p(function () {
      U(this);
    }, a), 50);
  }

  function V(a, b) {
    setTimeout(p(function () {
      v(this.g.a);
      v(this.h.a);
      v(this.j.a);
      v(this.m.a);
      b(this.a);
    }, a), 0);
  }

  ;

  function W(a, b, c) {
    this.c = a;
    this.a = b;
    this.f = 0;
    this.m = this.j = !1;
    this.s = c;
  }

  var X = null;

  W.prototype.g = function (a) {
    var b = this.a;
    b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
    K(b, "fontactive", a);
    this.m = !0;
    na(this);
  };

  W.prototype.h = function (a) {
    var b = this.a;

    if (b.g) {
      var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
          d = [],
          e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
      c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
      w(b.f, d, e);
    }

    K(b, "fontinactive", a);
    na(this);
  };

  function na(a) {
    0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
  }

  ;

  function oa(a) {
    this.j = a;
    this.a = new ja();
    this.h = 0;
    this.f = this.g = !0;
  }

  oa.prototype.load = function (a) {
    this.c = new ca(this.j, a.context || this.j);
    this.g = !1 !== a.events;
    this.f = !1 !== a.classes;
    pa(this, new ha(this.c, a), a);
  };

  function qa(a, b, c, d, e) {
    var f = 0 == --a.h;
    (a.f || a.g) && setTimeout(function () {
      var a = e || null,
          m = d || null || {};
      if (0 === c.length && f) L(b.a);else {
        b.f += c.length;
        f && (b.j = f);
        var h,
            l = [];

        for (h = 0; h < c.length; h++) {
          var k = c[h],
              n = m[k.c],
              r = b.a,
              x = k;
          r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
          K(r, "fontloading", x);
          r = null;
          if (null === X) if (window.FontFace) {
            var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
            X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
          } else X = !1;
          X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n);
          l.push(r);
        }

        for (h = 0; h < l.length; h++) {
          l[h].start();
        }
      }
    }, 0);
  }

  function pa(a, b, c) {
    var d = [],
        e = c.timeout;
    ia(b);
    var d = ka(a.a, c, a.c),
        f = new W(a.c, b, e);
    a.h = d.length;
    b = 0;

    for (c = d.length; b < c; b++) {
      d[b].load(function (b, d, c) {
        qa(a, f, b, d, c);
      });
    }
  }

  ;

  function ra(a, b) {
    this.c = a;
    this.a = b;
  }

  ra.prototype.load = function (a) {
    function b() {
      if (f["__mti_fntLst" + d]) {
        var c = f["__mti_fntLst" + d](),
            e = [],
            h;
        if (c) for (var l = 0; l < c.length; l++) {
          var k = c[l].fontfamily;
          void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k));
        }
        a(e);
      } else setTimeout(function () {
        b();
      }, 50);
    }

    var c = this,
        d = c.a.projectId,
        e = c.a.version;

    if (d) {
      var f = c.c.o;
      A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
        e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
          return c.a;
        }, b());
      }).id = "__MonotypeAPIScript__" + d;
    } else a([]);
  };

  function sa(a, b) {
    this.c = a;
    this.a = b;
  }

  sa.prototype.load = function (a) {
    var b,
        c,
        d = this.a.urls || [],
        e = this.a.families || [],
        f = this.a.testStrings || {},
        g = new B();
    b = 0;

    for (c = d.length; b < c; b++) {
      z(this.c, d[b], C(g));
    }

    var m = [];
    b = 0;

    for (c = e.length; b < c; b++) {
      if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) {
        m.push(new G(d[0], h[l]));
      } else m.push(new G(d[0]));
    }

    E(g, function () {
      a(m, f);
    });
  };

  function ta(a, b) {
    a ? this.c = a : this.c = ua;
    this.a = [];
    this.f = [];
    this.g = b || "";
  }

  var ua = "https://fonts.googleapis.com/css";

  function va(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
      var e = b[d].split(":");
      3 == e.length && a.f.push(e.pop());
      var f = "";
      2 == e.length && "" != e[1] && (f = ":");
      a.a.push(e.join(f));
    }
  }

  function wa(a) {
    if (0 == a.a.length) throw Error("No fonts to load!");
    if (-1 != a.c.indexOf("kit=")) return a.c;

    for (var b = a.a.length, c = [], d = 0; d < b; d++) {
      c.push(a.a[d].replace(/ /g, "+"));
    }

    b = a.c + "?family=" + c.join("%7C");
    0 < a.f.length && (b += "&subset=" + a.f.join(","));
    0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
    return b;
  }

  ;

  function ya(a) {
    this.f = a;
    this.a = [];
    this.c = {};
  }

  var za = {
    latin: "BESbswy",
    "latin-ext": "\xE7\xF6\xFC\u011F\u015F",
    cyrillic: "\u0439\u044F\u0416",
    greek: "\u03B1\u03B2\u03A3",
    khmer: "\u1780\u1781\u1782",
    Hanuman: "\u1780\u1781\u1782"
  },
      Aa = {
    thin: "1",
    extralight: "2",
    "extra-light": "2",
    ultralight: "2",
    "ultra-light": "2",
    light: "3",
    regular: "4",
    book: "4",
    medium: "5",
    "semi-bold": "6",
    semibold: "6",
    "demi-bold": "6",
    demibold: "6",
    bold: "7",
    "extra-bold": "8",
    extrabold: "8",
    "ultra-bold": "8",
    ultrabold: "8",
    black: "9",
    heavy: "9",
    l: "3",
    r: "4",
    b: "7"
  },
      Ba = {
    i: "i",
    italic: "i",
    n: "n",
    normal: "n"
  },
      Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

  function Da(a) {
    for (var b = a.f.length, c = 0; c < b; c++) {
      var d = a.f[c].split(":"),
          e = d[0].replace(/\+/g, " "),
          f = ["n4"];

      if (2 <= d.length) {
        var g;
        var m = d[1];
        g = [];
        if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
          var k;
          k = m[l];

          if (k.match(/^[\w-]+$/)) {
            var n = Ca.exec(k.toLowerCase());
            if (null == n) k = "";else {
              k = n[2];
              k = null == k || "" == k ? "n" : Ba[k];
              n = n[1];
              if (null == n || "" == n) n = "4";else var r = Aa[n],
                  n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
              k = [k, n].join("");
            }
          } else k = "";

          k && g.push(k);
        }
        0 < g.length && (f = g);
        3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
      }

      a.c[e] || (d = za[e]) && (a.c[e] = d);

      for (d = 0; d < f.length; d += 1) {
        a.a.push(new G(e, f[d]));
      }
    }
  }

  ;

  function Ea(a, b) {
    this.c = a;
    this.a = b;
  }

  var Fa = {
    Arimo: !0,
    Cousine: !0,
    Tinos: !0
  };

  Ea.prototype.load = function (a) {
    var b = new B(),
        c = this.c,
        d = new ta(this.a.api, this.a.text),
        e = this.a.families;
    va(d, e);
    var f = new ya(e);
    Da(f);
    z(c, wa(d), C(b));
    E(b, function () {
      a(f.a, f.c, Fa);
    });
  };

  function Ga(a, b) {
    this.c = a;
    this.a = b;
  }

  Ga.prototype.load = function (a) {
    var b = this.a.id,
        c = this.c.o;
    b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
      if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
        b = c.Typekit.config.fn;

        for (var e = [], f = 0; f < b.length; f += 2) {
          for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) {
            e.push(new G(g, m[h]));
          }
        }

        try {
          c.Typekit.load({
            events: !1,
            classes: !1,
            async: !0
          });
        } catch (l) {}

        a(e);
      }
    }, 2E3) : a([]);
  };

  function Ha(a, b) {
    this.c = a;
    this.f = b;
    this.a = [];
  }

  Ha.prototype.load = function (a) {
    var b = this.f.id,
        c = this.c.o,
        d = this;
    b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
      for (var g = 0, m = c.fonts.length; g < m; ++g) {
        var h = c.fonts[g];
        d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
      }

      a(d.a);
    }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
      b && a([]);
    })) : a([]);
  };

  var Y = new oa(window);

  Y.a.c.custom = function (a, b) {
    return new sa(b, a);
  };

  Y.a.c.fontdeck = function (a, b) {
    return new Ha(b, a);
  };

  Y.a.c.monotype = function (a, b) {
    return new ra(b, a);
  };

  Y.a.c.typekit = function (a, b) {
    return new Ga(b, a);
  };

  Y.a.c.google = function (a, b) {
    return new Ea(b, a);
  };

  var Z = {
    load: p(Y.load, Y)
  };
  "function" === typeof define && define.amd ? define(function () {
    return Z;
  }) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
})();
"use strict";

$(function () {
  $(".mobilemenu").each(function () {
    var mobilemenu = $(this);
    var overflow = mobilemenu.data('overflow') || 'scroll'; // дефолтные настройки для скрола

    mobilemenu.find(".wrap").first().data("params", {
      depth: 0,
      scroll: {},
      height: {}
    }); // дополнительная разметка

    mobilemenu.find(".dropdown").each(function () {
      var $this = $(this);
      var $parent = $this.prev();
      var $grandparent = $this.parent().parent().prev();
      $this.prepend('<li class="menu_title"><a href="' + $parent.attr('href') + '">' + $parent.text() + '</a></li>');
      $this.prepend('<li class="menu_back"><a href="#" rel="nofollow"><i class="uk-icon-angle-left svg"></i> ' + ($grandparent.length ? $grandparent.text() : 'Каталог') + '</a></li>');
    });
    $(".menu a, .social-icons a", mobilemenu).click(function (e) {
      var t = $(this);
      if (t.hasClass("parent")) e.preventDefault(), mobilemenu.isDowndrop ? t.closest("li").hasClass("expanded") ? t.closest("li").removeClass("expanded") : t.closest("li").addClass("expanded") : (t.closest("li").addClass("expanded"), function () {
        if (!mobilemenu.isDowndrop) {
          var e = mobilemenu.find(".scroller").first(),
              t = mobilemenu.find(".wrap").first();

          if (t.length) {
            var a = t.data("params"),
                i = mobilemenu.find(".expanded>.dropdown").eq(a.depth);

            if (i.length) {
              a.scroll[a.depth] = parseInt(mobilemenu.scrollTop()), a.height[a.depth + 1] = Math.max(i.height(), a.depth ? mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1).height() : t.height()), e.css("height", a.height[a.depth + 1] + "px"), ++a.depth, t.css("transform", "translateX(" + -100 * a.depth + "%)");

              if (overflow === 'scroll') {
                setTimeout(function () {
                  mobilemenu.animate({
                    scrollTop: 0
                  }, 200);
                }, 100);
              }

              var o = i.height();
              setTimeout(function () {
                o ? e.css("height", o + "px") : e.css("height", "");
              }, 200);
            }

            t.data("params", a);
          }
        }
      }());else {
        if (t.closest("li").hasClass("counters")) {
          var a = t.attr("href");
          void 0 !== a && (window.location.href = a, window.location.reload());
        }

        t.closest(".menu_back").length || CloseMobileMenu();
      }
    });
    $(".dropdown .menu_back", mobilemenu).click(function (e) {
      e.preventDefault();
      var t = $(this);
      !function () {
        if (!mobilemenu.isDowndrop) {
          var e = mobilemenu.find(".scroller").first(),
              t = mobilemenu.find(".wrap").first();

          if (t.length) {
            var a = t.data("params");

            if (0 < a.depth) {
              var i = mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1);

              if (i.length) {
                e.css("height", a.height[a.depth] + "px"), --a.depth, t.css("transform", "translateX(" + -100 * a.depth + "%)"), setTimeout(function () {
                  mobilemenu.animate({
                    scrollTop: a.scroll[a.depth]
                  }, 200);
                }, 100);
                var o = !!a.depth && mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1).height();
                setTimeout(function () {
                  o ? e.css("height", o + "px") : e.css("height", "");
                }, 200);
              }
            }

            t.data("params", a);
          }
        }
      }(), setTimeout(function () {
        t.closest(".expanded").removeClass("expanded");
      }, 400);
    });
  });
  $(".left-menu .parent-active").each(function () {
    $(this).click();
  });
  var offcanvasInitialExecuted = false;
  $('#uk-offcanvas').on('show.uk.offcanvas', function () {
    if (!offcanvasInitialExecuted) {
      $(".parent-active", this).each(function () {
        $(this).click();
      });
      offcanvasInitialExecuted = true;
    }
  });
});
"use strict";

// тригерим ресайз окна для обновления закрепленных блоков
$('[data-uk-switcher]').on('show.uk.switcher', function () {
  $(window).trigger('resize');
});
$(document).on('af_complete', function (e, response) {
  response.form.parents('.uk-modal').find('.uk-modal-close').click();
});
/* Лайтбокс */

$('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".JPG"], a[href$=".png"], a[href$=".gif"]').not('[target="_blank"]').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});
$(document).on('click', '.comment-image', function () {
  $.magnificPopup.open({
    items: {
      src: $(this).attr('href')
    },
    type: 'image'
  });
  return false;
});
$('.js-popup-map').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});
$('.js-popup-inline').magnificPopup({
  type: 'inline'
});
$('.js-image-comment').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});
$('.js-image-lightbox').magnificPopup({
  type: 'image',
  image: {
    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '<div class="mfp-share">Поделиться в соцсетях: <span class="js-mfp-share"></span></div>' + '</div>' + '<div class="mfp-comments"></div>' + '</div>'
  },
  gallery: {
    enabled: true
  },
  alignTop: true,
  //closeBtnInside: false,
  callbacks: {
    change: function change() {
      var popup = this,
          id = popup.currItem.el.data('id'),
          share = popup.currItem.el.data('share');
      popup.content.find('.js-mfp-share').html($(share).clone(true));
      $.post(document.location.href, {
        action: 'comments',
        thread: 'file-' + id
      }, function (response) {
        popup.content.find('.mfp-comments').html(response);
      });
    }
  }
});
$('.js-video-lightbox').magnificPopup({
  type: 'inline',
  gallery: {
    enabled: true
  },
  alignTop: true,
  callbacks: {
    change: function change() {
      var popup = this,
          id = popup.currItem.el.data('id');
      $.post(document.location.href, {
        action: 'comments',
        thread: 'file-' + id
      }, function (response) {
        popup.content.find('.mfp-comments').html(response);
      });
    }
  }
});
var hash_video = location.hash.match(new RegExp('video=([^&]*)'));

if (hash_video) {
  $('.js-video-lightbox[data-id="' + hash_video[1] + '"]').click();
}

var hash_image = location.hash.match(new RegExp('image=([^&]*)'));

if (hash_image) {
  $('.js-image-lightbox[data-id="' + hash_image[1] + '"]').click();
}

$('.js-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<button class="slider__prev"><i class="uk-icon-angle-left"></i></button>',
  nextArrow: '<button class="slider__next"><i class="uk-icon-angle-right"></i></button>',
  dots: true
});
$('.js-about-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
});
$('.js-seeAlso-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '.js-seeAlso-previous',
  nextArrow: '.js-seeAlso-next',
  responsive: [{
    breakpoint: 960,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.js-viewed-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '.js-viewed-previous',
  nextArrow: '.js-viewed-next',
  responsive: [{
    breakpoint: 960,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.js-actions-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
});
$('.js-left-menu-toggle').click(function () {
  //var height = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  $(this).toggleClass('opened');
  $(this).nextAll('ul').animate({
    left: "0",
    right: "0"
  });
});
$(document).ready(function () {
  $(".slideout-menu__lvl1 > .js-left-menu-toggle").click(function () {
    $(".slideout-menu").toggleClass("slideout-sticky");
  });
});
$(document).ready(function () {
  $(".slideout-menu__lvl2 > .js-left-menu-toggle").click(function () {
    $(".slideout-menu").toggleClass("slideout-sticky-lvl");
  });
});
$('.js-right-menu-toggle').on('click', function () {
  $(this).parent('.touch').animate({
    'left': '100%',
    'right': '-100%'
  });
});
$(document).ready(function () {
  $(".js-right-menu-toggle").click(function () {
    $(".slideout-menu").removeClass("slideout-sticky");
  });
});
$(document).ready(function () {
  $(".js-right-menu-toggle").click(function () {
    $(".slideout-menu").removeClass("slideout-sticky-lvl");
  });
}); // смена внешней ссылки при выборе селекта

$('.js-contacts-select').each(function () {
  var $select = $(this),
      uri = $select.find('option:selected').data('uri'),
      target = $select.data('target');
  $(target).attr('href', uri).show();
  $select.change(function () {
    var uri = $(this).find('option:selected').data('uri'),
        target = $(this).data('target');
    $(target).attr('href', uri);
  });
});
$('.js-input-number-up').click(function () {
  var input = $(this).parent('.js-input-number').find('input');
  var val = Number(input.val()) + 1;
  input.val(val);
  input.change();
});
$('.js-input-number-down').click(function () {
  var input = $(this).parent('.js-input-number').find('input');
  var val = Number(input.val()) - 1;

  if (!input.attr('min') || val >= input.attr('min')) {
    input.val(val);
    input.change();
  }
});
/** Валидация и отправка форм **/

$('.js-form').each(function () {
  $(this).validate({
    submitHandler: function submitHandler(form) {
      var target = $(form).data('target');
      $(form).ajaxSubmit({
        url: location.href,
        type: 'POST',
        dataType: 'html',
        success: function success(response, statusText, xhr, $form) {
          var $target = $(document.createElement('div')).append(response).find(target);
          $(target).html($target.html());
        }
      });
    }
  });
});
$('.js-form-validate').each(function () {
  $(this).validate();
});
$('#msOrder').validate({
  groups: {
    order_receiver: "receiver email phone conditions",
    order_address: "index region city street building room"
  },
  errorPlacement: function errorPlacement(error, element) {
    switch (element.attr("name")) {
      case "index":
      case "region":
      case "city":
      case "street":
      case "building":
      case "room":
        error.insertAfter("#order-address-error");
        break;

      case "receiver":
      case "email":
      case "phone":
      case "conditions":
        error.insertAfter("#order-receiver-error");
        break;

      default:
        error.insertAfter(element);
        break;
    }
  },
  messages: {
    index: {
      required: "Заполните все поля адреса доставки."
    },
    region: {
      required: "Заполните все поля адреса доставки."
    },
    city: {
      required: "Заполните все поля адреса доставки."
    },
    street: {
      required: "Заполните все поля адреса доставки."
    },
    building: {
      required: "Заполните все поля адреса доставки."
    },
    room: {
      required: "Заполните все поля адреса доставки."
    },
    receiver: {
      required: "Заполните обязательные поля."
    },
    email: {
      required: "Заполните обязательные поля."
    },
    phone: {
      required: "Заполните обязательные поля."
    },
    conditions: {
      required: "Согласитесь с условиями обработки персональных данных"
    }
  }
});
/** Видео **/

$('.js-video').each(function () {
  $(this).data('videojs', videojs(this));
});
$('.js-video-modal').each(function () {
  $(this).data('videojs', videojs(this, {
    width: $(window).width() > 1000 ? 1000 : $(window).width() - 10
  }));
});
/** Формы загрузки файлов **/

$('.js-download-popup').magnificPopup({
  type: 'inline',
  midClick: true
});
$('.js-insert-file').each(function (i, wrapper) {
  var $wrapper = $(wrapper);
  $wrapper.find('.ms2galleryform-file-image-wrapper').append('<span>Вставить</span>');
  $wrapper.on('click', '.ms2galleryform-file-link', function () {
    var target = $(this).parents('.js-insert-file').data('target');
    var link = $(this).attr('href');
    var name = $(this).attr('title');
    $.markItUp({
      target: target,
      replaceWith: '<a href="' + link + '" class="comment-image" target="_blank"><img src="' + link + '" alt="' + name + '"></a>'
    });
    UIkit.modal(wrapper).hide();
    return false;
  });
});
$(document).on('click', '.msbuyoneclick', function () {
  var id = $(this).data('id');
  $.ajax({
    type: 'POST',
    url: 'template/buyoneclick.php',
    data: {
      action: 'product',
      id: id
    },
    success: function success(response) {
      var modal = UIkit.modal($(response).appendTo("body"), {});
      modal.on("hide.uk.modal", function () {
        if (modal.persist) {
          modal.persist.appendTo(modal.persist.data("modalPersistParent"));
          modal.persist = false;
        }

        modal.element.remove();
      });
      modal.show();
      modal.find('form').each(function () {
        var form = $(this);
        form.submit(function () {
          $.ajax({
            type: 'POST',
            url: 'template/buyoneclick.php',
            data: form.serialize(),
            success: function success(response) {
              response = $.parseJSON(response);

              if (response.redirect) {
                window.location = response.redirect;
              } else if (response.success) {
                UIkit.notify("<b>Заказ успешно оформлен.</b><br> Наши менеджеры свяжутся с Вами.", {
                  status: 'success'
                });
                modal.hide();
              } else {
                UIkit.notify(response.message, {
                  status: 'danger',
                  timeout: 3000
                });
              }
            }
          });
          return false;
        });
      });
    }
  });
  return false;
});
$(document).on('click', '[data-add-remains]', function (e) {
  e.preventDefault();
  var url = $(this).data('add-remains');

  if (url) {
    $('#under-order [name="url"]').val(url);
  }

  var modal = UIkit.modal("#under-order");

  if (modal.isActive()) {
    modal.hide();
  } else {
    modal.show();
  }

  return false;
});
$(document).on('click', '[data-add-options]', function (e) {
  e.preventDefault();
  var $modal = $($(this).data('add-options'));

  if ($modal.first().parent().prop('tagName') !== 'BODY') {
    $modal.appendTo('body');
  }

  var modal = UIkit.modal($modal, {
    center: true,
    container: 'body'
  });
  $modal.on({
    'show.uk.modal': optionsWidth
  });

  if (modal.isActive()) {
    modal.hide();
  } else {
    modal.show();
  }

  return false;
});
$('.auth-button-restore').click(function (e) {
  $('#office-login-form-password').val('');
  $('#office-auth-login').toggleClass('auth-form-restore');
  return false;
});
$('#cheaper').on('click', '.cheaper-plus', function () {
  var row = $(this).parents('.cheaper-address-row'),
      clone = row.clone();
  clone.find('input').val('');
  row.after(clone);
});
$('#cheaper').on('click', '.cheaper-minus', function () {
  var row = $(this).parents('.cheaper-address-row');
  row.remove();
});
$('.js-home-catalog').click(function (e) {
  if ($(window).width() < 960) {
    UIkit.offcanvas.show('#uk-offcanvas');
    return false;
  }
});
$(document).on('change', '#mse2_filters select', function () {
  $('html, body').animate({
    scrollTop:
    /*$("#pdopage").offset().top || */
    0
  }, 1000);
});
/**
 * Виртуальная форма купона в корзине
 **/

var discount_field = $('#msOrder input[name="discount_code"]');
var discount_form = $('#msCartCoupon');

if (Boolean(discount_field.val())) {
  discount_form.addClass('cart-coupon--applied');
}

discount_form.on('submit', function (e) {
  e.preventDefault();
  var value = $('[name="discount_code"]', this).val();
  discount_field.val(value);
  discount_field.trigger('change');
});
/**
 * Скрытие полей адреса и контактов
 **/

(function () {
  var deliveries = $('[name="delivery"]');
  var deliveries_inputs = $('#msOrder input');
  deliveries_inputs.on('change', function () {
    var delivery = parseInt(deliveries.filter(':checked').val());

    if ([1, 3].indexOf(delivery) !== -1) {
      $('#field-passport').hide();
    } else {
      $('#field-passport').show();
    }

    if ([1, 4, 6, 7, 9, 10, 11].indexOf(delivery) !== -1) {
      $('#field-index').hide();
    } else {
      $('#field-index').show();
    }

    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-region').hide();
    } else {
      $('#field-region').show();
    } // if (value == 1) {
    //     $('#field-city').hide();
    // } else {
    //     $('#field-city').show();
    // }


    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-street').hide();
    } else {
      $('#field-street').show();
    }

    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-room').hide();
    } else {
      $('#field-room').show();
    }

    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-building').hide();
    } else {
      $('#field-building').show();
    }
  });
})();

var cartSwitcher = UIkit.switcher('#cart-tabs', {
  connect: '#cart-switcher',
  active: /\#msOrder/.test(document.location.href) ? 1 : 0,
  swiping: false
});
$('#cart-tabs').on('show.uk.switcher', function (event, area) {
  if ($(miniShop2.Order.paymentInput, miniShop2.Order.order).filter(':visible:checked').length == 0) {
    $(miniShop2.Order.paymentInput, miniShop2.Order.order).filter(':visible:first').trigger('click');
  }
});
$('.js-cart-submit').click(function () {
  cartSwitcher.show(1); // var headerHeight = $(window).width() < 960 ? 77 : 133;
  // $(".content").offset().top - headerHeight

  $([document.documentElement, document.body]).animate({
    scrollTop: 0
  }, 1000);
});
$('.js-header-modern-catalog').click(function () {
  if ($(window).width() < 960) {
    UIkit.offcanvas.show('#uk-offcanvas');
    return false;
  }
});
/**
 * Переключатель в контактах
 **/

var switcherContactsTabsActive = $('#switcher-contacts-content>li').has('li.active').index();
UIkit.switcher('#switcher-contacts-tabs', {
  active: switcherContactsTabsActive === -1 ? 0 : switcherContactsTabsActive,
  connect: '#switcher-contacts-content',
  swiping: false
});

(function () {
  var prevScroll = window.scrollY;
  var delay = 30;
  var catalog = document.querySelector('.fixed-catalog');
  var scrolltop = document.querySelector('.scrolltop');
  window.addEventListener('scroll', function (e) {
    if (window.scrollY < prevScroll) {
      delay = 30;
      catalog.classList.add('fixed-catalog_visible');
      scrolltop.classList.add('scrolltop_visible');
    } else {
      if (delay <= 0) {
        catalog.classList.remove('fixed-catalog_visible');
        scrolltop.classList.remove('scrolltop_visible');
      } else {
        delay--;
      }
    }

    prevScroll = window.scrollY;
  });
})();

$('.ajax_form').append('<input type="text" name="org" value="" class="_org" style="position:absolute; visibility:hidden; height: 0; width: 0; padding: 0; border:none;"/>');
var contactsSelect = document.querySelector('.js-contacts-select');

if (contactsSelect) {
  new Choices(contactsSelect);
}

function optionsWidth() {
  var groups = $('.u-product-options__items');
  groups.each(function (i1, group) {
    var items = $(group).find('.u-product-options__item');
    var minWidth = 0;
    items.each(function (i2, item) {
      if ($(item).outerWidth() > minWidth) {
        minWidth = $(item).outerWidth();
      }
    });

    if (minWidth > 0) {
      var perRow = Math.floor($(group).outerWidth() / minWidth);
      var normalPerRow = Math.ceil(items.length / Math.ceil(items.length / perRow));
      var maxWidth = $(group).outerWidth() / normalPerRow;
      items.css('width', maxWidth);
    }
  });
}

$('.js-share-dropdown').each(function () {
  var dropdown = UIkit.dropdown(this, {
    remaintime: 0,
    mode: 'click'
  });
  $(window).scroll(function () {
    dropdown.hide();
  });
});
$('.u-rating__add').click(function () {
  if ($('#comment-form').is(':visible')) {
    $(this).removeClass('u-rating__add_active');
    $('#comment-form').slideUp(500, function () {
      // тригерим ресайз окна для обновления закрепленных блоков
      $(window).trigger('resize');
    });
  } else {
    $(this).addClass('u-rating__add_active');
    $('#comment-form').slideDown(500, function () {
      // тригерим ресайз окна для обновления закрепленных блоков
      $(window).trigger('resize');
    });
  }
});
$('[data-uk-switcher]').on('show.uk.switcher', function () {
  $('.u-rating__add').removeClass('u-rating__add_active');
  $('#comment-form').slideUp(500);
});
$(function () {
  var deliveries = [{
    id: 1,
    label: 'Самовывоз',
    payments: [2]
  }, {
    id: 2,
    label: 'Курьером по Москве',
    payments: [1, 3]
  }, {
    id: 3,
    label: 'Курьером по Москве (за МКАД)',
    payments: [1, 3]
  }, {
    id: 4,
    label: 'Почта России',
    payments: [1, 3]
  }, {
    id: 5,
    label: 'Транспортные компании',
    payments: [1]
  }, {
    id: 6,
    label: 'Служба СДЭК (до пункта выдачи)',
    payments: [1, 3]
  }, {
    id: 7,
    label: 'Служба СДЭК (до двери получателя)',
    payments: [1, 3]
  }];
  var payments = [{
    id: 1,
    label: 'Онлайн оплата'
  }, {
    id: 2,
    label: 'Оплата в магазине'
  }, {
    id: 3,
    label: 'Оплата при получении'
  }];
  $('.js-calc').each(function (i, form) {
    var cityInput = form.querySelector('[name="city"]');
    var cityLabel = form.querySelector('.js-calc-city-name');
    var citySubmit = form.querySelector('.js-calc-city-submit');
    var citySelect = form.querySelector('[name="autocomplete"]');
    var deliverySelect = form.querySelector('[name="delivery"]');
    var deliveryChoices = new Choices(deliverySelect, {
      searchEnabled: false,
      noChoicesText: 'Укажите город'
    });
    var paymentSelect = form.querySelector('[name="payment"]');
    var paymentChoices = new Choices(paymentSelect, {
      searchEnabled: false,
      noChoicesText: 'Выберите способ доставки'
    });
    var errorBox = form.querySelector('.js-calc-error');
    var resultBox = form.querySelector('.js-calc-result');
    var resultDelivery = form.querySelector('.js-calc-result-delivery');
    var resultTime = form.querySelector('.js-calc-result-time');
    var resultPrice = form.querySelector('.js-calc-result-price');
    var costInput = form.querySelector('[name="cost"]');
    var calculateSubmit = form.querySelector('.js-calc-calculate');

    var setCity = function setCity(city) {
      if (city.indexOf('г ') === 0) {
        city = city.substring(2);
      }

      cityLabel.innerHTML = cityInput.value = city;
      var idx = [];

      if (['Воронеж', 'Курск'].indexOf(city) !== -1) {
        idx = [1];
      } else if (['Москва'].indexOf(city) !== -1) {
        idx = [1, 2, 3];
      } else {
        idx = [4, 5, 6, 7];
      } // способы доставки в соответствии с выбранным городом


      deliveryChoices.setChoices(deliveries.filter(function (row) {
        return idx.indexOf(row.id) !== -1;
      }).map(function (row, index) {
        return {
          value: row.id,
          label: row.label,
          selected: index === 0
        };
      }), 'value', 'label', true);
      deliverySelect.dispatchEvent(new Event('change'));
    };

    var onChangeDelivery = function onChangeDelivery(e) {
      var item = deliveries.find(function (row) {
        return row.id === parseInt(e.target.value);
      }); // способы оплаты в соответствии с выбранным способом доставки

      paymentChoices.setChoices(payments.filter(function (row) {
        return item.payments.indexOf(row.id) !== -1;
      }).map(function (row, index) {
        return {
          value: row.id,
          label: row.label,
          selected: index === 0
        };
      }), 'value', 'label', true);
    };

    var calculate = function calculate(e) {
      e.preventDefault();
      var errors = [];

      if (!cityInput.value) {
        errors.push('Укажите город.');
      }

      if (!costInput.value) {
        errors.push('Укажите стоимость заказа.');
      }

      if (!deliverySelect.value) {
        errors.push('Укажите способ доставки.');
      }

      if (!paymentSelect.value) {
        errors.push('Укажите способ оплаты.');
      }

      if (errors.length > 0) {
        $(resultBox).hide();
        $(errorBox).html(errors.join('<br />')).show();
        return false;
      } else {
        $(resultBox).show();
        $(errorBox).hide();
      }

      var payment = payments.find(function (row) {
        return row.id === parseInt(paymentSelect.value);
      });
      var delivery = deliveries.find(function (row) {
        return row.id === parseInt(deliverySelect.value);
      });
      resultDelivery.innerHTML = delivery.label;

      if (['Воронеж', 'Курск'].indexOf(cityInput.value) !== -1) {
        resultTime.innerHTML = 'Сегодня';
        resultPrice.innerHTML = 'Бесплатно';
      } else if (['Москва'].indexOf(cityInput.value) !== -1) {
        if (delivery.id === 1) {
          if (payment.id === 2) {
            resultTime.innerHTML = 'Сегодня';
            resultPrice.innerHTML = 'Бесплатно';
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if ([2, 3].indexOf(delivery.id) !== -1) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '350 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '300 руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '350 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '300 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 300) + ' руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '0 + ' + costInput.value * 0.04 + ' = ' + costInput.value * 0.04 + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else {
          errors.push('Неверный способ доставки.');
        }
      } else {
        if (delivery.id === 4) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = '300 руб.';
            } else if (costInput.value >= 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = '300 + ' + costInput.value * 0.08 + ' = ' + (costInput.value * 0.08 + 300) + ' руб.';
            } else if (costInput.value >= 5000) {
              resultTime.innerHTML = '4-6 дней';
              resultPrice.innerHTML = '0 + ' + costInput.value * 0.08 + ' = ' + costInput.value * 0.08 + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if (delivery.id === 5) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '3-5 дней';
              resultPrice.innerHTML = '400 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = '3-5 дней';
              resultPrice.innerHTML = '350 руб.';
            } else if (costInput.value >= 15000) {
              resultTime.innerHTML = '3-5 дней';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if (delivery.id === 6) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '400 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '350 руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '350 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '0 + ' + costInput.value * 0.04 + ' = ' + costInput.value * 0.04 + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else if (delivery.id === 7) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '900 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '850 руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 руб.';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '900 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 1000) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '850 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 900) + ' руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.';
            }
          } else {
            errors.push('Неверный способ оплаты.');
          }
        } else {
          errors.push('Неверный способ доставки.');
        }
      }
    };

    $(citySubmit).click(function (e) {
      return setCity(citySelect.value);
    });
    $(citySelect).suggestions({
      token: "4b25f9cb98a44de7c49207580b8644f4c4cfa2ba",
      type: "ADDRESS",
      hint: false,
      scrollOnFocus: false,
      bounds: "city",
      constraints: {
        label: "",
        locations: {
          city_type_full: "город"
        }
      },
      onSelect: function onSelect(e) {
        return setCity(e.data.city);
      }
    });
    $(deliverySelect).change(onChangeDelivery);
    $(form).submit(calculate);

    if (form.dataset.city) {
      setCity(form.dataset.city);
    } // $(paymentSelect).change(calculate)
    // $(deliverySelect).change(calculate)
    // $(costInput).change(calculate)

  });
});
/*$('.brands').each(function (wrapper) {
    const maxHeight = function () {
        return window.matchMedia("(max-width: 640px)").matches ? '100px' : '50px'
    }

    let $body = $('.brands__body', wrapper);
    let $more = $('.brands__more', wrapper);
    let $shadow = $('.brands__shadow', wrapper);
    let height = $body.height();
    let opened = false;

    $body.css('height', maxHeight());

    $more.click(function () {
        if (window.matchMedia("(max-width: 640px)").matches) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $body.offset().top - 80
            }, 1000);
        }

        if (opened) {
            opened = false;
            $body.css('height', maxHeight());
            $more.html('Показать все');
            $shadow.show();
        } else {
            opened = true;
            $body.css('height', height);
            $more.html('Скрыть');
            $shadow.hide();
        }
    });
});*/

$('.js-categories-slider').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  variableWidth: true,
  swipeToSlide: true,
  touchThreshold: 15
});
WebFont.load({
  custom: {
    families: ['SF UI Text', 'SF UI Display'],
    urls: ['/assets/nemopro/src/fonts/sf/SFUIText.css', '/assets/nemopro/src/fonts/sf/SFUIDisplay.css']
  },
  active: function active() {
    setTimeout(optionsWidth, 0);
  }
});
$('.js-detail-gallery').each(function () {
  var $wrapper = $(this);
  var $thumbs = $('.js-detail-gallery-thumbs', this);
  var $main = $('.js-detail-gallery-main', this);
  var perView = 'auto'; // var perView = Math.ceil(this.offsetWidth / 64);

  var windowPerView = Math.ceil(window.innerWidth / 64); // Product Gallery

  var galleryThumbs = new Swiper($thumbs[0], {
    allowTouchMove: false,
    slidesPerView: perView,
    // freeMode: true,
    // loopedSlides: 0,
    spaceBetween: 5,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    centerInsufficientSlides: true,
    centeredSlides: true,
    centeredSlidesBounds: true
  });
  var galleryTop = new Swiper($main[0], {
    slidesPerView: 1,
    loop: true,
    // loopedSlides: 0, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs,
      autoScrollOffset: 2
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  }); // galleryTop.on('slideChange', function () {
  //     galleryThumbs.slideTo(galleryTop.activeIndex);
  //     // galleryThumbs.update();
  // });

  $('.js-detail-gallery-main', this).on('click', '.swiper-slide', function () {
    $wrapper.addClass('detail-gallery_lightbox');
    galleryTop.update();
    galleryThumbs.update();
    galleryThumbs.params.slidesPerView = windowPerView;
    galleryThumbs.update();
    galleryTop.autoplay.stop();
  });
  $('.js-detail-gallery-button', this).click(function () {
    $wrapper.removeClass('detail-gallery_lightbox');
    galleryTop.update();
    galleryThumbs.update();
    galleryThumbs.params.slidesPerView = perView;
    galleryThumbs.update();
    galleryTop.autoplay.start();
  });
});
$('.js-home-slider').each(function () {
  var $wrapper = $(this);
  var $thumbs = $('.js-home-slider-thumbs', this);
  var $main = $('.js-home-slider-main', this);
  var galleryThumbs = new Swiper($thumbs[0], {
    direction: 'vertical',
    allowTouchMove: false,
    slidesPerView: 3,
    loop: true,
    loopedSlides: 6,
    spaceBetween: 10,
    centeredSlides: true
  });
  var galleryTop = new Swiper($main[0], {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 6,
    //looped slides should be the same
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  });
  galleryTop.on('slideChange', function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
});

function initProductsImageOnDesktop() {
  $(document).on('mouseenter', '.products-image', function () {
    this.classList.add('products-image_hover');
  });
  $(document).on('mouseleave', '.products-image', function () {
    this.classList.remove('products-image_hover');
  });
}

function initProductsImageOnMobile() {
  var hoveredItem = null;
  document.addEventListener('touchstart', function (e) {
    if (hoveredItem && !hoveredItem.contains(e.target)) {
      $(hoveredItem).removeClass('products-image_hover');
      hoveredItem = null;
    }
  });
  $(document).on('touchstart', '.products-image', function () {
    $('.products-image').data('canClick', false);

    if (hoveredItem == this) {
      $(this).data('canClick', true);
    }

    $('.products-image').removeClass('products-image_hover');
    $(this).addClass('products-image_hover');
    hoveredItem = this;
  });
  $(document).on('click', '.products-image', function (e) {
    if (!$(this).data('canClick')) {
      e.preventDefault();
    }
  });
}

if (window.matchMedia("(min-width: 768px)").matches) {
  initProductsImageOnDesktop();
} else {
  initProductsImageOnMobile();
}

function initFeedbackMessageOnDesktop() {
  $('.u-feedback-message').on('mouseenter', function () {
    this.classList.add('u-feedback-message_active');
  });
  $('.u-feedback-message').on('mouseleave', function () {
    this.classList.remove('u-feedback-message_active');
  });
}

function initFeedbackMessageOnMobile() {
  $('.u-feedback-message').on('click', function () {
    var el = this;
    el.classList.add('u-feedback-message_active');

    var outsideClick = function outsideClick(e) {
      var itsChildren = el.contains(e.target);

      if (e.target != el && !itsChildren) {
        el.classList.remove('u-feedback-message_active');
        document.removeEventListener('click', outsideClick);
      }
    };

    document.addEventListener('click', outsideClick);
  });
}

if (window.matchMedia("(min-width: 768px)").matches) {
  initFeedbackMessageOnDesktop();
} else {
  initFeedbackMessageOnMobile();
}