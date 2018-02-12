import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchesService, clickedGame, clickedTip } from '../_services/index';
import { Match, Bets, Choice, Game_old, Game, ticketGame, Tip } from '../_models/index';
import { Subscription } from "rxjs/Rx";
import { elementAt } from 'rxjs/operator/elementAt';
import { groupBy } from 'rxjs/operator/groupBy';
import { Observable } from 'rxjs/Observable';


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
  private Observable: Observable<any>;
  



  constructor(private activatedRoute: ActivatedRoute, private clickedTip: clickedTip, private clickedGame: clickedGame, private router: Router) {

  }

  ngOnDestroy() {

  }

  ngOnInit() {

    //ova se koristi samo za prviot pat da se laodira natprevarot oti subscribe ne raboti za prviot load
    this.theGame = this.clickedGame.getClickedGame();
    if (this.theGame !== undefined) {
      this.tipsResult = this.groupBy(this.theGame.Tips, function (item) {
        return [item.Name];
      })};

    this.clickedGame.eventSetClickedGame.subscribe(
      data => {
        this.theGame = data;
        this.tipsResult = this.groupBy(this.theGame.Tips, function (item) {
          return [item.Name];
        });
        setTimeout(() => {
          this.shrinkMain();
      }, 1000);
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
        x[i].previousElementSibling.firstElementChild.nextElementSibling.className =
          x[i].previousElementSibling.firstElementChild.nextElementSibling.className.replace("fa-plus", "fa-minus");
        this.shrink(id);
      } else {
        x[i].className = x[i].className.replace("w3-show", "w3-hide");
        x[i].previousElementSibling.firstElementChild.nextElementSibling.className =
          x[i].previousElementSibling.firstElementChild.nextElementSibling.className.replace("fa-minus", "fa-plus");
      }

    }

  }

  //SE KORISTI ZA DA SE NAMALI FONTOT NA TIPOT I KOEFICIENTOT ZA DA GI SOBERE VO KOPCHETO
  shrink(id) {
    var textButtons = document.getElementsByClassName(id + id.length + "button");

    var textButtonsLength = textButtons.length;

    // Loop through all of the dynamic buttons on the page
    for (var i = 0; i < textButtonsLength; i++) {

      var textButton = textButtons[i];

      // Loop through all of the dynamic divs within the button
      var textDiv = <HTMLElement>textButton.getElementsByClassName("dynamicDiv")[0];
      var textOdd = <HTMLElement>textButton.getElementsByClassName("dynamicOdd")[0];

      while ((textDiv.clientWidth + textOdd.clientWidth + 15) > textButton.clientWidth) {
        var style = window.getComputedStyle(textDiv, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);

        textDiv.style.fontSize = (fontSize - 1) + 'px';
        textOdd.style.fontSize = (fontSize - 1) + 'px';
      }
    }
  }

  
  shrinkMain() {
    var textButtons = document.getElementsByClassName("mainButton");

    // Loop through all of the dynamic buttons on the page
    for (var i = 0; i < textButtons.length; i++) {

      var textButton = textButtons[i];

      // Loop through all of the dynamic divs within the button
      var textDiv = <HTMLElement>textButton.getElementsByClassName("mainDiv")[0];

      while ((textDiv.clientWidth + 58) > textButton.clientWidth) {
        var style = window.getComputedStyle(textDiv, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);

        textDiv.style.fontSize = (fontSize - 1) + 'px';
      }
    }
  }


  onSend(theGame, Tip) {
    this.selectedGame = new ticketGame(theGame.Date, theGame.Time, theGame.Home, theGame.Away, Tip.Name, Tip.Description, Tip.Choice, Tip.Odd);
    this.clickedTip.setClickedTip(this.selectedGame);
  }

  

}


