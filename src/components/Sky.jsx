import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Sky = ()=> {
    const skyStyle={
        fill: '#30abef',
    };

    const skywidth = skyAndGroundWidth;
    const gameHeight = 1200;

    return (
        <rect
            style={skyStyle}
            x={skywidth/-2}
            y={100-gameHeight}
            width={skywidth}
            height={gameHeight}>
        </rect>
    );
};

export default Sky;