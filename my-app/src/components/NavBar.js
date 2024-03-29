import React from 'react'
import navButton from './images/navButton.png'
import logo from './images/logo.png'
import search from './images/search.png'
import shoopingCart from './images/shooping cart.png'
import lang from './images/lang.png'
import  './styles/NavBar.css'
import './styles/MediaStyles.css'
import {Outlet, createSearchParams, useNavigate, useSearchParams} from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();
    return (
    <header>
        
        <nav className="navSmall">
            <img src={navButton} alt="Navigation Button" className="navButton"></img>
            <img src = {logo} alt = "logo" className="logo"></img>
            <span>
                <a className="searchIcon"><img src = {search} alt="search icon"></img></a>
                <a className="cart"><img src = {shoopingCart} alt="shooping cart"></img></a>
            </span>
        </nav>
        
        <div className="navBig">
            <img src = {logo} alt = "logo" className="logo"></img>
            <nav>
                <a>Categories</a>
                <form id="searchForm" name="searchForm">
                    <input type="image" src={search} alt="search" id="searchButton" onClick={function(e){
                        e.preventDefault();
                        let need = document.forms[0]["search"].value;
                        need = need.toLowerCase();
                        navigate({
                            pathname: 'results',
                            search: createSearchParams({
                                search_query : need
                            }).toString()
                        });
                    }}></input>
                    <input className="search" name="search" type="text" placeholder="Search for anything"></input>
                </form>
                <a>Udemy Business</a>
                <a>Teach on Udemy</a>
                <a className="cart"><img src = {shoopingCart} alt="shooping cart"></img></a>
                <a className="login"><button><b>Log in</b></button></a>
                <a className="signup"><button><b>Sign up</b></button></a>
                <a className="lang"><button><img src = {lang} alt="lang"></img></button></a>
            </nav>
        </div>
    </header>
  )
}

export default NavBar