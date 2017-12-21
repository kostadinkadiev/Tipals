import { Tip } from '../_models/tip';
import { Data } from '@angular/router/src/config';
import { Time } from '@angular/common/src/i18n/locale_data_api';

export class Game {
    Date: Date;
    Time: Time;
    Home: string;
    Away: string;
    Tips: Array<Tip>;
    
    constructor(theDate: Date, theTime: Time, theHome: string, theAway: string, theTips: Array<Tip>) 
        { 
            this.Date = theDate; 
            this.Time = theTime;
            this.Home = theHome; 
            this.Away = theAway;
            this.Tips = theTips;
        }
}