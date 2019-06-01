/**
 * @author
 */
class GameApp extends BaseClass {

	public preload_load_count:number = 0;

	public constructor() {
		super();
	}

	static ins():GameApp{
		return super.ins() as GameApp;
	}

	public load() {
		ResourceUtils.ins().loadGroup("preload", this.complete, this.progress, this);
	}

	/**
	 * 资源组加载完成
	 */
	private complete(): void {

		//移到GameSystem后的原因是用来检查GameSystem中的类初始化函数中是否有初始化配置，否则会报错提醒
		GlobalConfig.parserData();
		
		//音乐音效处理

		LocationProperty.setLoadProgress(100,"");

		eui.Label.default_fontFamily = "微软雅黑";
		
		SceneManager.ins().runScene(StartGameScene);
	}

	/**
	 * 资源组加载进度
	 */
	private progress(itemsLoaded: number, itemsTotal: number): void {
		LocationProperty.setLoadProgress(50 + (itemsLoaded / itemsTotal * 40),"", 0);
	}

	public postPerLoadProgress(itemsLoaded: number, itemsTotal: number): number[] {
		return [itemsLoaded, itemsTotal];
	}

	public postLoginInit(): void {
	}

	public postZeroInit():void {
	}

}

MessageCenter.compile(GameApp);