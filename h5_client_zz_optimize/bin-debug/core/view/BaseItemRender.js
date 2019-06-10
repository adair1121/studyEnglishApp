var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
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
