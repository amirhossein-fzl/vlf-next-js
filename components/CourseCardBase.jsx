import React from "react";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Zoom from "@mui/material/Zoom";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function CourseCardBase(props) {
    return (
        <>
            {props.discount ? (<img src="/svg/discount.svg" alt="" className="w-15 h-auto absolute top--20 left--15 select-none" />) : null}
            <img src={props.img} alt={props.title} className="w-full h-auto" />
            <CardContent className="pt-2 px-2.5 pb-0">

                <Link href={props.link} passHref>
                    <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: '!text-sm !bg-blue-500', arrow: '!text-blue-500' }} >
                        <a className="text-base font-medium overflow-ellipsis overflow-hidden block whitespace-nowrap cursor-pointer">{props.title}</a>
                    </Tooltip>
                </Link>

                <Link href={props.teacher.link}>
                    <a className="inline-flex items-center w-fit !mt-3 link">
                        <Typography variant="body2" gutterBottom className="inline-flex items-center w-fit !mt-3 !text-sm">
                            <PersonIcon />
                            <span className="mr-1">{props.teacher.name}</span>
                        </Typography>
                    </a>
                </Link>

                <Typography align="right" variant="button" gutterBottom className="text-blue-500 !text-sm flex justify-end items-center" component="p">
                    <span className="ml-1.5 text-xl">{new Intl.NumberFormat().format(props.price)}</span>
                    تومان
                </Typography>

            </CardContent>
            <CardActions>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" className="inline-flex items-center w-fit ">
                        <AccessTimeIcon />
                        <span className="mr-1.5">{props.time} ساعت</span>
                    </Typography>
                    <Link href={props.link} passHref>
                        <Button variant="contained" size="small" color="primary">
                            مشاهده دوره
                        </Button>
                    </Link>
                </Grid>
            </CardActions>
        </>
    );
}

export default CourseCardBase;
