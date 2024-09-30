import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './HomePage';

import NasaMap from './NasaMap'
import {PrimaryButton,DangerButton,SecondaryButton,SuccessButton} from './BootstrapComponents/ButtonTypes';

function App() {
  

  return (
    <>
    <HomePage/>
    
     <NasaMap/>

    </>
  )
}

export default App
