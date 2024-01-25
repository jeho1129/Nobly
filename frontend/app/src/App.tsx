import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Birthday from './pages/SignUp/Birth';
import NameId from './pages/SignUp/NameId';
import Password from './pages/SignUp/Password';
import SeniorConnect from './pages/SeniorConnect/SeniorConnect';
import SeniorNameGender from './pages/SeniorConnect/SeniorNameGender';
import SeniorBirth from './pages/SeniorConnect/SeniorBirth';

// import Community from './pages/app/community/community';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up/name-id" element={<NameId />} />
        <Route path="/sign-up/password" element={<Password />} />
        <Route path="/sign-up/birthday" element={<Birthday />} />
        <Route path="/senior-connect" element={<SeniorConnect />} />
        <Route path="/senior-sign-up/birth-date" element={<SeniorBirth />} />
        <Route
          path="/senior-sign-up/name-gender"
          element={<SeniorNameGender />}
        />
      </Routes>
    </Router>
  );
}
export default App;
