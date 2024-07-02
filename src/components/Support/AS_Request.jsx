import { ASRequestForm, RequestWrap } from './SupportStyle';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const AS_Request = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [Chkbox, setChkbox] = useState(false);
    const [category, setCategory] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        postnum: '',
        detailAddress: '',
        date: '',
        title: '',
        files: [],
        details: '',
        buyRoot: '',
    });

    const changeInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const fileRef = useRef();
    const dateRef = useRef();
    const detailsRef = useRef();
    const chkRef = useRef();

    const dispatch = useDispatch();

    const changeFileInput = (e) => {
        setForm({ ...form, files: [...e.target.files] });
    };

    const changeContentEditable = (e) => {
        setForm({ ...form, details: e.target.innerText });
    };

    const changeRadio = (category) => {
        setCategory(category);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!Chkbox) {
            alert('개인정보 수집 및 이용에 동의해주세요');
            chkRef.current.focus();
            return;
        }
        if (
            category === '' ||
            !form.name ||
            !form.email ||
            !form.tel ||
            !form.title ||
            !form.details
        ) {
            alert('입력되지 않은 항목이 있습니다.');
            return;
        }
        setForm({
            name: '',
            email: '',
            tel: '',
            title: '',
            postnum: '',
            detailAddress: '',
            files: [],
            date: '',
            details: '',
            buyRoot: '',
        });
        setChkbox(false);
        setCategory('');
        fileRef.current.value = '';
        detailsRef.current.innerText = '';
        dateRef.current.value = '';
        alert('A/S신청이 완료되었습니다');
    };

    return (
        <RequestWrap>
            <div className="subInner">
                <h2>A/S 신청</h2>
                <div className="visual">
                    <h3>
                        제품 사용 중 불편한 점이 생겼다면,
                        <br />
                        1:1 상담하기 서비스 혹은 고객센터 전화 문의를 이용해주세요.
                    </h3>
                    <p>* 고객님이 원할 때면 언제 어디서나 접수 가능합니다!</p>
                    <b>
                        24시간 365일 언제든지 상담이 가능합니다. 직원과 직접 상담하기 어려웠던
                        심야시간, 휴일에도
                        <br />
                        궁금한 내용이 있으면 언제든지 물어보세요.
                    </b>
                    <p>* 상담 챗봇으로 답을 얻지 못하셔도 괜찮아요!</p>
                    <b>
                        상담 챗봇과 대화 중 '상담원과 전화하기'를 선택하시면 친절한 상담원이
                        도와드립니다.
                        <br />
                        단, 상담원과의 상담은 아래 고객센터 운영시간을 참고해 주시기 바랍니다.
                    </b>
                    <strong>
                        <i className="xi-call" />
                        1577 - 5674
                        <span>
                            (월-금 09:30 - 17:30 / 토 09:30 - 12:30 / 점심시간 12:30 - 13:30)
                        </span>
                    </strong>
                </div>
                <div className="infoPolicy">
                    <strong>개인정보의 수집 및 이용에 대한 안내</strong>
                    <p>
                        수집 항목 : 이름, 이메일, 휴대전화번호, IP주소, 주소(A/S문의)
                        <br />
                        수집 목적 : 상담 문의 접수 및 결과 회신, 서비스(A/S) 제공
                        <br />
                        이용 기간 : 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에 해당 정보를
                        지체 없이 파기합니다.
                        <br />
                        단, 관계법령의 규정에 의하여 필요가 있는 경우 일정기간 동안 개인정보를
                        보관할 수 있습니다.
                        <br />
                        <br />
                        ※ 위의 개인정보 수집 항목은 상담 접수 및 서비스 제공을 위한 최소한의 정보로,
                        <br />
                        개인정보 수집에 동의하지 않으시는 경우 상담접수 및 서비스 제공이 불가능
                        합니다.
                        <br />
                        <br />그 밖의 사항은 시디즈 개인정보처리방침을 준수합니다.
                    </p>
                </div>
                <p className="agree">
                    <input
                        type="checkbox"
                        checked={Chkbox}
                        ref={chkRef}
                        onChange={() => setChkbox(!Chkbox)}
                    />
                    개인정보 수집 및 이용에 동의합니다
                </p>
                <ASRequestForm onSubmit={onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>의자 구매 후 문의</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '사용 상 문의'}
                                        onChange={() => changeRadio('사용 상 문의')}
                                    />
                                    사용 상 문의
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === 'A/S 접수'}
                                        onChange={() => changeRadio('A/S 접수')}
                                    />
                                    A/S 접수
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '반품/교환/환불'}
                                        onChange={() => changeRadio('반품/교환/환불')}
                                    />
                                    반품/교환/환불
                                </td>
                            </tr>
                            <tr>
                                <td>이름</td>
                                <td>
                                    <input
                                        type="name"
                                        name="name"
                                        value={form.name}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={changeInput}
                                    />
                                    <span>
                                        등록해 주신 메일과 전화번호를 통해 답변을 드리오니 정확한
                                        기입 부탁드립니다
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>휴대전화</td>
                                <td>
                                    <input
                                        type="tel"
                                        name="tel"
                                        value={form.tel}
                                        onChange={changeInput}
                                    />
                                    <span>예) 010-1234-5678</span>
                                </td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td className="address">
                                    <input
                                        type="text"
                                        placeholder="우편번호"
                                        name="postnum"
                                        value={form.postnum}
                                        onChange={changeInput}
                                    />
                                    <input
                                        type="text"
                                        placeholder="상세주소 입력"
                                        name="detailAddress"
                                        value={form.detailAddress}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>구입처</td>
                                <td>
                                    <select
                                        name="buyRoot"
                                        id="buyRoot"
                                        value={form.buyRoot}
                                        onChange={(e) =>
                                            setForm({ ...form, buyRoot: e.target.value })
                                        }
                                    >
                                        <option value="">선택</option>
                                        <option value="시디즈 쇼핑몰">시디즈 쇼핑몰</option>
                                        <option value="온라인 쇼핑몰">온라인 쇼핑몰</option>
                                        <option value="홈쇼핑">홈쇼핑</option>
                                        <option value="시디즈 매장">시디즈 매장</option>
                                    </select>
                                </td>
                                <td className="date">구입시기</td>
                                <td>
                                    <input
                                        type="date"
                                        name="date"
                                        value={form.date}
                                        ref={dateRef}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>제목</td>
                                <td className="title">
                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>첨부파일</td>
                                <td className="upload">
                                    <input
                                        type="file"
                                        name="file"
                                        ref={fileRef}
                                        onChange={changeFileInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>내용</td>
                                <td>
                                    <div
                                        className="details"
                                        contentEditable="true"
                                        ref={detailsRef}
                                        onInput={changeContentEditable}
                                    ></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">확인</button>
                </ASRequestForm>
            </div>
        </RequestWrap>
    );
};

export default AS_Request;
