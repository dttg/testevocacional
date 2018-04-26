import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appemoji'
})
export class EmojiPipe implements PipeTransform {

  public static readonly emojisize = 64;

  /**
   *
   * @param value just like
   * '<img class="emojione" alt="😍" title=":heart_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60d.png"/>'
   * @param args
   */
  transform(value: string, args?: any): any {
    return value.replace(
      /src="([^/"]*\/)+(.+\.png)"/gi,
      // `src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/${EmojiPipe.emojisize}/$2" ` +
      // `srcset="emojione/png/${EmojiPipe.emojisize}/$2 2x, emojione-static/$2 4x"`
      `src="assets/emojione-static/${EmojiPipe.emojisize}/$2"`
    );
  }

}
