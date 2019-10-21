import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './common/material/material.module';

import { ApiService } from './api-service/api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RecomendedComponent } from './recomended/recomended.component';
import { LastFiveShowsSeenComponent } from './last-five-shows-seen/last-five-shows-seen.component';
import { PopularComponent } from './popular/popular.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,
    RecomendedComponent,
    LastFiveShowsSeenComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
