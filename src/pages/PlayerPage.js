import React from 'react'
import { useParams } from 'react-router-dom'

import { getPlayer } from 'state/actions/playerActions'
import { useDispatchOnMount } from 'hooks'
import { useWinRateByMap, usePlayer } from 'hooks/players'

import RateByMap from 'components/player/RateByMap'
import Profile from 'components/player/Profile'

const PlayerPage = () => {
  const { id } = useParams()
  useDispatchOnMount(getPlayer, Number(id))

  const winRateByMap = useWinRateByMap()
  const player = usePlayer()

  return (
    <div className="container pb-4 mb-4">
      {player && <Profile image={player.avatarUrl} name={player.gamertag} />}
      {winRateByMap && <RateByMap rateByMap={winRateByMap} />}
    </div>
  )
}

export default PlayerPage
