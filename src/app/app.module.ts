import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './common/material/material.module';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RecomendedComponent } from './recomended/recomended.component';
import { ShowSeasonsComponent } from './page-show/show-seasons/show-seasons.component';
import { ShowEpisodesComponent } from './page-show/show-episodes/show-episodes.component';
import { ScheduleShowComponent } from './schedule/schedule-show/schedule-show.component';
import { HomeComponent } from './home/home.component';
import { PageShowComponent } from './page-show/page-show.component';
import { LastShowsListComponent } from './last-shows-list/last-shows-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScheduleComponent,
    RecomendedComponent,
    PageShowComponent,
    ShowSeasonsComponent,
    ShowEpisodesComponent,
    ScheduleShowComponent,
    LastShowsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
