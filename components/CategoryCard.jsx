import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard(props) {
    return (
        <Link href={props.link} passHref>
            <ButtonBase className="!p-2.5 !rounded-theme flex flex-col !mt-2.5 items-center w-full mb-4" TouchRippleProps={{ classes: { ripple: 'text-pink-500' } }} focusRipple={true}>
                <Image src={props.icon} alt="Category Image" width={80} height={80} />
                <Typography className="!mt-5" align="center" variant="body1" component="h5" gutterBottom>
                    {props.title}
                </Typography>
            </ButtonBase>
        </Link>
    );
}
