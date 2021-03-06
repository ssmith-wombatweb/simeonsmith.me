const flush = require('styled-jsx/server').default;

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    const css = flush();
    setHeadComponents([css]);
  }
};
