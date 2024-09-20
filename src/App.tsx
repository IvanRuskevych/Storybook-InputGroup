import { InputGroup } from "./shared/ui";
import { ThemeStyles } from "./shared/styles";

function App() {
  const isError = true;
  const isInvisibleBorder = false;
  const position = "top";

  return (
    <ThemeStyles theme={"light"}>
      <InputGroup
        position={position}
        inputLabelProps={{
          htmlFor: "email",
          label: "Email",
          required: true,
          textTooltip: "This is a tooltip 1",
          isInfoIcon: true,
        }}
        inputTextProps={{
          id: "email",
          placeholder: "Input...",
          isError: isError,
          isInvisibleBorder: isInvisibleBorder,
          isIconSearch: false,

          isIconHelp: true,
          isIconShortkey: false,
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
