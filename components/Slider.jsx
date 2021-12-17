import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'swiper/css';
import 'swiper/css/autoplay';

const Slider = () => {
    return (
        <>
            <Swiper dir="rtl" className="container" modules={[Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false }} slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, el: '.SliderPagination' }}>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}>
                            <img src="/img/products/graphic.png" className="w-full h-auto rounded-theme" alt="alt" />
                        </Col>
                        <Col lg={6}>
                            <div>
                                {/* <FlipCountdown
                                    hideYear
                                    hideMonth
                                    dayTitle='روز'
                                    hourTitle='ساعت'
                                    minuteTitle='دقیقه'
                                    secondTitle='ثانیه'
                                    titlePosition='bottom'
                                    theme="light"
                                    endAt={'2022-12-12 01:26:58'} // Date/Time
                                /> */}

                                <p className="mt-4 text-[16pt] text-center">آموزش گرافیک تبلیغاتی پیشرفته</p>
                                <p className="mt-8 blur-[2.3px] line-through text-2xl text-center text-zinc-800">500,000 تومان</p>
                                <Grid container justifyContent="center" className="mt-8">
                                    <div className="text-rose-600 w-fit text-2xl px-5">250,000 تومان</div>
                                    <div className="bg-rose-600 text-white w-fit p-2.5 rounded-full">50% تخفیف</div>
                                </Grid>
                                <Grid container justifyContent="center" className="mt-10">
                                    <Button color="primary" variant="contained">
                                        مشاهده محصول
                                    </Button>
                                </Grid>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row>
                        <Col lg={6}>
                            <img src="/img/products/algoritm.png" className="w-full h-auto rounded-theme" alt="alt" />
                        </Col>
                        <Col lg={6}>
                            <div>
                                {/* <FlipCountdown
                                    hideYear
                                    hideMonth
                                    dayTitle='روز'
                                    hourTitle='ساعت'
                                    minuteTitle='دقیقه'
                                    secondTitle='ثانیه'
                                    titlePosition='bottom'
                                    theme="light"
                                    endAt={'2022-12-12 01:26:58'} // Date/Time
                                /> */}

                                <p className="mt-4 text-[16pt] text-center">حل مسائل و تمرین های الگوریتم و فلوچارت</p>
                                <p className="mt-8 blur-[2.3px] line-through text-2xl text-center text-zinc-800">500,000 تومان</p>
                                <Grid container justifyContent="center" className="mt-8">
                                    <div className="text-rose-600 w-fit text-2xl px-5">250,000 تومان</div>
                                    <div className="bg-rose-600 text-white w-fit p-2.5 rounded-full">50% تخفیف</div>
                                </Grid>
                                <Grid container justifyContent="center" className="mt-10">
                                    <Button color="primary" variant="contained">
                                        مشاهده محصول
                                    </Button>
                                </Grid>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <div className="SliderPagination"></div>
                <div className="slider-button-prev"></div>
                <div className="slider-button-next"></div>
            </Swiper>
        </>
    );
};

export default Slider;
