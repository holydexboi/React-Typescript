import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    children: string,
    color?: 'primary' | 'secondary' | 'danger',
    onClick: () => void
}

const Button = ({children, color='primary', onClick}: ButtonProps) => {
  return (
    <>
        <button onClick={onClick} type='button' className={styles['listGroup']}>{children}</button>
    </>
  )
}

export default Button