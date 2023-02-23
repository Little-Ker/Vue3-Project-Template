const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/assets/sass/variable.sass"
          @import "~@/assets/sass/main.sass"
          @import "~@/assets/sass/reset.sass"
          @import "~@/assets/sass/icon.sass"
        `,
      },
    },
  },
});
