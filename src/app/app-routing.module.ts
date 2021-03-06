import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes';
import { DashboardComponent }   from './dashboard';
import { HeroDetailComponent }  from './hero-detail';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
	{ 
		path: 'heroes', 
		component: HeroesComponent
	},
  { 
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent 
  }
];

@NgModule({
  exports: [
  	RouterModule
  ],
  imports: [
  	RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
