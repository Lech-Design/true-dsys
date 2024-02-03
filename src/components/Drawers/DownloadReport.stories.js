import DownloadReport from "./DownloadReport";
import MudContainer from "../Layout/MudContainer";

export default {
  title: "Design System / Patterns/Features/Download Report",
  component: DownloadReport,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const ReportingTool = {
  args: {
    classes: "tr-docs--min-height",
    drawerClasses: "tr-tool-drawer--min-width",
  },
  render: (args) => (
    <MudContainer classes={args.classes}>
      <DownloadReport classes={args.drawerClasses} />
    </MudContainer>
  ),
};
