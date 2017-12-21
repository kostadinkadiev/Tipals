import { Component, OnInit } from '@angular/core';
import { Game_old, Match } from '../_models/index';
import { Router } from '@angular/router';
import { MatchesService } from '../_services/index';
import { FilterBetsPipe } from './filter-bets.pipe';
//import * as $ from 'jquery';
//declare var $: any;

@Component({
  selector: 'app-bilten',
  templateUrl: './bilten.component.html',
  styleUrls: ['./bilten.component.css']
})
export class BiltenComponent implements OnInit {

  selectedGame: Game_old;
  matches = new Array<Match>();
  leagues = new Array<string>();
  index: number;
  leagueMatches = new Array<Match>();

  constructor(private matchesService: MatchesService) { }

  ngOnInit() {

    this.matches = this.matchesService.getAll();

    for (var i = 0; i < this.matches.length; i++) {
      this.index = this.leagues.findIndex(e => e == this.matches[i].leagueName);
      if (this.index == -1)
        this.leagues.push(this.matches[i].leagueName);

    }

    this.leagueMatches = [];
    for (var i = 0; i < this.matches.length; i++) {
      if (this.matches[i].leagueName == this.leagues[0]) {
        this.leagueMatches.push(this.matches[i]);
      }
    }

  }

  onSend(match, choice, bet) {
    this.selectedGame = new Game_old(match.name, choice.name, choice.odd, bet.name, match.startDate, false);
  }

  selectTab(tab, selectedTab) {

    this.leagueMatches = [];
    for (var i = 0; i < this.matches.length; i++) {
      if (this.matches[i].leagueName == tab) {
        this.leagueMatches.push(this.matches[i]);
      }
    }

    var all = document.getElementsByClassName("active");
    for (var i = 0; i < all.length; i++)
      all[i].className = "";

    var d = document.getElementById(selectedTab.id);
    d.className = "active";
  }


}
