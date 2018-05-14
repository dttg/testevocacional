import { Injectable } from '@angular/core';
import * as riasec from './riasec.json';
import { Observable, Subject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RiasecAnswer, RiasecQuestion, RiasecGradeTotal } from './riasec-models';

@Injectable()
export class RiasecService {
  public static readonly TEST_COMPLETE = 'Teste Completado';
  public static readonly TEST_RUNNING = 'Teste em Andamento';

  responses: RiasecAnswer[] = [];
  questions: RiasecQuestion[] = (<any>riasec).questions;
  results: RiasecQuestion[] = (<any>riasec).results;

  constructor() {}

  getQuestion(index: number = 1): Observable<RiasecQuestion> {
    return of(this.questions.find(q => q.index === index)).pipe(delay(10));
  }

  getResponse(index: number = 1): Observable<RiasecAnswer> {
    return of(this.responses.find(q => q.index === index)).pipe(delay(10));
  }

  addResponse(newAnswer: RiasecAnswer): Observable<{ next?: number, action?: string }> {
    console.log('RiasecService@addResponse');
    this.responses = [
      ...this.responses.filter(
        answer => answer && newAnswer && answer.index !== newAnswer.index
      ),
      newAnswer
    ];
    if (this.responses.length >= 42) {
      // deveria mostar responsta
      return of({ next: -1, action: RiasecService.TEST_COMPLETE }).pipe(delay(10));
    }
    return of({ next: newAnswer.index + 1, action: RiasecService.TEST_RUNNING }).pipe(delay(10));
  }

  getCarreiras() {
    if (this.responses.length < 42) {
      return null;
    }
    const riasecGrandTotal: RiasecGradeTotal[] = this.responses.reduce((acc, response) => {
      if (response.like === false) {
        // não contabilisa o que a pessoa não gosta.
        return acc;
      }
      let gradeTotal = acc.find(total => total.grade === response.grade);
      if (!gradeTotal) {
        // se não existe total ainda, constroi e coloca no array
        gradeTotal = {
          grade: response.grade,
          total: 0
        };
        acc.push(gradeTotal);
      }
      // incrementa o contador desse grade
      gradeTotal.total++;
      return acc;
    }, []);

    const riasecResults = riasecGrandTotal.sort(
      // a > b then -1, ordem inversa (maior, menor)
      (a, b) => b.total - a.total
    ).map(
      // adiciona o índice de cada item
      (value, index) => ({...value, index})
    ).filter(
      // usa somente os 3 primeiros
      gradeTotal => gradeTotal.index <= 2
    ).map(
      // ao total, adiciona a descrição de cada item
      gradeTotal => ({ ...gradeTotal, ...this.results.find(result => result.grade === gradeTotal.grade)})
    );

    return riasecResults;
  }
}
