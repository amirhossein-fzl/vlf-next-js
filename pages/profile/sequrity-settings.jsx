import React from 'react';
import Head from 'next/head';
import ProfileLayout from '../../components/layouts/Profile';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '@mui/material/Button';

export default function () {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <>
            <Head>
                <title>صفحه پروفایل - ویرولرن</title>
            </Head>

            <ProfileLayout>
                <h2 className="text-2xl font-medium text-center">تنظیمات امنیتی</h2>

                <Row className="!mt-10">
                    <Col lg={6}>
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg font-medium text-gray-900">تغییر کلمه عبور</h3>

                            <div className="flex flex-col">
                                <div className="mt-5">
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">کلمه عبور فعلی</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} onMouseDown={(e) => e.preventDefault()} edge="end">
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="کلمه عبور فعلی"
                                        />
                                    </FormControl>
                                </div>

                                <div className="mt-5">
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">کلمه عبور جدید</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} onMouseDown={(e) => e.preventDefault()} edge="end">
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="کلمه عبور جدید"
                                        />
                                    </FormControl>
                                </div>

                                <div className="mt-5">
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">تکرار کلمه عبور جدید</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} onMouseDown={(e) => e.preventDefault()} edge="end">
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="تکرار کلمه عبور جدید"
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            <Button className="!mt-10" color="primary" variant="contained">
                                ذخیره تغییرات
                            </Button>
                        </div>
                    </Col>

                    <Col lg={6} className="!mt-10 lg:!mt-0">
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg font-medium text-gray-900">تایید دو مرحله ای</h3>
                            <p className="mt-5 text-sm text-center text-gray-800">وقتی که تایید دو مرحله ای فعال است، از شما هنگام ورود به حساب کاربری، کد 6 رقمی درخواست می شود که این کد به صورت آفلاین توسط Google Authenticator صادر می شود.</p>
                            <Button className="!mt-10" color="primary" variant="contained">
                                فعالسازی
                            </Button>
                        </div>
                    </Col>
                </Row>
            </ProfileLayout>
        </>
    );
}
