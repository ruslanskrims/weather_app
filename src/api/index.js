import { root } from './config.js'

export const api = Object.freeze({
  forecast: {
    fetch: () => {
      return fetch(`${root}`, {
        method: 'GET',
      })
    },
  },
})
