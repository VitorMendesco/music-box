import { http } from '../axios/http'

const getMusics = async () => {
  const response = await http.get('/musics')
  return response.data
}

export default { getMusics }
