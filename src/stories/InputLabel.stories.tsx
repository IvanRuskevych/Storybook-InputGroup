import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { InputLabelProps } from "../shared/types";
import { InputLabel } from "../shared/ui";
import { darkTheme, lightTheme } from "../shared/styles";

const meta: Meta = {
  title: "Components/InputLabel",
  component: InputLabel,
  argTypes: {
    theme: { control: "radio", options: ["light", "dark"] },
    label: { control: "text" },
    required: { control: "boolean" },
    infoIcon: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<InputLabelProps & { theme: "light" | "dark" }> = (
  args,
) => {
  const selectedTheme = args.theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <InputLabel {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: "light",
  label: "Email",
  required: true,
  infoIcon: true,
};
