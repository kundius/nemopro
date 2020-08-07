"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
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

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
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
  }, k.extend = k.fn.extend = function () {
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
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
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
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
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
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
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
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
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
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
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
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
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
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
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

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
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
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
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
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
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

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
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

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
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
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
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
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
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
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
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
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
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
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
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
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
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
          type: r[0].replace(B, " ")
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
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
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

          return i && (S = h, w = p), c;
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
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
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

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

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
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
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
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
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
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
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
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
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
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
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
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
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
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
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
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
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
      Object.defineProperty(k.Event.prototype, t, {
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
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
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
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
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
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
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
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
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
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
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
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

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
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
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
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
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
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
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
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
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
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
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
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
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
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
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
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
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

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
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
        "*": $t,
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
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
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
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
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

              while (t = Pt.exec(p)) {
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

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
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
        }(v, T, n)), s = function (e, t, n, r) {
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
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
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
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
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
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
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
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
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
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
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
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
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
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return k;
  });
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 6.1.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 31, 2020
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var s in i) {
          Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  function i(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function s(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
      void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
    });
  }

  var a = {
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

  function r() {
    var e = "undefined" != typeof document ? document : {};
    return s(e, a), e;
  }

  var n = {
    document: a,
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

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return s(e, n), e;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function p(e, t, i) {
    return (p = h() ? Reflect.construct : function (e, t, i) {
      var s = [null];
      s.push.apply(s, t);
      var a = new (Function.bind.apply(e, s))();
      return i && d(a, i.prototype), a;
    }).apply(null, arguments);
  }

  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function u(e) {
      if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
      var i;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }

      function s() {
        return p(e, arguments, o(this).constructor);
      }

      return s.prototype = Object.create(e.prototype, {
        constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(s, e);
    })(e);
  }

  var c = function (e) {
    var t, i;

    function s(t) {
      var i, s, a;
      return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
        get: function get() {
          return a;
        },
        set: function set(e) {
          a.__proto__ = e;
        }
      }), i;
    }

    return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
  }(u(Array));

  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }

  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function m(e, t) {
    var i = l(),
        s = r(),
        a = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(a);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = s.createElement(o);
        d.innerHTML = n;

        for (var h = 0; h < d.childNodes.length; h += 1) {
          a.push(d.childNodes[h]);
        }
      } else a = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) {
          i.push(s[a]);
        }

        return i;
      }(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) a.push(e);else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      a = e;
    }

    return new c(function (e) {
      for (var t = [], i = 0; i < e.length; i += 1) {
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      }

      return t;
    }(a));
  }

  m.fn = c.prototype;
  var g,
      w,
      b,
      y = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, s);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, s);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return f(this, function (e) {
        return s.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        s.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var i = 0; i < this.length; i += 1) {
        if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) {
          this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transition = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) {
            m(s[n]).is(a) && r.apply(s[n], i);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
        var u = this[p];
        if (a) for (d = 0; d < h.length; d += 1) {
          var c = h[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
            listener: r,
            proxyListener: l
          }), u.addEventListener(c, l, n);
        } else for (d = 0; d < h.length; d += 1) {
          var v = h[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
            listener: r,
            proxyListener: o
          }), u.addEventListener(v, o, n);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var l = s.split(" "), o = 0; o < l.length; o += 1) {
        for (var d = l[o], h = 0; h < this.length; h += 1) {
          var p = this[h],
              u = void 0;
          if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
            var v = u[c];
            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
        i[s] = arguments[s];
      }

      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
        for (var o = a[n], d = 0; d < this.length; d += 1) {
          var h = this[d];

          if (e.CustomEvent) {
            var p = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            h.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function i(s) {
        s.target === this && (e.call(this, s), t.off("transitionend", i));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = l(),
            t = r(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            n = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
        return {
          top: s.top + d - n,
          left: s.left + h - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var i,
          s = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var a in e) {
              this[i].style[a] = e[a];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, i) {
        e.apply(t, [t, i]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          i,
          s = l(),
          a = r(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = m(e), i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
        }

        return !1;
      }

      if (e === a) return n === a;
      if (e === s) return n === s;

      if (e.nodeType || e instanceof c) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
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
      if (e > t - 1) return m([]);

      if (e < 0) {
        var i = t + e;
        return m(i < 0 ? [] : [this[i]]);
      }

      return m([this[e]]);
    },
    append: function append() {
      for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
        e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

        for (var s = 0; s < this.length; s += 1) {
          if ("string" == typeof e) {
            var a = t.createElement("div");

            for (a.innerHTML = e; a.firstChild;) {
              this[s].appendChild(a.firstChild);
            }
          } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) {
            this[s].appendChild(e[n]);
          } else this[s].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          i,
          s = r();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var a = s.createElement("div");

          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) {
            this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
          }
        } else if (e instanceof c) for (i = 0; i < e.length; i += 1) {
          this[t].insertBefore(e[i], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
      }

      return m([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }

      return m(t);
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].parentNode; s;) {
          e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
        }
      }

      return m(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) {
          t.push(s[a]);
        }
      }

      return m(t);
    },
    children: function children(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].children, a = 0; a < s.length; a += 1) {
          e && !m(s[a]).is(e) || t.push(s[a]);
        }
      }

      return m(t);
    },
    filter: function filter(e) {
      return m(f(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function x() {
    return Date.now();
  }

  function T(e, t) {
    void 0 === t && (t = "x");
    var i,
        s,
        a,
        r = l(),
        n = r.getComputedStyle(e, null);
    return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
  }

  function C(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
  }

  function S() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
        var n = s[a],
            l = Object.getOwnPropertyDescriptor(i, n);
        void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n]);
      }
    }

    return e;
  }

  function M(e, t) {
    Object.keys(t).forEach(function (i) {
      C(t[i]) && Object.keys(t[i]).forEach(function (s) {
        "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
      }), e[i] = t[i];
    });
  }

  function z() {
    return g || (g = function () {
      var e = l(),
          t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var i = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, i);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }

  function P(e) {
    return void 0 === e && (e = {}), w || (w = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          i = z(),
          s = l(),
          a = s.navigator.platform,
          r = t || s.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          o = s.screen.width,
          d = s.screen.height,
          h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          p = r.match(/(iPad).*OS\s([\d_]+)/),
          u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === a,
          f = "MacIntel" === a;
      return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), f = !1), h && !v && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
    }(e)), w;
  }

  function k() {
    return b || (b = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), b;
  }

  Object.keys(y).forEach(function (e) {
    m.fn[e] = y[e];
  });
  var $ = {
    name: "resize",
    create: function create() {
      var e = this;
      S(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = l();
        t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
      },
      destroy: function destroy(e) {
        var t = l();
        t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  },
      L = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var i = l(),
          s = this,
          a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            s.emit("observerUpdate", e[0]);
          };

          i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
        } else s.emit("observerUpdate", e[0]);
      });
      a.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), s.observer.observers.push(a);
    },
    init: function init() {
      if (this.support.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }
        this.observer.attach(this.$el[0], {
          childList: this.params.observeSlideChildren
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      I = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      M(this, {
        observer: t(t({}, L), {}, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function O(e) {
    var t = r(),
        i = l(),
        s = this.touchEventsData,
        a = this.params,
        n = this.touches;

    if (!this.animating || !a.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = m(o.target);
      if (("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === o.type, (s.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!s.isTouchEvent && "button" in o && o.button > 0 || s.isTouched && s.isMoved))) if (a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var h = n.currentX,
            p = n.currentY,
            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

        if (!u || !(h <= c || h >= i.screen.width - c)) {
          if (S(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var v = !0;
            d.is(s.formElements) && (v = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var f = v && this.allowTouchMove && a.touchStartPreventDefault;
            (a.touchStartForcePreventDefault || f) && o.preventDefault();
          }

          this.emit("touchStart", o);
        }
      }
    }
  }

  function A(e) {
    var t = r(),
        i = this.touchEventsData,
        s = this.params,
        a = this.touches,
        n = this.rtlTranslate,
        l = e;

    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === l.type) {
        var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
            d = "touchmove" === l.type ? o.pageX : l.pageX,
            h = "touchmove" === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (S(a, {
          startX: d,
          startY: h,
          currentX: d,
          currentY: h
        }), i.touchStartTime = x()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
          if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          a.currentX = d, a.currentY = h;
          var p = a.currentX - a.startX,
              u = a.currentY - a.startY;

          if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var c;
            if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
              var v = this.isHorizontal() ? p : u;
              a.diff = v, v *= s.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
              var f = !0,
                  g = s.resistanceRatio;

              if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))), f && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
              }

              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: a[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                time: x()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }

  function D(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid,
        d = e;
    if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var h,
        p = x(),
        u = p - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var c = i.velocities.pop(),
              v = i.velocities.pop(),
              f = c.position - v.position,
              m = c.time - v.time;
          t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var g = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * g,
            b = t.translate + w;
        r && (b = -b);
        var y,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (b < t.maxTranslate()) s.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (b > t.minTranslate()) s.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), y = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var M, z = 0; z < o.length; z += 1) {
            if (o[z] > -b) {
              M = z;
              break;
            }
          }

          b = -(b = Math.abs(o[M] - b) < Math.abs(o[M - 1] - b) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
        }

        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -b : b) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
            g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();

        s.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(y), n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();

      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
      }

      var A = (h - l[$]) / L,
          D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
      }
    }
  }

  function G() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }

  function N(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function B() {
    var e = this.wrapperEl,
        t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }

  var H = !1;

  function X() {}

  var Y = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
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
    watchSlidesVisibility: !1,
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
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
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
  },
      V = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && S(e, s.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
              a = e[i] || {};
          s.on && t.on && Object.keys(s.on).forEach(function (e) {
            t.on(e, s.on[e]);
          }), s.create && s.create.bind(t)(a);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
        }), s;
      },
      once: function once(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
          s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;

          for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
            r[n] = arguments[n];
          }

          t.apply(s, r);
        }

        return a.__emitterProxy = t, s.on(e, a, i);
      },
      onAny: function onAny(e, t) {
        if ("function" != typeof e) return this;
        var i = t ? "unshift" : "push";
        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
      },
      offAny: function offAny(e) {
        if (!this.eventsAnyListeners) return this;
        var t = this.eventsAnyListeners.indexOf(e);
        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
      },
      off: function off(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
          });
        }), i) : i;
      },
      emit: function emit() {
        var e,
            t,
            i,
            s = this;
        if (!s.eventsListeners) return s;

        for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
          r[n] = arguments[n];
        }

        "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
        var l = Array.isArray(e) ? e : e.split(" ");
        return l.forEach(function (e) {
          if (s.eventsListeners && s.eventsListeners[e]) {
            var a = [];
            s.eventsListeners[e].forEach(function (e) {
              a.push(e);
            }), a.forEach(function (e) {
              e.apply(i, t);
            });
          }
        }), s;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            i = this.$el;
        e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            a = this.rtlTranslate,
            r = this.wrongRTL,
            n = this.virtual && t.virtual.enabled,
            o = n ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            h = n ? this.virtual.slides.length : d.length,
            p = [],
            u = [],
            c = [];

        function v(e, i) {
          return !t.cssMode || i !== d.length - 1;
        }

        var f = t.slidesOffsetBefore;
        "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
        var m = t.slidesOffsetAfter;
        "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
        var g = this.snapGrid.length,
            w = this.snapGrid.length,
            b = t.spaceBetween,
            y = -f,
            E = 0,
            x = 0;

        if (void 0 !== s) {
          var T, C;
          "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? d.css({
            marginLeft: "",
            marginTop: ""
          }) : d.css({
            marginRight: "",
            marginBottom: ""
          }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));

          for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
            C = 0;
            var L = d.eq($);

            if (t.slidesPerColumn > 1) {
              var I = void 0,
                  O = void 0,
                  A = void 0;

              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                    G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                    N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z, L.css({
                  "-webkit-box-ordinal-group": I,
                  "-moz-box-ordinal-group": I,
                  "-ms-flex-order": I,
                  "-webkit-order": I,
                  order: I
                });
              } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;

              L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px");
            }

            if ("none" !== L.css("display")) {
              if ("auto" === t.slidesPerView) {
                var B = e.getComputedStyle(L[0], null),
                    H = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);else if (this.isHorizontal()) {
                  var Y = parseFloat(B.getPropertyValue("width") || 0),
                      V = parseFloat(B.getPropertyValue("padding-left") || 0),
                      F = parseFloat(B.getPropertyValue("padding-right") || 0),
                      W = parseFloat(B.getPropertyValue("margin-left") || 0),
                      R = parseFloat(B.getPropertyValue("margin-right") || 0),
                      q = B.getPropertyValue("box-sizing");
                  C = q && "border-box" === q ? Y + W + R : Y + V + F + W + R;
                } else {
                  var j = parseFloat(B.getPropertyValue("height") || 0),
                      _ = parseFloat(B.getPropertyValue("padding-top") || 0),
                      U = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                      K = parseFloat(B.getPropertyValue("margin-top") || 0),
                      Z = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                      J = B.getPropertyValue("box-sizing");

                  C = J && "border-box" === J ? j + K + Z : j + _ + U + K + Z;
                }
                H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C));
              } else C = (s - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");

              d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (y = y + C / 2 + E / 2 + b, 0 === E && 0 !== $ && (y = y - s / 2 - b), 0 === $ && (y = y - s / 2 - b), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), x % t.slidesPerGroup == 0 && p.push(y), u.push(y)) : (t.roundLengths && (y = Math.floor(y)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(y), u.push(y), y = y + C + b), this.virtualSize += C + b, E = C, x += 1;
            }
          }

          if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }), t.setWrapperSize && (this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
            M = [];

            for (var Q = 0; Q < p.length; Q += 1) {
              var ee = p[Q];
              t.roundLengths && (ee = Math.floor(ee)), p[Q] < this.virtualSize + p[0] && M.push(ee);
            }

            p = M;
          }

          if (!t.centeredSlides) {
            M = [];

            for (var te = 0; te < p.length; te += 1) {
              var ie = p[te];
              t.roundLengths && (ie = Math.floor(ie)), p[te] <= this.virtualSize - s && M.push(ie);
            }

            p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
          }

          if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
            marginLeft: b + "px"
          }) : d.filter(v).css({
            marginRight: b + "px"
          }) : d.filter(v).css({
            marginBottom: b + "px"
          })), t.centeredSlides && t.centeredSlidesBounds) {
            var se = 0;
            c.forEach(function (e) {
              se += e + (t.spaceBetween ? t.spaceBetween : 0);
            });
            var ae = (se -= t.spaceBetween) - s;
            p = p.map(function (e) {
              return e < 0 ? -f : e > ae ? ae + m : e;
            });
          }

          if (t.centerInsufficientSlides) {
            var re = 0;

            if (c.forEach(function (e) {
              re += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (re -= t.spaceBetween) < s) {
              var ne = (s - re) / 2;
              p.forEach(function (e, t) {
                p[t] = e - ne;
              }), u.forEach(function (e, t) {
                u[t] = e + ne;
              });
            }
          }

          S(this, {
            slides: d,
            snapGrid: p,
            slidesGrid: u,
            slidesSizesGrid: c
          }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            i = [],
            s = 0;
        if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
          if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var a = this.activeIndex + t;
            if (a > this.slides.length) break;
            i.push(this.slides.eq(a)[0]);
          }
        } else i.push(this.slides.eq(this.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var r = i[t].offsetHeight;
            s = r > s ? r : s;
          }
        }

        s && this.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var a = -e;
          s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

          for (var r = 0; r < i.length; r += 1) {
            var n = i[r],
                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
              var o = -(a - n.swiperSlideOffset),
                  d = o + this.slidesSizesGrid[r];
              (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
            }

            n.progress = s ? -l : l;
          }

          this.visibleSlides = m(this.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        if (void 0 === e) {
          var t = this.rtlTranslate ? -1 : 1;
          e = this && this.translate && this.translate * t || 0;
        }

        var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            r = this.isBeginning,
            n = this.isEnd,
            l = r,
            o = n;
        0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
          progress: a,
          isBeginning: r,
          isEnd: n
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            r = this.realIndex,
            n = this.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
        var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
        var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            r = this.params,
            n = this.activeIndex,
            l = this.realIndex,
            o = this.snapIndex,
            d = e;

        if (void 0 === d) {
          for (var h = 0; h < s.length; h += 1) {
            void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
          }

          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }

        if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
          var p = Math.min(r.slidesPerGroupSkip, d);
          t = p + Math.floor((d - p) / r.slidesPerGroup);
        }

        if (t >= a.length && (t = a.length - 1), d !== n) {
          var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
          S(this, {
            snapIndex: t,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
        } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this.params,
            i = m(e.target).closest("." + t.slideClass)[0],
            s = !1;
        if (i) for (var a = 0; a < this.slides.length; a += 1) {
          this.slides[a] === i && (s = !0);
        }
        if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
        this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        var r = T(a[0], e);
        return i && (r = -r), r || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            r = this.wrapperEl,
            n = this.progress,
            l = 0,
            o = 0;
        this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
        var d = this.maxTranslate() - this.minTranslate();
        (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, i, s, a) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o,
            d = r.minTranslate(),
            h = r.maxTranslate();

        if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
          var p,
              u = r.isHorizontal();
          if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));else l[u ? "scrollLeft" : "scrollTop"] = -o;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.params,
            a = this.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && this.updateAutoHeight();
          var r = t;

          if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
            if ("reset" === r) return void this.emit("slideResetTransitionStart");
            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.previousIndex,
            a = this.params;

        if (this.animating = !1, !a.cssMode) {
          this.setTransition(0);
          var r = t;

          if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
            if ("reset" === r) return void this.emit("slideResetTransitionEnd");
            this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var a = this,
            r = e;
        r < 0 && (r = 0);
        var n = a.params,
            l = a.snapGrid,
            o = a.slidesGrid,
            d = a.previousIndex,
            h = a.activeIndex,
            p = a.rtlTranslate,
            u = a.wrapperEl;
        if (a.animating && n.preventInteractionOnTransition) return !1;
        var c = Math.min(a.params.slidesPerGroupSkip, r),
            v = c + Math.floor((r - c) / a.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
        var f,
            m = -l[v];
        if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < o.length; g += 1) {
          -Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
        }

        if (a.initialized && r !== h) {
          if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1;
        }

        if (f = r > h ? "next" : r < h ? "prev" : "reset", p && -m === a.translate || !p && m === a.translate) return a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;

        if (n.cssMode) {
          var w,
              b = a.isHorizontal(),
              y = -m;
          if (p && (y = u.scrollWidth - u.offsetWidth - y), 0 === t) u[b ? "scrollLeft" : "scrollTop"] = y;else if (u.scrollTo) u.scrollTo(((w = {})[b ? "left" : "top"] = y, w.behavior = "smooth", w));else u[b ? "scrollLeft" : "scrollTop"] = y;
          return !0;
        }

        return 0 === t ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)) : (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, f));
        }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var a = e;
        return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
      },
      slideNext: function slideNext(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        return this.slideTo(this.activeIndex + r, e, t, i);
      },
      slidePrev: function slidePrev(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.snapGrid,
            n = this.slidesGrid,
            l = this.rtlTranslate;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        function o(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var d,
            h = o(l ? this.translate : -this.translate),
            p = r.map(function (e) {
          return o(e);
        }),
            u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
        return void 0 === u && s.cssMode && r.forEach(function (e) {
          !u && h >= e && (u = e);
        }), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
      },
      slideReset: function slideReset(e, t, i) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function slideToClosest(e, t, i, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
        var a = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, a),
            n = r + Math.floor((a - r) / this.params.slidesPerGroup),
            l = this.rtlTranslate ? this.translate : -this.translate;

        if (l >= this.snapGrid[n]) {
          var o = this.snapGrid[n];
          l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup);
        } else {
          var d = this.snapGrid[n - 1];
          l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
        }

        return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            r = t.clickedIndex;

        if (i.loop) {
          if (t.animating) return;
          e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = r(),
            i = e.params,
            s = e.$wrapperEl;
        s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var a = s.children("." + i.slideClass);

        if (i.loopFillGroupWithBlank) {
          var n = i.slidesPerGroup - a.length % i.slidesPerGroup;

          if (n !== i.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
              s.append(o);
            }

            a = s.children("." + i.slideClass);
          }
        }

        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
        var d = [],
            h = [];
        a.each(function (t, i) {
          var s = m(t);
          i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
        });

        for (var p = 0; p < h.length; p += 1) {
          s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }

        for (var u = d.length - 1; u >= 0; u -= 1) {
          s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        this.emit("beforeLoopFix");
        var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            r = this.allowSlideNext,
            n = this.snapGrid,
            l = this.rtlTranslate;
        this.allowSlidePrev = !0, this.allowSlideNext = !0;
        var o = -n[t] - this.getTranslate();
        if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);else if (t >= i.length - s) {
          e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
        }
        this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this.$wrapperEl,
            i = this.params;
        if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && t.append(e[s]);
        } else t.append(e);
        i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var r = 0; r < e.length; r += 1) {
            e[r] && i.prepend(e[r]);
          }

          a = s + e.length;
        } else i.prepend(e);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var i = this.$wrapperEl,
            s = this.params,
            a = this.activeIndex;
        s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
          for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
            var d = this.slides.eq(o);
            d.remove(), l.unshift(d);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var h = 0; h < t.length; h += 1) {
              t[h] && i.append(t[h]);
            }

            n = a > e ? a + t.length : a;
          } else i.append(t);

          for (var p = 0; p < l.length; p += 1) {
            i.append(l[p]);
          }

          s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var a,
            r = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
          }

          r = Math.max(r, 0);
        } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support;
        this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = N.bind(this);
        var o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
              passive: !1,
              capture: o
            } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
      },
      detachEvents: function detachEvents() {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support,
            o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            a = this.params,
            r = this.$el,
            n = a.breakpoints;

        if (n && (!n || 0 !== Object.keys(n).length)) {
          var l = this.getBreakpoint(n);

          if (l && this.currentBreakpoint !== l) {
            var o = l in n ? n[l] : void 0;
            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = o[e];
              void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var d = o || this.originalParams,
                h = a.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
            h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
            var u = d.direction && d.direction !== a.direction,
                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
            u && t && this.changeDirection(), S(this.params, d), S(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = l, c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = l();

        if (e) {
          var i = !1,
              s = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var i = parseFloat(e.substr(1));
              return {
                value: t.innerHeight * i,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          s.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var a = 0; a < s.length; a += 1) {
            var r = s[a],
                n = r.point;
            r.value <= t.innerWidth && (i = n);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = this.device,
            r = [];
        r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" ")), this.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, i, s, a, r) {
        var n,
            o = l();

        function d() {
          r && r();
        }

        m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      F = {},
      W = function () {
    function t() {
      for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) {
        a[r] = arguments[r];
      }

      1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
      var n = this;
      n.support = z(), n.device = P({
        userAgent: i.userAgent
      }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], Object.keys(V).forEach(function (e) {
        Object.keys(V[e]).forEach(function (i) {
          t.prototype[i] || (t.prototype[i] = V[e][i]);
        });
      }), void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
        var t = n.modules[e];

        if (t.params) {
          var s = Object.keys(t.params)[0],
              a = t.params[s];
          if ("object" != _typeof(a) || null === a) return;
          if (!(s in i) || !("enabled" in a)) return;
          !0 === i[s] && (i[s] = {
            enabled: !0
          }), "object" != _typeof(i[s]) || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
            enabled: !1
          });
        }
      });
      var l = S({}, Y);
      n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(function (e) {
        n.on(e, n.params.on[e]);
      }), n.$ = m;
      var o = m(n.params.el);

      if (e = o[0]) {
        if (o.length > 1) {
          var d = [];
          return o.each(function (e) {
            var s = S({}, i, {
              el: e
            });
            d.push(new t(s));
          }), d;
        }

        var h, p, u;
        return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
          return o.children(e);
        } : h = o.children("." + n.params.wrapperClass), S(n, {
          $el: o,
          el: e,
          $wrapperEl: h,
          wrapperEl: h[0],
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === n.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === n.params.direction;
          },
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
          rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
          wrongRTL: "-webkit-box" === h.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
            start: p[0],
            move: p[1],
            end: p[2],
            cancel: p[3]
          }, n.touchEventsDesktop = {
            start: u[0],
            move: u[1],
            end: u[2]
          }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: x(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n;
      }
    }

    var i,
        s,
        a,
        r = t.prototype;
    return r.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, r.emitSlidesClasses = function () {
      var e = this;
      e.params._emitClasses && e.el && e.slides.each(function (t) {
        var i = t.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass);
        });
        e.emit("_slideClass", t, i.join(" "));
      });
    }, r.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;

      if (e.centeredSlides) {
        for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) {
          t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
        }

        for (var d = a - 1; d >= 0; d -= 1) {
          t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0));
        }
      } else for (var h = a + 1; h < t.length; h += 1) {
        i[h] - i[a] < s && (r += 1);
      }

      return r;
    }, r.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, r.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var i = this.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), this.emit("changeDirection"), t && this.update()), this;
    }, r.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
    }, r.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i,
          s = this,
          a = s.params,
          r = s.$el,
          n = s.$wrapperEl,
          l = s.slides;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
        s.off(e);
      }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
        try {
          i[e] = null;
        } catch (e) {}

        try {
          delete i[e];
        } catch (e) {}
      })), s.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      S(F, e);
    }, t.installModule = function (e) {
      t.prototype.modules || (t.prototype.modules = {});
      var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
      t.prototype.modules[i] = e;
    }, t.use = function (e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return t.installModule(e);
      }), t) : (t.installModule(e), t);
    }, i = t, a = [{
      key: "extendedDefaults",
      get: function get() {
        return F;
      }
    }, {
      key: "defaults",
      get: function get() {
        return Y;
      }
    }], (s = null) && e(i.prototype, s), a && e(i, a), t;
  }();

  W.use([$, I]);
  var R = {
    update: function update(e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          h = d.from,
          p = d.to,
          u = d.slides,
          c = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          w,
          b = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
      var y = Math.max((b || 0) - w, 0),
          E = Math.min((b || 0) + g, u.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function T() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (S(t.virtual, {
        from: y,
        to: E,
        offset: x,
        slidesGrid: t.slidesGrid
      }), h === y && p === E && !e) return t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: y,
        to: E,
        slides: function () {
          for (var e = [], t = y; t <= E; t += 1) {
            e.push(u[t]);
          }

          return e;
        }()
      }), void (t.params.virtual.renderExternalUpdate && T());
      var C = [],
          M = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = h; z <= p; z += 1) {
        (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
      }

      for (var P = 0; P < u.length; P += 1) {
        P >= y && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));
      }

      M.forEach(function (e) {
        t.$wrapperEl.append(v(u[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
    },
    renderSlide: function renderSlide(e, t) {
      var i = this.params.virtual;
      if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
      var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      if ("object" == _typeof(e) && "length" in e) for (var t = 0; t < e.length; t += 1) {
        e[t] && this.virtual.slides.push(e[t]);
      } else this.virtual.slides.push(e);
      this.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this.activeIndex,
          i = t + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var a = 0; a < e.length; a += 1) {
          e[a] && this.virtual.slides.unshift(e[a]);
        }

        i = t + e.length, s = e.length;
      } else this.virtual.slides.unshift(e);

      if (this.params.virtual.cache) {
        var r = this.virtual.cache,
            n = {};
        Object.keys(r).forEach(function (e) {
          var t = r[e],
              i = t.attr("data-swiper-slide-index");
          i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
        }), this.virtual.cache = n;
      }

      this.virtual.update(!0), this.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      if (null != e) {
        var t = this.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
          this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
        } else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        this.virtual.update(!0), this.slideTo(t, 0);
      }
    },
    removeAllSlides: function removeAllSlides() {
      this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
    }
  },
      q = {
    name: "virtual",
    params: {
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
    },
    create: function create() {
      M(this, {
        virtual: t(t({}, R), {}, {
          slides: this.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function setTranslate(e) {
        e.params.virtual.enabled && e.virtual.update();
      }
    }
  },
      j = {
    handle: function handle(e) {
      var t = l(),
          i = r(),
          s = this.rtlTranslate,
          a = e;
      a.originalEvent && (a = a.originalEvent);
      var n = a.keyCode || a.charCode,
          o = this.params.keyboard.pageUpDown,
          d = o && 33 === n,
          h = o && 34 === n,
          p = 37 === n,
          u = 39 === n,
          c = 38 === n,
          v = 40 === n;
      if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && v || h)) return !1;
      if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || v)) {
          var f = !1;
          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
          var m = t.innerWidth,
              g = t.innerHeight,
              w = this.$el.offset();
          s && (w.left -= this.$el[0].scrollLeft);

          for (var b = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], y = 0; y < b.length; y += 1) {
            var E = b[y];
            E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0);
          }

          if (!f) return;
        }

        this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || v) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || v) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n);
      }
    },
    enable: function enable() {
      var e = r();
      this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      var e = r();
      this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      _ = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    },
    create: function create() {
      M(this, {
        keyboard: t({
          enabled: !1
        }, j)
      });
    },
    on: {
      init: function init(e) {
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function destroy(e) {
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var U = {
    lastScrollTime: x(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function event() {
      return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = r(),
            t = "onwheel" in e;

        if (!t) {
          var i = e.createElement("div");
          i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
        }

        return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: s,
        pixelY: a
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var t = e,
          i = this,
          s = i.params.mousewheel;
      i.params.cssMode && t.preventDefault();
      var a = i.$el;
      if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var r = 0,
          n = i.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
      if (s.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          r = -l.pixelX * n;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          r = -l.pixelY;
        }
      } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
      if (0 === r) return !0;

      if (s.invert && (r = -r), i.params.freeMode) {
        var o = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r)
        },
            d = i.mousewheel.lastEventBeforeSnap,
            h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;

        if (!h) {
          i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
          var p = i.getTranslate() + r * s.sensitivity,
              u = i.isBeginning,
              c = i.isEnd;

          if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
            var v = i.mousewheel.recentWheelEvents;
            v.length >= 15 && v.shift();
            var f = v.length ? v[v.length - 1] : void 0,
                g = v[0];
            if (v.push(o), f && (o.delta > f.delta || o.direction !== f.direction)) v.splice(0);else if (v.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
              var w = r > 0 ? .8 : .2;
              i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.mousewheel.timeout = E(function () {
                i.slideToClosest(i.params.speed, !0, void 0, w);
              }, 0);
            }
            i.mousewheel.timeout || (i.mousewheel.timeout = E(function () {
              i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
        }
      } else {
        var b = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r),
          raw: e
        },
            y = i.mousewheel.recentWheelEvents;
        y.length >= 2 && y.shift();
        var T = y.length ? y[y.length - 1] : void 0;
        if (y.push(b), T ? (b.direction !== T.direction || b.delta > T.delta || b.time > T.time + 150) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0;
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    animateSlider: function animateSlider(e) {
      var t = l();
      return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1));
    },
    releaseScroll: function releaseScroll(e) {
      var t = this.params.mousewheel;

      if (e.direction < 0) {
        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
      } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;

      return !1;
    },
    enable: function enable() {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (!this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    }
  },
      K = {
    update: function update() {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function init() {
      var e,
          t,
          i = this.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      Z = {
    update: function update() {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var n,
              l,
              o,
              d = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
            var s = m(e),
                a = s.index();
            a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var h = d.eq(i),
                p = h.index();

            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1) {
                d.eq(v).addClass(t.bulletActiveClass + "-main");
              }

              if (this.params.loop) {
                if (p >= d.length - t.dynamicMainBullets) {
                  for (var f = t.dynamicMainBullets; f >= 0; f -= 1) {
                    d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                  }

                  d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }

          if (t.dynamicBullets) {
            var g = Math.min(d.length, t.dynamicMainBullets + 4),
                w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                b = e ? "right" : "left";
            d.css(this.isHorizontal() ? b : "top", w + "px");
          }
        }

        if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
          var y;
          y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var E = (i + 1) / r,
              x = 1,
              T = 1;
          "horizontal" === y ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function render() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
            e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = m(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = m(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), S(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      J = {
    setTranslate: function setTranslate() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            l = this.params.scrollbar,
            o = s,
            d = (a - s) * i;
        t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
          trackSize: a,
          divider: r,
          moveDivider: n,
          dragSize: s
        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function getPointerPosition(e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          l = i.dragStartPos;
      t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
      this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
      this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E(function () {
        a.css("opacity", 0), a.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    disableDraggable: function disableDraggable() {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    init: function init() {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = m(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
        var a = s.find("." + this.params.scrollbar.dragClass);
        0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
          $el: s,
          el: s[0],
          $dragEl: a,
          dragEl: a[0]
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      Q = {
    setTransform: function setTransform(e, t) {
      var i = this.rtl,
          s = m(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          n = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          o = s.attr("data-swiper-parallax-scale"),
          d = s.attr("data-swiper-parallax-opacity");

      if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
        var h = d - (d - 1) * (1 - Math.abs(t));
        s[0].style.opacity = h;
      }

      if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");else {
        var p = o - (o - 1) * (1 - Math.abs(t));
        s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, s);
      }), i.each(function (t, i) {
        var r = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var i = m(t),
            s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (s = 0), i.transition(s);
      });
    }
  },
      ee = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e);
      }

      a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (!t.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e);
      }

      a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;

      if (!i.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
        a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
      }

      r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
      s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale,
            n = s.height * t.scale;

        if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300,
            r = 300,
            n = s.x * a,
            l = i.currentX + n,
            o = s.y * r,
            d = i.currentY + o;
        0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
        var h = Math.max(a, r);
        i.currentX = l, i.currentY = d;
        var p = i.width * e.scale,
            u = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t["in"](e);
    },
    "in": function _in(e) {
      var t,
          i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          h,
          p,
          u,
          c,
          v,
          f,
          m,
          g = this.zoom,
          w = this.params.zoom,
          b = g.gesture,
          y = g.image;
      (b.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? b.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : b.$slideEl = this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass)), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = b.$slideEl[0].offsetWidth, m = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + f / 2 - t, a = b.$slideEl.offset().top + m / 2 - i, l = b.$imageEl[0].offsetWidth, o = b.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > v && (n = v)) : (r = 0, n = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
    },
    out: function out() {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
      i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    },
    toggleGestures: function toggleGestures(e) {
      var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
      this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
    },
    enableGestures: function enableGestures() {
      this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
    },
    disableGestures: function disableGestures() {
      this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
    },
    enable: function enable() {
      var e = this.support,
          t = this.zoom;

      if (!t.enabled) {
        t.enabled = !0;
        var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !e.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
      }
    },
    disable: function disable() {
      var e = this.zoom;

      if (e.enabled) {
        var t = this.support;
        this.zoom.enabled = !1;
        var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !t.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
      }
    }
  },
      te = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var i = this,
          s = i.params.lazy;

      if (void 0 !== e && 0 !== i.slides.length) {
        var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
        !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
          var r = m(e);
          r.addClass(s.loadingClass);
          var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              h = r.parent("picture");
          i.loadImage(r[0], l || n, o, d, !1, function () {
            if (null != i && i && (!i || i.params) && !i.destroyed) {
              if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                var t = m(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                var e = a.attr("data-swiper-slide-index");

                if (a.hasClass(i.params.slideDuplicateClass)) {
                  var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                  i.lazy.loadInSlide(p.index(), !1);
                } else {
                  var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(u.index(), !1);
                }
              }

              i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
            }
          }), i.emit("lazyImageLoad", a[0], r[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          l = i.slidesPerView;

      function o(e) {
        if (r) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (s[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
        var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
        e.lazy.loadInSlide(i);
      });else if (l > 1) for (var h = a; h < a + l; h += 1) {
        o(h) && e.lazy.loadInSlide(h);
      } else e.lazy.loadInSlide(a);
      if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + l; f < c; f += 1) {
          o(f) && e.lazy.loadInSlide(f);
        }

        for (var g = v; g < a; g += 1) {
          o(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var w = t.children("." + i.slideNextClass);
        w.length > 0 && e.lazy.loadInSlide(d(w));
        var b = t.children("." + i.slidePrevClass);
        b.length > 0 && e.lazy.loadInSlide(d(b));
      }
    }
  },
      ie = {
    LinearSpline: function LinearSpline(e, t) {
      var i,
          s,
          a,
          r,
          n,
          l = function l(e, t) {
        for (s = -1, i = e.length; i - s > 1;) {
          e[a = i + s >> 1] <= t ? s = a : i = a;
        }

        return i;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control,
          n = a.constructor;

      function l(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;
        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof n && l(r[o]);
      } else r instanceof n && t !== r && l(r);
    },
    setTransition: function setTransition(e, t) {
      var i,
          s = this,
          a = s.constructor,
          r = s.controller.control;

      function n(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) {
        r[i] !== t && r[i] instanceof a && n(r[i]);
      } else r instanceof a && t !== r && n(r);
    }
  },
      se = {
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function makeElNotFocusable(e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function onEnterKey(e) {
      var t = this.params.a11y;

      if (13 === e.keyCode) {
        var i = m(e.target);
        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      if (!this.params.loop && this.navigation) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
        var s = m(i);
        e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1));
      });
    },
    init: function init() {
      this.$el.append(this.a11y.liveRegion);
      var e,
          t,
          i = this.params.a11y;
      this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e, t;
      this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }
  },
      ae = {
    init: function init() {
      var e = l();

      if (this.params.history) {
        if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
        var t = this.history;
        t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues(e) {
      var t = l(),
          i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          s = i.length;
      return {
        key: i[s - 2],
        value: i[s - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      var i = l();

      if (this.history.initialized && this.params.history.enabled) {
        var s;
        s = this.params.url ? new URL(this.params.url) : i.location;
        var a = this.slides.eq(t),
            r = ae.slugify(a.attr("data-history"));
        s.pathname.includes(e) || (r = e + "/" + r);
        var n = i.history.state;
        n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
          value: r
        }, null, r) : i.history.pushState({
          value: r
        }, null, r));
      }
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);

        if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();
          this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    }
  },
      re = {
    onHashCange: function onHashCange() {
      var e = r();
      this.emit("hashChange");
      var t = e.location.hash.replace("#", "");

      if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
        if (void 0 === i) return;
        this.slideTo(i);
      }
    },
    setHash: function setHash() {
      var e = l(),
          t = r();
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        t.location.hash = s || "", this.emit("hashSet");
      }
    },
    init: function init() {
      var e = r(),
          t = l();

      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;
        var i = e.location.hash.replace("#", "");
        if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var n = this.slides.eq(s);

          if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();
            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }
        this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      ne = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
      }, i);
    },
    start: function start() {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function stop() {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    },
    onVisibilityChange: function onVisibilityChange() {
      var e = r();
      "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
    },
    onTransitionEnd: function onTransitionEnd(e) {
      this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
    }
  },
      le = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
        this.params.virtualTranslate || (s -= this.translate);
        var a = 0;
        this.isHorizontal() || (a = s, s = 0);
        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: r
        }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;
        i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              s.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      oe = {
    setTranslate: function setTranslate() {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
      d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: a + "px"
      })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));

      for (var c = 0; c < s.length; c += 1) {
        var v = s.eq(c),
            f = c;
        p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var g = 90 * f,
            w = Math.floor(g / 360);
        n && (g = -g, w = Math.floor(-g / 360));
        var b = Math.max(Math.min(v[0].progress, 1), -1),
            y = 0,
            E = 0,
            x = 0;
        f % 4 == 0 ? (y = 4 * -w * l, x = 0) : (f - 1) % 4 == 0 ? (y = 0, x = 4 * -w * l) : (f - 2) % 4 == 0 ? (y = l + 4 * w * l, x = l) : (f - 3) % 4 == 0 && (y = -l, x = 3 * l + 4 * l * w), n && (y = -y), h || (E = y, y = 0);
        var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + y + "px, " + E + "px, " + x + "px)";

        if (b <= 1 && b > -1 && (u = 90 * f + 90 * b, n && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
          var C = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            P = d.shadowScale,
            k = d.shadowScale / z,
            $ = d.shadowOffset;
        e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)");
      }
      var L = o.isSafari || o.isWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      de = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var s = e.eq(i),
            a = s[0].progress;
        this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
        var r = -180 * a,
            n = 0,
            l = -s[0].swiperSlideOffset,
            o = 0;

        if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
          var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
        }

        s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              a.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      he = {
    setTranslate: function setTranslate() {
      for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
        var u = i.eq(h),
            c = s[h],
            v = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
            f = r ? o * v : 0,
            g = r ? 0 : o * v,
            w = -d * Math.abs(v),
            b = a.stretch;
        "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(a.stretch) / 100 * c);
        var y = r ? 0 : b * v,
            E = r ? b * v : 0,
            x = 1 - (1 - a.scale) * Math.abs(v);
        Math.abs(E) < .001 && (E = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(f) < .001 && (f = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
        var T = "translate3d(" + E + "px," + y + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + f + "deg) scale(" + x + ")";

        if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
          var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
              S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      pe = {
    init: function init() {
      var e = this.params.thumbs;
      if (this.thumbs.initialized) return !1;
      this.thumbs.initialized = !0;
      var t = this.constructor;
      return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), S(this.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0;
    },
    onThumbClick: function onThumbClick() {
      var e = this.thumbs.swiper;

      if (e) {
        var t = e.clickedIndex,
            i = e.clickedSlide;

        if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
          var s;

          if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
            var a = this.activeIndex;
            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
          }

          this.slideTo(s);
        }
      }
    },
    update: function update(e) {
      var t = this.thumbs.swiper;

      if (t) {
        var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;

        if (this.realIndex !== t.realIndex || a) {
          var r,
              n,
              l = t.activeIndex;

          if (t.params.loop) {
            t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
            var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
            r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev";
          } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";

          a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
        }

        var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) {
          t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
        } else for (var c = 0; c < h; c += 1) {
          t.slides.eq(this.realIndex + c).addClass(p);
        }
      }
    }
  },
      ue = [q, _, {
    name: "mousewheel",
    params: {
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
    },
    create: function create() {
      M(this, {
        mousewheel: {
          enabled: !1,
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          enable: U.enable,
          disable: U.disable,
          handle: U.handle,
          handleMouseEnter: U.handleMouseEnter,
          handleMouseLeave: U.handleMouseLeave,
          animateSlider: U.animateSlider,
          releaseScroll: U.releaseScroll
        }
      });
    },
    on: {
      init: function init(e) {
        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
      },
      destroy: function destroy(e) {
        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      M(this, {
        navigation: t({}, K)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      click: function click(e, t) {
        var i,
            s = e.navigation,
            a = s.$nextEl,
            r = s.$prevEl;
        !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
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
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      M(this, {
        pagination: t({
          dynamicBulletIndex: 0
        }, Z)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      click: function click(e, t) {
        e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      M(this, {
        scrollbar: t({
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }, J)
      });
    },
    on: {
      init: function init(e) {
        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
      },
      update: function update(e) {
        e.scrollbar.updateSize();
      },
      resize: function resize(e) {
        e.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(e) {
        e.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(e) {
        e.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.scrollbar.setTransition(t);
      },
      destroy: function destroy(e) {
        e.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      M(this, {
        parallax: t({}, Q)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      init: function init(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTranslate: function setTranslate(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.params.parallax.enabled && e.parallax.setTransition(t);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this;
      M(e, {
        zoom: t({
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
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
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        }, ee)
      });
      var i = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return i;
        },
        set: function set(t) {
          if (i !== t) {
            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, s, a);
          }

          i = t;
        }
      });
    },
    on: {
      init: function init(e) {
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function destroy(e) {
        e.zoom.disable();
      },
      touchStart: function touchStart(e, t) {
        e.zoom.enabled && e.zoom.onTouchStart(t);
      },
      touchEnd: function touchEnd(e, t) {
        e.zoom.enabled && e.zoom.onTouchEnd(t);
      },
      doubleTap: function doubleTap(e, t) {
        e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
      },
      transitionEnd: function transitionEnd(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      },
      slideChange: function slideChange(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      M(this, {
        lazy: t({
          initialImageLoaded: !1
        }, te)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function init(e) {
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
      },
      scroll: function scroll(e) {
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      resize: function resize(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      scrollbarDragMove: function scrollbarDragMove(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function transitionStart(e) {
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd(e) {
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      },
      slideChange: function slideChange(e) {
        e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      M(this, {
        controller: t({
          control: this.params.controller.control
        }, ie)
      });
    },
    on: {
      update: function update(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function resize(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function observerUpdate(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function setTranslate(e, t, i) {
        e.controller.control && e.controller.setTranslate(t, i);
      },
      setTransition: function setTransition(e, t, i) {
        e.controller.control && e.controller.setTransition(t, i);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function create() {
      M(this, {
        a11y: t(t({}, se), {}, {
          liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
      },
      toEdge: function toEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(e) {
        e.params.a11y.enabled && e.a11y.updatePagination();
      },
      destroy: function destroy(e) {
        e.params.a11y.enabled && e.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      M(this, {
        history: t({}, ae)
      });
    },
    on: {
      init: function init(e) {
        e.params.history.enabled && e.history.init();
      },
      destroy: function destroy(e) {
        e.params.history.enabled && e.history.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      },
      slideChange: function slideChange(e) {
        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      M(this, {
        hashNavigation: t({
          initialized: !1
        }, re)
      });
    },
    on: {
      init: function init(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function destroy(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      },
      slideChange: function slideChange(e) {
        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function create() {
      M(this, {
        autoplay: t(t({}, ne), {}, {
          running: !1,
          paused: !1
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
      },
      beforeTransitionStart: function beforeTransitionStart(e, t, i) {
        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove(e) {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      touchEnd: function touchEnd(e) {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
      },
      destroy: function destroy(e) {
        e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      M(this, {
        fadeEffect: t({}, le)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "fade" === e.params.effect && e.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      M(this, {
        cubeEffect: t({}, oe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "cube" === e.params.effect && e.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      M(this, {
        flipEffect: t({}, de)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "flip" === e.params.effect && e.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "flip" === e.params.effect && e.flipEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      M(this, {
        coverflowEffect: t({}, he)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate(e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      M(this, {
        thumbs: t({
          swiper: null,
          initialized: !1
        }, pe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        var t = e.params.thumbs;
        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
      },
      slideChange: function slideChange(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      update: function update(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      resize: function resize(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      observerUpdate: function observerUpdate(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      setTransition: function setTransition(e, t) {
        var i = e.thumbs.swiper;
        i && i.setTransition(t);
      },
      beforeDestroy: function beforeDestroy(e) {
        var t = e.thumbs.swiper;
        t && e.thumbs.swiperCreated && t && t.destroy();
      }
    }
  }];
  return W.use(ue), W;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], window, e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window);
}(function (e, t) {
  "use strict";

  function r(r) {
    var n = t.console;
    o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), e.migrateTrace && n.trace && n.trace()));
  }

  function n(e, t, n, a) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function get() {
        return r(a), n;
      },
      set: function set(e) {
        r(a), n = e;
      }
    });
  }

  function a(e, t, n, a) {
    e[t] = function () {
      return r(a), n.apply(this, arguments);
    };
  }

  e.migrateVersion = "3.0.1", function () {
    var r = /^[12]\./;
    t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
  }();
  var o = {};
  e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function () {
    o = {}, e.migrateWarnings.length = 0;
  }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
  var i = e.fn.init,
      s = e.isNumeric,
      u = e.find,
      c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
  e.fn.init = function (e) {
    var t = Array.prototype.slice.call(arguments);
    return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), t[0] = []), i.apply(this, t);
  }, e.fn.init.prototype = e.fn, e.find = function (e) {
    var n = Array.prototype.slice.call(arguments);
    if ("string" == typeof e && c.test(e)) try {
      t.document.querySelector(e);
    } catch (a) {
      e = e.replace(l, function (e, t, r, n) {
        return "[" + t + r + '"' + n + '"]';
      });

      try {
        t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]), n[0] = e;
      } catch (e) {
        r("Attribute selector with '#' was not fixed: " + n[0]);
      }
    }
    return u.apply(this, n);
  };
  var d;

  for (d in u) {
    Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
  }

  e.fn.size = function () {
    return r("jQuery.fn.size() is deprecated and removed; use the .length property"), this.length;
  }, e.parseJSON = function () {
    return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
  }, e.isNumeric = function (t) {
    var n = s(t),
        a = function (t) {
      var r = t && t.toString();
      return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
    }(t);

    return n !== a && r("jQuery.isNumeric() should not be called on constructed objects"), a;
  }, a(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), a(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
  var p = e.ajax;

  e.ajax = function () {
    var e = p.apply(this, arguments);
    return e.promise && (a(e, "success", e.done, "jQXHR.success is deprecated and removed"), a(e, "error", e.fail, "jQXHR.error is deprecated and removed"), a(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e;
  };

  var f = e.fn.removeAttr,
      y = e.fn.toggleClass,
      m = /\S+/g;
  e.fn.removeAttr = function (t) {
    var n = this;
    return e.each(t.match(m), function (t, a) {
      e.expr.match.bool.test(a) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + a), n.prop(a, !1));
    }), f.apply(this, arguments);
  }, e.fn.toggleClass = function (t) {
    return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
      var r = this.getAttribute && this.getAttribute("class") || "";
      r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "");
    }));
  };
  var h = !1;
  e.swap && e.each(["height", "width", "reliableMarginRight"], function (t, r) {
    var n = e.cssHooks[r] && e.cssHooks[r].get;
    n && (e.cssHooks[r].get = function () {
      var e;
      return h = !0, e = n.apply(this, arguments), h = !1, e;
    });
  }), e.swap = function (e, t, n, a) {
    var o,
        i,
        s = {};
    h || r("jQuery.swap() is undocumented and deprecated");

    for (i in t) {
      s[i] = e.style[i], e.style[i] = t[i];
    }

    o = n.apply(e, a || []);

    for (i in t) {
      e.style[i] = s[i];
    }

    return o;
  };
  var g = e.data;

  e.data = function (t, n, a) {
    var o;

    if (n && "object" == _typeof(n) && 2 === arguments.length) {
      o = e.hasData(t) && g.call(this, t);
      var i = {};

      for (var s in n) {
        s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s), o[s] = n[s]) : i[s] = n[s];
      }

      return g.call(this, t, i), n;
    }

    return n && "string" == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r("jQuery.data() always sets/gets camelCased names: " + n), arguments.length > 2 && (o[n] = a), o[n]) : g.apply(this, arguments);
  };

  var v = e.Tween.prototype.run,
      j = function j(e) {
    return e;
  };

  e.Tween.prototype.run = function () {
    e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), e.easing[this.easing] = j), v.apply(this, arguments);
  }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
  var Q = e.fn.load,
      b = e.event.add,
      w = e.event.fix;
  e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), e.event.fix = function (t) {
    var n,
        a = t.type,
        o = this.fixHooks[a],
        i = e.event.props;
    if (i.length) for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length;) {
      e.event.addProp(i.pop());
    }
    if (o && !o._migrated_ && (o._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + a), (i = o.props) && i.length)) for (; i.length;) {
      e.event.addProp(i.pop());
    }
    return n = w.call(this, t), o && o.filter ? o.filter(n, t) : n;
  }, e.event.add = function (e, n) {
    return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"), b.apply(this, arguments);
  }, e.each(["load", "unload", "error"], function (t, n) {
    e.fn[n] = function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
    };
  }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
    e.fn[n] = function (e, t) {
      return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), e(function () {
    e(t.document).triggerHandler("ready");
  }), e.event.special.ready = {
    setup: function setup() {
      this === t.document && r("'ready' event is deprecated");
    }
  }, e.fn.extend({
    bind: function bind(e, t, n) {
      return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, a) {
      return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, a);
    },
    undelegate: function undelegate(e, t, n) {
      return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
    }
  });
  var x = e.fn.offset;

  e.fn.offset = function () {
    var n,
        a = this[0],
        o = {
      top: 0,
      left: 0
    };
    return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), o)) : (r("jQuery.fn.offset() requires a valid DOM element"), o);
  };

  var k = e.param;

  e.param = function (t, n) {
    var a = e.ajaxSettings && e.ajaxSettings.traditional;
    return void 0 === n && a && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), n = a), k.call(this, t, n);
  };

  var A = e.fn.andSelf || e.fn.addBack;

  e.fn.andSelf = function () {
    return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), A.apply(this, arguments);
  };

  var S = e.Deferred,
      q = [["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]];
  return e.Deferred = function (t) {
    var n = S(),
        a = n.promise();
    return n.pipe = a.pipe = function () {
      var t = arguments;
      return r("deferred.pipe() is deprecated"), e.Deferred(function (r) {
        e.each(q, function (o, i) {
          var s = e.isFunction(t[o]) && t[o];
          n[i[1]](function () {
            var t = s && s.apply(this, arguments);
            t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === a ? r.promise() : this, s ? [t] : arguments);
          });
        }), t = null;
      }).promise();
    }, t && t.call(n, n), n;
  }, e.Deferred.exceptionHook = S.exceptionHook, e;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        p = "ontouchstart" in window,
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! choices.js v7.0.0 | (c) 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Choices = t() : e.Choices = t();
}(window, function () {
  return function (e) {
    var t = {};

    function i(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
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
      }), 2 & t && "string" != typeof e) for (var o in e) {
        i.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
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
    }, i.p = "/public/assets/scripts/", i(i.s = 9);
  }([function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.diff = t.cloneObject = t.existsInArray = t.isIE11 = t.fetchFromObject = t.getWindowHeight = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.calcWidthOfInput = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.findAncestorByAttrName = t.wrap = t.isElement = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0;

    var n = function n(e, t) {
      return Math.floor(Math.random() * (t - e) + e);
    };

    t.getRandomNumber = n;

    var o = function o(e) {
      for (var t = "", i = 0; i < e; i++) {
        t += n(0, 36).toString(36);
      }

      return t;
    };

    t.generateChars = o;

    t.generateId = function (e, t) {
      var i = e.id || e.name && "".concat(e.name, "-").concat(o(2)) || o(4);
      return i = i.replace(/(:|\.|\[|\]|,)/g, ""), i = "".concat(t, "-").concat(i);
    };

    var r = function r(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    };

    t.getType = r;

    var s = function s(e, t) {
      return null != t && r(t) === e;
    };

    t.isType = s;

    t.isElement = function (e) {
      return e instanceof Element;
    };

    t.wrap = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.createElement("div");
      return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e);
    };

    t.findAncestorByAttrName = function (e, t) {
      for (var i = e; i;) {
        if (i.hasAttribute(t)) return i;
        i = i.parentElement;
      }

      return null;
    };

    t.getAdjacentEl = function (e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;

      if (e && t) {
        var n = e.parentNode.parentNode,
            o = Array.from(n.querySelectorAll(t)),
            r = o.indexOf(e);
        return o[r + (i > 0 ? 1 : -1)];
      }
    };

    t.isScrolledIntoView = function (e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      if (e) return i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop;
    };

    var a = function a(e) {
      return s("String", e) ? e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : e;
    };

    t.sanitise = a;
    var c,
        l = (c = document.createElement("div"), function (e) {
      var t = e.trim();
      c.innerHTML = t;

      for (var i = c.children[0]; c.firstChild;) {
        c.removeChild(c.firstChild);
      }

      return i;
    });
    t.strToEl = l;

    t.calcWidthOfInput = function (e, t) {
      var i = e.value || e.placeholder,
          n = e.offsetWidth;

      if (i) {
        var o = l("<span>".concat(a(i), "</span>"));

        if (o.style.position = "absolute", o.style.padding = "0", o.style.top = "-9999px", o.style.left = "-9999px", o.style.width = "auto", o.style.whiteSpace = "pre", document.body.contains(e) && window.getComputedStyle) {
          var r = window.getComputedStyle(e);
          r && (o.style.fontSize = r.fontSize, o.style.fontFamily = r.fontFamily, o.style.fontWeight = r.fontWeight, o.style.fontStyle = r.fontStyle, o.style.letterSpacing = r.letterSpacing, o.style.textTransform = r.textTransform, o.style.padding = r.padding);
        }

        document.body.appendChild(o), requestAnimationFrame(function () {
          i && o.offsetWidth !== e.offsetWidth && (n = o.offsetWidth + 4), document.body.removeChild(o), t.call(void 0, "".concat(n, "px"));
        });
      } else t.call(void 0, "".concat(n, "px"));
    };

    t.sortByAlpha = function (e, t) {
      var i = "".concat(e.label || e.value).toLowerCase(),
          n = "".concat(t.label || t.value).toLowerCase();
      return i < n ? -1 : i > n ? 1 : 0;
    };

    t.sortByScore = function (e, t) {
      return e.score - t.score;
    };

    t.dispatchEvent = function (e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          n = new CustomEvent(t, {
        detail: i,
        bubbles: !0,
        cancelable: !0
      });
      return e.dispatchEvent(n);
    };

    t.getWindowHeight = function () {
      var e = document.body,
          t = document.documentElement;
      return Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
    };

    t.fetchFromObject = function e(t, i) {
      var n = i.indexOf(".");
      return n > -1 ? e(t[i.substring(0, n)], i.substr(n + 1)) : t[i];
    };

    t.isIE11 = function () {
      return !(!navigator.userAgent.match(/Trident/) || !navigator.userAgent.match(/rv[ :]11/));
    };

    t.existsInArray = function (e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "value";
      return e.some(function (e) {
        return s("String", t) ? e[i] === t.trim() : e[i] === t;
      });
    };

    t.cloneObject = function (e) {
      return JSON.parse(JSON.stringify(e));
    };

    t.diff = function (e, t) {
      var i = Object.keys(e).sort(),
          n = Object.keys(t).sort();
      return i.filter(function (e) {
        return n.indexOf(e) < 0;
      });
    };
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SCROLLING_SPEED = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
    var n = i(0),
        o = {
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
    };
    t.DEFAULT_CLASSNAMES = o;
    var r = {
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
      sortFn: n.sortByAlpha,
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
      itemComparer: function itemComparer(e, t) {
        return e === t;
      },
      fuseOptions: {
        includeScore: !0
      },
      callbackOnInit: null,
      callbackOnCreateTemplates: null,
      classNames: o
    };
    t.DEFAULT_CONFIG = r;
    t.EVENTS = {
      showDropdown: "showDropdown",
      hideDropdown: "hideDropdown",
      change: "change",
      choice: "choice",
      search: "search",
      addItem: "addItem",
      removeItem: "removeItem",
      highlightItem: "highlightItem",
      highlightChoice: "highlightChoice"
    };
    t.ACTION_TYPES = {
      ADD_CHOICE: "ADD_CHOICE",
      FILTER_CHOICES: "FILTER_CHOICES",
      ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
      CLEAR_CHOICES: "CLEAR_CHOICES",
      ADD_GROUP: "ADD_GROUP",
      ADD_ITEM: "ADD_ITEM",
      REMOVE_ITEM: "REMOVE_ITEM",
      HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
      CLEAR_ALL: "CLEAR_ALL"
    };
    t.KEY_CODES = {
      BACK_KEY: 46,
      DELETE_KEY: 8,
      ENTER_KEY: 13,
      A_KEY: 65,
      ESC_KEY: 27,
      UP_KEY: 38,
      DOWN_KEY: 40,
      PAGE_UP_KEY: 33,
      PAGE_DOWN_KEY: 34
    };
    t.SCROLLING_SPEED = 4;
  }, function (e, t, i) {
    "use strict";

    (function (e, n) {
      var o,
          r = i(7);
      o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
      var s = Object(r.a)(o);
      t.a = s;
    }).call(this, i(3), i(14)(e));
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
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n = i(0);

    function o(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var r = function () {
      function e(t) {
        var i = t.element,
            o = t.classNames;
        if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), Object.assign(this, {
          element: i,
          classNames: o
        }), !(0, n.isElement)(i)) throw new TypeError("Invalid element passed");
        this.isDisabled = !1;
      }

      var t, i, r;
      return t = e, (i = [{
        key: "conceal",
        value: function value() {
          this.element.classList.add(this.classNames.input), this.element.classList.add(this.classNames.hiddenState), this.element.tabIndex = "-1";
          var e = this.element.getAttribute("style");
          e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("aria-hidden", "true"), this.element.setAttribute("data-choice", "active");
        }
      }, {
        key: "reveal",
        value: function value() {
          this.element.classList.remove(this.classNames.input), this.element.classList.remove(this.classNames.hiddenState), this.element.removeAttribute("tabindex");
          var e = this.element.getAttribute("data-choice-orig-style");
          e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("aria-hidden"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
        }
      }, {
        key: "enable",
        value: function value() {
          this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
        }
      }, {
        key: "disable",
        value: function value() {
          this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
        }
      }, {
        key: "triggerEvent",
        value: function value(e, t) {
          (0, n.dispatchEvent)(this.element, e, t);
        }
      }, {
        key: "value",
        get: function get() {
          return this.element.value;
        }
      }]) && o(t.prototype, i), r && o(t, r), e;
    }();

    t["default"] = r;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = t.TEMPLATES = void 0;
    var n,
        o = (n = i(27)) && n.__esModule ? n : {
      "default": n
    },
        r = i(0);

    function s(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var a = {
      containerOuter: function containerOuter(e, t, i, n, o, s) {
        var a = n ? 'tabindex="0"' : "",
            c = i ? 'role="listbox"' : "",
            l = "";
        return i && o && (c = 'role="combobox"', l = 'aria-autocomplete="list"'), (0, r.strToEl)('\n      <div\n        class="'.concat(e.containerOuter, '"\n        data-type="').concat(s, '"\n        ').concat(c, "\n        ").concat(a, "\n        ").concat(l, '\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="').concat(t, '"\n        >\n      </div>\n    '));
      },
      containerInner: function containerInner(e) {
        return (0, r.strToEl)('\n      <div class="'.concat(e.containerInner, '"></div>\n    '));
      },
      itemList: function itemList(e, t) {
        var i,
            n = (0, o["default"])(e.list, (s(i = {}, e.listSingle, t), s(i, e.listItems, !t), i));
        return (0, r.strToEl)('\n      <div class="'.concat(n, '"></div>\n    '));
      },
      placeholder: function placeholder(e, t) {
        return (0, r.strToEl)('\n      <div class="'.concat(e.placeholder, '">\n        ').concat(t, "\n      </div>\n    "));
      },
      item: function item(e, t, i) {
        var n,
            a,
            c = t.active ? 'aria-selected="true"' : "",
            l = t.disabled ? 'aria-disabled="true"' : "",
            u = (0, o["default"])(e.item, (s(n = {}, e.highlightedState, t.highlighted), s(n, e.itemSelectable, !t.highlighted), s(n, e.placeholder, t.placeholder), n));
        return i ? (u = (0, o["default"])(e.item, (s(a = {}, e.highlightedState, t.highlighted), s(a, e.itemSelectable, !t.disabled), s(a, e.placeholder, t.placeholder), a)), (0, r.strToEl)('\n        <div\n          class="'.concat(u, '"\n          data-item\n          data-id="').concat(t.id, '"\n          data-value="').concat(t.value, "\"\n          data-custom-properties='").concat(t.customProperties, "'\n          data-deletable\n          ").concat(c, "\n          ").concat(l, "\n          >\n          ").concat(t.label, '\x3c!--\n       --\x3e<button\n            type="button"\n            class="').concat(e.button, '"\n            data-button\n            aria-label="Remove item: \'').concat(t.value, "'\"\n            >\n            Remove item\n          </button>\n        </div>\n      "))) : (0, r.strToEl)('\n      <div\n        class="'.concat(u, '"\n        data-item\n        data-id="').concat(t.id, '"\n        data-value="').concat(t.value, '"\n        ').concat(c, "\n        ").concat(l, "\n        >\n        ").concat(t.label, "\n      </div>\n    "));
      },
      choiceList: function choiceList(e, t) {
        var i = t ? "" : 'aria-multiselectable="true"';
        return (0, r.strToEl)('\n      <div\n        class="'.concat(e.list, '"\n        dir="ltr"\n        role="listbox"\n        ').concat(i, "\n        >\n      </div>\n    "));
      },
      choiceGroup: function choiceGroup(e, t) {
        var i = t.disabled ? 'aria-disabled="true"' : "",
            n = (0, o["default"])(e.group, s({}, e.itemDisabled, t.disabled));
        return (0, r.strToEl)('\n      <div\n        class="'.concat(n, '"\n        data-group\n        data-id="').concat(t.id, '"\n        data-value="').concat(t.value, '"\n        role="group"\n        ').concat(i, '\n        >\n        <div class="').concat(e.groupHeading, '">').concat(t.value, "</div>\n      </div>\n    "));
      },
      choice: function choice(e, t, i) {
        var n,
            a = t.groupId > 0 ? 'role="treeitem"' : 'role="option"',
            c = (0, o["default"])(e.item, e.itemChoice, (s(n = {}, e.itemDisabled, t.disabled), s(n, e.itemSelectable, !t.disabled), s(n, e.placeholder, t.placeholder), n));
        return (0, r.strToEl)('\n      <div\n        class="'.concat(c, '"\n        data-select-text="').concat(i, '"\n        data-choice\n        data-id="').concat(t.id, '"\n        data-value="').concat(t.value, '"\n        ').concat(t.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable", '\n        id="').concat(t.elementId, '"\n        ').concat(a, "\n        >\n        ").concat(t.label, "\n      </div>\n    "));
      },
      input: function input(e) {
        var t = (0, o["default"])(e.input, e.inputCloned);
        return (0, r.strToEl)('\n      <input\n        type="text"\n        class="'.concat(t, '"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        >\n    '));
      },
      dropdown: function dropdown(e) {
        var t = (0, o["default"])(e.list, e.listDropdown);
        return (0, r.strToEl)('\n      <div\n        class="'.concat(t, '"\n        aria-expanded="false"\n        >\n      </div>\n    '));
      },
      notice: function notice(e, t) {
        var i,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            a = (0, o["default"])(e.item, e.itemChoice, (s(i = {}, e.noResults, "no-results" === n), s(i, e.noChoices, "no-choices" === n), i));
        return (0, r.strToEl)('\n      <div class="'.concat(a, '">\n        ').concat(t, "\n      </div>\n    "));
      },
      option: function option(e) {
        return (0, r.strToEl)('\n      <option value="'.concat(e.value, '" ').concat(e.active ? "selected" : "", " ").concat(e.disabled ? "disabled" : "", " ").concat(e.customProperties ? "data-custom-properties=".concat(e.customProperties) : "", ">").concat(e.label, "</option>\n    "));
      }
    };
    t.TEMPLATES = a;
    var c = a;
    t["default"] = c;
  }, function (e, t, i) {
    "use strict";

    i.r(t);
    var n = i(8),
        o = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        r = (n.a || o || Function("return this")()).Symbol,
        s = Object.prototype,
        a = s.hasOwnProperty,
        c = s.toString,
        l = r ? r.toStringTag : void 0;

    var u = function u(e) {
      var t = a.call(e, l),
          i = e[l];

      try {
        e[l] = void 0;
        var n = !0;
      } catch (e) {}

      var o = c.call(e);
      return n && (t ? e[l] = i : delete e[l]), o;
    },
        h = Object.prototype.toString;

    var d = function d(e) {
      return h.call(e);
    },
        f = "[object Null]",
        p = "[object Undefined]",
        v = r ? r.toStringTag : void 0;

    var m = function m(e) {
      return null == e ? void 0 === e ? p : f : v && v in Object(e) ? u(e) : d(e);
    };

    var g = function (e, t) {
      return function (i) {
        return e(t(i));
      };
    }(Object.getPrototypeOf, Object);

    var _ = function _(e) {
      return null != e && "object" == _typeof(e);
    },
        y = "[object Object]",
        b = Function.prototype,
        E = Object.prototype,
        S = b.toString,
        I = E.hasOwnProperty,
        O = S.call(Object);

    var C = function C(e) {
      if (!_(e) || m(e) != y) return !1;
      var t = g(e);
      if (null === t) return !0;
      var i = I.call(t, "constructor") && t.constructor;
      return "function" == typeof i && i instanceof i && S.call(i) == O;
    },
        T = i(2),
        w = {
      INIT: "@@redux/INIT"
    };

    function k(e, t, i) {
      var n;

      if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
        if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
        return i(k)(e, t);
      }

      if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
      var o = e,
          r = t,
          s = [],
          a = s,
          c = !1;

      function l() {
        a === s && (a = s.slice());
      }

      function u() {
        return r;
      }

      function h(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return l(), a.push(e), function () {
          if (t) {
            t = !1, l();
            var i = a.indexOf(e);
            a.splice(i, 1);
          }
        };
      }

      function d(e) {
        if (!C(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (c) throw new Error("Reducers may not dispatch actions.");

        try {
          c = !0, r = o(r, e);
        } finally {
          c = !1;
        }

        for (var t = s = a, i = 0; i < t.length; i++) {
          (0, t[i])();
        }

        return e;
      }

      return d({
        type: w.INIT
      }), (n = {
        dispatch: d,
        subscribe: h,
        getState: u,
        replaceReducer: function replaceReducer(e) {
          if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
          o = e, d({
            type: w.INIT
          });
        }
      })[T.a] = function () {
        var e,
            t = h;
        return (e = {
          subscribe: function subscribe(e) {
            if ("object" != _typeof(e)) throw new TypeError("Expected the observer to be an object.");

            function i() {
              e.next && e.next(u());
            }

            return i(), {
              unsubscribe: t(i)
            };
          }
        })[T.a] = function () {
          return this;
        }, e;
      }, n;
    }

    function A(e, t) {
      var i = t && t.type;
      return "Given action " + (i && '"' + i.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }

    function L(e) {
      for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        0, "function" == typeof e[o] && (i[o] = e[o]);
      }

      var r = Object.keys(i);
      var s = void 0;

      try {
        !function (e) {
          Object.keys(e).forEach(function (t) {
            var i = e[t];
            if (void 0 === i(void 0, {
              type: w.INIT
            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === i(void 0, {
              type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + w.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
          });
        }(i);
      } catch (e) {
        s = e;
      }

      return function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments[1];
        if (s) throw s;

        for (var n = !1, o = {}, a = 0; a < r.length; a++) {
          var c = r[a],
              l = i[c],
              u = e[c],
              h = l(u, t);

          if (void 0 === h) {
            var d = A(c, t);
            throw new Error(d);
          }

          o[c] = h, n = n || h !== u;
        }

        return n ? o : e;
      };
    }

    function x(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }

    function P(e, t) {
      if ("function" == typeof e) return x(e, t);
      if ("object" != _typeof(e) || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : _typeof(e)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');

      for (var i = Object.keys(e), n = {}, o = 0; o < i.length; o++) {
        var r = i[o],
            s = e[r];
        "function" == typeof s && (n[r] = x(s, t));
      }

      return n;
    }

    function D() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      return 0 === t.length ? function (e) {
        return e;
      } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
        return function () {
          return e(t.apply(void 0, arguments));
        };
      });
    }

    var j = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
      }

      return e;
    };

    function M() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      return function (e) {
        return function (i, n, o) {
          var r,
              s = e(i, n, o),
              a = s.dispatch,
              c = {
            getState: s.getState,
            dispatch: function dispatch(e) {
              return a(e);
            }
          };
          return r = t.map(function (e) {
            return e(c);
          }), a = D.apply(void 0, r)(s.dispatch), j({}, s, {
            dispatch: a
          });
        };
      };
    }

    i.d(t, "createStore", function () {
      return k;
    }), i.d(t, "combineReducers", function () {
      return L;
    }), i.d(t, "bindActionCreators", function () {
      return P;
    }), i.d(t, "applyMiddleware", function () {
      return M;
    }), i.d(t, "compose", function () {
      return D;
    });
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
    "use strict";

    (function (e) {
      var i = "object" == _typeof(e) && e && e.Object === Object && e;
      t.a = i;
    }).call(this, i(3));
  }, function (e, t, i) {
    e.exports = i(10);
  }, function (e, t, i) {
    "use strict";

    var n = v(i(11)),
        o = v(i(12)),
        r = v(i(13)),
        s = i(20),
        a = i(1),
        c = i(5),
        l = i(28),
        u = i(29),
        h = i(30),
        d = i(31),
        f = i(32),
        p = i(0);

    function v(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    function m(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    function g(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var _ = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-choice]",
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

        if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), (0, p.isType)("String", t)) {
          var n = Array.from(document.querySelectorAll(t));
          if (n.length > 1) return this._generateInstances(n, i);
        }

        this.config = o["default"].all([a.DEFAULT_CONFIG, e.userDefaults, i], {
          arrayMerge: function arrayMerge(e, t) {
            return [].concat(t);
          }
        });
        var c = (0, p.diff)(this.config, a.DEFAULT_CONFIG);
        c.length && console.warn("Unknown config option(s) passed", c.join(", ")), ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto");
        var l = (0, p.isType)("String", t) ? document.querySelector(t) : t;
        return l ? (this._isTextElement = "text" === l.type, this._isSelectOneElement = "select-one" === l.type, this._isSelectMultipleElement = "select-multiple" === l.type, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this._isTextElement ? this.passedElement = new s.WrappedInput({
          element: l,
          classNames: this.config.classNames,
          delimiter: this.config.delimiter
        }) : this._isSelectElement && (this.passedElement = new s.WrappedSelect({
          element: l,
          classNames: this.config.classNames
        })), this.passedElement ? (!0 === this.config.shouldSortItems && this._isSelectOneElement && !this.config.silent && console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false."), this.initialised = !1, this._store = new r["default"](this.render), this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, p.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.element.getAttribute("dir") || "ltr", this._idNames = {
          itemChoice: "item-choice"
        }, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), "active" === this.passedElement.element.getAttribute("data-choice") && console.warn("Trying to initialise Choices on element already initialised"), void this.init()) : console.error("Passed element was of an invalid type")) : console.error("Could not find passed element or passed element was of an invalid type");
      }

      var t, i, v;
      return t = e, (i = [{
        key: "init",
        value: function value() {
          if (!this.initialised) {
            this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = (0, p.cloneObject)(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
            var e = this.config.callbackOnInit;
            e && (0, p.isType)("Function", e) && e.call(this);
          }
        }
      }, {
        key: "destroy",
        value: function value() {
          this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this._isSelectElement && (this.passedElement.options = this._presetChoices), this.clearStore(), this.config.templates = null, this.initialised = !1);
        }
      }, {
        key: "enable",
        value: function value() {
          return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
        }
      }, {
        key: "disable",
        value: function value() {
          return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
        }
      }, {
        key: "highlightItem",
        value: function value(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (!e) return this;
          var i = e.id,
              n = e.groupId,
              o = void 0 === n ? -1 : n,
              r = e.value,
              s = void 0 === r ? "" : r,
              c = e.label,
              l = void 0 === c ? "" : c,
              h = o >= 0 ? this._store.getGroupById(o) : null;
          return this._store.dispatch((0, u.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(a.EVENTS.highlightItem, {
            id: i,
            value: s,
            label: l,
            groupValue: h && h.value ? h.value : null
          }), this;
        }
      }, {
        key: "unhighlightItem",
        value: function value(e) {
          if (!e) return this;
          var t = e.id,
              i = e.groupId,
              n = void 0 === i ? -1 : i,
              o = e.value,
              r = void 0 === o ? "" : o,
              s = e.label,
              c = void 0 === s ? "" : s,
              l = n >= 0 ? this._store.getGroupById(n) : null;
          return this._store.dispatch((0, u.highlightItem)(t, !1)), this.passedElement.triggerEvent(a.EVENTS.highlightItem, {
            id: t,
            value: r,
            label: c,
            groupValue: l && l.value ? l.value : null
          }), this;
        }
      }, {
        key: "highlightAll",
        value: function value() {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.highlightItem(t);
          }), this;
        }
      }, {
        key: "unhighlightAll",
        value: function value() {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.unhighlightItem(t);
          }), this;
        }
      }, {
        key: "removeActiveItemsByValue",
        value: function value(e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.value === e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }
      }, {
        key: "removeActiveItems",
        value: function value(e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.id !== e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }
      }, {
        key: "removeHighlightedItems",
        value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this._store.highlightedActiveItems.forEach(function (i) {
            e._removeItem(i), t && e._triggerChange(i.value);
          }), this;
        }
      }, {
        key: "showDropdown",
        value: function value(e) {
          var t = this;
          return this.dropdown.isActive ? this : (requestAnimationFrame(function () {
            t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow()), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(a.EVENTS.showDropdown, {});
          }), this);
        }
      }, {
        key: "hideDropdown",
        value: function value(e) {
          var t = this;
          return this.dropdown.isActive ? (requestAnimationFrame(function () {
            t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(a.EVENTS.hideDropdown, {});
          }), this) : this;
        }
      }, {
        key: "getValue",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = this._store.activeItems.reduce(function (t, i) {
            var n = e ? i.value : i;
            return t.push(n), t;
          }, []);

          return this._isSelectOneElement ? t[0] : t;
        }
      }, {
        key: "setValue",
        value: function value(e) {
          var t = this;
          return this.initialised ? ([].concat(e).forEach(function (e) {
            return t._setChoiceOrItem(e);
          }), this) : this;
        }
      }, {
        key: "setChoiceByValue",
        value: function value(e) {
          var t = this;
          return !this.initialised || this._isTextElement ? this : (((0, p.isType)("Array", e) ? e : [e]).forEach(function (e) {
            return t._findAndSelectChoiceByValue(e);
          }), this);
        }
      }, {
        key: "setChoices",
        value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
              o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!this._isSelectElement || !i) return this;
          o && this.clearChoices(), this.containerOuter.removeLoadingState();
          return this._setLoading(!0), t.forEach(function (t) {
            t.choices ? e._addGroup({
              group: t,
              id: t.id || null,
              valueKey: i,
              labelKey: n
            }) : e._addChoice({
              value: t[i],
              label: t[n],
              isSelected: t.selected,
              isDisabled: t.disabled,
              customProperties: t.customProperties,
              placeholder: t.placeholder
            });
          }), this._setLoading(!1), this;
        }
      }, {
        key: "clearChoices",
        value: function value() {
          this._store.dispatch((0, l.clearChoices)());
        }
      }, {
        key: "clearStore",
        value: function value() {
          return this._store.dispatch((0, d.clearAll)()), this;
        }
      }, {
        key: "clearInput",
        value: function value() {
          var e = !this._isSelectOneElement;
          return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, l.activateChoices)(!0))), this;
        }
      }, {
        key: "ajax",
        value: function value(e) {
          var t = this;
          return this.initialised && this._isSelectElement && e ? (requestAnimationFrame(function () {
            return t._handleLoadingState(!0);
          }), e(this._ajaxCallback()), this) : this;
        }
      }, {
        key: "_render",
        value: function value() {
          if (!this._store.isLoading()) {
            this._currentState = this._store.state;
            var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                t = this._isSelectElement,
                i = this._currentState.items !== this._prevState.items;
            e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
          }
        }
      }, {
        key: "_renderChoices",
        value: function value() {
          var e = this,
              t = this._store,
              i = t.activeGroups,
              n = t.activeChoices,
              o = document.createDocumentFragment();

          if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
            return e.choiceList.scrollToTop();
          }), i.length >= 1 && !this._isSearching) {
            var r = n.filter(function (e) {
              return !0 === e.placeholder && -1 === e.groupId;
            });
            r.length >= 1 && (o = this._createChoicesFragment(r, o)), o = this._createGroupsFragment(i, n, o);
          } else n.length >= 1 && (o = this._createChoicesFragment(n, o));

          if (o.childNodes && o.childNodes.length > 0) {
            var s = this._store.activeItems,
                a = this._canAddItem(s, this.input.value);

            a.response ? (this.choiceList.append(o), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", a.notice));
          } else {
            var c, l;
            this._isSearching ? (l = (0, p.isType)("Function", this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText, c = this._getTemplate("notice", l, "no-results")) : (l = (0, p.isType)("Function", this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText, c = this._getTemplate("notice", l, "no-choices")), this.choiceList.append(c);
          }
        }
      }, {
        key: "_renderItems",
        value: function value() {
          var e = this._store.activeItems || [];
          this.itemList.clear();

          var t = this._createItemsFragment(e);

          t.childNodes && this.itemList.append(t);
        }
      }, {
        key: "_createGroupsFragment",
        value: function value(e, t, i) {
          var n = this,
              o = i || document.createDocumentFragment();
          return this.config.shouldSort && e.sort(this.config.sortFn), e.forEach(function (e) {
            var i = function (e) {
              return t.filter(function (t) {
                return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
              });
            }(e);

            if (i.length >= 1) {
              var r = n._getTemplate("choiceGroup", e);

              o.appendChild(r), n._createChoicesFragment(i, o, !0);
            }
          }), o;
        }
      }, {
        key: "_createChoicesFragment",
        value: function value(e, t) {
          var i = this,
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = t || document.createDocumentFragment(),
              r = this.config,
              s = r.renderSelectedChoices,
              a = r.searchResultLimit,
              c = r.renderChoiceLimit,
              l = this._isSearching ? p.sortByScore : this.config.sortFn,
              u = function u(e) {
            if ("auto" !== s || i._isSelectOneElement || !e.selected) {
              var t = i._getTemplate("choice", e, i.config.itemSelectText);

              o.appendChild(t);
            }
          },
              h = e;

          "auto" !== s || this._isSelectOneElement || (h = e.filter(function (e) {
            return !e.selected;
          }));
          var d = h.reduce(function (e, t) {
            return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
          }, {
            placeholderChoices: [],
            normalChoices: []
          }),
              f = d.placeholderChoices,
              v = d.normalChoices;
          (this.config.shouldSort || this._isSearching) && v.sort(l);
          var m = h.length,
              g = [].concat(f, v);
          this._isSearching ? m = a : c > 0 && !n && (m = c);

          for (var _ = 0; _ < m; _ += 1) {
            g[_] && u(g[_]);
          }

          return o;
        }
      }, {
        key: "_createItemsFragment",
        value: function value(e) {
          var t = this,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = this.config,
              o = n.shouldSortItems,
              r = n.sortFn,
              s = n.removeItemButton,
              a = i || document.createDocumentFragment();
          o && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e : this.passedElement.options = e;
          return e.forEach(function (e) {
            return function (e) {
              var i = t._getTemplate("item", e, s);

              a.appendChild(i);
            }(e);
          }), a;
        }
      }, {
        key: "_triggerChange",
        value: function value(e) {
          null != e && this.passedElement.triggerEvent(a.EVENTS.change, {
            value: e
          });
        }
      }, {
        key: "_selectPlaceholderChoice",
        value: function value() {
          var e = this._store.placeholderChoice;
          e && (this._addItem({
            value: e.value,
            label: e.label,
            choiceId: e.id,
            groupId: e.groupId,
            placeholder: e.placeholder
          }), this._triggerChange(e.value));
        }
      }, {
        key: "_handleButtonAction",
        value: function value(e, t) {
          if (e && t && this.config.removeItems && this.config.removeItemButton) {
            var i = t.parentNode.getAttribute("data-id"),
                n = e.find(function (e) {
              return e.id === parseInt(i, 10);
            });
            this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._selectPlaceholderChoice();
          }
        }
      }, {
        key: "_handleItemAction",
        value: function value(e, t) {
          var i = this,
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

          if (e && t && this.config.removeItems && !this._isSelectOneElement) {
            var o = t.getAttribute("data-id");
            e.forEach(function (e) {
              e.id !== parseInt(o, 10) || e.highlighted ? !n && e.highlighted && i.unhighlightItem(e) : i.highlightItem(e);
            }), this.input.focus();
          }
        }
      }, {
        key: "_handleChoiceAction",
        value: function value(e, t) {
          if (e && t) {
            var i = t.getAttribute("data-id"),
                n = this._store.getChoiceById(i),
                o = e[0] && e[0].keyCode ? e[0].keyCode : null,
                r = this.dropdown.isActive;

            if (n.keyCode = o, this.passedElement.triggerEvent(a.EVENTS.choice, {
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
        }
      }, {
        key: "_handleBackspace",
        value: function value(e) {
          if (this.config.removeItems && e) {
            var t = e[e.length - 1],
                i = e.some(function (e) {
              return e.highlighted;
            });
            this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
          }
        }
      }, {
        key: "_setLoading",
        value: function value(e) {
          this._store.dispatch((0, f.setIsLoading)(e));
        }
      }, {
        key: "_handleLoadingState",
        value: function value() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
          e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(t)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "");
        }
      }, {
        key: "_handleSearch",
        value: function value(e) {
          if (e && this.input.isFocussed) {
            var t = this._store.choices,
                i = this.config,
                n = i.searchFloor,
                o = i.searchChoices,
                r = t.some(function (e) {
              return !e.active;
            });

            if (e && e.length >= n) {
              var s = o ? this._searchChoices(e) : 0;
              this.passedElement.triggerEvent(a.EVENTS.search, {
                value: e,
                resultCount: s
              });
            } else r && (this._isSearching = !1, this._store.dispatch((0, l.activateChoices)(!0)));
          }
        }
      }, {
        key: "_canAddItem",
        value: function value(e, t) {
          var i = !0,
              n = (0, p.isType)("Function", this.config.addItemText) ? this.config.addItemText(t) : this.config.addItemText;

          if (!this._isSelectOneElement) {
            var o = (0, p.existsInArray)(e, t);
            this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = (0, p.isType)("Function", this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && o && i && (i = !1, n = (0, p.isType)("Function", this.config.uniqueItemText) ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && (0, p.isType)("Function", this.config.addItemFilterFn) && !this.config.addItemFilterFn(t) && (i = !1, n = (0, p.isType)("Function", this.config.customAddItemText) ? this.config.customAddItemText(t) : this.config.customAddItemText);
          }

          return {
            response: i,
            notice: n
          };
        }
      }, {
        key: "_ajaxCallback",
        value: function value() {
          var e = this;
          return function (t, i, n) {
            if (t && i) {
              var o = (0, p.isType)("Object", t) ? [t] : t;
              o && (0, p.isType)("Array", o) && o.length ? (e._handleLoadingState(!1), e._setLoading(!0), o.forEach(function (t) {
                t.choices ? e._addGroup({
                  group: t,
                  id: t.id || null,
                  valueKey: i,
                  labelKey: n
                }) : e._addChoice({
                  value: (0, p.fetchFromObject)(t, i),
                  label: (0, p.fetchFromObject)(t, n),
                  isSelected: t.selected,
                  isDisabled: t.disabled,
                  customProperties: t.customProperties,
                  placeholder: t.placeholder
                });
              }), e._setLoading(!1), e._isSelectOneElement && e._selectPlaceholderChoice()) : e._handleLoadingState(!1);
            }
          };
        }
      }, {
        key: "_searchChoices",
        value: function value(e) {
          var t = (0, p.isType)("String", e) ? e.trim() : e,
              i = (0, p.isType)("String", this._currentValue) ? this._currentValue.trim() : this._currentValue;
          if (t.length < 1 && t === "".concat(i, " ")) return 0;
          var o = this._store.searchableChoices,
              r = t,
              s = [].concat(this.config.searchFields),
              a = Object.assign(this.config.fuseOptions, {
            keys: s
          }),
              c = new n["default"](o, a).search(r);
          return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, l.filterChoices)(c)), c.length;
        }
      }, {
        key: "_addEventListeners",
        value: function value() {
          document.addEventListener("keyup", this._onKeyUp), document.addEventListener("keydown", this._onKeyDown), document.addEventListener("click", this._onClick), document.addEventListener("touchmove", this._onTouchMove), document.addEventListener("touchend", this._onTouchEnd), document.addEventListener("mousedown", this._onMouseDown), document.addEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus), this.containerOuter.element.addEventListener("blur", this._onBlur)), this.input.element.addEventListener("focus", this._onFocus), this.input.element.addEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset), this.input.addEventListeners();
        }
      }, {
        key: "_removeEventListeners",
        value: function value() {
          document.removeEventListener("keyup", this._onKeyUp), document.removeEventListener("keydown", this._onKeyDown), document.removeEventListener("click", this._onClick), document.removeEventListener("touchmove", this._onTouchMove), document.removeEventListener("touchend", this._onTouchEnd), document.removeEventListener("mousedown", this._onMouseDown), document.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
        }
      }, {
        key: "_onKeyDown",
        value: function value(e) {
          var t,
              i = e.target,
              n = e.keyCode,
              o = e.ctrlKey,
              r = e.metaKey;

          if (i === this.input.element || this.containerOuter.element.contains(i)) {
            var s = this._store.activeItems,
                c = this.input.isFocussed,
                l = this.dropdown.isActive,
                u = this.itemList.hasChildren,
                h = String.fromCharCode(n),
                d = a.KEY_CODES.BACK_KEY,
                f = a.KEY_CODES.DELETE_KEY,
                p = a.KEY_CODES.ENTER_KEY,
                v = a.KEY_CODES.A_KEY,
                g = a.KEY_CODES.ESC_KEY,
                _ = a.KEY_CODES.UP_KEY,
                y = a.KEY_CODES.DOWN_KEY,
                b = a.KEY_CODES.PAGE_UP_KEY,
                E = a.KEY_CODES.PAGE_DOWN_KEY,
                S = o || r;
            !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(h) && this.showDropdown();
            var I = (m(t = {}, v, this._onAKey), m(t, p, this._onEnterKey), m(t, g, this._onEscapeKey), m(t, _, this._onDirectionKey), m(t, b, this._onDirectionKey), m(t, y, this._onDirectionKey), m(t, E, this._onDirectionKey), m(t, f, this._onDeleteKey), m(t, d, this._onDeleteKey), t);
            I[n] && I[n]({
              event: e,
              target: i,
              keyCode: n,
              metaKey: r,
              activeItems: s,
              hasFocusedInput: c,
              hasActiveDropdown: l,
              hasItems: u,
              hasCtrlDownKeyPressed: S
            });
          }
        }
      }, {
        key: "_onKeyUp",
        value: function value(e) {
          var t = e.target,
              i = e.keyCode;

          if (t === this.input.element) {
            var n = this.input.value,
                o = this._store.activeItems,
                r = this._canAddItem(o, n),
                s = a.KEY_CODES.BACK_KEY,
                c = a.KEY_CODES.DELETE_KEY;

            if (this._isTextElement) {
              if (r.notice && n) {
                var u = this._getTemplate("notice", r.notice);

                this.dropdown.element.innerHTML = u.outerHTML, this.showDropdown(!0);
              } else this.hideDropdown(!0);
            } else {
              var h = (i === s || i === c) && !t.value,
                  d = !this._isTextElement && this._isSearching,
                  f = this._canSearch && r.response;
              h && d ? (this._isSearching = !1, this._store.dispatch((0, l.activateChoices)(!0))) : f && this._handleSearch(this.input.value);
            }

            this._canSearch = this.config.searchEnabled;
          }
        }
      }, {
        key: "_onAKey",
        value: function value(e) {
          var t = e.hasItems;
          e.hasCtrlDownKeyPressed && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
        }
      }, {
        key: "_onEnterKey",
        value: function value(e) {
          var t = e.event,
              i = e.target,
              n = e.activeItems,
              o = e.hasActiveDropdown,
              r = a.KEY_CODES.ENTER_KEY,
              s = i.hasAttribute("data-button");

          if (this._isTextElement && i.value) {
            var c = this.input.value;
            this._canAddItem(n, c).response && (this.hideDropdown(!0), this._addItem({
              value: c
            }), this._triggerChange(c), this.clearInput());
          }

          if (s && (this._handleButtonAction(n, i), t.preventDefault()), o) {
            var l = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
            l && (n[0] && (n[0].keyCode = r), this._handleChoiceAction(n, l)), t.preventDefault();
          } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault());
        }
      }, {
        key: "_onEscapeKey",
        value: function value(e) {
          e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus());
        }
      }, {
        key: "_onDirectionKey",
        value: function value(e) {
          var t = e.event,
              i = e.hasActiveDropdown,
              n = e.keyCode,
              o = e.metaKey,
              r = a.KEY_CODES.DOWN_KEY,
              s = a.KEY_CODES.PAGE_UP_KEY,
              c = a.KEY_CODES.PAGE_DOWN_KEY;

          if (i || this._isSelectOneElement) {
            this.showDropdown(), this._canSearch = !1;
            var l,
                u = n === r || n === c ? 1 : -1;
            if (o || n === c || n === s) l = u > 0 ? Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")).pop() : this.dropdown.element.querySelector("[data-choice-selectable]");else {
              var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
              l = h ? (0, p.getAdjacentEl)(h, "[data-choice-selectable]", u) : this.dropdown.element.querySelector("[data-choice-selectable]");
            }
            l && ((0, p.isScrolledIntoView)(l, this.choiceList.element, u) || this.choiceList.scrollToChoice(l, u), this._highlightChoice(l)), t.preventDefault();
          }
        }
      }, {
        key: "_onDeleteKey",
        value: function value(e) {
          var t = e.event,
              i = e.target,
              n = e.hasFocusedInput,
              o = e.activeItems;
          !n || i.value || this._isSelectOneElement || (this._handleBackspace(o), t.preventDefault());
        }
      }, {
        key: "_onTouchMove",
        value: function value() {
          this._wasTap && (this._wasTap = !1);
        }
      }, {
        key: "_onTouchEnd",
        value: function value(e) {
          var t = (e || e.touches[0]).target;
          this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation());
          this._wasTap = !0;
        }
      }, {
        key: "_onMouseDown",
        value: function value(e) {
          var t = e.target,
              i = e.shiftKey;

          if (this.choiceList.element.contains(t) && (0, p.isIE11)() && (this._isScrollingOnIe = !0), this.containerOuter.element.contains(t) && t !== this.input.element) {
            var n = this._store.activeItems,
                o = i,
                r = (0, p.findAncestorByAttrName)(t, "data-button"),
                s = (0, p.findAncestorByAttrName)(t, "data-item"),
                a = (0, p.findAncestorByAttrName)(t, "data-choice");
            r ? this._handleButtonAction(n, r) : s ? this._handleItemAction(n, s, o) : a && this._handleChoiceAction(n, a), e.preventDefault();
          }
        }
      }, {
        key: "_onMouseOver",
        value: function value(e) {
          var t = e.target;
          (t === this.dropdown || this.dropdown.element.contains(t)) && t.hasAttribute("data-choice") && this._highlightChoice(t);
        }
      }, {
        key: "_onClick",
        value: function value(e) {
          var t = e.target;
          this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
        }
      }, {
        key: "_onFocus",
        value: function value(e) {
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
        }
      }, {
        key: "_onBlur",
        value: function value(e) {
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
        }
      }, {
        key: "_onFormReset",
        value: function value() {
          this._store.dispatch((0, d.resetTo)(this._initialState));
        }
      }, {
        key: "_highlightChoice",
        value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));

          if (i.length) {
            var n = t;
            Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function (t) {
              t.classList.remove(e.config.classNames.highlightedState), t.setAttribute("aria-selected", "false");
            }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(a.EVENTS.highlightChoice, {
              el: n
            }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
          }
        }
      }, {
        key: "_addItem",
        value: function value(e) {
          var t = e.value,
              i = e.label,
              n = void 0 === i ? null : i,
              o = e.choiceId,
              r = void 0 === o ? -1 : o,
              s = e.groupId,
              c = void 0 === s ? -1 : s,
              l = e.customProperties,
              h = void 0 === l ? null : l,
              d = e.placeholder,
              f = void 0 !== d && d,
              v = e.keyCode,
              m = void 0 === v ? null : v,
              g = (0, p.isType)("String", t) ? t.trim() : t,
              _ = m,
              y = h,
              b = this._store.items,
              E = n || g,
              S = parseInt(r, 10) || -1,
              I = c >= 0 ? this._store.getGroupById(c) : null,
              O = b ? b.length + 1 : 1;
          return this.config.prependValue && (g = this.config.prependValue + g.toString()), this.config.appendValue && (g += this.config.appendValue.toString()), this._store.dispatch((0, u.addItem)({
            value: g,
            label: E,
            id: O,
            choiceId: S,
            groupId: c,
            customProperties: h,
            placeholder: f,
            keyCode: _
          })), this._isSelectOneElement && this.removeActiveItems(O), this.passedElement.triggerEvent(a.EVENTS.addItem, {
            id: O,
            value: g,
            label: E,
            customProperties: y,
            groupValue: I && I.value ? I.value : void 0,
            keyCode: _
          }), this;
        }
      }, {
        key: "_removeItem",
        value: function value(e) {
          if (!e || !(0, p.isType)("Object", e)) return this;
          var t = e.id,
              i = e.value,
              n = e.label,
              o = e.choiceId,
              r = e.groupId,
              s = r >= 0 ? this._store.getGroupById(r) : null;
          return this._store.dispatch((0, u.removeItem)(t, o)), s && s.value ? this.passedElement.triggerEvent(a.EVENTS.removeItem, {
            id: t,
            value: i,
            label: n,
            groupValue: s.value
          }) : this.passedElement.triggerEvent(a.EVENTS.removeItem, {
            id: t,
            value: i,
            label: n
          }), this;
        }
      }, {
        key: "_addChoice",
        value: function value(e) {
          var t = e.value,
              i = e.label,
              n = void 0 === i ? null : i,
              o = e.isSelected,
              r = void 0 !== o && o,
              s = e.isDisabled,
              a = void 0 !== s && s,
              c = e.groupId,
              u = void 0 === c ? -1 : c,
              h = e.customProperties,
              d = void 0 === h ? null : h,
              f = e.placeholder,
              p = void 0 !== f && f,
              v = e.keyCode,
              m = void 0 === v ? null : v;

          if (null != t) {
            var g = this._store.choices,
                _ = n || t,
                y = g ? g.length + 1 : 1,
                b = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);

            this._store.dispatch((0, l.addChoice)({
              value: t,
              label: _,
              id: y,
              groupId: u,
              disabled: a,
              elementId: b,
              customProperties: d,
              placeholder: p,
              keyCode: m
            })), r && this._addItem({
              value: t,
              label: _,
              choiceId: y,
              customProperties: d,
              placeholder: p,
              keyCode: m
            });
          }
        }
      }, {
        key: "_addGroup",
        value: function value(e) {
          var t = this,
              i = e.group,
              n = e.id,
              o = e.valueKey,
              r = void 0 === o ? "value" : o,
              s = e.labelKey,
              a = void 0 === s ? "label" : s,
              c = (0, p.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
              l = n || Math.floor(new Date().valueOf() * Math.random()),
              u = !!i.disabled && i.disabled;

          if (c) {
            this._store.dispatch((0, h.addGroup)(i.label, l, !0, u));

            c.forEach(function (e) {
              var i = e.disabled || e.parentNode && e.parentNode.disabled;

              t._addChoice({
                value: e[r],
                label: (0, p.isType)("Object", e) ? e[a] : e.innerHTML,
                isSelected: e.selected,
                isDisabled: i,
                groupId: l,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              });
            });
          } else this._store.dispatch((0, h.addGroup)(i.label, i.id, !1, i.disabled));
        }
      }, {
        key: "_getTemplate",
        value: function value(e) {
          var t;
          if (!e) return null;

          for (var i = this.config, n = i.templates, o = i.classNames, r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
            s[a - 1] = arguments[a];
          }

          return (t = n[e]).call.apply(t, [this, o].concat(s));
        }
      }, {
        key: "_createTemplates",
        value: function value() {
          var e = this.config.callbackOnCreateTemplates,
              t = {};
          e && (0, p.isType)("Function", e) && (t = e.call(this, p.strToEl)), this.config.templates = (0, o["default"])(c.TEMPLATES, t);
        }
      }, {
        key: "_createElements",
        value: function value() {
          this.containerOuter = new s.Container({
            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.containerInner = new s.Container({
            element: this._getTemplate("containerInner"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.input = new s.Input({
            element: this._getTemplate("input"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
          }), this.choiceList = new s.List({
            element: this._getTemplate("choiceList", this._isSelectOneElement)
          }), this.itemList = new s.List({
            element: this._getTemplate("itemList", this._isSelectOneElement)
          }), this.dropdown = new s.Dropdown({
            element: this._getTemplate("dropdown"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
          });
        }
      }, {
        key: "_createStructure",
        value: function value() {
          this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth(!0)), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement ? this._addPredefinedChoices() : this._isTextElement && this._addPredefinedItems();
        }
      }, {
        key: "_addPredefinedChoices",
        value: function value() {
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
                o = this.config.sortFn,
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
            }), this.config.shouldSort && r.sort(o);
            var s = r.some(function (e) {
              return e.selected;
            });
            r.forEach(function (t, i) {
              return function (t, i) {
                var n = t.value,
                    o = t.label,
                    r = t.customProperties,
                    a = t.placeholder;
                if (e._isSelectElement) {
                  if (t.choices) e._addGroup({
                    group: t,
                    id: t.id || null
                  });else {
                    var c = e._isSelectOneElement && !s && 0 === i,
                        l = !!c || t.selected,
                        u = !c && t.disabled;

                    e._addChoice({
                      value: n,
                      label: o,
                      isSelected: l,
                      isDisabled: u,
                      customProperties: r,
                      placeholder: a
                    });
                  }
                } else e._addChoice({
                  value: n,
                  label: o,
                  isSelected: t.selected,
                  isDisabled: t.disabled,
                  customProperties: r,
                  placeholder: a
                });
              }(t, i);
            });
          }

          this._setLoading(!1);
        }
      }, {
        key: "_addPredefinedItems",
        value: function value() {
          var e = this;

          this._presetItems.forEach(function (t) {
            return function (t) {
              var i = (0, p.getType)(t);
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
        }
      }, {
        key: "_setChoiceOrItem",
        value: function value(e) {
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
          })[(0, p.getType)(e).toLowerCase()]();
        }
      }, {
        key: "_findAndSelectChoiceByValue",
        value: function value(e) {
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
        }
      }, {
        key: "_generateInstances",
        value: function value(t, i) {
          return t.reduce(function (t, n) {
            return t.push(new e(n, i)), t;
          }, [this]);
        }
      }, {
        key: "_generatePlaceholderValue",
        value: function value() {
          return !this._isSelectOneElement && !!this.config.placeholder && (this.config.placeholderValue || this.passedElement.element.getAttribute("placeholder"));
        }
      }]) && g(t.prototype, i), v && g(t, v), e;
    }();

    _.userDefaults = {}, e.exports = _;
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
          var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
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
          }), 2 & t && "string" != typeof e) for (var o in e) {
            i.d(n, o, function (t) {
              return e[t];
            }.bind(null, o));
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
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], n = -1, o = -1, r = 0, s = e.length; r < s; r += 1) {
              var a = e[r];
              a && -1 === n ? n = r : a || -1 === n || ((o = r - 1) - n + 1 >= t && i.push([n, o]), n = -1);
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

            for (var o = 0; o < i; o += 1) {
              t[e.charAt(o)] |= 1 << i - o - 1;
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
                o = new RegExp(t.replace(i, "\\$&").replace(n, "|")),
                r = e.match(o),
                s = !!r,
                a = [];
            if (s) for (var c = 0, l = r.length; c < l; c += 1) {
              var u = r[c];
              a.push([e.indexOf(u), u.length - 1]);
            }
            return {
              score: s ? .5 : 1,
              isMatch: s,
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
                o = t.currentLocation,
                r = void 0 === o ? 0 : o,
                s = t.expectedLocation,
                a = void 0 === s ? 0 : s,
                c = t.distance,
                l = void 0 === c ? 100 : c,
                u = n / e.length,
                h = Math.abs(a - r);
            return l ? u + h / l : h ? 1 : u;
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
              o = i(
          /*! ./bitap_matched_indices */
          "./src/bitap/bitap_matched_indices.js");

          e.exports = function (e, t, i, r) {
            for (var s = r.location, a = void 0 === s ? 0 : s, c = r.distance, l = void 0 === c ? 100 : c, u = r.threshold, h = void 0 === u ? .6 : u, d = r.findAllMatches, f = void 0 !== d && d, p = r.minMatchCharLength, v = void 0 === p ? 1 : p, m = a, g = e.length, _ = h, y = e.indexOf(t, m), b = t.length, E = [], S = 0; S < g; S += 1) {
              E[S] = 0;
            }

            if (-1 !== y) {
              var I = n(t, {
                errors: 0,
                currentLocation: y,
                expectedLocation: m,
                distance: l
              });

              if (_ = Math.min(I, _), -1 !== (y = e.lastIndexOf(t, m + b))) {
                var O = n(t, {
                  errors: 0,
                  currentLocation: y,
                  expectedLocation: m,
                  distance: l
                });
                _ = Math.min(O, _);
              }
            }

            y = -1;

            for (var C = [], T = 1, w = b + g, k = 1 << b - 1, A = 0; A < b; A += 1) {
              for (var L = 0, x = w; L < x;) {
                n(t, {
                  errors: A,
                  currentLocation: m + x,
                  expectedLocation: m,
                  distance: l
                }) <= _ ? L = x : w = x, x = Math.floor((w - L) / 2 + L);
              }

              w = x;
              var P = Math.max(1, m - x + 1),
                  D = f ? g : Math.min(m + x, g) + b,
                  j = Array(D + 2);
              j[D + 1] = (1 << A) - 1;

              for (var M = D; M >= P; M -= 1) {
                var N = M - 1,
                    F = i[e.charAt(N)];

                if (F && (E[N] = 1), j[M] = (j[M + 1] << 1 | 1) & F, 0 !== A && (j[M] |= (C[M + 1] | C[M]) << 1 | 1 | C[M + 1]), j[M] & k && (T = n(t, {
                  errors: A,
                  currentLocation: N,
                  expectedLocation: m,
                  distance: l
                })) <= _) {
                  if (_ = T, (y = N) <= m) break;
                  P = Math.max(1, 2 * m - y);
                }
              }

              if (n(t, {
                errors: A + 1,
                currentLocation: m,
                expectedLocation: m,
                distance: l
              }) > _) break;
              C = j;
            }

            return {
              isMatch: y >= 0,
              score: 0 === T ? .001 : T,
              matchedIndices: o(E, v)
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

          var o = i(
          /*! ./bitap_regex_search */
          "./src/bitap/bitap_regex_search.js"),
              r = i(
          /*! ./bitap_search */
          "./src/bitap/bitap_search.js"),
              s = i(
          /*! ./bitap_pattern_alphabet */
          "./src/bitap/bitap_pattern_alphabet.js"),
              a = function () {
            function e(t, i) {
              var n = i.location,
                  o = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  c = i.threshold,
                  l = void 0 === c ? .6 : c,
                  u = i.maxPatternLength,
                  h = void 0 === u ? 32 : u,
                  d = i.isCaseSensitive,
                  f = void 0 !== d && d,
                  p = i.tokenSeparator,
                  v = void 0 === p ? / +/g : p,
                  m = i.findAllMatches,
                  g = void 0 !== m && m,
                  _ = i.minMatchCharLength,
                  y = void 0 === _ ? 1 : _;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: o,
                distance: a,
                threshold: l,
                maxPatternLength: h,
                isCaseSensitive: f,
                tokenSeparator: v,
                findAllMatches: g,
                minMatchCharLength: y
              }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= h && (this.patternAlphabet = s(this.pattern));
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
                if (this.pattern.length > i) return o(e, this.pattern, n);
                var s = this.options,
                    a = s.location,
                    c = s.distance,
                    l = s.threshold,
                    u = s.findAllMatches,
                    h = s.minMatchCharLength;
                return r(e, this.pattern, this.patternAlphabet, {
                  location: a,
                  distance: c,
                  threshold: l,
                  findAllMatches: u,
                  minMatchCharLength: h
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
            return function e(t, i, o) {
              if (i) {
                var r = i.indexOf("."),
                    s = i,
                    a = null;
                -1 !== r && (s = i.slice(0, r), a = i.slice(r + 1));
                var c = t[s];
                if (null != c) if (a || "string" != typeof c && "number" != typeof c) {
                  if (n(c)) for (var l = 0, u = c.length; l < u; l += 1) {
                    e(c[l], a, o);
                  } else a && e(c, a, o);
                } else o.push(c.toString());
              } else o.push(t);

              return o;
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

          function o(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }

          var r = i(
          /*! ./bitap */
          "./src/bitap/index.js"),
              s = i(
          /*! ./helpers/deep_value */
          "./src/helpers/deep_value.js"),
              a = i(
          /*! ./helpers/is_array */
          "./src/helpers/is_array.js"),
              c = function () {
            function e(t, i) {
              var n = i.location,
                  o = void 0 === n ? 0 : n,
                  r = i.distance,
                  a = void 0 === r ? 100 : r,
                  c = i.threshold,
                  l = void 0 === c ? .6 : c,
                  u = i.maxPatternLength,
                  h = void 0 === u ? 32 : u,
                  d = i.caseSensitive,
                  f = void 0 !== d && d,
                  p = i.tokenSeparator,
                  v = void 0 === p ? / +/g : p,
                  m = i.findAllMatches,
                  g = void 0 !== m && m,
                  _ = i.minMatchCharLength,
                  y = void 0 === _ ? 1 : _,
                  b = i.id,
                  E = void 0 === b ? null : b,
                  S = i.keys,
                  I = void 0 === S ? [] : S,
                  O = i.shouldSort,
                  C = void 0 === O || O,
                  T = i.getFn,
                  w = void 0 === T ? s : T,
                  k = i.sortFn,
                  A = void 0 === k ? function (e, t) {
                return e.score - t.score;
              } : k,
                  L = i.tokenize,
                  x = void 0 !== L && L,
                  P = i.matchAllTokens,
                  D = void 0 !== P && P,
                  j = i.includeMatches,
                  M = void 0 !== j && j,
                  N = i.includeScore,
                  F = void 0 !== N && N,
                  K = i.verbose,
                  R = void 0 !== K && K;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.options = {
                location: o,
                distance: a,
                threshold: l,
                maxPatternLength: h,
                isCaseSensitive: f,
                tokenSeparator: v,
                findAllMatches: g,
                minMatchCharLength: y,
                id: E,
                keys: I,
                includeMatches: M,
                includeScore: F,
                shouldSort: C,
                getFn: w,
                sortFn: A,
                verbose: R,
                tokenize: x,
                matchAllTokens: D
              }, this.setCollection(t);
            }

            var t, i, c;
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
                    o = i.fullSearcher,
                    r = this._search(n, o),
                    s = r.weights,
                    a = r.results;

                return this._computeScore(s, a), this.options.shouldSort && this._sort(a), t.limit && "number" == typeof t.limit && (a = a.slice(0, t.limit)), this._format(a);
              }
            }, {
              key: "_prepareSearchers",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = [];
                if (this.options.tokenize) for (var i = e.split(this.options.tokenSeparator), n = 0, o = i.length; n < o; n += 1) {
                  t.push(new r(i[n], this.options));
                }
                return {
                  tokenSearchers: t,
                  fullSearcher: new r(e, this.options)
                };
              }
            }, {
              key: "_search",
              value: function value() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = this.list,
                    n = {},
                    o = [];

                if ("string" == typeof i[0]) {
                  for (var r = 0, s = i.length; r < s; r += 1) {
                    this._analyze({
                      key: "",
                      value: i[r],
                      record: r,
                      index: r
                    }, {
                      resultMap: n,
                      results: o,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }

                  return {
                    weights: null,
                    results: o
                  };
                }

                for (var a = {}, c = 0, l = i.length; c < l; c += 1) {
                  for (var u = i[c], h = 0, d = this.options.keys.length; h < d; h += 1) {
                    var f = this.options.keys[h];

                    if ("string" != typeof f) {
                      if (a[f.name] = {
                        weight: 1 - f.weight || 1
                      }, f.weight <= 0 || f.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                      f = f.name;
                    } else a[f] = {
                      weight: 1
                    };

                    this._analyze({
                      key: f,
                      value: this.options.getFn(u, f),
                      record: u,
                      index: c
                    }, {
                      resultMap: n,
                      results: o,
                      tokenSearchers: e,
                      fullSearcher: t
                    });
                  }
                }

                return {
                  weights: a,
                  results: o
                };
              }
            }, {
              key: "_analyze",
              value: function value(e, t) {
                var i = e.key,
                    n = e.arrayIndex,
                    o = void 0 === n ? -1 : n,
                    r = e.value,
                    s = e.record,
                    c = e.index,
                    l = t.tokenSearchers,
                    u = void 0 === l ? [] : l,
                    h = t.fullSearcher,
                    d = void 0 === h ? [] : h,
                    f = t.resultMap,
                    p = void 0 === f ? {} : f,
                    v = t.results,
                    m = void 0 === v ? [] : v;

                if (null != r) {
                  var g = !1,
                      _ = -1,
                      y = 0;

                  if ("string" == typeof r) {
                    this._log("\nKey: ".concat("" === i ? "-" : i));

                    var b = d.search(r);

                    if (this._log('Full text: "'.concat(r, '", score: ').concat(b.score)), this.options.tokenize) {
                      for (var E = r.split(this.options.tokenSeparator), S = [], I = 0; I < u.length; I += 1) {
                        var O = u[I];

                        this._log('\nPattern: "'.concat(O.pattern, '"'));

                        for (var C = !1, T = 0; T < E.length; T += 1) {
                          var w = E[T],
                              k = O.search(w),
                              A = {};
                          k.isMatch ? (A[w] = k.score, g = !0, C = !0, S.push(k.score)) : (A[w] = 1, this.options.matchAllTokens || S.push(1)), this._log('Token: "'.concat(w, '", score: ').concat(A[w]));
                        }

                        C && (y += 1);
                      }

                      _ = S[0];

                      for (var L = S.length, x = 1; x < L; x += 1) {
                        _ += S[x];
                      }

                      _ /= L, this._log("Token score average:", _);
                    }

                    var P = b.score;
                    _ > -1 && (P = (P + _) / 2), this._log("Score average:", P);
                    var D = !this.options.tokenize || !this.options.matchAllTokens || y >= u.length;

                    if (this._log("\nCheck Matches: ".concat(D)), (g || b.isMatch) && D) {
                      var j = p[c];
                      j ? j.output.push({
                        key: i,
                        arrayIndex: o,
                        value: r,
                        score: P,
                        matchedIndices: b.matchedIndices
                      }) : (p[c] = {
                        item: s,
                        output: [{
                          key: i,
                          arrayIndex: o,
                          value: r,
                          score: P,
                          matchedIndices: b.matchedIndices
                        }]
                      }, m.push(p[c]));
                    }
                  } else if (a(r)) for (var M = 0, N = r.length; M < N; M += 1) {
                    this._analyze({
                      key: i,
                      arrayIndex: M,
                      value: r[M],
                      record: s,
                      index: c
                    }, {
                      resultMap: p,
                      results: m,
                      tokenSearchers: u,
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
                  for (var o = t[i].output, r = o.length, s = 1, a = 1, c = 0; c < r; c += 1) {
                    var l = e ? e[o[c].key].weight : 1,
                        u = (1 === l ? o[c].score : o[c].score || .001) * l;
                    1 !== l ? a = Math.min(a, u) : (o[c].nScore = u, s *= u);
                  }

                  t[i].score = 1 === a ? s : a, this._log(t[i]);
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

                var o = [];
                this.options.includeMatches && o.push(function (e, t) {
                  var i = e.output;
                  t.matches = [];

                  for (var n = 0, o = i.length; n < o; n += 1) {
                    var r = i[n];

                    if (0 !== r.matchedIndices.length) {
                      var s = {
                        indices: r.matchedIndices,
                        value: r.value
                      };
                      r.key && (s.key = r.key), r.hasOwnProperty("arrayIndex") && r.arrayIndex > -1 && (s.arrayIndex = r.arrayIndex), t.matches.push(s);
                    }
                  }
                }), this.options.includeScore && o.push(function (e, t) {
                  t.score = e.score;
                });

                for (var r = 0, s = e.length; r < s; r += 1) {
                  var a = e[r];

                  if (this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), o.length) {
                    for (var c = {
                      item: a.item
                    }, l = 0, u = o.length; l < u; l += 1) {
                      o[l](a, c);
                    }

                    t.push(c);
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
            }]) && o(t.prototype, i), c && o(t, c), e;
          }();

          e.exports = c;
        }
      });
    }, e.exports = n();
  }, function (e, t, i) {
    "use strict";

    i.r(t);

    var n = function n(e) {
      return function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && !function (e) {
        var t = Object.prototype.toString.call(e);
        return "[object RegExp]" === t || "[object Date]" === t || function (e) {
          return e.$$typeof === o;
        }(e);
      }(e);
    };

    var o = "function" == typeof Symbol && Symbol["for"] ? Symbol["for"]("react.element") : 60103;

    function r(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
      var i;
    }

    function s(e, t, i) {
      return e.concat(t).map(function (e) {
        return r(e, i);
      });
    }

    function a(e, t, i) {
      (i = i || {}).arrayMerge = i.arrayMerge || s, i.isMergeableObject = i.isMergeableObject || n;
      var o = Array.isArray(t);
      return o === Array.isArray(e) ? o ? i.arrayMerge(e, t, i) : function (e, t, i) {
        var n = {};
        return i.isMergeableObject(e) && Object.keys(e).forEach(function (t) {
          n[t] = r(e[t], i);
        }), Object.keys(t).forEach(function (o) {
          i.isMergeableObject(t[o]) && e[o] ? n[o] = a(e[o], t[o], i) : n[o] = r(t[o], i);
        }), n;
      }(e, t, i) : r(t, i);
    }

    a.all = function (e, t) {
      if (!Array.isArray(e)) throw new Error("first argument should be an array");
      return e.reduce(function (e, i) {
        return a(e, i, t);
      }, {});
    };

    var c = a;
    t["default"] = c;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n,
        o = i(6),
        r = (n = i(15)) && n.__esModule ? n : {
      "default": n
    };

    function s(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var a = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this._store = (0, o.createStore)(r["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
      }

      var t, i, n;
      return t = e, (i = [{
        key: "subscribe",
        value: function value(e) {
          this._store.subscribe(e);
        }
      }, {
        key: "dispatch",
        value: function value(e) {
          this._store.dispatch(e);
        }
      }, {
        key: "isLoading",
        value: function value() {
          return this.state.general.loading;
        }
      }, {
        key: "getChoiceById",
        value: function value(e) {
          return !!e && this.activeChoices.find(function (t) {
            return t.id === parseInt(e, 10);
          });
        }
      }, {
        key: "getGroupById",
        value: function value(e) {
          return this.groups.find(function (t) {
            return t.id === parseInt(e, 10);
          });
        }
      }, {
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
      }]) && s(t.prototype, i), n && s(t, n), e;
    }();

    t["default"] = a;
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

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n = i(6),
        o = l(i(16)),
        r = l(i(17)),
        s = l(i(18)),
        a = l(i(19)),
        c = i(0);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var u = (0, n.combineReducers)({
      items: o["default"],
      groups: r["default"],
      choices: s["default"],
      general: a["default"]
    }),
        h = function h(e, t) {
      var i = e;
      if ("CLEAR_ALL" === t.type) i = void 0;else if ("RESET_TO" === t.type) return (0, c.cloneObject)(t.state);
      return u(i, t);
    };

    t["default"] = h;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case "ADD_ITEM":
          var i = [].concat(e, [{
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
          }]);
          return i.map(function (e) {
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
    }, t.defaultState = void 0;
    var n = [];
    t.defaultState = n;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
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
    }, t.defaultState = void 0;
    var n = [];
    t.defaultState = n;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
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
          return n;

        default:
          return e;
      }
    }, t.defaultState = void 0;
    var n = [];
    t.defaultState = n;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = t.defaultState = void 0;
    var n = {
      loading: !1
    };
    t.defaultState = n;

    var o = function o() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case "SET_IS_LOADING":
          return {
            loading: t.isLoading
          };

        default:
          return e;
      }
    };

    t["default"] = o;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "Dropdown", {
      enumerable: !0,
      get: function get() {
        return n["default"];
      }
    }), Object.defineProperty(t, "Container", {
      enumerable: !0,
      get: function get() {
        return o["default"];
      }
    }), Object.defineProperty(t, "Input", {
      enumerable: !0,
      get: function get() {
        return r["default"];
      }
    }), Object.defineProperty(t, "List", {
      enumerable: !0,
      get: function get() {
        return s["default"];
      }
    }), Object.defineProperty(t, "WrappedInput", {
      enumerable: !0,
      get: function get() {
        return a["default"];
      }
    }), Object.defineProperty(t, "WrappedSelect", {
      enumerable: !0,
      get: function get() {
        return c["default"];
      }
    });
    var n = l(i(21)),
        o = l(i(22)),
        r = l(i(23)),
        s = l(i(24)),
        a = l(i(25)),
        c = l(i(26));

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
  }, function (e, t, i) {
    "use strict";

    function n(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;

    var o = function () {
      function e(t) {
        var i = t.element,
            n = t.type,
            o = t.classNames;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), Object.assign(this, {
          element: i,
          type: n,
          classNames: o
        }), this.isActive = !1;
      }

      var t, i, o;
      return t = e, (i = [{
        key: "distanceFromTopWindow",
        value: function value() {
          return this.dimensions = this.element.getBoundingClientRect(), this.position = Math.ceil(this.dimensions.top + window.pageYOffset + this.element.offsetHeight), this.position;
        }
      }, {
        key: "getChild",
        value: function value(e) {
          return this.element.querySelector(e);
        }
      }, {
        key: "show",
        value: function value() {
          return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
        }
      }, {
        key: "hide",
        value: function value() {
          return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
        }
      }]) && n(t.prototype, i), o && n(t, o), e;
    }();

    t["default"] = o;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n = i(0);

    function o(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var r = function () {
      function e(t) {
        var i = t.element,
            n = t.type,
            o = t.classNames,
            r = t.position;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), Object.assign(this, {
          element: i,
          classNames: o,
          type: n,
          position: r
        }), this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }

      var t, i, r;
      return t = e, (i = [{
        key: "addEventListeners",
        value: function value() {
          this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
        }
      }, {
        key: "removeEventListeners",
        value: function value() {
          this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
        }
      }, {
        key: "shouldFlip",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, n.getWindowHeight)();
          if (void 0 === e) return !1;
          var i = !1;
          return "auto" === this.position ? i = e >= t : "top" === this.position && (i = !0), i;
        }
      }, {
        key: "setActiveDescendant",
        value: function value(e) {
          this.element.setAttribute("aria-activedescendant", e);
        }
      }, {
        key: "removeActiveDescendant",
        value: function value() {
          this.element.removeAttribute("aria-activedescendant");
        }
      }, {
        key: "open",
        value: function value(e) {
          this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
        }
      }, {
        key: "close",
        value: function value() {
          this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
        }
      }, {
        key: "focus",
        value: function value() {
          this.isFocussed || this.element.focus();
        }
      }, {
        key: "addFocusState",
        value: function value() {
          this.element.classList.add(this.classNames.focusState);
        }
      }, {
        key: "removeFocusState",
        value: function value() {
          this.element.classList.remove(this.classNames.focusState);
        }
      }, {
        key: "enable",
        value: function value() {
          this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), "select-one" === this.type && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
        }
      }, {
        key: "disable",
        value: function value() {
          this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), "select-one" === this.type && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
        }
      }, {
        key: "wrap",
        value: function value(e) {
          (0, n.wrap)(e, this.element);
        }
      }, {
        key: "unwrap",
        value: function value(e) {
          this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element);
        }
      }, {
        key: "addLoadingState",
        value: function value() {
          this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
        }
      }, {
        key: "removeLoadingState",
        value: function value() {
          this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
        }
      }, {
        key: "_onFocus",
        value: function value() {
          this.isFocussed = !0;
        }
      }, {
        key: "_onBlur",
        value: function value() {
          this.isFocussed = !1;
        }
      }]) && o(t.prototype, i), r && o(t, r), e;
    }();

    t["default"] = r;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n = i(0);

    function o(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var r = function () {
      function e(t) {
        var i = t.element,
            n = t.type,
            o = t.classNames,
            r = t.placeholderValue;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), Object.assign(this, {
          element: i,
          type: n,
          classNames: o,
          placeholderValue: r
        }), this.element = i, this.classNames = o, this.isFocussed = this.element === document.activeElement, this.isDisabled = !1, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
      }

      var t, i, r;
      return t = e, (i = [{
        key: "addEventListeners",
        value: function value() {
          this.element.addEventListener("input", this._onInput), this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur), this.element.form && this.element.form.addEventListener("reset", this._onFormReset);
        }
      }, {
        key: "removeEventListeners",
        value: function value() {
          this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur), this.element.form && this.element.form.removeEventListener("reset", this._onFormReset);
        }
      }, {
        key: "enable",
        value: function value() {
          this.element.removeAttribute("disabled"), this.isDisabled = !1;
        }
      }, {
        key: "disable",
        value: function value() {
          this.element.setAttribute("disabled", ""), this.isDisabled = !0;
        }
      }, {
        key: "focus",
        value: function value() {
          this.isFocussed || this.element.focus();
        }
      }, {
        key: "blur",
        value: function value() {
          this.isFocussed && this.element.blur();
        }
      }, {
        key: "clear",
        value: function value() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this.element.value && (this.element.value = ""), e && this.setWidth(), this;
        }
      }, {
        key: "setWidth",
        value: function value(e) {
          var t = this,
              i = function i(e) {
            t.element.style.width = e;
          };

          if (this._placeholderValue) {
            var n = this.element.value.length >= this._placeholderValue.length / 1.25;
            (this.element.value && n || e) && this.calcWidth(i);
          } else this.calcWidth(i);
        }
      }, {
        key: "calcWidth",
        value: function value(e) {
          return (0, n.calcWidthOfInput)(this.element, e);
        }
      }, {
        key: "setActiveDescendant",
        value: function value(e) {
          this.element.setAttribute("aria-activedescendant", e);
        }
      }, {
        key: "removeActiveDescendant",
        value: function value() {
          this.element.removeAttribute("aria-activedescendant");
        }
      }, {
        key: "_onInput",
        value: function value() {
          "select-one" !== this.type && this.setWidth();
        }
      }, {
        key: "_onPaste",
        value: function value(e) {
          e.target === this.element && this.preventPaste && e.preventDefault();
        }
      }, {
        key: "_onFocus",
        value: function value() {
          this.isFocussed = !0;
        }
      }, {
        key: "_onBlur",
        value: function value() {
          this.isFocussed = !1;
        }
      }, {
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
          return (0, n.sanitise)(this.element.value);
        }
      }]) && o(t.prototype, i), r && o(t, r), e;
    }();

    t["default"] = r;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n = i(1);

    function o(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var r = function () {
      function e(t) {
        var i = t.element;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), Object.assign(this, {
          element: i
        }), this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight, this.hasChildren = !!this.element.children;
      }

      var t, i, r;
      return t = e, (i = [{
        key: "clear",
        value: function value() {
          this.element.innerHTML = "";
        }
      }, {
        key: "append",
        value: function value(e) {
          this.element.appendChild(e);
        }
      }, {
        key: "getChild",
        value: function value(e) {
          return this.element.querySelector(e);
        }
      }, {
        key: "scrollToTop",
        value: function value() {
          this.element.scrollTop = 0;
        }
      }, {
        key: "scrollToChoice",
        value: function value(e, t) {
          var i = this;

          if (e) {
            var n = this.element.offsetHeight,
                o = e.offsetHeight,
                r = e.offsetTop + o,
                s = this.element.scrollTop + n,
                a = t > 0 ? this.element.scrollTop + r - s : e.offsetTop;
            requestAnimationFrame(function (e) {
              i._animateScroll(e, a, t);
            });
          }
        }
      }, {
        key: "_scrollDown",
        value: function value(e, t, i) {
          var n = (i - e) / t,
              o = n > 1 ? n : 1;
          this.element.scrollTop = e + o;
        }
      }, {
        key: "_scrollUp",
        value: function value(e, t, i) {
          var n = (e - i) / t,
              o = n > 1 ? n : 1;
          this.element.scrollTop = e - o;
        }
      }, {
        key: "_animateScroll",
        value: function value(e, t, i) {
          var o = this,
              r = n.SCROLLING_SPEED,
              s = this.element.scrollTop,
              a = !1;
          i > 0 ? (this._scrollDown(s, r, t), s < t && (a = !0)) : (this._scrollUp(s, r, t), s > t && (a = !0)), a && requestAnimationFrame(function () {
            o._animateScroll(e, t, i);
          });
        }
      }]) && o(t.prototype, i), r && o(t, r), e;
    }();

    t["default"] = r;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n,
        o = (n = i(4)) && n.__esModule ? n : {
      "default": n
    };

    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
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

    function a(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function c(e, t, i) {
      return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, i) {
        var n = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e));) {
            ;
          }

          return e;
        }(e, t);

        if (n) {
          var o = Object.getOwnPropertyDescriptor(n, t);
          return o.get ? o.get.call(i) : o.value;
        }
      })(e, t, i || e);
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function u(e, t) {
      return (u = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    var h = function (e) {
      function t(e) {
        var i,
            n = e.element,
            o = e.classNames,
            r = e.delimiter;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), (i = a(this, l(t).call(this, {
          element: n,
          classNames: o
        }))).delimiter = r, i;
      }

      var i, n, r;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && u(e, t);
      }(t, o["default"]), i = t, (n = [{
        key: "value",
        set: function set(e) {
          var t = e.map(function (e) {
            return e.value;
          }).join(this.delimiter);
          this.element.setAttribute("value", t), this.element.value = t;
        },
        get: function get() {
          return c(l(t.prototype), "value", this);
        }
      }]) && s(i.prototype, n), r && s(i, r), t;
    }();

    t["default"] = h;
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = void 0;
    var n = r(i(4)),
        o = r(i(5));

    function r(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    function s(e) {
      return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function a(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function c(e, t) {
      return !t || "object" !== s(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function u(e, t) {
      return (u = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    var h = function (e) {
      function t(e) {
        var i = e.element,
            n = e.classNames;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), c(this, l(t).call(this, {
          element: i,
          classNames: n
        }));
      }

      var i, r, s;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && u(e, t);
      }(t, n["default"]), i = t, (r = [{
        key: "appendDocFragment",
        value: function value(e) {
          this.element.innerHTML = "", this.element.appendChild(e);
        }
      }, {
        key: "placeholderOption",
        get: function get() {
          return this.element.querySelector("option[placeholder]");
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
          var t = document.createDocumentFragment();
          e.forEach(function (e) {
            return i = e, n = o["default"].option(i), void t.appendChild(n);
            var i, n;
          }), this.appendDocFragment(t);
        }
      }]) && a(i.prototype, r), s && a(i, s), t;
    }();

    t["default"] = h;
  }, function (e, t, i) {
    var n;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    !function () {
      "use strict";

      var i = {}.hasOwnProperty;

      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t];

          if (n) {
            var r = _typeof(n);

            if ("string" === r || "number" === r) e.push(n);else if (Array.isArray(n) && n.length) {
              var s = o.apply(null, n);
              s && e.push(s);
            } else if ("object" === r) for (var a in n) {
              i.call(n, a) && n[a] && e.push(a);
            }
          }
        }

        return e.join(" ");
      }

      e.exports ? (o["default"] = o, e.exports = o) : void 0 === (n = function () {
        return o;
      }.apply(t, [])) || (e.exports = n);
    }();
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
    var n = i(1);

    t.addChoice = function (e) {
      var t = e.value,
          i = e.label,
          o = e.id,
          r = e.groupId,
          s = e.disabled,
          a = e.elementId,
          c = e.customProperties,
          l = e.placeholder,
          u = e.keyCode;
      return {
        type: n.ACTION_TYPES.ADD_CHOICE,
        value: t,
        label: i,
        id: o,
        groupId: r,
        disabled: s,
        elementId: a,
        customProperties: c,
        placeholder: l,
        keyCode: u
      };
    };

    t.filterChoices = function (e) {
      return {
        type: n.ACTION_TYPES.FILTER_CHOICES,
        results: e
      };
    };

    t.activateChoices = function () {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return {
        type: n.ACTION_TYPES.ACTIVATE_CHOICES,
        active: e
      };
    };

    t.clearChoices = function () {
      return {
        type: n.ACTION_TYPES.CLEAR_CHOICES
      };
    };
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.highlightItem = t.removeItem = t.addItem = void 0;
    var n = i(1);

    t.addItem = function (e) {
      var t = e.value,
          i = e.label,
          o = e.id,
          r = e.choiceId,
          s = e.groupId,
          a = e.customProperties,
          c = e.placeholder,
          l = e.keyCode;
      return {
        type: n.ACTION_TYPES.ADD_ITEM,
        value: t,
        label: i,
        id: o,
        choiceId: r,
        groupId: s,
        customProperties: a,
        placeholder: c,
        keyCode: l
      };
    };

    t.removeItem = function (e, t) {
      return {
        type: n.ACTION_TYPES.REMOVE_ITEM,
        id: e,
        choiceId: t
      };
    };

    t.highlightItem = function (e, t) {
      return {
        type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
        id: e,
        highlighted: t
      };
    };
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.addGroup = void 0;
    var n = i(1);

    t.addGroup = function (e, t, i, o) {
      return {
        type: n.ACTION_TYPES.ADD_GROUP,
        value: e,
        id: t,
        active: i,
        disabled: o
      };
    };
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.resetTo = t.clearAll = void 0;

    t.clearAll = function () {
      return {
        type: "CLEAR_ALL"
      };
    };

    t.resetTo = function (e) {
      return {
        type: "RESET_TO",
        state: e
      };
    };
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.setIsLoading = void 0;

    t.setIsLoading = function (e) {
      return {
        type: "SET_IS_LOADING",
        isLoading: e
      };
    };
  }]);
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      var top = inputRect.top + input.offsetHeight;
      var maxHeight = window.innerHeight - top;

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Form Plugin
 * version: 4.2.2
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
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (t, r) {
    return void 0 === r && (r = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(r), r;
  } : e(jQuery);
}(function (e) {
  "use strict";

  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).closest("form").ajaxSubmit(r));
  }

  function r(t) {
    var r = t.target,
        a = e(r);

    if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");
      if (0 === n.length) return;
      r = n[0];
    }

    var i = r.form;
    if (i.clk = r, "image" === r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;else if ("function" == typeof e.fn.offset) {
      var o = a.offset();
      i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top;
    } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null;
    }, 100);
  }

  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t);
    }
  }

  var n = /\r?\n/g,
      i = {};
  i.fileapi = void 0 !== e('<input type="file">').get(0).files, i.formdata = void 0 !== window.FormData;
  var o = !!e.fn.prop;
  e.fn.attr2 = function () {
    if (!o) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments);
  }, e.fn.ajaxSubmit = function (t, r, n, s) {
    function u(r) {
      var a,
          n,
          i = e.param(r, t.traditional).split("&"),
          o = i.length,
          s = [];

      for (a = 0; a < o; a++) {
        i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
      }

      return s;
    }

    function c(r) {
      function n(e) {
        var t = null;

        try {
          e.contentWindow && (t = e.contentWindow.document);
        } catch (e) {
          a("cannot get iframe.contentWindow document: " + e);
        }

        if (t) return t;

        try {
          t = e.contentDocument ? e.contentDocument : e.document;
        } catch (r) {
          a("cannot get iframe.contentDocument: " + r), t = e.document;
        }

        return t;
      }

      function i() {
        function t() {
          try {
            var e = n(v).readyState;
            a("state = " + e), e && "uninitialized" === e.toLowerCase() && setTimeout(t, 50);
          } catch (e) {
            a("Server abort: ", e, " (", e.name, ")"), s(L), j && clearTimeout(j), j = void 0;
          }
        }

        var r = p.attr2("target"),
            i = p.attr2("action"),
            o = p.attr("enctype") || p.attr("encoding") || "multipart/form-data";
        w.setAttribute("target", m), l && !/post/i.test(l) || w.setAttribute("method", "POST"), i !== f.url && w.setAttribute("action", f.url), f.skipEncodingOverride || l && !/post/i.test(l) || p.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), f.timeout && (j = setTimeout(function () {
          T = !0, s(A);
        }, f.timeout));
        var u = [];

        try {
          if (f.extraData) for (var c in f.extraData) {
            f.extraData.hasOwnProperty(c) && (e.isPlainObject(f.extraData[c]) && f.extraData[c].hasOwnProperty("name") && f.extraData[c].hasOwnProperty("value") ? u.push(e('<input type="hidden" name="' + f.extraData[c].name + '">', k).val(f.extraData[c].value).appendTo(w)[0]) : u.push(e('<input type="hidden" name="' + c + '">', k).val(f.extraData[c]).appendTo(w)[0]));
          }
          f.iframeTarget || h.appendTo(D), v.attachEvent ? v.attachEvent("onload", s) : v.addEventListener("load", s, !1), setTimeout(t, 15);

          try {
            w.submit();
          } catch (e) {
            document.createElement("form").submit.apply(w);
          }
        } finally {
          w.setAttribute("action", i), w.setAttribute("enctype", o), r ? w.setAttribute("target", r) : p.removeAttr("target"), e(u).remove();
        }
      }

      function s(t) {
        if (!x.aborted && !X) {
          if ((O = n(v)) || (a("cannot access response document"), t = L), t === A && x) return x.abort("timeout"), void S.reject(x, "timeout");
          if (t === L && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");

          if (O && O.location.href !== f.iframeSrc || T) {
            v.detachEvent ? v.detachEvent("onload", s) : v.removeEventListener("load", s, !1);
            var r,
                i = "success";

            try {
              if (T) throw "timeout";
              var o = "xml" === f.dataType || O.XMLDocument || e.isXMLDoc(O);
              if (a("isXml=" + o), !o && window.opera && (null === O.body || !O.body.innerHTML) && --C) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
              var u = O.body ? O.body : O.documentElement;
              x.responseText = u ? u.innerHTML : null, x.responseXML = O.XMLDocument ? O.XMLDocument : O, o && (f.dataType = "xml"), x.getResponseHeader = function (e) {
                return {
                  "content-type": f.dataType
                }[e.toLowerCase()];
              }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
              var c = (f.dataType || "").toLowerCase(),
                  l = /(json|script|text)/.test(c);

              if (l || f.textarea) {
                var p = O.getElementsByTagName("textarea")[0];
                if (p) x.responseText = p.value, x.status = Number(p.getAttribute("status")) || x.status, x.statusText = p.getAttribute("statusText") || x.statusText;else if (l) {
                  var m = O.getElementsByTagName("pre")[0],
                      g = O.getElementsByTagName("body")[0];
                  m ? x.responseText = m.textContent ? m.textContent : m.innerText : g && (x.responseText = g.textContent ? g.textContent : g.innerText);
                }
              } else "xml" === c && !x.responseXML && x.responseText && (x.responseXML = q(x.responseText));

              try {
                M = N(x, c, f);
              } catch (e) {
                i = "parsererror", x.error = r = e || i;
              }
            } catch (e) {
              a("error caught: ", e), i = "error", x.error = r = e || i;
            }

            x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (f.success && f.success.call(f.context, M, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, f])) : i && (void 0 === r && (r = x.statusText), f.error && f.error.call(f.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, f, r])), d && e.event.trigger("ajaxComplete", [x, f]), d && ! --e.active && e.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, x, i), X = !0, f.timeout && clearTimeout(j), setTimeout(function () {
              f.iframeTarget ? h.attr("src", f.iframeSrc) : h.remove(), x.responseXML = null;
            }, 100);
          }
        }
      }

      var u,
          c,
          f,
          d,
          m,
          h,
          v,
          x,
          y,
          b,
          T,
          j,
          w = p[0],
          S = e.Deferred();
      if (S.abort = function (e) {
        x.abort(e);
      }, r) for (c = 0; c < g.length; c++) {
        u = e(g[c]), o ? u.prop("disabled", !1) : u.removeAttr("disabled");
      }
      (f = e.extend(!0, {}, e.ajaxSettings, t)).context = f.context || f, m = "jqFormIO" + new Date().getTime();
      var k = w.ownerDocument,
          D = p.closest("body");
      if (f.iframeTarget ? (b = (h = e(f.iframeTarget, k)).attr2("name")) ? m = b : h.attr2("name", m) : (h = e('<iframe name="' + m + '" src="' + f.iframeSrc + '" />', k)).css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px"
      }), v = h[0], x = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: "n/a",
        getAllResponseHeaders: function getAllResponseHeaders() {},
        getResponseHeader: function getResponseHeader() {},
        setRequestHeader: function setRequestHeader() {},
        abort: function abort(t) {
          var r = "timeout" === t ? "timeout" : "aborted";
          a("aborting upload... " + r), this.aborted = 1;

          try {
            v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop");
          } catch (e) {}

          h.attr("src", f.iframeSrc), x.error = r, f.error && f.error.call(f.context, x, r, t), d && e.event.trigger("ajaxError", [x, f, r]), f.complete && f.complete.call(f.context, x, r);
        }
      }, (d = f.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, f]), f.beforeSend && !1 === f.beforeSend.call(f.context, x, f)) return f.global && e.active--, S.reject(), S;
      if (x.aborted) return S.reject(), S;
      (y = w.clk) && (b = y.name) && !y.disabled && (f.extraData = f.extraData || {}, f.extraData[b] = y.value, "image" === y.type && (f.extraData[b + ".x"] = w.clk_x, f.extraData[b + ".y"] = w.clk_y));
      var A = 1,
          L = 2,
          F = e("meta[name=csrf-token]").attr("content"),
          E = e("meta[name=csrf-param]").attr("content");
      E && F && (f.extraData = f.extraData || {}, f.extraData[E] = F), f.forceSync ? i() : setTimeout(i, 10);

      var M,
          O,
          X,
          C = 50,
          q = e.parseXML || function (e, t) {
        return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = new DOMParser().parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null;
      },
          _ = e.parseJSON || function (e) {
        return window.eval("(" + e + ")");
      },
          N = function N(t, r, a) {
        var n = t.getResponseHeader("content-type") || "",
            i = ("xml" === r || !r) && n.indexOf("xml") >= 0,
            o = i ? t.responseXML : t.responseText;
        return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && (("json" === r || !r) && n.indexOf("json") >= 0 ? o = _(o) : ("script" === r || !r) && n.indexOf("javascript") >= 0 && e.globalEval(o)), o;
      };

      return S;
    }

    if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
    var l,
        f,
        d,
        p = this;
    "function" == typeof t ? t = {
      success: t
    } : "string" == typeof t || !1 === t && arguments.length > 0 ? (t = {
      url: t,
      data: r,
      dataType: n
    }, "function" == typeof s && (t.success = s)) : void 0 === t && (t = {}), l = t.method || t.type || this.attr2("method"), (d = (d = "string" == typeof (f = t.url || this.attr2("action")) ? e.trim(f) : "") || window.location.href || "") && (d = (d.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
      url: d,
      success: e.ajaxSettings.success,
      type: l || e.ajaxSettings.type,
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
    }, t);
    var m = {};
    if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var h = t.traditional;
    void 0 === h && (h = e.ajaxSettings.traditional);
    var v,
        g = [],
        x = this.formToArray(t.semantic, g, t.filtering);

    if (t.data) {
      var y = e.isFunction(t.data) ? t.data(x) : t.data;
      t.extraData = y, v = e.param(y, h);
    }

    if (t.beforeSubmit && !1 === t.beforeSubmit(x, this, t)) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [x, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var b = e.param(x, h);
    v && (b = b ? b + "&" + v : v), "GET" === t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + b, t.data = null) : t.data = b;
    var T = [];

    if (t.resetForm && T.push(function () {
      p.resetForm();
    }), t.clearForm && T.push(function () {
      p.clearForm(t.includeHidden);
    }), !t.dataType && t.target) {
      var j = t.success || function () {};

      T.push(function (r, a, n) {
        var i = arguments,
            o = t.replaceTarget ? "replaceWith" : "html";
        e(t.target)[o](r).each(function () {
          j.apply(this, i);
        });
      });
    } else t.success && (e.isArray(t.success) ? e.merge(T, t.success) : T.push(t.success));

    if (t.success = function (e, r, a) {
      for (var n = t.context || this, i = 0, o = T.length; i < o; i++) {
        T[i].apply(n, [e, r, a || p, p]);
      }
    }, t.error) {
      var w = t.error;

      t.error = function (e, r, a) {
        var n = t.context || this;
        w.apply(n, [e, r, a, p]);
      };
    }

    if (t.complete) {
      var S = t.complete;

      t.complete = function (e, r) {
        var a = t.context || this;
        S.apply(a, [e, r, p]);
      };
    }

    var k = e("input[type=file]:enabled", this).filter(function () {
      return "" !== e(this).val();
    }).length > 0,
        D = "multipart/form-data",
        A = p.attr("enctype") === D || p.attr("encoding") === D,
        L = i.fileapi && i.formdata;
    a("fileAPI :" + L);
    var F,
        E = (k || A) && !L;
    !1 !== t.iframe && (t.iframe || E) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
      F = c(x);
    }) : F = c(x) : F = (k || A) && L ? function (r) {
      for (var a = new FormData(), n = 0; n < r.length; n++) {
        a.append(r[n].name, r[n].value);
      }

      if (t.extraData) {
        var i = u(t.extraData);

        for (n = 0; n < i.length; n++) {
          i[n] && a.append(i[n][0], i[n][1]);
        }
      }

      t.data = null;
      var o = e.extend(!0, {}, e.ajaxSettings, t, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: l || "POST"
      });
      t.uploadProgress && (o.xhr = function () {
        var r = e.ajaxSettings.xhr();
        return r.upload && r.upload.addEventListener("progress", function (e) {
          var r = 0,
              a = e.loaded || e.position,
              n = e.total;
          e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r);
        }, !1), r;
      }), o.data = null;
      var s = o.beforeSend;
      return o.beforeSend = function (e, r) {
        t.formData ? r.data = t.formData : r.data = a, s && s.call(this, e, r);
      }, e.ajax(o);
    }(x) : e.ajax(t), p.removeData("jqxhr").data("jqxhr", F);

    for (var M = 0; M < g.length; M++) {
      g[M] = null;
    }

    return this.trigger("form-submit-notify", [this, t]), this;
  }, e.fn.ajaxForm = function (n, i, o, s) {
    if (("string" == typeof n || !1 === n && arguments.length > 0) && (n = {
      url: n,
      data: i,
      dataType: o
    }, "function" == typeof s && (n.success = s)), n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
      var u = {
        s: this.selector,
        c: this.context
      };
      return !e.isReady && u.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
        e(u.s, u.c).ajaxForm(n);
      }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this);
    }

    return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().on("submit.form-plugin", n, t).on("click.form-plugin", n, r);
  }, e.fn.ajaxFormUnbind = function () {
    return this.off("submit.form-plugin click.form-plugin");
  }, e.fn.formToArray = function (t, r, a) {
    var n = [];
    if (0 === this.length) return n;
    var o,
        s = this[0],
        u = this.attr("id"),
        c = t || void 0 === s.elements ? s.getElementsByTagName("*") : s.elements;
    if (c && (c = e.makeArray(c)), u && (t || /(Edge|Trident)\//.test(navigator.userAgent)) && (o = e(':input[form="' + u + '"]').get()).length && (c = (c || []).concat(o)), !c || !c.length) return n;
    e.isFunction(a) && (c = e.map(c, a));
    var l, f, d, p, m, h, v;

    for (l = 0, h = c.length; l < h; l++) {
      if (m = c[l], (d = m.name) && !m.disabled) if (t && s.clk && "image" === m.type) s.clk === m && (n.push({
        name: d,
        value: e(m).val(),
        type: m.type
      }), n.push({
        name: d + ".x",
        value: s.clk_x
      }, {
        name: d + ".y",
        value: s.clk_y
      }));else if ((p = e.fieldValue(m, !0)) && p.constructor === Array) for (r && r.push(m), f = 0, v = p.length; f < v; f++) {
        n.push({
          name: d,
          value: p[f]
        });
      } else if (i.fileapi && "file" === m.type) {
        r && r.push(m);
        var g = m.files;
        if (g.length) for (f = 0; f < g.length; f++) {
          n.push({
            name: d,
            value: g[f],
            type: m.type
          });
        } else n.push({
          name: d,
          value: "",
          type: m.type
        });
      } else null !== p && void 0 !== p && (r && r.push(m), n.push({
        name: d,
        value: p,
        type: m.type,
        required: m.required
      }));
    }

    if (!t && s.clk) {
      var x = e(s.clk),
          y = x[0];
      (d = y.name) && !y.disabled && "image" === y.type && (n.push({
        name: d,
        value: x.val()
      }), n.push({
        name: d + ".x",
        value: s.clk_x
      }, {
        name: d + ".y",
        value: s.clk_y
      }));
    }

    return n;
  }, e.fn.formSerialize = function (t) {
    return e.param(this.formToArray(t));
  }, e.fn.fieldSerialize = function (t) {
    var r = [];
    return this.each(function () {
      var a = this.name;

      if (a) {
        var n = e.fieldValue(this, t);
        if (n && n.constructor === Array) for (var i = 0, o = n.length; i < o; i++) {
          r.push({
            name: a,
            value: n[i]
          });
        } else null !== n && void 0 !== n && r.push({
          name: this.name,
          value: n
        });
      }
    }), e.param(r);
  }, e.fn.fieldValue = function (t) {
    for (var r = [], a = 0, n = this.length; a < n; a++) {
      var i = this[a],
          o = e.fieldValue(i, t);
      null === o || void 0 === o || o.constructor === Array && !o.length || (o.constructor === Array ? e.merge(r, o) : r.push(o));
    }

    return r;
  }, e.fieldValue = function (t, r) {
    var a = t.name,
        i = t.type,
        o = t.tagName.toLowerCase();
    if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" === i || "button" === i || ("checkbox" === i || "radio" === i) && !t.checked || ("submit" === i || "image" === i) && t.form && t.form.clk !== t || "select" === o && -1 === t.selectedIndex)) return null;

    if ("select" === o) {
      var s = t.selectedIndex;
      if (s < 0) return null;

      for (var u = [], c = t.options, l = "select-one" === i, f = l ? s + 1 : c.length, d = l ? s : 0; d < f; d++) {
        var p = c[d];

        if (p.selected && !p.disabled) {
          var m = p.value;
          if (m || (m = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), l) return m;
          u.push(m);
        }
      }

      return u;
    }

    return e(t).val().replace(n, "\r\n");
  }, e.fn.clearForm = function (t) {
    return this.each(function () {
      e("input,select,textarea", this).clearFields(t);
    });
  }, e.fn.clearFields = e.fn.clearInputs = function (t) {
    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var a = this.type,
          n = this.tagName.toLowerCase();
      r.test(a) || "textarea" === n ? this.value = "" : "checkbox" === a || "radio" === a ? this.checked = !1 : "select" === n ? this.selectedIndex = -1 : "file" === a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "");
    });
  }, e.fn.resetForm = function () {
    return this.each(function () {
      var t = e(this),
          r = this.tagName.toLowerCase();

      switch (r) {
        case "input":
          this.checked = this.defaultChecked;

        case "textarea":
          return this.value = this.defaultValue, !0;

        case "option":
        case "optgroup":
          var a = t.parents("select");
          return a.length && a[0].multiple ? "option" === r ? this.selected = this.defaultSelected : t.find("option").resetForm() : a.resetForm(), !0;

        case "select":
          return t.find("option").each(function (e) {
            if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1;
          }), !0;

        case "label":
          var n = e(t.attr("for")),
              i = t.find("input,select,textarea");
          return n[0] && i.unshift(n[0]), i.resetForm(), !0;

        case "form":
          return ("function" == typeof this.reset || "object" == _typeof(this.reset) && !this.reset.nodeType) && this.reset(), !0;

        default:
          return t.find("form,input,label,select,textarea").resetForm(), !0;
      }
    });
  }, e.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e;
    });
  }, e.fn.selected = function (t) {
    return void 0 === t && (t = !0), this.each(function () {
      var r = this.type;
      if ("checkbox" === r || "radio" === r) this.checked = t;else if ("option" === this.tagName.toLowerCase()) {
        var a = e(this).parent("select");
        t && a[0] && "select-one" === a[0].type && a.find("option").selected(!1), this.selected = t;
      }
    });
  }, e.fn.ajaxSubmit.debug = !1;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
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
  }), a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function blank(b) {
      return !a.trim("" + a(b).val());
    },
    filled: function filled(b) {
      var c = a(b).val();
      return null !== c && !!a.trim("" + c);
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
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
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
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]));
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
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
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
      minlength: function minlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d;
      },
      maxlength: function maxlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e <= d;
      },
      rangelength: function rangelength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1];
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
  var b,
      c = {};
  return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
        f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  }), a;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {
    // Write
    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires,
            t = options.expires = new Date();
        t.setTime(+t + days * 864e+5);
      }

      return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
    } // Read


    var result = key ? undefined : {}; // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().

    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');

      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      } // Prevent storing a cookie that we couldn't decode.


      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    } // Must not alter options, thus extending a fresh object...


    $.cookie(key, '', $.extend({}, options, {
      expires: -1
    }));
    return !$.cookie(key);
  };
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

