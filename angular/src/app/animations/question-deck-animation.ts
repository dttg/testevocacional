import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const questionDeckAnimation = trigger('placeInDeck', [
  state(
    'last-last',
    style({
      filter: 'blur(5px)',
      height: '2rem'
    })
  ),
  state(
    'last',
    style({
      filter: 'blur(5px)',
      transform: 'translateY(-2rem)'
    })
  ),
  state('current', style({})),
  state(
    'next',
    style({
      filter: 'blur(5px)',
      transform: 'translateY(2rem)'
    })
  ),
  state(
    'next-next',
    style({
      filter: 'blur(5px)',
      height: '2rem'
    })
  ),
  state(
    'hidden',
    style({
      opacity: 0,
      height: 0
    })
  ),
  transition('* => *', animate('200ms ease-in'))
]);
