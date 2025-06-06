import "./App.css";
import HomePage from "./components/HomePage";
import StandardPage from "./components/StandardPage";

function App() {
  return (
    <div>
      <StandardPage>
        <HomePage />
      </StandardPage>
    </div>
  );
}

export default App;
