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
/**
 * 彈出框（普通）
 */
var WarnWin = (function (_super) {
    __extends(WarnWin, _super);
    function WarnWin() {
        var _this = _super.call(this) || this;
        _this.skinName = "warnFrameSkin";
        return _this;
    }
    WarnWin.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.addTouchEvent(this.maskRect, this.close);
        this.addTouchEvent(this.sureBtn, this.onSure);
        this.addTouchEvent(this.cancleBtn, this.onCancle);
        this.tips.text = param[0].tips;
        if (param[0].callBack) {
            this.callBack = param[0].callBack;
        }
        if (param[0].thisArg) {
            this.thisArg = param[0].thisArg;
        }
        if (param[0].state) {
            this.skin.currentState = param[0].state;
        }
    };
    WarnWin.prototype.onSure = function () {
        if (this.callBack && this.thisArg) {
            this.callBack.call(this.thisArg, 1);
        }
        this.close();
    };
    WarnWin.prototype.onCancle = function () {
        if (this.callBack && this.thisArg) {
            this.callBack.call(this.thisArg, 0);
        }
        this.close();
    };
    WarnWin.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.removeTouchEvent(this.maskRect, this.close);
        this.removeTouchEvent(this.sureBtn, this.onSure);
        this.removeTouchEvent(this.cancleBtn, this.close);
        ViewManager.ins().close(WarnWin);
    };
    return WarnWin;
}(BaseEuiView));
__reflect(WarnWin.prototype, "WarnWin");
ViewManager.ins().reg(WarnWin, LayerManager.UI_Popup);
//# sourceMappingURL=WarnWin.js.map