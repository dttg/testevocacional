import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MainNavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
