import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { RiasecService } from './riasec.service';
import { RiasecAnswer } from './riasec-answer';
import { RiasecQuestion } from './riasec-question';

@Component({
  selector: 'app-riasec',
  templateUrl: './riasec.component.html',
  styleUrls: ['./riasec.component.scss'],
  animations: [
    trigger('placeInDeck', [
      state('last-last', style({
        filter: 'blur(5px)',
        height: '2rem',
      })),
      state('last', style({
        filter: 'blur(5px)',
        transform: 'translateY(-2rem)',
      })),
      state('current', style({})),
      state('next', style({
        filter: 'blur(5px)',
        transform: 'translateY(2rem)',
      })),
      state('next-next', style({
        filter: 'blur(5px)',
        height: '2rem',
      })),
      state('hidden', style({
        opacity: 0,
        height: 0,
      })),
      transition('* => *', animate('200ms ease-in')),
    ])
  ],
})
export class RiasecComponent implements OnInit {

  questoes: RiasecQuestion[];
  questao: RiasecQuestion;
  currentQuestion = 0;

  constructor(public riasecService: RiasecService) { }

  ngOnInit() {
    const placeHolderFactory = (index: number): RiasecQuestion => ({ grade: 'R', index, text: 'placeholder' });
    this.questoes = [
      placeHolderFactory(0),
      placeHolderFactory(1),
      ...this.riasecService.questoes.map((q: RiasecQuestion) => ({...q, index: q.index + 2 })),
      placeHolderFactory(this.riasecService.questoes.length + 1),
      placeHolderFactory(this.riasecService.questoes.length + 2),
    ];
    this.questao = this.questoes[2];
    this.currentQuestion = this.questao.index;
  }

  addResposta(question: RiasecQuestion, answer: RiasecAnswer) {
    this.riasecService.addResponse(answer);
    this.currentQuestion++;
  }

  deckPosition(question: RiasecQuestion) {
    switch (question.index - this.currentQuestion) {
      case 0:
        return 'current';
      case -1:
        // last or directly above
        return 'last';
      case 1:
        // next or directly below
        return 'next';
      case -2:
        // last or directly above
        return 'last-last';
      case 2:
        // next or directly below
        return 'next-next';
      default:
        return 'hidden';
    }
  }

}
