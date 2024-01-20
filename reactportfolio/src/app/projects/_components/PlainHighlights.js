import PropTypes from 'prop-types';

const PlainHighlights = ({ content, classNames }) => {

    return (
        <span className={`w-full flex flex-wrap
            justify-around xs:justify-normal
            font-bold sm:font-medium 
            text-lg md:text-base sm:text-sm
            space-x-4 sm:space-x-0
            ${classNames}`}>

            {content.map((item, index) =>
                <span className='inline-block lg:w-full lg:text-center' key={index}>
                    {item}
                </span>
            )}
        </span>
    )
}

PlainHighlights.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    classNames: PropTypes.string,
};

export default PlainHighlights;