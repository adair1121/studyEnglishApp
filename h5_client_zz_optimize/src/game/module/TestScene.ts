class TestScene extends BaseEuiView{
	private exitButton:eui.Image;
	private progress:eui.Label;
	private num:eui.Label;
	private word:eui.Label;
	private time:eui.Label;
	private list:eui.List;
	private submitBtn:eui.Group;
	private itemCollect:eui.ArrayCollection;
	private answerArr = [];

	// 当前选择题目索引值
	private curSelectIndex:number = -1;
	// 当前题目正确答案索引
	private answerIndex:number = -1;
	// 答题正确数量
	private correctNum:number = 0;
	// 当前进行数量
	private curProgressIndex:number = 0;
	private timer:egret.Timer;
	// 时间倒计时
	private timeNum:number = 60;
	//每道题正确得分
	private singleScore:number = 2;
	// 题目总数量
	private totalNum:number = 0;
	private clicked:boolean = true;
	public constructor() {
		super();
		this.skinName = "TestSceneSkin"
	}
	public open(...param: any[]): void {
		this.progress.text = "0%";
		this.num.text = "00";
		this.word.text = "";
		this.time.text = "60s";
		this.list.itemRenderer = TestSceneItem;
		this.itemCollect = new eui.ArrayCollection();
		this.answerArr = [];
		let testData = GlobalConfig.answer;
		for(let key in testData){
			this.answerArr.push(testData[key]);
		}
		this.totalNum = this.answerArr.length;
		this.timer = new egret.Timer(1000);
		this.addTouchEvent(this.exitButton,this.onTouch,true);
		this.addTouchEvent(this.submitBtn,this.onTouch,true);
		this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
		this.refreshPage(this.answerArr.shift());
	}
	// item点击
	private onItemTap(evt:eui.ItemTapEvent):void{
		if(!this.clicked){
			return;
		}
		this.initItem();
		this.curSelectIndex = evt.itemIndex;
		let item:TestSceneItem = this.list.getChildAt(evt.itemIndex) as TestSceneItem;
		item.refreshItem(true);
	}
	private initItem():void{
		this.initList(this.curSelectIndex);
		this.initList(this.answerIndex);
	}
	private initList(index):void{
		if(index != -1){
			let item:TestSceneItem = this.list.getChildAt(index) as TestSceneItem;
			if(!!item){
				item.refreshItem(false);
			}
		}
	}
	private onTimer(evt:egret.TimerEvent):void{
		this.timeNum -= 1;
		if(this.timeNum <= 0){
			this.timeNum = 0;
			this.showAnswer();
		}
		this.time.text = this.timeNum+"s";
	}
	private fontObj:any = {0:"A",1:"B",2:"C",3:"D",4:"F",5:"G",6:"H",7:"I",8:"J"}
	private refreshPage(itemData):void{
		this.initItem();
		this.curSelectIndex = -1;
		this.timeNum = 60;
		this.timer.start();
		this.progress.text = Number((this.curProgressIndex / this.totalNum).toFixed(2))*100+"%";
		this.num.text = itemData.id.toString();
		this.time.text = '60s';
		this.word.text = itemData.word;
		let arr:any[] = itemData.selection.split("|");
		let dataArr = [];
		arr.forEach((item,index)=>{
			dataArr.push({select:item,label:this.fontObj[index]});
		},this)
		this.itemCollect.source = dataArr;
		this.list.dataProvider = this.itemCollect;
		this.answerIndex = itemData.answer;
	}
	private onTouch(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.exitButton:
				this.close();
				ViewManager.ins().close(TestScene);
				break;
			case this.submitBtn:
				if(this.curSelectIndex == -1){
					ViewManager.ins().open(WarnWin,{tips:"不要调皮～认真的做题选答案"})
					return;
				}
				this.curProgressIndex +=1;
				this.showAnswer();
				break;
		}
		
	}
	private showAnswer():void{
		this.submitBtn.touchEnabled = false;
		this.list.touchEnabled = false;
		this.clicked = false;
		this.timer.stop();
		this.timer.reset();
		let curItem:TestSceneItem = this.list.getChildAt(this.curSelectIndex) as TestSceneItem;
		let rightItem:TestSceneItem = this.list.getChildAt(this.answerIndex) as TestSceneItem;
		if(this.curSelectIndex == this.answerIndex){
			this.correctNum += 1;
			if(!!curItem){
				curItem.refreshItem(true,1);
			}
			// console.log("回答正确")
		}else{
			if(!!curItem){
				curItem.refreshItem(true,2);
			}
			if(!!rightItem){
				rightItem.refreshItem(true,1);
			}
			// console.log("回答错误");
		}
		let timeout = egret.setTimeout(()=>{
			egret.clearTimeout(timeout);
			if(this.answerArr.length){
				this.list.touchEnabled = true;
				this.submitBtn.touchEnabled = true;
				this.clicked = true;
				this.refreshPage(this.answerArr.shift());
			}else{
				this.outputResult();
			}
		},this,3000)
	}
	// 显示测试结果页面
	private outputResult():void{
		//打开结算界面
		ViewManager.ins().open(TestResult,{score:this.correctNum*this.singleScore});
		ViewManager.ins().close(TestScene);
		this.close();
	}
	public close(...param: any[]): void {
		this.num = null;
		this.progress = null;
		this.exitButton = null;
		this.word = null;
		this.time = null;
		this.answerArr = null;
		this.itemCollect = null;
		this.curSelectIndex = null;
		this.answerIndex = null;
		this.curProgressIndex = null;
		this.correctNum = null;
		this.singleScore = null;
		this.totalNum = null;
		this.clicked = null;
		this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
		this.removeTouchEvent(this.exitButton,this.onTouch);
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
}
ViewManager.ins().reg(TestScene, LayerManager.UI_Main);