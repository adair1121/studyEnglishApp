class BaseItemRender extends eui.ItemRenderer {
	public constructor() {
		super();
	}
	public addTouchEvent(obj: any, func: Function,isStartEffect:boolean = true) {
		if(isStartEffect){
			obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBeginTouch,this);
			obj.addEventListener(egret.TouchEvent.TOUCH_END,this.onEndTouch,this);
			obj.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onEndTouch,this);
			obj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onEndTouch,this);
		}
	}
	private onBeginTouch(evt:egret.TouchEvent):void{
		if(evt.target){
			this.changeFilter(evt.target);
		}
	}
	private onEndTouch(evt:egret.TouchEvent):void{
		if(evt.target && evt.target.filters){
			evt.target.filters = [];
		}
	}
	private changeFilter(obj:egret.DisplayObjectContainer):void{
		var colorMatrix = [
			0.3,0.6,0,0,0,
			0.3,0.6,0,0,0,
			0.3,0.6,0,0,0,
			0,0,0,1,0
		];
		var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
		obj.filters = [colorFlilter];
	}
	public removeTouchEvent(obj: any, func: Function) {
		if (obj) {
			if(obj.hasEventListener("touchBegin")){
				obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBeginTouch,this);
			}
			if(obj.hasEventListener("touchEnd")){
				obj.removeEventListener(egret.TouchEvent.TOUCH_END,this.onEndTouch,this);
			}
			if(obj.hasEventListener("touchCancel")){
				obj.removeEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onEndTouch,this);
			}
			if(obj.hasEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE)){
				obj.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onEndTouch,this);
			}
		}
	}
}