class WordRecoverItem extends BaseItemRender{
	private itemGroup:eui.Group;
	private label:eui.Label;
	private itembg:eui.Image;
	private checkBox:eui.CheckBox;
	private _recorded:boolean;
	private _level:number;
	public constructor() {
		super();
		this.skinName = "WordRecoverItemSkin";
	}
	protected dataChanged(): void {
		if(!!this.data){
			this.label.text = this.data.label;
			this._recorded = this.data.recorded
			if(this.data.recorded){
				this.itembg.source = "item_down_png";
			}else{
				this.itembg.source = "item_up_png";
			}
			if(this.data.level){
				this._level = this.data.level;
			}
		}
	}
	public get recorded():boolean{
		return this._recorded;
	}
	public set select(bool:boolean){
		this.checkBox.selected = bool;
	}
	public get select():boolean{
		return this.checkBox.selected;
	}
	public get selectLev():number{
		return this._level;
	}
	public getCheckStatus():boolean{
		return this.checkBox.selected;
	}
	public refresh():void{
		this.itembg.source = "item_down_png";
	}
	public distory():void{
	}
}