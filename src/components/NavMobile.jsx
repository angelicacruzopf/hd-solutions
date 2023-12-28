import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logoIcn from '../assets/img/hs-logo-icon.png';
import BtnIcnLeft from './buttons/BtnIcnLeft';


export default function NavMobile() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <nav className="mobile-nav flex-row justify-between items-center text-sm bg-white z-50 w-full shadow-md top-0 flex p-4 fixed">
      <div className="h-11 w-11">
        <img src={logoIcn} alt="Logo ícono" />
      </div>
      <div className="flex items-center">
        <div>
          <BtnIcnLeft></BtnIcnLeft>
        </div>
        <div
          className="text-lg ps-4 text-darkGray cursor-pointer"
          onClick={handleShowNavbar}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {showNavbar && (
        <div className="flex flex-col grow justify-center absolute top-[76px] right-[0]">
          <ul className="navbar flex flex-col grow justify-evenly font-medium text-lighterGray text-center divide-y z-50 bg-white">
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
            <li>
              <Link activeClass="active" 
                            to="horarios" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Horarios</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
