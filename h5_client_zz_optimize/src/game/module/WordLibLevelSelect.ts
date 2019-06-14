class WordLibLevelSelect extends BaseEuiView{
	private list:eui.List;
	private exitButton:eui.Image;
	private scroller:eui.Scroller;
	private arrayCollect:eui.ArrayCollection;
	private grade:number;
	public constructor() {
		super();
		this.skinName = "WordLibLevelSelectSkin";
	}
	public open(...param: any[]): void {
		this.arrayCollect = new eui.ArrayCollection();
		this.list.itemRenderer = WordLibSelectItem;
		this.levelData = [];
		this.scroller.viewport = this.list;
		let data:LevelConfig[] = param[0].data;
		this.grade = param[0].grade;
		let itemData = [];
		let levelCfgs = [];
		for(let i:number = 0;i<data.length;i++){
			if(itemData.indexOf(data[i].level)==-1){
				itemData.push(data[i].level);
				levelCfgs.push({label:"第"+data[i].level+"关",recorded:false});
			}
		}
		this.dealLevelData(data);
		this.arrayCollect.source = levelCfgs;
		this.list.dataProvider = this.arrayCollect;
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
	private levelData:any = {};
	private dealLevelData(levelcgfs:LevelConfig[]):void{
		for(let i:number = 0;i<levelcgfs.length;i++){
			if(!this.levelData[levelcgfs[i].level]){
				this.levelData[levelcgfs[i].level] = [];
			}
			this.levelData[levelcgfs[i].level].push(levelcgfs[i])
		}
		console.log(this.levelData);
	}
	private onItemTap(evt:eui.ItemTapEvent):void{

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
		this.levelData = [];
		this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
}
ViewManager.ins().reg(WordLibLevelSelect, LayerManager.UI_Main);