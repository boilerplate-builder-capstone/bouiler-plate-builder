import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Carousel from "react-multi-carousel";


function CardCarousel(props){
    const { items } = props;

    return(
        <div>
            <Carousel
                        additionalTransfrom={0}
                        showDots={true}
                        arrows
                        autoPlaySpeed={3000}
                        className="repolist"
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={true}
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
                                    <Card key={e.id} className="cards">
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
                                            <Link href={e.html_url}>Checkout on Github</Link>
                                        </CardActions>
                                    </Card>)
                            })}
            </Carousel>
        </div>
    )
}

export default CardCarousel