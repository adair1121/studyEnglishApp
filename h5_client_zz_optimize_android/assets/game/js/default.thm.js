window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/ClickReadItemSkin.exml'] = window.ClickReadItemSkin = (function (_super) {
	__extends(ClickReadItemSkin, _super);
	function ClickReadItemSkin() {
		_super.call(this);
		this.skinParts = ["enFont","trans","itemGroup"];
		
		this.height = 100;
		this.width = 640;
		this.elementsContent = [this.itemGroup_i()];
	}
	var _proto = ClickReadItemSkin.prototype;

	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this._Image1_i(),this.enFont_i(),this.trans_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_white_block_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.enFont_i = function () {
		var t = new eui.Label();
		this.enFont = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.left = 25;
		t.size = 30;
		t.text = "";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 229;
		return t;
	};
	_proto.trans_i = function () {
		var t = new eui.Label();
		this.trans = t;
		t.anchorOffsetX = 0;
		t.right = 33;
		t.text = "";
		t.textColor = 0x000000;
		t.top = 35;
		t.touchEnabled = false;
		t.width = 229;
		return t;
	};
	return ClickReadItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/ClickReadSkin.exml'] = window.ClickReadSkin = (function (_super) {
	__extends(ClickReadSkin, _super);
	function ClickReadSkin() {
		_super.call(this);
		this.skinParts = ["list"];
		
		this.height = 760;
		this.width = 640;
		this.elementsContent = [this.list_i()];
	}
	var _proto = ClickReadSkin.prototype;

	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.bottom = 0;
		t.itemRendererSkinName = ClickReadItemSkin;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.useVirtualLayout = false;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return ClickReadSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/MyCheckBoxSkin.exml'] = window.MyCheckBoxSkin = (function (_super) {
	__extends(MyCheckBoxSkin, _super);
	function MyCheckBoxSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = MyCheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.source = "checkbox_unselect_png";
		t.percentWidth = 100;
		return t;
	};
	return MyCheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/MyNavButton.exml'] = window.MyNavButton = (function (_super) {
	__extends(MyNavButton, _super);
	function MyNavButton() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","y",-1)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","navBtn1_down_png"),
					new eui.SetProperty("labelDisplay","width",115),
					new eui.SetProperty("labelDisplay","height",25),
					new eui.SetProperty("labelDisplay","x",9),
					new eui.SetProperty("labelDisplay","y",59)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = MyNavButton.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "navBtn1_up_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 115;
		t.x = 10;
		t.y = 59;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return MyNavButton;
})(eui.Skin);generateEUI.paths['resource/skins/components/SingleWordSelectItemSkin.exml'] = window.SingleWordSelectItemSkin = (function (_super) {
	__extends(SingleWordSelectItemSkin, _super);
	function SingleWordSelectItemSkin() {
		_super.call(this);
		this.skinParts = ["font","checkbox"];
		
		this.height = 57;
		this.width = 300;
		this.elementsContent = [this._Image1_i(),this.font_i(),this.checkbox_i()];
	}
	var _proto = SingleWordSelectItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_white_block_png";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.font_i = function () {
		var t = new eui.Label();
		this.font = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.left = 24;
		t.text = "Wold";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 180;
		t.x = 24;
		t.y = 14;
		return t;
	};
	_proto.checkbox_i = function () {
		var t = new eui.CheckBox();
		this.checkbox = t;
		t.enabled = true;
		t.label = "CheckBox";
		t.selected = false;
		t.skinName = "MyCheckBoxSkin";
		t.touchChildren = false;
		t.touchEnabled = true;
		t.x = 225;
		t.y = 3;
		return t;
	};
	return SingleWordSelectItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/TestSceneItemSkin.exml'] = window.TestSceneItemSkin = (function (_super) {
	__extends(TestSceneItemSkin, _super);
	function TestSceneItemSkin() {
		_super.call(this);
		this.skinParts = ["select","selectImg","selectIndexLab"];
		
		this.height = 80;
		this.width = 634;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = TestSceneItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this._Image1_i(),this.select_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_white_block_png";
		t.top = 0;
		return t;
	};
	_proto.select_i = function () {
		var t = new eui.Label();
		this.select = t;
		t.left = 141;
		t.size = 30;
		t.text = "Label";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 48;
		t.verticalCenter = 0;
		t.elementsContent = [this.selectImg_i(),this.selectIndexLab_i()];
		return t;
	};
	_proto.selectImg_i = function () {
		var t = new eui.Image();
		this.selectImg = t;
		t.height = 70;
		t.source = "select_normal_png";
		t.width = 70;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectIndexLab_i = function () {
		var t = new eui.Label();
		this.selectIndexLab = t;
		t.text = "A";
		t.textColor = 0x000000;
		t.x = 25.5;
		t.y = 17;
		return t;
	};
	return TestSceneItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/warnFrameSkin.exml'] = window.warnFrameSkin = (function (_super) {
	__extends(warnFrameSkin, _super);
	function warnFrameSkin() {
		_super.call(this);
		this.skinParts = ["maskRect","sureBtn","tips"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.maskRect_i(),this._Group1_i()];
	}
	var _proto = warnFrameSkin.prototype;

	_proto.maskRect_i = function () {
		var t = new eui.Rect();
		this.maskRect = t;
		t.alpha = 0.3;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.sureBtn_i(),this._Image3_i(),this._Label2_i(),this.tips_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 255;
		t.source = "main_white_block_png";
		t.width = 392;
		t.x = 0;
		t.y = 55;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Group();
		this.sureBtn = t;
		t.anchorOffsetY = 0;
		t.bottom = 19;
		t.height = 58;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58.73;
		t.source = "button2_png";
		t.width = 179;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "确定";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.21;
		t.source = "top_bg_jpg";
		t.width = 392;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "提示";
		t.x = 166;
		t.y = 14;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.text = "清先选择答案";
		t.textAlign = "center";
		t.textColor = 0x473e3e;
		t.verticalAlign = "middle";
		t.width = 299;
		t.x = 39;
		t.y = 81;
		return t;
	};
	return warnFrameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/WordRecoverItemSkin.exml'] = window.WordRecoverItemSkin = (function (_super) {
	__extends(WordRecoverItemSkin, _super);
	function WordRecoverItemSkin() {
		_super.call(this);
		this.skinParts = ["itembg","label","checkBox","itemGroup"];
		
		this.height = 71;
		this.width = 618;
		this.elementsContent = [this.itemGroup_i()];
	}
	var _proto = WordRecoverItemSkin.prototype;

	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.top = 3;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 617;
		t.elementsContent = [this.itembg_i(),this.label_i(),this.checkBox_i()];
		return t;
	};
	_proto.itembg_i = function () {
		var t = new eui.Image();
		this.itembg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.source = "item_up_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "高速记单词教学";
		t.top = 19;
		t.touchEnabled = false;
		return t;
	};
	_proto.checkBox_i = function () {
		var t = new eui.CheckBox();
		this.checkBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.label = "CheckBox";
		t.skinName = "MyCheckBoxSkin";
		t.width = 38;
		t.x = 543;
		t.y = 12.5;
		return t;
	};
	return WordRecoverItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameLoadingUISkin.exml'] = window.GameLoadingUISkin = (function (_super) {
	__extends(GameLoadingUISkin, _super);
	function GameLoadingUISkin() {
		_super.call(this);
		this.skinParts = ["progressbg","proMask","progressText"];
		
		this.height = 768;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameLoadingUISkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 132;
		t.horizontalCenter = 0.5;
		t.elementsContent = [this._Image1_i(),this.progressbg_i(),this.proMask_i(),this.progressText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bar2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.progressbg_i = function () {
		var t = new eui.Image();
		this.progressbg = t;
		t.source = "bar5_png";
		t.x = 45;
		t.y = 8.67;
		return t;
	};
	_proto.proMask_i = function () {
		var t = new eui.Rect();
		this.proMask = t;
		t.height = 20;
		t.width = 0;
		t.x = 45;
		t.y = 5.67;
		return t;
	};
	_proto.progressText_i = function () {
		var t = new eui.Label();
		this.progressText = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "0/0";
		t.textColor = 0xfcfbf9;
		t.verticalCenter = 0;
		return t;
	};
	return GameLoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/mainScene/MainSceneSkin.exml'] = window.MainSceneSkin = (function (_super) {
	__extends(MainSceneSkin, _super);
	function MainSceneSkin() {
		_super.call(this);
		this.skinParts = ["teachButton","testButton","recordButton","listButton"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = MainSceneSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 136;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.teachButton_i(),this._Label1_i()];
		return t;
	};
	_proto.teachButton_i = function () {
		var t = new eui.Image();
		this.teachButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "高速记单词教学";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 308;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.testButton_i(),this._Label2_i()];
		return t;
	};
	_proto.testButton_i = function () {
		var t = new eui.Image();
		this.testButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 3.5;
		t.text = "词汇量检测";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 468;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.recordButton_i(),this._Label3_i()];
		return t;
	};
	_proto.recordButton_i = function () {
		var t = new eui.Image();
		this.recordButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 3.5;
		t.text = "高速记单词体验";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 628;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.listButton_i(),this._Label4_i()];
		return t;
	};
	_proto.listButton_i = function () {
		var t = new eui.Image();
		this.listButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 3.5;
		t.text = "学生信息列表";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	return MainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RecordSceneSkin.exml'] = window.RecordSceneSkin = (function (_super) {
	__extends(RecordSceneSkin, _super);
	function RecordSceneSkin() {
		_super.call(this);
		this.skinParts = ["title","exitButton","clickReadpanel","pageNum","btn_left","btn_right"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = RecordSceneSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.title_i(),this.exitButton_i(),this.clickReadpanel_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(91,91,552,550);
		t.source = "main_bg_bottom_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.left = 0;
		t.right = 0;
		t.source = "top_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.horizontalCenter = 0;
		t.text = "记单词体验版";
		t.top = 26;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Image();
		this.exitButton = t;
		t.left = 4;
		t.source = "btn_exit_png";
		t.top = 3;
		return t;
	};
	_proto.clickReadpanel_i = function () {
		var t = new ClickRead();
		this.clickReadpanel = t;
		t.anchorOffsetY = 0;
		t.height = 905;
		t.horizontalCenter = 0;
		t.skinName = "ClickReadSkin";
		t.top = 86;
		t.width = 640;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 61;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.pageNum_i(),this.btn_left_i(),this.btn_right_i()];
		return t;
	};
	_proto.pageNum_i = function () {
		var t = new eui.Label();
		this.pageNum = t;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 112;
		t.y = 0;
		return t;
	};
	_proto.btn_left_i = function () {
		var t = new eui.Image();
		this.btn_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.67;
		t.source = "btn_left_png";
		t.width = 58.67;
		t.x = 0;
		t.y = 0.33;
		return t;
	};
	_proto.btn_right_i = function () {
		var t = new eui.Image();
		this.btn_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.67;
		t.source = "btn_right_png";
		t.width = 58.67;
		t.x = 239;
		t.y = 0.33;
		return t;
	};
	return RecordSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SingleWordSelectSkin.exml'] = window.SingleWordSelectSkin = (function (_super) {
	__extends(SingleWordSelectSkin, _super);
	function SingleWordSelectSkin() {
		_super.call(this);
		this.skinParts = ["exitButton","buttonLabel","sureBtn","delBtn","list","scroller","title","selectCheck","selectAll"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SingleWordSelectSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.exitButton_i(),this.sureBtn_i(),this.delBtn_i(),this.scroller_i(),this.title_i(),this.selectAll_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_white_block_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.left = 0;
		t.right = 0;
		t.source = "top_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Image();
		this.exitButton = t;
		t.left = 4;
		t.source = "btn_exit_png";
		t.top = 3;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Group();
		this.sureBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 46;
		t.height = 102.1;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 292.27;
		t.elementsContent = [this._Image3_i(),this.buttonLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.source = "button2_png";
		t.width = 298.67;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buttonLabel_i = function () {
		var t = new eui.Label();
		this.buttonLabel = t;
		t.horizontalCenter = -0.1349999999999909;
		t.text = "开始复习";
		t.verticalCenter = 2.950000000000003;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.anchorOffsetX = 0;
		t.right = 20;
		t.top = 12;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.width = 111;
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "button2_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.text = "删除";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 869.7;
		t.horizontalCenter = 0;
		t.top = 91;
		t.width = 630.3;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = SingleWordSelectItemSkin;
		t.useVirtualLayout = false;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.orientation = "rows";
		t.requestedColumnCount = 2;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.test = "null";
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.horizontalCenter = 0;
		t.text = "请选择需要复习的单词";
		t.top = 27;
		return t;
	};
	_proto.selectAll_i = function () {
		var t = new eui.Group();
		this.selectAll = t;
		t.bottom = 66;
		t.left = 27;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this.selectCheck_i(),this._Label2_i()];
		return t;
	};
	_proto.selectCheck_i = function () {
		var t = new eui.CheckBox();
		this.selectCheck = t;
		t.label = "全选";
		t.skinName = "MyCheckBoxSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "全选";
		t.textColor = 0x000000;
		t.x = 56;
		t.y = 12;
		return t;
	};
	return SingleWordSelectSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TeachMainSceneSkin.exml'] = window.TeachMainSceneSkin = (function (_super) {
	__extends(TeachMainSceneSkin, _super);
	function TeachMainSceneSkin() {
		_super.call(this);
		this.skinParts = ["exitButton","recordBtn","yueduBtn","bookBtn","wordBookBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group5_i()];
	}
	var _proto = TeachMainSceneSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.exitButton_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Image();
		this.exitButton = t;
		t.left = 4;
		t.source = "btn_exit_png";
		t.top = 3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 136;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.recordBtn_i(),this._Label1_i()];
		return t;
	};
	_proto.recordBtn_i = function () {
		var t = new eui.Image();
		this.recordBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "高速记单词";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 303;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.yueduBtn_i(),this._Label2_i()];
		return t;
	};
	_proto.yueduBtn_i = function () {
		var t = new eui.Image();
		this.yueduBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "高速阅读训练";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 479;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.bookBtn_i(),this._Label3_i()];
		return t;
	};
	_proto.bookBtn_i = function () {
		var t = new eui.Image();
		this.bookBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "课本点读背诵";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.top = 646;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this.wordBookBtn_i(),this._Label4_i()];
		return t;
	};
	_proto.wordBookBtn_i = function () {
		var t = new eui.Image();
		this.wordBookBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.52;
		t.source = "button1_png";
		t.width = 390.03;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "我的生词本";
		t.top = 38;
		t.touchEnabled = false;
		return t;
	};
	return TeachMainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TestResultSkin.exml'] = window.TestResultSkin = (function (_super) {
	__extends(TestResultSkin, _super);
	function TestResultSkin() {
		_super.call(this);
		this.skinParts = ["sureBtn","exitButton","desc"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TestResultSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.sureBtn_i(),this._Image4_i(),this.exitButton_i(),this._Label2_i(),this.desc_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(372,189,107,305);
		t.source = "main_bg_bottom_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "main_white_block_png";
		t.top = 89;
		t.width = 640;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Group();
		this.sureBtn = t;
		t.bottom = 61;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.source = "button2_png";
		t.width = 228.57;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "确定";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.left = 0;
		t.right = 0;
		t.source = "top_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Image();
		this.exitButton = t;
		t.left = 4;
		t.source = "btn_exit_png";
		t.top = 3;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "检测结果";
		t.top = 27;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 466;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = -73;
		t.width = 527;
		return t;
	};
	return TestResultSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TestSceneSkin.exml'] = window.TestSceneSkin = (function (_super) {
	__extends(TestSceneSkin, _super);
	function TestSceneSkin() {
		_super.call(this);
		this.skinParts = ["exitButton","progress","num","word","time","list","submitBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = TestSceneSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.exitButton_i(),this.progress_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label2_i(),this._Group1_i(),this.time_i(),this.list_i(),this.submitBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(372,189,107,305);
		t.source = "main_bg_bottom_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.left = 0;
		t.right = 0;
		t.source = "top_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "词汇量检测";
		t.top = 26;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Image();
		this.exitButton = t;
		t.left = 4;
		t.source = "btn_exit_png";
		t.top = 3;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Label();
		this.progress = t;
		t.right = 26;
		t.text = "0%";
		t.textAlign = "center";
		t.top = 26;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 142;
		t.left = 0;
		t.right = 0;
		t.source = "main_white_block_png";
		t.top = 94;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 21;
		t.left = 0;
		t.right = 0;
		t.source = "main_white_block_png";
		t.top = 973;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.percentHeight = 64;
		t.left = 0;
		t.right = 0;
		t.source = "main_white_block_png";
		t.top = 240;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.text = "请根据下面的单词选出正确的答案:";
		t.textColor = 0x5c6de0;
		t.top = 110;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -158;
		t.top = 167;
		t.elementsContent = [this._Image6_i(),this.num_i(),this.word_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "top_bg_jpg";
		t.width = 42;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Label();
		this.num = t;
		t.text = "00";
		t.textAlign = "center";
		t.width = 34;
		t.x = 4;
		t.y = 8.33;
		return t;
	};
	_proto.word_i = function () {
		var t = new eui.Label();
		this.word = t;
		t.left = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "carry";
		t.textColor = 0x3d3737;
		t.top = 7;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.horizontalCenter = 210.5;
		t.text = "60s";
		t.textColor = 0x3d3737;
		t.top = 174;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 167;
		t.horizontalCenter = -1;
		t.top = 242;
		t.useVirtualLayout = false;
		t.width = 634;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.submitBtn_i = function () {
		var t = new eui.Group();
		this.submitBtn = t;
		t.horizontalCenter = 0;
		t.top = 1015;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this._Image7_i(),this._Label3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94.66;
		t.source = "button2_png";
		t.width = 288.48;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "提交";
		t.verticalCenter = 0;
		return t;
	};
	return TestSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/WordLibLevelSelectSkin.exml'] = window.WordLibLevelSelectSkin = (function (_super) {
	__extends(WordLibLevelSelectSkin, _super);
	function WordLibLevelSelectSkin() {
		_super.call(this);
		this.skinParts = ["exitButton","list","scroller","list1","scroller1","sureBtn","viewstack","tabbar"];
		
		this.currentState = "record";
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group3_i()];
		this.viewstack_i();
		
		this.states = [
			new eui.State ("record",
				[
					new eui.AddItems("viewstack","_Group3",2,"tabbar"),
					new eui.SetProperty("_Label1","x",75),
					new eui.SetProperty("_Label1","y",99),
					new eui.SetProperty("scroller","x",2),
					new eui.SetProperty("scroller","y",170)
				])
		];
	}
	var _proto = WordLibLevelSelectSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.exitButton_i(),this.tabbar_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Image();
		this.exitButton = t;
		t.left = 4;
		t.source = "btn_exit_png";
		t.top = 3;
		return t;
	};
	_proto.viewstack_i = function () {
		var t = new eui.ViewStack();
		this.viewstack = t;
		t.anchorOffsetY = 0;
		t.height = 913;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectedIndex = 1;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.width = 637;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.name = "识记";
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.elementsContent = [this._Label1_i(),this.scroller_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.size = 40;
		t.text = "请选择你开始识记的单词关";
		t.textColor = 0xEFE7E1;
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 858.91;
		t.width = 636.06;
		t.x = 0;
		t.y = 71;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 8;
		t.left = 9;
		t.right = 13;
		t.top = 158;
		t.useVirtualLayout = false;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.paddingLeft = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 941.24;
		t.horizontalCenter = 5;
		t.name = "复习";
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.x = 10;
		t.y = 94.85;
		t.elementsContent = [this._Label2_i(),this.scroller1_i(),this.sureBtn_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "请选择你开始复习的单词关";
		t.textColor = 0xEFE7E1;
		t.x = 73;
		t.y = 0;
		return t;
	};
	_proto.scroller1_i = function () {
		var t = new eui.Scroller();
		this.scroller1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 774.06;
		t.width = 636.06;
		t.x = -9.09;
		t.y = 71;
		t.viewport = this.list1_i();
		return t;
	};
	_proto.list1_i = function () {
		var t = new eui.List();
		this.list1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 8;
		t.left = 9;
		t.right = 13;
		t.top = 158;
		t.useVirtualLayout = false;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.paddingLeft = 10;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Group();
		this.sureBtn = t;
		t.horizontalCenter = 1;
		t.top = 869;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this._Image2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "button2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "确定";
		t.x = 108;
		t.y = 15;
		return t;
	};
	_proto.tabbar_i = function () {
		var t = new eui.TabBar();
		this.tabbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 88;
		t.horizontalCenter = 0;
		t.width = 570;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.paddingLeft = 20;
		return t;
	};
	return WordLibLevelSelectSkin;
})(eui.Skin);generateEUI.paths['resource/skins/WordLibSelectItemSkin.exml'] = window.WordLibSelectItemSkin = (function (_super) {
	__extends(WordLibSelectItemSkin, _super);
	function WordLibSelectItemSkin() {
		_super.call(this);
		this.skinParts = ["itembg","label","itemGroup"];
		
		this.height = 71.18;
		this.width = 618;
		this.elementsContent = [this.itemGroup_i()];
	}
	var _proto = WordLibSelectItemSkin.prototype;

	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.horizontalCenter = 0;
		t.top = 3;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this.itembg_i(),this.label_i()];
		return t;
	};
	_proto.itembg_i = function () {
		var t = new eui.Image();
		this.itembg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.source = "item_up_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "高速记单词教学";
		t.top = 18;
		t.touchEnabled = false;
		return t;
	};
	return WordLibSelectItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/WordLibSelectSkin.exml'] = window.WordLibSelectSkin = (function (_super) {
	__extends(WordLibSelectSkin, _super);
	function WordLibSelectSkin() {
		_super.call(this);
		this.skinParts = ["list","exitButton"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = WordLibSelectSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.list_i(),this.exitButton_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "词库选择";
		t.textColor = 0xefe7e1;
		t.top = 84;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 973;
		t.horizontalCenter = 0;
		t.top = 158;
		t.useVirtualLayout = false;
		t.width = 618;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.exitButton_i = function () {
		var t = new eui.Image();
		this.exitButton = t;
		t.left = 4;
		t.source = "btn_exit_png";
		t.top = 3;
		return t;
	};
	return WordLibSelectSkin;
})(eui.Skin);