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
import { LastFiveShowsSeenComponent } from './last-five-shows-seen/last-five-shows-seen.component';
import { PopularComponent } from './popular/popular.component';
import { PageShowComponent } from './page-show/page-show.component';
import { PageEpisodesComponent } from './page-episodes/page-episodes.component';
import { PageSeasonsComponent } from './page-seasons/page-seasons.component';
import { ShowSeasonsComponent } from './page-show/show-seasons/show-seasons.component';
import { ShowEpisodesComponent } from './page-show/show-episodes/show-episodes.component';
import { ScheduleShowComponent } from './schedule/schedule-show/schedule-show.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,
    RecomendedComponent,
    LastFiveShowsSeenComponent,
    PopularComponent,
    PageShowComponent,
    PageEpisodesComponent,
    PageSeasonsComponent,
    ShowSeasonsComponent,
    ShowEpisodesComponent,
    ScheduleShowComponent
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
