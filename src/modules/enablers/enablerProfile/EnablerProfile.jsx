import React,{useEffect} from 'react'
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
import CustomizedTables from '../../sideComponents/table'
import { connect } from 'react-redux';
import {getEnabler} from './state/actions'

const EnablerProfile = (props) => {
    const id = props.match.params.id;
    useEffect(() => {
        props.getEnabler(id,props.token)
        console.log(props.enabler)
      },[]);

    const convert =(enabler) => {

        const myEnabler = {
            name: enabler.name,
            base64Logo: enabler.base64Logo,
            responsibleName:enabler.companyResponsible.name,
            responsiblePhone:enabler.companyResponsible.phoneNumber,
                    }
        return myEnabler      
    }

    const BodyRender = () => {
        console.log(props.enabler)
        if(props.enabler){
            return(
                <div className="main-container" >
                     <NavBar search={false}/>
                     <div className="top">
                    <Card big={true} enabler={convert(props.enabler)}/>     
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
                   <label >{props.enabler.companyResponsible.name}</label>
                   <label>{props.enabler.companyResponsible.phoneNumber}</label>
                   <label>{props.enabler.companyResponsible.email}</label>
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
                    <label>{props.enabler.aiesecResponsible.firstName} {props.enabler.aiesecResponsible.lastName}</label>
                   <label>{props.enabler.aiesecResponsible.mobileNumber}</label>
                   <label>{props.enabler.aiesecResponsible.user.email}</label>
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
                <LanguageOutlinedIcon style={{fontSize:'30px',marginBottom:'10px'}}/>
                <MailOutlineOutlinedIcon style={{fontSize:'30px',marginTop:'5px'}}/>
                <HomeOutlinedIcon style={{fontSize:'30px',marginBottom:'10px',marginTop:'10px'}}/>
                    </div>
                    <div className="labels">
                    <label style={{overflow: 'hidden',maxWidth:'230px',maxHeight:'22.4px'}}>{props.enabler.name}</label>
                   <label>{props.enabler.mobileNumber}</label>
                 <label style={{overflow: 'hidden',maxWidth:'230px'}}>  <a href={props.enabler.addressUrl} style={{width:'100%'}} >{props.enabler.addressUrl}</a> </label>
                    <label>{props.enabler.websiteUrl}</label>
                    <label>{props.enabler.emailAddress}</label>
                    <label>{props.enabler.address}</label>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="sheets">
                 <div className="datasheet">
        <CustomizedTables />
                     </div>
                     <div className="datasheet">
        <CustomizedTables />
                     </div>
                    </div>
                     </div>
                </div>
            )
        }
        else{
            return(
                <h1>Loading...</h1>
            )
        }
    }
    
   
 return(
     <BodyRender/>
 )
  
}

const mapDispatchToProps = dispatch => {
	return {
		getEnabler: (id,token) => dispatch(getEnabler(id,token))
	};
};
const mapStateToProps = state => {
	return {
        enabler: state.enablerProfile.enablerState,
        token: state.login.token
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EnablerProfile);
