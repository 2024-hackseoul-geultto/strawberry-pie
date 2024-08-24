import { DoubleButton } from '../../../../components/ui';

const VotingCreateComplete = () => {
  const handleClickShare = () => {
    alert('투표 링크가 복사되었습니다.');
  };

  return (
    <div>
      <h1 className="main-title">
        투표 생성이
        <br />
        완료되었습니다.
      </h1>

      <footer className="footer" style={{ marginTop: '35px' }}>
        <DoubleButton onClick={handleClickShare}>투표 링크 공유하기</DoubleButton>
      </footer>
    </div>
  );
};

export default VotingCreateComplete;
