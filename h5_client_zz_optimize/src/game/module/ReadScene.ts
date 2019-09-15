class ReadScene extends BaseEuiView{

	private exitButton:eui.Image;
	private scroller:eui.Scroller
	private viewGroup:eui.Group;
	private title:eui.Label;
	private curLevel:number = 1;
	private readRes:string = "resource/res/read/";

	private txtInput:eui.TextInput;
	private correctLab:eui.Label;
	private submitBtn:eui.Group;
	private nextBtn:eui.Group;
	private curAnswer:string;
	private answerCfg:string[] = [
		"dbcd","bcb","cadb","dcb","aabc","aacb","acbd","dcd","dacc","cedga","dbca","dbac","caab","ddcb",
		"ceadg","aedfb","dcfba","cfgbd","dabfg"
	]
	public constructor() {
		super();
		this.skinName = "ReadSceneSkin"
	}
	public open(...param):void{
		this.addTouchEvent(this.exitButton,this.onTouchClose,true);
		this.curAnswer = this.answerCfg[this.curLevel - 1];
		RES.getResByUrl(`${this.readRes}${this.curLevel}/1.jpg`,(texture)=>{
			let img:eui.Image = new eui.Image(texture);
			this.viewGroup.addChild(img);

			let img2:eui.Image = new eui.Image();
			img2.source = `${this.readRes}${this.curLevel}/2.jpg`;
			this.viewGroup.addChild(img2);
			img2.y = img.y + img.height;
		},this,RES.ResourceItem.TYPE_IMAGE);
		this.addTouchEvent(this.nextBtn,this.onNext)
		this.addTouchEvent(this.submitBtn,this.onSubmit);
		this.nextBtn.visible = false;
		this.correctLab.visible = false;
	}
	private onNext():void{
		this.txtInput.text = "";
		this.correctLab.visible = false;
		this.nextBtn.visible = false;
		this.submitBtn.touchEnabled = true;
		this.curLevel += 1;
		this.txtInput.touchEnabled = true;
		this.curAnswer = this.answerCfg[this.curLevel - 1];
		this.refreshRead();
	}
	private refreshRead():void{
		this.scroller.viewport.scrollH = 0;
		this.scroller.viewport.scrollV = 0;
		this.viewGroup.removeChildren();
		RES.getResByUrl(`${this.readRes}${this.curLevel}/1.jpg`,(texture)=>{
			let img:eui.Image = new eui.Image(texture);
			this.viewGroup.addChild(img);

			let img2:eui.Image = new eui.Image();
			img2.source = `${this.readRes}${this.curLevel}/2.jpg`;
			this.viewGroup.addChild(img2);
			img2.y = img.y + img.height;
		},this,RES.ResourceItem.TYPE_IMAGE);
	}
	private onSubmit():void{
		// let len:number = StringUtils.getStringLength(this.txtInput.text);
		// if(len <= 0){
		// 	ViewManager.ins().open(WarnWin,{tips:"请先输入答案再提交"});
		// 	return;
		// }else if(len < this.curAnswer.length){
		// 	ViewManager.ins().open(WarnWin,{tips:"请先输入完整的答案再提交"});
		// 	return;
		// }else{
			this.txtInput.touchEnabled = false
			this.submitBtn.touchEnabled = false;
			let answer:string = this.txtInput.text.toLocaleLowerCase();
			this.correctLab.visible = true;
			this.nextBtn.visible = true;
			this.correctLab.textFlow = new egret.HtmlTextParser().parse(`正确答案为:<font color=0x00ff00>${this.curAnswer}</font>`);
			if(this.curLevel + 1 > this.answerCfg.length){
				this.nextBtn.visible = false;
			}
		// }

	}
	private onTouchClose(evt:egret.TouchEvent):void{
		let tips:string = "当前未完成，确定退出吗？"
		if(this.curLevel + 1 > this.answerCfg.length){
			tips = "确定退出吗？"
		}
		ViewManager.ins().open(WarnWin,{state:"select",callBack:this.selectCall,thisArg:this,tips:tips})
	}
	private selectCall(num:number):void{
		if(num == 1){
			//确定退出了
			ViewManager.ins().close(ReadScene);
		}else{
			//取消了
		}
	}
	public close():void{
		this.removeTouchEvent(this.exitButton,this.onTouchClose);
		this.removeTouchEvent(this.submitBtn,this.onSubmit);
		this.removeTouchEvent(this.nextBtn,this.onNext)
		// this.txtInput.removeEventListener(egret.TextEvent.FOCUS_IN,this.onFocusIn,this);
	}
}
ViewManager.ins().reg(ReadScene,LayerManager.UI_Main);