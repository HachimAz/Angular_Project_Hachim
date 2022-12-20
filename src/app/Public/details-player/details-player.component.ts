import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/Modele/Player';
import { PlayerService } from 'src/app/Service/player.service';

@Component({
  selector: 'app-details-player',
  templateUrl: './details-player.component.html',
  styleUrls: ['./details-player.component.css'],
})
export class DetailsPlayerComponent {
  player: Player | undefined;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playerService
        .getPlayer(params['id'])
        .subscribe((data: string | any[]) => {
          if (data.length > 0) {
            this.player = data[0];
          }
        });
    });
  }
}
