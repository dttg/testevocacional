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
        filter: 'blur(1px)',
        height: '2rem',
      })),
      state('last', style({
        filter: 'blur(1px)',
        transform: 'translateY(-2rem)',
      })),
      state('current', style({})),
      state('next', style({
        filter: 'blur(1px)',
        transform: 'translateY(2rem)',
      })),
      state('next-next', style({
        filter: 'blur(1px)',
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
    this.questoes = this.riasecService.questoes;
    this.questao = this.questoes[0];
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
