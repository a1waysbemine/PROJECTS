import { Link } from 'react-router-dom';
import { Con2Wrap } from './ContentStyle';

const Con2 = () => {
    return (
        <Con2Wrap>
            <div className="inner">
                <h2>WORK & MORE</h2>
                <span className="more">
                    <Link to={'/products'}>ALL PRODUCTS</Link>
                </span>
                <ul className="list">
                    <li>
                        <img src="../images/main/con2_img1.jpg" alt="" />
                        <h3>EGA</h3>
                        <strong>나만을 위한 아늑함</strong>
                    </li>
                    <li>
                        <img src="../images/main/con2_img2.jpg" alt="" />
                        <h3>BUTTON</h3>
                        <strong>심플 & 미니멀</strong>
                    </li>
                    <li>
                        <img src="../images/main/con2_img3.jpg" alt="" />
                        <h3>MANE</h3>
                        <strong>취향따라 고르는 멀티체어</strong>
                    </li>
                </ul>
            </div>
        </Con2Wrap>
    );
};

export default Con2;
