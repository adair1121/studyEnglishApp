class TeachMainScene extends BaseEuiView{
	private recordBtn:eui.Image
	private yueduBtn:eui.Image;
	private bookBtn:eui.Image;
	private wordBookBtn:eui.Image;
	private exitButton:eui.Image;
	public constructor() {
		super();
		this.skinName = "TeachMainSceneSkin";
	}
	public initUI(): void {
		super.initUI();
	}
	public open(...param: any[]): void {
		this.recordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.yueduBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.bookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.wordBookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
	private onTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.recordBtn:
				//记单词教学
				ViewManager.ins().open(WordLibSelect);
				break;
			case this.yueduBtn:
				//阅读训练
				ViewManager.ins().open(ReadScene);
				break;
			case this.bookBtn:
				//课本点读背诵
				ViewManager.ins().open(WarnWin,{tips:"此功能暂未开放，敬请期待～"});
				break;
			case this.wordBookBtn:
				let wordIds:string = egret.localStorage.getItem("wordids");
				let wordData:any[] = [];
				if(wordIds){
					let wordidArr:string[] = wordIds.split("|");
					wordidArr.forEach(id=>{
						let itemConfig:any = JSON.parse(egret.localStorage.getItem(id.toString()))
						if(itemConfig){
							wordData.push(itemConfig)
						}
					})
					
				}else{
					egret.localStorage.setItem("wordids","");
				}
				//生词本
				ViewManager.ins().open(SingleWordSelect,{wordData:wordData,title:"我的生词本",route:"TeachMainScene"});
				break;
			case this.exitButton:
				this.close();
				ViewManager.ins().close(TeachMainScene)
				break;
		}
		
		// ViewManager.ins().close(MainScene);
	}
	public close(...param: any[]): void {
		this.recordBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.yueduBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.bookBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.wordBookBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
}
ViewManager.ins().reg(TeachMainScene, LayerManager.UI_Main);