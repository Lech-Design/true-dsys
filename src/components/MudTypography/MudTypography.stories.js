import MudTypography from "./MudTypography";

export default {
  title: "Design System / Components/MudBlazor/Typography",
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

export const Default = {
  args: {
    classes: "",
    typo: "h1",
  },
  render: (args) => <MudTypography {...args}>Text label short</MudTypography>,
};
