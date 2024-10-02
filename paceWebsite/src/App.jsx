import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './HomePage';

import NasaMap from './NasaMap'
import Bg from './JourneyComponent.jsx';
import {PrimaryButton,DangerButton,SecondaryButton,SuccessButton} from './BootstrapComponents/ButtonTypes';
import bg from './JourneyComponent.jsx';
import Kids1 from './Kids1.jsx';

function App() {
  

  return (
    <>
    <HomePage/>
    <NasaMap/>
    {/* <Bg/> */}
    

    </>
  )
}

export default App
