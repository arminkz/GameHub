import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';
import {Game} from './game.model';

@Injectable()
export class GamesService {

  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl + '/api/games/';

  getGames() {
    return this.http.get<Game[]>(this.apiUrl);
  }
}
