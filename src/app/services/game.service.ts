import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  URL_GAMES = environment.apiUrl + "/v1/games/by-league-id"

  constructor(
    private http: HttpClient
  ) { }

  getByLeagueId(leagueId: string) {
    return this.http.get(this.URL_GAMES + "/" + leagueId)
      .pipe(map((resp: any) => {
        return resp.games;
      }));
  }
}
