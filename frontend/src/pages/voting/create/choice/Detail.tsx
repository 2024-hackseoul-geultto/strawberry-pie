import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import type { ChoiceItem } from '../../../../types';

import { LabelInput, DoubleButton, ImageInput, TextArea } from '../../../../components/ui';

interface VotingChoiceDetailProps {
  onCreate: (data: ChoiceItem) => void;
  onBack: () => void;
}

const VotingChoiceDetail = (props: VotingChoiceDetailProps) => {
  const { onCreate = () => {}, onBack = () => {} } = props;

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  const btnCreateDisabled = !title || !description || !summary;

  const handleCreate = () => {
    onCreate({ title, description, summary, imgSrc });
  };

  return (
    <div>
      <header className="header">
        <IoIosArrowBack size={28} color="#f6fcff" style={{ cursor: 'pointer' }} onClick={onBack} />
      </header>

      <h1 className="main-title">
        선택지나 후보의
        <br />
        정보를 입력해 주세요
      </h1>

      <ImageInput className="image-box-container" width={120} height={144} type="square" src={imgSrc} onLoad={setImgSrc} />

      <div className="input-container">
        <LabelInput label="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
        <LabelInput label="한 줄 설명" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <TextArea className="textarea" label="상세 설명" value={summary} onChange={setSummary} />

      <footer className="footer">
        <DoubleButton disabled={btnCreateDisabled} onClick={handleCreate}>
          선택지/후보 추가하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default VotingChoiceDetail;
