export interface GetUserWordRequest {
  take: number;
  skip: number;
  language: string;
  code: string;
  subCode: string;
  thematics: string | 'general';
  searchedWord: string | '';
}
