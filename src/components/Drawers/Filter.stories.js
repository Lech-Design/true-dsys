import FilterDrawer from "./Filter";
import MudContainer from "../Layout/MudContainer";

export default {
  title: "Design System / Patterns/Features/Filter",
  component: FilterDrawer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const BillValidation = {
  args: {
    classes: "tr-docs--min-height",
    drawerClasses: "tr-tool-drawer--min-width",
    results: 847,
  },
  render: (args) => (
    <MudContainer classes={args.classes}>
      <FilterDrawer classes={args.drawerClasses} results={args.results} />
    </MudContainer>
  ),
};
