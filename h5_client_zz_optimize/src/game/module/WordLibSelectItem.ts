class WordLibSelectItem extends BaseItemRender{
	private itemGroup:eui.Group;
	private label:eui.Label;
	private itembg:eui.Image;
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
			if(this.data.recorded){
				this.itembg.source = "item_down_png";
			}else{
				this.itembg.source = "item_up_png";
			}
		}
	}
	public refresh():void{
		this.itembg.source = "item_down_png";
	}
	public distory():void{
		this.removeTouchEvent(this.itemGroup,this.onClick);
	}
}