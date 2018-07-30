import { Component, OnInit } from '@angular/core';
import { RiasecService } from '../riasec/riasec.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carreiras',
  templateUrl: './carreiras.component.html',
  styleUrls: ['./carreiras.component.scss']
})
export class CarreirasComponent implements OnInit {
  resultados = [];
  facebookURL: SafeResourceUrl;

  constructor(
    private riasecService: RiasecService,
    private sanitizer: DomSanitizer
  ) {
    this.facebookURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2F' +
      window.location.hostname +
      '&layout=button&size=large&mobile_iframe=true&appId=1604653659597605&width=117&height=28'
    );
  }

  ngOnInit() {
    this.resultados = this.riasecService.getCarreiras();
  }

}
