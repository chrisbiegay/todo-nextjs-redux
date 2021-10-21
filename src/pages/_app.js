import "../styles/normalize.css"
import "../styles/skeleton.css"
import "../styles/app.css"

import {Provider} from "react-redux"
import store from "../app/reduxStore"
import React from "react"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
