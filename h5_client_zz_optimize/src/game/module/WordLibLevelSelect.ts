class WordLibLevelSelect extends BaseEuiView{
	private list:eui.List;
	private exitButton:eui.Image;
	private scroller:eui.Scroller;
	private arrayCollect:eui.ArrayCollection;
	public constructor() {
		super();
		this.skinName = "WordLibLevelSelectSkin";
	}
	public open(...param: any[]): void {
		this.arrayCollect = new eui.ArrayCollection();
		this.list.itemRenderer = WordLibSelectItem;
		this.scroller.viewport = this.list;
		let data:LevelConfig[] = param[0].data;
		let itemData = [];
		let levelCfgs = [];
		for(let i:number = 0;i<data.length;i++){
			if(itemData.indexOf(data[i].level)==-1){
				itemData.push(data[i].level);
				levelCfgs.push({label:"第"+data[i].level+"关"});
			}
		}
		this.arrayCollect.source = levelCfgs;
		this.list.dataProvider = this.arrayCollect;
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
	private onTouchTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.exitButton:
				this.close();
				ViewManager.ins().close(WordLibLevelSelect);
				break;
		}
	}
	public close(...param: any[]): void {
		this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
}
ViewManager.ins().reg(WordLibLevelSelect, LayerManager.UI_Main);