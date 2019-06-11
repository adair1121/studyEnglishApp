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
        this.addTouchEvent(this.sureBtn, this.close);
        this.tips.text = param[0].tips;
    };
    WarnWin.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.removeTouchEvent(this.maskRect, this.close);
        this.removeTouchEvent(this.sureBtn, this.close);
        ViewManager.ins().close(WarnWin);
    };
    return WarnWin;
}(BaseEuiView));
__reflect(WarnWin.prototype, "WarnWin");
ViewManager.ins().reg(WarnWin, LayerManager.UI_Popup);
//# sourceMappingURL=WarnWin.js.map