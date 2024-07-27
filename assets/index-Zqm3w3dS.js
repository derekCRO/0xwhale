function x1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function wg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function xn(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Sg = { exports: {} },
  La = {},
  Cg = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fi = Symbol.for("react.element"),
  w1 = Symbol.for("react.portal"),
  S1 = Symbol.for("react.fragment"),
  C1 = Symbol.for("react.strict_mode"),
  k1 = Symbol.for("react.profiler"),
  b1 = Symbol.for("react.provider"),
  P1 = Symbol.for("react.context"),
  T1 = Symbol.for("react.forward_ref"),
  E1 = Symbol.for("react.suspense"),
  R1 = Symbol.for("react.memo"),
  j1 = Symbol.for("react.lazy"),
  op = Symbol.iterator;
function M1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (op && e[op]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var kg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bg = Object.assign,
  Pg = {};
function wo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pg),
    (this.updater = n || kg);
}
wo.prototype.isReactComponent = {};
wo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tg() {}
Tg.prototype = wo.prototype;
function rd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pg),
    (this.updater = n || kg);
}
var od = (rd.prototype = new Tg());
od.constructor = rd;
bg(od, wo.prototype);
od.isPureReactComponent = !0;
var ip = Array.isArray,
  Eg = Object.prototype.hasOwnProperty,
  id = { current: null },
  Rg = { key: !0, ref: !0, __self: !0, __source: !0 };
