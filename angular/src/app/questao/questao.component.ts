import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { RiasecQuestion } from '../riasec/riasec-question';
import { RiasecAnswer } from '../riasec/riasec-answer';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss'],
})
export class QuestaoComponent implements OnInit {
  @Input()
  @HostBinding('class.folded')
  folded = false;
  foldedActions = false;

  @Input()
  questao: RiasecQuestion;

  @Output()
  respostaChange = new EventEmitter<RiasecAnswer>();

  resposta: RiasecAnswer;

  constructor() { }

  ngOnInit() {
  }

  votar(questao, opcao) {
    this.resposta = {
      index: questao.index,
      grade: questao.grade,
      like: opcao.value > 0,
    };
    this.respostaChange.emit(this.resposta);
    this.folded = true;
  }

}
