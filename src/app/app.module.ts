import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GodService } from './services/god.service';
import { ShufflerComponent } from './shuffler/shuffler.component';

//ROOTS
const routes: Routes =  [
  { path: 'login', component: LoginComponent },
  { path: 'shuffler', component: ShufflerComponent },
  { path: 'questions', component: ShufflerComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
    ShufflerComponent
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
