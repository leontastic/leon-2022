import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import 'modern-css-reset/src/reset.css'
import './index.css'
import TextFlipper from './components/TextFlipper'

const disciplines = [
  'Full-stack',
  'JavaScript',
  'TypeScript',
  'Front-end',
  'Back-end',
  'React',
  'Node.js',
  'AWS',
  'Cloud infrastructure',
  'Test automation',
]

const render = () =>
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
            <TextFlipper texts={disciplines} /> developer
            <br />
            with 8+ years of experience
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
    document.getElementById('root')
  )

WebFont.load({
  google: {
    families: ['Inconsolata']
  },
  active: render
})
