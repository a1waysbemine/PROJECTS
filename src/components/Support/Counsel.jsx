import { CounselForm, CounselWrap } from './SupportStyle';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { counselToMypage, changeMypageCategory } from '../../store/modules/supportSlice';
import { useNavigate } from 'react-router-dom';

const Counsel = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [Chkbox, setChkbox] = useState(false);
    const [category, setCategory] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        title: '',
        files: [],
        details: '',
        categorize: '',
    });
    const { email, title, details, categorize } = form;

    const chkRef = useRef();

    const changeInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value, categorize: category });
    };
    const fileRef = useRef();
    const changeFileInput = (e) => {
        setForm({ ...form, files: [...e.target.files] });
    };
    const detailsRef = useRef();
    const changeContentEditable = (e) => {
        setForm({ ...form, details: e.target.innerText });
    };

    const changeRadio = (category) => {
        setCategory(category);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        dispatch(counselToMypage(form));
        setForm({ name: '', email: '', tel: '', title: '', files: [], details: '' });
        setChkbox(false);
        setCategory('');
        fileRef.current.value = '';
        detailsRef.current.innerText = '';
        alert('상담 신청이 완료되었습니다');
        navigate('/mypage');
        changeMypageCategory('상담내역');
    };

    return (
        <CounselWrap>
            <div className="subInner">
                <h2>친절상담</h2>
                <div className="subVisual">
                    <h3>시디즈와 의자에 대해 궁금한 모든 것들을 물어보세요!</h3>
                    <h4>
                        T.1577 - 5674
                        <span>
                            (월-금 09:30 - 17:30 / 토 09:30 - 12:30 / 점심시간 12:30 - 13:30)
                        </span>
                    </h4>
                </div>
                <div className="infoPolicy">
                    <strong>개인정보의 수집 및 이용에 대한 안내</strong>
                    <p>
                        수집 항목 : 이름, 이메일, 휴대전화번호, IP주소, 주소(A/S문의)
                        <br />
                        수집 목적 : 상담 문의 접수 및 결과 회신, 서비스(A/S) 제공 <br />
                        이용 기간 : 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에 해당 정보를
                        지체 없이 파기합니다. <br />
                        <br />
                        단, 관계법령의 규정에 의하여 필요가 있는 경우 일정기간 동안 개인정보를
                        보관할 수 있습니다. <br />
                        <br />※ 위의 개인정보 수집 항목은 상담 접수 및 서비스 제공을 위한 최소한의
                        정보로, <br />
                        개인정보 수집에 동의하지 않으시는 경우 상담접수 및 서비스 제공이 불가능
                        합니다. <br /> <br />그 밖의 사항은 시디즈 개인정보처리방침을 준수합니다.
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

                <CounselForm onSubmit={onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>의자 구매 전 문의</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '상품정보'}
                                        onChange={() => changeRadio('상품정보')}
                                    />
                                    상품정보
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '상품추천'}
                                        onChange={() => changeRadio('상품추천')}
                                    />
                                    상품추천
                                </td>
                            </tr>
                            <tr>
                                <td>주문 관련 문의</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '주문/결제'}
                                        onChange={() => changeRadio('주문/결제')}
                                    />
                                    주문/결제
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '배송/방문설치'}
                                        onChange={() => changeRadio('배송/방문설치')}
                                    />
                                    배송/방문설치
                                </td>
                            </tr>
                            <tr>
                                <td>의자 구매 후 문의</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '이용 상 문의'}
                                        onChange={() => changeRadio('이용 상 문의')}
                                    />
                                    이용 상 문의
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === 'A/S 문의'}
                                        onChange={() => changeRadio('A/S 문의')}
                                    />
                                    A/S 문의
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
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '납품확인서 발급'}
                                        onChange={() => changeRadio('납품확인서 발급')}
                                    />
                                    납품확인서 발급
                                </td>
                            </tr>
                            <tr>
                                <td>기타 문의</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '의자 체험 매장'}
                                        onChange={() => changeRadio('의자 체험 매장')}
                                    />
                                    의자 체험 매장
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '제안/칭찬/불만족'}
                                        onChange={() => changeRadio('제안/칭찬/불만족')}
                                    />
                                    제안/칭찬/불만족
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '회원정보'}
                                        onChange={() => changeRadio('회원정보')}
                                    />
                                    회원정보
                                </td>
                                <td>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={category === '기타'}
                                        onChange={() => changeRadio('기타')}
                                    />
                                    기타
                                </td>
                            </tr>
                            <tr>
                                <td>이름</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td className="email">
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
                            <tr className="title">
                                <td>제목</td>
                                <td>
                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                            <tr className="fileUpload">
                                <td>첨부파일</td>
                                <td>
                                    <input
                                        type="file"
                                        name="file"
                                        ref={fileRef}
                                        onChange={changeFileInput}
                                    />
                                </td>
                            </tr>
                            <tr className="details">
                                <td>내용</td>
                                <td>
                                    <div
                                        contentEditable
                                        ref={detailsRef}
                                        onInput={changeContentEditable}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">상담 신청하기</button>
                </CounselForm>
            </div>
        </CounselWrap>
    );
};

export default Counsel;
