class ClickRead extends eui.Component{
	private list:eui.List;
	private selectIndex = -1;
	public constructor() {
		super();
		this.skinName = "ClickReadSkin";
	}
	protected childrenCreated():void{
		this.list.itemRenderer = ClickReadItem;
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}	
	public dataProvider(data):void{
		this.list.dataProvider = data;
	}
	private onItemTap(evt:eui.ItemTapEvent):void{
		let item:ClickReadItem = evt.item;
		if(this.selectIndex == -1){
			this.selectIndex = evt.itemIndex;
		}
		if(this.selectIndex != evt.itemIndex){
			let clickItem:ClickReadItem = this.list.getChildAt(this.selectIndex) as ClickReadItem;
			clickItem.refreshItem({bold:false,size:30})
			this.selectIndex = evt.itemIndex;
			item.refreshItem({bold:true,size:40});
		}
	}
	public distory():void{
		this.selectIndex = -1;
		let itemLen = this.list.$children.length;
		for(let i:number = 0;i<itemLen;i++){
			let item:ClickReadItem = this.list.getChildAt(i) as ClickReadItem;
			item.distory()
		}
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
}