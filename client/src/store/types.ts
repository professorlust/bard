export interface UserState {
  username: string,
  usernameExists: boolean,
}

export interface StoreState {
  user: UserState,
}
