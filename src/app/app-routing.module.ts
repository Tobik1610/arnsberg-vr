import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SightComponent } from './sight/sight.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: StartComponent },
  { path: 'sight/:id', component: SightComponent },
  { path: 'dashboard', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
