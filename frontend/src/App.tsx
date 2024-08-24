import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';

// signup
import SignInfo from './pages/signup/signinInfo';
import UserInfo from './pages/signup/userInfo';
import SignupComplete from './pages/signup/complete';

// voting - create
import VotingSelectType from './pages/voting/create/type';
import VotingDetail from './pages/voting/create/details';
import VotingChoice from './pages/voting/create/choice';
import VotingVoter from './pages/voting/create/voter';

// group - create
import GroupCreate from './pages/group/create';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'signup-signinfo', element: <SignInfo /> },
    { path: 'signup-userinfo', element: <UserInfo /> },
    { path: 'signup-complete', element: <SignupComplete /> },

    { path: 'create-voting-type', element: <VotingSelectType /> },
    { path: 'create-voting-detail', element: <VotingDetail /> },
    { path: 'create-voting-choice', element: <VotingChoice /> },
    { path: 'create-voting-voter', element: <VotingVoter /> },

    { path: 'create-group', element: <GroupCreate /> },
  ]);

  return routes;
}

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
