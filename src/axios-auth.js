import axios from 'axios'
// in case of targeting different baseURL
//Create different instance with their configuration and export them.
const authInstance = axios.create({
    baseURL: 'https://testpro-26e7f.firebaseio.com'
})

authInstance.defaults.headers.common['SOMETOKEN'] = 'token'

export default authInstance