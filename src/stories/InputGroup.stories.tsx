import { Meta, StoryFn } from "@storybook/react";
import { InputGroup } from "../shared/ui";
import { InputGroupProps, ThemeTypes } from "../shared/types";
import { darkTheme, lightTheme } from "../shared/styles";
import { ThemeProvider } from "styled-components";

const meta: Meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  argTypes: {
    theme: { control: "radio", options: ["light", "dark"] },
    inputLabelProps: { control: "object" },
    inputTextProps: { control: "object" },
    inputAnnotationProps: { control: "object" },
  },
};

export default meta;

const Template: StoryFn<InputGroupProps & { theme: ThemeTypes }> = (args) => {
  const selectedTheme = args.theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <InputGroup {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: "light",
  inputLabelProps: {
    htmlFor: "email",
    label: "Email",
    required: true,
    infoIcon: true,
  },
  inputTextProps: {
    id: "email",
    placeholder: "Enter your email...",
    isInvisibleBorder: false,
    isError: false,
    size: "sm",
  },
  inputAnnotationProps: {
    text: "Example: email@test.com",
    textError: "Please enter correct email address.",
    isError: false,
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  theme: "light",
  inputLabelProps: {
    htmlFor: "email",
    label: "Email",
    required: true,
    infoIcon: true,
  },
  inputTextProps: {
    id: "email",
    placeholder: "Enter your email...",
    isInvisibleBorder: false,
    isError: true,
    size: "sm",
  },
  inputAnnotationProps: {
    text: "Example: email@test.com",
    textError: "Please enter correct email address.",
    isError: true,
  },
};
