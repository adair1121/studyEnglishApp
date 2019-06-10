class TestSceneItem extends BaseItemRender{
	private select:eui.Label;
	public constructor() {
		super();
		this.skinName = "TestSceneItemSkin"
	}
	protected dataChanged(): void {
		if(!!this.data){
			this.select.text = this.data.select;
		}
	}
	public refreshItem(data:any):void{
		
	}
}