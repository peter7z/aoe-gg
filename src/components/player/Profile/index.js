import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

const Profile = ({ name, image, className }) => (
  <div
    className={cn(
      'd-flex pb-4 flex-column flex-sm-row align-items-center align-items-sm-start',
      className
    )}
  >
    <img className="mr-sm-4" alt={`${name}'s profile`} src={image} />
    <h1 className="text-light">{name}</h1>
  </div>
)

Profile.propTypes = {
  className: string,
  name: string.isRequired,
  image: string.isRequired,
}

export default Profile
