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

    const onId = (x) => {
        setCnt((old) => {
            const newId = old + x;
            if (newId < 1) return 5;
            if (newId > 6) return 1;
            return newId;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCnt(cnt >= 6 ? 1 : cnt + 1);
        }, 3000);

        console.log('id : ', visual.id);
        console.log('cnt : ', cnt);

        return () => {
            clearInterval(timer);
        };
    }, [cnt]);

    useEffect(() => {
        onView(cnt);
    }, [cnt]);

    const onView = (id) => {
        setVisual(data.find((visualItem) => visualItem.id === id));
    };

    return (
        <>
            <VisualWrap>
                <div className="visualInner">
                    <VisualText visual={visual} onView={onView} onId={onId} />
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
