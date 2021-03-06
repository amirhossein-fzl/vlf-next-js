import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Breadcrumb from '../../components/Breadcrumb';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import Avatar from '@mui/material/Avatar';
import PlyrVideo from '../../components/PlyrVideo';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Lesson from '../../components/Lesson';
import StickyBox from 'react-sticky-box';

export default function Course() {
    const [liked, setLiked] = React.useState(false);
    const [likeCount, setLikeCount] = React.useState(553);

    const handleLike = () => {
        setLiked((prev) => {
            let isLiked = !prev;

            if (isLiked) {
                setLikeCount((prev) => {
                    return prev + 1;
                });
            } else {
                setLikeCount((prev) => {
                    return prev - 1;
                });
            }
            return isLiked;
        });
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Head>
                <title>?????????? ?????????? ???????? ???? ????????????</title>
            </Head>

            <Header />

            <main>
                <Container className="lg:!w-full lg:!max-w-full">
                    <h1 className="mt-10 text-center text-3xl font-semibold">?????????? ?????????? ???????? ???? ????????????</h1>

                    <Grid container justifyContent="center" className="mt-4">
                        <Breadcrumb active="?????????? ?????????? ???????? ???? ????????????">
                            <NextLink href="/">
                                <Link underline="hover">????????</Link>
                            </NextLink>
                        </Breadcrumb>
                    </Grid>

                    <Row className="!mt-10">
                        <Col lg={3}>
                            <StickyBox offsetTop={100} offsetBottom={20}>
                                <Card className="w-full py-2 px-2" elevation={3}>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <IconButton color="red" size="small" onClick={handleLike}>
                                                {liked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
                                            </IconButton>
                                            <span className="text-sm">{likeCount} ????????</span>
                                        </div>

                                        <div>
                                            <ChatBubbleRoundedIcon className="text-gray-600" />
                                            <span className="mr-2 text-sm">618 ??????????</span>
                                        </div>

                                        {/* <div>
                                        <Rating name="course-stars" icon={<StarRoundedIcon />} emptyIcon={<StarBorderRoundedIcon />} value={3} />
                                    </div> */}
                                    </div>
                                </Card>

                                <Card className="mt-5 py-4" elevation={3}>
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="bg-green-500 text-white p-1.5 rounded-l-full">???? ?????? ??????????</div>
                                        <div className="bg-orange-500 text-white p-1.5 rounded-r-full">?????????????? ???? ??????????????</div>
                                    </div>

                                    <div className="mt-8 px-3">
                                        <p className="text-[13px]">???????? ?????????? ???? ?????????? ???????? ?????? ???? ???? ???????? ?????? ?????? ???????? ??????????. ???? ???????? ???? ?????????? ?????? ?????? ???????? !</p>

                                        {/* <ul className="mt-5">
                                        <li>
                                            <i className="fa-duotone fa-chalkboard-user"></i>
                                        </li>

                                        <li>
                                            <i className="fa-duotone fa-users"></i>
                                        </li>

                                        <li>
                                            <i className="fa-duotone fa-video"></i>
                                        </li>

                                        <li>
                                            <i className="fa-duotone fa-clock"></i>
                                        </li>

                                        <li>
                                            <i className="fa-duotone fa-calendar-arrow-up"></i>
                                        </li>
                                    </ul> */}

                                        <div className="flex items-center mt-6">
                                            <div className="flex flex-col items-center">
                                                <i className="fa-duotone text-pink-500 fa-chalkboard-user"></i>
                                                <i className="fa-duotone mt-4 text-pink-500 fa-users"></i>
                                                <i className="fa-duotone mt-4 text-pink-500 fa-video"></i>
                                                <i className="fa-duotone mt-4 text-pink-500 fa-clock"></i>
                                                <i className="fa-duotone mt-4 text-pink-500 fa-calendar-arrow-up"></i>
                                            </div>

                                            <ul className="flex flex-col mr-3 text-sm leading-5">
                                                <li>???????? ???????? : ???????????????? ????????</li>
                                                <li className="mt-3">?????????? ?????????????????? ???????? : 240 ??????</li>
                                                <li className="mt-3">?????????? ?????????? ???? : 24 ??????????</li>
                                                <li className="mt-3">?????? ???????? ???????? : 28 ????????</li>
                                                <li className="mt-3">?????????? ?????????????????? : 1399/10/27</li>
                                            </ul>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flex items-center justify-center">
                                                {/* <AttachMoneyRoundedIcon /> */}
                                                {/* <span className="text-base font-normal ml-1.5">???????? ???????? :</span> */}
                                                <span className="text-blue-500 text-lg">
                                                    <del>500,000</del>
                                                </span>
                                                <div className="flex items-center">
                                                    <span className="text-red-500 text-2xl font-medium mr-3">300,000</span>
                                                    <span className="text-base mr-2 text-red-500">??????????</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Button color="primary" className="block w-full !mt-6" variant="contained">
                                            ?????? ?????? ???? ????????
                                        </Button>
                                    </div>
                                </Card>

                                <Card className="mt-5 pb-4 pt-3 px-4" elevation={3}>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-center font-medium text-lg">???????? ????????</p>
                                        <Avatar src="/img/Amir-developer-avatar.jpg" className="mt-5" sx={{ width: 70, height: 70 }} alt="Teacher Avatar" />
                                        <span className="text-sm mt-1.5 font-medium">???????????????? ????????</span>
                                        <p className="text-[15px] text-center mt-2.5">???????????????? ???????? ?????????? ?????? ???????? ?????????? ???????????? ?????????????? ?? ???????? ???? ???????? ?????????????? ?? ???????????? ?????????? ????.</p>
                                        <NextLink href="teacher/id">
                                            <Button variant="outlined" className="!mt-5" color="primary" startIcon={<i className="fa-duotone fa-chalkboard-user"></i>}>
                                                ???????? ????????
                                            </Button>
                                        </NextLink>
                                    </div>
                                </Card>
                            </StickyBox>
                        </Col>

                        <Col lg={9} className="!mt-5 lg:!mt-0">
                            <Card className="p-5 post-body" elevation={3}>
                                <img src="/img/products/Stock-analysis.png" className="rounded-theme" alt="Course Image" />
                                <section className="mt-8">
                                    <h2>???????????? ???????? ??</h2>
                                    <p> ???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ???????? ?? ???? ?????????????? ???? ???????????? ???????????? ???????? ?????????????? ?? ???????? ???????? ?????????????? ?? ???????? ???? ???????? ?? ?????????????????? ???? ???????? ???????? ?? ???????? ?????????? ???????? ???????????????? ???????? ?????????? ?? ?????????????????? ?????????? ???? ?????? ?????????? ???????????????? ?????????????? ???? ?????????? ?????????????? ?????????? ???? ?????? ?? ???? ???????? ?????????? ?????? ?? ???????????? ?????????? ???????????? ?????????? ?? ?????????????? ???? ???? ?????????? ???? ???? ?????? ?????????????? ?????????? ???????????? ???? ???????? ???????????? ???????????? ???? ?????? ???????????? ???????????? ???????????? ?? ?????????? ?????????? ???? ???????? ?????????? ?????????? ???????? ???? ?????? ???????? ???? ???????? ???????? ???????? ???? ???????? ?? ???????????? ?????????? ???? ?????????? ?????????????????? ?? ?????????? ?????? ???????? ???? ?????????? ?????? ?? ???????? ???????? ???????? ???????? ???????????????? ???????????????????? ?????????? ?? ?????????????? ???????????? ???????????? ?????? ?????????? ?????????? ?????????? ?????????? ???????? ?????????????? ???????? ????????. </p>
                                </section>
                            </Card>

                            <Card className="p-5 post-body mt-12" elevation={3}>
                                <div className="flex w-full justify-between items-center">
                                    <h2 className="!m-0">?????????? ?????????? ????</h2>
                                    <div className="text-base">12:14 ???????? ??????????</div>
                                </div>

                                <PlyrVideo
                                    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                                    videos={[
                                        {
                                            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                                            size: '576',
                                        },
                                        {
                                            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
                                            size: '720',
                                        },
                                        {
                                            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
                                            size: '1080',
                                        },
                                    ]}
                                />

                                <strong className="block text-center mt-4 text-lg">?????????? ????????</strong>

                                <h2 className="text-center !mt-10">???????????? ????????</h2>

                                <div className="flex flex-col">
                                    <Lesson title="?????????? ????????" time="20:30" type="free" description="???? ?????? ???????????? ???????? ???? ???????? ???????? ?????????? ??????. ???? ???????? ???????? !!" />
                                    <Lesson title="??????????" time="20:30" type="free" description="???? ?????? ???????????? ???????? ???? ???????? ???????? ?????????? ??????. ???? ???????? ???????? !!" />
                                    <Lesson title="???????? ?????????????? ???? ?????? ???????????? ??????" time="20:30" type="free" description="???? ?????? ???????????? ???????? ???? ???????? ???????? ?????????? ??????. ???? ???????? ???????? !!" />
                                    <Lesson title="???????? ?????????????? ???? ?????? ???????????? ?????? ???? ?????????? ??????????????" time="20:30" type="no-free" description="???? ?????? ???????????? ???????? ???? ???????? ???????? ?????????? ??????. ???? ???????? ???????? !!" />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </>
    );
}
