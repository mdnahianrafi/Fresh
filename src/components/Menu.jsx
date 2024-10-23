import React from 'react'

const Menu = ({menuName,className}) => {
  return (
<ul>
    <li className={`${className}`}>{menuName}</li>
</ul>
  )
}

export default Menu

