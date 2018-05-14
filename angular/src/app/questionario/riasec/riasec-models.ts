export type RiasecGradeType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RiasecAnswer {
  index: number;
  grade: RiasecGradeType;
  like: boolean;
}

export interface RiasecQuestion {
  index: number;
  text: string;
  grade: RiasecGradeType;
}

export interface RiasecGradeTotal {
  grade: RiasecGradeType;
  total: number;
  index?: number;
}
