import React, { Component } from 'react';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Carousel from "react-multi-carousel";
import { connect } from 'react-redux';
import axios from 'axios'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';


class UserDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
         image: '',
         repos: []
        };
      }
    async componentDidMount(){
        try{
        if(this.props.user.user.github){
            this.setState({ image: this.props.user.user.github.avatar_url})
            let { data } = await axios.get("https://api.github.com/users/kfless12/repos")
            this.setState({ repos: data })
        }
        }catch(er){console.log(er)}
    }
    render (){
        let items = this.state.repos
        return (
        <div>
            <div id="dashboardcontainer" > 
                <div id="imageeditcont" >              
                    <img className="userimage" src={this.state.image} />
                    <IconButton className="editButton" style={{marginTop: 50}}>
                        <p>Edit Profile  </p>
                        <EditIcon />
                    </IconButton>
                </div>
                <div id="gittempinfo">
                        <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        className="repolist"
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass="carouselItem"
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                paritialVisibilityGutter : 40
                                }
                            }
                        }
                        >
                            {items.map(e=>{
                                return ( 
                                    <Card key={e.id}>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                            {e.name}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            {e.description}
                                            created on {(new Date(e.created_at)).toDateString()}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link src={e.html_url}>Checkout on Github</Link>
                                        </CardActions>
                                    </Card>)
                            })}
                    </Carousel>
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