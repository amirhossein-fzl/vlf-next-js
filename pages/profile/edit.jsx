import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ProfileLayout from '../../components/layouts/Profile';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterJalali from 'date-fns-jalali';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import moment from 'moment';
import jMoment from 'moment-jalaali';
import JalaliUtils from '@date-io/jalaali';

export default function () {
    jMoment.loadPersian({ dialect: "persian-modern" });
    const [birthDay, setBirthDay] = React.useState(moment());
    return (
        <>
            <Head>
                <title>صفحه پروفایل - ویرولرن</title>
            </Head>

            <ProfileLayout>
                <h2 className="text-2xl font-medium text-center">ویرایش حساب کاربری</h2>

                <Row className="!mt-10">
                    <Col xs={12} sm={6} className="!mt-5 sm:!mt-0">
                        <TextField fullWidth label="نام و نام خانوادگی" defaultValue="امیرحسین فضلی" id="name" />
                    </Col>

                    <Col xs={12} sm={6} className="!mt-5 sm:!mt-0">
                        <TextField fullWidth label="ایمیل" defaultValue="amirhossein95b@gmail.com" id="email" />
                    </Col>
                </Row>

                <Row className="!mt-10">
                    <Col xs={12} sm={6} className="!mt-5 sm:!mt-0">
                        <TextField fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="شماره موبایل" defaultValue="09142275361" />
                    </Col>

                    <Col xs={12} sm={6} className="!mt-5 sm:!mt-0">
                        <TextField fullWidth label="نام کاربری" defaultValue="amirhossein95b" id="username" />
                    </Col>
                </Row>

                <TextField id="bio" className="!mt-10" fullWidth label="بیوگرافی" multiline rows={4} value="امیرحسین فضلی هستم، عضو هیئت مدیره مجموعه ویرولرن و فعال در حوزه بلاکچین و برنامه نویسی وب." />

                <Row className="!mt-10">
                    <Col xs={12} sm={6} className="!mt-5 sm:!mt-0">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">جنسیت</FormLabel>
                            <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="خانم" />
                                <FormControlLabel value="male" control={<Radio />} label="آقا" />
                                <FormControlLabel value="other" control={<Radio />} label="ترجیح میدهم نگویم" />
                            </RadioGroup>
                        </FormControl>
                    </Col>

                    <Col xs={12} sm={6} className="!mt-5 sm:!mt-0">
                        <LocalizationProvider dateAdapter={JalaliUtils} locale="fa">
                            <MobileDatePicker
                                label="تاریخ تولد"
                                okText="تأیید"
                                cancelText="لغو"
                                clearText="پاک کردن"
                                labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
                                value={birthDay}
                                onChange={(date) => {
                                    setBirthDay(date);
                                }}
                                inputFormat="jYYYY/jMM/jDD"
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider>
                    </Col>
                </Row>

                <div className="flex justify-center mt-16">
                    <Button color="primary" variant="contained">ذخیره تغییرات</Button>
                </div>
            </ProfileLayout>
        </>
    );
}
