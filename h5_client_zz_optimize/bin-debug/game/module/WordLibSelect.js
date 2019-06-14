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
var WordLibSelect = (function (_super) {
    __extends(WordLibSelect, _super);
    function WordLibSelect() {
        var _this = _super.call(this) || this;
        _this.words = [];
        _this.dataObj = {};
        _this.skinName = "WordLibSelectSkin";
        return _this;
    }
    WordLibSelect.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.words = ["小学词汇", "初中词汇", "高中初级词汇", "高中中级词汇", "高中高级词汇"];
        this.arrcollect = new eui.ArrayCollection();
        this.list.itemRenderer = WordLibSelectItem;
        var data = GlobalConfig.LevelConfig;
        this.dealLevelData();
        var itemDatas = [];
        this.words.forEach(function (item) {
            itemDatas.push({ label: item });
        });
        this.arrcollect.source = itemDatas;
        this.list.dataProvider = this.arrcollect;
        this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
    };
    WordLibSelect.prototype.onItemTap = function (evt) {
        var grade = evt.itemIndex + 1;
        if (this.dataObj[grade]) {
            ViewManager.ins().open(WordLibLevelSelect, { data: this.dataObj[grade], grade: grade });
        }
    };
    WordLibSelect.prototype.dealLevelData = function () {
        var data = GlobalConfig.LevelConfig;
        for (var key in data) {
            var itemConfig = data[key];
            if (!this.dataObj[itemConfig.grade]) {
                this.dataObj[itemConfig.grade] = [];
            }
            this.dataObj[itemConfig.grade].push(itemConfig);
        }
    };
    WordLibSelect.prototype.onTouchTap = function (evt) {
        switch (evt.target) {
            case this.exitButton:
                this.close();
                ViewManager.ins().close(WordLibSelect);
                break;
        }
    };
    WordLibSelect.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.words = [];
        this.dataObj = {};
        var len = this.list.$children.length;
        for (var i = 0; i < len; i++) {
            var item = this.list.getChildAt(i);
            if (!!item) {
                item.distory();
            }
        }
        this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
        this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    return WordLibSelect;
}(BaseEuiView));
__reflect(WordLibSelect.prototype, "WordLibSelect");
ViewManager.ins().reg(WordLibSelect, LayerManager.UI_Main);
//# sourceMappingURL=WordLibSelect.js.map