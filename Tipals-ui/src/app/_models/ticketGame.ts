import { Data } from '@angular/router/src/config';
import { Time } from '@angular/common/src/i18n/locale_data_api';

export class ticketGame {
    gameDate: Date;
    gameTime: Time;
    gameHome: string;
    gameAway: string;
    tipName: string;
    tipDescription: string;
    tipChoice: string;
    tipOdd: number;
    
    constructor(gameDate: Date, gameTime: Time, gameHome: string, gameAway: string, 
        tipName: string, tipDescription: string, tipChoice: string, tipOdd: number) 
        { 
            this.gameDate = gameDate; 
            this.gameTime = gameTime;
            this.gameHome = gameHome; 
            this.gameAway = gameAway;
            this.tipName = tipName;
            this.tipDescription = tipDescription;
            this.tipChoice = tipChoice;
            this.tipOdd = tipOdd;
        }
}