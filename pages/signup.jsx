import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Head from 'next/head';

export default function signup() {
    return (
        <>
            <Head>
                <title>ویرولرن - ثبت نام کاربر جدید</title>
                <meta name="keywords" content="ثبت نام,ویرولرن,ثبتنام,ثبت نام در ویرولرن,ثبتنام در ویرولرن,ویرولرن" />
                <meta name="description" content="میخواهید در مجموعه ویرولرن ثبت نام کنید؟ فرم این صفحه را پر کنید" />
                <meta name="subject" content="ثبت نام کاربر جدید" />
                <meta name="language" content="FA" />
                <meta name="robots" content="index, follow" />
            </Head>

            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card sm:block hidden bg-blue-500 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-12"></div>
                        <div className="card sm:block hidden bg-pink-500 shadow-lg w-full h-full rounded-3xl absolute transform rotate-12"></div>

                        <div className="relative w-full rounded-3xl px-6 py-4 !pb-6 bg-gray-100 shadow-[0px_0px_9px_6px_rgba(0,0,0,0.12)]">
                            <h1 className="block mt-3 text-3xl text-gray-700 text-center font-semibold">ثبت نام</h1>

                            {/* Error Alert */}
                            {/* <div className="mt-10 bg-red-100 border-r-4 rounded-md border-red-500 text-red-700 p-4" role="alert">
                            <p className="font-bold">خطا های زیر را بررسی کنید :</p>
                            <ul className="mt-5 list-disc mr-[18px]">
                                <li>{{ $error }}</li>
                            </ul>
                        </div> */}

                            <div className="form mt-10">
                                <div>
                                    <TextField id="name" type="text" label="نام و نام خانوادگی" fullWidth={true} size="small" variant="outlined" />
                                </div>

                                <div className="mt-10">
                                    <TextField id="email" type="email" label="ایمیل" fullWidth={true} size="small" variant="outlined" />
                                </div>

                                <div className="mt-10">
                                    <TextField id="password" type="password" label="کلمه عبور" fullWidth={true} size="small" variant="outlined" />
                                </div>

                                <div className="mt-10">
                                    <TextField id="password_confirmation" type="password" label="تکرار کلمه عبور" fullWidth={true} size="small" variant="outlined" />
                                </div>

                                <div className="mt-7">
                                    <Button color="primary" size="large" variant="contained" fullWidth={true}>
                                        ثبت نام
                                    </Button>
                                </div>

                                <div className="mt-9">
                                    <div className="flex justify-center items-center">
                                        <label className="ml-2">قبلا ثبت نام کرده اید؟</label>
                                        <a href="#" className=" text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                                            وارد شوید
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
