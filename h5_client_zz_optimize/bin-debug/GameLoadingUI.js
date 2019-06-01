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
var GameLoadingUI = (function (_super) {
    __extends(GameLoadingUI, _super);
    function GameLoadingUI() {
        return _super.call(this) || this;
    }
    // private gameHint:eui.Label;
    GameLoadingUI.prototype.childrenCreated = function () {
        // this.bg = new eui.Image;
        // this.bg.source = `${RES_RESOURCE}loading/loading.jpg`;
        // this.bg.visible = false;
        // this.bg.width=this.stage.stageWidth;
        // this.bg.height=this.stage.stageHeight;
        // this.bg.horizontalCenter = 0;
        // this.bg.verticalCenter = 0;
        // this.verticalCenter = 0;
        // this.horizontalCenter = 0;
        // this.addChild(this.bg);
        this.visible = false;
        var self = this;
        setTimeout(function () {
            self.visible = true;
        }, 500);
        this.progressPane = new eui.Group();
        this.addChild(this.progressPane);
        this.height = this.progressPane.height = 100;
        this.width = this.progressPane.width = 670;
        // this.progressPane.anchorOffsetX = this.progressPane.width>>1;
        // this.progressPane.anchorOffsetY = this.progressPane.height>>1;
        this.horizontalCenter = 0;
        this.bottom = 100;
        // this.messageText = new eui.Label;
        // this.messageText.width = 360;
        // this.messageText.height = 20;
        // this.messageText.textAlign = egret.HorizontalAlign.CENTER;
        // this.messageText.y = 0;
        // this.messageText.size = 20;
        // this.progressPane.addChild(this.messageText);
        // this.progressBg1 = new eui.Image;
        // this.progressBg1.source = `${RES_RESOURCE}loading/bar3.png`;
        // this.progressBg1.x = 0;
        // this.progressBg1.y = 30;
        // this.progressPane.addChild(this.progressBg1);
        this.progress = new eui.Image;
        this.progress.source = RES_RESOURCE + "loading/bar5.png";
        // this.progress.scale9Grid = new egret.Rectangle(8, 8, 10, 3);
        // this.progress.width = 567;
        this.progress.anchorOffsetX = 0;
        this.progress.x = 45;
        this.progress.y = 40;
        this.progressPane.addChild(this.progress);
        this.progressBg2 = new eui.Image;
        this.progressBg2.source = RES_RESOURCE + "loading/bar2.png";
        this.progressBg2.scale9Grid = new egret.Rectangle(12, 8, 5, 5);
        // this.progressBg2.width = 657;
        this.progressBg2.x = 0;
        this.progressBg2.y = 30;
        this.progressPane.addChild(this.progressBg2);
        // this.progressBg3 = new eui.Image;
        // this.progressBg3.source = `${RES_RESOURCE}loading/bar4.png`;
        // this.progressBg3.x = this.progressBg2.x + this.progressBg2.width;
        // this.progressBg3.y = 30;
        // this.progressPane.addChild(this.progressBg3);
        // this.posImage = new eui.Image;
        // this.posImage.source = `${RES_RESOURCE}loading/bar1.png`;
        // this.posImage.y = 66;
        // this.posImage.x = 3;
        // this.progress2 = new eui.Image;
        // this.progress2.source = `${RES_RESOURCE}loading/bar6.png`;
        // // this.progress.scale9Grid = new egret.Rectangle(8, 8, 10, 3);
        // this.progress2.width = 458;
        // this.progress2.anchorOffsetX = 0;
        // this.progress2.x =  this.progress.x;
        // this.progress2.y = this.progress.y + 17;
        // this.progressPane.addChild(this.progress2);
        this.progressMask = new eui.Rect(0, 36, 0xff0000);
        // this.progressMask.scale9Grid = new egret.Rectangle(8, 8, 10, 3);
        this.progressMask.width = 0;
        this.progressMask.anchorOffsetX = 0;
        this.progressMask.x = this.progress.x;
        this.progressMask.y = this.progress.y - 1;
        this.progressPane.addChild(this.progressMask);
        // this.progressMask2 = new eui.Rect(0,15,0xff0000);
        // // this.progressMask.scale9Grid = new egret.Rectangle(8, 8, 10, 3);
        // this.progressMask2.width = 0;
        // this.progressMask2.anchorOffsetX = 0;
        // this.progressMask2.x =  this.progress2.x ;
        // this.progressMask2.y = this.progress2.y - 1;
        // this.progressPane.addChild(this.progressMask2);
        this.progress.mask = this.progressMask;
        // this.progress2.mask = this.progressMask2;
        // this.loadingTxt = new eui.Image();
        // this.loadingTxt.source =  `${RES_RESOURCE}loading/loading_txt.png`;
        // this.progressPane.addChild(this.loadingTxt);
        // this.loadingTxt.y = this.progressBg2.y + 51 + 20;
        // this.loadingTxt.x = this.progressBg2.x + (536>>1) - (79>>1);
        // this.posImage = new eui.Image;
        // this.posImage.source = `${RES_RESOURCE}loading/bar1.png`;
        // this.posImage.y = 17;
        // this.posImage.x = 6;
        // this.progressPane.addChild(this.posImage);
        this.progressText = new eui.Label;
        this.progressText.height = 20;
        this.progressText.textAlign = egret.HorizontalAlign.CENTER;
        // this.progressText.x = this.progress.x + (this.progress.width>>1) - 10
        this.progressText.horizontalCenter = 0;
        // // this.messageText.x = (this.progressBg2.width - 360)>>1;
        this.progressText.y = this.progress.y - 2;
        this.progressText.size = 20;
        this.progressPane.addChild(this.progressText);
        // this.progressPane.x = (this.stage.stageWidth - 560)>>1;
        // this.gameHint = new eui.Label;
        // this.gameHint.text="抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
        // this.gameHint.size=14;
        // this.gameHint.width=392;
        // this.gameHint.height=40;
        // this.gameHint.textAlign = "center";
        // this.gameHint.verticalAlign="middle"; 
        // this.gameHint.textColor=0xd8c8b1;
        // this.gameHint.lineSpacing=5;
        // this.gameHint.x = (this.stage.stageWidth-this.gameHint.width)/2;
        // this.gameHint.y = this.stage.stageHeight - this.gameHint.height - 10;
        // this.addChild(this.gameHint);
    };
    GameLoadingUI.GetInstance = function () {
        if (!this.instance) {
            this.instance = new GameLoadingUI();
        }
        return this.instance;
    };
    GameLoadingUI.prototype.show = function (t) {
        t.visible = true;
        t.addChild(this);
    };
    GameLoadingUI.prototype.close = function () {
        this.visible = false;
        this.parent && this.parent.addChild(this);
        egret.Tween.removeTweens(this.progressMask);
        //  egret.Tween.removeTweens(this.progressMask2)
        // egret.Tween.removeTweens(this.posImage)
    };
    GameLoadingUI.prototype.setProgress = function (t, e, duration) {
        var i = 560 * t / 100;
        egret.Tween.removeTweens(this.progressMask);
        // egret.Tween.removeTweens(this.progressMask2)
        // egret.Tween.removeTweens(this.posImage)
        if (duration && duration <= 0) {
            this.progressMask.width = i;
            // this.progressMask2.width = i;
            // this.posImage.x = 6 + i;
        }
        else {
            egret.Tween.get(this.progressMask).to({
                width: i
            }, 0);
            // egret.Tween.get(this.progressMask2).to({
            //     width: i
            // }, 0);
            // egret.Tween.get(this.posImage).to({
            //     x: 6 + i
            // }, duration?duration:500);
        }
        this.progressText.text = Math.floor(t) + "%";
        if (t == 100) {
            this.visible = false;
        }
        // this.messageText.text = e
    };
    return GameLoadingUI;
}(eui.Group));
__reflect(GameLoadingUI.prototype, "GameLoadingUI");
//# sourceMappingURL=GameLoadingUI.js.map