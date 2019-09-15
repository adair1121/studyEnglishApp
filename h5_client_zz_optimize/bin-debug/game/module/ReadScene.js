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
var ReadScene = (function (_super) {
    __extends(ReadScene, _super);
    function ReadScene() {
        var _this = _super.call(this) || this;
        _this.curLevel = 1;
        _this.readRes = "resource/res/read/";
        _this.answerCfg = [
            "dbcd", "bcb", "cadb", "dcb", "aabc", "aacb", "acbd", "dcd", "dacc", "cedga", "dbca", "dbac", "caab", "ddcb",
            "ceadg", "aedfb", "dcfba", "cfgbd", "dabfg"
        ];
        _this.skinName = "ReadSceneSkin";
        return _this;
    }
    ReadScene.prototype.open = function () {
        var _this = this;
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.addTouchEvent(this.exitButton, this.onTouchClose, true);
        this.curAnswer = this.answerCfg[this.curLevel - 1];
        RES.getResByUrl("" + this.readRes + this.curLevel + "/1.jpg", function (texture) {
            var img = new eui.Image(texture);
            _this.viewGroup.addChild(img);
            var img2 = new eui.Image();
            img2.source = "" + _this.readRes + _this.curLevel + "/2.jpg";
            _this.viewGroup.addChild(img2);
            img2.y = img.y + img.height;
        }, this, RES.ResourceItem.TYPE_IMAGE);
        this.addTouchEvent(this.nextBtn, this.onNext);
        this.addTouchEvent(this.submitBtn, this.onSubmit);
        this.nextBtn.visible = false;
        this.correctLab.visible = false;
    };
    ReadScene.prototype.onNext = function () {
        this.txtInput.text = "";
        this.correctLab.visible = false;
        this.nextBtn.visible = false;
        this.submitBtn.touchEnabled = true;
        this.curLevel += 1;
        this.txtInput.touchEnabled = true;
        this.curAnswer = this.answerCfg[this.curLevel - 1];
        this.refreshRead();
    };
    ReadScene.prototype.refreshRead = function () {
        var _this = this;
        this.scroller.viewport.scrollH = 0;
        this.scroller.viewport.scrollV = 0;
        this.viewGroup.removeChildren();
        RES.getResByUrl("" + this.readRes + this.curLevel + "/1.jpg", function (texture) {
            var img = new eui.Image(texture);
            _this.viewGroup.addChild(img);
            var img2 = new eui.Image();
            img2.source = "" + _this.readRes + _this.curLevel + "/2.jpg";
            _this.viewGroup.addChild(img2);
            img2.y = img.y + img.height;
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    ReadScene.prototype.onSubmit = function () {
        var len = StringUtils.getStringLength(this.txtInput.text);
        if (len <= 0) {
            ViewManager.ins().open(WarnWin, { tips: "请先输入答案再提交" });
            return;
        }
        else if (len < this.curAnswer.length) {
            ViewManager.ins().open(WarnWin, { tips: "请先输入完整的答案再提交" });
            return;
        }
        else {
            this.txtInput.touchEnabled = false;
            this.submitBtn.touchEnabled = false;
            var answer = this.txtInput.text.toLocaleLowerCase();
            this.correctLab.visible = true;
            this.nextBtn.visible = true;
            this.correctLab.textFlow = new egret.HtmlTextParser().parse("\u6B63\u786E\u7B54\u6848\u4E3A:<font color=0x00ff00>" + this.curAnswer + "</font>");
            if (this.curLevel + 1 > this.answerCfg.length) {
                this.nextBtn.visible = false;
            }
        }
    };
    ReadScene.prototype.onTouchClose = function (evt) {
        var tips = "当前未完成，确定退出吗？";
        if (this.curLevel + 1 > this.answerCfg.length) {
            tips = "确定退出吗？";
        }
        ViewManager.ins().open(WarnWin, { state: "select", callBack: this.selectCall, thisArg: this, tips: tips });
    };
    ReadScene.prototype.selectCall = function (num) {
        if (num == 1) {
            //确定退出了
            ViewManager.ins().close(ReadScene);
        }
        else {
            //取消了
        }
    };
    ReadScene.prototype.close = function () {
        this.removeTouchEvent(this.exitButton, this.onTouchClose);
        this.removeTouchEvent(this.submitBtn, this.onSubmit);
        this.removeTouchEvent(this.nextBtn, this.onNext);
        // this.txtInput.removeEventListener(egret.TextEvent.FOCUS_IN,this.onFocusIn,this);
    };
    return ReadScene;
}(BaseEuiView));
__reflect(ReadScene.prototype, "ReadScene");
ViewManager.ins().reg(ReadScene, LayerManager.UI_Main);
//# sourceMappingURL=ReadScene.js.map