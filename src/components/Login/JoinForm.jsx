import { useNavigate } from "react-router-dom";
import { personal_info, terms_of_use } from "../../assets/api/policyData";
import { JoinFormWrap } from "../../pages/login/LoginStyle";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { idChk, join } from "../../store/modules/authSlice";

const JoinForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    personal: false,
    provision: false,
    marketing: false,
  });
  const { all, terms, personal, provision, marketing } = agreements;
  const changeCheck = (e) => {
    const { name, checked } = e.target;
    setAgreements({
      ...agreements,
      [name]: checked,
    });
  };
  const checkAll = (e) => {
    const { checked } = e.target;
    setAgreements({
      all: checked,
      terms: checked,
      personal: checked,
      provision: checked,
      marketing: checked,
    });
  };

  const [user, setUser] = useState({
    userid: "",
    password: "",
    name: "",
    tel: "",
    email: "",
  });
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const telInput = (e) => {
    let { name, value } = e.target;
    value = value.replace(/[^0-9]/g, "");
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    if (value.length > 7) {
      value = value.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
    }
    setUser({
      ...user,
      [name]: value,
    });
  };

  const { userid, password, name, tel, email } = user;

  const idCheck = () => {
    dispatch(idChk({ userid }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!terms || !personal || !provision) {
      alert("필수 약관에 동의해 주세요.");
      return;
    }
    if (!userid || !password || !name || !tel || !email) return;
    if (tel.length !== 13) {
      alert("휴대전화를 제대로 입력해주세요.");
      return;
    }
    dispatch(join(user));
    setUser({
      userid: "",
      password: "",
      name: "",
      tel: "",
      email: "",
    });
    alert("회원가입이 완료되었습니다.");
    navigate("/login");
  };

  console.log(terms);

  return (
    <JoinFormWrap onSubmit={onSubmit}>
      <div className="policy">
        <h3>약관동의</h3>
        <p>
          <input type="checkbox" name="all" checked={all} onChange={checkAll} />
          <label htmlFor="all">전체 동의</label>
        </p>
        <p>
          <input
            type="checkbox"
            name="terms"
            checked={terms}
            onChange={changeCheck}
          />
          <label htmlFor="terms">이용약관 (필수)</label>
        </p>
        <p className="terms">
          <span>
            <input
              type="checkbox"
              name="personal"
              checked={personal}
              onChange={changeCheck}
            />
            <label htmlFor="personal">개인정보 수집 및 이용 동의 (필수)</label>
          </span>
          <textarea readOnly defaultValue={terms_of_use} disabled />
        </p>
        <p className="terms">
          <span>
            <input
              type="checkbox"
              name="provision"
              checked={provision}
              onChange={changeCheck}
            />
            <label htmlFor="provision">개인정보 제 3자 제공 동의 (필수)</label>
          </span>
          <textarea readOnly defaultValue={personal_info} disabled />
        </p>
        <p>
          <input
            type="checkbox"
            name="marketing"
            checked={marketing}
            onChange={changeCheck}
          />
          <label htmlFor="marketing">개인정보 수집 및 이용 동의 (선택)</label>
        </p>
      </div>
      <div className="input">
        <h3>회원정보 입력</h3>
        <p>
          <label htmlFor="userid">아이디</label>
          <input
            type="text"
            name="userid"
            value={userid}
            onChange={changeInput}
          />
          <button onClick={idCheck}>중복확인</button>
          <em>3~15자의 영문 또는 숫자를 공백없이 입력해주세요.</em>
        </p>
        <p>
          <label htmlFor="">비밀번호</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeInput}
          />
          <em>
            공백없는 8~15자의 영문/숫자/특수문자를 조합하여 입력해야 합니다.
          </em>
        </p>
        <p>
          <label htmlFor="">이름</label>
          <input type="text" name="name" value={name} onChange={changeInput} />
        </p>
        <p>
          <label htmlFor="">휴대전화</label>
          <input type="text" name="tel" value={tel} onChange={telInput} />
        </p>
        <p>
          <label htmlFor="">이메일</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeInput}
          />
          <em>마케팅 동의를 하신 분은 꼭 기입해주세요.</em>
        </p>
      </div>
      <p className="btn">
        <button type="submit">가입하기</button>
        <button
          onClick={() => {
            alert("가입이 취소되었습니다.");
            navigate("/");
          }}
        >
          가입취소
        </button>
      </p>
    </JoinFormWrap>
  );
};

export default JoinForm;
