import { Component, Input } from '@angular/core';
import { Player } from 'src/app/Modele/Player';
import { PlayerService } from 'src/app/Service/player.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() player: Player = {
    id: 0,
    Last_Name: '',
    First_Name: '',
    Current_Team: '',
    Match_played: 0,
    Career: '',
    image: '',
    poste: '',
    taille: 0,
  };

  constructor(private playerService: PlayerService) {}
  deletePlayer(id: number) {
    this.playerService
      .deletePlayer(id)
      .subscribe(() => this.playerService.getTable());
  }
}
