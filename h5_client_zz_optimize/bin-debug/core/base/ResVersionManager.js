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
var ResVersionManager = (function (_super) {
    __extends(ResVersionManager, _super);
    function ResVersionManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResVersionManager.ins = function () {
        return _super.ins.call(this);
    };
    ResVersionManager.prototype.loadConfig = function (complateFunc, complateFuncTarget) {
        // RES.getResByUrl(`${RES_RESOURCE}version.json?v=${LocationProperty.gameVersion}`, function(data){
        // 	if(data)
        // 	{
        // 		this.resVersionData = JSON.parse(data);
        // 		var vc: RES.VersionController = new RES.VersionController();          
        // 		vc.getVirtualUrl = function(url: string): string {
        // 			if(ResVersionManager.ins().resVersionData[url])
        // 			{
        // 				url += '?v='+ResVersionManager.ins().resVersionData[url];
        // 			}
        // 			else
        // 			{
        // 				debug.log("缺失版本号:", url);
        // 			}
        // 			return url;         
        // 		}        
        // 		RES.registerVersionController(vc);
        // 	}
        // 	complateFunc.call(complateFuncTarget);
        // }, this, RES.ResourceItem.TYPE_TEXT);
    };
    return ResVersionManager;
}(BaseClass));
__reflect(ResVersionManager.prototype, "ResVersionManager");
