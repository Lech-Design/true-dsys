import TrueLayoutPrimary from "./TrueLayoutPrimary";
import { Unstyled } from "@storybook/addon-docs";

export default {
  title: "Patterns/Layout & Pages/Layout/Primary/Design",
  component: TrueLayoutPrimary,
  decorators: [
    (Story) => (
      <div style={{ minWidth: "360px" }}>
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

export const Design = {
  args: { open: true, classes: "" },
  render: (args) => (
    <Unstyled>
      <TrueLayoutPrimary />
    </Unstyled>
  ),
};
