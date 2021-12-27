import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WebFont from 'webfontloader'
import Block from './components/Block'
import Section from './components/Section'
import Home from './pages/Home'
import Resume from './pages/Resume'
import 'modern-css-reset/src/reset.css'
import './index.css'

const render = () =>
  ReactDOM.render(
    <Router>
      <Section>
        <Block>
          <h1>
            <span style={{ whiteSpace: 'nowrap' }}>Leon Li</span> 👨🏻‍🔧
          </h1>
        </Block>
      </Section>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>,
    document.getElementById('root')
  )

WebFont.load({
  google: {
    families: ['Inconsolata'],
  },
  active: render,
})
