import { Bets } from '../_models/bets';

export class Match {
    name: string;
    id: number;
    startDate: Date;
    leagueName: string;
    leagueId: number;
    bets: Array<Bets>;
    constructor(theName: string, theID: number, theStartDate: Date, theLeagueName: string, theLeagueId: number, theBets: Array<Bets>) 
        { 
            this.name = theName; 
            this.id = theID; 
            this.startDate = theStartDate; 
            this.leagueName = theLeagueName;
            this.leagueId = theLeagueId;
            this.bets = theBets;
        }
}