import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../utils/test-model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private url = 'SuperHero';

  constructor(private _http: HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this._http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
}
