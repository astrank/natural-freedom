import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "../context/ThemeContext";

export default function Switcher() {
  const { setDarkTheme, setLightTheme, theme } = useTheme();

  const handleSwitch = () => {
    theme == "dark" ? setLightTheme() : setDarkTheme();
  };

  return (
    <Switch.Root
      name="switch"
      checked={theme == "dark" ? true : false}
      onCheckedChange={() => handleSwitch()}
      className="switch bg-gray-700 shadow-md relative gap-3 flex flex-row rounded-full w-16 h-8 lg:mb-4 items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <Switch.Thumb className="thumb h-6 w-6 rounded-full bg-gray-200 z-20 absolute left-1" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </Switch.Root>
  );
}
