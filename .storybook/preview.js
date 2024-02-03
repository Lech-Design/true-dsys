/** @type { import('@storybook/react').Preview } */
import "../src/styles/MudBlazor.css";
import "../src/styles/style.css";
import "../src/styles/Site.css";
import "../src/styles/themes/global-tokens.css";
import "../src/styles/themes/theme-tokens.css";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    storySort: {
      order: ["Start here", "Design System"],
    },
  },
};

export default preview;
