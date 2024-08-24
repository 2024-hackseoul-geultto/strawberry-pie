import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ProgressBar, LabelInput, DoubleButton, ImageBox } from '../../../components/ui';

import './style.scss';

const UserInfo = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <header>
        <ProgressBar step={2} maxStep={2} />
      </header>
      <h1 className="main-title">
        회원가입을 위한
        <br />
        정보를 입력해 주세요.
      </h1>

      <ImageBox className="image-box-container" width={120} height={144} type="square" />

      <div className="input-container">
        <LabelInput label="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <LabelInput label="대표 이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <footer className="footer">
        <Link to="/create-voting-type">
          <DoubleButton>회원가입하기</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default UserInfo;
