class ClickReadItem extends BaseItemRender{

	private itemGroup:eui.Group;
	private enFont:eui.Label;
	private trans:eui.Label;
	private audio:string = "";
	private count:number = 0;
	public constructor() {
		super();
		this.skinName = "ClickReadItemSkin";
		this.init();
	}
	protected init(): void {
		this.trans.visible = false;
		this.addTouchEvent(this.itemGroup,this.onClick,true)
	}
	private onClick(evt:egret.TouchEvent):void{
		this.count += 1;
		this.trans.visible = ((this.count%2) == 0);

	}
	protected dataChanged(): void {
		if(!!this.data){
			this.enFont.text = this.data.font;
			this.trans.text = this.data.trans;
			this.audio = this.data.audio;
		}
	}
	public refreshItem(data:any):void{
		for(let key in data){
			if(this.enFont[key]){
				this.enFont[key] = data[key]
			}
		}
	}
	public distory():void{
		this.removeTouchEvent(this.itemGroup,this.onClick);
		this.count = 0;
	}

}