import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChooseOsScreenComponent } from './choose-os-screen/choose-os-screen.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    ChooseOsScreenComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   { path: '', component: }
    // ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
