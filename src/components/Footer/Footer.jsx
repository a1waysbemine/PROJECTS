import { Link } from 'react-router-dom';
import { FooterWrap } from './FooterStyle';

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <Link to="/main">
                    <h1>
                        <img src="../images/main/footer_logo.png" alt="" />
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
                            <li>공고·IR</li>
                        </ul>
                    </li>
                    <li className="menu">
                        ABOUT SIDIZ
                        <ul>
                            <li>BRAND STORY</li>
                            <li>NEWS</li>
                        </ul>
                    </li>
                    <li className="menu">
                        제품
                        <ul>
                            <li>WORK</li>
                            <li>WORK & MORE</li>
                            <li>GAMING</li>
                            <li>STUDY</li>
                            <li>for KIDS</li>
                            <li>SEAT BOOSTER</li>
                            <li>SELF-REPAIR</li>
                        </ul>
                    </li>
                    <li className="menu">
                        SUPPORT
                        <ul>
                            <li>FAQ</li>
                            <li>친절상담</li>
                            <li>A/S신청</li>
                            <li>A/S안내</li>
                            <li>매장 찾기</li>
                        </ul>
                    </li>
                    <li className="menu">
                        컨택센터
                        <ul>
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
