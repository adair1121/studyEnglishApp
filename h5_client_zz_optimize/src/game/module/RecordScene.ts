class RecordScene extends BaseEuiView{
	private exitButton:eui.Image;
	private clickReadpanel:ClickRead;
	private pageNum:eui.Label;

	public btn_left:eui.Image;
	private btn_right:eui.Image;
	private title:eui.Label;
	public constructor() {
		super();
		this.skinName = "RecordSceneSkin"
	}
	private _route:string = "";
	public initUI(): void {
		super.initUI();
	}
	private wordNum:number = 0;
	public open(...param: any[]): void {
		this.addTouchEvent(this.exitButton,this.onTouch,true);
		this.addTouchEvent(this.btn_left,this.onLeft,true);
		this.addTouchEvent(this.btn_right,this.onRight,true);
		let dataConfig = param[0].dataCfg;
		if(param[0].title){
			this.title.text = param[0].title;
		}
		let arr = [];
		for(let key in dataConfig){
			arr.push(dataConfig[key])
		}
		this.wordNum = arr.length;
		this.clickReadpanel.dataProvider(arr)
		if(param[0].route){
			this._route = param[0].route;
		}
		this.pageNum.text = this.clickReadpanel.m_curPage+"/"+this.clickReadpanel.m_pageNum;
		this.refreshArrow();
	}
	private onLeft():void{
		if(this.clickReadpanel.m_curPage == 1){
			return;
		}
		this.clickReadpanel.refreshData(-1);
		this.refreshArrow();
	}
	private onRight():void{
		if(this.clickReadpanel.m_curPage >= this.clickReadpanel.m_pageNum){
			//弹窗奖励并退出
			if(this._route == "study"){
				ViewManager.ins().open(WarnWin,{tips:"恭喜您，顺利通关并获得了金币*"+(this.wordNum*5)});
				MessageCenter.ins().dispatch("passLevel");
				this.close();
				ViewManager.ins().close(RecordScene);
			}
			
			return;
		}
		this.clickReadpanel.refreshData(1);
		this.refreshArrow();
	}
	private refreshArrow():void{
		// if(this.clickReadpanel.m_curPage >= this.clickReadpanel.m_pageNum){
		// 	this.btn_right.visible = false;
		// 	this.btn_left.visible = true;
		// }else if(this.clickReadpanel.m_curPage == 1){
		// 	this.btn_left.visible = false;
		// 	this.btn_right.visible = true;
		// }else{
		// 	this.btn_left.visible = this.btn_right.visible = true;
		// }
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