import { Component, OnInit } from '@angular/core';
import { RiasecService } from './riasec.service';
import { RiasecAnswer } from './riasec-answer';

@Component({
  selector: 'app-riasec',
  templateUrl: './riasec.component.html',
  styleUrls: ['./riasec.component.scss']
})
export class RiasecComponent implements OnInit {

  constructor(public riasecService: RiasecService) { }

  get questoes() {
    return this.riasecService.questoes;
  }

  ngOnInit() {
  }

  addResposta(answer: RiasecAnswer) {
    this.riasecService.addResponse(answer);
  }

}