/*	jQuery.flexMenu 1.4.2
	https://github.com/352Media/flexMenu
	Description: If a list is too long for all items to fit on one line, display a popup menu instead.
	Dependencies: jQuery, Modernizr (optional). Without Modernizr, the menu can only be shown on click (not hover). */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
}(function (a) {
  function f() {
    a(window).width() === b && a(window).height() === c || (a(d).each(function () {
      a(this).flexMenu({
        undo: !0
      }).flexMenu(this.options);
    }), b = a(window).width(), c = a(window).height());
  }

  function g(b) {
    var c, d;
    c = a("li.flexMenu-viewMore.active"), d = c.not(b), d.removeClass("active").find("> ul").hide();
  }

  var e,
      b = a(window).width(),
      c = a(window).height(),
      d = [];
  a(window).resize(function () {
    clearTimeout(e), e = setTimeout(function () {
      f();
    }, 200);
  }), a.fn.flexMenu = function (b) {
    var c,
        e = a.extend({
      threshold: 2,
      cutoff: 2,
      linkText: "More",
      linkTitle: "View More",
      linkTextAll: "Menu",
      linkTitleAll: "Open/Close Menu",
      showOnHover: !0,
      popupAbsolute: !0,
      popupClass: "",
      undo: !1
    }, b);
    return this.options = e, c = a.inArray(this, d), c >= 0 ? d.splice(c, 1) : d.push(this), this.each(function () {
      function s(a) {
        var b = Math.ceil(a.offset().top) >= i + j;
        return b;
      }

      var k,
          l,
          m,
          n,
          o,
          q,
          r,
          b = a(this),
          c = b.find("> li"),
          d = c.first(),
          f = c.last(),
          h = b.find("li").length,
          i = Math.floor(d.offset().top),
          j = Math.floor(d.outerHeight(!0)),
          p = !1;

      if (s(f) && h > e.threshold && !e.undo && b.is(":visible")) {
        var t = a('<ul class="flexMenu-popup" style="display:none;' + (e.popupAbsolute ? " position: absolute;" : "") + '"></ul>');

        for (t.addClass(e.popupClass), r = h; r > 1; r--) {
          if (k = b.find("> li:last-child"), l = s(k), r - 1 <= e.cutoff) {
            a(b.children().get().reverse()).appendTo(t), p = !0;
            break;
          }

          if (!l) break;
          k.appendTo(t);
        }

        p ? b.append('<li class="flexMenu-viewMore flexMenu-allInPopup"><a href="#" title="' + e.linkTitleAll + '">' + e.linkTextAll + "</a></li>") : b.append('<li class="flexMenu-viewMore"><a href="#" title="' + e.linkTitle + '">' + e.linkText + "</a></li>"), m = b.find("> li.flexMenu-viewMore"), s(m) && b.find("> li:nth-last-child(2)").appendTo(t), t.children().each(function (a, b) {
          t.prepend(b);
        }), m.append(t), n = b.find("> li.flexMenu-viewMore > a"), n.click(function (a) {
          g(m), t.toggle(), m.toggleClass("active"), a.preventDefault();
        }), e.showOnHover && "undefined" != typeof Modernizr && !Modernizr.touch && m.hover(function () {
          t.show(), a(this).addClass("active");
        }, function () {
          t.hide(), a(this).removeClass("active");
        });
      } else if (e.undo && b.find("ul.flexMenu-popup")) {
        for (q = b.find("ul.flexMenu-popup"), o = q.find("li").length, r = 1; r <= o; r++) {
          q.find("> li:first-child").appendTo(b);
        }

        q.remove(), b.find("> li.flexMenu-viewMore").remove();
      }
    });
  };
});
"use strict";

