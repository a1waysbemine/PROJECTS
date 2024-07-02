import { FindStoreWrap } from './SupportStyle';
import { useEffect } from 'react';

const FindStore = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <FindStoreWrap>
            <div className="subInner">dd</div>
        </FindStoreWrap>
    );
};

export default FindStore;
