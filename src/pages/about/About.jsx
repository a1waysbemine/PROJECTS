import { useEffect } from 'react';
import BrandStory from '../../components/About/BrandStory';
import History from '../../components/About/History';
import News from '../../components/About/News';
import { TabMenu } from './AboutStyle';
import { useDispatch, useSelector } from 'react-redux';
import { changeAboutCategory } from '../../store/modules/aboutSlice';
const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { category } = useSelector((state) => state.about);
    const dispatch = useDispatch();
    const categorize = (category) => {
        dispatch(changeAboutCategory(category));
    };
    return (
        <>
            <TabMenu>
                <strong>ABOUT SIDIZ</strong>
                <ul className="tab">
                    <li
                        onClick={() => categorize('BRAND STORY')}
                        className={category === 'BRAND STORY' ? 'on' : ''}
                    >
                        BRAND STORY
                    </li>
                    <li
                        onClick={() => categorize('HISTORY')}
                        className={category === 'HISTORY' ? 'on' : ''}
                    >
                        HISTORY
                    </li>
                    <li
                        onClick={() => categorize('NEWS')}
                        className={category === 'NEWS' ? 'on' : ''}
                    >
                        NEWS
                    </li>
                </ul>
            </TabMenu>
            {category === 'BRAND STORY' && <BrandStory categorize={categorize} />}
            {category === 'HISTORY' && <History />}
            {category === 'NEWS' && <News />}
        </>
    );
};

export default About;
