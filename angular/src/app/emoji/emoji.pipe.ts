import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appemoji'
})
export class EmojiPipe implements PipeTransform {

  public static readonly DEFAULT_EMOJI_SIZE = 64;

  /**
   *
   * @param value just like
   * '<img class="emojione" alt="😍" title=":heart_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60d.png"/>'
   * @param args
   */
  transform(value: string, emojiSize: number, onlyUrl: 'url' | 'img'): any {
    emojiSize = emojiSize > 0 ? emojiSize : EmojiPipe.DEFAULT_EMOJI_SIZE;
    if (onlyUrl && onlyUrl.startsWith('url')) {
      return value.replace(
        /.*src="([^/"]*\/)+(.+\.png)".*/gi,
        `assets/emojione-static/${emojiSize}/$2`
      );
    }
    return value.replace(
      /src="([^/"]*\/)+(.+\.png)"/gi,
      // `src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/${emojiSize}/$2" ` +
      // `srcset="emojione/png/${emojiSize}/$2 2x, emojione-static/$2 4x"`
      `src="assets/emojione-static/${emojiSize}/$2"`
    );
  }

}
