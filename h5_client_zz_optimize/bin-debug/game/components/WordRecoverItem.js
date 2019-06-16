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
var WordRecoverItem = (function (_super) {
    __extends(WordRecoverItem, _super);
    function WordRecoverItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "WordRecoverItemSkin";
        return _this;
    }
    WordRecoverItem.prototype.dataChanged = function () {
        if (!!this.data) {
            this.label.text = this.data.label;
            this._recorded = this.data.recorded;
            if (this.data.recorded) {
                this.itembg.source = "item_down_png";
            }
            else {
                this.itembg.source = "item_up_png";
            }
            if (this.data.level) {
                this._level = this.data.level;
            }
        }
    };
    Object.defineProperty(WordRecoverItem.prototype, "recorded", {
        get: function () {
            return this._recorded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WordRecoverItem.prototype, "select", {
        get: function () {
            return this.checkBox.selected;
        },
        set: function (bool) {
            this.checkBox.selected = bool;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WordRecoverItem.prototype, "selectLev", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    WordRecoverItem.prototype.getCheckStatus = function () {
        return this.checkBox.selected;
    };
    WordRecoverItem.prototype.refresh = function () {
        this.itembg.source = "item_down_png";
    };
    WordRecoverItem.prototype.distory = function () {
    };
    return WordRecoverItem;
}(BaseItemRender));
__reflect(WordRecoverItem.prototype, "WordRecoverItem");
//# sourceMappingURL=WordRecoverItem.js.map