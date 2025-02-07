import React from 'react';
import './Header.css';

const Header = () => {
    return (

        <>


            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-2">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <button className="btn btn-outline-success searchbutton" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <input className="form-control me-2  searchfield bg-light" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav m-auto logo">
                               <h2 className="headmainfresh">Fresh Express</h2>
                            </div>
                            <div className="navbar-nav ms-auto iconmenu">
                               
                                <button className="classfreshbutton">shop now</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            <ul className="drawer__nav my-4">
                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Gift Baskets</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Deals</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Trending</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Art scale</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Corporate Gifts</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Return</a>
                </li>

            </ul>



        </>
    )
}

export default Header







