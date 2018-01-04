import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { UserService, TicketService } from '../_services/index';
import { Ticket_Old, User } from '../_models';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnDestroy, OnInit {

  private subscription: Subscription;
  router: Router;
  userId: number;  
  user: User;
  tickets = new Array<Ticket_Old>();
  currentUser: User;

  constructor(private ticketService: TicketService, private userService: UserService, private activatedRoute: ActivatedRoute, router: Router) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.userId = param['id']
    );
    this.router = router;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.getUser(this.userId);
    this.tickets = this.ticketService.getAll();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getUser(id) {
    this.userService.getById(id).subscribe(user => { this.user = user; });
  }

  }

    
    

