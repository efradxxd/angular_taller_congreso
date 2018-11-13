import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { NgelseComponent } from './ngelse/ngelse.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
// Usado en dirictiva ngmodel
import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';




@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    NgelseComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
