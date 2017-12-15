import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { TicketService, UserService } from '../_services/index';
import { Ticket, Game, User } from '../_models';
declare var $:JQueryStatic;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  users: User[] = [];
  tickets = new Array<Ticket>();
  showMoreClicked = new Array<boolean>(this.tickets.length);

  constructor(private ticketService: TicketService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadAllUsers();
    this.tickets = this.ticketService.getAll();
    for (var i = 0; i< this.showMoreClicked.length; i++){
      this.showMoreClicked[i] = false;
    }
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

  ShowMore(i) {
    this.showMoreClicked[i] = true;
    }

    userClick(userID) {
      this.router.navigate(['./userDetails/' + userID]);
  }

  }

    
    

