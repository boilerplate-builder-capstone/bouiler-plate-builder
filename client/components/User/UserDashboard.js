import React from 'react';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Carousel from "react-multi-carousel";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';


function UserDashboard() {
      let items = [{Name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"},{Name: "name2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"}, {Name: "name3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"}, {Name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"},{Name: "name2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"}, {Name: "name3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"}, {Name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"},{Name: "name2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"}, {Name: "name3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", link: "www.github.com"}]
    return (
        <div>
            <div id="dashboardcontainer" > 
                <div id="imageeditcont" >              
                    <img className="userimage" src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png" />
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
                                    <Card key={e.Name}>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                            {e.Name}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                            {e.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link src={e.link}>Checkout on Github</Link>
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

export default UserDashboard 