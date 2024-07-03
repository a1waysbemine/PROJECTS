import { HistoryWrap } from './AboutStyle';
import { historyData } from '../../assets/api/About';
import { useEffect } from 'react';

const History = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <HistoryWrap>
            <div className="subInner">
                <p className="visualImg">
                    <img src="./images/about/history_visual.jpg" alt="" />
                </p>
                <h2>HISTORY</h2>
                <strong className="period">1994 - 2024</strong>
                <ul className="historyList">
                    {historyData.map((hisItem) => (
                        <li className="listItem" key={hisItem.id}>
                            <span className="year">{hisItem.year}</span>

                            <ul className="contentList">
                                {hisItem.historyItem.map((detailItem) => (
                                    <li key={detailItem.index}>
                                        <span className="month">{detailItem.month}</span>
                                        <div className="textBox">
                                            {detailItem.content.split('/').map((item) => (
                                                <strong className="text" key={item.index}>
                                                    {item}
                                                </strong>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </HistoryWrap>
    );
};

export default History;
