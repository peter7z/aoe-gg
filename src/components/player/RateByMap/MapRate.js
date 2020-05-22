import React from 'react'
import { string, number } from 'prop-types'

import theme from 'constants/theme'

const RateByMap = ({ map, wins, looses }) => {
  const rate = Math.floor((wins / (looses + wins)) * 100)

  return (
    <div className="row no-gutters p-4 border col-lg-8 offset-lg-2" key="map">
      <div className="col-6">{map}: </div>
      <div className="col-6 d-flex no-gutters">
        <div className="d-flex col text-light mr-4">
          <div className="rounded overflow-hidden w-100 d-flex">
            {!!wins && (
              <div
                className="center"
                style={{ backgroundColor: theme.colors.blue, width: `${rate}%` }}
              >
                {wins}
              </div>
            )}
            {!!looses && (
              <div
                className="center"
                style={{ backgroundColor: theme.colors.red, width: `${100 - rate}%` }}
              >
                {looses}
              </div>
            )}
          </div>
        </div>
        <div className="col-1 mr-2">{rate}%</div>
      </div>
    </div>
  )
}

RateByMap.propTypes = {
  map: string.isRequired,
  wins: number.isRequired,
  looses: number.isRequired,
}

export default RateByMap
