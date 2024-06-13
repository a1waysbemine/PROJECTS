import { useEffect, useState } from 'react';
import { TextWrap } from '../../pages/Main/MainStyle';

const VisualText = ({ visual, onView }) => {
    const { id, h2, strong, imgUrl } = visual;
    const [cnt, setCnt] = useState(1);

    useEffect(() => {
        onView(cnt);
    }, [cnt]);

    const onId = (x) => {
        setCnt((old) => {
            const newId = old + x;
            if (newId < 1) return 5;
            if (newId > 6) return 1;
            return newId;
        });
    };

    return (
        <TextWrap>
            <h2>{h2}</h2>
            <strong>{strong}</strong>
            <p className="btnWrap">
                <span className="prev" onClick={() => onId(-1)}>
                    <i className="xi-angle-left" /> PREV
                </span>
                <span className="next" onClick={() => onId(1)}>
                    NEXT <i className="xi-angle-right" />
                </span>
            </p>
        </TextWrap>
    );
};

export default VisualText;
