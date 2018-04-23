import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

  textoQuestao = 'Grade the quality and size of freshly cut logs';

  opcoes = [
    'Hate it',
    'Dislike it',
    'Neutral',
    'Like it',
    'Love it',
  ];
  answer = 'gimme';

  @Input()
  folded = false;

  constructor() { }

  ngOnInit() {
  }

}
