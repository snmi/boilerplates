export declare global {

  interface StoreState {
    appCreate: State
  }

  type AppCreateAction = InitAction
}

export interface State {
  terminalList: object[]
}

export type InitActionType = 'appCreate/init' | 'init'
export interface InitAction {
  type: InitActionType
}

export type InitedActionType = 'appCreate/inited' | 'inited'
export interface InitedAction {
  type: InitedActionType,
  terminalList: object[]
  appList: object[]
}

export interface InitEffects {
  put: (action: InitedAction) => void
  select: any
}
