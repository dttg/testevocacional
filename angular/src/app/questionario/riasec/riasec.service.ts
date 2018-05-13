import { Injectable } from '@angular/core';
import * as riasec from './riasec.json';
import { RiasecQuestion } from './riasec-question';
import { RiasecAnswer } from './riasec-answer';
import { Observable, Subject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class RiasecService {
  responses: RiasecAnswer[] = [];
  questoes: RiasecQuestion[] = (<any>riasec).questions;

  constructor() { }

  getQuestao(index: number = 0): Observable<RiasecQuestion> {
    return of(this.questoes.find(q => q.index === index)).pipe(delay(10));
  }

  getResponsta(index: number = 0): Observable<RiasecAnswer> {
    return of(this.responses.find(q => q.index === index)).pipe(delay(10));
  }

  addResponse(newAnswer: RiasecAnswer): Observable<{ next?: number }> {
    console.log('RiasecService@addResponse');
    this.responses = [
      ...this.responses.filter(
        answer => answer && newAnswer && answer.index !== newAnswer.index
      ),
      newAnswer
    ];
    return of({ next: newAnswer.index + 1 }).pipe(delay(10));
  }
}
