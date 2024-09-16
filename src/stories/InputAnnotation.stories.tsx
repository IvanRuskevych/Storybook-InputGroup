import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { InputAnnotationProps } from "../shared/types";
import { InputAnnotation } from "../shared/ui";
import { darkTheme, lightTheme } from "../shared/styles";

const meta: Meta = {
  title: "Components/InputAnnotation",
  component: InputAnnotation,
  argTypes: {
    text: { control: "text" },
    textOptions: { control: "radio", options: ["description", "error"] },
    theme: { control: "radio", options: ["light", "dark"] },
  },
};

export default meta;

const Template: StoryFn<InputAnnotationProps & { theme: "light" | "dark" }> = (
  args,
) => {
  const selectedTheme = args.theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <InputAnnotation {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "This is a hint text to help user.",
  textOptions: "description",
  theme: "light",
};
