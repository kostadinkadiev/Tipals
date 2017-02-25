import { Component, OnInit } from '@angular/core';
import { Match, Bets, Choice } from '../_models';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchesService } from '../_services/index';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html'
})
export class NewTicketComponent implements OnInit {

  choiceGame: Choice = new Choice('', 0, 0);
  choiceId: number;
  matchGame: Match;
  matchID: number;
  router: Router;

  constructor(private matchesService: MatchesService, router: Router) {
    this.router = router;
    this.choiceId = 0;

    this.matchesService.pushedMatch.subscribe(
      data => {
        console.log("dobivam match vo NewTicketComponent");
        this.matchGame = data;
        console.log(this.matchGame);
      });

  }

  ngOnInit() {
    
    this.matchesService.pushedChoice.subscribe(
       (data) => window['choiceId'] = data
    );
  }

  kopche() {
    console.log("od kopche");
    console.log(window['choiceId']);
    console.log(this.matchGame);
  }

  matches = this.matchesService.getAll();

  onClick(match) {
    this.matchID = match.id;
    this.router.navigate(['home/match/' + match.id]);
  }
}



