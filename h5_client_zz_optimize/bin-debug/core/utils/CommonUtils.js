var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by yangsong on 15-1-12.
 * 通用工具类
 */
var CommonUtils = (function (_super) {
    __extends(CommonUtils, _super);
    function CommonUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 给字体添加描边
     * @param lable      文字
     * @param color      表示文本的描边颜色
     * @param width      描边宽度。
     */
    CommonUtils.addLableStrokeColor = function (lable, color, width) {
        lable.strokeColor = color;
        lable.stroke = width;
    };
    /**
     * 获取一个对象的长度
     * @param list
     */
    CommonUtils.getObjectLength = function (list) {
        var num = 0;
        for (var i in list) {
            num++;
        }
        return num;
    };
    /**
     * 根据属性值 获取一个对象
     * @param list
     * @param attrName
     * @param attrValue
     * @returns {any}
     */
    CommonUtils.getObjectByAttr = function (list, attrName, attrValue) {
        for (var i in list) {
            if (list[i][attrName] == attrValue) {
                return list[i];
            }
        }
        return null;
    };
    /**
     * 根据联合ID获取对象
     * @param list
     * @param attrValue
     * @param attrValue1
     * @returns {any}
     */
    CommonUtils.getObjectByUnionAttr = function (list, attrValue, attrValue1) {
        for (var i in list) {
            if (i == attrValue.toString()) {
                for (var j in list[i]) {
                    if (j == attrValue1.toString()) {
                        return list[i][j];
                    }
                }
            }
        }
        return null;
    };
    /**
     * 深度复制
     * @param _data
     */
    CommonUtils.copyDataHandler = function (obj) {
        var newObj;
        if (obj instanceof Array) {
            newObj = [];
        }
        else if (obj instanceof Object) {
            newObj = {};
        }
        else {
            return obj;
        }
        var keys = Object.keys(obj);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            newObj[key] = this.copyDataHandler(obj[key]);
        }
        return newObj;
    };
    /**转换有效数据数组，不改变原数组*/
    CommonUtils.objectToArray = function (obj) {
        if (obj instanceof Object) {
            obj = this.copyDataHandler(obj);
            var newArr = [];
            var keys = Object.keys(obj);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (obj[key])
                    newArr.push(obj[key]);
            }
            return newArr;
        }
        else {
            return obj;
        }
    };
    /**
     * 锁屏
     */
    CommonUtils.lock = function () {
        StageUtils.ins().getStage().touchEnabled = StageUtils.ins().getStage().touchChildren = false;
    };
    /**
     * 解屏
     */
    CommonUtils.unlock = function () {
        StageUtils.ins().getStage().touchEnabled = StageUtils.ins().getStage().touchChildren = true;
    };
    /**
     * 万字的显示
     * @param label
     * @param num
     */
    CommonUtils.labelIsOverLenght = function (label, num) {
        // label.text = this.overLength(num);
    };
    return CommonUtils;
}(BaseClass));
__reflect(CommonUtils.prototype, "CommonUtils");
//# sourceMappingURL=CommonUtils.js.map