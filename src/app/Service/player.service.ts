import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Player } from '../Modele/Player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  players: Player[] = [];

  constructor(private httpClient: HttpClient) {}

  getPlayers(): Player[] {
    return this.players;
  }
  getTopPlayers(): Player[] {
    return this.players.slice(0, 3);
  }

  // getPlayer(id: number): Player | undefined {
  //   return this.players.find((p: Player) => p.id == id);
  // }

  getPlayer(id: number): Observable<Player[]> {
    const headers = new HttpHeaders().set('apikey', environment.api.Key);
    return this.httpClient.get<Player[]>(
      environment.api.URL + 'user?id=eq.' + id,
      { headers: headers }
    );
  }

  getTable(): Observable<Player[]> {
    const headers = new HttpHeaders().set('apikey', environment.api.Key);
    return this.httpClient.get<Player[]>(environment.api.URL + 'user', {
      headers: headers,
    });
  }

  insertPlayer(credentiels: {
    Last_Name?: string | null | undefined;
    First_Name?: string | null | undefined;
    Current_Team?: string | null | undefined;
    Match_played?: number | null | undefined;
    Career?: string | null | undefined;
    image?: string | null | undefined;
    poste?: string | null | undefined;
    taille?: number | null | undefined;
  }): Observable<Player> {
    const headers = new HttpHeaders().set('apikey', environment.api.Key);
    return this.httpClient.post<Player>(
      environment.api.URL + 'user',
      credentiels,
      {
        headers: headers,
      }
    );
  }

  // login(credentiels: {
  //   email?: string | null | undefined;
  //   password?: string | null | undefined;
  // }): Observable<any> {
  //   const headers = new HttpHeaders().set('apikey', environment.api.Key);
  //   return this.httpClient.post(
  //     environment.api.urlAuth + 'token?grant_type=password',
  //     credentiels,
  //     { headers: headers }
  //   );
  // }

  deletePlayer(id: number) {
    const headers = new HttpHeaders().set('apikey', environment.api.Key);
    return this.httpClient.delete(environment.api.URL + 'user?id=eq.' + id, {
      headers: headers,
    });
  }
}
