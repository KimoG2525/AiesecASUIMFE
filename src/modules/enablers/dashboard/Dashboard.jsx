import React from 'react';
import Card from '../../sideComponents/card'
import NavBar from '../../sideComponents/navBar'
import ComboBox from '../../sideComponents/comboBox'
import "./style.scss"
import { Button } from 'semantic-ui-react';

const Dashboard = (props) => {

    const myC = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return(
        <div className="main-container" >
          <NavBar/>
          <div className="header">
        <div className="head-label">
        <h1>Enablers</h1>
        </div>
        <div className="combobox">
        <ComboBox
      		title='Sort'
			//data={data.position}
			childName='sort'
		    //handleChange={handleChange}
			//selectedIndex={user.position}
										/>
        </div>
        <div className="combobox">
        <ComboBox
			title='Filter'
			//data={data.position}
			childName='filter'
			//handleChange={handleChange}
			//selectedIndex={user.position}
										/>
        </div>
        </div>
          <div className="content">
         
      

            <div className="body"> 
{
    myC.map((oneC,index) => 
       <Card key={index} big={false} history={props.history}/>
    )
}
            </div>
        </div>
        </div>
    )
}

export default Dashboard