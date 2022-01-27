import React from 'react';
import Plyr from 'plyr-react';
import 'plyr/dist/plyr.css';

function PlyrVideo(props) {

    return (
        <Plyr source={{ 
            type: 'video',
            sources: props.videos,
        }} />
    );
}

export default PlyrVideo;
