class ConstConfig {
    /**服务器列表分页数量 */
    public static ServerListPageNum: number = 10;
    
    private static jobNames: string[] = ["0", "战士", "法师", "道士"];
    /**获取职业 */
    public static getJobName(index:number): string{
        return this.jobNames[index];
    }
}