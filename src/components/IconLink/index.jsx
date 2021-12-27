import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const IconLink = ({ icon, children, to, href, ...props }) => {
  const contents = (
    <>
      <span className='icon-link-icon'>{icon}</span>
      <span style={{ marginLeft: '1em' }}>{children}</span>
    </>
  )

  return to ? (
    <Link to={to} className='icon-link' {...props}>
      {contents}
    </Link>
  ) : (
    <a href={href} className='icon-link' {...props}>
      {contents}
    </a>
  )
}

export default IconLink
