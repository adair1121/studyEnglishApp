class MainScene extends BaseEuiView{
	private recordButton:eui.Button
	public constructor() {
		super();
		this.skinName = "MainSceneSkin";
		// ResourceUtils.ins().loadUIGroup(UIGroup.LadderResultWin);
	}
	public initUI(): void {
		super.initUI();
	}
	public open(...param: any[]): void {
		this.recordButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
	private onTap(evt:egret.TouchEvent):void{
		ViewManager.ins().open(RecordScene);
		// ViewManager.ins().close(MainScene);
	}
	public close(...param: any[]): void {
		this.recordButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
}
ViewManager.ins().reg(MainScene, LayerManager.UI_Main);