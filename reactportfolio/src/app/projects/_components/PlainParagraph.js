import PropTypes from 'prop-types';

const PlainParagraph = ({ content, classNames }) => {
    return (
        <p className={classNames}>
            {content}
        </p>
    );
};

PlainParagraph.propTypes = {
    content: PropTypes.string.isRequired,
    classNames: PropTypes.string,
};

export default PlainParagraph;