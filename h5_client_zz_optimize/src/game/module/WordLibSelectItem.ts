class WordLibSelectItem extends BaseItemRender{
	private itemGroup:eui.Group;
	private label:eui.Label;
	public constructor() {
		super();
		this.skinName = "WordLibSelectItemSkin"
	}
	protected init(): void {
		this.addTouchEvent(this.itemGroup,this.onClick,true)
	}
	private onClick(evt:egret.TouchEvent):void{
	}
	protected dataChanged(): void {
		if(!!this.data){
			this.label.text = this.data.label;
		}
	}
	public distory():void{
		this.removeTouchEvent(this.itemGroup,this.onClick);
	}
}