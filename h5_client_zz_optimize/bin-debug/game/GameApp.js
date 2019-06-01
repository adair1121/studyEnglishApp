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
/**
 * @author
 */
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        var _this = _super.call(this) || this;
        _this.preload_load_count = 0;
        return _this;
    }
    GameApp.ins = function () {
        return _super.ins.call(this);
    };
    GameApp.prototype.load = function () {
        ResourceUtils.ins().loadGroup("preload", this.complete, this.progress, this);
    };
    /**
     * 资源组加载完成
     */
    GameApp.prototype.complete = function () {
        //移到GameSystem后的原因是用来检查GameSystem中的类初始化函数中是否有初始化配置，否则会报错提醒
        GlobalConfig.parserData();
        //音乐音效处理
        LocationProperty.setLoadProgress(100, "");
        eui.Label.default_fontFamily = "微软雅黑";
        SceneManager.ins().runScene(StartGameScene);
    };
    /**
     * 资源组加载进度
     */
    GameApp.prototype.progress = function (itemsLoaded, itemsTotal) {
        LocationProperty.setLoadProgress(50 + (itemsLoaded / itemsTotal * 40), "", 0);
    };
    GameApp.prototype.postPerLoadProgress = function (itemsLoaded, itemsTotal) {
        return [itemsLoaded, itemsTotal];
    };
    GameApp.prototype.postLoginInit = function () {
    };
    GameApp.prototype.postZeroInit = function () {
    };
    return GameApp;
}(BaseClass));
__reflect(GameApp.prototype, "GameApp");
MessageCenter.compile(GameApp);
//# sourceMappingURL=GameApp.js.map