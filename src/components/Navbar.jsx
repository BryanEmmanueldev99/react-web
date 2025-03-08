import React, { useState } from 'react'
import LinkRef from './LinkRef';
import Button from './Button';

const Navbar = () => {

    const [ubicacion, setUbicacion] = useState(null);
    const [age, setAge] = useState(28);


    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess);
   }

    const onSuccess = (position) => { 

        let cliente = prompt('Hola, cuál es tu nombre?');

        setUbicacion(`Listo, gracias ${cliente}! Te comparto tu ubiación: ${position.coords.latitude} ${position.coords.longitude}`);


    }

    


    return (
        <div>
            
            <nav className="navbar navbar-expand navbar-light hero_navbar">

                <div className="nav navbar-nav">
                     {ubicacion ? <p className='text-white'>{ubicacion}<i className="bi bi-crosshair"></i></p> : ''}
                    <a className="nav-item nav-link" href="#"><b className='logo'>ELIAM MYSTERY SHOP</b></a>

                    <Button myfunction={handleLocation} type="button" clase="btn btn-primary" value='Compartir mi ubicación'></Button>


                    <form className="d-flex" role="search">
                        <input className="form-control me-2 hero_search" type="search" placeholder="¿Qué necesitas hoy?" aria-label="Search" />
                        <button className="btn btn-outline-success icon_bs" type="button">
                            <i class="bi bi-search"></i>
                        </button>
                    </form>

                    <div className="container_nav">
                        <LinkRef clase="text-light" value="Inicia sesión o regístrate" />

                        <picture>
                            <i class="bi bi-cart-check-fill"></i>
                        </picture>
                    </div>
                </div>
            </nav> 
        </div>
    );
}

export default Navbar
