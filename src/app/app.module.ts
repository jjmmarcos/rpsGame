import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RpgGameService } from './services/rpgGame.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RpsGameComponent } from './pages/rpsGame/rpsGame.component';
import { DetailComponent } from './pages/detail/detail.component';
import{ HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    RpsGameComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    RpgGameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
