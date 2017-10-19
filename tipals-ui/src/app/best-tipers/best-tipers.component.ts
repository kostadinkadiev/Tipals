import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Match, Choice, Game } from '../_models/index';

@Component({
  selector: 'app-best-tipers',
  templateUrl: './best-tipers.component.html',
  styleUrls: ['./best-tipers.component.css']
})
export class BestTipersComponent {


  games = new Array<Game>();
  totalCoeficient = 1;
  @Input() game: Game;

  constructor() { }

}
