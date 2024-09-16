import { InputAnnotation, InputLabel } from "./shared/ui";
import "./App.css";
import { ThemeStyles } from "./shared/styles";

function App() {
  return (
    <ThemeStyles theme={"light"}>
      <InputLabel label={"Email"} required={true} infoIcon={true} />
      <InputAnnotation
        text={"This is a hint text to help user."}
        textOptions={"description"}
      />
      <InputAnnotation
        text={"This is a hint text to help user."}
        textOptions={"error"}
      />
    </ThemeStyles>
  );
}

export default App;
