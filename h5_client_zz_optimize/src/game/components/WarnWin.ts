/**
 * 彈出框（普通）
 */
class WarnWin extends BaseEuiView {

	private maskRect:eui.Rect;
	private tips:eui.Label;
	private sureBtn:eui.Group;
	private callBack:Function;
	private thisArg:any;
	public constructor() {
		super();
		this.skinName = "warnFrameSkin";
	}
	public open(...param: any[]): void {
		this.addTouchEvent(this.maskRect,this.close);
		this.addTouchEvent(this.sureBtn,this.onSure);
		this.tips.text = param[0].tips;
		if(param[0].callBack){
			this.callBack = param[0].callBack;
		}
		if(param[0].thisArg){
			this.thisArg = param[0].thisArg;
		}
	}
	private onSure():void{
		if(this.callBack && this.thisArg){
			this.callBack.call(this.thisArg);
		}
		this.close();
	}
	public close(...param: any[]): void {
		this.removeTouchEvent(this.maskRect,this.close);
		this.removeTouchEvent(this.sureBtn,this.onSure);
		ViewManager.ins().close(WarnWin);
	}
}

ViewManager.ins().reg(WarnWin, LayerManager.UI_Popup);
