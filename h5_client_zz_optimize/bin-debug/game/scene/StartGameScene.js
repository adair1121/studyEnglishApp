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
var StartGameScene = (function (_super) {
    __extends(StartGameScene, _super);
    /**
     * 构造函数
     */
    function StartGameScene() {
        return _super.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    StartGameScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Tips);
        ViewManager.ins().open(MainScene);
    };
    /**
     * 退出Scene调用
     */
    StartGameScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return StartGameScene;
}(BaseScene));
__reflect(StartGameScene.prototype, "StartGameScene");
//# sourceMappingURL=StartGameScene.js.map