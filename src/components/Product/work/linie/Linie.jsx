import { Link } from 'react-router-dom';
import { ProductsWrap, SortWrap } from '../../../../pages/product/productStyle';
import LinieList from './LinieList';
import { useEffect, useState } from 'react';
import { linie } from '../../../../assets/api/productData';

const Linie = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const [sorted, setSorted] = useState('popular');

    const sortedData = () => {
        const sortData = [...linie];
        if (sorted === 'popular') {
            return sortData.sort((a, b) => b.popularity - a.popularity);
        } else if (sorted === 'latest') {
            return sortData.sort((a, b) => b.id - a.id);
        } else if (sorted === 'highprice') {
            return sortData.sort((a, b) => b.price - a.price);
        } else if (sorted === 'lowprice') {
            return sortData.sort((a, b) => a.price - b.price);
        }
    };
    return (
        <ProductsWrap>
            <ul className="subMenu">
                <li>제품</li>
                <li>
                    <Link to={'/products'}>WORK</Link>
                </li>
                <li className="on">LINIE</li>
            </ul>
            <div className="subInner">
                <div>
                    <img src="../images/products/work/linieBig.jpg" alt="linie" />
                </div>
                <SortWrap>
                    <ul>
                        <li
                            onClick={() => setSorted('popular')}
                            className={sorted === 'popular' ? 'on' : ''}
                        >
                            인기순
                        </li>
                        <li
                            onClick={() => setSorted('latest')}
                            className={sorted === 'latest' ? 'on' : ''}
                        >
                            신상품순
                        </li>
                        <li
                            onClick={() => setSorted('highprice')}
                            className={sorted === 'highprice' ? 'on' : ''}
                        >
                            높은가격순
                        </li>
                        <li
                            onClick={() => setSorted('lowprice')}
                            className={sorted === 'lowprice' ? 'on' : ''}
                        >
                            낮은가격순
                        </li>
                    </ul>
                </SortWrap>
                <LinieList linie={sortedData()} />
            </div>
        </ProductsWrap>
    );
};

export default Linie;
