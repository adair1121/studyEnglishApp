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
/**
 * Created by yangsong on 2014/11/28.
 * 场景管理类
 */
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    /**
     * 构造函数
     */
    function SceneManager() {
        return _super.call(this) || this;
    }
    SceneManager.ins = function () {
        return _super.ins.call(this);
    };
    /**
     * 清空处理
     */
    SceneManager.prototype.clear = function () {
        var nowScene = this._currScene;
        if (nowScene) {
            nowScene.onExit();
            this._currScene = undefined;
        }
    };
    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    SceneManager.prototype.runScene = function (SceneClass) {
        if (SceneClass == null) {
            debug.log("runScene:scene is null");
            return;
        }
        var oldScene = this._currScene;
        if (oldScene) {
            oldScene.onExit();
            oldScene = undefined;
        }
        var s = new SceneClass();
        s.onEnter();
        this._currScene = s;
    };
    /**
     * 获取当前Scene
     * @returns {number}
     */
    SceneManager.prototype.getCurrScene = function () {
        return this._currScene;
    };
    SceneManager.prototype.getSceneName = function () {
        if (this._currScene) {
            return egret.getQualifiedClassName(this._currScene);
        }
        return '';
    };
    SceneManager.CREATE_ROLE = "CreateRoleScene";
    SceneManager.MAIN = "MainScene";
    return SceneManager;
}(BaseClass));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map