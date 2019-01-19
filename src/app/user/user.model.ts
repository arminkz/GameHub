export class User {
  public displayName: string;
  public email: string;
  public profilePicUrl: string;

  constructor(name: string, email: string, profilePicUrl: string) {
    this.displayName = name;
    this.email = email;
    this.profilePicUrl = profilePicUrl;
  }
}
