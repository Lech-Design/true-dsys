import FilterDrawer from "./Filter";
import MudContainer from "../Layout/MudContainer";

export default {
  title: "Design System/Patterns/Action Panel/Examples/Filter",
  component: FilterDrawer,
  decorators: [
    (Story) => (
      <div style={{ minHeight: "500px" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const FilterBills = {
  args: {
    classes: "tr-docs--min-width",
    results: 847,
    open: true,
  },
  render: (args) => (
    <MudContainer classes={args.classes}>
      <FilterDrawer {...args} />
    </MudContainer>
  ),
};
