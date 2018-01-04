import { Data } from '@angular/router/src/config';
import { ticketGame } from './ticketGame'

export class Ticket {
    ticketDate: Date;
    userId: number;
    userEmail: string;
    games: Array<ticketGame>;
    
    constructor(ticketDate: Date, userId: number, userEmail: string, games: Array<ticketGame>) 
        { 
            this.ticketDate = ticketDate; 
            this.userId = userId;
            this.userEmail = userEmail; 
            this.games = games;
        }
}