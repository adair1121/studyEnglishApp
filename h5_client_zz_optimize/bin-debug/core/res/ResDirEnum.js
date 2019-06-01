var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RES_RESOURCE = "resource/";
var CFG_DIR = RES_RESOURCE + "cfg/";
var RES_DIR = RES_RESOURCE + "res/";
var MAP_DIR = RES_RESOURCE + "map/";
var MP3_DIR = RES_RESOURCE + "sound/";
var IMG_DIR = RES_RESOURCE + "image/";
var RES_DIR_BLOOD = RES_DIR + "blood/";
var RES_DIR_BODY = RES_DIR + "body/";
var RES_DIR_EFF = RES_DIR + "eff/";
var RES_DIR_ITEM = RES_DIR + "item/";
var RES_DIR_MONSTER = RES_DIR + "monster/";
var RES_DIR_MONSTER_HEAD = RES_DIR + "monsterHead/";
var RES_DIR_SKILL = RES_DIR + "skill/";
var RES_DIR_SKILL_RUNEEQUIP = RES_DIR + "skill/runeEquip/";
var RES_DIR_SKILLEFF = RES_DIR + "skilleff/";
var RES_DIR_WARSPIRIT = RES_DIR + "warspirit/";
var RES_DIR_WEAPON = RES_DIR + "weapon/";
var RES_DIR_WING = RES_DIR + "wing/";
var RES_DIR_CITY = RES_DIR + "city/";
var RES_DIR_TUJIAN = RES_DIR + "tujian/";
var RES_DIR_XUNZHANG = RES_DIR + "xunzhang/";
var RES_DIR_VIP = RES_DIR + "vip/";
var IMG_DIR_ROLE = IMG_DIR + "role/";
var IMG_DIR_SKILLICON = IMG_DIR + "skillicon/";
var IMG_DIR_JIHUO = IMG_DIR + "jihuo/";
var IMG_DIR_HUNSHOUNAME = IMG_DIR + "hunshouname/";
var IMG_DIR_SINGLE = IMG_DIR + "single/";
var IMG_DIR_CHENGHAO = IMG_DIR + "chenghao/";
var IMG_DIR_DIEGUIDE = IMG_DIR + "dieguide/";
var IMG_DIR_ICONS = IMG_DIR + "icons/";
var IMG_DIR_SHENSHOU = IMG_DIR + "shenshou/";
var IMG_DIR_XINFA = IMG_DIR + "heartmethod/";
var IMG_DIR_TUJIANTXT = IMG_DIR + "tujiantxt/";
var IMG_DIR_SHENQI = IMG_DIR + "shenqi/";
var ResPath = (function () {
    function ResPath() {
    }
    ResPath.GetUrilPath = function (dir, id, replacePostfix, postfix) {
        if (replacePostfix)
            id = id.replace("_png", "");
        return "" + dir + id + "." + postfix;
    };
    /**
     * 道具
     */
    ResPath.GetItemUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath(RES_DIR_ITEM, id, replacePostfix, postfix);
    };
    /**
     * 怪物图像
     */
    ResPath.GetMonsterHeadUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath(RES_DIR_MONSTER_HEAD + "monhead", id, replacePostfix, postfix);
    };
    /**
     * 图鉴
     */
    ResPath.GetTuJianUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + RES_DIR_TUJIAN, id, replacePostfix, postfix);
    };
    /**
     * 勋章
     */
    ResPath.GetXunZhangUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath(RES_DIR_XUNZHANG + "xunzhang", id, replacePostfix, postfix);
    };
    /**
     * 人物(衣服，武器，翅膀)
     */
    ResPath.GetRoleUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_ROLE, id, replacePostfix, postfix);
    };
    /**
     * 技能图标
     */
    ResPath.GetSkillIconUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_SKILLICON, id, replacePostfix, postfix);
    };
    /**
     * 激活
     */
    ResPath.GetJiHuoUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_JIHUO, id, replacePostfix, postfix);
    };
    /**
     * VIP
     */
    ResPath.GetVipUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + RES_DIR_VIP, id, replacePostfix, postfix);
    };
    /**
     * VIP礼物
     */
    ResPath.GetVipGiftUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath(RES_DIR_VIP + "vipgift/", id, replacePostfix, postfix);
    };
    /**
     * 蛮荒之地
     */
    ResPath.GetHunShouNameUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_HUNSHOUNAME, id, replacePostfix, postfix);
    };
    /**
     * 合计碎片
     */
    ResPath.GetHunRuneEquipUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + RES_DIR_SKILL_RUNEEQUIP, id, replacePostfix, postfix);
    };
    /**
     * 单独图片
     */
    ResPath.GetSingleUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_SINGLE, id, replacePostfix, postfix);
    };
    /**
     * 称号
     */
    ResPath.GetChengHaoUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_CHENGHAO, id, replacePostfix, postfix);
    };
    /**
     * 死亡提升引导
     */
    ResPath.GetDieGuideUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_DIEGUIDE, id, replacePostfix, postfix);
    };
    /**
     * 活动图标
     */
    ResPath.GetActivityIconsUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_ICONS, id, replacePostfix, postfix);
    };
    /**
     * 神兽
     */
    ResPath.GetShenShouUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_SHENSHOU, id, replacePostfix, postfix);
    };
    /**
     * 心法
     */
    ResPath.GetXinFaUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_XINFA, id, replacePostfix, postfix);
    };
    /**
     * 图鉴标题
     */
    ResPath.GetTuJianTextUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_TUJIANTXT, id, replacePostfix, postfix);
    };
    /**
     * 神器
     */
    ResPath.GetShenQiUrl = function (id, replacePostfix, postfix) {
        if (replacePostfix === void 0) { replacePostfix = false; }
        if (postfix === void 0) { postfix = "png"; }
        return this.GetUrilPath("" + IMG_DIR_SHENQI, id, replacePostfix, postfix);
    };
    return ResPath;
}());
__reflect(ResPath.prototype, "ResPath");
//# sourceMappingURL=ResDirEnum.js.map