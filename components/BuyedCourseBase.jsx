import React from 'react';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Zoom from '@mui/material/Zoom';
import Link from 'next/link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function BuyedCourseBase(props) {
    return (
        <>
            <img src={props.img} alt={props.title} className="w-full h-auto" />
            <CardContent className="pt-2 px-2.5 pb-0">
                <Link href={props.link} passHref>
                    <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: '!text-[14px] !bg-blue-500', arrow: '!text-blue-500' }}>
                        <a className="text-base font-medium overflow-ellipsis overflow-hidden block whitespace-nowrap cursor-pointer">{props.title}</a>
                    </Tooltip>
                </Link>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Link href={props.link} passHref>
                        <Button variant="contained" size="small" color="primary">
                            مشاهده دوره
                        </Button>
                    </Link>
                    <Link href={props.link} passHref>
                        <Button variant="contained" size="small" color="primary">
                            درخواست مدرک
                        </Button>
                    </Link>
                </Grid>
            </CardActions>
        </>
    );
}

export default BuyedCourseBase;
