import React from 'react'
import TemporaryDrawer from './drawer'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Button from '@material-ui/core/Button';
import SearchBar from './searchBar'
import "./styling/navBarStyle.scss"

const NavBar = () => {
    const goToHome = () => {

    }
    return(
        <div className="navBar">
        <SearchBar />
        <Button onClick={goToHome}  ><HomeRoundedIcon style={{color:'#fff',fontSize:'30px'}}/> </Button>
         <TemporaryDrawer />
         </div>
    )
}

export default NavBar