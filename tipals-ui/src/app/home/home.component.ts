import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { HeaderComponent } from './header.component';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { MatchesService } from '../_services/index';

@Component({
    //moduleId: module.id,
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    currentUser: User;
    users: User[] = [];
    choiceId: number;

    constructor(private matchesService: MatchesService, private userService: UserService, private route: ActivatedRoute, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        
        this.matchesService.pushedChoice.subscribe(
            data => this.choiceId = data
    );

    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}