import { Component } from '@angular/core';
import { rpsGameResult, RpsServerResponse } from 'src/app/interfaces/rpsServerResponse.interface';
import { RpsGameService } from 'src/app/services/RpsGameService.service';

@Component({
  selector: 'app-rpsGame',
  templateUrl: './rpsGame.component.html',
  styleUrls: ['./rpsGame.component.css']
})
export class RpsGameComponent {
  playerChoice: string = 'wait';
  pcChoice: string = 'wait';
  randomNumber: number = 0;
  result: string = '';
  gameSaved: rpsGameResult[] = [];

  constructor(private rpsGameService: RpsGameService) {
    this.gameSaved = JSON.parse( localStorage.getItem('rpsGame')! ) || [];
  }

  rpsPlay() {
    this.randomTry();
    this.rpsGameService.playGame(this.randomNumber)
      .subscribe((res: RpsServerResponse) => {
        console.log(res);
        this.result = res.gameResult;
        this.playerChoice = this.numberToSelection(this.randomNumber);
        this.pcChoice = res.serverSelection;
        this.saveGame(res);
      })
  }

  reset() {
    localStorage.removeItem('rpsGame');
    this.playerChoice = 'wait';
    this.pcChoice = 'wait';
    this.result = '';
  }

  // Select random choose for player
  randomTry(): number {    
    this.randomNumber = Math.floor(Math.random() * 3) + 1; 
    console.log(this.numberToSelection(this.randomNumber));
    return this.randomNumber;
  }

  // Save game into LocalStorage
  saveGame(res: RpsServerResponse) {
    let item: rpsGameResult = {
      playerSelection: this.numberToSelection(this.randomNumber),
      rpsServerResponse: res
    };

    if(this.gameSaved.length >= 10) {
      this.gameSaved.splice(0, 0, item); // Add the new item to the first place
      this.gameSaved.pop(); // Remove the last for have always 10 items
    }
    else this.gameSaved.push(item);

    localStorage.setItem('rpsGame', JSON.stringify(this.gameSaved));
  }

  // conversion from number to string selection (rock, paper or scissors)
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
}
