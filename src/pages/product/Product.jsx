import SubMenu from '../../components/Product/SubMenu';
import Study from '../../components/Product/study/Study';
import Work from '../../components/Product/work/Work';
import { ProductWrap } from './productStyle';
import WorknMore from '../../components/Product/worknMore/WorknMore';
import Gaming from '../../components/Product/gaming/Gaming';
import ForKIDS from '../../components/Product/forKIDS/ForKIDS';
import SeatBooster from '../../components/Product/seatbooster/SeatBooster';
import SelfRepair from '../../components/Product/selfRepair/SelfRepair';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Product = () => {
    const { category } = useSelector((state) => state.product);
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <ProductWrap>
            <div className="SubMenuUl">
                <SubMenu />
                {category === 0 ? <Work /> : null}
                {category === 1 ? <WorknMore /> : null}
                {category === 2 ? <Gaming /> : null}
                {category === 3 ? <Study /> : null}
                {category === 4 ? <ForKIDS /> : null}
                {category === 5 ? <SeatBooster /> : null}
                {category === 6 ? <SelfRepair /> : null}
            </div>
        </ProductWrap>
    );
};
export default Product;
