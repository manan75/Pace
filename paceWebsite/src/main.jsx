import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Age8to11 from './Age8to11.jsx'
import Age11to15Chap from './Age11to15Chap.jsx'
import Age12to15Material from './Age12to15Material.jsx'
import ChapterList12to15 from './ChapterList12to15.jsx'
import TeenQuiz from './TeenQuiz.jsx'
import Video from './Video.jsx'
import MappGame from './MappGame.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/AboutUs",
    element:<About/>
  },


  {/* routes for learning hub*/},
  
  {
    path: "/Age8To11",
    element:<Age8to11/>
  },
  {
    path:"/Age12to15",
    element:<Age11to15Chap/>
  },
  {
    path:"/Age12to15Material",
    element:<Age12to15Material/>
  },
  {
    path:"/ChapterListAge12to15",
    element:<ChapterList12to15/>
  },
  {
    path: "/TeenQuiz",
    element: <TeenQuiz/>
  },
  {
    path: "/Gallery",
    element: <Video/>
  },
  {
    path: "/MiniGame",
    element:<MappGame/> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
