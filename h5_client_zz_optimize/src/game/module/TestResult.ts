class TestResult extends BaseEuiView{
	private exitButton:eui.Image;
	private sureBtn:eui.Group;
	private desc:eui.Label;
	public constructor() {
		super();
		this.skinName = "TestResultSkin";
	}
	public initUI(): void {
		super.initUI();
		
	}
	public open(...param: any[]): void {
		this.addTouchEvent(this.exitButton,this.close,true);
		this.addTouchEvent(this.sureBtn,this.close,true);
		this.desc.text = TestResultDesc.resultStr(param[0].score);
	}
	public close(...param: any[]): void {
		this.removeTouchEvent(this.exitButton,this.close);
		this.removeTouchEvent(this.sureBtn,this.close);
		ViewManager.ins().close(TestResult);
	}
}
ViewManager.ins().reg(TestResult, LayerManager.UI_Main);