 import SearchIcon from '@mui/icons-material/Search';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import { Button } from '@mui/material';
 import TwitterIcon from '@mui/icons-material/Twitter';
 import InstagramIcon from '@mui/icons-material/Instagram';
 import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TrendingCarousel from '../MUI and others/trendingCarousel'


function NavBar () {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
            return (<>
    <div style={{marginLeft: "8%", marginRight: "8%"}}>
     <div style={{borderBottom: "1px dashed grey"}} id='navbarTop'>
        <div className='navbar-flex-item' style={{backgroundColor: "tomato", width: 100, height: 30, color: "white"}}>Trending</div>
        <div className='navbar-flex-item' style={{width: "63%", color: "grey"}}><TrendingCarousel/></div>
        <div className='navbar-flex-item' style={{borderRight: "1px solid grey", color: "grey"}}>{date}</div>
        <div className='navbar-flex-item' style={{color: "grey"}}>
            <TwitterIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
        </div>
    </div>
    <div  id='navbarMain'>
   

        <Link href="/"><img src='https://newsprk.quomodosoft.com/static/media/logo.c1cdba1b.png' alt='' width={250} style={{padding: 30}}/></Link>

        {/* <div className='navbar-flex-item' style={{backgroundColor: "grey", width: "50%", height: 100, marginTop: 40, color: "white"}}>
            <div id='navbarAd' style={{marginTop: 5}}>
                <div className='navbar-flex-item'>
                  <h1>  <FeedIcon/>
                    Newspark</h1>
                </div>
                <div className='navbar-flex-item' style={{borderLeft: "1px solid white", borderRight: "1px solid white" }}>
                    Newspark responsive newspaper and <br/> magazine Wordpress theme.
                </div>
                <div className='navbar-flex-item'>
                    ADS 
                    <br/>670X85px Area!
                </div>
            </div>
        </div>           */}
    </div>
       
    <div id='navbarMain'>
        <div className='navbar-flex-item'>

        </div>

        <div className='navbar-flex-item'>
            <Button style= {{color: "black", backgroundColor: "#EBECF0", height: 45, textTransform: "none", fontFamily: "monospace", fontWeight: "bold", fontSize: 13, margin: 5}}>World</Button>
        </div>
        <div className='navbar-flex-item'>
        <Link href={"/sports"}><Button style= {{color: "black", backgroundColor: "#EBECF0", height: 45, textTransform: "none",  fontFamily: "monospace", fontWeight: "bold", fontSize: 13, margin: 5}}>Sports</Button></Link>
        </div>
        <div className='navbar-flex-item'>
        <Link href={"/contact"}><Button style= {{color: "black", backgroundColor: "#EBECF0", height: 45, textTransform: "none",  fontFamily: "monospace", fontWeight: "bold", fontSize: 13, margin: 5}}>Contact</Button></Link>
        </div>
        <div className='navbar-flex-item'> 
            <Link href="/search"><SearchIcon style = {{ marginTop: 15, color: "grey", fontSize: 35}}/></Link>
            <AccountCircleIcon style = {{marginTop: 15, color: "grey",  fontSize: 35}}/>
        </div>
        <div className='navbar-flex-item'>
        </div>
        <div >
            <WbSunnyIcon style={{color: "#269BFF", marginTop: 8, fontSize: 40,position: "absolute"}}/>
            <h2 style= {{ marginTop: 0, position: "absolute", marginLeft: 45}}>20°C</h2>
            <h4 style= {{color: "grey", marginTop: 30, position: "absolute", marginLeft: 45}}>Yerevan</h4>
        </div>
    </div>
     </div>
            </>
    )
            }
          

export default NavBar;