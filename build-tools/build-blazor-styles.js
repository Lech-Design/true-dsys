const fs = require("fs");

const baseTokenHash = {};
const themeTokens = [];

function ReadFolder() {
  const fileList = fs.readdirSync("./src/styles/themes", { encoding: "utf8" });
  for (let i = 0; i < fileList.length; i++) {
    let file = fs.readFileSync(`./src/styles/themes/${fileList[i]}`, "utf8");
    file = file.replace(":root {", "").replace("}", "").replace(/\s+/g, "");
    let tokenList = baseTokenHash;
    file = Array.from(new Set(file.split(";")));
    for (let t = 0; t < file.length; t++) {
      console.log(file[t]);
      let props = Array.from(new Set(file[t].split(":")));
      if (i < 1) {
        baseTokenHash[props[0]] = props[1];
      } else if (/.*var.*/.test(props[1])) {
        // console.log(props[1]);
        themeTokens.push(
          baseTokenHash[props[1].replace("var(", "").replace(")", "")]
        );
      } else {
        themeTokens.push(props[1]);
      }
    }

    // console.log(themeTokens);
    MudBlazorTemplate(themeTokens);
  }
}

ReadFolder();

function MudBlazorTemplate(tokens) {
  const theme = `Palette = new Palette() {
    Primary = ${tokens[0]},
    Secondary = ${tokens[1]},
    Tertiary = ${tokens[2]},
    Background = ${tokens[3]},
    AppbarBackground = ${tokens[4]},
    DrawerBackground = ${tokens[5]},
    DrawerText = ${tokens[6]},
    Success = ${tokens[7]},
    Dark = ${tokens[8]},
    Error = ${tokens[9]},
    Info = ${tokens[10]},
    Warning = ${tokens[11]},
    TextPrimary = ${tokens[12]},
};

LayoutProperties = new LayoutProperties() {
    DefaultBorderRadius = ${tokens[13]},
};

Typography = new Typography() {
    Default = new Default() {
        FontFamily = new[] { ${tokens[14]} },
        FontSize = ${tokens[15]},
        FontWeight = ${tokens[16]},
        LineHeight = ${tokens[17]},
        LetterSpacing = ${tokens[18]},
    },
    H1 = new H1() {
        FontFamily = new[] { ${tokens[19]} },
        FontSize = ${tokens[20]},
        FontWeight = 300,
        LineHeight = 1.167,
        LetterSpacing = "-.01562em"
    },
    H2 = new H2() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = "2.5rem",
        FontWeight = 300,
        LineHeight = 1.2,
        LetterSpacing = "-.00833em"
    },
    H3 = new H3() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = "2.25rem",
        FontWeight = 400,
        LineHeight = 1.167,
        LetterSpacing = "0"
    },
    H4 = new H4() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = "2.0rem",
        FontWeight = 400,
        LineHeight = 1.235,
        LetterSpacing = ".00735em"
    },
    H5 = new H5() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = "1.5rem",
        FontWeight = 400,
        LineHeight = 1.334,
        LetterSpacing = "0"
    },
    H6 = new H6() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = "1.25rem",
        FontWeight = 400,
        LineHeight = 1.6,
        LetterSpacing = ".0075em"
    },
    Button = new Button() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = ".875rem",
        FontWeight = 500,
        LineHeight = 1.75,
        LetterSpacing = ".02857em"
    },
    Body1 = new Body1() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = "1rem",
        FontWeight = 400,
        LineHeight = 1.5,
        LetterSpacing = ".00938em"
    },
    Body2 = new Body2() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = ".875rem",
        FontWeight = 400,
        LineHeight = 1.43,
        LetterSpacing = ".01071em"
    },
    Caption = new Caption() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = ".75rem",
        FontWeight = 400,
        LineHeight = 1.66,
        LetterSpacing = ".03333em"
    },
    Subtitle2 = new Subtitle2() {
        FontFamily = new[] { "Verdana", "Helvetica", "Arial", "sans-serif" },
        FontSize = ".875rem",
        FontWeight = 500,
        LineHeight = 1.57,
        LetterSpacing = ".00714em"
    }
};
`;
  console.log(theme);
}
