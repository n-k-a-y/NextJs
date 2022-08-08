import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import Link from 'next/link';

export default function FSlide() {
  const current = new Date();
  const date = `July ${current.getDate()}, ${current.getFullYear()}`;
  return ( <>
    <h1 style={{marginLeft: 25}}>Feature News</h1>
    <Swiper
       style={{width: "100%", paddingBottom: 50}}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <div style={{position: "relative"}}>
        <SwiperSlide>
          <div className='featureNews' style={{color: "white",position: "relative"}}>
            <img src={"http://newsprk.quomodosoft.com/static/media/feature2.be97b50f.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
            <b><div  style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12, color: "white"}}>TECHNOLOGY / {date}</div>
            <div  style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15, color: "white"}}>Best garden wing supplies for the horticu ltural</div></b>
          </div>  
            </SwiperSlide>
        <SwiperSlide>
        <div className='featureNews'>
            <img src={"http://newsprk.quomodosoft.com/static/media/feature3.3f5ab883.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
            <b><div  style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12, color: "white"}}>TECHNOLOGY / {date}</div>
            <div  style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15, color: "white"}}>Copa America: Luis Suarez from devastated US.</div></b>
          </div>  
            </SwiperSlide>

        <SwiperSlide>
        <div className='featureNews'>
        <img src={"http://newsprk.quomodosoft.com/static/media/feature4.e2e49bfc.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
        <b><div  style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12, color: "white"}}>TECHNOLOGY / {date}</div>
            <div  style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15, color: "white"}}>Best garden wing supplies for the horticu ltural</div></b>
          </div>  
            </SwiperSlide>
            
        <SwiperSlide>
          <div className='featureNews'>
            <img src={"http://newsprk.quomodosoft.com/static/media/feature3.3f5ab883.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
            <b><div  style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12, color: "white"}}>TECHNOLOGY / {date}</div>
            <div  style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15, color: "white"}}>Copa America: Luis Suarez from devastated US.</div></b>
            </div>
          </SwiperSlide>
            
        </div>
      </Swiper>
      </>
  );
};