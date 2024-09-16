import "./App.css";
import { ThemeStyles } from "./shared/styles/Theme/Theme.tsx";
import { InputLabel } from "./shared/ui/InputLabel/InputLabel.tsx";

function App() {
  return (
    <ThemeStyles theme={"light"}>
      <InputLabel label={"Email"} required={true} infoIcon={true} />
    </ThemeStyles>
  );
}

export default App;
