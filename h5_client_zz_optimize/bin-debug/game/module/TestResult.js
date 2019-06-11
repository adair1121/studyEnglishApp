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
var TestResult = (function (_super) {
    __extends(TestResult, _super);
    function TestResult() {
        var _this = _super.call(this) || this;
        _this.skinName = "TestResultSkin";
        return _this;
    }
    TestResult.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
    };
    TestResult.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.addTouchEvent(this.exitButton, this.close, true);
        this.addTouchEvent(this.sureBtn, this.close, true);
        this.desc.text = TestResultDesc.resultStr(param[0].score);
    };
    TestResult.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.removeTouchEvent(this.exitButton, this.close);
        this.removeTouchEvent(this.sureBtn, this.close);
        ViewManager.ins().close(TestResult);
    };
    return TestResult;
}(BaseEuiView));
__reflect(TestResult.prototype, "TestResult");
ViewManager.ins().reg(TestResult, LayerManager.UI_Main);
//# sourceMappingURL=TestResult.js.map