module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ["import-graphql"],
    presets: ["babel-preset-expo"],
  };
};
