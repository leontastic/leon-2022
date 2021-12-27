import React from 'react'
import './index.css'

const Block = ({ children, style = {}, ...props }) => (
  <div className="block" {...props}>
    {children}
  </div>
)

export default Block
