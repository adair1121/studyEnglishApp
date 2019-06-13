class WordLibSelect extends BaseEuiView{
	private list:eui.List;
	private words = [];
	private arrcollect:eui.ArrayCollection;
	private exitButton:eui.Image;
	public constructor() {
		super();
		this.skinName = "WordLibSelectSkin";
	}
	public open(...param: any[]): void {
		this.words = ["小学词汇","初中词汇","高中初级词汇","高中中级词汇","高中高级词汇"];
		this.arrcollect = new eui.ArrayCollection();
		this.list.itemRenderer = WordLibSelectItem;
		let data = GlobalConfig.LevelConfig;
		
		this.dealLevelData();

		let itemDatas = [];
		this.words.forEach(item=>{
			itemDatas.push({label:item})
		})
		this.arrcollect.source = itemDatas;
		this.list.dataProvider = this.arrcollect;
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
	private onItemTap(evt:eui.ItemTapEvent):void{
		let grade = evt.itemIndex + 1;
		if(this.dataObj[grade]){
			ViewManager.ins().open(WordLibLevelSelect,{data:this.dataObj[grade]});
		}
	}
	private dataObj = {};
	private dealLevelData():void{
		let data = GlobalConfig.LevelConfig;
		for(let key in data){
			let itemConfig:LevelConfig = data[key];
			if(!this.dataObj[itemConfig.grade]){
				this.dataObj[itemConfig.grade] = [];
			}
			this.dataObj[itemConfig.grade].push(itemConfig);
		}
	}
	private onTouchTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.exitButton:
				this.close();
				ViewManager.ins().close(WordLibSelect);
				break;
		}
	}
	public close(...param: any[]): void {
		this.words = [];
		this.dataObj = {};
		let len:number = this.list.$children.length;
		for(let i:number = 0;i<len;i++){
			let item:WordLibSelectItem = this.list.getChildAt(i) as WordLibSelectItem;
			if(!!item){
				item.distory();
			}
		}
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
		this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
}
ViewManager.ins().reg(WordLibSelect, LayerManager.UI_Main);