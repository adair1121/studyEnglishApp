class WordLibLevelSelect extends BaseEuiView{
	private list:eui.List;
	private exitButton:eui.Image;
	private scroller:eui.Scroller;
	private arrayCollect:eui.ArrayCollection;
	private arrayCollect1:eui.ArrayCollection;
	private grade:number;
	private levelData:any = {};
	private tabbar:eui.TabBar;
	private viewstack:eui.ViewStack;
	private scroller1:eui.Scroller;
	private list1:eui.List;
	private sureBtn:eui.Group;

	private levelCfgs = [];
	public constructor() {
		super();
		this.skinName = "WordLibLevelSelectSkin";
	}
	private openData:LevelConfig[] = [];
	public open(...param: any[]): void {
		this.viewstack.selectedIndex = 0;
		this.tabbar.dataProvider = this.viewstack;
		this.tabbar.itemRendererSkinName = MyNavButton;
		this.arrayCollect = new eui.ArrayCollection();
		this.arrayCollect1 = new eui.ArrayCollection();
		this.list.itemRenderer = WordLibSelectItem;
		this.levelData = {};
		this.scroller.viewport = this.list;
		this.openData = param[0].data;
		this.grade = param[0].grade;
		
		this.refreshLevelCfgs();
		this.dealLevelData();
		this.arrayCollect.source = this.levelCfgs;
		this.list.dataProvider = this.arrayCollect;
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
		//---复习功能
		this.list1.itemRenderer = WordRecoverItem;
		this.scroller1.viewport = this.list1;
		this.arrayCollect1.source = this.levelCfgs;
		this.list1.dataProvider = this.arrayCollect1;
		this.list1.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap1,this)
		this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		//-------------------------------
	}
	//刷新关卡配置
	private refreshLevelCfgs():void{
		let itemData = [];
		this.levelCfgs = [];
		let data = this.openData
		for(let i:number = 0;i<data.length;i++){
			if(itemData.indexOf(data[i].level)==-1){
				itemData.push(data[i].level);
				let recordStr:string = egret.localStorage.getItem(data[i].grade+"_"+data[i].level);
				let recorded = recordStr?true:false;
				this.levelCfgs.push({label:"第"+data[i].level+"关",recorded:recorded,level:data[i].level});
			}
		}
		this.arrayCollect.source = this.levelCfgs;
		this.list.dataProviderRefreshed();
		this.arrayCollect1.source = this.levelCfgs;
		this.list1.dataProviderRefreshed();
	}
	private dealLevelData():void{
		let levelcgfs:LevelConfig[] = this.openData
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
			// let item:WordLibSelectItem = this.list.getChildAt(evt.itemIndex) as WordLibSelectItem;
			// if(!!item){
			// 	item.refresh();
				this.refreshLevelCfgs();
			// }
			
		}
		ViewManager.ins().open(RecordScene,{dataCfg:levelData,title:"第"+level+"关"})
	}
	private onItemTap1(evt:eui.ItemTapEvent):void{
		let item:WordRecoverItem = this.list1.getChildAt(evt.itemIndex) as WordRecoverItem;
		if(!!item){
			if(item.recorded){
				item.select = !item.select;
			}else{
				ViewManager.ins().open(WarnWin,{tips:"请选择已学习过的关卡~"});
				return;
			}
		}
	}
	private onTouchTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.exitButton:
				this.close();
				ViewManager.ins().close(WordLibLevelSelect);
				break;
			case this.sureBtn:
				this.recoverStart();
				break;
		}
	}
	/**
	 * 前往复习功能
	 */
	private recoverStart():void{
		let len:number = this.list1.$children.length;
		let levelDatas:any[] = [];
		for(let i:number = 0;i<len;i++){
			let item:WordRecoverItem = this.list1.getChildAt(i) as WordRecoverItem;
			if(!!item){
				if(item.select){
					levelDatas = levelDatas.concat(this.levelData[item.selectLev])
				}
			}
		}
		//进入选择单词界面
		ViewManager.ins().open(SingleWordSelect,{wordData:levelDatas})
		// ViewManager.ins().open(RecordScene,{dataCfg:levelDatas,title:"正在复习中~请继续努力哦"})
		// this.close();
		// ViewManager.ins().close(WordLibLevelSelect);
	}
	public close(...param: any[]): void {
		this.levelData = {};
		this.levelCfgs= [];
		this.openData = [];
		this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
		this.list1.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap1,this)
		this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
}
ViewManager.ins().reg(WordLibLevelSelect, LayerManager.UI_Main);