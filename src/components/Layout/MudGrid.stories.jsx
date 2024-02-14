import MudGrid from "./MudGrid";
import MudItem from "./MudItem";
import DummyBlock from "../DummyContent/DummyBlock";
import MudTypography from "../MudTypography/MudTypography";

export default {
  title: "Design System/Components/MudBlazor/Mud Grid/Grid",
  component: MudGrid,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const Default = {
  args: {
    classes: "gap-0",
  },
  parameters: {
    docs: {
      description: {
        story: "Default Grid class, wrapping is enabled by default.",
      },
    },
  },
  render: (args) => (
    <MudGrid {...args}>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
    </MudGrid>
  ),
};

export const WithGap = {
  args: {
    classes: "gap-8",
  },
  parameters: {
    docs: {
      description: {
        story: "Uses utility class to set the flex gap.",
      },
    },
  },
  render: (args) => (
    <MudGrid {...args}>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
    </MudGrid>
  ),
};

export const Column = {
  args: {
    classes: "flex-column",
  },
  render: (args) => (
    <MudGrid {...args}>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
      <MudItem classes="tr-docs-background-grey">
        <DummyBlock>Content</DummyBlock>
      </MudItem>
    </MudGrid>
  ),
};
