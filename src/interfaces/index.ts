/**
 * Tipar corretamente interfaces
*/
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company: string | null;
  address: string | null;
  phone: string;
}

type TFetchUsers = () => any

export type {
  IUser,
  TFetchUsers

}