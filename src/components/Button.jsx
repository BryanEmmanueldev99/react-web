import React from 'react'

const Button = ({value, type, clase}) => {
  return (
    <div>
      <button type={type} className={clase}>{value}</button>
    </div>
  )
}

export default Button
