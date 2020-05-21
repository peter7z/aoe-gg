import React from 'react'
import { arrayOf, object } from 'prop-types'

import MapRate from './MapRate'

const sortByRate = ([, rateA], [, rateB]) => {
  if (rateA.wins / rateA.looses < rateB.wins / rateB.looses) return 1
  if (rateA.wins / rateA.looses > rateB.wins / rateB.looses) return -1
  return 0
}

const RateByMap = ({ rateByMap }) => (
  <div>
    {rateByMap.sort(sortByRate).map(([map, { wins, looses }]) => (
      <MapRate key={map} map={map} wins={wins} looses={looses} />
    ))}
  </div>
)

RateByMap.propTypes = {
  rateByMap: arrayOf(object).isRequired,
}

export default RateByMap
