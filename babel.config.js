module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          alias: {
            "@routes": "./src/routes",
            "@config": "./src/config",
            "@core": "./src/core",
            "@layout": "./src/layout",
          },
        },
      ],
    ],
  };
};
