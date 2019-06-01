class ResVersionManager extends BaseClass {
	public resVersionData:any;

	public static ins(): ResVersionManager {
		return super.ins() as ResVersionManager;
	}

	public loadConfig(complateFunc: Function, complateFuncTarget: any): void {
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
	}
}