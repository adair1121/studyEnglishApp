/**
 * 彈出框（普通）
 */
class WarnWin extends BaseEuiView {

	private maskRect:eui.Rect;
	private tips:eui.Label;
	private sureBtn:eui.Group;
	public constructor() {
		super();
		this.skinName = "warnFrameSkin";
	}
	public open(...param: any[]): void {
		this.addTouchEvent(this.maskRect,this.close);
		this.addTouchEvent(this.sureBtn,this.close);
		this.tips.text = param[0].tips;
	}
	public close(...param: any[]): void {
		this.removeTouchEvent(this.maskRect,this.close);
		this.removeTouchEvent(this.sureBtn,this.close);
		ViewManager.ins().close(WarnWin);
	}
}

ViewManager.ins().reg(WarnWin, LayerManager.UI_Popup);
