import React from 'react'
import { arrayOf, object, oneOfType, string } from 'prop-types'
import cn from 'classnames'

import MapRate from './MapRate'

const sortByRate = ([, rateA], [, rateB]) => {
  if (rateA.wins / rateA.looses < rateB.wins / rateB.looses) return 1
  if (rateA.wins / rateA.looses > rateB.wins / rateB.looses) return -1
  return 0
}

const RateByMap = ({ rateByMap, className }) => (
  <div className={cn(['py-4', className])}>
    <h2 className="mb-4">Map</h2>
    {rateByMap.sort(sortByRate).map(([map, { wins, looses }]) => (
      <MapRate key={map} map={map} wins={wins} looses={looses} />
    ))}
  </div>
)

RateByMap.propTypes = {
  rateByMap: arrayOf(arrayOf(oneOfType([string.isRequired, object]))).isRequired,
  className: string,
}

export default RateByMap
