import React from 'react'
import { useParams } from 'react-router-dom'

import { getPlayer } from 'state/actions/playerActions'
import { useDispatchOnMount } from 'hooks'

const HomePage = () => {
  const { id } = useParams()
  useDispatchOnMount(getPlayer, Number(id))

  return <div />
}

export default HomePage
