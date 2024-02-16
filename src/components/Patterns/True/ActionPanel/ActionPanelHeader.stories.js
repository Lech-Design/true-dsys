import DownloadReport from "../../../Drawers/DownloadReport";
import MudContainer from "../../../Layout/MudContainer";
import ActionPanelHeader from "./ActionPanelHeader";

export default {
  title: "Patterns/Action Panel/Header",
  component: ActionPanelHeader,

  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "20px",
          width: "350px",
          backgroundColor: "#fff",
          margin: "3em",
          marginLeft: "auto",
        }}
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "center",
  },
};

export const Header = {
  args: {
    // classes: "tr-docs--min-width",

    title: "Download report",
  },
  // render: (args) => (
  //   <MudContainer classes={args.classes}>
  //     <DownloadReport {...args} />
  //   </MudContainer>
  // ),
};
