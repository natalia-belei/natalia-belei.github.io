import PropTypes from 'prop-types';
import { CONTENT_TYPE } from '../../../../data-config/projects';

const BaseContentRenderer = ({ data, renderContent,
  renderParagraph, renderSubTitle, renderImages, renderBanner, renderHighlights }) => {

  if (!data?.sections) {
    throw new Error('Project details page data is missing sections.');
  }

  const renderElement = (contentType, content, styles) => {
    const color = styles?.color;
    const alignment = styles?.alignment;
    const fontWeight = styles?.fontWeight;

    switch (contentType) {
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

  const renderBlock = (block) => {
    const background = block.background;
    const hideBgImageOnLg = background?.image && background.hideImageOnSmallerScreens;

    return <div
      className={getBlockClasses(hideBgImageOnLg)}
      style={getBlockStyles(background)}
    >
      {/* TODO: figure out a better way to hide background image on smaller screens conditionally */}
      {
        hideBgImageOnLg && (
          <style>{`
          @media (max-width: 1023px) {
            .hide-bg-on-smaller-screens {
              background-image: none !important;
            }
          }
        `}</style>)
      }

      {
        block.sections.map((section, index) => {
          return renderSection(section, renderElement, index)
        })
      }
    </div >
  };

  var blocks = groupConsecutiveSectionsWithSameBackground(data.sections, data.backgrounds);
  return blocks.map(renderBlock);
};

function renderSection(section, renderElement, key) {
  const maxWidth = section.styles?.container?.maxWidth;
  const position = section.styles?.container?.position;
  const fullScreen = section.styles?.container?.fullScreen;
  const contentType = section.type;

  if (fullScreen && (maxWidth || position)) {
    return Error('container:fullScreen and container:maxWidth/position cannot be used together.');
  }

  return (
    <div key={key} className={getSectionClasses(maxWidth, position, fullScreen, contentType)}>
      {renderElement(section.type, section.content, section.styles)}
    </div>
  );
}

function groupConsecutiveSectionsWithSameBackground(sections, backgrounds) {
  const blocks = [];
  let currentBlock = null;

  sections?.forEach((section) => {
    const { styles: { backgroundId } } = section;

    if (currentBlock && currentBlock.background?.id === backgroundId) {
      currentBlock.sections.push(section);
    } else {
      const background = backgrounds?.find(bg => bg.id === backgroundId);
      currentBlock = { background, sections: [section] };
      blocks.push(currentBlock);
    }
  });

  return blocks;
}

function getParagraphClasses(color, alignment, fontWeight) {
  const paragraphClasses = [
    'font-medium', '2xl:font-normal',
    'xs:text-sm',
    'my-2', 'md:my-1',
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
    'my-4', 'md:my-3', 'xs:my-2',
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

function getSectionClasses(maxWidth, position, fullScreen, contentType) {
  return [
    maxWidth ? `max-w-[${maxWidth}]` : 'max-w-auto',
    maxWidth && contentType === CONTENT_TYPE.PARAGRAPH ? 'sm:max-w-full' : '',
    position ? `self-${position}` : 'self-center',
    fullScreen ? 'w-[100vw]' : 'w-full'
  ].join(' ');
}

function getBlockClasses(hideBackgroundImage) {
  return [
    `${hideBackgroundImage ? 'hide-bg-on-smaller-screens' : ''}`,
    'w-[100vw]', 'h-full',
    'flex', 'flex-col', 'items-start', 'justify-start',
    'px-32', 'xl:px-24', 'lg:px-16', 'md:px-12', 'sm:px-8', // TODO: figure out how to get layout paddings instead of duplicating them here
  ].join(' ');
}

function getBlockStyles(background) {
  return background?.image ? {
    backgroundImage: `url(${background.image})`,
    backgroundPosition: background.position ?? 'center',
    backgroundRepeat: background.repeat === true ? 'repeat' : 'no-repeat',
    backgroundSize: background.size,
    backgroundColor: background.color,
  } : {
    backgroundColor: background?.color,
  };
}

BaseContentRenderer.propTypes = {
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
  }).isRequired,
  renderContent: PropTypes.func.isRequired,
  renderParagraph: PropTypes.func.isRequired,
  renderSubTitle: PropTypes.func.isRequired,
  renderImages: PropTypes.func.isRequired,
  renderBanner: PropTypes.func.isRequired,
  renderHighlights: PropTypes.func.isRequired,
};

export default BaseContentRenderer;