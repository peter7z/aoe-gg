import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'react-loaders'
import 'loaders.css/src/animations/pacman.scss'

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
      {!player && (
        <div className="center vh-100">
          <div className="bg-dark rounded p-5">
            <Loader type="pacman" />
          </div>
        </div>
      )}
      {!player && <Loader type="pacman" />}
      {player && <Profile image={player.avatarUrl} name={player.gamertag} />}
      {winRateByMap && <RateByMap rateByMap={winRateByMap} />}
    </div>
  )
}

export default PlayerPage
