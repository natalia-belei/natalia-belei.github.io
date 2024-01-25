import PropTypes from 'prop-types';
import BaseContentRenderer from './BaseContentRenderer';
import ScrollSlideUpParagraph from './ScrollSlideUpParagraph';
import ScrollSlideUpSubTitle from './ScrollSlideUpSubTitle';
import ScrollSlideUpImages from './ScrollSlideUpImages';
import FramedParallaxBanner from './FramedParallaxBanner';
import ScrollSlideUpHighlights from './ScrollSlideUpHighlights';
import { CONTENT_TYPE } from '../../../../data-config/projects';

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
    data: PropTypes.shape({
        sections: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.oneOf(Object.values(CONTENT_TYPE)).isRequired,
                content: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.arrayOf(PropTypes.string),
                ]).isRequired,
                altText: PropTypes.string,
                styles: PropTypes.shape({
                    color: PropTypes.oneOf(['dark', 'light', 'primary', 'indigo', 'white', null]),
                    alignment: PropTypes.oneOf(['left', 'center', 'right', 'justify', null]),
                    fontWeight: PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold', 'extrabold', null]),
                    container: PropTypes.shape({
                        maxWidth: PropTypes.oneOf([
                            '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%',
                            '100px', '200px', '300px', '400px', '500px', '600px', '700px', '800px', '900px', '1000px',
                            null
                        ]),
                        position: PropTypes.oneOf(['start', 'center', 'end', null]),
                        fullScreen: PropTypes.bool,
                    }),
                }),
            })
        ).isRequired,
        backgrounds: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.string,
                position: PropTypes.string,
                size: PropTypes.string,
                repeat: PropTypes.bool,
                color: PropTypes.string,
            })
        ),
    }).isRequired
};

export default ScrollSlideUpContentRenderer;