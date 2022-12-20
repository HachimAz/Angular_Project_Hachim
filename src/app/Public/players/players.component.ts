import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/Modele/Player';
import { PlayerService } from 'src/app/Service/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: Observable<Player[]> = new Observable();

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.players = this.playerService.getTable();
  }

  maFonction(): void {
    this.players.subscribe((data: any) => console.log(data));
  }
}
