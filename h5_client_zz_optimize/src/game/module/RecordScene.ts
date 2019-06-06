class RecordScene extends BaseEuiView{
	private exitButton:eui.Image;
	private dataRecord:eui.ArrayCollection;

	private clickReadpanel:ClickRead;
	private pageIndex:number = 8;
	private pageData:any = {};
	private totalPage:number = 0;
	public constructor() {
		super();
		this.skinName = "RecordSceneSkin"
	}
	public initUI(): void {
		super.initUI();
	}
	public open(...param: any[]): void {
		this.addTouchEvent(this.exitButton,this.onTouch,true);
		this.dataRecord = new eui.ArrayCollection();
		
		let arr = [];
		for(let key in GlobalConfig.RecordConfig){
			arr.push(GlobalConfig.RecordConfig[key])
		}
		this.dataRecord.source = arr;

		this.totalPage = (arr.length/this.pageIndex)>>0;

		let count = 0;
		for(let i:number = 0;i<arr.length;i++){
			count +=1;
		}
		this.clickReadpanel.dataProvider(this.dataRecord)
	}
	private onTouch(evt:egret.TouchEvent):void{
		this.close();
		ViewManager.ins().close(RecordScene);
	}
	public close(...param: any[]): void {
		this.removeTouchEvent(this.exitButton,this.onTouch);
	}
}
ViewManager.ins().reg(RecordScene, LayerManager.UI_Main);