import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';
import SearchAjax from './SearchAjax';
import Image from 'next/image';
import ScrollTop from './ScrollTop';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function HeaderSection(props) {
    return (
        <Container>
            <Grid container lg={12} item className="!mt-24">
                <Grid lg={6} md={6} sm={12} item container direction="column" className="px-5 text-center">
                    <h1 className="text-[3.5rem] font-['Aviny']">با ویرولرن</h1>
                    <h2 className="mt-3 text-3xl font-['Aviny']">لحظه ای از تکنولوژی عقب نمانید !</h2>
                    <p className="mt-8 text-base">آموزش آنلاین توسط بهترین اساتید برای ساخت آینده کاری شما و تضمین یادگیری شما در ویرولرن</p>
                    {/* <Grid justifyContent="space-evenly" container className="mt-5 mb-5">
                        <Button disableElevation variant="outlined" color="primary">از دوره های ما دیدن کنید</Button>
                        <Button disableElevation variant="outlined" color="secondary" className="mtxs">از فروشگاه ما دیدن کنید</Button>
                    </Grid> */}
                    <SearchAjax className="mt-12" />
                </Grid>

                <Grid lg={6} md={6} sm={12} item container justifyContent="center" alignItems="flex-start" className="!mt-10 md:!mt-0">
                    <Image src="/svg/online-course.svg" alt="Online course image" width={600} height={374} />
                </Grid>
            </Grid>
            <ScrollTop {...props}>
                <Fab color="secondary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon fontSize="large" />
                </Fab>
            </ScrollTop>
        </Container>
    );
}

export default HeaderSection;
