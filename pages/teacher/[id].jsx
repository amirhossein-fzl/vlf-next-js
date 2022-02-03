import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Breadcrumb from '../../components/Breadcrumb';
import Avatar from '@mui/material/Avatar';
import Title from '../../components/Title';
import CourseCard from '../../components/CourseCard';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

function Teacher() {
    return (
        <>
            <Head>
                <title>امیرحسین فضلی - مدرس ویرولرن</title>
            </Head>

            <Header />

            <main>
                <Container>
                    <h1 className="text-center text-3xl font-semibold mt-10">امیرحسین فضلی</h1>
                    <Grid container justifyContent="center" className="mt-4">
                        <Breadcrumb active="امیرحسین فضلی">
                            <NextLink href="/">
                                <Link underline="hover">خانه</Link>
                            </NextLink>
                        </Breadcrumb>
                    </Grid>

                    <div className="mt-10 flex flex-col items-center">
                        <div className="flex flex-col justify-center items-center">
                            <Avatar src="/img/Amir-developer-avatar.jpg" sx={{ width: 150, height: 150 }} alt="Teacher Avatar" />
                            <span className="font-medium mt-3 text-lg">امیرحسین فضلی</span>
                            <p className="mt-5">امیرحسین فضلی هستم، عضو هیئت مدیره مجموعه ویرولرن و فعال در حوزه بلاکچین و برنامه نویسی وب.</p>
                        </div>
                    </div>

                    <Card elevation={3} className="mt-14 p-4">
                        <Row>
                            <Col sm={4} >
                                <div className="flex flex-col items-center">
                                    <span className="text-base text-gray-800 font-light">تعداد دانشجویان</span>
                                    <span className="text-xl duration-300 hover:text-2xl text-pink-500 font-medium mt-3">180 دانشجو</span>
                                </div>
                            </Col>

                            <Col sm={4} className="!mt-8 sm:!mt-0">
                                <div className="flex flex-col items-center">
                                    <span className="text-base text-gray-800 font-light">مدت زمان آموزش ها</span>
                                    <span className="text-xl duration-300 hover:text-2xl text-pink-500 font-medium mt-3">12 هزار ساعت</span>
                                </div>
                            </Col>

                            <Col sm={4} className="!mt-8 sm:!mt-0">
                                <div className="flex flex-col items-center">
                                    <span className="text-base text-gray-800 font-light">تعداد آموزش ها</span>
                                    <span className="text-xl duration-300 hover:text-2xl text-pink-500 font-medium mt-3">23 دوره</span>
                                </div>
                            </Col>
                        </Row>

                        {/* <div className="flex justify-between">
                            <div className="flex flex-col items-center">
                                <span className="text-base text-gray-800">تعداد دانشجویان</span>
                                <span className="text-xl mt-3">180 دانشجو</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-base text-gray-800">مدت زمان آموزش ها</span>
                                <span className="text-xl mt-3">12 هزار ساعت</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-base text-gray-800">تعداد آموزش ها</span>
                                <span className="text-xl mt-3">23 دوره</span>
                            </div>
                        </div> */}
                    </Card>

                    <Title className="!mt-10" title="دوره های مدرس" />

                    <Row className="mb-5">
                        <CourseCard title="آموزش گرافیک تبلیغاتی پیشرفته" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/graphic.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="برنامه نویس شی گرا در جاوااسکریپت" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/javascriptOOP.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="آموزش امنیت در PHP" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/php-security.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="آموزش Selenium در سی شارپ از صفر تا صد" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/seleniumc-sharp.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />
                    </Row>
                    <Grid container justifyContent="center" className="mt-10">
                        <Button variant="outlined" color="secondary">
                            مشاهده بیشتر
                        </Button>
                    </Grid>
                </Container>
            </main>

            <Footer />
        </>
    );
}

export default Teacher;
