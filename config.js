// It will use an environment variable (if available) and fallback to “localhost/nef”. Using this approach allows us to use one hostname for local development and another hostname for production without updating any code, and it is especially useful when dealing with OAuth client keys and client secrets.

module.exports = {
  database: process.env.MONGO_URI || 'localhost/nef'
};
