import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { RpgGameService } from './services/rpgGame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RpgGameService]
})
export class AppComponent {
  response = "";

  constructor(private http: HttpClient,
              private rpgGameService: RpgGameService ) { }

  onSend() {
    let numberRpsSelected: number = 1;
    this.rpgGameService.playGame(numberRpsSelected)
      .subscribe( data => {
        console.log(data);
      })
  }
}
