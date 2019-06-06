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
var RecordScene = (function (_super) {
    __extends(RecordScene, _super);
    function RecordScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "RecordSceneSkin";
        return _this;
    }
    RecordScene.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
    };
    RecordScene.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.addTouchEvent(this.exitButton, this.onTouch, true);
        this.dataRecord = new eui.ArrayCollection();
        var arr = [];
        for (var key in GlobalConfig.RecordConfig) {
            arr.push(GlobalConfig.RecordConfig[key]);
        }
        this.dataRecord.source = arr;
        this.clickReadpanel.dataProvider(this.dataRecord);
    };
    RecordScene.prototype.onTouch = function (evt) {
        this.close();
        ViewManager.ins().close(RecordScene);
    };
    RecordScene.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.removeTouchEvent(this.exitButton, this.onTouch);
    };
    return RecordScene;
}(BaseEuiView));
__reflect(RecordScene.prototype, "RecordScene");
ViewManager.ins().reg(RecordScene, LayerManager.UI_Main);
//# sourceMappingURL=RecordScene.js.map