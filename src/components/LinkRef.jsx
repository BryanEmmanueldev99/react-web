import React from 'react'

const LinkRef = ({clase, value}) => {
  return (
    <div>
      <a className={clase} href="#">
            {value}
      </a>
    </div>
  )
}

export default LinkRef
