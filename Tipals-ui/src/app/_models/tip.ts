export class Tip {
    Name: string;
    Description: string;
    Choice: string;
    Odd: number;
    constructor(theName: string, theDescription: string, theChoice: string, theOdd: number) 
        { 
            this.Name = theName; 
            this.Description = theDescription;
            this.Choice = theChoice;
            this.Odd = theOdd;
        }
}