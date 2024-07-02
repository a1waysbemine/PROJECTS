import { BrandStoryWrap } from './AboutStyle';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const BrandStory = ({ setOnTab }) => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <BrandStoryWrap>
            <div className="subInner">
                <h2>BRAND STORY</h2>
                <p className="thum">
                    <Link to="https://www.youtube.com/watch?v=mOPEVh_bisU" target="_blank">
                        <img src="./images/about/story_videothum.jpg" alt="" />
                    </Link>
                </p>
                <article className="text">
                    인생의 많은 순간,
                    <br />
                    우리는 의자와 함께합니다.
                    <br />
                    <br />
                    의자 위의 모든 순간들은
                    <br />
                    당신을 더 열정적이고 발전하는 삶으로 이끕니다.
                    <br />
                    <br />
                    그래서 시디즈는 의자 위 경험(Sitting Experience)을,
                    <br />
                    의자 위 사람과 그 움직임을 연구합니다.
                    <br />
                    <br />
                    당신이 의자 위에서 누릴 모든 경험을 위해
                    <br />
                    그리고 그 경험이 바꿀 당신의 인생을 위해
                    <span>의자가 인생을 바꾼다</span>
                </article>
                <h3>OUR VISION</h3>
                <p className="vision">
                    최상의 앉음(Sitting Experience)을 통해
                    <br />더 열정적이고 발전하는 삶을 이끌어 냅니다.
                </p>
                <h3>OUR VALUES</h3>
                <ul className="list">
                    <li>
                        <h4>DESIGN THINKING</h4>
                        <b>
                            사용자의 앉음을 관찰하여 문제점을 발견하고
                            <br />
                            이에 대한 해결책을 제시한다.
                        </b>
                    </li>
                    <li>
                        <h4>ERGONOMICS</h4>
                        <b>
                            사용자가 제품을 편리하고 안전하게 쓸 수 있도록
                            <br />
                            인간의 신체적/인지적 특성을 고려하여 제품을 설계한다.
                        </b>
                    </li>
                    <li>
                        <h4>ENGINEERING</h4>
                        <b>
                            전문 기술력을 바탕으로
                            <br />
                            선도적인 제품을 만들고 계속 발전시킨다.
                        </b>
                    </li>
                    <li>
                        <h4>SUSTAINABILITY</h4>
                        <b>
                            제품의 설계-제조-유통-사용-폐기 과정 전반에 걸쳐
                            <br />
                            환경에 대한 책임의식을 갖는다.
                        </b>
                    </li>
                </ul>
                <h3>HISTORY</h3>
                <div className="hisBox">
                    <p>
                        <img src="../images/about/history_visual.jpg" alt="" />
                    </p>
                    <p className="txt">
                        좋은 의자를 만들겠다는 일념으로 출발한 시디즈는
                        <br />삶 속에 편안함의 가치를 창조하기 위해 노력해왔습니다.
                        <span onClick={() => setOnTab(1)}>시디즈의 역사 보러가기</span>
                    </p>
                </div>
            </div>
        </BrandStoryWrap>
    );
};

export default BrandStory;
