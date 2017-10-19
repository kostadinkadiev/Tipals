import { Component, OnInit } from '@angular/core';
import { TicketService } from '../_services/index';
import { Ticket, Game } from '../_models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tickets = new Array<Ticket>();

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.tickets = this.ticketService.getAll();
  }

  ShowMore(hiden) {
    var x = document.getElementById(hiden);
      if (x.style.display === 'none')
        x.style.display = 'block';
    }
}
