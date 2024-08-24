import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, LabelInput, IconButton, DoubleButton } from '../../../components/ui';
import { FaRegCheckCircle } from 'react-icons/fa';

const SigninInfo = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');
  const [authNumber, setAuthNumber] = useState('');

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
        <LabelInput label="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <LabelInput label="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <LabelInput label="비밀번호 확인" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
        <LabelInput label="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="flex-container align-flex-end">
          <LabelInput label="인증번호" className="flex-1" value={authNumber} onChange={(e) => setAuthNumber(e.target.value)} />
          <IconButton icon={<FaRegCheckCircle />} width="130px" />
        </div>
      </div>

      <footer className="footer">
        <Link to="/signup-userinfo">
          <DoubleButton>다음 단계로 이동</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default SigninInfo;
