let RES_RESOURCE = `resource/`;
let CFG_DIR = `${RES_RESOURCE}cfg/`;
let RES_DIR = `${RES_RESOURCE}res/`;
let MAP_DIR = `${RES_RESOURCE}map/`;
let MP3_DIR = `${RES_RESOURCE}sound/`;
let IMG_DIR = `${RES_RESOURCE}image/`;
const RES_DIR_BLOOD = `${RES_DIR}blood/`;
const RES_DIR_BODY = `${RES_DIR}body/`;
const RES_DIR_EFF = `${RES_DIR}eff/`;
const RES_DIR_ITEM = `${RES_DIR}item/`;
const RES_DIR_MONSTER = `${RES_DIR}monster/`;
const RES_DIR_MONSTER_HEAD = `${RES_DIR}monsterHead/`;
const RES_DIR_SKILL = `${RES_DIR}skill/`;
const RES_DIR_SKILL_RUNEEQUIP = `${RES_DIR}skill/runeEquip/`;
const RES_DIR_SKILLEFF = `${RES_DIR}skilleff/`;
const RES_DIR_WARSPIRIT = `${RES_DIR}warspirit/`;
const RES_DIR_WEAPON = `${RES_DIR}weapon/`;
const RES_DIR_WING = `${RES_DIR}wing/`;
const RES_DIR_CITY = `${RES_DIR}city/`;
const RES_DIR_TUJIAN = `${RES_DIR}tujian/`;
const RES_DIR_XUNZHANG = `${RES_DIR}xunzhang/`;
const RES_DIR_VIP = `${RES_DIR}vip/`;
const IMG_DIR_ROLE = `${IMG_DIR}role/`;
const IMG_DIR_SKILLICON = `${IMG_DIR}skillicon/`;
const IMG_DIR_JIHUO = `${IMG_DIR}jihuo/`;
const IMG_DIR_HUNSHOUNAME = `${IMG_DIR}hunshouname/`;
const IMG_DIR_SINGLE = `${IMG_DIR}single/`;
const IMG_DIR_CHENGHAO = `${IMG_DIR}chenghao/`;
const IMG_DIR_DIEGUIDE = `${IMG_DIR}dieguide/`;
const IMG_DIR_ICONS = `${IMG_DIR}icons/`;
const IMG_DIR_SHENSHOU = `${IMG_DIR}shenshou/`;
const IMG_DIR_XINFA = `${IMG_DIR}heartmethod/`;
const IMG_DIR_TUJIANTXT = `${IMG_DIR}tujiantxt/`;
const IMG_DIR_SHENQI = `${IMG_DIR}shenqi/`;

class ResPath{

    public static GetUrilPath(dir:string, id:any, replacePostfix:boolean, postfix:string):string
    {
        if(replacePostfix)id = id.replace("_png", "");
        return `${dir}${id}.${postfix}`;
    }

    /**
     * 道具
     */
    public static GetItemUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(RES_DIR_ITEM, id, replacePostfix, postfix);
    }

    /**
     * 怪物图像 
     */
    public static GetMonsterHeadUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${RES_DIR_MONSTER_HEAD}monhead`, id, replacePostfix, postfix);
    }

    /**
     * 图鉴 
     */
    public static GetTuJianUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${RES_DIR_TUJIAN}`, id, replacePostfix, postfix);
    }

    /**
     * 勋章 
     */
    public static GetXunZhangUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${RES_DIR_XUNZHANG}xunzhang`, id, replacePostfix, postfix);
    }

    /**
     * 人物(衣服，武器，翅膀) 
     */
    public static GetRoleUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_ROLE}`, id, replacePostfix, postfix);
    }

    /**
     * 技能图标
     */
    public static GetSkillIconUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_SKILLICON}`, id, replacePostfix, postfix);
    }

    /**
     * 激活
     */
    public static GetJiHuoUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_JIHUO}`, id, replacePostfix, postfix);
    }

    /**
     * VIP
     */
    public static GetVipUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${RES_DIR_VIP}`, id, replacePostfix, postfix);
    }

    /**
     * VIP礼物
     */
    public static GetVipGiftUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${RES_DIR_VIP}vipgift/`, id, replacePostfix, postfix);
    }

    /**
     * 蛮荒之地
     */
    public static GetHunShouNameUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_HUNSHOUNAME}`, id, replacePostfix, postfix);
    }

    /**
     * 合计碎片
     */
    public static GetHunRuneEquipUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${RES_DIR_SKILL_RUNEEQUIP}`, id, replacePostfix, postfix);
    }

    /**
     * 单独图片
     */
    public static GetSingleUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_SINGLE}`, id, replacePostfix, postfix);
    }

    /**
     * 称号
     */
    public static GetChengHaoUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_CHENGHAO}`, id, replacePostfix, postfix);
    }

    /**
     * 死亡提升引导
     */
    public static GetDieGuideUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_DIEGUIDE}`, id, replacePostfix, postfix);
    }
    
    /**
     * 活动图标
     */
    public static GetActivityIconsUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_ICONS}`, id, replacePostfix, postfix);
    }
    
    /**
     * 神兽
     */
    public static GetShenShouUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_SHENSHOU}`, id, replacePostfix, postfix);
    }

    /**
     * 心法
     */
    public static GetXinFaUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_XINFA}`, id, replacePostfix, postfix);
    }
    
    /**
     * 图鉴标题
     */
    public static GetTuJianTextUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_TUJIANTXT}`, id, replacePostfix, postfix);
    }

    /**
     * 神器
     */
    public static GetShenQiUrl(id:any, replacePostfix:boolean = false, postfix:string = "png"):string
    {
        return this.GetUrilPath(`${IMG_DIR_SHENQI}`, id, replacePostfix, postfix);
    }
}