import { Choice } from '../_models/choice';

export class Bets {
    code: string;
    name: string;
    id: number;
    
    choice: Array<Choice>;
    constructor(theCode: string, theName: string, theID: number, theChoice: Array<Choice>) 
        { 
            this.code = theCode; 
            this.name = theName;
            this.id = theID; 
            this.choice = theChoice;
        }
}