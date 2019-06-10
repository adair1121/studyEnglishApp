var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RES_RESOURCE = "resource/";
var CFG_DIR = RES_RESOURCE + "cfg/";
var RES_DIR = RES_RESOURCE + "res/";
var MP3_DIR = RES_RESOURCE + "sound/";
var ResPath = (function () {
    function ResPath() {
    }
    ResPath.GetUrilPath = function (dir, id, replacePostfix, postfix) {
        if (replacePostfix)
            id = id.replace("_png", "");
        return "" + dir + id + "." + postfix;
    };
    return ResPath;
}());
__reflect(ResPath.prototype, "ResPath");
