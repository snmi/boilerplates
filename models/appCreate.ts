import { State, InitAction, InitEffects, InitedAction } from './appCreate.d'
import { Model } from 'dva'
import { getAppList } from '../apis'
class AppCreate implements Model {

  state: State = {
    terminalList: []
  }

  reducers = {
    inited: (state: State, action: InitedAction) => ({
      ...state,
      terminalList: action.terminalList
    })
  }

  effects = {
    init: function* (action: InitAction, { put, select }: InitEffects) {
      console.log(action)
      const terminalList = yield select((state: StoreState) => state.common.terminals)
      const dId = yield select((state: StoreState) => state.common.dId)
      const appList = yield getAppList({ dId })
      console.log(appList)
      yield put({ type: 'inited', terminalList, appList })
    }
  }

  namespace = 'appCreate'
}

export default new AppCreate()
