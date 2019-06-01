var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LocationProperty = (function () {
    function LocationProperty() {
    }
    LocationProperty.init = function (pfCfg) {
        this.urlParam = {};
        debug.log("初始平台配置:", pfCfg);
        if (pfCfg) {
            var jsonCfg = JSON.parse(pfCfg);
            for (var key in jsonCfg) {
                this.urlParam[key] = jsonCfg[key];
            }
        }
        var str = decodeURIComponent(window.location.href);
        if (str) {
            var whIndex = str.indexOf("?");
            if (whIndex != -1) {
                var param = str.slice(whIndex + 1).split("&");
                var strArr = void 0;
                for (var i = 0; i < param.length; i++) {
                    strArr = param[i].split("=");
                    this.urlParam[strArr[0]] = strArr[1];
                }
            }
        }
        if (this.urlParam['renderMode'])
            egret.runEgret({ renderMode: this.urlParam['renderMode'] });
        if (this.urlParam['orientationMode'])
            egret.MainContext.instance.stage.orientation = this.urlParam['orientationMode'];
        if (this.urlParam['scaleMode'])
            egret.MainContext.instance.stage.scaleMode = this.urlParam['scaleMode'];
        if (this.urlParam['contentWidth'] && this.urlParam['contentHeight']) {
            egret.MainContext.instance.stage.setContentSize(this.urlParam['contentWidth'], this.urlParam['contentHeight']);
        }
        if (this.urlParam['frameRate'])
            egret.MainContext.instance.stage.frameRate = this.urlParam['frameRate'];
        if (this.urlParam['dirty'])
            egret.MainContext.instance.stage.dirtyRegionPolicy = this.urlParam['dirty'];
        debug.log("参数:", this.urlParam);
    };
    /**
     * 获取URL参数
     */
    LocationProperty.getUrlParamValue = function (key) {
        return this.urlParam[key];
    };
    /**
     * 设置参数
     */
    LocationProperty.setUrlParamValue = function (key, value) {
        this.urlParam[key] = value;
    };
    Object.defineProperty(LocationProperty, "resAdd", {
        /**
         * 资源服地址
         */
        get: function () {
            return this.urlParam['hosts'] || "";
        },
        set: function (str) {
            this.urlParam['hosts'] = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "openID", {
        /**
         * 用户OpenID
         */
        get: function () {
            return this.urlParam['user'];
        },
        set: function (str) {
            this.urlParam['user'] = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "srvid", {
        /**
         * 服务器ID
         */
        get: function () {
            return parseInt(this.urlParam['srvid']);
        },
        set: function (v) {
            this.urlParam['srvid'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "srvname", {
        /**
         * 服务器名称
         */
        get: function () {
            return this.urlParam['srvname'] || "";
        },
        set: function (v) {
            this.urlParam['srvname'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "serverIP", {
        /**
         * 服务器IP
         */
        get: function () {
            return this.urlParam['srvaddr'];
        },
        set: function (str) {
            this.urlParam['srvaddr'] = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "serverPort", {
        /**
         * 服务器端口
         */
        get: function () {
            return this.urlParam['srvport'];
        },
        set: function (v) {
            this.urlParam['srvport'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "nickName", {
        /**
         * 平台昵称
         */
        get: function () {
            return this.urlParam['nickName'] || "";
        },
        set: function (v) {
            this.urlParam['nickName'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "gameVersion", {
        /**
         * 客服端版本号
         */
        get: function () {
            return this.urlParam['version'] ? parseInt(this.urlParam['version']) : 1;
        },
        set: function (v) {
            this.urlParam['version'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "gameId", {
        /**
         * 游戏ID
         */
        get: function () {
            return this.urlParam['gameId'] ? parseInt(this.urlParam['gameId']) : 1;
        },
        set: function (v) {
            this.urlParam['gameId'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "appid", {
        get: function () {
            return this.urlParam['appid'] || this.gameId;
        },
        set: function (v) {
            this.urlParam['appid'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "pfid", {
        /**
         * 平台ID
         */
        get: function () {
            return this.urlParam['pfid'] || '1';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "pf", {
        /**
         * 平台
         */
        get: function () {
            return this.urlParam['pf'] || "Test";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "createAccountTime", {
        /**
         * 创建账号时间
         */
        get: function () {
            return this.urlParam['createaccounttime'] ? parseInt(this.urlParam['createaccounttime']) : 0;
        },
        set: function (v) {
            this.urlParam['createaccounttime'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "createActorTime", {
        /**
         * 角创建色时间
         */
        get: function () {
            return this.urlParam['createactortime'] ? parseInt(this.urlParam['createactortime']) : 0;
        },
        set: function (v) {
            this.urlParam['createactortime'] = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationProperty, "actorLoginTime", {
        /**
         * 角色登陆时间
         */
        get: function () {
            return parseInt(this.urlParam['actorlogintime']);
        },
        set: function (v) {
            this.urlParam['actorlogintime'] = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置加载进度 & 描述
     */
    LocationProperty.setLoadProgress = function (n, str, duration) {
        GameLoadingUI.GetInstance().setProgress(n, str, duration);
    };
    return LocationProperty;
}());
__reflect(LocationProperty.prototype, "LocationProperty");
//# sourceMappingURL=LocationProperty.js.map