import { InputGroup } from "./shared/ui";
import { ThemeStyles } from "./shared/styles";

function App() {
  const isError = true;
  const isInvisibleBorder = false;
  const position = "side";

  return (
    <ThemeStyles theme={"light"}>
      <InputGroup
        position={position}
        inputLabelProps={{
          htmlFor: "email",
          label: "Email",
          required: true,
          textTooltip: "This is a tooltip 1",
          isIcon: true,
        }}
        inputTextProps={{
          id: "email",
          placeholder: "Input...",
          isError: isError,
          isInvisibleBorder: isInvisibleBorder,
        }}
        inputAnnotationProps={{
          text: "Example: email@test.com",
          textError: "Please enter correct email address. ",
          isError: isError,
        }}
      />
    </ThemeStyles>
  );
}

export default App;
