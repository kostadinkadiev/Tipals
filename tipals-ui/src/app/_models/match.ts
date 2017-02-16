import { Bets } from '../_models/bets';

export class Match {
    name: string;
    id: number;
    startDate: Date;
    bets: Array<Bets>;
    constructor(theName: string, theID: number, theStartDate: Date, theBets: Array<Bets>) 
        { 
            this.name = theName; 
            this.id = theID; 
            this.startDate = theStartDate; 
            this.bets = theBets;
        }
}