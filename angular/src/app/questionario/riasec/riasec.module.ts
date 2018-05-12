import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiasecComponent } from './riasec.component';
import { RiasecService } from './riasec.service';
import { QuestaoModule } from '../questao/questao.module';
import { MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    QuestaoModule,
  ],
  declarations: [
    RiasecComponent,
  ],
  exports: [
    RiasecComponent,
  ],
  providers: [
    RiasecService,
  ]
})
export class RiasecModule { }

export { RiasecComponent } from './riasec.component';
