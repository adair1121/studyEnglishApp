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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "MainSceneSkin";
        return _this;
        // ResourceUtils.ins().loadUIGroup(UIGroup.LadderResultWin);
    }
    MainScene.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
    };
    MainScene.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    MainScene.prototype.onTap = function (evt) {
        ViewManager.ins().close(MainScene);
    };
    MainScene.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    return MainScene;
}(BaseEuiView));
__reflect(MainScene.prototype, "MainScene");
ViewManager.ins().reg(MainScene, LayerManager.UI_Main);
//# sourceMappingURL=MainScene.js.map