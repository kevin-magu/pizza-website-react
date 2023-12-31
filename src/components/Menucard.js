import React from 'react'
import '../styles/Menu.css'
function Menucard({image, name,price}) {
  return (
    <>
    <div className="menu-card">
        <div className='menu-photo' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='menu-name'>{name}</div>
        <p className='menu-price'>$ {price}</p>
        <p className='order'>Order</p>
    </div>
    
    </>
  )
}

export default Menucard