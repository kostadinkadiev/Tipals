export class Choice {
    name: string;
    id: number;
    odd: number;
    constructor(theName: string, theID: number, theOdd: number) 
        { 
            this.name = theName; 
            this.id = theID;
            this.odd = theOdd;
        }
}