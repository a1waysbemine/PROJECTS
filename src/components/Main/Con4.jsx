import { Link } from 'react-router-dom';
import { Con4Wrap } from './ContentStyle';

const Con4 = () => {
    return (
        <Con4Wrap>
            <div className="inner">
                <div className="news">
                    <p>NEWS</p>
                    <p>
                        시디즈 더 프로그레시브 합정 오픈
                        <em>2024.02.08</em>
                        <span>
                            <Link to="/news">전체보기</Link>
                        </span>
                        {/* 전체보기 클릭 시 news페이지로 이동 */}
                    </p>
                </div>
                <div className="instaContents">
                    <p>
                        <span></span>
                        <strong>
                            <a
                                href="https://www.instagram.com/sidiz_korea?igsh=MW9iYXVldGdid3F1Nw=="
                                target="blank"
                            >
                                @sidiz_korea
                            </a>
                        </strong>
                        {/* 클릭 시 인스타그램 링크 이동 */}
                    </p>
                    <ul className="list">
                        {/* 각 li 클릭 시 해당 인스타그램 게시물로 이동 */}
                        <li>
                            <a
                                href="https://www.instagram.com/p/C73d3aHyAYA/?img_index=1"
                                target="blank"
                            >
                                <img src="./images/main/con4_img1.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/reel/C705SUXShhJ/" target="blank">
                                <img src="./images/main/con4_img2.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/C70LqxQyDin/" target="blank">
                                <img src="./images/main/con4_img3.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/sidiz_korea/p/C7oBfQruceR/?img_index=1"
                                target="blank"
                            >
                                <img src="./images/main/con4_img4.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/sidiz_korea/reel/C7ntLBnvwOr/"
                                target="blank"
                            >
                                <img src="./images/main/con4_img5.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="blogContents">
                    <strong>의자 위, 예술을 만나는 시간!</strong>
                    <h3>
                        시디즈, 국립현대미술관
                        <br />
                        뮤지엄 체어 후원
                    </h3>
                    <p>
                        앉음 (Sitting Experience)을 통해 더욱 충만하고 나은 삶을 경험할 수 있도록
                        노력하는 시디즈가 이번에는 국립현대미술관에 뮤지엄 체어를 후원하게 되었다는
                        반가운 소식을 전해 드립니다.
                    </p>
                    <span className="more">
                        <a href="https://blog.naver.com/sidiz_official/223217691179" target="blank">
                            LEARN MORE
                        </a>
                    </span>
                    <p className="pic">
                        <a href="https://blog.naver.com/sidiz_official/223217691179" target="blank">
                            <img src="./images/main/con4_img6.jpg" alt="" />
                        </a>
                    </p>
                </div>
            </div>
        </Con4Wrap>
    );
};

export default Con4;
