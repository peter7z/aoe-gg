import { createReducer } from '@rootstrap/redux-tools'
import { getPlayer } from 'state/actions/playerActions'

const initialState = {
  playerList: {},
  currentPlayer: '',
}

const actionHandlers = {
  [getPlayer.success]: (state, { payload: { playerId, user, matchList } }) => {
    state.currentPlayer = playerId
    state.playerList[playerId] = {
      user,
      matchList,
    }
  },
}

export default createReducer(initialState, actionHandlers)
