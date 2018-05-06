import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { RiasecQuestion } from '../riasec/riasec-question';
import { RiasecAnswer } from '../riasec/riasec-answer';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {
  @Input()
  @HostBinding('class.folded')
  folded = false;
  foldedActions = false;

  @Input() questao: RiasecQuestion;

  @Output() respostaChange = new EventEmitter<RiasecAnswer>();

  resposta: RiasecAnswer;

  constructor() {}

  ngOnInit() {}

  votar(questao, opcao) {
    this.resposta = {
      index: questao.index,
      grade: questao.grade,
      like: opcao.value > 0
    };
    this.respostaChange.emit(this.resposta);
    this.folded = true;
  }

  urlEmoji(emojiName: string) {
    switch (emojiName) {
      case ':heart_eyes:':
        // :heart_eyes: 'https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60d.png';
        return 'assets/emojione-static/64/1f60d.png';
      case ':expressionless:':
        // :expressionless: 'https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f611.png';
        return 'assets/emojione-static/64/1f611.png';
      case ':grey_question:':
        // :grey_question: 'https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/2754.png';
        return 'assets/emojione-static/64/2754.png';
      default:
        return '';
    }
  }

  imgEmoji(emojiName: string) {
    const url = this.urlEmoji(emojiName);
    switch (emojiName) {
      case ':heart_eyes:':
        return `<img class="emojione" alt="😍" title=":heart_eyes:" src="${url}"/>`;
      case ':expressionless:':
        return `<img class="emojione" alt="😑" title=":expressionless:" src="${url}"/>`;

      default:
        return `<img class="emojione" alt="❔" title=":grey_question:" src="${url}"/>`;
    }
  }

  urlEmojiResposta(resposta: RiasecAnswer) {
    if (resposta && resposta.like) {
      return this.urlEmoji(':heart_eyes:');
    }
    if (resposta && !resposta.like) {
      return this.urlEmoji(':expressionless:');
    }
    return this.urlEmoji(':grey_question:');
  }
}
