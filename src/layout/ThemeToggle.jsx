import { useCallback } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "vite-theme";

const ThemeToggle = () => {
  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  }, []);

  return (
    <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
    </button>
  );
};

export default ThemeToggle;
