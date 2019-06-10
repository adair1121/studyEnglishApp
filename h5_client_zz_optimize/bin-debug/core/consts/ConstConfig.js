var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ConstConfig = (function () {
    function ConstConfig() {
    }
    /**获取职业 */
    ConstConfig.getJobName = function (index) {
        return this.jobNames[index];
    };
    /**服务器列表分页数量 */
    ConstConfig.ServerListPageNum = 10;
    ConstConfig.jobNames = ["0", "战士", "法师", "道士"];
    return ConstConfig;
}());
__reflect(ConstConfig.prototype, "ConstConfig");
