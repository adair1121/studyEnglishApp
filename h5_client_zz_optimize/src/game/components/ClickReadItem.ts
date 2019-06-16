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
	}
	protected dataChanged(): void {
		if(!!this.data){
			this.enFont.text = this.data.font;
			this.trans.text = this.data.trans;
			if(this.data.audio){
				this.audio = this.data.audio;
			}
		}
	}
	public initialize(data:any):void{
		this.trans.visible = false;
		this.count = 0;
		this.refreshItem(data,"init");
	}
	public refreshItem(data:any,str:string = "refresh"):void{
		for(let key in data){
			if(this.enFont[key]){
				this.enFont[key] = data[key]
			}
		}
		if(str == "refresh"){
			this.count += 1;
			this.trans.visible = ((this.count%2) == 0);
		}
		if(this.audio){
			SoundManager.ins().stopEffect();
			SoundManager.ins().playEffect(`${MP3_DIR}${this.audio}`)
		}
		
	}
	public distory():void{
		this.removeTouchEvent(this.itemGroup,this.onClick);
		this.count = 0;
	}

}