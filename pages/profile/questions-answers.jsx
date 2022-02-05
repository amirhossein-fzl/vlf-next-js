import React from 'react';
import Head from 'next/head';
import ProfileLayout from '../../components/layouts/Profile';

export default function () {
    return (
        <>
            <Head>
                <title>صفحه پروفایل - ویرولرن</title>
            </Head>

            <ProfileLayout>
                <h2 className="text-2xl font-medium text-center">این بخش در حال تکمیل است</h2>
            </ProfileLayout>
        </>
    );
}
