import { Component, OnInit } from '@angular/core';
import { rpsResult } from 'src/app/interfaces/rpsResult.interface';
import { RpgGameService } from 'src/app/services/rpgGame.service';

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
  constructor(private rpgGameService: RpgGameService) { }

  ngOnInit() {
  }

  rpsPlay() {
    this.randomTry();
    this.rpgGameService.playGame(this.n)
      .subscribe((res: rpsResult) => {
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

  reset() {
    this.n = 0;
    this.leftImg = 'wait';
    this.rightImg = 'wait';
  }
}
