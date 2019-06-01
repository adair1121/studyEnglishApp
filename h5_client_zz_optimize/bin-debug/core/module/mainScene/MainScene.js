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