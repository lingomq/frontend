export interface GetWordRequestModel {
  language: string;
  code: string;
  subCode: string;
  thematics: string | 'general';
  take: number | 20;
  skip: number | 0;
  searchedWord: string | ""
}
