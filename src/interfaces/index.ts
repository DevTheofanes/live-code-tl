/**
 * Tipar corretamente interfaces
*/
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company: string;
}

type TFetchUsers = () => any

export type {
  IUser,
  TFetchUsers

}