import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ProgressBar, LabelInput, DoubleButton, ImageBox, TextArea } from '../../../components/ui';

import './style.scss';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [credit, setCredit] = useState(0);
  const [description, setDescription] = useState('');

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
        <ImageBox className="image-box-container" width={120} height={144} type="square" />
        <div className="input-container flex-1">
          <LabelInput label="그룹명" value={name} onChange={(e) => setName(e.target.value)} />
          <LabelInput label="초기 크레딧" type="number" value={credit} onChange={(e) => setCredit(Number(e.target.value))} />
        </div>
      </div>

      <TextArea className="textarea" label="그룹 설명" value={description} onChange={setDescription} />

      <footer className="footer">
        <Link to="/create-voting-type">
          <DoubleButton>그룹 생성하기</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default UserInfo;
