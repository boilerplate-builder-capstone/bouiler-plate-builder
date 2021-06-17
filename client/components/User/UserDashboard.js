import React, { Component } from 'react';
import CardCarousel from './CardCarousel';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import axios from 'axios'
import UserEdit from './UserEdit'


class UserDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
         image: '',
         repos: [],
         edit: false,
        };
      }

    async componentDidMount(){
        try{
            console.log(this.props)
        if(this.props.user.user.github){
            let { data } = await axios.get("https://api.github.com/users/kfless12/repos")
            this.setState({ repos: data, image: this.props.user.user.github.avatar_url })
        } else{
            this.setState({image: this.props.user.user.icon})
        }
        }catch(er){console.log(er)}
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    handleClick =()=>{
        this.setState({edit: true})
    }

    render (){
        const { repos, edit } = this.state
        const git = this.props.user.user.github
        return (
        <div>
            <div id="dashboardcontainer" > 
                <div id="imageeditcont" >
                   <img className="userimage" src={this.state.image}/> 
                        {edit?(
                        <UserEdit />
                        ) : ( 
                            <>    
                            <h3>{this.props.user.user.username}</h3>
                            <IconButton className="editButton" style={{marginTop: 50}} onClick={this.handleClick}>
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
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

export default connect(mapStateToProps)(UserDashboard)