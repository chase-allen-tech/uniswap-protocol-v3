module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: false,
    stream: false,
  };
  return config;
};