$(function () {
  $(".mobilemenu").each(function () {
    var mobilemenu = $(this);
    var overflow = mobilemenu.data('overflow') || scroll; // дефолтные настройки для скрола

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
              } else {
                setTimeout(function () {
                  $('html, body').animate({
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

function number_format(number, decimals, dec_point, thousands_sep) {
  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +	 bugfix by: Michael White (http://crestidg.com)
  var i, j, kw, kd, km; // input sanitation & defaults

  if (isNaN(decimals = Math.abs(decimals))) {
    decimals = 2;
  }

  if (dec_point == undefined) {
    dec_point = ",";
  }

  if (thousands_sep == undefined) {
    thousands_sep = ".";
  }

  i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

  if ((j = i.length) > 3) {
    j = j % 3;
  } else {
    j = 0;
  }

  km = j ? i.substr(0, j) + thousands_sep : "";
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep); //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");

  kd = decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "";
  return km + kw + kd;
}

svg4everybody(); // тригерим ресайз окна для обновления закрепленных блоков

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
/** Наведение меню **/

/*$('li.js-catalog-menu-lvl1').hover(function() {
    var $inner = $(this).find('.js-c-m-inner');
    $inner.stop().animate({height: 'show', opacity:1}, 300, 'linear', function() {
        $inner.css('height','auto');
    });
}, function() {
    var $inner = $(this).find('.js-c-m-inner');
    $inner.stop().animate({height: 'hide', opacity:0}, 200, 'linear', function() {
        $inner.css('height','auto');
    });
});*/
//$('.js-catalog-menu-right').mouseleave(function() {
//    $(this).html('');
//});


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
}); // $('.js-seeAlso-carousel').on('init', equalBlocks);

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
}); // $('.js-viewed-carousel').on('init', equalBlocks);

$('.js-actions-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
}); // $('.js-left-menu-toggle').each(function() {
//     if ($(this).parent().hasClass('active')) {
//         $(this).toggleClass('opened');
//         $(this).nextAll('ul').slideToggle(300);
//     }
// });
// $('.js-left-menu-toggle').click(function() {
//     $(this).toggleClass('opened');
//     $(this).nextAll('ul').slideToggle(300);
// });
// $('.js-left-menu-toggle').each(function() {
//     if ($(this).parent('').hasClass('active')) {
//         $(this).toggleClass('opened');
//         $(this).nextAll('ul').animate({
//             left: "0",
//             right: "0",
//         });
//     }
// });

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
}); // $('.js-left-menu-toggle').click(function() {
//     $(this).toggleClass('opened');
//     $(this).prevAll('ul').animate({
//       right: "-100%",
//       left: "unset",
//     });
// });
// $('.left-menu__lvl1').hover(function() {
//     $('.js-left-menu-toggle', this).toggleClass('opened');
//     $('ul', this).slideToggle(300);
// }, function() {
//     $('.js-left-menu-toggle', this).toggleClass('opened');
//     $('ul', this).slideToggle(300);
// });

/*$.ionTabs(".js-contacts-tabs", {
    type: 'none'
});*/
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
/*$('.js-tooltip').tooltipster();

$('.js-tooltip-search').click(function() {
    return false;
}).tooltipster({
    content: $('#toolbar-search'),
    delay: 0,
    trigger: 'click',
    interactive: true,
    contentCloning: true,
    theme: 'tooltipster-white',
    functionReady: function(origin, content) {
        $('.js-tooltip-close').click(function() {
            origin.tooltipster('hide');
        });
    }
});*/

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
}); //$('video,audio').mediaelementplayer({
//    pluginPath: '/template/mediaelement/',
//});

