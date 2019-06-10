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
        this.addTouchEvent(this.btn_left, this.onLeft, true);
        this.addTouchEvent(this.btn_right, this.onRight, true);
        var arr = [];
        for (var key in GlobalConfig.RecordConfig) {
            arr.push(GlobalConfig.RecordConfig[key]);
        }
        this.clickReadpanel.dataProvider(arr);
        this.pageNum.text = this.clickReadpanel.m_curPage + "/" + this.clickReadpanel.m_pageNum;
        this.refreshArrow();
    };
    RecordScene.prototype.onLeft = function () {
        this.clickReadpanel.refreshData(-1);
        this.refreshArrow();
    };
    RecordScene.prototype.onRight = function () {
        this.clickReadpanel.refreshData(1);
        this.refreshArrow();
    };
    RecordScene.prototype.refreshArrow = function () {
        if (this.clickReadpanel.m_curPage >= this.clickReadpanel.m_pageNum) {
            this.btn_right.visible = false;
            this.btn_left.visible = true;
        }
        else if (this.clickReadpanel.m_curPage == 1) {
            this.btn_left.visible = false;
            this.btn_right.visible = true;
        }
        else {
            this.btn_left.visible = this.btn_right.visible = true;
        }
        this.pageNum.text = this.clickReadpanel.m_curPage + "/" + this.clickReadpanel.m_pageNum;
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
        this.removeTouchEvent(this.btn_left, this.onLeft);
        this.removeTouchEvent(this.btn_right, this.onRight);
        this.removeTouchEvent(this.exitButton, this.onTouch);
    };
    return RecordScene;
}(BaseEuiView));
__reflect(RecordScene.prototype, "RecordScene");
ViewManager.ins().reg(RecordScene, LayerManager.UI_Main);
