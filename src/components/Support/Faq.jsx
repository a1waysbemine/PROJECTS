import { FaqWrap } from './SupportStyle';
import FaqItem from './FaqItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    filteringList,
    resetFiltering,
    toggleFaqVisibility,
} from '../../store/modules/supportSlice';

const Faq = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    useEffect(() => {
        dispatch(resetFiltering());
    }, []);

    const { faqLists } = useSelector((state) => state.support);
    const dispatch = useDispatch();
    const [onClass, setOnClass] = useState(0);

    const onShow = (id) => {
        dispatch(toggleFaqVisibility(id));
    };

    const reset = () => {
        dispatch(resetFiltering());
        setOnClass(0);
    };
    const filtering = (category, index) => {
        dispatch(filteringList(category));
        setOnClass(index);
    };

    return (
        <FaqWrap>
            <div className="subInner">
                <h2>FAQ</h2>
                <ul className="sorting">
                    <li onClick={reset} className={onClass === 0 ? 'on' : ''}>
                        전체
                    </li>
                    <li
                        onClick={() => filtering('제품문의', 1)}
                        className={onClass === 1 ? 'on' : ''}
                    >
                        제품문의
                    </li>
                    <li
                        onClick={() => filtering('주문/배송/시공', 2)}
                        className={onClass === 2 ? 'on' : ''}
                    >
                        주문/배송/시공
                    </li>
                    <li
                        onClick={() => filtering('교환/반품', 3)}
                        className={onClass === 3 ? 'on' : ''}
                    >
                        교환/반품
                    </li>
                    <li onClick={() => filtering('A/S', 4)} className={onClass === 4 ? 'on' : ''}>
                        A/S
                    </li>
                    <li onClick={() => filtering('기타', 5)} className={onClass === 5 ? 'on' : ''}>
                        기타
                    </li>
                </ul>

                <div className="faqBox">
                    <dl>
                        {faqLists.map((faqItem) => (
                            <FaqItem key={faqItem.id} {...faqItem} onShow={onShow} />
                        ))}
                    </dl>
                </div>
            </div>
        </FaqWrap>
    );
};

export default Faq;
