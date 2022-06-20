import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomaModule } from './soma/soma.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SomaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
