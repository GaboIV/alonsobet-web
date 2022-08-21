import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL_CATEGORIES = environment.apiUrl + "/v1/categories"

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get(this.URL_CATEGORIES)
      .pipe(map((resp: any) => {
        return resp.categories;
      }));
  }
}
