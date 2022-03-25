

export const baseURL: string = process.env.REACT_APP_IS_PRODUCTION ? `${process.env?.REACT_APP_LIVE_URL || process.env.REACT_APP_HEROKU_URL}` : `http://localhost:${process.env.REACT_APP_SERVER_PORT || 5000}`
