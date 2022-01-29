import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Breadcrumb from '../../components/Breadcrumb';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import StickyBox from 'react-sticky-box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

export default function () {
    return (
        <>
            <Head>
                <title>صفحه پروفایل - ویرولرن</title>
            </Head>

            <Header />

            <main>
                {/* <h1 className="mt-10 text-center text-3xl font-semibold">حساب کاربری</h1>

                <Grid container justifyContent="center" className="mt-4">
                    <Breadcrumb active="حساب کاربری">
                        <NextLink href="/">
                            <Link underline="hover">خانه</Link>
                        </NextLink>
                    </Breadcrumb>
                </Grid> */}

                <Container>
                    <Row className="!mt-28">
                        <Col lg={3}>
                            {/* <StickyBox offsetTop={100} offsetBottom={20}> */}
                            <Card elevation={2} className="p-3">
                                <div className="flex flex-col justify-center items-center">
                                    <Avatar src="/img/Amir-developer-avatar.jpg" sx={{ width: 70, height: 70 }} alt="Teacher Avatar" />
                                    <span className="text-base mt-2 font-medium">امیرحسین فضلی</span>
                                </div>
                            </Card>

                            <Card elevation={2} className="p-3 mt-2">
                                <ul className="profile-items">
                                    <li>
                                        <NextLink href="#">
                                            <ButtonBase className="active" TouchRippleProps={{ classes: { ripple: 'text-white' } }}>
                                                داشبورد
                                            </ButtonBase>
                                        </NextLink>
                                    </li>

                                    <li>
                                        <NextLink href="#">
                                            <ButtonBase TouchRippleProps={{ classes: { ripple: 'text-white' } }}>ویرایش اطلاعات شخصی</ButtonBase>
                                        </NextLink>
                                    </li>

                                    <li>
                                        <NextLink href="#">
                                            <ButtonBase TouchRippleProps={{ classes: { ripple: 'text-white' } }}>دوره های خریداری شده</ButtonBase>
                                        </NextLink>
                                    </li>

                                    <li>
                                        <NextLink href="#">
                                            <ButtonBase TouchRippleProps={{ classes: { ripple: 'text-white' } }}>ذخیره شده ها</ButtonBase>
                                        </NextLink>
                                    </li>

                                    <li>
                                        <NextLink href="#">
                                            <ButtonBase TouchRippleProps={{ classes: { ripple: 'text-white' } }}>پرسش و پاسخ ها</ButtonBase>
                                        </NextLink>
                                    </li>

                                    <li>
                                        <NextLink href="#">
                                            <ButtonBase TouchRippleProps={{ classes: { ripple: 'text-white' } }}>مدارک درخواستی</ButtonBase>
                                        </NextLink>
                                    </li>
                                </ul>

                                <Button color="error" size="small" variant="contained" className="!w-full !mt-3">
                                    خروج از حساب کاربری
                                </Button>
                            </Card>
                            {/* </StickyBox> */}
                        </Col>

                        <Col lg={9}>
                            <Card elevation={3} className="px-4 py-6">
                                <h2 className="text-2xl font-medium text-center">اطلاعات حساب کاربری</h2>

                                <Row className="!mt-10">
                                    <Col lg={6}>
                                        <div className="flex flex-col justify-center">
                                            <div className="flex items-center">
                                                <i className="fa-duotone fa-user"></i>
                                                <span className="mr-2">نام و نام خانوادگی : امیرحسین فضلی</span>
                                            </div>

                                            <div className="flex items-center mt-3">
                                                <i className="fa-duotone fa-mobile-notch"></i>
                                                <span className="mr-2">شماره تلفن همراه : 09142275361</span>
                                            </div>

                                            <div className="flex items-center mt-3">
                                                <i className="fa-duotone fa-user-check"></i>
                                                <span className="mr-2">نام کاربری : amirhossein_fzl</span>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="flex flex-col justify-center">
                                            <div className="flex items-center">
                                                <i className="fa-duotone fa-at"></i>
                                                <span className="mr-2">ایمیل : amirhossein95b@gmail.com</span>
                                            </div>

                                            <div className="flex items-center mt-3">
                                                <i className="fa-solid fa-envelope"></i>
                                                <span className="mr-2">دریافت خبرنامه: بله</span>
                                            </div>

                                            <div className="flex items-center mt-3">
                                                <i className="fa-duotone fa-cake-candles"></i>
                                                <span className="mr-2">تاریخ تولد : 1384/03/25</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <h2 className="text-2xl font-medium text-center mt-10">آخرین دوره هایی که خریدید</h2>

                                <div className="mt-10 flex flex-col">
                                    <Card elevation={3} className="p-3">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[15px] font-medium">آموزش تحلیل بورس با پایتون</p>

                                            <NextLink href="/course/id">
                                                <Button color="primary" size="small" endIcon={<ChevronLeftRoundedIcon />} variant="outlined">
                                                    مشاهده
                                                </Button>
                                            </NextLink>
                                        </div>
                                    </Card>

                                    <Card elevation={3} className="p-3 mt-4">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[15px] font-medium">آموزش تحلیل بورس با پایتون</p>

                                            <NextLink href="/course/id">
                                                <Button color="primary" size="small" endIcon={<ChevronLeftRoundedIcon />} variant="outlined">
                                                    مشاهده
                                                </Button>
                                            </NextLink>
                                        </div>
                                    </Card>

                                    <Card elevation={3} className="p-3 mt-4">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[15px] font-medium">آموزش تحلیل بورس با پایتون</p>

                                            <NextLink href="/course/id">
                                                <Button color="primary" size="small" endIcon={<ChevronLeftRoundedIcon />} variant="outlined">
                                                    مشاهده
                                                </Button>
                                            </NextLink>
                                        </div>
                                    </Card>

                                    <Card elevation={3} className="p-3 mt-4">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[15px] font-medium">آموزش تحلیل بورس با پایتون</p>

                                            <NextLink href="/course/id">
                                                <Button color="primary" size="small" endIcon={<ChevronLeftRoundedIcon />} variant="outlined">
                                                    مشاهده
                                                </Button>
                                            </NextLink>
                                        </div>
                                    </Card>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </>
    );
}
