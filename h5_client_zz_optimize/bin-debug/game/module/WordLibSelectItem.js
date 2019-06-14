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
var WordLibSelectItem = (function (_super) {
    __extends(WordLibSelectItem, _super);
    function WordLibSelectItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "WordLibSelectItemSkin";
        return _this;
    }
    WordLibSelectItem.prototype.init = function () {
        this.addTouchEvent(this.itemGroup, this.onClick, true);
    };
    WordLibSelectItem.prototype.onClick = function (evt) {
    };
    WordLibSelectItem.prototype.dataChanged = function () {
        if (!!this.data) {
            this.label.text = this.data.label;
            if (this.data.recorded) {
                this.itembg.source = "item_down_png";
            }
            else {
                this.itembg.source = "item_up_png";
            }
        }
    };
    WordLibSelectItem.prototype.refresh = function () {
        this.itembg.source = "item_down_png";
    };
    WordLibSelectItem.prototype.distory = function () {
        this.removeTouchEvent(this.itemGroup, this.onClick);
    };
    return WordLibSelectItem;
}(BaseItemRender));
__reflect(WordLibSelectItem.prototype, "WordLibSelectItem");
//# sourceMappingURL=WordLibSelectItem.js.map