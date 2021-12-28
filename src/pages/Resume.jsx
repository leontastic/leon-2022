import { DateTime, Interval } from 'luxon'
import React from 'react'
import Block from '../components/Block'
import IconLink from '../components/IconLink'
import Section from '../components/Section'

const Resume = () => {
  const careerStart = DateTime.local(2013, 9)
  const careerDuration = DateTime.now().diff(careerStart)
  const careerDurationText = careerDuration.toFormat("y'+ years'")

  return (
    <>
      <Section>
        <Block>
          <IconLink icon="👈" to="/">
            Back to home
          </IconLink>
        </Block>
      </Section>
      <Section>
        <Block>
          <h2>Résumé</h2>
          <ul>
            <li>Veteran full stack JavaScript/Node.js developer with 8+ years of experience; proficient with Python, C++</li>
            <li>Comprehensive knowledge of front-end React development and related ecosystem</li>
            <li>Extensive experience maintaining cloud infrastructure (AWS, GCP) with tools like Terraform, K8s</li>
            <li>Seasoned developer of REST and GraphQL back-end services; fluent with both SQL and NoSQL databases</li>
            <li>Power user of popular development tools like Git, bash, Docker, Visual Studio Code, Github</li>
            <li>Mature advocate for code quality control, commitment to SDLC best practices, and developer discipline</li>
          </ul>
        </Block>
      </Section>
      <Section>
        <Block>
          <IconLink icon="💾" href="/static/Leon Li Resume Jan 2022.pdf">
            Click here to download (PDF)
          </IconLink>
        </Block>
      </Section>
    </>
  )
}

export default Resume
