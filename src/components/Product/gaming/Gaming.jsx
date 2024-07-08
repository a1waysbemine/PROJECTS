import { Link } from 'react-router-dom';
import { ContentWrap } from '../../../pages/product/productStyle';

const Gaming = () => {
    return (
        <ContentWrap>
            <div className="subInner">
                <h2>GAMING</h2>
                <ul>
                    <li>
                        <Link to={'/products/gc_pro'}>
                            <img src="../images/products/gaming/gcpro.jpeg" alt="gcpro" />
                        </Link>
                    </li>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </div>
        </ContentWrap>
    );
};

export default Gaming;
