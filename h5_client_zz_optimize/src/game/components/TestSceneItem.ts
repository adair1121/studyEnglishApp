class TestSceneItem extends BaseItemRender{
	private select:eui.Label;
	private selectImg:eui.Image;
	private selectIndexLab:eui.Label;
	private selectLab:string;
	public constructor() {
		super();
		this.skinName = "TestSceneItemSkin"
	}
	protected dataChanged(): void {
		if(!!this.data){
			this.select.text = this.data.select;
			this.selectIndexLab.text = this.data.label;
			this.selectLab = this.data.label;
		}
	}
	public refreshItem(select:boolean,result:number = 0):void{
		if(result){
			this.selectIndexLab.visible = !select;
		}
		if(result == 1){
			//正确显示
			this.selectImg.source = "select_right_jpg"
			this.select.textColor = 0x23E023;
		}else if(result == 2){
			//错误
			this.selectImg.source = "select_wrong_jpg"
			this.select.textColor = 0xED0707;
		}else{
			this.select.bold = select?true:false;
			this.select.size = select?40:30;
			//正常状态
			this.selectImg.source = "select_normal_png"
			this.select.textColor = 0x000000;
		}
	}
}