/** Формы загрузки файлов **/

$('.js-download-popup').magnificPopup({
  type: 'inline',
  midClick: true
}); // $('.scrolltop').click(function(){
//     $("html, body").animate({ scrollTop: 0 }, 200);
// });
// window.addEventListener("scroll", function(e,e2,e3){
//     var scrollTop = $window.scrollTop();
//     console.log(scrollTop);
//     // if (scrollTop > 230) {
//     //     $('.scrolltop').fadeIn();
//     //     if($('.catalog-menu').length) {
//     //         $('body').addClass('menu-fixed');
//     //     }
//     // } else {
//     //     $('.scrolltop').fadeOut();
//     //     if($('.catalog-menu').length) {
//     //         $('body').removeClass('menu-fixed');
//     //     }
//     // }
// });

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
}); // $('.js-cart-receiver input[type="text"]').change(function() {
//     var surname = $('#receiver-surname').val();
//     var name = $('#receiver-name').val();
//     var patronymic = $('#receiver-patronymic').val();
//     $('#receiver').val(surname + ' ' + name + ' ' + patronymic);
// });

/* пагинация */
// $(function() {
//     var s = window.location.search;
//     s = s.match(new RegExp('page' + '=([^&=]+)'));
//     var page = s ? s[1] : false;
//     if(page) {
//         var config = {
//     		wrapper: "#pdopage",
//     		rows: "#pdopage .rows",
//     		pageLimit: 6,
//     	};
//     	var wrapper = $(config['wrapper']);
//     	var rows = $(config['rows']);
//     	var limit = config['pageLimit'] * (page-1);
//     	$.get(document.location.pathname, {page: 1, limit: limit}, function(response) {
//     	    if (response && response['total']) {
//         		wrapper.find(rows).prepend(response['output']);
//     	    }
//     	}, 'json');
//     }
// });

