import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const LineSeparator = ({ color, height, topGap, bottomGap }) => {
    let styles = [];

    if (color) styles.push({color: color});
    if (color) styles.push({backgroundColor: color});
    if (height) styles.push({height: height});
    if (topGap) styles.push({marginTop: topGap});
    if (bottomGap) styles.push({marginBottom: bottomGap});

    const composedStyles = styles.reduce((res, obj) => ({...res, ...obj}), {});

    return <hr style={composedStyles} />;
};

LineSeparator.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    topGap: PropTypes.number,
    bottomGap: PropTypes.number,
}

LineSeparator.defaultProps = {
    color: '',
    height: '',
    topGap: 0,
    bottomGap: 0
}

export default LineSeparator;
