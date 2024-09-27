import { TaskManagerContext } from '@/context';
import { callUserLogoutApi } from '@/services';
import { LogOut } from 'lucide-react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();

  async function handleLogOut() {
    const response = await callUserLogoutApi();

    if (response?.success) {
      setUser(null);
      navigate('/auth');
    }
  }
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto h-16">
        <div className="flex h-[64px] items-center w-full justify-between px-4">
          <div className="w-auto">
            <h2 className="text-3xl">Task Manager</h2>
          </div>
          <div className="flex gap-4">
            <Link
              to={'/tasks/list'}
              className="text-black text-xl font-bold underline"
            >
              Tasks
            </Link>
            <Link
              to={'/tasks/scrum-board'}
              className="text-black text-xl font-bold underline"
            >
              Scrum Board
            </Link>
          </div>
          <div>
            <LogOut
              onClick={handleLogOut}
              color="#000"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
