const path = require('path');

export default (appInfo) => {
  return {
    keys: `${appInfo.name}_4033365`,
    middleware: [],
    logger: {
      dir: path.join(appInfo.root, 'logs'),
    },
    security: {
      csrf: {
        enable: false,
      },
    }
  };
};
