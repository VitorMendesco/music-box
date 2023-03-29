import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://64237708001cb9fc203f8fbb.mockapi.io/',
  headers: {
    'Content-type': 'application/json',
  },
})
