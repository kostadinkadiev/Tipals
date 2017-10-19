export class Game {
    matchName: string;
    betName: string;
    choiceOdd: number;
    choiceName: string;
    startDate: Date;
    isWin: boolean;
    //  constructor(matchName: string, betName: string, choiceOdd: number, choiceName: string, startDate: Date) 
    //     { 
    //         this.matchName = matchName; 
    //         this.betName = betName;
    //         this.choiceOdd = choiceOdd;
    //         this.choiceName = choiceName;
    //         this.startDate = startDate;
    //     }

        constructor(matchName: string, betName: string, choiceOdd: number, choiceName: string, startDate: Date, isWin: boolean) 
        { 
            this.matchName = matchName; 
            this.betName = betName;
            this.choiceOdd = choiceOdd;
            this.choiceName = choiceName;
            this.startDate = startDate;
            this.isWin = isWin;
        }
  }