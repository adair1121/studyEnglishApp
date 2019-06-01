/**
 * 共用方法
 */
class GlobalFun {
	public constructor() {
	}
	public static getOption(key:string):string {
        if (window.location) {
            let search = location.search;
            if (search == "") {
                return "";
            }
            search = search.slice(1);
            let searchArr = search.split("&");
            let length = searchArr.length;
            for (let i:number = 0; i < length; i++) {
                let str = searchArr[i];
                let arr = str.split("=");
                if (arr[0] == key) {
                    return arr[1];
                }
            }
        }
        return "";
    } 
	/**
	 * 检测货币是否充足
	 * @param num 货币数量
	 * @param moneyType 货币类型，参考枚举：MoneyConst，默认元宝
	 * @param noTips 不足时的提示
	 * @param backFun 不足时确认回调方法，部分地方会用到
	 */
	// public static checkMoney(num: number, moneyType: MoneyConst = MoneyConst.yuanbao, noTips: string = ``, backFun?: Function): boolean {
	// 	switch (moneyType) {
	// 		case MoneyConst.gold:
	// 			if (Actor.gold >= num) return true;
	// 			if (noTips == "") noTips = LanguageCfg.getLanguage(1207);
	// 			UserTips.ins().showTips(noTips);
	// 			break;
	// 		case MoneyConst.yuanbao:
	// 			if (Actor.yb >= num) return true;
	// 			if (noTips == "") noTips = LanguageCfg.getLanguage(1208);;
	// 			UserTips.ins().showTips(noTips);

				
	// 			if (!KFServerSys.ins().isKF) {
					
	// 				//不足提示充值
	// 				let w = WarnWin.show(LanguageCfg.getLanguage(1208), null, null, () => {
	// 					let rdata: RechargeData = Recharge.ins().getRechargeData(0);
	// 					if (!rdata || rdata.num != 2) {
	// 						ViewManager.ins().open(Recharge1Win);
	// 					} else {
	// 						ViewManager.ins().open(ChargeFirstWin);
	// 					}
	// 					if (backFun && typeof backFun == "function")
	// 						backFun();
	// 				});
	// 				w.setBtnLabel(LanguageCfg.getLanguage(1209), LanguageCfg.getLanguage(1111));
	// 			}
	// 			break;
	// 		default:
	// 			debug.log(`检查货币类型不对，请检查=`, moneyType);
	// 			return false;
	// 	}

	// 	return false;
	// }
}