import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleAnalyticsEventsService } from "./google-analytics-events.service";

import { AppComponent } from './app.component';
import { SiteAComponent } from './site-a/site-a.component';
import { SiteBComponent } from './site-b/site-b.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    SiteAComponent,
    SiteBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
