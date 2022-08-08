import Carousel from '../MUI and others/carousel'
import SideNews from '../MUI and others/sideNews'
import Video from './video'
import PicSlide from '../MUI and others/picSlide'
import FSlide from '../MUI and others/fslide'
import TSlide from '../MUI and others/tSlide'
import MostView from '../MUI and others/mostView'
import FollowUs from './followUs'
import ScrollUpButton from "react-scroll-up-button"; 




function HomePage(){
    return(
        <>
        <div style={{backgroundColor: "whitesmoke", width: "100%"}}>
            <div style={{marginLeft: "8%", marginRight: "8%"}}>
            <Carousel/>
        
                <div id='homepageMain'>
                    <div className='homepageItem'><Video/></div>
                    <div className='homepageItem'><SideNews/></div>
                </div>  
            <PicSlide/>
            <FSlide/>     
            <div id='homeSlideFlw'>
                <div className='item'><TSlide/></div>
                <div className='item'><FollowUs/> <MostView/></div>
                {/* <div className='item'> </div> */}
            </div>
             
              
             </div>
             <ScrollUpButton style={{backgroundColor: "#FF5555"}}/>
        </div>
        </>
    )
}

export default HomePage;