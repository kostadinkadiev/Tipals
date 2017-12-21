import { Game } from '../_models/game';

export class League {
    Name: string;
    Games: Array<Game>;
    
    constructor(theName: string, theGames: Array<Game>) 
        { 
            this.Name = theName; 
            this.Games = theGames;
        }
}