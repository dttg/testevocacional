import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiasecComponent } from './riasec.component';
import { RiasecService } from './riasec.service';
import { QuestaoModule } from '../questao/questao.module';
import { MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
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
