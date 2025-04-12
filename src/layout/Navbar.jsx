import { Menu, Bell } from "lucide-react";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const THEME_KEY = "vite-theme";

const Navbar = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    document.documentElement.setAttribute("data-theme", savedTheme ?? "light");
  }, []);

  return (
    <div className="navbar bg-base-100 border-b px-4">
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
          <Menu className="h-6 w-6" />
        </label>
      </div>
      <div className="flex-1">
        <span className="text-lg font-semibold">Workflow Engine</span>
      </div>
      <div className="flex-none flex items-center gap-2">
        <button className="btn btn-ghost btn-circle">
          <Bell className="h-5 w-5" />
        </button>
        <ThemeToggle />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              />
            </div>
          </div>
          <ul className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
