import { Link } from 'react-router-dom';
import { NavWrap } from './HeaderStyle';

const NavBar = () => {
    return (
        <NavWrap>
            <ul className="gnb">
                <li>
                    <Link to={'/about'}>ABOUT</Link>
                </li>

                <li>
                    <Link to={'/products'}>PRODUCTS</Link>
                </li>

                <li>
                    <Link to={'/support'}>SUPPORT</Link>
                </li>
            </ul>
        </NavWrap>
    );
};

export default NavBar;
