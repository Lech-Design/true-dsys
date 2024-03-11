import TrueWidget from "./DashboardWidget";

export default {
  title: "Features/Dashboard/Shared Components/Widget/Design",
  component: TrueWidget,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  decorators: [
    (Story) => (
      <div style={{ margin: "2rem" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <TrueWidget />;

export const Design = {
  args: {
    classes: "",
  },
};
