import { useState } from 'react';

import { LabelInput, DoubleButton, ImageBox, TextArea } from '../../../../components/ui';

interface VotingChoiceDetailProps {
  onCreate: (data: { title: string; description: string; detail: string }) => void;
}

const VotingChoiceDetail = (props: VotingChoiceDetailProps) => {
  const { onCreate = () => {} } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detail, setDetail] = useState('');

  const handleCreate = () => {
    onCreate({ title, description, detail });
  };

  return (
    <div>
      <h1 className="main-title">
        선택지나 후보의
        <br />
        정보를 입력해 주세요
      </h1>

      <ImageBox className="image-box-container" width={120} height={144} type="square" />

      <div className="input-container">
        <LabelInput label="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
        <LabelInput label="한 줄 설명" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <TextArea className="textarea" label="상세 설명" value={detail} onChange={setDetail} />

      <footer className="footer">
        <DoubleButton onClick={handleCreate}>선택지/후보 추가하기</DoubleButton>
      </footer>
    </div>
  );
};

export default VotingChoiceDetail;
