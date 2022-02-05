import React from 'react';
import Head from 'next/head';
import ProfileLayout from '../../components/layouts/Profile';
import Row from 'react-bootstrap/Row';
import BuyedCourse from '../../components/BuyedCourse';

export default function () {
    return (
        <>
            <Head>
                <title>صفحه پروفایل - ویرولرن</title>
            </Head>

            <ProfileLayout>
                <h2 className="text-2xl font-medium text-center">دوره های خریداری شده</h2>

                <Row>
                    <BuyedCourse title="حل مسائل و تمرین های الگوریتم و فلوچارت" grid={{ lg: 6, md: 4, sm: 6 }} img="/img/products/algoritm.png" link="/course/id" />

                    <BuyedCourse title="آموزش گرافیک تبلیغاتی پیشرفته" grid={{ lg: 6, md: 4, sm: 6 }} img="/img/products/graphic.png" link="/course/id" />

                    <BuyedCourse title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)" grid={{ lg: 6, md: 4, sm: 6 }} img="/img/products/html-css-jquery.png" link="/course/id" />

                    <BuyedCourse title="برنامه نویس شی گرا در جاوااسکریپت" grid={{ lg: 6, md: 4, sm: 6 }} img="/img/products/javascriptOOP.png" link="/course/id" />
                </Row>
            </ProfileLayout>
        </>
    );
}
