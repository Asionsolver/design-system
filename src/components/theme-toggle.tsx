import { useEffect } from "react";
import { useTheme } from "../theme/theme";
import classNames from "classnames";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-6 w-11 rounded-full bg-primary transition-colors duration-200 cursor-pointer"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <div
        className={classNames(
          "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white dark:bg-dark-600 transform transition-transform duration-200 ease-in-out flex items-center justify-center",
          theme === "dark" ? "translate-x-5" : ""
        )}
      >
        {theme === "light" ? (
          <Sun className="w-3 h-3 text-primary" />
        ) : (
          <Moon className="w3 h-3 text-primary" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
