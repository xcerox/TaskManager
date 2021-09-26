export class RoleUtils {
    private static roles:any = { "Admin": 1, "": 5, "Employee": 2};


    static getValuePerRole(role:string): number {
        return this.roles[role];
    }
}
