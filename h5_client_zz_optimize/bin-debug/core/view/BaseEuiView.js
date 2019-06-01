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
 * Created by yangsong on 2014/11/22.
 * View基类，继承自eui.Component
 */
var BaseEuiView = (function (_super) {
    __extends(BaseEuiView, _super);
    // public closeAndDestroy: boolean = false;
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    function BaseEuiView() {
        var _this = _super.call(this) || this;
        _this._resources = null;
        /**是否一级窗口,一级窗口会把部分主界面遮挡 */
        _this.isTopLevel = false;
        /** 互斥窗口,类名或者类字符串的数组,打开某些窗口会关闭互斥的窗口*/
        _this.exclusionWins = [];
        _this._isInit = false;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
    }
    /**
     * 添加互斥窗口
     * @classOrName 类名或者类字符串
     * */
    BaseEuiView.prototype.addExclusionWin = function (classOrName) {
        if (this.exclusionWins.indexOf(classOrName) == -1)
            this.exclusionWins.push(classOrName);
    };
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    BaseEuiView.prototype.isInit = function () {
        return this._isInit;
    };
    /**
     * 面板是否显示
     * @return
     *
     */
    BaseEuiView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    /**
     * 添加到父级
     */
    BaseEuiView.prototype.addToParent = function (p) {
        p.addChild(this);
        TimerManager.ins().remove(this.destoryView, this);
    };
    /**
     * 从父级移除
     */
    BaseEuiView.prototype.removeFromParent = function () {
        var _parent = this.parent;
        DisplayUtils.removeFromParent(this);
        this.destoryView();
        // if (this.closeAndDestroy || _parent == LayerManager.UI_Popup) {
        // 	this.destoryView();
        // } else {
        // 	if (!TimerManager.ins().isExists(this.destoryView, this))
        // 		TimerManager.ins().doTimer(1000, 1, this.destoryView, this);
        // }
    };
    /**hide 除了第一个页签意外的页签显示 */
    BaseEuiView.prototype.hidePageFunc = function (viewStack, index) {
        if (index === void 0) { index = 0; }
        var fixitem;
        var fixitems = [];
        if (typeof index == "number") {
            fixitem = viewStack.getChildAt(index);
        }
        else {
            for (var j = 0; j < index.length; j++) {
                fixitem = viewStack.getChildAt(index[j]);
                fixitems.push(fixitem);
            }
            fixitem = null;
        }
        if (viewStack.$children.length >= 2) {
            for (var i = 0; i < viewStack.$children.length; i++) {
                var item = viewStack.getChildAt(i);
                if (!!fixitem) {
                    if (fixitem != item) {
                        viewStack.removeChild(item);
                        i--;
                    }
                }
                else {
                    if (!~fixitems.indexOf(item)) {
                        viewStack.removeChild(item);
                        i--;
                    }
                }
            }
        }
    };
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseEuiView.prototype.initUI = function () {
        this._isInit = true;
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseEuiView.prototype.initData = function () {
    };
    /**
     * 销毁
     */
    BaseEuiView.prototype.destroy = function () {
    };
    BaseEuiView.prototype.destoryView = function (destroyUI) {
        if (destroyUI === void 0) { destroyUI = true; }
        TimerManager.ins().removeAll(this);
        ViewManager.ins().destroy(this.hashCode);
        if (destroyUI) {
            ResourceMgr.ins().destroyWin();
        }
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 加载面板所需资源
     */
    BaseEuiView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            ResourceUtils.ins().loadResource(this._resources, [], loadComplete, null, this);
            this.addEventListener(eui.UIEvent.CREATION_COMPLETE, initComplete, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    };
    /**
     * 设置是否隐藏
     * @param value
     */
    BaseEuiView.prototype.setVisible = function (value) {
        this.visible = value;
    };
    BaseEuiView.openCheck = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        return true;
    };
    // public playUIEff(...param: any[]): void {
    //     if (this.anigroup)
    //         UIAnimation.setAnimation(this.anigroup, UIAnimation.ANITYPE_IN_SCALE_VER, {time: 200});
    //     // debug.log("BaseEuiView PlayUIEff");
    //     // let layer = param[0];
    //     // if( layer.layerName == "UI_Popup" )
    //     // 	UIAnimation.setAnimation(this,UIAnimation.ANITYPE_IN_RIGHT_HOR,{time:300,ease:egret.Ease.sineInOut});
    // }
    BaseEuiView.prototype.closeEx = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var func = param[0];
        if (this.parent == LayerManager.UI_Popup) {
            // if (this.anigroup)
            //     // UIAnimation.setAnimation(this.anigroup, UIAnimation.ANITYPE_OUT_SCALE_VER, {
            //     //     time: 200,
            //     //     func: func,
            //     //     ease: egret.Ease.sineIn
            //     // });
            // else
            func();
        }
        else {
            func();
        }
    };
    return BaseEuiView;
}(BaseView));
__reflect(BaseEuiView.prototype, "BaseEuiView", ["IBaseView"]);
//# sourceMappingURL=BaseEuiView.js.map