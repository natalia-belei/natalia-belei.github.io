import PropTypes from 'prop-types';
import { CONTENT_TYPE } from '../../../../data-config/projects';

const BaseContentRenderer = ({ data, renderContent,
  renderParagraph, renderSubTitle, renderImages, renderBanner, renderHighlights }) => {

  const renderElement = (item) => {
    const content = item.content;
    const color = item.styles?.color;
    const alignment = item.styles?.alignment;
    const fontWeight = item.styles?.fontWeight;

    switch (item.type) {
      case CONTENT_TYPE.PARAGRAPH:
        return renderContent(renderParagraph, content, getParagraphClasses(color, alignment, fontWeight));
      case CONTENT_TYPE.SUBTITLE:
        return renderContent(renderSubTitle, content, getSubTitleClasses(color, alignment, fontWeight));
      case CONTENT_TYPE.IMAGE:
        return renderContent(renderImages, content, getImageClasses());
      case CONTENT_TYPE.BANNER:
        return renderContent(renderBanner, content, getBannerClasses());
      case CONTENT_TYPE.HIGHLIGHTS:
        return renderContent(renderHighlights, content, getHighlightsClasses());
      default:
        return null;
    }
  };

  const renderContainerSet = () => {
    return data.map((item, index) => renderContainer(item, renderElement, index));
  };

  return renderContainerSet();
};

function renderContainer(item, renderElement, key) {
  const maxWidth = item.styles?.container?.maxWidth;
  const position = item.styles?.container?.position;
  const fullScreen = item.styles?.container?.fullScreen;
  const contentType = item.type;

  if (fullScreen && (maxWidth || position)) {
    return Error('containerFullScreen and containerMaxWidth/containerPosition cannot be used together.');
  }

  return (
    <div key={key} className={getContainerClasses(maxWidth, position, fullScreen, contentType)}>
      {renderElement(item)}
    </div>
  );
}

function getParagraphClasses(color, alignment, fontWeight) {
  const paragraphClasses = [
    'font-medium', '2xl:font-normal',
    'xs:text-sm',
    'my-6', 'md:my-4', 'sm:my-2',
    color ? `!text-${color}` : '',
    alignment ? `!text-${alignment}` : '',
    fontWeight ? `!font-${fontWeight}` : ''
  ].join(' ');

  return paragraphClasses;
}

function getSubTitleClasses(color, alignment, fontWeight) {
  return [
    'w-full',
    'text-dark',
    'text-left',
    'text-4xl', 'lg:text-3xl', 'md:text-2xl', 'sm:text-xl',
    'font-semibold',
    'mt-12', 'md:mt-8', 'sm:mt-6',
    color ? `!text-${color}` : '',
    alignment ? `!text-${alignment}` : '',
    fontWeight ? `!font-${fontWeight}` : '',
  ].join(' ');
}

function getImageClasses() {
  return [
    'my-8', 'xl:my-6', 'lg:my-4', 'md:my-3', 'sm:my-2',
  ].join(' ');
}

function getBannerClasses() {
  return [
    'mb-12', 'lg:mb-10', 'md:mb-8', 'sm:mb-6'
  ].join(' ');
}

function getHighlightsClasses() {
  return [
    'my-12', '2xl:my-10', 'xl:my-8', 'lg:my-6', 'md:my-4', 'sm:my-2'
  ].join(' ');
}

function getContainerClasses(maxWidth, position, fullScreen, contentType) {
  return [
    maxWidth ? `max-w-[${maxWidth}]` : 'max-w-auto',
    maxWidth && contentType === CONTENT_TYPE.PARAGRAPH ? 'sm:max-w-full' : '',
    position ? `self-${position}` : 'self-center',
    fullScreen ? 'w-[100vw]' : 'w-full'
  ].join(' ');
}

BaseContentRenderer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.number.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
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
  ),
  renderContent: PropTypes.func.isRequired,
  renderParagraph: PropTypes.func.isRequired,
  renderSubTitle: PropTypes.func.isRequired,
  renderImages: PropTypes.func.isRequired,
  renderBanner: PropTypes.func.isRequired,
  renderHighlights: PropTypes.func.isRequired,
};

export default BaseContentRenderer;