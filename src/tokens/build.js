import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  source: ["src/tokens/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/tokens",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
  },
});

sd.buildAllPlatforms();
console.log("Token build successfully");
