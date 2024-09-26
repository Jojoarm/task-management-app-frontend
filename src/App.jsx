import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CommonLayout from './components/common-layout/CommonLayout';
import TaskPage from './pages/TaskPage';
import ScrumboardPage from './pages/ScrumboardPage';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/tasks" element={<CommonLayout />}>
        <Route path="list" element={<TaskPage />} />
        <Route path="scrum-board" element={<ScrumboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
