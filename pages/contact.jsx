import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Grid from '@mui/material/Grid';
import Breadcrumb from '../components/Breadcrumb';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function contact() {
    return (
        <>
            <Head>
                <title>تماس باما - ویرولرن</title>
            </Head>

            <Header />

            <main>
                <Container>
                    <h1 className="mt-10 text-center text-3xl font-semibold">تماس باما</h1>

                    <Grid container justifyContent="center" className="mt-4">
                        <Breadcrumb active="تماس باما">
                            <NextLink href="/">
                                <Link underline="hover">خانه</Link>
                            </NextLink>
                        </Breadcrumb>
                    </Grid>

                    <Row className="!mt-20 flex-col-reverse lg:flex-row">
                        <Col lg={6}>
                            {/* <h2 className="text-center text-3xl font-aviny">فرم تماس باما</h2> */}
                            <div className="flex items-center">
                                <span className="bg-blue-500 w-8 h-1.5 rounded-md ml-3"></span>
                                <h2 className="text-4xl text-gray-700 font-semibold font-aviny">فرم تماس باما</h2>
                            </div>

                            <div className="form mt-10">
                                <Row>
                                    <Col lg={6} className="mt-10">
                                        <TextField id="name" type="text" label="نام و نام خانوداگی" fullWidth={true} size="small" variant="outlined" />
                                    </Col>

                                    <Col lg={6} className="!mt-7 lg:!mt-0">
                                        <TextField id="email" type="email" label="ایمیل" fullWidth={true} size="small" variant="outlined" />
                                    </Col>
                                </Row>

                                <div className="mt-7">
                                    <TextField id="message" label="پیام شما" fullWidth multiline rows={5} />
                                </div>

                                <div className="mt-7">
                                    <Button color="primary" size="large" variant="contained" fullWidth={true}>
                                        ثبت
                                    </Button>
                                </div>

                                <ul className="list-disc mt-7 text-red-500">
                                    <li>درخواست شما نهایتا از 30 دقیقه تا 24 ساعت آینده پاسخ داده می شود.</li>
                                    <li className="mt-2">از ارسال مکرر فرم خودداری کنید.</li>
                                </ul>

                            </div>
                        </Col>

                        <Col lg={6}>
                            <Image src="/img/contact.png" width={1712} height={1712} alt="Contact Image" />
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </>
    );
}
