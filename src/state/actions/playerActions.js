import { createThunk } from '@rootstrap/redux-tools'
import playerService from 'services/playerService'

export const getPlayer = createThunk('getPlayer', async (playerId) => {
  const { data } = await playerService.getPlayerInfo(playerId)
  return { playerId, ...data }
})
