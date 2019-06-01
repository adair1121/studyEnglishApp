var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GlobalConfig = (function () {
    function GlobalConfig() {
    }
    GlobalConfig.setData = function (data) {
        this.config = data;
    };
    GlobalConfig.parserData = function () {
        // if (this.init) return;
        // if (!this.config) return;
        // for (let key in this.config) {
        // 	let value = this.config[key];
        // 	let objCls = egret.getDefinitionByName(key);
        // 	if (objCls) {
        // 		//用来存储配置一个默认实例
        // 		let objKey = `_obj${key}`;
        // 		this[objKey] = new objCls();
        // 		//用来确认配置表是否已经设置 __proto__ 为 储存的实例（this[objKey])
        // 		let boolKey = `_bool${key}`;
        // 		this[boolKey] = false;
        // 		//将真正的配置存放在this[newKey]中
        // 		let newKey = `_${key}_`;
        // 		//创建key引用配置
        // 		Object.defineProperty(this, key, {
        // 			get: function () {
        // 				let obj = this[newKey];
        // 				if (this[boolKey]) return obj;
        // 				let proto = this[objKey];
        // 				this.parseKeys(obj, proto, GlobalConfig.keys[key] || 0);
        // 				this[boolKey] = true;
        // 				return obj;
        // 			},
        // 			set: function (val) {
        // 				this[newKey] = val;
        // 			}
        // 		});
        // 	}
        // 	//赋值
        // 	this[key] = value;
        // }
        // //数据初始完毕
        // this.init = true;
        // this.config = null;
    };
    GlobalConfig.parseKeys = function (obj, proto, key) {
        if (key == 0) {
            obj.__proto__ = proto;
        }
        else {
            for (var i in obj) {
                this.parseKeys(obj[i], proto, key - 1);
            }
        }
    };
    return GlobalConfig;
}());
__reflect(GlobalConfig.prototype, "GlobalConfig");
//# sourceMappingURL=GlobalConfig.js.map