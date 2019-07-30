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
var SingleWordSelectItem = (function (_super) {
    __extends(SingleWordSelectItem, _super);
    function SingleWordSelectItem() {
        var _this = _super.call(this) || this;
        _this.count = -1;
        _this.trans = "";
        _this.audio = "";
        _this.fontLab = "";
        _this.selectBoo = false;
        _this.wrongBoo = false;
        _this.checkBoo = false;
        _this.skinName = "SingleWordSelectItemSkin";
        return _this;
    }
    SingleWordSelectItem.prototype.childrenCreated = function () {
        this.wrongImg.touchEnabled = false;
        this.checkbox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.font.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    SingleWordSelectItem.prototype.onTouchTap = function (evt) {
        switch (evt.target) {
            case this.checkbox:
                if (GameApp.ins().curRoute != "check") {
                    this.selectBoo = !this.selectBoo;
                    this.checkbox.selected = this.selectBoo;
                }
                else {
                    this.rect.visible = true;
                    this.checkBoo = true;
                    this.wrongBoo = !this.wrongBoo;
                    this.wrongImg.visible = this.wrongBoo;
                }
                break;
            case this.font:
                this.initialize();
                break;
        }
    };
    Object.defineProperty(SingleWordSelectItem.prototype, "select", {
        get: function () {
            return this.selectBoo;
        },
        set: function (value) {
            this.selectBoo = value;
            this.checkbox.selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleWordSelectItem.prototype, "isWrong", {
        get: function () {
            return this.wrongBoo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleWordSelectItem.prototype, "isCheck", {
        get: function () {
            return this.checkBoo;
        },
        enumerable: true,
        configurable: true
    });
    SingleWordSelectItem.prototype.dataChanged = function () {
        if (!!this.data) {
            this.font.text = this.data.font;
            this.fontLab = this.data.font;
            this.trans = this.data.trans;
            if (this.data.audio) {
                this.audio = this.data.audio;
            }
            else {
                this.audio = this.data.font + ".mp3";
            }
        }
    };
    SingleWordSelectItem.prototype.initialize = function () {
        if (GameApp.ins().curRoute == "check") {
            this.rect.visible = true;
            this.checkBoo = true;
        }
        this.count += 1;
        this.font.text = this.count % 2 == 0 ? this.trans : this.fontLab;
        if (this.audio) {
            SoundManager.ins().stopEffect();
            SoundManager.ins().playEffect("" + MP3_DIR + this.audio);
        }
    };
    SingleWordSelectItem.prototype.distory = function () {
        this.checkbox.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.font.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    return SingleWordSelectItem;
}(BaseItemRender));
__reflect(SingleWordSelectItem.prototype, "SingleWordSelectItem");
//# sourceMappingURL=SingleWordSelectItem.js.map