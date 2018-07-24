import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as analytics from './segment-analytics.js';

if (environment.production) {
  enableProdMode();
}

if (environment.segmentKey && analytics && (<any>window).analytics) {
  (<any>window).analytics.load(environment.segmentKey);
  (<any>window).analytics.page();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
