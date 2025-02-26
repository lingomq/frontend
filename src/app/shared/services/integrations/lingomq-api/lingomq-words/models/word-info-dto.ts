import { LanguageDto } from "./language-dto";
import { WordThematicsDto } from "./word-thematics-dto";

export interface WordInfoDto {
  id: string;
  word: string;
  transcription: string;
  description: string | null;
  translations: WordInfoDto[] | null;
  language: LanguageDto;
  thematics: WordThematicsDto;
}
