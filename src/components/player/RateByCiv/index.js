import React from 'react'
import { arrayOf, object, string, oneOfType } from 'prop-types'
import cn from 'classnames'

import CivRate from './CivRate'

const sortByRate = ([, rateA], [, rateB]) => {
  if (rateA.wins / rateA.looses < rateB.wins / rateB.looses) return 1
  if (rateA.wins / rateA.looses > rateB.wins / rateB.looses) return -1
  return 0
}

const RateByCiv = ({ rateByCiv, className }) => (
  <div className={cn(['py-4', className])}>
    <h2 className="mb-4">Civ</h2>
    {rateByCiv.sort(sortByRate).map(([civ, { wins, looses }]) => (
      <CivRate key={civ} civ={civ} wins={wins} looses={looses} />
    ))}
  </div>
)

RateByCiv.propTypes = {
  rateByCiv: arrayOf(arrayOf(oneOfType([string.isRequired, object]))).isRequired,
  className: string,
}

export default RateByCiv
