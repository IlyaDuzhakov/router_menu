import React from 'react'
import { NavLink } from 'react-router-dom'

// className={classes.join(' ')}
//  const classes = [
    //     'menu__item',
    //     'menu__item-active'
    // ]


const Menu = () => {

   const active = ({ isActive }) => {
     return isActive ? 'menu__item menu__item-active' : 'menu__item'
   }
  return (
    <nav className='menu'>
        <NavLink className={active} to='/'>Главная</NavLink>
        <NavLink className={active} to='/drift'>дрифт-такси</NavLink>
        <NavLink className={active} to='/forza'>forza-carting</NavLink>
        <NavLink className={active} to='/timeattack'>time-attack</NavLink>
    </nav>
  )
}

export default Menu