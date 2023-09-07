"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (ie, e) {
  "use strict";

  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat ? function (e) {
      return oe.flat.call(e);
    } : function (e) {
      return oe.concat.apply([], e);
    },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function v(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    y = function y(e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[i.call(e)] || "object" : _typeof(e);
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function ce(e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ce.fn = ce.prototype = {
    jquery: t,
    constructor: ce,
    length: 0,
    toArray: function toArray() {
      return ae.call(this);
    },
    get: function get(e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return ce.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(ce.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(ae.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(ce.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(ce.grep(this, function (e, t) {
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
    push: s,
    sort: oe.sort,
    splice: oe.splice
  }, ce.extend = ce.fn.extend = function () {
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
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ce.extend({
    expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      m(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (c(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    text: function text(e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (!i) while (t = e[r++]) n += ce.text(t);
      return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : se.call(t, e, n);
    },
    isXMLDoc: function isXMLDoc(e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !l.test(t || n && n.nodeName || "HTML");
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: le
  }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function l(e, t) {
        return e === t && (a = !0), 0;
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function P(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      M = function M() {
        V();
      },
      R = J(function (e) {
        return !0 === e.disabled && fe(e, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function apply(e, t) {
          me.apply(e, ae.call(t));
        },
        call: function call(e) {
          me.apply(e, ae.call(arguments, 1));
        }
      };
    }
    function I(t, e, n, r) {
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
      if (!r && (V(e), e = e || T, C)) {
        if (11 !== p && (u = L.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return k.call(n, a), n;
          } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
        } else {
          if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
        }
        if (!(h[t + " "] || d && d.test(t))) {
          if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
            (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function F(e) {
      return e[S] = !0, e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return o = +o, F(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) {
        return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $(function (e) {
        return i.call(e, "*");
      }), le.scope = $(function () {
        return T.querySelectorAll(":scope");
      }), le.cssHas = $(function () {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1;
        } catch (e) {
          return !0;
        }
      }), le.getById ? (b.filter.ID = function (e) {
        var t = e.replace(O, P);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(O, P);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
      }, b.find.CLASS = function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
      }, d = [], $(function (e) {
        var t;
        r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
      }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function l(e, t) {
        if (e === t) return a = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1);
      }), T;
    }
    for (e in I.matches = function (e, t) {
      return I(e, null, null, t);
    }, I.matchesSelector = function (e, t) {
      if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
        var n = i.call(e, t);
        if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        h(t, !0);
      }
      return 0 < I(t, T, null, [e]).length;
    }, I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }, I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }, I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return o = null, e;
    }, ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b = ce.expr = {
      cacheLength: 50,
      createPseudo: F,
      match: D,
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
          return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(O, P).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return fe(e, t);
          };
        },
        CLASS: function CLASS(e) {
          var t = s[e + " "];
          return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = I.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(d, e, t, h, g) {
          var v = "nth" !== d.slice(0, 3),
            y = "last" !== d.slice(-4),
            m = "of-type" === e;
          return 1 === h && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u = v !== y ? "nextSibling" : "previousSibling",
              l = e.parentNode,
              c = m && e.nodeName.toLowerCase(),
              f = !n && !m,
              p = !1;
            if (l) {
              if (v) {
                while (u) {
                  o = e;
                  while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                  s = u = "only" === d && !s && "nextSibling";
                }
                return !0;
              }
              if (s = [y ? l.firstChild : l.lastChild], y && f) {
                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) {
                  i[d] = [E, a, p];
                  break;
                }
              } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
              return (p -= g) === h || p % h == 0 && 0 <= p / h;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: F(function (e) {
          var r = [],
            i = [],
            s = ne(e.replace(ve, "$1"));
          return s[S] ? F(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: F(function (t) {
          return function (e) {
            return 0 < I(t, e).length;
          };
        }),
        contains: F(function (t) {
          return t = t.replace(O, P), function (e) {
            return -1 < (e.textContent || ce.text(e)).indexOf(t);
          };
        }),
        lang: F(function (n) {
          return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) {
            var t;
            do {
              if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = ie.location && ie.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === r;
        },
        focus: function focus(e) {
          return e === function () {
            try {
              return T.activeElement;
            } catch (e) {}
          }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: z(!1),
        disabled: z(!0),
        checked: function checked(e) {
          return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return q.test(e.nodeName);
        },
        input: function input(e) {
          return N.test(e.nodeName);
        },
        button: function button(e) {
          return fe(e, "input") && "button" === e.type || fe(e, "button");
        },
        text: function text(e) {
          var t;
          return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: X(function () {
          return [0];
        }),
        last: X(function (e, t) {
          return [t - 1];
        }),
        eq: X(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: X(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: X(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: X(function (e, t, n) {
          var r;
          for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: X(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(ve, " ")
        }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first ? function (e, t, n) {
        while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o = [E, f];
        if (n) {
          while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
        } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;else {
          if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
          if ((i[l] = o)[2] = a(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function K(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u = [],
          l = [],
          c = t.length,
          f = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          p = !d || !e && h ? f : Z(f, u, d, n, r);
        if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
          i = Z(s, l), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = s.length;
              while (o--) (a = s[o]) && i.push(p[o] = a);
              y(null, s = [], i, r);
            }
            o = s.length;
            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
          }
        } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s);
      });
    }
    function te(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) {
          return e === i;
        }, a, !0), l = J(function (e) {
          return -1 < se.call(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e));
        }
        c.push(t);
      }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), n = t.length;
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = E += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == T || (V(o), n = !C);
              while (s = v[a++]) if (s(o, t || T, n)) {
                k.call(_r, o);
                break;
              }
              i && (E = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(_r));
              f = Z(f);
            }
            k.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(_r);
          }
          return i && (E = h, w = p), c;
        }, m ? F(r) : r))).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
            break;
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n;
    }
    G.prototype = b.filters = b.pseudos, b.setFilters = new G(), le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
    }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort;
  }();
  var d = function d(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && ce(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    h = function h(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n) ? ce.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? ce.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? ce.grep(e, function (e) {
      return -1 < se.call(n, e) !== r;
    }) : ce.filter(n, e, r);
  }
  ce.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ce.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
        for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
      return 1 < r ? ce.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(T(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(T(this, e || [], !0));
    },
    is: function is(e) {
      return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
    }
  });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function has(e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ce.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return d(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return d(e, "parentNode", n);
    },
    next: function next(e) {
      return A(e, "nextSibling");
    },
    prev: function prev(e) {
      return A(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return d(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return d(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return d(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return d(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return h((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return h(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
    }
  }, function (r, i) {
    ce.fn[r] = function (e, t) {
      var n = ce.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ce.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
      n[t] = !0;
    }), n) : ce.extend({}, r);
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
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            ce.each(e, function (e, t) {
              v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return ce.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function has(e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
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
  }, ce.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]],
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
            return ce.Deferred(function (r) {
              ce.each(o, function (e, t) {
                var n = v(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
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
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
              };
            }
            return ce.Deferred(function (e) {
              o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? ce.extend(e, a) : a;
          }
        },
        s = {};
      return ce.each(o, function (e, t) {
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
        i = ae.call(arguments),
        o = ce.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
      while (t--) L(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function (e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, ce.readyException = function (e) {
    ie.setTimeout(function () {
      throw e;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function (e) {
    return O.then(e)["catch"](function (e) {
      ce.readyException(e);
    }), this;
  }, ce.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
    }
  }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function M(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(ce(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function $(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[F(t)] = n;else for (r in t) i[F(r)] = t[r];
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !ce.isEmptyObject(t);
    }
  };
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      z.set(e, t, n);
    } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function hasData(e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function data(e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      z.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      _.remove(e, t);
    }
  }), ce.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
          _.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        z.set(this, n);
      }) : M(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
        this.each(function () {
          z.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        z.remove(this, e);
      });
    }
  }), ce.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = ce.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = ce._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        ce.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return _.get(e, n) || _.access(e, n, {
        empty: ce.Callbacks("once memory").add(function () {
          _.remove(e, [t + "queue", n]);
        })
      });
    }
  }), ce.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = ce.queue(this, t, n);
        ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        ce.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = ce.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function K(e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0
    };
  J.getRootNode && (K = function K(e) {
    return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
  });
  var ee = function ee(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display");
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return ce.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, ce.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function show() {
      return re(this, !0);
    },
    hide: function hide() {
      return re(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? ce(this).show() : ce(this).hide();
      });
    }
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function Se(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);else if (je.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o);else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
      c = 0;
      while (o = a[c++]) Ce.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return ce().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
      ce.event.add(this, t, i, r, n);
    });
  }
  function He(e, r, t) {
    t ? (_.set(e, r, !1), ce.event.add(e, r, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n = _.get(this, r);
        if (1 & e.isTrigger && this[r]) {
          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
        } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne);
      }
    })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  ce.event = {
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
        v = _.get(t);
      if ($(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(D) || [""]).length;
        while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0);
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
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
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
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = ce.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
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
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e) ? function () {
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
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ce.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ce.Event = function (e, t) {
    if (!(this instanceof ce.Event)) return new ce.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0;
  }, ce.Event.prototype = {
    constructor: ce.Event,
    isDefaultPrevented: qe,
    isPropagationStopped: qe,
    isImmediatePropagationStopped: qe,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ce.each({
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
  }, ce.event.addProp), ce.each({
    focus: "focusin",
    blur: "focusout"
  }, function (r, i) {
    function o(e) {
      if (C.documentMode) {
        var t = _.get(this, "handle"),
          n = ce.event.fix(e);
        n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n);
      } else ce.event.simulate(i, e.target, ce.event.fix(e));
    }
    ce.event.special[r] = {
      setup: function setup() {
        var e;
        if (He(this, r, !0), !C.documentMode) return !1;
        (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
      },
      trigger: function trigger() {
        return He(this, r), !0;
      },
      teardown: function teardown() {
        var e;
        if (!C.documentMode) return !1;
        (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
      },
      _default: function _default(e) {
        return _.get(e.target, r);
      },
      delegateType: i
    }, ce.event.special[i] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i);
        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i) - 1;
        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
      }
    };
  }), ce.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    ce.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), ce.fn.extend({
    on: function on(e, t, n, r) {
      return Le(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Le(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
        ce.event.remove(this, e, n, t);
      });
    }
  });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e;
  }
  function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
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
      h = v(d);
    if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
    });
    if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
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
        f = K(e);
      if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
        if (t = n[_.expando]) {
          if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
          n[_.expando] = void 0;
        }
        n[z.expando] && (n[z.expando] = void 0);
      }
    }
  }), ce.fn.extend({
    detach: function detach(e) {
      return Be(this, e, !0);
    },
    remove: function remove(e) {
      return Be(this, e);
    },
    text: function text(e) {
      return M(this, function (e) {
        return void 0 === e ? ce.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return $e(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return $e(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Re(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ce.clone(this, e, t);
      });
    },
    html: function html(e) {
      return M(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ce.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return $e(this, arguments, function (e) {
        var t = this.parentNode;
        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    ce.fn[e] = function (e) {
      for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function Xe(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = ie), t.getComputedStyle(e);
    },
    Ue = function Ue(e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Ye(e, t) {
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
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null;
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
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
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
        return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a;
      }
    }));
  }();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return t || (e in Je ? e : Ke[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;
      while (n--) if ((e = Qe[n] + t) in Je) return e;
    }(e) || e);
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l;
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
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
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ce.each(["height", "width"], function (e, u) {
    ce.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () {
          return ot(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Xe(e),
          o = !le.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
          s = n ? it(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s);
      }
    };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    ce.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (ce.cssHooks[i + o].set = rt);
  }), ce.fn.extend({
    css: function css(e, t) {
      return M(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((ce.Tween = at).prototype = {
    constructor: at,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
        n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ce.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function u() {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {
          specialEasing: {},
          easing: ce.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, Y.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      v(e) ? (t = e, e = ["*"]) : e = e.match(D);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t);
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
        g = e.nodeType && ee(e),
        v = _.get(e, "fxshow");
      for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ft.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = v && v[r] || ce.style(e, r);
      }
      if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
        for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]);
      })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function prefilter(e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    }
  }), ce.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? ce.extend({}, e) : {
      complete: n || !n && t || v(e) && e,
      duration: e,
      easing: n && t || t && !v(t) && t
    };
    return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
    }, r;
  }, ce.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = ce.isEmptyObject(t),
        o = ce.speed(e, n, r),
        a = function a() {
          var e = yt(this, ce.extend({}, t), o);
          (i || _.get(this, "finish")) && e.stop(!0);
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
          n = ce.timers,
          r = _.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || ce.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = _.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = ce.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), ce.each(["toggle", "show", "hide"], function (e, r) {
    var i = ce.fn[r];
    ce.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
    };
  }), ce.each({
    slideDown: gt("show"),
    slideUp: gt("hide"),
    slideToggle: gt("toggle"),
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
    ce.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), ce.timers = [], ce.fx.tick = function () {
    var e,
      t = 0,
      n = ce.timers;
    for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function (e) {
    ce.timers.push(e), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function () {
    ut || (ut = !0, dt());
  }, ce.fx.stop = function () {
    ut = null;
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fn.delay = function (r, e) {
    return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = ie.setTimeout(e, r);
      t.stop = function () {
        ie.clearTimeout(n);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function attr(e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    }
  }), ce.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!le.radioValue && "radio" === t && fe(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(D);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), mt = {
    set: function set(e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = xt[t] || ce.find.attr;
    xt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [];
  }
  ce.fn.extend({
    prop: function prop(e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    }
  }), ce.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), le.optSelected || (ce.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({
    addClass: function addClass(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).addClass(t.call(this, e, Ct(this)));
      }) : (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function removeClass(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).removeClass(t.call(this, e, Ct(this)));
      }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function toggleClass(t, n) {
      var e,
        r,
        i,
        o,
        a = _typeof(t),
        s = "string" === a || Array.isArray(t);
      return v(t) ? this.each(function (e) {
        ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
        if (s) for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
      }));
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var St = /\r/g;
  ce.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = v(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0;
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : Tt(ce.text(e));
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
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
            if (t = ce(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = ce.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ce.each(["radio", "checkbox"], function () {
    ce.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t);
      }
    }, le.checkOn || (ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Et = ie.location,
    jt = {
      guid: Date.now()
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function Nt(e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ce.event.trigger(r, null, t);
    }
  }), ce.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        ce.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return ce.event.trigger(e, t, n, !0);
    }
  });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) ce.each(e, function (e, t) {
      r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== x(e)) i(n, e);else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  ce.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }, ce.fn.extend({
    serialize: function serialize() {
      return ce.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
      }).map(function (e, t) {
        var n = ce(this).val();
        return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        };
      }).get();
    }
  });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return s[e] = !0, ce.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  Xt.href = Et.href, ce.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zt,
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
        "text xml": ce.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
    },
    ajaxPrefilter: Ut(Bt),
    ajaxTransport: Ut(_t),
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
        v = ce.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
        x = ce.Deferred(),
        b = ce.Callbacks("once memory"),
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
                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
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
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
        r = C.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
      for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
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
        h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
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
        }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
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
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return ce.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return ce.get(e, void 0, t, "script");
    }
  }), ce.each(["get", "post"], function (e, i) {
    ce[i] = function (e, t, n, r) {
      return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, ce.isPlainObject(e) && e));
    };
  }), ce.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), ce._evalUrl = function (e, t, n) {
    return ce.ajax({
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
        ce.globalEval(e, t, n);
      }
    });
  }, ce.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return v(n) ? this.each(function (e) {
        ce(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = ce(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = v(t);
      return this.each(function (e) {
        ce(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        ce(this).replaceWith(this.childNodes);
      }), this;
    }
  }), ce.expr.pseudos.hidden = function (e) {
    return !ce.expr.pseudos.visible(e);
  }, ce.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ce.ajaxSettings.xhr = function () {
    try {
      return new ie.XMLHttpRequest();
    } catch (e) {}
  };
  var Yt = {
      0: 200,
      1223: 204
    },
    Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
    var _o, a;
    if (le.cors || Qt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && ie.setTimeout(function () {
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
  }), ce.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ce.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return ce.globalEval(e), e;
      }
    }
  }), ce.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), ce.ajaxTransport("script", function (n) {
    var r, _i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = ce("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), C.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return this[e] = !0, e;
    }
  }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || ce.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
    var r, i, o;
  }, ce.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && ce.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function (t) {
    return ce.grep(ce.timers, function (e) {
      return t === e.elem;
    }).length;
  }, ce.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = ce.css(e, "position"),
        c = ce(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, ce.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ce.offset.setOffset(this, t, e);
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
        if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - ce.css(r, "marginTop", !0),
          left: t.left - i.left - ce.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
        return e || J;
      });
    }
  }), ce.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    ce.fn[t] = function (e) {
      return M(this, function (e, t, n) {
        var r;
        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), ce.each(["top", "left"], function (e, n) {
    ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
      if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t;
    });
  }), ce.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    ce.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      ce.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return M(this, function (e, t, n) {
          var r;
          return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ce.fn.extend({
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
      return this.on("mouseenter", e).on("mouseleave", t || e);
    }
  }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(ae.call(arguments)));
    }).guid = e.guid = e.guid || ce.guid++, i;
  }, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce;
  });
  var tn = ie.jQuery,
    nn = ie.$;
  return ce.noConflict = function (e) {
    return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Swiper 10.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 17, 2023
 */

var Swiper = function () {
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
  function n(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function l() {
    return Date.now();
  }
  function o(e, t) {
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
  function d(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function c() {
    var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (var _a = 1; _a < arguments.length; _a += 1) {
      var _i = _a < 0 || arguments.length <= _a ? void 0 : arguments[_a];
      if (null != _i && (s = _i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
        var _s = Object.keys(Object(_i)).filter(function (e) {
          return t.indexOf(e) < 0;
        });
        for (var _t = 0, _a2 = _s.length; _t < _a2; _t += 1) {
          var _a3 = _s[_t],
            _r = Object.getOwnPropertyDescriptor(_i, _a3);
          void 0 !== _r && _r.enumerable && (d(e[_a3]) && d(_i[_a3]) ? _i[_a3].__swiper__ ? e[_a3] = _i[_a3] : c(e[_a3], _i[_a3]) : !d(e[_a3]) && d(_i[_a3]) ? (e[_a3] = {}, _i[_a3].__swiper__ ? e[_a3] = _i[_a3] : c(e[_a3], _i[_a3])) : e[_a3] = _i[_a3]);
        }
      }
    }
    var s;
    return e;
  }
  function p(e, t, s) {
    e.style.setProperty(t, s);
  }
  function u(e) {
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
  function m(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
  }
  function h(e, t) {
    return void 0 === t && (t = ""), _toConsumableArray(e.children).filter(function (e) {
      return e.matches(t);
    });
  }
  function f(e, t) {
    var _s$classList;
    void 0 === t && (t = []);
    var s = document.createElement(e);
    return (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(Array.isArray(t) ? t : [t])), s;
  }
  function g(e) {
    var t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return {
      top: i.top + d - l,
      left: i.left + c - o
    };
  }
  function v(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function w(e) {
    var t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function b(e, t) {
    var s = [];
    var a = e.parentElement;
    for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
    return s;
  }
  function y(e, t) {
    t && e.addEventListener("transitionend", function s(a) {
      a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s));
    });
  }
  function E(e, t, s) {
    var a = r();
    return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
  }
  var x, S, T;
  function M() {
    return x || (x = function () {
      var e = r(),
        t = a();
      return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      };
    }()), x;
  }
  function C(e) {
    return void 0 === e && (e = {}), S || (S = function (e) {
      var _ref = void 0 === e ? {} : e,
        t = _ref.userAgent;
      var s = M(),
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
        m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        h = "Win32" === i;
      var f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(d)) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l;
    }(e)), S;
  }
  function P() {
    return T || (T = function () {
      var e = r();
      var t = !1;
      function s() {
        var t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
      }
      if (s()) {
        var _s2 = String(e.navigator.userAgent);
        if (_s2.includes("Version/")) {
          var _s2$split$1$split$0$s = _s2.split("Version/")[1].split(" ")[0].split(".").map(function (e) {
              return Number(e);
            }),
            _s2$split$1$split$0$s2 = _slicedToArray(_s2$split$1$split$0$s, 2),
            _e = _s2$split$1$split$0$s2[0],
            _a4 = _s2$split$1$split$0$s2[1];
          t = _e < 16 || 16 === _e && _a4 < 2;
        }
      }
      return {
        isSafari: t || s(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), T;
  }
  var L = {
    on: function on(e, t, s) {
      var a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      var i = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once: function once(e, t, s) {
      var a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        t.apply(a, r);
      }
      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      var a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (a, i) {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      var t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
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
  var z = function z(e, t) {
      if (!e || e.destroyed || !e.params) return;
      var s = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
      if (s) {
        var _t2 = s.querySelector(".".concat(e.params.lazyPreloaderClass));
        !_t2 && e.isElement && (_t2 = s.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass))), _t2 && _t2.remove();
      }
    },
    A = function A(e, t) {
      if (!e.slides[t]) return;
      var s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    $ = function $(e) {
      if (!e || e.destroyed || !e.params) return;
      var t = e.params.lazyPreloadPrevNext;
      var s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      var a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        var _s3 = i,
          _r2 = [_s3 - t];
        return _r2.push.apply(_r2, _toConsumableArray(Array.from({
          length: t
        }).map(function (e, t) {
          return _s3 + a + t;
        }))), void e.slides.forEach(function (t, s) {
          _r2.includes(t.column) && A(e, s);
        });
      }
      var r = i + a - 1;
      if (e.params.rewind || e.params.loop) for (var _a5 = i - t; _a5 <= r + t; _a5 += 1) {
        var _t3 = (_a5 % s + s) % s;
        (_t3 < i || _t3 > r) && A(e, _t3);
      } else for (var _a6 = Math.max(i - t, 0); _a6 <= Math.min(r + t, s - 1); _a6 += 1) _a6 !== i && (_a6 > r || _a6 < i) && A(e, _a6);
    };
  var I = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var a = e.el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(v(a, "padding-left") || 0, 10) - parseInt(v(a, "padding-right") || 0, 10), s = s - parseInt(v(a, "padding-top") || 0, 10) - parseInt(v(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
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
        i = e.wrapperEl,
        r = e.slidesEl,
        n = e.size,
        l = e.rtlTranslate,
        o = e.wrongRTL,
        d = e.virtual && a.virtual.enabled,
        c = d ? e.virtual.slides.length : e.slides.length,
        u = h(r, ".".concat(e.params.slideClass, ", swiper-slide")),
        m = d ? e.virtual.slides.length : u.length;
      var f = [];
      var g = [],
        w = [];
      var b = a.slidesOffsetBefore;
      "function" == typeof b && (b = a.slidesOffsetBefore.call(e));
      var y = a.slidesOffsetAfter;
      "function" == typeof y && (y = a.slidesOffsetAfter.call(e));
      var x = e.snapGrid.length,
        S = e.slidesGrid.length;
      var T = a.spaceBetween,
        M = -b,
        C = 0,
        P = 0;
      if (void 0 === n) return;
      "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * n : "string" == typeof T && (T = parseFloat(T)), e.virtualSize = -T, u.forEach(function (e) {
        l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
      }), a.centeredSlides && a.cssMode && (p(i, "--swiper-centered-offset-before", ""), p(i, "--swiper-centered-offset-after", ""));
      var L = a.grid && a.grid.rows > 1 && e.grid;
      var z;
      L && e.grid.initSlides(m);
      var A = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
        return void 0 !== a.breakpoints[e].slidesPerView;
      }).length > 0;
      for (var _i2 = 0; _i2 < m; _i2 += 1) {
        var _r3 = void 0;
        if (z = 0, u[_i2] && (_r3 = u[_i2]), L && e.grid.updateSlide(_i2, _r3, m, t), !u[_i2] || "none" !== v(_r3, "display")) {
          if ("auto" === a.slidesPerView) {
            A && (u[_i2].style[t("width")] = "");
            var _n = getComputedStyle(_r3),
              _l = _r3.style.transform,
              _o = _r3.style.webkitTransform;
            if (_l && (_r3.style.transform = "none"), _o && (_r3.style.webkitTransform = "none"), a.roundLengths) z = e.isHorizontal() ? E(_r3, "width", !0) : E(_r3, "height", !0);else {
              var _e2 = s(_n, "width"),
                _t4 = s(_n, "padding-left"),
                _a7 = s(_n, "padding-right"),
                _i3 = s(_n, "margin-left"),
                _l2 = s(_n, "margin-right"),
                _o2 = _n.getPropertyValue("box-sizing");
              if (_o2 && "border-box" === _o2) z = _e2 + _i3 + _l2;else {
                var _r4 = _r3,
                  _s4 = _r4.clientWidth,
                  _n2 = _r4.offsetWidth;
                z = _e2 + _t4 + _a7 + _i3 + _l2 + (_n2 - _s4);
              }
            }
            _l && (_r3.style.transform = _l), _o && (_r3.style.webkitTransform = _o), a.roundLengths && (z = Math.floor(z));
          } else z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView, a.roundLengths && (z = Math.floor(z)), u[_i2] && (u[_i2].style[t("width")] = "".concat(z, "px"));
          u[_i2] && (u[_i2].swiperSlideSize = z), w.push(z), a.centeredSlides ? (M = M + z / 2 + C / 2 + T, 0 === C && 0 !== _i2 && (M = M - n / 2 - T), 0 === _i2 && (M = M - n / 2 - T), Math.abs(M) < .001 && (M = 0), a.roundLengths && (M = Math.floor(M)), P % a.slidesPerGroup == 0 && f.push(M), g.push(M)) : (a.roundLengths && (M = Math.floor(M)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && f.push(M), g.push(M), M = M + z + T), e.virtualSize += z + T, C = z, P += 1;
        }
      }
      if (e.virtualSize = Math.max(e.virtualSize, n) + y, l && o && ("slide" === a.effect || "coverflow" === a.effect) && (i.style.width = "".concat(e.virtualSize + T, "px")), a.setWrapperSize && (i.style[t("width")] = "".concat(e.virtualSize + T, "px")), L && e.grid.updateWrapperSize(z, f, t), !a.centeredSlides) {
        var _t5 = [];
        for (var _s5 = 0; _s5 < f.length; _s5 += 1) {
          var _i4 = f[_s5];
          a.roundLengths && (_i4 = Math.floor(_i4)), f[_s5] <= e.virtualSize - n && _t5.push(_i4);
        }
        f = _t5, Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - n);
      }
      if (d && a.loop) {
        var _t6 = w[0] + T;
        if (a.slidesPerGroup > 1) {
          var _s6 = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / a.slidesPerGroup),
            _i5 = _t6 * a.slidesPerGroup;
          for (var _e3 = 0; _e3 < _s6; _e3 += 1) f.push(f[f.length - 1] + _i5);
        }
        for (var _s7 = 0; _s7 < e.virtual.slidesBefore + e.virtual.slidesAfter; _s7 += 1) 1 === a.slidesPerGroup && f.push(f[f.length - 1] + _t6), g.push(g[g.length - 1] + _t6), e.virtualSize += _t6;
      }
      if (0 === f.length && (f = [0]), 0 !== T) {
        var _s8 = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        u.filter(function (e, t) {
          return !(a.cssMode && !a.loop) || t !== u.length - 1;
        }).forEach(function (e) {
          e.style[_s8] = "".concat(T, "px");
        });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        var _e4 = 0;
        w.forEach(function (t) {
          _e4 += t + (T || 0);
        }), _e4 -= T;
        var _t7 = _e4 - n;
        f = f.map(function (e) {
          return e <= 0 ? -b : e > _t7 ? _t7 + y : e;
        });
      }
      if (a.centerInsufficientSlides) {
        var _e5 = 0;
        if (w.forEach(function (t) {
          _e5 += t + (T || 0);
        }), _e5 -= T, _e5 < n) {
          var _t8 = (n - _e5) / 2;
          f.forEach(function (e, s) {
            f[s] = e - _t8;
          }), g.forEach(function (e, s) {
            g[s] = e + _t8;
          });
        }
      }
      if (Object.assign(e, {
        slides: u,
        snapGrid: f,
        slidesGrid: g,
        slidesSizesGrid: w
      }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
        p(i, "--swiper-centered-offset-before", -f[0] + "px"), p(i, "--swiper-centered-offset-after", e.size / 2 - w[w.length - 1] / 2 + "px");
        var _t9 = -e.snapGrid[0],
          _s9 = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(function (e) {
          return e + _t9;
        }), e.slidesGrid = e.slidesGrid.map(function (e) {
          return e + _s9;
        });
      }
      if (m !== c && e.emit("slidesLengthChange"), f.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== S && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(d || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
        var _t10 = "".concat(a.containerModifierClass, "backface-hidden"),
          _s10 = e.el.classList.contains(_t10);
        m <= a.maxBackfaceHiddenSlides ? _s10 || e.el.classList.add(_t10) : _s10 && e.el.classList.remove(_t10);
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
        return a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
      };
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach(function (e) {
          s.push(e);
        });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          var _e6 = t.activeIndex + i;
          if (_e6 > t.slides.length && !a) break;
          s.push(n(_e6));
        }
      } else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
        var _e7 = s[i].offsetHeight;
        r = _e7 > r ? _e7 : r;
      }
      (r || 0 === r) && (t.wrapperEl.style.height = "".concat(r, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
        t = e.slides,
        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
      for (var _a8 = 0; _a8 < t.length; _a8 += 1) t[_a8].swiperSlideOffset = (e.isHorizontal() ? t[_a8].offsetLeft : t[_a8].offsetTop) - s - e.cssOverflowAdjustment();
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
      i && (n = e), a.forEach(function (e) {
        e.classList.remove(s.slideVisibleClass);
      }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
      var l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
      for (var _e8 = 0; _e8 < a.length; _e8 += 1) {
        var _o3 = a[_e8];
        var _d = _o3.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (_d -= a[0].swiperSlideOffset);
        var _c = (n + (s.centeredSlides ? t.minTranslate() : 0) - _d) / (_o3.swiperSlideSize + l),
          _p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - _d) / (_o3.swiperSlideSize + l),
          _u = -(n - _d),
          _m = _u + t.slidesSizesGrid[_e8];
        (_u >= 0 && _u < t.size - 1 || _m > 1 && _m <= t.size || _u <= 0 && _m >= t.size) && (t.visibleSlides.push(_o3), t.visibleSlidesIndexes.push(_e8), a[_e8].classList.add(s.slideVisibleClass)), _o3.progress = i ? -_c : _c, _o3.originalProgress = i ? -_p : _p;
      }
    },
    updateProgress: function updateProgress(e) {
      var t = this;
      if (void 0 === e) {
        var _s11 = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * _s11 || 0;
      }
      var s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      var i = t.progress,
        r = t.isBeginning,
        n = t.isEnd,
        l = t.progressLoop;
      var o = r,
        d = n;
      if (0 === a) i = 0, r = !0, n = !0;else {
        i = (e - t.minTranslate()) / a;
        var _s12 = Math.abs(e - t.minTranslate()) < 1,
          _l3 = Math.abs(e - t.maxTranslate()) < 1;
        r = _s12 || i <= 0, n = _l3 || i >= 1, _s12 && (i = 0), _l3 && (i = 1);
      }
      if (s.loop) {
        var _s13 = t.getSlideIndexByData(0),
          _a9 = t.getSlideIndexByData(t.slides.length - 1),
          _i6 = t.slidesGrid[_s13],
          _r5 = t.slidesGrid[_a9],
          _n3 = t.slidesGrid[t.slidesGrid.length - 1],
          _o4 = Math.abs(e);
        l = _o4 >= _i6 ? (_o4 - _i6) / _n3 : (_o4 + _n3 - _r5) / _n3, l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
        t = e.slides,
        s = e.params,
        a = e.slidesEl,
        i = e.activeIndex,
        r = e.virtual && s.virtual.enabled,
        n = function n(e) {
          return h(a, ".".concat(s.slideClass).concat(e, ", swiper-slide").concat(e))[0];
        };
      var l;
      if (t.forEach(function (e) {
        e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
      }), r) {
        if (s.loop) {
          var _t11 = i - e.virtual.slidesBefore;
          _t11 < 0 && (_t11 = e.virtual.slides.length + _t11), _t11 >= e.virtual.slides.length && (_t11 -= e.virtual.slides.length), l = n("[data-swiper-slide-index=\"".concat(_t11, "\"]"));
        } else l = n("[data-swiper-slide-index=\"".concat(i, "\"]"));
      } else l = t[i];
      if (l) {
        l.classList.add(s.slideActiveClass);
        var _e9 = function (e, t) {
          var s = [];
          for (; e.nextElementSibling;) {
            var _a10 = e.nextElementSibling;
            t ? _a10.matches(t) && s.push(_a10) : s.push(_a10), e = _a10;
          }
          return s;
        }(l, ".".concat(s.slideClass, ", swiper-slide"))[0];
        s.loop && !_e9 && (_e9 = t[0]), _e9 && _e9.classList.add(s.slideNextClass);
        var _a11 = function (e, t) {
          var s = [];
          for (; e.previousElementSibling;) {
            var _a12 = e.previousElementSibling;
            t ? _a12.matches(t) && s.push(_a12) : s.push(_a12), e = _a12;
          }
          return s;
        }(l, ".".concat(s.slideClass, ", swiper-slide"))[0];
        s.loop && 0 === !_a11 && (_a11 = t[t.length - 1]), _a11 && _a11.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        a = t.snapGrid,
        i = t.params,
        r = t.activeIndex,
        n = t.realIndex,
        l = t.snapIndex;
      var o,
        d = e;
      var c = function c(e) {
        var s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
      };
      if (void 0 === d && (d = function (e) {
        var t = e.slidesGrid,
          s = e.params,
          a = e.rtlTranslate ? e.translate : -e.translate;
        var i;
        for (var _e10 = 0; _e10 < t.length; _e10 += 1) void 0 !== t[_e10 + 1] ? a >= t[_e10] && a < t[_e10 + 1] - (t[_e10 + 1] - t[_e10]) / 2 ? i = _e10 : a >= t[_e10] && a < t[_e10 + 1] && (i = _e10 + 1) : a >= t[_e10] && (i = _e10);
        return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i;
      }(t)), a.indexOf(s) >= 0) o = a.indexOf(s);else {
        var _e11 = Math.min(i.slidesPerGroupSkip, d);
        o = _e11 + Math.floor((d - _e11) / i.slidesPerGroup);
      }
      if (o >= a.length && (o = a.length - 1), d === r) return o !== l && (t.snapIndex = o, t.emit("snapIndexChange")), void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d)));
      var p;
      p = t.virtual && i.virtual.enabled && i.loop ? c(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: n,
        realIndex: p,
        previousIndex: r,
        activeIndex: d
      }), t.initialized && $(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), n !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
        s = t.params,
        a = e.closest(".".concat(s.slideClass, ", swiper-slide"));
      var i,
        r = !1;
      if (a) for (var _e12 = 0; _e12 < t.slides.length; _e12 += 1) if (t.slides[_e12] === a) {
        r = !0, i = _e12;
        break;
      }
      if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var k = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        s = this.rtlTranslate,
        a = this.translate,
        i = this.wrapperEl;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      var r = o(i, e);
      return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
        a = s.rtlTranslate,
        i = s.params,
        r = s.wrapperEl,
        n = s.progress;
      var l,
        o = 0,
        d = 0;
      s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = "translate3d(".concat(o, "px, ").concat(d, "px, 0px)"));
      var c = s.maxTranslate() - s.minTranslate();
      l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
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
        var _e13 = r.isHorizontal();
        if (0 === t) l[_e13 ? "scrollLeft" : "scrollTop"] = -c;else {
          var _l$scrollTo;
          if (!r.support.smoothScroll) return u({
            swiper: r,
            targetPosition: -c,
            side: _e13 ? "left" : "top"
          }), !0;
          l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e13 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
        }
        return !0;
      }
      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
      }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
    }
  };
  function O(e) {
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
  var D = {
    slideTo: function slideTo(e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
      var r = this;
      var n = e;
      n < 0 && (n = 0);
      var l = r.params,
        o = r.snapGrid,
        d = r.slidesGrid,
        c = r.previousIndex,
        p = r.activeIndex,
        m = r.rtlTranslate,
        h = r.wrapperEl,
        f = r.enabled;
      if (r.animating && l.preventInteractionOnTransition || !f && !a && !i) return !1;
      var g = Math.min(r.params.slidesPerGroupSkip, n);
      var v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      var w = -o[v];
      if (l.normalizeSlideIndex) for (var _e14 = 0; _e14 < d.length; _e14 += 1) {
        var _t12 = -Math.floor(100 * w),
          _s14 = Math.floor(100 * d[_e14]),
          _a13 = Math.floor(100 * d[_e14 + 1]);
        void 0 !== d[_e14 + 1] ? _t12 >= _s14 && _t12 < _a13 - (_a13 - _s14) / 2 ? n = _e14 : _t12 >= _s14 && _t12 < _a13 && (n = _e14 + 1) : _t12 >= _s14 && (n = _e14);
      }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && (m ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
      }
      var b;
      if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset", m && -w === r.translate || !m && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
      if (l.cssMode) {
        var _e15 = r.isHorizontal(),
          _s15 = m ? w : -w;
        if (0 === t) {
          var _t13 = r.virtual && r.params.virtual.enabled;
          _t13 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), _t13 && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(function () {
            h[_e15 ? "scrollLeft" : "scrollTop"] = _s15;
          })) : h[_e15 ? "scrollLeft" : "scrollTop"] = _s15, _t13 && requestAnimationFrame(function () {
            r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
          });
        } else {
          var _h$scrollTo;
          if (!r.support.smoothScroll) return u({
            swiper: r,
            targetPosition: _s15,
            side: _e15 ? "left" : "top"
          }), !0;
          h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e15 ? "left" : "top", _s15), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
        }
        return !0;
      }
      return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function slideToLoop(e, t, s, a) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
        e = parseInt(e, 10);
      }
      var i = this;
      var r = e;
      return i.params.loop && (i.virtual && i.params.virtual.enabled ? r += i.virtual.slidesBefore : r = i.getSlideIndexByData(r)), i.slideTo(r, t, s, a);
    },
    slideNext: function slideNext(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
        i = a.enabled,
        r = a.params,
        n = a.animating;
      if (!i) return a;
      var l = r.slidesPerGroup;
      "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      var o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        a.loopFix({
          direction: "next"
        }), a._clientLeft = a.wrapperEl.clientLeft;
      }
      return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function slidePrev(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var a = this,
        i = a.params,
        r = a.snapGrid,
        n = a.slidesGrid,
        l = a.rtlTranslate,
        o = a.enabled,
        d = a.animating;
      if (!o) return a;
      var c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        a.loopFix({
          direction: "prev"
        }), a._clientLeft = a.wrapperEl.clientLeft;
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var u = p(l ? a.translate : -a.translate),
        m = r.map(function (e) {
          return p(e);
        });
      var h = r[m.indexOf(u) - 1];
      if (void 0 === h && i.cssMode) {
        var _e16;
        r.forEach(function (t, s) {
          u >= t && (_e16 = s);
        }), void 0 !== _e16 && (h = r[_e16 > 0 ? _e16 - 1 : _e16]);
      }
      var f = 0;
      if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) {
        var _i7 = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(_i7, e, t, s);
      }
      return a.slideTo(f, e, t, s);
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
        var _e17 = i.snapGrid[l];
        o - _e17 > (i.snapGrid[l + 1] - _e17) * a && (r += i.params.slidesPerGroup);
      } else {
        var _e18 = i.snapGrid[l - 1];
        o - _e18 <= (i.snapGrid[l] - _e18) * a && (r -= i.params.slidesPerGroup);
      }
      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
        t = e.params,
        s = e.slidesEl,
        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var i,
        r = e.clickedIndex;
      var l = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
      if (t.loop) {
        if (e.animating) return;
        i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(h(s, "".concat(l, "[data-swiper-slide-index=\"").concat(i, "\"]"))[0]), n(function () {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(h(s, "".concat(l, "[data-swiper-slide-index=\"").concat(i, "\"]"))[0]), n(function () {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var G = {
    loopCreate: function loopCreate(e) {
      var t = this,
        s = t.params,
        a = t.slidesEl;
      if (!s.loop || t.virtual && t.params.virtual.enabled) return;
      h(a, ".".concat(s.slideClass, ", swiper-slide")).forEach(function (e, t) {
        e.setAttribute("data-swiper-slide-index", t);
      }), t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
      });
    },
    loopFix: function loopFix(e) {
      var _ref2 = void 0 === e ? {} : e,
        t = _ref2.slideRealIndex,
        _ref2$slideTo = _ref2.slideTo,
        s = _ref2$slideTo === void 0 ? !0 : _ref2$slideTo,
        a = _ref2.direction,
        i = _ref2.setTranslate,
        r = _ref2.activeSlideIndex,
        n = _ref2.byController,
        l = _ref2.byMousewheel;
      var o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      var d = o.slides,
        c = o.allowSlidePrev,
        p = o.allowSlideNext,
        u = o.slidesEl,
        m = o.params;
      if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
      var h = "auto" === m.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10));
      var f = m.loopedSlides || h;
      f % m.slidesPerGroup != 0 && (f += m.slidesPerGroup - f % m.slidesPerGroup), o.loopedSlides = f;
      var g = [],
        v = [];
      var w = o.activeIndex;
      void 0 === r ? r = o.getSlideIndex(o.slides.filter(function (e) {
        return e.classList.contains(m.slideActiveClass);
      })[0]) : w = r;
      var b = "next" === a || !a,
        y = "prev" === a || !a;
      var E = 0,
        x = 0;
      if (r < f) {
        E = Math.max(f - r, m.slidesPerGroup);
        for (var _e19 = 0; _e19 < f - r; _e19 += 1) {
          var _t14 = _e19 - Math.floor(_e19 / d.length) * d.length;
          g.push(d.length - _t14 - 1);
        }
      } else if (r > o.slides.length - 2 * f) {
        x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
        for (var _e20 = 0; _e20 < x; _e20 += 1) {
          var _t15 = _e20 - Math.floor(_e20 / d.length) * d.length;
          v.push(_t15);
        }
      }
      if (y && g.forEach(function (e) {
        o.slides[e].swiperLoopMoveDOM = !0, u.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1;
      }), b && v.forEach(function (e) {
        o.slides[e].swiperLoopMoveDOM = !0, u.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1;
      }), o.recalcSlides(), "auto" === m.slidesPerView && o.updateSlides(), m.watchSlidesProgress && o.updateSlidesOffset(), s) if (g.length > 0 && y) {
        if (void 0 === t) {
          var _e21 = o.slidesGrid[w],
            _t16 = o.slidesGrid[w + E] - _e21;
          l ? o.setTranslate(o.translate - _t16) : (o.slideTo(w + E, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += _t16, o.touchEventsData.currentTranslate = o.translate));
        } else i && (o.slideToLoop(t, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate);
      } else if (v.length > 0 && b) if (void 0 === t) {
        var _e22 = o.slidesGrid[w],
          _t17 = o.slidesGrid[w - x] - _e22;
        l ? o.setTranslate(o.translate - _t17) : (o.slideTo(w - x, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += _t17, o.touchEventsData.currentTranslate = o.translate));
      } else o.slideToLoop(t, 0, !1, !0);
      if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
        var _e23 = {
          slideRealIndex: t,
          direction: a,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(function (t) {
          !t.destroyed && t.params.loop && t.loopFix(_objectSpread(_objectSpread({}, _e23), {}, {
            slideTo: t.params.slidesPerView === m.slidesPerView && s
          }));
        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(_objectSpread(_objectSpread({}, _e23), {}, {
          slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
        }));
      }
      o.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this,
        t = e.params,
        s = e.slidesEl;
      if (!t.loop || e.virtual && e.params.virtual.enabled) return;
      e.recalcSlides();
      var a = [];
      e.slides.forEach(function (e) {
        var t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        a[t] = e;
      }), e.slides.forEach(function (e) {
        e.removeAttribute("data-swiper-slide-index");
      }), a.forEach(function (e) {
        s.append(e);
      }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
    }
  };
  function H(e) {
    var t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData;
    n.evCache.push(e);
    var o = t.params,
      d = t.touches,
      c = t.enabled;
    if (!c) return;
    if (!o.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    var p = e;
    p.originalEvent && (p = p.originalEvent);
    var u = p.target;
    if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in p && 3 === p.which) return;
    if ("button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    var m = !!o.noSwipingClass && "" !== o.noSwipingClass,
      h = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && h && (u = h[0]);
    var f = o.noSwipingSelector ? o.noSwipingSelector : ".".concat(o.noSwipingClass),
      g = !(!p.target || !p.target.shadowRoot);
    if (o.noSwiping && (g ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === a() || s === r()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        var i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
      }(t);
    }(f, u) : u.closest(f))) return void (t.allowClick = !0);
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    d.currentX = p.pageX, d.currentY = p.pageY;
    var v = d.currentX,
      w = d.currentY,
      b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (b && (v <= y || v >= i.innerWidth - y)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), d.startX = v, d.startY = w, n.touchStartTime = l(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (n.allowThresholdMove = !1);
    var E = !0;
    u.matches(n.focusableElements) && (E = !1, "SELECT" === u.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== u && s.activeElement.blur();
    var x = E && t.allowTouchMove && o.touchStartPreventDefault;
    !o.touchStartForcePreventDefault && !x || u.isContentEditable || p.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
  }
  function X(e) {
    var t = a(),
      s = this,
      i = s.touchEventsData,
      r = s.params,
      n = s.touches,
      o = s.rtlTranslate,
      d = s.enabled;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    var p = i.evCache.findIndex(function (e) {
      return e.pointerId === c.pointerId;
    });
    p >= 0 && (i.evCache[p] = c);
    var u = i.evCache.length > 1 ? i.evCache[0] : c,
      m = u.pageX,
      h = u.pageY;
    if (c.preventedByNestedSwiper) return n.startX = m, void (n.startY = h);
    if (!s.allowTouchMove) return c.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
      startX: m,
      startY: h,
      prevX: s.touches.currentX,
      prevY: s.touches.currentY,
      currentX: m,
      currentY: h
    }), i.touchStartTime = l()));
    if (r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (h < n.startY && s.translate <= s.maxTranslate() || h > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (m < n.startX && s.translate <= s.maxTranslate() || m > n.startX && s.translate >= s.minTranslate()) return;
    if (t.activeElement && c.target === t.activeElement && c.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = m, n.currentY = h;
    var f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
      var _e24;
      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (_e24 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e24 > r.touchAngle : 90 - _e24 > r.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
    var v = s.isHorizontal() ? f : g,
      w = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), w = Math.abs(w) * (o ? 1 : -1)), n.diff = v, v *= r.touchRatio, o && (v = -v, w = -w);
    var b = s.touchesDirection;
    s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = w > 0 ? "prev" : "next";
    var y = s.params.loop && !r.cssMode;
    if (!i.isMoved) {
      if (y && s.loopFix({
        direction: s.swipeDirection
      }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
        var _e25 = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        s.wrapperEl.dispatchEvent(_e25);
      }
      i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c);
    }
    var E;
    i.isMoved && b !== s.touchesDirection && y && Math.abs(v) >= 1 && (s.loopFix({
      direction: s.swipeDirection,
      setTranslate: !0
    }), E = !0), s.emit("sliderMove", c), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
    var x = !0,
      S = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (S = 0), v > 0 ? (y && !E && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (x = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + v, S)))) : v < 0 && (y && !E && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (x = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - v, S)))), x && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }
  function Y(e) {
    var t = this,
      s = t.touchEventsData,
      a = s.evCache.findIndex(function (t) {
        return t.pointerId === e.pointerId;
      });
    if (a >= 0 && s.evCache.splice(a, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      if (!(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    var i = t.params,
      r = t.touches,
      o = t.rtlTranslate,
      d = t.slidesGrid,
      c = t.enabled;
    if (!c) return;
    if (!i.simulateTouch && "mouse" === e.pointerType) return;
    var p = e;
    if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var u = l(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      var _e26 = p.path || p.composedPath && p.composedPath();
      t.updateClickedSlide(_e26 && _e26[0] || p.target), t.emit("tap click", p), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", p);
    }
    if (s.lastClickTime = l(), n(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = i.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
    if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    var f = 0,
      g = t.slidesSizesGrid[0];
    for (var _e27 = 0; _e27 < d.length; _e27 += _e27 < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
      var _t18 = _e27 < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== d[_e27 + _t18] ? h >= d[_e27] && h < d[_e27 + _t18] && (f = _e27, g = d[_e27 + _t18] - d[_e27]) : h >= d[_e27] && (f = _e27, g = d[d.length - 1] - d[d.length - 2]);
    }
    var v = null,
      w = null;
    i.rewind && (t.isBeginning ? w = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    var b = (h - d[f]) / g,
      y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (m > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (b >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : f + y) : t.slideTo(f)), "prev" === t.swipeDirection && (b > 1 - i.longSwipesRatio ? t.slideTo(f + y) : null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio ? t.slideTo(w) : t.slideTo(f));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl) ? p.target === t.navigation.nextEl ? t.slideTo(f + y) : t.slideTo(f) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
    }
  }
  function N() {
    var e = this,
      t = e.params,
      s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var a = e.allowSlideNext,
      i = e.allowSlidePrev,
      r = e.snapGrid,
      n = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    var l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(function () {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function B(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    var e = this,
      t = e.wrapperEl,
      s = e.rtlTranslate,
      a = e.enabled;
    if (!a) return;
    var i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  function q(e) {
    var t = this;
    z(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
  }
  var V = !1;
  function F() {}
  var _ = function _(e, t) {
    var s = a(),
      i = e.params,
      r = e.el,
      n = e.wrapperEl,
      l = e.device,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    r[d]("pointerdown", e.onTouchStart, {
      passive: !1
    }), s[d]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: o
    }), s[d]("pointerup", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointercancel", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerout", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerleave", e.onTouchEnd, {
      passive: !0
    }), s[d]("contextmenu", e.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : e[c]("observerUpdate", N, !0), r[d]("load", e.onLoad, {
      capture: !0
    });
  };
  var j = function j(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };
  var W = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
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
    threshold: 5,
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
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
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
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  function U(e, t) {
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
      }), c(t, s)) : c(t, s)) : c(t, s);
    };
  }
  var K = {
      eventsEmitter: L,
      update: I,
      translate: k,
      transition: {
        setTransition: function setTransition(e, t) {
          var s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = "".concat(e, "ms"), s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart(e, t) {
          void 0 === e && (e = !0);
          var s = this,
            a = s.params;
          a.cssMode || (a.autoHeight && s.updateAutoHeight(), O({
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
          s.animating = !1, a.cssMode || (s.setTransition(0), O({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: D,
      loop: G,
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          var t = this;
          if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
          var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(function () {
            t.__preventObserver__ = !1;
          });
        },
        unsetGrabCursor: function unsetGrabCursor() {
          var e = this;
          e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(function () {
            e.__preventObserver__ = !1;
          }));
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = this,
            t = a(),
            s = e.params;
          e.onTouchStart = H.bind(e), e.onTouchMove = X.bind(e), e.onTouchEnd = Y.bind(e), s.cssMode && (e.onScroll = R.bind(e)), e.onClick = B.bind(e), e.onLoad = q.bind(e), V || (t.addEventListener("touchstart", F), V = !0), _(e, "on");
        },
        detachEvents: function detachEvents() {
          _(this, "off");
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
            t = e.realIndex,
            s = e.initialized,
            a = e.params,
            i = e.el,
            r = a.breakpoints;
          if (!r || r && 0 === Object.keys(r).length) return;
          var n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          var l = (n in r ? r[n] : void 0) || e.originalParams,
            o = j(e, a),
            d = j(e, l),
            p = a.enabled;
          o && !d ? (i.classList.remove("".concat(a.containerModifierClass, "grid"), "".concat(a.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !o && d && (i.classList.add("".concat(a.containerModifierClass, "grid")), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add("".concat(a.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
            if (void 0 === l[t]) return;
            var s = a[t] && a[t].enabled,
              i = l[t] && l[t].enabled;
            s && !i && e[t].disable(), !s && i && e[t].enable();
          });
          var u = l.direction && l.direction !== a.direction,
            m = a.loop && (l.slidesPerView !== a.slidesPerView || u);
          u && s && e.changeDirection(), c(e.params, l);
          var h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), m && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", l);
        },
        getBreakpoint: function getBreakpoint(e, t, s) {
          if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
          var a = !1;
          var i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(function (e) {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                var _t19 = parseFloat(e.substr(1));
                return {
                  value: n * _t19,
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
          for (var _e28 = 0; _e28 < l.length; _e28 += 1) {
            var _l$_e = l[_e28],
              _r6 = _l$_e.point,
              _n4 = _l$_e.value;
            "window" === t ? i.matchMedia("(min-width: ".concat(_n4, "px)")).matches && (a = _r6) : _n4 <= s.clientWidth && (a = _r6);
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
            var _t20 = e.slides.length - 1,
              _s16 = e.slidesGrid[_t20] + e.slidesSizesGrid[_t20] + 2 * a;
            e.isLocked = e.size > _s16;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: {
        addClasses: function addClasses() {
          var _i$classList;
          var e = this,
            t = e.classNames,
            s = e.params,
            a = e.rtl,
            i = e.el,
            r = e.device,
            n = function (e, t) {
              var s = [];
              return e.forEach(function (e) {
                "object" == _typeof(e) ? Object.keys(e).forEach(function (a) {
                  e[a] && s.push(t + a);
                }) : "string" == typeof e && s.push(t + e);
              }), s;
            }(["initialized", s.direction, {
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
            }, {
              "watch-progress": s.watchSlidesProgress
            }], s.containerModifierClass);
          t.push.apply(t, _toConsumableArray(n)), (_i$classList = i.classList).add.apply(_i$classList, _toConsumableArray(t)), e.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var _e$classList;
          var e = this.el,
            t = this.classNames;
          (_e$classList = e.classList).remove.apply(_e$classList, _toConsumableArray(t)), this.emitContainerClasses();
        }
      }
    },
    Z = {};
  var Q = /*#__PURE__*/function () {
    function Q() {
      var _i8, _i9, _l$modules;
      _classCallCheck(this, Q);
      var e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
      1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : (_i8 = i, _i9 = _slicedToArray(_i8, 2), e = _i9[0], t = _i9[1], _i8), t || (t = {}), t = c({}, t), e && !t.el && (t.el = e);
      var n = a();
      if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
        var _e29 = [];
        return n.querySelectorAll(t.el).forEach(function (s) {
          var a = c({}, t, {
            el: s
          });
          _e29.push(new Q(a));
        }), _e29;
      }
      var l = this;
      l.__swiper__ = !0, l.support = M(), l.device = C({
        userAgent: t.userAgent
      }), l.browser = P(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = _toConsumableArray(l.__modules__), t.modules && Array.isArray(t.modules) && (_l$modules = l.modules).push.apply(_l$modules, _toConsumableArray(t.modules));
      var o = {};
      l.modules.forEach(function (e) {
        e({
          params: t,
          swiper: l,
          extendParams: U(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      var d = c({}, W, o);
      return l.params = c({}, d, Z, t), l.originalParams = c({}, l.params), l.passedParams = c({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
        l.on(e, l.params.on[e]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === l.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === l.params.direction;
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
        cssOverflowAdjustment: function cssOverflowAdjustment() {
          return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: []
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.emit("_swiper"), l.params.init && l.init(), l;
    }
    _createClass(Q, [{
      key: "getSlideIndex",
      value: function getSlideIndex(e) {
        var t = this.slidesEl,
          s = this.params,
          a = w(h(t, ".".concat(s.slideClass, ", swiper-slide"))[0]);
        return w(e) - a;
      }
    }, {
      key: "getSlideIndexByData",
      value: function getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(function (t) {
          return 1 * t.getAttribute("data-swiper-slide-index") === e;
        })[0]);
      }
    }, {
      key: "recalcSlides",
      value: function recalcSlides() {
        var e = this.slidesEl,
          t = this.params;
        this.slides = h(e, ".".concat(t.slideClass, ", swiper-slide"));
      }
    }, {
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
        return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.forEach(function (s) {
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
          var _e30,
            _t21 = a[l] ? a[l].swiperSlideSize : 0;
          for (var _s17 = l + 1; _s17 < a.length; _s17 += 1) a[_s17] && !_e30 && (_t21 += a[_s17].swiperSlideSize, o += 1, _t21 > n && (_e30 = !0));
          for (var _s18 = l - 1; _s18 >= 0; _s18 -= 1) a[_s18] && !_e30 && (_t21 += a[_s18].swiperSlideSize, o += 1, _t21 > n && (_e30 = !0));
        } else if ("current" === e) for (var _e31 = l + 1; _e31 < a.length; _e31 += 1) {
          (t ? i[_e31] + r[_e31] - i[l] < n : i[_e31] - i[l] < n) && (o += 1);
        } else for (var _e32 = l - 1; _e32 >= 0; _e32 -= 1) {
          i[l] - i[_e32] < n && (o += 1);
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
        if (s.breakpoints && e.setBreakpoint(), _toConsumableArray(e.el.querySelectorAll('[loading="lazy"]')).forEach(function (t) {
          t.complete && z(e, t);
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();else {
          if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
            var _t22 = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            i = e.slideTo(_t22.length - 1, 0, !1, !0);
          } else i = e.slideTo(e.activeIndex, 0, !1, !0);
          i || a();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e, t) {
        void 0 === t && (t = !0);
        var s = this,
          a = s.params.direction;
        return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove("".concat(s.params.containerModifierClass).concat(a)), s.el.classList.add("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "changeLanguageDirection",
      value: function changeLanguageDirection(e) {
        var t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update());
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = e || t.params.el;
        if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
        var a = function a() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };
        var i = function () {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(a());
          }
          return h(s, a())[0];
        }();
        return !i && t.params.createElements && (i = f("div", t.params.wrapperClass), s.append(i), h(s, ".".concat(t.params.slideClass)).forEach(function (e) {
          i.append(e);
        })), Object.assign(t, {
          el: s,
          wrapperEl: i,
          slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
          wrongRTL: "-webkit-box" === v(i, "display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        var s = _toConsumableArray(t.el.querySelectorAll('[loading="lazy"]'));
        return t.isElement && s.push.apply(s, _toConsumableArray(t.hostEl.querySelectorAll('[loading="lazy"]'))), s.forEach(function (e) {
          e.complete ? z(t, e) : e.addEventListener("load", function (e) {
            z(t, e.target);
          });
        }), $(t), t.initialized = !0, $(t), t.emit("init"), t.emit("afterInit"), t;
      }
    }, {
      key: "destroy",
      value: function destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var s = this,
          a = s.params,
          i = s.el,
          r = s.wrapperEl,
          n = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), r.removeAttribute("style"), n && n.length && n.forEach(function (e) {
          e.classList.remove(a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.el.swiper = null, function (e) {
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
        c(Z, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return Z;
      }
    }, {
      key: "defaults",
      get: function get() {
        return W;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
        var t = Q.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return Q.installModule(e);
        }), Q) : (Q.installModule(e), Q);
      }
    }]);
    return Q;
  }();
  function J(e, t, s, a) {
    return e.params.createElements && Object.keys(a).forEach(function (i) {
      if (!s[i] && !0 === s.auto) {
        var _r7 = h(e.el, ".".concat(a[i]))[0];
        _r7 || (_r7 = f("div", a[i]), _r7.className = a[i], e.el.append(_r7)), s[i] = _r7, t[i] = _r7;
      }
    }), s;
  }
  function ee(e) {
    return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."));
  }
  function te(e) {
    var t = this,
      s = t.params,
      a = t.slidesEl;
    s.loop && t.loopDestroy();
    var i = function i(e) {
      if ("string" == typeof e) {
        var _t23 = document.createElement("div");
        _t23.innerHTML = e, a.append(_t23.children[0]), _t23.innerHTML = "";
      } else a.append(e);
    };
    if ("object" == _typeof(e) && "length" in e) for (var _t24 = 0; _t24 < e.length; _t24 += 1) e[_t24] && i(e[_t24]);else i(e);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update();
  }
  function se(e) {
    var t = this,
      s = t.params,
      a = t.activeIndex,
      i = t.slidesEl;
    s.loop && t.loopDestroy();
    var r = a + 1;
    var n = function n(e) {
      if ("string" == typeof e) {
        var _t25 = document.createElement("div");
        _t25.innerHTML = e, i.prepend(_t25.children[0]), _t25.innerHTML = "";
      } else i.prepend(e);
    };
    if ("object" == _typeof(e) && "length" in e) {
      for (var _t26 = 0; _t26 < e.length; _t26 += 1) e[_t26] && n(e[_t26]);
      r = a + e.length;
    } else n(e);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1);
  }
  function ae(e, t) {
    var s = this,
      a = s.params,
      i = s.activeIndex,
      r = s.slidesEl;
    var n = i;
    a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
    var l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    var o = n > e ? n + 1 : n;
    var d = [];
    for (var _t27 = l - 1; _t27 >= e; _t27 -= 1) {
      var _e33 = s.slides[_t27];
      _e33.remove(), d.unshift(_e33);
    }
    if ("object" == _typeof(t) && "length" in t) {
      for (var _e34 = 0; _e34 < t.length; _e34 += 1) t[_e34] && r.append(t[_e34]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (var _e35 = 0; _e35 < d.length; _e35 += 1) r.append(d[_e35]);
    s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function ie(e) {
    var t = this,
      s = t.params,
      a = t.activeIndex;
    var i = a;
    s.loop && (i -= t.loopedSlides, t.loopDestroy());
    var r,
      n = i;
    if ("object" == _typeof(e) && "length" in e) {
      for (var _s19 = 0; _s19 < e.length; _s19 += 1) r = e[_s19], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function re() {
    var e = this,
      t = [];
    for (var _s20 = 0; _s20 < e.slides.length; _s20 += 1) t.push(_s20);
    e.removeSlide(t);
  }
  function ne(e) {
    var t = e.effect,
      s = e.swiper,
      a = e.on,
      i = e.setTranslate,
      r = e.setTransition,
      n = e.overwriteParams,
      l = e.perspective,
      o = e.recreateShadows,
      d = e.getEffectParams;
    var c;
    a("beforeInit", function () {
      if (s.params.effect !== t) return;
      s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
      var e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", function () {
      s.params.effect === t && i();
    }), a("setTransition", function (e, a) {
      s.params.effect === t && r(a);
    }), a("transitionEnd", function () {
      if (s.params.effect === t && o) {
        if (!d || !d().slideShadows) return;
        s.slides.forEach(function (e) {
          e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (e) {
            return e.remove();
          });
        }), o();
      }
    }), a("virtualUpdate", function () {
      s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(function () {
        c && s.slides && s.slides.length && (i(), c = !1);
      }));
    });
  }
  function le(e, t) {
    var s = m(t);
    return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s;
  }
  function oe(e) {
    var t = e.swiper,
      s = e.duration,
      a = e.transformElements,
      i = e.allSlides;
    var r = t.activeIndex;
    if (t.params.virtualTranslate && 0 !== s) {
      var _e36,
        _s21 = !1;
      _e36 = i ? a : a.filter(function (e) {
        var s = e.classList.contains("swiper-slide-transform") ? function (e) {
          if (!e.parentElement) return t.slides.filter(function (t) {
            return t.shadowRoot && t.shadowRoot === e.parentNode;
          })[0];
          return e.parentElement;
        }(e) : e;
        return t.getSlideIndex(s) === r;
      }), _e36.forEach(function (e) {
        y(e, function () {
          if (_s21) return;
          if (!t || t.destroyed) return;
          _s21 = !0, t.animating = !1;
          var e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0
          });
          t.wrapperEl.dispatchEvent(e);
        });
      });
    }
  }
  function de(e, t, s) {
    var a = "swiper-slide-shadow".concat(s ? "-".concat(s) : "").concat(e ? " swiper-slide-shadow-".concat(e) : ""),
      i = m(t);
    var r = i.querySelector(".".concat(a.split(" ").join(".")));
    return r || (r = f("div", a.split(" ")), i.append(r)), r;
  }
  Object.keys(K).forEach(function (e) {
    Object.keys(K[e]).forEach(function (t) {
      Q.prototype[t] = K[e][t];
    });
  }), Q.use([function (e) {
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
      o = function o(e, s) {
        void 0 === s && (s = {});
        var a = new (l.MutationObserver || l.WebkitMutationObserver)(function (e) {
          if (t.__preventObserver__) return;
          if (1 === e.length) return void i("observerUpdate", e[0]);
          var s = function s() {
            i("observerUpdate", e[0]);
          };
          l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0);
        });
        a.observe(e, {
          attributes: void 0 === s.attributes || s.attributes,
          childList: void 0 === s.childList || s.childList,
          characterData: void 0 === s.characterData || s.characterData
        }), n.push(a);
      };
    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), a("init", function () {
      if (t.params.observer) {
        if (t.params.observeParents) {
          var _e37 = b(t.hostEl);
          for (var _t28 = 0; _t28 < _e37.length; _t28 += 1) o(_e37[_t28]);
        }
        o(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), o(t.wrapperEl, {
          attributes: !1
        });
      }
    }), a("destroy", function () {
      n.forEach(function (e) {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  var ce = [function (e) {
    var t,
      s = e.swiper,
      i = e.extendParams,
      r = e.on,
      n = e.emit;
    i({
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
    });
    var l = a();
    s.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    var o = l.createElement("div");
    function d(e, t) {
      var a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      var i;
      return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? f("swiper-slide") : f("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i;
    }
    function c(e) {
      var _s$params = s.params,
        t = _s$params.slidesPerView,
        a = _s$params.slidesPerGroup,
        i = _s$params.centeredSlides,
        r = _s$params.loop,
        _s$params$virtual = s.params.virtual,
        l = _s$params$virtual.addSlidesBefore,
        o = _s$params$virtual.addSlidesAfter,
        _s$virtual = s.virtual,
        c = _s$virtual.from,
        p = _s$virtual.to,
        u = _s$virtual.slides,
        m = _s$virtual.slidesGrid,
        f = _s$virtual.offset;
      s.params.cssMode || s.updateActiveIndex();
      var g = s.activeIndex || 0;
      var v, w, b;
      v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (w = Math.floor(t / 2) + a + o, b = Math.floor(t / 2) + a + l) : (w = t + (a - 1) + o, b = (r ? t : a) + l);
      var y = g - b,
        E = g + w;
      r || (y = Math.max(y, 0), E = Math.min(E, u.length - 1));
      var x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
      function S() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate");
      }
      if (r && g >= b ? (y -= b, i || (x += s.slidesGrid[0])) : r && g < b && (y = -b, i && (x += s.slidesGrid[0])), Object.assign(s.virtual, {
        from: y,
        to: E,
        offset: x,
        slidesGrid: s.slidesGrid,
        slidesBefore: b,
        slidesAfter: w
      }), c === y && p === E && !e) return s.slidesGrid !== m && x !== f && s.slides.forEach(function (e) {
        e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
      }), s.updateProgress(), void n("virtualUpdate");
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: x,
        from: y,
        to: E,
        slides: function () {
          var e = [];
          for (var _t29 = y; _t29 <= E; _t29 += 1) e.push(u[_t29]);
          return e;
        }()
      }), void (s.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate"));
      var T = [],
        M = [],
        C = function C(e) {
          var t = e;
          return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length), t;
        };
      if (e) s.slidesEl.querySelectorAll(".".concat(s.params.slideClass, ", swiper-slide")).forEach(function (e) {
        e.remove();
      });else for (var _e38 = c; _e38 <= p; _e38 += 1) if (_e38 < y || _e38 > E) {
        var _t30 = C(_e38);
        s.slidesEl.querySelectorAll(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(_t30, "\"], swiper-slide[data-swiper-slide-index=\"").concat(_t30, "\"]")).forEach(function (e) {
          e.remove();
        });
      }
      var P = r ? -u.length : 0,
        L = r ? 2 * u.length : u.length;
      for (var _t31 = P; _t31 < L; _t31 += 1) if (_t31 >= y && _t31 <= E) {
        var _s22 = C(_t31);
        void 0 === p || e ? M.push(_s22) : (_t31 > p && M.push(_s22), _t31 < c && T.push(_s22));
      }
      if (M.forEach(function (e) {
        s.slidesEl.append(d(u[e], e));
      }), r) for (var _e39 = T.length - 1; _e39 >= 0; _e39 -= 1) {
        var _t32 = T[_e39];
        s.slidesEl.prepend(d(u[_t32], _t32));
      } else T.sort(function (e, t) {
        return t - e;
      }), T.forEach(function (e) {
        s.slidesEl.prepend(d(u[e], e));
      });
      h(s.slidesEl, ".swiper-slide, swiper-slide").forEach(function (e) {
        e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
      }), S();
    }
    r("beforeInit", function () {
      if (!s.params.virtual.enabled) return;
      var e;
      if (void 0 === s.passedParams.virtual.slides) {
        var _t33 = _toConsumableArray(s.slidesEl.children).filter(function (e) {
          return e.matches(".".concat(s.params.slideClass, ", swiper-slide"));
        });
        _t33 && _t33.length && (s.virtual.slides = _toConsumableArray(_t33), e = !0, _t33.forEach(function (e, t) {
          e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove();
        }));
      }
      e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push("".concat(s.params.containerModifierClass, "virtual")), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || c();
    }), r("setTranslate", function () {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(function () {
        c();
      }, 100)) : c());
    }), r("init update resize", function () {
      s.params.virtual.enabled && s.params.cssMode && p(s.wrapperEl, "--swiper-virtual-size", "".concat(s.virtualSize, "px"));
    }), Object.assign(s.virtual, {
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof(e) && "length" in e) for (var _t34 = 0; _t34 < e.length; _t34 += 1) e[_t34] && s.virtual.slides.push(e[_t34]);else s.virtual.slides.push(e);
        c(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = s.activeIndex;
        var a = t + 1,
          i = 1;
        if (Array.isArray(e)) {
          for (var _t35 = 0; _t35 < e.length; _t35 += 1) e[_t35] && s.virtual.slides.unshift(e[_t35]);
          a = t + e.length, i = e.length;
        } else s.virtual.slides.unshift(e);
        if (s.params.virtual.cache) {
          var _e40 = s.virtual.cache,
            _t36 = {};
          Object.keys(_e40).forEach(function (s) {
            var a = _e40[s],
              r = a.getAttribute("data-swiper-slide-index");
            r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), _t36[parseInt(s, 10) + i] = a;
          }), s.virtual.cache = _t36;
        }
        c(!0), s.slideTo(a, 0);
      },
      removeSlide: function removeSlide(e) {
        if (null == e) return;
        var t = s.activeIndex;
        if (Array.isArray(e)) for (var _a14 = e.length - 1; _a14 >= 0; _a14 -= 1) s.virtual.slides.splice(e[_a14], 1), s.params.virtual.cache && delete s.virtual.cache[e[_a14]], e[_a14] < t && (t -= 1), t = Math.max(t, 0);else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        c(!0), s.slideTo(t, 0);
      },
      removeAllSlides: function removeAllSlides() {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0);
      },
      update: c
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      i = e.on,
      n = e.emit;
    var l = a(),
      o = r();
    function d(e) {
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
        m = 38 === i,
        h = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
          var _e41 = !1;
          if (b(t.el, ".".concat(t.params.slideClass, ", swiper-slide")).length > 0 && 0 === b(t.el, ".".concat(t.params.slideActiveClass)).length) return;
          var _a15 = t.el,
            _i10 = _a15.clientWidth,
            _r8 = _a15.clientHeight,
            _n5 = o.innerWidth,
            _l4 = o.innerHeight,
            _d2 = g(_a15);
          s && (_d2.left -= _a15.scrollLeft);
          var _c2 = [[_d2.left, _d2.top], [_d2.left + _i10, _d2.top], [_d2.left, _d2.top + _r8], [_d2.left + _i10, _d2.top + _r8]];
          for (var _t37 = 0; _t37 < _c2.length; _t37 += 1) {
            var _s23 = _c2[_t37];
            if (_s23[0] >= 0 && _s23[0] <= _n5 && _s23[1] >= 0 && _s23[1] <= _l4) {
              if (0 === _s23[0] && 0 === _s23[1]) continue;
              _e41 = !0;
            }
          }
          if (!_e41) return;
        }
        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i);
      }
    }
    function c() {
      t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0);
    }
    function p() {
      t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1);
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
      t.params.keyboard.enabled && c();
    }), i("destroy", function () {
      t.keyboard.enabled && p();
    }), Object.assign(t.keyboard, {
      enable: c,
      disable: p
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
    var o = r();
    var d;
    s({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    }), t.mousewheel = {
      enabled: !1
    };
    var c,
      p = l();
    var u = [];
    function m() {
      t.enabled && (t.mouseEntered = !0);
    }
    function h() {
      t.enabled && (t.mouseEntered = !1);
    }
    function f(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && l() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && l() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = new o.Date().getTime(), !1));
    }
    function g(e) {
      var s = e,
        a = !0;
      if (!t.enabled) return;
      if (e.target.closest(".".concat(t.params.mousewheel.noMousewheelClass))) return;
      var r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      var o = t.el;
      "container" !== t.params.mousewheel.eventsTarget && (o = document.querySelector(t.params.mousewheel.eventsTarget));
      var p = o && o.contains(s.target);
      if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      var m = 0;
      var h = t.rtlTranslate ? -1 : 1,
        g = function (e) {
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
          if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
          m = -g.pixelX * h;
        } else {
          if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
          m = -g.pixelY;
        }
      } else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
      if (0 === m) return !0;
      r.invert && (m = -m);
      var v = t.getTranslate() + m * r.sensitivity;
      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        var _e42 = {
            time: l(),
            delta: Math.abs(m),
            direction: Math.sign(m)
          },
          _a16 = c && _e42.time < c.time + 500 && _e42.delta <= c.delta && _e42.direction === c.direction;
        if (!_a16) {
          c = void 0;
          var _l5 = t.getTranslate() + m * r.sensitivity;
          var _o5 = t.isBeginning,
            _p2 = t.isEnd;
          if (_l5 >= t.minTranslate() && (_l5 = t.minTranslate()), _l5 <= t.maxTranslate() && (_l5 = t.maxTranslate()), t.setTransition(0), t.setTranslate(_l5), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!_o5 && t.isBeginning || !_p2 && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
            direction: _e42.direction < 0 ? "next" : "prev",
            byMousewheel: !0
          }), t.params.freeMode.sticky) {
            clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
            var _s24 = u.length ? u[u.length - 1] : void 0,
              _a17 = u[0];
            if (u.push(_e42), _s24 && (_e42.delta > _s24.delta || _e42.direction !== _s24.direction)) u.splice(0);else if (u.length >= 15 && _e42.time - _a17.time < 500 && _a17.delta - _e42.delta >= 1 && _e42.delta <= 6) {
              var _s25 = m > 0 ? .8 : .2;
              c = _e42, u.splice(0), d = n(function () {
                t.slideToClosest(t.params.speed, !0, void 0, _s25);
              }, 0);
            }
            d || (d = n(function () {
              c = _e42, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
            }, 500));
          }
          if (_a16 || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (_l5 === t.minTranslate() || _l5 === t.maxTranslate())) return !0;
        }
      } else {
        var _s26 = {
          time: l(),
          delta: Math.abs(m),
          direction: Math.sign(m),
          raw: e
        };
        u.length >= 2 && u.shift();
        var _a18 = u.length ? u[u.length - 1] : void 0;
        if (u.push(_s26), _a18 ? (_s26.direction !== _a18.direction || _s26.delta > _a18.delta || _s26.time > _a18.time + 150) && f(_s26) : f(_s26), function (e) {
          var s = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
          return !1;
        }(_s26)) return !0;
      }
      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }
    function v(e) {
      var s = t.el;
      "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g);
    }
    function w() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0);
    }
    function b() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0);
    }
    a("init", function () {
      !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w();
    }), a("destroy", function () {
      t.params.cssMode && w(), t.mousewheel.enabled && b();
    }), Object.assign(t.mousewheel, {
      enable: w,
      disable: b
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      prevEl: null
    };
    var r = function r(e) {
      return (Array.isArray(e) ? e : [e]).filter(function (e) {
        return !!e;
      });
    };
    function n(e) {
      var s;
      return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = _toConsumableArray(document.querySelectorAll(e))), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s);
    }
    function l(e, s) {
      var a = t.params.navigation;
      (e = r(e)).forEach(function (e) {
        var _e$classList2;
        e && ((_e$classList2 = e.classList)[s ? "add" : "remove"].apply(_e$classList2, _toConsumableArray(a.disabledClass.split(" "))), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
      });
    }
    function o() {
      var _t$navigation = t.navigation,
        e = _t$navigation.nextEl,
        s = _t$navigation.prevEl;
      if (t.params.loop) return l(s, !1), void l(e, !1);
      l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind);
    }
    function d(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }
    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }
    function p() {
      var e = t.params.navigation;
      if (t.params.navigation = J(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      var s = n(e.nextEl),
        a = n(e.prevEl);
      Object.assign(t.navigation, {
        nextEl: s,
        prevEl: a
      }), s = r(s), a = r(a);
      var i = function i(s, a) {
        var _s$classList2;
        s && s.addEventListener("click", "next" === a ? c : d), !t.enabled && s && (_s$classList2 = s.classList).add.apply(_s$classList2, _toConsumableArray(e.lockClass.split(" ")));
      };
      s.forEach(function (e) {
        return i(e, "next");
      }), a.forEach(function (e) {
        return i(e, "prev");
      });
    }
    function u() {
      var _t$navigation2 = t.navigation,
        e = _t$navigation2.nextEl,
        s = _t$navigation2.prevEl;
      e = r(e), s = r(s);
      var a = function a(e, s) {
        var _e$classList3;
        e.removeEventListener("click", "next" === s ? c : d), (_e$classList3 = e.classList).remove.apply(_e$classList3, _toConsumableArray(t.params.navigation.disabledClass.split(" ")));
      };
      e.forEach(function (e) {
        return a(e, "next");
      }), s.forEach(function (e) {
        return a(e, "prev");
      });
    }
    a("init", function () {
      !1 === t.params.navigation.enabled ? m() : (p(), o());
    }), a("toEdge fromEdge lock unlock", function () {
      o();
    }), a("destroy", function () {
      u();
    }), a("enable disable", function () {
      var _t$navigation3 = t.navigation,
        e = _t$navigation3.nextEl,
        s = _t$navigation3.prevEl;
      e = r(e), s = r(s), [].concat(_toConsumableArray(e), _toConsumableArray(s)).filter(function (e) {
        return !!e;
      }).forEach(function (e) {
        return e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass);
      });
    }), a("click", function (e, s) {
      var _t$navigation4 = t.navigation,
        a = _t$navigation4.nextEl,
        n = _t$navigation4.prevEl;
      a = r(a), n = r(n);
      var l = s.target;
      if (t.params.navigation.hideOnClick && !n.includes(l) && !a.includes(l)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
        var _e43;
        a.length ? _e43 = a[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (_e43 = n[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === _e43 ? "navigationShow" : "navigationHide"), [].concat(_toConsumableArray(a), _toConsumableArray(n)).filter(function (e) {
          return !!e;
        }).forEach(function (e) {
          return e.classList.toggle(t.params.navigation.hiddenClass);
        });
      }
    });
    var m = function m() {
      var _t$el$classList;
      (_t$el$classList = t.el.classList).add.apply(_t$el$classList, _toConsumableArray(t.params.navigation.navigationDisabledClass.split(" "))), u();
    };
    Object.assign(t.navigation, {
      enable: function enable() {
        var _t$el$classList2;
        (_t$el$classList2 = t.el.classList).remove.apply(_t$el$classList2, _toConsumableArray(t.params.navigation.navigationDisabledClass.split(" "))), p(), o();
      },
      disable: m,
      update: o,
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
        verticalClass: "".concat(r, "-vertical"),
        paginationDisabledClass: "".concat(r, "-disabled")
      }
    }), t.pagination = {
      el: null,
      bullets: []
    };
    var l = 0;
    var o = function o(e) {
      return (Array.isArray(e) ? e : [e]).filter(function (e) {
        return !!e;
      });
    };
    function d() {
      return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
    }
    function c(e, s) {
      var a = t.params.pagination.bulletActiveClass;
      e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add("".concat(a, "-").concat(s)), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add("".concat(a, "-").concat(s, "-").concat(s)));
    }
    function p(e) {
      var s = e.target.closest(ee(t.params.pagination.bulletClass));
      if (!s) return;
      e.preventDefault();
      var a = w(s) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === a) return;
        var _e44 = t.realIndex,
          _s27 = t.getSlideIndexByData(a),
          _i11 = t.getSlideIndexByData(t.realIndex);
        if (_s27 > t.slides.length - t.loopedSlides) {
          var _a19 = t.activeIndex;
          t.loopFix({
            direction: _s27 > _i11 ? "next" : "prev",
            activeSlideIndex: _s27,
            slideTo: !1
          });
          _a19 === t.activeIndex && t.slideToLoop(_e44, 0, !1, !0);
        }
        t.slideToLoop(a);
      } else t.slideTo(a);
    }
    function u() {
      var e = t.rtl,
        s = t.params.pagination;
      if (d()) return;
      var a,
        r,
        p = t.pagination.el;
      p = o(p);
      var u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
        m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
      if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        var _i12 = t.pagination.bullets;
        var _o6, _d3, _u2;
        if (s.dynamicBullets && (n = E(_i12[0], t.isHorizontal() ? "width" : "height", !0), p.forEach(function (e) {
          e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
        }), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), _o6 = Math.max(a - l, 0), _d3 = _o6 + (Math.min(_i12.length, s.dynamicMainBullets) - 1), _u2 = (_d3 + _o6) / 2), _i12.forEach(function (e) {
          var _e$classList4;
          var t = _toConsumableArray(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
            return "".concat(s.bulletActiveClass).concat(e);
          })).map(function (e) {
            return "string" == typeof e && e.includes(" ") ? e.split(" ") : e;
          }).flat();
          (_e$classList4 = e.classList).remove.apply(_e$classList4, _toConsumableArray(t));
        }), p.length > 1) _i12.forEach(function (e) {
          var _e$classList5, _e$classList6;
          var i = w(e);
          i === a ? (_e$classList5 = e.classList).add.apply(_e$classList5, _toConsumableArray(s.bulletActiveClass.split(" "))) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= _o6 && i <= _d3 && (_e$classList6 = e.classList).add.apply(_e$classList6, _toConsumableArray("".concat(s.bulletActiveClass, "-main").split(" "))), i === _o6 && c(e, "prev"), i === _d3 && c(e, "next"));
        });else {
          var _e45$classList;
          var _e45 = _i12[a];
          if (_e45 && (_e45$classList = _e45.classList).add.apply(_e45$classList, _toConsumableArray(s.bulletActiveClass.split(" "))), t.isElement && _i12.forEach(function (e, t) {
            e.setAttribute("part", t === a ? "bullet-active" : "bullet");
          }), s.dynamicBullets) {
            var _e46 = _i12[_o6],
              _t38 = _i12[_d3];
            for (var _e47 = _o6; _e47 <= _d3; _e47 += 1) {
              var _i12$_e47$classList;
              _i12[_e47] && (_i12$_e47$classList = _i12[_e47].classList).add.apply(_i12$_e47$classList, _toConsumableArray("".concat(s.bulletActiveClass, "-main").split(" ")));
            }
            c(_e46, "prev"), c(_t38, "next");
          }
        }
        if (s.dynamicBullets) {
          var _a20 = Math.min(_i12.length, s.dynamicMainBullets + 4),
            _r9 = (n * _a20 - n) / 2 - _u2 * n,
            _l6 = e ? "right" : "left";
          _i12.forEach(function (e) {
            e.style[t.isHorizontal() ? _l6 : "top"] = "".concat(_r9, "px");
          });
        }
      }
      p.forEach(function (e, r) {
        if ("fraction" === s.type && (e.querySelectorAll(ee(s.currentClass)).forEach(function (e) {
          e.textContent = s.formatFractionCurrent(a + 1);
        }), e.querySelectorAll(ee(s.totalClass)).forEach(function (e) {
          e.textContent = s.formatFractionTotal(m);
        })), "progressbar" === s.type) {
          var _i13;
          _i13 = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
          var _r10 = (a + 1) / m;
          var _n6 = 1,
            _l7 = 1;
          "horizontal" === _i13 ? _n6 = _r10 : _l7 = _r10, e.querySelectorAll(ee(s.progressbarFillClass)).forEach(function (e) {
            e.style.transform = "translate3d(0,0,0) scaleX(".concat(_n6, ") scaleY(").concat(_l7, ")"), e.style.transitionDuration = "".concat(t.params.speed, "ms");
          });
        }
        "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, m), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
      });
    }
    function m() {
      var e = t.params.pagination;
      if (d()) return;
      var s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
      var a = t.pagination.el;
      a = o(a);
      var r = "";
      if ("bullets" === e.type) {
        var _a21 = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && _a21 > s && (_a21 = s);
        for (var _s28 = 0; _s28 < _a21; _s28 += 1) e.renderBullet ? r += e.renderBullet.call(t, _s28, e.bulletClass) : r += "<".concat(e.bulletElement, " ").concat(t.isElement ? 'part="bullet"' : "", " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">");
      }
      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>")), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : "<span class=\"".concat(e.progressbarFillClass, "\"></span>")), t.pagination.bullets = [], a.forEach(function (s) {
        var _t$pagination$bullets;
        "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && (_t$pagination$bullets = t.pagination.bullets).push.apply(_t$pagination$bullets, _toConsumableArray(s.querySelectorAll(ee(e.bulletClass))));
      }), "custom" !== e.type && i("paginationRender", a[0]);
    }
    function h() {
      t.params.pagination = J(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      var e = t.params.pagination;
      if (!e.el) return;
      var s;
      "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = _toConsumableArray(document.querySelectorAll(e.el))), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = _toConsumableArray(t.el.querySelectorAll(e.el)), s.length > 1 && (s = s.filter(function (e) {
        return b(e, ".swiper")[0] === t.el;
      })[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
        el: s
      }), s = o(s), s.forEach(function (s) {
        var _s$classList3;
        "bullets" === e.type && e.clickable && (_s$classList3 = s.classList).add.apply(_s$classList3, _toConsumableArray((e.clickableClass || "").split(" "))), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", p), t.enabled || s.classList.add(e.lockClass);
      }));
    }
    function f() {
      var e = t.params.pagination;
      if (d()) return;
      var s = t.pagination.el;
      s && (s = o(s), s.forEach(function (s) {
        var _s$classList4;
        s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && ((_s$classList4 = s.classList).remove.apply(_s$classList4, _toConsumableArray((e.clickableClass || "").split(" "))), s.removeEventListener("click", p));
      })), t.pagination.bullets && t.pagination.bullets.forEach(function (t) {
        var _t$classList;
        return (_t$classList = t.classList).remove.apply(_t$classList, _toConsumableArray(e.bulletActiveClass.split(" ")));
      });
    }
    a("changeDirection", function () {
      if (!t.pagination || !t.pagination.el) return;
      var e = t.params.pagination;
      var s = t.pagination.el;
      s = o(s), s.forEach(function (s) {
        s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
      });
    }), a("init", function () {
      !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
    }), a("activeIndexChange", function () {
      void 0 === t.snapIndex && u();
    }), a("snapIndexChange", function () {
      u();
    }), a("snapGridLengthChange", function () {
      m(), u();
    }), a("destroy", function () {
      f();
    }), a("enable disable", function () {
      var e = t.pagination.el;
      e && (e = o(e), e.forEach(function (e) {
        return e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass);
      }));
    }), a("lock unlock", function () {
      u();
    }), a("click", function (e, s) {
      var a = s.target,
        r = o(t.pagination.el);
      if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
        var _e48 = r[0].classList.contains(t.params.pagination.hiddenClass);
        i(!0 === _e48 ? "paginationShow" : "paginationHide"), r.forEach(function (e) {
          return e.classList.toggle(t.params.pagination.hiddenClass);
        });
      }
    });
    var g = function g() {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      var e = t.pagination.el;
      e && (e = o(e), e.forEach(function (e) {
        return e.classList.add(t.params.pagination.paginationDisabledClass);
      })), f();
    };
    Object.assign(t.pagination, {
      enable: function enable() {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        var e = t.pagination.el;
        e && (e = o(e), e.forEach(function (e) {
          return e.classList.remove(t.params.pagination.paginationDisabledClass);
        })), h(), m(), u();
      },
      disable: g,
      render: m,
      update: u,
      init: h,
      destroy: f
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      i = e.on,
      r = e.emit;
    var l = a();
    var o,
      d,
      c,
      p,
      u = !1,
      m = null,
      h = null;
    function v() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
        s = t.rtlTranslate,
        a = e.dragEl,
        i = e.el,
        r = t.params.scrollbar,
        n = t.params.loop ? t.progressLoop : t.progress;
      var l = d,
        o = (c - d) * n;
      s ? (o = -o, o > 0 ? (l = d - o, o = 0) : -o + d > c && (l = c + o)) : o < 0 ? (l = d + o, o = 0) : o + d > c && (l = c - o), t.isHorizontal() ? (a.style.transform = "translate3d(".concat(o, "px, 0, 0)"), a.style.width = "".concat(l, "px")) : (a.style.transform = "translate3d(0px, ".concat(o, "px, 0)"), a.style.height = "".concat(l, "px")), r.hide && (clearTimeout(m), i.style.opacity = 1, m = setTimeout(function () {
        i.style.opacity = 0, i.style.transitionDuration = "400ms";
      }, 1e3));
    }
    function w() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      var e = t.scrollbar,
        s = e.dragEl,
        a = e.el;
      s.style.width = "", s.style.height = "", c = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), d = "auto" === t.params.scrollbar.dragSize ? c * p : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = "".concat(d, "px") : s.style.height = "".concat(d, "px"), a.style.display = p >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
    }
    function b(e) {
      return t.isHorizontal() ? e.clientX : e.clientY;
    }
    function y(e) {
      var s = t.scrollbar,
        a = t.rtlTranslate,
        i = s.el;
      var r;
      r = (b(e) - g(i)[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : d / 2)) / (c - d), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      var n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    function E(e) {
      var s = t.params.scrollbar,
        a = t.scrollbar,
        i = t.wrapperEl,
        n = a.el,
        l = a.dragEl;
      u = !0, o = e.target === l ? b(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", y(e), clearTimeout(h), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e);
    }
    function x(e) {
      var s = t.scrollbar,
        a = t.wrapperEl,
        i = s.el,
        n = s.dragEl;
      u && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, y(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e));
    }
    function S(e) {
      var s = t.params.scrollbar,
        a = t.scrollbar,
        i = t.wrapperEl,
        l = a.el;
      u && (u = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(h), h = n(function () {
        l.style.opacity = 0, l.style.transitionDuration = "400ms";
      }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    }
    function T(e) {
      var s = t.scrollbar,
        a = t.params,
        i = s.el;
      if (!i) return;
      var r = i,
        n = !!a.passiveListeners && {
          passive: !1,
          capture: !1
        },
        o = !!a.passiveListeners && {
          passive: !0,
          capture: !1
        };
      if (!r) return;
      var d = "on" === e ? "addEventListener" : "removeEventListener";
      r[d]("pointerdown", E, n), l[d]("pointermove", x, n), l[d]("pointerup", S, o);
    }
    function M() {
      var e = t.scrollbar,
        s = t.el;
      t.params.scrollbar = J(t, t.originalParams.scrollbar, t.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      var a = t.params.scrollbar;
      if (!a.el) return;
      var i, r;
      "string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el ? i || (i = a.el) : i = l.querySelectorAll(a.el), t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(".".concat(t.params.scrollbar.dragClass)), r || (r = f("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
        el: i,
        dragEl: r
      }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && T("on"), i && i.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass);
    }
    function C() {
      var e = t.params.scrollbar,
        s = t.scrollbar.el;
      s && s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && T("off");
    }
    s({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), t.scrollbar = {
      el: null,
      dragEl: null
    }, i("init", function () {
      !1 === t.params.scrollbar.enabled ? P() : (M(), w(), v());
    }), i("update resize observerUpdate lock unlock", function () {
      w();
    }), i("setTranslate", function () {
      v();
    }), i("setTransition", function (e, s) {
      !function (e) {
        t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = "".concat(e, "ms"));
      }(s);
    }), i("enable disable", function () {
      var e = t.scrollbar.el;
      e && e.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass);
    }), i("destroy", function () {
      C();
    });
    var P = function P() {
      t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), C();
    };
    Object.assign(t.scrollbar, {
      enable: function enable() {
        t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), M(), w(), v();
      },
      disable: P,
      updateSize: w,
      setTranslate: v,
      init: M,
      destroy: C
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
    var i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      r = function r(e, s) {
        var a = t.rtl,
          i = a ? -1 : 1,
          r = e.getAttribute("data-swiper-parallax") || "0";
        var n = e.getAttribute("data-swiper-parallax-x"),
          l = e.getAttribute("data-swiper-parallax-y");
        var o = e.getAttribute("data-swiper-parallax-scale"),
          d = e.getAttribute("data-swiper-parallax-opacity"),
          c = e.getAttribute("data-swiper-parallax-rotate");
        if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
          var _t39 = d - (d - 1) * (1 - Math.abs(s));
          e.style.opacity = _t39;
        }
        var p = "translate3d(".concat(n, ", ").concat(l, ", 0px)");
        if (null != o) {
          p += " scale(".concat(o - (o - 1) * (1 - Math.abs(s)), ")");
        }
        if (c && null != c) {
          p += " rotate(".concat(c * s * -1, "deg)");
        }
        e.style.transform = p;
      },
      n = function n() {
        var e = t.el,
          s = t.slides,
          a = t.progress,
          n = t.snapGrid,
          l = t.isElement,
          o = h(e, i);
        t.isElement && o.push.apply(o, _toConsumableArray(h(t.hostEl, i))), o.forEach(function (e) {
          r(e, a);
        }), s.forEach(function (e, s) {
          var l = e.progress;
          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll("".concat(i, ", [data-swiper-parallax-rotate]")).forEach(function (e) {
            r(e, l);
          });
        });
      };
    a("beforeInit", function () {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
    }), a("init", function () {
      t.params.parallax.enabled && n();
    }), a("setTranslate", function () {
      t.params.parallax.enabled && n();
    }), a("setTransition", function (e, s) {
      t.params.parallax.enabled && function (e) {
        void 0 === e && (e = t.params.speed);
        var s = t.el,
          a = t.hostEl,
          r = _toConsumableArray(s.querySelectorAll(i));
        t.isElement && r.push.apply(r, _toConsumableArray(a.querySelectorAll(i))), r.forEach(function (t) {
          var s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
          0 === e && (s = 0), t.style.transitionDuration = "".concat(s, "ms");
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
      d,
      c = 1,
      p = !1;
    var u = [],
      m = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
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
      v = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
      };
    var w = 1;
    function y() {
      if (u.length < 2) return 1;
      var e = u[0].pageX,
        t = u[0].pageY,
        s = u[1].pageX,
        a = u[1].pageY;
      return Math.sqrt(Math.pow(s - e, 2) + Math.pow(a - t, 2));
    }
    function E(e) {
      var s = t.isElement ? "swiper-slide" : ".".concat(t.params.slideClass);
      return !!e.target.matches(s) || t.slides.filter(function (t) {
        return t.contains(e.target);
      }).length > 0;
    }
    function x(e) {
      if ("mouse" === e.pointerType && u.splice(0, u.length), !E(e)) return;
      var s = t.params.zoom;
      if (l = !1, d = !1, u.push(e), !(u.length < 2)) {
        if (l = !0, m.scaleStart = y(), !m.slideEl) {
          m.slideEl = e.target.closest(".".concat(t.params.slideClass, ", swiper-slide")), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
          var _a22 = m.slideEl.querySelector(".".concat(s.containerClass));
          if (_a22 && (_a22 = _a22.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = _a22, m.imageWrapEl = _a22 ? b(m.imageEl, ".".concat(s.containerClass))[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
          m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
        }
        if (m.imageEl) {
          var _ref3 = function () {
              if (u.length < 2) return {
                x: null,
                y: null
              };
              var e = m.imageEl.getBoundingClientRect();
              return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y) / c];
            }(),
            _ref4 = _slicedToArray(_ref3, 2),
            _e49 = _ref4[0],
            _t40 = _ref4[1];
          m.originX = _e49, m.originY = _t40, m.imageEl.style.transitionDuration = "0ms";
        }
        p = !0;
      }
    }
    function S(e) {
      if (!E(e)) return;
      var s = t.params.zoom,
        a = t.zoom,
        i = u.findIndex(function (t) {
          return t.pointerId === e.pointerId;
        });
      i >= 0 && (u[i] = e), u.length < 2 || (d = !0, m.scaleMove = y(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + Math.pow(a.scale - m.maxRatio + 1, .5)), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - Math.pow(s.minRatio - a.scale + 1, .5)), m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")")));
    }
    function T(e) {
      if (!E(e)) return;
      if ("mouse" === e.pointerType && "pointerout" === e.type) return;
      var s = t.params.zoom,
        a = t.zoom,
        i = u.findIndex(function (t) {
          return t.pointerId === e.pointerId;
        });
      i >= 0 && u.splice(i, 1), l && d && (l = !1, d = !1, m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = "".concat(t.params.speed, "ms"), m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")"), c = a.scale, p = !1, a.scale > 1 && m.slideEl ? m.slideEl.classList.add("".concat(s.zoomedSlideClass)) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove("".concat(s.zoomedSlideClass)), 1 === a.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)));
    }
    function M(e) {
      if (!E(e) || !function (e) {
        var s = ".".concat(t.params.zoom.containerClass);
        return !!e.target.matches(s) || _toConsumableArray(t.hostEl.querySelectorAll(s)).filter(function (t) {
          return t.contains(e.target);
        }).length > 0;
      }(e)) return;
      var s = t.zoom;
      if (!m.imageEl) return;
      if (!f.isTouched || !m.slideEl) return;
      f.isMoved || (f.width = m.imageEl.offsetWidth, f.height = m.imageEl.offsetHeight, f.startX = o(m.imageWrapEl, "x") || 0, f.startY = o(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
      var a = f.width * s.scale,
        i = f.height * s.scale;
      if (a < m.slideWidth && i < m.slideHeight) return;
      f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
      if (Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (t.allowClick = !1), !f.isMoved && !p) {
        if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
        if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1);
      }
      e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0;
      var r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
        n = m.originX,
        l = m.originY;
      f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + r * (f.width - 2 * n), f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + r * (f.height - 2 * l), f.currentX < f.minX && (f.currentX = f.minX + 1 - Math.pow(f.minX - f.currentX + 1, .8)), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + Math.pow(f.currentX - f.maxX + 1, .8)), f.currentY < f.minY && (f.currentY = f.minY + 1 - Math.pow(f.minY - f.currentY + 1, .8)), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + Math.pow(f.currentY - f.maxY + 1, .8)), v.prevPositionX || (v.prevPositionX = f.touchesCurrent.x), v.prevPositionY || (v.prevPositionY = f.touchesCurrent.y), v.prevTime || (v.prevTime = Date.now()), v.x = (f.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2, v.y = (f.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2, Math.abs(f.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0), Math.abs(f.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0), v.prevPositionX = f.touchesCurrent.x, v.prevPositionY = f.touchesCurrent.y, v.prevTime = Date.now(), m.imageWrapEl.style.transform = "translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)");
    }
    function C() {
      var e = t.zoom;
      m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove("".concat(t.params.zoom.zoomedSlideClass)), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0);
    }
    function P(e) {
      var s = t.zoom,
        a = t.params.zoom;
      if (!m.slideEl) {
        e && e.target && (m.slideEl = e.target.closest(".".concat(t.params.slideClass, ", swiper-slide"))), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = h(t.slidesEl, ".".concat(t.params.slideActiveClass))[0] : m.slideEl = t.slides[t.activeIndex]);
        var _s29 = m.slideEl.querySelector(".".concat(a.containerClass));
        _s29 && (_s29 = _s29.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = _s29, m.imageWrapEl = _s29 ? b(m.imageEl, ".".concat(a.containerClass))[0] : void 0;
      }
      if (!m.imageEl || !m.imageWrapEl) return;
      var i, r, l, o, d, p, u, v, w, y, E, x, S, T, M, C, P, L;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add("".concat(a.zoomedSlideClass)), void 0 === f.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y);
      var z = "number" == typeof e ? e : null;
      1 === c && z && (i = void 0, r = void 0), s.scale = z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, c = z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, !e || 1 === c && z ? (u = 0, v = 0) : (P = m.slideEl.offsetWidth, L = m.slideEl.offsetHeight, l = g(m.slideEl).left + n.scrollX, o = g(m.slideEl).top + n.scrollY, d = l + P / 2 - i, p = o + L / 2 - r, w = m.imageEl.offsetWidth, y = m.imageEl.offsetHeight, E = w * s.scale, x = y * s.scale, S = Math.min(P / 2 - E / 2, 0), T = Math.min(L / 2 - x / 2, 0), M = -S, C = -T, u = d * s.scale, v = p * s.scale, u < S && (u = S), u > M && (u = M), v < T && (v = T), v > C && (v = C)), z && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(".concat(u, "px, ").concat(v, "px,0)"), m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(s.scale, ")");
    }
    function L() {
      var e = t.zoom,
        s = t.params.zoom;
      if (!m.slideEl) {
        t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = h(t.slidesEl, ".".concat(t.params.slideActiveClass))[0] : m.slideEl = t.slides[t.activeIndex];
        var _e50 = m.slideEl.querySelector(".".concat(s.containerClass));
        _e50 && (_e50 = _e50.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = _e50, m.imageWrapEl = _e50 ? b(m.imageEl, ".".concat(s.containerClass))[0] : void 0;
      }
      m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove("".concat(s.zoomedSlideClass)), m.slideEl = void 0, m.originX = 0, m.originY = 0);
    }
    function z(e) {
      var s = t.zoom;
      s.scale && 1 !== s.scale ? L() : P(e);
    }
    function A() {
      return {
        passiveListener: !!t.params.passiveListeners && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !t.params.passiveListeners || {
          passive: !1,
          capture: !0
        }
      };
    }
    function $() {
      var e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;
      var _A = A(),
        s = _A.passiveListener,
        a = _A.activeListenerWithCapture;
      t.wrapperEl.addEventListener("pointerdown", x, s), t.wrapperEl.addEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach(function (e) {
        t.wrapperEl.addEventListener(e, T, s);
      }), t.wrapperEl.addEventListener("pointermove", M, a);
    }
    function I() {
      var e = t.zoom;
      if (!e.enabled) return;
      e.enabled = !1;
      var _A2 = A(),
        s = _A2.passiveListener,
        a = _A2.activeListenerWithCapture;
      t.wrapperEl.removeEventListener("pointerdown", x, s), t.wrapperEl.removeEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach(function (e) {
        t.wrapperEl.removeEventListener(e, T, s);
      }), t.wrapperEl.removeEventListener("pointermove", M, a);
    }
    Object.defineProperty(t.zoom, "scale", {
      get: function get() {
        return w;
      },
      set: function set(e) {
        if (w !== e) {
          var _t41 = m.imageEl,
            _s30 = m.slideEl;
          i("zoomChange", e, _t41, _s30);
        }
        w = e;
      }
    }), a("init", function () {
      t.params.zoom.enabled && $();
    }), a("destroy", function () {
      I();
    }), a("touchStart", function (e, s) {
      t.zoom.enabled && function (e) {
        var s = t.device;
        if (!m.imageEl) return;
        if (f.isTouched) return;
        s.android && e.cancelable && e.preventDefault(), f.isTouched = !0;
        var a = u.length > 0 ? u[0] : e;
        f.touchesStart.x = a.pageX, f.touchesStart.y = a.pageY;
      }(s);
    }), a("touchEnd", function (e, s) {
      t.zoom.enabled && function () {
        var e = t.zoom;
        if (!m.imageEl) return;
        if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
        f.isTouched = !1, f.isMoved = !1;
        var s = 300,
          a = 300;
        var i = v.x * s,
          r = f.currentX + i,
          n = v.y * a,
          l = f.currentY + n;
        0 !== v.x && (s = Math.abs((r - f.currentX) / v.x)), 0 !== v.y && (a = Math.abs((l - f.currentY) / v.y));
        var o = Math.max(s, a);
        f.currentX = r, f.currentY = l;
        var d = f.width * e.scale,
          c = f.height * e.scale;
        f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.imageWrapEl.style.transitionDuration = "".concat(o, "ms"), m.imageWrapEl.style.transform = "translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)");
      }();
    }), a("doubleTap", function (e, s) {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && z(s);
    }), a("transitionEnd", function () {
      t.zoom.enabled && t.params.zoom.enabled && C();
    }), a("slideChange", function () {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
    }), Object.assign(t.zoom, {
      enable: $,
      disable: I,
      "in": P,
      out: L,
      toggle: z
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      a = e.on;
    function i(e, t) {
      var s = function () {
        var e, t, s;
        return function (a, i) {
          for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
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
      if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
        var _e51 = document.querySelector(t.params.controller.control);
        if (_e51 && _e51.swiper) t.controller.control = _e51.swiper;else if (_e51) {
          var _s31 = function _s31(a) {
            t.controller.control = a.detail[0], t.update(), _e51.removeEventListener("init", _s31);
          };
          _e51.addEventListener("init", _s31);
        }
      } else t.controller.control = t.params.controller.control;
    }), a("update", function () {
      r();
    }), a("resize", function () {
      r();
    }), a("observerUpdate", function () {
      r();
    }), a("setTranslate", function (e, s, a) {
      t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a);
    }), a("setTransition", function (e, s, a) {
      t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a);
    }), Object.assign(t.controller, {
      setTranslate: function setTranslate(e, s) {
        var a = t.controller.control;
        var r, n;
        var l = t.constructor;
        function o(e) {
          if (e.destroyed) return;
          var s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function (e) {
            t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid);
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(a)) for (var _e52 = 0; _e52 < a.length; _e52 += 1) a[_e52] !== s && a[_e52] instanceof l && o(a[_e52]);else a instanceof l && s !== a && o(a);
      },
      setTransition: function setTransition(e, s) {
        var a = t.constructor,
          i = t.controller.control;
        var r;
        function l(s) {
          s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && n(function () {
            s.updateAutoHeight();
          }), y(s.wrapperEl, function () {
            i && s.transitionEnd();
          })));
        }
        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && l(i[r]);else i instanceof a && s !== i && l(i);
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
        slideRole: "group",
        id: null
      }
    }), t.a11y = {
      clicked: !1
    };
    var i = null;
    function r(e) {
      var t = i;
      0 !== t.length && (t.innerHTML = "", t.innerHTML = e);
    }
    var n = function n(e) {
      return (Array.isArray(e) ? e : [e]).filter(function (e) {
        return !!e;
      });
    };
    function l(e) {
      (e = n(e)).forEach(function (e) {
        e.setAttribute("tabIndex", "0");
      });
    }
    function o(e) {
      (e = n(e)).forEach(function (e) {
        e.setAttribute("tabIndex", "-1");
      });
    }
    function d(e, t) {
      (e = n(e)).forEach(function (e) {
        e.setAttribute("role", t);
      });
    }
    function c(e, t) {
      (e = n(e)).forEach(function (e) {
        e.setAttribute("aria-roledescription", t);
      });
    }
    function p(e, t) {
      (e = n(e)).forEach(function (e) {
        e.setAttribute("aria-label", t);
      });
    }
    function u(e) {
      (e = n(e)).forEach(function (e) {
        e.setAttribute("aria-disabled", !0);
      });
    }
    function m(e) {
      (e = n(e)).forEach(function (e) {
        e.setAttribute("aria-disabled", !1);
      });
    }
    function h(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      var s = t.params.a11y,
        a = e.target;
      t.pagination && t.pagination.el && (a === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(ee(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && a === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.prevEl && a === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.matches(ee(t.params.pagination.bulletClass)) && a.click());
    }
    function g() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
    }
    function v() {
      return g() && t.params.pagination.clickable;
    }
    var b = function b(e, t, s) {
        l(e), "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", h)), p(e, s), function (e, t) {
          (e = n(e)).forEach(function (e) {
            e.setAttribute("aria-controls", t);
          });
        }(e, t);
      },
      y = function y() {
        t.a11y.clicked = !0;
      },
      E = function E() {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
      x = function x(e) {
        if (t.a11y.clicked) return;
        var s = e.target.closest(".".concat(t.params.slideClass, ", swiper-slide"));
        if (!s || !t.slides.includes(s)) return;
        var a = t.slides.indexOf(s) === t.activeIndex,
          i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
        a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0));
      },
      S = function S() {
        var e = t.params.a11y;
        e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
        var s = t.slides.length;
        e.slideLabelMessage && t.slides.forEach(function (a, i) {
          var r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
          p(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s));
        });
      },
      T = function T() {
        var e = t.params.a11y;
        t.el.append(i);
        var s = t.el;
        e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
        var a = t.wrapperEl,
          r = e.id || a.getAttribute("id") || "swiper-wrapper-".concat((l = 16, void 0 === l && (l = 16), "x".repeat(l).replace(/x/g, function () {
            return Math.round(16 * Math.random()).toString(16);
          })));
        var l;
        var o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        var d;
        d = r, n(a).forEach(function (e) {
          e.setAttribute("id", d);
        }), function (e, t) {
          (e = n(e)).forEach(function (e) {
            e.setAttribute("aria-live", t);
          });
        }(a, o), S();
        var _ref5 = t.navigation ? t.navigation : {},
          u = _ref5.nextEl,
          m = _ref5.prevEl;
        if (u = n(u), m = n(m), u && u.forEach(function (t) {
          return b(t, r, e.nextSlideMessage);
        }), m && m.forEach(function (t) {
          return b(t, r, e.prevSlideMessage);
        }), v()) {
          (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach(function (e) {
            e.addEventListener("keydown", h);
          });
        }
        t.el.addEventListener("focus", x, !0), t.el.addEventListener("pointerdown", y, !0), t.el.addEventListener("pointerup", E, !0);
      };
    a("beforeInit", function () {
      i = f("span", t.params.a11y.notificationClass), i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true");
    }), a("afterInit", function () {
      t.params.a11y.enabled && T();
    }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", function () {
      t.params.a11y.enabled && S();
    }), a("fromEdge toEdge afterInit lock unlock", function () {
      t.params.a11y.enabled && function () {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        var _t$navigation5 = t.navigation,
          e = _t$navigation5.nextEl,
          s = _t$navigation5.prevEl;
        s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))), e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
      }();
    }), a("paginationUpdate", function () {
      t.params.a11y.enabled && function () {
        var e = t.params.a11y;
        g() && t.pagination.bullets.forEach(function (s) {
          t.params.pagination.clickable && (l(s), t.params.pagination.renderBullet || (d(s, "button"), p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, w(s) + 1)))), s.matches(ee(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current");
        });
      }();
    }), a("destroy", function () {
      t.params.a11y.enabled && function () {
        i && i.remove();
        var _ref6 = t.navigation ? t.navigation : {},
          e = _ref6.nextEl,
          s = _ref6.prevEl;
        e = n(e), s = n(s), e && e.forEach(function (e) {
          return e.removeEventListener("keydown", h);
        }), s && s.forEach(function (e) {
          return e.removeEventListener("keydown", h);
        }), v() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach(function (e) {
          e.removeEventListener("keydown", h);
        });
        t.el.removeEventListener("focus", x, !0), t.el.removeEventListener("pointerdown", y, !0), t.el.removeEventListener("pointerup", E, !0);
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
        key: "slides",
        keepQuery: !1
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
        var o = t.slides[s];
        var d = l(o.getAttribute("data-history"));
        if (t.params.history.root.length > 0) {
          var _s32 = t.params.history.root;
          "/" === _s32[_s32.length - 1] && (_s32 = _s32.slice(0, _s32.length - 1)), d = "".concat(_s32, "/").concat(e ? "".concat(e, "/") : "").concat(d);
        } else n.pathname.includes(e) || (d = "".concat(e ? "".concat(e, "/") : "").concat(d));
        t.params.history.keepQuery && (d += n.search);
        var c = a.history.state;
        c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
          value: d
        }, null, d) : a.history.pushState({
          value: d
        }, null, d));
      },
      c = function c(e, s, a) {
        if (s) for (var _i14 = 0, _r11 = t.slides.length; _i14 < _r11; _i14 += 1) {
          var _r12 = t.slides[_i14];
          if (l(_r12.getAttribute("data-history")) === s) {
            var _s33 = t.getSlideIndex(_r12);
            t.slideTo(_s33, e, a);
          }
        } else t.slideTo(0, e, a);
      },
      p = function p() {
        n = o(t.params.url), c(t.params.speed, n.value, !1);
      };
    a("init", function () {
      t.params.history.enabled && function () {
        var e = r();
        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p);
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
      d = r();
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex: function getSlideIndex(e, s) {
          if (t.virtual && t.params.virtual.enabled) {
            var _e53 = t.slides.filter(function (e) {
              return e.getAttribute("data-hash") === s;
            })[0];
            if (!_e53) return 0;
            return parseInt(_e53.getAttribute("data-swiper-slide-index"), 10);
          }
          return t.getSlideIndex(h(t.slidesEl, ".".concat(t.params.slideClass, "[data-hash=\"").concat(s, "\"], swiper-slide[data-hash=\"").concat(s, "\"]"))[0]);
        }
      }
    });
    var c = function c() {
        i("hashChange");
        var e = o.location.hash.replace("#", ""),
          s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector("[data-swiper-slide-index=\"".concat(t.activeIndex, "\"]")) : t.slides[t.activeIndex];
        if (e !== (s ? s.getAttribute("data-hash") : "")) {
          var _s34 = t.params.hashNavigation.getSlideIndex(t, e);
          if (void 0 === _s34 || Number.isNaN(_s34)) return;
          t.slideTo(_s34);
        }
      },
      p = function p() {
        if (!l || !t.params.hashNavigation.enabled) return;
        var e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector("[data-swiper-slide-index=\"".concat(t.activeIndex, "\"]")) : t.slides[t.activeIndex],
          s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
        t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, "#".concat(s) || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"));
      };
    n("init", function () {
      t.params.hashNavigation.enabled && function () {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        var e = o.location.hash.replace("#", "");
        if (e) {
          var _s35 = 0,
            _a23 = t.params.hashNavigation.getSlideIndex(t, e);
          t.slideTo(_a23 || 0, _s35, t.params.runCallbacksOnInit, !0);
        }
        t.params.hashNavigation.watchState && d.addEventListener("hashchange", c);
      }();
    }), n("destroy", function () {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c);
    }), n("transitionEnd _freeModeNoMomentumRelease", function () {
      l && p();
    }), n("slideChange", function () {
      l && t.params.cssMode && p();
    });
  }, function (e) {
    var t,
      s,
      i = e.swiper,
      r = e.extendParams,
      n = e.on,
      l = e.emit,
      o = e.params;
    i.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, r({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    var d,
      c,
      p,
      u,
      m,
      h,
      f,
      g = o && o.autoplay ? o.autoplay.delay : 3e3,
      v = o && o.autoplay ? o.autoplay.delay : 3e3,
      w = new Date().getTime;
    function b(e) {
      i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", b), M());
    }
    var y = function y() {
        if (i.destroyed || !i.autoplay.running) return;
        i.autoplay.paused ? c = !0 : c && (v = d, c = !1);
        var e = i.autoplay.paused ? d : w + v - new Date().getTime();
        i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / g), s = requestAnimationFrame(function () {
          y();
        });
      },
      E = function E(e) {
        if (i.destroyed || !i.autoplay.running) return;
        cancelAnimationFrame(s), y();
        var a = void 0 === e ? i.params.autoplay.delay : e;
        g = i.params.autoplay.delay, v = i.params.autoplay.delay;
        var r = function () {
          var e;
          if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter(function (e) {
            return e.classList.contains("swiper-slide-active");
          })[0] : i.slides[i.activeIndex], !e) return;
          return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        }();
        !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, g = r, v = r), d = a;
        var n = i.params.speed,
          o = function o() {
            i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (w = new Date().getTime(), requestAnimationFrame(function () {
              E();
            })));
          };
        return a > 0 ? (clearTimeout(t), t = setTimeout(function () {
          o();
        }, a)) : requestAnimationFrame(function () {
          o();
        }), a;
      },
      x = function x() {
        i.autoplay.running = !0, E(), l("autoplayStart");
      },
      S = function S() {
        i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop");
      },
      T = function T(e, s) {
        if (i.destroyed || !i.autoplay.running) return;
        clearTimeout(t), e || (f = !0);
        var a = function a() {
          l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", b) : M();
        };
        if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
        var r = d || i.params.autoplay.delay;
        d = r - (new Date().getTime() - w), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a());
      },
      M = function M() {
        i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (w = new Date().getTime(), f ? (f = !1, E(d)) : E(), i.autoplay.paused = !1, l("autoplayResume"));
      },
      C = function C() {
        if (i.destroyed || !i.autoplay.running) return;
        var e = a();
        "hidden" === e.visibilityState && (f = !0, T(!0)), "visible" === e.visibilityState && M();
      },
      P = function P(e) {
        "mouse" === e.pointerType && (f = !0, i.animating || i.autoplay.paused || T(!0));
      },
      L = function L(e) {
        "mouse" === e.pointerType && i.autoplay.paused && M();
      };
    n("init", function () {
      i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", P), i.el.addEventListener("pointerleave", L)), a().addEventListener("visibilitychange", C), w = new Date().getTime(), x());
    }), n("destroy", function () {
      i.el.removeEventListener("pointerenter", P), i.el.removeEventListener("pointerleave", L), a().removeEventListener("visibilitychange", C), i.autoplay.running && S();
    }), n("beforeTransitionStart", function (e, t, s) {
      !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
    }), n("sliderFirstMove", function () {
      !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? S() : (p = !0, u = !1, f = !1, m = setTimeout(function () {
        f = !0, u = !0, T(!0);
      }, 200)));
    }), n("touchEnd", function () {
      if (!i.destroyed && i.autoplay.running && p) {
        if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
        u && i.params.cssMode && M(), u = !1, p = !1;
      }
    }), n("slideChange", function () {
      !i.destroyed && i.autoplay.running && (h = !0);
    }), Object.assign(i.autoplay, {
      start: x,
      stop: S,
      pause: T,
      resume: M
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      i = e.on;
    s({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    var r = !1,
      n = !1;
    function l() {
      var e = t.thumbs.swiper;
      if (!e || e.destroyed) return;
      var s = e.clickedIndex,
        a = e.clickedSlide;
      if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      var i;
      i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
    }
    function o() {
      var e = t.params.thumbs;
      if (r) return !1;
      r = !0;
      var s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(t.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), t.thumbs.swiper.update();else if (d(e.swiper)) {
        var _a24 = Object.assign({}, e.swiper);
        Object.assign(_a24, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new s(_a24), n = !0;
      }
      return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0;
    }
    function c(e) {
      var s = t.thumbs.swiper;
      if (!s || s.destroyed) return;
      var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
      var i = 1;
      var r = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach(function (e) {
        return e.classList.remove(r);
      }), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _e54 = 0; _e54 < i; _e54 += 1) h(s.slidesEl, "[data-swiper-slide-index=\"".concat(t.realIndex + _e54, "\"]")).forEach(function (e) {
        e.classList.add(r);
      });else for (var _e55 = 0; _e55 < i; _e55 += 1) s.slides[t.realIndex + _e55] && s.slides[t.realIndex + _e55].classList.add(r);
      var n = t.params.thumbs.autoScrollOffset,
        l = n && !s.params.loop;
      if (t.realIndex !== s.realIndex || l) {
        var _i15 = s.activeIndex;
        var _r13, _o7;
        if (s.params.loop) {
          var _e56 = s.slides.filter(function (e) {
            return e.getAttribute("data-swiper-slide-index") === "".concat(t.realIndex);
          })[0];
          _r13 = s.slides.indexOf(_e56), _o7 = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else _r13 = t.realIndex, _o7 = _r13 > t.previousIndex ? "next" : "prev";
        l && (_r13 += "next" === _o7 ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_r13) < 0 && (s.params.centeredSlides ? _r13 = _r13 > _i15 ? _r13 - Math.floor(a / 2) + 1 : _r13 + Math.floor(a / 2) - 1 : _r13 > _i15 && s.params.slidesPerGroup, s.slideTo(_r13, e ? 0 : void 0));
      }
    }
    t.thumbs = {
      swiper: null
    }, i("beforeInit", function () {
      var e = t.params.thumbs;
      if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
        var _s36 = a(),
          _i16 = function _i16() {
            var a = "string" == typeof e.swiper ? _s36.querySelector(e.swiper) : e.swiper;
            if (a && a.swiper) e.swiper = a.swiper, o(), c(!0);else if (a) {
              var _s37 = function _s37(i) {
                e.swiper = i.detail[0], a.removeEventListener("init", _s37), o(), c(!0), e.swiper.update(), t.update();
              };
              a.addEventListener("init", _s37);
            }
            return a;
          },
          _r14 = function _r14() {
            if (t.destroyed) return;
            _i16() || requestAnimationFrame(_r14);
          };
        requestAnimationFrame(_r14);
      } else o(), c(!0);
    }), i("slideChange update resize observerUpdate", function () {
      c();
    }), i("setTransition", function (e, s) {
      var a = t.thumbs.swiper;
      a && !a.destroyed && a.setTransition(s);
    }), i("beforeDestroy", function () {
      var e = t.thumbs.swiper;
      e && !e.destroyed && n && e.destroy();
    }), Object.assign(t.thumbs, {
      init: o,
      update: c
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
          if (t.params.cssMode) return;
          var e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function onTouchMove() {
          if (t.params.cssMode) return;
          var e = t.touchEventsData,
            s = t.touches;
          0 === e.velocities.length && e.velocities.push({
            position: s[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: l()
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          var s = e.currentPos;
          if (t.params.cssMode) return;
          var r = t.params,
            n = t.wrapperEl,
            o = t.rtlTranslate,
            d = t.snapGrid,
            c = t.touchEventsData,
            p = l() - c.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (c.velocities.length > 1) {
                var _e57 = c.velocities.pop(),
                  _s38 = c.velocities.pop(),
                  _a25 = _e57.position - _s38.position,
                  _i17 = _e57.time - _s38.time;
                t.velocity = _a25 / _i17, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (_i17 > 150 || l() - _e57.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
              var _e58 = 1e3 * r.freeMode.momentumRatio;
              var _s39 = t.velocity * _e58;
              var _p3 = t.translate + _s39;
              o && (_p3 = -_p3);
              var _u3,
                _m2 = !1;
              var _h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
              var _f;
              if (_p3 < t.maxTranslate()) r.freeMode.momentumBounce ? (_p3 + t.maxTranslate() < -_h && (_p3 = t.maxTranslate() - _h), _u3 = t.maxTranslate(), _m2 = !0, c.allowMomentumBounce = !0) : _p3 = t.maxTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (_p3 > t.minTranslate()) r.freeMode.momentumBounce ? (_p3 - t.minTranslate() > _h && (_p3 = t.minTranslate() + _h), _u3 = t.minTranslate(), _m2 = !0, c.allowMomentumBounce = !0) : _p3 = t.minTranslate(), r.loop && r.centeredSlides && (_f = !0);else if (r.freeMode.sticky) {
                var _e59;
                for (var _t42 = 0; _t42 < d.length; _t42 += 1) if (d[_t42] > -_p3) {
                  _e59 = _t42;
                  break;
                }
                _p3 = Math.abs(d[_e59] - _p3) < Math.abs(d[_e59 - 1] - _p3) || "next" === t.swipeDirection ? d[_e59] : d[_e59 - 1], _p3 = -_p3;
              }
              if (_f && i("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (_e58 = o ? Math.abs((-_p3 - t.translate) / t.velocity) : Math.abs((_p3 - t.translate) / t.velocity), r.freeMode.sticky) {
                  var _s40 = Math.abs((o ? -_p3 : _p3) - t.translate),
                    _a26 = t.slidesSizesGrid[t.activeIndex];
                  _e58 = _s40 < _a26 ? r.speed : _s40 < 2 * _a26 ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode.momentumBounce && _m2 ? (t.updateProgress(_u3), t.setTransition(_e58), t.setTranslate(_p3), t.transitionStart(!0, t.swipeDirection), t.animating = !0, y(n, function () {
                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(function () {
                  t.setTranslate(_u3), y(n, function () {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(_p3), t.setTransition(_e58), t.setTranslate(_p3), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, y(n, function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(_p3), t.updateActiveIndex(), t.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease");
            }
            (!r.freeMode.momentum || p >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
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
    });
    var n = function n() {
      var e = i.params.spaceBetween;
      return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * i.size : "string" == typeof e && (e = parseFloat(e)), e;
    };
    i.grid = {
      initSlides: function initSlides(e) {
        var r = i.params.slidesPerView,
          _i$params$grid = i.params.grid,
          n = _i$params$grid.rows,
          l = _i$params$grid.fill;
        a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n)), s = t / n;
      },
      updateSlide: function updateSlide(e, r, l, o) {
        var d = i.params.slidesPerGroup,
          c = n(),
          _i$params$grid2 = i.params.grid,
          p = _i$params$grid2.rows,
          u = _i$params$grid2.fill;
        var m, h, f;
        if ("row" === u && d > 1) {
          var _s41 = Math.floor(e / (d * p)),
            _a27 = e - p * d * _s41,
            _i18 = 0 === _s41 ? d : Math.min(Math.ceil((l - _s41 * p * d) / p), d);
          f = Math.floor(_a27 / _i18), h = _a27 - f * _i18 + _s41 * d, m = h + f * t / p, r.style.order = m;
        } else "column" === u ? (h = Math.floor(e / p), f = e - h * p, (h > a || h === a && f === p - 1) && (f += 1, f >= p && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
        r.row = f, r.column = h, r.style[o("margin-top")] = 0 !== f ? c && "".concat(c, "px") : "";
      },
      updateWrapperSize: function updateWrapperSize(e, s, a) {
        var _i$params = i.params,
          r = _i$params.centeredSlides,
          l = _i$params.roundLengths,
          o = n(),
          d = i.params.grid.rows;
        if (i.virtualSize = (e + o) * t, i.virtualSize = Math.ceil(i.virtualSize / d) - o, i.wrapperEl.style[a("width")] = "".concat(i.virtualSize + o, "px"), r) {
          var _e60 = [];
          for (var _t43 = 0; _t43 < s.length; _t43 += 1) {
            var _a28 = s[_t43];
            l && (_a28 = Math.floor(_a28)), s[_t43] < i.virtualSize + s[0] && _e60.push(_a28);
          }
          s.splice(0, s.length), s.push.apply(s, _e60);
        }
      }
    };
  }, function (e) {
    var t = e.swiper;
    Object.assign(t, {
      appendSlide: te.bind(t),
      prependSlide: se.bind(t),
      addSlide: ae.bind(t),
      removeSlide: ie.bind(t),
      removeAllSlides: re.bind(t)
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      a = e.on;
    s({
      fadeEffect: {
        crossFade: !1
      }
    }), ne({
      effect: "fade",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides;
        t.params.fadeEffect;
        for (var _s42 = 0; _s42 < e.length; _s42 += 1) {
          var _e61 = t.slides[_s42];
          var _a29 = -_e61.swiperSlideOffset;
          t.params.virtualTranslate || (_a29 -= t.translate);
          var _i19 = 0;
          t.isHorizontal() || (_i19 = _a29, _a29 = 0);
          var _r15 = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_e61.progress), 0) : 1 + Math.min(Math.max(_e61.progress, -1), 0),
            _n7 = le(0, _e61);
          _n7.style.opacity = _r15, _n7.style.transform = "translate3d(".concat(_a29, "px, ").concat(_i19, "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var s = t.slides.map(function (e) {
          return m(e);
        });
        s.forEach(function (t) {
          t.style.transitionDuration = "".concat(e, "ms");
        }), oe({
          swiper: t,
          duration: e,
          transformElements: s,
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
    });
    var i = function i(e, t, s) {
      var a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
        i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
      a || (a = f("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = f("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0));
    };
    ne({
      effect: "cube",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.el,
          s = t.wrapperEl,
          a = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          c = t.params.cubeEffect,
          p = t.isHorizontal(),
          u = t.virtual && t.params.virtual.enabled;
        var m,
          h = 0;
        c.shadow && (p ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"), m || (m = f("div", "swiper-cube-shadow"), t.wrapperEl.append(m)), m.style.height = "".concat(r, "px")) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = f("div", "swiper-cube-shadow"), e.append(m))));
        for (var _e62 = 0; _e62 < a.length; _e62 += 1) {
          var _t44 = a[_e62];
          var _s43 = _e62;
          u && (_s43 = parseInt(_t44.getAttribute("data-swiper-slide-index"), 10));
          var _r16 = 90 * _s43,
            _n8 = Math.floor(_r16 / 360);
          l && (_r16 = -_r16, _n8 = Math.floor(-_r16 / 360));
          var _d4 = Math.max(Math.min(_t44.progress, 1), -1);
          var _m3 = 0,
            _f2 = 0,
            _g = 0;
          _s43 % 4 == 0 ? (_m3 = 4 * -_n8 * o, _g = 0) : (_s43 - 1) % 4 == 0 ? (_m3 = 0, _g = 4 * -_n8 * o) : (_s43 - 2) % 4 == 0 ? (_m3 = o + 4 * _n8 * o, _g = o) : (_s43 - 3) % 4 == 0 && (_m3 = -o, _g = 3 * o + 4 * o * _n8), l && (_m3 = -_m3), p || (_f2 = _m3, _m3 = 0);
          var _v = "rotateX(".concat(p ? 0 : -_r16, "deg) rotateY(").concat(p ? _r16 : 0, "deg) translate3d(").concat(_m3, "px, ").concat(_f2, "px, ").concat(_g, "px)");
          _d4 <= 1 && _d4 > -1 && (h = 90 * _s43 + 90 * _d4, l && (h = 90 * -_s43 - 90 * _d4)), _t44.style.transform = _v, c.slideShadows && i(_t44, _d4, p);
        }
        if (s.style.transformOrigin = "50% 50% -".concat(o / 2, "px"), s.style["-webkit-transform-origin"] = "50% 50% -".concat(o / 2, "px"), c.shadow) if (p) m.style.transform = "translate3d(0px, ".concat(r / 2 + c.shadowOffset, "px, ").concat(-r / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")");else {
          var _e63 = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            _t45 = 1.5 - (Math.sin(2 * _e63 * Math.PI / 360) / 2 + Math.cos(2 * _e63 * Math.PI / 360) / 2),
            _s44 = c.shadowScale,
            _a30 = c.shadowScale / _t45,
            _i20 = c.shadowOffset;
          m.style.transform = "scale3d(".concat(_s44, ", 1, ").concat(_a30, ") translate3d(0px, ").concat(n / 2 + _i20, "px, ").concat(-n / 2 / _a30, "px) rotateX(-90deg)");
        }
        var g = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
        s.style.transform = "translate3d(0px,0,".concat(g, "px) rotateX(").concat(t.isHorizontal() ? 0 : h, "deg) rotateY(").concat(t.isHorizontal() ? -h : 0, "deg)"), s.style.setProperty("--swiper-cube-translate-z", "".concat(g, "px"));
      },
      setTransition: function setTransition(e) {
        var s = t.el,
          a = t.slides;
        if (a.forEach(function (t) {
          t.style.transitionDuration = "".concat(e, "ms"), t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (t) {
            t.style.transitionDuration = "".concat(e, "ms");
          });
        }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
          var _t46 = s.querySelector(".swiper-cube-shadow");
          _t46 && (_t46.style.transitionDuration = "".concat(e, "ms"));
        }
      },
      recreateShadows: function recreateShadows() {
        var e = t.isHorizontal();
        t.slides.forEach(function (t) {
          var s = Math.max(Math.min(t.progress, 1), -1);
          i(t, s, e);
        });
      },
      getEffectParams: function getEffectParams() {
        return t.params.cubeEffect;
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
        limitRotation: !0
      }
    });
    var i = function i(e, s) {
      var a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
        i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
      a || (a = de("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = de("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0));
    };
    ne({
      effect: "flip",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
          s = t.rtlTranslate,
          a = t.params.flipEffect;
        for (var _r17 = 0; _r17 < e.length; _r17 += 1) {
          var _n9 = e[_r17];
          var _l8 = _n9.progress;
          t.params.flipEffect.limitRotation && (_l8 = Math.max(Math.min(_n9.progress, 1), -1));
          var _o8 = _n9.swiperSlideOffset;
          var _d5 = -180 * _l8,
            _c3 = 0,
            _p4 = t.params.cssMode ? -_o8 - t.translate : -_o8,
            _u4 = 0;
          t.isHorizontal() ? s && (_d5 = -_d5) : (_u4 = _p4, _p4 = 0, _c3 = -_d5, _d5 = 0), _n9.style.zIndex = -Math.abs(Math.round(_l8)) + e.length, a.slideShadows && i(_n9, _l8);
          var _m4 = "translate3d(".concat(_p4, "px, ").concat(_u4, "px, 0px) rotateX(").concat(_c3, "deg) rotateY(").concat(_d5, "deg)");
          le(0, _n9).style.transform = _m4;
        }
      },
      setTransition: function setTransition(e) {
        var s = t.slides.map(function (e) {
          return m(e);
        });
        s.forEach(function (t) {
          t.style.transitionDuration = "".concat(e, "ms"), t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (t) {
            t.style.transitionDuration = "".concat(e, "ms");
          });
        }), oe({
          swiper: t,
          duration: e,
          transformElements: s
        });
      },
      recreateShadows: function recreateShadows() {
        t.params.flipEffect, t.slides.forEach(function (e) {
          var s = e.progress;
          t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s);
        });
      },
      getEffectParams: function getEffectParams() {
        return t.params.flipEffect;
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
        slideShadows: !0
      }
    }), ne({
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
        for (var _e64 = 0, _t47 = a.length; _e64 < _t47; _e64 += 1) {
          var _t48 = a[_e64],
            _s45 = i[_e64],
            _l9 = (o - _t48.swiperSlideOffset - _s45 / 2) / _s45,
            _p5 = "function" == typeof r.modifier ? r.modifier(_l9) : _l9 * r.modifier;
          var _u5 = n ? d * _p5 : 0,
            _m5 = n ? 0 : d * _p5,
            _h2 = -c * Math.abs(_p5),
            _f3 = r.stretch;
          "string" == typeof _f3 && -1 !== _f3.indexOf("%") && (_f3 = parseFloat(r.stretch) / 100 * _s45);
          var _g2 = n ? 0 : _f3 * _p5,
            _v2 = n ? _f3 * _p5 : 0,
            _w = 1 - (1 - r.scale) * Math.abs(_p5);
          Math.abs(_v2) < .001 && (_v2 = 0), Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_h2) < .001 && (_h2 = 0), Math.abs(_u5) < .001 && (_u5 = 0), Math.abs(_m5) < .001 && (_m5 = 0), Math.abs(_w) < .001 && (_w = 0);
          var _b = "translate3d(".concat(_v2, "px,").concat(_g2, "px,").concat(_h2, "px)  rotateX(").concat(_m5, "deg) rotateY(").concat(_u5, "deg) scale(").concat(_w, ")");
          if (le(0, _t48).style.transform = _b, _t48.style.zIndex = 1 - Math.abs(Math.round(_p5)), r.slideShadows) {
            var _e65 = n ? _t48.querySelector(".swiper-slide-shadow-left") : _t48.querySelector(".swiper-slide-shadow-top"),
              _s46 = n ? _t48.querySelector(".swiper-slide-shadow-right") : _t48.querySelector(".swiper-slide-shadow-bottom");
            _e65 || (_e65 = de("coverflow", _t48, n ? "left" : "top")), _s46 || (_s46 = de("coverflow", _t48, n ? "right" : "bottom")), _e65 && (_e65.style.opacity = _p5 > 0 ? _p5 : 0), _s46 && (_s46.style.opacity = -_p5 > 0 ? -_p5 : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        t.slides.map(function (e) {
          return m(e);
        }).forEach(function (t) {
          t.style.transitionDuration = "".concat(e, "ms"), t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function (t) {
            t.style.transitionDuration = "".concat(e, "ms");
          });
        });
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
    ne({
      effect: "creative",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
          s = t.wrapperEl,
          a = t.slidesSizesGrid,
          r = t.params.creativeEffect,
          n = r.progressMultiplier,
          l = t.params.centeredSlides;
        if (l) {
          var _e66 = a[0] / 2 - t.params.slidesOffsetBefore || 0;
          s.style.transform = "translateX(calc(50% - ".concat(_e66, "px))");
        }
        var _loop = function _loop() {
          var a = e[_s47],
            o = a.progress,
            d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
          var c = d;
          l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
          var p = a.swiperSlideOffset,
            u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
            m = [0, 0, 0];
          var h = !1;
          t.isHorizontal() || (u[1] = u[0], u[0] = 0);
          var f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, h = !0) : d > 0 && (f = r.prev, h = !0), u.forEach(function (e, t) {
            u[t] = "calc(".concat(e, "px + (").concat(i(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
          }), m.forEach(function (e, t) {
            m[t] = f.rotate[t] * Math.abs(d * n);
          }), a.style.zIndex = -Math.abs(Math.round(o)) + e.length;
          var g = u.join(", "),
            v = "rotateX(".concat(m[0], "deg) rotateY(").concat(m[1], "deg) rotateZ(").concat(m[2], "deg)"),
            w = c < 0 ? "scale(".concat(1 + (1 - f.scale) * c * n, ")") : "scale(".concat(1 - (1 - f.scale) * c * n, ")"),
            b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
            y = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);
          if (h && f.shadow || !h) {
            var _e67 = a.querySelector(".swiper-slide-shadow");
            if (!_e67 && f.shadow && (_e67 = de("creative", a)), _e67) {
              var _t49 = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
              _e67.style.opacity = Math.min(Math.max(Math.abs(_t49), 0), 1);
            }
          }
          var E = le(0, a);
          E.style.transform = y, E.style.opacity = b, f.origin && (E.style.transformOrigin = f.origin);
        };
        for (var _s47 = 0; _s47 < e.length; _s47 += 1) {
          _loop();
        }
      },
      setTransition: function setTransition(e) {
        var s = t.slides.map(function (e) {
          return m(e);
        });
        s.forEach(function (t) {
          t.style.transitionDuration = "".concat(e, "ms"), t.querySelectorAll(".swiper-slide-shadow").forEach(function (t) {
            t.style.transitionDuration = "".concat(e, "ms");
          });
        }), oe({
          swiper: t,
          duration: e,
          transformElements: s,
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
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    }), ne({
      effect: "cards",
      swiper: t,
      on: a,
      setTranslate: function setTranslate() {
        var e = t.slides,
          s = t.activeIndex,
          a = t.rtlTranslate,
          i = t.params.cardsEffect,
          _t$touchEventsData = t.touchEventsData,
          r = _t$touchEventsData.startTranslate,
          n = _t$touchEventsData.isTouched,
          l = a ? -t.translate : t.translate;
        for (var _o9 = 0; _o9 < e.length; _o9 += 1) {
          var _d6 = e[_o9],
            _c4 = _d6.progress,
            _p6 = Math.min(Math.max(_c4, -4), 4);
          var _u6 = _d6.swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = "translateX(".concat(t.minTranslate(), "px)")), t.params.centeredSlides && t.params.cssMode && (_u6 -= e[0].swiperSlideOffset);
          var _m6 = t.params.cssMode ? -_u6 - t.translate : -_u6,
            _h3 = 0;
          var _f4 = -100 * Math.abs(_p6);
          var _g3 = 1,
            _v3 = -i.perSlideRotate * _p6,
            _w2 = i.perSlideOffset - .75 * Math.abs(_p6);
          var _b2 = t.virtual && t.params.virtual.enabled ? t.virtual.from + _o9 : _o9,
            _y = (_b2 === s || _b2 === s - 1) && _p6 > 0 && _p6 < 1 && (n || t.params.cssMode) && l < r,
            _E = (_b2 === s || _b2 === s + 1) && _p6 < 0 && _p6 > -1 && (n || t.params.cssMode) && l > r;
          if (_y || _E) {
            var _e68 = Math.pow(1 - Math.abs((Math.abs(_p6) - .5) / .5), .5);
            _v3 += -28 * _p6 * _e68, _g3 += -.5 * _e68, _w2 += 96 * _e68, _h3 = -25 * _e68 * Math.abs(_p6) + "%";
          }
          if (_m6 = _p6 < 0 ? "calc(".concat(_m6, "px ").concat(a ? "-" : "+", " (").concat(_w2 * Math.abs(_p6), "%))") : _p6 > 0 ? "calc(".concat(_m6, "px ").concat(a ? "-" : "+", " (-").concat(_w2 * Math.abs(_p6), "%))") : "".concat(_m6, "px"), !t.isHorizontal()) {
            var _e69 = _h3;
            _h3 = _m6, _m6 = _e69;
          }
          var _x = _p6 < 0 ? "" + (1 + (1 - _g3) * _p6) : "" + (1 - (1 - _g3) * _p6),
            _S = "\n        translate3d(".concat(_m6, ", ").concat(_h3, ", ").concat(_f4, "px)\n        rotateZ(").concat(i.rotate ? a ? -_v3 : _v3 : 0, "deg)\n        scale(").concat(_x, ")\n      ");
          if (i.slideShadows) {
            var _e70 = _d6.querySelector(".swiper-slide-shadow");
            _e70 || (_e70 = de("cards", _d6)), _e70 && (_e70.style.opacity = Math.min(Math.max((Math.abs(_p6) - .5) / .5, 0), 1));
          }
          _d6.style.zIndex = -Math.abs(Math.round(_c4)) + e.length;
          le(0, _d6).style.transform = _S;
        }
      },
      setTransition: function setTransition(e) {
        var s = t.slides.map(function (e) {
          return m(e);
        });
        s.forEach(function (t) {
          t.style.transitionDuration = "".concat(e, "ms"), t.querySelectorAll(".swiper-slide-shadow").forEach(function (t) {
            t.style.transitionDuration = "".concat(e, "ms");
          });
        }), oe({
          swiper: t,
          duration: e,
          transformElements: s
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
  return Q.use(ce), Q;
}();
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return t(e, window);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window);
}(function (s, n) {
  "use strict";

  function e(e) {
    return 0 <= function (e, t) {
      for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
        if (+o[a] < +n[a]) return 1;
        if (+n[a] < +o[a]) return -1;
      }
      return 0;
    }(s.fn.jquery, e);
  }
  s.migrateVersion = "3.4.1";
  var t = Object.create(null);
  s.migrateDisablePatches = function () {
    for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
  }, s.migrateEnablePatches = function () {
    for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
  }, s.migrateIsPatchEnabled = function (e) {
    return !t[e];
  }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
  var o = {};
  function u(e, t) {
    var r = n.console;
    !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
  }
  function r(e, t, r, n, o) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return u(n, o), r;
      },
      set: function set(e) {
        u(n, o), r = e;
      }
    });
  }
  function a(e, t, r, n, o) {
    var a = e[t];
    e[t] = function () {
      return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments);
    };
  }
  function c(e, t, r, n, o) {
    if (!o) throw new Error("No warning message provided");
    return a(e, t, r, n, o), 0;
  }
  function i(e, t, r, n) {
    return a(e, t, r, n), 0;
  }
  s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
    o = {}, s.migrateWarnings.length = 0;
  }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
  var d,
    l,
    p,
    f = {},
    m = s.fn.init,
    y = s.find,
    h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
    g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
    v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  for (d in i(s.fn, "init", function (e) {
    var t = Array.prototype.slice.call(arguments);
    return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t);
  }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function (t) {
    var r = Array.prototype.slice.call(arguments);
    if ("string" == typeof t && h.test(t)) try {
      n.document.querySelector(t);
    } catch (e) {
      t = t.replace(g, function (e, t, r, n) {
        return "[" + t + r + '"' + n + '"]';
      });
      try {
        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t;
      } catch (e) {
        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0]);
      }
    }
    return y.apply(this, r);
  }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
  c(s.fn, "size", function () {
    return this.length;
  }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function () {
    return JSON.parse.apply(null, arguments);
  }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function (e) {
    return null == e ? "" : (e + "").replace(v, "$1");
  }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function (e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function (e) {
    var t = _typeof(e);
    return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e));
  }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    f["[object " + t + "]"] = t.toLowerCase();
  }), c(s, "type", function (e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : _typeof(e);
  }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function (e) {
    return "function" == typeof e;
  }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function (e) {
    return null != e && e === e.window;
  }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function () {
    var e = l.apply(this, arguments);
    return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e;
  }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
    !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated");
  }));
  var j = s.fn.removeAttr,
    b = s.fn.toggleClass,
    w = /\S+/g;
  function x(e) {
    return e.replace(/-([a-z])/g, function (e, t) {
      return t.toUpperCase();
    });
  }
  i(s.fn, "removeAttr", function (e) {
    var r = this,
      n = !1;
    return s.each(e.match(w), function (e, t) {
      s.expr.match.bool.test(t) && r.each(function () {
        if (!1 !== s(this).prop(t)) return !(n = !0);
      }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1));
    }), j.apply(this, arguments);
  }, "removeAttr-bool"), i(s.fn, "toggleClass", function (t) {
    return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
      var e = this.getAttribute && this.getAttribute("class") || "";
      e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "");
    }));
  }, "toggleClass-bool");
  var Q,
    A,
    R = !1,
    C = /^[a-z]/,
    N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
    var r = s.cssHooks[t] && s.cssHooks[t].get;
    r && (s.cssHooks[t].get = function () {
      var e;
      return R = !0, e = r.apply(this, arguments), R = !1, e;
    });
  }), i(s, "swap", function (e, t, r, n) {
    var o,
      a,
      i = {};
    for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
    for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
    return o;
  }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
    set: function set() {
      return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments);
    }
  })), e("4.0.0") ? (A = {
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
  }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
    get: function get() {
      return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments);
    },
    set: function set() {
      return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments);
    }
  }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function (e, t) {
    var r,
      n,
      o = this;
    return e && "object" == _typeof(e) && !Array.isArray(e) ? (s.each(e, function (e, t) {
      s.fn.css.call(o, e, t);
    }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments));
  }, "css-number");
  var S,
    P,
    k,
    H,
    E = s.data;
  i(s, "data", function (e, t, r) {
    var n, o, a;
    if (t && "object" == _typeof(t) && 2 === arguments.length) {
      for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
      return E.call(this, e, o), t;
    }
    return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments);
  }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function H(e) {
    return e;
  }, i(s.Tween.prototype, "run", function () {
    1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments);
  }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
    configurable: !0,
    enumerable: !0,
    get: function get() {
      return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S;
    },
    set: function set(e) {
      u("fx-interval", P), S = e;
    }
  }));
  var M = s.fn.load,
    q = s.event.add,
    O = s.event.fix;
  s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function (e) {
    var t,
      r = e.type,
      n = this.fixHooks[r],
      o = s.event.props;
    if (o.length) {
      u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
      while (o.length) s.event.addProp(o.pop());
    }
    if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length)) while (o.length) s.event.addProp(o.pop());
    return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t;
  }, "event-old-patch"), i(s.event, "add", function (e, t) {
    return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments);
  }, "load-after-event"), s.each(["load", "unload", "error"], function (e, t) {
    i(s.fn, t, function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
    }, "shorthand-removed-v3");
  }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
    c(s.fn, r, function (e, t) {
      return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r);
    }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated");
  }), s(function () {
    s(n.document).triggerHandler("ready");
  }), s.event.special.ready = {
    setup: function setup() {
      this === n.document && u("ready-event", "'ready' event is deprecated");
    }
  }, c(s.fn, "bind", function (e, t, r) {
    return this.on(e, null, t, r);
  }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function (e, t) {
    return this.off(e, null, t);
  }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function (e, t, r, n) {
    return this.on(t, e, r, n);
  }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function (e, t, r) {
    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r);
  }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function (e, t) {
    return this.on("mouseenter", e).on("mouseleave", t || e);
  }, "pre-on-methods", "jQuery.fn.hover() is deprecated");
  function T(e) {
    var t = n.document.implementation.createHTMLDocument("");
    return t.body.innerHTML = e, t.body && t.body.innerHTML;
  }
  var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
    s.migrateEnablePatches("self-closed-tags");
  }, i(s, "htmlPrefilter", function (e) {
    var t, r;
    return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>");
  }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
  var D,
    W,
    _,
    I = s.fn.offset;
  return i(s.fn, "offset", function () {
    var e = this[0];
    return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0);
  }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function (e, t) {
    var r = s.ajaxSettings && s.ajaxSettings.traditional;
    return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t);
  }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]], i(s, "Deferred", function (e) {
    var a = W(),
      i = a.promise();
    function t() {
      var o = arguments;
      return s.Deferred(function (n) {
        s.each(_, function (e, t) {
          var r = "function" == typeof o[e] && o[e];
          a[t[1]](function () {
            var e = r && r.apply(this, arguments);
            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments);
          });
        }), o = null;
      }).promise();
    }
    return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a;
  }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      for (t in e) if (void 0 !== i.style[t]) return e[t];
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
      for (t in e) if (void 0 !== i.style[t]) return e[t];
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
          for (n = u[o], e = [], n.cssRules = n.cssRules, i = s = 0, l = n.cssRules.length; l > s; i = ++s) n.cssRules[i].type === CSSRule.STYLE_RULE && t.test(n.cssRules[i].selectorText) && e.unshift(i);
          for (a = 0, c = e.length; c > a; a++) n.deleteRule(e[a]);
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
    for (var t in i.components) i.component.boot(t);
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
            for (var e, n = 0; n < t.addedNodes.length; ++n) if (e = t.addedNodes[n], e.outerHTML && -1 !== e.outerHTML.indexOf("data-uk-")) return (i = !0) && !1;
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
      for (var t = 0; t < n.length; t++) window.requestAnimationFrame.apply(window, [n[t].check]);
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
      for (var t = 0; t < s.length; t++) window.requestAnimationFrame.apply(window, [s[t].check]);
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
          for (var n = 0; n < a.length; n++) t.Utils.isInView(a.eq(n), c.options) && e.push(a.eq(n));
          if (e.length) {
            var s,
              u = i.scrollTop(),
              d = function () {
                for (var t = 0; t < e.length; t++) if (e[t].offset().top - c.options.topoffset >= u) return e[t];
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
      }), a) for (var r = 0; r < i.length; r++) e = t.$(i.eq(r)), n = e.find("a"), "none" == e.css("float") || e.attr("uk-dropdown") || (e.hasClass("uk-disabled") || (o = t.$(e[0].outerHTML), o.find("a").data("index", r), this.responsivetab.lst.append(o)), e.addClass("uk-hidden"));
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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
    if (i.length && !(e.scrollTop() < 0)) for (var o, a, r, h, p = e.scrollTop(), c = s.height(), l = e.height(), m = c - l, d = p > m ? m - p : 0, u = 0; u < i.length; u++) if (h = i[u], h.element.is(":visible") && !h.animate) {
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
          for (var t = 0; t < n.length; t++) n[t].reset(!0), n[t].self.computeWrapper();
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
      if (t) for (s in i) t === i[s].group && i[s].close(e);else for (s in i) i[s].close(e);
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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
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
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
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
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
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
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
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
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
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
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
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
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
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
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t]);
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
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
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
    for (i = 0; i < r; i++) if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o;
  };
});
"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! For license information please see choices.min.js.LICENSE.txt */
!function () {
  "use strict";

  var e = {
      282: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
        var n = i(883);
        t.addChoice = function (e) {
          var t = e.value,
            i = e.label,
            r = e.id,
            s = e.groupId,
            o = e.disabled,
            a = e.elementId,
            c = e.customProperties,
            l = e.placeholder,
            h = e.keyCode;
          return {
            type: n.ACTION_TYPES.ADD_CHOICE,
            value: t,
            label: i,
            id: r,
            groupId: s,
            disabled: o,
            elementId: a,
            customProperties: c,
            placeholder: l,
            keyCode: h
          };
        }, t.filterChoices = function (e) {
          return {
            type: n.ACTION_TYPES.FILTER_CHOICES,
            results: e
          };
        }, t.activateChoices = function (e) {
          return void 0 === e && (e = !0), {
            type: n.ACTION_TYPES.ACTIVATE_CHOICES,
            active: e
          };
        }, t.clearChoices = function () {
          return {
            type: n.ACTION_TYPES.CLEAR_CHOICES
          };
        };
      },
      783: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.addGroup = void 0;
        var n = i(883);
        t.addGroup = function (e) {
          var t = e.value,
            i = e.id,
            r = e.active,
            s = e.disabled;
          return {
            type: n.ACTION_TYPES.ADD_GROUP,
            value: t,
            id: i,
            active: r,
            disabled: s
          };
        };
      },
      464: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.highlightItem = t.removeItem = t.addItem = void 0;
        var n = i(883);
        t.addItem = function (e) {
          var t = e.value,
            i = e.label,
            r = e.id,
            s = e.choiceId,
            o = e.groupId,
            a = e.customProperties,
            c = e.placeholder,
            l = e.keyCode;
          return {
            type: n.ACTION_TYPES.ADD_ITEM,
            value: t,
            label: i,
            id: r,
            choiceId: s,
            groupId: o,
            customProperties: a,
            placeholder: c,
            keyCode: l
          };
        }, t.removeItem = function (e, t) {
          return {
            type: n.ACTION_TYPES.REMOVE_ITEM,
            id: e,
            choiceId: t
          };
        }, t.highlightItem = function (e, t) {
          return {
            type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
            id: e,
            highlighted: t
          };
        };
      },
      137: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.setIsLoading = t.resetTo = t.clearAll = void 0;
        var n = i(883);
        t.clearAll = function () {
          return {
            type: n.ACTION_TYPES.CLEAR_ALL
          };
        }, t.resetTo = function (e) {
          return {
            type: n.ACTION_TYPES.RESET_TO,
            state: e
          };
        }, t.setIsLoading = function (e) {
          return {
            type: n.ACTION_TYPES.SET_IS_LOADING,
            isLoading: e
          };
        };
      },
      373: function _(e, t, i) {
        var n = this && this.__spreadArray || function (e, t, i) {
            if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
            return e.concat(n || Array.prototype.slice.call(t));
          },
          r = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var s = r(i(996)),
          o = r(i(221)),
          a = i(282),
          c = i(783),
          l = i(464),
          h = i(137),
          u = i(520),
          d = i(883),
          p = i(789),
          f = i(799),
          m = i(655),
          v = r(i(744)),
          g = r(i(686)),
          _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
          y = {},
          E = function () {
            function e(t, i) {
              void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {});
              var r = this;
              void 0 === i.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), this.config = s["default"].all([p.DEFAULT_CONFIG, e.defaults.options, i], {
                arrayMerge: function arrayMerge(e, t) {
                  return n([], t, !0);
                }
              });
              var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
              o.length && console.warn("Unknown config option(s) passed", o.join(", "));
              var a = "string" == typeof t ? document.querySelector(t) : t;
              if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
              if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), i.addItemFilter && "function" != typeof i.addItemFilter) {
                var c = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
                this.config.addItemFilter = c.test.bind(c);
              }
              if (this._isTextElement ? this.passedElement = new u.WrappedInput({
                element: a,
                classNames: this.config.classNames,
                delimiter: this.config.delimiter
              }) : this.passedElement = new u.WrappedSelect({
                element: a,
                classNames: this.config.classNames,
                template: function template(e) {
                  return r._templates.option(e);
                }
              }), this.initialised = !1, this._store = new v["default"](), this._initialState = m.defaultState, this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, f.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
                var l = window.getComputedStyle(this.passedElement.element).direction;
                l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l);
              }
              if (this._idNames = {
                itemChoice: "item-choice"
              }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) {
                var h = this.passedElement.value.split(this.config.delimiter);
                this._presetItems = this._presetItems.concat(h);
              }
              if (this.passedElement.options && this.passedElement.options.forEach(function (e) {
                r._presetChoices.push({
                  value: e.value,
                  label: e.innerHTML,
                  selected: !!e.selected,
                  disabled: e.disabled || e.parentNode.disabled,
                  placeholder: "" === e.value || e.hasAttribute("placeholder"),
                  customProperties: (0, f.parseCustomProperties)(e.dataset.customProperties)
                });
              }), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", {
                element: t
              }), void (this.initialised = !0);
              this.init();
            }
            return Object.defineProperty(e, "defaults", {
              get: function get() {
                return Object.preventExtensions({
                  get options() {
                    return y;
                  },
                  get templates() {
                    return g["default"];
                  }
                });
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.init = function () {
              if (!this.initialised) {
                this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
                var e = this.config.callbackOnInit;
                e && "function" == typeof e && e.call(this);
              }
            }, e.prototype.destroy = function () {
              this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = g["default"], this.initialised = !1);
            }, e.prototype.enable = function () {
              return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
            }, e.prototype.disable = function () {
              return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
            }, e.prototype.highlightItem = function (e, t) {
              if (void 0 === t && (t = !0), !e || !e.id) return this;
              var i = e.id,
                n = e.groupId,
                r = void 0 === n ? -1 : n,
                s = e.value,
                o = void 0 === s ? "" : s,
                a = e.label,
                c = void 0 === a ? "" : a,
                h = r >= 0 ? this._store.getGroupById(r) : null;
              return this._store.dispatch((0, l.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                id: i,
                value: o,
                label: c,
                groupValue: h && h.value ? h.value : null
              }), this;
            }, e.prototype.unhighlightItem = function (e) {
              if (!e || !e.id) return this;
              var t = e.id,
                i = e.groupId,
                n = void 0 === i ? -1 : i,
                r = e.value,
                s = void 0 === r ? "" : r,
                o = e.label,
                a = void 0 === o ? "" : o,
                c = n >= 0 ? this._store.getGroupById(n) : null;
              return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                id: t,
                value: s,
                label: a,
                groupValue: c && c.value ? c.value : null
              }), this;
            }, e.prototype.highlightAll = function () {
              var e = this;
              return this._store.items.forEach(function (t) {
                return e.highlightItem(t);
              }), this;
            }, e.prototype.unhighlightAll = function () {
              var e = this;
              return this._store.items.forEach(function (t) {
                return e.unhighlightItem(t);
              }), this;
            }, e.prototype.removeActiveItemsByValue = function (e) {
              var t = this;
              return this._store.activeItems.filter(function (t) {
                return t.value === e;
              }).forEach(function (e) {
                return t._removeItem(e);
              }), this;
            }, e.prototype.removeActiveItems = function (e) {
              var t = this;
              return this._store.activeItems.filter(function (t) {
                return t.id !== e;
              }).forEach(function (e) {
                return t._removeItem(e);
              }), this;
            }, e.prototype.removeHighlightedItems = function (e) {
              var t = this;
              return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
                t._removeItem(i), e && t._triggerChange(i.value);
              }), this;
            }, e.prototype.showDropdown = function (e) {
              var t = this;
              return this.dropdown.isActive || requestAnimationFrame(function () {
                t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(d.EVENTS.showDropdown, {});
              }), this;
            }, e.prototype.hideDropdown = function (e) {
              var t = this;
              return this.dropdown.isActive ? (requestAnimationFrame(function () {
                t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {});
              }), this) : this;
            }, e.prototype.getValue = function (e) {
              void 0 === e && (e = !1);
              var t = this._store.activeItems.reduce(function (t, i) {
                var n = e ? i.value : i;
                return t.push(n), t;
              }, []);
              return this._isSelectOneElement ? t[0] : t;
            }, e.prototype.setValue = function (e) {
              var t = this;
              return this.initialised ? (e.forEach(function (e) {
                return t._setChoiceOrItem(e);
              }), this) : this;
            }, e.prototype.setChoiceByValue = function (e) {
              var t = this;
              return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach(function (e) {
                return t._findAndSelectChoiceByValue(e);
              }), this;
            }, e.prototype.setChoices = function (e, t, i, n) {
              var r = this;
              if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
              if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
              if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
              if (n && this.clearChoices(), "function" == typeof e) {
                var s = e(this);
                if ("function" == typeof Promise && s instanceof Promise) return new Promise(function (e) {
                  return requestAnimationFrame(e);
                }).then(function () {
                  return r._handleLoadingState(!0);
                }).then(function () {
                  return s;
                }).then(function (e) {
                  return r.setChoices(e, t, i, n);
                })["catch"](function (e) {
                  r.config.silent || console.error(e);
                }).then(function () {
                  return r._handleLoadingState(!1);
                }).then(function () {
                  return r;
                });
                if (!Array.isArray(s)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(_typeof(s)));
                return this.setChoices(s, t, i, !1);
              }
              if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
              return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach(function (e) {
                if (e.choices) r._addGroup({
                  id: e.id ? parseInt("".concat(e.id), 10) : null,
                  group: e,
                  valueKey: t,
                  labelKey: i
                });else {
                  var n = e;
                  r._addChoice({
                    value: n[t],
                    label: n[i],
                    isSelected: !!n.selected,
                    isDisabled: !!n.disabled,
                    placeholder: !!n.placeholder,
                    customProperties: n.customProperties
                  });
                }
              }), this._stopLoading(), this;
            }, e.prototype.clearChoices = function () {
              return this._store.dispatch((0, a.clearChoices)()), this;
            }, e.prototype.clearStore = function () {
              return this._store.dispatch((0, h.clearAll)()), this;
            }, e.prototype.clearInput = function () {
              var e = !this._isSelectOneElement;
              return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))), this;
            }, e.prototype._render = function () {
              if (!this._store.isLoading()) {
                this._currentState = this._store.state;
                var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                  t = this._isSelectElement,
                  i = this._currentState.items !== this._prevState.items;
                e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
              }
            }, e.prototype._renderChoices = function () {
              var e = this,
                t = this._store,
                i = t.activeGroups,
                n = t.activeChoices,
                r = document.createDocumentFragment();
              if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
                return e.choiceList.scrollToTop();
              }), i.length >= 1 && !this._isSearching) {
                var s = n.filter(function (e) {
                  return !0 === e.placeholder && -1 === e.groupId;
                });
                s.length >= 1 && (r = this._createChoicesFragment(s, r)), r = this._createGroupsFragment(i, n, r);
              } else n.length >= 1 && (r = this._createChoicesFragment(n, r));
              if (r.childNodes && r.childNodes.length > 0) {
                var o = this._store.activeItems,
                  a = this._canAddItem(o, this.input.value);
                if (a.response) this.choiceList.append(r), this._highlightChoice();else {
                  var c = this._getTemplate("notice", a.notice);
                  this.choiceList.append(c);
                }
              } else {
                var l = void 0;
                c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
              }
            }, e.prototype._renderItems = function () {
              var e = this._store.activeItems || [];
              this.itemList.clear();
              var t = this._createItemsFragment(e);
              t.childNodes && this.itemList.append(t);
            }, e.prototype._createGroupsFragment = function (e, t, i) {
              var n = this;
              return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach(function (e) {
                var r = function (e) {
                  return t.filter(function (t) {
                    return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
                  });
                }(e);
                if (r.length >= 1) {
                  var s = n._getTemplate("choiceGroup", e);
                  i.appendChild(s), n._createChoicesFragment(r, i, !0);
                }
              }), i;
            }, e.prototype._createChoicesFragment = function (e, t, i) {
              var r = this;
              void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);
              var s = this.config,
                o = s.renderSelectedChoices,
                a = s.searchResultLimit,
                c = s.renderChoiceLimit,
                l = this._isSearching ? f.sortByScore : this.config.sorter,
                h = function h(e) {
                  if ("auto" !== o || r._isSelectOneElement || !e.selected) {
                    var i = r._getTemplate("choice", e, r.config.itemSelectText);
                    t.appendChild(i);
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
                m = d.normalChoices;
              (this.config.shouldSort || this._isSearching) && m.sort(l);
              var v = u.length,
                g = this._isSelectOneElement ? n(n([], p, !0), m, !0) : m;
              this._isSearching ? v = a : c && c > 0 && !i && (v = c);
              for (var _ = 0; _ < v; _ += 1) g[_] && h(g[_]);
              return t;
            }, e.prototype._createItemsFragment = function (e, t) {
              var i = this;
              void 0 === t && (t = document.createDocumentFragment());
              var n = this.config,
                r = n.shouldSortItems,
                s = n.sorter,
                o = n.removeItemButton;
              return r && !this._isSelectOneElement && e.sort(s), this._isTextElement ? this.passedElement.value = e.map(function (e) {
                return e.value;
              }).join(this.config.delimiter) : this.passedElement.options = e, e.forEach(function (e) {
                var n = i._getTemplate("item", e, o);
                t.appendChild(n);
              }), t;
            }, e.prototype._triggerChange = function (e) {
              null != e && this.passedElement.triggerEvent(d.EVENTS.change, {
                value: e
              });
            }, e.prototype._selectPlaceholderChoice = function (e) {
              this._addItem({
                value: e.value,
                label: e.label,
                choiceId: e.id,
                groupId: e.groupId,
                placeholder: e.placeholder
              }), this._triggerChange(e.value);
            }, e.prototype._handleButtonAction = function (e, t) {
              if (e && t && this.config.removeItems && this.config.removeItemButton) {
                var i = t.parentNode && t.parentNode.dataset.id,
                  n = i && e.find(function (e) {
                    return e.id === parseInt(i, 10);
                  });
                n && (this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice));
              }
            }, e.prototype._handleItemAction = function (e, t, i) {
              var n = this;
              if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
                var r = t.dataset.id;
                e.forEach(function (e) {
                  e.id !== parseInt("".concat(r), 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
                }), this.input.focus();
              }
            }, e.prototype._handleChoiceAction = function (e, t) {
              if (e && t) {
                var i = t.dataset.id,
                  n = i && this._store.getChoiceById(i);
                if (n) {
                  var r = e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                    s = this.dropdown.isActive;
                  n.keyCode = r, this.passedElement.triggerEvent(d.EVENTS.choice, {
                    choice: n
                  }), n.selected || n.disabled || this._canAddItem(e, n.value).response && (this._addItem({
                    value: n.value,
                    label: n.label,
                    choiceId: n.id,
                    groupId: n.groupId,
                    customProperties: n.customProperties,
                    placeholder: n.placeholder,
                    keyCode: n.keyCode
                  }), this._triggerChange(n.value)), this.clearInput(), s && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
                }
              }
            }, e.prototype._handleBackspace = function (e) {
              if (this.config.removeItems && e) {
                var t = e[e.length - 1],
                  i = e.some(function (e) {
                    return e.highlighted;
                  });
                this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
              }
            }, e.prototype._startLoading = function () {
              this._store.dispatch((0, h.setIsLoading)(!0));
            }, e.prototype._stopLoading = function () {
              this._store.dispatch((0, h.setIsLoading)(!1));
            }, e.prototype._handleLoadingState = function (e) {
              void 0 === e && (e = !0);
              var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
              e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "");
            }, e.prototype._handleSearch = function (e) {
              if (this.input.isFocussed) {
                var t = this._store.choices,
                  i = this.config,
                  n = i.searchFloor,
                  r = i.searchChoices,
                  s = t.some(function (e) {
                    return !e.active;
                  });
                if (null != e && e.length >= n) {
                  var o = r ? this._searchChoices(e) : 0;
                  this.passedElement.triggerEvent(d.EVENTS.search, {
                    value: e,
                    resultCount: o
                  });
                } else s && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0)));
              }
            }, e.prototype._canAddItem = function (e, t) {
              var i = !0,
                n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
              if (!this._isSelectOneElement) {
                var r = (0, f.existsInArray)(e, t);
                this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && r && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText);
              }
              return {
                response: i,
                notice: n
              };
            }, e.prototype._searchChoices = function (e) {
              var t = "string" == typeof e ? e.trim() : e,
                i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
              if (t.length < 1 && t === "".concat(i, " ")) return 0;
              var r = this._store.searchableChoices,
                s = t,
                c = Object.assign(this.config.fuseOptions, {
                  keys: n([], this.config.searchFields, !0),
                  includeMatches: !0
                }),
                l = new o["default"](r, c).search(s);
              return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, a.filterChoices)(l)), l.length;
            }, e.prototype._addEventListeners = function () {
              var e = document.documentElement;
              e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, {
                passive: !0
              }), e.addEventListener("touchmove", this._onTouchMove, {
                passive: !0
              }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                passive: !0
              }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
                passive: !0
              })), this.input.element.addEventListener("keyup", this._onKeyUp, {
                passive: !0
              }), this.input.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.input.element.addEventListener("blur", this._onBlur, {
                passive: !0
              }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
                passive: !0
              }), this.input.addEventListeners();
            }, e.prototype._removeEventListeners = function () {
              var e = document.documentElement;
              e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
            }, e.prototype._onKeyDown = function (e) {
              var t = e.keyCode,
                i = this._store.activeItems,
                n = this.input.isFocussed,
                r = this.dropdown.isActive,
                s = this.itemList.hasChildren(),
                o = String.fromCharCode(t),
                a = /[^\x00-\x1F]/.test(o),
                c = d.KEY_CODES.BACK_KEY,
                l = d.KEY_CODES.DELETE_KEY,
                h = d.KEY_CODES.ENTER_KEY,
                u = d.KEY_CODES.A_KEY,
                p = d.KEY_CODES.ESC_KEY,
                f = d.KEY_CODES.UP_KEY,
                m = d.KEY_CODES.DOWN_KEY,
                v = d.KEY_CODES.PAGE_UP_KEY,
                g = d.KEY_CODES.PAGE_DOWN_KEY;
              switch (this._isTextElement || r || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += e.key.toLowerCase())), t) {
                case u:
                  return this._onSelectKey(e, s);
                case h:
                  return this._onEnterKey(e, i, r);
                case p:
                  return this._onEscapeKey(r);
                case f:
                case v:
                case m:
                case g:
                  return this._onDirectionKey(e, r);
                case l:
                case c:
                  return this._onDeleteKey(e, i, n);
              }
            }, e.prototype._onKeyUp = function (e) {
              var t = e.target,
                i = e.keyCode,
                n = this.input.value,
                r = this._store.activeItems,
                s = this._canAddItem(r, n),
                o = d.KEY_CODES.BACK_KEY,
                c = d.KEY_CODES.DELETE_KEY;
              if (this._isTextElement) {
                if (s.notice && n) {
                  var l = this._getTemplate("notice", s.notice);
                  this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
                } else this.hideDropdown(!0);
              } else {
                var h = (i === o || i === c) && t && !t.value,
                  u = !this._isTextElement && this._isSearching,
                  p = this._canSearch && s.response;
                h && u ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : p && this._handleSearch(this.input.rawValue);
              }
              this._canSearch = this.config.searchEnabled;
            }, e.prototype._onSelectKey = function (e, t) {
              var i = e.ctrlKey,
                n = e.metaKey;
              (i || n) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
            }, e.prototype._onEnterKey = function (e, t, i) {
              var n = e.target,
                r = d.KEY_CODES.ENTER_KEY,
                s = n && n.hasAttribute("data-button");
              if (this._isTextElement && n && n.value) {
                var o = this.input.value;
                this._canAddItem(t, o).response && (this.hideDropdown(!0), this._addItem({
                  value: o
                }), this._triggerChange(o), this.clearInput());
              }
              if (s && (this._handleButtonAction(t, n), e.preventDefault()), i) {
                var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                a && (t[0] && (t[0].keyCode = r), this._handleChoiceAction(t, a)), e.preventDefault();
              } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault());
            }, e.prototype._onEscapeKey = function (e) {
              e && (this.hideDropdown(!0), this.containerOuter.focus());
            }, e.prototype._onDirectionKey = function (e, t) {
              var i = e.keyCode,
                n = e.metaKey,
                r = d.KEY_CODES.DOWN_KEY,
                s = d.KEY_CODES.PAGE_UP_KEY,
                o = d.KEY_CODES.PAGE_DOWN_KEY;
              if (t || this._isSelectOneElement) {
                this.showDropdown(), this._canSearch = !1;
                var a = i === r || i === o ? 1 : -1,
                  c = "[data-choice-selectable]",
                  l = void 0;
                if (n || i === o || i === s) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c);else {
                  var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                  l = h ? (0, f.getAdjacentEl)(h, c, a) : this.dropdown.element.querySelector(c);
                }
                l && ((0, f.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), this._highlightChoice(l)), e.preventDefault();
              }
            }, e.prototype._onDeleteKey = function (e, t, i) {
              var n = e.target;
              this._isSelectOneElement || n.value || !i || (this._handleBackspace(t), e.preventDefault());
            }, e.prototype._onTouchMove = function () {
              this._wasTap && (this._wasTap = !1);
            }, e.prototype._onTouchEnd = function (e) {
              var t = (e || e.touches[0]).target;
              this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0;
            }, e.prototype._onMouseDown = function (e) {
              var t = e.target;
              if (t instanceof HTMLElement) {
                if (_ && this.choiceList.element.contains(t)) {
                  var i = this.choiceList.element.firstElementChild,
                    n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
                  this._isScrollingOnIe = n;
                }
                if (t !== this.input.element) {
                  var r = t.closest("[data-button],[data-item],[data-choice]");
                  if (r instanceof HTMLElement) {
                    var s = e.shiftKey,
                      o = this._store.activeItems,
                      a = r.dataset;
                    "button" in a ? this._handleButtonAction(o, r) : "item" in a ? this._handleItemAction(o, r, s) : "choice" in a && this._handleChoiceAction(o, r);
                  }
                  e.preventDefault();
                }
              }
            }, e.prototype._onMouseOver = function (e) {
              var t = e.target;
              t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
            }, e.prototype._onClick = function (e) {
              var t = e.target;
              this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
            }, e.prototype._onFocus = function (e) {
              var t,
                i = this,
                n = e.target;
              n && this.containerOuter.element.contains(n) && ((t = {})[d.TEXT_TYPE] = function () {
                n === i.input.element && i.containerOuter.addFocusState();
              }, t[d.SELECT_ONE_TYPE] = function () {
                i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
              }, t[d.SELECT_MULTIPLE_TYPE] = function () {
                n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
              }, t)[this.passedElement.element.type]();
            }, e.prototype._onBlur = function (e) {
              var t,
                i = this,
                n = e.target;
              if (n && this.containerOuter.element.contains(n) && !this._isScrollingOnIe) {
                var r = this._store.activeItems.some(function (e) {
                  return e.highlighted;
                });
                ((t = {})[d.TEXT_TYPE] = function () {
                  n === i.input.element && (i.containerOuter.removeFocusState(), r && i.unhighlightAll(), i.hideDropdown(!0));
                }, t[d.SELECT_ONE_TYPE] = function () {
                  i.containerOuter.removeFocusState(), (n === i.input.element || n === i.containerOuter.element && !i._canSearch) && i.hideDropdown(!0);
                }, t[d.SELECT_MULTIPLE_TYPE] = function () {
                  n === i.input.element && (i.containerOuter.removeFocusState(), i.hideDropdown(!0), r && i.unhighlightAll());
                }, t)[this.passedElement.element.type]();
              } else this._isScrollingOnIe = !1, this.input.element.focus();
            }, e.prototype._onFormReset = function () {
              this._store.dispatch((0, h.resetTo)(this._initialState));
            }, e.prototype._highlightChoice = function (e) {
              var t = this;
              void 0 === e && (e = null);
              var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
              if (i.length) {
                var n = e;
                Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function (e) {
                  e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
                }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(d.EVENTS.highlightChoice, {
                  el: n
                }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
              }
            }, e.prototype._addItem = function (e) {
              var t = e.value,
                i = e.label,
                n = void 0 === i ? null : i,
                r = e.choiceId,
                s = void 0 === r ? -1 : r,
                o = e.groupId,
                a = void 0 === o ? -1 : o,
                c = e.customProperties,
                h = void 0 === c ? {} : c,
                u = e.placeholder,
                p = void 0 !== u && u,
                f = e.keyCode,
                m = void 0 === f ? -1 : f,
                v = "string" == typeof t ? t.trim() : t,
                g = this._store.items,
                _ = n || v,
                y = s || -1,
                E = a >= 0 ? this._store.getGroupById(a) : null,
                b = g ? g.length + 1 : 1;
              this.config.prependValue && (v = this.config.prependValue + v.toString()), this.config.appendValue && (v += this.config.appendValue.toString()), this._store.dispatch((0, l.addItem)({
                value: v,
                label: _,
                id: b,
                choiceId: y,
                groupId: a,
                customProperties: h,
                placeholder: p,
                keyCode: m
              })), this._isSelectOneElement && this.removeActiveItems(b), this.passedElement.triggerEvent(d.EVENTS.addItem, {
                id: b,
                value: v,
                label: _,
                customProperties: h,
                groupValue: E && E.value ? E.value : null,
                keyCode: m
              });
            }, e.prototype._removeItem = function (e) {
              var t = e.id,
                i = e.value,
                n = e.label,
                r = e.customProperties,
                s = e.choiceId,
                o = e.groupId,
                a = o && o >= 0 ? this._store.getGroupById(o) : null;
              t && s && (this._store.dispatch((0, l.removeItem)(t, s)), this.passedElement.triggerEvent(d.EVENTS.removeItem, {
                id: t,
                value: i,
                label: n,
                customProperties: r,
                groupValue: a && a.value ? a.value : null
              }));
            }, e.prototype._addChoice = function (e) {
              var t = e.value,
                i = e.label,
                n = void 0 === i ? null : i,
                r = e.isSelected,
                s = void 0 !== r && r,
                o = e.isDisabled,
                c = void 0 !== o && o,
                l = e.groupId,
                h = void 0 === l ? -1 : l,
                u = e.customProperties,
                d = void 0 === u ? {} : u,
                p = e.placeholder,
                f = void 0 !== p && p,
                m = e.keyCode,
                v = void 0 === m ? -1 : m;
              if (null != t) {
                var g = this._store.choices,
                  _ = n || t,
                  y = g ? g.length + 1 : 1,
                  E = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);
                this._store.dispatch((0, a.addChoice)({
                  id: y,
                  groupId: h,
                  elementId: E,
                  value: t,
                  label: _,
                  disabled: c,
                  customProperties: d,
                  placeholder: f,
                  keyCode: v
                })), s && this._addItem({
                  value: t,
                  label: _,
                  choiceId: y,
                  customProperties: d,
                  placeholder: f,
                  keyCode: v
                });
              }
            }, e.prototype._addGroup = function (e) {
              var t = this,
                i = e.group,
                n = e.id,
                r = e.valueKey,
                s = void 0 === r ? "value" : r,
                o = e.labelKey,
                a = void 0 === o ? "label" : o,
                l = (0, f.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
                h = n || Math.floor(new Date().valueOf() * Math.random()),
                u = !!i.disabled && i.disabled;
              l ? (this._store.dispatch((0, c.addGroup)({
                value: i.label,
                id: h,
                active: !0,
                disabled: u
              })), l.forEach(function (e) {
                var i = e.disabled || e.parentNode && e.parentNode.disabled;
                t._addChoice({
                  value: e[s],
                  label: (0, f.isType)("Object", e) ? e[a] : e.innerHTML,
                  isSelected: e.selected,
                  isDisabled: i,
                  groupId: h,
                  customProperties: e.customProperties,
                  placeholder: e.placeholder
                });
              })) : this._store.dispatch((0, c.addGroup)({
                value: i.label,
                id: i.id,
                active: !1,
                disabled: i.disabled
              }));
            }, e.prototype._getTemplate = function (e) {
              for (var t, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
              return (t = this._templates[e]).call.apply(t, n([this, this.config], i, !1));
            }, e.prototype._createTemplates = function () {
              var e = this.config.callbackOnCreateTemplates,
                t = {};
              e && "function" == typeof e && (t = e.call(this, f.strToEl)), this._templates = (0, s["default"])(g["default"], t);
            }, e.prototype._createElements = function () {
              this.containerOuter = new u.Container({
                element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              }), this.containerInner = new u.Container({
                element: this._getTemplate("containerInner"),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                position: this.config.position
              }), this.input = new u.Input({
                element: this._getTemplate("input", this._placeholderValue),
                classNames: this.config.classNames,
                type: this.passedElement.element.type,
                preventPaste: !this.config.paste
              }), this.choiceList = new u.List({
                element: this._getTemplate("choiceList", this._isSelectOneElement)
              }), this.itemList = new u.List({
                element: this._getTemplate("itemList", this._isSelectOneElement)
              }), this.dropdown = new u.Dropdown({
                element: this._getTemplate("dropdown"),
                classNames: this.config.classNames,
                type: this.passedElement.element.type
              });
            }, e.prototype._createStructure = function () {
              this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems);
            }, e.prototype._addPredefinedGroups = function (e) {
              var t = this,
                i = this.passedElement.placeholderOption;
              i && i.parentNode && "SELECT" === i.parentNode.tagName && this._addChoice({
                value: i.value,
                label: i.innerHTML,
                isSelected: i.selected,
                isDisabled: i.disabled,
                placeholder: !0
              }), e.forEach(function (e) {
                return t._addGroup({
                  group: e,
                  id: e.id || null
                });
              });
            }, e.prototype._addPredefinedChoices = function (e) {
              var t = this;
              this.config.shouldSort && e.sort(this.config.sorter);
              var i = e.some(function (e) {
                  return e.selected;
                }),
                n = e.findIndex(function (e) {
                  return void 0 === e.disabled || !e.disabled;
                });
              e.forEach(function (e, r) {
                var s = e.value,
                  o = void 0 === s ? "" : s,
                  a = e.label,
                  c = e.customProperties,
                  l = e.placeholder;
                if (t._isSelectElement) {
                  if (e.choices) t._addGroup({
                    group: e,
                    id: e.id || null
                  });else {
                    var h = !(!t._isSelectOneElement || i || r !== n) || e.selected,
                      u = e.disabled;
                    t._addChoice({
                      value: o,
                      label: a,
                      isSelected: !!h,
                      isDisabled: !!u,
                      placeholder: !!l,
                      customProperties: c
                    });
                  }
                } else t._addChoice({
                  value: o,
                  label: a,
                  isSelected: !!e.selected,
                  isDisabled: !!e.disabled,
                  placeholder: !!e.placeholder,
                  customProperties: c
                });
              });
            }, e.prototype._addPredefinedItems = function (e) {
              var t = this;
              e.forEach(function (e) {
                "object" == _typeof(e) && e.value && t._addItem({
                  value: e.value,
                  label: e.label,
                  choiceId: e.id,
                  customProperties: e.customProperties,
                  placeholder: e.placeholder
                }), "string" == typeof e && t._addItem({
                  value: e
                });
              });
            }, e.prototype._setChoiceOrItem = function (e) {
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
              })[(0, f.getType)(e).toLowerCase()]();
            }, e.prototype._findAndSelectChoiceByValue = function (e) {
              var t = this,
                i = this._store.choices.find(function (i) {
                  return t.config.valueComparer(i.value, e);
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
            }, e.prototype._generatePlaceholderValue = function () {
              if (this._isSelectElement && this.passedElement.placeholderOption) {
                var e = this.passedElement.placeholderOption;
                return e ? e.text : null;
              }
              var t = this.config,
                i = t.placeholder,
                n = t.placeholderValue,
                r = this.passedElement.element.dataset;
              if (i) {
                if (n) return n;
                if (r.placeholder) return r.placeholder;
              }
              return null;
            }, e;
          }();
        t["default"] = E;
      },
      613: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = i(883),
          s = function () {
            function e(e) {
              var t = e.element,
                i = e.type,
                n = e.classNames,
                r = e.position;
              this.element = t, this.classNames = n, this.type = i, this.position = r, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
            }
            return e.prototype.addEventListeners = function () {
              this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
            }, e.prototype.removeEventListeners = function () {
              this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
            }, e.prototype.shouldFlip = function (e) {
              if ("number" != typeof e) return !1;
              var t = !1;
              return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), t;
            }, e.prototype.setActiveDescendant = function (e) {
              this.element.setAttribute("aria-activedescendant", e);
            }, e.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute("aria-activedescendant");
            }, e.prototype.open = function (e) {
              this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
            }, e.prototype.close = function () {
              this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
            }, e.prototype.focus = function () {
              this.isFocussed || this.element.focus();
            }, e.prototype.addFocusState = function () {
              this.element.classList.add(this.classNames.focusState);
            }, e.prototype.removeFocusState = function () {
              this.element.classList.remove(this.classNames.focusState);
            }, e.prototype.enable = function () {
              this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === r.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
            }, e.prototype.wrap = function (e) {
              (0, n.wrap)(e, this.element);
            }, e.prototype.unwrap = function (e) {
              this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element));
            }, e.prototype.addLoadingState = function () {
              this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
            }, e.prototype.removeLoadingState = function () {
              this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
            }, e.prototype._onFocus = function () {
              this.isFocussed = !0;
            }, e.prototype._onBlur = function () {
              this.isFocussed = !1;
            }, e;
          }();
        t["default"] = s;
      },
      217: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = function () {
          function e(e) {
            var t = e.element,
              i = e.type,
              n = e.classNames;
            this.element = t, this.classNames = n, this.type = i, this.isActive = !1;
          }
          return Object.defineProperty(e.prototype, "distanceFromTopWindow", {
            get: function get() {
              return this.element.getBoundingClientRect().bottom;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getChild = function (e) {
            return this.element.querySelector(e);
          }, e.prototype.show = function () {
            return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
          }, e.prototype.hide = function () {
            return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
          }, e;
        }();
        t["default"] = i;
      },
      520: function _(e, t, i) {
        var n = this && this.__importDefault || function (e) {
          return e && e.__esModule ? e : {
            "default": e
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0;
        var r = n(i(217));
        t.Dropdown = r["default"];
        var s = n(i(613));
        t.Container = s["default"];
        var o = n(i(11));
        t.Input = o["default"];
        var a = n(i(624));
        t.List = a["default"];
        var c = n(i(541));
        t.WrappedInput = c["default"];
        var l = n(i(982));
        t.WrappedSelect = l["default"];
      },
      11: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = i(883),
          s = function () {
            function e(e) {
              var t = e.element,
                i = e.type,
                n = e.classNames,
                r = e.preventPaste;
              this.element = t, this.type = i, this.classNames = n, this.preventPaste = r, this.isFocussed = this.element.isEqualNode(document.activeElement), this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
            }
            return Object.defineProperty(e.prototype, "placeholder", {
              set: function set(e) {
                this.element.placeholder = e;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
              get: function get() {
                return (0, n.sanitise)(this.element.value);
              },
              set: function set(e) {
                this.element.value = e;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "rawValue", {
              get: function get() {
                return this.element.value;
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.addEventListeners = function () {
              this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
                passive: !0
              }), this.element.addEventListener("focus", this._onFocus, {
                passive: !0
              }), this.element.addEventListener("blur", this._onBlur, {
                passive: !0
              });
            }, e.prototype.removeEventListeners = function () {
              this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
            }, e.prototype.enable = function () {
              this.element.removeAttribute("disabled"), this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.setAttribute("disabled", ""), this.isDisabled = !0;
            }, e.prototype.focus = function () {
              this.isFocussed || this.element.focus();
            }, e.prototype.blur = function () {
              this.isFocussed && this.element.blur();
            }, e.prototype.clear = function (e) {
              return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
            }, e.prototype.setWidth = function () {
              var e = this.element,
                t = e.style,
                i = e.value,
                n = e.placeholder;
              t.minWidth = "".concat(n.length + 1, "ch"), t.width = "".concat(i.length + 1, "ch");
            }, e.prototype.setActiveDescendant = function (e) {
              this.element.setAttribute("aria-activedescendant", e);
            }, e.prototype.removeActiveDescendant = function () {
              this.element.removeAttribute("aria-activedescendant");
            }, e.prototype._onInput = function () {
              this.type !== r.SELECT_ONE_TYPE && this.setWidth();
            }, e.prototype._onPaste = function (e) {
              this.preventPaste && e.preventDefault();
            }, e.prototype._onFocus = function () {
              this.isFocussed = !0;
            }, e.prototype._onBlur = function () {
              this.isFocussed = !1;
            }, e;
          }();
        t["default"] = s;
      },
      624: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(883),
          r = function () {
            function e(e) {
              var t = e.element;
              this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight;
            }
            return e.prototype.clear = function () {
              this.element.innerHTML = "";
            }, e.prototype.append = function (e) {
              this.element.appendChild(e);
            }, e.prototype.getChild = function (e) {
              return this.element.querySelector(e);
            }, e.prototype.hasChildren = function () {
              return this.element.hasChildNodes();
            }, e.prototype.scrollToTop = function () {
              this.element.scrollTop = 0;
            }, e.prototype.scrollToChildElement = function (e, t) {
              var i = this;
              if (e) {
                var n = this.element.offsetHeight,
                  r = this.element.scrollTop + n,
                  s = e.offsetHeight,
                  o = e.offsetTop + s,
                  a = t > 0 ? this.element.scrollTop + o - r : e.offsetTop;
                requestAnimationFrame(function () {
                  i._animateScroll(a, t);
                });
              }
            }, e.prototype._scrollDown = function (e, t, i) {
              var n = (i - e) / t,
                r = n > 1 ? n : 1;
              this.element.scrollTop = e + r;
            }, e.prototype._scrollUp = function (e, t, i) {
              var n = (e - i) / t,
                r = n > 1 ? n : 1;
              this.element.scrollTop = e - r;
            }, e.prototype._animateScroll = function (e, t) {
              var i = this,
                r = n.SCROLLING_SPEED,
                s = this.element.scrollTop,
                o = !1;
              t > 0 ? (this._scrollDown(s, r, e), s < e && (o = !0)) : (this._scrollUp(s, r, e), s > e && (o = !0)), o && requestAnimationFrame(function () {
                i._animateScroll(e, t);
              });
            }, e;
          }();
        t["default"] = r;
      },
      730: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = i(799),
          r = function () {
            function e(e) {
              var t = e.element,
                i = e.classNames;
              if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
              this.isDisabled = !1;
            }
            return Object.defineProperty(e.prototype, "isActive", {
              get: function get() {
                return "active" === this.element.dataset.choice;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "dir", {
              get: function get() {
                return this.element.dir;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
              get: function get() {
                return this.element.value;
              },
              set: function set(e) {
                this.element.value = e;
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.conceal = function () {
              this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
              var e = this.element.getAttribute("style");
              e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
            }, e.prototype.reveal = function () {
              this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
              var e = this.element.getAttribute("data-choice-orig-style");
              e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
            }, e.prototype.enable = function () {
              this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
            }, e.prototype.disable = function () {
              this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
            }, e.prototype.triggerEvent = function (e, t) {
              (0, n.dispatchEvent)(this.element, e, t);
            }, e;
          }();
        t["default"] = r;
      },
      541: function _(e, t, i) {
        var _n,
          r = this && this.__extends || (_n = function n(e, t) {
            return _n = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }, _n(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function i() {
              this.constructor = e;
            }
            _n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
          }),
          s = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function (e) {
          function t(t) {
            var i = t.element,
              n = t.classNames,
              r = t.delimiter,
              s = e.call(this, {
                element: i,
                classNames: n
              }) || this;
            return s.delimiter = r, s;
          }
          return r(t, e), Object.defineProperty(t.prototype, "value", {
            get: function get() {
              return this.element.value;
            },
            set: function set(e) {
              this.element.setAttribute("value", e), this.element.value = e;
            },
            enumerable: !1,
            configurable: !0
          }), t;
        }(s(i(730))["default"]);
        t["default"] = o;
      },
      982: function _(e, t, i) {
        var _n2,
          r = this && this.__extends || (_n2 = function n(e, t) {
            return _n2 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }, _n2(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function i() {
              this.constructor = e;
            }
            _n2(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
          }),
          s = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function (e) {
          function t(t) {
            var i = t.element,
              n = t.classNames,
              r = t.template,
              s = e.call(this, {
                element: i,
                classNames: n
              }) || this;
            return s.template = r, s;
          }
          return r(t, e), Object.defineProperty(t.prototype, "placeholderOption", {
            get: function get() {
              return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "optionGroups", {
            get: function get() {
              return Array.from(this.element.getElementsByTagName("OPTGROUP"));
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "options", {
            get: function get() {
              return Array.from(this.element.options);
            },
            set: function set(e) {
              var t = this,
                i = document.createDocumentFragment();
              e.forEach(function (e) {
                return n = e, r = t.template(n), void i.appendChild(r);
                var n, r;
              }), this.appendDocFragment(i);
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.appendDocFragment = function (e) {
            this.element.innerHTML = "", this.element.appendChild(e);
          }, t;
        }(s(i(730))["default"]);
        t["default"] = o;
      },
      883: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, t.EVENTS = {
          showDropdown: "showDropdown",
          hideDropdown: "hideDropdown",
          change: "change",
          choice: "choice",
          search: "search",
          addItem: "addItem",
          removeItem: "removeItem",
          highlightItem: "highlightItem",
          highlightChoice: "highlightChoice",
          unhighlightItem: "unhighlightItem"
        }, t.ACTION_TYPES = {
          ADD_CHOICE: "ADD_CHOICE",
          FILTER_CHOICES: "FILTER_CHOICES",
          ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
          CLEAR_CHOICES: "CLEAR_CHOICES",
          ADD_GROUP: "ADD_GROUP",
          ADD_ITEM: "ADD_ITEM",
          REMOVE_ITEM: "REMOVE_ITEM",
          HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
          CLEAR_ALL: "CLEAR_ALL",
          RESET_TO: "RESET_TO",
          SET_IS_LOADING: "SET_IS_LOADING"
        }, t.KEY_CODES = {
          BACK_KEY: 46,
          DELETE_KEY: 8,
          ENTER_KEY: 13,
          A_KEY: 65,
          ESC_KEY: 27,
          UP_KEY: 38,
          DOWN_KEY: 40,
          PAGE_UP_KEY: 33,
          PAGE_DOWN_KEY: 34
        }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", t.SCROLLING_SPEED = 4;
      },
      789: function _(e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
        var n = i(799);
        t.DEFAULT_CLASSNAMES = {
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
          selectedState: "is-selected",
          flippedState: "is-flipped",
          loadingState: "is-loading",
          noResults: "has-no-results",
          noChoices: "has-no-choices"
        }, t.DEFAULT_CONFIG = {
          items: [],
          choices: [],
          silent: !1,
          renderChoiceLimit: -1,
          maxItemCount: -1,
          addItems: !0,
          addItemFilter: null,
          removeItems: !0,
          removeItemButton: !1,
          editItems: !1,
          allowHTML: !0,
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
          sorter: n.sortByAlpha,
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
            return 'Press Enter to add <b>"'.concat((0, n.sanitise)(e), '"</b>');
          },
          maxItemText: function maxItemText(e) {
            return "Only ".concat(e, " values can be added");
          },
          valueComparer: function valueComparer(e, t) {
            return e === t;
          },
          fuseOptions: {
            includeScore: !0
          },
          labelId: "",
          callbackOnInit: null,
          callbackOnCreateTemplates: null,
          classNames: t.DEFAULT_CLASSNAMES
        };
      },
      18: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      978: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      948: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      359: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      285: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      533: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      187: function _(e, t, i) {
        var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
            void 0 === n && (n = i);
            var r = Object.getOwnPropertyDescriptor(t, i);
            r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
              enumerable: !0,
              get: function get() {
                return t[i];
              }
            }), Object.defineProperty(e, n, r);
          } : function (e, t, i, n) {
            void 0 === n && (n = i), e[n] = t[i];
          }),
          r = this && this.__exportStar || function (e, t) {
            for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), r(i(18), t), r(i(978), t), r(i(948), t), r(i(359), t), r(i(285), t), r(i(533), t), r(i(287), t), r(i(132), t), r(i(837), t), r(i(598), t), r(i(369), t), r(i(37), t), r(i(47), t), r(i(923), t), r(i(876), t);
      },
      287: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      132: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      837: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      598: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      37: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      369: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      47: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      923: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      876: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
      },
      799: function _(e, t) {
        var i;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.parseCustomProperties = t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, t.getRandomNumber = function (e, t) {
          return Math.floor(Math.random() * (t - e) + e);
        }, t.generateChars = function (e) {
          return Array.from({
            length: e
          }, function () {
            return (0, t.getRandomNumber)(0, 36).toString(36);
          }).join("");
        }, t.generateId = function (e, i) {
          var n = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, t.generateChars)(4);
          return n = n.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(i, "-").concat(n);
        }, t.getType = function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }, t.isType = function (e, i) {
          return null != i && (0, t.getType)(i) === e;
        }, t.wrap = function (e, t) {
          return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), t.appendChild(e);
        }, t.getAdjacentEl = function (e, t, i) {
          void 0 === i && (i = 1);
          for (var n = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), r = e[n]; r;) {
            if (r.matches(t)) return r;
            r = r[n];
          }
          return r;
        }, t.isScrolledIntoView = function (e, t, i) {
          return void 0 === i && (i = 1), !!e && (i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop);
        }, t.sanitise = function (e) {
          return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        }, t.strToEl = (i = document.createElement("div"), function (e) {
          var t = e.trim();
          i.innerHTML = t;
          for (var n = i.children[0]; i.firstChild;) i.removeChild(i.firstChild);
          return n;
        }), t.sortByAlpha = function (e, t) {
          var i = e.value,
            n = e.label,
            r = void 0 === n ? i : n,
            s = t.value,
            o = t.label,
            a = void 0 === o ? s : o;
          return r.localeCompare(a, [], {
            sensitivity: "base",
            ignorePunctuation: !0,
            numeric: !0
          });
        }, t.sortByScore = function (e, t) {
          var i = e.score,
            n = void 0 === i ? 0 : i,
            r = t.score;
          return n - (void 0 === r ? 0 : r);
        }, t.dispatchEvent = function (e, t, i) {
          void 0 === i && (i = null);
          var n = new CustomEvent(t, {
            detail: i,
            bubbles: !0,
            cancelable: !0
          });
          return e.dispatchEvent(n);
        }, t.existsInArray = function (e, t, i) {
          return void 0 === i && (i = "value"), e.some(function (e) {
            return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
          });
        }, t.cloneObject = function (e) {
          return JSON.parse(JSON.stringify(e));
        }, t.diff = function (e, t) {
          var i = Object.keys(e).sort(),
            n = Object.keys(t).sort();
          return i.filter(function (e) {
            return n.indexOf(e) < 0;
          });
        }, t.parseCustomProperties = function (e) {
          if (void 0 !== e) try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
          return {};
        };
      },
      273: function _(e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t["default"] = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_CHOICE":
              var r = n,
                s = {
                  id: r.id,
                  elementId: r.elementId,
                  groupId: r.groupId,
                  value: r.value,
                  label: r.label || r.value,
                  disabled: r.disabled || !1,
                  selected: !1,
                  active: !0,
                  score: 9999,
                  customProperties: r.customProperties,
                  placeholder: r.placeholder || !1
                };
              return i(i([], e, !0), [s], !1);
            case "ADD_ITEM":
              var o = n;
              return o.choiceId > -1 ? e.map(function (e) {
                var t = e;
                return t.id === parseInt("".concat(o.choiceId), 10) && (t.selected = !0), t;
              }) : e;
            case "REMOVE_ITEM":
              var a = n;
              return a.choiceId && a.choiceId > -1 ? e.map(function (e) {
                var t = e;
                return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t;
              }) : e;
            case "FILTER_CHOICES":
              var c = n;
              return e.map(function (e) {
                var t = e;
                return t.active = c.results.some(function (e) {
                  var i = e.item,
                    n = e.score;
                  return i.id === t.id && (t.score = n, !0);
                }), t;
              });
            case "ACTIVATE_CHOICES":
              var l = n;
              return e.map(function (e) {
                var t = e;
                return t.active = l.active, t;
              });
            case "CLEAR_CHOICES":
              return t.defaultState;
            default:
              return e;
          }
        };
      },
      871: function _(e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t["default"] = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_GROUP":
              var r = n;
              return i(i([], e, !0), [{
                id: r.id,
                value: r.value,
                active: r.active,
                disabled: r.disabled
              }], !1);
            case "CLEAR_CHOICES":
              return [];
            default:
              return e;
          }
        };
      },
      655: function _(e, t, i) {
        var n = this && this.__importDefault || function (e) {
          return e && e.__esModule ? e : {
            "default": e
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0;
        var r = i(791),
          s = n(i(52)),
          o = n(i(871)),
          a = n(i(273)),
          c = n(i(502)),
          l = i(799);
        t.defaultState = {
          groups: [],
          items: [],
          choices: [],
          loading: !1
        };
        var h = (0, r.combineReducers)({
          items: s["default"],
          groups: o["default"],
          choices: a["default"],
          loading: c["default"]
        });
        t["default"] = function (e, i) {
          var n = e;
          if ("CLEAR_ALL" === i.type) n = t.defaultState;else if ("RESET_TO" === i.type) return (0, l.cloneObject)(i.state);
          return h(n, i);
        };
      },
      52: function _(e, t) {
        var i = this && this.__spreadArray || function (e, t, i) {
          if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
          return e.concat(n || Array.prototype.slice.call(t));
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = [], t["default"] = function (e, n) {
          switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
            case "ADD_ITEM":
              var r = n;
              return i(i([], e, !0), [{
                id: r.id,
                choiceId: r.choiceId,
                groupId: r.groupId,
                value: r.value,
                label: r.label,
                active: !0,
                highlighted: !1,
                customProperties: r.customProperties,
                placeholder: r.placeholder || !1,
                keyCode: null
              }], !1).map(function (e) {
                var t = e;
                return t.highlighted = !1, t;
              });
            case "REMOVE_ITEM":
              return e.map(function (e) {
                var t = e;
                return t.id === n.id && (t.active = !1), t;
              });
            case "HIGHLIGHT_ITEM":
              var s = n;
              return e.map(function (e) {
                var t = e;
                return t.id === s.id && (t.highlighted = s.highlighted), t;
              });
            default:
              return e;
          }
        };
      },
      502: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.defaultState = void 0, t.defaultState = !1, t["default"] = function (e, i) {
          return void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), "SET_IS_LOADING" === i.type ? i.isLoading : e;
        };
      },
      744: function _(e, t, i) {
        var n = this && this.__spreadArray || function (e, t, i) {
            if (i || 2 === arguments.length) for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]);
            return e.concat(n || Array.prototype.slice.call(t));
          },
          r = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var s = i(791),
          o = r(i(655)),
          a = function () {
            function e() {
              this._store = (0, s.createStore)(o["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            }
            return e.prototype.subscribe = function (e) {
              this._store.subscribe(e);
            }, e.prototype.dispatch = function (e) {
              this._store.dispatch(e);
            }, Object.defineProperty(e.prototype, "state", {
              get: function get() {
                return this._store.getState();
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "items", {
              get: function get() {
                return this.state.items;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeItems", {
              get: function get() {
                return this.items.filter(function (e) {
                  return !0 === e.active;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "highlightedActiveItems", {
              get: function get() {
                return this.items.filter(function (e) {
                  return e.active && e.highlighted;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "choices", {
              get: function get() {
                return this.state.choices;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeChoices", {
              get: function get() {
                return this.choices.filter(function (e) {
                  return !0 === e.active;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "selectableChoices", {
              get: function get() {
                return this.choices.filter(function (e) {
                  return !0 !== e.disabled;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "searchableChoices", {
              get: function get() {
                return this.selectableChoices.filter(function (e) {
                  return !0 !== e.placeholder;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "placeholderChoice", {
              get: function get() {
                return n([], this.choices, !0).reverse().find(function (e) {
                  return !0 === e.placeholder;
                });
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "groups", {
              get: function get() {
                return this.state.groups;
              },
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeGroups", {
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
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.isLoading = function () {
              return this.state.loading;
            }, e.prototype.getChoiceById = function (e) {
              return this.activeChoices.find(function (t) {
                return t.id === parseInt(e, 10);
              });
            }, e.prototype.getGroupById = function (e) {
              return this.groups.find(function (t) {
                return t.id === e;
              });
            }, e;
          }();
        t["default"] = a;
      },
      686: function _(e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = {
          containerOuter: function containerOuter(e, t, i, n, r, s, o) {
            var a = e.classNames.containerOuter,
              c = Object.assign(document.createElement("div"), {
                className: a
              });
            return c.dataset.type = s, t && (c.dir = t), n && (c.tabIndex = 0), i && (c.setAttribute("role", r ? "combobox" : "listbox"), r && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), c.setAttribute("aria-expanded", "false"), o && c.setAttribute("aria-labelledby", o), c;
          },
          containerInner: function containerInner(e) {
            var t = e.classNames.containerInner;
            return Object.assign(document.createElement("div"), {
              className: t
            });
          },
          itemList: function itemList(e, t) {
            var i = e.classNames,
              n = i.list,
              r = i.listSingle,
              s = i.listItems;
            return Object.assign(document.createElement("div"), {
              className: "".concat(n, " ").concat(t ? r : s)
            });
          },
          placeholder: function placeholder(e, t) {
            var i,
              n = e.allowHTML,
              r = e.classNames.placeholder;
            return Object.assign(document.createElement("div"), ((i = {
              className: r
            })[n ? "innerHTML" : "innerText"] = t, i));
          },
          item: function item(e, t, i) {
            var n,
              r,
              s = e.allowHTML,
              o = e.classNames,
              a = o.item,
              c = o.button,
              l = o.highlightedState,
              h = o.itemSelectable,
              u = o.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.customProperties,
              v = t.active,
              g = t.disabled,
              _ = t.highlighted,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
                className: a
              })[s ? "innerHTML" : "innerText"] = f, n));
            if (Object.assign(E.dataset, {
              item: "",
              id: d,
              value: p,
              customProperties: m
            }), v && E.setAttribute("aria-selected", "true"), g && E.setAttribute("aria-disabled", "true"), y && E.classList.add(u), E.classList.add(_ ? l : h), i) {
              g && E.classList.remove(h), E.dataset.deletable = "";
              var b = "Remove item",
                S = Object.assign(document.createElement("button"), ((r = {
                  type: "button",
                  className: c
                })[s ? "innerHTML" : "innerText"] = b, r));
              S.setAttribute("aria-label", "".concat(b, ": '").concat(p, "'")), S.dataset.button = "", E.appendChild(S);
            }
            return E;
          },
          choiceList: function choiceList(e, t) {
            var i = e.classNames.list,
              n = Object.assign(document.createElement("div"), {
                className: i
              });
            return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n;
          },
          choiceGroup: function choiceGroup(e, t) {
            var i,
              n = e.allowHTML,
              r = e.classNames,
              s = r.group,
              o = r.groupHeading,
              a = r.itemDisabled,
              c = t.id,
              l = t.value,
              h = t.disabled,
              u = Object.assign(document.createElement("div"), {
                className: "".concat(s, " ").concat(h ? a : "")
              });
            return u.setAttribute("role", "group"), Object.assign(u.dataset, {
              group: "",
              id: c,
              value: l
            }), h && u.setAttribute("aria-disabled", "true"), u.appendChild(Object.assign(document.createElement("div"), ((i = {
              className: o
            })[n ? "innerHTML" : "innerText"] = l, i))), u;
          },
          choice: function choice(e, t, i) {
            var n,
              r = e.allowHTML,
              s = e.classNames,
              o = s.item,
              a = s.itemChoice,
              c = s.itemSelectable,
              l = s.selectedState,
              h = s.itemDisabled,
              u = s.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.groupId,
              v = t.elementId,
              g = t.disabled,
              _ = t.selected,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
                id: v
              })[r ? "innerHTML" : "innerText"] = f, n.className = "".concat(o, " ").concat(a), n));
            return _ && E.classList.add(l), y && E.classList.add(u), E.setAttribute("role", m && m > 0 ? "treeitem" : "option"), Object.assign(E.dataset, {
              choice: "",
              id: d,
              value: p,
              selectText: i
            }), g ? (E.classList.add(h), E.dataset.choiceDisabled = "", E.setAttribute("aria-disabled", "true")) : (E.classList.add(c), E.dataset.choiceSelectable = ""), E;
          },
          input: function input(e, t) {
            var i = e.classNames,
              n = i.input,
              r = i.inputCloned,
              s = Object.assign(document.createElement("input"), {
                type: "search",
                name: "search_terms",
                className: "".concat(n, " ").concat(r),
                autocomplete: "off",
                autocapitalize: "off",
                spellcheck: !1
              });
            return s.setAttribute("role", "textbox"), s.setAttribute("aria-autocomplete", "list"), s.setAttribute("aria-label", t), s;
          },
          dropdown: function dropdown(e) {
            var t = e.classNames,
              i = t.list,
              n = t.listDropdown,
              r = document.createElement("div");
            return r.classList.add(i, n), r.setAttribute("aria-expanded", "false"), r;
          },
          notice: function notice(e, t, i) {
            var n,
              r = e.allowHTML,
              s = e.classNames,
              o = s.item,
              a = s.itemChoice,
              c = s.noResults,
              l = s.noChoices;
            void 0 === i && (i = "");
            var h = [o, a];
            return "no-choices" === i ? h.push(l) : "no-results" === i && h.push(c), Object.assign(document.createElement("div"), ((n = {})[r ? "innerHTML" : "innerText"] = t, n.className = h.join(" "), n));
          },
          option: function option(e) {
            var t = e.label,
              i = e.value,
              n = e.customProperties,
              r = e.active,
              s = e.disabled,
              o = new Option(t, i, !1, r);
            return n && (o.dataset.customProperties = "".concat(n)), o.disabled = !!s, o;
          }
        };
        t["default"] = i;
      },
      996: function _(e) {
        var t = function t(e) {
            return function (e) {
              return !!e && "object" == _typeof(e);
            }(e) && !function (e) {
              var t = Object.prototype.toString.call(e);
              return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                return e.$$typeof === i;
              }(e);
            }(e);
          },
          i = "function" == typeof Symbol && Symbol["for"] ? Symbol["for"]("react.element") : 60103;
        function n(e, t) {
          return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
          var i;
        }
        function r(e, t, i) {
          return e.concat(t).map(function (e) {
            return n(e, i);
          });
        }
        function s(e) {
          return Object.keys(e).concat(function (e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
              return e.propertyIsEnumerable(t);
            }) : [];
          }(e));
        }
        function o(e, t) {
          try {
            return t in e;
          } catch (e) {
            return !1;
          }
        }
        function a(e, i, c) {
          (c = c || {}).arrayMerge = c.arrayMerge || r, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
          var l = Array.isArray(i);
          return l === Array.isArray(e) ? l ? c.arrayMerge(e, i, c) : function (e, t, i) {
            var r = {};
            return i.isMergeableObject(e) && s(e).forEach(function (t) {
              r[t] = n(e[t], i);
            }), s(t).forEach(function (s) {
              (function (e, t) {
                return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
              })(e, s) || (o(e, s) && i.isMergeableObject(t[s]) ? r[s] = function (e, t) {
                if (!t.customMerge) return a;
                var i = t.customMerge(e);
                return "function" == typeof i ? i : a;
              }(s, i)(e[s], t[s], i) : r[s] = n(t[s], i));
            }), r;
          }(e, i, c) : n(i, c);
        }
        a.all = function (e, t) {
          if (!Array.isArray(e)) throw new Error("first argument should be an array");
          return e.reduce(function (e, i) {
            return a(e, i, t);
          }, {});
        };
        var c = a;
        e.exports = c;
      },
      221: function _(e, t, i) {
        function n(e) {
          return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e);
        }
        function r(e) {
          return "string" == typeof e;
        }
        function s(e) {
          return "number" == typeof e;
        }
        function o(e) {
          return "object" == _typeof(e);
        }
        function a(e) {
          return null != e;
        }
        function c(e) {
          return !e.trim().length;
        }
        function l(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
        }
        i.r(t), i.d(t, {
          "default": function _default() {
            return R;
          }
        });
        var h = Object.prototype.hasOwnProperty;
        var u = /*#__PURE__*/function () {
          function u(e) {
            var _this = this;
            _classCallCheck(this, u);
            this._keys = [], this._keyMap = {};
            var t = 0;
            e.forEach(function (e) {
              var i = d(e);
              t += i.weight, _this._keys.push(i), _this._keyMap[i.id] = i, t += i.weight;
            }), this._keys.forEach(function (e) {
              e.weight /= t;
            });
          }
          _createClass(u, [{
            key: "get",
            value: function get(e) {
              return this._keyMap[e];
            }
          }, {
            key: "keys",
            value: function keys() {
              return this._keys;
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return JSON.stringify(this._keys);
            }
          }]);
          return u;
        }();
        function d(e) {
          var t = null,
            i = null,
            s = null,
            o = 1,
            a = null;
          if (r(e) || n(e)) s = e, t = p(e), i = f(e);else {
            if (!h.call(e, "name")) throw new Error("Missing name property in key");
            var _n3 = e.name;
            if (s = _n3, h.call(e, "weight") && (o = e.weight, o <= 0)) throw new Error(function (e) {
              return "Property 'weight' in key '".concat(e, "' must be a positive integer");
            }(_n3));
            t = p(_n3), i = f(_n3), a = e.getFn;
          }
          return {
            path: t,
            id: i,
            weight: o,
            src: s,
            getFn: a
          };
        }
        function p(e) {
          return n(e) ? e : e.split(".");
        }
        function f(e) {
          return n(e) ? e.join(".") : e;
        }
        var m = {
          isCaseSensitive: !1,
          includeScore: !1,
          keys: [],
          shouldSort: !0,
          sortFn: function sortFn(e, t) {
            return e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1;
          },
          includeMatches: !1,
          findAllMatches: !1,
          minMatchCharLength: 1,
          location: 0,
          threshold: .6,
          distance: 100,
          useExtendedSearch: !1,
          getFn: function getFn(e, t) {
            var i = [],
              c = !1;
            var h = function h(e, t, u) {
              if (a(e)) if (t[u]) {
                var _d = e[t[u]];
                if (!a(_d)) return;
                if (u === t.length - 1 && (r(_d) || s(_d) || function (e) {
                  return !0 === e || !1 === e || function (e) {
                    return o(e) && null !== e;
                  }(e) && "[object Boolean]" == l(e);
                }(_d))) i.push(function (e) {
                  return null == e ? "" : function (e) {
                    if ("string" == typeof e) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                  }(e);
                }(_d));else if (n(_d)) {
                  c = !0;
                  for (var _e = 0, _i = _d.length; _e < _i; _e += 1) h(_d[_e], t, u + 1);
                } else t.length && h(_d, t, u + 1);
              } else i.push(e);
            };
            return h(e, r(t) ? t.split(".") : t, 0), c ? i : i[0];
          },
          ignoreLocation: !1,
          ignoreFieldNorm: !1,
          fieldNormWeight: 1
        };
        var v = /[^ ]+/g;
        var g = /*#__PURE__*/function () {
          function g() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$getFn = _ref.getFn,
              e = _ref$getFn === void 0 ? m.getFn : _ref$getFn,
              _ref$fieldNormWeight = _ref.fieldNormWeight,
              t = _ref$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref$fieldNormWeight;
            _classCallCheck(this, g);
            this.norm = function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
              var i = new Map(),
                n = Math.pow(10, t);
              return {
                get: function get(t) {
                  var r = t.match(v).length;
                  if (i.has(r)) return i.get(r);
                  var s = 1 / Math.pow(r, .5 * e),
                    o = parseFloat(Math.round(s * n) / n);
                  return i.set(r, o), o;
                },
                clear: function clear() {
                  i.clear();
                }
              };
            }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
          }
          _createClass(g, [{
            key: "setSources",
            value: function setSources() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.docs = e;
            }
          }, {
            key: "setIndexRecords",
            value: function setIndexRecords() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.records = e;
            }
          }, {
            key: "setKeys",
            value: function setKeys() {
              var _this2 = this;
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              this.keys = e, this._keysMap = {}, e.forEach(function (e, t) {
                _this2._keysMap[e.id] = t;
              });
            }
          }, {
            key: "create",
            value: function create() {
              var _this3 = this;
              !this.isCreated && this.docs.length && (this.isCreated = !0, r(this.docs[0]) ? this.docs.forEach(function (e, t) {
                _this3._addString(e, t);
              }) : this.docs.forEach(function (e, t) {
                _this3._addObject(e, t);
              }), this.norm.clear());
            }
          }, {
            key: "add",
            value: function add(e) {
              var t = this.size();
              r(e) ? this._addString(e, t) : this._addObject(e, t);
            }
          }, {
            key: "removeAt",
            value: function removeAt(e) {
              this.records.splice(e, 1);
              for (var _t = e, _i2 = this.size(); _t < _i2; _t += 1) this.records[_t].i -= 1;
            }
          }, {
            key: "getValueForItemAtKeyId",
            value: function getValueForItemAtKeyId(e, t) {
              return e[this._keysMap[t]];
            }
          }, {
            key: "size",
            value: function size() {
              return this.records.length;
            }
          }, {
            key: "_addString",
            value: function _addString(e, t) {
              if (!a(e) || c(e)) return;
              var i = {
                v: e,
                i: t,
                n: this.norm.get(e)
              };
              this.records.push(i);
            }
          }, {
            key: "_addObject",
            value: function _addObject(e, t) {
              var _this4 = this;
              var i = {
                i: t,
                $: {}
              };
              this.keys.forEach(function (t, s) {
                var o = t.getFn ? t.getFn(e) : _this4.getFn(e, t.path);
                if (a(o)) if (n(o)) {
                  var _e2 = [];
                  var _t2 = [{
                    nestedArrIndex: -1,
                    value: o
                  }];
                  for (; _t2.length;) {
                    var _t2$pop = _t2.pop(),
                      _i3 = _t2$pop.nestedArrIndex,
                      _s = _t2$pop.value;
                    if (a(_s)) if (r(_s) && !c(_s)) {
                      var _t3 = {
                        v: _s,
                        i: _i3,
                        n: _this4.norm.get(_s)
                      };
                      _e2.push(_t3);
                    } else n(_s) && _s.forEach(function (e, i) {
                      _t2.push({
                        nestedArrIndex: i,
                        value: e
                      });
                    });
                  }
                  i.$[s] = _e2;
                } else if (r(o) && !c(o)) {
                  var _e3 = {
                    v: o,
                    n: _this4.norm.get(o)
                  };
                  i.$[s] = _e3;
                }
              }), this.records.push(i);
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                keys: this.keys,
                records: this.records
              };
            }
          }]);
          return g;
        }();
        function _(e, t) {
          var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref2$getFn = _ref2.getFn,
            i = _ref2$getFn === void 0 ? m.getFn : _ref2$getFn,
            _ref2$fieldNormWeight = _ref2.fieldNormWeight,
            n = _ref2$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref2$fieldNormWeight;
          var r = new g({
            getFn: i,
            fieldNormWeight: n
          });
          return r.setKeys(e.map(d)), r.setSources(t), r.create(), r;
        }
        function y(e) {
          var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$errors = _ref3.errors,
            t = _ref3$errors === void 0 ? 0 : _ref3$errors,
            _ref3$currentLocation = _ref3.currentLocation,
            i = _ref3$currentLocation === void 0 ? 0 : _ref3$currentLocation,
            _ref3$expectedLocatio = _ref3.expectedLocation,
            n = _ref3$expectedLocatio === void 0 ? 0 : _ref3$expectedLocatio,
            _ref3$distance = _ref3.distance,
            r = _ref3$distance === void 0 ? m.distance : _ref3$distance,
            _ref3$ignoreLocation = _ref3.ignoreLocation,
            s = _ref3$ignoreLocation === void 0 ? m.ignoreLocation : _ref3$ignoreLocation;
          var o = t / e.length;
          if (s) return o;
          var a = Math.abs(n - i);
          return r ? o + a / r : a ? 1 : o;
        }
        var E = 32;
        function b(e) {
          var t = {};
          for (var _i4 = 0, _n4 = e.length; _i4 < _n4; _i4 += 1) {
            var _r = e.charAt(_i4);
            t[_r] = (t[_r] || 0) | 1 << _n4 - _i4 - 1;
          }
          return t;
        }
        var S = /*#__PURE__*/function () {
          function S(e) {
            var _this5 = this;
            var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref4$location = _ref4.location,
              t = _ref4$location === void 0 ? m.location : _ref4$location,
              _ref4$threshold = _ref4.threshold,
              i = _ref4$threshold === void 0 ? m.threshold : _ref4$threshold,
              _ref4$distance = _ref4.distance,
              n = _ref4$distance === void 0 ? m.distance : _ref4$distance,
              _ref4$includeMatches = _ref4.includeMatches,
              r = _ref4$includeMatches === void 0 ? m.includeMatches : _ref4$includeMatches,
              _ref4$findAllMatches = _ref4.findAllMatches,
              s = _ref4$findAllMatches === void 0 ? m.findAllMatches : _ref4$findAllMatches,
              _ref4$minMatchCharLen = _ref4.minMatchCharLength,
              o = _ref4$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref4$minMatchCharLen,
              _ref4$isCaseSensitive = _ref4.isCaseSensitive,
              a = _ref4$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref4$isCaseSensitive,
              _ref4$ignoreLocation = _ref4.ignoreLocation,
              c = _ref4$ignoreLocation === void 0 ? m.ignoreLocation : _ref4$ignoreLocation;
            _classCallCheck(this, S);
            if (this.options = {
              location: t,
              threshold: i,
              distance: n,
              includeMatches: r,
              findAllMatches: s,
              minMatchCharLength: o,
              isCaseSensitive: a,
              ignoreLocation: c
            }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;
            var l = function l(e, t) {
                _this5.chunks.push({
                  pattern: e,
                  alphabet: b(e),
                  startIndex: t
                });
              },
              h = this.pattern.length;
            if (h > E) {
              var _e4 = 0;
              var _t4 = h % E,
                _i5 = h - _t4;
              for (; _e4 < _i5;) l(this.pattern.substr(_e4, E), _e4), _e4 += E;
              if (_t4) {
                var _e5 = h - E;
                l(this.pattern.substr(_e5), _e5);
              }
            } else l(this.pattern, 0);
          }
          _createClass(S, [{
            key: "searchIn",
            value: function searchIn(e) {
              var _this$options = this.options,
                t = _this$options.isCaseSensitive,
                i = _this$options.includeMatches;
              if (t || (e = e.toLowerCase()), this.pattern === e) {
                var _t5 = {
                  isMatch: !0,
                  score: 0
                };
                return i && (_t5.indices = [[0, e.length - 1]]), _t5;
              }
              var _this$options2 = this.options,
                n = _this$options2.location,
                r = _this$options2.distance,
                s = _this$options2.threshold,
                o = _this$options2.findAllMatches,
                a = _this$options2.minMatchCharLength,
                c = _this$options2.ignoreLocation;
              var l = [],
                h = 0,
                u = !1;
              this.chunks.forEach(function (_ref5) {
                var t = _ref5.pattern,
                  d = _ref5.alphabet,
                  p = _ref5.startIndex;
                var _ref6 = function (e, t, i) {
                    var _ref7 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                      _ref7$location = _ref7.location,
                      n = _ref7$location === void 0 ? m.location : _ref7$location,
                      _ref7$distance = _ref7.distance,
                      r = _ref7$distance === void 0 ? m.distance : _ref7$distance,
                      _ref7$threshold = _ref7.threshold,
                      s = _ref7$threshold === void 0 ? m.threshold : _ref7$threshold,
                      _ref7$findAllMatches = _ref7.findAllMatches,
                      o = _ref7$findAllMatches === void 0 ? m.findAllMatches : _ref7$findAllMatches,
                      _ref7$minMatchCharLen = _ref7.minMatchCharLength,
                      a = _ref7$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref7$minMatchCharLen,
                      _ref7$includeMatches = _ref7.includeMatches,
                      c = _ref7$includeMatches === void 0 ? m.includeMatches : _ref7$includeMatches,
                      _ref7$ignoreLocation = _ref7.ignoreLocation,
                      l = _ref7$ignoreLocation === void 0 ? m.ignoreLocation : _ref7$ignoreLocation;
                    if (t.length > E) throw new Error("Pattern length exceeds max of 32.");
                    var h = t.length,
                      u = e.length,
                      d = Math.max(0, Math.min(n, u));
                    var p = s,
                      f = d;
                    var v = a > 1 || c,
                      g = v ? Array(u) : [];
                    var _;
                    for (; (_ = e.indexOf(t, f)) > -1;) {
                      var _e6 = y(t, {
                        currentLocation: _,
                        expectedLocation: d,
                        distance: r,
                        ignoreLocation: l
                      });
                      if (p = Math.min(_e6, p), f = _ + h, v) {
                        var _e7 = 0;
                        for (; _e7 < h;) g[_ + _e7] = 1, _e7 += 1;
                      }
                    }
                    f = -1;
                    var b = [],
                      S = 1,
                      O = h + u;
                    var I = 1 << h - 1;
                    for (var _n5 = 0; _n5 < h; _n5 += 1) {
                      var _s2 = 0,
                        _a = O;
                      for (; _s2 < _a;) y(t, {
                        errors: _n5,
                        currentLocation: d + _a,
                        expectedLocation: d,
                        distance: r,
                        ignoreLocation: l
                      }) <= p ? _s2 = _a : O = _a, _a = Math.floor((O - _s2) / 2 + _s2);
                      O = _a;
                      var _c = Math.max(1, d - _a + 1),
                        _m = o ? u : Math.min(d + _a, u) + h,
                        _2 = Array(_m + 2);
                      _2[_m + 1] = (1 << _n5) - 1;
                      for (var _s3 = _m; _s3 >= _c; _s3 -= 1) {
                        var _o = _s3 - 1,
                          _a2 = i[e.charAt(_o)];
                        if (v && (g[_o] = +!!_a2), _2[_s3] = (_2[_s3 + 1] << 1 | 1) & _a2, _n5 && (_2[_s3] |= (b[_s3 + 1] | b[_s3]) << 1 | 1 | b[_s3 + 1]), _2[_s3] & I && (S = y(t, {
                          errors: _n5,
                          currentLocation: _o,
                          expectedLocation: d,
                          distance: r,
                          ignoreLocation: l
                        }), S <= p)) {
                          if (p = S, f = _o, f <= d) break;
                          _c = Math.max(1, 2 * d - f);
                        }
                      }
                      if (y(t, {
                        errors: _n5 + 1,
                        currentLocation: d,
                        expectedLocation: d,
                        distance: r,
                        ignoreLocation: l
                      }) > p) break;
                      b = _2;
                    }
                    var C = {
                      isMatch: f >= 0,
                      score: Math.max(.001, S)
                    };
                    if (v) {
                      var _e8 = function () {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m.minMatchCharLength;
                        var i = [],
                          n = -1,
                          r = -1,
                          s = 0;
                        for (var _o2 = e.length; s < _o2; s += 1) {
                          var _o3 = e[s];
                          _o3 && -1 === n ? n = s : _o3 || -1 === n || (r = s - 1, r - n + 1 >= t && i.push([n, r]), n = -1);
                        }
                        return e[s - 1] && s - n >= t && i.push([n, s - 1]), i;
                      }(g, a);
                      _e8.length ? c && (C.indices = _e8) : C.isMatch = !1;
                    }
                    return C;
                  }(e, t, d, {
                    location: n + p,
                    distance: r,
                    threshold: s,
                    findAllMatches: o,
                    minMatchCharLength: a,
                    includeMatches: i,
                    ignoreLocation: c
                  }),
                  f = _ref6.isMatch,
                  v = _ref6.score,
                  g = _ref6.indices;
                f && (u = !0), h += v, f && g && (l = [].concat(_toConsumableArray(l), _toConsumableArray(g)));
              });
              var d = {
                isMatch: u,
                score: u ? h / this.chunks.length : 1
              };
              return u && i && (d.indices = l), d;
            }
          }]);
          return S;
        }();
        var O = /*#__PURE__*/function () {
          function O(e) {
            _classCallCheck(this, O);
            this.pattern = e;
          }
          _createClass(O, [{
            key: "search",
            value: function search() {}
          }], [{
            key: "isMultiMatch",
            value: function isMultiMatch(e) {
              return I(e, this.multiRegex);
            }
          }, {
            key: "isSingleMatch",
            value: function isSingleMatch(e) {
              return I(e, this.singleRegex);
            }
          }]);
          return O;
        }();
        function I(e, t) {
          var i = e.match(t);
          return i ? i[1] : null;
        }
        var C = /*#__PURE__*/function (_O) {
          _inherits(C, _O);
          var _super = _createSuper(C);
          function C(e) {
            var _this6;
            var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref8$location = _ref8.location,
              t = _ref8$location === void 0 ? m.location : _ref8$location,
              _ref8$threshold = _ref8.threshold,
              i = _ref8$threshold === void 0 ? m.threshold : _ref8$threshold,
              _ref8$distance = _ref8.distance,
              n = _ref8$distance === void 0 ? m.distance : _ref8$distance,
              _ref8$includeMatches = _ref8.includeMatches,
              r = _ref8$includeMatches === void 0 ? m.includeMatches : _ref8$includeMatches,
              _ref8$findAllMatches = _ref8.findAllMatches,
              s = _ref8$findAllMatches === void 0 ? m.findAllMatches : _ref8$findAllMatches,
              _ref8$minMatchCharLen = _ref8.minMatchCharLength,
              o = _ref8$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref8$minMatchCharLen,
              _ref8$isCaseSensitive = _ref8.isCaseSensitive,
              a = _ref8$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref8$isCaseSensitive,
              _ref8$ignoreLocation = _ref8.ignoreLocation,
              c = _ref8$ignoreLocation === void 0 ? m.ignoreLocation : _ref8$ignoreLocation;
            _classCallCheck(this, C);
            _this6 = _super.call(this, e), _this6._bitapSearch = new S(e, {
              location: t,
              threshold: i,
              distance: n,
              includeMatches: r,
              findAllMatches: s,
              minMatchCharLength: o,
              isCaseSensitive: a,
              ignoreLocation: c
            });
            return _this6;
          }
          _createClass(C, [{
            key: "search",
            value: function search(e) {
              return this._bitapSearch.searchIn(e);
            }
          }], [{
            key: "type",
            get: function get() {
              return "fuzzy";
            }
          }, {
            key: "multiRegex",
            get: function get() {
              return /^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get() {
              return /^(.*)$/;
            }
          }]);
          return C;
        }(O);
        var T = /*#__PURE__*/function (_O2) {
          _inherits(T, _O2);
          var _super2 = _createSuper(T);
          function T(e) {
            _classCallCheck(this, T);
            return _super2.call(this, e);
          }
          _createClass(T, [{
            key: "search",
            value: function search(e) {
              var t,
                i = 0;
              var n = [],
                r = this.pattern.length;
              for (; (t = e.indexOf(this.pattern, i)) > -1;) i = t + r, n.push([t, i - 1]);
              var s = !!n.length;
              return {
                isMatch: s,
                score: s ? 0 : 1,
                indices: n
              };
            }
          }], [{
            key: "type",
            get: function get() {
              return "include";
            }
          }, {
            key: "multiRegex",
            get: function get() {
              return /^'"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get() {
              return /^'(.*)$/;
            }
          }]);
          return T;
        }(O);
        var L = [/*#__PURE__*/function (_O3) {
            _inherits(_class, _O3);
            var _super3 = _createSuper(_class);
            function _class(e) {
              _classCallCheck(this, _class);
              return _super3.call(this, e);
            }
            _createClass(_class, [{
              key: "search",
              value: function search(e) {
                var t = e === this.pattern;
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, this.pattern.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^="(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^=(.*)$/;
              }
            }]);
            return _class;
          }(O), T, /*#__PURE__*/function (_O4) {
            _inherits(_class2, _O4);
            var _super4 = _createSuper(_class2);
            function _class2(e) {
              _classCallCheck(this, _class2);
              return _super4.call(this, e);
            }
            _createClass(_class2, [{
              key: "search",
              value: function search(e) {
                var t = e.startsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, this.pattern.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "prefix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^\^"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^\^(.*)$/;
              }
            }]);
            return _class2;
          }(O), /*#__PURE__*/function (_O5) {
            _inherits(_class3, _O5);
            var _super5 = _createSuper(_class3);
            function _class3(e) {
              _classCallCheck(this, _class3);
              return _super5.call(this, e);
            }
            _createClass(_class3, [{
              key: "search",
              value: function search(e) {
                var t = !e.startsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "inverse-prefix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!\^"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!\^(.*)$/;
              }
            }]);
            return _class3;
          }(O), /*#__PURE__*/function (_O6) {
            _inherits(_class4, _O6);
            var _super6 = _createSuper(_class4);
            function _class4(e) {
              _classCallCheck(this, _class4);
              return _super6.call(this, e);
            }
            _createClass(_class4, [{
              key: "search",
              value: function search(e) {
                var t = !e.endsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "inverse-suffix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"\$$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)\$$/;
              }
            }]);
            return _class4;
          }(O), /*#__PURE__*/function (_O7) {
            _inherits(_class5, _O7);
            var _super7 = _createSuper(_class5);
            function _class5(e) {
              _classCallCheck(this, _class5);
              return _super7.call(this, e);
            }
            _createClass(_class5, [{
              key: "search",
              value: function search(e) {
                var t = e.endsWith(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [e.length - this.pattern.length, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "suffix-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^"(.*)"\$$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^(.*)\$$/;
              }
            }]);
            return _class5;
          }(O), /*#__PURE__*/function (_O8) {
            _inherits(_class6, _O8);
            var _super8 = _createSuper(_class6);
            function _class6(e) {
              _classCallCheck(this, _class6);
              return _super8.call(this, e);
            }
            _createClass(_class6, [{
              key: "search",
              value: function search(e) {
                var t = -1 === e.indexOf(this.pattern);
                return {
                  isMatch: t,
                  score: t ? 0 : 1,
                  indices: [0, e.length - 1]
                };
              }
            }], [{
              key: "type",
              get: function get() {
                return "inverse-exact";
              }
            }, {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"$/;
              }
            }, {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)$/;
              }
            }]);
            return _class6;
          }(O), C],
          w = L.length,
          A = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
          M = new Set([C.type, T.type]);
        var P = [];
        function x(e, t) {
          for (var _i6 = 0, _n6 = P.length; _i6 < _n6; _i6 += 1) {
            var _n7 = P[_i6];
            if (_n7.condition(e, t)) return new _n7(e, t);
          }
          return new S(e, t);
        }
        var N = "$and",
          D = function D(e) {
            return !(!e.$and && !e.$or);
          },
          j = function j(e) {
            return _defineProperty({}, N, Object.keys(e).map(function (t) {
              return _defineProperty({}, t, e[t]);
            }));
          };
        function F(e, t) {
          var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref11$auto = _ref11.auto,
            i = _ref11$auto === void 0 ? !0 : _ref11$auto;
          var s = function s(e) {
            var a = Object.keys(e);
            var c = function (e) {
              return !!e.$path;
            }(e);
            if (!c && a.length > 1 && !D(e)) return s(j(e));
            if (function (e) {
              return !n(e) && o(e) && !D(e);
            }(e)) {
              var _n8 = c ? e.$path : a[0],
                _s4 = c ? e.$val : e[_n8];
              if (!r(_s4)) throw new Error(function (e) {
                return "Invalid value for key ".concat(e);
              }(_n8));
              var _o4 = {
                keyId: f(_n8),
                pattern: _s4
              };
              return i && (_o4.searcher = x(_s4, t)), _o4;
            }
            var l = {
              children: [],
              operator: a[0]
            };
            return a.forEach(function (t) {
              var i = e[t];
              n(i) && i.forEach(function (e) {
                l.children.push(s(e));
              });
            }), l;
          };
          return D(e) || (e = j(e)), s(e);
        }
        function k(e, t) {
          var i = e.matches;
          t.matches = [], a(i) && i.forEach(function (e) {
            if (!a(e.indices) || !e.indices.length) return;
            var i = e.indices,
              n = e.value;
            var r = {
              indices: i,
              value: n
            };
            e.key && (r.key = e.key.src), e.idx > -1 && (r.refIndex = e.idx), t.matches.push(r);
          });
        }
        function K(e, t) {
          t.score = e.score;
        }
        var R = /*#__PURE__*/function () {
          function R(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var i = arguments.length > 2 ? arguments[2] : undefined;
            _classCallCheck(this, R);
            this.options = _objectSpread(_objectSpread({}, m), t), this.options.useExtendedSearch, this._keyStore = new u(this.options.keys), this.setCollection(e, i);
          }
          _createClass(R, [{
            key: "setCollection",
            value: function setCollection(e, t) {
              if (this._docs = e, t && !(t instanceof g)) throw new Error("Incorrect 'index' type");
              this._myIndex = t || _(this.options.keys, this._docs, {
                getFn: this.options.getFn,
                fieldNormWeight: this.options.fieldNormWeight
              });
            }
          }, {
            key: "add",
            value: function add(e) {
              a(e) && (this._docs.push(e), this._myIndex.add(e));
            }
          }, {
            key: "remove",
            value: function remove() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
                return !1;
              };
              var t = [];
              for (var _i7 = 0, _n9 = this._docs.length; _i7 < _n9; _i7 += 1) {
                var _r2 = this._docs[_i7];
                e(_r2, _i7) && (this.removeAt(_i7), _i7 -= 1, _n9 -= 1, t.push(_r2));
              }
              return t;
            }
          }, {
            key: "removeAt",
            value: function removeAt(e) {
              this._docs.splice(e, 1), this._myIndex.removeAt(e);
            }
          }, {
            key: "getIndex",
            value: function getIndex() {
              return this._myIndex;
            }
          }, {
            key: "search",
            value: function search(e) {
              var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref12$limit = _ref12.limit,
                t = _ref12$limit === void 0 ? -1 : _ref12$limit;
              var _this$options3 = this.options,
                i = _this$options3.includeMatches,
                n = _this$options3.includeScore,
                o = _this$options3.shouldSort,
                a = _this$options3.sortFn,
                c = _this$options3.ignoreFieldNorm;
              var l = r(e) ? r(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
              return function (e, _ref13) {
                var _ref13$ignoreFieldNor = _ref13.ignoreFieldNorm,
                  t = _ref13$ignoreFieldNor === void 0 ? m.ignoreFieldNorm : _ref13$ignoreFieldNor;
                e.forEach(function (e) {
                  var i = 1;
                  e.matches.forEach(function (_ref14) {
                    var e = _ref14.key,
                      n = _ref14.norm,
                      r = _ref14.score;
                    var s = e ? e.weight : null;
                    i *= Math.pow(0 === r && s ? Number.EPSILON : r, (s || 1) * (t ? 1 : n));
                  }), e.score = i;
                });
              }(l, {
                ignoreFieldNorm: c
              }), o && l.sort(a), s(t) && t > -1 && (l = l.slice(0, t)), function (e, t) {
                var _ref15 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                  _ref15$includeMatches = _ref15.includeMatches,
                  i = _ref15$includeMatches === void 0 ? m.includeMatches : _ref15$includeMatches,
                  _ref15$includeScore = _ref15.includeScore,
                  n = _ref15$includeScore === void 0 ? m.includeScore : _ref15$includeScore;
                var r = [];
                return i && r.push(k), n && r.push(K), e.map(function (e) {
                  var i = e.idx,
                    n = {
                      item: t[i],
                      refIndex: i
                    };
                  return r.length && r.forEach(function (t) {
                    t(e, n);
                  }), n;
                });
              }(l, this._docs, {
                includeMatches: i,
                includeScore: n
              });
            }
          }, {
            key: "_searchStringList",
            value: function _searchStringList(e) {
              var t = x(e, this.options),
                i = this._myIndex.records,
                n = [];
              return i.forEach(function (_ref16) {
                var e = _ref16.v,
                  i = _ref16.i,
                  r = _ref16.n;
                if (!a(e)) return;
                var _t$searchIn = t.searchIn(e),
                  s = _t$searchIn.isMatch,
                  o = _t$searchIn.score,
                  c = _t$searchIn.indices;
                s && n.push({
                  item: e,
                  idx: i,
                  matches: [{
                    score: o,
                    value: e,
                    norm: r,
                    indices: c
                  }]
                });
              }), n;
            }
          }, {
            key: "_searchLogical",
            value: function _searchLogical(e) {
              var _this7 = this;
              var t = F(e, this.options),
                i = function i(e, t, n) {
                  if (!e.children) {
                    var _i8 = e.keyId,
                      _r3 = e.searcher,
                      _s5 = _this7._findMatches({
                        key: _this7._keyStore.get(_i8),
                        value: _this7._myIndex.getValueForItemAtKeyId(t, _i8),
                        searcher: _r3
                      });
                    return _s5 && _s5.length ? [{
                      idx: n,
                      item: t,
                      matches: _s5
                    }] : [];
                  }
                  var r = [];
                  for (var _s6 = 0, _o5 = e.children.length; _s6 < _o5; _s6 += 1) {
                    var _o6 = e.children[_s6],
                      _a3 = i(_o6, t, n);
                    if (_a3.length) r.push.apply(r, _toConsumableArray(_a3));else if (e.operator === N) return [];
                  }
                  return r;
                },
                n = this._myIndex.records,
                r = {},
                s = [];
              return n.forEach(function (_ref17) {
                var e = _ref17.$,
                  n = _ref17.i;
                if (a(e)) {
                  var _o7 = i(t, e, n);
                  _o7.length && (r[n] || (r[n] = {
                    idx: n,
                    item: e,
                    matches: []
                  }, s.push(r[n])), _o7.forEach(function (_ref18) {
                    var _r$n$matches;
                    var e = _ref18.matches;
                    (_r$n$matches = r[n].matches).push.apply(_r$n$matches, _toConsumableArray(e));
                  }));
                }
              }), s;
            }
          }, {
            key: "_searchObjectList",
            value: function _searchObjectList(e) {
              var _this8 = this;
              var t = x(e, this.options),
                _this$_myIndex = this._myIndex,
                i = _this$_myIndex.keys,
                n = _this$_myIndex.records,
                r = [];
              return n.forEach(function (_ref19) {
                var e = _ref19.$,
                  n = _ref19.i;
                if (!a(e)) return;
                var s = [];
                i.forEach(function (i, n) {
                  s.push.apply(s, _toConsumableArray(_this8._findMatches({
                    key: i,
                    value: e[n],
                    searcher: t
                  })));
                }), s.length && r.push({
                  idx: n,
                  item: e,
                  matches: s
                });
              }), r;
            }
          }, {
            key: "_findMatches",
            value: function _findMatches(_ref20) {
              var e = _ref20.key,
                t = _ref20.value,
                i = _ref20.searcher;
              if (!a(t)) return [];
              var r = [];
              if (n(t)) t.forEach(function (_ref21) {
                var t = _ref21.v,
                  n = _ref21.i,
                  s = _ref21.n;
                if (!a(t)) return;
                var _i$searchIn = i.searchIn(t),
                  o = _i$searchIn.isMatch,
                  c = _i$searchIn.score,
                  l = _i$searchIn.indices;
                o && r.push({
                  score: c,
                  key: e,
                  value: t,
                  idx: n,
                  norm: s,
                  indices: l
                });
              });else {
                var _n10 = t.v,
                  _s7 = t.n,
                  _i$searchIn2 = i.searchIn(_n10),
                  _o8 = _i$searchIn2.isMatch,
                  _a4 = _i$searchIn2.score,
                  _c2 = _i$searchIn2.indices;
                _o8 && r.push({
                  score: _a4,
                  key: e,
                  value: _n10,
                  norm: _s7,
                  indices: _c2
                });
              }
              return r;
            }
          }]);
          return R;
        }();
        R.version = "6.6.2", R.createIndex = _, R.parseIndex = function (e) {
          var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref22$getFn = _ref22.getFn,
            t = _ref22$getFn === void 0 ? m.getFn : _ref22$getFn,
            _ref22$fieldNormWeigh = _ref22.fieldNormWeight,
            i = _ref22$fieldNormWeigh === void 0 ? m.fieldNormWeight : _ref22$fieldNormWeigh;
          var n = e.keys,
            r = e.records,
            s = new g({
              getFn: t,
              fieldNormWeight: i
            });
          return s.setKeys(n), s.setIndexRecords(r), s;
        }, R.config = m, R.parseQuery = F, function () {
          P.push.apply(P, arguments);
        }( /*#__PURE__*/function () {
          function _class7(e) {
            var _ref23 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref23$isCaseSensitiv = _ref23.isCaseSensitive,
              t = _ref23$isCaseSensitiv === void 0 ? m.isCaseSensitive : _ref23$isCaseSensitiv,
              _ref23$includeMatches = _ref23.includeMatches,
              i = _ref23$includeMatches === void 0 ? m.includeMatches : _ref23$includeMatches,
              _ref23$minMatchCharLe = _ref23.minMatchCharLength,
              n = _ref23$minMatchCharLe === void 0 ? m.minMatchCharLength : _ref23$minMatchCharLe,
              _ref23$ignoreLocation = _ref23.ignoreLocation,
              r = _ref23$ignoreLocation === void 0 ? m.ignoreLocation : _ref23$ignoreLocation,
              _ref23$findAllMatches = _ref23.findAllMatches,
              s = _ref23$findAllMatches === void 0 ? m.findAllMatches : _ref23$findAllMatches,
              _ref23$location = _ref23.location,
              o = _ref23$location === void 0 ? m.location : _ref23$location,
              _ref23$threshold = _ref23.threshold,
              a = _ref23$threshold === void 0 ? m.threshold : _ref23$threshold,
              _ref23$distance = _ref23.distance,
              c = _ref23$distance === void 0 ? m.distance : _ref23$distance;
            _classCallCheck(this, _class7);
            this.query = null, this.options = {
              isCaseSensitive: t,
              includeMatches: i,
              minMatchCharLength: n,
              findAllMatches: s,
              ignoreLocation: r,
              location: o,
              threshold: a,
              distance: c
            }, this.pattern = t ? e : e.toLowerCase(), this.query = function (e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return e.split("|").map(function (e) {
                var i = e.trim().split(A).filter(function (e) {
                    return e && !!e.trim();
                  }),
                  n = [];
                for (var _e9 = 0, _r4 = i.length; _e9 < _r4; _e9 += 1) {
                  var _r5 = i[_e9];
                  var _s8 = !1,
                    _o9 = -1;
                  for (; !_s8 && ++_o9 < w;) {
                    var _e10 = L[_o9];
                    var _i9 = _e10.isMultiMatch(_r5);
                    _i9 && (n.push(new _e10(_i9, t)), _s8 = !0);
                  }
                  if (!_s8) for (_o9 = -1; ++_o9 < w;) {
                    var _e11 = L[_o9];
                    var _i10 = _e11.isSingleMatch(_r5);
                    if (_i10) {
                      n.push(new _e11(_i10, t));
                      break;
                    }
                  }
                }
                return n;
              });
            }(this.pattern, this.options);
          }
          _createClass(_class7, [{
            key: "searchIn",
            value: function searchIn(e) {
              var t = this.query;
              if (!t) return {
                isMatch: !1,
                score: 1
              };
              var _this$options4 = this.options,
                i = _this$options4.includeMatches,
                n = _this$options4.isCaseSensitive;
              e = n ? e : e.toLowerCase();
              var r = 0,
                s = [],
                o = 0;
              for (var _n11 = 0, _a5 = t.length; _n11 < _a5; _n11 += 1) {
                var _a6 = t[_n11];
                s.length = 0, r = 0;
                for (var _t6 = 0, _n12 = _a6.length; _t6 < _n12; _t6 += 1) {
                  var _n13 = _a6[_t6],
                    _n$search = _n13.search(e),
                    _c3 = _n$search.isMatch,
                    _l = _n$search.indices,
                    _h = _n$search.score;
                  if (!_c3) {
                    o = 0, r = 0, s.length = 0;
                    break;
                  }
                  if (r += 1, o += _h, i) {
                    var _e12 = _n13.constructor.type;
                    M.has(_e12) ? s = [].concat(_toConsumableArray(s), _toConsumableArray(_l)) : s.push(_l);
                  }
                }
                if (r) {
                  var _e13 = {
                    isMatch: !0,
                    score: o / r
                  };
                  return i && (_e13.indices = s), _e13;
                }
              }
              return {
                isMatch: !1,
                score: 1
              };
            }
          }], [{
            key: "condition",
            value: function condition(e, t) {
              return t.useExtendedSearch;
            }
          }]);
          return _class7;
        }());
      },
      791: function _(e, t, i) {
        function n(e) {
          return n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
            return _typeof(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
          }, n(e);
        }
        function r(e, t, i) {
          return (t = function (e) {
            var t = function (e, t) {
              if ("object" !== n(e) || null === e) return e;
              var i = e[Symbol.toPrimitive];
              if (void 0 !== i) {
                var r = i.call(e, t);
                if ("object" !== n(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e, "string");
            return "symbol" === n(t) ? t : String(t);
          }(t)) in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i, e;
        }
        function s(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }
          return i;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(i), !0).forEach(function (t) {
              r(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }
          return e;
        }
        function a(e) {
          return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
        }
        i.r(t), i.d(t, {
          __DO_NOT_USE__ActionTypes: function __DO_NOT_USE__ActionTypes() {
            return h;
          },
          applyMiddleware: function applyMiddleware() {
            return _;
          },
          bindActionCreators: function bindActionCreators() {
            return v;
          },
          combineReducers: function combineReducers() {
            return f;
          },
          compose: function compose() {
            return g;
          },
          createStore: function createStore() {
            return d;
          },
          legacy_createStore: function legacy_createStore() {
            return p;
          }
        });
        var c = "function" == typeof Symbol && Symbol.observable || "@@observable",
          l = function l() {
            return Math.random().toString(36).substring(7).split("").join(".");
          },
          h = {
            INIT: "@@redux/INIT" + l(),
            REPLACE: "@@redux/REPLACE" + l(),
            PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
              return "@@redux/PROBE_UNKNOWN_ACTION" + l();
            }
          };
        function u(e) {
          if ("object" != _typeof(e) || null === e) return !1;
          for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        }
        function d(e, t, i) {
          var n;
          if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error(a(0));
          if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
            if ("function" != typeof i) throw new Error(a(1));
            return i(d)(e, t);
          }
          if ("function" != typeof e) throw new Error(a(2));
          var r = e,
            s = t,
            o = [],
            l = o,
            p = !1;
          function f() {
            l === o && (l = o.slice());
          }
          function m() {
            if (p) throw new Error(a(3));
            return s;
          }
          function v(e) {
            if ("function" != typeof e) throw new Error(a(4));
            if (p) throw new Error(a(5));
            var t = !0;
            return f(), l.push(e), function () {
              if (t) {
                if (p) throw new Error(a(6));
                t = !1, f();
                var i = l.indexOf(e);
                l.splice(i, 1), o = null;
              }
            };
          }
          function g(e) {
            if (!u(e)) throw new Error(a(7));
            if (void 0 === e.type) throw new Error(a(8));
            if (p) throw new Error(a(9));
            try {
              p = !0, s = r(s, e);
            } finally {
              p = !1;
            }
            for (var t = o = l, i = 0; i < t.length; i++) (0, t[i])();
            return e;
          }
          function _(e) {
            if ("function" != typeof e) throw new Error(a(10));
            r = e, g({
              type: h.REPLACE
            });
          }
          function y() {
            var e,
              t = v;
            return (e = {
              subscribe: function subscribe(e) {
                if ("object" != _typeof(e) || null === e) throw new Error(a(11));
                function i() {
                  e.next && e.next(m());
                }
                return i(), {
                  unsubscribe: t(i)
                };
              }
            })[c] = function () {
              return this;
            }, e;
          }
          return g({
            type: h.INIT
          }), (n = {
            dispatch: g,
            subscribe: v,
            getState: m,
            replaceReducer: _
          })[c] = y, n;
        }
        var p = d;
        function f(e) {
          for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
            var r = t[n];
            "function" == typeof e[r] && (i[r] = e[r]);
          }
          var s,
            o = Object.keys(i);
          try {
            !function (e) {
              Object.keys(e).forEach(function (t) {
                var i = e[t];
                if (void 0 === i(void 0, {
                  type: h.INIT
                })) throw new Error(a(12));
                if (void 0 === i(void 0, {
                  type: h.PROBE_UNKNOWN_ACTION()
                })) throw new Error(a(13));
              });
            }(i);
          } catch (e) {
            s = e;
          }
          return function (e, t) {
            if (void 0 === e && (e = {}), s) throw s;
            for (var n = !1, r = {}, c = 0; c < o.length; c++) {
              var l = o[c],
                h = i[l],
                u = e[l],
                d = h(u, t);
              if (void 0 === d) throw t && t.type, new Error(a(14));
              r[l] = d, n = n || d !== u;
            }
            return (n = n || o.length !== Object.keys(e).length) ? r : e;
          };
        }
        function m(e, t) {
          return function () {
            return t(e.apply(this, arguments));
          };
        }
        function v(e, t) {
          if ("function" == typeof e) return m(e, t);
          if ("object" != _typeof(e) || null === e) throw new Error(a(16));
          var i = {};
          for (var n in e) {
            var r = e[n];
            "function" == typeof r && (i[n] = m(r, t));
          }
          return i;
        }
        function g() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          return 0 === t.length ? function (e) {
            return e;
          } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
        }
        function _() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          return function (e) {
            return function () {
              var i = e.apply(void 0, arguments),
                n = function n() {
                  throw new Error(a(15));
                },
                r = {
                  getState: i.getState,
                  dispatch: function dispatch() {
                    return n.apply(void 0, arguments);
                  }
                },
                s = t.map(function (e) {
                  return e(r);
                });
              return n = g.apply(void 0, s)(i.dispatch), o(o({}, i), {}, {
                dispatch: n
              });
            };
          };
        }
      }
    },
    t = {};
  function i(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var s = t[n] = {
      exports: {}
    };
    return e[n].call(s.exports, s, s.exports, i), s.exports;
  }
  i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, {
      a: t
    }), t;
  }, i.d = function (e, t) {
    for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var n,
    r,
    s = {};
  n = i(373), r = i.n(n), i(187), i(883), i(789), i(686), s["default"] = r(), window.Choices = s["default"];
}();
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.autocomplete = factory());
})(void 0, function () {
  'use strict';

  /**
   * Copyright (c) 2016 Denys Krasnoshchok
   *
   * Homepage: https://smartscheduling.com/en/documentation/autocomplete
   * Source: https://github.com/kraaden/autocomplete
   *
   * MIT License
   */
  function autocomplete(settings) {
    // just an alias to minimize JS file size
    var doc = document;
    var container = settings.container || doc.createElement('div');
    var preventSubmit = settings.preventSubmit || 0 /* Never */;
    container.id = container.id || 'autocomplete-' + uid();
    var containerStyle = container.style;
    var debounceWaitMs = settings.debounceWaitMs || 0;
    var disableAutoSelect = settings.disableAutoSelect || false;
    var customContainerParent = container.parentElement;
    var items = [];
    var inputValue = '';
    var minLen = 2;
    var showOnFocus = settings.showOnFocus;
    var selected;
    var fetchCounter = 0;
    var debounceTimer;
    var destroyed = false;
    // Fixes #104: autocomplete selection is broken on Firefox for Android
    var suppressAutocomplete = false;
    if (settings.minLength !== undefined) {
      minLen = settings.minLength;
    }
    if (!settings.input) {
      throw new Error('input undefined');
    }
    var input = settings.input;
    container.className = 'autocomplete ' + (settings.className || '');
    container.setAttribute('role', 'listbox');
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-controls', container.id);
    input.setAttribute('aria-owns', container.id);
    input.setAttribute('aria-activedescendant', '');
    input.setAttribute('aria-haspopup', 'listbox');
    // IOS implementation for fixed positioning has many bugs, so we will use absolute positioning
    containerStyle.position = 'absolute';
    /**
     * Generate a very complex textual ID that greatly reduces the chance of a collision with another ID or text.
     */
    function uid() {
      return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
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
        (customContainerParent || doc.body).appendChild(container);
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
      // prevent the update call if there are pending AJAX requests
      fetchCounter++;
      items = [];
      inputValue = '';
      selected = undefined;
      input.setAttribute('aria-activedescendant', '');
      input.setAttribute('aria-expanded', 'false');
      detach();
    }
    /**
     * Update autocomplete position
     */
    function updatePosition() {
      if (!containerDisplayed()) {
        return;
      }
      input.setAttribute('aria-expanded', 'true');
      containerStyle.height = 'auto';
      containerStyle.width = input.offsetWidth + 'px';
      var maxHeight = 0;
      var inputRect;
      function calc() {
        var docEl = doc.documentElement;
        var clientTop = docEl.clientTop || doc.body.clientTop || 0;
        var clientLeft = docEl.clientLeft || doc.body.clientLeft || 0;
        var scrollTop = window.pageYOffset || docEl.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft;
        inputRect = input.getBoundingClientRect();
        var top = inputRect.top + input.offsetHeight + scrollTop - clientTop;
        var left = inputRect.left + scrollLeft - clientLeft;
        containerStyle.top = top + 'px';
        containerStyle.left = left + 'px';
        maxHeight = window.innerHeight - (inputRect.top + input.offsetHeight);
        if (maxHeight < 0) {
          maxHeight = 0;
        }
        containerStyle.top = top + 'px';
        containerStyle.bottom = '';
        containerStyle.left = left + 'px';
        containerStyle.maxHeight = maxHeight + 'px';
      }
      // the calc method must be called twice, otherwise the calculation may be wrong on resize event (chrome browser)
      calc();
      calc();
      if (settings.customize && inputRect) {
        settings.customize(input, inputRect, container, maxHeight);
      }
    }
    /**
     * Redraw the autocomplete div element with suggestions
     */
    function update() {
      container.innerHTML = '';
      input.setAttribute('aria-activedescendant', '');
      // function for rendering autocomplete suggestions
      var render = function render(item, _, __) {
        var itemElement = doc.createElement('div');
        itemElement.textContent = item.label || '';
        return itemElement;
      };
      if (settings.render) {
        render = settings.render;
      }
      // function to render autocomplete groups
      var renderGroup = function renderGroup(groupName, _) {
        var groupDiv = doc.createElement('div');
        groupDiv.textContent = groupName;
        return groupDiv;
      };
      if (settings.renderGroup) {
        renderGroup = settings.renderGroup;
      }
      var fragment = doc.createDocumentFragment();
      var prevGroup = uid();
      items.forEach(function (item, index) {
        if (item.group && item.group !== prevGroup) {
          prevGroup = item.group;
          var groupDiv = renderGroup(item.group, inputValue);
          if (groupDiv) {
            groupDiv.className += ' group';
            fragment.appendChild(groupDiv);
          }
        }
        var div = render(item, inputValue, index);
        if (div) {
          div.id = container.id + "_" + index;
          div.setAttribute('role', 'option');
          div.addEventListener('click', function (ev) {
            suppressAutocomplete = true;
            try {
              settings.onSelect(item, input);
            } finally {
              suppressAutocomplete = false;
            }
            clear();
            ev.preventDefault();
            ev.stopPropagation();
          });
          if (item === selected) {
            div.className += ' selected';
            div.setAttribute('aria-selected', 'true');
            input.setAttribute('aria-activedescendant', div.id);
          }
          fragment.appendChild(div);
        }
      });
      container.appendChild(fragment);
      if (items.length < 1) {
        if (settings.emptyMsg) {
          var empty = doc.createElement('div');
          empty.id = container.id + "_" + uid();
          empty.className = 'empty';
          empty.textContent = settings.emptyMsg;
          container.appendChild(empty);
          input.setAttribute('aria-activedescendant', empty.id);
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
    function inputEventHandler() {
      if (!suppressAutocomplete) {
        _fetch(0 /* Keyboard */);
      }
    }
    /**
     * Automatically move scroll bar if selected item is not visible
     */
    function updateScroll() {
      var elements = container.getElementsByClassName('selected');
      if (elements.length > 0) {
        var element = elements[0];
        // make group visible
        var previous = element.previousElementSibling;
        if (previous && previous.className.indexOf('group') !== -1 && !previous.previousElementSibling) {
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
    function selectPreviousSuggestion() {
      var index = items.indexOf(selected);
      selected = index === -1 ? undefined : items[(index + items.length - 1) % items.length];
      updateSelectedSuggestion(index);
    }
    function selectNextSuggestion() {
      var index = items.indexOf(selected);
      selected = items.length < 1 ? undefined : index === -1 ? items[0] : items[(index + 1) % items.length];
      updateSelectedSuggestion(index);
    }
    function updateSelectedSuggestion(index) {
      if (items.length > 0) {
        unselectSuggestion(index);
        selectSuggestion(items.indexOf(selected));
        updateScroll();
      }
    }
    function selectSuggestion(index) {
      var element = doc.getElementById(container.id + "_" + index);
      if (element) {
        element.classList.add('selected');
        element.setAttribute('aria-selected', 'true');
        input.setAttribute('aria-activedescendant', element.id);
      }
    }
    function unselectSuggestion(index) {
      var element = doc.getElementById(container.id + "_" + index);
      if (element) {
        element.classList.remove('selected');
        element.removeAttribute('aria-selected');
        input.removeAttribute('aria-activedescendant');
      }
    }
    function handleArrowAndEscapeKeys(ev, key) {
      var containerIsDisplayed = containerDisplayed();
      if (key === 'Escape') {
        clear();
      } else {
        if (!containerIsDisplayed || items.length < 1) {
          return;
        }
        key === 'ArrowUp' ? selectPreviousSuggestion() : selectNextSuggestion();
      }
      ev.preventDefault();
      if (containerIsDisplayed) {
        ev.stopPropagation();
      }
    }
    function handleEnterKey(ev) {
      if (selected) {
        if (preventSubmit === 2 /* OnSelect */) {
          ev.preventDefault();
        }
        suppressAutocomplete = true;
        try {
          settings.onSelect(selected, input);
        } finally {
          suppressAutocomplete = false;
        }
        clear();
      }
      if (preventSubmit === 1 /* Always */) {
        ev.preventDefault();
      }
    }
    function keydownEventHandler(ev) {
      var key = ev.key;
      switch (key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'Escape':
          handleArrowAndEscapeKeys(ev, key);
          break;
        case 'Enter':
          handleEnterKey(ev);
          break;
      }
    }
    function focusEventHandler() {
      if (showOnFocus) {
        _fetch(1 /* Focus */);
      }
    }

    function _fetch(trigger) {
      if (input.value.length >= minLen || trigger === 1 /* Focus */) {
        clearDebounceTimer();
        debounceTimer = window.setTimeout(function () {
          return startFetch(input.value, trigger, input.selectionStart || 0);
        }, trigger === 0 /* Keyboard */ || trigger === 2 /* Mouse */ ? debounceWaitMs : 0);
      } else {
        clear();
      }
    }
    function startFetch(inputText, trigger, cursorPos) {
      if (destroyed) return;
      var savedFetchCounter = ++fetchCounter;
      settings.fetch(inputText, function (elements) {
        if (fetchCounter === savedFetchCounter && elements) {
          items = elements;
          inputValue = inputText;
          selected = items.length < 1 || disableAutoSelect ? undefined : items[0];
          update();
        }
      }, trigger, cursorPos);
    }
    function keyupEventHandler(e) {
      if (settings.keyup) {
        settings.keyup({
          event: e,
          fetch: function fetch() {
            return _fetch(0 /* Keyboard */);
          }
        });

        return;
      }
      if (!containerDisplayed() && e.key === 'ArrowDown') {
        _fetch(0 /* Keyboard */);
      }
    }

    function clickEventHandler(e) {
      settings.click && settings.click({
        event: e,
        fetch: function fetch() {
          return _fetch(2 /* Mouse */);
        }
      });
    }

    function blurEventHandler() {
      // when an item is selected by mouse click, the blur event will be initiated before the click event and remove DOM elements,
      // so that the click event will never be triggered. In order to avoid this issue, DOM removal should be delayed.
      setTimeout(function () {
        if (doc.activeElement !== input) {
          clear();
        }
      }, 200);
    }
    function manualFetch() {
      startFetch(input.value, 3 /* Manual */, input.selectionStart || 0);
    }
    /**
     * Fixes #26: on long clicks focus will be lost and onSelect method will not be called
     */
    container.addEventListener('mousedown', function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
    });
    /**
     * Fixes #30: autocomplete closes when scrollbar is clicked in IE
     * See: https://stackoverflow.com/a/9210267/13172349
     */
    container.addEventListener('focus', function () {
      return input.focus();
    });
    // If the custom autocomplete container is already appended to the DOM during widget initialization, detach it.
    detach();
    /**
     * This function will remove DOM elements and clear event handlers
     */
    function destroy() {
      input.removeEventListener('focus', focusEventHandler);
      input.removeEventListener('keyup', keyupEventHandler);
      input.removeEventListener('click', clickEventHandler);
      input.removeEventListener('keydown', keydownEventHandler);
      input.removeEventListener('input', inputEventHandler);
      input.removeEventListener('blur', blurEventHandler);
      window.removeEventListener('resize', resizeEventHandler);
      doc.removeEventListener('scroll', scrollEventHandler, true);
      input.removeAttribute('role');
      input.removeAttribute('aria-expanded');
      input.removeAttribute('aria-autocomplete');
      input.removeAttribute('aria-controls');
      input.removeAttribute('aria-activedescendant');
      input.removeAttribute('aria-owns');
      input.removeAttribute('aria-haspopup');
      clearDebounceTimer();
      clear();
      destroyed = true;
    }
    // setup event handlers
    input.addEventListener('keyup', keyupEventHandler);
    input.addEventListener('click', clickEventHandler);
    input.addEventListener('keydown', keydownEventHandler);
    input.addEventListener('input', inputEventHandler);
    input.addEventListener('blur', blurEventHandler);
    input.addEventListener('focus', focusEventHandler);
    window.addEventListener('resize', resizeEventHandler);
    doc.addEventListener('scroll', scrollEventHandler, true);
    return {
      destroy: destroy,
      fetch: manualFetch
    };
  }
  return autocomplete;
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      for (; b.length;) if (b.pop() + "Transition" in a) return !0;
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
        for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
          b.index = e;
          break;
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
        for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
          d = f[g];
          break;
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
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      for (var a = M.context || this, n = 0, o = h.length; n < o; n++) h[n].apply(a, [e, t, r || X, X]);
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
      for (var r = new FormData(), t = 0; t < e.length; t++) r.append(e[t].name, e[t].value);
      if (M.extraData) {
        var a = function (e) {
          var t,
            r,
            a = q.param(e, M.traditional).split("&"),
            n = a.length,
            o = [];
          for (t = 0; t < n; t++) a[t] = a[t].replace(/\+/g, " "), r = a[t].split("="), o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
          return o;
        }(M.extraData);
        for (t = 0; t < a.length; t++) a[t] && r.append(a[t][0], a[t][1]);
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
    for (var j = 0; j < C.length; j++) C[j] = null;
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
      }, e) for (r = 0; r < C.length; r++) t = q(C[r]), _ ? t.prop("disabled", !1) : t.removeAttr("disabled");
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
          if (l.extraData) for (var n in l.extraData) l.extraData.hasOwnProperty(n) && (q.isPlainObject(l.extraData[n]) && l.extraData[n].hasOwnProperty("name") && l.extraData[n].hasOwnProperty("value") ? a.push(q('<input type="hidden" name="' + l.extraData[n].name + '">', s).val(l.extraData[n].value).appendTo(i)[0]) : a.push(q('<input type="hidden" name="' + n + '">', s).val(l.extraData[n]).appendTo(i)[0]));
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
    for (q.isFunction(r) && (v = q.map(v, r)), o = 0, c = v.length; o < c; o++) if ((m = (u = v[o]).name) && !u.disabled) if (e && p.clk && "image" === u.type) p.clk === u && (a.push({
      name: m,
      value: q(u).val(),
      type: u.type
    }), a.push({
      name: m + ".x",
      value: p.clk_x
    }, {
      name: m + ".y",
      value: p.clk_y
    }));else if ((s = q.fieldValue(u, !0)) && s.constructor === Array) for (t && t.push(u), i = 0, l = s.length; i < l; i++) a.push({
      name: m,
      value: s[i]
    });else if (S.fileapi && "file" === u.type) {
      t && t.push(u);
      var g = u.files;
      if (g.length) for (i = 0; i < g.length; i++) a.push({
        name: m,
        value: g[i],
        type: u.type
      });else a.push({
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
        if (t && t.constructor === Array) for (var r = 0, a = t.length; r < a; r++) o.push({
          name: e,
          value: t[r]
        });else null != t && o.push({
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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
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
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
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
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
          c = 0;
        for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
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
        for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
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
        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
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
        return void 0 === a ? "" : a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
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
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() && 0 === this.pendingRequest ? (a(this.currentForm).trigger("submit"), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
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
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a["date" === b ? "dateISO" : c] = !0);
    },
    attributeRules: function attributeRules(b) {
      var c,
        d,
        e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
        d,
        e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
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
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a);
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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
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

/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function () {
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
    if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
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
      for (var f = !1, g = 0; g < d.length; g += 1) if (b[e] === d[g]) {
        f = !0;
        break;
      }
      f || d.push(b[e]);
    }
    b = [];
    for (e = 0; e < d.length; e += 1) {
      f = !1;
      for (g = 0; g < c.length; g += 1) if (d[e] === c[g]) {
        f = !0;
        break;
      }
      f || b.push(d[e]);
    }
    a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }
  function y(a, b) {
    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return !0;
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
    for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
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
    for (e in b) if (b.hasOwnProperty(e)) {
      var f = a.c[e];
      f && d.push(f(b[e], c));
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
    for (var d in R) if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
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
        for (h = 0; h < l.length; h++) l[h].start();
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
    for (c = d.length; b < c; b++) d[b].load(function (b, d, c) {
      qa(a, f, b, d, c);
    });
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
    for (c = d.length; b < c; b++) z(this.c, d[b], C(g));
    var m = [];
    b = 0;
    for (c = e.length; b < c; b++) if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) m.push(new G(d[0], h[l]));else m.push(new G(d[0]));
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
    for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));
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
      for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]));
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
        for (var e = [], f = 0; f < b.length; f += 2) for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) e.push(new G(g, m[h]));
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
  var showItem = function showItem(target) {
    var $target = $(target);
    var mobilemenu = $target.parents('.mobilemenu').first();
    var overflow = mobilemenu.data('overflow') || 'scroll';
    mobilemenu.isDowndrop ? $target.closest("li").hasClass("expanded") ? $target.closest("li").removeClass("expanded") : $target.closest("li").addClass("expanded") : ($target.closest("li").addClass("expanded"), function () {
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
    }());
  };
  $(".mobilemenu").each(function () {
    var mobilemenu = $(this);

    // дефолтные настройки для скрола
    mobilemenu.find(".wrap").first().data("params", {
      depth: 0,
      scroll: {},
      height: {}
    });

    // дополнительная разметка
    mobilemenu.find(".dropdown").each(function () {
      var $this = $(this);
      var $parent = $this.prev();
      var $grandparent = $this.parent().parent().prev();
      $this.prepend('<li class="menu_title"><a href="' + $parent.attr('href') + '">' + $parent.text() + '</a></li>');
      $this.prepend('<li class="menu_back"><a href="#" rel="nofollow"><i class="uk-icon-angle-left svg"></i> ' + ($grandparent.length ? $grandparent.text() : 'Каталог') + '</a></li>');
    });
    $(".menu a, .social-icons a", mobilemenu).click(function (event) {
      if ($(this).hasClass("parent")) {
        event.preventDefault();
        showItem(this);
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
    // $(this).click();
    showItem(this);
  });
  var offcanvasInitialExecuted = false;
  $('#uk-offcanvas').on('show.uk.offcanvas', function () {
    if (!offcanvasInitialExecuted) {
      $(".parent-active", this).each(function () {
        // $(this).click();
        showItem(this);
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
$('.left-menu .parent').click(function () {
  console.log('scroll top');
  $('html, body').animate({
    scrollTop: 0
  }, 500);
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
});

// смена внешней ссылки при выборе селекта
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
    scrollTop: /*$("#pdopage").offset().top || */0
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

    // if ([1, 3].indexOf(delivery) !== -1) {
    //     $('#field-passport').hide();
    // } else {
    //     $('#field-passport').show();
    // }
    if ([1, 4, 6, 7, 9, 10, 11].indexOf(delivery) !== -1) {
      $('#field-index').hide();
    } else {
      $('#field-index').show();
    }
    if ([1, 4].indexOf(delivery) !== -1) {
      $('#field-region').hide();
    } else {
      $('#field-region').show();
    }
    // if (value == 1) {
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
  cartSwitcher.show(1);
  // var headerHeight = $(window).width() < 960 ? 77 : 133;
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
    label: 'ТК СДЭК по Москве',
    payments: [1, 3]
  }, {
    id: 3,
    label: 'ТК СДЭК по Москве (за МКАД)',
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
    label: 'ТК СДЭК (до пункта выдачи)',
    payments: [1, 3]
  }, {
    id: 7,
    label: 'ТК СДЭК (до двери получателя)',
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
      }
      // способы доставки в соответствии с выбранным городом
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
      });
      // способы оплаты в соответствии с выбранным способом доставки
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
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '350 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '300 руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
              resultPrice.innerHTML = '300 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 300) + ' руб.';
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня';
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
              resultPrice.innerHTML = '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
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
              resultPrice.innerHTML = '1000 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 1000) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '900 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 900) + ' руб.';
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
    }
    // $(paymentSelect).change(calculate)
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
  var perView = Math.ceil(this.offsetWidth / 64);
  var windowPerView = Math.ceil(window.innerWidth / 64);

  // Product Gallery
  var galleryThumbs = new Swiper($thumbs[0], {
    allowTouchMove: false,
    spaceBetween: 4,
    slidesPerView: perView,
    freeMode: true,
    loopedSlides: 6,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true
  });
  var galleryTop = new Swiper($main[0], {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 6,
    //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });
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