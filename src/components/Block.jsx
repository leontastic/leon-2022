import React from 'react'

const Block = ({ children, style = {}, ...props }) => (
  <div style={{ margin: '1em', ...style }} {...props}>
    {children}
  </div>
)

export default Block
