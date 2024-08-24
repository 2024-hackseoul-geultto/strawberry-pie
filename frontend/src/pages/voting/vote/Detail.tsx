import { IoIosArrowBack } from 'react-icons/io';
import type { ChoiceItem } from '../../../types';

import { LabelInput, ImageInput, TextArea } from '../../../components/ui';

interface VotingChoiceDetailProps {
  choice: ChoiceItem;
  onBack: () => void;
}

const VotingChoiceDetail = (props: VotingChoiceDetailProps) => {
  const { choice, onBack } = props;

  return (
    <div>
      <header className="header">
        <IoIosArrowBack size={28} color="#f6fcff" style={{ cursor: 'pointer' }} onClick={onBack} />
      </header>

      <h1 className="header-title">선택지 상세 정보</h1>

      <ImageInput className="image-box-container" width={120} height={144} type="square" src={choice.imgSrc} readonly />

      <div className="input-container">
        <LabelInput label="제목" value={choice.title} readOnly />
        <LabelInput label="한 줄 설명" value={choice.description} readOnly />
      </div>

      <TextArea className="textarea" label="상세 설명" value={choice.description} readOnly />
    </div>
  );
};

export default VotingChoiceDetail;
