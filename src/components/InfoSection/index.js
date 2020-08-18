import React from 'react';
import PropTypes from 'prop-types';

const InfoSection = (props) => {
    const {title, contentAlignment, children} = props;

    return (
        <section className={`info_section ${contentAlignment}`}>
            {title && <h2>{title}</h2>}
            {children && <React.Fragment>{children}</React.Fragment>}
        </section>
    );
}

InfoSection.propTypes = {
    title: PropTypes.string,
    contentAlignment: PropTypes.string,
    children: PropTypes.node
}

InfoSection.defaultProps = {
    title: '',
    contentAlignment: 'right',
    children: null
}

export default InfoSection;
