class LocationProperty {

	private static urlParam: any;

	public static init(pfCfg?:any): void {
		this.urlParam = {};
		debug.log("初始平台配置:", pfCfg);
		if(pfCfg)
		{
			var jsonCfg = JSON.parse(pfCfg);
			for(var key in jsonCfg){
				this.urlParam[key] = jsonCfg[key];
			}
		}
		let str: string = decodeURIComponent(window.location.href);
		if (str) {
			let whIndex: number = str.indexOf("?");
			if (whIndex != -1) {
				let param: string[] = str.slice(whIndex + 1).split("&");
				let strArr: string[];
				for (let i: number = 0; i < param.length; i++) {
					strArr = param[i].split("=");
					this.urlParam[strArr[0]] = strArr[1];
				}
			}
		}

		if(this.urlParam['renderMode'])egret.runEgret({ renderMode: this.urlParam['renderMode'] });
		if(this.urlParam['orientationMode'])egret.MainContext.instance.stage.orientation = this.urlParam['orientationMode'];
		if(this.urlParam['scaleMode'])egret.MainContext.instance.stage.scaleMode = this.urlParam['scaleMode'];
		if(this.urlParam['contentWidth'] && this.urlParam['contentHeight'])
		{
			egret.MainContext.instance.stage.setContentSize(this.urlParam['contentWidth'], this.urlParam['contentHeight']);
		}
		if(this.urlParam['frameRate'])egret.MainContext.instance.stage.frameRate = this.urlParam['frameRate'];
		if(this.urlParam['dirty'])egret.MainContext.instance.stage.dirtyRegionPolicy = this.urlParam['dirty'];
		debug.log("参数:", this.urlParam);
	}

	/**
	 * 获取URL参数
	 */
	static getUrlParamValue(key): any
	{
		return this.urlParam[key];
	}

	/**
	 * 设置参数
	 */
	static setUrlParamValue(key: any, value: any)
	{
		this.urlParam[key] = value;
	}

	/**
	 * 资源服地址
	 */
	static get resAdd(): string {
		return this.urlParam['hosts'] || "";
	}

	static set resAdd(str: string) {
		this.urlParam['hosts'] = str;
	}

	/**
	 * 用户OpenID
	 */
	static get openID(): string {
		return this.urlParam['user'];
	}

	static set openID(str: string) {
		this.urlParam['user'] = str;
	}

	/**
	 * 服务器ID
	 */
	static get srvid(): number {
		return parseInt(this.urlParam['srvid']);
	}

	static set srvid(v: number) {
		this.urlParam['srvid'] = v;
	}

	/**
	 * 服务器名称
	 */
	static get srvname(): string {
		return this.urlParam['srvname'] || "";
	}

	static set srvname(v: string) {
		this.urlParam['srvname'] = v;
	}

	/**
	 * 服务器IP
	 */
	static get serverIP(): string {
		return this.urlParam['srvaddr'];
	}

	static set serverIP(str: string) {
		this.urlParam['srvaddr'] = str;
	}

	/**
	 * 服务器端口
	 */
	static get serverPort(): number {
		return this.urlParam['srvport'];
	}

	static set serverPort(v: number) {
		this.urlParam['srvport'] = v;
	}

	/**
	 * 平台昵称
	 */
	static get nickName(): string {
		return this.urlParam['nickName'] || "";
	}

	static set nickName(v: string) {
		this.urlParam['nickName'] = v;
	}

	/**
	 * 客服端版本号
	 */
	static get gameVersion(): number {
		return this.urlParam['version']?parseInt(this.urlParam['version']):1;
	}

	static set gameVersion(v: number) {
		this.urlParam['version'] = v;
	}

	/**
	 * 游戏ID
	 */
	static get gameId(): number {
		return this.urlParam['gameId']?parseInt(this.urlParam['gameId']):1;
	}

	static set gameId(v: number) {
		this.urlParam['gameId'] = v;
	}

	static get appid(): string {
		return this.urlParam['appid'] || this.gameId;
	}

	static set appid(v : string) {
		this.urlParam['appid'] = v;
	}

	/**
	 * 平台ID
	 */
	static get pfid(): string {
		return this.urlParam['pfid'] || '1';
	}

	/**
	 * 平台
	 */
	static get pf(): string {
		return this.urlParam['pf'] || "Test";
	}

	/**
	 * 创建账号时间
	 */
	static get createAccountTime(): number {
		return this.urlParam['createaccounttime']?parseInt(this.urlParam['createaccounttime']):0;
	}

	static set createAccountTime(v: number) {
		this.urlParam['createaccounttime'] = v;
	}

	/**
	 * 角创建色时间
	 */
	static get createActorTime(): number {
		return this.urlParam['createactortime']?parseInt(this.urlParam['createactortime']):0;
	}

	static set createActorTime(v: number) {
		this.urlParam['createactortime'] = v;
	}

	/**
	 * 角色登陆时间
	 */
	static get actorLoginTime(): number {
		return parseInt(this.urlParam['actorlogintime']);
	}

	static set actorLoginTime(v: number) {
		this.urlParam['actorlogintime'] = v;
	}

	/**
	 * 设置加载进度 & 描述
	 */
	static setLoadProgress(n: number, str: string, duration?: number): void {
		GameLoadingUI.GetInstance().setProgress(n, str, duration)
	}
}
