import { Meta, StoryFn } from "@storybook/react";
import { InputText, InputTextProps } from "../shared/ui";
import { darkTheme, lightTheme } from "../shared/styles";
import { ThemeProvider } from "styled-components";
import { fn } from "@storybook/test";

const meta: Meta = {
  title: "Components/InputText",
  component: InputText,
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    isInvisibleBorder: { control: "boolean" },
    isError: { control: "boolean" },
    size: { control: "radio", options: ["xs", "sm", "lg", "xl"] },
  },
  args: { onChange: fn() },
};

export default meta;

const Template: StoryFn<InputTextProps & { theme: "light" | "dark" }> = (
  args,
) => {
  const selectedTheme = args.theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <InputText {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "",
  isInvisibleBorder: false,
  isError: false,
  size: "sm",
  theme: "light",
};
