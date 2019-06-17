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
var TeachMainScene = (function (_super) {
    __extends(TeachMainScene, _super);
    function TeachMainScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "TeachMainSceneSkin";
        return _this;
    }
    TeachMainScene.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
    };
    TeachMainScene.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.recordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.yueduBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.bookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.wordBookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    TeachMainScene.prototype.onTap = function (evt) {
        switch (evt.target) {
            case this.recordBtn:
                //记单词教学
                ViewManager.ins().open(WordLibSelect);
                break;
            case this.yueduBtn:
                //阅读训练
                ViewManager.ins().open(WarnWin, { tips: "此功能暂未开放，敬请期待～" });
                break;
            case this.bookBtn:
                //课本点读背诵
                ViewManager.ins().open(WarnWin, { tips: "此功能暂未开放，敬请期待～" });
                break;
            case this.wordBookBtn:
                var wordIds = egret.localStorage.getItem("wordids");
                var wordData_1 = [];
                if (wordIds) {
                    var wordidArr = wordIds.split("|");
                    wordidArr.forEach(function (id) {
                        var itemConfig = JSON.parse(egret.localStorage.getItem(id.toString()));
                        if (itemConfig) {
                            wordData_1.push(itemConfig);
                        }
                    });
                }
                else {
                    egret.localStorage.setItem("wordids", "");
                }
                //生词本
                ViewManager.ins().open(SingleWordSelect, { wordData: wordData_1, title: "我的生词本", route: "TeachMainScene" });
                break;
            case this.exitButton:
                this.close();
                ViewManager.ins().close(TeachMainScene);
                break;
        }
        // ViewManager.ins().close(MainScene);
    };
    TeachMainScene.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.recordBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.yueduBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.bookBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.wordBookBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    return TeachMainScene;
}(BaseEuiView));
__reflect(TeachMainScene.prototype, "TeachMainScene");
ViewManager.ins().reg(TeachMainScene, LayerManager.UI_Main);
//# sourceMappingURL=TeachMainScene.js.map