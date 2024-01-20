import PropTypes from 'prop-types';
import BaseContentRenderer from './BaseContentRenderer';
import ScrollSlideUpParagraph from './ScrollSlideUpParagraph';
import ScrollSlideUpSubTitle from './ScrollSlideUpSubTitle';
import ScrollSlideUpImages from './ScrollSlideUpImages';
import FramedParallaxBanner from './FramedParallaxBanner';
import ScrollSlideUpHighlights from './ScrollSlideUpHighlights';

const ScrollSlideUpContentRenderer = ({ data }) => {

    const renderAnimatedParagraph = (content, classNames) => {
        return <ScrollSlideUpParagraph content={content} classNames={classNames} />;
    };

    const renderAnimatedSubTitle = (content, classNames) => {
        return <ScrollSlideUpSubTitle content={content} classNames={classNames} />;
    };

    const renderAnimatedImages = (content, classNames) => {
        if (content.length > 6 || content.length < 1) {
            throw new Error('Columns count must be between 1 and 6.');
        }

        return <ScrollSlideUpImages images={content} classNames={classNames} animationDelayFactor={5} />;
    };

    const renderParallaxBanner = (content, classNames) => {
        return <FramedParallaxBanner image={content} classNames={classNames} />
    }

    const renderAnimatedHighlights = (content, classNames) => {
        return <ScrollSlideUpHighlights content={content} classNames={classNames} />
    };

    const renderContent = (renderFunction, content, classNames) => {
        return renderFunction(content, classNames);
    };

    return <BaseContentRenderer
        data={data}
        renderContent={renderContent}
        renderParagraph={renderAnimatedParagraph}
        renderSubTitle={renderAnimatedSubTitle}
        renderImages={renderAnimatedImages}
        renderBanner={renderParallaxBanner}
        renderHighlights={renderAnimatedHighlights}
    />
};

ScrollSlideUpContentRenderer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.number.isRequired,
            content: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]).isRequired,
            altText: PropTypes.string,
            styles: PropTypes.shape({
                color: PropTypes.string,
                alignment: PropTypes.string,
                fontWeight: PropTypes.string,
                container: PropTypes.shape({
                    maxWidth: PropTypes.string,
                    position: PropTypes.string,
                    fullScreen: PropTypes.bool,
                }),
            }),
        })
    ).isRequired,
};

export default ScrollSlideUpContentRenderer;