import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { InputGroup } from "../shared/ui";
import { InputGroupProps, ThemeTypes } from "../shared/types";
import { darkTheme, lightTheme } from "../shared/styles";

const meta: Meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  argTypes: {
    theme: { control: "radio", options: ["light", "dark"] },
    position: { control: "radio", options: ["top", "side"] },
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
  position: "top",
  inputLabelProps: {
    htmlFor: "email",
    label: "Email",
    required: true,
    isInfoIcon: true,
    textTooltip: "This is a tooltip",
  },
  inputTextProps: {
    id: "email",
    value: "",
    placeholder: "Input...",
    inputSize: "sm",
    isInvisibleBorder: false,
    isIconSearch: true,
    isIconHelp: true,
    isIconShortkey: true,
    isTextRightSide: false,
    isError: false,
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
  position: "top",
  inputLabelProps: {
    htmlFor: "email",
    label: "Email",
    required: true,
    isInfoIcon: true,
  },
  inputTextProps: {
    id: "email",
    value: "",
    placeholder: "Input...",
    inputSize: "sm",
    isInvisibleBorder: false,
    isIconSearch: true,
    isIconHelp: true,
    isIconShortkey: true,
    isTextRightSide: false,
    isError: true,
  },
  inputAnnotationProps: {
    text: "Example: email@test.com",
    textError: "Please enter correct email address.",
    isError: true,
  },
};
