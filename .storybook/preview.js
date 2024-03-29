import { SyntaxHighlighter } from "@storybook/components/dist";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";

SyntaxHighlighter.registerLanguage("csharp", csharp);

/** @type { import('@storybook/react').Preview } */

import "../src/styles/docs/theme-tokens-docs.css";
import "../src/styles/MudBlazor.css";
import "../src/styles/docs/Documentation.css";
import "../src/styles/themes/global-tokens.css";
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
      order: [
        "Start Here",
        "Tokens",
        "Components",
        "Patterns",
        ["Docs", "*"],
        "Features",
        "Assets",
      ],
    },

    // Uses static folder config, see main.js
    stylesheetToggle: {
      OEM_2023: "/themes/global-tokens.css",
      OEM_2024: "/testing/global-tokens_theme2.css",
    },
  },
};

export default preview;
