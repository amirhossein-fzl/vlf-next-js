import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Drawer from "@mui/material/Drawer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ButtonBase from "@mui/material/ButtonBase";

const nav = [
    {
        title: "صفحه اصلی",
        link: "/",
    },
    {
        title: "وبلاگ",
        link: "#",
    },
    {
        title: "درباره ما",
        link: "/about",
    },
    {
        title: "تماس باما",
        link: "#",
    },
];

const DisplayMobile = (props) => {
    const [menu, setMenu] = useState(false);
    const [auth, setAuth] = useState(false);

    const toggleMenu = () => {
        return setMenu(!menu);
    };

    const toggleAuth = () => {
        return setAuth(!auth);
    };

    return (
        // <ElevationScroll {...props} threshold={50}>
            <AppBar position="sticky">
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <IconButton color="inherit" aria-label="menu" aria-haspopup="true" onClick={toggleMenu}>
                        <MenuRoundedIcon />
                    </IconButton>

                    {/* <Link href="#"> */}
                    <Image src="/vercel.svg" alt="Logo" width={100} height={50} />
                    {/* </Link> */}

                    <IconButton color="inherit" aria-label="menu" aria-haspopup="true" onClick={toggleAuth}>
                        <PersonRoundedIcon />
                    </IconButton>

                    <>
                        {/* Menu items */}
                        <Drawer anchor="left" open={menu} onClose={() => setMenu(false)}>
                            <div className="w-64">
                                <div className="flex justify-end">
                                    <IconButton color="error" onClick={() => setMenu(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </div>
                                <div className="flex flex-col px-2">
                                    {nav.map((item, key) => {
                                        return (
                                            <Link href={item.link} passHref key={key}>
                                                <ButtonBase className="!bg-gray-100 !shadow-sm duration-200 hover:!bg-blue-500 hover:text-white !mt-3 px-2 !py-1.5 !rounded-lg text-base" TouchRippleProps={{ classes: { ripple: "text-blue-500" } }}>
                                                    {item.title}
                                                </ButtonBase>
                                            </Link>
                                        );
                                    })}
                                    <Link href="#" passHref>
                                        <Button color="primary" size="small" variant="contained" className="!mt-5">
                                            مدرس شوید !
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Drawer>

                        {/* User items */}
                        <Drawer anchor="right" open={auth} onClose={() => setAuth(false)}>
                            <div className="bg-slate-600 w-64 border-b-2 border-red-500 pb-5">
                                <IconButton color="error" onClick={() => setAuth(false)}>
                                    <CloseRoundedIcon />
                                </IconButton>
                                <div className="flex justify-center">
                                    <Image src="/img/Amir-developer-avatar.jpg" className="rounded-full" alt="Avatar" width={80} height={80} />
                                </div>

                                <div className="flex flex-col justify-center items-center mt-1 text-white">
                                    <span className="text-sm">امیرحسین فضلی</span>
                                    <span className="text-xs mt-1">عضویت : 1400/03/25</span>
                                </div>
                            </div>
                            <div className="flex flex-col px-2">
                                {nav.map((item, key) => {
                                    return (
                                        <Link href={item.link} passHref key={key}>
                                            <ButtonBase className="!bg-gray-100 !shadow-sm duration-200 hover:!bg-blue-500 hover:text-white !mt-3 px-2 !py-1.5 !rounded-lg text-base" TouchRippleProps={{ classes: { ripple: "text-blue-500" } }}>
                                                {item.title}
                                            </ButtonBase>
                                        </Link>
                                    );
                                })}
                                <Link href="#" passHref>
                                    <Button color="primary" size="small" variant="contained" className="!mt-5">
                                        مدرس شوید !
                                    </Button>
                                </Link>
                            </div>
                        </Drawer>
                    </>
                </Grid>
            </AppBar>
        // </ElevationScroll>
    );
};

export default DisplayMobile;
