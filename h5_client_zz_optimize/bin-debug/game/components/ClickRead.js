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
var ClickRead = (function (_super) {
    __extends(ClickRead, _super);
    function ClickRead() {
        var _this = _super.call(this) || this;
        _this.selectIndex = -1;
        _this.skinName = "ClickReadSkin";
        return _this;
    }
    ClickRead.prototype.childrenCreated = function () {
        this.list.itemRenderer = ClickReadItem;
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
    };
    ClickRead.prototype.dataProvider = function (data) {
        this.list.dataProvider = data;
    };
    ClickRead.prototype.onItemTap = function (evt) {
        var item = evt.item;
        if (this.selectIndex == -1) {
            this.selectIndex = evt.itemIndex;
        }
        if (this.selectIndex != evt.itemIndex) {
            var clickItem = this.list.getChildAt(this.selectIndex);
            clickItem.refreshItem({ bold: false, size: 30 });
            this.selectIndex = evt.itemIndex;
            item.refreshItem({ bold: true, size: 40 });
        }
    };
    ClickRead.prototype.distory = function () {
        this.selectIndex = -1;
        var itemLen = this.list.$children.length;
        for (var i = 0; i < itemLen; i++) {
            var item = this.list.getChildAt(i);
            item.distory();
        }
        this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
    };
    return ClickRead;
}(eui.Component));
__reflect(ClickRead.prototype, "ClickRead");
//# sourceMappingURL=ClickRead.js.map