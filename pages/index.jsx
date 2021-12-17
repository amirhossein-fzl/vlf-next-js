import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import Title from "../components/Title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryCard from "../components/CategoryCard";
import Slider from '../components/Slider';
import CourseCard from '../components/CourseCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import dynamic from 'next/dynamic';
// const Slider = dynamic(() => import('../components/Slider.jsx').then((module) => module.default), { ssr: false });

export default function () {
    let categories = [
        {
            title: "هوش مصنوعی",
            icon: "/svg/categories/ai.svg",
            link: "#",
        },
        {
            title: "اندروید",
            icon: "/svg/categories/android.svg",
            link: "#",
        },
        {
            title: "سیستم ها مدیریت محتوا",
            icon: "/svg/categories/cms.svg",
            link: "#",
        },
        {
            title: "ارز دیجیتال",
            icon: "/svg/categories/cryptocurrency.svg",
            link: "#",
        },
        {
            title: "گرافیک",
            icon: "/svg/categories/graphic.svg",
            link: "#",
        },
        {
            title: "جاوااسکریپت",
            icon: "/svg/categories/javascript.svg",
            link: "#",
        },
        {
            title: "شبکه",
            icon: "/svg/categories/network.svg",
            link: "#",
        },
        {
            title: "PHP",
            icon: "/svg/categories/php.svg",
            link: "#",
        },
        {
            title: "پایتون",
            icon: "/svg/categories/python.svg",
            link: "#",
        },
        {
            title: "استارتاپ و کسب و کار",
            icon: "/svg/categories/startup.svg",
            link: "#",
        },
        {
            title: "رابط کاربری",
            icon: "/svg/categories/ui.svg",
            link: "#",
        },
        {
            title: "برنامه نویسی وب",
            icon: "/svg/categories/web.svg",
            link: "#",
        },
    ];

    return (
        <>
            <Head>
                <title>ویرو لرن - لحظه ای از تکنولوژی عقب نمانید !</title>
                <meta name="description" content="لحظه ای از تکنولوژی عقب نمانید !!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header isHome={true} />

            <main>
                <>
                    <Title title="مسیر خود را انتخاب کنید !" />
                    <Container>
                        <Row>
                            {categories.map((category, key) => {
                                return (
                                    <Col lg={2} sm={4} xs={6} className="flex justify-center items-center" key={key}>
                                        <CategoryCard icon={category.icon} title={category.title} link={category.link} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </>

                <>
                    <Title title="پیشنهادات ویژه" />
                    <Slider />
                </>

                <>
                    <Title title="جدید ترین دوره ها" />
                    <Container fluid="lg">
                        <Row className="mb-5">

                            <CourseCard
                                title="حل مسائل و تمرین های الگوریتم و فلوچارت"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/algoritm.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش گرافیک تبلیغاتی پیشرفته"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/graphic.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/html-css-jquery.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="برنامه نویس شی گرا در جاوااسکریپت"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/javascriptOOP.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش متریال بوت استرپ (mdbootstrap)"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/mdbootstrap.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش امنیت در PHP"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/php-security.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="تحلیل و پیش بینی بورس در پایتون"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/Stock-analysis.png"
                                link="#"
                                teacher={{ name: 'میلاد محمدی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                            <CourseCard
                                title="آموزش Selenium در سی شارپ از صفر تا صد"
                                grid={{ lg: 3, md: 4, sm: 6 }}
                                img="/img/products/seleniumc-sharp.png"
                                link="#"
                                teacher={{ name: 'امیرحسین فضلی', link: '#' }}
                                price={250000}
                                time="12:00"
                            />

                        </Row>
                        <Grid container justifyContent="center" className="mt-10">
                            <Button variant="outlined" color="secondary">مشاهده بیشتر</Button>
                        </Grid>
                    </Container>
                </>

            </main>
        </>
    );
}
