export class Tip {
    Name: string;
    Description: string;
    Tips: string;
    Odd: number;
    constructor(theName: string, theDescription: string, theTip: string, theOdd: number) 
        { 
            this.Name = theName; 
            this.Description = theDescription;
            this.Tips = theTip;
            this.Odd = theOdd;
        }
}