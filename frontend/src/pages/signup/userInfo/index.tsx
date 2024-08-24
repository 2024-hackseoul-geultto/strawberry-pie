import { useState } from 'react';
import { removeSpace } from '../../../utils/format';
import { useSignupStore } from '../../../stores/signup';
import { useUserStore } from '../../../stores/user';
import { useNavigate } from 'react-router-dom';
import { ProgressBar, LabelInput, DoubleButton, ImageInput } from '../../../components/ui';

import './style.scss';

const UserInfo = () => {
  const [nickname, setNickname] = useState('');
  const [profileImg, setProfileImg] = useState('');

  const navigate = useNavigate();
  const signupStore = useSignupStore();
  const userStore = useUserStore();

  const btnNextDisabled = !profileImg || removeSpace(nickname).length === 0;

  const handleBtnNextClick = async () => {
    await signupStore.setNickName(nickname);
    await signupStore.setProfileSrc(profileImg);
    await userStore.signup(signupStore.user!);

    navigate('/signup-complete');
  };

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

      <ImageInput className="image-box-container" width={120} height={144} type="square" src={profileImg} onLoad={setProfileImg} />

      <div className="input-container">
        <LabelInput label="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <LabelInput label="대표 이메일" value={signupStore.user?.email || ''} readOnly disabled />
      </div>

      <footer className="footer">
        <DoubleButton disabled={btnNextDisabled} onClick={handleBtnNextClick}>
          회원가입하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default UserInfo;
