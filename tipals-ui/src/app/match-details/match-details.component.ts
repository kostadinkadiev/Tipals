import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchesService } from '../_services/index';
import { Match, Bets, Choice } from '../_models/index';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  id: number;
  match: Match;
  choiceIdR: number;

  constructor(private activatedRoute: ActivatedRoute, private matchesService: MatchesService) { 
    this.id = activatedRoute.snapshot.params['id'];    
  }
 
  ngOnInit() {
    this.match = this.matchesService.getById(this.id);

    // this.matchesService.pushedChoice.subscribe(
    //   data => this.choiceIdR = data
    // );
    
  }

  onSend(choiceId: number){
  console.log(choiceId);
  this.matchesService.pushChoice(choiceId);
  window.location.href = 'home/newTicket';
  //window.close();
  //console.log("Choice ID:"+this.choiceIdR);
}

}


