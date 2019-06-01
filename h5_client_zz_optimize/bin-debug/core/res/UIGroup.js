var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIGroup = (function () {
    function UIGroup() {
    }
    /**选服列表 */
    UIGroup.ServerList = "ServerList";
    /**离线奖励 */
    UIGroup.OfflineReward = "OfflineReward";
    /**主界面 */
    UIGroup.UIView2 = "UIView2";
    /**好友 */
    UIGroup.Friends = "Friends";
    /**Vip */
    UIGroup.Vip = "Vip";
    /**充值 */
    UIGroup.Charge = "Charge";
    /**每日首充 */
    UIGroup.DailyCharge = "DailyCharge";
    /**巅峰赛季 */
    UIGroup.Peakedness = "Peakedness";
    /**福利 */
    UIGroup.Fuli = "Fuli";
    /**排行 */
    UIGroup.Rank = "Rank";
    /**排行角色 */
    UIGroup.RRole = "RRole";
    /**工会 */
    UIGroup.GuildMap = "GuildMap";
    /**工会活动大厅 */
    UIGroup.GuildSkill = "GuildSkill";
    /**工会龙城争霸 */
    UIGroup.GuildWarMain = "GuildWarMain";
    /**工会龙城争霸奖励 */
    UIGroup.GuildWarReward = "GuildWarReward";
    /**工会行会大厅 */
    UIGroup.GuildWin = "GuildWin";
    /**工会行会BOSS */
    UIGroup.GuildBoss = "GuildBoss";
    /**商城 */
    UIGroup.Shop = "Shop";
    /**寻宝 */
    UIGroup.TreasureHunt = "TreasureHunt";
    /**血战比奇 */
    UIGroup.KfArena = "KfArena";
    /**拍卖 */
    UIGroup.Auction = "Auction";
    /**拍卖 */
    UIGroup.Limittime = "Limittime";
    /**跨服战场 */
    UIGroup.KFFieldWin = "KFFieldWin";
    /**跨服BOSS */
    UIGroup.KFBoss = "KFBoss";
    /**跨服BOSS展示 */
    UIGroup.KFBossShow = "KFBossShow";
    /**魔界入侵 */
    UIGroup.KFInvasion = "KFInvasion";
    /**神兵 */
    UIGroup.GodWeapon = "GodWeapon";
    /**活动 */
    UIGroup.ActivityWin = "ActivityWin";
    /**怪物攻城 */
    UIGroup.CityBoss = "CityBoss";
    /**竞技 */
    UIGroup.LadderWin = "LadderWin";
    /**合击按钮 */
    UIGroup.BtnHeji = "BtnHeji";
    /**副本 */
    UIGroup.FbWin = "FbWin";
    /**副本每日奖励 */
    UIGroup.FbDayReward = "FbDayReward";
    /**藏宝阁(筛子) */
    UIGroup.Richman = "Richman";
    /**BOSS */
    UIGroup.BossWin = "BossWin";
    /**背包 */
    UIGroup.BagWin = "BagWin";
    /**锻造 */
    UIGroup.ForgeWin = "ForgeWin";
    /**历练 */
    UIGroup.LiLianWin = "LiLianWin";
    /**技能 */
    UIGroup.SkillWin = "SkillWin";
    /**人物 */
    UIGroup.RoleWin = "RoleWin";
    /**神羽 */
    UIGroup.GodWingWin = "GodWingWin";
    /**特戒 */
    UIGroup.FireRingWin = "FireRingWin";
    /**神装 */
    UIGroup.AdvanEquipWin = "AdvanEquipWin";
    /**传世 */
    UIGroup.HeirloomWin = "HeirloomWin";
    /**宝物 */
    UIGroup.TreasureWin = "TreasureWin";
    /**战纹 */
    UIGroup.RuneWin = "RuneWin";
    /**印记Tisp */
    UIGroup.LyMarkSkillTipsWin = "LyMarkSkillTipsWin";
    /**Boss血条 */
    UIGroup.BossBlood = "BossBlood";
    /**王者争霸 */
    UIGroup.LadderChallengeWin = "LadderChallengeWin";
    /**王者争霸结算 */
    UIGroup.LadderResultWin = "LadderResultWin";
    /**守护神剑 */
    UIGroup.GuardGodWeaponUI = "GuardGodWeaponUI";
    /**结算 */
    UIGroup.ResultWin = "ResultWin";
    /**限时活动开启提示 */
    UIGroup.LimitStartTips = "LimitStartTips";
    /**角色开放 */
    UIGroup.OpenRole = "OpenRole";
    /**跨服副本-巅峰赛季-总面板-16强面板 */
    UIGroup.Sixteen = "Sixteen";
    /**创建角色 */
    UIGroup.CreateRole = "CreateRole";
    /**欢迎界面 */
    UIGroup.WelcomeWin = "WelcomeWin";
    /**首充 */
    UIGroup.FirstRecharge = "FirstRecharge";
    /**激活 */
    UIGroup.Activationtongyong = "Activationtongyong";
    /**引导 */
    UIGroup.TargetWin = "TargetWin";
    /**VIP3麻痹 */
    UIGroup.Vip3MWin = "Vip3MWin";
    /**VIP礼包 */
    UIGroup.VipGiftWin = "VipGiftWin";
    /**特戒 */
    UIGroup.RingInfo = "RingInfo";
    /**图鉴激活 */
    UIGroup.BookUpWin = "BookUpWin";
    /**升级提示 */
    UIGroup.LevelUpWayWin = "LevelUpWayWin";
    /**NPC头衔 */
    UIGroup.MineNpcHead = "MineNpcHead";
    /**城内 */
    UIGroup.CityFun = "CityFun";
    /**兵魂 */
    UIGroup.WeaponPanel = "WeaponPanel";
    /**兵魂激活 */
    UIGroup.WeaponSoulBreak = "WeaponSoulBreak";
    /**转生排行榜 */
    UIGroup.OSARankTips = "OSARankTips";
    /**帮战UI */
    UIGroup.GuildWarUi = "GuildWarUi";
    /**帮战红包 */
    UIGroup.RedBagWin = "RedBagWin";
    /**送花 */
    UIGroup.FlowerUseTips = "FlowerUseTips";
    /**注魂 */
    UIGroup.SamsaraSoul = "SamsaraSoul";
    /**血战比奇UI */
    UIGroup.BattleWin = "BattleWin";
    /**神兽守护强化 */
    UIGroup.ShenshouForgeWin = "ShenshouForgeWin";
    /**屏蔽 */
    UIGroup.ShieldWin = "ShieldWin";
    /**跨服采集 */
    UIGroup.Collect = "Collect";
    /**合服寻宝 */
    UIGroup.HefuXunbao = "HefuXunbao";
    /**传送点 */
    UIGroup.TransferName = "TransferName";
    return UIGroup;
}());
__reflect(UIGroup.prototype, "UIGroup");
//# sourceMappingURL=UIGroup.js.map