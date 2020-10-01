module.exports = serverlessHandler => {
  return (event, context, callback) => {
    serverlessHandler(event, context)
      .then(res => callback(null, res))
      .catch(e => callback(e || 'Unknown error.'));
  }
};