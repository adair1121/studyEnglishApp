class TestScene extends BaseEuiView{
	private exitButton:eui.Image;
	private progress:eui.Label;
	private num:eui.Label;
	private word:eui.Label;
	private time:eui.Label;
	private list:eui.List;
	private submitBtn:eui.Group;
	public constructor() {
		super();
		this.skinName = "TestSceneSkin"
	}
	public initUI(): void {
		super.initUI();
		this.progress.text = "0%";
		this.num.text = "00";
		this.word.text = "";
		this.time.text = "60s";
	}
	public open(...param: any[]): void {
		this.addTouchEvent(this.exitButton,this.onTouch,true);
	}
	private onTouch(evt:egret.TouchEvent):void{
		this.close();
		ViewManager.ins().close(TestScene);
	}
	public close(...param: any[]): void {
		this.num = null;
		this.progress = null;
		this.exitButton = null;
		this.word = null;
		this.time = null;
		this.removeTouchEvent(this.exitButton,this.onTouch);
	}
}
ViewManager.ins().reg(TestScene, LayerManager.UI_Main);