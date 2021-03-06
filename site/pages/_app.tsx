import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="blackburnian.us.auth0.com"
      clientId="qBr5LcCLrn4VNv24LkzeF4jgc1t5NnYz"
      redirectUri="http://localhost:3000"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
