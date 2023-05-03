import React, { useState } from 'react'

interface Props {
    children: string,
    maxChar: number
}


const ExpandableText = ({children, maxChar}: Props) => {

    const [status, setStatus] = useState(false)
  return (
    <div><span>{children.substring(0, status ? children.length: maxChar)}{status ? '' : '...'}</span> <button onClick={() => setStatus(!status)}>{status ? 'less': 'more'}</button></div>
  )
}

export default ExpandableText