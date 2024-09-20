import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeProvider } from "styled-components";

import { InputTextProps, ThemeTypes } from "../shared/types";
import { darkTheme, lightTheme } from "../shared/styles";
import { InputText } from "../shared/ui";

const meta: Meta = {
  title: "Components/InputText",
  component: InputText,
  argTypes: {
    theme: { control: "radio", options: ["light", "dark"] },
    position: { control: "radio", options: ["top", "side"] },
    value: { control: "text" },
    placeholder: { control: "text" },
    inputSize: { control: "radio", options: ["xs", "sm", "lg", "xl"] },
    isInvisibleBorder: { control: "boolean" },
    isIconSearch: { control: "boolean" },
    isIconHelp: { control: "boolean" },
    isIconShortkey: { control: "boolean" },
    isTextRightSide: { control: "boolean" },
    isError: { control: "boolean" },
  },
  args: { onChange: fn() },
};

export default meta;

const Template: StoryFn<InputTextProps & { theme: ThemeTypes }> = (args) => {
  const selectedTheme = args.theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <InputText {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: "light",
  position: "top",
  value: "",
  placeholder: "Input...",
  inputSize: "sm",
  isInvisibleBorder: false,
  isIconSearch: true,
  isIconHelp: true,
  isIconShortkey: true,
  isTextRightSide: false,
  isError: false,
};
