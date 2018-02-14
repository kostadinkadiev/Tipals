import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Match, Bets, Choice, Game, League } from '../_models/index';
import { UserService, MatchesService, TicketService, clickedGame, activateHeader } from '../_services/index';
import { HeaderComponent } from './header.component';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    json: any;
    Leagues = new Array<League>();
    currentUser: User;
    users: User[] = [];
    matches = new Array<Match>();
    leagues = new Array<string>();
    index: number;

    constructor(private activateHeader: activateHeader, private clickedGame: clickedGame, private ticketService: TicketService, private userService: UserService, private route: ActivatedRoute, private router: Router, private matchesService: MatchesService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    ngOnInit() {
        this.loadAllUsers();

        this.json = this.ticketService.getJSON();
        this.json.subscribe((someArray: any[]) => {
            this.Leagues = someArray;
        });
        this.activateHeader.setLink(this.router.url);
        
        setTimeout(() => {
            this.shrink("","League");
          }, 7000);

    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }


    leagueClick(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-theme-d1";
            x.previousElementSibling.firstElementChild.className =
                x.previousElementSibling.firstElementChild.className.replace(" fa-plus", " fa-minus");
            this.shrink(id, "Game");
        } else {
            x.className = x.className.replace("w3-show", "");
            x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-theme-d1", "");
            x.previousElementSibling.firstElementChild.className =
                x.previousElementSibling.firstElementChild.className.replace(" fa-minus", " fa-plus");
        }
    }

    gameClick(clickedGame) {
        this.router.navigate(['./matchDetails/']);
        this.clickedGame.setClickedGame(clickedGame);

        this.activateHeader.setLink("/matchDetails");

    }
    shrink(id, type) {
        var textButtons = document.getElementsByClassName(id+type);

        for (var i = 0; i < textButtons.length; i++) {
    
          var textButton = <HTMLElement>textButtons[i];

          if(textButton.style.display=='none'){
              textButton.style.display = 'block';
          }
          var margin = 15;
          if(id.length == 0){
              margin = 40;
          }
          // Loop through all of the dynamic divs within the button
          var textDiv = <HTMLElement>textButton.getElementsByClassName(type+"Div")[0];

          while ((textDiv.clientWidth + margin) > textButton.clientWidth) {

            var style = window.getComputedStyle(textDiv, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);
    
            textDiv.style.fontSize = (fontSize - 1) + 'px';
          }
        }
      }
}