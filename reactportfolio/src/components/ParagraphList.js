const ParagraphList = ({ paragraphs }) => {
    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className='my-3 font-medium text-dark'>
                    {paragraph}
                </p>
            ))}
        </>
    );
}

export default ParagraphList;