import { Component, OnInit } from '@angular/core';
import { RiasecService } from '../riasec/riasec.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-carreiras',
  templateUrl: './carreiras.component.html',
  styleUrls: ['./carreiras.component.scss']
})
export class CarreirasComponent implements OnInit {
  resultados = [];

  constructor(
    private riasecService: RiasecService
  ) { }

  ngOnInit() {
    this.resultados = this.riasecService.getCarreiras();
  }

}
