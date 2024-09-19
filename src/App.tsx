import { InputGroup } from "./shared/ui";
import { ThemeStyles } from "./shared/styles";
import styled from "styled-components";

function App() {
  const notError = false;
  const error = true;
  const isInvisible = true;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
  `;

  return (
    <ThemeStyles theme={"light"}>
      <Container>
        {/*  11111   */}
        <InputGroup
          inputLabelProps={{
            htmlFor: "email",
            label: "Email",
            required: true,
            infoIcon: true,
          }}
          inputTextProps={{
            id: "email",
            placeholder: "Input...",
            size: "xs",
            isError: notError,
          }}
          inputAnnotationProps={{
            text: "Example: email@test.com",
            textError: "Please enter correct email address. ",
            isError: notError,
          }}
        />

        {/*  22222   */}

        <InputGroup
          inputLabelProps={{
            htmlFor: "email",
            label: "Email",
            required: true,
            infoIcon: true,
          }}
          inputTextProps={{
            id: "email",
            placeholder: "Input...",
            // size: "sm",
            isError: notError,
            isInvisibleBorder: isInvisible,
          }}
          inputAnnotationProps={{
            text: "Example: email@test.com",
            textError: "Please enter correct email address. ",
            isError: notError,
          }}
        />

        {/*  333333   */}

        <InputGroup
          inputLabelProps={{
            htmlFor: "email",
            label: "Email",
            required: true,
            infoIcon: true,
          }}
          inputTextProps={{
            id: "email",
            placeholder: "Input...",
            size: "lg",
            isError: error,
          }}
          inputAnnotationProps={{
            text: "Example: email@test.com",
            textError: "Please enter correct email address. ",
            isError: error,
          }}
        />
      </Container>
    </ThemeStyles>
  );
}

export default App;
