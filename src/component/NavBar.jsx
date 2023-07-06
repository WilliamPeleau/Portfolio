import React from 'react'
import { NavLink } from "react-router-dom";
import photo from '../assets/William_Peleau.png'
import './NavBar.css'
function NavBar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg app2'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/' className="nav-link">
                                <img src={photo} className='rounded-circle ' style={{ maxWidth: '50px', height: '100' }}/>
                            </NavLink  >
                        </li>
                        
                        <li>
                            <NavLink to='/' className="text-light nav-link">
                                William Peleau
                            </NavLink  >
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/projet' className="text-light nav-link">
                                Projet
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/formation' className="text-light nav-link">
                                Formation
                            </NavLink>
                        </li>
                        
                        <li className='nav-item'>
                            <NavLink to='/experience' className="text-light nav-link">
                                Expérience
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar