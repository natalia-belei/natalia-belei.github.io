import Image from "next/image";
import PropTypes from 'prop-types';

const PlainBanner = ({ image, classNames }) => {

    const getImage = (image) => {
        var dynamicImage = require(`../../../../public${image}`).default;
        return JSON.parse(JSON.stringify(dynamicImage))
    };

    return (
        <div className={`flex justify-center items-center ${classNames}`}>
            <Image src={getImage(image)} alt="" />
        </div>
    );
}

PlainBanner.propTypes = {
    image: PropTypes.string.isRequired,
    classNames: PropTypes.string,
};

export default PlainBanner;