import React, { useCallback, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import cn from 'classnames'
import { string } from 'prop-types'

import { useHistory } from 'react-router-dom'

const HomePage = ({ className }) => {
  const { push } = useHistory()

  const [playerId, setPlayerId] = useState('')

  const handleClick = useCallback(async () => {
    push(`/player/${playerId}`)
  }, [playerId, push])

  const handleChange = useCallback((e) => {
    setPlayerId(e.target.value)
  }, [])

  return (
    <div className={cn('bg-white p-5 rounded d-flex flex-column', className)}>
      <TextField className="mb-5" value={playerId} onChange={handleChange} label="Player id" />
      <Button onClick={handleClick} disabled={!playerId} variant="contained">
        GET HISTORY
      </Button>
    </div>
  )
}

HomePage.propTypes = {
  className: string,
}

export default HomePage
