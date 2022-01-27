import React, { useState } from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';
import Slider from '../components/Slider';
import CourseCard from '../components/CourseCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BestTeacher from '../components/BestTeacher';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import PostCard from '../components/PostCard';
import EmailSvg from '../public/svg/EmailSvg';
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer';
// import dynamic from 'next/dynamic';
// const Slider = dynamic(() => import('../components/Slider.jsx').then((module) => module.default), { ssr: false });

export default function () {
    const [validEmail, setValidEmail] = useState(false);

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return setValidEmail(!re.test(String(email).toLowerCase()));
    }

    let categories = [
        {
            title: 'هوش مصنوعی',
            icon: '/svg/categories/ai.svg',
            link: '/category/id',
        },
        {
            title: 'اندروید',
            icon: '/svg/categories/android.svg',
            link: '/category/id',
        },
        {
            title: 'سیستم ها مدیریت محتوا',
            icon: '/svg/categories/cms.svg',
            link: '/category/id',
        },
        {
            title: 'ارز دیجیتال',
            icon: '/svg/categories/cryptocurrency.svg',
            link: '/category/id',
        },
        {
            title: 'گرافیک',
            icon: '/svg/categories/graphic.svg',
            link: '/category/id',
        },
        {
            title: 'جاوااسکریپت',
            icon: '/svg/categories/javascript.svg',
            link: '/category/id',
        },
        {
            title: 'شبکه',
            icon: '/svg/categories/network.svg',
            link: '/category/id',
        },
        {
            title: 'PHP',
            icon: '/svg/categories/php.svg',
            link: '/category/id',
        },
        {
            title: 'پایتون',
            icon: '/svg/categories/python.svg',
            link: '/category/id',
        },
        {
            title: 'استارتاپ و کسب و کار',
            icon: '/svg/categories/startup.svg',
            link: '/category/id',
        },
        {
            title: 'رابط کاربری',
            icon: '/svg/categories/ui.svg',
            link: '/category/id',
        },
        {
            title: 'برنامه نویسی وب',
            icon: '/svg/categories/web.svg',
            link: '/category/id',
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
                            <CourseCard title="حل مسائل و تمرین های الگوریتم و فلوچارت" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/algoritm.png" link="/course/id" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                            <CourseCard title="آموزش گرافیک تبلیغاتی پیشرفته" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/graphic.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                            <CourseCard title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/html-css-jquery.png" link="/course/id" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                            <CourseCard title="برنامه نویس شی گرا در جاوااسکریپت" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/javascriptOOP.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                            <CourseCard title="آموزش متریال بوت استرپ (mdbootstrap)" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/mdbootstrap.png" link="/course/id" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                            <CourseCard title="آموزش امنیت در PHP" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/php-security.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                            <CourseCard title="تحلیل و پیش بینی بورس در پایتون" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/Stock-analysis.png" link="/course/id" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                            <CourseCard title="آموزش Selenium در سی شارپ از صفر تا صد" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/seleniumc-sharp.png" link="/course/id" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />
                        </Row>
                        <Grid container justifyContent="center" className="mt-10">
                            <Button variant="outlined" color="secondary">
                                مشاهده بیشتر
                            </Button>
                        </Grid>
                    </Container>
                </>

                <>
                    <Title title="مدرس برتر هفته" />
                    <Container className="mt-5">
                        <Row>
                            <Col lg={4} sm={12} xs={12}>
                                <Grid container direction="row" spacing={3} alignItems="center">
                                    <Grid item>
                                        <Avatar src="/img/Amir-developer-avatar.jpg" sx={{ width: 100, height: 100 }} />
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="column" spacing={1}>
                                            <Grid item>
                                                <Typography variant="h4">امیرحسین فضلی</Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="subtitle1">بیوگرافی من</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container direction="column" className="!mt-10">
                                    <Typography variant="body" textAlign="justify">
                                        از تیر ماه سال 98 یادگیری برنامه نویسی را شروع کردم. از سال 98 تا الان، به تسلط بالایی در برنامه نویسی رسیدم و اکنون در خدمت شما با مجموعه ویرولرن هستم تا دانشم را به شما انتقال دهم. از فعالیت در مجموعه ویرولرن حس خوبی دارم.
                                    </Typography>
                                </Grid>
                                <Button className="!mt-10" color="primary" variant="contained">
                                    مشاهده صفحه مدرس
                                </Button>
                            </Col>

                            <Col lg={8} sm={12} xs={12} className="pr-10 mt-10 lg:mt-0">
                                <BestTeacher />
                            </Col>
                        </Row>
                    </Container>
                </>

                <>
                    <Title title="مدرس شوید !" />
                    <Container className="md:w-[90%]">
                        <Row>
                            <Col lg={6}>
                                <Image src="/svg/become-teacher.svg" width={513} height={327} />
                            </Col>
                            <Col lg={6}>
                                <p> بله ! شما میتوانید در مجموعه ویرولرن در هر حوزه ای، تدریس کنید و به درآمد های عالی دست پیدا کنید ! هدف مجموعه ویرولرن، تکثیر دانش افراد متخصص، به افراد مبتدی است. </p>
                                <Button className="!mt-10" color="error" variant="outlined" size="small">
                                    مدرس شوید !
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </>

                <>
                    <Title title="وبلاگ ویرولرن" />
                    <Container>
                        <Row>
                            <PostCard grid={{ lg: 4, md: 6 }} link="#" title="ویژگی جدید در ASP.Net Core 5.0" img="/img/posts/Asp_net_core5.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'امیرحسین فضلی', link: '#' }} views={95000} />

                            <PostCard grid={{ lg: 4, md: 6 }} link="#" title="نکات مهم و کلیدی در طراحی لوگو" img="/img/posts/nmvldt-logo.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'میلاد محمدی', link: '#' }} views={95000} />

                            <PostCard grid={{ lg: 4, md: 6 }} link="#" title="مهم ترین تکنیک های سئو" img="/img/posts/seo.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'امیرحسین فضلی', link: '#' }} views={95000} />

                            <PostCard grid={{ lg: 4, md: 6 }} link="#" title="چند نکته مهم برای امنیت در شبکه های اجتماعی" img="/img/posts/social_network.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'میلاد محمدی', link: '#' }} views={95000} />

                            <PostCard grid={{ lg: 4, md: 6 }} link="#" title="دستیار صوتی چیست؟" img="/img/posts/voice-assistant.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'امیرحسین فضلی', link: '#' }} views={95000} />

                            <PostCard grid={{ lg: 4, md: 6 }} link="#" title="5 مورد از بهترین Vscode Extention ها برای توسعه دهندگان جاوااسکریپت" img="/img/posts/VS_Code_Extension.png" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" author={{ name: 'میلاد محمدی', link: '#' }} views={95000} />
                        </Row>
                        <Grid container justifyContent="center" className="mt-10">
                            <Button variant="outlined" color="secondary">
                                مشاهده بیشتر
                            </Button>
                        </Grid>
                    </Container>
                </>

                <>
                    <Container>
                        <Grid className="mt-16" container direction="column" justifyContent="center" alignItems="center">
                            <EmailSvg className="w-[100pt] text-amber-500" />
                            <p className="mt-6 mb-8 text-center">عضو خبرنامه ما شوید تا از آخرین تخفیف ها و اطلاعیه ها جا نمانید !</p>
                            <Col lg={4} sm={6} xs={10}>
                                <TextField error={validEmail} fullWidth id="outlined-basic" type="email" label="ایمیل شما" placeholder="ایمیل خود را اینجا وارد کنید ..." onChange={(e) => validateEmail(e.target.value)} size="small" variant="outlined" />
                            </Col>
                            ‌
                            <Button variant="contained" color="primary">
                                عضویت در خبرنامه
                            </Button>
                        </Grid>
                    </Container>
                </>
            </main>

            <Footer />
        </>
    );
}
