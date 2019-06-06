class RecordScene extends BaseEuiView{
	private exitButton:eui.Image;
	private clickReadpanel:ClickRead;
	private pageNum:eui.Label;

	public btn_left:eui.Image;
	private btn_right:eui.Image;
	public constructor() {
		super();
		this.skinName = "RecordSceneSkin"
	}
	public initUI(): void {
		super.initUI();
	}
	public open(...param: any[]): void {
		this.addTouchEvent(this.exitButton,this.onTouch,true);
		this.addTouchEvent(this.btn_left,this.onLeft,true);
		this.addTouchEvent(this.btn_right,this.onRight,true);
		let arr = [];
		for(let key in GlobalConfig.RecordConfig){
			arr.push(GlobalConfig.RecordConfig[key])
		}
		this.clickReadpanel.dataProvider(arr)

		this.pageNum.text = this.clickReadpanel.m_curPage+"/"+this.clickReadpanel.m_pageNum;
		this.refreshArrow();
	}
	private onLeft():void{
		this.clickReadpanel.refreshData(-1);
		this.refreshArrow();
	}
	private onRight():void{
		this.clickReadpanel.refreshData(1);
		this.refreshArrow();
	}
	private refreshArrow():void{
		if(this.clickReadpanel.m_curPage >= this.clickReadpanel.m_pageNum){
			this.btn_right.visible = false;
			this.btn_left.visible = true;
		}else if(this.clickReadpanel.m_curPage == 1){
			this.btn_left.visible = false;
			this.btn_right.visible = true;
		}else{
			this.btn_left.visible = this.btn_right.visible = true;
		}
		this.pageNum.text = this.clickReadpanel.m_curPage+"/"+this.clickReadpanel.m_pageNum;
	}
	private onTouch(evt:egret.TouchEvent):void{
		this.close();
		ViewManager.ins().close(RecordScene);
	}
	public close(...param: any[]): void {
		this.removeTouchEvent(this.btn_left,this.onLeft);
		this.removeTouchEvent(this.btn_right,this.onRight);
		this.removeTouchEvent(this.exitButton,this.onTouch);
	}
}
ViewManager.ins().reg(RecordScene, LayerManager.UI_Main);