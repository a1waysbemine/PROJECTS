import { Link } from 'react-router-dom';
import { NavWrap } from './HeaderStyle';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../store/modules/productSlice';
import { changeAboutCategory } from '../../store/modules/aboutSlice';

const NavBar = () => {
    const dispatch = useDispatch();

    return (
        <NavWrap>
            <ul className="gnb">
                <li onClick={() => dispatch(changeAboutCategory('BRAND STORY'))}>
                    <Link to={'/about'}>ABOUT</Link>
                </li>

                <li onClick={() => dispatch(changeCategory(0))}>
                    <Link to={'/products'}>PRODUCTS</Link>
                </li>

                <li>
                    <Link to={'/support'}>SUPPORT</Link>
                </li>
                <li>
                    <Link to={'/event'}>EVENT</Link>
                </li>
            </ul>
        </NavWrap>
    );
};

export default NavBar;
