module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer")({
      overrideBrowserslist: [
        "last 4 version",
        "ie >= 11",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 7",
        "opera >= 23",
        "ios >= 7",
        "android >= 4.4",
        "bb >= 10",
      ],
      flexbox: "no-2009",
      grid: "autoplace",
    }),
    require("postcss-flexbugs-fixes"),
    require("precss"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("cssnano")({
      preset: "default",
    }),
    require("postcss-custom-properties"),
  ],
};
