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
/**基本UI，用于策划拼接通用组件 此基类复制逻辑类方法和属性
 * 不能复制get set 方法，有这些方法的类要改写get set方法
 * @see RoleInfoPanel
*/
var BaseComponent = (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super.call(this) || this;
        _this.className = "@策划@使用此组件必须填写逻辑类名";
        return _this;
    }
    // /**组件实例完成 className（如果组件没有绑定逻辑类，将会报错）*/
    // protected childrenCreated(): void {
    // 	try {
    // 		let cls = eval(this.className);
    // 		let obj = new cls();
    // 		if (obj != null) {
    // 			for (let key in obj) {
    // 				if ((this[key] == null || BaseComponent.copyKeys.indexOf(key) != -1) &&
    // 					BaseComponent.filterKeys.indexOf(key) == -1) {
    // 					this[key] = obj[key];
    // 				}
    // 			}
    // 		}
    // 		// var cls = eval(this.className);
    // 		// let p = cls.prototype;
    // 		// let keys = Object.keys(p);
    // 		// for (let name of keys) {
    // 		// 	// let obj = new cls();
    // 		// 	if (this[name] == null) {
    // 		// 		this[name] = cls.prototype[name];
    // 		// 	}
    // 		// }
    // 		if (this["init"]) {
    // 			this["init"]();
    // 		}
    // 	} catch (error) {
    // 		//如果出现此错误，说明资源里面有使用了BaseComponent组件，但组件没有绑定相应的类，解决：在资源里面搜索<ns1:XXXXXX（XXXXXX为出错的类），找到然后在源码界面对
    // 		//应行上写上对应的类名,className="XXXXXX" 即可
    // 		debug.log(`######错误！！！className为空，出错逻辑类为：<ns1:${egret.getQualifiedClassName(this)}，请查看资源里面的BaseComponent组件是否有未绑定的逻辑类`);
    // 	}
    // }
    BaseComponent.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    BaseComponent.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    Object.defineProperty(BaseComponent.prototype, "data", {
        get: function () {
            return this["_data"];
        },
        //为了适配 render类型
        set: function (value) {
            this["_data"] = value;
            eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "data");
            if (this["dataChanged"])
                this["dataChanged"]();
        },
        enumerable: true,
        configurable: true
    });
    BaseComponent.filterKeys = ["data"];
    BaseComponent.copyKeys = ["open", "close"];
    return BaseComponent;
}(BaseView));
__reflect(BaseComponent.prototype, "BaseComponent");
//# sourceMappingURL=BaseComponent.js.map