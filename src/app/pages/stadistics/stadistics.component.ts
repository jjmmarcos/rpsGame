import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { rpsGameResult } from 'src/app/interfaces/rpsServerResponse.interface';
@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.css']
})
export class StadisticsComponent implements OnInit {
  gameSaved: rpsGameResult[] = [];
  gameStadistics: number[] = [];
  constructor() {
    this.gameSaved = JSON.parse( localStorage.getItem('rpsGame')! ) || [];
  }

  ngOnInit(){
    console.log(this.gameSaved);
    this.gameStadistics = [this.countOcurrences('You win!'), this.countOcurrences('You lose!'), this.countOcurrences('Tie!')];
    this.showStadistics();
  }

  countOcurrences(value: string): number {
    let count = 0;
    this.gameSaved.filter((v) => (v.rpsServerResponse.gameResult == value && count++));
    return count;
  }

  showStadistics() {
    var ctx = (<any>document.getElementById('stadistics-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["Win", "Lose", "Tie"],
        datasets: [{
              label: "Number of times",
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'                
              ],
              data: this.gameStadistics,
              borderWidth: 1
        }]
       },
       options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        }
      }
    });
  }

}
