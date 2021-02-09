import React from 'react'
import ReactDOM from 'react-dom'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import 'modern-css-reset/src/reset.css'
import './index.css'
import './fonts.css'

const root = document.getElementById('root')

ReactDOM.render(
  <>
    <div style={{ padding: '1em 2em' }}>
      <div style={{ margin: '1em' }}>
        <h1>
          <span style={{ whiteSpace: 'nowrap' }}>Leon Li</span> 👨🏻‍🔧
        </h1>
      </div>
    </div>
    <div style={{ padding: '1em 2em' }}>
      <div style={{ margin: '1em' }}>
        <h2>
          Full-stack developer
          <br />
          with 8+ years experience
        </h2>
      </div>
    </div>
    <div style={{ padding: '1em 2em' }}>
      <div style={{ margin: '1em' }}>
        <span style={{ fontSize: 24 }}>🚀</span>
        <span style={{ margin: '0 1em', fontSize: 24 }}>Résumé</span>
      </div>
    </div>
    <div style={{ padding: '1em 2em' }}>
      <div style={{ margin: '1em', display: 'flex', alignItems: 'center' }}>
        <Github color="#181717" size={24} />
        <span style={{ margin: '0 1em', fontSize: 24 }}>Github</span>
      </div>
      <div style={{ margin: '1em', display: 'flex', alignItems: 'center' }}>
        <Linkedin color="#0077B5" size={24} />
        <span style={{ margin: '0 1em', fontSize: 24 }}>LinkedIn</span>
      </div>
    </div>
  </>,
  root
)
