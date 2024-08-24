import { DoubleButton } from '../../../components/ui';

const VoteComplete = () => {
  return (
    <div>
      <h1 className="main-title">
        투표가
        <br />
        완료되었습니다.
      </h1>

      <footer className="footer" style={{ marginTop: '35px' }}>
        <DoubleButton>종료하기</DoubleButton>
      </footer>
    </div>
  );
};

export default VoteComplete;
