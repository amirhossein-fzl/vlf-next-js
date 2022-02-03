import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ProfileLayout from '../../components/layouts/Profile';

export default function Profile() {
    return (
        <>
            <Head>
                <title>صفحه پروفایل - ویرولرن</title>
            </Head>

            <ProfileLayout>
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
            </ProfileLayout>
        </>
    );
}
