import { NewsWrap } from './AboutStyle';
import { newsData } from '../../assets/api/About';
import { useState, useEffect } from 'react';

const News = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [amount, setAmount] = useState(6);
    const news = newsData.slice(0, amount);

    const moreItems = () => {
        setAmount((prev) => prev + 3);
    };

    return (
        <NewsWrap>
            <div className="subInner">
                <h2>NEWS</h2>
                <ul className="newsList">
                    {news.map((newsItem) => (
                        <li key={newsItem.id}>
                            <img src={newsItem.img} alt={newsItem.title} />
                            <strong>{newsItem.title}</strong>
                            <span>{newsItem.date}</span>
                        </li>
                    ))}
                </ul>
                {news.length < newsData.length && (
                    <em className="more" onClick={moreItems}>
                        더보기
                    </em>
                )}
            </div>
        </NewsWrap>
    );
};

export default News;
