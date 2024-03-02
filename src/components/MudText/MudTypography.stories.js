import MudTypography from "./MudTypography";

export default {
  title: "Components/MudBlazor/MudTypography",
  component: MudTypography,
  argTypes: {
    typo: {
      options: [
        "h1",
        "h2",
        "h3",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
      ],
      control: { type: "select" },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <MudTypography {...args} />;

export const Heading1 = {
  args: {
    classes: "",
    typo: "h1",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Heading2 = {
  args: {
    classes: "",
    typo: "h2",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Heading3 = {
  args: {
    classes: "",
    typo: "h3",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Heading4 = {
  args: {
    classes: "",
    typo: "h4",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Heading5 = {
  args: {
    classes: "",
    typo: "h5",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Heading6 = {
  args: {
    classes: "",
    typo: "h6",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Subtitle1 = {
  args: {
    classes: "",
    typo: "subtitle1",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Subtitle2 = {
  args: {
    classes: "",
    typo: "subtitle2",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Body1 = {
  args: {
    classes: "",
    typo: "body1",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Body2 = {
  args: {
    classes: "",
    typo: "body2",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};

export const Caption = {
  args: {
    classes: "",
    typo: "caption",
  },
  render: (args) => <MudTypography {...args}>Net Zero strategy</MudTypography>,
};
