import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { RegisterComponent } from './register/index';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { BestTipersComponent } from './best-tipers/best-tipers.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent
    ,children: [
      { path: '', redirectTo: 'newTicket', pathMatch: 'full' },
      { path: 'newTicket', component: NewTicketComponent},
      { path: 'BestTipers', component: BestTipersComponent}
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

 export const routing = RouterModule.forRoot(routes);