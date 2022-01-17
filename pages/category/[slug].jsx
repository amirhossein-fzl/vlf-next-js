import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import Breadcrumb from '../../components/Breadcrumb';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import CourseCard from '../../components/CourseCard';

export default function Category() {
    const [sortBy, setSortBy] = React.useState(1);

    const handleChangeSort = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <>
            <Head>
                <title>دسته بندی جاوااسکریپت - ویرولرن</title>
            </Head>

            <Header />

            <main>
                <Container>
                    <h1 className="mt-10 text-center text-3xl font-semibold">جاوااسکریپت</h1>

                    <Grid container justifyContent="center" className="mt-4">
                        <Breadcrumb active="جاوااسکریپت">
                            <NextLink href="/">
                                <Link underline="hover">خانه</Link>
                            </NextLink>
                        </Breadcrumb>
                    </Grid>

                    <Card elevation={3} className="mt-10 px-2.5 py-2.5">
                        <div className="flex justify-between items-center flex-col sm:flex-row">
                            <InputBase
                                type="text"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton color="primary" size="small">
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="بنویسید ..."
                                classes={{ root: 'w-full sm:w-fit border bg-gray-100 rounded-lg pr-4 pl-2 py-2 duration-300', focused: 'bg-transparent border-blue-500' }}
                            />

                            <div className="sm:w-52 w-full mt-5 sm:mt-0">
                                <FormControl fullWidth size="small">
                                    <InputLabel id="sorted-by-label">مرتب سازی بر اساس</InputLabel>
                                    <Select labelId="sorted-by-label" id="sorted-by-select" value={sortBy} label="مرتب سازی بر اساس" onChange={handleChangeSort}>
                                        <MenuItem value={1}>تاریخ انتشار</MenuItem>
                                        <MenuItem value={2}>محبوبیت</MenuItem>
                                        <MenuItem value={3}>قیمت</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </Card>
                </Container>

                <Container fluid="lg">
                    <Row className="!mt-10">
                        <CourseCard title="حل مسائل و تمرین های الگوریتم و فلوچارت" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/algoritm.png" link="#" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="آموزش گرافیک تبلیغاتی پیشرفته" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/graphic.png" link="#" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="طراحی های خلاقانه رابط کاربری وبسایت (Html, Css, Jquery)" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/html-css-jquery.png" link="#" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="برنامه نویس شی گرا در جاوااسکریپت" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/javascriptOOP.png" link="#" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="آموزش متریال بوت استرپ (mdbootstrap)" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/mdbootstrap.png" link="#" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="آموزش امنیت در PHP" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/php-security.png" link="#" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="تحلیل و پیش بینی بورس در پایتون" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/Stock-analysis.png" link="#" teacher={{ name: 'میلاد محمدی', link: '#' }} price={250000} time="12:00" />

                        <CourseCard title="آموزش Selenium در سی شارپ از صفر تا صد" grid={{ lg: 3, md: 4, sm: 6 }} img="/img/products/seleniumc-sharp.png" link="#" teacher={{ name: 'امیرحسین فضلی', link: '#' }} price={250000} time="12:00" />
                    </Row>
                    <Grid container justifyContent="center" className="mt-16">
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
