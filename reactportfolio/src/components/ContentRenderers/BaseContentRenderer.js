import PropTypes from 'prop-types';
import { CONTENT_TYPE } from '../../../data-config/projects';

const BaseContentRenderer = ({ type, content, styles, renderContent, renderParagraph, renderSubTitle, renderImages }) => {
    const render = () => {
        switch (type) {
            case CONTENT_TYPE.paragraph:
                return renderContent(renderParagraph, content, `text-base sm:text-sm
                    my-4 md:my-3 sm:my-2  
                    ${styles?.color ? `text-${styles.color}` : 'text-dark'} 
                    ${styles?.alignment ? `text-${styles.alignment}` : 'text-left'}`);

            case CONTENT_TYPE.subTitle:
                return renderContent(renderSubTitle, content, `w-full capitalize 
                    text-4xl lg:text-3xl md:text-2xl sm:text-xl
                    mt-6 md:mt-4 sm:mt-3
                    ${styles?.color ? `text-${styles.color}` : 'text-dark'} 
                    ${styles?.alignment ? `text-${styles.alignment}` : 'text-left'}`);

            case CONTENT_TYPE.image:
                return renderContent(renderImages, content);

            default:
                return null;
        }
    };

    return render();
};

BaseContentRenderer.propTypes = {
    type: PropTypes.number.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    styles: PropTypes.shape({
        color: PropTypes.string,
        alignment: PropTypes.string,
    }),
    renderContent: PropTypes.func.isRequired,
    renderParagraph: PropTypes.func.isRequired,
    renderSubTitle: PropTypes.func.isRequired,
    renderImages: PropTypes.func.isRequired,
};

export default BaseContentRenderer;