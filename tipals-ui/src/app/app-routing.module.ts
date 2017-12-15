import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { RegisterComponent } from './register/index';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { NewTicketComponent, BiltenComponent } from './new-ticket';
import { BestTipersComponent } from './best-tipers';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: HomeComponent
    ,children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'newTicket', component: BiltenComponent },
      { path: 'bestTipers', component: BestTipersComponent },
      { path: 'home', component: TimelineComponent },
      { path: 'buyTickets', component: BuyTicketsComponent },
      { path: 'matchDetails/:id', component: MatchDetailsComponent },
      { path: 'userDetails/:id', component: UserDetailsComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

 export const routing = RouterModule.forRoot(routes);