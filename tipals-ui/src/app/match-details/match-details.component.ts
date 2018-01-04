import { Component, OnDestroy, OnChanges, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchesService, clickedGame, clickedTip } from '../_services/index';
import { Match, Bets, Choice, Game_old, Game, ticketGame, Tip } from '../_models/index';
import { Subscription } from "rxjs/Rx";
import { elementAt } from 'rxjs/operator/elementAt';
import { groupBy } from 'rxjs/operator/groupBy';

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
  matches = new Array<Match>();
  selectedGame: ticketGame;
  theGame: Game;
  uniqueTipsName: any;
  tipsResult = new Array<Tip>();



  constructor(private activatedRoute: ActivatedRoute, private clickedTip: clickedTip, private clickedGame: clickedGame, private router: Router) {

  }

  ngOnDestroy() {

  }

  ngOnInit() {

    this.theGame = this.clickedGame.getClickedGame();
    this.clickedGame.eventSetClickedGame.subscribe(
      data => {
      this.theGame = data;
      this.tipsResult = this.groupBy(this.theGame.Tips, function(item)
      {
        return [item.Name];
      });
/*       console.log(this.theGame);*/
      console.log(this.tipsResult); 
      })

  }

  groupBy(array, f) {
    var groups = {};
    array.forEach(function (o) {
      var group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
      return groups[group];
    })
  }

  tipClick(id) {
    var x = document.getElementsByClassName(id + id.length);
    for (var i = 0; i < x.length; i++) {
      if (x[i].className.indexOf("w3-show") == -1) {
        x[i].className = x[i].className.replace("w3-hide", "w3-show");
        x[i].previousElementSibling.firstElementChild.className =
          x[i].previousElementSibling.firstElementChild.className.replace("fa-plus", "fa-minus");
      } else {
        x[i].className = x[i].className.replace("w3-show", "w3-hide");
        x[i].previousElementSibling.firstElementChild.className =
          x[i].previousElementSibling.firstElementChild.className.replace("fa-minus", "fa-plus");
      }

    }
  }

  onSend(theGame, Tip) {
    this.selectedGame = new ticketGame(theGame.Date, theGame.Time, theGame.Home, theGame.Away, Tip.Name, Tip.Description, Tip.Choice, Tip.Odd);
    this.clickedTip.setClickedTip(this.selectedGame);
  }

}


