import { Injectable, EventEmitter } from '@angular/core';
import { ticketGame } from '../_models/index';

@Injectable()
export class clickedTip {
    eventSetClickedTip = new EventEmitter<ticketGame>();
    constructor() { }

    private theGame: ticketGame;
    setClickedTip(theGame){
        this.theGame = theGame;
        this.eventSetClickedTip.emit(theGame);
    }

}