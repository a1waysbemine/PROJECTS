const FaqItem = ({ id, category, question, answer, isShow, onShow }) => {
    return (
        <>
            <dt onClick={() => onShow(id)} className={isShow ? 'on' : ''}>
                {isShow ? (
                    <i className="xi-angle-down-min" />
                ) : (
                    <i className="xi-angle-right-min" />
                )}
                {question} <span className="category">[ {category} ]</span>
            </dt>
            <dd className={isShow ? 'on' : ''}>
                {answer.split('...').map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </dd>
        </>
    );
};

export default FaqItem;