function jg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Eg.call(t, r) && !Rg.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Fi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: id.current,
  };
}
function $1(e, t) {
  return {
    $$typeof: Fi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fi;
}
function A1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sp = /\/+/g;
function Wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? A1("" + e.key)
    : t.toString(36);
}
function As(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Fi:
          case w1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Wl(s, 0) : r),
      ip(o)
        ? ((n = ""),
          e != null && (n = e.replace(sp, "$&/") + "/"),
          As(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (sd(o) &&
            (o = $1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(sp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ip(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Wl(i, a);
      s += As(i, t, n, l, o);
    }
  else if (((l = M1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Wl(i, a++)), (s += As(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function is(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    As(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function _1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ze = { current: null },
  _s = { transition: null },
  N1 = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: _s,
    ReactCurrentOwner: id,
  };
G.Children = {
  map: is,
  forEach: function (e, t, n) {
    is(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = wo;
G.Fragment = S1;
G.Profiler = k1;
G.PureComponent = rd;
G.StrictMode = C1;
G.Suspense = E1;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N1;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bg({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = id.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Eg.call(t, l) &&
        !Rg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Fi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: P1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: b1, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = jg;
G.createFactory = function (e) {
  var t = jg.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: T1, render: e };
};
G.isValidElement = sd;
G.lazy = function (e) {
  return { $$typeof: j1, _payload: { _status: -1, _result: e }, _init: _1 };
};
G.memo = function (e, t) {
  return { $$typeof: R1, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = _s.transition;
  _s.transition = {};
  try {
    e();
  } finally {
    _s.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return Ze.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Ze.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Ze.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Ze.current.useEffect(e, t);
};
G.useId = function () {
  return Ze.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Ze.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Ze.current.useRef(e);
};
G.useState = function (e) {
  return Ze.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Ze.current.useTransition();
};
G.version = "18.2.0";
Cg.exports = G;
var S = Cg.exports;
const ut = wg(S),
  Lu = x1({ __proto__: null, default: ut }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O1 = S,
  I1 = Symbol.for("react.element"),
  L1 = Symbol.for("react.fragment"),
  D1 = Object.prototype.hasOwnProperty,
  F1 = O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  z1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) D1.call(t, r) && !z1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: I1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: F1.current,
  };
}
La.Fragment = L1;
La.jsx = Mg;
La.jsxs = Mg;
Sg.exports = La;
var p = Sg.exports,
  Du = {},
  $g = { exports: {} },
  mt = {},
  Ag = { exports: {} },
  _g = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, N) {
    var F = R.length;
    R.push(N);
    e: for (; 0 < F; ) {
      var re = (F - 1) >>> 1,
        le = R[re];
      if (0 < o(le, N)) (R[re] = N), (R[F] = le), (F = re);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var N = R[0],
      F = R.pop();
    if (F !== N) {
      R[0] = F;
      e: for (var re = 0, le = R.length, en = le >>> 1; re < en; ) {
        var ye = 2 * (re + 1) - 1,
          Qe = R[ye],
          Fe = ye + 1,
          tn = R[Fe];
        if (0 > o(Qe, F))
          Fe < le && 0 > o(tn, Qe)
            ? ((R[re] = tn), (R[Fe] = F), (re = Fe))
            : ((R[re] = Qe), (R[ye] = F), (re = ye));
        else if (Fe < le && 0 > o(tn, F)) (R[re] = tn), (R[Fe] = F), (re = Fe);
        else break e;
      }
    }
    return N;
  }
  function o(R, N) {
    var F = R.sortIndex - N.sortIndex;
    return F !== 0 ? F : R.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    y = !1,
    x = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(R) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= R)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function w(R) {
    if (((x = !1), g(R), !y))
      if (n(l) !== null) (y = !0), I(C);
      else {
        var N = n(u);
        N !== null && H(w, N.startTime - R);
      }
  }
  function C(R, N) {
    (y = !1), x && ((x = !1), m(E), (E = -1)), (v = !0);
    var F = f;
    try {
      for (
        g(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (R && !A()));

      ) {
        var re = d.callback;
        if (typeof re == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var le = re(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof le == "function" ? (d.callback = le) : d === n(l) && r(l),
            g(N);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var en = !0;
      else {
        var ye = n(u);
        ye !== null && H(w, ye.startTime - N), (en = !1);
      }
      return en;
    } finally {
      (d = null), (f = F), (v = !1);
    }
  }
  var T = !1,
    P = null,
    E = -1,
    $ = 5,
    j = -1;
  function A() {
    return !(e.unstable_now() - j < $);
  }
  function O() {
    if (P !== null) {
      var R = e.unstable_now();
      j = R;
      var N = !0;
      try {
        N = P(!0, R);
      } finally {
        N ? z() : ((T = !1), (P = null));
      }
    } else T = !1;
  }
  var z;
  if (typeof h == "function")
    z = function () {
      h(O);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      V = L.port2;
    (L.port1.onmessage = O),
      (z = function () {
        V.postMessage(null);
      });
  } else
    z = function () {
      k(O, 0);
    };
  function I(R) {
    (P = R), T || ((T = !0), z());
  }
  function H(R, N) {
    E = k(function () {
      R(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), I(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var F = f;
      f = N;
      try {
        return R();
      } finally {
        f = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, N) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var F = f;
      f = R;
      try {
        return N();
      } finally {
        f = F;
      }
    }),
    (e.unstable_scheduleCallback = function (R, N, F) {
      var re = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? re + F : re))
          : (F = re),
        R)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = F + le),
        (R = {
          id: c++,
          callback: N,
          priorityLevel: R,
          startTime: F,
          expirationTime: le,
          sortIndex: -1,
        }),
        F > re
          ? ((R.sortIndex = F),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (x ? (m(E), (E = -1)) : (x = !0), H(w, F - re)))
          : ((R.sortIndex = le), t(l, R), y || v || ((y = !0), I(C))),
        R
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (R) {
      var N = f;
      return function () {
        var F = f;
        f = N;
        try {
          return R.apply(this, arguments);
        } finally {
          f = F;
        }
      };
    });
})(_g);
Ag.exports = _g;
var V1 = Ag.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ng = S,
  pt = V1;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Og = new Set(),
  fi = {};
function Sr(e, t) {
  uo(e, t), uo(e + "Capture", t);
}
function uo(e, t) {
  for (fi[e] = t, e = 0; e < t.length; e++) Og.add(t[e]);
}
var mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fu = Object.prototype.hasOwnProperty,
  B1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ap = {},
  lp = {};
function U1(e) {
  return Fu.call(lp, e)
    ? !0
    : Fu.call(ap, e)
    ? !1
    : B1.test(e)
    ? (lp[e] = !0)
    : ((ap[e] = !0), !1);
}
function W1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function H1(e, t, n, r) {
  if (t === null || typeof t > "u" || W1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Je(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  De[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  De[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  De[e] = new Je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  De[e] = new Je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  De[e] = new Je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  De[e] = new Je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  De[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ad = /[\-:]([a-z])/g;
function ld(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ad, ld);
    De[t] = new Je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ad, ld);
    De[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ad, ld);
  De[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  De[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new Je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  De[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ud(e, t, n, r) {
  var o = De.hasOwnProperty(t) ? De[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (H1(t, n, o, r) && (n = null),
    r || o === null
      ? U1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wn = Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ss = Symbol.for("react.element"),
  Lr = Symbol.for("react.portal"),
  Dr = Symbol.for("react.fragment"),
  cd = Symbol.for("react.strict_mode"),
  zu = Symbol.for("react.profiler"),
  Ig = Symbol.for("react.provider"),
  Lg = Symbol.for("react.context"),
  dd = Symbol.for("react.forward_ref"),
  Vu = Symbol.for("react.suspense"),
  Bu = Symbol.for("react.suspense_list"),
  fd = Symbol.for("react.memo"),
  Pn = Symbol.for("react.lazy"),
  Dg = Symbol.for("react.offscreen"),
  up = Symbol.iterator;
function Ao(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (up && e[up]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  Hl;
function Ho(e) {
  if (Hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hl = (t && t[1]) || "";
    }
  return (
    `
` +
    Hl +
    e
  );
}
var Kl = !1;
function Gl(e, t) {
  if (!e || Kl) return "";
  Kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ho(e) : "";
}
function K1(e) {
  switch (e.tag) {
    case 5:
      return Ho(e.type);
    case 16:
      return Ho("Lazy");
    case 13:
      return Ho("Suspense");
    case 19:
      return Ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return "";
  }
}
function Uu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dr:
      return "Fragment";
    case Lr:
      return "Portal";
    case zu:
      return "Profiler";
    case cd:
      return "StrictMode";
    case Vu:
      return "Suspense";
    case Bu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lg:
        return (e.displayName || "Context") + ".Consumer";
      case Ig:
        return (e._context.displayName || "Context") + ".Provider";
      case dd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fd:
        return (
          (t = e.displayName || null), t !== null ? t : Uu(e.type) || "Memo"
        );
      case Pn:
        (t = e._payload), (e = e._init);
        try {
          return Uu(e(t));
        } catch {}
    }
  return null;
}
function G1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Uu(t);
    case 8:
      return t === cd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Y1(e) {
  var t = Fg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function as(e) {
  e._valueTracker || (e._valueTracker = Y1(e));
}
function zg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Js(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wu(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Vg(e, t) {
  (t = t.checked), t != null && ud(e, "checked", t, !1);
}
function Hu(e, t) {
  Vg(e, t);
  var n = Wn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ku(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ku(e, t.type, Wn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function dp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ku(e, t, n) {
  (t !== "number" || Js(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ko = Array.isArray;
function eo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function fp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Ko(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Wn(n) };
}
function Bg(e, t) {
  var n = Wn(t.value),
    r = Wn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ug(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ug(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ls,
  Wg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ls = ls || document.createElement("div"),
          ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Q1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(qo).forEach(function (e) {
  Q1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qo[t] = qo[e]);
  });
});
function Hg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qo.hasOwnProperty(e) && qo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Kg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Hg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var X1 = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Qu(e, t) {
  if (t) {
    if (X1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Xu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qu = null;
function pd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zu = null,
  to = null,
  no = null;
function hp(e) {
  if ((e = Bi(e))) {
    if (typeof Zu != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Ba(t)), Zu(e.stateNode, e.type, t));
  }
}
function Gg(e) {
  to ? (no ? no.push(e) : (no = [e])) : (to = e);
}
function Yg() {
  if (to) {
    var e = to,
      t = no;
    if (((no = to = null), hp(e), t)) for (e = 0; e < t.length; e++) hp(t[e]);
  }
}
function Qg(e, t) {
  return e(t);
}
function Xg() {}
var Yl = !1;
function qg(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return Qg(e, t, n);
  } finally {
    (Yl = !1), (to !== null || no !== null) && (Xg(), Yg());
  }
}
function hi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ba(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Ju = !1;
if (mn)
  try {
    var _o = {};
    Object.defineProperty(_o, "passive", {
      get: function () {
        Ju = !0;
      },
    }),
      window.addEventListener("test", _o, _o),
      window.removeEventListener("test", _o, _o);
  } catch {
    Ju = !1;
  }
function q1(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Zo = !1,
  ea = null,
  ta = !1,
  ec = null,
  Z1 = {
    onError: function (e) {
      (Zo = !0), (ea = e);
    },
  };
function J1(e, t, n, r, o, i, s, a, l) {
  (Zo = !1), (ea = null), q1.apply(Z1, arguments);
}
function ew(e, t, n, r, o, i, s, a, l) {
  if ((J1.apply(this, arguments), Zo)) {
    if (Zo) {
      var u = ea;
      (Zo = !1), (ea = null);
    } else throw Error(M(198));
    ta || ((ta = !0), (ec = u));
  }
}
function Cr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mp(e) {
  if (Cr(e) !== e) throw Error(M(188));
}
function tw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cr(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return mp(o), e;
        if (i === r) return mp(o), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Jg(e) {
  return (e = tw(e)), e !== null ? e0(e) : null;
}
function e0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = e0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var t0 = pt.unstable_scheduleCallback,
  gp = pt.unstable_cancelCallback,
  nw = pt.unstable_shouldYield,
  rw = pt.unstable_requestPaint,
  xe = pt.unstable_now,
  ow = pt.unstable_getCurrentPriorityLevel,
  hd = pt.unstable_ImmediatePriority,
  n0 = pt.unstable_UserBlockingPriority,
  na = pt.unstable_NormalPriority,
  iw = pt.unstable_LowPriority,
  r0 = pt.unstable_IdlePriority,
  Da = null,
  Gt = null;
function sw(e) {
  if (Gt && typeof Gt.onCommitFiberRoot == "function")
    try {
      Gt.onCommitFiberRoot(Da, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : uw,
  aw = Math.log,
  lw = Math.LN2;
function uw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((aw(e) / lw) | 0)) | 0;
}
var us = 64,
  cs = 4194304;
function Go(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Go(a)) : ((i &= s), i !== 0 && (r = Go(i)));
  } else (s = n & ~o), s !== 0 ? (r = Go(s)) : i !== 0 && (r = Go(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function cw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Dt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = cw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function tc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function o0() {
  var e = us;
  return (us <<= 1), !(us & 4194240) && (us = 64), e;
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n);
}
function fw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function md(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var J = 0;
function i0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var s0,
  gd,
  a0,
  l0,
  u0,
  nc = !1,
  ds = [],
  Nn = null,
  On = null,
  In = null,
  mi = new Map(),
  gi = new Map(),
  jn = [],
  pw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function yp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      On = null;
      break;
    case "mouseover":
    case "mouseout":
      In = null;
      break;
    case "pointerover":
    case "pointerout":
      mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gi.delete(t.pointerId);
  }
}
function No(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Bi(t)), t !== null && gd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function hw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Nn = No(Nn, e, t, n, r, o)), !0;
    case "dragenter":
      return (On = No(On, e, t, n, r, o)), !0;
    case "mouseover":
      return (In = No(In, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return mi.set(i, No(mi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), gi.set(i, No(gi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function c0(e) {
  var t = sr(e.target);
  if (t !== null) {
    var n = Cr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zg(n)), t !== null)) {
          (e.blockedOn = t),
            u0(e.priority, function () {
              a0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ns(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qu = r), n.target.dispatchEvent(r), (qu = null);
    } else return (t = Bi(n)), t !== null && gd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vp(e, t, n) {
  Ns(e) && n.delete(t);
}
function mw() {
  (nc = !1),
    Nn !== null && Ns(Nn) && (Nn = null),
    On !== null && Ns(On) && (On = null),
    In !== null && Ns(In) && (In = null),
    mi.forEach(vp),
    gi.forEach(vp);
}
function Oo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nc ||
      ((nc = !0),
      pt.unstable_scheduleCallback(pt.unstable_NormalPriority, mw)));
}
function yi(e) {
  function t(o) {
    return Oo(o, e);
  }
  if (0 < ds.length) {
    Oo(ds[0], e);
    for (var n = 1; n < ds.length; n++) {
      var r = ds[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nn !== null && Oo(Nn, e),
      On !== null && Oo(On, e),
      In !== null && Oo(In, e),
      mi.forEach(t),
      gi.forEach(t),
      n = 0;
    n < jn.length;
    n++
  )
    (r = jn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
    c0(n), n.blockedOn === null && jn.shift();
}
var ro = wn.ReactCurrentBatchConfig,
  oa = !0;
function gw(e, t, n, r) {
  var o = J,
    i = ro.transition;
  ro.transition = null;
  try {
    (J = 1), yd(e, t, n, r);
  } finally {
    (J = o), (ro.transition = i);
  }
}
function yw(e, t, n, r) {
  var o = J,
    i = ro.transition;
  ro.transition = null;
  try {
    (J = 4), yd(e, t, n, r);
  } finally {
    (J = o), (ro.transition = i);
  }
}
function yd(e, t, n, r) {
  if (oa) {
    var o = rc(e, t, n, r);
    if (o === null) iu(e, t, r, ia, n), yp(e, r);
    else if (hw(o, e, t, n, r)) r.stopPropagation();
    else if ((yp(e, r), t & 4 && -1 < pw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Bi(o);
        if (
          (i !== null && s0(i),
          (i = rc(e, t, n, r)),
          i === null && iu(e, t, r, ia, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else iu(e, t, r, null, n);
  }
}
var ia = null;
function rc(e, t, n, r) {
  if (((ia = null), (e = pd(r)), (e = sr(e)), e !== null))
    if (((t = Cr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ia = e), null;
}
function d0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ow()) {
        case hd:
          return 1;
        case n0:
          return 4;
        case na:
        case iw:
          return 16;
        case r0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null,
  vd = null,
  Os = null;
function f0() {
  if (Os) return Os;
  var e,
    t = vd,
    n = t.length,
    r,
    o = "value" in $n ? $n.value : $n.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Os = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Is(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fs() {
  return !0;
}
function xp() {
  return !1;
}
function gt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fs
        : xp),
      (this.isPropagationStopped = xp),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fs));
      },
      persist: function () {},
      isPersistent: fs,
    }),
    t
  );
}
var So = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xd = gt(So),
  Vi = fe({}, So, { view: 0, detail: 0 }),
  vw = gt(Vi),
  Xl,
  ql,
  Io,
  Fa = fe({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Io &&
            (Io && e.type === "mousemove"
              ? ((Xl = e.screenX - Io.screenX), (ql = e.screenY - Io.screenY))
              : (ql = Xl = 0),
            (Io = e)),
          Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ql;
    },
  }),
  wp = gt(Fa),
  xw = fe({}, Fa, { dataTransfer: 0 }),
  ww = gt(xw),
  Sw = fe({}, Vi, { relatedTarget: 0 }),
  Zl = gt(Sw),
  Cw = fe({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kw = gt(Cw),
  bw = fe({}, So, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Pw = gt(bw),
  Tw = fe({}, So, { data: 0 }),
  Sp = gt(Tw),
  Ew = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Rw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jw[e]) ? !!t[e] : !1;
}
function wd() {
  return Mw;
}
var $w = fe({}, Vi, {
    key: function (e) {
      if (e.key) {
        var t = Ew[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Is(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Rw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wd,
    charCode: function (e) {
      return e.type === "keypress" ? Is(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Is(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Aw = gt($w),
  _w = fe({}, Fa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cp = gt(_w),
  Nw = fe({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wd,
  }),
  Ow = gt(Nw),
  Iw = fe({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lw = gt(Iw),
  Dw = fe({}, Fa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Fw = gt(Dw),
  zw = [9, 13, 27, 32],
  Sd = mn && "CompositionEvent" in window,
  Jo = null;
mn && "documentMode" in document && (Jo = document.documentMode);
var Vw = mn && "TextEvent" in window && !Jo,
  p0 = mn && (!Sd || (Jo && 8 < Jo && 11 >= Jo)),
  kp = " ",
  bp = !1;
function h0(e, t) {
  switch (e) {
    case "keyup":
      return zw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function m0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fr = !1;
function Bw(e, t) {
  switch (e) {
    case "compositionend":
      return m0(t);
    case "keypress":
      return t.which !== 32 ? null : ((bp = !0), kp);
    case "textInput":
      return (e = t.data), e === kp && bp ? null : e;
    default:
      return null;
  }
}
function Uw(e, t) {
  if (Fr)
    return e === "compositionend" || (!Sd && h0(e, t))
      ? ((e = f0()), (Os = vd = $n = null), (Fr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return p0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ww = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ww[e.type] : t === "textarea";
}
function g0(e, t, n, r) {
  Gg(r),
    (t = sa(t, "onChange")),
    0 < t.length &&
      ((n = new xd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ei = null,
  vi = null;
function Hw(e) {
  E0(e, 0);
}
function za(e) {
  var t = Br(e);
  if (zg(t)) return e;
}
function Kw(e, t) {
  if (e === "change") return t;
}
var y0 = !1;
if (mn) {
  var Jl;
  if (mn) {
    var eu = "oninput" in document;
    if (!eu) {
      var Tp = document.createElement("div");
      Tp.setAttribute("oninput", "return;"),
        (eu = typeof Tp.oninput == "function");
    }
    Jl = eu;
  } else Jl = !1;
  y0 = Jl && (!document.documentMode || 9 < document.documentMode);
}
function Ep() {
  ei && (ei.detachEvent("onpropertychange", v0), (vi = ei = null));
}
function v0(e) {
  if (e.propertyName === "value" && za(vi)) {
    var t = [];
    g0(t, vi, e, pd(e)), qg(Hw, t);
  }
}
function Gw(e, t, n) {
  e === "focusin"
    ? (Ep(), (ei = t), (vi = n), ei.attachEvent("onpropertychange", v0))
    : e === "focusout" && Ep();
}
function Yw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return za(vi);
}
function Qw(e, t) {
  if (e === "click") return za(t);
}
function Xw(e, t) {
  if (e === "input" || e === "change") return za(t);
}
function qw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zt = typeof Object.is == "function" ? Object.is : qw;
function xi(e, t) {
  if (zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Fu.call(t, o) || !zt(e[o], t[o])) return !1;
  }
  return !0;
}
function Rp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jp(e, t) {
  var n = Rp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Rp(n);
  }
}
function x0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? x0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function w0() {
  for (var e = window, t = Js(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Js(e.document);
  }
  return t;
}
function Cd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zw(e) {
  var t = w0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    x0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Cd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = jp(n, i));
        var s = jp(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jw = mn && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  oc = null,
  ti = null,
  ic = !1;
function Mp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ic ||
    zr == null ||
    zr !== Js(r) ||
    ((r = zr),
    "selectionStart" in r && Cd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ti && xi(ti, r)) ||
      ((ti = r),
      (r = sa(oc, "onSelect")),
      0 < r.length &&
        ((t = new xd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zr))));
}
function ps(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vr = {
    animationend: ps("Animation", "AnimationEnd"),
    animationiteration: ps("Animation", "AnimationIteration"),
    animationstart: ps("Animation", "AnimationStart"),
    transitionend: ps("Transition", "TransitionEnd"),
  },
  tu = {},
  S0 = {};
mn &&
  ((S0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vr.animationend.animation,
    delete Vr.animationiteration.animation,
    delete Vr.animationstart.animation),
  "TransitionEvent" in window || delete Vr.transitionend.transition);
function Va(e) {
  if (tu[e]) return tu[e];
  if (!Vr[e]) return e;
  var t = Vr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in S0) return (tu[e] = t[n]);
  return e;
}
var C0 = Va("animationend"),
  k0 = Va("animationiteration"),
  b0 = Va("animationstart"),
  P0 = Va("transitionend"),
  T0 = new Map(),
  $p =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qn(e, t) {
  T0.set(e, t), Sr(t, [e]);
}
for (var nu = 0; nu < $p.length; nu++) {
  var ru = $p[nu],
    eS = ru.toLowerCase(),
    tS = ru[0].toUpperCase() + ru.slice(1);
  Qn(eS, "on" + tS);
}
Qn(C0, "onAnimationEnd");
Qn(k0, "onAnimationIteration");
Qn(b0, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(P0, "onTransitionEnd");
uo("onMouseEnter", ["mouseout", "mouseover"]);
uo("onMouseLeave", ["mouseout", "mouseover"]);
uo("onPointerEnter", ["pointerout", "pointerover"]);
uo("onPointerLeave", ["pointerout", "pointerover"]);
Sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));
function Ap(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ew(r, t, void 0, e), (e.currentTarget = null);
}
function E0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Ap(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Ap(o, a, u), (i = l);
        }
    }
  }
  if (ta) throw ((e = ec), (ta = !1), (ec = null), e);
}
function oe(e, t) {
  var n = t[cc];
  n === void 0 && (n = t[cc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (R0(t, e, 2, !1), n.add(r));
}
function ou(e, t, n) {
  var r = 0;
  t && (r |= 4), R0(n, e, r, t);
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function wi(e) {
  if (!e[hs]) {
    (e[hs] = !0),
      Og.forEach(function (n) {
        n !== "selectionchange" && (nS.has(n) || ou(n, !1, e), ou(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || ((t[hs] = !0), ou("selectionchange", !1, t));
  }
}
function R0(e, t, n, r) {
  switch (d0(t)) {
    case 1:
      var o = gw;
      break;
    case 4:
      o = yw;
      break;
    default:
      o = yd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ju ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function iu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = sr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qg(function () {
    var u = i,
      c = pd(n),
      d = [];
    e: {
      var f = T0.get(e);
      if (f !== void 0) {
        var v = xd,
          y = e;
        switch (e) {
          case "keypress":
            if (Is(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Aw;
            break;
          case "focusin":
            (y = "focus"), (v = Zl);
            break;
          case "focusout":
            (y = "blur"), (v = Zl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = wp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = ww;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ow;
            break;
          case C0:
          case k0:
          case b0:
            v = kw;
            break;
          case P0:
            v = Lw;
            break;
          case "scroll":
            v = vw;
            break;
          case "wheel":
            v = Fw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Pw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Cp;
        }
        var x = (t & 4) !== 0,
          k = !x && e === "scroll",
          m = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              m !== null && ((w = hi(h, m)), w != null && x.push(Si(h, w, g)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((f = new v(f, y, null, n, c)), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== qu &&
            (y = n.relatedTarget || n.fromElement) &&
            (sr(y) || y[gn]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? sr(y) : null),
              y !== null &&
                ((k = Cr(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((x = wp),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Cp),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (k = v == null ? f : Br(v)),
            (g = y == null ? f : Br(y)),
            (f = new x(w, h + "leave", v, n, c)),
            (f.target = k),
            (f.relatedTarget = g),
            (w = null),
            sr(c) === u &&
              ((x = new x(m, h + "enter", y, n, c)),
              (x.target = g),
              (x.relatedTarget = k),
              (w = x)),
            (k = w),
            v && y)
          )
            t: {
              for (x = v, m = y, h = 0, g = x; g; g = Tr(g)) h++;
              for (g = 0, w = m; w; w = Tr(w)) g++;
              for (; 0 < h - g; ) (x = Tr(x)), h--;
              for (; 0 < g - h; ) (m = Tr(m)), g--;
              for (; h--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = Tr(x)), (m = Tr(m));
              }
              x = null;
            }
          else x = null;
          v !== null && _p(d, f, v, x, !1),
            y !== null && k !== null && _p(d, k, y, x, !0);
        }
      }
      e: {
        if (
          ((f = u ? Br(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var C = Kw;
        else if (Pp(f))
          if (y0) C = Xw;
          else {
            C = Yw;
            var T = Gw;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Qw);
        if (C && (C = C(e, u))) {
          g0(d, C, n, c);
          break e;
        }
        T && T(e, f, u),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Ku(f, "number", f.value);
      }
      switch (((T = u ? Br(u) : window), e)) {
        case "focusin":
          (Pp(T) || T.contentEditable === "true") &&
            ((zr = T), (oc = u), (ti = null));
          break;
        case "focusout":
          ti = oc = zr = null;
          break;
        case "mousedown":
          ic = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ic = !1), Mp(d, n, c);
          break;
        case "selectionchange":
          if (Jw) break;
        case "keydown":
        case "keyup":
          Mp(d, n, c);
      }
      var P;
      if (Sd)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Fr
          ? h0(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (p0 &&
          n.locale !== "ko" &&
          (Fr || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Fr && (P = f0())
            : (($n = c),
              (vd = "value" in $n ? $n.value : $n.textContent),
              (Fr = !0))),
        (T = sa(u, E)),
        0 < T.length &&
          ((E = new Sp(E, e, null, n, c)),
          d.push({ event: E, listeners: T }),
          P ? (E.data = P) : ((P = m0(n)), P !== null && (E.data = P)))),
        (P = Vw ? Bw(e, n) : Uw(e, n)) &&
          ((u = sa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Sp("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    E0(d, t);
  });
}
function Si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = hi(e, n)),
      i != null && r.unshift(Si(e, i, o)),
      (i = hi(e, t)),
      i != null && r.push(Si(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _p(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = hi(n, i)), l != null && s.unshift(Si(n, l, a)))
        : o || ((l = hi(n, i)), l != null && s.push(Si(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var rS = /\r\n?/g,
  oS = /\u0000|\uFFFD/g;
function Np(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      rS,
      `
`
    )
    .replace(oS, "");
}
function ms(e, t, n) {
  if (((t = Np(t)), Np(e) !== t && n)) throw Error(M(425));
}
function aa() {}
var sc = null,
  ac = null;
function lc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var uc = typeof setTimeout == "function" ? setTimeout : void 0,
  iS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Op = typeof Promise == "function" ? Promise : void 0,
  sS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Op < "u"
      ? function (e) {
          return Op.resolve(null).then(e).catch(aS);
        }
      : uc;
function aS(e) {
  setTimeout(function () {
    throw e;
  });
}
function su(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), yi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  yi(t);
}
function Ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ip(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Co = Math.random().toString(36).slice(2),
  Ht = "__reactFiber$" + Co,
  Ci = "__reactProps$" + Co,
  gn = "__reactContainer$" + Co,
  cc = "__reactEvents$" + Co,
  lS = "__reactListeners$" + Co,
  uS = "__reactHandles$" + Co;
function sr(e) {
  var t = e[Ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gn] || n[Ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ip(e); e !== null; ) {
          if ((n = e[Ht])) return n;
          e = Ip(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Bi(e) {
  return (
    (e = e[Ht] || e[gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Ba(e) {
  return e[Ci] || null;
}
var dc = [],
  Ur = -1;
function Xn(e) {
  return { current: e };
}
function ie(e) {
  0 > Ur || ((e.current = dc[Ur]), (dc[Ur] = null), Ur--);
}
function ne(e, t) {
  Ur++, (dc[Ur] = e.current), (e.current = t);
}
var Hn = {},
  Ye = Xn(Hn),
  nt = Xn(!1),
  mr = Hn;
function co(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function rt(e) {
  return (e = e.childContextTypes), e != null;
}
function la() {
  ie(nt), ie(Ye);
}
function Lp(e, t, n) {
  if (Ye.current !== Hn) throw Error(M(168));
  ne(Ye, t), ne(nt, n);
}
function j0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, G1(e) || "Unknown", o));
  return fe({}, n, r);
}
function ua(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hn),
    (mr = Ye.current),
    ne(Ye, e),
    ne(nt, nt.current),
    !0
  );
}
function Dp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = j0(e, t, mr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(nt),
      ie(Ye),
      ne(Ye, e))
    : ie(nt),
    ne(nt, n);
}
var rn = null,
  Ua = !1,
  au = !1;
function M0(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function cS(e) {
  (Ua = !0), M0(e);
}
function qn() {
  if (!au && rn !== null) {
    au = !0;
    var e = 0,
      t = J;
    try {
      var n = rn;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rn = null), (Ua = !1);
    } catch (o) {
      throw (rn !== null && (rn = rn.slice(e + 1)), t0(hd, qn), o);
    } finally {
      (J = t), (au = !1);
    }
  }
  return null;
}
var Wr = [],
  Hr = 0,
  ca = null,
  da = 0,
  Ct = [],
  kt = 0,
  gr = null,
  an = 1,
  ln = "";
function er(e, t) {
  (Wr[Hr++] = da), (Wr[Hr++] = ca), (ca = e), (da = t);
}
function $0(e, t, n) {
  (Ct[kt++] = an), (Ct[kt++] = ln), (Ct[kt++] = gr), (gr = e);
  var r = an;
  e = ln;
  var o = 32 - Dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Dt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (an = (1 << (32 - Dt(t) + o)) | (n << o) | r),
      (ln = i + e);
  } else (an = (1 << i) | (n << o) | r), (ln = e);
}
function kd(e) {
  e.return !== null && (er(e, 1), $0(e, 1, 0));
}
function bd(e) {
  for (; e === ca; )
    (ca = Wr[--Hr]), (Wr[Hr] = null), (da = Wr[--Hr]), (Wr[Hr] = null);
  for (; e === gr; )
    (gr = Ct[--kt]),
      (Ct[kt] = null),
      (ln = Ct[--kt]),
      (Ct[kt] = null),
      (an = Ct[--kt]),
      (Ct[kt] = null);
}
var dt = null,
  ct = null,
  ae = !1,
  It = null;
function A0(e, t) {
  var n = Pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (dt = e), (ct = Ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (dt = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gr !== null ? { id: an, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (dt = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pc(e) {
  if (ae) {
    var t = ct;
    if (t) {
      var n = t;
      if (!Fp(e, t)) {
        if (fc(e)) throw Error(M(418));
        t = Ln(n.nextSibling);
        var r = dt;
        t && Fp(e, t)
          ? A0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (dt = e));
      }
    } else {
      if (fc(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (dt = e);
    }
  }
}
function zp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  dt = e;
}
function gs(e) {
  if (e !== dt) return !1;
  if (!ae) return zp(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lc(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (fc(e)) throw (_0(), Error(M(418)));
    for (; t; ) A0(e, t), (t = Ln(t.nextSibling));
  }
  if ((zp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = dt ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function _0() {
  for (var e = ct; e; ) e = Ln(e.nextSibling);
}
function fo() {
  (ct = dt = null), (ae = !1);
}
function Pd(e) {
  It === null ? (It = [e]) : It.push(e);
}
var dS = wn.ReactCurrentBatchConfig;
function Nt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fa = Xn(null),
  pa = null,
  Kr = null,
  Td = null;
function Ed() {
  Td = Kr = pa = null;
}
function Rd(e) {
  var t = fa.current;
  ie(fa), (e._currentValue = t);
}
function hc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function oo(e, t) {
  (pa = e),
    (Td = Kr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (tt = !0), (e.firstContext = null));
}
function Et(e) {
  var t = e._currentValue;
  if (Td !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
      if (pa === null) throw Error(M(308));
      (Kr = e), (pa.dependencies = { lanes: 0, firstContext: e });
    } else Kr = Kr.next = e;
  return t;
}
var ar = null;
function jd(e) {
  ar === null ? (ar = [e]) : ar.push(e);
}
function N0(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), jd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    yn(e, r)
  );
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tn = !1;
function Md(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function O0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function cn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      yn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), jd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    yn(e, n)
  );
}
function Ls(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), md(e, n);
  }
}
function Vp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ha(e, t, n, r) {
  var o = e.updateQueue;
  Tn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        v = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            x = a;
          switch (((f = t), (v = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                d = y.call(v, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (f = typeof y == "function" ? y.call(v, d, f) : y),
                f == null)
              )
                break e;
              d = fe({}, d, f);
              break e;
            case 2:
              Tn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (vr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Bp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(M(191, o));
        o.call(r);
      }
    }
}
var I0 = new Ng.Component().refs;
function mc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      o = zn(e),
      i = cn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Dn(e, i, o)),
      t !== null && (Ft(t, e, o, r), Ls(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      o = zn(e),
      i = cn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Dn(e, i, o)),
      t !== null && (Ft(t, e, o, r), Ls(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = qe(),
      r = zn(e),
      o = cn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Dn(e, o, r)),
      t !== null && (Ft(t, e, r, n), Ls(t, e, r));
  },
};
function Up(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xi(n, r) || !xi(o, i)
      : !0
  );
}
function L0(e, t, n) {
  var r = !1,
    o = Hn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Et(i))
      : ((o = rt(t) ? mr : Ye.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? co(e, o) : Hn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Wp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wa.enqueueReplaceState(t, t.state, null);
}
function gc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = I0), Md(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Et(i))
    : ((i = rt(t) ? mr : Ye.current), (o.context = co(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (mc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Wa.enqueueReplaceState(o, o.state, null),
      ha(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Lo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === I0 && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Hp(e) {
  var t = e._init;
  return t(e._payload);
}
function D0(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = Vn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, g, w) {
    return h === null || h.tag !== 6
      ? ((h = hu(g, m.mode, w)), (h.return = m), h)
      : ((h = o(h, g)), (h.return = m), h);
  }
  function l(m, h, g, w) {
    var C = g.type;
    return C === Dr
      ? c(m, h, g.props.children, w, g.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Pn &&
            Hp(C) === h.type))
      ? ((w = o(h, g.props)), (w.ref = Lo(m, h, g)), (w.return = m), w)
      : ((w = Us(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = Lo(m, h, g)),
        (w.return = m),
        w);
  }
  function u(m, h, g, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = mu(g, m.mode, w)), (h.return = m), h)
      : ((h = o(h, g.children || [])), (h.return = m), h);
  }
  function c(m, h, g, w, C) {
    return h === null || h.tag !== 7
      ? ((h = pr(g, m.mode, w, C)), (h.return = m), h)
      : ((h = o(h, g)), (h.return = m), h);
  }
  function d(m, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = hu("" + h, m.mode, g)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ss:
          return (
            (g = Us(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = Lo(m, null, h)),
            (g.return = m),
            g
          );
        case Lr:
          return (h = mu(h, m.mode, g)), (h.return = m), h;
        case Pn:
          var w = h._init;
          return d(m, w(h._payload), g);
      }
      if (Ko(h) || Ao(h))
        return (h = pr(h, m.mode, g, null)), (h.return = m), h;
      ys(m, h);
    }
    return null;
  }
  function f(m, h, g, w) {
    var C = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : a(m, h, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ss:
          return g.key === C ? l(m, h, g, w) : null;
        case Lr:
          return g.key === C ? u(m, h, g, w) : null;
        case Pn:
          return (C = g._init), f(m, h, C(g._payload), w);
      }
      if (Ko(g) || Ao(g)) return C !== null ? null : c(m, h, g, w, null);
      ys(m, g);
    }
    return null;
  }
  function v(m, h, g, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(g) || null), a(h, m, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ss:
          return (m = m.get(w.key === null ? g : w.key) || null), l(h, m, w, C);
        case Lr:
          return (m = m.get(w.key === null ? g : w.key) || null), u(h, m, w, C);
        case Pn:
          var T = w._init;
          return v(m, h, g, T(w._payload), C);
      }
      if (Ko(w) || Ao(w)) return (m = m.get(g) || null), c(h, m, w, C, null);
      ys(h, w);
    }
    return null;
  }
  function y(m, h, g, w) {
    for (
      var C = null, T = null, P = h, E = (h = 0), $ = null;
      P !== null && E < g.length;
      E++
    ) {
      P.index > E ? (($ = P), (P = null)) : ($ = P.sibling);
      var j = f(m, P, g[E], w);
      if (j === null) {
        P === null && (P = $);
        break;
      }
      e && P && j.alternate === null && t(m, P),
        (h = i(j, h, E)),
        T === null ? (C = j) : (T.sibling = j),
        (T = j),
        (P = $);
    }
    if (E === g.length) return n(m, P), ae && er(m, E), C;
    if (P === null) {
      for (; E < g.length; E++)
        (P = d(m, g[E], w)),
          P !== null &&
            ((h = i(P, h, E)), T === null ? (C = P) : (T.sibling = P), (T = P));
      return ae && er(m, E), C;
    }
    for (P = r(m, P); E < g.length; E++)
      ($ = v(P, m, E, g[E], w)),
        $ !== null &&
          (e && $.alternate !== null && P.delete($.key === null ? E : $.key),
          (h = i($, h, E)),
          T === null ? (C = $) : (T.sibling = $),
          (T = $));
    return (
      e &&
        P.forEach(function (A) {
          return t(m, A);
        }),
      ae && er(m, E),
      C
    );
  }
  function x(m, h, g, w) {
    var C = Ao(g);
    if (typeof C != "function") throw Error(M(150));
    if (((g = C.call(g)), g == null)) throw Error(M(151));
    for (
      var T = (C = null), P = h, E = (h = 0), $ = null, j = g.next();
      P !== null && !j.done;
      E++, j = g.next()
    ) {
      P.index > E ? (($ = P), (P = null)) : ($ = P.sibling);
      var A = f(m, P, j.value, w);
      if (A === null) {
        P === null && (P = $);
        break;
      }
      e && P && A.alternate === null && t(m, P),
        (h = i(A, h, E)),
        T === null ? (C = A) : (T.sibling = A),
        (T = A),
        (P = $);
    }
    if (j.done) return n(m, P), ae && er(m, E), C;
    if (P === null) {
      for (; !j.done; E++, j = g.next())
        (j = d(m, j.value, w)),
          j !== null &&
            ((h = i(j, h, E)), T === null ? (C = j) : (T.sibling = j), (T = j));
      return ae && er(m, E), C;
    }
    for (P = r(m, P); !j.done; E++, j = g.next())
      (j = v(P, m, E, j.value, w)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? E : j.key),
          (h = i(j, h, E)),
          T === null ? (C = j) : (T.sibling = j),
          (T = j));
    return (
      e &&
        P.forEach(function (O) {
          return t(m, O);
        }),
      ae && er(m, E),
      C
    );
  }
  function k(m, h, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Dr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ss:
          e: {
            for (var C = g.key, T = h; T !== null; ) {
              if (T.key === C) {
                if (((C = g.type), C === Dr)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (h = o(T, g.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Pn &&
                    Hp(C) === T.type)
                ) {
                  n(m, T.sibling),
                    (h = o(T, g.props)),
                    (h.ref = Lo(m, T, g)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            g.type === Dr
              ? ((h = pr(g.props.children, m.mode, w, g.key)),
                (h.return = m),
                (m = h))
              : ((w = Us(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = Lo(m, h, g)),
                (w.return = m),
                (m = w));
          }
          return s(m);
        case Lr:
          e: {
            for (T = g.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, g.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = mu(g, m.mode, w)), (h.return = m), (m = h);
          }
          return s(m);
        case Pn:
          return (T = g._init), k(m, h, T(g._payload), w);
      }
      if (Ko(g)) return y(m, h, g, w);
      if (Ao(g)) return x(m, h, g, w);
      ys(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, g)), (h.return = m), (m = h))
          : (n(m, h), (h = hu(g, m.mode, w)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return k;
}
var po = D0(!0),
  F0 = D0(!1),
  Ui = {},
  Yt = Xn(Ui),
  ki = Xn(Ui),
  bi = Xn(Ui);
function lr(e) {
  if (e === Ui) throw Error(M(174));
  return e;
}
function $d(e, t) {
  switch ((ne(bi, t), ne(ki, e), ne(Yt, Ui), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yu(t, e));
  }
  ie(Yt), ne(Yt, t);
}
function ho() {
  ie(Yt), ie(ki), ie(bi);
}
function z0(e) {
  lr(bi.current);
  var t = lr(Yt.current),
    n = Yu(t, e.type);
  t !== n && (ne(ki, e), ne(Yt, n));
}
function Ad(e) {
  ki.current === e && (ie(Yt), ie(ki));
}
var ue = Xn(0);
function ma(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var lu = [];
function _d() {
  for (var e = 0; e < lu.length; e++)
    lu[e]._workInProgressVersionPrimary = null;
  lu.length = 0;
}
var Ds = wn.ReactCurrentDispatcher,
  uu = wn.ReactCurrentBatchConfig,
  yr = 0,
  de = null,
  Te = null,
  Me = null,
  ga = !1,
  ni = !1,
  Pi = 0,
  fS = 0;
function ze() {
  throw Error(M(321));
}
function Nd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zt(e[n], t[n])) return !1;
  return !0;
}
function Od(e, t, n, r, o, i) {
  if (
    ((yr = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ds.current = e === null || e.memoizedState === null ? gS : yS),
    (e = n(r, o)),
    ni)
  ) {
    i = 0;
    do {
      if (((ni = !1), (Pi = 0), 25 <= i)) throw Error(M(301));
      (i += 1),
        (Me = Te = null),
        (t.updateQueue = null),
        (Ds.current = vS),
        (e = n(r, o));
    } while (ni);
  }
  if (
    ((Ds.current = ya),
    (t = Te !== null && Te.next !== null),
    (yr = 0),
    (Me = Te = de = null),
    (ga = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function Id() {
  var e = Pi !== 0;
  return (Pi = 0), e;
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (de.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function Rt() {
  if (Te === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Me === null ? de.memoizedState : Me.next;
  if (t !== null) (Me = t), (Te = e);
  else {
    if (e === null) throw Error(M(310));
    (Te = e),
      (e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null,
      }),
      Me === null ? (de.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function Ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cu(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Te,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((yr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (de.lanes |= c),
          (vr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      zt(r, t.memoizedState) || (tt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (de.lanes |= i), (vr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function du(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    zt(i, t.memoizedState) || (tt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function V0() {}
function B0(e, t) {
  var n = de,
    r = Rt(),
    o = t(),
    i = !zt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (tt = !0)),
    (r = r.queue),
    Ld(H0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ei(9, W0.bind(null, n, r, o, t), void 0, null),
      $e === null)
    )
      throw Error(M(349));
    yr & 30 || U0(n, t, o);
  }
  return o;
}
function U0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function W0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), K0(t) && G0(e);
}
function H0(e, t, n) {
  return n(function () {
    K0(t) && G0(e);
  });
}
function K0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zt(e, n);
  } catch {
    return !0;
  }
}
function G0(e) {
  var t = yn(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function Kp(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ti,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mS.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function Ei(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Y0() {
  return Rt().memoizedState;
}
function Fs(e, t, n, r) {
  var o = Bt();
  (de.flags |= e),
    (o.memoizedState = Ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ha(e, t, n, r) {
  var o = Rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Te !== null) {
    var s = Te.memoizedState;
    if (((i = s.destroy), r !== null && Nd(r, s.deps))) {
      o.memoizedState = Ei(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = Ei(1 | t, n, i, r));
}
function Gp(e, t) {
  return Fs(8390656, 8, e, t);
}
function Ld(e, t) {
  return Ha(2048, 8, e, t);
}
function Q0(e, t) {
  return Ha(4, 2, e, t);
}
function X0(e, t) {
  return Ha(4, 4, e, t);
}
function q0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Z0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ha(4, 4, q0.bind(null, t, e), n)
  );
}
function Dd() {}
function J0(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ey(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ty(e, t, n) {
  return yr & 21
    ? (zt(n, t) || ((n = o0()), (de.lanes |= n), (vr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n));
}
function pS(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = uu.transition;
  uu.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (uu.transition = r);
  }
}
function ny() {
  return Rt().memoizedState;
}
function hS(e, t, n) {
  var r = zn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ry(e))
  )
    oy(t, n);
  else if (((n = N0(e, t, n, r)), n !== null)) {
    var o = qe();
    Ft(n, e, r, o), iy(n, t, r);
  }
}
function mS(e, t, n) {
  var r = zn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ry(e)) oy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), zt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), jd(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = N0(e, t, o, r)),
      n !== null && ((o = qe()), Ft(n, e, r, o), iy(n, t, r));
  }
}
function ry(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function oy(e, t) {
  ni = ga = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function iy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), md(e, n);
  }
}
var ya = {
    readContext: Et,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  gS = {
    readContext: Et,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Et,
    useEffect: Gp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fs(4194308, 4, q0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hS.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kp,
    useDebugValue: Dd,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = Kp(!1),
        t = e[0];
      return (e = pS.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        o = Bt();
      if (ae) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), $e === null)) throw Error(M(349));
        yr & 30 || U0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Gp(H0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ei(9, W0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Bt(),
        t = $e.identifierPrefix;
      if (ae) {
        var n = ln,
          r = an;
        (n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Pi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = fS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yS = {
    readContext: Et,
    useCallback: J0,
    useContext: Et,
    useEffect: Ld,
    useImperativeHandle: Z0,
    useInsertionEffect: Q0,
    useLayoutEffect: X0,
    useMemo: ey,
    useReducer: cu,
    useRef: Y0,
    useState: function () {
      return cu(Ti);
    },
    useDebugValue: Dd,
    useDeferredValue: function (e) {
      var t = Rt();
      return ty(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = cu(Ti)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: V0,
    useSyncExternalStore: B0,
    useId: ny,
    unstable_isNewReconciler: !1,
  },
  vS = {
    readContext: Et,
    useCallback: J0,
    useContext: Et,
    useEffect: Ld,
    useImperativeHandle: Z0,
    useInsertionEffect: Q0,
    useLayoutEffect: X0,
    useMemo: ey,
    useReducer: du,
    useRef: Y0,
    useState: function () {
      return du(Ti);
    },
    useDebugValue: Dd,
    useDeferredValue: function (e) {
      var t = Rt();
      return Te === null ? (t.memoizedState = e) : ty(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = du(Ti)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: V0,
    useSyncExternalStore: B0,
    useId: ny,
    unstable_isNewReconciler: !1,
  };
function mo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += K1(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function fu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var xS = typeof WeakMap == "function" ? WeakMap : Map;
function sy(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xa || ((xa = !0), (Ec = r)), yc(e, t);
    }),
    n
  );
}
function ay(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        yc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        yc(e, t),
          typeof r != "function" &&
            (Fn === null ? (Fn = new Set([this])) : Fn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Yp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xS();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = _S.bind(null, e, t, n)), t.then(e, e));
}
function Qp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = cn(-1, 1)), (t.tag = 2), Dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var wS = wn.ReactCurrentOwner,
  tt = !1;
function Xe(e, t, n, r) {
  t.child = e === null ? F0(t, null, n, r) : po(t, e.child, n, r);
}
function qp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    oo(t, o),
    (r = Od(e, t, n, r, i, o)),
    (n = Id()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        vn(e, t, o))
      : (ae && n && kd(t), (t.flags |= 1), Xe(e, t, r, o), t.child)
  );
}
function Zp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Kd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ly(e, t, i, r, o))
      : ((e = Us(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xi), n(s, r) && e.ref === t.ref)
    )
      return vn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Vn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ly(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xi(i, r) && e.ref === t.ref)
      if (((tt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (tt = !0);
      else return (t.lanes = e.lanes), vn(e, t, o);
  }
  return vc(e, t, n, r, o);
}
function uy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Yr, at),
        (at |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Yr, at),
          (at |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Yr, at),
        (at |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Yr, at),
      (at |= r);
  return Xe(e, t, o, n), t.child;
}
function cy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vc(e, t, n, r, o) {
  var i = rt(n) ? mr : Ye.current;
  return (
    (i = co(t, i)),
    oo(t, o),
    (n = Od(e, t, n, r, i, o)),
    (r = Id()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        vn(e, t, o))
      : (ae && r && kd(t), (t.flags |= 1), Xe(e, t, n, o), t.child)
  );
}
function Jp(e, t, n, r, o) {
  if (rt(n)) {
    var i = !0;
    ua(t);
  } else i = !1;
  if ((oo(t, o), t.stateNode === null))
    zs(e, t), L0(t, n, r), gc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Et(u))
      : ((u = rt(n) ? mr : Ye.current), (u = co(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Wp(t, s, r, u)),
      (Tn = !1);
    var f = t.memoizedState;
    (s.state = f),
      ha(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || nt.current || Tn
        ? (typeof c == "function" && (mc(t, n, c, r), (l = t.memoizedState)),
          (a = Tn || Up(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      O0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Nt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Et(l))
        : ((l = rt(n) ? mr : Ye.current), (l = co(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Wp(t, s, r, l)),
      (Tn = !1),
      (f = t.memoizedState),
      (s.state = f),
      ha(t, r, s, o);
    var y = t.memoizedState;
    a !== d || f !== y || nt.current || Tn
      ? (typeof v == "function" && (mc(t, n, v, r), (y = t.memoizedState)),
        (u = Tn || Up(t, n, u, r, f, y, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xc(e, t, n, r, i, o);
}
function xc(e, t, n, r, o, i) {
  cy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Dp(t, n, !1), vn(e, t, i);
  (r = t.stateNode), (wS.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = po(t, e.child, null, i)), (t.child = po(t, null, a, i)))
      : Xe(e, t, a, i),
    (t.memoizedState = r.state),
    o && Dp(t, n, !0),
    t.child
  );
}
function dy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lp(e, t.context, !1),
    $d(e, t.containerInfo);
}
function eh(e, t, n, r, o) {
  return fo(), Pd(o), (t.flags |= 256), Xe(e, t, n, r), t.child;
}
var wc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fy(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
  )
    return (
      pc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ya(s, r, 0, null)),
              (e = pr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Sc(n)),
              (t.memoizedState = wc),
              e)
            : Fd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return SS(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Vn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Vn(a, i)) : ((i = pr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Sc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = wc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fd(e, t) {
  return (
    (t = Ya({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vs(e, t, n, r) {
  return (
    r !== null && Pd(r),
    po(t, e.child, null, n),
    (e = Fd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function SS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fu(Error(M(422)))), vs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ya({ mode: "visible", children: r.children }, o, 0, null)),
        (i = pr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && po(t, e.child, null, s),
        (t.child.memoizedState = Sc(s)),
        (t.memoizedState = wc),
        i);
  if (!(t.mode & 1)) return vs(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(M(419))), (r = fu(i, r, void 0)), vs(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), tt || a)) {
    if (((r = $e), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), yn(e, o), Ft(r, e, o, -1));
    }
    return Hd(), (r = fu(Error(M(421)))), vs(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = NS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ct = Ln(o.nextSibling)),
      (dt = t),
      (ae = !0),
      (It = null),
      e !== null &&
        ((Ct[kt++] = an),
        (Ct[kt++] = ln),
        (Ct[kt++] = gr),
        (an = e.id),
        (ln = e.overflow),
        (gr = t)),
      (t = Fd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function th(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hc(e.return, t, n);
}
function pu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function py(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Xe(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && th(e, n, t);
        else if (e.tag === 19) th(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ma(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          pu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ma(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        pu(t, !0, n, null, i);
        break;
      case "together":
        pu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function CS(e, t, n) {
  switch (t.tag) {
    case 3:
      dy(t), fo();
      break;
    case 5:
      z0(t);
      break;
    case 1:
      rt(t.type) && ua(t);
      break;
    case 4:
      $d(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(fa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fy(e, t, n)
          : (ne(ue, ue.current & 1),
            (e = vn(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return py(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uy(e, t, n);
  }
  return vn(e, t, n);
}
var hy, Cc, my, gy;
hy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Cc = function () {};
my = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), lr(Yt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Wu(e, o)), (r = Wu(e, r)), (i = []);
        break;
      case "select":
        (o = fe({}, o, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Gu(e, o)), (r = Gu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = aa);
    }
    Qu(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (fi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (fi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && oe("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Do(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function kS(e, t, n) {
  var r = t.pendingProps;
  switch ((bd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(t), null;
    case 1:
      return rt(t.type) && la(), Ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ho(),
        ie(nt),
        ie(Ye),
        _d(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (Mc(It), (It = null)))),
        Cc(e, t),
        Ve(t),
        null
      );
    case 5:
      Ad(t);
      var o = lr(bi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        my(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Ve(t), null;
        }
        if (((e = lr(Yt.current)), gs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ht] = t), (r[Ci] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yo.length; o++) oe(Yo[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              cp(r, i), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              fp(r, i), oe("invalid", r);
          }
          Qu(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ms(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ms(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : fi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              as(r), dp(r, i, !0);
              break;
            case "textarea":
              as(r), pp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = aa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ug(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ht] = t),
            (e[Ci] = r),
            hy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Xu(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yo.length; o++) oe(Yo[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (o = r);
                break;
              case "details":
                oe("toggle", e), (o = r);
                break;
              case "input":
                cp(e, r), (o = Wu(e, r)), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = fe({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                fp(e, r), (o = Gu(e, r)), oe("invalid", e);
                break;
              default:
                o = r;
            }
            Qu(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Kg(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Wg(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && pi(e, l)
                    : typeof l == "number" && pi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (fi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && oe("scroll", e)
                      : l != null && ud(e, i, l, s));
              }
            switch (n) {
              case "input":
                as(e), dp(e, r, !1);
                break;
              case "textarea":
                as(e), pp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? eo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      eo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = aa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) gy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = lr(bi.current)), lr(Yt.current), gs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ht] = t),
            (i = r.nodeValue !== n) && ((e = dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ms(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ms(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ht] = t),
            (t.stateNode = r);
      }
      return Ve(t), null;
    case 13:
      if (
        (ie(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && ct !== null && t.mode & 1 && !(t.flags & 128))
          _0(), fo(), (t.flags |= 98560), (i = !1);
        else if (((i = gs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(M(317));
            i[Ht] = t;
          } else
            fo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ve(t), (i = !1);
        } else It !== null && (Mc(It), (It = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? Ee === 0 && (Ee = 3) : Hd())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null);
    case 4:
      return (
        ho(), Cc(e, t), e === null && wi(t.stateNode.containerInfo), Ve(t), null
      );
    case 10:
      return Rd(t.type._context), Ve(t), null;
    case 17:
      return rt(t.type) && la(), Ve(t), null;
    case 19:
      if ((ie(ue), (i = t.memoizedState), i === null)) return Ve(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Do(i, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ma(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Do(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            xe() > go &&
            ((t.flags |= 128), (r = !0), Do(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ma(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Do(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
            )
              return Ve(t), null;
          } else
            2 * xe() - i.renderingStartTime > go &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Do(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = xe()),
          (t.sibling = null),
          (n = ue.current),
          ne(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ve(t), null);
    case 22:
    case 23:
      return (
        Wd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function bS(e, t) {
  switch ((bd(t), t.tag)) {
    case 1:
      return (
        rt(t.type) && la(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ho(),
        ie(nt),
        ie(Ye),
        _d(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ad(t), null;
    case 13:
      if (
        (ie(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        fo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ue), null;
    case 4:
      return ho(), null;
    case 10:
      return Rd(t.type._context), null;
    case 22:
    case 23:
      return Wd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xs = !1,
  We = !1,
  PS = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function kc(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var nh = !1;
function TS(e, t) {
  if (((sc = oa), (e = w0()), Cd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ac = { focusedElem: e, selectionRange: n }, oa = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    k = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Nt(t.type, x),
                      k
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (w) {
          me(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (y = nh), (nh = !1), y;
}
function ri(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && kc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ka(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ht], delete t[Ci], delete t[cc], delete t[lS], delete t[uS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = aa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pc(e, t, n), e = e.sibling; e !== null; ) Pc(e, t, n), (e = e.sibling);
}
function Tc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tc(e, t, n), e = e.sibling; e !== null; ) Tc(e, t, n), (e = e.sibling);
}
var _e = null,
  Ot = !1;
function kn(e, t, n) {
  for (n = n.child; n !== null; ) xy(e, t, n), (n = n.sibling);
}
function xy(e, t, n) {
  if (Gt && typeof Gt.onCommitFiberUnmount == "function")
    try {
      Gt.onCommitFiberUnmount(Da, n);
    } catch {}
  switch (n.tag) {
    case 5:
      We || Gr(n, t);
    case 6:
      var r = _e,
        o = Ot;
      (_e = null),
        kn(e, t, n),
        (_e = r),
        (Ot = o),
        _e !== null &&
          (Ot
            ? ((e = _e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null &&
        (Ot
          ? ((e = _e),
            (n = n.stateNode),
            e.nodeType === 8
              ? su(e.parentNode, n)
              : e.nodeType === 1 && su(e, n),
            yi(e))
          : su(_e, n.stateNode));
      break;
    case 4:
      (r = _e),
        (o = Ot),
        (_e = n.stateNode.containerInfo),
        (Ot = !0),
        kn(e, t, n),
        (_e = r),
        (Ot = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !We &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && kc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      kn(e, t, n);
      break;
    case 1:
      if (
        !We &&
        (Gr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      kn(e, t, n);
      break;
    case 21:
      kn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((We = (r = We) || n.memoizedState !== null), kn(e, t, n), (We = r))
        : kn(e, t, n);
      break;
    default:
      kn(e, t, n);
  }
}
function oh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new PS()),
      t.forEach(function (r) {
        var o = OS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function _t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (_e = a.stateNode), (Ot = !1);
              break e;
            case 3:
              (_e = a.stateNode.containerInfo), (Ot = !0);
              break e;
            case 4:
              (_e = a.stateNode.containerInfo), (Ot = !0);
              break e;
          }
          a = a.return;
        }
        if (_e === null) throw Error(M(160));
        xy(i, s, o), (_e = null), (Ot = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wy(t, e), (t = t.sibling);
}
function wy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_t(t, e), Vt(e), r & 4)) {
        try {
          ri(3, e, e.return), Ka(3, e);
        } catch (x) {
          me(e, e.return, x);
        }
        try {
          ri(5, e, e.return);
        } catch (x) {
          me(e, e.return, x);
        }
      }
      break;
    case 1:
      _t(t, e), Vt(e), r & 512 && n !== null && Gr(n, n.return);
      break;
    case 5:
      if (
        (_t(t, e),
        Vt(e),
        r & 512 && n !== null && Gr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          pi(o, "");
        } catch (x) {
          me(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Vg(o, i),
              Xu(a, s);
            var u = Xu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Kg(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Wg(o, d)
                : c === "children"
                ? pi(o, d)
                : ud(o, c, d, u);
            }
            switch (a) {
              case "input":
                Hu(o, i);
                break;
              case "textarea":
                Bg(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? eo(o, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? eo(o, !!i.multiple, i.defaultValue, !0)
                      : eo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ci] = i;
          } catch (x) {
            me(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((_t(t, e), Vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          me(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (_t(t, e), Vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          yi(t.containerInfo);
        } catch (x) {
          me(e, e.return, x);
        }
      break;
    case 4:
      _t(t, e), Vt(e);
      break;
    case 13:
      _t(t, e),
        Vt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Bd = xe())),
        r & 4 && oh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((We = (u = We) || c), _t(t, e), (We = u)) : _t(t, e),
        Vt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (_ = e, c = e.child; c !== null; ) {
            for (d = _ = c; _ !== null; ) {
              switch (((f = _), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ri(4, f, f.return);
                  break;
                case 1:
                  Gr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      me(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Gr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    sh(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (_ = v)) : sh(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Hg("display", s)));
              } catch (x) {
                me(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                me(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      _t(t, e), Vt(e), r & 4 && oh(e);
      break;
    case 21:
      break;
    default:
      _t(t, e), Vt(e);
  }
}
function Vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (pi(o, ""), (r.flags &= -33));
          var i = rh(e);
          Tc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = rh(e);
          Pc(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      me(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ES(e, t, n) {
  (_ = e), Sy(e);
}
function Sy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || xs;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || We;
        a = xs;
        var u = We;
        if (((xs = s), (We = l) && !u))
          for (_ = o; _ !== null; )
            (s = _),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ah(o)
                : l !== null
                ? ((l.return = s), (_ = l))
                : ah(o);
        for (; i !== null; ) (_ = i), Sy(i), (i = i.sibling);
        (_ = o), (xs = a), (We = u);
      }
      ih(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : ih(e);
  }
}
function ih(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || Ka(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !We)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Bp(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && yi(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        We || (t.flags & 512 && bc(t));
      } catch (f) {
        me(t, t.return, f);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function sh(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ah(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ka(4, t);
          } catch (l) {
            me(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              me(t, o, l);
            }
          }
          var i = t.return;
          try {
            bc(t);
          } catch (l) {
            me(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bc(t);
          } catch (l) {
            me(t, s, l);
          }
      }
    } catch (l) {
      me(t, t.return, l);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var RS = Math.ceil,
  va = wn.ReactCurrentDispatcher,
  zd = wn.ReactCurrentOwner,
  Tt = wn.ReactCurrentBatchConfig,
  Y = 0,
  $e = null,
  ke = null,
  Ie = 0,
  at = 0,
  Yr = Xn(0),
  Ee = 0,
  Ri = null,
  vr = 0,
  Ga = 0,
  Vd = 0,
  oi = null,
  et = null,
  Bd = 0,
  go = 1 / 0,
  nn = null,
  xa = !1,
  Ec = null,
  Fn = null,
  ws = !1,
  An = null,
  wa = 0,
  ii = 0,
  Rc = null,
  Vs = -1,
  Bs = 0;
function qe() {
  return Y & 6 ? xe() : Vs !== -1 ? Vs : (Vs = xe());
}
function zn(e) {
  return e.mode & 1
    ? Y & 2 && Ie !== 0
      ? Ie & -Ie
      : dS.transition !== null
      ? (Bs === 0 && (Bs = o0()), Bs)
      : ((e = J),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : d0(e.type))),
        e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < ii) throw ((ii = 0), (Rc = null), Error(M(185)));
  zi(e, n, r),
    (!(Y & 2) || e !== $e) &&
      (e === $e && (!(Y & 2) && (Ga |= n), Ee === 4 && Mn(e, Ie)),
      ot(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((go = xe() + 500), Ua && qn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  dw(e, t);
  var r = ra(e, e === $e ? Ie : 0);
  if (r === 0)
    n !== null && gp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gp(n), t === 1))
      e.tag === 0 ? cS(lh.bind(null, e)) : M0(lh.bind(null, e)),
        sS(function () {
          !(Y & 6) && qn();
        }),
        (n = null);
    else {
      switch (i0(r)) {
        case 1:
          n = hd;
          break;
        case 4:
          n = n0;
          break;
        case 16:
          n = na;
          break;
        case 536870912:
          n = r0;
          break;
        default:
          n = na;
      }
      n = jy(n, Cy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cy(e, t) {
  if (((Vs = -1), (Bs = 0), Y & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (io() && e.callbackNode !== n) return null;
  var r = ra(e, e === $e ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Sa(e, r);
  else {
    t = r;
    var o = Y;
    Y |= 2;
    var i = by();
    ($e !== e || Ie !== t) && ((nn = null), (go = xe() + 500), fr(e, t));
    do
      try {
        $S();
        break;
      } catch (a) {
        ky(e, a);
      }
    while (!0);
    Ed(),
      (va.current = i),
      (Y = o),
      ke !== null ? (t = 0) : (($e = null), (Ie = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = tc(e)), o !== 0 && ((r = o), (t = jc(e, o)))), t === 1)
    )
      throw ((n = Ri), fr(e, 0), Mn(e, r), ot(e, xe()), n);
    if (t === 6) Mn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !jS(o) &&
          ((t = Sa(e, r)),
          t === 2 && ((i = tc(e)), i !== 0 && ((r = i), (t = jc(e, i)))),
          t === 1))
      )
        throw ((n = Ri), fr(e, 0), Mn(e, r), ot(e, xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          tr(e, et, nn);
          break;
        case 3:
          if (
            (Mn(e, r), (r & 130023424) === r && ((t = Bd + 500 - xe()), 10 < t))
          ) {
            if (ra(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = uc(tr.bind(null, e, et, nn), t);
            break;
          }
          tr(e, et, nn);
          break;
        case 4:
          if ((Mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Dt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = xe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * RS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = uc(tr.bind(null, e, et, nn), r);
            break;
          }
          tr(e, et, nn);
          break;
        case 5:
          tr(e, et, nn);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return ot(e, xe()), e.callbackNode === n ? Cy.bind(null, e) : null;
}
function jc(e, t) {
  var n = oi;
  return (
    e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
    (e = Sa(e, t)),
    e !== 2 && ((t = et), (et = n), t !== null && Mc(t)),
    e
  );
}
function Mc(e) {
  et === null ? (et = e) : et.push.apply(et, e);
}
function jS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!zt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mn(e, t) {
  for (
    t &= ~Vd,
      t &= ~Ga,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lh(e) {
  if (Y & 6) throw Error(M(327));
  io();
  var t = ra(e, 0);
  if (!(t & 1)) return ot(e, xe()), null;
  var n = Sa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tc(e);
    r !== 0 && ((t = r), (n = jc(e, r)));
  }
  if (n === 1) throw ((n = Ri), fr(e, 0), Mn(e, t), ot(e, xe()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tr(e, et, nn),
    ot(e, xe()),
    null
  );
}
function Ud(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((go = xe() + 500), Ua && qn());
  }
}
function xr(e) {
  An !== null && An.tag === 0 && !(Y & 6) && io();
  var t = Y;
  Y |= 1;
  var n = Tt.transition,
    r = J;
  try {
    if (((Tt.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (Tt.transition = n), (Y = t), !(Y & 6) && qn();
  }
}
function Wd() {
  (at = Yr.current), ie(Yr);
}
function fr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), iS(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((bd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && la();
          break;
        case 3:
          ho(), ie(nt), ie(Ye), _d();
          break;
        case 5:
          Ad(r);
          break;
        case 4:
          ho();
          break;
        case 13:
          ie(ue);
          break;
        case 19:
          ie(ue);
          break;
        case 10:
          Rd(r.type._context);
          break;
        case 22:
        case 23:
          Wd();
      }
      n = n.return;
    }
  if (
    (($e = e),
    (ke = e = Vn(e.current, null)),
    (Ie = at = t),
    (Ee = 0),
    (Ri = null),
    (Vd = Ga = vr = 0),
    (et = oi = null),
    ar !== null)
  ) {
    for (t = 0; t < ar.length; t++)
      if (((n = ar[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    ar = null;
  }
  return e;
}
function ky(e, t) {
  do {
    var n = ke;
    try {
      if ((Ed(), (Ds.current = ya), ga)) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ga = !1;
      }
      if (
        ((yr = 0),
        (Me = Te = de = null),
        (ni = !1),
        (Pi = 0),
        (zd.current = null),
        n === null || n.return === null)
      ) {
        (Ee = 1), (Ri = t), (ke = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ie),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Qp(s);
          if (v !== null) {
            (v.flags &= -257),
              Xp(v, s, a, i, t),
              v.mode & 1 && Yp(i, u, t),
              (t = v),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Yp(i, u, t), Hd();
              break e;
            }
            l = Error(M(426));
          }
        } else if (ae && a.mode & 1) {
          var k = Qp(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Xp(k, s, a, i, t),
              Pd(mo(l, a));
            break e;
          }
        }
        (i = l = mo(l, a)),
          Ee !== 4 && (Ee = 2),
          oi === null ? (oi = [i]) : oi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = sy(i, l, t);
              Vp(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Fn === null || !Fn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = ay(i, a, t);
                Vp(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ty(n);
    } catch (C) {
      (t = C), ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function by() {
  var e = va.current;
  return (va.current = ya), e === null ? ya : e;
}
function Hd() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    $e === null || (!(vr & 268435455) && !(Ga & 268435455)) || Mn($e, Ie);
}
function Sa(e, t) {
  var n = Y;
  Y |= 2;
  var r = by();
  ($e !== e || Ie !== t) && ((nn = null), fr(e, t));
  do
    try {
      MS();
      break;
    } catch (o) {
      ky(e, o);
    }
  while (!0);
  if ((Ed(), (Y = n), (va.current = r), ke !== null)) throw Error(M(261));
  return ($e = null), (Ie = 0), Ee;
}
function MS() {
  for (; ke !== null; ) Py(ke);
}
function $S() {
  for (; ke !== null && !nw(); ) Py(ke);
}
function Py(e) {
  var t = Ry(e.alternate, e, at);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ty(e) : (ke = t),
    (zd.current = null);
}
function Ty(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bS(n, t)), n !== null)) {
        (n.flags &= 32767), (ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (ke = null);
        return;
      }
    } else if (((n = kS(n, t, at)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function tr(e, t, n) {
  var r = J,
    o = Tt.transition;
  try {
    (Tt.transition = null), (J = 1), AS(e, t, n, r);
  } finally {
    (Tt.transition = o), (J = r);
  }
  return null;
}
function AS(e, t, n, r) {
  do io();
  while (An !== null);
  if (Y & 6) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (fw(e, i),
    e === $e && ((ke = $e = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ws ||
      ((ws = !0),
      jy(na, function () {
        return io(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Tt.transition), (Tt.transition = null);
    var s = J;
    J = 1;
    var a = Y;
    (Y |= 4),
      (zd.current = null),
      TS(e, n),
      wy(n, e),
      Zw(ac),
      (oa = !!sc),
      (ac = sc = null),
      (e.current = n),
      ES(n),
      rw(),
      (Y = a),
      (J = s),
      (Tt.transition = i);
  } else e.current = n;
  if (
    (ws && ((ws = !1), (An = e), (wa = o)),
    (i = e.pendingLanes),
    i === 0 && (Fn = null),
    sw(n.stateNode),
    ot(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xa) throw ((xa = !1), (e = Ec), (Ec = null), e);
  return (
    wa & 1 && e.tag !== 0 && io(),
    (i = e.pendingLanes),
    i & 1 ? (e === Rc ? ii++ : ((ii = 0), (Rc = e))) : (ii = 0),
    qn(),
    null
  );
}
function io() {
  if (An !== null) {
    var e = i0(wa),
      t = Tt.transition,
      n = J;
    try {
      if (((Tt.transition = null), (J = 16 > e ? 16 : e), An === null))
        var r = !1;
      else {
        if (((e = An), (An = null), (wa = 0), Y & 6)) throw Error(M(331));
        var o = Y;
        for (Y |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            s = i.child;
          if (_.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (_ = u; _ !== null; ) {
                  var c = _;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ri(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (_ = d);
                  else
                    for (; _ !== null; ) {
                      c = _;
                      var f = c.sibling,
                        v = c.return;
                      if ((yy(c), c === u)) {
                        _ = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (_ = f);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var k = x.sibling;
                    (x.sibling = null), (x = k);
                  } while (x !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (_ = s);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ri(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (_ = m);
                break e;
              }
              _ = i.return;
            }
        }
        var h = e.current;
        for (_ = h; _ !== null; ) {
          s = _;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (_ = g);
          else
            e: for (s = h; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ka(9, a);
                  }
                } catch (C) {
                  me(a, a.return, C);
                }
              if (a === s) {
                _ = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (_ = w);
                break e;
              }
              _ = a.return;
            }
        }
        if (
          ((Y = o), qn(), Gt && typeof Gt.onPostCommitFiberRoot == "function")
        )
          try {
            Gt.onPostCommitFiberRoot(Da, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (Tt.transition = t);
    }
  }
  return !1;
}
function uh(e, t, n) {
  (t = mo(n, t)),
    (t = sy(e, t, 1)),
    (e = Dn(e, t, 1)),
    (t = qe()),
    e !== null && (zi(e, 1, t), ot(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) uh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Fn === null || !Fn.has(r)))
        ) {
          (e = mo(n, e)),
            (e = ay(t, e, 1)),
            (t = Dn(t, e, 1)),
            (e = qe()),
            t !== null && (zi(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _S(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    $e === e &&
      (Ie & n) === n &&
      (Ee === 4 || (Ee === 3 && (Ie & 130023424) === Ie && 500 > xe() - Bd)
        ? fr(e, 0)
        : (Vd |= n)),
    ot(e, t);
}
function Ey(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cs), (cs <<= 1), !(cs & 130023424) && (cs = 4194304))
      : (t = 1));
  var n = qe();
  (e = yn(e, t)), e !== null && (zi(e, t, n), ot(e, n));
}
function NS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ey(e, n);
}
function OS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), Ey(e, n);
}
var Ry;
Ry = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (tt = !1), CS(e, t, n);
      tt = !!(e.flags & 131072);
    }
  else (tt = !1), ae && t.flags & 1048576 && $0(t, da, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zs(e, t), (e = t.pendingProps);
      var o = co(t, Ye.current);
      oo(t, n), (o = Od(null, t, r, e, o, n));
      var i = Id();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            rt(r) ? ((i = !0), ua(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Md(t),
            (o.updater = Wa),
            (t.stateNode = o),
            (o._reactInternals = t),
            gc(t, r, e, n),
            (t = xc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ae && i && kd(t), Xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = LS(r)),
          (e = Nt(r, e)),
          o)
        ) {
          case 0:
            t = vc(null, t, r, e, n);
            break e;
          case 1:
            t = Jp(null, t, r, e, n);
            break e;
          case 11:
            t = qp(null, t, r, e, n);
            break e;
          case 14:
            t = Zp(null, t, r, Nt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        vc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        Jp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dy(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          O0(e, t),
          ha(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = mo(Error(M(423)), t)), (t = eh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = mo(Error(M(424)), t)), (t = eh(e, t, r, n, o));
            break e;
          } else
            for (
              ct = Ln(t.stateNode.containerInfo.firstChild),
                dt = t,
                ae = !0,
                It = null,
                n = F0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fo(), r === o)) {
            t = vn(e, t, n);
            break e;
          }
          Xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        z0(t),
        e === null && pc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        lc(r, o) ? (s = null) : i !== null && lc(r, i) && (t.flags |= 32),
        cy(e, t),
        Xe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && pc(t), null;
    case 13:
      return fy(e, t, n);
    case 4:
      return (
        $d(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = po(t, null, r, n)) : Xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        qp(e, t, r, o, n)
      );
    case 7:
      return Xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ne(fa, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (zt(i.value, s)) {
            if (i.children === o.children && !nt.current) {
              t = vn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = cn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      hc(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  hc(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Xe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        oo(t, n),
        (o = Et(o)),
        (r = r(o)),
        (t.flags |= 1),
        Xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Nt(r, t.pendingProps)),
        (o = Nt(r.type, o)),
        Zp(e, t, r, o, n)
      );
    case 15:
      return ly(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        zs(e, t),
        (t.tag = 1),
        rt(r) ? ((e = !0), ua(t)) : (e = !1),
        oo(t, n),
        L0(t, r, o),
        gc(t, r, o, n),
        xc(null, t, r, !0, e, n)
      );
    case 19:
      return py(e, t, n);
    case 22:
      return uy(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function jy(e, t) {
  return t0(e, t);
}
function IS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pt(e, t, n, r) {
  return new IS(e, t, n, r);
}
function Kd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function LS(e) {
  if (typeof e == "function") return Kd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dd)) return 11;
    if (e === fd) return 14;
  }
  return 2;
}
function Vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Us(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Kd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Dr:
        return pr(n.children, o, i, t);
      case cd:
        (s = 8), (o |= 8);
        break;
      case zu:
        return (
          (e = Pt(12, n, t, o | 2)), (e.elementType = zu), (e.lanes = i), e
        );
      case Vu:
        return (e = Pt(13, n, t, o)), (e.elementType = Vu), (e.lanes = i), e;
      case Bu:
        return (e = Pt(19, n, t, o)), (e.elementType = Bu), (e.lanes = i), e;
      case Dg:
        return Ya(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ig:
              s = 10;
              break e;
            case Lg:
              s = 9;
              break e;
            case dd:
              s = 11;
              break e;
            case fd:
              s = 14;
              break e;
            case Pn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function pr(e, t, n, r) {
  return (e = Pt(7, e, r, t)), (e.lanes = n), e;
}
function Ya(e, t, n, r) {
  return (
    (e = Pt(22, e, r, t)),
    (e.elementType = Dg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hu(e, t, n) {
  return (e = Pt(6, e, null, t)), (e.lanes = n), e;
}
function mu(e, t, n) {
  return (
    (t = Pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function DS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Gd(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new DS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Pt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Md(i),
    e
  );
}
function FS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Lr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function My(e) {
  if (!e) return Hn;
  e = e._reactInternals;
  e: {
    if (Cr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return j0(e, n, t);
  }
  return t;
}
function $y(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Gd(n, r, !0, e, o, i, s, a, l)),
    (e.context = My(null)),
    (n = e.current),
    (r = qe()),
    (o = zn(n)),
    (i = cn(r, o)),
    (i.callback = t ?? null),
    Dn(n, i, o),
    (e.current.lanes = o),
    zi(e, o, r),
    ot(e, r),
    e
  );
}
function Qa(e, t, n, r) {
  var o = t.current,
    i = qe(),
    s = zn(o);
  return (
    (n = My(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = cn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dn(o, t, s)),
    e !== null && (Ft(e, o, s, i), Ls(e, o, s)),
    s
  );
}
function Ca(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ch(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yd(e, t) {
  ch(e, t), (e = e.alternate) && ch(e, t);
}
function zS() {
  return null;
}
var Ay =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qd(e) {
  this._internalRoot = e;
}
Xa.prototype.render = Qd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Qa(e, t, null, null);
};
Xa.prototype.unmount = Qd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xr(function () {
      Qa(null, e, null, null);
    }),
      (t[gn] = null);
  }
};
function Xa(e) {
  this._internalRoot = e;
}
Xa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = l0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++);
    jn.splice(n, 0, e), n === 0 && c0(e);
  }
};
function Xd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function dh() {}
function VS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ca(s);
        i.call(u);
      };
    }
    var s = $y(t, r, e, 0, null, !1, !1, "", dh);
    return (
      (e._reactRootContainer = s),
      (e[gn] = s.current),
      wi(e.nodeType === 8 ? e.parentNode : e),
      xr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ca(l);
      a.call(u);
    };
  }
  var l = Gd(e, 0, !1, null, null, !1, !1, "", dh);
  return (
    (e._reactRootContainer = l),
    (e[gn] = l.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    xr(function () {
      Qa(t, l, n, r);
    }),
    l
  );
}
function Za(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ca(s);
        a.call(l);
      };
    }
    Qa(t, s, e, o);
  } else s = VS(n, t, e, o, r);
  return Ca(s);
}
s0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Go(t.pendingLanes);
        n !== 0 &&
          (md(t, n | 1), ot(t, xe()), !(Y & 6) && ((go = xe() + 500), qn()));
      }
      break;
    case 13:
      xr(function () {
        var r = yn(e, 1);
        if (r !== null) {
          var o = qe();
          Ft(r, e, 1, o);
        }
      }),
        Yd(e, 1);
  }
};
gd = function (e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = qe();
      Ft(t, e, 134217728, n);
    }
    Yd(e, 134217728);
  }
};
a0 = function (e) {
  if (e.tag === 13) {
    var t = zn(e),
      n = yn(e, t);
    if (n !== null) {
      var r = qe();
      Ft(n, e, t, r);
    }
    Yd(e, t);
  }
};
l0 = function () {
  return J;
};
u0 = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
Zu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Hu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ba(r);
            if (!o) throw Error(M(90));
            zg(r), Hu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Bg(e, n);
      break;
    case "select":
      (t = n.value), t != null && eo(e, !!n.multiple, t, !1);
  }
};
Qg = Ud;
Xg = xr;
var BS = { usingClientEntryPoint: !1, Events: [Bi, Br, Ba, Gg, Yg, Ud] },
  Fo = {
    findFiberByHostInstance: sr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  US = {
    bundleType: Fo.bundleType,
    version: Fo.version,
    rendererPackageName: Fo.rendererPackageName,
    rendererConfig: Fo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fo.findFiberByHostInstance || zS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ss.isDisabled && Ss.supportsFiber)
    try {
      (Da = Ss.inject(US)), (Gt = Ss);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BS;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xd(t)) throw Error(M(200));
  return FS(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!Xd(e)) throw Error(M(299));
  var n = !1,
    r = "",
    o = Ay;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Gd(e, 1, !1, null, null, n, !1, r, o)),
    (e[gn] = t.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    new Qd(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = Jg(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return xr(e);
};
mt.hydrate = function (e, t, n) {
  if (!qa(t)) throw Error(M(200));
  return Za(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!Xd(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Ay;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = $y(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[gn] = t.current),
    wi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Xa(t);
};
mt.render = function (e, t, n) {
  if (!qa(t)) throw Error(M(200));
  return Za(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!qa(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (xr(function () {
        Za(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gn] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = Ud;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qa(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Za(e, t, n, !1, r);
};
mt.version = "18.2.0-next-9e3b772b8-20220608";
function _y() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y);
    } catch (e) {
      console.error(e);
    }
}
_y(), ($g.exports = mt);
var qd = $g.exports;
const Cs = wg(qd);
var fh = qd;
(Du.createRoot = fh.createRoot), (Du.hydrateRoot = fh.hydrateRoot);
const WS = { black: "#000", white: "#fff" },
  ji = WS,
  HS = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Er = HS,
  KS = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Rr = KS,
  GS = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  jr = GS,
  YS = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Mr = YS,
  QS = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  $r = QS,
  XS = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  zo = XS,
  qS = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  ZS = qS;
function Mi(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const JS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Mi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yo = "$$material";
function b() {
  return (
    (b = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    b.apply(this, arguments)
  );
}
function U(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ny(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var eC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  tC = Ny(function (e) {
    return (
      eC.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function nC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function rC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var oC = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(rC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = nC(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Be = "-ms-",
  ka = "-moz-",
  X = "-webkit-",
  Oy = "comm",
  Zd = "rule",
  Jd = "decl",
  iC = "@import",
  Iy = "@keyframes",
  sC = "@layer",
  aC = Math.abs,
  Ja = String.fromCharCode,
  lC = Object.assign;
function uC(e, t) {
  return Oe(e, 0) ^ 45
    ? (((((((t << 2) ^ Oe(e, 0)) << 2) ^ Oe(e, 1)) << 2) ^ Oe(e, 2)) << 2) ^
        Oe(e, 3)
    : 0;
}
function Ly(e) {
  return e.trim();
}
function cC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function q(e, t, n) {
  return e.replace(t, n);
}
function $c(e, t) {
  return e.indexOf(t);
}
function Oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function $i(e, t, n) {
  return e.slice(t, n);
}
function Ut(e) {
  return e.length;
}
function ef(e) {
  return e.length;
}
function ks(e, t) {
  return t.push(e), e;
}
function dC(e, t) {
  return e.map(t).join("");
}
var el = 1,
  vo = 1,
  Dy = 0,
  it = 0,
  Ce = 0,
  ko = "";
function tl(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: el,
    column: vo,
    length: s,
    return: "",
  };
}
function Vo(e, t) {
  return lC(tl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function fC() {
  return Ce;
}
function pC() {
  return (
    (Ce = it > 0 ? Oe(ko, --it) : 0), vo--, Ce === 10 && ((vo = 1), el--), Ce
  );
}
function ft() {
  return (
    (Ce = it < Dy ? Oe(ko, it++) : 0), vo++, Ce === 10 && ((vo = 1), el++), Ce
  );
}
function Qt() {
  return Oe(ko, it);
}
function Ws() {
  return it;
}
function Wi(e, t) {
  return $i(ko, e, t);
}
function Ai(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fy(e) {
  return (el = vo = 1), (Dy = Ut((ko = e))), (it = 0), [];
}
function zy(e) {
  return (ko = ""), e;
}
function Hs(e) {
  return Ly(Wi(it - 1, Ac(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hC(e) {
  for (; (Ce = Qt()) && Ce < 33; ) ft();
  return Ai(e) > 2 || Ai(Ce) > 3 ? "" : " ";
}
function mC(e, t) {
  for (
    ;
    --t &&
    ft() &&
    !(Ce < 48 || Ce > 102 || (Ce > 57 && Ce < 65) || (Ce > 70 && Ce < 97));

  );
  return Wi(e, Ws() + (t < 6 && Qt() == 32 && ft() == 32));
}
function Ac(e) {
  for (; ft(); )
    switch (Ce) {
      case e:
        return it;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ac(Ce);
        break;
      case 40:
        e === 41 && Ac(e);
        break;
      case 92:
        ft();
        break;
    }
  return it;
}
function gC(e, t) {
  for (; ft() && e + Ce !== 57; ) if (e + Ce === 84 && Qt() === 47) break;
  return "/*" + Wi(t, it - 1) + "*" + Ja(e === 47 ? e : ft());
}
function yC(e) {
  for (; !Ai(Qt()); ) ft();
  return Wi(e, it);
}
function vC(e) {
  return zy(Ks("", null, null, null, [""], (e = Fy(e)), 0, [0], e));
}
function Ks(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      v = 0,
      y = 0,
      x = 1,
      k = 1,
      m = 1,
      h = 0,
      g = "",
      w = o,
      C = i,
      T = r,
      P = g;
    k;

  )
    switch (((y = h), (h = ft()))) {
      case 40:
        if (y != 108 && Oe(P, d - 1) == 58) {
          $c((P += q(Hs(h), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Hs(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += hC(y);
        break;
      case 92:
        P += mC(Ws() - 1, 7);
        continue;
      case 47:
        switch (Qt()) {
          case 42:
          case 47:
            ks(xC(gC(ft(), Ws()), t, n), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * x:
        a[u++] = Ut(P) * m;
      case 125 * x:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            k = 0;
          case 59 + c:
            m == -1 && (P = q(P, /\f/g, "")),
              v > 0 &&
                Ut(P) - d &&
                ks(
                  v > 32
                    ? hh(P + ";", r, n, d - 1)
                    : hh(q(P, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (ks((T = ph(P, t, n, u, c, o, a, g, (w = []), (C = []), d)), i),
              h === 123)
            )
              if (c === 0) Ks(P, t, T, T, w, i, d, a, C);
              else
                switch (f === 99 && Oe(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ks(
                      e,
                      T,
                      T,
                      r && ks(ph(e, T, T, 0, 0, o, a, g, o, (w = []), d), C),
                      o,
                      C,
                      d,
                      a,
                      r ? w : C
                    );
                    break;
                  default:
                    Ks(P, T, T, T, [""], C, 0, a, C);
                }
        }
        (u = c = v = 0), (x = m = 1), (g = P = ""), (d = s);
        break;
      case 58:
        (d = 1 + Ut(P)), (v = y);
      default:
        if (x < 1) {
          if (h == 123) --x;
          else if (h == 125 && x++ == 0 && pC() == 125) continue;
        }
        switch (((P += Ja(h)), h * x)) {
          case 38:
            m = c > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Ut(P) - 1) * m), (m = 1);
            break;
          case 64:
            Qt() === 45 && (P += Hs(ft())),
              (f = Qt()),
              (c = d = Ut((g = P += yC(Ws())))),
              h++;
            break;
          case 45:
            y === 45 && Ut(P) == 2 && (x = 0);
        }
    }
  return i;
}
function ph(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], v = ef(f), y = 0, x = 0, k = 0;
    y < r;
    ++y
  )
    for (var m = 0, h = $i(e, d + 1, (d = aC((x = s[y])))), g = e; m < v; ++m)
      (g = Ly(x > 0 ? f[m] + " " + h : q(h, /&\f/g, f[m]))) && (l[k++] = g);
  return tl(e, t, n, o === 0 ? Zd : a, l, u, c);
}
function xC(e, t, n) {
  return tl(e, t, n, Oy, Ja(fC()), $i(e, 2, -2), 0);
}
function hh(e, t, n, r) {
  return tl(e, t, n, Jd, $i(e, 0, r), $i(e, r + 1, -1), r);
}
function so(e, t) {
  for (var n = "", r = ef(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function wC(e, t, n, r) {
  switch (e.type) {
    case sC:
      if (e.children.length) break;
    case iC:
    case Jd:
      return (e.return = e.return || e.value);
    case Oy:
      return "";
    case Iy:
      return (e.return = e.value + "{" + so(e.children, r) + "}");
    case Zd:
      e.value = e.props.join(",");
  }
  return Ut((n = so(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function SC(e) {
  var t = ef(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function CC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var kC = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Qt()), o === 38 && i === 12 && (n[r] = 1), !Ai(i);

    )
      ft();
    return Wi(t, it);
  },
  bC = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Ai(o)) {
        case 0:
          o === 38 && Qt() === 12 && (n[r] = 1), (t[r] += kC(it - 1, n, r));
          break;
        case 2:
          t[r] += Hs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Qt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ja(o);
      }
    while ((o = ft()));
    return t;
  },
  PC = function (t, n) {
    return zy(bC(Fy(t), n));
  },
  mh = new WeakMap(),
  TC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !mh.get(r)) &&
        !o
      ) {
        mh.set(t, !0);
        for (
          var i = [], s = PC(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  EC = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Vy(e, t) {
  switch (uC(e, t)) {
    case 5103:
      return X + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + ka + e + Be + e + e;
    case 6828:
    case 4268:
      return X + e + Be + e + e;
    case 6165:
      return X + e + Be + "flex-" + e + e;
    case 5187:
      return (
        X + e + q(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + Be + "flex-$1$2") + e
      );
    case 5443:
      return X + e + Be + "flex-item-" + q(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        X +
        e +
        Be +
        "flex-line-pack" +
        q(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return X + e + Be + q(e, "shrink", "negative") + e;
    case 5292:
      return X + e + Be + q(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        X +
        "box-" +
        q(e, "-grow", "") +
        X +
        e +
        Be +
        q(e, "grow", "positive") +
        e
      );
    case 4554:
      return X + q(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
      return (
        q(q(q(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return q(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return (
        q(
          q(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + Be + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        X +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ut(e) - 1 - t > 6)
        switch (Oe(e, t + 1)) {
          case 109:
            if (Oe(e, t + 4) !== 45) break;
          case 102:
            return (
              q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  X +
                  "$2-$3$1" +
                  ka +
                  (Oe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~$c(e, "stretch")
              ? Vy(q(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Oe(e, t + 1) !== 115) break;
    case 6444:
      switch (Oe(e, Ut(e) - 3 - (~$c(e, "!important") && 10))) {
        case 107:
          return q(e, ":", ":" + X) + e;
        case 101:
          return (
            q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                X +
                (Oe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                X +
                "$2$3$1" +
                Be +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Oe(e, t + 11)) {
        case 114:
          return X + e + Be + q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return X + e + Be + q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return X + e + Be + q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return X + e + Be + e + e;
  }
  return e;
}
var RC = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Jd:
          t.return = Vy(t.value, t.length);
          break;
        case Iy:
          return so([Vo(t, { value: q(t.value, "@", "@" + X) })], o);
        case Zd:
          if (t.length)
            return dC(t.props, function (i) {
              switch (cC(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return so(
                    [Vo(t, { props: [q(i, /:(read-\w+)/, ":" + ka + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return so(
                    [
                      Vo(t, {
                        props: [q(i, /:(plac\w+)/, ":" + X + "input-$1")],
                      }),
                      Vo(t, { props: [q(i, /:(plac\w+)/, ":" + ka + "$1")] }),
                      Vo(t, { props: [q(i, /:(plac\w+)/, Be + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  jC = [RC],
  By = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (x) {
        var k = x.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || jC,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (x) {
          for (
            var k = x.getAttribute("data-emotion").split(" "), m = 1;
            m < k.length;
            m++
          )
            i[k[m]] = !0;
          a.push(x);
        }
      );
    var l,
      u = [TC, EC];
    {
      var c,
        d = [
          wC,
          CC(function (x) {
            c.insert(x);
          }),
        ],
        f = SC(u.concat(o, d)),
        v = function (k) {
          return so(vC(k), f);
        };
      l = function (k, m, h, g) {
        (c = h),
          v(k ? k + "{" + m.styles + "}" : m.styles),
          g && (y.inserted[m.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new oC({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(a), y;
  },
  Uy = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ae = typeof Symbol == "function" && Symbol.for,
  tf = Ae ? Symbol.for("react.element") : 60103,
  nf = Ae ? Symbol.for("react.portal") : 60106,
  nl = Ae ? Symbol.for("react.fragment") : 60107,
  rl = Ae ? Symbol.for("react.strict_mode") : 60108,
  ol = Ae ? Symbol.for("react.profiler") : 60114,
  il = Ae ? Symbol.for("react.provider") : 60109,
  sl = Ae ? Symbol.for("react.context") : 60110,
  rf = Ae ? Symbol.for("react.async_mode") : 60111,
  al = Ae ? Symbol.for("react.concurrent_mode") : 60111,
  ll = Ae ? Symbol.for("react.forward_ref") : 60112,
  ul = Ae ? Symbol.for("react.suspense") : 60113,
  MC = Ae ? Symbol.for("react.suspense_list") : 60120,
  cl = Ae ? Symbol.for("react.memo") : 60115,
  dl = Ae ? Symbol.for("react.lazy") : 60116,
  $C = Ae ? Symbol.for("react.block") : 60121,
  AC = Ae ? Symbol.for("react.fundamental") : 60117,
  _C = Ae ? Symbol.for("react.responder") : 60118,
  NC = Ae ? Symbol.for("react.scope") : 60119;
function yt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case tf:
        switch (((e = e.type), e)) {
          case rf:
          case al:
          case nl:
          case ol:
          case rl:
          case ul:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sl:
              case ll:
              case dl:
              case cl:
              case il:
                return e;
              default:
                return t;
            }
        }
      case nf:
        return t;
    }
  }
}
function Wy(e) {
  return yt(e) === al;
}
ee.AsyncMode = rf;
ee.ConcurrentMode = al;
ee.ContextConsumer = sl;
ee.ContextProvider = il;
ee.Element = tf;
ee.ForwardRef = ll;
ee.Fragment = nl;
ee.Lazy = dl;
ee.Memo = cl;
ee.Portal = nf;
ee.Profiler = ol;
ee.StrictMode = rl;
ee.Suspense = ul;
ee.isAsyncMode = function (e) {
  return Wy(e) || yt(e) === rf;
};
ee.isConcurrentMode = Wy;
ee.isContextConsumer = function (e) {
  return yt(e) === sl;
};
ee.isContextProvider = function (e) {
  return yt(e) === il;
};
ee.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === tf;
};
ee.isForwardRef = function (e) {
  return yt(e) === ll;
};
ee.isFragment = function (e) {
  return yt(e) === nl;
};
ee.isLazy = function (e) {
  return yt(e) === dl;
};
ee.isMemo = function (e) {
  return yt(e) === cl;
};
ee.isPortal = function (e) {
  return yt(e) === nf;
};
ee.isProfiler = function (e) {
  return yt(e) === ol;
};
ee.isStrictMode = function (e) {
  return yt(e) === rl;
};
ee.isSuspense = function (e) {
  return yt(e) === ul;
};
ee.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === nl ||
    e === al ||
    e === ol ||
    e === rl ||
    e === ul ||
    e === MC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === dl ||
        e.$$typeof === cl ||
        e.$$typeof === il ||
        e.$$typeof === sl ||
        e.$$typeof === ll ||
        e.$$typeof === AC ||
        e.$$typeof === _C ||
        e.$$typeof === NC ||
        e.$$typeof === $C))
  );
};
ee.typeOf = yt;
Uy.exports = ee;
var OC = Uy.exports,
  Hy = OC,
  IC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  LC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ky = {};
Ky[Hy.ForwardRef] = IC;
Ky[Hy.Memo] = LC;
var DC = !0;
function FC(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Gy = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || DC === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Yy = function (t, n, r) {
    Gy(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function zC(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var VC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  BC = /[A-Z]|^ms/g,
  UC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Qy = function (t) {
    return t.charCodeAt(1) === 45;
  },
  gh = function (t) {
    return t != null && typeof t != "boolean";
  },
  gu = Ny(function (e) {
    return Qy(e) ? e : e.replace(BC, "-$&").toLowerCase();
  }),
  yh = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(UC, function (r, o, i) {
            return (Wt = { name: o, styles: i, next: Wt }), o;
          });
    }
    return VC[t] !== 1 && !Qy(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function _i(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Wt = { name: n.name, styles: n.styles, next: Wt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Wt = { name: r.name, styles: r.styles, next: Wt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return WC(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Wt,
          s = n(e);
        return (Wt = i), _i(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function WC(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += _i(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : gh(s) && (r += gu(i) + ":" + yh(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          gh(s[a]) && (r += gu(i) + ":" + yh(i, s[a]) + ";");
      else {
        var l = _i(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += gu(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var vh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Wt,
  of = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Wt = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += _i(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += _i(r, n, t[a])), o && (i += s[a]);
    vh.lastIndex = 0;
    for (var l = "", u; (u = vh.exec(i)) !== null; ) l += "-" + u[1];
    var c = zC(i) + l;
    return { name: c, styles: i, next: Wt };
  },
  HC = function (t) {
    return t();
  },
  Xy = Lu.useInsertionEffect ? Lu.useInsertionEffect : !1,
  KC = Xy || HC,
  xh = Xy || S.useLayoutEffect,
  qy = S.createContext(typeof HTMLElement < "u" ? By({ key: "css" }) : null),
  GC = qy.Provider,
  Zy = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(qy);
      return t(n, o, r);
    });
  },
  Hi = S.createContext({}),
  yu = { exports: {} },
  wh;
function Jy() {
  return (
    wh ||
      ((wh = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(yu)),
    yu.exports
  );
}
Jy();
var YC = Zy(function (e, t) {
  var n = e.styles,
    r = of([n], void 0, S.useContext(Hi)),
    o = S.useRef();
  return (
    xh(
      function () {
        var i = t.key + "-global",
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    xh(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && Yy(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert("", r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function Ki() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return of(t);
}
var kr = function () {
    var t = Ki.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  QC = tC,
  XC = function (t) {
    return t !== "theme";
  },
  Sh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? QC : XC;
  },
  Ch = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  qC = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Gy(n, r, o),
      KC(function () {
        return Yy(n, r, o);
      }),
      null
    );
  },
  ZC = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Ch(t, n, r),
      l = a || Sh(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, v = 1; v < f; v++) d.push(c[v], c[0][v]);
      }
      var y = Zy(function (x, k, m) {
        var h = (u && x.as) || o,
          g = "",
          w = [],
          C = x;
        if (x.theme == null) {
          C = {};
          for (var T in x) C[T] = x[T];
          C.theme = S.useContext(Hi);
        }
        typeof x.className == "string"
          ? (g = FC(k.registered, w, x.className))
          : x.className != null && (g = x.className + " ");
        var P = of(d.concat(w), k.registered, C);
        (g += k.key + "-" + P.name), s !== void 0 && (g += " " + s);
        var E = u && a === void 0 ? Sh(h) : l,
          $ = {};
        for (var j in x) (u && j === "as") || (E(j) && ($[j] = x[j]));
        return (
          ($.className = g),
          ($.ref = m),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(qC, {
              cache: k,
              serialized: P,
              isStringTag: typeof h == "string",
            }),
            S.createElement(h, $)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = d),
        (y.__emotion_forwardProp = a),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (y.withComponent = function (x, k) {
          return e(x, b({}, n, k, { shouldForwardProp: Ch(y, k, !0) })).apply(
            void 0,
            d
          );
        }),
        y
      );
    };
  },
  JC = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  _c = ZC.bind();
JC.forEach(function (e) {
  _c[e] = _c(e);
});
let Nc;
typeof document == "object" && (Nc = By({ key: "css", prepend: !0 }));
function ek(e) {
  const { injectFirst: t, children: n } = e;
  return t && Nc ? p.jsx(GC, { value: Nc, children: n }) : n;
}
function tk(e) {
  return e == null || Object.keys(e).length === 0;
}
function nk(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(tk(o) ? n : o) : t;
  return p.jsx(YC, { styles: r });
}
function sf(e, t) {
  return _c(e, t);
}
const ev = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  rk = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: nk,
        StyledEngineProvider: ek,
        ThemeContext: Hi,
        css: Ki,
        default: sf,
        internal_processStyles: ev,
        keyframes: kr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function sn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function tv(e) {
  if (!sn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = tv(e[n]);
    }),
    t
  );
}
function Xt(e, t, n = { clone: !0 }) {
  const r = n.clone ? b({}, e) : e;
  return (
    sn(e) &&
      sn(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (sn(t[o]) && o in e && sn(e[o])
            ? (r[o] = Xt(e[o], t[o], n))
            : n.clone
            ? (r[o] = sn(t[o]) ? tv(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
const ok = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xt, isPlainObject: sn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ik = ["values", "unit", "step"],
  sk = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => b({}, n, { [r.key]: r.val }), {})
    );
  };
function nv(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = U(e, ik),
    i = sk(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, v) {
    const y = s.indexOf(v);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : v) - r / 100
    }${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const v = s.indexOf(f);
    return v === 0
      ? a(s[1])
      : v === s.length - 1
      ? l(s[v])
      : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return b(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const ak = { borderRadius: 4 },
  lk = ak;
function si(e, t) {
  return t ? Xt(e, t, { clone: !1 }) : e;
}
const af = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  kh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${af[e]}px)`,
  };
function jt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || kh;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || kh;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || af).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function uk(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function ck(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function dk(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function fl({ values: e, breakpoints: t, base: n }) {
  const r = n || dk(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
        ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
        : (s[a] = e),
      s
    ),
    {}
  );
}
function B(e) {
  if (typeof e != "string") throw new Error(Mi(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const fk = Object.freeze(
  Object.defineProperty({ __proto__: null, default: B }, Symbol.toStringTag, {
    value: "Module",
  })
);
function pl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function ba(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = pl(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function we(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = pl(l, r) || {};
      return jt(s, a, (d) => {
        let f = ba(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = ba(u, o, `${t}${d === "default" ? "" : B(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function pk(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const hk = { m: "margin", p: "padding" },
  mk = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  bh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  gk = pk((e) => {
    if (e.length > 2)
      if (bh[e]) e = bh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = hk[t],
      o = mk[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  lf = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  uf = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...lf, ...uf];
function Gi(e, t, n, r) {
  var o;
  const i = (o = pl(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function rv(e) {
  return Gi(e, "spacing", 8);
}
function Yi(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function yk(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Yi(t, n)), r), {});
}
function vk(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = gk(n),
    i = yk(o, r),
    s = e[n];
  return jt(e, s, i);
}
function ov(e, t) {
  const n = rv(e.theme);
  return Object.keys(e)
    .map((r) => vk(e, t, r, n))
    .reduce(si, {});
}
function pe(e) {
  return ov(e, lf);
}
pe.propTypes = {};
pe.filterProps = lf;
function he(e) {
  return ov(e, uf);
}
he.propTypes = {};
he.filterProps = uf;
function xk(e = 8) {
  if (e.mui) return e;
  const t = rv({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function hl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? si(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function bt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $t(e, t) {
  return we({ prop: e, themeKey: "borders", transform: t });
}
const wk = $t("border", bt),
  Sk = $t("borderTop", bt),
  Ck = $t("borderRight", bt),
  kk = $t("borderBottom", bt),
  bk = $t("borderLeft", bt),
  Pk = $t("borderColor"),
  Tk = $t("borderTopColor"),
  Ek = $t("borderRightColor"),
  Rk = $t("borderBottomColor"),
  jk = $t("borderLeftColor"),
  Mk = $t("outline", bt),
  $k = $t("outlineColor"),
  ml = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Gi(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Yi(t, r) });
      return jt(e, e.borderRadius, n);
    }
    return null;
  };
ml.propTypes = {};
ml.filterProps = ["borderRadius"];
hl(wk, Sk, Ck, kk, bk, Pk, Tk, Ek, Rk, jk, ml, Mk, $k);
const gl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Gi(e.theme, "spacing", 8),
      n = (r) => ({ gap: Yi(t, r) });
    return jt(e, e.gap, n);
  }
  return null;
};
gl.propTypes = {};
gl.filterProps = ["gap"];
const yl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Gi(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Yi(t, r) });
    return jt(e, e.columnGap, n);
  }
  return null;
};
yl.propTypes = {};
yl.filterProps = ["columnGap"];
const vl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Gi(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Yi(t, r) });
    return jt(e, e.rowGap, n);
  }
  return null;
};
vl.propTypes = {};
vl.filterProps = ["rowGap"];
const Ak = we({ prop: "gridColumn" }),
  _k = we({ prop: "gridRow" }),
  Nk = we({ prop: "gridAutoFlow" }),
  Ok = we({ prop: "gridAutoColumns" }),
  Ik = we({ prop: "gridAutoRows" }),
  Lk = we({ prop: "gridTemplateColumns" }),
  Dk = we({ prop: "gridTemplateRows" }),
  Fk = we({ prop: "gridTemplateAreas" }),
  zk = we({ prop: "gridArea" });
hl(gl, yl, vl, Ak, _k, Nk, Ok, Ik, Lk, Dk, Fk, zk);
function ao(e, t) {
  return t === "grey" ? t : e;
}
const Vk = we({ prop: "color", themeKey: "palette", transform: ao }),
  Bk = we({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ao,
  }),
  Uk = we({ prop: "backgroundColor", themeKey: "palette", transform: ao });
hl(Vk, Bk, Uk);
function lt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Wk = we({ prop: "width", transform: lt }),
  cf = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || af[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: lt(n) };
      };
      return jt(e, e.maxWidth, t);
    }
    return null;
  };
cf.filterProps = ["maxWidth"];
const Hk = we({ prop: "minWidth", transform: lt }),
  Kk = we({ prop: "height", transform: lt }),
  Gk = we({ prop: "maxHeight", transform: lt }),
  Yk = we({ prop: "minHeight", transform: lt });
we({ prop: "size", cssProperty: "width", transform: lt });
we({ prop: "size", cssProperty: "height", transform: lt });
const Qk = we({ prop: "boxSizing" });
hl(Wk, cf, Hk, Kk, Gk, Yk, Qk);
const Xk = {
    border: { themeKey: "borders", transform: bt },
    borderTop: { themeKey: "borders", transform: bt },
    borderRight: { themeKey: "borders", transform: bt },
    borderBottom: { themeKey: "borders", transform: bt },
    borderLeft: { themeKey: "borders", transform: bt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: bt },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: ml },
    color: { themeKey: "palette", transform: ao },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: ao,
    },
    backgroundColor: { themeKey: "palette", transform: ao },
    p: { style: he },
    pt: { style: he },
    pr: { style: he },
    pb: { style: he },
    pl: { style: he },
    px: { style: he },
    py: { style: he },
    padding: { style: he },
    paddingTop: { style: he },
    paddingRight: { style: he },
    paddingBottom: { style: he },
    paddingLeft: { style: he },
    paddingX: { style: he },
    paddingY: { style: he },
    paddingInline: { style: he },
    paddingInlineStart: { style: he },
    paddingInlineEnd: { style: he },
    paddingBlock: { style: he },
    paddingBlockStart: { style: he },
    paddingBlockEnd: { style: he },
    m: { style: pe },
    mt: { style: pe },
    mr: { style: pe },
    mb: { style: pe },
    ml: { style: pe },
    mx: { style: pe },
    my: { style: pe },
    margin: { style: pe },
    marginTop: { style: pe },
    marginRight: { style: pe },
    marginBottom: { style: pe },
    marginLeft: { style: pe },
    marginX: { style: pe },
    marginY: { style: pe },
    marginInline: { style: pe },
    marginInlineStart: { style: pe },
    marginInlineEnd: { style: pe },
    marginBlock: { style: pe },
    marginBlockStart: { style: pe },
    marginBlockEnd: { style: pe },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: gl },
    rowGap: { style: vl },
    columnGap: { style: yl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: lt },
    maxWidth: { style: cf },
    minWidth: { transform: lt },
    height: { transform: lt },
    maxHeight: { transform: lt },
    minHeight: { transform: lt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Qi = Xk;
function qk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Zk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function iv() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = pl(o, u) || {};
    return d
      ? d(s)
      : jt(s, r, (y) => {
          let x = ba(f, c, y);
          return (
            y === x &&
              typeof y == "string" &&
              (x = ba(f, c, `${n}${y === "default" ? "" : B(y)}`, y)),
            l === !1 ? x : { [l]: x }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Qi;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = uk(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((v) => {
          const y = Zk(u[v], i);
          if (y != null)
            if (typeof y == "object")
              if (s[v]) f = si(f, e(v, y, i, s));
              else {
                const x = jt({ theme: i }, y, (k) => ({ [v]: k }));
                qk(x, y) ? (f[v] = t({ sx: y, theme: i })) : (f = si(f, x));
              }
            else f = si(f, e(v, y, i, s));
        }),
        ck(d, f)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const bo = iv();
bo.filterProps = ["sx"];
function sv(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const Jk = ["breakpoints", "palette", "spacing", "shape"];
function Xi(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = U(e, Jk),
    a = nv(n),
    l = xk(o);
  let u = Xt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: b({ mode: "light" }, r),
      spacing: l,
      shape: b({}, lk, i),
    },
    s
  );
  return (
    (u.applyStyles = sv),
    (u = t.reduce((c, d) => Xt(c, d), u)),
    (u.unstable_sxConfig = b({}, Qi, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return bo({ sx: d, theme: this });
    }),
    u
  );
}
const eb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Xi,
      private_createBreakpoints: nv,
      unstable_applyStyles: sv,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function tb(e) {
  return Object.keys(e).length === 0;
}
function df(e = null) {
  const t = S.useContext(Hi);
  return !t || tb(t) ? e : t;
}
const nb = Xi();
function ff(e = nb) {
  return df(e);
}
const rb = ["sx"],
  ob = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Qi;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function xl(e) {
  const { sx: t } = e,
    n = U(e, rb),
    { systemProps: r, otherProps: o } = ob(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return sn(a) ? b({}, r, a) : r;
        })
      : (i = b({}, r, t)),
    b({}, o, { sx: i })
  );
}
const ib = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: bo,
        extendSxProp: xl,
        unstable_createStyleFunctionSx: iv,
        unstable_defaultSxConfig: Qi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ph = (e) => e,
  sb = () => {
    let e = Ph;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ph;
      },
    };
  },
  pf = sb();
function av(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = av(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function K() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = av(e)) && (r && (r += " "), (r += t));
  return r;
}
const ab = ["className", "component"];
function lb(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = sf("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(bo);
  return S.forwardRef(function (l, u) {
    const c = ff(n),
      d = xl(l),
      { className: f, component: v = "div" } = d,
      y = U(d, ab);
    return p.jsx(
      i,
      b(
        {
          as: v,
          ref: u,
          className: K(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        y
      )
    );
  });
}
const ub = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function be(e, t, n = "Mui") {
  const r = ub[t];
  return r ? `${n}-${r}` : `${pf.generate(e)}-${t}`;
}
function Pe(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = be(e, o, n);
    }),
    r
  );
}
var lv = { exports: {} },
  te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hf = Symbol.for("react.element"),
  mf = Symbol.for("react.portal"),
  wl = Symbol.for("react.fragment"),
  Sl = Symbol.for("react.strict_mode"),
  Cl = Symbol.for("react.profiler"),
  kl = Symbol.for("react.provider"),
  bl = Symbol.for("react.context"),
  cb = Symbol.for("react.server_context"),
  Pl = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  El = Symbol.for("react.suspense_list"),
  Rl = Symbol.for("react.memo"),
  jl = Symbol.for("react.lazy"),
  db = Symbol.for("react.offscreen"),
  uv;
uv = Symbol.for("react.module.reference");
function At(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hf:
        switch (((e = e.type), e)) {
          case wl:
          case Cl:
          case Sl:
          case Tl:
          case El:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case cb:
              case bl:
              case Pl:
              case jl:
              case Rl:
              case kl:
                return e;
              default:
                return t;
            }
        }
      case mf:
        return t;
    }
  }
}
te.ContextConsumer = bl;
te.ContextProvider = kl;
te.Element = hf;
te.ForwardRef = Pl;
te.Fragment = wl;
te.Lazy = jl;
te.Memo = Rl;
te.Portal = mf;
te.Profiler = Cl;
te.StrictMode = Sl;
te.Suspense = Tl;
te.SuspenseList = El;
te.isAsyncMode = function () {
  return !1;
};
te.isConcurrentMode = function () {
  return !1;
};
te.isContextConsumer = function (e) {
  return At(e) === bl;
};
te.isContextProvider = function (e) {
  return At(e) === kl;
};
te.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === hf;
};
te.isForwardRef = function (e) {
  return At(e) === Pl;
};
te.isFragment = function (e) {
  return At(e) === wl;
};
te.isLazy = function (e) {
  return At(e) === jl;
};
te.isMemo = function (e) {
  return At(e) === Rl;
};
te.isPortal = function (e) {
  return At(e) === mf;
};
te.isProfiler = function (e) {
  return At(e) === Cl;
};
te.isStrictMode = function (e) {
  return At(e) === Sl;
};
te.isSuspense = function (e) {
  return At(e) === Tl;
};
te.isSuspenseList = function (e) {
  return At(e) === El;
};
te.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === wl ||
    e === Cl ||
    e === Sl ||
    e === Tl ||
    e === El ||
    e === db ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === jl ||
        e.$$typeof === Rl ||
        e.$$typeof === kl ||
        e.$$typeof === bl ||
        e.$$typeof === Pl ||
        e.$$typeof === uv ||
        e.getModuleId !== void 0))
  );
};
te.typeOf = At;
lv.exports = te;
var Th = lv.exports;
const fb = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function cv(e) {
  const t = `${e}`.match(fb);
  return (t && t[1]) || "";
}
function dv(e, t = "") {
  return e.displayName || e.name || cv(e) || t;
}
function Eh(e, t, n) {
  const r = dv(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function pb(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return dv(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Th.ForwardRef:
          return Eh(e, e.render, "ForwardRef");
        case Th.Memo:
          return Eh(e, e.type, "memo");
        default:
          return;
      }
  }
}
const hb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: pb, getFunctionName: cv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  mb = ["ownerState"],
  gb = ["variants"],
  yb = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function vb(e) {
  return Object.keys(e).length === 0;
}
function xb(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function vu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const wb = Xi(),
  Sb = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function bs({ defaultTheme: e, theme: t, themeId: n }) {
  return vb(t) ? e : t[n] || t;
}
function Cb(e) {
  return e ? (t, n) => n[e] : null;
}
function Gs(e, t) {
  let { ownerState: n } = t,
    r = U(t, mb);
  const o = typeof e == "function" ? e(b({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => Gs(i, b({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = U(o, gb);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props(b({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style(b({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function kb(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = wb,
      rootShouldForwardProp: r = vu,
      slotShouldForwardProp: o = vu,
    } = e,
    i = (s) =>
      bo(b({}, s, { theme: bs(b({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      ev(s, (C) => C.filter((T) => !(T != null && T.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = Cb(Sb(u)),
        } = a,
        v = U(a, yb),
        y = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        x = d || !1;
      let k,
        m = vu;
      u === "Root" || u === "root"
        ? (m = r)
        : u
        ? (m = o)
        : xb(s) && (m = void 0);
      const h = sf(s, b({ shouldForwardProp: m, label: k }, v)),
        g = (C) =>
          (typeof C == "function" && C.__emotion_real !== C) || sn(C)
            ? (T) =>
                Gs(
                  C,
                  b({}, T, {
                    theme: bs({ theme: T.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : C,
        w = (C, ...T) => {
          let P = g(C);
          const E = T ? T.map(g) : [];
          l &&
            f &&
            E.push((A) => {
              const O = bs(b({}, A, { defaultTheme: n, themeId: t }));
              if (
                !O.components ||
                !O.components[l] ||
                !O.components[l].styleOverrides
              )
                return null;
              const z = O.components[l].styleOverrides,
                L = {};
              return (
                Object.entries(z).forEach(([V, I]) => {
                  L[V] = Gs(I, b({}, A, { theme: O }));
                }),
                f(A, L)
              );
            }),
            l &&
              !y &&
              E.push((A) => {
                var O;
                const z = bs(b({}, A, { defaultTheme: n, themeId: t })),
                  L =
                    z == null ||
                    (O = z.components) == null ||
                    (O = O[l]) == null
                      ? void 0
                      : O.variants;
                return Gs({ variants: L }, b({}, A, { theme: z }));
              }),
            x || E.push(i);
          const $ = E.length - T.length;
          if (Array.isArray(C) && $ > 0) {
            const A = new Array($).fill("");
            (P = [...C, ...A]), (P.raw = [...C.raw, ...A]);
          }
          const j = h(P, ...E);
          return s.muiName && (j.muiName = s.muiName), j;
        };
      return h.withConfig && (w.withConfig = h.withConfig), w;
    }
  );
}
const bb = kb();
function gf(e, t) {
  const n = b({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = b({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = b({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = gf(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function yf(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : gf(t.components[n].defaultProps, r);
}
function fv({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = ff(n);
  return r && (o = o[r] || o), yf({ theme: o, name: t, props: e });
}
const wr = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function Pb(e, t, n, r, o) {
  const [i, s] = S.useState(() =>
    o && n ? n(e).matches : r ? r(e).matches : t
  );
  return (
    wr(() => {
      let a = !0;
      if (!n) return;
      const l = n(e),
        u = () => {
          a && s(l.matches);
        };
      return (
        u(),
        l.addListener(u),
        () => {
          (a = !1), l.removeListener(u);
        }
      );
    }, [e, n]),
    i
  );
}
const pv = S.useSyncExternalStore;
function Tb(e, t, n, r, o) {
  const i = S.useCallback(() => t, [t]),
    s = S.useMemo(() => {
      if (o && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: c } = r(e);
        return () => c;
      }
      return i;
    }, [i, e, r, o, n]),
    [a, l] = S.useMemo(() => {
      if (n === null) return [i, () => () => {}];
      const c = n(e);
      return [
        () => c.matches,
        (d) => (
          c.addListener(d),
          () => {
            c.removeListener(d);
          }
        ),
      ];
    }, [i, n, e]);
  return pv(l, a, s);
}
function Ml(e, t = {}) {
  const n = df(),
    r = typeof window < "u" && typeof window.matchMedia < "u",
    {
      defaultMatches: o = !1,
      matchMedia: i = r ? window.matchMedia : null,
      ssrMatchMedia: s = null,
      noSsr: a = !1,
    } = yf({ name: "MuiUseMediaQuery", props: t, theme: n });
  let l = typeof e == "function" ? e(n) : e;
  return (
    (l = l.replace(/^@media( ?)/m, "")),
    (pv !== void 0 ? Tb : Pb)(l, o, i, s, a)
  );
}
function Eb(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const Rb = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Eb }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Oc(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function hv(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function jb(e, t) {
  return () => null;
}
function Mb(e, t) {
  var n, r;
  return (
    S.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function dn(e) {
  return (e && e.ownerDocument) || document;
}
function Po(e) {
  return dn(e).defaultView || window;
}
function $b(e, t) {
  return () => null;
}
function Pa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Rh = 0;
function Ab(e) {
  const [t, n] = S.useState(e),
    r = e || t;
  return (
    S.useEffect(() => {
      t == null && ((Rh += 1), n(`mui-${Rh}`));
    }, [t]),
    r
  );
}
const jh = Lu.useId;
function _b(e) {
  if (jh !== void 0) {
    const t = jh();
    return e ?? t;
  }
  return Ab(e);
}
function Nb(e, t, n, r, o) {
  return null;
}
function Ob({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e !== void 0),
    [i, s] = S.useState(t),
    a = o ? e : i,
    l = S.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function ur(e) {
  const t = S.useRef(e);
  return (
    wr(() => {
      t.current = e;
    }),
    S.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Zt(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Pa(n, t);
            });
          },
    e
  );
}
const Mh = {};
function Ib(e, t) {
  const n = S.useRef(Mh);
  return n.current === Mh && (n.current = e(t)), n;
}
const Lb = [];
function Db(e) {
  S.useEffect(e, Lb);
}
class $l {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new $l();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function Fb() {
  const e = Ib($l.create).current;
  return Db(e.disposeEffect), e;
}
let Al = !0,
  Ic = !1;
const zb = new $l(),
  Vb = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function Bb(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && Vb[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function Ub(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Al = !0);
}
function xu() {
  Al = !1;
}
function Wb() {
  this.visibilityState === "hidden" && Ic && (Al = !0);
}
function Hb(e) {
  e.addEventListener("keydown", Ub, !0),
    e.addEventListener("mousedown", xu, !0),
    e.addEventListener("pointerdown", xu, !0),
    e.addEventListener("touchstart", xu, !0),
    e.addEventListener("visibilitychange", Wb, !0);
}
function Kb(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Al || Bb(t);
}
function mv() {
  const e = S.useCallback((o) => {
      o != null && Hb(o.ownerDocument);
    }, []),
    t = S.useRef(!1);
  function n() {
    return t.current
      ? ((Ic = !0),
        zb.start(100, () => {
          Ic = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return Kb(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Gb(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Re(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Yb = S.createContext(null),
  gv = Yb;
function yv() {
  return S.useContext(gv);
}
const Qb = typeof Symbol == "function" && Symbol.for,
  Xb = Qb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function qb(e, t) {
  return typeof t == "function" ? t(e) : b({}, e, t);
}
function Zb(e) {
  const { children: t, theme: n } = e,
    r = yv(),
    o = S.useMemo(() => {
      const i = r === null ? n : qb(r, n);
      return i != null && (i[Xb] = r !== null), i;
    }, [n, r]);
  return p.jsx(gv.Provider, { value: o, children: t });
}
const Jb = ["value"],
  vv = S.createContext();
function eP(e) {
  let { value: t } = e,
    n = U(e, Jb);
  return p.jsx(vv.Provider, b({ value: t ?? !0 }, n));
}
const xv = () => {
    const e = S.useContext(vv);
    return e ?? !1;
  },
  $h = {};
function Ah(e, t, n, r = !1) {
  return S.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == "function") {
      const i = n(o),
        s = e ? b({}, t, { [e]: i }) : i;
      return r ? () => s : s;
    }
    return e ? b({}, t, { [e]: n }) : b({}, t, n);
  }, [e, t, n, r]);
}
function tP(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = df($h),
    i = yv() || $h,
    s = Ah(r, o, n),
    a = Ah(r, i, n, !0),
    l = s.direction === "rtl";
  return p.jsx(Zb, {
    theme: a,
    children: p.jsx(Hi.Provider, {
      value: s,
      children: p.jsx(eP, { value: l, children: t }),
    }),
  });
}
const nP = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  rP = Xi(),
  oP = bb("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${B(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  iP = (e) => fv({ props: e, name: "MuiContainer", defaultTheme: rP }),
  sP = (e, t) => {
    const n = (l) => be(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${B(String(s))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return Re(a, n, r);
  };
function aP(e = {}) {
  const {
      createStyledComponent: t = oP,
      useThemeProps: n = iP,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) =>
        b(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !a.disableGutters && {
            paddingLeft: s.spacing(2),
            paddingRight: s.spacing(2),
            [s.breakpoints.up("sm")]: {
              paddingLeft: s.spacing(3),
              paddingRight: s.spacing(3),
            },
          }
        ),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const c = u,
            d = s.breakpoints.values[c];
          return (
            d !== 0 &&
              (l[s.breakpoints.up(c)] = {
                maxWidth: `${d}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) =>
        b(
          {},
          a.maxWidth === "xs" && {
            [s.breakpoints.up("xs")]: {
              maxWidth: Math.max(s.breakpoints.values.xs, 444),
            },
          },
          a.maxWidth &&
            a.maxWidth !== "xs" && {
              [s.breakpoints.up(a.maxWidth)]: {
                maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                  s.breakpoints.unit
                }`,
              },
            }
        )
    );
  return S.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: c,
        component: d = "div",
        disableGutters: f = !1,
        fixed: v = !1,
        maxWidth: y = "lg",
      } = u,
      x = U(u, nP),
      k = b({}, u, { component: d, disableGutters: f, fixed: v, maxWidth: y }),
      m = sP(k, r);
    return p.jsx(
      o,
      b({ as: d, ownerState: k, className: K(m.root, c), ref: l }, x)
    );
  });
}
function lP(e, t) {
  return b(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var Se = {},
  wv = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(wv);
var vf = wv.exports;
const uP = xn(JS),
  cP = xn(Rb);
var Sv = vf;
Object.defineProperty(Se, "__esModule", { value: !0 });
var Kt = (Se.alpha = Ev);
Se.blend = SP;
Se.colorChannel = void 0;
var Cv = (Se.darken = wf);
Se.decomposeColor = Mt;
Se.emphasize = wP;
var dP = (Se.getContrastRatio = gP);
Se.getLuminance = Ta;
Se.hexToRgb = bv;
Se.hslToRgb = Tv;
var kv = (Se.lighten = Sf);
Se.private_safeAlpha = yP;
Se.private_safeColorChannel = void 0;
Se.private_safeDarken = vP;
Se.private_safeEmphasize = Rv;
Se.private_safeLighten = xP;
Se.recomposeColor = To;
Se.rgbToHex = mP;
var _h = Sv(uP),
  fP = Sv(cP);
function xf(e, t = 0, n = 1) {
  return (0, fP.default)(e, t, n);
}
function bv(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function pP(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Mt(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Mt(bv(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, _h.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, _h.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const Pv = (e) => {
  const t = Mt(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
Se.colorChannel = Pv;
const hP = (e, t) => {
  try {
    return Pv(e);
  } catch {
    return e;
  }
};
Se.private_safeColorChannel = hP;
function To(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function mP(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = Mt(e);
  return `#${t.map((n, r) => pP(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Tv(e) {
  e = Mt(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), To({ type: a, values: l })
  );
}
function Ta(e) {
  e = Mt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Mt(Tv(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function gP(e, t) {
  const n = Ta(e),
    r = Ta(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ev(e, t) {
  return (
    (e = Mt(e)),
    (t = xf(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    To(e)
  );
}
function yP(e, t, n) {
  try {
    return Ev(e, t);
  } catch {
    return e;
  }
}
function wf(e, t) {
  if (((e = Mt(e)), (t = xf(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return To(e);
}
function vP(e, t, n) {
  try {
    return wf(e, t);
  } catch {
    return e;
  }
}
function Sf(e, t) {
  if (((e = Mt(e)), (t = xf(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return To(e);
}
function xP(e, t, n) {
  try {
    return Sf(e, t);
  } catch {
    return e;
  }
}
function wP(e, t = 0.15) {
  return Ta(e) > 0.5 ? wf(e, t) : Sf(e, t);
}
function Rv(e, t, n) {
  try {
    return Rv(e, t);
  } catch {
    return e;
  }
}
function SP(e, t, n, r = 1) {
  const o = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = Mt(e),
    s = Mt(t),
    a = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2]),
    ];
  return To({ type: "rgb", values: a });
}
const CP = ["mode", "contrastThreshold", "tonalOffset"],
  Nh = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ji.white, default: ji.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  wu = {
    text: {
      primary: ji.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ji.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Oh(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = kv(e.main, o))
      : t === "dark" && (e.dark = Cv(e.main, i)));
}
function kP(e = "light") {
  return e === "dark"
    ? { main: jr[200], light: jr[50], dark: jr[400] }
    : { main: jr[700], light: jr[400], dark: jr[800] };
}
function bP(e = "light") {
  return e === "dark"
    ? { main: Rr[200], light: Rr[50], dark: Rr[400] }
    : { main: Rr[500], light: Rr[300], dark: Rr[700] };
}
function PP(e = "light") {
  return e === "dark"
    ? { main: Er[500], light: Er[300], dark: Er[700] }
    : { main: Er[700], light: Er[400], dark: Er[800] };
}
function TP(e = "light") {
  return e === "dark"
    ? { main: Mr[400], light: Mr[300], dark: Mr[700] }
    : { main: Mr[700], light: Mr[500], dark: Mr[900] };
}
function EP(e = "light") {
  return e === "dark"
    ? { main: $r[400], light: $r[300], dark: $r[700] }
    : { main: $r[800], light: $r[500], dark: $r[900] };
}
function RP(e = "light") {
  return e === "dark"
    ? { main: zo[400], light: zo[300], dark: zo[700] }
    : { main: "#ed6c02", light: zo[500], dark: zo[900] };
}
function jP(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = U(e, CP),
    i = e.primary || kP(t),
    s = e.secondary || bP(t),
    a = e.error || PP(t),
    l = e.info || TP(t),
    u = e.success || EP(t),
    c = e.warning || RP(t);
  function d(x) {
    return dP(x, wu.text.primary) >= n ? wu.text.primary : Nh.text.primary;
  }
  const f = ({
      color: x,
      name: k,
      mainShade: m = 500,
      lightShade: h = 300,
      darkShade: g = 700,
    }) => {
      if (
        ((x = b({}, x)),
        !x.main && x[m] && (x.main = x[m]),
        !x.hasOwnProperty("main"))
      )
        throw new Error(Mi(11, k ? ` (${k})` : "", m));
      if (typeof x.main != "string")
        throw new Error(Mi(12, k ? ` (${k})` : "", JSON.stringify(x.main)));
      return (
        Oh(x, "light", h, r),
        Oh(x, "dark", g, r),
        x.contrastText || (x.contrastText = d(x.main)),
        x
      );
    },
    v = { dark: wu, light: Nh };
  return Xt(
    b(
      {
        common: b({}, ji),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: a, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: ZS,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      v[t]
    ),
    o
  );
}
const MP = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function $P(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ih = { textTransform: "uppercase" },
  Lh = '"Roboto", "Helvetica", "Arial", sans-serif';
function AP(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Lh,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = U(n, MP),
    v = o / 14,
    y = d || ((m) => `${(m / u) * v}rem`),
    x = (m, h, g, w, C) =>
      b(
        { fontFamily: r, fontWeight: m, fontSize: y(h), lineHeight: g },
        r === Lh ? { letterSpacing: `${$P(w / h)}em` } : {},
        C,
        c
      ),
    k = {
      h1: x(i, 96, 1.167, -1.5),
      h2: x(i, 60, 1.2, -0.5),
      h3: x(s, 48, 1.167, 0),
      h4: x(s, 34, 1.235, 0.25),
      h5: x(s, 24, 1.334, 0),
      h6: x(a, 20, 1.6, 0.15),
      subtitle1: x(s, 16, 1.75, 0.15),
      subtitle2: x(a, 14, 1.57, 0.1),
      body1: x(s, 16, 1.5, 0.15),
      body2: x(s, 14, 1.43, 0.15),
      button: x(a, 14, 1.75, 0.4, Ih),
      caption: x(s, 12, 1.66, 0.4),
      overline: x(s, 12, 2.66, 1, Ih),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Xt(
    b(
      {
        htmlFontSize: u,
        pxToRem: y,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      k
    ),
    f,
    { clone: !1 }
  );
}
const _P = 0.2,
  NP = 0.14,
  OP = 0.12;
function se(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_P})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${NP})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${OP})`,
  ].join(",");
}
const IP = [
    "none",
    se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  LP = ["duration", "easing", "delay"],
  DP = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  FP = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Dh(e) {
  return `${Math.round(e)}ms`;
}
function zP(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function VP(e) {
  const t = b({}, DP, e.easing),
    n = b({}, FP, e.duration);
  return b(
    {
      getAutoHeightDuration: zP,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          U(i, LP),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : Dh(s)} ${a} ${
                  typeof l == "string" ? l : Dh(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const BP = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  UP = BP,
  WP = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Cf(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = U(e, WP);
  if (e.vars) throw new Error(Mi(18));
  const a = jP(r),
    l = Xi(e);
  let u = Xt(l, {
    mixins: lP(l.breakpoints, n),
    palette: a,
    shadows: IP.slice(),
    typography: AP(a, i),
    transitions: VP(o),
    zIndex: b({}, UP),
  });
  return (
    (u = Xt(u, s)),
    (u = t.reduce((c, d) => Xt(c, d), u)),
    (u.unstable_sxConfig = b({}, Qi, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return bo({ sx: d, theme: this });
    }),
    u
  );
}
const HP = Cf(),
  kf = HP;
function Jt() {
  const e = ff(kf);
  return e[yo] || e;
}
function je({ props: e, name: t }) {
  return fv({ props: e, name: t, defaultTheme: kf, themeId: yo });
}
var qi = {},
  Su = { exports: {} },
  Fh;
function KP() {
  return (
    Fh ||
      ((Fh = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            s,
            a;
          for (a = 0; a < i.length; a++)
            (s = i[a]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Su)),
    Su.exports
  );
}
const GP = xn(rk),
  YP = xn(ok),
  QP = xn(fk),
  XP = xn(hb),
  qP = xn(eb),
  ZP = xn(ib);
var Eo = vf;
Object.defineProperty(qi, "__esModule", { value: !0 });
var JP = (qi.default = fT);
qi.shouldForwardProp = Ys;
qi.systemDefaultTheme = void 0;
var wt = Eo(Jy()),
  Lc = Eo(KP()),
  zh = sT(GP),
  eT = YP;
Eo(QP);
Eo(XP);
var tT = Eo(qP),
  nT = Eo(ZP);
const rT = ["ownerState"],
  oT = ["variants"],
  iT = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function jv(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (jv = function (r) {
    return r ? n : t;
  })(e);
}
function sT(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = jv(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function aT(e) {
  return Object.keys(e).length === 0;
}
function lT(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Ys(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const uT = (qi.systemDefaultTheme = (0, tT.default)()),
  cT = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ps({ defaultTheme: e, theme: t, themeId: n }) {
  return aT(t) ? e : t[n] || t;
}
function dT(e) {
  return e ? (t, n) => n[e] : null;
}
function Qs(e, t) {
  let { ownerState: n } = t,
    r = (0, Lc.default)(t, rT);
  const o =
    typeof e == "function" ? e((0, wt.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Qs(i, (0, wt.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, Lc.default)(o, oT);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, wt.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style((0, wt.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function fT(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = uT,
      rootShouldForwardProp: r = Ys,
      slotShouldForwardProp: o = Ys,
    } = e,
    i = (s) =>
      (0, nT.default)(
        (0, wt.default)({}, s, {
          theme: Ps((0, wt.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, zh.internal_processStyles)(s, (C) =>
        C.filter((T) => !(T != null && T.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = dT(cT(u)),
        } = a,
        v = (0, Lc.default)(a, iT),
        y = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        x = d || !1;
      let k,
        m = Ys;
      u === "Root" || u === "root"
        ? (m = r)
        : u
        ? (m = o)
        : lT(s) && (m = void 0);
      const h = (0, zh.default)(
          s,
          (0, wt.default)({ shouldForwardProp: m, label: k }, v)
        ),
        g = (C) =>
          (typeof C == "function" && C.__emotion_real !== C) ||
          (0, eT.isPlainObject)(C)
            ? (T) =>
                Qs(
                  C,
                  (0, wt.default)({}, T, {
                    theme: Ps({ theme: T.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : C,
        w = (C, ...T) => {
          let P = g(C);
          const E = T ? T.map(g) : [];
          l &&
            f &&
            E.push((A) => {
              const O = Ps(
                (0, wt.default)({}, A, { defaultTheme: n, themeId: t })
              );
              if (
                !O.components ||
                !O.components[l] ||
                !O.components[l].styleOverrides
              )
                return null;
              const z = O.components[l].styleOverrides,
                L = {};
              return (
                Object.entries(z).forEach(([V, I]) => {
                  L[V] = Qs(I, (0, wt.default)({}, A, { theme: O }));
                }),
                f(A, L)
              );
            }),
            l &&
              !y &&
              E.push((A) => {
                var O;
                const z = Ps(
                    (0, wt.default)({}, A, { defaultTheme: n, themeId: t })
                  ),
                  L =
                    z == null ||
                    (O = z.components) == null ||
                    (O = O[l]) == null
                      ? void 0
                      : O.variants;
                return Qs(
                  { variants: L },
                  (0, wt.default)({}, A, { theme: z })
                );
              }),
            x || E.push(i);
          const $ = E.length - T.length;
          if (Array.isArray(C) && $ > 0) {
            const A = new Array($).fill("");
            (P = [...C, ...A]), (P.raw = [...C.raw, ...A]);
          }
          const j = h(P, ...E);
          return s.muiName && (j.muiName = s.muiName), j;
        };
      return h.withConfig && (w.withConfig = h.withConfig), w;
    }
  );
}
function pT(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const hT = (e) => pT(e) && e !== "classes",
  Zi = hT,
  Q = JP({ themeId: yo, defaultTheme: kf, rootShouldForwardProp: Zi }),
  mT = ["theme"];
function gT(e) {
  let { theme: t } = e,
    n = U(e, mT);
  const r = t[yo];
  return p.jsx(tP, b({}, n, { themeId: r ? yo : void 0, theme: r || t }));
}
const Vh = (e) => {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    (t / 100).toFixed(2)
  );
};
function yT(e) {
  return be("MuiSvgIcon", e);
}
Pe("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const vT = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  xT = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${B(t)}`, `fontSize${B(n)}`],
      };
    return Re(o, yT, r);
  },
  wT = Q("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${B(n.color)}`],
        t[`fontSize${B(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, c, d, f, v, y;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? d
          : {
              action:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.active,
              disabled:
                (y = (e.vars || e).palette) == null || (y = y.action) == null
                  ? void 0
                  : y.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Dc = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = r,
      v = U(r, vT),
      y = S.isValidElement(o) && o.type === "svg",
      x = b({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: y,
      }),
      k = {};
    c || (k.viewBox = f);
    const m = xT(x);
    return p.jsxs(
      wT,
      b(
        {
          as: a,
          className: K(m.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        k,
        v,
        y && o.props,
        {
          ownerState: x,
          children: [
            y ? o.props.children : o,
            d ? p.jsx("title", { children: d }) : null,
          ],
        }
      )
    );
  });
Dc.muiName = "SvgIcon";
function Mv(e, t) {
  function n(r, o) {
    return p.jsx(
      Dc,
      b({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Dc.muiName), S.memo(S.forwardRef(n));
}
const ST = {
    configure: (e) => {
      pf.configure(e);
    },
  },
  CT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: B,
        createChainedFunction: Oc,
        createSvgIcon: Mv,
        debounce: hv,
        deprecatedPropType: jb,
        isMuiElement: Mb,
        ownerDocument: dn,
        ownerWindow: Po,
        requirePropFactory: $b,
        setRef: Pa,
        unstable_ClassNameGenerator: ST,
        unstable_useEnhancedEffect: wr,
        unstable_useId: _b,
        unsupportedProp: Nb,
        useControlled: Ob,
        useEventCallback: ur,
        useForkRef: Zt,
        useIsFocusVisible: mv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Fc(e, t) {
  return (
    (Fc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Fc(e, t)
  );
}
function $v(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Fc(e, t);
}
const Bh = { disabled: !1 },
  Ea = ut.createContext(null);
var kT = function (t) {
    return t.scrollTop;
  },
  Qo = "unmounted",
  nr = "exited",
  rr = "entering",
  Or = "entered",
  zc = "exiting",
  Sn = (function (e) {
    $v(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = nr), (i.appearStatus = rr))
            : (l = Or)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = Qo)
          : (l = nr),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Qo ? { status: nr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== rr && s !== Or && (i = rr)
            : (s === rr || s === Or) && (i = zc);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === rr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Cs.findDOMNode(this);
              s && kT(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === nr &&
            this.setState({ status: Qo });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Cs.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!o && !s) || Bh.disabled) {
          this.safeSetState({ status: Or }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: rr }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: Or }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Cs.findDOMNode(this);
        if (!i || Bh.disabled) {
          this.safeSetState({ status: nr }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: zc }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: nr }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Cs.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Qo) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = U(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ut.createElement(
          Ea.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : ut.cloneElement(ut.Children.only(s), a)
        );
      }),
      t
    );
  })(ut.Component);
Sn.contextType = Ea;
Sn.propTypes = {};
function Ar() {}
Sn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ar,
  onEntering: Ar,
  onEntered: Ar,
  onExit: Ar,
  onExiting: Ar,
  onExited: Ar,
};
Sn.UNMOUNTED = Qo;
Sn.EXITED = nr;
Sn.ENTERING = rr;
Sn.ENTERED = Or;
Sn.EXITING = zc;
const Av = Sn;
function bT(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function bf(e, t) {
  var n = function (i) {
      return t && S.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function PT(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function cr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function TT(e, t) {
  return bf(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: cr(n, "appear", e),
      enter: cr(n, "enter", e),
      exit: cr(n, "exit", e),
    });
  });
}
function ET(e, t, n) {
  var r = bf(e.children),
    o = PT(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (S.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = S.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: cr(s, "exit", e),
              enter: cr(s, "enter", e),
            }))
          : !l && a && !c
          ? (o[i] = S.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            S.isValidElement(u) &&
            (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: cr(s, "exit", e),
              enter: cr(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var RT =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  jT = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Pf = (function (e) {
    $v(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(bT(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? TT(o, a) : ET(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = bf(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = b({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = U(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = RT(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? ut.createElement(Ea.Provider, { value: l }, u)
            : ut.createElement(
                Ea.Provider,
                { value: l },
                ut.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(ut.Component);
Pf.propTypes = {};
Pf.defaultProps = jT;
const MT = Pf,
  _v = (e) => e.scrollTop;
function Ra(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
function $T(e) {
  return be("MuiPaper", e);
}
Pe("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const AT = ["className", "component", "elevation", "square", "variant"],
  _T = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return Re(i, $T, o);
  },
  NT = Q("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return b(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        b(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${Kt(
                "#fff",
                Vh(t.elevation)
              )}, ${Kt("#fff", Vh(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  OT = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: a = !1,
        variant: l = "elevation",
      } = r,
      u = U(r, AT),
      c = b({}, r, { component: i, elevation: s, square: a, variant: l }),
      d = _T(c);
    return p.jsx(
      NT,
      b({ as: i, ownerState: c, className: K(d.root, o), ref: n }, u)
    );
  }),
  Nv = OT;
function IT(e) {
  return typeof e == "string";
}
function LT(e, t, n) {
  return e === void 0 || IT(e)
    ? t
    : b({}, t, { ownerState: b({}, t.ownerState, n) });
}
function Ov(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function DT(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Uh(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function FT(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const v = K(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      y = b(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      x = b({}, n, o, r);
    return (
      v.length > 0 && (x.className = v),
      Object.keys(y).length > 0 && (x.style = y),
      { props: x, internalRef: void 0 }
    );
  }
  const s = Ov(b({}, o, r)),
    a = Uh(r),
    l = Uh(o),
    u = t(s),
    c = K(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = b(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = b({}, u, n, l, a);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
const zT = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Wh(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = U(e, zT),
    a = i ? {} : DT(r, o),
    { props: l, internalRef: u } = FT(b({}, s, { externalSlotProps: a })),
    c = Zt(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return LT(n, b({}, l, { ref: c }), o);
}
function VT(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, d] = S.useState(!1),
    f = K(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    v = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    y = K(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && d(!0),
    S.useEffect(() => {
      if (!a && l != null) {
        const x = setTimeout(l, u);
        return () => {
          clearTimeout(x);
        };
      }
    }, [l, a, u]),
    p.jsx("span", {
      className: f,
      style: v,
      children: p.jsx("span", { className: y }),
    })
  );
}
const St = Pe("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  BT = ["center", "classes", "className"];
let _l = (e) => e,
  Hh,
  Kh,
  Gh,
  Yh;
const Vc = 550,
  UT = 80,
  WT = kr(
    Hh ||
      (Hh = _l`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  HT = kr(
    Kh ||
      (Kh = _l`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  KT = kr(
    Gh ||
      (Gh = _l`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  GT = Q("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  YT = Q(VT, { name: "MuiTouchRipple", slot: "Ripple" })(
    Yh ||
      (Yh = _l`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    St.rippleVisible,
    WT,
    Vc,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    St.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    St.child,
    St.childLeaving,
    HT,
    Vc,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    St.childPulsate,
    KT,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  QT = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = U(r, BT),
      [l, u] = S.useState([]),
      c = S.useRef(0),
      d = S.useRef(null);
    S.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = S.useRef(!1),
      v = Fb(),
      y = S.useRef(null),
      x = S.useRef(null),
      k = S.useCallback(
        (w) => {
          const {
            pulsate: C,
            rippleX: T,
            rippleY: P,
            rippleSize: E,
            cb: $,
          } = w;
          u((j) => [
            ...j,
            p.jsx(
              YT,
              {
                classes: {
                  ripple: K(i.ripple, St.ripple),
                  rippleVisible: K(i.rippleVisible, St.rippleVisible),
                  ripplePulsate: K(i.ripplePulsate, St.ripplePulsate),
                  child: K(i.child, St.child),
                  childLeaving: K(i.childLeaving, St.childLeaving),
                  childPulsate: K(i.childPulsate, St.childPulsate),
                },
                timeout: Vc,
                pulsate: C,
                rippleX: T,
                rippleY: P,
                rippleSize: E,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = $);
        },
        [i]
      ),
      m = S.useCallback(
        (w = {}, C = {}, T = () => {}) => {
          const {
            pulsate: P = !1,
            center: E = o || C.pulsate,
            fakeElement: $ = !1,
          } = C;
          if ((w == null ? void 0 : w.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (w == null ? void 0 : w.type) === "touchstart" && (f.current = !0);
          const j = $ ? null : x.current,
            A = j
              ? j.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let O, z, L;
          if (
            E ||
            w === void 0 ||
            (w.clientX === 0 && w.clientY === 0) ||
            (!w.clientX && !w.touches)
          )
            (O = Math.round(A.width / 2)), (z = Math.round(A.height / 2));
          else {
            const { clientX: V, clientY: I } =
              w.touches && w.touches.length > 0 ? w.touches[0] : w;
            (O = Math.round(V - A.left)), (z = Math.round(I - A.top));
          }
          if (E)
            (L = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)),
              L % 2 === 0 && (L += 1);
          else {
            const V =
                Math.max(Math.abs((j ? j.clientWidth : 0) - O), O) * 2 + 2,
              I = Math.max(Math.abs((j ? j.clientHeight : 0) - z), z) * 2 + 2;
            L = Math.sqrt(V ** 2 + I ** 2);
          }
          w != null && w.touches
            ? y.current === null &&
              ((y.current = () => {
                k({ pulsate: P, rippleX: O, rippleY: z, rippleSize: L, cb: T });
              }),
              v.start(UT, () => {
                y.current && (y.current(), (y.current = null));
              }))
            : k({ pulsate: P, rippleX: O, rippleY: z, rippleSize: L, cb: T });
        },
        [o, k, v]
      ),
      h = S.useCallback(() => {
        m({}, { pulsate: !0 });
      }, [m]),
      g = S.useCallback(
        (w, C) => {
          if (
            (v.clear(),
            (w == null ? void 0 : w.type) === "touchend" && y.current)
          ) {
            y.current(),
              (y.current = null),
              v.start(0, () => {
                g(w, C);
              });
            return;
          }
          (y.current = null),
            u((T) => (T.length > 0 ? T.slice(1) : T)),
            (d.current = C);
        },
        [v]
      );
    return (
      S.useImperativeHandle(n, () => ({ pulsate: h, start: m, stop: g }), [
        h,
        m,
        g,
      ]),
      p.jsx(
        GT,
        b({ className: K(St.root, i.root, s), ref: x }, a, {
          children: p.jsx(MT, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  XT = QT;
function qT(e) {
  return be("MuiButtonBase", e);
}
const ZT = Pe("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  JT = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  e2 = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = Re({ root: ["root", t && "disabled", n && "focusVisible"] }, qT, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  t2 = Q("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${ZT.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  n2 = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: v = "a",
        onBlur: y,
        onClick: x,
        onContextMenu: k,
        onDragLeave: m,
        onFocus: h,
        onFocusVisible: g,
        onKeyDown: w,
        onKeyUp: C,
        onMouseDown: T,
        onMouseLeave: P,
        onMouseUp: E,
        onTouchEnd: $,
        onTouchMove: j,
        onTouchStart: A,
        tabIndex: O = 0,
        TouchRippleProps: z,
        touchRippleRef: L,
        type: V,
      } = r,
      I = U(r, JT),
      H = S.useRef(null),
      R = S.useRef(null),
      N = Zt(R, L),
      { isFocusVisibleRef: F, onFocus: re, onBlur: le, ref: en } = mv(),
      [ye, Qe] = S.useState(!1);
    u && ye && Qe(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Qe(!0), H.current.focus();
          },
        }),
        []
      );
    const [Fe, tn] = S.useState(!1);
    S.useEffect(() => {
      tn(!0);
    }, []);
    const rs = Fe && !c && !u;
    S.useEffect(() => {
      ye && f && !c && Fe && R.current.pulsate();
    }, [c, f, ye, Fe]);
    function st(W, np, v1 = d) {
      return ur(
        (rp) => (np && np(rp), !v1 && R.current && R.current[W](rp), !0)
      );
    }
    const Mo = st("start", T),
      zl = st("stop", k),
      Vl = st("stop", m),
      Cn = st("stop", E),
      Pr = st("stop", (W) => {
        ye && W.preventDefault(), P && P(W);
      }),
      u1 = st("start", A),
      c1 = st("stop", $),
      d1 = st("stop", j),
      f1 = st(
        "stop",
        (W) => {
          le(W), F.current === !1 && Qe(!1), y && y(W);
        },
        !1
      ),
      p1 = ur((W) => {
        H.current || (H.current = W.currentTarget),
          re(W),
          F.current === !0 && (Qe(!0), g && g(W)),
          h && h(W);
      }),
      Bl = () => {
        const W = H.current;
        return l && l !== "button" && !(W.tagName === "A" && W.href);
      },
      Ul = S.useRef(!1),
      h1 = ur((W) => {
        f &&
          !Ul.current &&
          ye &&
          R.current &&
          W.key === " " &&
          ((Ul.current = !0),
          R.current.stop(W, () => {
            R.current.start(W);
          })),
          W.target === W.currentTarget &&
            Bl() &&
            W.key === " " &&
            W.preventDefault(),
          w && w(W),
          W.target === W.currentTarget &&
            Bl() &&
            W.key === "Enter" &&
            !u &&
            (W.preventDefault(), x && x(W));
      }),
      m1 = ur((W) => {
        f &&
          W.key === " " &&
          R.current &&
          ye &&
          !W.defaultPrevented &&
          ((Ul.current = !1),
          R.current.stop(W, () => {
            R.current.pulsate(W);
          })),
          C && C(W),
          x &&
            W.target === W.currentTarget &&
            Bl() &&
            W.key === " " &&
            !W.defaultPrevented &&
            x(W);
      });
    let os = l;
    os === "button" && (I.href || I.to) && (os = v);
    const $o = {};
    os === "button"
      ? (($o.type = V === void 0 ? "button" : V), ($o.disabled = u))
      : (!I.href && !I.to && ($o.role = "button"),
        u && ($o["aria-disabled"] = u));
    const g1 = Zt(n, en, H),
      tp = b({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: O,
        focusVisible: ye,
      }),
      y1 = e2(tp);
    return p.jsxs(
      t2,
      b(
        {
          as: os,
          className: K(y1.root, a),
          ownerState: tp,
          onBlur: f1,
          onClick: x,
          onContextMenu: zl,
          onFocus: p1,
          onKeyDown: h1,
          onKeyUp: m1,
          onMouseDown: Mo,
          onMouseLeave: Pr,
          onMouseUp: Cn,
          onDragLeave: Vl,
          onTouchEnd: c1,
          onTouchMove: d1,
          onTouchStart: u1,
          ref: g1,
          tabIndex: u ? -1 : O,
          type: V,
        },
        $o,
        I,
        { children: [s, rs ? p.jsx(XT, b({ ref: N, center: i }, z)) : null] }
      )
    );
  }),
  on = n2;
function r2(e) {
  return be("MuiTypography", e);
}
Pe("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const o2 = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  i2 = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${B(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Re(a, r2, s);
  },
  s2 = Q("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${B(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Qh = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  a2 = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  l2 = (e) => a2[e] || e,
  u2 = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiTypography" }),
      o = l2(r.color),
      i = xl(b({}, r, { color: o })),
      {
        align: s = "inherit",
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: f = "body1",
        variantMapping: v = Qh,
      } = i,
      y = U(i, o2),
      x = b({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: f,
        variantMapping: v,
      }),
      k = l || (d ? "p" : v[f] || Qh[f]) || "span",
      m = i2(x);
    return p.jsx(
      s2,
      b({ as: k, ref: n, ownerState: x, className: K(m.root, a) }, y)
    );
  }),
  ge = u2,
  c2 = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
  ].join(",");
function d2(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function f2(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function p2(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    f2(e)
  );
}
function h2(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(c2)).forEach((r, o) => {
      const i = d2(r);
      i === -1 ||
        !p2(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function m2() {
  return !0;
}
function g2(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = h2,
      isEnabled: s = m2,
      open: a,
    } = e,
    l = S.useRef(!1),
    u = S.useRef(null),
    c = S.useRef(null),
    d = S.useRef(null),
    f = S.useRef(null),
    v = S.useRef(!1),
    y = S.useRef(null),
    x = Zt(t.ref, y),
    k = S.useRef(null);
  S.useEffect(() => {
    !a || !y.current || (v.current = !n);
  }, [n, a]),
    S.useEffect(() => {
      if (!a || !y.current) return;
      const g = dn(y.current);
      return (
        y.current.contains(g.activeElement) ||
          (y.current.hasAttribute("tabIndex") ||
            y.current.setAttribute("tabIndex", "-1"),
          v.current && y.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [a]),
    S.useEffect(() => {
      if (!a || !y.current) return;
      const g = dn(y.current),
        w = (P) => {
          (k.current = P),
            !(r || !s() || P.key !== "Tab") &&
              g.activeElement === y.current &&
              P.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        C = () => {
          const P = y.current;
          if (P === null) return;
          if (!g.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            P.contains(g.activeElement) ||
            (r &&
              g.activeElement !== u.current &&
              g.activeElement !== c.current)
          )
            return;
          if (g.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!v.current) return;
          let E = [];
          if (
            ((g.activeElement === u.current || g.activeElement === c.current) &&
              (E = i(y.current)),
            E.length > 0)
          ) {
            var $, j;
            const A = !!(
                ($ = k.current) != null &&
                $.shiftKey &&
                ((j = k.current) == null ? void 0 : j.key) === "Tab"
              ),
              O = E[0],
              z = E[E.length - 1];
            typeof O != "string" &&
              typeof z != "string" &&
              (A ? z.focus() : O.focus());
          } else P.focus();
        };
      g.addEventListener("focusin", C), g.addEventListener("keydown", w, !0);
      const T = setInterval(() => {
        g.activeElement && g.activeElement.tagName === "BODY" && C();
      }, 50);
      return () => {
        clearInterval(T),
          g.removeEventListener("focusin", C),
          g.removeEventListener("keydown", w, !0);
      };
    }, [n, r, o, s, a, i]);
  const m = (g) => {
      d.current === null && (d.current = g.relatedTarget),
        (v.current = !0),
        (f.current = g.target);
      const w = t.props.onFocus;
      w && w(g);
    },
    h = (g) => {
      d.current === null && (d.current = g.relatedTarget), (v.current = !0);
    };
  return p.jsxs(S.Fragment, {
    children: [
      p.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      S.cloneElement(t, { ref: x, onFocus: m }),
      p.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function y2(e) {
  return typeof e == "function" ? e() : e;
}
const v2 = S.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, a] = S.useState(null),
    l = Zt(S.isValidElement(r) ? r.ref : null, n);
  if (
    (wr(() => {
      i || a(y2(o) || document.body);
    }, [o, i]),
    wr(() => {
      if (s && !i)
        return (
          Pa(n, s),
          () => {
            Pa(n, null);
          }
        );
    }, [n, s, i]),
    i)
  ) {
    if (S.isValidElement(r)) {
      const u = { ref: l };
      return S.cloneElement(r, u);
    }
    return p.jsx(S.Fragment, { children: r });
  }
  return p.jsx(S.Fragment, { children: s && qd.createPortal(r, s) });
});
function x2(e) {
  const t = dn(e);
  return t.body === e
    ? Po(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function ai(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Xh(e) {
  return parseInt(Po(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function w2(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function qh(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !w2(s);
    a && l && ai(s, o);
  });
}
function Cu(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function S2(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (x2(r)) {
      const s = Gb(dn(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Xh(r) + s}px`);
      const a = dn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Xh(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = dn(r).body;
    else {
      const s = r.parentElement,
        a = Po(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function C2(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class k2 {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && ai(t.modalRef, !1);
    const o = C2(n);
    qh(n, t.mount, t.modalRef, o, !0);
    const i = Cu(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = Cu(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = S2(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Cu(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && ai(t.modalRef, n),
        qh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ai(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function b2(e) {
  return typeof e == "function" ? e() : e;
}
function P2(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const T2 = new k2();
function E2(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = T2,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: c,
      rootRef: d,
    } = e,
    f = S.useRef({}),
    v = S.useRef(null),
    y = S.useRef(null),
    x = Zt(y, d),
    [k, m] = S.useState(!c),
    h = P2(l);
  let g = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (g = !1);
  const w = () => dn(v.current),
    C = () => (
      (f.current.modalRef = y.current), (f.current.mount = v.current), f.current
    ),
    T = () => {
      o.mount(C(), { disableScrollLock: r }),
        y.current && (y.current.scrollTop = 0);
    },
    P = ur(() => {
      const I = b2(t) || w().body;
      o.add(C(), I), y.current && T();
    }),
    E = S.useCallback(() => o.isTopModal(C()), [o]),
    $ = ur((I) => {
      (v.current = I), I && (c && E() ? T() : y.current && ai(y.current, g));
    }),
    j = S.useCallback(() => {
      o.remove(C(), g);
    }, [g, o]);
  S.useEffect(
    () => () => {
      j();
    },
    [j]
  ),
    S.useEffect(() => {
      c ? P() : (!h || !i) && j();
    }, [c, j, h, i, P]);
  const A = (I) => (H) => {
      var R;
      (R = I.onKeyDown) == null || R.call(I, H),
        !(H.key !== "Escape" || H.which === 229 || !E()) &&
          (n || (H.stopPropagation(), u && u(H, "escapeKeyDown")));
    },
    O = (I) => (H) => {
      var R;
      (R = I.onClick) == null || R.call(I, H),
        H.target === H.currentTarget && u && u(H, "backdropClick");
    };
  return {
    getRootProps: (I = {}) => {
      const H = Ov(e);
      delete H.onTransitionEnter, delete H.onTransitionExited;
      const R = b({}, H, I);
      return b({ role: "presentation" }, R, { onKeyDown: A(R), ref: x });
    },
    getBackdropProps: (I = {}) => {
      const H = I;
      return b({ "aria-hidden": !0 }, H, { onClick: O(H), open: c });
    },
    getTransitionProps: () => {
      const I = () => {
          m(!1), s && s();
        },
        H = () => {
          m(!0), a && a(), i && j();
        };
      return {
        onEnter: Oc(I, l == null ? void 0 : l.props.onEnter),
        onExited: Oc(H, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: x,
    portalRef: $,
    isTopModal: E,
    exited: k,
    hasTransition: h,
  };
}
const R2 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  j2 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  M2 = S.forwardRef(function (t, n) {
    const r = Jt(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: v,
        onExited: y,
        onExiting: x,
        style: k,
        timeout: m = o,
        TransitionComponent: h = Av,
      } = t,
      g = U(t, R2),
      w = S.useRef(null),
      C = Zt(w, a.ref, n),
      T = (L) => (V) => {
        if (L) {
          const I = w.current;
          V === void 0 ? L(I) : L(I, V);
        }
      },
      P = T(f),
      E = T((L, V) => {
        _v(L);
        const I = Ra({ style: k, timeout: m, easing: l }, { mode: "enter" });
        (L.style.webkitTransition = r.transitions.create("opacity", I)),
          (L.style.transition = r.transitions.create("opacity", I)),
          c && c(L, V);
      }),
      $ = T(d),
      j = T(x),
      A = T((L) => {
        const V = Ra({ style: k, timeout: m, easing: l }, { mode: "exit" });
        (L.style.webkitTransition = r.transitions.create("opacity", V)),
          (L.style.transition = r.transitions.create("opacity", V)),
          v && v(L);
      }),
      O = T(y),
      z = (L) => {
        i && i(w.current, L);
      };
    return p.jsx(
      h,
      b(
        {
          appear: s,
          in: u,
          nodeRef: w,
          onEnter: E,
          onEntered: $,
          onEntering: P,
          onExit: A,
          onExited: O,
          onExiting: j,
          addEndListener: z,
          timeout: m,
        },
        g,
        {
          children: (L, V) =>
            S.cloneElement(
              a,
              b(
                {
                  style: b(
                    {
                      opacity: 0,
                      visibility: L === "exited" && !u ? "hidden" : void 0,
                    },
                    j2[L],
                    k,
                    a.props.style
                  ),
                  ref: C,
                },
                V
              )
            ),
        }
      )
    );
  }),
  Iv = M2;
function $2(e) {
  return be("MuiBackdrop", e);
}
Pe("MuiBackdrop", ["root", "invisible"]);
const A2 = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  _2 = (e) => {
    const { classes: t, invisible: n } = e;
    return Re({ root: ["root", n && "invisible"] }, $2, t);
  },
  N2 = Q("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    b(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  O2 = S.forwardRef(function (t, n) {
    var r, o, i;
    const s = je({ props: t, name: "MuiBackdrop" }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: v,
        slotProps: y = {},
        slots: x = {},
        TransitionComponent: k = Iv,
        transitionDuration: m,
      } = s,
      h = U(s, A2),
      g = b({}, s, { component: u, invisible: f }),
      w = _2(g),
      C = (r = y.root) != null ? r : d.root;
    return p.jsx(
      k,
      b({ in: v, timeout: m }, h, {
        children: p.jsx(
          N2,
          b({ "aria-hidden": !0 }, C, {
            as: (o = (i = x.root) != null ? i : c.Root) != null ? o : u,
            className: K(w.root, l, C == null ? void 0 : C.className),
            ownerState: b({}, g, C == null ? void 0 : C.ownerState),
            classes: w,
            ref: n,
            children: a,
          })
        ),
      })
    );
  }),
  I2 = O2,
  L2 = Pe("MuiBox", ["root"]),
  D2 = L2,
  F2 = Cf(),
  z2 = lb({
    themeId: yo,
    defaultTheme: F2,
    defaultClassName: D2.root,
    generateClassName: pf.generate,
  }),
  He = z2;
function V2(e) {
  return be("MuiButton", e);
}
const B2 = Pe("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Ts = B2,
  U2 = S.createContext({}),
  W2 = U2,
  H2 = S.createContext(void 0),
  K2 = H2,
  G2 = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  Y2 = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${B(t)}`,
          `size${B(o)}`,
          `${i}Size${B(o)}`,
          `color${B(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${B(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${B(o)}`],
      },
      l = Re(a, V2, s);
    return b({}, s, l);
  },
  Lv = (e) =>
    b(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  Q2 = Q(on, {
    shouldForwardProp: (e) => Zi(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${B(n.color)}`],
        t[`size${B(n.size)}`],
        t[`${n.variant}Size${B(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return b(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": b(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Kt(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Kt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Kt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": b(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Ts.focusVisible}`]: b(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Ts.disabled}`]: b(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Kt(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Ts.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Ts.disabled}`]: { boxShadow: "none" },
      }
  ),
  X2 = Q("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${B(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    b(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      Lv(e)
    )
  ),
  q2 = Q("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${B(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    b(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      Lv(e)
    )
  ),
  Z2 = S.forwardRef(function (t, n) {
    const r = S.useContext(W2),
      o = S.useContext(K2),
      i = gf(r, t),
      s = je({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: v = !1,
        endIcon: y,
        focusVisibleClassName: x,
        fullWidth: k = !1,
        size: m = "medium",
        startIcon: h,
        type: g,
        variant: w = "text",
      } = s,
      C = U(s, G2),
      T = b({}, s, {
        color: l,
        component: u,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: v,
        fullWidth: k,
        size: m,
        type: g,
        variant: w,
      }),
      P = Y2(T),
      E =
        h && p.jsx(X2, { className: P.startIcon, ownerState: T, children: h }),
      $ = y && p.jsx(q2, { className: P.endIcon, ownerState: T, children: y }),
      j = o || "";
    return p.jsxs(
      Q2,
      b(
        {
          ownerState: T,
          className: K(r.className, P.root, c, j),
          component: u,
          disabled: d,
          focusRipple: !v,
          focusVisibleClassName: K(P.focusVisible, x),
          ref: n,
          type: g,
        },
        C,
        { classes: P, children: [E, a, $] }
      )
    );
  }),
  Ir = Z2;
function J2(e) {
  return be("MuiCard", e);
}
Pe("MuiCard", ["root"]);
const eE = ["className", "raised"],
  tE = (e) => {
    const { classes: t } = e;
    return Re({ root: ["root"] }, J2, t);
  },
  nE = Q(Nv, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  rE = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      s = U(r, eE),
      a = b({}, r, { raised: i }),
      l = tE(a);
    return p.jsx(
      nE,
      b(
        {
          className: K(l.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: a,
        },
        s
      )
    );
  }),
  oE = rE;
function iE(e) {
  return be("MuiCardContent", e);
}
Pe("MuiCardContent", ["root"]);
const sE = ["className", "component"],
  aE = (e) => {
    const { classes: t } = e;
    return Re({ root: ["root"] }, iE, t);
  },
  lE = Q("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  uE = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      s = U(r, sE),
      a = b({}, r, { component: i }),
      l = aE(a);
    return p.jsx(
      lE,
      b({ as: i, className: K(l.root, o), ownerState: a, ref: n }, s)
    );
  }),
  cE = uE;
function dE(e) {
  return be("MuiCardMedia", e);
}
Pe("MuiCardMedia", ["root", "media", "img"]);
const fE = ["children", "className", "component", "image", "src", "style"],
  pE = (e) => {
    const { classes: t, isMediaComponent: n, isImageComponent: r } = e;
    return Re({ root: ["root", n && "media", r && "img"] }, dE, t);
  },
  hE = Q("div", {
    name: "MuiCardMedia",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { isMediaComponent: r, isImageComponent: o } = n;
      return [t.root, r && t.media, o && t.img];
    },
  })(({ ownerState: e }) =>
    b(
      {
        display: "block",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      e.isMediaComponent && { width: "100%" },
      e.isImageComponent && { objectFit: "cover" }
    )
  ),
  mE = ["video", "audio", "picture", "iframe", "img"],
  gE = ["picture", "img"],
  yE = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiCardMedia" }),
      {
        children: o,
        className: i,
        component: s = "div",
        image: a,
        src: l,
        style: u,
      } = r,
      c = U(r, fE),
      d = mE.indexOf(s) !== -1,
      f = !d && a ? b({ backgroundImage: `url("${a}")` }, u) : u,
      v = b({}, r, {
        component: s,
        isMediaComponent: d,
        isImageComponent: gE.indexOf(s) !== -1,
      }),
      y = pE(v);
    return p.jsx(
      hE,
      b(
        {
          className: K(y.root, i),
          as: s,
          role: !d && a ? "img" : void 0,
          ref: n,
          style: f,
          ownerState: v,
          src: d ? a || l : void 0,
        },
        c,
        { children: o }
      )
    );
  }),
  vE = yE,
  xE = aP({
    createStyledComponent: Q("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${B(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => je({ props: e, name: "MuiContainer" }),
  }),
  wE = xE;
function SE(e) {
  return be("MuiModal", e);
}
Pe("MuiModal", ["root", "hidden", "backdrop"]);
const CE = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  kE = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return Re(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      SE,
      r
    );
  },
  bE = Q("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  PE = Q(I2, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  TE = S.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = je({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = PE,
        BackdropProps: d,
        className: f,
        closeAfterTransition: v = !1,
        children: y,
        container: x,
        component: k,
        components: m = {},
        componentsProps: h = {},
        disableAutoFocus: g = !1,
        disableEnforceFocus: w = !1,
        disableEscapeKeyDown: C = !1,
        disablePortal: T = !1,
        disableRestoreFocus: P = !1,
        disableScrollLock: E = !1,
        hideBackdrop: $ = !1,
        keepMounted: j = !1,
        onBackdropClick: A,
        open: O,
        slotProps: z,
        slots: L,
      } = u,
      V = U(u, CE),
      I = b({}, u, {
        closeAfterTransition: v,
        disableAutoFocus: g,
        disableEnforceFocus: w,
        disableEscapeKeyDown: C,
        disablePortal: T,
        disableRestoreFocus: P,
        disableScrollLock: E,
        hideBackdrop: $,
        keepMounted: j,
      }),
      {
        getRootProps: H,
        getBackdropProps: R,
        getTransitionProps: N,
        portalRef: F,
        isTopModal: re,
        exited: le,
        hasTransition: en,
      } = E2(b({}, I, { rootRef: n })),
      ye = b({}, I, { exited: le }),
      Qe = kE(ye),
      Fe = {};
    if ((y.props.tabIndex === void 0 && (Fe.tabIndex = "-1"), en)) {
      const { onEnter: Cn, onExited: Pr } = N();
      (Fe.onEnter = Cn), (Fe.onExited = Pr);
    }
    const tn =
        (r = (o = L == null ? void 0 : L.root) != null ? o : m.Root) != null
          ? r
          : bE,
      rs =
        (i = (s = L == null ? void 0 : L.backdrop) != null ? s : m.Backdrop) !=
        null
          ? i
          : c,
      st = (a = z == null ? void 0 : z.root) != null ? a : h.root,
      Mo = (l = z == null ? void 0 : z.backdrop) != null ? l : h.backdrop,
      zl = Wh({
        elementType: tn,
        externalSlotProps: st,
        externalForwardedProps: V,
        getSlotProps: H,
        additionalProps: { ref: n, as: k },
        ownerState: ye,
        className: K(
          f,
          st == null ? void 0 : st.className,
          Qe == null ? void 0 : Qe.root,
          !ye.open && ye.exited && (Qe == null ? void 0 : Qe.hidden)
        ),
      }),
      Vl = Wh({
        elementType: rs,
        externalSlotProps: Mo,
        additionalProps: d,
        getSlotProps: (Cn) =>
          R(
            b({}, Cn, {
              onClick: (Pr) => {
                A && A(Pr), Cn != null && Cn.onClick && Cn.onClick(Pr);
              },
            })
          ),
        className: K(
          Mo == null ? void 0 : Mo.className,
          d == null ? void 0 : d.className,
          Qe == null ? void 0 : Qe.backdrop
        ),
        ownerState: ye,
      });
    return !j && !O && (!en || le)
      ? null
      : p.jsx(v2, {
          ref: F,
          container: x,
          disablePortal: T,
          children: p.jsxs(
            tn,
            b({}, zl, {
              children: [
                !$ && c ? p.jsx(rs, b({}, Vl)) : null,
                p.jsx(g2, {
                  disableEnforceFocus: w,
                  disableAutoFocus: g,
                  disableRestoreFocus: P,
                  isEnabled: re,
                  open: O,
                  children: S.cloneElement(y, Fe),
                }),
              ],
            })
          ),
        });
  }),
  EE = TE,
  RE = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function jE(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = Po(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s =
      u.getPropertyValue("-webkit-transform") ||
      u.getPropertyValue("transform");
  }
  let a = 0,
    l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    (a = parseInt(u[4], 10)), (l = parseInt(u[5], 10));
  }
  return e === "left"
    ? o
      ? `translateX(${o.right + a - r.left}px)`
      : `translateX(${i.innerWidth + a - r.left}px)`
    : e === "right"
    ? o
      ? `translateX(-${r.right - o.left - a}px)`
      : `translateX(-${r.left + r.width - a}px)`
    : e === "up"
    ? o
      ? `translateY(${o.bottom + l - r.top}px)`
      : `translateY(${i.innerHeight + l - r.top}px)`
    : o
    ? `translateY(-${r.top - o.top + r.height - l}px)`
    : `translateY(-${r.top + r.height - l}px)`;
}
function ME(e) {
  return typeof e == "function" ? e() : e;
}
function Es(e, t, n) {
  const r = ME(n),
    o = jE(e, t, r);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const $E = S.forwardRef(function (t, n) {
    const r = Jt(),
      o = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp,
      },
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: s,
        appear: a = !0,
        children: l,
        container: u,
        direction: c = "down",
        easing: d = o,
        in: f,
        onEnter: v,
        onEntered: y,
        onEntering: x,
        onExit: k,
        onExited: m,
        onExiting: h,
        style: g,
        timeout: w = i,
        TransitionComponent: C = Av,
      } = t,
      T = U(t, RE),
      P = S.useRef(null),
      E = Zt(l.ref, P, n),
      $ = (R) => (N) => {
        R && (N === void 0 ? R(P.current) : R(P.current, N));
      },
      j = $((R, N) => {
        Es(c, R, u), _v(R), v && v(R, N);
      }),
      A = $((R, N) => {
        const F = Ra({ timeout: w, style: g, easing: d }, { mode: "enter" });
        (R.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          b({}, F)
        )),
          (R.style.transition = r.transitions.create("transform", b({}, F))),
          (R.style.webkitTransform = "none"),
          (R.style.transform = "none"),
          x && x(R, N);
      }),
      O = $(y),
      z = $(h),
      L = $((R) => {
        const N = Ra({ timeout: w, style: g, easing: d }, { mode: "exit" });
        (R.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          N
        )),
          (R.style.transition = r.transitions.create("transform", N)),
          Es(c, R, u),
          k && k(R);
      }),
      V = $((R) => {
        (R.style.webkitTransition = ""), (R.style.transition = ""), m && m(R);
      }),
      I = (R) => {
        s && s(P.current, R);
      },
      H = S.useCallback(() => {
        P.current && Es(c, P.current, u);
      }, [c, u]);
    return (
      S.useEffect(() => {
        if (f || c === "down" || c === "right") return;
        const R = hv(() => {
            P.current && Es(c, P.current, u);
          }),
          N = Po(P.current);
        return (
          N.addEventListener("resize", R),
          () => {
            R.clear(), N.removeEventListener("resize", R);
          }
        );
      }, [c, f, u]),
      S.useEffect(() => {
        f || H();
      }, [f, H]),
      p.jsx(
        C,
        b(
          {
            nodeRef: P,
            onEnter: j,
            onEntered: O,
            onEntering: A,
            onExit: L,
            onExited: V,
            onExiting: z,
            addEndListener: I,
            appear: a,
            in: f,
            timeout: w,
          },
          T,
          {
            children: (R, N) =>
              S.cloneElement(
                l,
                b(
                  {
                    ref: E,
                    style: b(
                      { visibility: R === "exited" && !f ? "hidden" : void 0 },
                      g,
                      l.props.style
                    ),
                  },
                  N
                )
              ),
          }
        )
      )
    );
  }),
  AE = $E;
function _E(e) {
  return be("MuiDrawer", e);
}
Pe("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const NE = ["BackdropProps"],
  OE = [
    "anchor",
    "BackdropProps",
    "children",
    "className",
    "elevation",
    "hideBackdrop",
    "ModalProps",
    "onClose",
    "open",
    "PaperProps",
    "SlideProps",
    "TransitionComponent",
    "transitionDuration",
    "variant",
  ],
  Dv = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      (n.variant === "permanent" || n.variant === "persistent") && t.docked,
      t.modal,
    ];
  },
  IE = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      o = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${B(n)}`,
          r !== "temporary" && `paperAnchorDocked${B(n)}`,
        ],
      };
    return Re(o, _E, t);
  },
  LE = Q(EE, { name: "MuiDrawer", slot: "Root", overridesResolver: Dv })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  Zh = Q("div", {
    shouldForwardProp: Zi,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Dv,
  })({ flex: "0 0 auto" }),
  DE = Q(Nv, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${B(n.anchor)}`],
        n.variant !== "temporary" && t[`paperAnchorDocked${B(n.anchor)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0,
      },
      t.anchor === "left" && { left: 0 },
      t.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "right" && { right: 0 },
      t.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "left" &&
        t.variant !== "temporary" && {
          borderRight: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "top" &&
        t.variant !== "temporary" && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "right" &&
        t.variant !== "temporary" && {
          borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "bottom" &&
        t.variant !== "temporary" && {
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
        }
    )
  ),
  Fv = { left: "right", right: "left", top: "down", bottom: "up" };
function FE(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function zE({ direction: e }, t) {
  return e === "rtl" && FE(t) ? Fv[t] : t;
}
const VE = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiDrawer" }),
      o = Jt(),
      i = xv(),
      s = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        anchor: a = "left",
        BackdropProps: l,
        children: u,
        className: c,
        elevation: d = 16,
        hideBackdrop: f = !1,
        ModalProps: { BackdropProps: v } = {},
        onClose: y,
        open: x = !1,
        PaperProps: k = {},
        SlideProps: m,
        TransitionComponent: h = AE,
        transitionDuration: g = s,
        variant: w = "temporary",
      } = r,
      C = U(r.ModalProps, NE),
      T = U(r, OE),
      P = S.useRef(!1);
    S.useEffect(() => {
      P.current = !0;
    }, []);
    const E = zE({ direction: i ? "rtl" : "ltr" }, a),
      j = b({}, r, { anchor: a, elevation: d, open: x, variant: w }, T),
      A = IE(j),
      O = p.jsx(
        DE,
        b({ elevation: w === "temporary" ? d : 0, square: !0 }, k, {
          className: K(A.paper, k.className),
          ownerState: j,
          children: u,
        })
      );
    if (w === "permanent")
      return p.jsx(
        Zh,
        b({ className: K(A.root, A.docked, c), ownerState: j, ref: n }, T, {
          children: O,
        })
      );
    const z = p.jsx(
      h,
      b({ in: x, direction: Fv[E], timeout: g, appear: P.current }, m, {
        children: O,
      })
    );
    return w === "persistent"
      ? p.jsx(
          Zh,
          b({ className: K(A.root, A.docked, c), ownerState: j, ref: n }, T, {
            children: z,
          })
        )
      : p.jsx(
          LE,
          b(
            {
              BackdropProps: b({}, l, v, { transitionDuration: g }),
              className: K(A.root, A.modal, c),
              open: x,
              ownerState: j,
              onClose: y,
              hideBackdrop: f,
              ref: n,
            },
            T,
            C,
            { children: z }
          )
        );
  }),
  BE = VE;
function UE(e) {
  return be("MuiFab", e);
}
const WE = Pe("MuiFab", [
    "root",
    "primary",
    "secondary",
    "extended",
    "circular",
    "focusVisible",
    "disabled",
    "colorInherit",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "info",
    "error",
    "warning",
    "success",
  ]),
  Jh = WE,
  HE = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "disableFocusRipple",
    "focusVisibleClassName",
    "size",
    "variant",
  ],
  KE = (e) => {
    const { color: t, variant: n, classes: r, size: o } = e,
      i = {
        root: ["root", n, `size${B(o)}`, t === "inherit" ? "colorInherit" : t],
      },
      s = Re(i, UE, r);
    return b({}, r, s);
  },
  GE = Q(on, {
    name: "MuiFab",
    slot: "Root",
    shouldForwardProp: (e) => Zi(e) || e === "classes",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${B(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        t[B(n.size)],
        t[n.color],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      return b(
        {},
        e.typography.button,
        {
          minHeight: 36,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color"],
            { duration: e.transitions.duration.short }
          ),
          borderRadius: "50%",
          padding: 0,
          minWidth: 0,
          width: 56,
          height: 56,
          zIndex: (e.vars || e).zIndex.fab,
          boxShadow: (e.vars || e).shadows[6],
          "&:active": { boxShadow: (e.vars || e).shadows[12] },
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          "&:hover": {
            backgroundColor: (e.vars || e).palette.grey.A100,
            "@media (hover: none)": {
              backgroundColor: (e.vars || e).palette.grey[300],
            },
            textDecoration: "none",
          },
          [`&.${Jh.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
        },
        t.size === "small" && { width: 40, height: 40 },
        t.size === "medium" && { width: 48, height: 48 },
        t.variant === "extended" && {
          borderRadius: 48 / 2,
          padding: "0 16px",
          width: "auto",
          minHeight: "auto",
          minWidth: 48,
          height: 48,
        },
        t.variant === "extended" &&
          t.size === "small" && {
            width: "auto",
            padding: "0 8px",
            borderRadius: 34 / 2,
            minWidth: 34,
            height: 34,
          },
        t.variant === "extended" &&
          t.size === "medium" && {
            width: "auto",
            padding: "0 16px",
            borderRadius: 40 / 2,
            minWidth: 40,
            height: 40,
          },
        t.color === "inherit" && { color: "inherit" }
      );
    },
    ({ theme: e, ownerState: t }) =>
      b(
        {},
        t.color !== "inherit" &&
          t.color !== "default" &&
          (e.vars || e).palette[t.color] != null && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
            "&:hover": {
              backgroundColor: (e.vars || e).palette[t.color].dark,
              "@media (hover: none)": {
                backgroundColor: (e.vars || e).palette[t.color].main,
              },
            },
          }
      ),
    ({ theme: e }) => ({
      [`&.${Jh.disabled}`]: {
        color: (e.vars || e).palette.action.disabled,
        boxShadow: (e.vars || e).shadows[0],
        backgroundColor: (e.vars || e).palette.action.disabledBackground,
      },
    })
  ),
  YE = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiFab" }),
      {
        children: o,
        className: i,
        color: s = "default",
        component: a = "button",
        disabled: l = !1,
        disableFocusRipple: u = !1,
        focusVisibleClassName: c,
        size: d = "large",
        variant: f = "circular",
      } = r,
      v = U(r, HE),
      y = b({}, r, {
        color: s,
        component: a,
        disabled: l,
        disableFocusRipple: u,
        size: d,
        variant: f,
      }),
      x = KE(y);
    return p.jsx(
      GE,
      b(
        {
          className: K(x.root, i),
          component: a,
          disabled: l,
          focusRipple: !u,
          focusVisibleClassName: K(x.focusVisible, c),
          ownerState: y,
          ref: n,
        },
        v,
        { classes: x, children: o }
      )
    );
  }),
  QE = YE,
  XE = S.createContext(),
  em = XE;
function qE(e) {
  return be("MuiGrid", e);
}
const ZE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  JE = ["column-reverse", "column", "row-reverse", "row"],
  eR = ["nowrap", "wrap-reverse", "wrap"],
  Bo = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Ni = Pe("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...ZE.map((e) => `spacing-xs-${e}`),
    ...JE.map((e) => `direction-xs-${e}`),
    ...eR.map((e) => `wrap-xs-${e}`),
    ...Bo.map((e) => `grid-xs-${e}`),
    ...Bo.map((e) => `grid-sm-${e}`),
    ...Bo.map((e) => `grid-md-${e}`),
    ...Bo.map((e) => `grid-lg-${e}`),
    ...Bo.map((e) => `grid-xl-${e}`),
  ]),
  tR = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function lo(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function nR({ theme: e, ownerState: t }) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if ((t[o] && (n = t[o]), !n)) return r;
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const s = fl({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof s == "object" ? s[o] : s;
      if (a == null) return r;
      const l = `${Math.round((n / a) * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const d = `calc(${l} + ${lo(c)})`;
          u = { flexBasis: d, maxWidth: d };
        }
      }
      i = b({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    );
  }, {});
}
function rR({ theme: e, ownerState: t }) {
  const n = fl({ values: t.direction, breakpoints: e.breakpoints.values });
  return jt({ theme: e }, n, (r) => {
    const o = { flexDirection: r };
    return (
      r.indexOf("column") === 0 &&
        (o[`& > .${Ni.item}`] = { maxWidth: "none" }),
      o
    );
  });
}
function zv({ breakpoints: e, values: t }) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function oR({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = fl({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = zv({ breakpoints: e.breakpoints.values, values: i })),
      (o = jt({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              marginTop: `-${lo(c)}`,
              [`& > .${Ni.item}`]: { paddingTop: lo(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : { marginTop: 0, [`& > .${Ni.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function iR({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = fl({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = zv({ breakpoints: e.breakpoints.values, values: i })),
      (o = jt({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              width: `calc(100% + ${lo(c)})`,
              marginLeft: `-${lo(c)}`,
              [`& > .${Ni.item}`]: { paddingLeft: lo(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : {
              width: "100%",
              marginLeft: 0,
              [`& > .${Ni.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return o;
}
function sR(e, t, n = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
    }),
    r
  );
}
const aR = Q("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: s,
        wrap: a,
        zeroMinWidth: l,
        breakpoints: u,
      } = n;
    let c = [];
    r && (c = sR(s, u, t));
    const d = [];
    return (
      u.forEach((f) => {
        const v = n[f];
        v && d.push(t[`grid-${f}-${String(v)}`]);
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...c,
        o !== "row" && t[`direction-xs-${String(o)}`],
        a !== "wrap" && t[`wrap-xs-${String(a)}`],
        ...d,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    b(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap }
    ),
  rR,
  oR,
  iR,
  nR
);
function lR(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return (
    t.forEach((r) => {
      const o = e[r];
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`;
        n.push(i);
      }
    }),
    n
  );
}
const uR = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: a,
      breakpoints: l,
    } = e;
    let u = [];
    n && (u = lR(i, l));
    const c = [];
    l.forEach((f) => {
      const v = e[f];
      v && c.push(`grid-${f}-${String(v)}`);
    });
    const d = {
      root: [
        "root",
        n && "container",
        o && "item",
        a && "zeroMinWidth",
        ...u,
        r !== "row" && `direction-xs-${String(r)}`,
        s !== "wrap" && `wrap-xs-${String(s)}`,
        ...c,
      ],
    };
    return Re(d, qE, t);
  },
  cR = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiGrid" }),
      { breakpoints: o } = Jt(),
      i = xl(r),
      {
        className: s,
        columns: a,
        columnSpacing: l,
        component: u = "div",
        container: c = !1,
        direction: d = "row",
        item: f = !1,
        rowSpacing: v,
        spacing: y = 0,
        wrap: x = "wrap",
        zeroMinWidth: k = !1,
      } = i,
      m = U(i, tR),
      h = v || y,
      g = l || y,
      w = S.useContext(em),
      C = c ? a || 12 : w,
      T = {},
      P = b({}, m);
    o.keys.forEach((j) => {
      m[j] != null && ((T[j] = m[j]), delete P[j]);
    });
    const E = b(
        {},
        i,
        {
          columns: C,
          container: c,
          direction: d,
          item: f,
          rowSpacing: h,
          columnSpacing: g,
          wrap: x,
          zeroMinWidth: k,
          spacing: y,
        },
        T,
        { breakpoints: o.keys }
      ),
      $ = uR(E);
    return p.jsx(em.Provider, {
      value: C,
      children: p.jsx(
        aR,
        b({ ownerState: E, className: K($.root, s), as: u, ref: n }, P)
      ),
    });
  }),
  Z = cR,
  dR = ["initialWidth", "width"],
  _n = ["xs", "sm", "md", "lg", "xl"],
  fR = (e, t, n = !0) =>
    n ? _n.indexOf(e) <= _n.indexOf(t) : _n.indexOf(e) < _n.indexOf(t),
  pR = (e, t, n = !1) =>
    n ? _n.indexOf(t) <= _n.indexOf(e) : _n.indexOf(t) < _n.indexOf(e),
  hR =
    (e = {}) =>
    (t) => {
      const { withTheme: n = !1, noSSR: r = !1, initialWidth: o } = e;
      function i(s) {
        const a = Jt(),
          l = s.theme || a,
          u = yf({ theme: l, name: "MuiWithWidth", props: s }),
          { initialWidth: c, width: d } = u,
          f = U(u, dR),
          [v, y] = S.useState(!1);
        wr(() => {
          y(!0);
        }, []);
        const k = l.breakpoints.keys
            .slice()
            .reverse()
            .reduce((h, g) => {
              const w = Ml(l.breakpoints.up(g));
              return !h && w ? g : h;
            }, null),
          m = b(
            { width: d || (v || r ? k : void 0) || c || o },
            n ? { theme: l } : {},
            f
          );
        return m.width === void 0 ? null : p.jsx(t, b({}, m));
      }
      return i;
    };
function mR(e) {
  const { children: t, only: n, width: r } = e,
    o = Jt();
  let i = !0;
  if (n)
    if (Array.isArray(n))
      for (let s = 0; s < n.length; s += 1) {
        const a = n[s];
        if (r === a) {
          i = !1;
          break;
        }
      }
    else n && r === n && (i = !1);
  if (i)
    for (let s = 0; s < o.breakpoints.keys.length; s += 1) {
      const a = o.breakpoints.keys[s],
        l = e[`${a}Up`],
        u = e[`${a}Down`];
      if ((l && fR(a, r)) || (u && pR(a, r))) {
        i = !1;
        break;
      }
    }
  return i ? p.jsx(S.Fragment, { children: t }) : null;
}
const gR = hR()(mR);
function yR(e) {
  return be("PrivateHiddenCss", e);
}
Pe("PrivateHiddenCss", [
  "root",
  "xlDown",
  "xlUp",
  "onlyXl",
  "lgDown",
  "lgUp",
  "onlyLg",
  "mdDown",
  "mdUp",
  "onlyMd",
  "smDown",
  "smUp",
  "onlySm",
  "xsDown",
  "xsUp",
  "onlyXs",
]);
const vR = ["children", "className", "only"],
  xR = (e) => {
    const { classes: t, breakpoints: n } = e,
      r = {
        root: [
          "root",
          ...n.map(({ breakpoint: o, dir: i }) =>
            i === "only" ? `${i}${B(o)}` : `${o}${B(i)}`
          ),
        ],
      };
    return Re(r, yR, t);
  },
  wR = Q("div", { name: "PrivateHiddenCss", slot: "Root" })(
    ({ theme: e, ownerState: t }) => {
      const n = { display: "none" };
      return b(
        {},
        t.breakpoints
          .map(({ breakpoint: r, dir: o }) =>
            o === "only"
              ? { [e.breakpoints.only(r)]: n }
              : o === "up"
              ? { [e.breakpoints.up(r)]: n }
              : { [e.breakpoints.down(r)]: n }
          )
          .reduce(
            (r, o) => (
              Object.keys(o).forEach((i) => {
                r[i] = o[i];
              }),
              r
            ),
            {}
          )
      );
    }
  );
function SR(e) {
  const { children: t, className: n, only: r } = e,
    o = U(e, vR),
    i = Jt(),
    s = [];
  for (let u = 0; u < i.breakpoints.keys.length; u += 1) {
    const c = i.breakpoints.keys[u],
      d = o[`${c}Up`],
      f = o[`${c}Down`];
    d && s.push({ breakpoint: c, dir: "up" }),
      f && s.push({ breakpoint: c, dir: "down" });
  }
  r &&
    (Array.isArray(r) ? r : [r]).forEach((c) => {
      s.push({ breakpoint: c, dir: "only" });
    });
  const a = b({}, e, { breakpoints: s }),
    l = xR(a);
  return p.jsx(wR, { className: K(l.root, n), ownerState: a, children: t });
}
const CR = [
  "implementation",
  "lgDown",
  "lgUp",
  "mdDown",
  "mdUp",
  "smDown",
  "smUp",
  "xlDown",
  "xlUp",
  "xsDown",
  "xsUp",
];
function ku(e) {
  const {
      implementation: t = "js",
      lgDown: n = !1,
      lgUp: r = !1,
      mdDown: o = !1,
      mdUp: i = !1,
      smDown: s = !1,
      smUp: a = !1,
      xlDown: l = !1,
      xlUp: u = !1,
      xsDown: c = !1,
      xsUp: d = !1,
    } = e,
    f = U(e, CR);
  return t === "js"
    ? p.jsx(
        gR,
        b(
          {
            lgDown: n,
            lgUp: r,
            mdDown: o,
            mdUp: i,
            smDown: s,
            smUp: a,
            xlDown: l,
            xlUp: u,
            xsDown: c,
            xsUp: d,
          },
          f
        )
      )
    : p.jsx(
        SR,
        b(
          {
            lgDown: n,
            lgUp: r,
            mdDown: o,
            mdUp: i,
            smDown: s,
            smUp: a,
            xlDown: l,
            xlUp: u,
            xsDown: c,
            xsUp: d,
          },
          f
        )
      );
}
function kR(e) {
  return be("MuiLinearProgress", e);
}
const bR = Pe("MuiLinearProgress", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "determinate",
    "indeterminate",
    "buffer",
    "query",
    "dashed",
    "dashedColorPrimary",
    "dashedColorSecondary",
    "bar",
    "barColorPrimary",
    "barColorSecondary",
    "bar1Indeterminate",
    "bar1Determinate",
    "bar1Buffer",
    "bar2Indeterminate",
    "bar2Buffer",
  ]),
  tm = bR,
  PR = ["className", "color", "value", "valueBuffer", "variant"];
let Ro = (e) => e,
  nm,
  rm,
  om,
  im,
  sm,
  am;
const Bc = 4,
  TR = kr(
    nm ||
      (nm = Ro`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)
  ),
  ER = kr(
    rm ||
      (rm = Ro`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)
  ),
  RR = kr(
    om ||
      (om = Ro`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)
  ),
  jR = (e) => {
    const { classes: t, variant: n, color: r } = e,
      o = {
        root: ["root", `color${B(r)}`, n],
        dashed: ["dashed", `dashedColor${B(r)}`],
        bar1: [
          "bar",
          `barColor${B(r)}`,
          (n === "indeterminate" || n === "query") && "bar1Indeterminate",
          n === "determinate" && "bar1Determinate",
          n === "buffer" && "bar1Buffer",
        ],
        bar2: [
          "bar",
          n !== "buffer" && `barColor${B(r)}`,
          n === "buffer" && `color${B(r)}`,
          (n === "indeterminate" || n === "query") && "bar2Indeterminate",
          n === "buffer" && "bar2Buffer",
        ],
      };
    return Re(o, kR, t);
  },
  Tf = (e, t) =>
    t === "inherit"
      ? "currentColor"
      : e.vars
      ? e.vars.palette.LinearProgress[`${t}Bg`]
      : e.palette.mode === "light"
      ? kv(e.palette[t].main, 0.62)
      : Cv(e.palette[t].main, 0.5),
  MR = Q("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`color${B(n.color)}`], t[n.variant]];
    },
  })(({ ownerState: e, theme: t }) =>
    b(
      {
        position: "relative",
        overflow: "hidden",
        display: "block",
        height: 4,
        zIndex: 0,
        "@media print": { colorAdjust: "exact" },
        backgroundColor: Tf(t, e.color),
      },
      e.color === "inherit" &&
        e.variant !== "buffer" && {
          backgroundColor: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "currentColor",
            opacity: 0.3,
          },
        },
      e.variant === "buffer" && { backgroundColor: "transparent" },
      e.variant === "query" && { transform: "rotate(180deg)" }
    )
  ),
  $R = Q("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.dashed, t[`dashedColor${B(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) => {
      const n = Tf(t, e.color);
      return b(
        { position: "absolute", marginTop: 0, height: "100%", width: "100%" },
        e.color === "inherit" && { opacity: 0.3 },
        {
          backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,
          backgroundSize: "10px 10px",
          backgroundPosition: "0 -23px",
        }
      );
    },
    Ki(
      im ||
        (im = Ro`
    animation: ${0} 3s infinite linear;
  `),
      RR
    )
  ),
  AR = Q("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t[`barColor${B(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") &&
          t.bar1Indeterminate,
        n.variant === "determinate" && t.bar1Determinate,
        n.variant === "buffer" && t.bar1Buffer,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      b(
        {
          width: "100%",
          position: "absolute",
          left: 0,
          bottom: 0,
          top: 0,
          transition: "transform 0.2s linear",
          transformOrigin: "left",
          backgroundColor:
            e.color === "inherit"
              ? "currentColor"
              : (t.vars || t).palette[e.color].main,
        },
        e.variant === "determinate" && {
          transition: `transform .${Bc}s linear`,
        },
        e.variant === "buffer" && {
          zIndex: 1,
          transition: `transform .${Bc}s linear`,
        }
      ),
    ({ ownerState: e }) =>
      (e.variant === "indeterminate" || e.variant === "query") &&
      Ki(
        sm ||
          (sm = Ro`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),
        TR
      )
  ),
  _R = Q("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t[`barColor${B(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") &&
          t.bar2Indeterminate,
        n.variant === "buffer" && t.bar2Buffer,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      b(
        {
          width: "100%",
          position: "absolute",
          left: 0,
          bottom: 0,
          top: 0,
          transition: "transform 0.2s linear",
          transformOrigin: "left",
        },
        e.variant !== "buffer" && {
          backgroundColor:
            e.color === "inherit"
              ? "currentColor"
              : (t.vars || t).palette[e.color].main,
        },
        e.color === "inherit" && { opacity: 0.3 },
        e.variant === "buffer" && {
          backgroundColor: Tf(t, e.color),
          transition: `transform .${Bc}s linear`,
        }
      ),
    ({ ownerState: e }) =>
      (e.variant === "indeterminate" || e.variant === "query") &&
      Ki(
        am ||
          (am = Ro`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),
        ER
      )
  ),
  NR = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiLinearProgress" }),
      {
        className: o,
        color: i = "primary",
        value: s,
        valueBuffer: a,
        variant: l = "indeterminate",
      } = r,
      u = U(r, PR),
      c = b({}, r, { color: i, variant: l }),
      d = jR(c),
      f = xv(),
      v = {},
      y = { bar1: {}, bar2: {} };
    if ((l === "determinate" || l === "buffer") && s !== void 0) {
      (v["aria-valuenow"] = Math.round(s)),
        (v["aria-valuemin"] = 0),
        (v["aria-valuemax"] = 100);
      let x = s - 100;
      f && (x = -x), (y.bar1.transform = `translateX(${x}%)`);
    }
    if (l === "buffer" && a !== void 0) {
      let x = (a || 0) - 100;
      f && (x = -x), (y.bar2.transform = `translateX(${x}%)`);
    }
    return p.jsxs(
      MR,
      b(
        { className: K(d.root, o), ownerState: c, role: "progressbar" },
        v,
        { ref: n },
        u,
        {
          children: [
            l === "buffer"
              ? p.jsx($R, { className: d.dashed, ownerState: c })
              : null,
            p.jsx(AR, { className: d.bar1, ownerState: c, style: y.bar1 }),
            l === "determinate"
              ? null
              : p.jsx(_R, { className: d.bar2, ownerState: c, style: y.bar2 }),
          ],
        }
      )
    );
  }),
  OR = NR,
  IR = S.createContext({}),
  ja = IR;
function LR(e) {
  return be("MuiList", e);
}
Pe("MuiList", ["root", "padding", "dense", "subheader"]);
const DR = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  FR = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return Re(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      LR,
      t
    );
  },
  zR = Q("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    b(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  VR = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = U(r, DR),
      d = S.useMemo(() => ({ dense: a }), [a]),
      f = b({}, r, { component: s, dense: a, disablePadding: l }),
      v = FR(f);
    return p.jsx(ja.Provider, {
      value: d,
      children: p.jsxs(
        zR,
        b({ as: s, className: K(v.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  BR = VR;
function UR(e) {
  return be("MuiListItemButton", e);
}
const WR = Pe("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  Uo = WR,
  HR = [
    "alignItems",
    "autoFocus",
    "component",
    "children",
    "dense",
    "disableGutters",
    "divider",
    "focusVisibleClassName",
    "selected",
    "className",
  ],
  KR = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  GR = (e) => {
    const {
        alignItems: t,
        classes: n,
        dense: r,
        disabled: o,
        disableGutters: i,
        divider: s,
        selected: a,
      } = e,
      u = Re(
        {
          root: [
            "root",
            r && "dense",
            !i && "gutters",
            s && "divider",
            o && "disabled",
            t === "flex-start" && "alignItemsFlexStart",
            a && "selected",
          ],
        },
        UR,
        n
      );
    return b({}, n, u);
  },
  YR = Q(on, {
    shouldForwardProp: (e) => Zi(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: KR,
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shortest,
        }),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${Uo.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Kt(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Uo.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Kt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${Uo.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Kt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Kt(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${Uo.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${Uo.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      t.alignItems === "flex-start" && { alignItems: "flex-start" },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.dense && { paddingTop: 4, paddingBottom: 4 }
    )
  ),
  QR = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiListItemButton" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        component: s = "div",
        children: a,
        dense: l = !1,
        disableGutters: u = !1,
        divider: c = !1,
        focusVisibleClassName: d,
        selected: f = !1,
        className: v,
      } = r,
      y = U(r, HR),
      x = S.useContext(ja),
      k = S.useMemo(
        () => ({ dense: l || x.dense || !1, alignItems: o, disableGutters: u }),
        [o, x.dense, l, u]
      ),
      m = S.useRef(null);
    wr(() => {
      i && m.current && m.current.focus();
    }, [i]);
    const h = b({}, r, {
        alignItems: o,
        dense: k.dense,
        disableGutters: u,
        divider: c,
        selected: f,
      }),
      g = GR(h),
      w = Zt(m, n);
    return p.jsx(ja.Provider, {
      value: k,
      children: p.jsx(
        YR,
        b(
          {
            ref: w,
            href: y.href || y.to,
            component: (y.href || y.to) && s === "div" ? "button" : s,
            focusVisibleClassName: K(g.focusVisible, d),
            ownerState: h,
            className: K(g.root, v),
          },
          y,
          { classes: g, children: a }
        )
      ),
    });
  }),
  _r = QR;
function XR(e) {
  return be("MuiListItemText", e);
}
const qR = Pe("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  lm = qR,
  ZR = [
    "children",
    "className",
    "disableTypography",
    "inset",
    "primary",
    "primaryTypographyProps",
    "secondary",
    "secondaryTypographyProps",
  ],
  JR = (e) => {
    const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
    return Re(
      {
        root: ["root", n && "inset", i && "dense", r && o && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      XR,
      t
    );
  },
  ej = Q("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${lm.primary}`]: t.primary },
        { [`& .${lm.secondary}`]: t.secondary },
        t.root,
        n.inset && t.inset,
        n.primary && n.secondary && t.multiline,
        n.dense && t.dense,
      ];
    },
  })(({ ownerState: e }) =>
    b(
      { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
      e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
      e.inset && { paddingLeft: 56 }
    )
  ),
  tj = S.forwardRef(function (t, n) {
    const r = je({ props: t, name: "MuiListItemText" }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: a = !1,
        primary: l,
        primaryTypographyProps: u,
        secondary: c,
        secondaryTypographyProps: d,
      } = r,
      f = U(r, ZR),
      { dense: v } = S.useContext(ja);
    let y = l ?? o,
      x = c;
    const k = b({}, r, {
        disableTypography: s,
        inset: a,
        primary: !!y,
        secondary: !!x,
        dense: v,
      }),
      m = JR(k);
    return (
      y != null &&
        y.type !== ge &&
        !s &&
        (y = p.jsx(
          ge,
          b(
            {
              variant: v ? "body2" : "body1",
              className: m.primary,
              component: u != null && u.variant ? void 0 : "span",
              display: "block",
            },
            u,
            { children: y }
          )
        )),
      x != null &&
        x.type !== ge &&
        !s &&
        (x = p.jsx(
          ge,
          b(
            {
              variant: "body2",
              className: m.secondary,
              color: "text.secondary",
              display: "block",
            },
            d,
            { children: x }
          )
        )),
      p.jsxs(
        ej,
        b({ className: K(m.root, i), ownerState: k, ref: n }, f, {
          children: [y, x],
        })
      )
    );
  }),
  Nr = tj,
  nj = ["getTrigger", "target"];
function rj(e, t) {
  const { disableHysteresis: n = !1, threshold: r = 100, target: o } = t,
    i = e.current;
  return (
    o && (e.current = o.pageYOffset !== void 0 ? o.pageYOffset : o.scrollTop),
    !n && i !== void 0 && e.current < i ? !1 : e.current > r
  );
}
const oj = typeof window < "u" ? window : null;
function ij(e = {}) {
  const { getTrigger: t = rj, target: n = oj } = e,
    r = U(e, nj),
    o = S.useRef(),
    [i, s] = S.useState(() => t(o, r));
  return (
    S.useEffect(() => {
      const a = () => {
        s(t(o, b({ target: n }, r)));
      };
      return (
        a(),
        n.addEventListener("scroll", a, { passive: !0 }),
        () => {
          n.removeEventListener("scroll", a, { passive: !0 });
        }
      );
    }, [n, t, JSON.stringify(r)]),
    i
  );
}
const sj = Mv(
    p.jsx("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
    "Menu"
  ),
  aj = (e) => {
    const [t, n] = S.useState(!1),
      r = (o) => {
        const i = document.getElementById(o);
        i && i.scrollIntoView({ behavior: "smooth" });
      };
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(ku, {
          lgDown: !0,
          children: p.jsxs(He, {
            sx: { position: "absolute", top: 36, left: 30 },
            children: [
              p.jsx(on, {
                sx: { mr: { xl: 4, lg: 2, md: 1 }, color: "white" },
                onClick: () => r("Tokenomics"),
                children: "Tokenomics",
              }),
              p.jsx(on, {
                sx: { mr: { xl: 4, lg: 2, md: 1 }, color: "white" },
                onClick: () => r("roadmap"),
                children: "Roadmap",
              }),
              p.jsx(on, {
                sx: { mr: { xl: 4, lg: 2, md: 1 }, color: "white" },
                onClick: () => r("how_to_buy"),
                children: "How to Buy",
              }),
              p.jsx(on, {
                sx: { mr: { xl: 4, lg: 2, md: 1 }, color: "white" },
                onClick: () => r("about"),
                children: "About Me",
              }),
            ],
          }),
        }),
        p.jsx(Z, {
          container: !0,
          justifyContent: "center",
          children: p.jsxs(ge, {
            variant: "h2",
            color: "white",
            sx: {
              position: "absolute",
              top: 146,
              textShadow:
                "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
            },
            children: ["0xWhale", " "],
          }),
        }),
        p.jsx(ku, {
          lgDown: !0,
          children: p.jsxs(He, {
            sx: { position: "absolute", top: 32, right: 30 },
            children: [
              p.jsx(Ir, {
                component: "a",
                target: "_blank",
                href: "https://twitter.com/whale0x_eth",
                children: p.jsx("img", { src: "assets/svg/x.svg", width: 20 }),
              }),
              p.jsx(Ir, {
                sx: { ml: 2 },
                component: "a",
                target: "_blank",
                href: "https://t.me/whale0x_eth",
                children: p.jsx("img", { src: "assets/svg/te.svg", width: 20 }),
              }),
            ],
          }),
        }),
        p.jsx(ku, {
          lgUp: !0,
          children: p.jsx(Ir, {
            onClick: () => {
              n(!0);
            },
            sx: { position: "absolute", top: 32, right: 30 },
            children: p.jsx(sj, {}),
          }),
        }),
        p.jsxs(BE, {
          open: t,
          anchor: "right",
          PaperProps: { sx: { backgroundColor: "#BEECFF" } },
          onClose: () => {
            n(!1);
          },
          children: [
            p.jsx(He, {
              sx: { width: 150, display: "flex", justifyContent: "center" },
              role: "presentation",
              children: p.jsxs(BR, {
                sx: { mt: 6 },
                children: [
                  p.jsx(_r, {
                    onClick: () => {
                      r("Tokenomics"), n(!1);
                    },
                    children: p.jsx(Nr, {
                      sx: { textShadow: "none" },
                      children: "Tokenomics",
                    }),
                  }),
                  p.jsx(_r, {
                    onClick: () => {
                      r("roadmap"), n(!1);
                    },
                    children: p.jsx(Nr, {
                      sx: { textShadow: "none" },
                      children: "Roadmap",
                    }),
                  }),
                  p.jsx(_r, {
                    onClick: () => {
                      r("how_to_buy"), n(!1);
                    },
                    children: p.jsx(Nr, {
                      sx: { textShadow: "none" },
                      children: "How to buy",
                    }),
                  }),
                  p.jsx(_r, {
                    onClick: () => {
                      r("about"), n(!1);
                    },
                    children: p.jsx(Nr, {
                      sx: { textShadow: "none" },
                      children: "About Me",
                    }),
                  }),
                ],
              }),
            }),
            p.jsxs(He, {
              children: [
                p.jsx(Ir, {
                  component: "a",
                  target: "_blank",
                  href: "https://twitter.com/whale0x_eth",
                  children: p.jsx("img", {
                    src: "assets/svg/x.svg",
                    width: 20,
                  }),
                }),
                p.jsx(Ir, {
                  sx: { ml: 1 },
                  component: "a",
                  target: "_blank",
                  href: "https://t.me/whale0x_eth",
                  children: p.jsx("img", {
                    src: "assets/svg/te.svg",
                    width: 20,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function lj() {
  const e = Jt(),
    t = Ml(e.breakpoints.down("md")),
    n = () => {
      navigator.clipboard
        .writeText("0x6E57be802B9c3aB332687eC23aA3bAF565438C9B")
        .then(() => {
          console.log("Text copied successfully");
        })
        .catch((i) => {
          console.error("Unable to copy text: ", i);
        });
    };
  function r(o, i = 10) {
    if (o.length <= i) return o;
    const s = o.substring(0, 10),
      a = o.substring(o.length - 10);
    return `${s} ... ${a}`;
  }
  return p.jsxs("section", {
    className: "hero",
    children: [
      p.jsx(aj, {}),
      p.jsx("img", {
        src: "assets/img/ready/website 4.png",
        style: { borderRadius: 4 },
      }),
      t
        ? p.jsxs(He, {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              pt: 4,
              px: 1,
              pb: 4,
              backgroundColor: "#3A8FC9",
            },
            children: [
              p.jsxs(He, {
                children: [
                  p.jsx(ge, {
                    variant: "h5",
                    color: "azure",
                    children: "Contract Address:",
                  }),
                  p.jsx(ge, {
                    variant: "caption",
                    color: "azure",
                    children: r("0x6E57be802B9c3aB332687eC23aA3bAF565438C9B"),
                  }),
                ],
              }),
              p.jsx("a", {
                href: "https://www.dextools.io/app/en/ether/pool-explorer",
                style: {
                  background:
                    ' url("assets/img/ready/ready-copy-button-background.svg") center center no-repeat',
                  backgroundSize: "contain",
                  right: "-20px",
                  bottom: "-24px",
                  position: "absolute",
                  padding: "16px 32px",
                  border: "none",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "12px"
                },
                children: "Dextools",
              }),
            ],
          })
        : p.jsx(He, {
            sx: { position: "absolute", top: "35%", right: "16%" },
            children: p.jsxs(He, {
              sx: { position: "relative" },
              children: [
                p.jsx("img", {
                  src: "assets/img/ready/ready-contract-background.svg",
                  style: {
                    maxWidth: t ? "200px" : "560px",
                    height: t ? "60px" : "120px",
                  },
                }),
                p.jsxs(Z, {
                  container: !0,
                  justifyContent: "center",
                  children: [
                    !t &&
                      p.jsxs(ge, {
                        className: "ca",
                        sx: {
                          position: "absolute",
                          top: 20,
                          textTransform: "capitalize",
                        },
                        variant: "h4",
                        children: ["Contract Address:", " "],
                      }),
                    p.jsx(ge, {
                      variant: t ? "caption" : "h6",
                      className: "ca",
                      sx: { position: "absolute", top: t ? 10 : 60, left: 20 },
                      children: "0x6E57be802B9c3aB332687eC23aA3bAF565438C9B",
                    }),
                  ],
                }),
                p.jsx("a", {
                  href: "https://www.dextools.io/app/en/ether/pool-explorer",
                  style: {
                    background:
                      ' url("assets/img/ready/ready-copy-button-background.svg") center center no-repeat',
                    backgroundSize: "contain",
                    right: "-20px",
                    bottom: "-24px",
                    position: "absolute",
                    padding: "16px 32px",
                    border: "none",
                    textDecoration: "none",
                    color: "black",
                    fontSize: "12px"
                  },
                  children: "Dextools",
                }),
              ],
            }),
          }),
    ],
  });
}
const um = (e) =>
    p.jsxs("div", {
      children: [
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+283%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+1293%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+9238%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+567%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+930%" }),
        p.jsx("span", { children: "$0XWHALE" }),
        p.jsx("span", { className: "text-blue", children: "+330%" }),
      ],
    }),
  Vv = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Nl = S.createContext({}),
  Ef = S.createContext(null),
  Rf = typeof document < "u",
  uj = Rf ? S.useLayoutEffect : S.useEffect,
  Bv = S.createContext({ strict: !1 }),
  jf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  cj = "framerAppearId",
  Uv = "data-" + jf(cj),
  dj = { skipAnimations: !1, useManualTiming: !1 };
class cm {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function fj(e) {
  let t = new cm(),
    n = new cm(),
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return u && s.add(l), f.add(l) && d && o && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            s.has(c) && (a.schedule(c), e()), c(l);
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const Rs = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  pj = 40;
function Wv(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = Rs.reduce((d, f) => ((d[f] = fj(() => (n = !0))), d), {}),
    s = (d) => {
      i[d].process(o);
    },
    a = () => {
      const d = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, pj), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        Rs.forEach(s),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(a);
    };
  return {
    schedule: Rs.reduce((d, f) => {
      const v = i[f];
      return (d[f] = (y, x = !1, k = !1) => (n || l(), v.schedule(y, x, k))), d;
    }, {}),
    cancel: (d) => Rs.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const { schedule: Mf, cancel: BA } = Wv(queueMicrotask, !1);
function hj(e, t, n, r) {
  const { visualElement: o } = S.useContext(Nl),
    i = S.useContext(Bv),
    s = S.useContext(Ef),
    a = S.useContext(Vv).reducedMotion,
    l = S.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  S.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = S.useRef(!!(n[Uv] && !window.HandoffComplete));
  return (
    uj(() => {
      u &&
        (Mf.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    S.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Qr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function mj(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Qr(n) && (n.current = r));
    },
    [t]
  );
}
function Oi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ol(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const $f = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Af = ["initial", ...$f];
function Il(e) {
  return Ol(e.animate) || Af.some((t) => Oi(e[t]));
}
function Hv(e) {
  return !!(Il(e) || e.variants);
}
function gj(e, t) {
  if (Il(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Oi(n) ? n : void 0,
      animate: Oi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function yj(e) {
  const { initial: t, animate: n } = gj(e, S.useContext(Nl));
  return S.useMemo(() => ({ initial: t, animate: n }), [dm(t), dm(n)]);
}
function dm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const fm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ii = {};
for (const e in fm) Ii[e] = { isEnabled: (t) => fm[e].some((n) => !!t[n]) };
function vj(e) {
  for (const t in e) Ii[t] = { ...Ii[t], ...e[t] };
}
const Kv = S.createContext({}),
  Gv = S.createContext({}),
  xj = Symbol.for("motionComponentSymbol");
function wj({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && vj(e);
  function i(a, l) {
    let u;
    const c = { ...S.useContext(Vv), ...a, layoutId: Sj(a) },
      { isStatic: d } = c,
      f = yj(a),
      v = r(a, d);
    if (!d && Rf) {
      f.visualElement = hj(o, v, c, t);
      const y = S.useContext(Gv),
        x = S.useContext(Bv).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, x, e, y));
    }
    return S.createElement(
      Nl.Provider,
      { value: f },
      u && f.visualElement
        ? S.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, a, mj(v, f.visualElement, l), v, d, f.visualElement)
    );
  }
  const s = S.forwardRef(i);
  return (s[xj] = o), s;
}
function Sj({ layoutId: e }) {
  const t = S.useContext(Kv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Cj(e) {
  function t(r, o = {}) {
    return wj(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const kj = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function _f(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(kj.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Ma = {};
function bj(e) {
  Object.assign(Ma, e);
}
const Ji = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  br = new Set(Ji);
function Yv(e, { layout: t, layoutId: n }) {
  return (
    br.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ma[e] || e === "opacity"))
  );
}
const Ke = (e) => !!(e && e.getVelocity),
  Pj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Tj = Ji.length;
function Ej(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let s = 0; s < Tj; s++) {
    const a = Ji[s];
    if (e[a] !== void 0) {
      const l = Pj[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const Qv = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Xv = Qv("--"),
  Rj = Qv("var(--"),
  Nf = (e) => (Rj(e) ? jj.test(e.split("/*")[0].trim()) : !1),
  jj =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Mj = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Kn = (e, t, n) => (n > t ? t : n < e ? e : n),
  jo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  li = { ...jo, transform: (e) => Kn(0, 1, e) },
  js = { ...jo, default: 1 },
  ui = (e) => Math.round(e * 1e5) / 1e5,
  Of = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  $j =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  Aj =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function es(e) {
  return typeof e == "string";
}
const ts = (e) => ({
    test: (t) => es(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  bn = ts("deg"),
  qt = ts("%"),
  D = ts("px"),
  _j = ts("vh"),
  Nj = ts("vw"),
  pm = {
    ...qt,
    parse: (e) => qt.parse(e) / 100,
    transform: (e) => qt.transform(e * 100),
  },
  hm = { ...jo, transform: Math.round },
  qv = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: bn,
    rotateX: bn,
    rotateY: bn,
    rotateZ: bn,
    scale: js,
    scaleX: js,
    scaleY: js,
    scaleZ: js,
    skew: bn,
    skewX: bn,
    skewY: bn,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: li,
    originX: pm,
    originY: pm,
    originZ: D,
    zIndex: hm,
    backgroundPositionX: D,
    backgroundPositionY: D,
    fillOpacity: li,
    strokeOpacity: li,
    numOctaves: hm,
  };
function If(e, t, n, r) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (Xv(d)) {
      i[d] = f;
      continue;
    }
    const v = qv[d],
      y = Mj(f, v);
    if (br.has(d)) {
      if (((l = !0), (s[d] = y), !c)) continue;
      f !== (v.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = y)) : (o[d] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = Ej(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: v = 0 } = a;
    o.transformOrigin = `${d} ${f} ${v}`;
  }
}
const Lf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Zv(e, t, n) {
  for (const r in t) !Ke(t[r]) && !Yv(r, n) && (e[r] = t[r]);
}
function Oj({ transformTemplate: e }, t, n) {
  return S.useMemo(() => {
    const r = Lf();
    return (
      If(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function Ij(e, t, n) {
  const r = e.style || {},
    o = {};
  return Zv(o, r, e), Object.assign(o, Oj(e, t, n)), o;
}
function Lj(e, t, n) {
  const r = {},
    o = Ij(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const Dj = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function $a(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Dj.has(e)
  );
}
let Jv = (e) => !$a(e);
function Fj(e) {
  e && (Jv = (t) => (t.startsWith("on") ? !$a(t) : e(t)));
}
try {
  Fj(require("@emotion/is-prop-valid").default);
} catch {}
function zj(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((Jv(o) ||
        (n === !0 && $a(o)) ||
        (!t && !$a(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function mm(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function Vj(e, t, n) {
  const r = mm(t, e.x, e.width),
    o = mm(n, e.y, e.height);
  return `${r} ${o}`;
}
const Bj = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Uj = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Wj(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Bj : Uj;
  e[i.offset] = D.transform(-r);
  const s = D.transform(t),
    a = D.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Df(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((If(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: v, style: y, dimensions: x } = e;
  v.transform && (x && (y.transform = v.transform), delete v.transform),
    x &&
      (o !== void 0 || i !== void 0 || y.transform) &&
      (y.transformOrigin = Vj(
        x,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (v.x = t),
    n !== void 0 && (v.y = n),
    r !== void 0 && (v.scale = r),
    s !== void 0 && Wj(v, s, a, l, !1);
}
const ex = () => ({ ...Lf(), attrs: {} }),
  Ff = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Hj(e, t, n, r) {
  const o = S.useMemo(() => {
    const i = ex();
    return (
      Df(i, t, { enableHardwareAcceleration: !1 }, Ff(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Zv(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function Kj(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (_f(n) ? Hj : Lj)(r, i, s, n),
      u = zj(r, typeof n == "string", e),
      c = n !== S.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = r,
      f = S.useMemo(() => (Ke(d) ? d.get() : d), [d]);
    return S.createElement(n, { ...c, children: f });
  };
}
function tx(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const nx = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function rx(e, t, n, r) {
  tx(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(nx.has(o) ? o : jf(o), t.attrs[o]);
}
function zf(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (Ke(n[o]) || (t.style && Ke(t.style[o])) || Yv(o, e)) && (r[o] = n[o]);
  return r;
}
function ox(e, t) {
  const n = zf(e, t);
  for (const r in e)
    if (Ke(e[r]) || Ke(t[r])) {
      const o =
        Ji.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function Vf(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function Gj(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Uc = (e) => Array.isArray(e),
  Yj = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Qj = (e) => (Uc(e) ? e[e.length - 1] || 0 : e);
function Xs(e) {
  const t = Ke(e) ? e.get() : e;
  return Yj(t) ? t.toValue() : t;
}
function Xj(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: qj(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const ix = (e) => (t, n) => {
  const r = S.useContext(Nl),
    o = S.useContext(Ef),
    i = () => Xj(e, t, r, o);
  return n ? i() : Gj(i);
};
function qj(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Xs(i[f]);
  let { initial: s, animate: a } = e;
  const l = Il(e),
    u = Hv(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != "boolean" &&
      !Ol(d) &&
      (Array.isArray(d) ? d : [d]).forEach((v) => {
        const y = Vf(e, v);
        if (!y) return;
        const { transitionEnd: x, transition: k, ...m } = y;
        for (const h in m) {
          let g = m[h];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (o[h] = g);
        }
        for (const h in x) o[h] = x[h];
      }),
    o
  );
}
const Ge = (e) => e,
  {
    schedule: Le,
    cancel: Gn,
    state: Ne,
    steps: bu,
  } = Wv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ge, !0),
  Zj = {
    useVisualState: ix({
      scrapeMotionValuesFromProps: ox,
      createRenderState: ex,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Le.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Le.render(() => {
            Df(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Ff(t.tagName),
              e.transformTemplate
            ),
              rx(t, n);
          });
      },
    }),
  },
  Jj = {
    useVisualState: ix({
      scrapeMotionValuesFromProps: zf,
      createRenderState: Lf,
    }),
  };
function eM(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(_f(e) ? Zj : Jj),
    preloadedFeatures: n,
    useRender: Kj(t),
    createVisualElement: r,
    Component: e,
  };
}
function un(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const sx = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ll(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const tM = (e) => (t) => sx(t) && e(t, Ll(t));
function fn(e, t, n, r) {
  return un(e, t, tM(n), r);
}
const nM = (e, t) => (n) => t(e(n)),
  pn = (...e) => e.reduce(nM);
function ax(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const gm = ax("dragHorizontal"),
  ym = ax("dragVertical");
function lx(e) {
  let t = !1;
  if (e === "y") t = ym();
  else if (e === "x") t = gm();
  else {
    const n = gm(),
      r = ym();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function ux() {
  const e = lx(!0);
  return e ? (e(), !1) : !0;
}
class Zn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function vm(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.pointerType === "touch" || ux()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && a[r](i, s);
    };
  return fn(e.current, n, o, { passive: !e.getProps()[r] });
}
class rM extends Zn {
  mount() {
    this.unmount = pn(vm(this.node, !0), vm(this.node, !1));
  }
  unmount() {}
}
class oM extends Zn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = pn(
      un(this.node.current, "focus", () => this.onFocus()),
      un(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const cx = (e, t) => (t ? (e === t ? !0 : cx(e, t.parentElement)) : !1);
function Pu(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ll(n));
}
class iM extends Zn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ge),
      (this.removeEndListeners = Ge),
      (this.removeAccessibleListeners = Ge),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = fn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              !d && !cx(this.node.current, a.target)
                ? c && c(a, l)
                : u && u(a, l);
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = fn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = pn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Pu("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && c(l, u);
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = un(this.node.current, "keyup", s)),
              Pu("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = un(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Pu("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = un(this.node.current, "blur", r);
        this.removeAccessibleListeners = pn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && r(t, n);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !ux()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && r(t, n);
  }
  mount() {
    const t = this.node.getProps(),
      n = fn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = un(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Wc = new WeakMap(),
  Tu = new WeakMap(),
  sM = (e) => {
    const t = Wc.get(e.target);
    t && t(e);
  },
  aM = (e) => {
    e.forEach(sM);
  };
function lM({ root: e, ...t }) {
  const n = e || document;
  Tu.has(n) || Tu.set(n, {});
  const r = Tu.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(aM, { root: e, ...t })), r[o];
}
function uM(e, t, n) {
  const r = lM(t);
  return (
    Wc.set(e, n),
    r.observe(e),
    () => {
      Wc.delete(e), r.unobserve(e);
    }
  );
}
const cM = { some: 0, all: 1 };
class dM extends Zn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : cM[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return uM(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(fM(t, n)) && this.startObserver();
  }
  unmount() {}
}
function fM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const pM = {
  inView: { Feature: dM },
  tap: { Feature: iM },
  focus: { Feature: oM },
  hover: { Feature: rM },
};
function dx(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function hM(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function mM(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Dl(e, t, n) {
  const r = e.getProps();
  return Vf(r, t, n !== void 0 ? n : r.custom, hM(e), mM(e));
}
const Bn = (e) => e * 1e3,
  hn = (e) => e / 1e3,
  gM = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  yM = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  vM = { type: "keyframes", duration: 0.8 },
  xM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  wM = (e, { keyframes: t }) =>
    t.length > 2
      ? vM
      : br.has(e)
      ? e.startsWith("scale")
        ? yM(t[1])
        : gM
      : xM;
function SM({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Bf(e, t) {
  return e[t] || e.default || e;
}
const CM = (e) => e !== null;
function Fl(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(CM),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
let qs;
function kM() {
  qs = void 0;
}
const Un = {
    now: () => (
      qs === void 0 &&
        Un.set(
          Ne.isProcessing || dj.useManualTiming
            ? Ne.timestamp
            : performance.now()
        ),
      qs
    ),
    set: (e) => {
      (qs = e), queueMicrotask(kM);
    },
  },
  fx = (e) => /^0[^.\s]+$/u.test(e);
function bM(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || fx(e)
    : !0;
}
let px = Ge;
const hx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  PM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function TM(e) {
  const t = PM.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function mx(e, t, n = 1) {
  const [r, o] = TM(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return hx(s) ? parseFloat(s) : s;
  }
  return Nf(o) ? mx(o, t, n + 1) : o;
}
const EM = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  xm = (e) => e === jo || e === D,
  wm = (e, t) => parseFloat(e.split(", ")[t]),
  Sm =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return wm(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? wm(i[1], e) : 0;
      }
    },
  RM = new Set(["x", "y", "z"]),
  jM = Ji.filter((e) => !RM.has(e));
function Cm(e) {
  const t = [];
  return (
    jM.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const xo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Sm(4, 13),
  y: Sm(5, 14),
};
xo.translateX = xo.x;
xo.translateY = xo.y;
const gx = (e) => (t) => t.test(e),
  MM = { test: (e) => e === "auto", parse: (e) => e },
  yx = [jo, D, qt, bn, Nj, _j, MM],
  km = (e) => yx.find(gx(e)),
  hr = new Set();
let Hc = !1,
  Kc = !1;
function vx() {
  if (Kc) {
    const e = Array.from(hr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      Cm(r).length && (n.set(r, Cm(r)), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Kc = !1), (Hc = !1), hr.forEach((e) => e.complete()), hr.clear();
}
function xx() {
  hr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Kc = !0);
  });
}
function $M() {
  xx(), vx();
}
class Uf {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (hr.add(this),
          Hc || ((Hc = !0), Le.read(xx), Le.resolveKeyframes(vx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      hr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), hr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Wf = (e, t) => (n) =>
    !!(
      (es(n) && Aj.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  wx = (e, t, n) => (r) => {
    if (!es(r)) return r;
    const [o, i, s, a] = r.match(Of);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  AM = (e) => Kn(0, 255, e),
  Eu = { ...jo, transform: (e) => Math.round(AM(e)) },
  dr = {
    test: Wf("rgb", "red"),
    parse: wx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Eu.transform(e) +
      ", " +
      Eu.transform(t) +
      ", " +
      Eu.transform(n) +
      ", " +
      ui(li.transform(r)) +
      ")",
  };
function _M(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Gc = { test: Wf("#"), parse: _M, transform: dr.transform },
  Xr = {
    test: Wf("hsl", "hue"),
    parse: wx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      qt.transform(ui(t)) +
      ", " +
      qt.transform(ui(n)) +
      ", " +
      ui(li.transform(r)) +
      ")",
  },
  Ue = {
    test: (e) => dr.test(e) || Gc.test(e) || Xr.test(e),
    parse: (e) =>
      dr.test(e) ? dr.parse(e) : Xr.test(e) ? Xr.parse(e) : Gc.parse(e),
    transform: (e) =>
      es(e) ? e : e.hasOwnProperty("red") ? dr.transform(e) : Xr.transform(e),
  };
function NM(e) {
  var t, n;
  return (
    isNaN(e) &&
    es(e) &&
    (((t = e.match(Of)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match($j)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Sx = "number",
  Cx = "color",
  OM = "var",
  IM = "var(",
  bm = "${}",
  LM =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Aa(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      LM,
      (l) => (
        Ue.test(l)
          ? (r.color.push(i), o.push(Cx), n.push(Ue.parse(l)))
          : l.startsWith(IM)
          ? (r.var.push(i), o.push(OM), n.push(l))
          : (r.number.push(i), o.push(Sx), n.push(parseFloat(l))),
        ++i,
        bm
      )
    )
    .split(bm);
  return { values: n, split: a, indexes: r, types: o };
}
function kx(e) {
  return Aa(e).values;
}
function bx(e) {
  const { split: t, types: n } = Aa(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === Sx
          ? (i += ui(o[s]))
          : a === Cx
          ? (i += Ue.transform(o[s]))
          : (i += o[s]);
      }
    return i;
  };
}
const DM = (e) => (typeof e == "number" ? 0 : e);
function FM(e) {
  const t = kx(e);
  return bx(e)(t.map(DM));
}
const Yn = {
    test: NM,
    parse: kx,
    createTransformer: bx,
    getAnimatableNone: FM,
  },
  zM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function VM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Of) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = zM.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const BM = /\b([a-z-]*)\(.*?\)/gu,
  Yc = {
    ...Yn,
    getAnimatableNone: (e) => {
      const t = e.match(BM);
      return t ? t.map(VM).join(" ") : e;
    },
  },
  UM = {
    ...qv,
    color: Ue,
    backgroundColor: Ue,
    outlineColor: Ue,
    fill: Ue,
    stroke: Ue,
    borderColor: Ue,
    borderTopColor: Ue,
    borderRightColor: Ue,
    borderBottomColor: Ue,
    borderLeftColor: Ue,
    filter: Yc,
    WebkitFilter: Yc,
  },
  Hf = (e) => UM[e];
function Px(e, t) {
  let n = Hf(e);
  return (
    n !== Yc && (n = Yn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function WM(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; )
    typeof e[r] == "string" && e[r] !== "none" && e[r] !== "0" && (o = e[r]),
      r++;
  if (o && n) for (const i of t) e[i] = Px(n, o);
}
class Tx extends Uf {
  constructor(t, n, r, o) {
    super(t, n, r, o, o == null ? void 0 : o.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      const u = t[l];
      if (typeof u == "string" && Nf(u)) {
        const c = mx(u, n.current);
        c !== void 0 && (t[l] = c);
      }
    }
    if (!EM.has(r) || t.length !== 2) return this.resolveNoneKeyframes();
    const [o, i] = t,
      s = km(o),
      a = km(i);
    if (s !== a)
      if (xm(s) && xm(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) bM(t[o]) && r.push(o);
    r.length && WM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xo[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = xo[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function HM(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Pm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Yn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function KM(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function GM(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  const i = e[e.length - 1],
    s = Pm(o, t),
    a = Pm(i, t);
  return !s || !a ? !1 : KM(e) || (n === "spring" && r);
}
class Ex {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return this._resolved || $M(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
    } = this.options;
    if (!GM(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Fl(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Rx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const YM = 5;
function jx(e, t, n) {
  const r = Math.max(t - YM, 0);
  return Rx(n - e(r), t - r);
}
const Ru = 0.001,
  QM = 0.01,
  XM = 10,
  qM = 0.05,
  ZM = 1;
function JM({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Kn(qM, ZM, s)),
    (e = Kn(QM, XM, hn(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            v = Qc(u, s),
            y = Math.exp(-d);
          return Ru - (f / v) * y;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            x = Qc(Math.pow(u, 2), s);
          return ((-o(u) + Ru > 0 ? -1 : 1) * ((f - v) * y)) / x;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Ru + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = t$(o, i, a);
  if (((e = Bn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const e$ = 12;
function t$(e, t, n) {
  let r = n;
  for (let o = 1; o < e$; o++) r = r - e(r) / t(r);
  return r;
}
function Qc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const n$ = ["duration", "bounce"],
  r$ = ["stiffness", "damping", "mass"];
function Tm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function o$(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Tm(e, r$) && Tm(e, n$)) {
    const n = JM(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Mx({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = o$({ ...r, velocity: -hn(r.velocity || 0) }),
    v = d || 0,
    y = l / (2 * Math.sqrt(a * u)),
    x = i - o,
    k = hn(Math.sqrt(a / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const g = Qc(k, y);
    h = (w) => {
      const C = Math.exp(-y * k * w);
      return (
        i - C * (((v + y * k * x) / g) * Math.sin(g * w) + x * Math.cos(g * w))
      );
    };
  } else if (y === 1) h = (g) => i - Math.exp(-k * g) * (x + (v + k * x) * g);
  else {
    const g = k * Math.sqrt(y * y - 1);
    h = (w) => {
      const C = Math.exp(-y * k * w),
        T = Math.min(g * w, 300);
      return (
        i - (C * ((v + y * k * x) * Math.sinh(T) + g * x * Math.cosh(T))) / g
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (g) => {
      const w = h(g);
      if (f) s.done = g >= c;
      else {
        let C = v;
        g !== 0 && (y < 1 ? (C = jx(h, g, w)) : (C = 0));
        const T = Math.abs(C) <= n,
          P = Math.abs(i - w) <= t;
        s.done = T && P;
      }
      return (s.value = s.done ? i : w), s;
    },
  };
}
function Em({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    v = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l;
  let x = n * t;
  const k = d + x,
    m = s === void 0 ? k : s(k);
  m !== k && (x = m - d);
  const h = (E) => -x * Math.exp(-E / r),
    g = (E) => m + h(E),
    w = (E) => {
      const $ = h(E),
        j = g(E);
      (f.done = Math.abs($) <= u), (f.value = f.done ? m : j);
    };
  let C, T;
  const P = (E) => {
    v(f.value) &&
      ((C = E),
      (T = Mx({
        keyframes: [f.value, y(f.value)],
        velocity: jx(g, E, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let $ = !1;
        return (
          !T && C === void 0 && (($ = !0), w(E), P(E)),
          C !== void 0 && E >= C ? T.next(E - C) : (!$ && w(E), f)
        );
      },
    }
  );
}
const $x = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  i$ = 1e-7,
  s$ = 12;
function a$(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = $x(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > i$ && ++a < s$);
  return s;
}
function ns(e, t, n, r) {
  if (e === t && n === r) return Ge;
  const o = (i) => a$(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : $x(o(i), t, r));
}
const l$ = ns(0.42, 0, 1, 1),
  u$ = ns(0, 0, 0.58, 1),
  Ax = ns(0.42, 0, 0.58, 1),
  c$ = (e) => Array.isArray(e) && typeof e[0] != "number",
  _x = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Nx = (e) => (t) => 1 - e(1 - t),
  Kf = (e) => 1 - Math.sin(Math.acos(e)),
  Ox = Nx(Kf),
  d$ = _x(Kf),
  Ix = ns(0.33, 1.53, 0.69, 0.99),
  Gf = Nx(Ix),
  f$ = _x(Gf),
  p$ = (e) =>
    (e *= 2) < 1 ? 0.5 * Gf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  h$ = {
    linear: Ge,
    easeIn: l$,
    easeInOut: Ax,
    easeOut: u$,
    circIn: Kf,
    circInOut: d$,
    circOut: Ox,
    backIn: Gf,
    backInOut: f$,
    backOut: Ix,
    anticipate: p$,
  },
  Rm = (e) => {
    if (Array.isArray(e)) {
      px(e.length === 4);
      const [t, n, r, o] = e;
      return ns(t, n, r, o);
    } else if (typeof e == "string") return h$[e];
    return e;
  },
  Li = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ce = (e, t, n) => e + (t - e) * n;
function ju(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function m$({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = ju(l, a, e + 1 / 3)), (i = ju(l, a, e)), (s = ju(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Mu = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  g$ = [Gc, dr, Xr],
  y$ = (e) => g$.find((t) => t.test(e));
function jm(e) {
  const t = y$(e);
  let n = t.parse(e);
  return t === Xr && (n = m$(n)), n;
}
const Mm = (e, t) => {
  const n = jm(e),
    r = jm(t),
    o = { ...n };
  return (i) => (
    (o.red = Mu(n.red, r.red, i)),
    (o.green = Mu(n.green, r.green, i)),
    (o.blue = Mu(n.blue, r.blue, i)),
    (o.alpha = ce(n.alpha, r.alpha, i)),
    dr.transform(o)
  );
};
function Xc(e, t) {
  return (n) => (n > 0 ? t : e);
}
function v$(e, t) {
  return (n) => ce(e, t, n);
}
function Yf(e) {
  return typeof e == "number"
    ? v$
    : typeof e == "string"
    ? Nf(e)
      ? Xc
      : Ue.test(e)
      ? Mm
      : S$
    : Array.isArray(e)
    ? Lx
    : typeof e == "object"
    ? Ue.test(e)
      ? Mm
      : x$
    : Xc;
}
function Lx(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => Yf(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function x$(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Yf(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function w$(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const S$ = (e, t) => {
  const n = Yn.createTransformer(t),
    r = Aa(e),
    o = Aa(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? pn(Lx(w$(r, o), o.values), n)
    : Xc(e, t);
};
function Dx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ce(e, t, n)
    : Yf(e)(e, t);
}
function C$(e, t, n) {
  const r = [],
    o = n || Dx,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ge : t;
      a = pn(l, a);
    }
    r.push(a);
  }
  return r;
}
function k$(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((px(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = C$(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Li(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(Kn(e[0], e[i - 1], u)) : l;
}
function b$(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Li(0, t, r);
    e.push(ce(n, 1, o));
  }
}
function P$(e) {
  const t = [0];
  return b$(t, e.length - 1), t;
}
function T$(e, t) {
  return e.map((n) => n * t);
}
function E$(e, t) {
  return e.map(() => t || Ax).splice(0, e.length - 1);
}
function _a({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = c$(r) ? r.map(Rm) : Rm(r),
    i = { done: !1, value: t[0] },
    s = T$(n && n.length === t.length ? n : P$(t), e),
    a = k$(s, t, { ease: Array.isArray(o) ? o : E$(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const $m = 2e4;
function R$(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < $m; ) (t += n), (r = e.next(t));
  return t >= $m ? 1 / 0 : t;
}
const j$ = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Le.update(t, !0),
      stop: () => Gn(t),
      now: () => (Ne.isProcessing ? Ne.timestamp : Un.now()),
    };
  },
  M$ = { decay: Em, inertia: Em, tween: _a, keyframes: _a, spring: Mx },
  $$ = (e) => e / 100;
class Qf extends Ex {
  constructor({ KeyframeResolver: t = Uf, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle");
    const { name: r, motionValue: o, keyframes: i } = this.options,
      s = (a, l) => this.onKeyframesResolved(a, l);
    r && o && o.owner
      ? (this.resolver = o.owner.resolveKeyframes(i, s, r, o))
      : (this.resolver = new t(i, s, r, o)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = M$[n] || _a;
    let l, u;
    a !== _a &&
      typeof t[0] != "number" &&
      ((l = pn($$, Dx(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = R$(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      v = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: v,
      repeatType: y,
      repeatDelay: x,
      onUpdate: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      w = i;
    if (v) {
      const E = Math.min(this.currentTime, c) / d;
      let $ = Math.floor(E),
        j = E % 1;
      !j && E >= 1 && (j = 1),
        j === 1 && $--,
        ($ = Math.min($, v + 1)),
        !!($ % 2) &&
          (y === "reverse"
            ? ((j = 1 - j), x && (j -= x / d))
            : y === "mirror" && (w = s)),
        (g = Kn(0, 1, j) * d);
    }
    const C = h ? { done: !1, value: l[0] } : w.next(g);
    a && (C.value = a(C.value));
    let { done: T } = C;
    !h &&
      u !== null &&
      (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      P && o !== void 0 && (C.value = Fl(l, this.options, o)),
      k && k(C.value),
      P && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? hn(t.calculatedDuration) : 0;
  }
  get time() {
    return hn(this.currentTime);
  }
  set time(t) {
    (t = Bn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = hn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = j$, onPlay: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.teardown();
    const { onStop: t } = this.options;
    t && t();
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Fx = (e) => Array.isArray(e) && typeof e[0] == "number";
function zx(e) {
  return !!(
    !e ||
    (typeof e == "string" && Vx[e]) ||
    Fx(e) ||
    (Array.isArray(e) && e.every(zx))
  );
}
const Xo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Vx = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Xo([0, 0.65, 0.55, 1]),
    circOut: Xo([0.55, 0, 1, 0.45]),
    backIn: Xo([0.31, 0.01, 0.66, -0.59]),
    backOut: Xo([0.33, 1.53, 0.69, 0.99]),
  };
function Bx(e) {
  if (e) return Fx(e) ? Xo(e) : Array.isArray(e) ? e.map(Bx) : Vx[e];
}
function A$(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Bx(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const _$ = HM(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  N$ = new Set(["opacity", "clipPath", "filter", "transform"]),
  Na = 10,
  O$ = 2e4;
function I$(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !zx(e.ease);
}
function L$(e, t) {
  const n = new Qf({ ...t, keyframes: e, repeat: 0, delay: 0 });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < O$; ) (r = n.sample(i)), o.push(r.value), (i += Na);
  return { times: void 0, keyframes: o, duration: i - Na, ease: "linear" };
}
class Am extends Ex {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: o } = this.options;
    (this.resolver = new Tx(o, (i, s) => this.onKeyframesResolved(i, s), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, motionValue: i, name: s } = this.options;
    if (!(!((r = i.owner) === null || r === void 0) && r.current)) return !1;
    if (I$(this.options)) {
      const { onComplete: l, onUpdate: u, motionValue: c, ...d } = this.options,
        f = L$(t, d);
      (t = f.keyframes),
        (o = f.duration),
        (this.options.times = f.times),
        (this.options.ease = f.ease);
    }
    const a = A$(i.owner.current, s, t, { ...this.options, duration: o });
    return (
      (a.startTime = Un.now()),
      this.pendingTimeline
        ? ((a.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (a.onfinish = () => {
            const { onComplete: l } = this.options;
            i.set(Fl(t, this.options, n)),
              l && l(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: a, duration: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return hn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return hn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Bn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ge;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Ge;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n, keyframes: r } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: o,
            onUpdate: i,
            onComplete: s,
            ...a
          } = this.options,
          l = new Qf({ ...a, keyframes: r }),
          u = Bn(this.time);
        o.setWithVelocity(l.sample(u - Na).value, l.sample(u).value, Na);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    return (
      _$() &&
      r &&
      N$.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const Xf =
  (e, t, n, r = {}, o, i) =>
  (s) => {
    const a = Bf(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Bn(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    SM(a) || (c = { ...c, ...wM(e, c) }),
      c.duration && (c.duration = Bn(c.duration)),
      c.repeatDelay && (c.repeatDelay = Bn(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      (c.type === !1 && ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = Fl(c.keyframes, a);
      if (f !== void 0) {
        Le.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return !i && Am.supports(c) ? new Am(c) : new Qf(c);
  };
function Oa(e) {
  return !!(Ke(e) && e.add);
}
function qf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Zf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Jf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return qf(this.subscriptions, t), () => Zf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const _m = 30,
  D$ = (e) => !isNaN(parseFloat(e));
class F$ {
  constructor(t, n = {}) {
    (this.version = "11.0.20"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Un.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = D$(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Un.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Jf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Le.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Un.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > _m
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, _m);
    return Rx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Di(e, t) {
  return new F$(e, t);
}
function z$(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Di(n));
}
function V$(e, t) {
  const n = Dl(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = Qj(i[s]);
    z$(e, s, a);
  }
}
function B$({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Ux(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const u = e.getValue("willChange");
  r && (s = r);
  const c = [],
    d = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const v = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null
      ),
      y = l[f];
    if (y === void 0 || (d && B$(d, f))) continue;
    const x = { delay: n, elapsed: 0, ...Bf(s || {}, f) };
    let k = !1;
    if (window.HandoffAppearAnimations) {
      const h = e.getProps()[Uv];
      if (h) {
        const g = window.HandoffAppearAnimations(h, f);
        g !== null && ((x.elapsed = g), (k = !0));
      }
    }
    v.start(
      Xf(f, v, y, e.shouldReduceMotion && br.has(f) ? { type: !1 } : x, e, k)
    );
    const m = v.animation;
    m && (Oa(u) && (u.add(f), m.then(() => u.remove(f))), c.push(m));
  }
  return (
    a &&
      Promise.all(c).then(() => {
        Le.update(() => {
          a && V$(e, a);
        });
      }),
    c
  );
}
function qc(e, t, n = {}) {
  var r;
  const o = Dl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(Ux(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return U$(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function U$(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(W$)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            qc(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function W$(e, t) {
  return e.sortNodePosition(t);
}
function H$(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => qc(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = qc(e, t, n);
  else {
    const o = typeof t == "function" ? Dl(e, t, n.custom) : t;
    r = Promise.all(Ux(e, o, n));
  }
  return r.then(() => {
    Le.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const K$ = [...$f].reverse(),
  G$ = $f.length;
function Y$(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => H$(e, n, r)));
}
function Q$(e) {
  let t = Y$(e);
  const n = q$();
  let r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = Dl(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: v, transitionEnd: y, ...x } = f;
      u = { ...u, ...x, ...y };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let v = {},
      y = 1 / 0;
    for (let k = 0; k < G$; k++) {
      const m = K$[k],
        h = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        w = Oi(g),
        C = m === l ? h.isActive : null;
      C === !1 && (y = k);
      let T = g === c[m] && g !== u[m] && w;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (h.protectedKeys = { ...v }),
        (!h.isActive && C === null) ||
          (!g && !h.prevProp) ||
          Ol(g) ||
          typeof g == "boolean")
      )
        continue;
      let E =
          X$(h.prevProp, g) ||
          (m === l && h.isActive && !T && w) ||
          (k > y && w),
        $ = !1;
      const j = Array.isArray(g) ? g : [g];
      let A = j.reduce(o(m), {});
      C === !1 && (A = {});
      const { prevResolvedValues: O = {} } = h,
        z = { ...O, ...A },
        L = (V) => {
          (E = !0),
            f.has(V) && (($ = !0), f.delete(V)),
            (h.needsAnimating[V] = !0);
        };
      for (const V in z) {
        const I = A[V],
          H = O[V];
        if (v.hasOwnProperty(V)) continue;
        let R = !1;
        Uc(I) && Uc(H) ? (R = !dx(I, H)) : (R = I !== H),
          R
            ? I != null
              ? L(V)
              : f.add(V)
            : I !== void 0 && f.has(V)
            ? L(V)
            : (h.protectedKeys[V] = !0);
      }
      (h.prevProp = g),
        (h.prevResolvedValues = A),
        h.isActive && (v = { ...v, ...A }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!T || $) &&
          d.push(...j.map((V) => ({ animation: V, options: { type: m } })));
    }
    if (f.size) {
      const k = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m);
        k[m] = h === void 0 ? null : h;
      }),
        d.push({ animation: k });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var v;
        return (v = f.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function X$(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !dx(t, e) : !1;
}
function Jn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function q$() {
  return {
    animate: Jn(!0),
    whileInView: Jn(),
    whileHover: Jn(),
    whileTap: Jn(),
    whileDrag: Jn(),
    whileFocus: Jn(),
    exit: Jn(),
  };
}
class Z$ extends Zn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Q$(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ol(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let J$ = 0;
class e3 extends Zn {
  constructor() {
    super(...arguments), (this.id = J$++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const t3 = { animation: { Feature: Z$ }, exit: { Feature: e3 } },
  Nm = (e, t) => Math.abs(e - t);
function n3(e, t) {
  const n = Nm(e.x, t.x),
    r = Nm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Wx {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Au(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          v = n3(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !v) return;
        const { point: y } = d,
          { timestamp: x } = Ne;
        this.history.push({ ...y, timestamp: x });
        const { onStart: k, onMove: m } = this.handlers;
        f ||
          (k && k(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = $u(f, this.transformPagePoint)),
          Le.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = Au(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : $u(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(d, k), y && y(d, k);
      }),
      !sx(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = Ll(t),
      a = $u(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Ne;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Au(a, this.history)),
      (this.removeListeners = pn(
        fn(this.contextWindow, "pointermove", this.handlePointerMove),
        fn(this.contextWindow, "pointerup", this.handlePointerUp),
        fn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Gn(this.updatePoint);
  }
}
function $u(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Om(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Au({ point: e }, t) {
  return {
    point: e,
    delta: Om(e, Hx(t)),
    offset: Om(e, r3(t)),
    velocity: o3(t, 0.1),
  };
}
function r3(e) {
  return e[0];
}
function Hx(e) {
  return e[e.length - 1];
}
function o3(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Hx(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Bn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = hn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function ht(e) {
  return e.max - e.min;
}
function Zc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Im(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ce(t.min, t.max, e.origin)),
    (e.scale = ht(n) / ht(t)),
    (Zc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ce(n.min, n.max, e.origin) - e.originPoint),
    (Zc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ci(e, t, n, r) {
  Im(e.x, t.x, n.x, r ? r.originX : void 0),
    Im(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Lm(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + ht(t));
}
function i3(e, t, n) {
  Lm(e.x, t.x, n.x), Lm(e.y, t.y, n.y);
}
function Dm(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + ht(t));
}
function di(e, t, n) {
  Dm(e.x, t.x, n.x), Dm(e.y, t.y, n.y);
}
function s3(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ce(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Fm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function a3(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Fm(e.x, n, o), y: Fm(e.y, t, r) };
}
function zm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function l3(e, t) {
  return { x: zm(e.x, t.x), y: zm(e.y, t.y) };
}
function u3(e, t) {
  let n = 0.5;
  const r = ht(e),
    o = ht(t);
  return (
    o > r
      ? (n = Li(t.min, t.max - r, e.min))
      : r > o && (n = Li(e.min, e.max - o, t.min)),
    Kn(0, 1, n)
  );
}
function c3(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Jc = 0.35;
function d3(e = Jc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Jc),
    { x: Vm(e, "left", "right"), y: Vm(e, "top", "bottom") }
  );
}
function Vm(e, t, n) {
  return { min: Bm(e, t), max: Bm(e, n) };
}
function Bm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Um = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  qr = () => ({ x: Um(), y: Um() }),
  Wm = () => ({ min: 0, max: 0 }),
  ve = () => ({ x: Wm(), y: Wm() });
function xt(e) {
  return [e("x"), e("y")];
}
function Kx({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function f3({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function p3(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function _u(e) {
  return e === void 0 || e === 1;
}
function ed({ scale: e, scaleX: t, scaleY: n }) {
  return !_u(e) || !_u(t) || !_u(n);
}
function or(e) {
  return (
    ed(e) ||
    Gx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Gx(e) {
  return Hm(e.x) || Hm(e.y);
}
function Hm(e) {
  return e && e !== "0%";
}
function Ia(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Km(e, t, n, r, o) {
  return o !== void 0 && (e = Ia(e, o, r)), Ia(e, n, r) + t;
}
function td(e, t = 0, n = 1, r, o) {
  (e.min = Km(e.min, t, n, r, o)), (e.max = Km(e.max, t, n, r, o));
}
function Yx(e, { x: t, y: n }) {
  td(e.x, t.translate, t.scale, t.originPoint),
    td(e.y, n.translate, n.scale, n.originPoint);
}
function h3(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Zr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Yx(e, s)),
      r && or(i.latestValues) && Zr(e, i.latestValues));
  }
  (t.x = Gm(t.x)), (t.y = Gm(t.y));
}
function Gm(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function En(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Ym(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = ce(e.min, e.max, i);
  td(e, t[n], t[r], s, t.scale);
}
const m3 = ["x", "scaleX", "originX"],
  g3 = ["y", "scaleY", "originY"];
function Zr(e, t) {
  Ym(e.x, t, m3), Ym(e.y, t, g3);
}
function Qx(e, t) {
  return Kx(p3(e.getBoundingClientRect(), t));
}
function y3(e, t, n) {
  const r = Qx(e, n),
    { scroll: o } = t;
  return o && (En(r.x, o.offset.x), En(r.y, o.offset.y)), r;
}
const Xx = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  v3 = new WeakMap();
class x3 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ve()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ll(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: v, onDragStart: y } = this.getProps();
        if (
          f &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = lx(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xt((k) => {
            let m = this.getAxisMotionValue(k).get() || 0;
            if (qt.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const g = h.layout.layoutBox[k];
                g && (m = ht(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[k] = m;
          }),
          y && y(c, d);
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: k } = d;
        if (v && this.currentDirection === null) {
          (this.currentDirection = w3(k)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, k),
          this.updateAxis("y", d.point, k),
          this.visualElement.render(),
          x && x(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        xt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Wx(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Xx(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && i(t, n);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Ms(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = s3(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && Qr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = a3(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = d3(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = c3(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Qr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = y3(r, o.root, this.visualElement.getTransformPagePoint());
    let s = l3(o.layout.layoutBox, i);
    if (n) {
      const a = n(f3(s));
      (this.hasMutatedConstraints = !!a), a && (s = Kx(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = xt((c) => {
        if (!Ms(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          v = o ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Xf(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    xt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    xt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    xt((n) => {
      const { drag: r } = this.getProps();
      if (!Ms(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - ce(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Qr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    xt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = u3({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      xt((s) => {
        if (!Ms(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ce(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    v3.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = fn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Qr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const s = un(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (xt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Jc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Ms(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function w3(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class S3 extends Zn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ge),
      (this.removeListeners = Ge),
      (this.controls = new x3(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ge);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qm = (e) => (t, n) => {
  e && e(t, n);
};
class C3 extends Zn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ge);
  }
  onPointerDown(t) {
    this.session = new Wx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Qm(t),
      onStart: Qm(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && o(i, s);
      },
    };
  }
  mount() {
    this.removePointerDownListener = fn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function k3() {
  const e = S.useContext(Ef);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = S.useId();
  return S.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const Zs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Xm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Wo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Xm(e, t.target.x),
        r = Xm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  b3 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Yn.parse(e);
      if (o.length > 5) return r;
      const i = Yn.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = ce(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class P3 extends ut.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    bj(T3),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Zs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Le.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Mf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function qx(e) {
  const [t, n] = k3(),
    r = S.useContext(Kv);
  return ut.createElement(P3, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Gv),
    isPresent: t,
    safeToRemove: n,
  });
}
const T3 = {
    borderRadius: {
      ...Wo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Wo,
    borderTopRightRadius: Wo,
    borderBottomLeftRadius: Wo,
    borderBottomRightRadius: Wo,
    boxShadow: b3,
  },
  Zx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  E3 = Zx.length,
  qm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Zm = (e) => typeof e == "number" || D.test(e);
function R3(e, t, n, r, o, i) {
  o
    ? ((e.opacity = ce(0, n.opacity !== void 0 ? n.opacity : 1, j3(r))),
      (e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, M3(r))))
    : i &&
      (e.opacity = ce(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < E3; s++) {
    const a = `border${Zx[s]}Radius`;
    let l = Jm(t, a),
      u = Jm(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Zm(l) === Zm(u)
        ? ((e[a] = Math.max(ce(qm(l), qm(u), r), 0)),
          (qt.test(u) || qt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Jm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const j3 = Jx(0, 0.5, Ox),
  M3 = Jx(0.5, 0.95, Ge);
function Jx(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Li(e, t, r)));
}
function eg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function vt(e, t) {
  eg(e.x, t.x), eg(e.y, t.y);
}
function tg(e, t, n, r, o) {
  return (
    (e -= t), (e = Ia(e, 1 / n, r)), o !== void 0 && (e = Ia(e, 1 / o, r)), e
  );
}
function $3(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (qt.test(t) &&
      ((t = parseFloat(t)), (t = ce(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ce(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = tg(e.min, t, n, a, o)),
    (e.max = tg(e.max, t, n, a, o));
}
function ng(e, t, [n, r, o], i, s) {
  $3(e, t[n], t[r], t[o], t.scale, i, s);
}
const A3 = ["x", "scaleX", "originX"],
  _3 = ["y", "scaleY", "originY"];
function rg(e, t, n, r) {
  ng(e.x, t, A3, n ? n.x : void 0, r ? r.x : void 0),
    ng(e.y, t, _3, n ? n.y : void 0, r ? r.y : void 0);
}
function og(e) {
  return e.translate === 0 && e.scale === 1;
}
function e1(e) {
  return og(e.x) && og(e.y);
}
function N3(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function t1(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function ig(e) {
  return ht(e.x) / ht(e.y);
}
class O3 {
  constructor() {
    this.members = [];
  }
  add(t) {
    qf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Zf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function sg(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c, skewX: d, skewY: f } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `),
      d && (r += `skewX(${d}deg) `),
      f && (r += `skewY(${f}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const I3 = (e, t) => e.depth - t.depth;
class L3 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    qf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Zf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(I3),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function D3(e, t) {
  const n = Un.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Gn(r), e(i - t));
    };
  return Le.read(r, !0), () => Gn(r);
}
function F3(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function z3(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function V3(e, t, n) {
  const r = Ke(e) ? e : Di(e);
  return r.start(Xf("", r, t, n)), r.animation;
}
const Nu = ["", "X", "Y", "Z"],
  B3 = { visibility: "hidden" },
  ag = 1e3;
let U3 = 0;
const ir = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function lg(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function n1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = U3++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (ir.totalNodes =
              ir.resolvedTargetDeltas =
              ir.recalculatedProjection =
                0),
            this.nodes.forEach(K3),
            this.nodes.forEach(q3),
            this.nodes.forEach(Z3),
            this.nodes.forEach(G3),
            F3(ir);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new L3());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Jf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = z3(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = D3(f, 250)),
            Zs.hasAnimatedSinceResize &&
              ((Zs.hasAnimatedSinceResize = !1), this.nodes.forEach(cg));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || rA,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !t1(this.targetLayout, y) || v,
                g = !f && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const w = { ...Bf(x, "layout"), onPlay: k, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                f || cg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Gn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(J3),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ug);
        return;
      }
      this.isUpdating || this.nodes.forEach(Q3),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(X3),
        this.nodes.forEach(W3),
        this.nodes.forEach(H3),
        this.clearAllSnapshots();
      const a = Un.now();
      (Ne.delta = Kn(0, 1e3 / 60, a - Ne.timestamp)),
        (Ne.timestamp = a),
        (Ne.isProcessing = !0),
        bu.update.process(Ne),
        bu.preRender.process(Ne),
        bu.render.process(Ne),
        (Ne.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Mf.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Y3), this.sharedNodes.forEach(eA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ve()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !e1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || or(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        oA(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ve();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (En(a.x, l.offset.x), En(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ve();
      vt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            vt(a, s);
            const { scroll: f } = this.root;
            f && (En(a.x, -f.offset.x), En(a.y, -f.offset.y));
          }
          En(a.x, c.offset.x), En(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ve();
      vt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Zr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          or(c.latestValues) && Zr(l, c.latestValues);
      }
      return or(this.latestValues) && Zr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ve();
      vt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !or(u.latestValues)) continue;
        ed(u.latestValues) && u.updateSnapshot();
        const c = ve(),
          d = u.measurePageBox();
        vt(c, d),
          rg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return or(this.latestValues) && rg(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ne.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ve()),
              (this.relativeTargetOrigin = ve()),
              di(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              vt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ve()), (this.targetWithTransforms = ve())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                i3(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : vt(this.target, this.layout.layoutBox),
                Yx(this.target, this.targetDelta))
              : vt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ve()),
                (this.relativeTargetOrigin = ve()),
                di(this.relativeTargetOrigin, this.target, v.target),
                vt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ir.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ed(this.parent.latestValues) ||
          Gx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ne.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      vt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        v = this.treeScale.y;
      h3(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ve()));
      const { target: y } = a;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = qr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = qr()),
        (this.projectionDeltaWithTransform = qr()));
      const x = this.projectionTransform;
      ci(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = sg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== f ||
          this.treeScale.y !== v) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        ir.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = qr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = ve(),
        v = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = v !== y,
        k = this.getStack(),
        m = !k || k.members.length <= 1,
        h = !!(x && !m && this.options.crossfade === !0 && !this.path.some(nA));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        dg(d.x, s.x, C),
          dg(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (di(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            tA(this.relativeTarget, this.relativeTargetOrigin, f, C),
            g && N3(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ve()),
            vt(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), R3(c, u, this.latestValues, C, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Le.update(() => {
          (Zs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = V3(0, ag, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ag),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          r1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ve();
          const d = ht(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = ht(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        vt(a, l),
          Zr(a, c),
          ci(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new O3()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      for (let c = 0; c < Nu.length; c++)
        lg(`rotate${Nu[c]}`, s, u, this.animationValues),
          lg(`skew${Nu[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return B3;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Xs(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Xs(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !or(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = sg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const x in Ma) {
        if (f[x] === void 0) continue;
        const { correct: k, applyTo: m } = Ma[x],
          h = u.transform === "none" ? f[x] : k(f[x], d);
        if (m) {
          const g = m.length;
          for (let w = 0; w < g; w++) u[m[w]] = h;
        } else u[x] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Xs(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(ug),
        this.root.sharedNodes.clear();
    }
  };
}
function W3(e) {
  e.updateLayout();
}
function H3(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? xt((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            v = ht(f);
          (f.min = r[d].min), (f.max = f.min + v);
        })
      : r1(i, n.layoutBox, r) &&
        xt((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            v = ht(r[d]);
          (f.max = f.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + v));
        });
    const a = qr();
    ci(a, r, n.layoutBox);
    const l = qr();
    s ? ci(l, e.applyTransform(o, !0), n.measuredBox) : ci(l, r, n.layoutBox);
    const u = !e1(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: v } = d;
        if (f && v) {
          const y = ve();
          di(y, n.layoutBox, f.layoutBox);
          const x = ve();
          di(x, r, v.layoutBox),
            t1(y, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function K3(e) {
  ir.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function G3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Y3(e) {
  e.clearSnapshot();
}
function ug(e) {
  e.clearMeasurements();
}
function Q3(e) {
  e.isLayoutDirty = !1;
}
function X3(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function cg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function q3(e) {
  e.resolveTargetDelta();
}
function Z3(e) {
  e.calcProjection();
}
function J3(e) {
  e.resetSkewAndRotation();
}
function eA(e) {
  e.removeLeadSnapshot();
}
function dg(e, t, n) {
  (e.translate = ce(t.translate, 0, n)),
    (e.scale = ce(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function fg(e, t, n, r) {
  (e.min = ce(t.min, n.min, r)), (e.max = ce(t.max, n.max, r));
}
function tA(e, t, n, r) {
  fg(e.x, t.x, n.x, r), fg(e.y, t.y, n.y, r);
}
function nA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const rA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  pg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  hg = pg("applewebkit/") && !pg("chrome/") ? Math.round : Ge;
function mg(e) {
  (e.min = hg(e.min)), (e.max = hg(e.max));
}
function oA(e) {
  mg(e.x), mg(e.y);
}
function r1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Zc(ig(t), ig(n), 0.2))
  );
}
const iA = n1({
    attachResizeListener: (e, t) => un(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ou = { current: void 0 },
  o1 = n1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ou.current) {
        const e = new iA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ou.current = e);
      }
      return Ou.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  sA = {
    pan: { Feature: C3 },
    drag: { Feature: S3, ProjectionNode: o1, MeasureLayout: qx },
  },
  nd = { current: null },
  i1 = { current: !1 };
function aA() {
  if (((i1.current = !0), !!Rf))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (nd.current = e.matches);
      e.addListener(t), t();
    } else nd.current = !1;
}
function lA(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (Ke(i)) e.addValue(o, i), Oa(r) && r.add(o);
    else if (Ke(s)) e.addValue(o, Di(i, { owner: e })), Oa(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Di(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const gg = new WeakMap(),
  uA = [...yx, Ue, Yn],
  cA = (e) => uA.find(gx(e)),
  s1 = Object.keys(Ii),
  dA = s1.length,
  yg = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  fA = Af.length;
class pA {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {}
  ) {
    (this.resolveKeyframes = (f, v, y, x) =>
      new this.KeyframeResolver(f, v, y, x, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Uf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Le.render(this.render, !1, !0));
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Il(n)),
      (this.isVariantNode = Hv(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in d) {
      const v = d[f];
      l[f] !== void 0 && Ke(v) && (v.set(l[f], !1), Oa(c) && c.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      gg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      i1.current || aA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : nd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    gg.delete(this.current),
      this.projection && this.projection.unmount(),
      Gn(this.notifyUpdate),
      Gn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = br.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Le.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let s, a;
    for (let l = 0; l < dA; l++) {
      const u = s1[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: v,
        } = Ii[u];
      f && (s = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          v && (a = v));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: v,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Qr(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: v,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ve();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < yg.length; r++) {
      const o = yg[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = lA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < fA; r++) {
      const o = Af[r],
        i = this.props[o];
      (Oi(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Di(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (hx(o) || fx(o))
          ? (o = parseFloat(o))
          : !cA(o) && Yn.test(n) && (o = Px(t, n)),
        this.setBaseTarget(t, Ke(o) ? o.get() : o)),
      Ke(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n, r;
    const { initial: o } = this.props,
      i =
        typeof o == "string" || typeof o == "object"
          ? (r = Vf(
              this.props,
              o,
              (n = this.presenceContext) === null || n === void 0
                ? void 0
                : n.custom
            )) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (o && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ke(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Jf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class a1 extends pA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Tx);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function hA(e) {
  return window.getComputedStyle(e);
}
class mA extends a1 {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (br.has(n)) {
      const r = Hf(n);
      return (r && r.default) || 0;
    } else {
      const r = hA(t),
        o = (Xv(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Qx(t, n);
  }
  build(t, n, r, o) {
    If(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return zf(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ke(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    tx(t, n, r, o);
  }
}
class gA extends a1 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (br.has(n)) {
      const r = Hf(n);
      return (r && r.default) || 0;
    }
    return (n = nx.has(n) ? n : jf(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ve();
  }
  scrapeMotionValuesFromProps(t, n) {
    return ox(t, n);
  }
  build(t, n, r, o) {
    Df(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    rx(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Ff(t.tagName)), super.mount(t);
  }
}
const yA = (e, t) =>
    _f(e)
      ? new gA(t, { enableHardwareAcceleration: !1 })
      : new mA(t, { enableHardwareAcceleration: !0 }),
  vA = { layout: { ProjectionNode: o1, MeasureLayout: qx } },
  xA = { ...t3, ...pM, ...sA, ...vA },
  Lt = Cj((e, t) => eM(e, t, xA, yA)),
  wA = Q(oE)(({ theme: e }) => ({
    border: "2px solid black",
    borderRadius: 20,
    padding: 10,
    margin: e.breakpoints.down("sm") ? 20 : 0,
  })),
  $s = ({ id: e, text: t, x: n }) =>
    p.jsx(Lt.div, {
      animate: { y: [-10 + n, 0, -10 + n] },
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: 1 / 0,
      },
      children: p.jsxs(wA, {
        children: [
          p.jsx(vE, {
            sx: {
              background:
                "linear-gradient(0deg, rgba(22,1,219,1) 0%, rgba(56,179,215,1) 82%, rgba(190,236,255,1) 100%)",
              borderRadius: 4,
            },
            image: `assets/illustrations/${e}.png`,
            component: "img",
            height: "360",
          }),
          p.jsx(cE, {
            children: p.jsx(ge, {
              variant: "h4",
              textAlign: "center",
              children: t,
            }),
          }),
        ],
      }),
    }),
  SA = (e) =>
    p.jsxs("div", {
      className: "tokenomics",
      id: "Tokenomics",
      children: [
        p.jsx(Z, {
          container: !0,
          justifyContent: "center",
          mt: 2,
          children: p.jsx(ge, {
            color: "azure",
            variant: "h2",
            textAlign: "center",
            children: "Tokenomics",
          }),
        }),
        p.jsxs(Z, {
          container: !0,
          mb: 4,
          spacing: 4,
          mt: 4,
          children: [
            p.jsxs(Z, {
              item: !0,
              md: 3,
              sm: 6,
              xs: 12,
              zIndex: 10,
              children: [
                " ",
                p.jsx($s, { id: 2, text: "Total Supply: 1T", x: 20 }),
              ],
            }),
            p.jsxs(Z, {
              item: !0,
              md: 3,
              sm: 6,
              xs: 12,
              zIndex: 10,
              children: [" ", p.jsx($s, { id: 1, text: "LP: Burned", x: 0 })],
            }),
            p.jsxs(Z, {
              item: !0,
              md: 3,
              sm: 6,
              xs: 12,
              zIndex: 10,
              children: [
                " ",
                p.jsx($s, { id: 4, text: "Mint: Revoked", x: 20 }),
              ],
            }),
            p.jsxs(Z, {
              item: !0,
              md: 3,
              sm: 6,
              xs: 12,
              zIndex: 10,
              children: [" ", p.jsx($s, { id: 3, text: "Taxes: 0", x: 0 })],
            }),
          ],
        }),
      ],
    }),
  Rn = ({ x: e, x1: t, y: n, delay: r, y1: o }) =>
    p.jsx(Lt.div, {
      className: "bubble",
      initial: { x: e, y: n, opacity: 1, scale: 1 },
      animate: { x: e + t, y: n - o, opacity: 0, scale: 4 },
      transition: { duration: 1, ease: "easeIn", repeat: 1 / 0, delay: r },
    }),
  Jr = ({ fish: e, ...t }) => {
    const n = Jt(),
      r = Ml(n.breakpoints.down("md"));
    return p.jsx(Lt.img, {
      ...t,
      width: r ? "10%" : "5%",
      src: `assets/svg/fish${e}.gif`,
      style: {
        position: "absolute",
        overflow: "hidden",
        transform: "rotateY(180deg)",
      },
    });
  },
  CA = (e) =>
    p.jsxs("section", {
      className: "ready",
      id: "how_to_buy",
      children: [
        p.jsx(Z, {
          container: !0,
          justifyContent: "center",
          mt: 4,
          children: p.jsx(ge, {
            color: "azure",
            variant: "h2",
            textAlign: "center",
            children: "How to buy $0XWHALE",
          }),
        }),
        p.jsxs(Z, {
          container: !0,
          mt: 2,
          alignItems: "center",
          spacing: 4,
          children: [
            p.jsx(Z, {
              item: !0,
              md: 6,
              sm: 6,
              xs: 12,
              sx: { zIndex: 10 },
              children: p.jsxs(He, {
                style: { position: "relative" },
                children: [
                  p.jsx(Rn, { y1: 200, x: 0, y: 30, x1: 0 }),
                  p.jsx(Rn, { y1: 150, x: 30, y: 30, delay: 0.5, x1: 40 }),
                  p.jsx(Lt.div, {
                    initial: { scale: 0.9 },
                    animate: { y: [-10, 0, -10] },
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: 1 / 0,
                    },
                    children: p.jsx("img", {
                      src: "assets/website assets/3.png",
                      alt: "",
                    }),
                  }),
                ],
              }),
            }),
            p.jsx(Z, {
              item: !0,
              md: 6,
              sm: 6,
              xs: 12,
              sx: { zIndex: 10 },
              children: p.jsxs(He, {
                style: { position: "relative" },
                children: [
                  p.jsx(Rn, { y1: 300, x: 0, y: -50, x1: 0 }),
                  p.jsx(Lt.div, {
                    initial: { scale: 0.9 },
                    animate: { y: [0, -10, 0] },
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: 1 / 0,
                    },
                    children: p.jsx("img", {
                      src: "assets/website assets/5.png",
                      alt: "",
                    }),
                  }),
                ],
              }),
            }),
            p.jsx(Z, {
              item: !0,
              md: 6,
              sm: 6,
              xs: 12,
              sx: { zIndex: 10 },
              children: p.jsxs(He, {
                style: { position: "relative" },
                children: [
                  p.jsx(Rn, { y1: 200, x: 150, y: -130, x1: 0 }),
                  p.jsx(Lt.div, {
                    initial: { scale: 0.9 },
                    animate: { y: [0, -10, 0] },
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: 1 / 0,
                    },
                    children: p.jsx("img", {
                      src: "assets/website assets/2.png",
                      alt: "",
                    }),
                  }),
                ],
              }),
            }),
            p.jsx(Z, {
              item: !0,
              md: 6,
              sm: 6,
              xs: 12,
              sx: { zIndex: 10 },
              children: p.jsxs(He, {
                style: { position: "relative" },
                children: [
                  p.jsx(Rn, { x: 0, y: -50, x1: 60, y1: 300 }),
                  p.jsx(Rn, { x: 30, y: -50, delay: 0.5, x1: 0, y1: 200 }),
                  p.jsx(Lt.div, {
                    initial: { scale: 0.9 },
                    animate: { y: [-10, 0, -10] },
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: 1 / 0,
                    },
                    children: p.jsx("img", {
                      src: "assets/website assets/4.png",
                      alt: "",
                    }),
                  }),
                ],
              }),
            }),
            p.jsx(Jr, {
              fish: 1,
              initial: { scale: 0.6 },
              animate: {
                rotateY: [180, 180, 180],
                x: [100, window.innerWidth * 0.3, window.innerWidth - 100],
                y: [-150, 0, -650],
              },
              transition: {
                duration: 12,
                ease: "easeInOut",
                times: [0, 0.6, 1],
                repeat: 1 / 0,
              },
            }),
            p.jsx(Jr, {
              fish: 2,
              animate: {
                x: [window.innerWidth - 100, window.innerWidth * 0.5, -100],
                y: [-300, 0, -550],
              },
              transition: {
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.3, 1],
                repeat: 1 / 0,
              },
            }),
            p.jsx(Jr, {
              fish: 4,
              initial: { opacity: 0.6 },
              animate: {
                x: [window.innerWidth - 100, window.innerWidth * 0.4, -100],
                y: [0, 300, -50],
              },
              transition: {
                duration: 16,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: 1 / 0,
              },
            }),
            p.jsx(Jr, {
              fish: 3,
              animate: {
                x: [-100, window.innerWidth * 0.5, window.innerWidth - 100],
                y: [800, 600, 850],
              },
              transition: {
                duration: 14,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: 1 / 0,
              },
            }),
          ],
        }),
      ],
    }),
  kA = (e) =>
    p.jsx("footer", {
      className: "footer",
      children: p.jsxs("div", {
        className: "footer__container container",
        children: [
          p.jsxs("div", {
            className: "footer__col",
            children: [
              p.jsx("a", {
                className: "footer__logo",
                href: "/",
                children: "THE 0xWhale",
              }),
              p.jsxs("div", {
                className: "footer__socials",
                children: [
                  p.jsx("a", {
                    className: "footer__btn footer__btn_sm",
                    href: "https://twitter.com/whale0x_eth",
                    target: "_blank",
                    children: p.jsx("img", {
                      src: "assets/svg/twitter1.svg",
                      alt: "twitter",
                    }),
                  }),
                  p.jsxs("a", {
                    className: "footer__btn",
                    href: "https://t.me/whale0x_eth",
                    target: "_blank",
                    children: [
                      p.jsx("img", {
                        src: "assets/svg/telegram1.svg",
                        alt: "telegram",
                      }),
                      "Telegram",
                    ],
                  }),
                ],
              }),
              p.jsx("p", {
                className: "footer__copyright",
                children: "2024 all whales reserved",
              }),
            ],
          }),
          p.jsxs("div", {
            className: "footer__socials",
            children: [
              p.jsx("a", {
                className: "footer__btn footer__btn_sm",
                href: "https://twitter.com/whale0x_eth",
                target: "_blank",
                children: p.jsx("img", {
                  src: "assets/svg/twitter1.svg",
                  alt: "twitter",
                }),
              }),
              p.jsxs("a", {
                className: "footer__btn",
                href: "https://t.me/whale0x_eth",
                target: "_blank",
                children: [
                  p.jsx("img", { src: "assets/svg/telegram1.svg", alt: "" }),
                  "Telegram",
                ],
              }),
            ],
          }),
        ],
      }),
    });
var ep = {},
  Iu = {};
const bA = xn(CT);
var vg;
function PA() {
  return (
    vg ||
      ((vg = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = bA;
      })(Iu)),
    Iu
  );
}
var TA = vf;
Object.defineProperty(ep, "__esModule", { value: !0 });
var l1 = (ep.default = void 0),
  EA = TA(PA()),
  RA = p;
l1 = ep.default = (0, EA.default)(
  (0, RA.jsx)("path", { d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
  "KeyboardArrowUp"
);
const jA = (e) =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(Z, {
          container: !0,
          justifyContent: "center",
          mt: 2,
          children: p.jsx(ge, {
            color: "azure",
            variant: "h2",
            textAlign: "center",
            children: "About me",
          }),
        }),
        p.jsxs(Z, {
          container: !0,
          alignItems: "center",
          children: [
            p.jsx(Z, {
              item: !0,
              md: 6,
              sm: 12,
              xs: 12,
              sx: { zIndex: 10 },
              children: p.jsx(Z, {
                container: !0,
                justifyContent: "center",
                children: p.jsxs("div", {
                  style: { position: "relative" },
                  children: [
                    p.jsx(Rn, { y1: 200, x: 0, y: 30, x1: 0 }),
                    p.jsx(Rn, { y1: 150, x: 30, y: 30, delay: 0.5, x1: 40 }),
                    p.jsx(Lt.div, {
                      initial: { scale: 0.9 },
                      animate: { y: [-10, 0, -10] },
                      transition: {
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: 1 / 0,
                      },
                      children: p.jsx("img", {
                        src: "assets/wally_nice_guy.png",
                        width: "80%",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            p.jsx(Z, {
              item: !0,
              md: 6,
              sm: 12,
              xs: 12,
              sx: { zIndex: 10 },
              children: p.jsx(Z, {
                container: !0,
                justifyContent: "center",
                children: p.jsx(Z, {
                  item: !0,
                  md: 9,
                  sm: 10,
                  xs: 10,
                  children: p.jsxs(He, {
                    sx: {
                      backgroundColor: "white",
                      p: { sm: 8, xs: 4 },
                      mb: { sm: 0, xs: 4 },
                      borderRadius: 20,
                      textAlign: "center",
                    },
                    children: [
                      p.jsx(ge, {
                        variant: "h5",
                        sx: { mb: 2 },
                        children:
                          "Hi, I am 0xWhale, the leader of the sea! With my presence in the Base water, I will guide my fellow ocean creatures to success.",
                      }),
                      p.jsx(ge, {
                        variant: "h5",
                        sx: { mb: 2 },
                        children:
                          "From the smallest fish to the mighty sharks, all can look to me for protection and guidance.",
                      }),
                      p.jsx(ge, {
                        variant: "h5",
                        sx: { mb: 2 },
                        children:
                          "My deep, rumbling voice echoes through the ocean depths. Calming storms and bringing harmony to our aquatic community. As the guardian of these waters. I take great pride in ensuring peace and balance in our magnificent realm.",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
        p.jsx(Jr, {
          fish: 2,
          initial: { scale: 0.8 },
          animate: {
            x: [window.innerWidth - 200, window.innerWidth * 0.5, -100],
            y: [-100, -300, -550],
          },
          transition: {
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.3, 1],
            repeat: 1 / 0,
          },
        }),
        p.jsx(Jr, {
          fish: 5,
          initial: { scale: 1.4, opacity: 0.7 },
          animate: {
            rotateY: [180, 180],
            x: [100, window.innerWidth - 200],
            y: [-50, -50],
          },
          transition: {
            duration: 12,
            ease: "easeInOut",
            times: [0, 1],
            repeat: 1 / 0,
          },
        }),
      ],
    }),
  MA = Q(OR)(() => ({
    height: 36,
    borderRadius: 24,
    border: "3px solid black",
    [`&.${tm.root}`]: { backgroundColor: "transparent !important" },
    [`& .${tm.bar}`]: {
      borderRadius: 24,
      borderRight: "3px solid black",
      backgroundColor: "#5BE1E3",
    },
  })),
  $A = Q(ge)(() => ({
    position: "absolute",
    left: "52%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    color: "#1F559E",
  })),
  AA = ({ loading: e }) => {
    const [t, n] = S.useState(0);
    return (
      S.useEffect(() => {
        const r = setInterval(() => {
          n((o) =>
            o >= 100
              ? (clearInterval(r), 100)
              : Math.round(Math.min(o + 6.67, 100))
          );
        }, 150);
        return () => {
          clearInterval(r);
        };
      }, []),
      p.jsxs(Z, {
        container: !0,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        sx: { height: "100vh", display: e ? "flex" : "none" },
        children: [
          p.jsx(Lt.img, {
            animate: { rotate: [10, 0, 10] },
            transition: {
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: 1 / 0,
            },
            src: "assets/website assets/1.png",
            style: { height: 400, width: 350 },
          }),
          p.jsxs(He, {
            position: "relative",
            children: [
              p.jsx(MA, {
                sx: { width: 300 },
                color: "secondary",
                variant: "determinate",
                value: t,
              }),
              p.jsxs($A, {
                color: "#FFAF59",
                variant: "subtitle1",
                children: [t, "%"],
              }),
            ],
          }),
        ],
      })
    );
  },
  xg = ({ x: e, x1: t, y: n, delay: r, y1: o }) =>
    p.jsx(Lt.img, {
      src: "assets/bubble.webp",
      initial: { x: e, y: n, opacity: 1, scale: 0.1 },
      animate: { x: e + t, y: n - o, opacity: 0, scale: 0.3 },
      transition: { duration: 1, ease: "easeIn", repeat: 1 / 0, delay: r },
      style: { position: "absolute" },
    }),
  _A = (e) =>
    p.jsxs(Lt.div, {
      onClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1Tge7xGx7j7kko_5p-TOd5e3gTmBI3_sC"
        ),
      initial: { scale: 1 },
      whileHover: { scale: 1.4 },
      className: "meme-bubble",
      whileTap: { scale: 1.2 },
      children: [
        p.jsx(ge, {
          color: "azure",
          variant: "h4",
          textAlign: "center",
          children: "Whale Memes",
        }),
        p.jsx(xg, { x: 30, y: -50, delay: 0.5, x1: 0, y1: 200 }),
        p.jsx(xg, { x: 80, y: -50, delay: 0.2, x1: 20, y1: 250 }),
      ],
    }),
  NA = (e) =>
    p.jsx(p.Fragment, {
      children: p.jsx(Z, {
        container: !0,
        justifyContent: "center",
        mt: 2,
        children: p.jsx(_A, {}),
      }),
    }),
  OA = (e) => {
    const t = Jt(),
      n = Ml(t.breakpoints.down("md"));
    return p.jsxs("section", {
      id: "roadmap",
      children: [
        p.jsx(Z, {
          container: !0,
          justifyContent: "center",
          mt: 2,
          children: p.jsx(ge, {
            color: "azure",
            variant: "h2",
            textAlign: "center",
            children: "Roadmap",
          }),
        }),
        p.jsx(Z, {
          container: !0,
          justifyContent: "center",
          mt: 2,
          children: p.jsx("img", {
            src: "assets/roadmap.webp",
            width: n ? "90%" : "80%",
            alt: "roadmap",
            style: { borderRadius: "12px" },
          }),
        }),
      ],
    });
  },
  IA =
    "data:image/webp;base64,UklGRnIIAABXRUJQVlA4WAoAAAAwAAAAmQIAUAAAQUxQSEgEAAANoEVr2xnJet9UqtpzbNu2bdu2bdu2cWXbtm2Mp+1y8l7kr5RSVb3+o4iYAPzv//+1vtFhlENCoEIxhCqBlaD6gRWlAgpBE0OwkEqmukxVQ0GCd/ebfjTMuRYIAAQYKiwroSJZP1Q2CzBEOVky1mWsGhAknA//QjTGYJ/SR0Q6FgqoiKA9IoAGEVHiPw0IoACpAMumIlge1S0K0MCSKJwA0MQADSqkYlgq1QqWTdXBAjLIwBAC4UCbjEPU/nwGSEAEyAIqG4tQeVi3MCCDSsJwBCCTAjKwEItRqVgrVDZWhwrQQINCEIAvXLFQlDAgSrBC6SBSRUCwRQVGStC3RsyKFFkm0WozWaS0mP67IGUvCVYzLaYxzQTcDmc4k5fBjU8/ms4a4jHmc1aPu+6uy8d9fnnbVz6A+P6HtOu7m94DwBUvT/xyiM2TOHmRJJSdbvm9HnkISOy8UnJw3OoHnjIBbLssNXQJxsDFsYrYNnNnB/54B2ssOcdJb7yM+N7e84dscc3cO9yD+IkjA4+5Y2Fjl+4J2f5PL4zFvzhn3VkuOHtIi46+ibc2b13ie664hvfxoxgDp8YsVujPd58O+Klrz2ieadUXHSc+AG96wGu7KPPVhbB6Vxoc/cYFoF865oqt9FE26y7QM93U5pGW09F9LuzeBUfT4xHMT5w/MceE3Nfr7Ni6eAofbroYHohZPuOS+REDR5rZMap791ryuDTG//BOZuIT49ae648PM/aOmyMVcOSzJYU3XzhyzuTHTx4G76ZNH+gdnJPHdlo76Sa3KRlQPO/lgdzd9/S4TYvfi5cGxucmjF9ik62Pt3amzpqYuRMAMXMq2wnAzyTRdjmmXLsn+o+atuEJm37ba+v8sHDLEr+nAIybKZ3/CcamK4FL3Y3Q+afz2Yats/5u67y10rhFlnwpQ3eX4ezQR4bYYV3ZV3qcBHIxJ9uRi2dsnf73txh39sALqc2bcqk3XQCMLbJl/rfrXHaOmzfevWiSU2DtXrn9UjPssWX7yOjgJ88AgNN0ZarzTgLvLbngg3/2Jn9sHusSxyy83lPPnW26FqQHplxFw3Y9mffHA/jt900W3yDZeQfs3dxvp66x8jxe5xdvOQj6Mz44+JELAKfOuUb7yJMJiwe5Cc99MtlPEGbd9h0cAMiPXP/xQLMLu9fP5RHS9z2Y5ec82MMUrGXhX1JFe8lqpsVkMdNiMhIqgiHUQDGciiOg8tCgBo0BAWAU+WARCsEGSuFYnACWRwY2aAoQgMTomf9axwENCkMAYIUQqscIKIRgJgiWAgIggCFkUEAwE2YWochTLVEpiMKEvGT0TL8+CjNAQ4WzHgPAECxQegIgQtPAAAuUmpHHWsJShKeLCGaIf7alIoKeY5/IUTQ4f30cE2gSwOLYqKhUigxWE2uUKkPFqACLkFajIsF74y4PkAmAilOjEvmqJtWo6lYR//v/f2ICVlA4IAQEAADQJwCdASqaAlEAPp1InUylo6KiIJgNALATiWlu4XBR/vn+mBHbPLxZ5IkQKEBtntxFvIFAL/1Xtb/pfKnyXCOt+2WB5L4FkYFJU5AhmfkD+WPYL/Wzqneh3+ppmCl87NtSfZePKdGwJ6ifRLIT1E+iWQnqJ9EshOTjEfFh/CVXc2ZurktmM0ckNT3LIT1E+iWQnqJ9EshPUT6JYg4aiNwmO+ZjJfY8Q5v4XbaP8IfPR8VuT7ernlGMkGL5pq356/A+F22kpr7HiHN5aY8IyKy0M+34CqxEoWQnqJ9Er/CNL1x375+RpCDb6xx40azT+JWxZWQ+ndK48p0bAnqJ9EZr7ao4GxC7IHGooLZxrFsiOSGp7lkJ6iaUKZ8RE+iWQnqJ9EsdYU21KLz9pKa+9YT4QiAkZRFWCy+9zuwMZFVUEoL9cjJo5JgA/v7y4cB5b0JQ+Iaza+1TNHsVG7LkwMAus5OQYyvR9o0f/XxHI1u102y1/z8WisPxAZcd2r0+CrZQtiUKA3U0/OO2mzW/PR4+KcWArGoCpFQtgeENDdavalHV1nOUdyuP4GlKF8qHiA/F8seIapmvKRzxUdpzJFp/nroHAVOg5RK0PpUmTKiY9liORmzCEX34Tvv/V4YzsQrBXwU/3LjtXqcbkB8wkqR+PQXtfgqESnAN5HMj4aOG3AWtl/tqdjqmJTfS5g0OmcokftQKwxP8S99E00DAPuqzrInK1uiRVcSWcYk9gu8fiERsgHCG7EPXOKUx8g94N6+yKTrMdmUhdZg38wLcCdSrwFNnV8HkN390sCcSlrZaeP1Oto8hEFLY9zmMdVd7X5bP2uy3qxUvpH+wxedVZZHn/2+K1xgiB1/FkBFHxxhPtXhkhTUn3eDV9+f34g3x6l588pN6gWyOHvX/gVApTH1U08SPks4hQ4HeHmqgWetUW1mytE2quR3i/rThr/L7QxHxEF8hk7TnOh8Lc6AMxGslqzayFIz3yR7c8lHEHvc28lNPhy3pqOvJVChkOgfPkDPkKryJScvBxEYt+ajlntS7jHoHeSkHeKZYovut8nmaT6puPwHTUO5/K/utH/kC35P0m+qie1Y6kMwAP9MeeZEvn/EDzaRGx1Rl1bNJB+p3ImjkHYw2Qvav0GgWh6qDbjPCk6aXbyFoJkey65ZqBYOu0bt6pRgLOE2qXPBwO+BWqO9BgUJM32LHa8hcMHdX//cjw/XuR/BtnzoiHwWyy2gtIBfB0061BzeBOat4leFU5vguGJf1Jg7ixtVowPbIePGt4YMqs8jBD7gPhYCCKRn+wV1QaGsdWJewUjNzLHcTjNwrOri0UBErlU1yhEznWztjDesGGnnkBeCYifgAAAAAAAAAAA==",
  LA = (e) =>
    p.jsxs("section", {
      className: "raffle",
      id: "raffle",
      children: [
        p.jsx(Z, {
          container: !0,
          justifyContent: "center",
          mt: 4,
          children: p.jsx(ge, {
            color: "azure",
            variant: "h2",
            textAlign: "center",
            children: "Raffle",
          }),
        }),
        p.jsxs(Z, {
          container: !0,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          children: [
            p.jsx(Z, {
              item: !0,
              mb: 4,
              children: p.jsxs(Z, {
                container: !0,
                columnGap: 4,
                children: [
                  p.jsx(Z, {
                    item: !0,
                    md: "auto",
                    xs: 12,
                    children: p.jsx(ge, {
                      textAlign: "center",
                      variant: "h5",
                      color: "azure",
                      mt: 4,
                      children: "Total Burn: 0%",
                    }),
                  }),
                  p.jsx(Z, {
                    item: !0,
                    md: "auto",
                    xs: 12,
                    children: p.jsx(ge, {
                      variant: "h5",
                      textAlign: "center",
                      color: "azure",
                      mt: 4,
                      children: "Goal: burn 10% supply",
                    }),
                  }),
                ],
              }),
            }),
            p.jsx("img", { src: IA, alt: "bar" }),
            p.jsx(QE, {
              sx: { my: 4 },
              variant: "extended",
              style: {
                color: "azure",
                fontSize: "2.3rem",
                backgroundColor: "#FFBB01",
              },
              href: "https://wof.wallythewhale.xyz/",
              target: "_blank",
              children: "Enter Raffle",
            }),
          ],
        }),
      ],
    });
function DA(e) {
  const { children: t, window: n } = e,
    r = ij({ target: n ? n() : void 0, disableHysteresis: !0, threshold: 100 }),
    o = (i) => {
      const s = (i.target.ownerDocument || document).querySelector("#start");
      s && s.scrollIntoView({ block: "center", behavior: "smooth" });
    };
  return p.jsx(Iv, {
    in: r,
    children: p.jsx(He, {
      onClick: o,
      role: "presentation",
      sx: { position: "fixed", bottom: 16, right: 16 },
      children: t,
    }),
  });
}
function FA(e) {
  const [t, n] = S.useState(!0);
  return (
    S.useEffect(() => {
      setInterval(() => {
        n(!1);
      }, 3e3);
    }, []),
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(AA, { loading: t }),
        p.jsx("div", {
          className: "wrapper",
          style: { display: t ? "none" : "flex" },
          children: p.jsxs(wE, {
            maxWidth: "xl",
            children: [
              p.jsx("div", { id: "start" }),
              p.jsx(lj, {}),
              p.jsx("div", { className: "marque ", children: p.jsx(um, {}) }),
              p.jsx(SA, {}),
              p.jsx(OA, {}),
              p.jsx(CA, {}),
              p.jsx("section", {
                className: "about",
                id: "about",
                children: p.jsx(jA, {}),
              }),
              p.jsx("div", { className: "marque ", children: p.jsx(um, {}) }),
              p.jsx(kA, {}),
              p.jsx(He, {}),
              p.jsx(DA, {
                ...e,
                children: p.jsx(Ir, {
                  size: "small",
                  "aria-label": "scroll back to top",
                  children: p.jsx(l1, {}),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const zA = Cf({
  breakpoints: { values: { xs: 0, sm: 760, md: 1300, lg: 1536, xl: 1918 } },
  typography: { fontFamily: "Bubblegum" },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: !0 },
      styleOverrides: {
        root: {
          background: ' url("assets/svg/cloud.svg") center center no-repeat',
          backgroundSize: "contain",
          transition: "transform 0.3s",
          "&:hover": {
            background: ' url("assets/svg/cloud.svg") center center no-repeat',
            backgroundSize: "contain",
            transform: "scale(1.4)",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: 20,
          textTransform: "capitalize",
          textShadow:
            "-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: { padding: 0, "@media(min-width:760px)": { padding: 0 } },
      },
    },
  },
});
Du.createRoot(document.getElementById("root")).render(
  p.jsx(ut.StrictMode, {
    children: p.jsx(gT, { theme: zA, children: p.jsx(FA, {}) }),
  })
);
