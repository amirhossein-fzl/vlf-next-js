import React from 'react';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';

export default function PodCard(props) {
    return (
        <div className="w-full border border-solid border-gray-300 bg-white flex rounded-theme overflow-hidden mt-5">
            <img src={props.image} className="w-[150px] h-auto" alt={props.title} />
            <div className="flex flex-col py-2.5 px-4 grow">
                <Link href={props.link} passHref>
                    <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow classes={{ tooltip: '!bg-blue-500 !text-[14px]', arrow: '!text-blue-500' }} interactive="true">
                        <a className="text-base font-medium text-gray-800 overflow-hidden text-ellipsis block whitespace-nowrap">{props.title}</a>
                    </Tooltip>
                </Link>
                <span className="mt-3 text-sm">خلاصه :</span>
                <Button color="primary" size="small" className="!mt-5 w-fit" variant="contained">ادامه</Button>
            </div>
        </div>
    );
}
