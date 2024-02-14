/** @type { import('@storybook/react').Preview } */

import "../src/styles/docs/theme-tokens-docs.css";
import "../src/styles/MudBlazor.css";
import "../src/styles/docs/Documenatation.css";
import "../src/styles/style.css";
import "../src/styles/Site.css";
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
      method: "alphabetical",
      order: [
        "Start Here/Docs",
        ["Readme", "*"],
        "Design System",
        "Tokens",
        "Components",
        "Patterns",
        "Features",
        ["Readme", "*"],
      ],
    },

    // Uses static folder config, see main.js
    stylesheetToggle: {
      OEM_2023: "/themes/global-tokens.css",
      OEM_2024: "/themes/global-tokens_theme2.css",
    },
    designToken: {
      disable: true,
    },
  },
};

export default preview;
