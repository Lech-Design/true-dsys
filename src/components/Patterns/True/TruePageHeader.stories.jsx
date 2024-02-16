import TruePageHeader from "./TruePageHeader";
import MudGrid from "@/components/Layout/MudGrid";
import MudItem from "@/components/Layout/MudItem";
import MudTypography from "@/components/MudTypography/MudTypography";
import MudButton from "@/components/Button/MudButton";
import IconDownload from "@/components/Icons/Download";

export default {
  title: "patterns/Page Header",
  component: TruePageHeader,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
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
    title: "Emissions",
    description:
      "Enter and track your Scope 1, 2, and 3 emissions annually. Set your baseline year and monitor your progress over time.",
  },
  render: (args) => (
    <MudItem classes="mud-grid-item-xs-12 pb-12">
      <MudGrid classes="justify-space-between pb-4 gap-3">
        <MudTypography
          typo="h5"
          classes="mud-grid-item-xs-12 mud-grid-item-sm-6"
        >
          {args.title}
        </MudTypography>
        <MudItem classes="">
          <MudGrid classes="justify-end gap-4">
            <MudButton variant="outlined" size="small">
              + Add emissions
            </MudButton>
          </MudGrid>
        </MudItem>
      </MudGrid>
      <MudTypography typo="body2">{args.description}</MudTypography>
    </MudItem>
  ),
};

export const WithoutInteraction = {
  args: {
    title: "Emissions",
    description:
      "Enter and track your Scope 1, 2, and 3 emissions annually. Set your baseline year and monitor your progress over time.",
  },
};

export const ForBillValidation = {
  args: {
    title: "Bill Validation",
    description:
      "Enter and track your Scope 1, 2, and 3 emissions annually. Set your baseline year and monitor your progress over time.",
  },
  render: (args) => (
    <MudItem classes="mud-grid-item-xs-12 pb-12">
      <MudGrid classes="justify-space-between pb-4 gap-3">
        <MudTypography
          typo="h5"
          classes="mud-grid-item-xs-12 mud-grid-item-sm-6"
        >
          {args.title}
        </MudTypography>
        <MudItem classes="">
          <MudGrid classes="justify-end gap-4">
            <MudButton variant="outlined" size="small" icon={IconDownload}>
              Download report
            </MudButton>
          </MudGrid>
        </MudItem>
      </MudGrid>
      <MudTypography typo="body2">{args.description}</MudTypography>
    </MudItem>
  ),
};
