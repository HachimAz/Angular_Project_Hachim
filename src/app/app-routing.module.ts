import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogFormComponent } from './Public/log-form/log-form.component';
import { LoginComponent } from './Public/login/login.component';
import { DashboardComponent } from './Private/dashboard/dashboard.component';
import { AuthGuard } from './utils/auth.guard';
import { PlayersComponent } from './Public/players/players.component';
import { DetailsPlayerComponent } from './Public/details-player/details-player.component';
import { LayoutComponent } from './Public/layout/layout.component';
import { NewArticleComponent } from './Private/new-article/new-article.component';
import { PlayerControlComponent } from './Private/player-control/player-control.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'player/:id', component: DetailsPlayerComponent },
    ],
  },

  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'addPlayer', component: NewArticleComponent },
      { path: 'playersControl', component: PlayerControlComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
