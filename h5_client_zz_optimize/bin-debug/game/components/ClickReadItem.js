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
var ClickReadItem = (function (_super) {
    __extends(ClickReadItem, _super);
    function ClickReadItem() {
        var _this = _super.call(this) || this;
        _this.audio = "";
        _this.count = 0;
        _this.skinName = "ClickReadItemSkin";
        _this.init();
        return _this;
    }
    ClickReadItem.prototype.init = function () {
        this.trans.visible = false;
        this.addTouchEvent(this.itemGroup, this.onClick, true);
    };
    ClickReadItem.prototype.onClick = function (evt) {
    };
    ClickReadItem.prototype.dataChanged = function () {
        if (!!this.data) {
            this.enFont.text = this.data.font;
            this.trans.text = this.data.trans;
            if (this.data.audio) {
                this.audio = this.data.audio;
            }
            else {
                this.audio = this.data.font + ".mp3";
            }
        }
    };
    ClickReadItem.prototype.initialize = function (data, play) {
        if (play === void 0) { play = true; }
        this.trans.visible = false;
        this.count = 0;
        this.refreshItem(data, "init", play);
    };
    ClickReadItem.prototype.refreshItem = function (data, str, play) {
        if (str === void 0) { str = "refresh"; }
        if (play === void 0) { play = false; }
        for (var key in data) {
            if (this.enFont[key]) {
                this.enFont[key] = data[key];
            }
        }
        if (str == "refresh") {
            this.count += 1;
            this.trans.visible = ((this.count % 2) == 0);
        }
        if (this.audio && str != "init") {
            SoundManager.ins().stopEffect();
            SoundManager.ins().playEffect("" + MP3_DIR + this.audio.toLocaleLowerCase());
        }
    };
    ClickReadItem.prototype.distory = function () {
        this.removeTouchEvent(this.itemGroup, this.onClick);
        this.count = 0;
    };
    return ClickReadItem;
}(BaseItemRender));
__reflect(ClickReadItem.prototype, "ClickReadItem");
//# sourceMappingURL=ClickReadItem.js.map