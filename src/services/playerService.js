import httpClient from 'httpClient'

class UserService {
  static getPlayerInfo(profileId, count = 10000) {
    return httpClient.post('/GetMPMatchList', {
      profileId,
      count,
    })
  }
}

export default UserService
