import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import React from 'react'
import Block from '../components/Block'
import Section from '../components/Section'
import TextFlipper from '../components/TextFlipper'

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

const Home = () => {
  return (
    <>
      <Section>
        <Block>
          <h1>
            <span style={{ whiteSpace: 'nowrap' }}>Leon Li</span> 👨🏻‍🔧
          </h1>
        </Block>
      </Section>
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
          <span style={{ fontSize: 24 }}>🚀</span>
          <span style={{ margin: '0 1em', fontSize: 24 }}>Résumé</span>
        </Block>
      </Section>
      <Section>
        <Block style={{ display: 'flex', alignItems: 'center' }}>
          <Github color="#181717" size={24} />
          <span style={{ margin: '0 1em', fontSize: 24 }}>Github</span>
        </Block>
        <Block style={{ display: 'flex', alignItems: 'center' }}>
          <Linkedin color="#0077B5" size={24} />
          <span style={{ margin: '0 1em', fontSize: 24 }}>LinkedIn</span>
        </Block>
      </Section>
    </>
  )
}

export default Home
