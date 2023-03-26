import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RpsGameService } from './services/RpsGameService.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RpsGameComponent } from './pages/rpsGame/rpsGame.component';
import { StadisticsComponent } from './pages/stadistics/stadistics.component';
import{ HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RpsGameComponent,
    StadisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    RpsGameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
