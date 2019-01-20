import {User} from '../user/user.model';

export class Game {
  public id: number;
  public name: string;
  public description: string;
  public picUrl: string;
  public gameConfig: string;
  public author: User;

  constructor(id: number, name: string, description: string, picUrl: string, gameConfig: string, author: User) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.picUrl = picUrl;
    this.gameConfig = gameConfig;
    this.author = author;
  }
}
