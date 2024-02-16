import BillValidation from "./BillValidation";
import PageTemplateOld from "../../Pages/2023/PageTemplate2023";

export default {
  title: "Features/Bill Validation",
  component: BillValidation,

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <BillValidation {...args} />;

export const Design = {
  args: {
    classes: "",
  },
  render: (args) => (
    <PageTemplateOld>
      <BillValidation {...args} />
    </PageTemplateOld>
  ),
};
