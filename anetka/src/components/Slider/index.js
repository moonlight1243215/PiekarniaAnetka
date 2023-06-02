import styles from './index.module.css'
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { Realizations } from '../../assets/info';

function Slider() {


return (
<div className={styles.container}>
    <Swiper
        breakpoints={{
            2250: {
            slidesPerView: 3.2,
            },
            1900: {
            slidesPerView: 2.8,
            },
            1550: {
            slidesPerView: 2.6,
            },
            1475: {
            slidesPerView: 2.4,
            },
            1000: {
            slidesPerView: 2.9,
            },
            890: {
            slidesPerView: 2.7,
            },
            750: {
            slidesPerView: 2.2,
            },
            720: {
            slidesPerView: 2.3,
            },
            500: {
            slidesPerView: 2.8,
            },
            400: {
            slidesPerView: 2.3,
            },
            320: {
            slidesPerView: 1.9,
            },
            270: {
            slidesPerView: 1.7,
            },
            0: {
            slidesPerView: 1.4,
            },
        }}
        spaceBetween={20}
        autoplay={{ 
        delay: 3600,
        disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiperContainer}
    >
       {Realizations.map((e) => (
          <SwiperSlide key={e.id}>
            <div className={styles.slide}>
              <img src={e.photo} className={styles.photo} alt="Slide" />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
</div>
);
}

export default Slider;