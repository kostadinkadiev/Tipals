import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Match, Choice, Bets, Game_old } from '../_models/index';

@Injectable()
export class MatchesService {

    private static _emitters: { [ID: string]: EventEmitter<any> } = {};

    public pushedMatch: EventEmitter<Match> = new EventEmitter<Match>();
    public pushedChoice: EventEmitter<Choice> = new EventEmitter<Choice>();
    public pushedGame: EventEmitter<Game_old> = new EventEmitter<Game_old>();

    pushGame(game: Game_old) {
        this.pushedGame.emit(game);
    }
    pushChoice(choice: Choice) {
        this.pushedChoice.emit(choice);
    }
    pushMatch(match: Match) {
        this.pushedMatch.emit(match);
    }

    constructor(private http: Http) { }

    getBets() {
        return this.getMatches()[0].bets;
    }

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
        let choice04 = new Choice("%1% -3", 197762980, 7.50);
        let choice05 = new Choice("Draw (%1% -3)", 197762985, 6.00);
        let choice06 = new Choice("%2% +3", 197762990, 1.22);
        let choiceArray_0: Array<Choice> = [choice01, choice02, choice03, choice04, choice05, choice06];

        let choice07 = new Choice("0 - 1", 242638652, 5.25);
        let choice08 = new Choice("2 - 3", 242638657, 2.10);
        let choice09 = new Choice("4+", 242638662, 2.25);
        let choiceArray_01: Array<Choice> = [choice07, choice08, choice09];

        let choice010 = new Choice("%1%", 197763160, 1.92);
        let choice011 = new Choice("%2%", 197763165, 6.00);
        let choice012 = new Choice("Draw", 197763170, 2.35);
        let choiceArray_02: Array<Choice> = [choice010, choice011, choice012];

        let choice013 = new Choice("0", 252177096, 11.50);
        let choice014 = new Choice("1", 252177106, 5.40);
        let choice015 = new Choice("2", 252177116, 3.70);
        let choice016 = new Choice("3", 252177126, 4.00);
        let choice017 = new Choice("4", 252177136, 5.40);
        let choice018 = new Choice("5+", 252177146, 5.40);
        let choiceArray_03: Array<Choice> = [choice013, choice014, choice015, choice016, choice017, choice018];

        let choice019 = new Choice("1 - 0", 252177298, 13.00);
        let choice020 = new Choice("2 - 0", 252177302, 27.00);
        let choice021 = new Choice("2 - 1", 252177306, 13.00);
        let choice022 = new Choice("3 - 0", 252177310, 51.00);
        let choice023 = new Choice("3 - 1", 252177314, 33.00);
        let choice024 = new Choice("3 - 2", 252177318, 31.00);
        let choice025 = new Choice("4 - 0", 252177322, 101.00);
        let choice026 = new Choice("4 - 1", 252177326, 90.00);
        let choice027 = new Choice("4 - 2", 252177330, 81.00);
        let choice028 = new Choice("4 - 3", 252177334, 95.00);
        let choice029 = new Choice("5 - 0", 252177338, 250.00);
        let choice030 = new Choice("5 - 1", 252177342, 175.00);
        let choice031 = new Choice("5 - 2", 252177346, 175.00);
        let choice032 = new Choice("5 - 3", 252177350, 200.00);
        let choice033 = new Choice("5 - 4", 252177354, 250.00);
        let choice034 = new Choice("6 - 0", 252177358, 250.00);
        let choice035 = new Choice("6 - 1", 252177362, 250.00);
        let choice036 = new Choice("6 - 2", 252177366, 250.00);
        let choice037 = new Choice("6 - 3", 252177370, 250.00);
        let choice038 = new Choice("7 - 0", 252177374, 250.00);
        let choice039 = new Choice("7 - 1", 252177378, 250.00);
        let choice040 = new Choice("8 - 0", 252177382, 250.00);
        let choice041 = new Choice("8 - 1", 252177386, 250.00);
        let choice042 = new Choice("0 - 0", 252177398, 11.00);
        let choice043 = new Choice("1 - 1", 252177402, 6.75);
        let choice044 = new Choice("2 - 2", 252177406, 12.00);
        let choice045 = new Choice("3 - 3", 252177410, 36.00);
        let choice046 = new Choice("4 - 4", 252177414, 125.00);
        let choice047 = new Choice("5 - 5", 252177418, 250.00);
        let choice048 = new Choice("0 - 1", 252177422, 7.25);
        let choice049 = new Choice("0 - 2", 252177426, 8.00);
        let choice050 = new Choice("1 - 2", 252177430, 7.50);
        let choice051 = new Choice("0 - 3", 252177434, 12.00);
        let choice052 = new Choice("1 - 3", 252177438, 11.50);
        let choice053 = new Choice("2 - 3", 252177442, 19.00);
        let choice054 = new Choice("0 - 4", 252177446, 24.00);
        let choice055 = new Choice("1 - 4", 252177450, 23.00);
        let choice056 = new Choice("2 - 4", 252177454, 34.00);
        let choice057 = new Choice("3 - 4", 252177458, 60.00);
        let choice058 = new Choice("0 - 5", 252177462, 50.00);
        let choice059 = new Choice("1 - 5", 252177466, 45.00);
        let choice060 = new Choice("2 - 5", 252177470, 61.00);
        let choice061 = new Choice("3 - 5", 252177474, 101.00);
        let choice062 = new Choice("4 - 5", 252177478, 200.00);
        let choice063 = new Choice("0 - 6", 252177482, 95.00);
        let choice064 = new Choice("1 - 6", 252177486, 95.00);
        let choice065 = new Choice("2 - 6", 252177490, 101.00);
        let choice066 = new Choice("3 - 6", 252177494, 200.00);
        let choice067 = new Choice("0 - 7", 252177498, 175.00);
        let choice068 = new Choice("1 - 7", 252177502, 175.00);
        let choice069 = new Choice("0 - 8", 252177506, 250.00);
        let choice070 = new Choice("1 - 8", 252177510, 250.00);
        let choice071 = new Choice("0 - 9", 252177514, 250.00);
        let choice072 = new Choice("0 - 10", 252177518, 250.00);
        let choiceArray_04: Array<Choice> = [choice019, choice020, choice021, choice022, choice023, choice024, choice025, choice026, choice027, choice028, choice029, choice030, choice031, choice032, choice033, choice034, choice035, choice036, choice037, choice038, choice039, choice040, choice041, choice042, choice043, choice044, choice045, choice046, choice047, choice048, choice049, choice050, choice051, choice052, choice053, choice054, choice055, choice056, choice057, choice058, choice059, choice060, choice061, choice062, choice063, choice064, choice065, choice066, choice067, choice068, choice069, choice070, choice071, choice072];

