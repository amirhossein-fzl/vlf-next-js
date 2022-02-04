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
import clsx from 'clsx';
import { useRouter } from "next/router";

export default function ({ children, }) {
    const Router = useRouter();
    return (
        <>
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
                            <StickyBox offsetTop={100} offsetBottom={20}>
                                <Card elevation={2} className="p-3">
                                    <div className="flex flex-col justify-center items-center">
                                        <Avatar src="/img/Amir-developer-avatar.jpg" sx={{ width: 70, height: 70 }} alt="Teacher Avatar" />
                                        <span className="text-base mt-2 font-medium">امیرحسین فضلی</span>
                                    </div>
                                </Card>

                                <Card elevation={2} className="p-3 mt-2">
                                    <ul className="profile-items">
                                        <li>
                                            <NextLink href="/profile">
                                                <ButtonBase className={clsx(Router.pathname == '/profile' && 'active')} TouchRippleProps={{ classes: { ripple: 'text-white' } }}>
                                                    داشبورد
                                                </ButtonBase>
                                            </NextLink>
                                        </li>

                                        <li>
                                            <NextLink href="/profile/edit">
                                                <ButtonBase className={clsx(Router.pathname == '/profile/edit' && 'active')} TouchRippleProps={{ classes: { ripple: 'text-white' } }}>ویرایش اطلاعات شخصی</ButtonBase>
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
                            </StickyBox>
                        </Col>

                        <Col lg={9}>
                            <Card elevation={3} className="px-4 py-6">
                                {children}
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </>
    );
}
