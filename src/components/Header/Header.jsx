import { HeaderWrap } from './HeaderStyle';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import TopMenu from './TopMenu';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="inner">
                <Link to="/">
                    <h1>
                        <img src="../images/main/logo.png" alt="" />
                    </h1>
                </Link>
                <NavBar />
                <TopMenu />
            </div>
        </HeaderWrap>
    );
};

export default Header;
