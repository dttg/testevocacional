import { Injectable } from '@angular/core';
import * as riasec from './riasec.json';

@Injectable()
export class RiasecService {

  constructor() { }

  get questoes() {
    return (<any>riasec).questions;
  }

}
