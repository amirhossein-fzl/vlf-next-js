import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Popover from '@mui/material/Popover';
import InputBase from '@mui/material/InputBase';
import LinearProgress from '@mui/material/LinearProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchResult from '../SearchResult';
import ElevationScroll from '../ElevationScroll';

const nav = [
    {
        title: 'صفحه اصلی',
        link: '/',
    },
    {
        title: 'وبلاگ',
        link: '/blog',
    },
    {
        title: 'درباره ما',
        link: '/about',
    },
    {
        title: 'تماس باما',
        link: '/contact',
    },
];

const DisplayDesktop = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [tab, setTab] = useState(2);

    const closeSearch = () => {
        setAnchorEl(null);
    };

    const openSearchH = (event) => setAnchorEl(event.currentTarget);

    const changeTapSearch = (event, newValue) => {
        setTab(newValue);
    };

    const openSearch = Boolean(anchorEl);
    const id = openSearch ? 'search-popover' : undefined;

    const TabPanel = (props) => {
        return tab == props.tab ? <div className="m-2.5 flex flex-col">{props.children}</div> : null;
    };

    return (
        <>
            <ElevationScroll {...props} threshold={30}>
                <AppBar color="white" elevation={0} position="sticky" className="py-[5px] px-[15px]">
                    <Container>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Image src="/vercel.svg" alt="Logo" width={100} height={50} />
                            <nav>
                                {nav.map((item, key) => {
                                    return (
                                        <Link href={item.link} key={key}>
                                            <a className="link">{item.title}</a>
                                        </Link>
                                    );
                                })}
                                <Link href="#" passHref>
                                    <Button color="primary" size="small" variant="outlined" className="!mr-2.5">
                                        مدرس شوید !
                                    </Button>
                                </Link>
                            </nav>

                            <div className="flex justify-center items-center">
                                <IconButton size="small" color="primary" onClick={openSearchH}>
                                    <SearchRoundedIcon />
                                </IconButton>

                                <>
                                    <Popover id={id} open={openSearch} anchorEl={anchorEl} onClose={closeSearch} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} elevation={3}>
                                        <div className="rounded-theme bg-blue-200 my-1.5 mx-auto w-fit flex items-center">
                                            <InputBase
                                                placeholder="سرچ ..."
                                                classes={{
                                                    root: '!text-blue-500',
                                                    input: '!p-2 !pl-1.5 duration-200 !w-full !w-[18ch] focus:!w-[24ch]',
                                                }}
                                                autoFocus={true}
                                                inputProps={{ 'aria-label': 'search' }}
                                            />

                                            <div className="px-1 h-full flex items-center justify-center z-[1000]">
                                                <IconButton size="small" color="primary">
                                                    <SearchRoundedIcon />
                                                </IconButton>
                                            </div>
                                        </div>

                                        <LinearProgress className="my-2.5 mx-1.5" color="secondary" />

                                        <Tabs value={tab} onChange={changeTapSearch} indicatorColor="primary" textColor="primary" centered={true} variant="fullWidth" className="my-2.5 mx-1.5">
                                            <Tab label="وبلاگ" />
                                            <Tab label="دوره ها" />
                                            <Tab label="همه" />
                                        </Tabs>

                                        <TabPanel tab={2}>
                                            <>
                                                <SearchResult image="/img/products/graphic.png" link="#" title="آموزش گرافیک تبلیغاتی پیشرفته" in="دوره ها" />
                                                <SearchResult image="/img/posts/Asp_net_core5.png" link="#" title="ویژگی های جدید Asp.Net Core 5" in="وبلاگ" loading={true} />
                                                <SearchResult image="/img/posts/nmvldt-logo.png" link="#" title="نکات مهم و کلیدی در طراحی لوگو" in="وبلاگ" />
                                            </>
                                        </TabPanel>

                                        <TabPanel tab={1}>
                                            <>
                                                <SearchResult image="/img/products/graphic.png" link="#" title="آموزش گرافیک تبلیغاتی پیشرفته" in="دوره ها" />
                                            </>
                                        </TabPanel>

                                        <TabPanel tab={0}>
                                            <>
                                                <SearchResult image="/img/posts/Asp_net_core5.png" link="#" title="ویژگی های جدید Asp.Net Core 5" in="وبلاگ" />
                                                <SearchResult image="/img/posts/nmvldt-logo.png" link="#" title="نکات مهم و کلیدی در طراحی لوگو" in="وبلاگ" />
                                            </>
                                        </TabPanel>
                                    </Popover>
                                </>

                                <Link href="/signin" passHref>
                                    <Button variant="contained" className="!mr-2.5" color="primary" size="small" disableElevation>
                                        ورود
                                    </Button>
                                </Link>

                                <Link href="/signup" passHref>
                                    <Button variant="outlined" className="!mr-2.5" color="secondary" size="small" disableElevation>
                                        ثبت نام
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                    </Container>
                </AppBar>
            </ElevationScroll>
        </>
    );
};

export default DisplayDesktop;
