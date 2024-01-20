import PropTypes from 'prop-types';
import BaseContentRenderer from './BaseContentRenderer';
import PlainParagraph from './PlainParagraph';
import PlainSubTitle from './PlainSubTitle';
import PlainImages from './PlainImages';
import PlainBanner from './PlainBanner';
import PlainHighlights from './PlainHighlights';

const PlainContentRenderer = ({ data }) => {

    const renderPlainParagraph = (content, classNames) => {
        return <PlainParagraph content={content} classNames={classNames} />;
    };

    const renderPlainSubTitle = (content, classNames) => {
        return <PlainSubTitle content={content} classNames={classNames} />;
    };

    const renderPlainImages = (content, classNames) => {
        if (content.length > 6 || content.length < 1) {
            throw new Error('Columns count must be between 1 and 6.');
        }

        return <PlainImages images={content} classNames={classNames} />;
    };

    const renderPlainBanner = (content, classNames) => {
        return <PlainBanner image={content} classNames={classNames} />
    }

    const renderPlainHighlights = (content, classNames) => {
        return <PlainHighlights content={content} classNames={classNames} />;
    }

    const renderContent = (renderFunction, content, className) => {
        return renderFunction(content, className);
    };

    return <BaseContentRenderer
        data={data}
        renderContent={renderContent}
        renderParagraph={renderPlainParagraph}
        renderSubTitle={renderPlainSubTitle}
        renderImages={renderPlainImages}
        renderBanner={renderPlainBanner}
        renderHighlights={renderPlainHighlights}
    />
};

PlainContentRenderer.propTypes = {
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

export default PlainContentRenderer;