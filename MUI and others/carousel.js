import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';


export default function Carousel() {
  
  return (
  <Swiper
    style={{width: "100%"}}
      spaceBetween={50}
      slidesPerView={3}
      loop={true} 
    >
      <SwiperSlide>
        <div className='business'>
          <img  src={"http://newsprk.quomodosoft.com/static/media/hside4.9619e50d.jpg"}   alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15, color: "black"}}>The home decoration document: photograph of an...</div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='business'>
          <img src={"http://newsprk.quomodosoft.com/static/media/hside5.e0bfac1a.jpg"} alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15, color: "black"}}>U.S. Response subash says he will label regions by risk of...</div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='business'>
          <img src={"http://newsprk.quomodosoft.com/static/media/hside6.437dad9b.jpg"} alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15, color: "black"}}>Stimul package will transform the government fundamentally.</div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className='business'>
          <img src={"http://newsprk.quomodosoft.com/static/media/hside1.7efb90e8.jpg"} alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15, color: "black"}}>U.S. Response subash says he will label regions by risk of...</div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};