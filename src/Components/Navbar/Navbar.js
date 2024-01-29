import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>PetHub</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link className='linkname' to='/'> Shop </Link>{menu === "shop" ? <hr/>:<></> }</li>
            <li onClick={()=>{setMenu("men")}}><Link className='linkname' to='/men'> Men </Link> {menu === "men" ? <hr/>:<></> }</li>
            <li onClick={()=>{setMenu("women")}}><Link className='linkname' to='/women'>Women </Link>  {menu === "women" ? <hr/>:<></> }</li>
            <li onClick={()=>{setMenu("kids")}}><Link className='linkname' to='/kids'>Kids </Link> {menu === "kids" ? <hr/>:<></> }</li>
        </ul>
        <div className="nav-login-cart">
         <Link className='linkname' to ='/login'><button>Login</button></Link>
       <Link  className='linkname' to ='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
