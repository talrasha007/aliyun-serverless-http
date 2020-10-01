module.exports = (serverlessHandler, { log = true } = {}) => {
  return (event, context, callback) => {
    if (Buffer.isBuffer(event)) event = JSON.parse(event.toString());
    event.queryStringParameters = event.queryParameters;

    if (log) console.log("request: " + JSON.stringify(event));
    serverlessHandler(event, context)
      .then(res => callback(null, res))
      .catch(e => callback(e || 'Unknown error.'));
  }
};