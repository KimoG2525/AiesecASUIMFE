import React from 'react';
import "./styling/cardStyle.scss"
import WalkImg from "../../assets/images/walkAlone.png"

const Card = ({enabler,big,history}) => {

  console.log(enabler)

  const onClickRouter = () => {
    if(!big)
    history.push(`/enablerprofile/${enabler.id}`)
  }

  return(
    <div className={(big)?'bigCard':'card'}>
    <div className='container' onClick={onClickRouter}> 
    <div className='top'>
<div className='logo'>
<img className={(big)?'bigImage':'image'} src={'data:image/*;base64, '+enabler.base64Logo} alt="logo" />
</div>
<div className={(big)?'big-company-name':'company-name'}>
 {enabler.name}
</div>
    </div>
    <div className='bottomCard'>
    <div className={(big)?'big-name':'name'}>
    {enabler.responsibleName}
</div>
<div className={(big)?'big-phone':'phone'}>
{enabler.responsiblePhone}
</div>
    </div>
  </div>
  </div>
  )
}

export default Card