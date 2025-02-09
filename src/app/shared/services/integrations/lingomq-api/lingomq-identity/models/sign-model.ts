import { AuthorizationTypeEnum } from "../shared/authorization-type-enum";

export interface SignModel {
  Type: AuthorizationTypeEnum;
  SignKey: string;
  SignValue: string;
}
