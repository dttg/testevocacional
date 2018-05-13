import { Component, OnInit } from '@angular/core';
import { RiasecService } from '../riasec/riasec.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  constructor(public riasecService: RiasecService) { }

  ngOnInit() {
  }

}
