import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { rpsResult } from '../interfaces/rpsResult.interface';

@Injectable({
  providedIn: 'root'
})
export class RpgGameService {
  url: string = 'http://localhost/rpsBack/rpsBack.php'
  constructor(private httpClient: HttpClient) { }

  playGame(numberRpsSelected: number): Observable<rpsResult> {
    const params = new HttpParams()
      .set('numberRpsSelected', numberRpsSelected);
    return this.httpClient.get<rpsResult>(this.url, { params });
  }
}