/* toggle */

$('.js-collapse-toggle').on('click', function () {
  var $target = $($(this).data('target'));

  if ($target.is(':visible')) {
    $target.slideUp(300);
    $(this).removeClass('_active');
  } else {
    $target.slideDown(300);
    $(this).addClass('_active');
  }
});
/*$(function() {
    var exclude = [
        'http://nemopro.ru/'
    ];

    if($.inArray(window.location.href, exclude) == '-1') {
        $("html, body").animate({
            scrollTop: $('#header').height() - ($(window).width()>768?60:48)
        }, 0);
    }
});*/

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
$('.js-consultant-btn').click(function () {
  jivo_api.open();
});
$('.js-catalog-menu').flexMenu({
  linkText: 'Еще <i class="uk-icon-angle-down"></i>',
  showOnHover: false
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
}); // окно скидок от суммы

if ($.cookie('modal-discount') != 'shown') {
  setTimeout(function () {
    UIkit.modal($('#modal-discount')).show();
    $.cookie('modal-discount', 'shown');
  }, 15000);
}

if ($.cookie('show-filters') == 'true') {
  $('.filters-wrap').removeClass('filters-wrap_hidden');
}

$(document).on('click', '.filters-wrap__toggle', function () {
  $('.filters-wrap').toggleClass('filters-wrap_hidden');
  $.cookie('show-filters', !$('.filters-wrap').hasClass('filters-wrap_hidden'));
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
/*function equalBlocks() {
    ;( function( $, window, document, undefined )
    {
        'use strict';

        $( '.js-equal-list' ).each( function() {
            var $list       = $( this ),
                $items      = $list.find( '.js-equal-item:visible' ),
                setHeights  = function()
                {
                    $items.css( 'height', 'auto' );

                    var perRow = Math.floor( $list.width() / $items.width() );
                    if( perRow == null || perRow < 2 ) return true;

                    for( var i = 0, j = $items.length; i < j; i += perRow )
                    {
                        var maxHeight   = 0,
                            $row        = $items.slice( i, i + perRow );

                        $row.each( function()
                        {
                            var itemHeight = parseInt( $( this ).outerHeight() );
                            if ( itemHeight > maxHeight ) maxHeight = itemHeight;
                        });
                        $row.css( 'height', maxHeight );
                    }
                };

            setHeights();
            $( window ).on( 'resize', setHeights );
        });
    })( jQuery, window, document );
}

$(window).load(equalBlocks);

$(document).on('mse2_load', equalBlocks);
$(document).on('pdopage_load', equalBlocks);
$('[data-uk-switcher]').on('show.uk.switcher', equalBlocks);
$('[data-uk-slider]').on('focusitem.uk.slider', equalBlocks);*/

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

if (typeof LazyLoad !== 'undefined') {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".js-lazy"
  });
  $(document).on('mse2_load', function () {
    if (lazyLoadInstance) {
      lazyLoadInstance.update();
    }
  });
  $(document).on('pdopage_load', function () {
    if (lazyLoadInstance) {
      lazyLoadInstance.update();
    }
  });
}

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

