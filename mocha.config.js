// Bootstrap babel-register
require('./babel.server')

// Ensure correct NODE_ENV
if (process.env.NODE_ENV !== 'test') {
  throw new Error('Running tests require NODE_ENV=test')
}

// Set up chai and sinon
const chai  = require('chai')
const sinon = require('sinon')

chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))
chai.use(require('chai-enzyme')())

global.expect = chai.expect
global.sinon  = sinon

// Set up jsdom
const jsdom = require('jsdom')

const document = jsdom.jsdom()

global.document  = document
global.window    = document.defaultView
global.navigator = { userAgent: 'node.js' }

// Load tests
const glob = require('glob')
glob.sync('./@(server|src)/**/*.spec.js').forEach(require)
