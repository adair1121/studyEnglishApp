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
var WordLibLevelSelect = (function (_super) {
    __extends(WordLibLevelSelect, _super);
    function WordLibLevelSelect() {
        var _this = _super.call(this) || this;
        _this.levelData = {};
        _this.skinName = "WordLibLevelSelectSkin";
        return _this;
    }
    WordLibLevelSelect.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.arrayCollect = new eui.ArrayCollection();
        this.list.itemRenderer = WordLibSelectItem;
        this.levelData = [];
        this.scroller.viewport = this.list;
        var data = param[0].data;
        this.grade = param[0].grade;
        var itemData = [];
        var levelCfgs = [];
        for (var i = 0; i < data.length; i++) {
            if (itemData.indexOf(data[i].level) == -1) {
                itemData.push(data[i].level);
                levelCfgs.push({ label: "第" + data[i].level + "关", recorded: false });
            }
        }
        this.dealLevelData(data);
        this.arrayCollect.source = levelCfgs;
        this.list.dataProvider = this.arrayCollect;
        this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
    };
    WordLibLevelSelect.prototype.dealLevelData = function (levelcgfs) {
        for (var i = 0; i < levelcgfs.length; i++) {
            if (!this.levelData[levelcgfs[i].level]) {
                this.levelData[levelcgfs[i].level] = [];
            }
            this.levelData[levelcgfs[i].level].push(levelcgfs[i]);
        }
        console.log(this.levelData);
    };
    WordLibLevelSelect.prototype.onItemTap = function (evt) {
    };
    WordLibLevelSelect.prototype.onTouchTap = function (evt) {
        switch (evt.target) {
            case this.exitButton:
                this.close();
                ViewManager.ins().close(WordLibLevelSelect);
                break;
        }
    };
    WordLibLevelSelect.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.levelData = [];
        this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
    };
    return WordLibLevelSelect;
}(BaseEuiView));
__reflect(WordLibLevelSelect.prototype, "WordLibLevelSelect");
ViewManager.ins().reg(WordLibLevelSelect, LayerManager.UI_Main);
//# sourceMappingURL=WordLibLevelSelect.js.map