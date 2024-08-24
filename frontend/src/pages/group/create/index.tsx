import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGroupStore } from '../../../stores/group';
import { formatNumber } from '../../../utils/format';

import { ProgressBar, LabelInput, DoubleButton, ImageInput, TextArea } from '../../../components/ui';

import './style.scss';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [profileSrc, setProfileSrc] = useState('');
  const [credit, setCredit] = useState(0);
  const [description, setDescription] = useState('');

  const groupStore = useGroupStore();
  const navigate = useNavigate();

  const btnNextDisabled = !name || !credit || !profileSrc || !description;

  const handleBtnNext = () => {
    const id = groupStore.groupList.length + 1; // TODO: 교체 필요

    groupStore.setGroup({ name, credit, profileSrc, description, id });
    navigate(`/create-voting-detail?groupId=${id}`);
  };

  const handleChangeCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.value', e.target.value);
    const value = +formatNumber(e.target.value);
    setCredit(value);
  };

  return (
    <div>
      <header>
        <ProgressBar step={1} maxStep={4} />
      </header>
      <h1 className="main-title">
        그룹을
        <br />
        생성해 주세요.
      </h1>

      <div className="flex" style={{ gap: '10px' }}>
        <ImageInput className="image-box-container" width={120} height={144} type="square" src={profileSrc} onLoad={setProfileSrc} />
        <div className="input-container flex-1">
          <LabelInput label="그룹명" value={name} onChange={(e) => setName(e.target.value)} />
          <LabelInput label="초기 크레딧" value={credit} onChange={handleChangeCredit} />
        </div>
      </div>

      <TextArea className="textarea" label="그룹 설명" value={description} onChange={setDescription} />

      <footer className="footer">
        <DoubleButton onClick={handleBtnNext} disabled={btnNextDisabled}>
          그룹 생성하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default UserInfo;
