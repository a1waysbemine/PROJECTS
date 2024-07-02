import { useEffect, useState } from 'react';
import { TextWrap } from '../../pages/Main/MainStyle';
import visual from '../../assets/api/MainVisual';

const VisualText = ({ onView, onId, cnt }) => {
    return (
        <TextWrap>
            {visual.map((visualItem) => (
                <h2 key={visualItem.id} className={cnt === visualItem.id ? 'on' : ''}>
                    {visualItem.h2}
                </h2>
            ))}
            {visual.map((visualItem) => (
                <strong key={visualItem.id} className={cnt === visualItem.id ? 'on' : ''}>
                    {visualItem.strong}
                </strong>
            ))}

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
