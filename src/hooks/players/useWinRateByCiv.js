import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const matchList = useSelector(({ players }) => {
    if (!players?.currentPlayer) return

    return players.playerList[players.currentPlayer].matchList
  })

  return useMemo(() => {
    if (!matchList) return
    const winRateByCiv = {}

    matchList.forEach(({ civilization, winLoss }) => {
      if (!winRateByCiv[civilization]) winRateByCiv[civilization] = { wins: 0, looses: 0 }
      if (winLoss === 'Loss') winRateByCiv[civilization].looses += 1
      if (winLoss === 'Win') winRateByCiv[civilization].wins += 1
    })

    return Object.entries(winRateByCiv)
  }, [matchList])
}
