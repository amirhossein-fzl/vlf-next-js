import React from 'react';
import Head from 'next/head';
import ProfileLayout from '../../components/layouts/Profile';
import Row from 'react-bootstrap/Row';
import CourseCard from '../../components/CourseCard';
import PostCard from '../../components/PostCard';

export default function () {
    return (
        <>
            <Head>
                <title>صفحه پروفایل - ویرولرن</title>
            </Head>

            <ProfileLayout>
                <h2 className="text-2xl font-medium text-center">دوره های ذخیره شده</h2>

                <Row>
                    <CourseCard title="حل مسائل و تمرین های الگوریتم و فلوچارت" grid={{ lg: 4, md: 4, sm: 6 }} img="/img/products/algoritm.png" link="/course/id" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                    <CourseCard title="آموزش گرافیک تبلیغاتی پیشرفته" grid={{ lg: 4, md: 4, sm: 6 }} img="/img/products/graphic.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                    <CourseCard title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)" grid={{ lg: 4, md: 4, sm: 6 }} img="/img/products/html-css-jquery.png" link="/course/id" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                    <CourseCard title="برنامه نویس شی گرا در جاوااسکریپت" grid={{ lg: 4, md: 4, sm: 6 }} img="/img/products/javascriptOOP.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />
                </Row>

                <h2 className="text-2xl font-medium text-center mt-10">پست های ذخیره شده</h2>

                <Row>
                    <PostCard grid={{ lg: 6, md: 6 }} link="#" title="ویژگی جدید در ASP.Net Core 5.0" img="/img/posts/Asp_net_core5.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'امیرحسین فضلی', link: '#' }} views={95000} />

                    <PostCard grid={{ lg: 6, md: 6 }} link="#" title="نکات مهم و کلیدی در طراحی لوگو" img="/img/posts/nmvldt-logo.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'میلاد محمدی', link: '#' }} views={95000} />

                    <PostCard grid={{ lg: 6, md: 6 }} link="#" title="مهم ترین تکنیک های سئو" img="/img/posts/seo.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'امیرحسین فضلی', link: '#' }} views={95000} />

                    <PostCard grid={{ lg: 6, md: 6 }} link="#" title="چند نکته مهم برای امنیت در شبکه های اجتماعی" img="/img/posts/social_network.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'میلاد محمدی', link: '#' }} views={95000} />
                </Row>
            </ProfileLayout>
        </>
    );
}
