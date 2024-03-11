import PageTemplate from "./PageTemplate";

export default {
  title: "Features/Dashboard/Design",
  component: PageTemplate,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <PageTemplate />;

export const Design = {
  args: {
    classes: "",
  },
};
