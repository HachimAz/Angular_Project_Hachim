import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/Modele/Player';
import { PlayerService } from 'src/app/Service/player.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  players: Observable<Player[]> = new Observable();

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.players = this.playerService.getTable();
  }

  maFonction(): void {
    this.players.subscribe((data: any) => console.log(data));
  }
}
