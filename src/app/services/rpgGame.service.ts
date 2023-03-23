import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RpgGameService {
  url: string = 'http://localhost/rpsBack/rpsBack.php?numberRpsSelected=1'
  constructor(private httpClient: HttpClient) { }

  playGame(numberRpsSelected: number): Observable<any> {
    const params = new HttpParams()
      .set('numberRpsSelected', 1);
    return this.httpClient.get<any>(this.url, { params });
  }
}
