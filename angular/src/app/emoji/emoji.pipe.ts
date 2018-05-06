import { Pipe, PipeTransform } from '@angular/core';
// import * as EmojiOne from 'emojione';
import * as EmojiMap from './EmojiMap.json';

@Pipe({
  name: 'appemoji'
})
export class EmojiPipe implements PipeTransform {
  public static readonly DEFAULT_EMOJI_SIZE = 64;
  public static readonly EMOJI_MAP = <Array<{
    text: string;
    emojione: string;
  }>>(<any>EmojiMap).emojiMap;

  cache = [];

  /**
   *
   * @param value just like
   * '<img class="emojione" alt="😍" title=":heart_eyes:" src="https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60d.png"/>'
   * @param args
   */
  transform(value: string, emojiSize: number, onlyUrl: 'url' | 'img'): any {
    value = this.convertTextFast(value);

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

  /**
   * FROM https://github.com/jbw91/angular-emojione/blob/master/src/services/emoji.service.ts
   * Replace shortcodes and/or native emoji in a blob of text to EmojiOne images
   *
   * @param {string} text
   * @returns {string} text with EmojiOne images
   *
   * @memberOf EmojiService
   */
  public convertText(text: string) {
    // const emojione = EmojiOne.toImage(text);
    // this.cache.push({ text, emojione });
    // console.log(this.cache);
    // return emojione;
  }

  /**
   * Programming marathon style calculation.
   * @param text Pr
   */
  public convertTextFast(text: string) {
    return EmojiPipe.EMOJI_MAP.find(item => item.text === text).emojione;
  }
}
