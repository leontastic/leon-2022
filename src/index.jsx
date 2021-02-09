import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-css-reset/src/reset.css'
import './index.css'
import './fonts.css'

const root = document.getElementById('root')

ReactDOM.render(
  <>
    <div style={{ padding: '2em' }}>
      <div style={{ margin: '1em' }}>
        <h1>Leon Li 👨🏻‍🔧</h1>
      </div>
      <div style={{ margin: '1em' }}>
        <h2>
          Full-stack developer
          <br />
          with 8+ years experience
        </h2>
      </div>
    </div>
  </>,
  root
)
