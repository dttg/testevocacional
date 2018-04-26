import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RiasecQuestion } from '../riasec/riasec-question';
import { RiasecAnswer } from '../riasec/riasec-answer';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {
  @Input()
  folded = false;

  @Input()
  questao: RiasecQuestion;

  @Output()
  respostaChange: EventEmitter<RiasecAnswer>;

  resposta: RiasecAnswer;

  constructor() { }

  ngOnInit() {
  }

}
