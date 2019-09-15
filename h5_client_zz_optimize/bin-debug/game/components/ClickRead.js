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
        _this.pageIndex = 1;
        _this.pageData = {};
        _this.totalPage = 0;
        _this.singleItemHeight = 100;
        _this.skinName = "ClickReadSkin";
        return _this;
    }
    ClickRead.prototype.childrenCreated = function () {
        this.list.itemRenderer = ClickReadItem;
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
    };
    ClickRead.prototype.dataProvider = function (data) {
        this.splitPage(data);
        this.dataRecord = new eui.ArrayCollection();
        this.dataRecord.source = this.pageData[1];
        this.list.dataProvider = this.dataRecord;
    };
    /**
     *
     */
    ClickRead.prototype.refreshData = function (oper) {
        this.pageIndex += oper;
        if (this.pageIndex >= this.totalPage) {
            this.pageIndex = this.totalPage;
        }
        if (this.pageIndex <= 1) {
            this.pageIndex = 1;
        }
        this.dataRecord.source = this.pageData[this.pageIndex];
        this.list.dataProviderRefreshed();
        this.selectIndex = -1;
    };
    ClickRead.prototype.splitPage = function (arr) {
        var count = 0;
        var hpercent = window.innerHeight / 860;
        var relactIndex = Math.ceil(8 * hpercent);
        if (hpercent > 1) {
            relactIndex = 8;
        }
        this.totalPage = Math.ceil(arr.length / relactIndex);
        for (var i = 0; i < arr.length; i++) {
            count += 1;
            if (count <= relactIndex) {
                var curPageIndex = i == 0 ? 1 : Math.ceil((i + 1) / relactIndex);
                if (!this.pageData[curPageIndex]) {
                    this.pageData[curPageIndex] = [];
                }
                this.pageData[curPageIndex].push(arr[i]);
                if (!(count % relactIndex)) {
                    count = 0;
                }
            }
        }
    };
    Object.defineProperty(ClickRead.prototype, "m_pageNum", {
        get: function () {
            return this.totalPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClickRead.prototype, "m_curPage", {
        get: function () {
            return this.pageIndex;
        },
        enumerable: true,
        configurable: true
    });
    ClickRead.prototype.onItemTap = function (evt) {
        var item = this.list.getChildAt(evt.itemIndex);
        if (this.selectIndex != -1 && this.selectIndex != evt.itemIndex) {
            var clickItem = this.list.getChildAt(this.selectIndex);
            clickItem.initialize({ bold: false, size: 30 }, false);
        }
        this.selectIndex = evt.itemIndex;
        item.refreshItem({ bold: true, size: 40 });
    };
    ClickRead.prototype.distory = function () {
        this.selectIndex = -1;
        var itemLen = this.list.$children.length;
        this.pageData = null;
        this.pageIndex = null;
        this.totalPage = null;
        this.singleItemHeight = null;
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