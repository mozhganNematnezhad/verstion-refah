export interface IdecodeToken {
  name: string;
  family_name: string;
  phone_number: number;
  preferred_username: string;
  role: string[] | string;
  idp?: number;
  UserLocalId?: number;
}
