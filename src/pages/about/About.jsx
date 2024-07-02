import { useEffect, useState } from 'react';
import BrandStory from '../../components/About/BrandStory';
import History from '../../components/About/History';
import News from '../../components/About/News';
import { TabMenu } from './AboutStyle';
const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const [onTab, setOnTab] = useState(0);
    const onSubTab = (x) => {
        setOnTab(x);
    };

    return (
        <>
            <TabMenu>
                <strong>ABOUT SIDIZ</strong>
                <ul className="tab">
                    <li onClick={() => onSubTab(0)} className={onTab === 0 ? 'on' : ''}>
                        BRAND STORY
                    </li>
                    <li onClick={() => onSubTab(1)} className={onTab === 1 ? 'on' : ''}>
                        HISTORY
                    </li>
                    <li onClick={() => onSubTab(2)} className={onTab === 2 ? 'on' : ''}>
                        NEWS
                    </li>
                </ul>
            </TabMenu>
            {onTab === 0 && <BrandStory setOnTab={setOnTab} />}
            {onTab === 1 && <History />}
            {onTab === 2 && <News />}
        </>
    );
};

export default About;
