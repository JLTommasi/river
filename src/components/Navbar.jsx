import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>River Shop</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to="/productos">Todos los productos</Link></li>
            <li><Link className='menu-link' to="/productos/remeras">Remeras</Link></li>
            <li><Link className='menu-link' to="/productos/pantalones">Pantalones</Link></li>
            <li><CartWidget /> </li>
        </ul>
    </nav>
)
}

export default Navbar