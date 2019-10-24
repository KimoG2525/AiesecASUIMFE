import React ,{useEffect, useState} from 'react';
import Card from '../../sideComponents/card'
import NavBar from '../../sideComponents/navBar'
import ComboBox from '../../sideComponents/comboBoxDashboard'
import { connect } from 'react-redux';
import {getAllEnablers} from './state/actions'
import ReactPaginate from 'react-paginate';
import "../dashboard/style.scss"
import { Button } from 'semantic-ui-react';
import Paging from '../../sideComponents/paging'


const Dashboard = (props) => {
    const [pageNum,setPageNum] = useState(0)
    const convert = (enabler) =>{
        console.log(enabler)
const myEnabler =  {
    name: enabler.name,
    base64Logo: enabler.base64Logo,
    responsibleName:enabler.responsibleName,
    responsiblePhone:enabler.responsiblePhone,
    id:enabler.id
            }
  return myEnabler     

    }
    useEffect(() => {
	 props.getAllEnablers(pageNum,props.token)
    },[]);

    // useEffect(() => {
    //     props.getAllEnablers(pageNum,props.token)
    //   },[props,pageNum]);
    
    const BodyRender= () =>{
        if(props.enablers.length!=0){
            return(
                <div className="body-render"> 
                <div className="content">
                <div className="dashboard-body"> 
                    {
                props.enablers.data.map((enabler,index) => 
                     <Card enabler={convert(enabler)} key={index} big={false} history={props.history}/>
                  )
                    }
                </div>
                </div>
                <div className="paging-style">
                <Paging />
                </div>      
                     </div>
                      )
        }
        else{
            return(
                <h1>Loading....</h1>
            )
        }

    }

    return(
        <div className="main-container" >
                <NavBar search={true}/>  
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
       
          
            <BodyRender />

   
        </div>
    )
}


const mapDispatchToProps = dispatch => {
	return {
		getAllEnablers: (pageNum,token) => dispatch(getAllEnablers(pageNum,token))
	};
};
const mapStateToProps = state => {
	return {
        enablers: state.dashboard.allEnablers,
        token: state.login.token
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);