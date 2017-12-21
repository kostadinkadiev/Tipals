import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchesService } from '../_services/index';
import { Match, Bets, Choice, Game_old } from '../_models/index';
import { Subscription } from "rxjs/Rx";
declare var $: any;

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnDestroy, OnInit {

  private subscription: Subscription;
  id: number;
  match: Match;
  router: Router;
  matches = new Array<Match>();
  selectedGame: Game_old;

  //private value = "dispatcher component value";

  constructor(private activatedRoute: ActivatedRoute, private matchesService: MatchesService, router: Router) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
    this.router = router;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {

    
    //STARI UTAKMICI NA RAKA VNESENI
    // this.matches = this.matchesService.getAll();
  }

  betClick(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d1";
      x.previousElementSibling.firstElementChild .className = 
                x.previousElementSibling.firstElementChild.className.replace(" fa-plus", " fa-minus");
    } else {
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
        x.previousElementSibling.firstElementChild .className = 
                x.previousElementSibling.firstElementChild.className.replace(" fa-minus", " fa-plus");
    }
  }

onSend(match, choice, bet) {
    this.selectedGame = new Game_old(match.name, bet.name, choice.odd, choice.name, match.startDate, false);
    this.matchesService.pushGame(this.selectedGame);
  }

}


