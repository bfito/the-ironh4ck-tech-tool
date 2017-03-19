import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { GodService } from './services/god.service';

//ROOTS
const routes: Routes =  [
  { path: 'login', component: AppComponent },
  { path: 'shuffler', component: AppComponent },
  { path: 'question', component: AppComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) //Need this for routes to work
  ],
  providers: [GodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
