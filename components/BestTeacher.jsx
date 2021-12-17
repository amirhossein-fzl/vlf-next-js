import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper';
import CourseCardBase from './CourseCardBaseBase';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


const Bestteacher = () => {
    return (
        <div>
            <Swiper dir="rtl" style={{ padding: '15px 0', }} className="swiper-container" modules={[EffectCoverflow, Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, el: '.slider-pagination' }} coverflowEffect={{ depth: 500, modifier: 1, rotate: 0, slideShadows: true, stretch: 0, }} centeredSlides={true} effect="coverflow" slidesPerView="auto" watchOverflow={true} grabCursor={true}>
                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="حل مسائل و تمرین های الگوریتم و فلوچارت"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/algoritm.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="آموزش گرافیک تبلیغاتی پیشرفته"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/graphic.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/html-css-jquery.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="برنامه نویس شی گرا در جاوااسکریپت"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/javascriptOOP.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="آموزش متریال بوت استرپ (mdbootstrap)"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/mdbootstrap.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="آموزش امنیت در PHP"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/php-security.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="تحلیل و پیش بینی بورس در پایتون"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/Stock-analysis.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700 rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCardBase
                        title="آموزش Selenium در سی شارپ از صفر تا صد"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/seleniumc-sharp.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>
                <div className="slider-pagination"></div>
                <div className="slider-button-prev"></div>
                <div className="slider-button-next"></div>
            </Swiper>
        </div>
    );
}

export default Bestteacher;
