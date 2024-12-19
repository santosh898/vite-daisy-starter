import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeSwitcher = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <select className="select select-bordered select-sm" data-choose-theme>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="cupcake">cupcake</option>
      <option value="synthwave">synthwave</option>
      <option value="cyberpunk">cyberpunk</option>
    </select>
  );
};

export default ThemeSwitcher;
