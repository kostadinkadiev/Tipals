import { Component, Input, OnInit, OnChanges, SimpleChanges, } from '@angular/core';
import { ticketGame, Game_old } from '../_models/index';
import { clickedTip } from '../_services/index';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']



})
export class NewTicketComponent implements OnInit {

  ticketGame: ticketGame;
  ticketGames = new Array<ticketGame>();
  totalCoeficient = 1;
  index: number;

  constructor(private clickedTip: clickedTip) { }

  ngOnInit() {

    this.clickedTip.eventSetClickedTip.subscribe(
      data => this.addGame(data));

  }

  addGame(game) {
    this.index = this.ticketGames.findIndex(e => e.gameHome == game.gameHome);
    if (this.index == -1) {
      this.ticketGames.push(game);
      setTimeout(() => {
        this.shrink(game);
      }, 1);
    }
    else {
      this.ticketGame = game;
      document.getElementById('id01').style.display = 'block'
    }
    this.totalCoeficient = this.calculateTotalCoeficient();
  }

  clickDa() {
    this.ticketGames[this.index] = this.ticketGame;
    this.totalCoeficient = this.calculateTotalCoeficient();
    document.getElementById('id01').style.display = 'none'

    setTimeout(() => {
      this.shrink(this.ticketGame);
    }, 1);
  }

  clickNe() {
    document.getElementById('id01').style.display = 'none'
  }

  calculateTotalCoeficient() {
    var totalCoeficient = 1;
    for (var i = 0; i < this.ticketGames.length; i++) {
      totalCoeficient = totalCoeficient * this.ticketGames[i].tipOdd;
    }
    return totalCoeficient;
  }

  delete(index) {
    this.ticketGames.splice(index, 1);
    this.totalCoeficient = this.calculateTotalCoeficient();
  }

  deleteAll() {
    this.ticketGames = [];
  }
  saveTicket(money) {

  }

  shrink(game) {
    var textDiv = document.getElementById(game.gameHome+"-"+game.gameAway);
    console.log(textDiv);
    textDiv.style.display = 'block';
    // Loop through all of the dynamic buttons on the page
/*     for (var i = 0; i < textDivs.length; i++) {

      var textDiv = textDivs[i]; */

      // Loop through all of the dynamic divs within the button
      var textPs = textDiv.getElementsByClassName("dynamicP");
      //var textOdd = <HTMLElement>textButton.getElementsByClassName("dynamicOdd")[0];

      console.log(textPs);
      for (var j = 0; j < textPs.length; j++) {

        var textP = <HTMLElement>textPs[j];

        while (textP.clientHeight > 20) {
          var style = window.getComputedStyle(textP, null).getPropertyValue('font-size');
          var fontSize = parseFloat(style);

          textP.style.fontSize = (fontSize - 1) + 'px';
        }

      }
      
    }
  /* } */

}



