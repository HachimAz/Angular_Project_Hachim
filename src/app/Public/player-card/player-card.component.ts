import { Component, Input } from '@angular/core';
import { Player } from 'src/app/Modele/Player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent {
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
}
