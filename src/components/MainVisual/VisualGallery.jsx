import { useState } from 'react';
import { GalleryWrap } from '../../pages/Main/MainStyle';

const VisualGallery = ({ visual, cnt }) => {
    const { id, h2, strong, imgUrl } = visual;

    return (
        <GalleryWrap>
            <p className={cnt === id ? 'on' : ''}>
                <img src={imgUrl} alt={strong} />
            </p>
        </GalleryWrap>
    );
};

export default VisualGallery;
