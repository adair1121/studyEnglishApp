class WordLibLevelSelect extends BaseEuiView{
	private list:eui.List;
	private exitButton:eui.Image;
	private scroller:eui.Scroller;
	private arrayCollect:eui.ArrayCollection;
	private arrayCollect1:eui.ArrayCollection;
	private arrayCollect2:eui.ArrayCollection;
	private grade:number;
	private levelData:any = {};
	private tabbar:eui.TabBar;
	private viewstack:eui.ViewStack;
	private scroller1:eui.Scroller;
	private list1:eui.List;
	private sureBtn:eui.Group;

	private scroller2:eui.Scroller;
	private list2:eui.List;
	private sureBtn2:eui.Group;


	private levelCfgs = [];

	private curLib:eui.Label;
	private recordNum:eui.Label;
	private remainNum:eui.Label;
	private checkResult:eui.Label;
	private winGoldNum:eui.Label;
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
		this.arrayCollect2 = new eui.ArrayCollection();
		this.list.itemRenderer = WordLibSelectItem;
		this.levelData = {};
		this.scroller.viewport = this.list;
		this.openData = param[0].data;
		this.grade = param[0].grade;

		this.curLib.text = GameApp.ins().curLib;
		let allWordNum:number = this.openData.length;
		let recordNum:number = 0;
		let recordStr:string = egret.localStorage.getItem(this.grade+"_passNum".toString());
		if(recordStr){
			recordNum = parseInt(recordStr);
		}
		this.recordNum.text = recordNum.toString();
		this.remainNum.text = (allWordNum - recordNum).toString();
		let goldNum:number = 0;
		let goldStr:string = egret.localStorage.getItem("goldNum");
		if(goldStr){
			goldNum = parseInt(goldStr);
		}
		this.winGoldNum.text = goldNum.toString();
		this.checkResult.text = GameApp.ins().checkResultStr;
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

		//---检查功能
		this.list2.itemRenderer = WordRecoverItem;
		this.scroller2.viewport = this.list2;
		this.arrayCollect2.source = this.levelCfgs;
		this.list2.dataProvider = this.arrayCollect2;
		this.list2.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap1,this);
		this.sureBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);	
		//

		this.tabbar.addEventListener(egret.Event.CHANGE,this.onTabChange,this);
		MessageCenter.ins().addListener("passLevel",this.onLevelPass,this);
	}
	private onTabChange(evt:egret.Event):void{
		if(this.viewstack.selectedIndex == 3){
			let allWordNum:number = this.openData.length;
			let recordNum:number = 0;
			let recordStr:string = egret.localStorage.getItem(this.grade+"_passNum".toString());
			if(recordStr){
				recordNum = parseInt(recordStr);
			}
			this.recordNum.text = recordNum.toString();
			this.remainNum.text = (allWordNum - recordNum).toString();
			let goldNum:number = 0;
			let goldStr:string = egret.localStorage.getItem("goldNum");
			if(goldStr){
				goldNum = parseInt(goldStr);
			}
			this.winGoldNum.text = goldNum.toString();
			this.checkResult.text = GameApp.ins().checkResultStr;
		}
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
		this.arrayCollect2.source = this.levelCfgs;
		this.list2.dataProviderRefreshed();
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
	private onLevelPass():void{
		let levelData = this.levelData[this._level];
		if(!egret.localStorage.getItem(this.grade+"_"+this._level)){
			egret.localStorage.setItem(this.grade+"_"+this._level,"1");
			let gradeLevelPassCount:string = egret.localStorage.getItem(this.grade+"_passNum".toString());
			if(!gradeLevelPassCount){

				egret.localStorage.setItem(this.grade+"_passNum",levelData.length);
			}else{
				egret.localStorage.setItem(this.grade+"_passNum",(parseInt(gradeLevelPassCount)+levelData.length)+"");
			}

			let goldStr:string = egret.localStorage.getItem("goldNum");
			if(!goldStr){
				egret.localStorage.setItem("goldNum",(levelData.length*5).toString());
			}else{
				egret.localStorage.setItem("goldNum",(parseInt(goldStr)+levelData.length*5)+"");
			}
			
			// let item:WordLibSelectItem = this.list.getChildAt(evt.itemIndex) as WordLibSelectItem;
			// if(!!item){
			// 	item.refresh();
				this.refreshLevelCfgs();
			// }
			
		}
	}
	private _level:number;
	private onItemTap(evt:eui.ItemTapEvent):void{
		let level = evt.itemIndex + 1;
		this._level = level;
		let levelData = this.levelData[level];
		
		ViewManager.ins().open(RecordScene,{dataCfg:levelData,title:"第"+level+"关",route:"study"})
	}
	
	private onItemTap1(evt:eui.ItemTapEvent):void{
		let item:WordRecoverItem;
		if(this.viewstack.selectedIndex == 1){
			item = this.list1.getChildAt(evt.itemIndex) as WordRecoverItem;
		}else if(this.viewstack.selectedIndex == 2){
			item = this.list2.getChildAt(evt.itemIndex) as WordRecoverItem;
		}
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
				this.recoverStart("recover");
				break;
			case this.sureBtn2:
				this.recoverStart("check")
				break;
		}
	}
	/**
	 * 前往复习功能
	 */
	private recoverStart(route:string):void{
		let len:number ;
		if(route == "recover"){
			len = this.list1.$children.length;
		}else{
			len = this.list2.$children.length
		}
		let levelDatas:any[] = [];
		for(let i:number = 0;i<len;i++){
			let item:WordRecoverItem ;
			if(route == "recover"){
				item = this.list1.getChildAt(i) as WordRecoverItem;
			}else{
				item = this.list2.getChildAt(i) as WordRecoverItem;
			}
			if(!!item){
				if(item.select){
					levelDatas = levelDatas.concat(this.levelData[item.selectLev])
				}
			}
		}
		//进入选择单词界面
		ViewManager.ins().open(SingleWordSelect,{wordData:levelDatas,route:route})
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
		this.list2.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap1,this);
		this.sureBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.tabbar.removeEventListener(egret.Event.CHANGE,this.onTabChange,this);
	}
}
ViewManager.ins().reg(WordLibLevelSelect, LayerManager.UI_Main);