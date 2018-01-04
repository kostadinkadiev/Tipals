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

        this.activateHeader.setLink("/matchDetails")
    }

}