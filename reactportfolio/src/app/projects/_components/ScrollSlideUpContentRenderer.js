import PropTypes from 'prop-types';
import BaseContentRenderer from './BaseContentRenderer';
import ScrollSlideUpParagraph from './ScrollSlideUpParagraph';
import ScrollSlideUpSubTitle from './ScrollSlideUpSubTitle';
import ScrollSlideUpImages from './ScrollSlideUpImages';

const ScrollSlideUpContentRenderer = ({ data }) => {

    const renderAnimatedParagraph = (content, className) => {
        return <ScrollSlideUpParagraph content={content} className={className} />;
    };

    const renderAnimatedSubTitle = (content, className) => {
        return <ScrollSlideUpSubTitle content={content} className={className} />;
    };

    const renderAnimatedImages = (content, className) => {
        if (content.length > 4 || content.length < 1) {
            throw new Error('Columns count must be between 1 and 4.');
        }

        return <ScrollSlideUpImages images={content} className={className} animationDelayFactor={5} />;
    };

    const renderContent = (renderFunction, content, className) => {
        return renderFunction(content, className);
    };

    return <BaseContentRenderer
        type={data.type}
        content={data.content}
        styles={data.styles}
        renderContent={renderContent}
        renderParagraph={renderAnimatedParagraph}
        renderSubTitle={renderAnimatedSubTitle}
        renderImages={renderAnimatedImages}
    />
};

ScrollSlideUpContentRenderer.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.number.isRequired,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]).isRequired,
        styles: PropTypes.shape({
            color: PropTypes.string,
            alignment: PropTypes.string,
        }),
    }).isRequired,
};

export default ScrollSlideUpContentRenderer;