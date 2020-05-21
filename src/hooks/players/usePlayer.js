import { useSelector } from 'react-redux'

export default () =>
  useSelector(({ players }) => {
    if (!players?.currentPlayer) return

    return players.playerList[players.currentPlayer].user
  })
