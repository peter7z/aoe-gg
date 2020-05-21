import { createReducer } from '@rootstrap/redux-tools'
import { getPlayer } from 'state/actions/playerActions'

const initialState = {}

const actionHandlers = {
  [getPlayer.success]: (state, { payload: { playerId, user, matchList } }) => {
    state[playerId] = {
      user,
      matchList,
    }
  },
}

export default createReducer(initialState, actionHandlers)
