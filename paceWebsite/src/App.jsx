import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AerosolData from './AerosolData.jsx';

import HomePage from './HomePage';
import MapCarousel from './MapCarousel.jsx';

import NasaMap from './NasaMap'
import MapSwitcher from './MapSwitcher.jsx';
import Bg from './JourneyComponent.jsx';
import {PrimaryButton,DangerButton,SecondaryButton,SuccessButton} from './BootstrapComponents/ButtonTypes';
import bg from './JourneyComponent.jsx';
import Kids1 from './Kids1.jsx';
import AiBot from './AiBot.jsx';

function App() {
  

  return (
    <>
    
    <HomePage/>
    <AiBot/>
    
    {/* <Bg/> */}
    

    </>
  )
}

export default App
