import { useModeAnimation } from "react-theme-switch-animation";

const ThemeSwitch = () => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();

  return (
    <button
      ref={ref}
      onClick={toggleSwitchTheme}
      className="px-2 py-1 rounded bg-yellow dark:bg-darkBg text-textPrimary dark:text-darKText"
    >
      <span className="sr-only">
        Enable <span className="dark:hidden">light</span>
        <span className="hidden dark:inline">dark</span> mode
      </span>

      {isDarkMode ? (
        <i className="uil uil-moon"></i>
      ) : (
        <i className="uil uil-sun"></i>
      )}
    </button>
  );
};

export default ThemeSwitch;
