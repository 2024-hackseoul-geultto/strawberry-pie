import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import styles from './style.module.scss';
import { ImageBox, DoubleButton } from '../../components/ui';
function Home() {
  return (
    <div className={clsx(styles.container)}>
      <ImageBox src="/logo.png" alt="logo" />

      {/* TODO: 로그인하는 화면 연계 필요 */}
      <Link to="/signup-signinfo">
        <div className={clsx(styles.footer)}>
          <DoubleButton>시작하기</DoubleButton>
        </div>
      </Link>
    </div>
  );
}

export default Home;
