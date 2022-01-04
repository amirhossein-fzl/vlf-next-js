import React from 'react';
import Zoom from '@mui/material/Zoom';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <Tooltip title="بازگشت به بالای صفحه" placement="top" classes={{ tooltip: '!bg-blue-500 !text-[14px]' }} interactive="true">
                <div onClick={handleClick} role="presentation" className="fixed bottom-10 right-10 z-[999]">
                    {children}
                </div>
            </Tooltip>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default ScrollTop;
