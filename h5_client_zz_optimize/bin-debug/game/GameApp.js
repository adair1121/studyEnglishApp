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
 * @author
 */
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        var _this = _super.call(this) || this;
        _this.preload_load_count = 0;
        _this.curRoute = "";
        _this.curLib = "";
        _this.checkResultStr = "已检查0个/错误0个/正确率100%";
        return _this;
    }
    GameApp.ins = function () {
        return _super.ins.call(this);
    };
    GameApp.prototype.load = function () {
        //移到GameSystem后的原因是用来检查GameSystem中的类初始化函数中是否有初始化配置，否则会报错提醒
        GlobalConfig.parserData();
        //音乐音效处理
        eui.Label.default_fontFamily = "微软雅黑";
        SceneManager.ins().runScene(StartGameScene);
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