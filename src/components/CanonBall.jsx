import React from 'react';
import PropTypes from 'prop-types';

const CanonBall = (props) => {
    const ballStyle = {
        fill: '#777',
        stroke: '#444',
        strokeWidth: '2px',
    };

    return (
        <ellipse
            style={ballStyle}
            cx={props.position.x}
            cy={props.position.y}
            rx="16"
            ry="16"
        />
    );
};

CanonBall.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.IsRequired
    }).isRequired,
};
export default CanonBall;