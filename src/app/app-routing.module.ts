import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageShowComponent } from './page-show/page-show.component';
import { ShowSeasonsComponent } from './page-show/show-seasons/show-seasons.component';
import { ShowEpisodesComponent } from './page-show/show-episodes/show-episodes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'show/:id',
    component: PageShowComponent,
    children: [
      {
        path: 'seasons',
        component: ShowSeasonsComponent
      },
      {
        path: 'episodes',
        component: ShowEpisodesComponent
      }
    ]
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
