import { Accordion } from '../../../components/ui';
import './style.scss';

const GroupList = () => {
  return (
    <div>
      <h2 className="main-title header group-header">그룹 정보</h2>
      <div className="content">
        <Accordion title="Click to toggle" description="This is a description">
          <p>This is the content of the accordion. It can include any React elements.</p>
          <p>For example, you can add multiple paragraphs, images, or other components.</p>
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </Accordion>
      </div>
    </div>
  );
};

export default GroupList;
