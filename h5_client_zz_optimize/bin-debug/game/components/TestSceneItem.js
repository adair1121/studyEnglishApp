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
var TestSceneItem = (function (_super) {
    __extends(TestSceneItem, _super);
    function TestSceneItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "TestSceneItemSkin";
        return _this;
    }
    TestSceneItem.prototype.dataChanged = function () {
        if (!!this.data) {
            this.select.text = this.data.select;
            this.selectIndexLab.text = this.data.label;
            this.selectLab = this.data.label;
        }
    };
    TestSceneItem.prototype.refreshItem = function (select, result) {
        if (result === void 0) { result = 0; }
        if (result) {
            this.selectIndexLab.visible = !select;
        }
        if (result == 1) {
            //正确显示
            this.selectImg.source = "select_right_jpg";
            this.select.textColor = 0x23E023;
        }
        else if (result == 2) {
            //错误
            this.selectImg.source = "select_wrong_jpg";
            this.select.textColor = 0xED0707;
        }
        else {
            this.select.bold = select ? true : false;
            this.select.size = select ? 40 : 30;
            //正常状态
            this.selectImg.source = "select_normal_png";
            this.select.textColor = 0x000000;
        }
    };
    return TestSceneItem;
}(BaseItemRender));
__reflect(TestSceneItem.prototype, "TestSceneItem");
//# sourceMappingURL=TestSceneItem.js.map