import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Match, Choice, Game_old } from '../_models/index';
import { MatchesService } from '../_services/index';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  games = new Array<Game_old>();
  totalCoeficient = 1;
  index: number;
  //flag: boolean;
  game: Game_old;

  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.matchesService.pushedGame.subscribe(
      data => this.addGame(data)
    );
  }

  // ngOnChanges(changes: SimpleChanges): void {

  //   if (!this.game)
  //     return;

  //   this.addGame(this.game);
  //   this.totalCoeficient = this.calculateTotalCoeficient();
  // }

  clickDa() {
    this.games[this.index] = this.game;
    this.totalCoeficient = this.calculateTotalCoeficient();
    document.getElementById('id01').style.display = 'none'
  }

  clickNe() {
    document.getElementById('id01').style.display = 'none'
  }

  addGame(game) {
    this.index = this.games.findIndex(e => e.matchName == game.matchName);
    if (this.index == -1) {
      this.games.push(game);
    }
    else{

      //   if (confirm("Utakmicta ti e veke uplatena sakash li da ja zamenish?")) {
      //     this.games[index] = game;
      //   }
      //   this.totalCoeficient = this.calculateTotalCoeficient();
      this.game = game;
      document.getElementById('id01').style.display = 'block'
    }
    
    this.totalCoeficient = this.calculateTotalCoeficient();
    
  }

  calculateTotalCoeficient() {
    var totalCoeficient = 1;
    for (var i = 0; i < this.games.length; i++) {
      totalCoeficient = totalCoeficient * this.games[i].choiceOdd;
    }
    return totalCoeficient;
  }

  delete(index) {
    this.games.splice(index, 1);
    this.totalCoeficient = this.calculateTotalCoeficient();
  }

  deleteAll() {
    this.games = [];
  }
  saveTicket(money){
    
  }

}



