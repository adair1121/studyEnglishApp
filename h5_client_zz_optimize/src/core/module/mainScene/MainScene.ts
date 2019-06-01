class MainScene extends BaseEuiView{
	private bg:eui.Image;
	public constructor() {
		super();
		this.skinName = "MainSceneSkin";
		// ResourceUtils.ins().loadUIGroup(UIGroup.LadderResultWin);
	}
	public initUI(): void {
		super.initUI();
		
	}
	public open(...param: any[]): void {
		this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
	private onTap(evt:egret.TouchEvent):void{
		ViewManager.ins().close(MainScene);
	}
	public close(...param: any[]): void {
		this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
}
ViewManager.ins().reg(MainScene, LayerManager.UI_Main);