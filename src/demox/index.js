import HashRouter from './RouterMode/HashRoute';
export var ROUTER_MODE;
(function (ROUTER_MODE) {
    ROUTER_MODE["HASH"] = "hash";
    ROUTER_MODE["HISTORY"] = "history";
})(ROUTER_MODE || (ROUTER_MODE = {}));
var LamentRouter = /** @class */ (function () {
    function LamentRouter(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.mode = options.mode || 'hash';
        switch (this.mode) {
            case ROUTER_MODE.HASH:
                this.routes = new HashRouter(this, this.options.routes);
                break;
            case ROUTER_MODE.HISTORY:
                break;
            default:
                break;
        }
    }
    Object.defineProperty(LamentRouter.prototype, "currentRoute", {
        get: function () {
            return this.routes && this.routes.current;
        },
        enumerable: false,
        configurable: true
    });
    return LamentRouter;
}());
export default LamentRouter;
//# sourceMappingURL=index.js.map