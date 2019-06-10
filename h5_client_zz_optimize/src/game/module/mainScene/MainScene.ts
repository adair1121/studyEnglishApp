class MainScene extends BaseEuiView{
	// private recordButton:eui.Image//暂时去掉
	private testButton:eui.Image;
	public constructor() {
		super();
		this.skinName = "MainSceneSkin";
		// ResourceUtils.ins().loadUIGroup(UIGroup.LadderResultWin);
	}
	public initUI(): void {
		super.initUI();
	}
	public open(...param: any[]): void {
		// this.recordButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.testButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
	private onTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			// case this.recordButton:
			// 	ViewManager.ins().open(RecordScene);
			// 	break;
			case this.testButton:
				ViewManager.ins().open(TestScene);
				break;
		}
		
		// ViewManager.ins().close(MainScene);
	}
	public close(...param: any[]): void {
		this.testButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		// this.recordButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
}
ViewManager.ins().reg(MainScene, LayerManager.UI_Main);