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
var SingleWordSelect = (function (_super) {
    __extends(SingleWordSelect, _super);
    function SingleWordSelect() {
        var _this = _super.call(this) || this;
        _this.recoverData = [];
        _this.wordData = [];
        _this.titleLab = "";
        _this.route = "";
        _this.skinName = "SingleWordSelectSkin";
        return _this;
    }
    SingleWordSelect.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.delBtn.visible = false;
        this.recoverData = [];
        this.arrayCollect = new eui.ArrayCollection();
        this.wordData = param[0].wordData;
        if (param[0].route) {
            this.route = param[0].route;
            if (this.route == "TeachMainScene") {
                this.buttonLabel.text = "重新识记";
                this.title.text = "我的生词本";
                this.titleLab = "重新识记";
                this.delBtn.visible = true;
            }
        }
        this.list.itemRenderer = SingleWordSelectItem;
        this.scroller.viewport = this.list;
        this.arrayCollect.source = this.wordData;
        this.list.dataProvider = this.arrayCollect;
        this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.selectAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.delBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    SingleWordSelect.prototype.onTouchTap = function (evt) {
        var _this = this;
        switch (evt.target) {
            case this.exitButton:
                this.close();
                break;
            case this.sureBtn:
                var count = this.getSelectWordNum();
                if (count < 7) {
                    ViewManager.ins().open(WarnWin, { tips: "请至少选择7个单词~" });
                    return;
                }
                else {
                    if (!this.route) {
                        this.writeWordToLocal();
                        //当前没有路由参数 默认为复习功能进入
                        ViewManager.ins().open(WarnWin, { tips: "已为您添加到生词本~请继续努力", callBack: function () {
                                ViewManager.ins().open(RecordScene, { dataCfg: _this.recoverData, title: "复习中" });
                                _this.close();
                            }, thisArg: this });
                    }
                    else if (this.route == "TeachMainScene") {
                        //生词本进入
                        ViewManager.ins().open(RecordScene, { dataCfg: this.recoverData, title: this.titleLab ? this.titleLab : "" });
                        this.close();
                    }
                }
                break;
            case this.selectAll:
                this.selectCheck.selected = !this.selectCheck.selected;
                this.operAllSelect();
                break;
            case this.delBtn:
                var delNum = this.getSelectWordNum();
                if (delNum <= 0) {
                    ViewManager.ins().open(WarnWin, { tips: "请先选择要删除的生词" });
                    return;
                }
                //删除内存中的生词
                var delId = [];
                for (var i = this.recoverData.length - 1; i >= 0; i--) {
                    var itemConfig = this.recoverData[i];
                    var word = egret.localStorage.getItem(itemConfig.id.toString());
                    if (!!word) {
                        egret.localStorage.removeItem(itemConfig.id.toString());
                    }
                    delId.push(itemConfig.id);
                }
                this.recoverData = [];
                //删除生词本中数据 刷新页面
                var wordIdstr = egret.localStorage.getItem("wordids");
                var wordIdArr_1 = wordIdstr.split("|");
                delId.forEach(function (id) {
                    for (var j = 0; j < _this.wordData.length; j++) {
                        if (_this.wordData[j].id == id) {
                            _this.wordData.splice(j, 1);
                            break;
                        }
                    }
                    for (var i = 0; i < wordIdArr_1.length; i++) {
                        if (wordIdArr_1[i] == id.toString()) {
                            wordIdArr_1.splice(i, 1);
                            break;
                        }
                    }
                });
                if (wordIdArr_1.length) {
                    egret.localStorage.setItem("wordids", wordIdArr_1.join("|"));
                }
                else {
                    egret.localStorage.setItem("wordids", "");
                }
                this.arrayCollect.source = this.wordData;
                this.list.dataProviderRefreshed();
                break;
        }
    };
    SingleWordSelect.prototype.writeWordToLocal = function () {
        var wordIds = egret.localStorage.getItem("wordids");
        for (var i = 0; i < this.recoverData.length; i++) {
            var config = this.recoverData[i];
            var word = egret.localStorage.getItem(config.id.toString());
            if (!word) {
                egret.localStorage.setItem(config.id.toString(), JSON.stringify(this.recoverData[i]));
                if (wordIds == "") {
                    wordIds = config.id.toString();
                }
                else {
                    wordIds += "|" + config.id;
                }
            }
        }
        egret.localStorage.setItem("wordids", wordIds);
    };
    SingleWordSelect.prototype.operAllSelect = function () {
        var boo = this.selectCheck.selected;
        var len = this.list.$children.length;
        for (var i = 0; i < len; i++) {
            var item = this.list.getChildAt(i);
            if (!!item) {
                item.select = boo;
            }
        }
    };
    /**
     * 获取选择复习的单词数量
     */
    SingleWordSelect.prototype.getSelectWordNum = function () {
        var len = this.list.$children.length;
        var count = 0;
        for (var i = 0; i < len; i++) {
            var item = this.list.getChildAt(i);
            if (!!item) {
                if (item.select) {
                    count += 1;
                    this.recoverData.push(this.wordData[i]);
                }
            }
        }
        return count;
    };
    SingleWordSelect.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.recoverData = [];
        var len = this.list.$children.length;
        for (var i = 0; i < len; i++) {
            var item = this.list.getChildAt(i);
            if (!!item) {
                item.distory();
            }
        }
        ViewManager.ins().close(SingleWordSelect);
        this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.selectAll.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.delBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    return SingleWordSelect;
}(BaseEuiView));
__reflect(SingleWordSelect.prototype, "SingleWordSelect");
ViewManager.ins().reg(SingleWordSelect, LayerManager.UI_Main);
//# sourceMappingURL=SingleWordSelect.js.map