import { AxiosResponse } from 'axios'

/**
 * Tipar corretamente interfaces
*/
interface IUser {}

type TFetchUsers = () => any

export type {
  IUser,
  TFetchUsers

}