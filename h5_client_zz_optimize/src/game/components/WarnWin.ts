/**
 * 彈出框（普通）
 */
class WarnWin extends BaseEuiView {

	private maskRect:eui.Rect;
	private tips:eui.Label;
	private sureBtn:eui.Group;
	private cancleBtn:eui.Group;
	private callBack:Function;
	private thisArg:any;
	public constructor() {
		super();
		this.skinName = "warnFrameSkin";
	}
	public open(...param: any[]): void {
		this.addTouchEvent(this.maskRect,this.close);
		this.addTouchEvent(this.sureBtn,this.onSure);
		this.addTouchEvent(this.cancleBtn,this.onCancle);
		this.tips.text = param[0].tips;
		if(param[0].callBack){
			this.callBack = param[0].callBack;
		}
		if(param[0].thisArg){
			this.thisArg = param[0].thisArg;
		}
		if(param[0].state){
			this.skin.currentState = param[0].state;
		}
		
	}
	private onSure():void{
		if(this.callBack && this.thisArg){
			this.callBack.call(this.thisArg,1);
		}
		this.close();
	}
	private onCancle():void{
		if(this.callBack && this.thisArg){
			this.callBack.call(this.thisArg,0);
		}
		this.close();
	}
	public close(...param: any[]): void {
		this.removeTouchEvent(this.maskRect,this.close);
		this.removeTouchEvent(this.sureBtn,this.onSure);
		this.removeTouchEvent(this.cancleBtn,this.close);
		ViewManager.ins().close(WarnWin);
	}
}

ViewManager.ins().reg(WarnWin, LayerManager.UI_Popup);
