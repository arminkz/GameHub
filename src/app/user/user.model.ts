export class User {
  public id: number;
  public name: string;
  public email: string;
  public picUrl: string;
  public role: string;

  constructor(id: number, name: string, email: string, picUrl: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.picUrl = picUrl;
  }
}
