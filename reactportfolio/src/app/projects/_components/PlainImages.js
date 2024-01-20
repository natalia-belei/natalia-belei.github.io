import Image from 'next/image';
import PropTypes from 'prop-types';

const PlainImages = ({ images, classNames }) => {
    if (!images || images.length === 0) {
        return null;
    }

    const getImage = (imagePath) => {
        var dynamicImage = require(`../../../../public${imagePath}`).default;
        return JSON.parse(JSON.stringify(dynamicImage))
    };

    const renderImage = (imagePath, classNames, key = 0) => {
        return (
            <div key={key} className={`flex justify-center items-center ${classNames}`}>
                <Image src={getImage(imagePath)} alt="" />
            </div>
        );
    };

    const renderImageGrid = (images) => {
        const columnsCount = images.length;
        const columnsCountSm = Math.floor(columnsCount / 2);

        return (
            <div className={`grid
                    grid-cols-${columnsCount} md:grid-cols-${columnsCountSm}
                    gap-x-16 xl:gap-x-12 lg:gap-x-8 md:gap-x-6 sm:gap-x-4
                    md:gap-y-6 sm:gap-y-4
                    ${classNames}`}
            >
                {images.map((image, index) => renderImage(image, 'col-span-1', index))}
            </div>
        );
    }

    return images.length === 1
        ? renderImage(images[0], classNames)
        : renderImageGrid(images);
}

PlainImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    classNames: PropTypes.string,
    containerStyles: PropTypes.string,
};

export default PlainImages;
