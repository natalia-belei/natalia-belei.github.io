import PropTypes from 'prop-types';
import { CONTENT_TYPE } from "../../data-config/projects";

const renderParagraph = (content, index) => <p key={index} className='my-3 font-medium text-dark'>{content}</p>;

const renderSubTitle = (content, index) => <h2 key={index} className='w-full font-semibold capitalize text-left text-4xl text-dark mt-3'>{content}</h2>;

const renderImage = (content, index) => <img key={index} src={content} alt="" className="my-3" />;

const ContentRenderer = ({ contentArr }) => {
    return (
        <>
            {contentArr.map((item, index) => {
                switch (item.type) {
                    case CONTENT_TYPE.paragraph:
                        return renderParagraph(item.content, index);
                    case CONTENT_TYPE.subTitle:
                        return renderSubTitle(item.content, index);
                    case CONTENT_TYPE.image:
                        return renderImage(item.content, index);
                    default:
                        return null;
                }
            })}
        </>
    );
}

ContentRenderer.propTypes = {
    contentArr: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
};

export default ContentRenderer;