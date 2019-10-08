import React from 'react';
import "./styling/cardStyle.scss"
import WalkImg from "../../assets/images/walkAlone.png"

const Card = (props) => {

  const onClickRouter = () => {
    if(!props.big)
    props.history.push('/enablerProfile')
  }
  return(
    <div className={(props.big)?'bigCard':'card'}>
    <div className='container' onClick={onClickRouter}> 
    <div className='top'>
<div className='logo'>
<img className={(props.big)?'bigImage':'image'} src={WalkImg} alt="logo" />
</div>
<div className={(props.big)?'big-company-name':'company-name'}>
Orascom Group
</div>
    </div>
    <div className='bottomCard'>
    <div className={(props.big)?'big-name':'name'}>
      Ahmed Bahaa
</div>
<div className={(props.big)?'big-phone':'phone'}>
+201234567890
</div>
    </div>
  </div>
  </div>
  )
}

export default Card