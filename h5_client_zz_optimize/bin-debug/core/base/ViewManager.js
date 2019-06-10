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
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    /**
     * 构造函数
     */
    function ViewManager() {
        var _this = _super.call(this) || this;
        // private filters: Array<string> = ["TipsView", "UIView1_1", "GameSceneView", "ChatMainUI", "PlayFunView"];
        _this.filters = ["TipsView", "UIView1_1", "GameSceneView", "PlayFunView"];
        //关闭所有顶窗口时候排除以下窗口
        _this.closeTopFilters = [];
        _this._regesterInfo = {};
        _this._views = {};
        _this._hCode2Key = {};
        _this._opens = [];
        // this._constView = ["GameSceneView", "ChatMainUI", "UIView2", "TipsView", "PlayFunView"];
        _this._constView = ["GameSceneView", "UIView2", "TipsView", "PlayFunView"];
        return _this;
    }
    /** 重载单例*/
    ViewManager.ins = function () {
        return _super.ins.call(this);
    };
    /**
     * 清空处理
     */
    ViewManager.prototype.clear = function () {
        this.closeAll();
        this._views = {};
    };
    /**
     * 面板注册
     * @param view 面板类
     * @param layer 层级
     */
    ViewManager.prototype.reg = function (viewClass, layer) {
        if (viewClass == null) {
            return;
        }
        var keys = egret.getQualifiedClassName(viewClass);
        if (this._regesterInfo[keys]) {
            return;
        }
        this._regesterInfo[keys] = [viewClass, layer];
    };
    /**
     * 销毁一个面板
     * @param hCode
     */
    ViewManager.prototype.destroy = function (hCode) {
        var keys = this._hCode2Key[hCode];
        delete this._views[keys];
        delete this._hCode2Key[hCode];
    };
    ViewManager.prototype.getKey = function (nameOrClass) {
        var key = "";
        if (typeof (nameOrClass) == "string")
            key = nameOrClass;
        else if (typeof (nameOrClass) == "function")
            key = egret.getQualifiedClassName(nameOrClass);
        else if ((nameOrClass) instanceof BaseEuiView) {
            var keys = Object.keys(this._views);
            for (var i = 0, len = keys.length; i < len; i++) {
                var tempKey = keys[i];
                if (this._views[tempKey] == nameOrClass) {
                    key = tempKey;
                    break;
                }
            }
        }
        else
            debug.log("打开界面只支持类名和类名的字符串形式,关闭界面只支持类名和类名的字符串以及类的实例形式,错误编号:" + nameOrClass);
        return key;
    };
    /**
     * 检测能否开启
     * @param key 类名
     */
    ViewManager.prototype.viewOpenCheck = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var result = true;
        var info = this._regesterInfo[key];
        if (info != null) {
            var c = info[0];
            var f = c["openCheck"];
            if (f != null) {
                result = f.apply(void 0, param);
            }
        }
        return result;
    };
    /**
     * 统一打开窗口函数
     * @param nameOrClass 类名,类字符串名,或者类对象
     * @param param 打开窗口传入的参数
     *  */
    ViewManager.prototype.open = function (nameOrClass) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var key = this.getKey(nameOrClass);
        //检测能否开启
        if (!this.viewOpenCheck.apply(this, [key].concat(param))) {
            return null;
        }
        var view = this.openEasy(key, param);
        if (this.filters.indexOf(key) == -1) {
            debug.log("开始打开窗口:" + key);
        }
        if (view) {
            this.checkOpenView(view);
            // this.setUIEff(key);
            // debug.log("成功打开窗口:" + key);
        }
        else {
            // debug.log("成功打开窗口:" + key);
        }
        MessageCenter.ins().dispatch("refreshNAV");
        return view;
    };
    /**
     * 统一打开窗口函数隐藏界面 并立即执行对应任务
     * @param nameOrClass 类名,类字符串名,或者类对象
     * @param param 打开窗口传入的参数
     *  */
    ViewManager.prototype.openExture = function (nameOrClass) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var key = this.getKey(nameOrClass);
        //检测能否开启
        if (!this.viewOpenCheck.apply(this, [key].concat(param))) {
            return null;
        }
        var view = this.openEasy(key, param);
        view.visible = false;
        if (view["autoExecute"]) {
            view["autoExecute"]();
        }
        if (this.filters.indexOf(key) == -1) {
            debug.log("开始打开窗口:" + key);
        }
        // if (view) {
        // 	this.checkOpenView(view);
        // 	this.setUIEff(key);
        // 	// debug.log("成功打开窗口:" + key);
        // } else {
        // 	// debug.log("成功打开窗口:" + key);
        // }
        return view;
    };
    /**
     * 显示指定界面对界面部分UI进行动画播放播放
     * @param nameOrClass 类名,类字符串名,或者类对象
     *
     * */
    // private setUIEff(className?:string){
    // 	// let layer:BaseEuiLayer = this._regesterInfo[className][1];
    // 	if( className ){
    // 		let view:BaseEuiView = this.getView(className);
    // 		if( view ){
    // 			view.playUIEff();
    // 		}
    // 	}
    // 	//close
    // 	//else{
    // 	// if( this._opens.length == this._constView.length )
    // 	// 	return;
    // 	// let view:BaseEuiView = this.getView(className);
    // 	// if( view ){
    // 	// 	view.closeUIEff(layer,this.checkCloseView);
    // 	// }
    // 	//}
    // }
    //简单的打开一个界面
    ViewManager.prototype.openEasy = function (nameOrClass, param) {
        if (param === void 0) { param = null; }
        var keys = this.getKey(nameOrClass);
        var view = this._views[keys];
        var info = this._regesterInfo[keys];
        if (!view) {
            if (!true && Assert(info, "ViewManager.openEasy class " + keys + " is null!!")) {
                return;
            }
            //参数参考this.register函数
            view = new info[0]();
            // view.$setParent(info[1]);
            this._views[keys] = view;
            this._hCode2Key[view.hashCode] = keys;
        }
        if (view == null) {
            debug.log("UI_" + keys + "不存在");
            return null;
        }
        //关闭互斥窗口
        for (var _i = 0, _a = view.exclusionWins; _i < _a.length; _i++) {
            var exclusionWin = _a[_i];
            this.closeEasy(exclusionWin);
        }
        if (view.isShow() || view.isInit()) {
            view.addToParent(info[1]);
            view.open.apply(view, param);
        }
        else {
            view.addToParent(info[1]);
            view.initUI();
            view.initData();
            view.open.apply(view, param);
            view.setVisible(true);
            // EasyLoading.ins().showLoading();
            // view.loadResource(function () {
            // 	view.addToParent(info[1]);
            // 	view.setVisible(false);
            // }.bind(this), function () {
            // 	view.initUI();
            // 	view.initData();
            // 	view.open.apply(view, param);
            // 	// if (view instanceof GuanQiaRewardWin) {
            // 	// 	view.y = view.height;
            // 	// 	let t: egret.Tween = egret.Tween.get(view);
            // 	// 	t.to({"y": 0, alpha: 1 }, 500).call(() => {
            // 	// 		egret.Tween.removeTweens(view);
            // 	// 	});
            // 	// }
            // 	view.setVisible(true);
            // 	EasyLoading.ins().hideLoading();
            // }.bind(this));
        }
        var index = this._opens.indexOf(keys);
        if (index >= 0) {
            this._opens.splice(index, 1);
        }
        this._opens.push(keys);
        return view;
    };
    ViewManager.prototype.checkOpenView = function (view) {
        if (view.isTopLevel && view.parent != LayerManager.UI_Popup) {
            // SoundUtil.WINDOW_OPEN = true; //目前打开窗口时也播放技能声音
            // SoundUtil.ins().playEffect(SoundUtil.WINDOW);
            // GameLogic.ins().postViewOpen(1);
            // this.closeEasy(ChatMainUI);
            // this.closeEasy(ChatWin);
        }
    };
    //----------------------------------------------------关闭-------------------------------------
    /**
     * 统一关闭窗口函数
     * @param nameOrClass 类名,类字符串名,或者类对象
     * @param param 关闭传入的参数
     **/
    ViewManager.prototype.close = function (nameOrClass) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var key = this.getKey(nameOrClass);
        // debug.log("开始关闭窗口" + key);
        // if (this.filters.indexOf(key) == -1) {
        // 	debug.log("开始打开窗口:" + key);
        // 	UserSkill.ins().postViewOpen(0);
        // }
        this.closeEx(key, param);
        // let view: BaseEuiView = this.closeEasy(key, param);
        // if (view) {
        // 	this.checkCloseView();
        // 	// debug.log("成功关闭窗口" + key);
        // } else {
        // 	// debug.log("窗口不存在" + key);
        // }
    };
    ViewManager.prototype.closeEx = function (className) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        if (className) {
            var view = this.getView(className);
            if (view) {
                var self_1 = this;
                view.closeEx(function () {
                    var view = self_1.closeEasy(className, param);
                    if (view) {
                        self_1.checkCloseView();
                        // debug.log("成功关闭窗口" + key);
                    }
                    else {
                        // debug.log("窗口不存在" + key);
                    }
                });
            }
        }
    };
    ViewManager.prototype.closeLastTopView = function () {
        var len = this._opens.length;
        for (var k = len - 1; k >= 0; k--) {
            var win = this.getView(this._opens[k]);
            if (win && win.isTopLevel) {
                this.close(win);
                break;
            }
        }
    };
    //简单关闭一个窗口
    ViewManager.prototype.closeEasy = function (nameOrClass) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        if (!this.isShow(nameOrClass)) {
            return null;
        }
        var key = this.getKey(nameOrClass);
        var view = this.getView(key);
        if (view) {
            var viewIndex = this._opens.indexOf(key);
            if (viewIndex >= 0) {
                this._opens.splice(viewIndex, 1);
            }
            view.close.apply(view, param);
            view.$onClose.apply(view);
            view.removeFromParent();
        }
        MessageCenter.ins().dispatch("refreshNAV");
        return view;
    };
    ViewManager.prototype.checkCloseView = function () {
        var hasTopLevelWin = false; //是否有一级窗口
        for (var _i = 0, _a = this._opens; _i < _a.length; _i++) {
            var key = _a[_i];
            var win = this.getView(key);
            if (win && win.isTopLevel) {
                hasTopLevelWin = true;
                break;
            }
        }
        if (!hasTopLevelWin) {
            // SoundUtil.WINDOW_OPEN = false;
            // GameLogic.ins().postViewOpen(0);
            // if(SceneManager.ins().getSceneName() == SceneManager.MAIN) {
            // 	if (!this.isShow(GameSceneView))
            // 		this.openEasy(GameSceneView);
            // 	// if (!this.isShow(ChatMainUI))
            // 	// 	this.openEasy(ChatMainUI);
            // }
        }
    };
    // /** 获取战斗场景 */
    // public static get gamescene(): GameSceneView {
    // 	return ViewManager.ins().getView(GameSceneView) as GameSceneView;
    // }
    /**
     * 获取一个UI对象
     * 返回null代表未初始化
     * @param nameOrClass  类名,类字符串名,或者类对象
     * @returns BaseEuiView
     */
    ViewManager.prototype.getView = function (nameOrClass) {
        var keys = this.getKey(nameOrClass);
        // if (this._views[keys] instanceof Array)
        // 	return null;
        return this._views[keys];
    };
    /**
     * 关闭所有开启中的UI
     */
    ViewManager.prototype.closeAll = function () {
        while (this._opens.length) {
            this.closeEasy(this._opens[0], []);
        }
        this.destroyAllNotShowView();
        this.checkCloseView();
    };
    /**
     * 关闭所有一级界面
     */
    ViewManager.prototype.closeTopLevel = function () {
        var filter = this.closeTopFilters;
        this.closeTopFilters = [];
        for (var i = this._opens.length - 1; i >= 0; i--) {
            var keys = this._opens[i];
            if (filter.indexOf(keys) >= 0) {
                continue;
            }
            var view = this.getView(keys);
            var key = 1000000;
            if (!isNaN(parseInt(keys))) {
                key = parseInt(keys);
            }
            if (!view)
                continue;
            //if (Assert(view, "closeTopLevel view null. keys:" + keys)) continue;
            if (view.isTopLevel)
                this.closeEasy(keys, []);
        }
        this.checkCloseView();
    };
    /**
     * 当前ui打开数量
     * @returns {number}
     */
    ViewManager.prototype.openNum = function () {
        return this._opens.length;
    };
    /**
     * 检测一个UI是否开启中
     * @param nameOrClass 类名,类字符串名,或者类对象
     * @returns {boolean}
     */
    ViewManager.prototype.isShow = function (nameOrClass) {
        return this._opens.indexOf(this.getKey(nameOrClass)) >= 0;
    };
    /**
     * 是否打开1级界面
     */
    ViewManager.prototype.hasTopView = function () {
        for (var _i = 0, _a = this._opens; _i < _a.length; _i++) {
            var key = _a[_i];
            var win = this.getView(key);
            if (win && win.isTopLevel) {
                return true;
            }
        }
        return false;
    };
    /**
     * 释放所有已关闭但未释放的窗口
     */
    ViewManager.prototype.destroyAllNotShowView = function () {
        for (var code in this._hCode2Key) {
            var keys = this._hCode2Key[code];
            if (this._constView.indexOf(keys) == -1 && this._opens.indexOf(keys) == -1) {
                var win = this.getView(keys);
                if (win && win.destoryView) {
                    win.destoryView(false);
                }
            }
        }
    };
    return ViewManager;
}(BaseClass));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map