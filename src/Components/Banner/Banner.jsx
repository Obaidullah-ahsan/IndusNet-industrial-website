import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./Banner.css";
import 'animate.css';

const Banner = () => {
  const bannerContent = (
    <div>
      <div className="md:max-w-xl px-5 md:pl-20 pt-32 space-y-6">
        <h2 className="text-4xl font-bold text-white animate__animated animate__fadeInDown">
          IndusNet Industries
        </h2>
        <p className="text-white animate__animated animate__fadeInUp">
          Welcome to IndusNet Industries Ltd, where innovation meets excellence.
          As pioneers in the realm of industrial solutions, we strive to push
          the boundaries of technology and deliver cutting-edge products and
          services to our clients worldwide.
        </p>
        <p className="animate__animated animate__fadeInUp">
          <Link to="/login">
            <button className="btn">About me</button>
          </Link>
        </p>
      </div>
    </div>
  );
  return (
    <div className="mx-2 md:mx-5 mb-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="max-h-[490px] rounded-xl"
      >
        <SwiperSlide>
          <div className="slider1 bg-cover bg-no-repeat h-screen">
            {bannerContent}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider2 bg-cover bg-no-repeat h-screen">
            {bannerContent}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider3 bg-cover bg-no-repeat h-screen">
            {bannerContent}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider4 bg-cover bg-no-repeat h-screen">
            {bannerContent}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider5 bg-cover bg-no-repeat h-screen w-full">
            {bannerContent}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
