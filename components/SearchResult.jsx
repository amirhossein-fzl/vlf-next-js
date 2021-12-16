import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const SearchResult = (props) => {
    return (
        <Card className="mt-3.5 first:mt-0" variant="outlined">
            <CardContent className="!p-0 !last:pb-0">
                <div className="w-full flex">
                    <Image src={props.image} alt="result-image" width={130} height={93} />
                    <div className="flex py-2.5 px-4 flex-col">
                        <Link href={props.link} passHref >
                            <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: "!bg-blue-500 !text-sm", arrow: "!text-blue-500" }} interactive="true">
                                <a className="text-base max-w-[256px] overflow-hidden text-ellipsis block whitespace-nowrap">{props.title}</a>
                            </Tooltip>
                        </Link>

                        <Typography className="!my-3.5 text-right" variant="caption">
                            در <b>{props.in}</b>
                        </Typography>
                        <Button color="secondary" variant="contained" size="small" disableElevation className="w-fit">
                            مشاهده
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SearchResult;
