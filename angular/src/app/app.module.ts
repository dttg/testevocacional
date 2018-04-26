import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { RiasecModule } from './riasec/riasec.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,

    RiasecModule,
    FooterModule,
  ],
  providers: [
    MediaMatcher,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
