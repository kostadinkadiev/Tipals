import { Component, OnInit } from '@angular/core';
import { Match, Bets, Choice } from '../_models';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchesService } from '../_services/index';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html'
})
export class NewTicketComponent implements OnInit {

  choiceId: number;
  matchID: number;


  constructor(private matchesService: MatchesService, private router: Router) {}

  ngOnInit() {

  }

  matches = this.matchesService.getAll();

  onClick(match) {
    this.matchID = match.id;
    console.log(match);
    console.log(this.matchesService.getById(match.id)[0]);
    window.location.href = 'home/match/' + match.id;

  }
  // onSend(choiceId: number) {
  //   console.log(choiceId);
  //   this.matchesService.pushChoice(choiceId);
    //window.close();
    //console.log("Choice ID:"+this.choiceIdR);
  //}

}



