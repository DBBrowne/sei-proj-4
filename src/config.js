export const environment = process.env.NODE_ENV

const devUrl = '/api'
const prodUrl = process.env.REACT_APP_API_URL_PROD
export const baseUrl = environment === 'production' ? prodUrl : devUrl