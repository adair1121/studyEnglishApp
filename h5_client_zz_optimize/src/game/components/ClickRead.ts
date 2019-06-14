class ClickRead extends eui.Component{
	private list:eui.List;
	private selectIndex = -1;
	private pageIndex:number = 1;
	private pageData:any = {};
	private totalPage:number = 0;

	private singleItemHeight = 100;

	private dataRecord:eui.ArrayCollection;
	public constructor() {
		super();
		this.skinName = "ClickReadSkin";
	}
	protected childrenCreated():void{
		this.list.itemRenderer = ClickReadItem;
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}	
	public dataProvider(data):void{
		this.splitPage(data);
		this.dataRecord = new eui.ArrayCollection();
		this.dataRecord.source = this.pageData[1]
		this.list.dataProvider = this.dataRecord;
	}
	/**
	 * 
	 */
	public refreshData(oper:number):void{
		this.pageIndex += oper;
		if(this.pageIndex >= this.totalPage){
			this.pageIndex = this.totalPage;
		}
		if(this.pageIndex <= 1){
			this.pageIndex = 1;
		}
		this.dataRecord.source = this.pageData[this.pageIndex];
		this.list.dataProviderRefreshed();
		this.selectIndex = -1;
	}
	private splitPage(arr):void{
		let count = 0;
		let hpercent = window.innerHeight/860;
		let relactIndex = Math.ceil(8*hpercent);
		if(hpercent > 1){
			relactIndex = 8;
		}
		this.totalPage = Math.ceil(arr.length/relactIndex);
		for(let i:number = 0;i<arr.length;i++){
			count +=1;
			if(count <= relactIndex){
				let curPageIndex = i==0?1:Math.ceil((i+1)/relactIndex);
				if(!this.pageData[curPageIndex]){
					this.pageData[curPageIndex] = [];
				}
				this.pageData[curPageIndex].push(arr[i]);
				if(!(count % relactIndex)){
					count = 0;
				}
			}
		}
	}
	public get m_pageNum():number{
		return this.totalPage;
	}
	public get m_curPage():number{
		return this.pageIndex;
	}
	private onItemTap(evt:eui.ItemTapEvent):void{
		let item:ClickReadItem = this.list.getChildAt(evt.itemIndex) as ClickReadItem;
		if(this.selectIndex != -1 && this.selectIndex != evt.itemIndex){
			let clickItem:ClickReadItem = this.list.getChildAt(this.selectIndex) as ClickReadItem;
			clickItem.initialize({bold:false,size:30})
		}
		this.selectIndex = evt.itemIndex;
		item.refreshItem({bold:true,size:40});
	}
	public distory():void{
		this.selectIndex = -1;
		let itemLen = this.list.$children.length;
		this.pageData = null;
		this.pageIndex = null;
		this.totalPage = null;
		this.singleItemHeight = null;
		for(let i:number = 0;i<itemLen;i++){
			let item:ClickReadItem = this.list.getChildAt(i) as ClickReadItem;
			item.distory()
		}
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
}