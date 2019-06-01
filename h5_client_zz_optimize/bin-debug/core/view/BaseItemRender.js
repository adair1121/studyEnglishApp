var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseItemRender = (function (_super) {
    __extends(BaseItemRender, _super);
    function BaseItemRender() {
        return _super.call(this) || this;
    }
    BaseItemRender.prototype.addTouchEvent = function (obj, func, isStartEffect) {
        if (isStartEffect === void 0) { isStartEffect = true; }
        if (isStartEffect) {
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onEndTouch, this);
            obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEndTouch, this);
        }
    };
    BaseItemRender.prototype.onBeginTouch = function (evt) {
        if (evt.target) {
            this.changeFilter(evt.target);
        }
    };
    BaseItemRender.prototype.onEndTouch = function (evt) {
        if (evt.target && evt.target.filters) {
            evt.target.filters = [];
        }
    };
    BaseItemRender.prototype.changeFilter = function (obj) {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        obj.filters = [colorFlilter];
    };
    BaseItemRender.prototype.removeTouchEvent = function (obj, func) {
        if (obj) {
            if (obj.hasEventListener("touchBegin")) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this);
            }
            if (obj.hasEventListener("touchEnd")) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndTouch, this);
            }
            if (obj.hasEventListener("touchCancel")) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onEndTouch, this);
            }
            if (obj.hasEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE)) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEndTouch, this);
            }
        }
    };
    return BaseItemRender;
}(eui.ItemRenderer));
__reflect(BaseItemRender.prototype, "BaseItemRender");
//# sourceMappingURL=BaseItemRender.js.map