import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import DisplayDesktop from './navs/DisplayDesktop';
import DisplayMobile from './navs/DisplayMobile';
import HeaderSection from './HeaderSection';

const Header = (props) => {
    const isHome = props.isHome == undefined ? false : props.isHome;
    const ShowNav = (props) => {
        let isMobile = useMediaQuery('(max-width: 768px)');
        let isDesktop = useMediaQuery('(min-width: 768px)');
        if (isMobile) {
            return <DisplayMobile {...props} />;
        } else if (isDesktop) {
            return <DisplayDesktop {...props} />;
        }
        return <></>;
    };
    return (
        <>
            <ShowNav {...props} />
            {isHome ? <HeaderSection {...props} /> : null}
        </>
    );
};

Header.propTypes = {
    isHome: PropTypes.bool,
};

export default Header;
