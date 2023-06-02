import styles from "./index.module.css"
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { FaRegClock } from "react-icons/fa";
import { News } from "../../assets/info";

const NewsOne = () => {

SwiperCore.use([Autoplay]);

return (
<div className={styles.container}>
    <div className={styles.toolBox}>
        <p className={styles.text}>AKTUALNOŚCI</p>
    </div>
    <div className={styles.box}>
        <Swiper
            breakpoints={{
                1200: {
                    slidesPerView: 4,
                },
                720: {
                    slidesPerView: 3,
                },
                520: {
                    slidesPerView: 2,
                },
                420: {
                    slidesPerView: 1.5,
                },
                320: {
                    slidesPerView: 1.2,
                },
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                },
            }}  
            spaceBetween={30}
            autoplay={{ 
            delay: 6000,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={styles.swiperBox}
            loop={true}
        >
        {News.map((e) => (
            <SwiperSlide>
                <div className={styles.slide}>
                    <img className={styles.photo} src={e.photo}/>
                    <div className={styles.textBox}>
                        <div className={styles.dateBox}>
                            <div className={styles.clock}>
                                <FaRegClock/>
                            </div>
                            <p className={styles.date}>{e.date}</p>
                        </div>
                        <div className={styles.titleBox}>
                            <p className={styles.title}>{e.title}</p>
                            <p className={styles.content}>{e.content}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
</div>
  )
};

export default NewsOne;
