import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Game} from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }
  @Input() game: Game;
  @Output() ShowInfo: EventEmitter<any> = new EventEmitter();
  @Output() PlayGame: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onInfoClicked() {
    this.ShowInfo.emit(this.game.id);
  }

  onPlayGame() {
    this.PlayGame.emit(this.game.id);
  }

}
