import { Injectable } from '@angular/core';
import { Ticket, Game } from '../_models/index';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class TicketService {

  constructor(private http: Http) { }

  private getTickets() {

    let date01 = new Date(2017, 1, 31, 19, 45, 0)

    let game00 = new Game("Middlesbrough - West Bromwich Albion", "Half-Time Result", 6.00, "%2%", date01, true);
    let game01 = new Game("Arsenal - Watford", "Correct Score", 13, "2 - 1", date01, true);
    let game02 = new Game("Nice - Caen", "Total Goals", 2.25, "4+", date01, false);
    let game03 = new Game("Marseille - Angers", "Handicap", 8, "Draw (%1% -4)", date01, true);
    let games0: Array<Game> = [game00, game01, game02, game03];
    let games1: Array<Game> = [game00, game01, game03]
    let games2: Array<Game> = [game01, game02, game03, game00];

    let ticket0 = new Ticket(0, 1, 100, games0);

    let ticket1 = new Ticket(1, 3, 50, games1);

    let ticket2 = new Ticket(2, 4, 150, games2);

    let ticket3 = new Ticket(3, 5, 150, games2);


    return[ticket0, ticket1, ticket2, ticket3];
  }

   getAll() {
        return this.getTickets();
    }
}
