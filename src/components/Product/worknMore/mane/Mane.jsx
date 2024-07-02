import { Link } from 'react-router-dom';
import { ProductsWrap, SortWrap } from '../../../../pages/product/productStyle';
import ManeList from './ManeList';
import { useEffect, useState } from 'react';
import { mane } from '../../../../assets/api/productData';

const Mane = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const [sorted, setSorted] = useState('popular');

    const sortedData = () => {
        const sortData = [...mane];
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
                    <Link to={'/products'}>WORK&MORE</Link>
                </li>
                <li className="on">MANE</li>
            </ul>
            <div className="subInner">
                <div>
                    <img src="../images/products/worknmore/maneBig.jpg" alt="mane" />
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
                <ManeList mane={sortedData()} />
            </div>
        </ProductsWrap>
    );
};

export default Mane;