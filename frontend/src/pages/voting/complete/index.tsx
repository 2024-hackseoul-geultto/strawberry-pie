import { DoubleButton, ImageBox } from '../../../components/ui';
import React from 'react';
import { ImageDashboard } from '../../../components/ui/ImageDashboard';



const VoteComplete = () => {
  return (
    <div>
      <h1 className="main-title">
      </h1>
      <div className={'container'}>
        <ImageDashboard src='http://localhost:5173/dashboard.png'/>
      </div>
      <footer className="footer" style={{ marginTop: '35px' }}>
        <DoubleButton>종료하기</DoubleButton>
      </footer>
    </div>
  );
};

export default VoteComplete;
