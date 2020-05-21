import React from 'react'
import { string } from 'prop-types'

const Profile = ({ name, image }) => (
  <div className="d-flex pb-4">
    <img className="mr-4" alt={`${name}'s profile`} src={image} />
    <h1>{name}</h1>
  </div>
)

Profile.propTypes = {
  name: string.isRequired,
  image: string.isRequired,
}

export default Profile
