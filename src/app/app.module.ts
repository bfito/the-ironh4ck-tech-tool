import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
=======
import { GodService } from './services/god.service';

//ROOTS
const routes: Routes =  [
  { path: 'login', component: AppComponent },
  { path: 'shuffler', component: AppComponent },
  { path: 'question', component: AppComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
>>>>>>> fd323fb7a62fdbed428b588798ccf8557152cdf0

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
