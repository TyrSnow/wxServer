export default (appInfo) => {
  return {
    keys: `${appInfo.name}_4033365`,
    middleware: [],
    security: {
      csrf: {
        enable: false,
      },
    }
  };
};
