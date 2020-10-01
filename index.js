module.exports = (serverlessHandler, { log = true }) => {
  return (event, context, callback) => {
    if (log) console.log("request: " + JSON.stringify(event));
    serverlessHandler(event, context)
      .then(res => callback(null, res))
      .catch(e => callback(e || 'Unknown error.'));
  }
};