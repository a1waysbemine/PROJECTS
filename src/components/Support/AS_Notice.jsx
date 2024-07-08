import { ASNoticeWrap } from './SupportStyle';
import { useEffect } from 'react';

const AS_Notice = ({ categorize }) => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <ASNoticeWrap>
            <div className="subInner">
                <h2>A/S 안내</h2>
                <div className="box box1">
                    <h3>제품 A/S 상담, 접수는 시디즈 챗봇을 이용해주세요</h3>
                    <p>
                        제품 사용 중 불편한 점이 생겼다면 온라인 챗봇을 통해
                        <br />
                        언제, 어디서나 A/S 상담 및 접수가 가능합니다.
                    </p>
                    <div className="miniBox">
                        <p>
                            * <em>챗봇</em> 이용이 어려우신 경우, 시디즈 고객센터
                            <span>1577 - 5674</span>를 이용 부탁드립니다.
                        </p>
                        <p className="available">
                            <strong>
                                <span>월-금</span>
                                09:30 ~ 17:30
                            </strong>
                            <strong>
                                <span>토요일</span>
                                09:30 ~ 12:30
                            </strong>
                            <strong>
                                <span>점심시간</span>
                                12:30 ~ 13:30
                            </strong>
                        </p>
                    </div>
                </div>

                <h4>서비스요금 산정 기준</h4>
                <div className="box box2">
                    <div className="miniBox2">
                        <span className="plus">+</span>
                        <p>
                            <strong>
                                <span>1</span>
                                부품비
                            </strong>
                            부품비는 제품을 수리하는데 부품 교체를 할 경우 소용되는 부품 가격을
                            말합니다.
                        </p>
                        <p>
                            <strong>
                                <span>2</span>
                                출장비
                            </strong>
                            출장비는 구입 1년 이후부터 제품 수리 진행 여부와 상관없이
                            <em>18,000원</em>을 청구합니다.
                        </p>
                    </div>
                    <p className="text">
                        * 출장비는 수리비를 포함하고 있으며, 출장 횟수가 아닌 한 A/S건이 완료되는
                        횟수로 부과합니다.
                    </p>
                    <p className="text">
                        * 단, 서비스 대상 부품이 3개 이상인 경우 추가 출장비가 발생할 수 있습니다.
                    </p>
                    <em className="equal">| |</em>
                    <p className="total">서비스 요금</p>
                </div>
                <div className="box box3">
                    <h4>품질 보증 서비스 기준</h4>
                    <p className="explain2">
                        시디즈에서는 품목별 소비자분쟁해결기준 (공정거래위원회 고시)에 따라 제품에
                        대한 보증을 실시합니다.
                    </p>
                    <p>
                        1. 본 품질 보증은 부품의 품질 보증을 의미하며, 품질 보증 기간이란 정상적인
                        상태에서 자연 발생한
                        <br /> 품질, 성능, 기능 하자에 대한 수리를 약속한 기간을 말합니다.
                    </p>
                    <p>
                        2. 제품의 품질 보증 기간은 5년이며, 일부 품목에 한하여 15년으로 합니다.
                        <span>
                            단, 명확하고 신속한 서비스 제공을 위해 제품 등록을 요청드리고 있습니다.
                        </span>
                        <span>
                            구입일을 확인할 수 없는 경우, 제품 하단에 부착된 시리얼 넘버에 표기된
                            생산일로부터 3개월을 추가(유통기간 반영)하여 보증 기간을 산정합니다.
                        </span>
                    </p>
                    <p>
                        3. 구입 후 1년이 지나면, 수리의 유/무상 여부와 상관없이 출장비
                        <em>18,000원</em>이 발생합니다.
                        <span>
                            당사의 품질 보증 정책에 따라 제품의 수리 가능 여부 및 유/무상 기준이
                            결정됩니다. 자세한 내용은 아래 [품질 보증 서비스 상세]에서 확인하실 수
                            있습니다.
                        </span>
                    </p>
                </div>
                <button onClick={() => categorize('A/S 신청')}>온라인 A/S 신청</button>
            </div>
        </ASNoticeWrap>
    );
};

export default AS_Notice;
