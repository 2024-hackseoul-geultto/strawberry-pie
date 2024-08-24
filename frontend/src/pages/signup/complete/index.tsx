import { Link } from 'react-router-dom';
import { DoubleButton } from '../../../components/ui';

import './style.scss';

const SignupComplete = () => {
  return (
    <div className="container">
      <h1 className="main-title">회원가입 완료</h1>
      <p className="message">회원가입이 완료되었습니다.</p>

      <footer className="footer">
        <Link to="/create-voting-type">
          <DoubleButton>투표 생성하러 가기</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default SignupComplete;
