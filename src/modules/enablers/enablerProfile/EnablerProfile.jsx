import React from 'react'
import Card from '../../sideComponents/card'
import NavBar from '../../sideComponents/navBar'
import "./style.scss"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
// import WrappedMap from '../../sideComponents/map';
const EnablerProfile = () => {
    return(
        <div className="main-container" >
             <NavBar/>
             <div className="top">
            <Card big={true}/>     
            <div className="responsible">
            <div className="container">
            <div className="head">
                <HeadsetMicOutlinedIcon style={{fontSize:'30px',marginRight:'10px' ,marginLeft:'10px',marginTop:'0px'}}/>

                   <label className="head-label">Company Responsible</label>
                  
            </div>
            <div className="list">
            <div className="icons">
        <PersonOutlineIcon style={{fontSize:'20px',marginBottom:'10px'}}/>
        <PhoneOutlinedIcon style={{fontSize:'20px',marginBottom:'10px'}}/>
        <MailOutlineOutlinedIcon style={{fontSize:'20px'}}/>
            </div>
            <div className="labels">
           <label >NAME</label>
           <label>PHONE</label>
           <label>MAIL</label>
            </div>
            </div>
            </div>
            </div>
        <div className="responsible">
        <div className="container">
        <div className="head">
        <HeadsetMicOutlinedIcon style={{fontSize:'30px',marginRight:'10px' ,marginLeft:'10px',marginTop:'0px'}}/>

                   <label className="head-label">AIESEC Responsible</label>
                  
            </div>
            <div className="list">
            <div className="icons">

        <PersonOutlineIcon style={{fontSize:'20px',marginBottom:'10px'}}/>
        <PhoneOutlinedIcon style={{fontSize:'20px',marginBottom:'10px'}}/>
        <MailOutlineOutlinedIcon style={{fontSize:'20px'}}/>
            </div>
            <div className="labels">
            <label>NAME</label>
           <label>PHONE</label>
           <label>MAIL</label>
            </div>
            </div>
            </div>
            </div>   
             </div>
             <div className="bottomEnabler">
        <div className="contact">
            <div className="container">
            <div className="head">
            <HeadsetMicOutlinedIcon style={{fontSize:'30px',marginRight:'10px' ,marginTop:'10px',marginLeft:'10px'}}/>
                   <label className="head-label">CONTACT</label>
                  
            </div>
            <div className="list">
            <div className="icons">
        <PersonOutlineIcon style={{fontSize:'30px',marginBottom:'10px'}}/>
        <PhoneOutlinedIcon style={{fontSize:'30px',marginBottom:'10px'}}/>
        <LocationOnOutlinedIcon style={{fontSize:'30px',marginBottom:'10px'}}/>
        <HomeOutlinedIcon style={{fontSize:'30px',marginBottom:'10px'}}/>
        <LanguageOutlinedIcon style={{fontSize:'30px',marginBottom:'10px'}}/>
        <MailOutlineOutlinedIcon style={{fontSize:'30px'}}/>
            </div>
            <div className="labels">
            <label>NAME</label>
           <label>PHONE</label>
            <label>LOCATION</label>
            <label>ADDRESS</label>
            <label>WEBSITE</label>
            <label>MAIL</label>
            </div>
            </div>
            </div>
        </div>
        <div className="map">
        <div className="container">

            </div>
            </div>  
             </div>
        </div>
    )
}

export default EnablerProfile


{/* <WrappedMap
googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDQS5eorO28nlp8d04c7ww-zq2dPhUnykI'}
loadingElement={<div style={{height:'100%'}} />}
containerElement={<div style={{height:'100%'}} />}
mapElement={<div style={{height:'100%'}} />}
/> */}