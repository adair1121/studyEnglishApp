class Main extends eui.UILayer {

	public constructor() {
		super();
	}
	protected childrenCreated():void{
		StageUtils.init();
		this.init();
	}
	private init(pfCfg?:any):void {
		//注入自定义的素材解析器
		this.stage.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
		this.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

		RES.setMaxLoadingThread(4);
		
		if (DeviceUtils.IsPC) {
			// StageUtils.ins().setScaleMode(egret.StageScaleMode.SHOW_ALL);
			StageUtils.ins().getStage().orientation = egret.OrientationMode.AUTO;
		}else{
			if (navigator.userAgent.indexOf("iPad") != -1) {
				StageUtils.ins().getStage().orientation = egret.OrientationMode.AUTO;
			}
		}

		//设置跨域访问资源
		egret.ImageLoader.crossOrigin = "anonymous";

		this.loadResVersionComplete();

	}
	private loadResVersionComplete(): void {
		if(window["removeGif"])window["removeGif"]();
		GameLoadingUI.GetInstance().show(this);
		LocationProperty.setLoadProgress(10, "");
		ResourceUtils.ins().addConfig(`${RES_RESOURCE}default.res.json`, `${RES_RESOURCE}`);
		ResourceUtils.ins().loadConfig(this.onConfigComplete, this);
	}

	/**
	 * 配置文件加载完成,开始预加载preload资源组。
	 */
	private onConfigComplete(): void {
		LocationProperty.setLoadProgress(20, "");
		let theme = new eui.Theme(`${RES_RESOURCE}default.thm.json`, this.stage);
		theme.addEventListener(eui.UIEvent.COMPLETE, this.parserConfig, this);
	}

	/**
	 * 解析配置数据
	 */
	private parserConfig()
	{
		LocationProperty.setLoadProgress(50, "", 3000);
		RES.getResByUrl(`${CFG_DIR}config.zip`, function(data){
			JSZip.loadAsync(data).then((zipdata) => {
				return zipdata.file('config.json').async('text');
			}).then(text => {
				GlobalConfig.setData(JSON.parse(text));
				GameApp.ins().load();
			})
		},this, RES.ResourceItem.TYPE_BIN);
	}
}


