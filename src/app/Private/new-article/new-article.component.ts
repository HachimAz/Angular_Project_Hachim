import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/Service/player.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent {
  insertForm = new FormGroup({
    Last_Name: new FormControl('', Validators.required),
    First_Name: new FormControl('', Validators.required),
    Current_Team: new FormControl('', Validators.required),
    Match_played: new FormControl(0, Validators.required),
    Career: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    poste: new FormControl('', Validators.required),
    taille: new FormControl(0, Validators.required),
  });

  constructor(private playerService: PlayerService, private router: Router) {}

  onSubmit() {
    console.log(this.insertForm.value);
    let credentials = { ...this.insertForm.value };
    this.playerService.insertPlayer(credentials).subscribe({
      next: (data: any) => {
        console.log(data);
        this.playerService.getTable();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
