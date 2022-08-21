import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  URL_LEAGUES = environment.apiUrl + "/v1/leagues/by-name-id"

  constructor(
    private http: HttpClient
  ) { }

  getByNameId(nameId: string) {
    return this.http.get(this.URL_LEAGUES + "/" + nameId)
      .pipe(map((resp: any) => {
        return resp.leagues;
      }));
  }
}
