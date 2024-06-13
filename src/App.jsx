import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './components/Layout';
import Main from './pages/Main/Main';
import About from './pages/about/About';
import Product from './pages/product/Product';
import Support from './pages/support/Support';
import Login from './pages/login/Login';
import Logout from './pages/login/Logout';
import Join from './pages/login/Join';
import EventPage from './pages/eventpage/EventPage';
import Cart from './pages/cart/Cart';

const App = () => {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/event" element={<EventPage />} />
                        <Route path="/cart" element={<Cart />} />

                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/support" element={<Support />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
