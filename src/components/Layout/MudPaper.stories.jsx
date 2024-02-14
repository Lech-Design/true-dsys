import MudPaper from "./MudPaper";
import MudContainer from "./MudContainer";
import MudGrid from "./MudGrid";
import MudItem from "./MudItem";

export default {
  title: "Design System/Components/MudBlazor/MudPaper",
  component: MudPaper,
  decorators: [
    (Story) => (
      <div style={{ margin: "3rem" }}>
        <MudContainer classes="mud-container-maxwidth-lg">
          <MudGrid>
            <MudItem classes="mud-grid-item-xs-12">
              {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
              <Story />
            </MudItem>
          </MudGrid>
        </MudContainer>
      </div>
    ),
  ],

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "center",
  },
};

export const Default = {
  args: {
    outlined: false,
    square: false,
    elevation: 1,
  },
  render: (args) => (
    <MudPaper {...args}>
      <div className="tr-docs--dummy-paper" />
    </MudPaper>
  ),
};

export const Outlined = {
  args: {
    outlined: true,
    square: false,
    elevation: 0,
  },
  render: (args) => (
    <MudPaper {...args}>
      <div className="tr-docs--dummy-paper" />
    </MudPaper>
  ),
};

export const Square = {
  args: {
    outlined: true,
    square: true,
    elevation: 0,
  },
  render: (args) => (
    <MudPaper {...args}>
      <div className="tr-docs--dummy-paper" />
    </MudPaper>
  ),
};
