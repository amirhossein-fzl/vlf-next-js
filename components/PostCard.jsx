import React from 'react';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function PostCard(props) {
    return (
        <Col {...props.grid} className="!mt-5">
            <Card elevation={3} className="mt-5">
                <img src={props.img} className="w-full h-auto" alt={props.title} />
                <CardContent className="pt-2 px-2.5">
                    <Link href={props.link} passHref>
                        <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: '!bg-blue-500 !text-[14px]', arrow: '!text-blue-500' }} interactive="true">
                            <a className="text-base font-medium overflow-hidden text-ellipsis block whitespace-nowrap cursor-pointer">{props.title}</a>
                        </Tooltip>
                    </Link>

                    <Typography className="!mt-5 line-clamp-3" variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>

                    <Grid container className="mt-5" justifyContent="space-between">
                        <Link href={props.author.link}>
                            <a className="inline-flex items-center w-fit text-[0.8rem]">
                                <Typography variant="body2" gutterBottom className="inline-flex items-center w-fit text-[0.8rem]">
                                    <PersonIcon fontSize="small" />
                                    <span className="mr-1">{props.author.name}</span>
                                </Typography>
                            </a>
                        </Link>
                        <span className="inline-flex items-center w-fit text-[0.8rem] cursor-pointer duration-300 hover:text-pink-500">
                            <span className="ml-1 font-bold">{new Intl.NumberFormat().format(props.views)}</span>
                            <VisibilityOutlinedIcon fontSize="small" />
                        </span>
                    </Grid>
                </CardContent>
                <CardActions className="!mt-4 border-t border-t-solid border-t-stone-500">
                    <Grid container justifyContent="space-between">
                        <IconButton size="small" color="primary">
                            <BookmarkBorderOutlinedIcon />
                        </IconButton>

                        <Link href={props.link} passHref>
                            <Button size="small" color="primary" variant="contained">
                                ادامه مطلب
                            </Button>
                        </Link>
                    </Grid>
                </CardActions>
            </Card>
        </Col>
    );
}
