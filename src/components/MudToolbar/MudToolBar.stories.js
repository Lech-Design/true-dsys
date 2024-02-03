import MudToolBar from "./MudToolBar";

export default {
  title: "Design System / Components/MudBlazor/MudToolBar",
  component: MudToolBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <MudToolBar {...args} />;

export const ToolBar = {
  args: {
    classes: "mud-toolbar",
  },
};
