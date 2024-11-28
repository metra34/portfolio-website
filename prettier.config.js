/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  trailingComma: "none",
  indent_style: "tab",
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.jsx, *.tsx",
      options: {},
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
