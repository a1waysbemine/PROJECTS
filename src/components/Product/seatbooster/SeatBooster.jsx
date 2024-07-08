import { Link } from 'react-router-dom';
import { ContentWrap } from '../../../pages/product/productStyle';

const SeatBooster = () => {
    return (
        <ContentWrap>
            <div className="subInner">
                <h2>SEAT BOOSTER</h2>
                <ul>
                    <li>
                        <Link to={'/products/STEPO'}>
                            <img src="../images/products/seatbooster/stepo.jpeg" alt="stepo" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/products/FUNGUS'}>
                            <img src="../images/products/seatbooster/fungus.jpeg" alt="fungus" />
                        </Link>
                    </li>
                </ul>
            </div>
        </ContentWrap>
    );
};

export default SeatBooster;
