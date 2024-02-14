import MudIconButton from "./MudIconButton";
import IconDrawer from "../Icons/Drawer";
import MudButton from "./MudButton";

export default {
  title: "Design System/Components/MudBlazor/Mud Buttons",
  component: MudIconButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

// const Template = (args) => (

// );

export const IconButton = {
  args: {
    classes:
      "mud-button-root mud-icon-button mud-inherit-text hover:mud-inherit-hover mud-ripple mud-ripple-icon ml-3",
  },
  render: (args) => (
    <MudIconButton {...args}>
      <IconDrawer classes="mud-icon-button-label" />
    </MudIconButton>
  ),
};

export const Primary = {
  args: {
    variant: "primary",
  },
  render: (args) => <MudButton {...args}>Click me</MudButton>,
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
  render: (args) => <MudButton {...args}>Click me</MudButton>,
};

export const Outlined = {
  args: {
    variant: "outlined",
  },
  render: (args) => <MudButton {...args}>Click me</MudButton>,
};
