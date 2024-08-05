import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './components/Layout';
import Main from './pages/Main/Main';
import About from './pages/about/About';
import Product from './pages/product/Product';
import Support from './pages/support/Support';
import Login from './pages/login/Login';
import Join from './pages/login/Join';
import EventPage from './pages/eventpage/EventPage';
import Cart from './pages/cart/Cart';
import MyPage from './pages/mypage/MyPage';
import News from './components/About/News';
import History from './components/About/History';
import T90 from './components/Product/work/t90/T90';
import T80 from './components/Product/work/t80/T80';
import T55 from './components/Product/work/t55/T55';
import T50Air from './components/Product/work/t50air/T50Air';
import T50 from './components/Product/work/t50/T50';
import Linie from './components/Product/work/linie/Linie';
import T20 from './components/Product/work/t20/T20';
import Ega from './components/Product/worknMore/ega/Ega';
import Button from './components/Product/worknMore/button/Button';
import Mane from './components/Product/worknMore/mane/Mane';
import Gcpro from './components/Product/gaming/gcpro/Gcpro.JSx';
import Ringo from './components/Product/study/ringo/Ringo';
import Ible from './components/Product/study/ible/Ible';
import Molti from './components/Product/forKIDS/molti/Molti';
import Atti from './components/Product/forKIDS/atti/Atti';
import Stepo from './components/Product/seatbooster/stepo/Stepo';
import Fungus from './components/Product/seatbooster/fungus/Fungus';
import T50R from './components/Product/selfRepair/t50/T50R';
import T20R from './components/Product/selfRepair/t20/T20R';
import RingoR from './components/Product/selfRepair/ringo/RingoR';
import Caster from './components/Product/selfRepair/caster/Caster';
import T90Detail from './components/Product/work/t90/T90Detail';
import T80Detail from './components/Product/work/t80/T80Detail';
import T55Detail from './components/Product/work/t55/T55Detail';
import T50AirDetail from './components/Product/work/t50air/T50AirDetail';
import T50Detail from './components/Product/work/t50/T50Detail';
import T20Detail from './components/Product/work/t20/T20Detail';
import LinieDetail from './components/Product/work/linie/LinieDetail';
import EgaDetail from './components/Product/worknMore/ega/EgaDetail';
import ButtonDetail from './components/Product/worknMore/button/ButtonDetail';
import ManeDetail from './components/Product/worknMore/mane/ManeDetail';
import GcDetail from './components/Product/gaming/gcpro/GcDetail';
import RingoDetail from './components/Product/study/ringo/RingoDetail';
import IbleDetail from './components/Product/study/ible/IbleDetail';
import MoltiDetail from './components/Product/forKIDS/molti/MoltiDetail';
import AttiDetail from './components/Product/forKIDS/atti/AttiDetail';
import StepoDetail from './components/Product/seatbooster/stepo/StepoDetail';
import FungusDetail from './components/Product/seatbooster/fungus/FungusDetail';
import T50RDetail from './components/Product/selfRepair/t50/T50RDetail';
import T20RDetail from './components/Product/selfRepair/t20/T20RDetail';
import RingoRDetail from './components/Product/selfRepair/ringo/RingoRDetail';
import CasterDetail from './components/Product/selfRepair/caster/CasterDetail';

const App = () => {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route path="/event" element={<EventPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/products">
                            <Route index element={<Product />} />
                            <Route path="T90">
                                <Route index element={<T90 />} />
                                <Route path=":T90ID" element={<T90Detail />} />
                            </Route>
                            <Route path="T80">
                                <Route index element={<T80 />} />
                                <Route path=":T80ID" element={<T80Detail />} />
                            </Route>
                            <Route path="T55">
                                <Route index element={<T55 />} />
                                <Route path=":T55ID" element={<T55Detail />} />
                            </Route>
                            <Route path="T50_Air">
                                <Route index element={<T50Air />} />
                                <Route path=":T50AID" element={<T50AirDetail />} />
                            </Route>
                            <Route path="T50">
                                <Route index element={<T50 />} />
                                <Route path=":T50ID" element={<T50Detail />} />
                            </Route>
                            <Route path="LINIE">
                                <Route index element={<Linie />} />
                                <Route path=":LINIEID" element={<LinieDetail />} />
                            </Route>
                            <Route path="T20">
                                <Route index element={<T20 />} />
                                <Route path=":T20ID" element={<T20Detail />} />
                            </Route>
                            <Route path="EGA">
                                <Route index element={<Ega />} />
                                <Route path=":EGAID" element={<EgaDetail />} />
                            </Route>
                            <Route path="BUTTON">
                                <Route index element={<Button />} />
                                <Route path=":BTNID" element={<ButtonDetail />} />
                            </Route>
                            <Route path="MANE">
                                <Route index element={<Mane />} />
                                <Route path=":MANEID" element={<ManeDetail />} />
                            </Route>
                            <Route path="gc_pro">
                                <Route index element={<Gcpro />} />
                                <Route path=":GCID" element={<GcDetail />} />
                            </Route>
                            <Route path="RINGO">
                                <Route index element={<Ringo />} />
                                <Route path=":RINGOID" element={<RingoDetail />} />
                            </Route>
                            <Route path="IBLE">
                                <Route index element={<Ible />} />
                                <Route path=":IBLEID" element={<IbleDetail />} />
                            </Route>
                            <Route path="MOLTI">
                                <Route index element={<Molti />} />
                                <Route path=":MOLTIID" element={<MoltiDetail />} />
                            </Route>
                            <Route path="ATTI">
                                <Route index element={<Atti />} />
                                <Route path=":ATTIID" element={<AttiDetail />} />
                            </Route>
                            <Route path="STEPO">
                                <Route index element={<Stepo />} />
                                <Route path=":STEPOID" element={<StepoDetail />} />
                            </Route>
                            <Route path="FUNGUS">
                                <Route index element={<Fungus />} />
                                <Route path=":FUNGUSID" element={<FungusDetail />} />
                            </Route>
                            <Route path="t50_repair">
                                <Route index element={<T50R />} />
                                <Route path=":T50RID" element={<T50RDetail />} />
                            </Route>
                            <Route path="t20_repair">
                                <Route index element={<T20R />} />
                                <Route path=":T20RID" element={<T20RDetail />} />
                            </Route>
                            <Route path="Ringo_repair">
                                <Route index element={<RingoR />} />
                                <Route path=":RINRID" element={<RingoRDetail />} />
                            </Route>
                            <Route path="CASTER">
                                <Route index element={<Caster />} />
                                <Route path=":CASTERID" element={<CasterDetail />} />
                            </Route>
                        </Route>
                        <Route path="/support" element={<Support />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
