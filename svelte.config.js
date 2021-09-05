const { windi } = require("svelte-windicss-preprocess");

module.exports = {
  preprocess: [
    windi({
      configPath: "windi.config.js",
    }),
  ],
};
