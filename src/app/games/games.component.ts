import { Component, OnInit } from '@angular/core';

import {GamesService} from '../game/games.service';
import {Game} from '../game/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesSrv: GamesService) { }

  ngOnInit() {
    this.gamesSrv.getGames().subscribe((data) => {
      for (const item of data) {
        this.games.push(new Game(item['Id'], item['Name'], item['Description'], item['PicUrl'], item['GameConfig'], null));
      }
      console.log(data);
    });
  }

  handleShowInfo($event) {
    const g = this.games.find((o) => o.id === $event);
    alert('Game Configuration :' + g.gameConfig);
  }

  handlePlayGame() {

  }
}
