import React from 'react'

const Button = ({myfunction ,value, type, clase}) => {
  return (
    <div>
      <button onClick={myfunction} type={type} className={clase}>{value}</button>
    </div>
  )
}

export default Button
