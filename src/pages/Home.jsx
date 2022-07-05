import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Block from '../components/Block'
import IconLink from '../components/IconLink'
import Section from '../components/Section'
import TextFlipper from '../components/TextFlipper'

const disciplines = [
  'Full-stack',
  'JavaScript',
  'Node.js',
  'TypeScript',
  'Front-end',
  'Back-end',
  'React',
  'AWS',
  'Cloud infrastructure',
  'Test automation',
]

const Home = () => {
  return (
    <>
      <Section>
        <Block>
          <h2>
            <TextFlipper texts={disciplines} /> developer
            <br />
            with 8+ years of experience
          </h2>
        </Block>
      </Section>
      <Section>
        <Block>
          <IconLink icon="🚀" to="/resume">
            Résumé
          </IconLink>
        </Block>
      </Section>
      <Section>
        <Block style={{ display: 'flex', alignItems: 'center' }}>
          <IconLink
            icon={<Github color="#181717" size="1em" />}
            href="//github.com/leontastic"
          >
            Github
          </IconLink>
        </Block>
        <Block style={{ display: 'flex', alignItems: 'center' }}>
          <IconLink
            icon={<Linkedin color="#0077B5" size="1em" />}
            href="//linkedin.com/in/leon-a-li/"
          >
            LinkedIn
          </IconLink>
        </Block>
      </Section>
      <Section>
        <Block>
          <IconLink icon="🏓" href="/experiments/pong/">
            Pong
          </IconLink>
          &nbsp;
          <a href='//github.com/leontastic/pong-react-redux'>
            (<span>source</span>)
          </a>
        </Block>
      </Section>
    </>
  )
}

export default Home
