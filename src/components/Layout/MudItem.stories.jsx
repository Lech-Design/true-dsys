import MudItem from "./MudItem";
import DummyBlock from "../DummyContent/DummyBlock";
import MudTypography from "../MudText/MudTypography";

export default {
  title: "Components/MudBlazor/Mud Grid/Mud Item",
  component: MudItem,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const Default = {
  args: {
    classes: "tr-docs-background-grey",
  },
  render: (args) => (
    <MudItem {...args}>
      <DummyBlock>Content</DummyBlock>
    </MudItem>
  ),
};

export const Padding4 = {
  args: {
    classes: "tr-docs-background-grey pa-4",
  },
  render: (args) => (
    <MudItem {...args}>
      <DummyBlock>Content</DummyBlock>
    </MudItem>
  ),
};

export const Padding4Horizontal = {
  args: {
    classes: "tr-docs-background-grey pl-6 pr-6",
  },
  render: (args) => (
    <MudItem {...args}>
      <DummyBlock>Content</DummyBlock>
    </MudItem>
  ),
};

export const Padding6 = {
  args: {
    classes: "tr-docs-background-grey pa-6",
  },
  render: (args) => (
    <MudItem {...args}>
      <DummyBlock>Content</DummyBlock>
    </MudItem>
  ),
};

export const Padding6Horizontal = {
  args: {
    classes: "tr-docs-background-grey pl-6 pr-6",
  },
  render: (args) => (
    <MudItem {...args}>
      <DummyBlock>Content</DummyBlock>
    </MudItem>
  ),
};
