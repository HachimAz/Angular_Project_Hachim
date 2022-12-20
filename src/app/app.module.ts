import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './Public/player-card/player-card.component';
import { LogFormComponent } from './Public/log-form/log-form.component';
import { LoginComponent } from './Public/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Private/dashboard/dashboard.component';
import { AuthGuard } from './utils/auth.guard';
import { PlayersComponent } from './Public/players/players.component';
import { DetailsPlayerComponent } from './Public/details-player/details-player.component';
import { LayoutComponent } from './Public/layout/layout.component';
import { NavbarComponent } from './Public/layout/navbar/navbar.component';
import { FooterComponent } from './Public/layout/footer/footer.component';
import { NewArticleComponent } from './Private/new-article/new-article.component';
import { NavbarBackComponent } from './Private/navbar-back/navbar-back.component';
import { FooterBackComponent } from './Private/footer-back/footer-back.component';
import { CardsComponent } from './Private/cards/cards.component';
import { PlayerControlComponent } from './Private/player-control/player-control.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    LogFormComponent,
    LoginComponent,
    DashboardComponent,
    PlayersComponent,
    DetailsPlayerComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    NewArticleComponent,
    NavbarBackComponent,
    FooterBackComponent,
    CardsComponent,
    PlayerControlComponent,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class AppModule {}
