function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/* 单路由配置 * */

/* 路由初始化参数 * */
var ROUTER_MODE;

(function (ROUTER_MODE) {
  ROUTER_MODE["HASH"] = "hash";
  ROUTER_MODE["HISTORY"] = "history";
})(ROUTER_MODE || (ROUTER_MODE = {}));

var Base = function Base(router) {
  _classCallCheck(this, Base);

  this.router = router;
  this.current = {
    path: '/',
    name: '',
    component: {
      render: function render() {
        return '';
      }
    },
    redirect: '',
    callback: function callback() {}
  };
};

var HashRouter = /*#__PURE__*/function (_Base) {
  _inherits(HashRouter, _Base);

  var _super = _createSuper(HashRouter);

  function HashRouter(router, routes) {
    var _this;

    _classCallCheck(this, HashRouter);

    _this = _super.call(this, router);
    _this.routes = routes;

    _this.init(_this.routes);

    return _this;
  }
  /***
   * 定位到默认路由
   * @param {Route[]} routes
   */


  _createClass(HashRouter, [{
    key: "init",
    value: function init(routes) {
      this.register();
    }
    /***
     * 获取当前url的hash地址
     * @returns {string}
     */

  }, {
    key: "parseHash",
    value: function parseHash() {
      return location.hash.slice(1).toLowerCase() || '/';
    }
  }, {
    key: "routeTo",
    value: function routeTo(path) {
      var currentRoute = this.findComponentByPath(path, this.routes);

      if (currentRoute) {
        var component = currentRoute.component;
        document.getElementById('app').innerHTML = component.render();
        this.current = currentRoute;
      }
    }
  }, {
    key: "findComponentByPath",
    value: function findComponentByPath(path, routes) {
      var routePath = routes.find(function (r) {
        return r.path === path;
      });
      return routePath && routePath.redirect ? this.findComponentByPath(routePath.redirect, this.routes) : routePath;
    }
  }, {
    key: "register",
    value: function register() {
      var _this2 = this;

      window.addEventListener('hashchange', function () {
        _this2.routeTo(_this2.parseHash());
      });
      window.addEventListener('load', function () {
        _this2.routeTo(_this2.parseHash());
      });
    }
  }, {
    key: "push",
    value: function push(path) {
      location.hash = "#".concat(path);
    }
  }]);

  return HashRouter;
}(Base);

var LamentRouter = /*#__PURE__*/function () {
  // 当前路由对象
  function LamentRouter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, LamentRouter);

    this.options = options;
    this.mode = options.mode || 'hash';

    switch (this.mode) {
      case ROUTER_MODE.HASH:
        this.routes = new HashRouter(this, this.options.routes);
        break;

      case ROUTER_MODE.HISTORY:
        break;
    }
  }

  _createClass(LamentRouter, [{
    key: "currentRoute",
    get: function get() {
      return this.routes && this.routes.current;
    }
  }]);

  return LamentRouter;
}();

export default LamentRouter;
