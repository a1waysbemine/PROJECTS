import Con1 from '../../components/Main/Con1';
import Con2 from '../../components/Main/Con2';
import Con3 from '../../components/Main/Con3';
import Con4 from '../../components/Main/Con4';
import VisualGallery from '../../components/MainVisual/VisualGallery';
import VisualText from '../../components/MainVisual/VisualText';
import { MainWrap, VisualWrap } from './MainStyle';
import visualData from '../../assets/api/MainVisual';
import { useEffect, useState } from 'react';

const Main = () => {
    const [data, setData] = useState(visualData);
    const [visual, setVisual] = useState(data[0]);
    const [cnt, setCnt] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setCnt((prevCnt) => (prevCnt >= 6 ? 1 : prevCnt + 1));
            onView(cnt);
        }, 2000);

        console.log('id : ', visual.id);
        console.log('cnt : ', cnt);

        return () => {
            clearInterval(timer);
        };
    }, [cnt]);

    const onView = (id) => {
        setVisual(data.find((visualItem) => visualItem.id === id));
    };

    return (
        <>
            <VisualWrap>
                <div className="visualInner">
                    <VisualText visual={visual} onView={onView} />
                    <VisualGallery visual={visual} onView={onView} cnt={cnt} />
                </div>
            </VisualWrap>
            <MainWrap>
                <Con1 />
                <Con2 />
                <Con3 />
                <Con4 />
            </MainWrap>
        </>
    );
};

export default Main;
