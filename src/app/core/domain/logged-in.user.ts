export class LoggedInUser {
    public id: string;
    public access_token: string;
    public userName: string;
    public fullName: string;
    public email: string;
    public avatar: string;
    constructor(access_token: string, userName: string, fullName: string, email: string, avatar: string) {
        this.access_token = access_token;
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.avatar = avatar;
    }
}