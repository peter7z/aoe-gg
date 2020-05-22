import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'react-loaders'
import 'loaders.css/src/animations/pacman.scss'

import { getPlayer } from 'state/actions/playerActions'
import { useDispatchOnMount } from 'hooks'
import { useWinRateByCiv, useWinRateByMap, usePlayer } from 'hooks/players'

import RateByMap from 'components/player/RateByMap'
import RateByCiv from 'components/player/RateByCiv'
import Profile from 'components/player/Profile'
import SearchBox from 'components/player/SearchBox'

const PlayerPage = () => {
  const { id } = useParams()
  useDispatchOnMount(getPlayer, Number(id))

  const winRateByMap = useWinRateByMap()
  const winRateByCiv = useWinRateByCiv()
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
      {player && (
        <div className="bg-dark rounded p-3 row no-gutters align-items-center">
          <Profile className="col-12 col-lg" image={player.avatarUrl} name={player.gamertag} />
          <div className="center col-12 col-lg">
            <SearchBox className="col col-lg-8 offset-lg-4" />
          </div>
        </div>
      )}
      <div className="row">
        {winRateByMap && <RateByMap className="col-12 col-lg" rateByMap={winRateByMap} />}
        {winRateByCiv && <RateByCiv className="col-12 col-lg" rateByCiv={winRateByCiv} />}
      </div>
    </div>
  )
}

export default PlayerPage
