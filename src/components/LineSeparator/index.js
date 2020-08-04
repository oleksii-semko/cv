import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';


const LineSeparator = ({ color, height, topGap, bottomGap }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height,
            marginTop: topGap,
            marginBottom: bottomGap
        }}
    />
);

LineSeparator.propTypes = {
    color: PropTypes.string
}

LineSeparator.defaultProps = {
    color: '#e4e4e4',
    height: '1px',
    topGap: 10,
    bottomGap: 10
}

export default LineSeparator;
