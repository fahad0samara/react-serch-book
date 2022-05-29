import { useEffect, useState } from "react";
import axios from "axios";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination ,Autoplay  } from "swiper";
import FatchData from "./FatchData";


export default function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
          axios
            .get(
              `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Sd77tv3dCC1iUId828jNXaTfjGinlrAs`
            )
            .then(function (response) {
          console.log(response.data.results.books,'hhh');
              setData(response.data.results.books);
              
            })
            .catch(function (error) {
              console.error(error);
            });
         
        }, 100);
      }, []);
  return (
    <div className={" "}>
      <div>
        <h1
        data-aos="fade-left"
        className=" text-center text-3xl">Top selling</h1>
        <h1
         data-aos="fade-right"
        className=" text-center text-6xl mb-12">Explore Top destination</h1>
      </div>
      <Swiper
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
      <div className="">
     
     {data && data.map((item, index) => {
       return (
         <SwiperSlide>
    
          
           <FatchData   key={index} item={item}/>
     
           </SwiperSlide>
       )
       
     
     })}
       
   
   

</div>
</Swiper>

</div>
  );
}
