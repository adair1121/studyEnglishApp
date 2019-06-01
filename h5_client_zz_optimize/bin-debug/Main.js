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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super.call(this) || this;
    }
    Main.prototype.childrenCreated = function () {
        StageUtils.init();
        this.init();
    };
    Main.prototype.init = function (pfCfg) {
        //注入自定义的素材解析器
        this.stage.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        this.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        RES.setMaxLoadingThread(4);
        if (DeviceUtils.IsPC) {
            // StageUtils.ins().setScaleMode(egret.StageScaleMode.SHOW_ALL);
            StageUtils.ins().getStage().orientation = egret.OrientationMode.AUTO;
        }
        else {
            if (navigator.userAgent.indexOf("iPad") != -1) {
                StageUtils.ins().getStage().orientation = egret.OrientationMode.AUTO;
            }
        }
        //设置跨域访问资源
        egret.ImageLoader.crossOrigin = "anonymous";
        this.loadResVersionComplete();
    };
    Main.prototype.loadResVersionComplete = function () {
        if (window["removeGif"])
            window["removeGif"]();
        GameLoadingUI.GetInstance().show(this);
        LocationProperty.setLoadProgress(10, "");
        ResourceUtils.ins().addConfig(RES_RESOURCE + "default.res.json", "" + RES_RESOURCE);
        ResourceUtils.ins().loadConfig(this.onConfigComplete, this);
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    Main.prototype.onConfigComplete = function () {
        LocationProperty.setLoadProgress(20, "");
        var theme = new eui.Theme(RES_RESOURCE + "default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.parserConfig, this);
    };
    /**
     * 解析配置数据
     */
    Main.prototype.parserConfig = function () {
        LocationProperty.setLoadProgress(50, "", 3000);
        RES.getResByUrl(CFG_DIR + "config.zip", function (data) {
            JSZip.loadAsync(data).then(function (zipdata) {
                return zipdata.file('config.json').async('text');
            }).then(function (text) {
                GlobalConfig.setData(JSON.parse(text));
                GameApp.ins().load();
            });
        }, this, RES.ResourceItem.TYPE_BIN);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map