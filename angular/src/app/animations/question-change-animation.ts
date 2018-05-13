import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const questionChangeAnimation = trigger(
  'changeQuestion',
  [
    state('showing', style({
      filter: 'unset',
    })),
    state('voted', style({
      filter: 'blur(5px)',
    })),
    transition('* => *', animate('0.2s ease-in')),
  ]
);
