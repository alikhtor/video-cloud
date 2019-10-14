import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './common/material/material.module';

import { ApiService } from './services/api.service';
import { RecomendedShowService } from './services/recomended-show.service';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { RecomendedShowComponent } from './recomended-show/recomended-show.component';
import { HeaderComponent } from './header/header.component';
import { LastShowsComponent } from './last-shows/last-shows.component';
import { RandomShowsComponent } from './random-shows/random-shows.component';
import { ScheduleComponent } from './schedule/schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,
    RecomendedShowComponent,
    LastShowsComponent,
    RandomShowsComponent,
    ShowComponent
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
    ApiService,
    RecomendedShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
