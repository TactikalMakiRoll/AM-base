module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/../public/_variables-night.scss";
          `
        }
      }
    }
  };