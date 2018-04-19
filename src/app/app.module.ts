import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
