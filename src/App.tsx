import { InputGroup } from "./shared/ui";
import { ThemeStyles } from "./shared/styles";
import styled from "styled-components";

function App() {
  const isError = false;
  const isInvisibleBorder = false;
  const position = "top";
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 60%;
    margin: 0 auto;
  `;

  return (
    <ThemeStyles theme={"light"}>
      <Container>
        <InputGroup
          position={position}
          inputLabelProps={{
            htmlFor: "email",
            label: "Email",
            required: true,
            textTooltip: "This is an email tooltip",
            isInfoIcon: true,
          }}
          inputTextProps={{
            id: "email",
            type: "text",
            placeholder: "Input...",
            isError: isError,
            isInvisibleBorder: isInvisibleBorder,
            isIconSearch: true,
            isIconHelp: true,
            isIconShortkey: true,
          }}
          inputAnnotationProps={{
            text: "Example: email@test.com",
            textError: "Please enter correct email address. ",
            isError: isError,
          }}
        />

        <InputGroup
          position={position}
          inputLabelProps={{
            htmlFor: "password",
            label: "Password",
            required: true,
            textTooltip: "This is a password tooltip",
            isInfoIcon: true,
          }}
          inputTextProps={{
            id: "email",
            type: "text",
            placeholder: "Input...",
            isError: true,
            isInvisibleBorder: isInvisibleBorder,
            isIconSearch: true,
            isIconHelp: true,
            isIconShortkey: true,
          }}
          inputAnnotationProps={{
            text: "Example: Password12@!%",
            textError: "Please enter correct password. ",
            isError: true,
          }}
        />

        <InputGroup
          position={"side"}
          inputLabelProps={{
            htmlFor: "data",
            label: "Data info",
            required: true,
            textTooltip: "This is a data tooltip",
            isInfoIcon: true,
          }}
          inputTextProps={{
            id: "email",
            type: "text",
            placeholder: "Input...",
            isError: false,
            isInvisibleBorder: true,
            isIconSearch: false,
            isIconHelp: false,
            isIconShortkey: false,
            disabled: true,
          }}
          inputAnnotationProps={{
            text: "Example: 12345",
            textError: "Please enter data. ",
            isError: false,
          }}
        />
      </Container>
    </ThemeStyles>
  );
}

export default App;
