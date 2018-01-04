import { Injectable, EventEmitter } from '@angular/core';
import { Game } from '../_models/index';

@Injectable()
export class clickedGame {
    eventSetClickedGame = new EventEmitter<Game>();
    constructor() { }

    private theGame: Game;
    setClickedGame(theGame){
        this.theGame = theGame;
        this.eventSetClickedGame.emit(theGame);
    }
     getClickedGame(){
        return this.theGame;
    } 


}