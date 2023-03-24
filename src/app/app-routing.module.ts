import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { RpsGameComponent } from './pages/rpsGame/rpsGame.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

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
    component: StatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
