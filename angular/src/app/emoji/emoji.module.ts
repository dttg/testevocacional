import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiPipe } from './emoji.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmojiPipe,
  ],
  exports: [
    EmojiPipe,
  ],
})
export class EmojiModule { }
