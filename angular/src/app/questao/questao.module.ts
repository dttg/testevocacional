import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatRadioModule, MatGridListModule, MatIconModule, MatButtonModule } from '@angular/material';
import * as AngularEmoji from 'angular-emojione';
const AngularEmojiModule = AngularEmoji.EmojiModule;

import { QuestaoComponent } from './questao.component';
import { EmojiModule } from '../emoji/emoji.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatCardModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,

    AngularEmojiModule,
    EmojiModule,
  ],
  declarations: [
    QuestaoComponent,
  ],
  exports: [
    QuestaoComponent,
  ],
})
export class QuestaoModule { }
