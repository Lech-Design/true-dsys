import MudTabs from "./MudTabs";
import MudTypography from "../MudTypography/MudTypography";

export default {
  title: "Design System/Components/MudBlazor/Mud Tabs",
  component: MudTabs,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const Default = {
  args: {
    classes: "",
    items: ["Tab1", "Tab2", "Tab3", "Tab4"],
  },
  render: (args) => (
    <MudTabs {...args}>
      <MudTypography typo="h3">Page 1</MudTypography>
      <MudTypography typo="h3">Page 2</MudTypography>
      <MudTypography typo="h3">Tab 3</MudTypography>
      <MudTypography typo="h3">Tab 4</MudTypography>
    </MudTabs>
  ),
};

export const Elevated = {
  args: {
    classes: "",
    elevation: 1,
    items: ["Tab1", "Tab2", "Tab3", "Tab4"],
  },
  render: (args) => (
    <MudTabs {...args}>
      <MudTypography typo="h3">Page 1</MudTypography>
      <MudTypography typo="h3">Page 2</MudTypography>
      <MudTypography typo="h3">Tab 3</MudTypography>
      <MudTypography typo="h3">Tab 4</MudTypography>
    </MudTabs>
  ),
};

export const Rounded = {
  args: {
    classes: "",
    rounded: true,
    elevation: 2,
    items: ["Tab1", "Tab2", "Tab3", "Tab4"],
  },
  render: (args) => (
    <MudTabs {...args}>
      <MudTypography typo="h3">Page 1</MudTypography>
      <MudTypography typo="h3">Page 2</MudTypography>
      <MudTypography typo="h3">Tab 3</MudTypography>
      <MudTypography typo="h3">Tab 4</MudTypography>
    </MudTabs>
  ),
};
