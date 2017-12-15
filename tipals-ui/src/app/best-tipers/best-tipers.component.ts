import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User, Match, Bets, Choice, Game } from '../_models/index';
import { UserService, MatchesService } from '../_services/index';

@Component({
  selector: 'app-best-tipers',
  templateUrl: './best-tipers.component.html',
  styleUrls: ['./best-tipers.component.css']
})
export class BestTipersComponent implements OnInit {

  currentUser: User;
  users: User[] = [];
  games = new Array<Game>();
  totalCoeficient = 1;
  @Input() game: Game;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

  userClick(userID) {
    this.router.navigate(['./userDetails/' + userID]);
  }

  followUser(userID) {
    this.currentUser.followUsersId.push(userID);
    //this.userService.update(this.currentUser);
  }

  isFollowing(user){
    if(this.currentUser.followUsersId.indexOf(user.id) !== -1) {
      return true;
    }

  }


}
