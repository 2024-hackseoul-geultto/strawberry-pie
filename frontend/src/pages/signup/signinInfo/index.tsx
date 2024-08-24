import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { removeSpace, formatNumber } from '../../../utils/format';
import { isEmail } from '../../../utils/validate';

import { ProgressBar, LabelInput, IconButton, DoubleButton } from '../../../components/ui';
import { FaRegCheckCircle } from 'react-icons/fa';

const SigninInfo = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');
  const [authNumber, setAuthNumber] = useState('');
  const isPasswordMatch = password === passwordCheck;

  const btnNextDisabled = !id || !password || !passwordCheck || !email || !authNumber || !isPasswordMatch;
  const isEmailValid = email.length > 0 && isEmail(email);
  const emailError = isEmailValid || removeSpace(email).length === 0 ? '' : '이메일 형식이 올바르지 않습니다.';
  const btnAuthDisabled = !isEmailValid || authNumber.length < 5;

  const handleBtnNextClick = () => {
    navigate('/signup-userinfo');

  }
  return (
    <div>
      <header>
        <ProgressBar step={1} maxStep={2} />
      </header>
      <h1 className="main-title">
        회원가입을 위한
        <br />
        정보를 입력해 주세요.
      </h1>

      <div className="input-container">
        <LabelInput label="아이디" value={id} onChange={(e) => setId(removeSpace(e.target.value))} />
        <LabelInput type="password" label="비밀번호" value={password} onChange={(e) => setPassword(removeSpace(e.target.value))} />
        <LabelInput type="password" label="비밀번호 확인" value={passwordCheck} onChange={(e) => setPasswordCheck(removeSpace(e.target.value))} />
        <LabelInput type='email' label="이메일" value={email} onChange={(e) => setEmail(e.target.value)} error={emailError} />
        <div className="flex-container align-flex-end">
          <LabelInput label="인증번호" maxLength={5} className="flex-1" value={authNumber} onChange={(e) => setAuthNumber(formatNumber(e.target.value))} />
          <IconButton icon={<FaRegCheckCircle />} width="130px" disabled={btnAuthDisabled} />
        </div>
      </div>

      <footer className="footer">
          <DoubleButton disabled={btnNextDisabled} onClick={handleBtnNextClick}>다음 단계로 이동</DoubleButton>
      </footer>
    </div>
  );
};

export default SigninInfo;
