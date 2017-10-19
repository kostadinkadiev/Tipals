import { Game } from '../_models';

export class Ticket {
    id: number;
    bet: number;
    totalCoeficient: number;
    isWin: boolean;
    games: Array<Game>;
    constructor(id: number, bet: number, games: Array<Game>) 
        { 
            this.id = id;
            this.bet = bet;
            this.totalCoeficient = 1;
            this.games = games;
            this.isWin = true;
            for(let i = 0; i < games.length; i++){
                this.totalCoeficient *= games[i].choiceOdd;
                if(!games[i].isWin)
                    this.isWin = false;
            }
        }


}