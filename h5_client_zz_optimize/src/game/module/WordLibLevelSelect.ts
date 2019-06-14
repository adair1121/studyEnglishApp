class WordLibLevelSelect extends BaseEuiView{
	private list:eui.List;
	private exitButton:eui.Image;
	private scroller:eui.Scroller;
	private arrayCollect:eui.ArrayCollection;
	private grade:number;
	private levelData:any = {};
	public constructor() {
		super();
		this.skinName = "WordLibLevelSelectSkin";
	}
	public open(...param: any[]): void {
		this.arrayCollect = new eui.ArrayCollection();
		this.list.itemRenderer = WordLibSelectItem;
		this.levelData = {};
		this.scroller.viewport = this.list;
		let data:LevelConfig[] = param[0].data;
		this.grade = param[0].grade;
		let itemData = [];
		let levelCfgs = [];
		for(let i:number = 0;i<data.length;i++){
			if(itemData.indexOf(data[i].level)==-1){
				itemData.push(data[i].level);
				let recordStr:string = egret.localStorage.getItem(data[i].grade+"_"+data[i].level);
				let recorded = recordStr?true:false;
				levelCfgs.push({label:"第"+data[i].level+"关",recorded:recorded});
			}
		}
		this.dealLevelData(data);
		this.arrayCollect.source = levelCfgs;
		this.list.dataProvider = this.arrayCollect;
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
	
	private dealLevelData(levelcgfs:LevelConfig[]):void{
		for(let i:number = 0;i<levelcgfs.length;i++){
			let level = levelcgfs[i].level;
			if(!this.levelData[level]){
				this.levelData[level] = [];
			}
			this.levelData[level].push(levelcgfs[i])
		}
	}
	private onItemTap(evt:eui.ItemTapEvent):void{
		let level = evt.itemIndex + 1;
		let levelData = this.levelData[level];
		if(!egret.localStorage.getItem(this.grade+"_"+level)){
			egret.localStorage.setItem(this.grade+"_"+level,"1");
			let item:WordLibSelectItem = this.list.getChildAt(evt.itemIndex) as WordLibSelectItem;
			if(!!item){
				item.refresh();
			}
		}
		ViewManager.ins().open(RecordScene,{dataCfg:levelData,title:"第"+level+"关"})
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
		this.levelData = {};
		this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
}
ViewManager.ins().reg(WordLibLevelSelect, LayerManager.UI_Main);