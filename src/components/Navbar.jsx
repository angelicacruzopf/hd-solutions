import React from 'react';
import {Link} from 'react-scroll'
import BlackBtn from './buttons/BtnIcnLeft';
import {ReactComponent as Logo} from '../assets/img/hs-logo-full.svg';

export default function Navbar() {

    const handleSetActive = (to) => {
        console.log(to);
      };

    return (
        <nav class="fixed-nav flex flex-row justify-between items-center text-sm bg-white fixed z-50 w-full shadow-md top-0">
            <div class="m-3 text-xs">
                <Logo />
            </div>  
            <div class='flexflex-row grow justify-center max-w-[1000px]'>
                <ul class='navbar flex flex-row grow justify-evenly font-medium text-lighterGray text-center sm:text-xs break-words lg:text-base gap-x-2'>
                <li>
              <Link activeClass="active" 
                            to="hero" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Inicio</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="products" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Productos</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Sobre nosotros</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="departamentos" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Departamentos</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="contacto" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Contacto</Link>
            </li>
            <li>
              <Link activeClass="active" 
                            to="sucursales" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Sucursales </Link>
            </li>
                </ul>
            </div>
            <div>
                <BlackBtn>
                (939) 252 4501
                </BlackBtn>
            </div>
        </nav>
        
    );
}
