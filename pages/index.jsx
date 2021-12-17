import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import Title from "../components/Title";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';

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
            </main>
        </>
    );
}
