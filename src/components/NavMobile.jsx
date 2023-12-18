import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcn from '../assets/img/hs-logo-icon.png';
import BtnArrowLeft from './buttons/BtnArrowLeft';

export default function NavMobile() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="mobile-nav flex-row justify-between items-center text-sm bg-white z-10 w-full shadow-md top-0 flex p-4">
      <div className="h-11 w-11">
        <img src={logoIcn} alt="Logo ícono" />
      </div>
      <div className="flex items-center">
        <div>
          <BtnArrowLeft />
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
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Productos">Productos</Link>
            </li>
            <li>
              <Link to="/Sobre-nosotros">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/Departamentos">Departamentos</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/Sucursales">Sucursales </Link>
            </li>
            <li>
              <Link to="/Horarios">Horarios</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
