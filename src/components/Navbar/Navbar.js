import React,{ useEffect }from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import './Navbar.css'



const Navbar = () => {

useEffect(() => {

    const onScroll = () =>{

        let Nav = document.getElementsByClassName('MuiAppBar-positionFixed')[0];
        const navbarPosition = Nav.offsetTop;
        window.onscroll = () => {
     
            if (window.scrollY >= navbarPosition) {
                Nav.style.cssText ='position: fixed; top : 0 ; background-color: rgb(39, 42, 52); box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);'
            }
            else {
                Nav.style.cssText ='position: abuslote; top : 92vh ; background-color: transparent; z-index:1'
            }
     }
     }

    onScroll()

   }, [])
    
    return (
        <div className="Navbar">
            <AppBar >
                <Toolbar>
                    <IconButton edge="start" color="inherit" href="#home" aria-label="menu">
                        TB
                    </IconButton>
                   <nav>
                        <a
                            color="inherit"
                            href="#About"
                        >
                            About
                        </a>
                        <a
                            color="inherit"
                            href="#Projects"
                        >
                            Projects
                        </a>
                        <a
                            color="inherit"
                            href="#Contact"
                        >
                            Contact
                        </a>
                  </nav>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Navbar

