import React, { useState } from 'react'
import {BsHeart, BsFillHeartFill} from 'react-icons/bs'

interface LikeProps {
    fill: Boolean,
    onClick: () => void
}

const Like = ({fill, onClick}: LikeProps) => {

    
  return (
    <div onClick={onClick}>{fill ? <BsFillHeartFill color='red' /> : <BsHeart/>}</div>
  )
}

export default Like