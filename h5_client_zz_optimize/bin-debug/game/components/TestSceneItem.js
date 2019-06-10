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
        }
    };
    TestSceneItem.prototype.refreshItem = function (data) {
    };
    return TestSceneItem;
}(BaseItemRender));
__reflect(TestSceneItem.prototype, "TestSceneItem");
//# sourceMappingURL=TestSceneItem.js.map