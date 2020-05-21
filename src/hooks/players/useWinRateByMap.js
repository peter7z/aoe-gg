import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const matchList = useSelector(({ players }) => {
    if (!players?.currentPlayer) return

    return players.playerList[players.currentPlayer].matchList
  })

  return useMemo(() => {
    if (!matchList) return
    const winRateByMap = {}

    matchList.forEach(({ mapType, winLoss }) => {
      if (!winRateByMap[mapType]) winRateByMap[mapType] = { wins: 0, looses: 0 }
      if (winLoss === 'Loss') winRateByMap[mapType].looses += 1
      if (winLoss === 'Win') winRateByMap[mapType].wins += 1
    })

    return Object.entries(winRateByMap)
  }, [matchList])
}
