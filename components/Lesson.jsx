import React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

function Lesson(props) {
    const [expand, setExpand] = React.useState(false);

    const handleExpand = () => {
        return setExpand((prev) => !prev);
    };

    const handleScrollToVideo = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('.plyr');

        console.log(event.target.ownerDocument || document);

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="bg-white rounded-theme shadow-lg border border-gray-200 border-solid px-4 py-2 mt-3">
            <div className="flex flex-col sm:flex-row justify-between grow">
                <ul className="season">
                    <li>
                        <h3 className="text-[15px] font-medium">{props.title}</h3>
                    </li>
                    <li>
                        <span>{props.time}</span>
                    </li>
                    <li>
                        <span>{props.type == 'free' ? 'رایگان' : 'پولی'}</span>
                    </li>
                </ul>

                <div className="flex justify-center mt-3 sm:mt-0">
                    <IconButton color="secondary" onClick={handleScrollToVideo}>
                        <i className="fa-duotone fa-play-pause"></i>
                    </IconButton>

                    <IconButton color="secondary" className="!mr-1">
                        <i className="fa-duotone fa-download"></i>
                    </IconButton>

                    <IconButton color="secondary" onClick={handleExpand} className="!mr-1">
                        <i className={(expand ? 'rotate-180' : 'rotate-0') + ' duration-300 fa-solid fa-angle-down'}></i>
                    </IconButton>
                </div>
            </div>
            <Collapse in={expand} className="mt-5" timeout="auto" unmountOnExit>
                <p>{props.description}</p>
            </Collapse>
        </div>
    );
}

export default Lesson;
