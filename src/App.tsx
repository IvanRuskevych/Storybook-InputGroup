import { InputAnnotation, InputLabel, InputText } from "./shared/ui";
import "./App.css";
import { ThemeStyles } from "./shared/styles";

function App() {
  return (
    <ThemeStyles theme={"light"}>
      <InputLabel label={"Email"} required={true} infoIcon={true} />
      <InputAnnotation text={"This is a hint text to help user."} />
      <InputAnnotation
        text={"This is a hint text to help user."}
        isError={true}
      />

      <InputText placeholder={"Input..."} size={"sm"} />
    </ThemeStyles>
  );
}

export default App;
