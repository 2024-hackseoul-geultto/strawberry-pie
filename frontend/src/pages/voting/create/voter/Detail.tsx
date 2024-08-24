import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import type { Voter } from '../../../../types';
import { removeSpace } from '../../../../utils/format';
import { isEmail } from '../../../../utils/validate';

import { LabelInput, DoubleButton } from '../../../../components/ui';

interface VotingChoiceDetailProps {
  onCreate: (data: Voter) => void;
  onBack: () => void;
}

const VotingChoiceDetail = (props: VotingChoiceDetailProps) => {
  const { onCreate = () => {}, onBack = () => {} } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isEmailValid = email.length > 0 && isEmail(email);
  const btnCreateDisabled = !email || !isEmailValid || name.trim().length === 0;
  const emailError = isEmailValid || removeSpace(email).length === 0 ? '' : '이메일 형식이 올바르지 않습니다.';

  const handleCreate = () => {
    onCreate({ name, email });
  };

  return (
    <div>
      <header className="header">
        <IoIosArrowBack size={28} color="#f6fcff" style={{ cursor: 'pointer' }} onClick={onBack} />
      </header>

      <h1 className="main-title">
        투표에 참여할 유권자를
        <br />
        추가해주세요.
      </h1>

      <div className="input-container">
        <LabelInput label="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <LabelInput type="email" label="이메일" value={email} onChange={(e) => setEmail(e.target.value)} error={emailError} />
      </div>

      <footer className="footer">
        <DoubleButton disabled={btnCreateDisabled} onClick={handleCreate}>
          유권자 추가하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default VotingChoiceDetail;
