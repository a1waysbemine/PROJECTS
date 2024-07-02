import { Con3Wrap } from './ContentStyle';

const Con3 = ({ goProduct, navigate }) => {
    return (
        <Con3Wrap>
            <div className="inner">
                <h2>for KIDS</h2>
                <span className="more" onClick={() => goProduct(4)}>
                    ALL PRODUCTS
                </span>
                <ul className="list">
                    <li>
                        <img
                            src="./images/main/con3_img1.jpg"
                            alt=""
                            onClick={() => navigate('/products/molti')}
                        />
                        <h3>molti</h3>
                        <strong>멀티플레이어 아기의자</strong>
                    </li>
                    <li>
                        <img
                            src="./images/main/con3_img2.jpg"
                            alt=""
                            onClick={() => navigate('/products/atti')}
                        />
                        <h3>atti</h3>
                        <strong>플레이 체어</strong>
                    </li>
                    <li>
                        <img
                            src="./images/main/con3_img3.jpg"
                            alt=""
                            onClick={() => navigate('/products/RINGO')}
                        />
                        <h3>ringo</h3>
                        <strong>생각이 자라는 의자</strong>
                    </li>
                </ul>
            </div>
        </Con3Wrap>
    );
};

export default Con3;
