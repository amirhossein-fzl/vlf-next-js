import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Zoom from '@mui/material/Zoom';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function CourseCard(props) {
    return (
        <>
            {props.discount ? (<img src="/svg/discount.svg" alt="" className="w-15 h-auto absolute top--20 left--15 select-none" />) : null}
            <img src={props.img} alt={props.title} className="w-full h-auto" />
            <CardContent className="pt-2 px-2.5 pb-0">

                <Link href={props.link} passHref>
                    <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: 'text-sm bg', arrow: 'text-blue-500' }} >
                        <a className="text-base font-medium overflow-ellipsis overflow-hidden block whitespace-nowrap cursor-pointer">{props.title}</a>
                    </Tooltip>
                </Link>

                <Link href={props.teacher.link}>
                    <a className="inline-flex items-center w-fit mt-3">
                        <Typography variant="body2" gutterBottom className="inline-flex items-center w-fit mt-3">
                            <PersonIcon />
                            <span className="mr-1">{props.teacher.name}</span>
                        </Typography>
                    </a>
                </Link>

                <Typography align="right" variant="button" gutterBottom className="text-blue-500 text-sm flex justify-end items-center " component="p">
                    <span className="ml-1.5 text-xl">{new Intl.NumberFormat().format(props.price)}</span>
                    تومان
                </Typography>

            </CardContent>
            <CardActions>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" className="inline-flex items-center w-fit ">
                        <AccessTimeIcon />
                        <span className="mr-1.5">{props.time} ساعت</span>
                    </Typography>
                    <Link href={props.link} passHref>
                        <Button variant="contained" size="small" color="primary">
                            مشاهده دوره
                        </Button>
                    </Link>
                </Grid>
            </CardActions>
        </>
    );
}

const Bestteacher = () => {
    return (
        <div>
            <Swiper dir="rtl" style={{ padding: '15px 0', }} className="swiper-container" modules={[EffectCoverflow, Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, el: '.slider-pagination' }} coverflowEffect={{ depth: 500, modifier: 1, rotate: 0, slideShadows: true, stretch: 0, }} centeredSlides={true} effect="coverflow" slidesPerView="auto" watchOverflow={true} grabCursor={true}>
                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
                        title="حل مسائل و تمرین های الگوریتم و فلوچارت"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/algoritm.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
                        title="آموزش گرافیک تبلیغاتی پیشرفته"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/graphic.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
                        title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/html-css-jquery.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
                        title="برنامه نویس شی گرا در جاوااسکریپت"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/javascriptOOP.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
                        title="آموزش متریال بوت استرپ (mdbootstrap)"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/mdbootstrap.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
                        title="آموزش امنیت در PHP"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/php-security.png"
                        link="#"
                        teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
                        title="تحلیل و پیش بینی بورس در پایتون"
                        grid={{ lg: 12, md: 12, sm: 12 }}
                        img="/img/products/Stock-analysis.png"
                        link="#"
                        teacher={{ name: 'میلاد محمدی', link: '#' }}
                        price={250000}
                        time="12:00"
                    />
                </SwiperSlide>

                <SwiperSlide className="bg-white text-gray-700	rounded-theme shadow-xl overflow-hidden" style={{ width: 275 }}>
                    <CourseCard
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
