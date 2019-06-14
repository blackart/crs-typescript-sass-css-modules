export interface Styles {
  'App': string;
  'App-logo': string;
  'App-logo-spin': string;
  'App-header': string;
  'App-link': string;
  'btn': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
