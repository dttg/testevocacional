import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { RiasecService } from '../riasec/riasec.service';
import { Observable } from 'rxjs';
import { slideInDownAnimation } from '../../animations/router-animation';
import { questionChangeAnimation } from '../../animations/question-change-animation';
import { RiasecQuestion, RiasecAnswer } from '../riasec/riasec-models';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss'],
  animations: [slideInDownAnimation, questionChangeAnimation]
})
export class QuestaoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'flex';
  @HostBinding('@changeQuestion')
  changeQuestionState: 'showing' | 'voted' = 'showing';

  public questao: RiasecQuestion;
  public resposta: RiasecAnswer;
  public selectedId: number;
  public questao$: Observable<RiasecQuestion>;

  constructor(
    public riasecService: RiasecService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.riasecService.getQuestion(this.selectedId);
      })
    ).subscribe(novaQuestao => {
      this.questao = novaQuestao;
      this.changeQuestionState = 'showing';
      // this.resposta = null;
      this.riasecService.getResponse(this.selectedId).subscribe(resposta => this.resposta = resposta);
    });
  }

  votar(questao, opcao) {
    this.changeQuestionState = 'voted';
    const resposta = {
      index: questao.index,
      grade: questao.grade,
      like: opcao.value > 0
    };
    this.resposta = null;
    this.riasecService.addResponse(resposta).subscribe(response => {
      if (response.action === RiasecService.TEST_COMPLETE) {
        this.router.navigate(['../../carreiras'], { relativeTo: this.activatedRoute });
        return;
      }
      this.router.navigate(['../', questao.index + 1], { relativeTo: this.activatedRoute});
    });
  }

  urlEmoji(emojiName: string) {
    switch (emojiName) {
      case ':heart_eyes:':
        return 'assets/emojiisland.com/Heart_Eyes_Emoji.png';
      case ':expressionless:':
        return 'assets/emojiisland.com/Expressionless_Face_Emoji.png';
      default:
        return '';
    }
  }

  imgEmoji(emojiName: string) {
    const url = this.urlEmoji(emojiName);
    switch (emojiName) {
      case ':heart_eyes:':
        return `<img height="128" alt="😍" title=":heart_eyes:" src="${url}"/>`;
      case ':expressionless:':
        return `<img height="128" alt="😑" title=":expressionless:" src="${url}"/>`;

      default:
        return '';
    }
  }

  urlEmojiResposta(resposta: RiasecAnswer) {
    if (resposta && resposta.like) {
      return this.urlEmoji(':heart_eyes:');
    }
    if (resposta && !resposta.like) {
      return this.urlEmoji(':expressionless:');
    }
    return '';
  }
}
