process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const baseConfig = {
  port: 3000,
  secrets: {},
  db: {
    url: 'mongodb://localhost/jams'
  }
}

let envConfig = {}

switch (env) {
  case 'development':
  case 'dev':
    envConfig = require('./dev').config
    break;
  case 'testing':
  case 'test':
    envConfig = require('./test').config
    break;
  case 'production':
  case 'prod':
    envConfig = require('./prod').config
    break;

  default:

}
