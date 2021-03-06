import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const InfoBlock = (props) => {
    const {title, subTitle, period, city, content, children} = props;

    return (
        <div className="info_block">
            <div className="additional_details">
                {period && <div className="date_range">{period}</div>}
                {city && <div className="city">{city}</div>}
            </div>
            <div className="main_content">
                {title && <h3>{title}</h3>}
                {subTitle && <h4>{subTitle}</h4>}
                {content && <div className="content">{content}</div>}
                {children}
            </div>
        </div>
    );
}

InfoBlock.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    period: PropTypes.string,
    city: PropTypes.string,
    content: PropTypes.any,
    children: PropTypes.node
}

InfoBlock.defaultProps = {
    title: '',
    subTitle: '',
    period: '',
    city: '',
    content: null,
    children: null
}

export default InfoBlock;
