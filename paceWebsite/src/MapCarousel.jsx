import NasaMap from './NasaMap';
import AerosolData from './AerosolData';
import './CustomCSS/MapCarousel.css';
import {  Carousel } from 'react-bootstrap';



function MapCarousel(){


    return(
        <Carousel slide={false}>
        <Carousel.Item>
         <NasaMap/>
        </Carousel.Item>
        <Carousel.Item>
          <AerosolData/>
          
        </Carousel.Item>
        <Carousel.Item>
        <NasaMap/>
         
        </Carousel.Item>
      </Carousel>
    )
}

export default MapCarousel;