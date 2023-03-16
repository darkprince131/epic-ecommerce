import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';
import { Badge, IconButton } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

function Navbar({ totalItems }) {
    const [click, setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960)
        {
            setDropdown(false);
        } else {
            setDropdown(true); 
                }   }
   
     const onMouseLeave = () => {
        if(window.innerWidth < 960)
         {
           setDropdown(false);
         } else {
          setDropdown(false); 
                            }   }     
                            
    //const location = useLocation();

    return (
        <>
            <nav className='navbar'>
                <Link to='/'
                className='navbar-logo'>
                    EPIC
                </Link>
                <div className='menu-icon' onClick = {handleClick}>
                   < i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick= {closeMobileMenu}>
                            Home
                        </Link>
                    </li> 
                    <li className='nav-item'
                     onMouseEnter ={onMouseEnter}
                     onMouseLeave ={onMouseLeave}>
                        <Link to='/shop' className='nav-links' onClick= {closeMobileMenu}>
                            Shop < i className='fas fa-caret-down'/>
                         </Link>
                         {dropdown && <Dropdown />}
                    </li> 
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick= {closeMobileMenu}>
                            About
                        </Link>
                    </li> 
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick= {closeMobileMenu}>
                            Login
                        </Link>
                    </li> 
                    {/* {!location.pathname === '/cart' && ( */}
                    <li className='nav-item'>
                        <Link to='/cart' className='nav-links' onClick= {closeMobileMenu}>
                        <IconButton color='inherit'>
                            <Badge badgeContent={totalItems} >
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                        </Link>
                    </li> 
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;