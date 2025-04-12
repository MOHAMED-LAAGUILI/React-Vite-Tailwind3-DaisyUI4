import { Link } from "react-router-dom";
import { Home, Settings, Users, TestTube } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="drawer-side z-10">
      <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
      <aside className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-primary rounded-lg grid place-items-center">
            <span className="text-primary-content font-bold text-xl">W</span>
          </div>
          <span className="text-xl font-bold">Workflow</span>
        </div>

        <ul className="menu menu-lg gap-2">
          <li>
            <Link to="/" className="flex items-center gap-3">
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex items-center gap-3">
              <Users className="h-5 w-5" />
              Users
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center gap-3">
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/test" className="flex items-center gap-3">
              <TestTube className="h-5 w-5" />
              Test
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
