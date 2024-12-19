import "./App.css";
import ThemeSwitcher from "./components/theme-switcher";

function App() {
  return (
    <div className="flex flex-col items-start gap-6">
      <ThemeSwitcher />
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <button className="btn btn-primary">daisyUI Button</button>
    </div>
  );
}

export default App;
