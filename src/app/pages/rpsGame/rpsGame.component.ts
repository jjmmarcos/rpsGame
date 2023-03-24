import { Component, OnInit } from '@angular/core';
import { rpsGameResult, RpsServerResponse } from 'src/app/interfaces/rpsServerResponse.interface';
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
  icon: string = '';
  gameSaved: any[] = [];

  constructor(private rpsGameService: RpsGameService) {
    this.gameSaved = JSON.parse( localStorage.getItem('rpsGame')! ) || [];
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
        this.saveGame(res);
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

  saveGame(res: RpsServerResponse) {
    let item: rpsGameResult = {
      playerSelection: this.numberToSelection(this.n),
      rpsServerResponse: res
    };

    if(this.gameSaved.length >= 10) {
      this.gameSaved.splice(0, 0, item); // Add the new item to the first place
      this.gameSaved.pop(); // Remove the last for have always 10 items
    }
      else this.gameSaved.push(item);

    localStorage.setItem('rpsGame', JSON.stringify(this.gameSaved));
  }
}
