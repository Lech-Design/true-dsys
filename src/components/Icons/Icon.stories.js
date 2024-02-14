import IconDrawer from "./Drawer";

export default {
  title: "Assets/SVG icons",
  component: IconDrawer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <IconDrawer {...args} />;

export const IconList = {
  args: {
    classes: "mud-icon-button-label",
  },
};
