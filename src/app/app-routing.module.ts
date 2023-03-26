import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpsGameComponent } from './pages/rpsGame/rpsGame.component';
import { StadisticsComponent } from './pages/stadistics/stadistics.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: RpsGameComponent
  },
  {
    path: 'stadistics',
    component: StadisticsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
