import MudSelect from "./MudSelect";
import MudTypography from "../MudTypography/MudTypography";

export default {
  title: "Design System/Components/MudBlazor/Mud Input",
  component: MudSelect,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SelectDefault = {
  args: {
    classes: "pb-4",
    label: "Meter type",
    helper: "Please select an item",
    items: ["Power", "Gas"],
    variant: "text", // "text", "outlined" , "filled"
  },
  render: (args) => <MudSelect {...args} />,
};

export const SelectOutlined = {
  args: {
    classes: "pb-4",
    label: "Meter type",
    helper: "Please select an item",
    items: ["Power", "Gas"],
    variant: "outlined", // "text", "outlined" , "filled"
  },
  render: (args) => <MudSelect {...args} />,
};

export const SelectFilled = {
  args: {
    classes: "pb-4",
    label: "Meter type",
    helper: "Please select an item",
    items: ["Power", "Gas"],
    variant: "filled", // "text", "outlined" , "filled"
  },
  render: (args) => <MudSelect {...args} />,
};
