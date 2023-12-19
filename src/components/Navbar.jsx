import React from 'react';
import {Link} from 'react-router-dom'
import BlackBtn from './buttons/BtnIcnLeft';
import {ReactComponent as Logo} from '../assets/img/hs-logo-full.svg';

export default function Navbar() {

    return (
        <nav class="fixed-nav flex flex-row justify-between items-center text-sm bg-white fixed z-50 w-full shadow-md top-0">
            <div class="m-3 text-xs">
                <Logo />
            </div>  
            <div class='flexflex-row grow justify-center'>
                <ul class='navbar flex flex-row grow justify-evenly font-medium text-lighterGray text-center sm:text-xs break-words lg:text-base gap-x-2'>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Sobre-nosotros">Sobre nosotros</Link></li>
                    <li><Link to="/Departamentos">Departamentos</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                    <li><Link to="/Sucursales">Sucursales </Link></li>
                    <li><Link to="/Horarios">Horarios</Link></li> 
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
