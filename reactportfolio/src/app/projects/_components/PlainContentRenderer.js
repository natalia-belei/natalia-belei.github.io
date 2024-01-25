import PropTypes from 'prop-types';
import BaseContentRenderer from './BaseContentRenderer';
import PlainParagraph from './PlainParagraph';
import PlainSubTitle from './PlainSubTitle';
import PlainImages from './PlainImages';
import PlainBanner from './PlainBanner';
import PlainHighlights from './PlainHighlights';
import { CONTENT_TYPE } from '../../../../data-config/projects';

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

// TODO: define possible allowed parameters as constants
PlainContentRenderer.propTypes = {
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

export default PlainContentRenderer;