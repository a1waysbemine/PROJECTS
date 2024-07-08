import { Link, useNavigate } from 'react-router-dom';
import { FooterWrap } from './FooterStyle';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../store/modules/productSlice';
import { changeSupportCategory } from '../../store/modules/supportSlice';
import { changeAboutCategory } from '../../store/modules/aboutSlice';

const Footer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goCategory = (idx) => {
        dispatch(changeCategory(idx));
        navigate('/products');
    };
    const supportCategory = (category) => {
        dispatch(changeSupportCategory(category));
        navigate('/support');
    };
    const aboutCategory = (category) => {
        dispatch(changeAboutCategory(category));
        navigate('/about');
    };

    return (
        <FooterWrap>
            <div className="inner">
                <Link to="/main">
                    <h1>
                        <img src="./images/main/footer_logo.png" alt="" />
                    </h1>
                </Link>
                <ul className="info">
                    <li>
                        Copyright (c) 2019 SIDIZ, INC.
                        <br />
                        All rights reserved.
                    </li>
                    <li>(주)시디즈</li>
                    <li>대표이사 · 강성문 경기도 평택시 세교산단로 67-20 (세교동)</li>
                    <li>
                        사업자등록번호 · 215-87-48121
                        <br />
                        통신판매신고번호 · 2018-경기평택-0099
                        <br />
                        부가통신사업신고필증 · 022094
                    </li>
                    <li>
                        FAX · 02-3400-4800
                        <br />
                        개인정보관리책임자 · 강성문 I sidiz_official@fursys.com
                    </li>
                </ul>
                <ul className="footerMenu">
                    <li className="menu">
                        투자정보
                        <ul>
                            <li
                                onClick={() =>
                                    window.open('https://kr.sidiz.com/ir/noticeList?page=1')
                                }
                            >
                                공고·IR
                            </li>
                        </ul>
                    </li>
                    <li className="menu">
                        ABOUT SIDIZ
                        <ul>
                            <li onClick={() => aboutCategory('BRAND STORY')}>BRAND STORY</li>
                            <li onClick={() => aboutCategory('HISTORY')}>HISTORY</li>
                            <li onClick={() => aboutCategory('NEWS')}>NEWS</li>
                        </ul>
                    </li>
                    <li className="menu">
                        제품
                        <ul>
                            <li onClick={() => goCategory(0)}>WORK</li>
                            <li onClick={() => goCategory(1)}>WORK & MORE</li>
                            <li onClick={() => goCategory(2)}>GAMING</li>
                            <li onClick={() => goCategory(3)}>STUDY</li>
                            <li onClick={() => goCategory(4)}>for KIDS</li>
                            <li onClick={() => goCategory(5)}>SEAT BOOSTER</li>
                            <li onClick={() => goCategory(6)}>SELF-REPAIR</li>
                        </ul>
                    </li>
                    <li className="menu">
                        SUPPORT
                        <ul>
                            <li onClick={() => supportCategory('FAQ')}>FAQ</li>
                            <li onClick={() => supportCategory('친절상담')}>친절상담</li>
                            <li onClick={() => supportCategory('A/S 안내')}>A/S안내</li>
                            <li onClick={() => supportCategory('A/S 신청')}>A/S신청</li>
                            <li onClick={() => supportCategory('매장 찾기')}>매장 찾기</li>
                        </ul>
                    </li>
                    <li className="menu">
                        컨택센터
                        <ul className="time">
                            <li>1577 - 5674</li>
                            <li>평일 | 09:30 - 17:30</li>
                            <li>토요일 | 09:30 - 12:30</li>
                            <li>일요일, 공휴일 휴무</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </FooterWrap>
    );
};

export default Footer;