$('.js-discount-dropdown').each(function () {
  var dropdown = UIkit.dropdown(this, {
    pos: 'top-right',
    remaintime: 0,
    mode: window.matchMedia("(min-width: 640px)").matches ? 'hover' : 'click'
  });
  $(window).scroll(function () {
    dropdown.hide();
  });
});
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
              resultPrice.innerHTML = '400 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '300 руб.';
            } else if (costInput.value >= 15000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня';
              resultPrice.innerHTML = '300 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 300) + ' руб.';
            } else if (costInput.value >= 15000) {
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
              resultPrice.innerHTML = '500 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '400 руб.';
            } else if (costInput.value >= 15000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.';
            } else if (costInput.value >= 15000) {
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
              resultPrice.innerHTML = '1000 руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '900 руб.';
            } else if (costInput.value >= 15000 && costInput.value < 30000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 руб.';
            } else if (costInput.value >= 30000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = 'Бесплатно';
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '1000 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 1000) + ' руб.';
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '900 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 900) + ' руб.';
            } else if (costInput.value >= 15000 && costInput.value < 30000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.';
            } else if (costInput.value >= 30000) {
              resultTime.innerHTML = '2-4 дня';
              resultPrice.innerHTML = '0 + ' + costInput.value * 0.04 + ' = ' + costInput.value * 0.04 + ' руб.';
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
  var perView = Math.ceil(this.offsetWidth / 64);
  var windowPerView = Math.ceil(window.innerWidth / 64); // Product Gallery

  var galleryThumbs = new Swiper($thumbs[0], {
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