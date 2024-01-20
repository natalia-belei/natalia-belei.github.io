import PropTypes from 'prop-types';

const PlainSubTitle = ({ content, classNames }) => {
    return (
        <h2 className={`${classNames}`}>
            {content}
        </h2>
    );
};

PlainSubTitle.propTypes = {
    content: PropTypes.string.isRequired,
    classNames: PropTypes.string,
};

export default PlainSubTitle;