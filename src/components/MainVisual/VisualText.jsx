import { useEffect, useState } from 'react';
import { TextWrap } from '../../pages/Main/MainStyle';

const VisualText = ({ visual, onView, onId }) => {
    const { id, h2, strong, imgUrl } = visual;

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