        let bets01 = new Bets("Ftb_23", "Handicap", 27172507, choiceArray_0);
        let bets02 = new Bets("Ftb_Tgl", "Total Goals", 32128731, choiceArray_01);
        let bets03 = new Bets("Ftb_Htr", "Half-Time Result", 27175105, choiceArray_02);
        let bets04 = new Bets("Ftb_Tgl2", "Number of Goals", 33034215, choiceArray_03);
        let bets05 = new Bets("Ftb_Csc", "Correct Score", 33034224, choiceArray_04);
        let betsArray_0: Array<Bets> = [bets01, bets02, bets03, bets04, bets05];

        let date01 = new Date(2017, 1, 31, 19, 45, 0)
        let match01 = new Match("Middlesbrough - West Bromwich Albion", 1181400, date01, "Eng. Premier League", 1, betsArray_0);

        let choice11 = new Choice("%1% -5", 197827235, 20.00);
        let choice12 = new Choice("Draw (%1% -5)", 197827240, 13.00);
        let choice13 = new Choice("%2% +5", 197827247, 1.02);
        let choice14 = new Choice("%1% -4", 197827250, 10.50);
        let choice15 = new Choice("Draw (%1% -4)", 197827255, 8.00);
        let choice16 = new Choice("%2% +4", 197827260, 1.12);
        let choiceArray_1: Array<Choice> = [choice11, choice12, choice13, choice14, choice15, choice16];

        let choice17 = new Choice("0 - 1", 197827500, 4.75);
        let choice18 = new Choice("2 - 3", 197827505, 2.05);
        let choice19 = new Choice("4+", 197827510, 2.40);
        let choiceArray_11: Array<Choice> = [choice17, choice18, choice19];

        let choice110 = new Choice("%1%", 197827445, 1.68);
        let choice111 = new Choice("%2%", 197827450, 8.25);
        let choice112 = new Choice("Draw", 197827455, 2.50);
        let choiceArray_12: Array<Choice> = [choice110, choice111, choice112];

        let bets11 = new Bets("Ftb_23", "Handicap", 27176269, choiceArray_1);
        let bets12 = new Bets("Ftb_Tgl", "Total Goals", 27183807, choiceArray_01);
        let bets13 = new Bets("Ftb_Htr", "Half-Time Result", 27183822, choiceArray_02);
        let betsArray_1: Array<Bets> = [bets11, bets12, bets13, bets04, bets05];

        let date02 = new Date(2017, 1, 31, 19, 45, 0);
        let match02 = new Match("Arsenal - Watford", 1181419, date02, "Eng. Premier League", 1, betsArray_1);

        let date03 = new Date(2017, 3, 10, 18, 0, 0);
        let match03 = new Match("Nice - Caen", 1183074, date03, "French Ligue 1", 2, betsArray_0);

        let date04 = new Date(2017, 3, 10, 19, 45, 0);
        let match04 = new Match("Marseille - Angers", 1336611, date04, "French Ligue 1", 2, betsArray_1);

        return [match01, match02, match03, match04];
    }

}