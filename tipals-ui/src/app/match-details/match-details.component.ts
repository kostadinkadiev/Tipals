import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchesService } from '../_services/index';
import { Match, Bets, Choice } from '../_models/index';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  id: number;
  match: Match;
  router: Router;

  private value = "dispatcher component value";

  constructor(private activatedRoute: ActivatedRoute, private matchesService: MatchesService, router: Router) {
    this.id = activatedRoute.snapshot.params['id'];
    this.router = router;
  }

  ngOnInit() {
    this.match = this.matchesService.getById(this.id);
  }

  onSend(match, choice) {
    this.matchesService.pushMatch(match);
    this.matchesService.pushChoice(choice);
    this.router.navigate(['home/newTicket']);
  }

}


