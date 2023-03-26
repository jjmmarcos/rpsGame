import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RpsServerResponse } from '../interfaces/rpsServerResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class RpsGameService {
  url: string = 'http://localhost/rpsBack/rpsBack.php'
  constructor(private httpClient: HttpClient) { }

  playGame(numberRpsSelected: number): Observable<RpsServerResponse> {
    const params = new HttpParams()
      .set('numberRpsSelected', numberRpsSelected);
    return this.httpClient.get<RpsServerResponse>(this.url, { params });
  }
}
