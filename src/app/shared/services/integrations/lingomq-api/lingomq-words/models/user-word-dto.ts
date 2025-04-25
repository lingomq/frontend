import { UserDto } from '../../lingomq-identity/models/user-dto';
import { WordInfoDto } from './word-info-dto';

export interface UserWordDto {
  user: UserDto;
  word: WordInfoDto;
}
