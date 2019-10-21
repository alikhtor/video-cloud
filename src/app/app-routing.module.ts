import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageShowComponent } from './page-show/page-show.component';
import { ShowSeasonsComponent } from './page-show/show-seasons/show-seasons.component';
import { ShowEpisodesComponent } from './page-show/show-episodes/show-episodes.component';


const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'show/:id',
    component: PageShowComponent,
    children : [
      {
        path: 'episodes', component: ShowEpisodesComponent
      },
      {
        path: 'seasons', component: ShowSeasonsComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
