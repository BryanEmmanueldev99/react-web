import React from 'react'
import LinkRef from './LinkRef';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light hero_navbar">
                <div className="nav navbar-nav">

                    <a className="nav-item nav-link" href="#"><b className='logo'>ELIAM MYSTERY SHOP</b></a>

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
