import { Injectable } from '@angular/core';
import * as riasec from './riasec.json';
import { RiasecQuestion } from './riasec-question';
import { RiasecAnswer } from './riasec-answer';

@Injectable()
export class RiasecService {
  responses: RiasecAnswer[] = [];

  constructor() {}

  get questoes(): RiasecQuestion[] {
    return (<any>riasec).questions;
  }

  addResponse(newAnswer: RiasecAnswer) {
    this.responses = [
      ...this.responses.filter(
        answer => answer && newAnswer && answer.index !== newAnswer.index
      ),
      newAnswer
    ];
  }
}
