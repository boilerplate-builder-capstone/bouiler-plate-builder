import React, { useState, useEffect } from 'react';
import CardCarousel from './CardCarousel';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import axios from 'axios'
import UserEdit from './UserEdit'


function UserDashboard (props){
    const [repos, setRepos] = useState([]) 
    const [edit, setEdit] = useState(false)
    const [image, setImage] = useState("")
    

    useEffect(async()=>{
        try{
        if(props.user.user.github){
            let { data } = await axios.get(props.user.user.github.repos_url)
            setRepos(data)
            setImage(props.user.user.github.avatar_url)
        } else{
            setImage(props.user.user.icon)
        }
        }catch(er){console.log(er)}
    }, [])
    const handleClick =()=>{
        if(edit){
            setEdit(false)
        }else{
            setEdit(true)
        }
    }
    
        console.log(props)
        console.log(props.user.user)
        console.log(image)
        console.log(repos)
        return (
        <div>
            <div id="dashboardcontainer" > 
                <div id="imageeditcont" >
                   <img className="userimage" src={image}/> 
                        {edit?(
                        <UserEdit editChange={handleClick}/>
                        ) : ( 
                            <>    
                            <h3>{props.user.user.username}</h3>
                            <IconButton className="editButton" style={{marginTop: 50}} onClick={handleClick}>
                                <p>Edit Username</p>
                                <EditIcon />
                            </IconButton>
                            </>
                        )}
                </div>
                <div id="gittempinfo">
                        <CardCarousel items={repos}/>
                    <div id="boilerList">
                    <h1>Recent Created Boiler Plates</h1>

                    </div>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

export default connect(mapStateToProps)(UserDashboard)