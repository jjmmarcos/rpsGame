import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { RpsGameService } from './services/RpsGameService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RpsGameService]
})
export class AppComponent { }
