import React from 'react'

const Picture = ({alt, src, size, clase}) => {
  return (
    <div>
      <img className={clase} src={src} alt={alt} width={size} />
    </div>
  )
}

export default Picture
