import TrueDrawerHeader from "./TrueDrawerHeader";

export default {
  title: "Components/Decorators/Drawer Header",
  component: TrueDrawerHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <TrueDrawerHeader {...args} />;

export const DrawerHeader = {
  args: {},
};
