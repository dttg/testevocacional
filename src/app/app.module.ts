import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuestaoModule } from './questao/questao.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    QuestaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
