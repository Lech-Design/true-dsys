import DownloadReport from "./DownloadReport";
import MudContainer from "../Layout/MudContainer";

export default {
  title: "Patterns/Action Panel/Examples/Reporting Tool",
  component: DownloadReport,

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

export const Design = {
  args: {
    classes: "tr-docs--min-width",
    drawerClasses: "",
    open: true,
  },
  render: (args) => (
    <MudContainer classes={args.classes}>
      <DownloadReport {...args} />
    </MudContainer>
  ),
};
