class SingleWordSelect extends BaseEuiView{
	private exitButton:eui.Image;
	private sureBtn:eui.Group;
	private list:eui.List;
	private scroller:eui.Scroller;
	private arrayCollect:eui.ArrayCollection;
	private recoverData:any[] = [];
	private wordData:any[] =[];
	private selectAll:eui.Group;
	private selectCheck:eui.CheckBox;
	private title:eui.Label;
	private titleLab:string = "";
	private route:string = "";
	private buttonLabel:eui.Label;
	private delBtn:eui.Group;
	public constructor() {
		super();
		this.skinName = "SingleWordSelectSkin";
	}
	public open(...param: any[]): void {
		this.delBtn.visible = false;
		this.recoverData = [];
		this.arrayCollect = new eui.ArrayCollection();
		this.wordData = param[0].wordData;
		if(param[0].route){
			this.route = param[0].route;
			if(this.route == "TeachMainScene"){
				this.buttonLabel.text = "重新识记";
				this.title.text = "我的生词本";
				this.titleLab = "重新识记";
				this.delBtn.visible = true;
			}
		}
		this.list.itemRenderer = SingleWordSelectItem;
		this.scroller.viewport = this.list;
		this.arrayCollect.source = this.wordData;
		this.list.dataProvider = this.arrayCollect;
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.selectAll.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.delBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
	private onTouchTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.exitButton:
				this.close();
				break;
			case this.sureBtn:
				let count:number = this.getSelectWordNum();
				if(count < 7){
					ViewManager.ins().open(WarnWin,{tips:"请至少选择7个单词~"})
					return;
				}else{
					if(!this.route){
						this.writeWordToLocal();
						//当前没有路由参数 默认为复习功能进入
						ViewManager.ins().open(WarnWin,{tips:"已为您添加到生词本~请继续努力",callBack:()=>{
							ViewManager.ins().open(RecordScene,{dataCfg:this.recoverData,title:"复习中"});
							this.close();
						},thisArg:this})
					}else if(this.route == "TeachMainScene"){
						//生词本进入
						ViewManager.ins().open(RecordScene,{dataCfg:this.recoverData,title:this.titleLab?this.titleLab:""});
						this.close();
					}
					
				}
				break;
			case this.selectAll:
				this.selectCheck.selected = !this.selectCheck.selected
				this.operAllSelect();
				break;
			case this.delBtn:
				let delNum:number = this.getSelectWordNum();
				if(delNum <= 0){
					ViewManager.ins().open(WarnWin,{tips:"请先选择要删除的生词"});
					return;
				}
				//删除内存中的生词
				let delId:number[] = [];
				for(let i:number = this.recoverData.length-1;i<=0;i--){
					let itemConfig:LevelConfig = this.recoverData[i];
					let word = egret.localStorage.getItem(itemConfig.id.toString());
					if(!!word){
						egret.localStorage.removeItem(itemConfig.id.toString());
					}
					delId.push(itemConfig.id);
				}
				this.recoverData = [];
				//删除生词本中数据 刷新页面
				let wordIdstr:string = egret.localStorage.getItem("wordids");
				let wordIdArr:string[] = wordIdstr.split("|");
				delId.forEach(id=>{
					for(let j:number = 0;j<this.wordData.length;j++){
						if(this.wordData[j].id == id){
							this.wordData.splice(j,1);
							break;
						}
					}
					for(let i:number = 0;i<wordIdArr.length;i++){
						if(wordIdArr[i] == id.toString()){
							wordIdArr.splice(i,1);
							break;
						}
					}
				})
				if(wordIdArr.length){
					egret.localStorage.setItem("wordids",wordIdArr.join("|"));
				}else{
					egret.localStorage.setItem("wordids","");
				}
				this.arrayCollect.source = this.wordData;
				this.list.dataProviderRefreshed();
				break;
		}
	}
	private writeWordToLocal():void{
		let wordIds:string = egret.localStorage.getItem("wordids");
		
		for(let i:number = 0;i<this.recoverData.length;i++){
			let config:LevelConfig = this.recoverData[i];
			let word = egret.localStorage.getItem(config.id.toString());
			if(!word){
				egret.localStorage.setItem(config.id.toString(),JSON.stringify(this.recoverData[i]));
				if(wordIds == ""){
					wordIds = config.id.toString()
				}else{
					wordIds += "|"+config.id;
				}
			}
		}
		egret.localStorage.setItem("wordids",wordIds);
	}
	private operAllSelect(){
		let boo = this.selectCheck.selected;
		let len:number = this.list.$children.length;
		for(let i:number = 0;i<len;i++){
			let item:SingleWordSelectItem = this.list.getChildAt(i) as SingleWordSelectItem;
			if(!!item){
				item.select =boo;
			}
		}
	}
	/**
	 * 获取选择复习的单词数量
	 */
	private getSelectWordNum():number{
		let len:number = this.list.$children.length;
		let count:number = 0;
		for(let i:number = 0;i<len;i++){
			let item:SingleWordSelectItem = this.list.getChildAt(i) as SingleWordSelectItem;
			if(!!item){
				if(item.select){
					count +=1;
					this.recoverData.push(this.wordData[i]);
				}
			}
		}
		return count;
	}
	public close(...param: any[]): void {
		this.recoverData = [];
		let len:number = this.list.$children.length;
		for(let i:number = 0;i<len;i++){
			let item:SingleWordSelectItem = this.list.getChildAt(i) as SingleWordSelectItem;
			if(!!item){
				item.distory();
			}
		}
		ViewManager.ins().close(SingleWordSelect);
		this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.selectAll.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.delBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
}
ViewManager.ins().reg(SingleWordSelect, LayerManager.UI_Main);