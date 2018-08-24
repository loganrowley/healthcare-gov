import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ImgTransitionComponent } from './img-transition/img-transition.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ActionBarComponent,
    ImgTransitionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
