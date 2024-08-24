import { Accordion } from '../../../components/ui';
import './style.scss';

import { useGroupStore } from '../../../stores/group';

const GroupList = () => {
  const groupStore = useGroupStore();

  return (
    <div>
      <h2 className="main-title header group-header">그룹 정보</h2>
      {groupStore.groupList.map((group) => (
        <Accordion title={group.name} description={group.description}>
          <div>
            <p>초기 크레딧: {group.credit}</p>
            <p>투표 여부: N</p>
          </div>
        </Accordion>
      ))}
    </div>
  );
};

export default GroupList;
