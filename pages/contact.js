import NavBar from '../components/navbar';
import MouseIcon from '@mui/icons-material/Mouse';
import SquareIcon from '@mui/icons-material/Square';
import { Button, TextField } from "@mui/material";
import FollowUs from '../components/followUs';
import Footer from "../components/footer";
import ScrollUpButton from "react-scroll-up-button"; 


export default function ContactUs(){

    return(
    <>
   <NavBar/>
   <div style={{backgroundColor: "whitesmoke"}}>
    
     <img src="https://c.pxhere.com/photos/e9/ab/hand_laptop_macbook_touchpad_computing-1388435.jpg!d" alt="" width={"100%"}  style={{position: "relative"}}/>  
     <div className="ContactImg" style={{width: "100%", height: 500}}>
        <div style={{position: "absolute", color: "white", paddingLeft: "10%", paddingTop: "15%"}}>CONTACT US
          <b> <p style={{fontSize: 45, position: "absolute"}}>Let's contact</p></b>
                  <MouseIcon style={{fontSize: 40, position: "absolute"}}/>
          </div>
      </div>
      
        <div id="homepageMain">
        <div className="homepageItem" style={{backgroundColor: "white", width: "25%", margin: "5%"}}>
          <div id="navbarMain">
          <SquareIcon className="navbar-flex-item" color="primary" fontSize="10" style={{paddingTop: "18%", paddingLeft: "10%"}}/>
            <h2 className="navbar-flex-item" style={{paddingTop: 30, paddingLeft: 30}}>Headquarters</h2></div>
            <h4 style={{color: "lightgrey", paddingLeft: 30}}>LOCATION:</h4>
            <h4 style={{ paddingLeft: 30}}>44 Canal Center Plaza #200<br/> Alexandria, VA 22314, USA</h4>
        </div>

        <div className="homepageItem" style={{backgroundColor: "white", width: "25%", margin: "5%"}}>
          <div id="navbarMain">
          <SquareIcon className="navbar-flex-item" color="primary" fontSize="10" style={{paddingTop: "18%", paddingLeft: "10%"}}/>
            <h2 className="navbar-flex-item" style={{paddingTop: 30, paddingLeft: 30}}>Headquarters</h2></div>
            <h4 style={{color: "lightgrey", paddingLeft: 30}}>LOCATION:</h4>
            <h4 style={{ paddingLeft: 30}}>44 Canal Center Plaza #200<br/> Alexandria, VA 22314, USA</h4>
        </div>

        <div className="homepageItem" style={{backgroundColor: "white", width: "25%", margin: "5%"}}>
          <div id="navbarMain">
          <SquareIcon className="navbar-flex-item" color="primary" fontSize="10" style={{paddingTop: "18%", paddingLeft: "10%"}}/>
            <h2 className="navbar-flex-item" style={{paddingTop: 30, paddingLeft: 30}}>Headquarters</h2></div>
            <h4 style={{color: "lightgrey", paddingLeft: 30}}>LOCATION:</h4>
            <h4 style={{ paddingLeft: 30}}>44 Canal Center Plaza #200<br/> Alexandria, VA 22314, USA</h4>
        </div>
        </div>
<div id="homepageMain">
<div style={{ marginLeft: "10%", marginRight: "10%"}}>
        <div className="homepageItem">
          <h1>Let's work together!<br/>Fill out the form.</h1>
          <TextField id="filled-basic" label="Full Name" variant="filled" style={{float: "left", margin:5, width: 290 }}/>
          <TextField id="filled-basic" label="Subject" variant="filled" style={{float: "left", margin:5, width: 290  }}/>
          <TextField id="filled-basic" label="Email Address" variant="filled" style={{float: "left", margin:5, width: 290  }}/>
          <TextField id="filled-basic" label="Phone Number" variant="filled" style={{float: "left", margin:5, width: 290  }}/>
          <TextField multiline={true} rows={5} id="filled-basic" label="Tell us about your message..." variant="filled" style={{float: "left", margin:5 , width: 600}}/>

   
        </div><Button style={{backgroundColor: "#1091FF", color: "white", margin: 20 }}>SEND MESSAGE</Button>

        </div>

        <div className="homepageItem"><FollowUs/></div>
        <div className="homepageItem" style={{backgroundColor: "#E9EAEB", width: 300, height: 300, marginTop: 300, marginRight: 200}}>
          <div style={{marginLeft: 30}}>
            <h2 >News Letter</h2>
          <p>Your email address will not be this published. Required fields are News Today.</p>
         <p id="homepageMain">   <input className="homepageItem"  style={{ width: 100, height: 30}} type={"email"} placeholder="Your email address."/>
           <Button className="homepageItem" style={{ backgroundColor: "#1091FF", color: "white", height: 55}}>SING UP</Button></p>
          <p>We hate spam as much as you do</p></div>
        </div>
        </div>
      </div>
      <Footer/>
                   <ScrollUpButton style={{backgroundColor: "#FF5555"}}/>

   </> )
}