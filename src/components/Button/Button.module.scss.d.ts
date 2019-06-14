export interface Styles {
  'btn': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
