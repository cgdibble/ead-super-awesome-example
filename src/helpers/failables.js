module.exports = function(handler) {
  return async function(...args) {
    try {
      const payload = await handler(...args);
      return {
        success: true,
        payload
      };
    } catch (error) {
      return {
        success: false,
        error
      };
    }
  };
};
