import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { RegisterComponent } from './register/index';
import { UserService, AlertService, AuthenticationService, MatchesService, TicketService, clickedGame, clickedTip, activateHeader } from './_services/index';
import { routing } from './app-routing.module';
import { LoginComponent } from './login/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { EqualValidator } from './register/equal-validator';
import { HeaderComponent } from './home/header.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { BestTipersComponent } from './best-tipers/best-tipers.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { BiltenComponent } from './new-ticket/bilten.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { FilterBetsPipe } from './new-ticket/filter-bets.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    EqualValidator,
    HeaderComponent,
    NewTicketComponent,
    BestTipersComponent,
    MatchDetailsComponent,
    BiltenComponent,
    TimelineComponent,
    BuyTicketsComponent,
    FilterBetsPipe,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserService,
    AlertService,
    AuthGuard,
    AuthenticationService,
    MatchesService,
    TicketService,
    clickedGame,
    clickedTip,
    activateHeader,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
