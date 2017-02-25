import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Match, Choice, Bets } from '../_models/index';

@Injectable()
export class MatchesService {

    private static _emitters: { [ID: string]: EventEmitter<any> } = {};

    public pushedMatch: EventEmitter<Match> = new EventEmitter<Match>();
    public pushedChoice: EventEmitter<number> = new EventEmitter<number>();

    pushChoice(choice: Choice) {
        this.pushedChoice.emit(choice.id);
    }
    pushMatch(match: Match) {
        this.pushedMatch.emit(match);
    }

    constructor(private http: Http) { }


    getAll() {
        return this.getMatches();
    }

    getById(id: number) {
        return this.getMatches().find(
            match => match.id == id);
    }

    private getMatches() {

        let choice01 = new Choice("%1% -2", 197743560, 12.50);
        let choice02 = new Choice("Draw (%1% -2)", 197743565, 7.25);
        let choice03 = new Choice("%2% +2", 197743570, 1.12);
        let choiceArray_0: Array<Choice> = [choice01, choice02, choice03];

        let choice04 = new Choice("0 - 1", 242638652, 5.25);
        let choice05 = new Choice("2 - 3", 242638657, 2.10);
        let choice06 = new Choice("4+", 242638662, 2.25);
        let choiceArray_01: Array<Choice> = [choice04, choice05, choice06, choice04];

        let bets01 = new Bets("Ftb_23", "Handicap", 27172507, choiceArray_0);
        let bets02 = new Bets("Ftb_Tgl", "Total Goals", 32128731, choiceArray_01);
        let betsArray_0: Array<Bets> = [bets01, bets02, bets01, bets02, bets01, bets02, bets01, bets02, bets01, bets02, bets01, bets02, bets01, bets02];

        let date01 = new Date(2017, 1, 31, 19, 45, 0)
        let match01 = new Match("Middlesbrough - West Bromwich Albion", 1181400, date01, betsArray_0);

        let choice11 = new Choice("%1% -5", 197771920, 17.00);
        let choice12 = new Choice("Draw (%1% -5)", 197771925, 11.50);
        let choice13 = new Choice("%2% +5", 197771932, 1.04);
        let choiceArray_1: Array<Choice> = [choice11, choice12, choice13];

        let bets11 = new Bets("Ftb_23", "Handicap", 27176269, choiceArray_1);
        let betsArray_1: Array<Bets> = [bets11];

        let date02 = new Date(2017, 1, 31, 19, 45, 0);
        let match02 = new Match("Arsenal - Watford", 1181419, date02, betsArray_1)

        return [match01, match02];
    }

}