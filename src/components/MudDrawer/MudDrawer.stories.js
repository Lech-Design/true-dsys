import MudDraw from "./MudDrawer";

import MudDrawerContent from "./MudDrawerContent";

export default {
  title: "Components/MudBlazor/MudDrawer",
  component: MudDraw,
  decorators: [
    (Story) => (
      <div style={{ minWidth: "360px" }}>
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

export const MudDrawer = {
  args: { open: true, classes: "tr-docs--min-width tr-docs--min-height-100" },
  render: (args) => (
    <MudDraw {...args}>
      <MudDrawerContent></MudDrawerContent>
    </MudDraw>
  ),
};
