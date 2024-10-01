import './CustomCSS/KidsSection.css';
import image from './assets/path.jpeg';
import Kids1 from './Kids1';
function bg(){

    return(
        <>
        <div style={{ 
            backgroundImage: `url(${image})`, 
            height: '220vh', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' ,
            backgroundRepeat:'repeat-y'
          }}>
            <h1>hi</h1>
        </div>
        <Kids1/>
        </>
    )
}

export default bg;