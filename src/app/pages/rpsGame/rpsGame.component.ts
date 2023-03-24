import { Component, OnInit } from '@angular/core';
import { RpsServerResponse } from 'src/app/interfaces/rpsServerResponse.interface';
import { RpsGameService } from 'src/app/services/rpsGame.service';

@Component({
  selector: 'app-rpsGame',
  templateUrl: './rpsGame.component.html',
  styleUrls: ['./rpsGame.component.css']
})
export class RpsGameComponent implements OnInit {
  leftImg: string = 'wait';
  rightImg: string = 'wait';
  n: number = 0;
  result: string = '';
  private _gameSaved: any[] = [];

  get gameSaved() {
    return [...this._gameSaved];
  }

  constructor(private rpsGameService: RpsGameService) {
    this._gameSaved = JSON.parse( localStorage.getItem('rpsGame')! ) || [];
  }

  ngOnInit() {
  }

  rpsPlay() {
    this.randomTry();
    this.rpsGameService.playGame(this.n)
      .subscribe((res: RpsServerResponse) => {
        console.log(res);
        this.result = res.gameResult;
        this.leftImg = this.numberToSelection(this.n);
        this.rightImg = res.serverSelection;
      })
  }

  randomTry(): number {    
    this.n = Math.floor(Math.random() * 3) + 1; 
    console.log(this.numberToSelection(this.n));
    return this.n;
  }

  numberToSelection(numberOfSelection: number): string {
    switch (numberOfSelection) {
      case 1:
          return 'rock';
      case 2:
          return 'paper';
      case 3:
          return 'scissors';
      default:
          return '';
    }
  }

  saveGame() {

  }

  getGameSaved() {

  }
}
