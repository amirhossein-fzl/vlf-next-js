import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function blog() {
    return (
        <>
            <Head>
                <title>وبلاگ - ویرولرن</title>
            </Head>

            <>
                <Header />

                <main>
                    <h1 className="text-center text-3xl font-semibold mt-10">به وبلاگ ویرولرن خوش آمدید</h1>
                    <div className="flex flex-col items-center justify-center mt-5">
                        <p className="text-sm text-gray-600 mb-5">دسترسی به آخرین اخبار در مورد تکنولوژی !!</p>
                        <Breadcrumb active="وبلاگ">
                            <NextLink href="/">
                                <Link underline="hover">خانه</Link>
                            </NextLink>
                        </Breadcrumb>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <InputBase
                            type="text"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button color="primary" size="small" variant="contained">
                                        جست و جو
                                    </Button>
                                </InputAdornment>
                            }
                            placeholder="بنویسید ..."
                            classes={{ root: 'bg-gray-100 rounded-lg px-4 py-2 duration-300', focused: 'bg-transparent border border-blue-500' }}
                        />
                    </div>

                    <Container>
                        <div className="flex items-center mt-20">
                            <span className="bg-blue-500 w-8 h-1.5 rounded-md ml-3"></span>
                            <h2 className="text-4xl text-gray-700 font-semibold font-aviny">جدید ترین ها</h2>
                        </div>
                        <Swiper dir="rtl" className="container mt-10" modules={[Autoplay, Pagination]} autoplay={{ delay: 3000, disableOnInteraction: false }} slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, el: '.slider-pagination' }}>
                            <SwiperSlide>
                                <Row>
                                    <Col lg={6}>
                                        <img src="/img/posts/Asp_net_core5.png" className="w-full h-auto rounded-2xl" alt="post image" />
                                    </Col>
                                    <Col lg={6}>
                                        <div className="px-3 py-4">
                                            <p className="text-[16pt]">آموزش گرافیک تبلیغاتی پیشرفته</p>
                                            <p className="line-clamp-3 mt-5 text-sm text-gray-600 leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                            <a className="flex items-center mt-10">
                                                <Image src="/img/Amir-developer-avatar.jpg" className="rounded-full" width={50} height={50} alt="Avatar" />
                                                <div className="flex flex-col mr-3">
                                                    <span className="text-base text-bold">امیرحسین فضلی</span>
                                                    <span className="text-sm text-gray-600">مدیر ویرولرن</span>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="flex justify-between items-center mt-10">
                                            <Button color="primary" variant="contained">
                                                مشاهده مطلب
                                            </Button>
                                            <Rating name="post-stars" dir="ltr" icon={<StarRoundedIcon />} emptyIcon={<StarBorderRoundedIcon />} value={4} readOnly />
                                        </div>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Row>
                                    <Col lg={6}>
                                        <img src="/img/posts/nmvldt-logo.png" className="w-full h-auto rounded-2xl" alt="post image" />
                                    </Col>
                                    <Col lg={6}>
                                        <div className="px-3 py-4">
                                            <p className="text-[16pt]">حل مسائل و تمرین های الگوریتم و فلوچارت</p>
                                            <p className="line-clamp-3 mt-5 text-sm text-gray-600 leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                            <a className="flex items-center mt-10">
                                                <Image src="/img/Amir-developer-avatar.jpg" className="rounded-full" width={50} height={50} alt="Avatar" />
                                                <div className="flex flex-col mr-3">
                                                    <span className="text-base text-bold">امیرحسین فضلی</span>
                                                    <span className="text-sm text-gray-600">مدیر ویرولرن</span>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="flex justify-between items-center mt-10">
                                            <Button color="primary" variant="contained">
                                                مشاهده مطلب
                                            </Button>
                                            <Rating name="post-stars" dir="ltr" icon={<StarRoundedIcon />} emptyIcon={<StarBorderRoundedIcon />} value={4} readOnly />
                                        </div>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                            <div className="slider-pagination"></div>
                            <div className="slider-button-prev"></div>
                            <div className="slider-button-next"></div>
                        </Swiper>
                    </Container>
                </main>

                <Footer />
            </>
        </>
    );
}
