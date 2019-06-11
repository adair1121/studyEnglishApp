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
var TestScene = (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        var _this = _super.call(this) || this;
        _this.answerArr = [];
        // 当前选择题目索引值
        _this.curSelectIndex = -1;
        // 当前题目正确答案索引
        _this.answerIndex = -1;
        // 答题正确数量
        _this.correctNum = 0;
        // 当前进行数量
        _this.curProgressIndex = 0;
        // 时间倒计时
        _this.timeNum = 60;
        //每道题正确得分
        _this.singleScore = 2;
        // 题目总数量
        _this.totalNum = 0;
        _this.clicked = true;
        _this.fontObj = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "F", 5: "G", 6: "H", 7: "I", 8: "J" };
        _this.skinName = "TestSceneSkin";
        return _this;
    }
    TestScene.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.progress.text = "0%";
        this.num.text = "00";
        this.word.text = "";
        this.time.text = "60s";
        this.list.itemRenderer = TestSceneItem;
        this.itemCollect = new eui.ArrayCollection();
        this.answerArr = [];
        var testData = GlobalConfig.answer;
        for (var key in testData) {
            this.answerArr.push(testData[key]);
        }
        this.totalNum = this.answerArr.length;
        this.timer = new egret.Timer(1000);
        this.addTouchEvent(this.exitButton, this.onTouch, true);
        this.addTouchEvent(this.submitBtn, this.onTouch, true);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
        this.refreshPage(this.answerArr.shift());
    };
    // item点击
    TestScene.prototype.onItemTap = function (evt) {
        if (!this.clicked) {
            return;
        }
        this.initItem();
        this.curSelectIndex = evt.itemIndex;
        var item = this.list.getChildAt(evt.itemIndex);
        item.refreshItem(true);
    };
    TestScene.prototype.initItem = function () {
        this.initList(this.curSelectIndex);
        this.initList(this.answerIndex);
    };
    TestScene.prototype.initList = function (index) {
        if (index != -1) {
            var item = this.list.getChildAt(index);
            if (!!item) {
                item.refreshItem(false);
            }
        }
    };
    TestScene.prototype.onTimer = function (evt) {
        this.timeNum -= 1;
        if (this.timeNum <= 0) {
            this.timeNum = 0;
            this.showAnswer();
        }
        this.time.text = this.timeNum + "s";
    };
    TestScene.prototype.refreshPage = function (itemData) {
        var _this = this;
        this.initItem();
        this.curSelectIndex = -1;
        this.timeNum = 60;
        this.timer.start();
        this.progress.text = Number((this.curProgressIndex / this.totalNum).toFixed(2)) * 100 + "%";
        this.num.text = itemData.id.toString();
        this.time.text = '60s';
        this.word.text = itemData.word;
        var arr = itemData.selection.split("|");
        var dataArr = [];
        arr.forEach(function (item, index) {
            dataArr.push({ select: item, label: _this.fontObj[index] });
        }, this);
        this.itemCollect.source = dataArr;
        this.list.dataProvider = this.itemCollect;
        this.answerIndex = itemData.answer;
    };
    TestScene.prototype.onTouch = function (evt) {
        switch (evt.target) {
            case this.exitButton:
                this.close();
                ViewManager.ins().close(TestScene);
                break;
            case this.submitBtn:
                if (this.curSelectIndex == -1) {
                    ViewManager.ins().open(WarnWin, { tips: "不要调皮～认真的做题选答案" });
                    return;
                }
                this.curProgressIndex += 1;
                this.showAnswer();
                break;
        }
    };
    TestScene.prototype.showAnswer = function () {
        var _this = this;
        this.submitBtn.touchEnabled = false;
        this.list.touchEnabled = false;
        this.clicked = false;
        this.timer.stop();
        this.timer.reset();
        var curItem = this.list.getChildAt(this.curSelectIndex);
        var rightItem = this.list.getChildAt(this.answerIndex);
        if (this.curSelectIndex == this.answerIndex) {
            this.correctNum += 1;
            if (!!curItem) {
                curItem.refreshItem(true, 1);
            }
            // console.log("回答正确")
        }
        else {
            if (!!curItem) {
                curItem.refreshItem(true, 2);
            }
            if (!!rightItem) {
                rightItem.refreshItem(true, 1);
            }
            // console.log("回答错误");
        }
        var timeout = egret.setTimeout(function () {
            egret.clearTimeout(timeout);
            if (_this.answerArr.length) {
                _this.list.touchEnabled = true;
                _this.submitBtn.touchEnabled = true;
                _this.clicked = true;
                _this.refreshPage(_this.answerArr.shift());
            }
            else {
                _this.outputResult();
            }
        }, this, 3000);
    };
    // 显示测试结果页面
    TestScene.prototype.outputResult = function () {
        //打开结算界面
        ViewManager.ins().open(TestResult, { score: this.correctNum * this.singleScore });
        ViewManager.ins().close(TestScene);
        this.close();
    };
    TestScene.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.num = null;
        this.progress = null;
        this.exitButton = null;
        this.word = null;
        this.time = null;
        this.answerArr = null;
        this.itemCollect = null;
        this.curSelectIndex = null;
        this.answerIndex = null;
        this.curProgressIndex = null;
        this.correctNum = null;
        this.singleScore = null;
        this.totalNum = null;
        this.clicked = null;
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.removeTouchEvent(this.exitButton, this.onTouch);
        this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
    };
    return TestScene;
}(BaseEuiView));
__reflect(TestScene.prototype, "TestScene");
ViewManager.ins().reg(TestScene, LayerManager.UI_Main);
//# sourceMappingURL=TestScene.js.map