var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var WordLibLevelSelect = (function (_super) {
    __extends(WordLibLevelSelect, _super);
    function WordLibLevelSelect() {
        var _this = _super.call(this) || this;
        _this.levelData = {};
        _this.levelCfgs = [];
        _this.openData = [];
        _this.skinName = "WordLibLevelSelectSkin";
        return _this;
    }
    WordLibLevelSelect.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.viewstack.selectedIndex = 0;
        this.tabbar.dataProvider = this.viewstack;
        this.tabbar.itemRendererSkinName = MyNavButton;
        this.arrayCollect = new eui.ArrayCollection();
        this.arrayCollect1 = new eui.ArrayCollection();
        this.list.itemRenderer = WordLibSelectItem;
        this.levelData = {};
        this.scroller.viewport = this.list;
        this.openData = param[0].data;
        this.grade = param[0].grade;
        this.refreshLevelCfgs();
        this.dealLevelData();
        this.arrayCollect.source = this.levelCfgs;
        this.list.dataProvider = this.arrayCollect;
        this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
        //---复习功能
        this.list1.itemRenderer = WordRecoverItem;
        this.scroller1.viewport = this.list1;
        this.arrayCollect1.source = this.levelCfgs;
        this.list1.dataProvider = this.arrayCollect1;
        this.list1.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap1, this);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        //-------------------------------
    };
    //刷新关卡配置
    WordLibLevelSelect.prototype.refreshLevelCfgs = function () {
        var itemData = [];
        this.levelCfgs = [];
        var data = this.openData;
        for (var i = 0; i < data.length; i++) {
            if (itemData.indexOf(data[i].level) == -1) {
                itemData.push(data[i].level);
                var recordStr = egret.localStorage.getItem(data[i].grade + "_" + data[i].level);
                var recorded = recordStr ? true : false;
                this.levelCfgs.push({ label: "第" + data[i].level + "关", recorded: recorded, level: data[i].level });
            }
        }
        this.arrayCollect.source = this.levelCfgs;
        this.list.dataProviderRefreshed();
        this.arrayCollect1.source = this.levelCfgs;
        this.list1.dataProviderRefreshed();
    };
    WordLibLevelSelect.prototype.dealLevelData = function () {
        var levelcgfs = this.openData;
        for (var i = 0; i < levelcgfs.length; i++) {
            var level = levelcgfs[i].level;
            if (!this.levelData[level]) {
                this.levelData[level] = [];
            }
            this.levelData[level].push(levelcgfs[i]);
        }
    };
    WordLibLevelSelect.prototype.onItemTap = function (evt) {
        var level = evt.itemIndex + 1;
        var levelData = this.levelData[level];
        if (!egret.localStorage.getItem(this.grade + "_" + level)) {
            egret.localStorage.setItem(this.grade + "_" + level, "1");
            // let item:WordLibSelectItem = this.list.getChildAt(evt.itemIndex) as WordLibSelectItem;
            // if(!!item){
            // 	item.refresh();
            this.refreshLevelCfgs();
            // }
        }
        ViewManager.ins().open(RecordScene, { dataCfg: levelData, title: "第" + level + "关" });
    };
    WordLibLevelSelect.prototype.onItemTap1 = function (evt) {
        var item = this.list1.getChildAt(evt.itemIndex);
        if (!!item) {
            if (item.recorded) {
                item.select = !item.select;
            }
            else {
                ViewManager.ins().open(WarnWin, { tips: "请选择已学习过的关卡~" });
                return;
            }
        }
    };
    WordLibLevelSelect.prototype.onTouchTap = function (evt) {
        switch (evt.target) {
            case this.exitButton:
                this.close();
                ViewManager.ins().close(WordLibLevelSelect);
                break;
            case this.sureBtn:
                this.recoverStart();
                break;
        }
    };
    /**
     * 前往复习功能
     */
    WordLibLevelSelect.prototype.recoverStart = function () {
        var len = this.list1.$children.length;
        var levelDatas = [];
        for (var i = 0; i < len; i++) {
            var item = this.list1.getChildAt(i);
            if (!!item) {
                if (item.select) {
                    levelDatas = levelDatas.concat(this.levelData[item.selectLev]);
                }
            }
        }
        //进入选择单词界面
        ViewManager.ins().open(SingleWordSelect, { wordData: levelDatas });
        // ViewManager.ins().open(RecordScene,{dataCfg:levelDatas,title:"正在复习中~请继续努力哦"})
        // this.close();
        // ViewManager.ins().close(WordLibLevelSelect);
    };
    WordLibLevelSelect.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.levelData = {};
        this.levelCfgs = [];
        this.openData = [];
        this.exitButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this);
        this.list1.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap1, this);
        this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    return WordLibLevelSelect;
}(BaseEuiView));
__reflect(WordLibLevelSelect.prototype, "WordLibLevelSelect");
ViewManager.ins().reg(WordLibLevelSelect, LayerManager.UI_Main);
//# sourceMappingURL=WordLibLevelSelect.js.map