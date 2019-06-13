class MainScene extends BaseEuiView{
	private recordButton:eui.Image
	private testButton:eui.Image;
	private teachButton:eui.Image;
	private listButton:eui.Image;
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
		this.testButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.listButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.teachButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this)
	}
	private onTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.recordButton:
				ViewManager.ins().open(RecordScene);
				break;
			case this.testButton:
				ViewManager.ins().open(TestScene);
				break;
			case this.listButton:
				ViewManager.ins().open(WarnWin,{tips:"此功能暂未开放，敬请期待～"})
				break;
			case this.teachButton:
				ViewManager.ins().open(TeachMainScene);
				break;
		}
		
		// ViewManager.ins().close(MainScene);
	}
	public close(...param: any[]): void {
		this.testButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.recordButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.listButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.teachButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this)
	}
}
ViewManager.ins().reg(MainScene, LayerManager.UI_Main);