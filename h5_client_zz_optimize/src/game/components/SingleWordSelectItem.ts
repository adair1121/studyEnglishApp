class SingleWordSelectItem extends BaseItemRender{
	private font:eui.Label;
	private checkbox:eui.CheckBox;
	private count:number = -1;
	private trans:string = "";
	private audio:string = "";
	private fontLab:string = "";
	private rect:eui.Rect;
	private wrongImg:eui.Image;
	public constructor() {
		super();
		this.skinName = "SingleWordSelectItemSkin"
	}
	protected childrenCreated():void{
		this.wrongImg.touchEnabled = false;
		this.checkbox.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.font.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this)
	}
	private selectBoo = false;
	private wrongBoo = false;
	private onTouchTap(evt:egret.TouchEvent):void{
		switch(evt.target){
			case this.checkbox:
				if(GameApp.ins().curRoute != "check"){
					this.selectBoo = !this.selectBoo;
					this.checkbox.selected = this.selectBoo;
				}else{
					this.rect.visible = true;
					this.checkBoo = true;
					this.wrongBoo = !this.wrongBoo;
					this.wrongImg.visible = this.wrongBoo;
				}
				break;
			case this.font:
				this.initialize();
				break;
		}
		
	}
	public get select():boolean{
		return this.selectBoo;
	}
	public set select(value:boolean){
		this.selectBoo = value;
		this.checkbox.selected = value;
	}
	public get isWrong():boolean{
		return this.wrongBoo;
	}
	public get isCheck():boolean{
		return this.checkBoo;
	}
	protected dataChanged(): void {
		if(!!this.data){
			this.font.text = this.data.font;
			this.fontLab = this.data.font;
			this.trans = this.data.trans;
			if(this.data.audio){
				this.audio = this.data.audio;
			}else{
				this.audio = this.data.font+".mp3"
			}
		}
	}
	private checkBoo:boolean = false;
	private initialize():void{
		if(GameApp.ins().curRoute == "check"){
			this.rect.visible = true;
			this.checkBoo = true;
		}
		this.count +=1;
		this.font.text = this.count %2 == 0?this.trans:this.fontLab;
		if(this.audio){
			SoundManager.ins().stopEffect();
			SoundManager.ins().playEffect(`${MP3_DIR}${this.audio}`)
		}
	}
	public distory():void{
		this.checkbox.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.font.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this)
	}
}