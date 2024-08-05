import { GalleryWrap } from '../../pages/Main/MainStyle';
import visual from '../../assets/api/MainVisual';

const VisualGallery = ({ cnt }) => {
    return (
        <GalleryWrap>
            {visual.map((visualItem) => (
                <p key={visualItem.id} className={cnt === visualItem.id ? 'on' : 1}>
                    <img src={visualItem.imgUrl} />
                </p>
            ))}
        </GalleryWrap>
    );
};

export default VisualGallery;
