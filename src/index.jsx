import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import Home from './pages/Home'
import 'modern-css-reset/src/reset.css'
import './index.css'

const render = () =>
  ReactDOM.render(
    <Home />,
    document.getElementById('root')
  )

WebFont.load({
  google: {
    families: ['Inconsolata']
  },
  active: render
})
